define('factorys/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.factorys', []);
});

define('factorys/testFactory',['require', './module'], function(require, module) {
	'use strict';
 	
 

});
define('factorys/sitemapFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('sitemapFactory', function($http, $q, jsonhost) {

		return {

			get: function(root, bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/sitemap/sitemap.' + root + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/configFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('configFactory', function($http, $q, jsonhost) {

		return {

			get: function(bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/config/config.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/mkgdispgroupFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('mkgdispgroupFactory', function($http, $q, jsonhost) {

		return {

			get: function(id, bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgdispgroup/' + id + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/mkgpgmarticleFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('mkgpgmarticleFactory', function($http, $q, jsonhost) {

		return {

			get: function(id, bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgpgmarticle/' + id + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/mkgpgmFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('mkgpgmFactory', function($http, $q, jsonhost) {

		return {

			get: function(id, bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgpgm/' + id + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/mainitemFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('mainitemFactory', function($http, $q, jsonhost) {

		return {

			get: function(id, bust) {

				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mainitem/' + id + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/articleFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('articleFactory', function($http, $q, jsonhost) {

		return {

			get: function(articleid, bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/article/' + articleid + '.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/advertFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('advertFactory', function($http, $q, jsonhost) {

		return {

			get: function(bust) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/adv/merge.json?bust' + bust,
					method: 'get'
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/webpageFactory',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.factory('webpageFactory', function($http, $q, webpagehost) {

		return {

			get: function(pageid, isAsync, bust) {

				if(!isAsync) {

					var result = "";
					$.ajax({
						url: webpagehost + '/webpage/' + pageid + '.json?bust' + bust,
						cache: false,
						async: false,
						type: "get",
						dataType: 'json',
						success: function(data) {
							result = data;
						}
					});

					return angular.fromJson(result);
				} else {

					var deferred = $q.defer();
					$http({
						url: webpagehost + '/webpage/' + pageid + '.json?bust' + bust,
						method: 'get'
					}).then(function(result) {
						deferred.resolve(result.data);
					}).catch(function(result) {
						console.error(result);
						deferred.reject(result);
					});
					return deferred.promise;
				}

			}
		};

	});

});
define('factorys/webpagecontentFactory',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.factory('webpagecontentFactory', function($http, $q, webpagehost) {

		return {

			get: function(pageid, isAsync, bust) {
				if(!isAsync) {

					var result = "";

					$.ajax({
						url: webpagehost + '/webpage/' + pageid + '.content.json?bust' + bust,
						cache: false,
						async: false,
						type: "get",
						dataType: 'html',
						success: function(data) {
							result = data;
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
						}
					});

					return result;
				} else {

					var deferred = $q.defer();
					$.ajax({
						url: webpagehost + '/webpage/' + pageid + '.content.json?bust' + bust,
						type: "get",
						dataType: 'html',
						success: function(result) {
							deferred.resolve(result);
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
							deferred.reject(XMLHTTPRequest.status);
						}
					});

					return deferred.promise;
				}

			}
		};

	});

});
define('factorys/articlecontentFactory',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.factory('articlecontentFactory', function($http, $q, jsonhost) {

		return {

			get: function(pageid, isAsync, bust) {
				if(!isAsync) {

					var result = "";

					$.ajax({
						url: jsonhost + '/article/' + pageid + '.content.json?bust' + bust,
						cache: false,
						async: false,
						type: "get",
						dataType: 'html',
						success: function(data) {
							result = data;
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
						}
					});

					return result;
				} else {

					var deferred = $q.defer();
					$.ajax({
						url: jsonhost + '/article/' + pageid + '.content.json?bust' + bust,
						type: "get",
						dataType: 'html',
						success: function(result) {
							deferred.resolve(result);
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
							deferred.reject(XMLHTTPRequest.status);
						}
					});

					return deferred.promise;
				}

			}
		};

	});

});
define('factorys/memberidentifyFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('memberidentifyFactory', function($http, $q, apihost) {

		return {

			login: function(user) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberidentify/login',
					method: 'post',
					params: {
						data: JSON.stringify(user)
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			},
			logout: function() {
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberidentify/logout',
					method: 'post',
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			},
			getIdentify: function(isAsync) {

				if(!isAsync) {
					
					var result = "";

					$.ajax({
						url: apihost + '/security/memberidentify/getidentify',
						cache: false,
						async: false,
						type: "get",
						dataType: 'html',
						success: function(data) {
							result = data;
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
						}
					});

					return result;
					
				} else {

					var deferred = $q.defer();
					$http({
						url: apihost + '/security/memberidentify/getidentify',
						method: 'get'
					}).then(function(result) {
						deferred.resolve(result.data);
					}).catch(function(result) {
						console.error(result);
						deferred.reject(result);
					});
					return deferred.promise;
				}

			}

		};

	});

});
define('factorys/memberaccountFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('memberaccountFactory', function($http, $q, apihost) {

		return {

			regist: function(user) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberaccount/regist',
					method: 'post',
					params: {
						data: JSON.stringify(user)
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			},
			actionauth: function(actionauth) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberaccount/actionauth',
					method: 'post',
					params: {
						data: JSON.stringify(actionauth)
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			},
			changepassword: function(actionauthpk, pwd) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberaccount/changepassword',
					method: 'post',
					params: {
						actionauthpk: actionauthpk,
						password: pwd
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}

		};

	});

});
define('factorys/memberaccountbindingFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('memberaccountbindingFactory', function($http, $q, apihost) {

		return {

			add: function(accountbinding) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/entity/bmb/memberaccountbinding/add',
					method: 'post',
					params: {
						data: JSON.stringify(accountbinding)
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/memberinfoFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('memberinfoFactory', function($http, $q, apihost) {

		return {

			saveorupdate: function(user) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/entity/bmb/memberinfo/saveorupdate',
					method: 'post',
					params: {
						data: JSON.stringify(user)
					}
				}).then(function(result) {
					deferred.resolve(result.data);
				}).catch(function(result) {
					console.error(result);
					deferred.reject(result);
				});
				return deferred.promise;
			}
		};

	});

});
define('factorys/main',['./testFactory', './sitemapFactory', './configFactory',

		'./mkgdispgroupFactory', './mkgpgmarticleFactory', './mkgpgmFactory', './mainitemFactory',
		'./articleFactory', './advertFactory', './webpageFactory', './webpagecontentFactory', './articlecontentFactory',
		'./memberidentifyFactory', './memberaccountFactory', './memberaccountbindingFactory', './memberinfoFactory'

	],
	function() {

		'use strict';

	});
define('directives/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.directives', []);
});

define('directives/testDirective',['require', './module'], function(require, module) {
	'use strict';
 	
	 module.directive("teddy", function() {
	    return {
	        template : "<h1>你好，帅哥!</h1>"
	    };
	});

});
define('directives/loadscript',['require', './module'], function(require, module) {
	'use strict';

	module.directive("script", function() {
		return {
			restrict: 'E',
			scope: false,
			link: function(scope, elem, attr) {
				if(attr.type === 'text/javascript-lazy') {
					 
					var s = document.createElement("script");
					s.type = "text/javascript";
					var src = elem.attr('src');
					if(src !== undefined) {
						s.src = src;
					} else {
						var code = elem.text();
						s.text = code;
					}
					document.head.appendChild(s);
					elem.remove();

				}
			}
		};

	});

});
define('directives/main',['./testDirective', './loadscript'],
	function() {

		'use strict';

	});

//E 作为元素名使用
//A 作为属性使用
//C 作为类名使用
//M 作为注释使用;
define('services/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.services', []);
});

define('services/testSvc',['require', './module'], function(require, module) {
	'use strict';
 	
 	module.service('testSvc', function() {
 		
 		this.getFtp = function(){
 			return 'ftp';
 		};
 		
	});

});
define('services/codeSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('codeSvc', function() {

		this.pagetype = {

			'page': '1452',
			'embeddedPage': '1453'
		};

	});

});
define('services/initctrlSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('initctrlSvc', function($http, $q, $cacheFactory, $window, pages, views, webpageFactory,
		webpagecontentFactory, sitemapFactory, configFactory, advertFactory, memberidentifyFactory, dialogSvc) {

		this.initViews = function(templateCache, pageid) {
			//loadpage
			var pageContent = sessionStorage.getItem('page_' + pageid + '_content');
			var isSubPage = _.includes(pageid, '_');
			if(isSubPage) {
				templateCache.put(pageid.split('_')[0] + '.html', pageContent);
			} else {
				templateCache.put(pageid + '.html', pageContent);
			}

			//loadview
			_(views).forEach(function(view) {
				var viewContent = sessionStorage.getItem('page_' + view + '_content');
				templateCache.put(view + '.html', viewContent);

			});

		};

		this.initRootScope = function(rootScope, stateParams) {

			var objectNames = ['config', 'webpc', 'menu', 'utility', 'advert'];
			_(objectNames).forEach(function(name) {
				_.set(rootScope, name, JSON.parse(sessionStorage.getItem(name)));
			});

			_.set(rootScope, 'stateParams', stateParams);

		};

		this.initTitle = function(pageid, rootScope) {

			var page = JSON.parse(sessionStorage.getItem('page_' + pageid));

			if(!_.isUndefined(rootScope.config.title) && _.trim(rootScope.config.title) !== "") {

				rootScope.title = _.trim(rootScope.config.title);
			}

			if(!_.isUndefined(page.title) && _.trim(page.title) !== "") {
				rootScope.title = _.trim(page.title) + ' -' + rootScope.title;

			}

		};

		this.initPath = function(rootScope, stateParams, state) {

			var template = this.getTemplate(stateParams);

			var pathString = "";
			if(state.current.name === 'mkgpgm' || state.current.name === 'mkgdispgroup') {

				pathString = stateParams.id;
			} else if(state.current.name === 'mainitem' || state.current.name === 'mkgpgmarticle') {

				pathString = stateParams.path;
			} else {

				pathString = template;
			}

			var paths = [];
			var arr = _.words(pathString, /[^_ ]+/g);
			var route = '';
			_(arr).forEach(function(el) {
				if(route !== '') {
					route += '_';
				}

				route += el;
				console.info(route);
				paths.push(route);

			});

			rootScope.paths = paths;
		};

		this.initIdentify = function(rootScope, state, requireLogin) {

			var data = memberidentifyFactory.getIdentify(false);
			if(data === "") {
				rootScope.identify = null;
				if(requireLogin) {
					state.go('login');
				}

			} else {
				rootScope.identify = JSON.parse(data);
			}

		};

		this.logout = function() {

			memberidentifyFactory.logout().then(function(data) {
				$window.location = 'index.html';
			}, function(err) {
				dialogSvc.error("net error!");
			});

		};

		this.controlLoad = function(pageid, state, location, rootScope, stateParams, templateCache, requireLogin) {

			if(sessionStorage.getItem('config') != null) {

				this.initViews(templateCache, pageid);
				this.initRootScope(rootScope, stateParams);
				this.initTitle(pageid, rootScope);
				this.initPath(rootScope, stateParams, state);
				this.initIdentify(rootScope, state, requireLogin);

				rootScope.logout = this.logout;
				rootScope.bust = sessionStorage.getItem("bust");

				return true;
			} else {

				sessionStorage.setItem('redirect', location.absUrl());
				state.go('load');
				return false;
			}
		};

		this.getTemplate = function(stateParams) {
			var result = !_.isNull(stateParams.template) && _.trim(stateParams.template).length > 0 ?
				'_' + stateParams.template :
				'';
			return result;
		};

		this.resourcesInit = function(win, rootScope) {

			var bust = (new Date()).getTime();
			sessionStorage.setItem("bust", bust);

			var promises = [];
			var objectNames = ['config', 'webpc', 'menu', 'utility', 'advert'];

			promises.push(configFactory.get(bust));
			promises.push(sitemapFactory.get('webpc', bust));
			promises.push(sitemapFactory.get('menu', bust));
			promises.push(sitemapFactory.get('utility', bust));
			promises.push(advertFactory.get(bust));
			var forms = [];
			$.merge(forms, pages);
			$.merge(forms, views);

			_(forms).forEach(function(page) {

				promises.push(webpageFactory.get(page, true, bust));
				promises.push(webpagecontentFactory.get(page, true, bust));

				objectNames.push('page_' + page);
				objectNames.push('page_' + page + "_content");

			});

			$q.all(promises).then(function(values) {

				for(var i = 0; i < values.length; ++i) {

					var value = values[i];
					var name = objectNames[i];

					var isPageContent = _.startsWith(name, 'page_') && _.endsWith(name, '_content');

					var jsonStr = isPageContent ? value : JSON.stringify(value);

					if(isPageContent) {

						_.set(rootScope, name, jsonStr);
						sessionStorage.setItem(name, _.get(rootScope, name));
					} else {

						_.set(rootScope, name, JSON.parse(jsonStr));
						sessionStorage.setItem(name, JSON.stringify(_.get(rootScope, name)));
					}

				}

				var redirect = sessionStorage.getItem('redirect');
				sessionStorage.removeItem('redirect');
				if(_.isNull(redirect)) {
					win.location = 'index.html';
				} else {
					win.location = redirect;
				}

			});

		};

	});

});
define('services/pageSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('pageSvc', function(pagesize) {

		this.fetch = function(scope, data, page) {

			var _first = (page - 1) * pagesize;
			var _max = _first + pagesize;

			scope.page = page;
			scope.pagecount = Math.ceil(data.length / pagesize);
			scope.recordlength = data.length;
			scope.pages = [];

			var showCount = 4;

			var startPage = page - 2;
			if(startPage < 1) {
				startPage = 1;
			}

			if(page === 1) {
				scope.prepage = 1;
			} else {
				scope.prepage = page - 1;
			}

			if(page === scope.pagecount) {
				scope.nextpage = scope.pagecount;
			} else {
				scope.nextpage = page + 1;
			}

			var existFirst = false;
			var existLast = false;
			for(var i = startPage; i <= scope.pagecount && i <= startPage + showCount; i++) {
				if(i === 1) {
					existFirst = true;
				}
				if(i === scope.pagecount) {
					existLast = true;
				}

				scope.pages.push(i);
			}

			if(!existFirst) {

				scope.pages.splice(0, 0, 1);
				scope.pages.splice(1, 0, '..');
			}
			if(!existLast) {

				scope.pages.push('...');
				scope.pages.push(scope.pagecount);

			}
			return {
				first: _first,
				max: _max
			};

		};

	});

});
define('services/shoppingcartSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	/*
	 * 购物车服务
	 */
	module.service('shoppingcartSvc', function() {

		this.items = [];

		/*
		 * 清空购物车
		 */
		this.clear = function() {

		};

		/*
		 * 获取所有货号
		 */
		this.getItems = function(index) {

		};
		/*
		 * 获取货号
		 */
		this.getItem = function(index) {

		};
		/*
		 * 添加货号
		 */
		this.addItem = function(item) {
			this.items.push(item);
		};
		/*
		 * 移除货号
		 */
		this.removeItem = function(index) {

		};

		/*
		 * 修改数量
		 */
		this.changeQty = function(index, value) {
			this.items[index].qty = value;
		};

		/*
		 * 数量合计
		 */
		this.getTotalQty = function() {
			
		};

		/*
		 * 金额合计
		 */
		this.getTotalAmt = function() {

		};
		
		

	});

});
define('services/dialogSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('dialogSvc', function() {

		this.error = function(message){
			window.alert(message);
		};

	});

});
define('services/main',['./testSvc', './codeSvc', './initctrlSvc', './pageSvc', './shoppingcartSvc', './dialogSvc'],
	function() {

		'use strict';

	});
