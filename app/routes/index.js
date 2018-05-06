import Route from '@ember/routing/route';

export default Route.extend({

  /**
   * @desc    Parte do ciclo de vida da rota. Ela "seta" atributos da respectiva controller
   * @example https://www.emberjs.com/api/ember/3.1/classes/Route/methods/setupController?anchor=setupController
   */
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('searchResults', []);
    controller.set('searchValue', null);
  }

});
