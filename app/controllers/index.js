import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import $ from 'jquery';

export default Controller.extend({

  searchValue: null,
  isSearching: false,

  actions: {

    clearSearch() {
      /**
       * @desc Limpa os resultados
       */
      this.set('searchResults', []);
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
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn+${this.get('searchValue')}`,

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
        .catch(() => {
          run(() => {
            this.set('isSearching', false);
          });
        });
    },

    saveBook() {
      console.log('Save Book');
    }
  }

});
