import Component from '@ember/component';

export default Component.extend({
  
  classNames: ['header'],

  actions: {

    /**
     * @desc    A action do component chama a action passada a ele
     *          Estou seguindo um conceito muito usado no ember chamando de DDAU (Data Down Actions Up)
     * 
     * @example https://emberigniter.com/getting-started-ember-cli-data-down-actions-up-tutorial/
     */
    openSideNav() {

      this.get('onOpenClick')();
    }
  }

});
