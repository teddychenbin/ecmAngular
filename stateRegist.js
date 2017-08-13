define(['require'], function(require) {

	return function(stateProvider) {
		//arg0 template
		//arg1 id
		stateProvider
			.state('test', {
				url: '/test',
				template: function() {
					return '<div ng-include="' + "'test.html'" + '"></div>';
				},
				controller: 'testCtrl'
			}).state('load', {
				url: '/load',
				template: function() {
					return '<div ng-include="' + "'load.html'" + '"></div>';
				},
				controller: 'loadCtrl'
			}).state('error', {
				url: '/error/:template',
				template: function() {
					return '<div ng-include="' + "'error.html'" + '"></div>';
				},
				controller: 'errorCtrl'
			}).state('info', {
				url: '/info/:template/:message',
				template: function() {
					return '<div ng-include="' + "'info.html'" + '"></div>';
				},
				controller: 'errorCtrl'
			}).state('home', {
				url: '/home/:template',
				template: function() {
					return '<div ng-include="' + "'home.html'" + '"></div>';
				},
				controller: 'homeCtrl'
			}).state('article', {
				url: '/article/:template/:id',
				template: function() {
					return '<div ng-include="' + "'article.html'" + '"></div>';
				},
				controller: 'articleCtrl'
			}).state('mainitem', {
				url: '/mainitem/:template/:path/:mainitemno/:id',
				template: function() {
					return '<div ng-include="' + "'mainitem.html'" + '"></div>';
				},
				controller: 'mainitemCtrl'
			}).state('itemsearch', {
				url: '/itemsearch/:template',
				template: function() {
					return '<div ng-include="' + "'itemsearch.html'" + '"></div>';
				},
				controller: 'itemsearchCtrl'
			}).state('login', {
				url: '/login/:template',
				template: function() {
					return '<div ng-include="' + "'login.html'" + '"></div>';
				},
				controller: 'loginCtrl'
			}).state('regist', {
				url: '/regist/:template',
				template: function() {
					return '<div ng-include="' + "'regist.html'" + '"></div>';
				},
				controller: 'registCtrl'
			}).state('member', {
				url: '/member/:template',
				template: function() {
					return '<div ng-include="' + "'member.html'" + '"></div>';
				},
				controller: 'memberCtrl'
			}).state('order', {
				url: '/order/:template',
				template: function() {
					return '<div ng-include="' + "'order.html'" + '"></div>';
				},
				controller: 'orderCtrl'
			}).state('orderpay', {
				url: '/orderpay/:template',
				template: function() {
					return '<div ng-include="' + "'orderpay.html'" + '"></div>';
				},
				controller: 'orderpayCtrl'
			}).state('shoppingcart', {
				url: '/shoppingcart/:template',
				template: function() {
					return '<div ng-include="' + "'shoppingcart.html'" + '"></div>';
				},
				controller: 'shoppingcartCtrl'
			}).state('mkgpgm', {
				url: '/mkgpgm/:template/:id/:page',
				template: function() {
					return '<div ng-include="' + "'mkgpgm.html'" + '"></div>';
				},
				controller: 'mkgpgmCtrl'
			}).state('mkgpgmarticle', {
				url: '/mkgpgmarticle/:template/:path/:id',
				template: function() {
					return '<div ng-include="' + "'mkgpgmarticle.html'" + '"></div>';
				},
				controller: 'mkgpgmarticleCtrl'
			}).state('mkgdispgroup', {
				url: '/mkgdispgroup/:template/:id/:page',
				template: function() {
					return '<div ng-include="' + "'mkgdispgroup.html'" + '"></div>';
				},
				controller: 'mkgdispgroupCtrl'
			});

	};
});