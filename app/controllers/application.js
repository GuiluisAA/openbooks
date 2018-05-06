import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  /**
   * @desc Service de feedback (services/feedback.js)
   */
  feedback: service(),

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
