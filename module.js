define('factorys/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.factorys', []);
});

define('factorys/testFactory',['require', './module'], function(require, module) {
	'use strict';
 	
 

});
define('factorys/ftpFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('ftpFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/ftp/ftp.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/languageFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('languageFactory', function($http, $q, jsonhost, languagetype) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/language/' + languagetype + '.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/sitemapFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('sitemapFactory', function($http, $q, jsonhost, client) {
  
		return {
		 
			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/sitemap/sitemap.' + client + '.json ',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/sitemapmenuFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('sitemapmenuFactory', function($http, $q, jsonhost) {
 
		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/sitemap/sitemap.menu.json ',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/sitemaputilityFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('sitemaputilityFactory', function($http, $q, jsonhost) {
 
		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/sitemap/sitemap.utility.json ',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
					console.info(result);
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
define('factorys/colorFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('colorFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/color/color.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/sizeFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('sizeFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/size/size.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/seriesFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('seriesFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/series/series.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/uomFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('uomFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/uom/uom.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/brandFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('brandFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/brand/brand.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/codeidFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('codeidFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/codeid/codeid.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/codecaFactory',['require', './module'], function(require, module) {
	'use strict';

	module.factory('codecaFactory', function($http, $q, jsonhost) {

		return {

			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/codeca/codeca.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
					console.info(result);
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
							console.info(data);
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
						console.info(result);
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
define('factorys/webpageindexFactory',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');
	
	module.factory('webpageindexFactory', function($http, $q, jsonhost) {

		return {

	 
			
			get: function() {
				var deferred = $q.defer();
				$http({
					url: jsonhost + '/webpage/_index.json',
					method: 'get'
				}).then(function(result) {
					console.info(result);
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
define('factorys/webpagecontentFactory',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.factory('webpagecontentFactory', function($http, $q, jsonhost) {

		return {

			get: function(pageid, isAsync) {

				if(!isAsync) {

					var result = "";

					$.ajax({
						url: jsonhost + '/webpage/' + pageid + '_content.json',
						cache: false,
						async: false,
						type: "get",
						dataType: 'html',
						success: function(data) {
							console.info(data);
							result = data;
						},
						error: function(XMLHTTPRequest, textStatus, errorThrown) {
							console.info(XMLHTTPRequest.status);
							deferred.reject(XMLHTTPRequest.status);
						}
					});

					return result;
				} else {

					var deferred = $q.defer();
					$.ajax({
						url: jsonhost + '/webpage/' + pageid + '_content.json',
						type: "get",
						dataType: 'html',
						success: function(result) {
							console.info(result);
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
define('factorys/main',['./testFactory', './ftpFactory', './languageFactory', './sitemapFactory', './sitemapmenuFactory', './sitemaputilityFactory', './configFactory',
		'./colorFactory', './sizeFactory', './seriesFactory', './uomFactory', './brandFactory', './codeidFactory', './codecaFactory',
		'./articleFactory', './webpageFactory', './webpageindexFactory', './webpagecontentFactory'
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
define('directives/main',['./testDirective'],
	function() {

		'use strict';

	});
define('services/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.services', []);
});

define('services/testSvc',['require', './module'], function(require, module) {
	'use strict';
 	
 	module.service('testSvc', function() {
 		
 		this.getFtp = function(){
 			return 'ftp'
 		}
 		
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
define('services/convertAnnotationSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('convertAnnotationSvc', function() {

		this.convertAnnotation = function(json, ftp, language) {
			var result = json;
// 			console.info(json);
			result = this.convertLanguageAnnotation(result, language);
			result = this.convertFtpAnnotation(result, ftp);
// 		console.info(json);
			return result;
		};

		this.convertFtpAnnotation = function(json, ftp) {
			_.forIn(ftp, function(value, key) {

				json = _.replace(json, key + ':', _.replace(value, '"', '\\"'));
			});
			return json;
		};

		this.convertLanguageAnnotation = function(json, language) {
			//			'language:' 
			_.forIn(language, function(value, key) { 
				json = _.replace(json, 'language:' + key, _.replace(value, '"', '\\"'));
			});
			return json;
		};

	});

});
define('services/initctrlSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('initctrlSvc', function($http, $q, $cacheFactory, webpageindexFactory, webpageFactory, webpagecontentFactory,
		ftpFactory, languageFactory, sitemapFactory, sitemapmenuFactory, sitemaputilityFactory, configFactory,
		uomFactory, colorFactory, sizeFactory, seriesFactory, brandFactory, codeidFactory, codecaFactory,
		convertAnnotationSvc, codeSvc) {

		this.initViews = function(templateCache, webpageindex) {
			for(var i = 0; i < webpageindex.length; ++i) {
				var pageid = webpageindex[i];
				var webpage = JSON.parse(sessionStorage.getItem('webpage_' + pageid));
				var content = sessionStorage.getItem('webpage_' + pageid + '_content');
				templateCache.put(pageid + '.html', content);
			}
		};

		this.initRootScope = function(rootScope) {
			var objectNames = ['language', 'ftp', 'webpageindex', 'brand', 'codeca', 'codeid', 'color', 'config', 'series', 'webpc', 'menu', 'utility', 'size', 'uom']
			_(objectNames).forEach(function(name) {
				_.set(rootScope, name, JSON.parse(sessionStorage.getItem(name)));
			});
		};

		this.initTitle = function(pageid, rootScope) {
			var webpage = JSON.parse(sessionStorage.getItem('webpage_' + pageid));

			if(!_.isUndefined(webpage.title) && _.trim(webpage.title) != "") {
				rootScope.title = _.trim(webpage.title);
				return;
			} else if(!_.isUndefined(rootScope.config.title) && _.trim(rootScope.config.title) != "") {

				rootScope.title = _.trim(rootScope.config.title);
			}

		};

		this.controlLoad = function(pageid, state, location, rootScope, templateCache) {

			if(sessionStorage.getItem('webpageindex') != null) {

				var webpageindex = JSON.parse(sessionStorage.getItem('webpageindex'));
				this.initViews(templateCache, webpageindex);
				this.initRootScope(rootScope);
				this.initTitle(pageid, rootScope);
				return true;
			} else {
				sessionStorage.setItem('redirect', location.absUrl());
				state.go('load');
				return false;
			}
		};

		this.resourcesInit = function(win, rootScope) {

			languageFactory.get().then(function(data) {
				rootScope.language = data;
				sessionStorage.setItem('language', JSON.stringify(rootScope.language));

				ftpFactory.get().then(function(data) {
					rootScope.ftp = data;
					sessionStorage.setItem('ftp', JSON.stringify(rootScope.ftp));

					webpageindexFactory.get().then(function(data) {

						rootScope.webpageindex = data;
						sessionStorage.setItem('webpageindex', JSON.stringify(data));

						var promises = [];
						var objectNames = ['brand', 'codeca', 'codeid', 'color', 'config', 'series', 'webpc', 'menu', 'utility', 'size', 'uom'];

						promises.push(brandFactory.get());
						promises.push(codecaFactory.get());
						promises.push(codeidFactory.get());
						promises.push(colorFactory.get());
						promises.push(configFactory.get());
						promises.push(seriesFactory.get());
						promises.push(sitemapFactory.get());
						promises.push(sitemapmenuFactory.get());
						promises.push(sitemaputilityFactory.get());
						promises.push(sizeFactory.get());
						promises.push(uomFactory.get());

						for(var i = 0; i < rootScope.webpageindex.length; ++i) {

							promises.push(webpageFactory.get(rootScope.webpageindex[i], true));
							promises.push(webpagecontentFactory.get(rootScope.webpageindex[i], true));

							objectNames.push('webpage_' + rootScope.webpageindex[i]);
							objectNames.push('webpage_' + rootScope.webpageindex[i] + "_content");
						}

						$q.all(promises).then((values) => {

							for(var i = 0; i < values.length; ++i) {

								var value = values[i];
								var name = objectNames[i];

								var isPageContent = _.startsWith(name, 'webpage_') && _.endsWith(name, '_content');

								var jsonStr = isPageContent ? convertAnnotationSvc.convertAnnotation(value, rootScope.ftp, rootScope.language) :
									convertAnnotationSvc.convertAnnotation(JSON.stringify(value), rootScope.ftp, rootScope.language);

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
							win.location = redirect;

						});

					});
				});

			});

		};

	});

});
define('services/main',['./testSvc', './codeSvc', './convertAnnotationSvc', './initctrlSvc'],
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

	module.controller('articleCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/errorCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('errorCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/homeCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('homeCtrl', function($scope, $rootScope, $templateCache, $state, $location, $window, initctrlSvc) {

		var isload = initctrlSvc.controlLoad('home', $state, $location, $rootScope, $templateCache);

		if(!isload) {

			$templateCache.put('home.html', '');
			return;
		}

	});

});
define('controllers/itemcatalogCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('itemcatalogCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/itemCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('itemCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/itemsearchCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('itemsearchCtrl', function($scope, $rootScope, $templateCache) {
	 
	 

	});

});
define('controllers/loginCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('loginCtrl', function($scope, $rootScope, $templateCache) {
	 
 
	 

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
 
		var webpage = webpageFactory.get('load', false);
		var webpagecontent = webpagecontentFactory.get('load', false);
	 
		$templateCache.put('load.html', webpagecontent);   
		initctrlSvc.resourcesInit($window, $rootScope); 
		 
	});

});
define('controllers/main',['./testCtrl', './articleCtrl', './errorCtrl', './homeCtrl', './itemcatalogCtrl', 
'./itemCtrl', './itemsearchCtrl', './loginCtrl', './memberCtrl', './orderCtrl', './orderpayCtrl', 
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
define('filters/sitemapChilds',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('sitemapChilds', function() {

		return function(sitemap, pid, deepin) {

			function forDeep(parent, dp) {
				if(dp > deepin) return;
 

				var childs = _.filter(sitemap, function(el) {
					return el.psitemapuid == parent.pk;
				});

				_(childs).forEach(function(n) {
					forDeep(n, dp + 1);
				});

				parent.childs = childs;
			}

			if(_.isUndefined(deepin)) {
				deepin = 1;
			}

			var result = _.find(sitemap, function(el) {
				return el.sitemapid == pid;
			});

			forDeep(result, 1);

			return result.childs;
		}

	});

});
define('filters/sitemapHref',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('sitemapHref', function() {

		return function(sitemap) {

			 return '';
		}

	});

});
define('filters/main',['./testFilter', './sitemapChilds', './sitemapHref'],
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