define('controllers/module',['require'], function(require) {
	'use strict';
	var ng = require('angular');
	return ng.module('app.controllers', []);
});
define('controllers/testCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('testCtrl', function($scope, $rootScope, $templateCache, $state, $location, $window, initctrlSvc) {

		var webpage = initctrlSvc.getWebpage('test', $state, $location);

		if(webpage == null) {
			$templateCache.put('test.html', '');
			return;
		}

		$templateCache.put('test.html', webpage.content);
		initctrlSvc.rootScopeFromCache($rootScope);
		initctrlSvc.initTitle(webpage, $rootScope);

	});

});
define('controllers/articleCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('articleCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc, articlecontentFactory) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('article' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('article.html', '');
			return;
		}

		var content = articlecontentFactory.get($stateParams.id, false, $rootScope.bust);
		$templateCache.put('content.html', content);

	});

});
define('controllers/errorCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('errorCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {
   
		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('error' + template, $state, $location, $rootScope, $stateParams, $templateCache);
	
		if(!isload) {

			$templateCache.put('error.html', '');
			return;
		}
   
		
		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/homeCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('homeCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {
   
		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('home' + template, $state, $location, $rootScope, $stateParams, $templateCache);
	
		if(!isload) {

			$templateCache.put('home.html', '');
			return;
		}
  
		
		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/mkgdispgroupCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mkgdispgroupCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mkgdispgroupFactory, mainitemFactory, pageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('mkgdispgroup' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('mkgdispgroup.html', '');
			return;
		}

		$scope.fetch = function(pg) {
			if(!_.isNumber(pg)) {
				return;
			}
			$state.go('mkgdispgroup', {
				templage: $stateParams.template,
				id: $stateParams.id,
				page: pg
			});
		};

		var page = _.parseInt($stateParams.page);

		mkgdispgroupFactory.get($stateParams.id, $rootScope.bust).then(function(data) {

				$rootScope.title = '[' + data.name + '] -' + $rootScope.title;

				$scope.mkgdispgroup = {};
				_.set($scope.mkgdispgroup, "id", data.id);
				_.set($scope.mkgdispgroup, "name", data.name);
				_.set($scope.mkgdispgroup, "lines", []);

				var fetch = pageSvc.fetch($scope, data.lines, page);

				var promises = [];

				for(var i = fetch.first; i < fetch.max; i++) {
					if(i < data.lines.length) {
						var mainitemno = data.lines[i].mainitemno;
						promises.push(mainitemFactory.get(mainitemno, $rootScope.bust));
					}
				}

				$q.all(promises).then(function(values) {

						for(var i = 0; i < values.length; i++) {
							var mainitem = values[i];
							$scope.mkgdispgroup.lines.push(mainitem);
						}

						console.info($scope.mkgdispgroup);

						setTimeout(function() {
							$("img.lazy").lazyload();
						}, 200);

					})
					.catch(function(err) {
						console.log(err);
					});

			})
			.catch(function(err) {
				console.log(err);
			});

	});

});
define('controllers/mkgpgmarticleCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mkgpgmarticleCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mkgpgmarticleFactory, mainitemFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('mkgpgmarticle' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('mkgpgmarticle.html', '');
			return;
		}

		$scope.appendSuit = function(mainitem) {
			var promises = [];
			_(mainitem.suits).forEach(function(el) {

				promises.push(mainitemFactory.get(el.mainitemno));
			});

			$q.all(promises).then(function(suitmainitems) {
				mainitem.suits = [];
				mainitem.suits = suitmainitems;
			});
		};

		mkgpgmarticleFactory.get($stateParams.id, $rootScope.bust).then(function(data) {

				var title = '[' + data.name + ' ' + data.id + ']';

				$scope.mkgpgmarticle = data;
				var mainitemnos = [];
				_.forEach(data.lines, function(mainitem) {
					mainitemnos.push(mainitem.id);
				});
		 
				$scope.mkgpgmarticle.lines = [];

				var promises = [];

				for(var i = 0; i < mainitemnos.length; i++) {
					promises.push(mainitemFactory.get(mainitemnos[i], $rootScope.bust));
				}

				$q.all(promises).then(function(values) {

					_(values).forEach(function(mainitem) {

						$scope.appendSuit(mainitem);

						title += ' [' + mainitem.name + ' ' + mainitem.dispunits[0].id + ' ' + mainitem.dispunits[0].prodspec1.name + ']';
						
						$scope.mkgpgmarticle.lines.push(mainitem);

					});

					setTimeout(function() {
						$("img.lazy").lazyload();
					}, 200);

					$rootScope.title = title + ' -' + $rootScope.title;

					console.info($scope.mkgpgmarticle.lines);

				});

			})
			.catch(function(err) {
				console.log(err);
			});

	});

});
define('controllers/mkgpgmCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mkgpgmCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mkgpgmFactory, mkgpgmarticleFactory, pageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('mkgpgm' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('mkgpgm.html', '');
			return;
		}

		$scope.fetch = function(pg) {
			if(!_.isNumber(pg)) {
				return;
			}
			$state.go('mkgpgm', {
				templage: $stateParams.template,
				id: $stateParams.id,
				page: pg
			});
		};

		var page = _.parseInt($stateParams.page);

		mkgpgmFactory.get($stateParams.id, $rootScope.bust).then(function(data) {
		 
				$rootScope.title = '[' + data.name + '] -' + $rootScope.title;

				$scope.mkgpgm = {};
				_.set($scope.mkgpgm, "id", data.id);
				_.set($scope.mkgpgm, "name", data.name);
				_.set($scope.mkgpgm, "lines", []);

				var fetch = pageSvc.fetch($scope, data.lines, page);

				var promises = [];

				for(var i = fetch.first; i < fetch.max; i++) {
					if(i < data.lines.length) {
						var articleid = data.lines[i].articleid;
						promises.push(mkgpgmarticleFactory.get(articleid, $rootScope.bust));
					}
				}

				$q.all(promises).then(function(values) {

						_(values).forEach(function(mkgpgmarticle) {
							$scope.mkgpgm.lines.push(mkgpgmarticle);
						});

						setTimeout(function() {
							$("img.lazy").lazyload();
						}, 200);

					})
					.catch(function(err) {
						console.log(err);
					});

			})
			.catch(function(err) {
				console.log(err);
			});

	});

});
define('controllers/mainitemCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mainitemCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mainitemFactory) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('mainitem' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('mainitem.html', '');
			return;
		}

		$scope.appendSuit = function(mainitem) {
			var promises = [];
			_(mainitem.suits).forEach(function(el) {

				promises.push(mainitemFactory.get(el.mainitemno, $rootScope.bust));
			});

			$q.all(promises).then(function(suitmainitems) {
				mainitem.suits = [];
				mainitem.suits = suitmainitems;
			});
		};

		mainitemFactory.get($stateParams.mainitemno, $rootScope.bust).then(function(data) {

				$scope.mainitem = data;

				_($scope.mainitem.dispunits).forEach(function(el) {

					if(el.id === $stateParams.id) {
						$scope.dispunit = el;

					}

				});

				$scope.appendSuit($scope.mainitem);

				console.info($scope.mainitem);
				console.info($scope.dispunit);

				var title = '[' + $scope.mainitem.name + ' ' + $scope.dispunit.id + ' ' + $scope.dispunit.prodspec1.name + ']';

				if(!_.isUndefined($scope.mainitem.brand) && _.trim($scope.mainitem.brand.name) !== "") {
					title += ' ' + $scope.mainitem.brand.name;
				}
				$rootScope.title = title + ' -' + $rootScope.title;

				setTimeout(function() {
					$("img.lazy").lazyload();
				}, 200);

			})
			.catch(function(err) {
				console.log(err);
			});

		/*
		 * 选择颜色
		 */
		$scope.selectProdSpec1 = function() {

		};

		/*
		 * 选择尺寸
		 */
		$scope.selectProdSpec2 = function() {

		};
		/*
		 * 添加购物车
		 */
		$scope.addShoppingcart = function() {

		};

		/*
		 * 修改数量
		 */
		$scope.changeQty = function() {

		};

		/*
		 * 立刻购买
		 */
		$scope.buy = function() {

		};

		/*
		 * 加入我的喜爱
		 */
		$scope.favor = function() {

		};

	});

});
define('controllers/itemsearchCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('itemsearchCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/loginCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('loginCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberidentifyFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('login' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('login.html', '');
			return;
		}

		$scope.user = {
			id: null,
			password: null
		};
 		
		if($rootScope.identify != null) {

			$window.location = 'index.html';
			return;
		}
		 
		$scope.submittime = null;

		$scope.login = function(md) {
			
			$scope.user.id = md.id;
			$scope.user.password = md5(md.password);
			 
			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();
		  
			memberidentifyFactory.login($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {
					if(!_.isUndefined($rootScope.loginReturnState) && $rootScope.loginReturnState != null) {
						$state.go($rootScope.loginReturnState, $rootScope.loginReturnParams);
					} else {
						$window.location = 'index.html';
					}

				} else {

					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};
	});

});
define('controllers/memberCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('member' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('member.html', '');
			return;
		}

	

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/orderCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('orderCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/orderpayCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('orderpayCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/registCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('registCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('regist' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('regist.html', '');
			return;
		}

		$scope.user = {
			id: null,
			password: null,
			email: null,
			phone: null,
			authtype: null,
			client: (new Date()).toISOString()
		};

		$scope.submittime = null;

		$scope.regist = function(md) {

			$scope.user.id = md.id;
			$scope.user.password = md5(md.password);
			$scope.user.email = md.email;
			$scope.user.phone = md.phone;
			$scope.user.authtype = md.authtype;

			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();
 

			memberaccountFactory.regist($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {
					$state.go("info", {
						template: 'registsuccess',
						message: $scope.user.id
					});
				} else {

					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};
	});

});
define('controllers/shoppingcartCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('shoppingcartCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/loadCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('loadCtrl', function($scope, $rootScope, $templateCache, $state, $window,
		initctrlSvc, webpageFactory, webpagecontentFactory) {
 
//		var webpage = webpageFactory.get('load', false); 加快速度避免過多同步
		$rootScope.title = '';
		$rootScope.icon = '';
		var webpagecontent = webpagecontentFactory.get('load', false);
	 
		$templateCache.put('load.html', webpagecontent);   
		initctrlSvc.resourcesInit($window, $rootScope); 
		 
	});

});
define('controllers/infoCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('infoCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {
   
		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('info' + template, $state, $location, $rootScope, $stateParams, $templateCache);
	
		if(!isload) {

			$templateCache.put('info.html', '');
			return;
		}
  
  		$scope.message = $stateParams.message;
		
		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/actionauthCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('actionauthCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('actionauth' + template, $state, $location, $rootScope, $stateParams, $templateCache, false);

		if(!isload) {

			$templateCache.put('actionauth.html', '');
			return;
		}

		$scope.actionauth = {
			actiontype: $stateParams.actiontype,
			authtype: $stateParams.authtype,
			authfrom: null,
			authcode: null
		};

		if($scope.actionauth.authtype === 'email') {
			if($rootScope.identify != null) {
				$scope.actionauth.authfrom = $rootScope.identify.email;
			}
		}

		$scope.submittime = null;

		$scope.send = function(md) {

			$scope.actionauth.authfrom = md.authfrom; 
			
			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();

			memberaccountFactory.actionauth($scope.actionauth).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {
					if($scope.actionauth.authtype === 'email') {
						
						$state.go("info", {
							template: 'gotoemail',
							message: ''
						});
					}

				} else {

					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/changepasswordCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('changepasswordCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountFactory, memberidentifyFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('changepassword' + template, $state, $location, $rootScope, $stateParams, $templateCache, false);

		if(!isload) {

			$templateCache.put('changepassword.html', '');
			return;
		}

		$scope.md = {
			actionauthpk : $stateParams.actionauthpk,
			password : null
		};

		$scope.submittime = null;

		$scope.changepassword = function(md) {
			
			$scope.md.password = md.password;
			
			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();

			memberaccountFactory.changepassword($scope.md.actionauthpk, md5($scope.md.password)).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyFactory.logout().then(function(da) {

						$state.go("info", {
							template: 'changepasswordsuccess',
							message: ''
						});

					}, function(err) {

					});

				} else {

					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/bindingemailCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('bindingemailCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountbindingFactory, memberidentifyFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('bindingemail' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('bindingemail.html', '');
			return;
		}

		$scope.accountbinding = {
			id: $rootScope.identify.email,
			authtype: 'email',
			client: (new Date()).toISOString()
		};

		$scope.submittime = null;

		$scope.send = function(md) {
			
			$scope.accountbinding.id = md.id;
			
			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();

			memberaccountbindingFactory.add($scope.accountbinding).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyFactory.logout().then(function(da) {

						$state.go("info", {
							template: 'gotoemail',
							message: $rootScope.identify.email
						});

					}, function(err) {

					});

				} else {
					 
					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/memberaddresslistCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberaddresslistCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberaddresslist' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('memberaddresslist.html', '');
			return;
		}

		
		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/memberaddressmodifyCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberaddressmodifyCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberaddressmodify' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('memberaddressmodify.html', '');
			return;
		}

		

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/memberbrowseCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberbrowseCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberbrowse' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('memberbrowse.html', '');
			return;
		}

		

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/memberfollowCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberfollowCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberfollow' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('memberfollow.html', '');
			return;
		}

		

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/membermodifyCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('membermodifyCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberinfoFactory, memberidentifyFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('membermodify' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('membermodify.html', '');
			return;
		}

		$scope.user = {
			name: null,
			birthday: "2017-08-24 02:30:21",
			gendertype: null
		};

		$scope.submittime = null;

		$scope.save = function(md) {

			$scope.user.name = md.name;
 
			if($scope.submittime != null) {
				var sec = parseInt((new Date()) - $scope.submittime) / 1000;
				if(sec < 3) {
					return;
				}
			}
			$scope.submittime = new Date();

			memberinfoFactory.saveorupdate($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyFactory.logout().then(function(da) {

						$state.go("info", {
							template: 'membermodifysuccess',
							message: ''
						});

					}, function(err) {

					});

				} else {

					$.registCallback(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.registCallback('');

			});

		};

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/memberorderlistCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberorderlistCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberorderlist' + template, $state, $location, $rootScope, $stateParams, $templateCache, true);

		if(!isload) {

			$templateCache.put('memberorderlist.html', '');
			return;
		}

		

		setTimeout(function() {
			$("img.lazy").lazyload();
		}, 200);

	});

});
define('controllers/main',['./testCtrl', './articleCtrl', './errorCtrl', './homeCtrl', './mkgdispgroupCtrl', './mkgpgmarticleCtrl', './mkgpgmCtrl',
		'./mainitemCtrl', './itemsearchCtrl', './loginCtrl', './memberCtrl', './orderCtrl', './orderpayCtrl',
		'./registCtrl', './shoppingcartCtrl', './loadCtrl', './infoCtrl', './actionauthCtrl', './changepasswordCtrl',
		'./bindingemailCtrl', './memberaddresslistCtrl', './memberaddressmodifyCtrl', './memberbrowseCtrl',
		'./memberfollowCtrl', './membermodifyCtrl', './memberorderlistCtrl'
	],
	function() {

		'use strict';

	});
