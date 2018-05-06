import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import $ from 'jquery';

export default Controller.extend({

  feedback: service(),

  searchValue: null,
  isSearching: false,

  actions: {

    clearSearch() {
      /**
       * @desc Limpa os resultados
       */
      this.set('searchResults', []);
      this.set('searchValue', null);
    },

    searchBooks() {

      /**
       * @desc Aqui eu "seto" a propriedade para dar o efeito de loading no botão e deixá-ço disabled
       */
      this.set('isSearching', true);

      /**
       * @desc Ajax para a API
       */
      $.ajax({
        type: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn+${this.get('searchValue')}&maxResults=12`,

        headers: {
          'API_KEY': 'AIzaSyBqKp73iHowC9fz4lqKT6avFSbNtdYSaK8'
        }
      })
        .then(books =>  {
          /**
           * @desc No ember é necessário usar o método run() quando precisamos ter acesso ao this em um callback ou promisse se não for de um EmberObject
           */
          run(() => {
            this.set('isSearching', false);
            this.set('searchResults', books.items);
          });

        })
        .catch((error) => {
          run(() => {
            this.set('isSearching', false);

            if (error.status) {

              this.get('feedback').throwFeedback('danger', error.responseJSON.error.message);
            } else {

              this.get('feedback').throwFeedback('danger', 'Erro na Conexão com a API do Google Books');
            }
          });
        });
    },

    saveBook(book) {
      /**
       * @desc    Aqui estou criando um novo record do model (tipo) "book" (models/book.js)
       * @example https://guides.emberjs.com/v3.1.0/models/#toc_models
       */
      let newBook = this.store.createRecord('book', {
        googleID: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors
      });

      /**
       * @desc Verifica se existe uma imagem disponível e "seta" ela.
       */
      if (book.volumeInfo.imageLinks) {
        newBook.set('thumbnail', book.volumeInfo.imageLinks.thumbnail);
      }

      /**
       * @desc Então salvo com o método save() que me devolve uma promisse.
       */
      newBook.save()
        .then(() => {
          this.get('feedback').throwFeedback('success', 'Livro salvo como clicado');
        })
        .catch(error => {
          if (error.status) {
            this.get('feedback').throwFeedback('danger', error.responseJSON.error.message);
          } else {
            this.get('feedback').throwFeedback('danger', 'Erro na Conexão com a API do Google Books');
          }
        });
    }
  }

});
