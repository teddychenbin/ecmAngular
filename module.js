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
		 
			get: function(root) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/sitemap/sitemap.' + root + '.json ',
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

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/config/config.json',
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

			get: function(id) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgdispgroup/' + id + '.json',
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

			get: function(id) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgpgmarticle/' + id + '.json',
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

			get: function(id) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mkgpgm/' + id + '.json',
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

			get: function(id) {
				
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/mainitem/' + id + '.json',
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

			get: function(articleid) {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/article/' + articleid + '.json',
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

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/adv/merge.json',
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

	module.factory('webpageFactory', function($http, $q, jsonhost) {

		return {

			get: function(pageid, isAsync) {

				if(!isAsync) {

					var result = "";
					$.ajax({
						url: jsonhost + '/webpage/' + pageid + '.json',
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
						url: jsonhost + '/webpage/' + pageid + '.json',
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

			get: function(pageid, isAsync) { 
				if(!isAsync) {

					var result = "";

					$.ajax({
						url: webpagehost + '/webpage/' + pageid + '.content.json',
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
						url: webpagehost + '/webpage/' + pageid + '.content.json',
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

			get: function(pageid, isAsync) { 
				if(!isAsync) {

					var result = "";

					$.ajax({
						url: jsonhost + '/article/' + pageid + '.content.json',
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
						url: jsonhost + '/article/' + pageid + '.content.json',
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
define('factorys/identifyFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('identifyFactory', function($http, $q, apihost) {

		return {

			login: function(user) {
				var deferred = $q.defer();
				$http({
					url: apihost + '/membermall/security/login',
					method: 'post',
					params: user
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
					url: apihost + '/membermall/security/logout',
					method: 'post'
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
		'./identifyFactory'
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
define('directives/login',['require', './module'], function(require, module) {
	'use strict';

	module.directive("login", function(ver, identifySvc) {
		return {
			restrict: "A",
			replace: true,
			template: "<h1>自定义指令!</h1>"

		};
	});

});
define('directives/main',['./testDirective', './login'],
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

	module.service('initctrlSvc', function($http, $q, $cacheFactory, pages, views, webpageFactory,
		webpagecontentFactory, sitemapFactory, configFactory, advertFactory, identifyFactory) {

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

		this.initIdentify = function(rootScope) {

			var input = $('#input_identify');
			if(_.isEmpty(input.val())) {
				rootScope.identify = null;
			} else {
				rootScope.identify = JSON.parse(input.val());
			}
		};

	

		this.controlLoad = function(pageid, state, location, rootScope, stateParams, templateCache) {

			if(sessionStorage.getItem('config') != null) {

				this.initViews(templateCache, pageid);
				this.initRootScope(rootScope, stateParams);
				this.initTitle(pageid, rootScope);
				this.initPath(rootScope, stateParams, state);
				this.initIdentify(rootScope);
				rootScope.login = this.login;
				rootScope.logout = this.logout;
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

			var promises = [];
			var objectNames = ['config', 'webpc', 'menu', 'utility', 'advert'];

			promises.push(configFactory.get());
			promises.push(sitemapFactory.get('webpc'));
			promises.push(sitemapFactory.get('menu'));
			promises.push(sitemapFactory.get('utility'));
			promises.push(advertFactory.get());
			var forms = [];
			$.merge(forms, pages);
			$.merge(forms, views);

			_(forms).forEach(function(page) {

				promises.push(webpageFactory.get(page, true));
				promises.push(webpagecontentFactory.get(page, true));

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
define('services/identifySvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('identifySvc', function() {

		this.get = function() {
			return null;
		};

		this.login = function(identify) {
			
		};

		this.logout = function() {

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
define('services/main',['./testSvc', './codeSvc', './initctrlSvc', './identifySvc', './pageSvc', './shoppingcartSvc'],
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

		if (!isload) {

			$templateCache.put('article.html', '');
			return;
		}

		var content = articlecontentFactory.get($stateParams.id, false);
		$templateCache.put('content.html', content);

	});

});
define('controllers/errorCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('errorCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

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

		mkgdispgroupFactory.get($stateParams.id).then(function(data) {

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
						promises.push(mainitemFactory.get(mainitemno));
					}
				}

				$q.all(promises).then(function(values) {

						_(values).forEach(function(mainitem) {

							var existMajor = false;
							_(mainitem.dispunits).forEach(function(dispunit) {

								dispunit.name = mainitem.name;
								dispunit.mainitemno = mainitem.id;
								if(dispunit.ismajorcolor === "True") {
									$scope.mkgdispgroup.lines.push(dispunit);
									existMajor = true;
								}
							});

							if(!existMajor && mainitem.dispunits.length > 0) {
								$scope.mkgdispgroup.lines.push(mainitem.dispunits[0]);
							}

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

		mkgpgmarticleFactory.get($stateParams.id).then(function(data) {

				var title = '[' + data.name + ' ' + data.id + ']';

				$scope.mkgpgmarticle = data;

				var dispunitids = [];
				var mainitemnos = [];
				_.forEach(data.dispunits, function(dispunit) {
					dispunitids.push(dispunit.id);
					mainitemnos.push(dispunit.mainitemno);
				});

				$scope.mkgpgmarticle.dispunits = [];

				var promises = [];

				for(var i = 0; i < dispunitids.length; i++) {
					promises.push(mainitemFactory.get(mainitemnos[i]));
				}

				$q.all(promises).then(function(values) {

					_(values).forEach(function(mainitem) {

						_(mainitem.dispunits).forEach(function(dispunit) {

							if(_.includes(dispunitids, dispunit.id)) {

								title += ' [' + mainitem.name + ' ' + dispunit.id + ' ' + dispunit.prodspec1.name + ']';
								dispunit.name = mainitem.name;
								$scope.mkgpgmarticle.dispunits.push(dispunit);
							}

						});

					});

					setTimeout(function() {
						$("img.lazy").lazyload();
					}, 200);

					$rootScope.title = title + ' -' + $rootScope.title;

					console.info($scope.mkgpgmarticle.dispunits);

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

		mkgpgmFactory.get($stateParams.id).then(function(data) {

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
						promises.push(mkgpgmarticleFactory.get(articleid));
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

	module.controller('mainitemCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mainitemFactory) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('mainitem' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('mainitem.html', '');
			return;
		}

		mainitemFactory.get($stateParams.mainitemno).then(function(data) {

				$scope.mainitem = data;

				_($scope.mainitem.dispunits).forEach(function(el) {

					if(el.id === $stateParams.id) {
						$scope.dispunit = el;

					}

				});

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

	module.controller('loginCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, identifyFactory) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('login' + template, $state, $location, $rootScope, $stateParams, $templateCache);

		if(!isload) {

			$templateCache.put('login.html', '');
			return;
		}

		$scope.user = {
			telno: null,
			email: null,
			id: null,
			pwd: null
		};

		//		this.logout = function() {
		//
		//			identifyFactory.logout().then(function(data) {
		//					console.info(data);
		//				})
		//				.catch(function(err) {
		//					console.log(err);
		//				});
		//
		//		};

		$scope.login = function() {
		 
			
			identifyFactory.login(this.user).then(function(data) {
					console.info(data);
				})
				.catch(function(err) {
					console.log(err);
				});
		};

	});

});
define('controllers/memberCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('memberCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

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
define('controllers/registerCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('registerCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

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
define('controllers/main',['./testCtrl', './articleCtrl', './errorCtrl', './homeCtrl', './mkgdispgroupCtrl', './mkgpgmarticleCtrl', './mkgpgmCtrl', 
'./mainitemCtrl', './itemsearchCtrl', './loginCtrl', './memberCtrl', './orderCtrl', './orderpayCtrl', 
'./registerCtrl', './shoppingcartCtrl', './loadCtrl'],
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
define('filters/main',['./testFilter', './nodes', './ifvalue'],
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
