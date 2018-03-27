define(['require'], function(require) {

	return function(stateProvider) {
		//arg0 template
		//arg1 id
		stateProvider
			.state('load', {
				url: '/load',
				template: function() {
					return '<div ng-include="' + "'load.html'" + '"></div>';
				},
				controller: 'loadCtrl'
			}).state('error', {
				url: '/error/:template/:message',
				template: function() {
					return '<div ng-include="' + "'error.html'" + '"></div>';
				},
				controller: 'errorCtrl'
			}).state('info', {
				url: '/info/:template/:message',
				template: function() {
					return '<div ng-include="' + "'info.html'" + '"></div>';
				},
				controller: 'infoCtrl'
			}).state('custompage', {
				url: '/custompage/:template',
				template: function() {
					return '<div ng-include="' + "'custompage.html'" + '"></div>';
				},
				controller: 'custompageCtrl'
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
				url: '/mainitem/:template/:mainitemno/:prodspec1/:prodspec2',
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
			}).state('itemsearchlist', {
				url: '/itemsearchlist/:template/:value/:page',
				template: function() {
					return '<div ng-include="' + "'itemsearchlist.html'" + '"></div>';
				},
				controller: 'itemsearchlistCtrl'
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
			}).state('memberbalancelist', {
				url: '/memberbalancelist/:template',
				template: function() {
					return '<div ng-include="' + "'memberbalancelist.html'" + '"></div>';
				},
				controller: 'memberbalancelistCtrl'
			}).state('membercouponlist', {
				url: '/membercouponlist/:template',
				template: function() {
					return '<div ng-include="' + "'membercouponlist.html'" + '"></div>';
				},
				controller: 'membercouponlistCtrl'
			}).state('memberintegrallist', {
				url: '/memberintegrallist/:template',
				template: function() {
					return '<div ng-include="' + "'memberintegrallist.html'" + '"></div>';
				},
				controller: 'memberintegrallistCtrl'
			}).state('salesorder', {
				url: '/salesorder/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'salesorder.html'" + '"></div>';
				},
				controller: 'salesorderCtrl'
			}).state('presalesorder', {
				url: '/presalesorder/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'presalesorder.html'" + '"></div>';
				},
				controller: 'presalesorderCtrl'
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
			}).state('preshoppingcart', {
				url: '/preshoppingcart/:template',
				template: function() {
					return '<div ng-include="' + "'preshoppingcart.html'" + '"></div>';
				},				
				controller: 'preshoppingcartCtrl'
			}).state('shoppingcartadditem', {
				url: '/shoppingcartadditem/:template/:mainitemno/:prodspec1/:prodspec2/:shoppingqty',
				template: function() {
					return '<div ng-include="' + "'shoppingcartadditem.html'" + '"></div>';
				},
				controller: 'shoppingcartadditemCtrl'
			}).state('preshoppingcartadditem', {
				url: '/preshoppingcartadditem/:template/:mainitemno/:prodspec1/:prodspec2/:shoppingqty',
				template: function() {
					return '<div ng-include="' + "'preshoppingcartadditem.html'" + '"></div>';
				},
				controller: 'preshoppingcartadditemCtrl'
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
			}).state('changepassword', {
				url: '/changepassword/:template/:actionauthpk',
				template: function() {
					return '<div ng-include="' + "'changepassword.html'" + '"></div>';
				},
				controller: 'changepasswordCtrl'
			}).state('actionauth', {
				url: '/actionauth/:template/:actiontype/:authtype',
				template: function() {
					return '<div ng-include="' + "'actionauth.html'" + '"></div>';
				},
				controller: 'actionauthCtrl'
			}).state('bindingemail', {
				url: '/bindingemail/:template',
				template: function() {
					return '<div ng-include="' + "'bindingemail.html'" + '"></div>';
				},
				controller: 'bindingemailCtrl'
			}).state('bindingphone', {
				url: '/bindingphone/:template',
				template: function() {
					return '<div ng-include="' + "'bindingphone.html'" + '"></div>';
				},
				controller: 'bindingphoneCtrl'
			}).state('memberaddresslist', {
				url: '/memberaddresslist/:template',
				template: function() {
					return '<div ng-include="' + "'memberaddresslist.html'" + '"></div>';
				},
				controller: 'memberaddresslistCtrl'
			}).state('memberaddressmodify', {
				url: '/memberaddressmodify/:template/:pk/:ismajor',
				template: function() {
					return '<div ng-include="' + "'memberaddressmodify.html'" + '"></div>';
				},
				controller: 'memberaddressmodifyCtrl'
			}).state('memberbrowse', {
				url: '/memberbrowse/:template',
				template: function() {
					return '<div ng-include="' + "'memberbrowse.html'" + '"></div>';
				},
				controller: 'memberbrowseCtrl'
			}).state('memberfollow', {
				url: '/memberfollow/:template',
				template: function() {
					return '<div ng-include="' + "'memberfollow.html'" + '"></div>';
				},
				controller: 'memberfollowCtrl'
			}).state('membermodify', {
				url: '/membermodify/:template',
				template: function() {
					return '<div ng-include="' + "'membermodify.html'" + '"></div>';
				},
				controller: 'membermodifyCtrl'
			}).state('memberorderlist', {
				url: '/memberorderlist/:template',
				template: function() {
					return '<div ng-include="' + "'memberorderlist.html'" + '"></div>';
				},
				controller: 'memberorderlistCtrl'
			}).state('memberrepairlist', {
				url: '/memberrepairlist/:template',
				template: function() {
					return '<div ng-include="' + "'memberrepairlist.html'" + '"></div>';
				},
				controller: 'memberrepairlistCtrl'
			}).state('membermessage', {
				url: '/membermessage/:template',
				template: function() {
					return '<div ng-include="' + "'membermessage.html'" + '"></div>';
				},
				controller: 'membermessageCtrl'
			}).state('memberorder', {
				url: '/memberorder/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'memberorder.html'" + '"></div>';
				},
				controller: 'memberorderCtrl'
			}).state('memberrepair', {
				url: '/memberrepair/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'memberrepair.html'" + '"></div>';
				},
				controller: 'memberrepairCtrl'
			}).state('wechatpay', {
				url: '/wechatpay/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'wechatpay.html'" + '"></div>';
				},
				controller: 'wechatpayCtrl'
			}).state('orderconfirmsuccess', {
				url: '/orderconfirmsuccess/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'orderconfirmsuccess.html'" + '"></div>';
				},
				controller: 'orderconfirmsuccessCtrl'
			}).state('orderpaysuccess', {
				url: '/orderpaysuccess/:template/:pk',
				template: function() {
					return '<div ng-include="' + "'orderpaysuccess.html'" + '"></div>';
				},
				controller: 'orderpaysuccessCtrl'
			});

	};
});