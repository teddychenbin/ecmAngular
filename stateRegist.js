define(['require', './main'], function(require) {

	return function(stateProvider) {
		//arg0 template
		//arg1 id
		stateProvider
			.state('test', {
				url: '/test',
				templateUrl: '../../pages/test.html',
				controller: 'testCtrl'
			}).state('load', {
				url: '/load',
				templateUrl: '../../pages/load.html',
				controller: 'loadCtrl'
			}).state('error', {
				url: '/error/:template',
				templateUrl: '../../pages/error.html',
				controller: 'errorCtrl'
			}).state('home', {
				url: '/home/:template', 
				templateUrl: '../../pages/home.html',
				controller: 'homeCtrl'
			}).state('article', {
				url: '/article/:template/:id',
				templateUrl: '../../pages/article.html',
				controller: 'articleCtrl'
			}).state('mainitem', {
				url: '/mainitem/:template/:path/:mainitemno/:id',
				templateUrl: '../../pages/mainitem.html',
				controller: 'mainitemCtrl'
			}).state('itemsearch', {
				url: '/itemsearch/:template',
				templateUrl: '../../pages/itemsearch.html',
				controller: 'itemsearchCtrl'
			}).state('login', {
				url: '/login/:template',
				templateUrl: '../../pages/login.html',
				controller: 'loginCtrl'
			}).state('register', {
				url: '/register/:template',
				templateUrl: '../../pages/register.html',
				controller: 'registerCtrl'
			}).state('member', {
				url: '/member/:template',
				templateUrl: '../../pages/member.html',
				controller: 'memberCtrl'
			}).state('order', {
				url: '/order/:template',
				templateUrl: '../../pages/order.html',
				controller: 'orderCtrl'
			}).state('orderpay', {
				url: '/orderpay/:template',
				templateUrl: '../../pages/orderpay.html',
				controller: 'orderpayCtrl'
			}).state('shoppingcart', {
				url: '/shoppingcart/:template',
				templateUrl: '../../pages/shoppingcart.html',
				controller: 'shoppingcartCtrl'
			}).state('mkgpgm', {
				url: '/mkgpgm/:template/:id/:page',
				templateUrl: '../../pages/mkgpgm.html',
				controller: 'mkgpgmCtrl'
			}).state('mkgpgmarticle', {
				url: '/mkgpgmarticle/:template/:path/:id',
				templateUrl: '../../pages/mkgpgmarticle.html',
				controller: 'mkgpgmarticleCtrl'
			}).state('mkgdispgroup', {
				url: '/mkgdispgroup/:template/:id/:page',
				templateUrl: '../../pages/mkgdispgroup.html',
				controller: 'mkgdispgroupCtrl'
			});

	};
});