define('filters/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.filters', []);
});

define('filters/testFilter',['require', './module'], function(require, module) {
	'use strict';
 	
 

});
define('filters/nodes',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('nodes', function() {

		return function(sitemap, pid) {

			var result = [];

			_.forIn(sitemap, function(value, key) {
				if(value.psitemapid === pid) {						
					result.push(value);
				}
			});

			result = _.sortBy(result, 'listseqno');
			
			return result;
		};

	});

});
define('filters/nodeattr',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('nodeattr', function() {

		return function(sitemap, id, property) {
			
		 
			
			var el = _.find(sitemap, function(value) {
				return value.id === id;
			});

			if (_.isNull(el)){
				return null;
			}
				
				
			return _.get(el, property);

		};
	});

});
define('filters/ifvalue',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('ifvalue', function() {

		return function(input, compareValue, trueValue, falseValue) {

			return input === compareValue ? trueValue : falseValue;

		};

	});

});
define('filters/range',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('range', function() {

		return function(input, start, length) {

			var result = [];
			for (var i = start; i < length; i++) {
				result.push(input[i]);
			}

			return result;

		};

	});

});
define('filters/privatestring',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('privatestring', function() {

		return function(input, char, length) {
			if(input === null || _.isUndefined(input)) {
				return '';
			}
			var result = "";
			result += input.substring(0, length);
			result += char;
			result += char;
			result += char;
			result += char;

			input = input.substring(length, input.length);
			result += input.substring(input.length - length, input.length);
			return result;

		};

	});

});
define('filters/main',['./testFilter', './nodes', './nodeattr', './ifvalue', './range', './privatestring'],
	function() {

		'use strict';

	});
define('app/main',['../factorys/main', '../directives/main', '../services/main', '../controllers/main', '../filters/main'],
	function() {

		'use strict';

	});
define('app/module',['require', './main'], function(require) {

	'use strict';

	var ng = require('angular');

	var app = ng.module('app', ['app.factorys', 'app.directives', 'app.services',
		'app.controllers', 'app.filters',
		'ui.router'
	]);
	
 
	return app;
});
