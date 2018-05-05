import Controller from '@ember/controller';

export default Controller.extend({

  /**
   * @desc Propriedade que que define se há ou não a side nav
   */
  showSideNav: false,

  actions: {

    openSideNav() {
      this.set('showSideNav', true);
    },

    closeSideNav() {
      this.set('showSideNav', false);
    }
  }

});
