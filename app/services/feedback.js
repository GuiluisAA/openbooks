import Service from '@ember/service';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';

/**
 * @desc O service no ember um objeto que se mantem vivo em toda a aplicação enquando ela ainda está viva
 *       Pode ser chamada de qualquer parte da aplicação
 */
export default Service.extend({

	show: false,
	color: null,
	message: null,

	hidde: observer('show', function () {

		if (this.get('show') == true) {

			run.later(() => {
        /**
         * @desc Tira o feedback do DOM após 2 segundos
         */
        this._resetFeedback();
			}, 1500);
		}
  }),
  
  /**
   * @desc Método que vai ser chamado por quem consumir o service
   * @param {*} color ['succes', 'danger']
   * @param {*} message String
   */
	throwFeedback(color, message) {  

		this.set('show', true);
		this.set('color', color);
    this.set('message', message);
    
    run.later(() => {
      /**
       * @desc Tira a classe de "cor" para fazer a animação de subir
       */
      this.set('isActive', true);
    })
  },
  
  /**
   * @desc Reset as propriedades
   */
	_resetFeedback() {

    this.set('isActive', false);

    /**
     * @desc Espera a animação acabar para resetar as propriedades
     */
    this.set('show', false);
    this.set('color', null);
    this.set('message', null);

	}

});