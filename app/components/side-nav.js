import Component from '@ember/component';
// import { run } from '@ember/runloop';

export default Component.extend({

  actions: {
    
    /**
     * @desc    A action do component chama a action passada a ele
     *          Estou seguindo um conceito muito usado no ember chamando de DDAU (Data Down Actions Up)
     * 
     * @example https://emberigniter.com/getting-started-ember-cli-data-down-actions-up-tutorial/
     */
    closeSideNav() {
      
      document.querySelector('.side-nav').classList.remove('is-active');      
      this.get('onCloseClick')();
    },
    
    /**
     * @desc Para chamar o helper que impede a propagação (helpers/disable-bubbling)
     */
    stopPropagation() {}
  }

});
