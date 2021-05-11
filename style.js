(function (blink) {
	'use strict';

	var companeros2021_demoStyle = function () {
		blink.theme.styles.basic.apply(this, arguments);
	},
	page = blink.currentPage;

	companeros2021_demoStyle.prototype = {
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_companeros2021_demo',
		ckEditorStyles: {
			name: 'companeros2021_demo',
			styles: [
				{ name: 'Título 1', element: 'h2', attributes: { 'class': 'bck-title1' } },
				{ name: 'Título 2', element: 'h2', attributes: { 'class': 'titulobase' } },
				{ name: 'Título 3', element: 'h3', attributes: { 'class': 'evaluacionsumativa' } },

				{ name: 'Énfasis 1', element: 'span', attributes: { 'class': 'bck-enfasis' } },
				{ name: 'Énfasis 2', element: 'span', attributes: { 'class': 'bck-enfasis-naranja' } },

				{ name: 'Lista Ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol-1' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista Ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol-5' } },

				{ name: 'Lista Desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul-1'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'autoevaluacion' } },
				{ name: 'Caja 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'coevaluacion' } },
				{ name: 'Caja 7', type: 'widget', widget: 'blink_box', attributes: { 'class': 'heteroevaluacion' } },
				{ name: 'Caja 8', type: 'widget', widget: 'blink_box', attributes: { 'class': 'laboratorio2' } },

				{ name: 'Desplegable 1', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown-1' } }
			],
			stylesToRemove: ['Título 2', 'Título 3', 'Título tema', 'Título azul', 'Título azul 2', 'Título azul química', 'Proyecto',
			'Proyecto 2', 'Evaluación', 'Lista Ordenada', 'Caja simple', 'Caja simple 2', 'Caja simple 3', 'Caja inicio', 'Caja blanca',
			'Caja proyecto', 'Caja marrón', 'Caja buen vivir', 'Caja saberes', 'Caja sabías que', 'Caja desequilibrio', 'Caja tic',
			'Caja valores', 'Caja indagación', 'Caja evaluación', 'Caja evaluación dos', 'Caja evaluación tres', 'Caja estrategia',
			'Caja diversidad', 'Caja Interdisciplinariedad', 'Caja laboratorio', 'Caja ejercicio resuelto', 'Caja seguridad', 'Caja Frases',
			'Caja glosario', 'Celda morada', 'Desplegable', 'Desplegable 2', 'icono ablink', 'icono ascorm', 'Lista Desordenada 3', 'Lista Desordenada 2']
		},
		slidesTitle: {},
		subunits: [],
		classNavBar: "companeros2021_demo-navbar",

		init: function () {
			this.parent.init.call(this.parent, this);
		},

		formatCarouselindicators: function () {
			this.parent.formatCarouselindicators.call(this.parent, this, this.classNavBar);
		},

		animateNavbarOnScroll: function () {
			this.parent.animateNavbarOnScroll.call(this.parent, this, this.classNavBar);
		},

        changeHighBar: function () {
            this.parent.changeHighBar.call(this.parent, this, this.classNavBar);
		}
	};

	companeros2021_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), companeros2021_demoStyle.prototype);
	blink.theme.styles['companeros2021_demo'] = companeros2021_demoStyle;

})( blink );
