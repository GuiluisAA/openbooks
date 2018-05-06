import Route from '@ember/routing/route';

export default Route.extend({

  /**
   * @desc A model define os dados que são carregados em uma rota
   */
  model() {

    return this.store.findAll('book');
  }

});
