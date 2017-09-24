define('jsons/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.jsons', []);
});

define('jsons/advertJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('advertJson', function($http, $q, jsonhost) {

		this.get = function(bust) {
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
		};

	});

});
define('jsons/articlecontentJson',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.service('articlecontentJson', function($http, $q, jsonhost) {

		this.get = function(pageid, isAsync, bust) {
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

		};

	});

});
define('jsons/articleJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('articleJson', function($http, $q, jsonhost) {

		this.get = function(articleid, bust) {
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
		};

	});

});
define('jsons/configJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('configJson', function($http, $q, jsonhost) {

		this.get = function(bust) {
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
		};

	});

});
define('jsons/countryJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('countryJson', function($http, $q, jsonhost) {

		this.get = function(bust) {
			var deferred = $q.defer();
			$http({
				url: jsonhost + '/country/country.json?bust' + bust,
				method: 'get'
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;

		};

	});

});
define('jsons/govadmdivJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('govadmdivJson', function($http, $q, jsonhost) {

		this.get = function(id, isAsync, bust) {
			if(!isAsync) {

				var result = "";

				$.ajax({
					url: jsonhost + '/govadmdiv/' + id + '.json?bust' + bust,
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
					url: jsonhost + '/govadmdiv/' + id + '.json?bust' + bust,
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
define('jsons/mainitemJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('mainitemJson', function($http, $q, jsonhost) {

		this.get = function(id, bust) {

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

		};

	});

});
define('jsons/mkgdispgroupJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('mkgdispgroupJson', function($http, $q, jsonhost) {

		this.get = function(id, bust) {
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

		};

	});

});
define('jsons/mkgpgmarticleJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('mkgpgmarticleJson', function($http, $q, jsonhost) {

		this.get = function(id, bust) {
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

		};

	});

});
define('jsons/mkgpgmJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('mkgpgmJson', function($http, $q, jsonhost) {

		this.get = function(id, bust) {
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

		};

	});

});
define('jsons/sitemapJson',['require', './module'], function(require, module) {
	'use strict';

	module.service('sitemapJson', function($http, $q, jsonhost) {

		this.get = function(root, bust) {
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

		};

	});

});
define('jsons/webpagecontentJson',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.service('webpagecontentJson', function($http, $q, webpagehost, viewprefix) {

		this.get = function(pageid, isAsync, bust) {
			if(!isAsync) {

				var result = "";

				$.ajax({
					url: webpagehost + '/webpage/' + viewprefix + pageid + '.content.json?bust' + bust,
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
					url: webpagehost + '/webpage/' + viewprefix + pageid + '.content.json?bust' + bust,
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

		};

	});

});
define('jsons/webpageJson',['require', './module'], function(require, module) {
	'use strict';

	var angular = require('angular');

	module.service('webpageJson', function($http, $q, webpagehost, viewprefix) {

		this.get = function(pageid, isAsync, bust) {

			if(!isAsync) {

				var result = "";
				$.ajax({
					url: webpagehost + '/webpage/' + viewprefix + pageid + '.json?bust' + bust,
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
					url: webpagehost + '/webpage/' + viewprefix + pageid + '.json?bust' + bust,
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
/*
 * json层文件都是用get的方式去访问，有浏览器 缓存
 * 不能用factory 会直接执行
 */
define('jsons/main',['./advertJson', './articlecontentJson', './articleJson',
		'./configJson', './countryJson', './govadmdivJson',
		'./mainitemJson', './mkgdispgroupJson', './mkgpgmarticleJson', './mkgpgmJson',
		'./sitemapJson', './webpagecontentJson', './webpageJson'

	],
	function() {

		'use strict';

	});
define('apis/module',['require'], function(require) {
    'use strict';
    var ng = require('angular'); 
    return ng.module('app.apis', []);
});

define('apis/member2addrApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('member2addrApi', function($http, $q, apihost) {

		this.select = function(pk) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/query/bmb/memberaddr/select',
				method: 'post'
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.get = function(pkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberaddr/get',
				method: 'post',
				params: {
					pk: pkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.delete = function(pkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberaddr/delete',
				method: 'post',
				params: {
					pk: pkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

		this.saveorupdate = function(addr) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberaddr/saveorupdate',
				method: 'post',
				params: {
					data: angular.toJson(addr)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/memberaccountbindingApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberaccountbindingApi', function($http, $q, apihost) {

		this.add = function(accountbinding) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberaccountbinding/add',
				method: 'post',
				params: {
					data: angular.toJson(accountbinding)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/memberaccountApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberaccountApi', function($http, $q, apihost) {

		this.regist = function(user) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/memberaccount/regist',
				method: 'post',
				params: {
					data: angular.toJson(user)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.actionauth = function(actionauth) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/memberaccount/actionauth',
				method: 'post',
				params: {
					data: angular.toJson(actionauth)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.changepassword = function(actionauthpk, pwd) {
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
		};

	});

});
define('apis/memberbrowseApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberbrowseApi', function($http, $q, apihost) {

		this.select = function() {
			var deferred = $q.defer();
			$http({
				url: apihost + '/query/bmb/memberbrowse/select',
				method: 'post',
				params: {

				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

		this.saveorupdate = function(data) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberbrowse/saveorupdate',
				method: 'post',
				params: {
					data: angular.toJson(data)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.delete = function(pkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberbrowse/delete',
				method: 'post',
				params: {
					pk: pkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.deletelist = function(pks) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberbrowse/deletelist',
				method: 'post',
				params: {
					deleltepks: angular.toJson(pks)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/memberfollowApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberfollowApi', function($http, $q, apihost) {

		this.select = function() {
			var deferred = $q.defer();
			$http({
				url: apihost + '/query/bmb/memberfollow/select',
				method: 'post',
				params: {

				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.selectbyobjectpk = function(objectpkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/query/bmb/memberfollow/selectbyobjectpk',
				method: 'post',
				params: {
					objectpk: objectpkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.saveorupdate = function(data) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberfollow/saveorupdate',
				method: 'post',
				params: {
					data: angular.toJson(data)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.delete = function(pkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberfollow/delete',
				method: 'post',
				params: {
					pk: pkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.deletelist = function(pks) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberfollow/deletelist',
				method: 'post',
				params: {
					deleltepks: angular.toJson(pks)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/memberidentifyApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberidentifyApi', function($http, $q, apihost) {

		this.login = function(user) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/memberidentify/login',
				method: 'post',
				params: {
					data: angular.toJson(user)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.logout = function() {
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
		};
		this.getIdentify = function(isAsync) {

			if(!isAsync) {

				var result = "";

				$.ajax({
					url: apihost + '/security/memberidentify/getidentify',
					cache: false,
					async: false,
					type: "post",
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
				//post 不緩存
				var deferred = $q.defer();
				$http({
					url: apihost + '/security/memberidentify/getidentify',
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
define('apis/memberinfoApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('memberinfoApi', function($http, $q, apihost) {

		this.get = function() {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberinfo/get',
				method: 'post',
				params: {

				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.saveorupdate = function(user) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/bmb/memberinfo/saveorupdate',
				method: 'post',
				params: {
					data: angular.toJson(user)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/salesorderApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('salesorderApi', function($http, $q, apihost) {

		this.get = function(value) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/eso/salesorder/get',
				method: 'post',
				params: {
					pk: value
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.setshippingaddr = function(pkvalue, addrpkvalue) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/eso/salesorder/setshippingaddr',
				method: 'post',
				params: {
					pk: pkvalue,
					addrpk: addrpkvalue
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.approve = function(value) {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/eso/salesorder/approve',
				method: 'post',
				params: {
					pk: value
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.convertfromshoppingcart = function() {
			var deferred = $q.defer();
			$http({
				url: apihost + '/entity/eso/salesorder/convertfromshoppingcart',
				method: 'post'
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
define('apis/shoppingcartApi',['require', './module'], function(require, module) {
	'use strict';

	module.service('shoppingcartApi', function($http, $q, apihost) {

		this.get = function() {

	 
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/shoppingcart/get',
				method: 'post',
				params: {

				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		/*
		 * 必须同步否则会和get并发
		 */
		this.initfromshoppingcartkey = function(value) {
 
			var result = "";
			$.ajax({
				url: apihost + '/security/shoppingcart/initfromshoppingcartkey',
				cache: false,
				async: false,
				type: "post",
				dataType: 'json',
				data: {
					pk: value
				},
				success: function(data) {
					result = data;
				}
			});

			return angular.fromJson(result);

		};
		this.saveorupdate = function(md) {
	 
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/shoppingcart/saveorupdate',
				method: 'post',
				params: {

					data: angular.toJson(md)
				}
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};
		this.clear = function() {
			var deferred = $q.defer();
			$http({
				url: apihost + '/security/shoppingcart/clear',
				method: 'post'
			}).then(function(result) {
				deferred.resolve(result.data);
			}).catch(function(result) {
				console.error(result);
				deferred.reject(result);
			});
			return deferred.promise;
		};

	});

});
/*
 * api层用Post的方式去访问，不能缓存
 * 不能用factory 会直接执行
 */
define('apis/main',['./member2addrApi', './memberaccountbindingApi', './memberaccountApi',
		'./memberbrowseApi', './memberfollowApi',
		'./memberidentifyApi', './memberinfoApi',
		'./salesorderApi', './shoppingcartApi'

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
/*
 * 发现在绑定集合ng-repeat 的时候 用指令封装会影响绑定稳定，列表数据有时不显示
 */
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

	module.service('initctrlSvc', function(viewprefix, defaultstate, defaultstateparams,
		$http, $q, $cacheFactory, $window, mockidentify,
		pages, views, webpagehost, currency,
		webpageJson, webpagecontentJson, sitemapJson, configJson, govadmdivJson, mainitemJson,
		advertJson, memberidentifyApi, memberbrowseApi, memberfollowApi, shoppingcartApi,
		dialogSvc, dateformat, $modal, $aside, $alert, $select) {

		this.cachePage = function(rootScope, name, value) {

			var isPageContent = _.startsWith(name, 'page_') && _.endsWith(name, '_content');

			var jsonStr = isPageContent ? value : JSON.stringify(value);

			if(isPageContent) {

				_.set(rootScope, name, jsonStr);
				sessionStorage.setItem(name, _.get(rootScope, name));
			} else {

				_.set(rootScope, name, JSON.parse(jsonStr));
				sessionStorage.setItem(name, JSON.stringify(_.get(rootScope, name)));
			}

		};

		this.initViews = function(rootScope, templateCache, pageid) {

			var pageContent = sessionStorage.getItem('page_' + pageid + '_content');
			if(pageContent === null) {
				//没有预加载，同步加载

				var pageValue = webpageJson.get(pageid, false, rootScope.bust);
				this.cachePage(rootScope, 'page_' + pageid, pageValue);

				var pageContentValue = webpagecontentJson.get(pageid, false, rootScope.bust);
				this.cachePage(rootScope, 'page_' + pageid + '_content', pageContentValue);

				pageContent = sessionStorage.getItem('page_' + pageid + '_content');

			}

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

			_.set(rootScope, 'stateParams', JSON.parse(JSON.stringify(stateParams)));

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
			} else if(state.current.name === 'home') {

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
				console.info('path ' + route);
				paths.push(route);

			});

			rootScope.paths = paths;

		};

		//设置自定义session变量
		this.sessionVar = function(rootScope) {

			if(sessionStorage.getItem('sessionVar') !== null) {
				rootScope.sessionVar = JSON.parse(sessionStorage.getItem('sessionVar'));
			} else {
				rootScope.sessionVar = null;
			}

			rootScope.setSessionVar = function(value) {
				rootScope.sessionVar = value;
				sessionStorage.setItem('sessionVar', JSON.stringify(value));
			};

		};

		this.initIdentify = function(rootScope, state, loginConfig) {

			rootScope.loginValid = function() {
				var data = memberidentifyApi.getIdentify(false);
				if(data === "") {
					state.go('login', {
						template: ''
					}, {
						reload: true
					});
					return false;
				}
				return true;
			};

			if(mockidentify !== null) {
				rootScope.identify = mockidentify;
				return;
			}
			/*
			 * loginConfig.auth === true 强验证模式必须同步等待
			 * loginConfig.auth === false 抓取会员信息用异步就可以，加快非会员页面的速度
			 */
			rootScope.identify = null;

			if(!loginConfig.isAsync) {
				var data = memberidentifyApi.getIdentify(false);
				if(data === "") {
					rootScope.identify = null;
					if(loginConfig.auth) {
						state.go('login', {
							template: ''
						});
					}

				} else {

					rootScope.identify = JSON.parse(data);
					if(!_.isUndefined(rootScope.identify.birthday)) {
						rootScope.identify.birthday = rootScope.identify.birthday.substring(0, 10);
					}

				}
			} else {

				memberidentifyApi.getIdentify(true).then(function(data) {
					if(data !== "") {
						rootScope.identify = data;
						console.info('identify');
						console.info(rootScope.identify);
						if(!_.isUndefined(rootScope.identify.birthday)) {
							rootScope.identify.birthday = rootScope.identify.birthday.substring(0, 10);
						}

					}

				}, function(err) {

				});

			}

		};

		this.initLogout = function(rootScope, state) {

			rootScope.logout = function() {

				memberidentifyApi.logout().then(function(data) {
					rootScope.gohome();
				}, function(err) {
					dialogSvc.error("net error!");
				});

			};

		};

		this.initAside = function(rootScope, viewprefix) {

			rootScope.hideAside = function() {
				rootScope.aside.$promise.then(function() {
					rootScope.aside.hide();
				});
			};

			rootScope.showAsidemenu = function() {

				rootScope.aside = $aside({
					scope: rootScope,
					animation: "am-slide-left",
					placement: 'left',
					templateUrl: webpagehost + '/webpage/' + viewprefix + 'asidemenu.content.json?bust' + rootScope.bust,
					onBeforeHide: function() {
						if(!_.isUndefined(window.beforeHideAsidemenu)) {
							window.beforeHideAsidemenu();
						}

					}
				});

				rootScope.aside.$promise.then(function() {
					rootScope.aside.show();
				});

			};

			if(!_.isUndefined(rootScope.aside)) {

				rootScope.aside.$promise.then(function() {
					rootScope.aside.hide();
				});
			}

		};

		this.initMemberBrowse = function(rootScope, location) {

			rootScope.appendBrowse = function(data) {

				if(rootScope.identify === null) {
					rootScope.appendLocalBrowse(data, location.absUrl());
				} else {
					rootScope.appendSvcBrowse(data, location.absUrl());
				}

			};

			rootScope.appendStorageBrowse = function(storagekey, data, url) {

				var memberbrowses = localStorage.getItem(storagekey);
				if(memberbrowses === null) {
					memberbrowses = [];
				} else {
					memberbrowses = JSON.parse(localStorage.getItem(storagekey));
				}

				for(var i = 0; i < memberbrowses.length; i++) {
					if(memberbrowses[i].url === url) {
						memberbrowses.splice(i, 1);
						break;
					}
				}

				data.url = url;
				memberbrowses.splice(0, 0, data);

				localStorage.setItem(storagekey, JSON.stringify(memberbrowses));

			};

			/*
			 *  加入本地瀏覽記錄
			 */
			rootScope.appendLocalBrowse = function(data, url) {
				rootScope.appendStorageBrowse('localbrowses', data, url);
			};
			/*
			 * 加入服務端瀏覽記錄
			 */
			rootScope.appendSvcBrowse = function(data, _url) {

				memberbrowseApi.saveorupdate({
					objectpk: data.pk,
					objectid: data.id,
					url: _url,
					browsetype: 'mainitem'

				}).then(function(data) {

				}, function(err) {});

			};

			/*
			 * 獲取本地瀏覽記錄
			 */
			rootScope.getLocalBrowses = function() {
				var result = localStorage.getItem('localbrowses');
				if(result === null) {
					result = [];
				} else {
					result = JSON.parse(localStorage.getItem('localbrowses'));
				}
				return result;
			};

		};

		this.initImageLazyLoad = function(rootScope) {

			rootScope.loadImg = function() {

				setTimeout(function() {
					$("img.lazy").lazyload();
				}, 500);
			};

		};

		this.initSubmittime = function(rootScope) {

			rootScope.submittime = null;

			rootScope.submittimeValid = function() {

				if(rootScope.submittime != null) {
					var sec = parseInt((new Date()) - rootScope.submittime) / 1000;
					if(sec < 1) {
						return false;
					}
				}

				rootScope.submittime = new Date();
				return true;

			};
		};

		this.localShoppingcart = function(rootScope) {

			/*
			 * 登陆状态不保存
			 */
			rootScope.setShoppingcartKey = function(key) {

				localStorage.setItem('shoppingcartkey', key);

				memberidentifyApi.getIdentify(true).then(function(data) {
					if(data !== "") {
						localStorage.setItem('shoppingcartkey', null);
					}

				}, function(err) {

				});
			};

			/*
			 * 系统执行一次本地购物车同步服务购物车
			 */
			if(sessionStorage.getItem('isinitfromshoppingcartkey') === null) {
				if(localStorage.getItem('shoppingcartkey') != null) {
					console.info(localStorage.getItem('shoppingcartkey'));
					shoppingcartApi.initfromshoppingcartkey(localStorage.getItem('shoppingcartkey'));
				}
				sessionStorage.setItem('isinitfromshoppingcartkey', true);
			}

		};

		this.initFastShoppingcart = function(rootScope) {

			rootScope.loadFastShoppingcart = function() {

				shoppingcartApi.get().then(function(data) {

					rootScope.setShoppingcartKey(data.pk);

					rootScope.fastshoppingcartmainitems = [];
					rootScope.loadMainitems(data.lines, 'fastshoppingcartmainitems');
					rootScope.fastshoppingcart = data;

				}, function(err) {

				});

			};

			//延迟否则影响shoppingcart 显示
			setTimeout(function() {
				rootScope.loadFastShoppingcart();
			}, 3000);

		};

		this.initMainitems = function(rootScope) {

			rootScope.loadMainitems = function(lines, targetName) {

				if(_.isUndefined(lines) || lines === null) {
					return;
				}

				var promises = [];

				for(var i = 0; i < lines.length; i++) {
					var mainitemno = lines[i].mainitem.id;
					promises.push(mainitemJson.get(mainitemno, rootScope.bust));
				}

				$q.all(promises).then(function(values) {

						var target = values;

						for(var i = 0; i < values.length; i++) {

							for(var j = 0; j < values[i].dispunits.length; j++) {
								var el = values[i].dispunits[j];

								if(el.prodspec1.id === lines[i].prodspec1.id) {
									target[i].dispunit = el;

								}

							}

						}

						_.set(rootScope, targetName, values);

						if(!_.isUndefined($window.afterLoadMainitems)) {

							$window.afterLoadMainitems();
						}

					})
					.catch(function(err) {
						console.log(err);
					});
			};

		};

		this.initExt = function(rootScope, state) {
			rootScope.go = function(name, params) {
				state.go(name, params, {
					reload: true
				});
			};

			rootScope.gohome = function() {
				state.go(defaultstate, defaultstateparams, {
					reload: true
				});
			};

		};

		this.controlLoad = function(pageid, state, location, rootScope, stateParams, templateCache, loginConfig) {

			if(sessionStorage.getItem('config') != null) {

				rootScope.bust = sessionStorage.getItem("bust");
				rootScope.currency = currency;

				this.initViews(rootScope, templateCache, pageid);
				this.initRootScope(rootScope, stateParams);
				this.initTitle(pageid, rootScope);
				this.initPath(rootScope, stateParams, state);
				this.initAside(rootScope, viewprefix);
				this.initIdentify(rootScope, state, loginConfig);
				this.sessionVar(rootScope);
				//				this.initShoppnigcart(rootScope); 
				this.initMemberBrowse(rootScope, location);
				this.initImageLazyLoad(rootScope);
				this.initSubmittime(rootScope);
				this.localShoppingcart(rootScope);
				this.initMainitems(rootScope);
				this.initFastShoppingcart(rootScope);
				this.initExt(rootScope, state);
				this.initLogout(rootScope, state);

				rootScope.localbrowses = rootScope.getLocalBrowses();

				return true;
			} else {

				sessionStorage.setItem('redirect', location.absUrl());
				state.go('load', {}, {
					reload: true
				});
				return false;
			}
		};

		this.getTemplate = function(stateParams) {
			var result = !_.isNull(stateParams.template) && _.trim(stateParams.template).length > 0 ?
				'_' + stateParams.template :
				'';
			return result;
		};

		this.resourcesInit = function(win, rootScope, state) {

			var bust = (new Date()).getTime();
			sessionStorage.setItem("bust", bust);

			var promises = [];
			var objectNames = ['config', 'webpc', 'menu', 'utility', 'advert'];

			promises.push(configJson.get(bust));
			promises.push(sitemapJson.get('webpc', bust));
			promises.push(sitemapJson.get('menu', bust));
			promises.push(sitemapJson.get('utility', bust));
			promises.push(advertJson.get(bust));
			var forms = [];
			$.merge(forms, pages);
			$.merge(forms, views);

			_(forms).forEach(function(page) {

				promises.push(webpageJson.get(page, true, bust));
				promises.push(webpagecontentJson.get(page, true, bust));

				objectNames.push('page_' + page);
				objectNames.push('page_' + page + "_content");

			});

			var cachePage = this.cachePage;

			var _state = state;
			$q.all(promises).then(function(values) {

				for(var i = 0; i < values.length; ++i) {

					var value = values[i];
					var name = objectNames[i];

					cachePage(rootScope, name, value);
				}

				var redirect = sessionStorage.getItem('redirect');
				sessionStorage.removeItem('redirect');

				if(_.isNull(redirect)) {
					_state.go(defaultstate, defaultstateparams, {
						reload: true
					});
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
define('services/dialogSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('dialogSvc', function($rootScope, $modal, $aside, $alert, languageSvc) {

		this.error = function(message) {

			var alert = $alert({
				title: languageSvc.error(),
				content: message,
				placement: 'top',
				animation: 'am-fade-and-slide-top',
				type: 'danger',
				duration: 3,
				show: true
			}); 

		};


		this.error = function(message) {

			var alert = $alert({
				title: languageSvc.error(),
				content: message,
				placement: 'top',
				animation: 'am-fade-and-slide-top',
				type: 'danger', 
				show: true
			}); 
		};
		
		this.confirm = function(message) {
			return window.confirm(message);
		};

	});

});
define('services/languageSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('languageSvc', function(lanuage) {

	 

		this.warning = function(message) {

			if(lanuage === 'zh-TW') {
				return '提示 ';
			}

			return '';
		};

		this.error = function(message) {

			if(lanuage === 'zh-TW') {
				return '錯誤';
			}

			return '';
		};

		this.confirm_delete = function(message) {

			if(lanuage === 'zh-TW') {
				return '確定要刪除' + message + '嗎？';
			}

			return '';
		};

	});

});
define('services/mainitemSvc',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.service('mainitemSvc', function($q, mainitemJson, memberfollowApi, dialogSvc) {

		this.init = function(scope, rootScope, location, stateParams) {

			scope.follow = null;
			scope.itemqty = 1;
			scope.mainitem = null;

			scope.appendSuit = function(mainitem) {
				var promises = [];
				_(mainitem.suits).forEach(function(el) {

					promises.push(mainitemJson.get(el.mainitemno, rootScope.bust));
				});

				$q.all(promises).then(function(suitmainitems) {

					mainitem.suits = [];
					mainitem.suits = suitmainitems;
				});
			};

			scope.memberfollow = function(mainitem) {

				memberfollowApi.selectbyobjectpk(mainitem.pk).then(function(data) {
						if(data.length > 0) {
							scope.follow = data[0];
						}
					})
					.catch(function(err) {
						console.log(err);
					});

			};

			scope.appendFollow = function(md, evt) { 
				
				if(!rootScope.loginValid()) {  
					return;
				}

				memberfollowApi.saveorupdate({
					objectpk: md.pk,
					objectid: md.id,
					url: location.absUrl(),
					followtype: 'mainitem'

				}).then(function(data) {
					scope.memberfollow(scope.mainitem); 
				}, function(err) {
					dialogSvc.error(err);  
				});

			};

			scope.deleteFollow = function(md, evt) {
 
				
				memberfollowApi.delete(md.pk).then(function(data) {

					if(JSON.stringify(data).toLowerCase() === 'true') {
						scope.follow = null;
					} else {
						dialogSvc.error(data.message);
					}
					 

				}, function(err) {

					dialogSvc.error(err); 
				});

			};

			scope.plusItemQty = function() {
				if(scope.itemqty < 999) {
					scope.itemqty = scope.itemqty + 1;
				}

			};

			scope.minuItemQty = function() {
				if(scope.itemqty >= 2) {
					scope.itemqty = scope.itemqty - 1;
				}

			};

			/*
			 * loadSuccessHandle
			 */
			scope.load = function() {

				mainitemJson.get(stateParams.mainitemno, rootScope.bust).then(function(data) {

						scope.mainitem = data;

						scope.prodspec1 = scope.mainitem.dispunits[0].prodspec1;
						_(scope.mainitem.dispunits).forEach(function(el) {
							if(stateParams.prodspec1 === el.prodspec1.id) {
								scope.prodspec1 = el.prodspec1;
							}
						});

						_(scope.mainitem.dispunits).forEach(function(el) {

							if(el.prodspec1.id === scope.prodspec1.id) {

								scope.dispunit = el;
								scope.prodspec2 = el.items[0].prodspec2;
								scope.item = el.items[0];

								_(el.items).forEach(function(item) {
									if(stateParams.prodspec2 === item.prodspec2.id) {
										scope.prodspec2 = item.prodspec2;
										scope.item = item;
									}
								});

							}

						});

						scope.appendSuit(scope.mainitem);

						console.info('mainitem');
						console.info(scope.mainitem);
						console.info('dispunit');
						console.info(scope.dispunit);
						console.info('item');
						console.info(scope.item);

						if(!_.isUndefined(scope.loadSuccessHandle)) {
							scope.loadSuccessHandle();
						}

					})
					.catch(function(err) {
						console.log(err);
					});

			};

		};

	});

});
define('services/main',['./testSvc', './codeSvc', './initctrlSvc', './pageSvc', './dialogSvc', './languageSvc', './mainitemSvc'],
	function() {

		'use strict';

	});
define('controllers/module',['require'], function(require) {
	'use strict';
	var ng = require('angular');
	return ng.module('app.controllers', []);
});
define('controllers/articleCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('articleCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc, articlecontentJson) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('article' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('article.html', '');
			return;
		}

		var content = articlecontentJson.get($stateParams.id, false, $rootScope.bust);
		$templateCache.put('content.html', content);

	});

});
define('controllers/errorCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('errorCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('error' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('error.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/homeCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('homeCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('home' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('home.html', '');
			return;
		}
		 
		$rootScope.loadImg();

	});

});
define('controllers/mkgdispgroupCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mkgdispgroupCtrl', function(viewprefix, $q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mkgdispgroupJson, mainitemJson, pageSvc, webpagehost, $modal, $aside, $alert, $select) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('mkgdispgroup' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

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
			}, {
				reload: true
			});
		};

		$scope.showMkgdispgroupasidefilter = function() {
			//			var contentHtml = $window.getAsideFilter(md);

			$rootScope.aside = $aside({
				scope: $scope,				
				animation: "am-slide-left",
				placement: 'left',
				templateUrl: webpagehost + '/webpage/' + viewprefix + 'mkgdispgroupasidefilter.content.json?bust' + $rootScope.bust
			});

			$rootScope.aside.$promise.then(function() {
				$rootScope.aside.show();
			});

		};

		$scope.load = function(page) {

			mkgdispgroupJson.get($stateParams.id, $rootScope.bust).then(function(data) {

					$scope.data = data;

					$rootScope.title = '[' + data.name + '] -' + $rootScope.title;

					$scope.mkgdispgroup = {};
					_.set($scope.mkgdispgroup, "id", data.id);
					_.set($scope.mkgdispgroup, "name", data.name);
					_.set($scope.mkgdispgroup, "lines", []);

					$scope.loadMainitem(data, page);
				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.loadMainitem = function(data, page) {

			var promises = [];

			var fetch = pageSvc.fetch($scope, data.lines, page);

			for(var i = fetch.first; i < fetch.max; i++) {
				if(i < data.lines.length) {
					var mainitemno = data.lines[i].mainitemno;
					promises.push(mainitemJson.get(mainitemno, $rootScope.bust));
				}
			}

			$q.all(promises).then(function(values) {

					for(var i = 0; i < values.length; i++) {
						var mainitem = values[i];
						$scope.mkgdispgroup.lines.push(mainitem);
					}

					console.info($scope.mkgdispgroup);

					$rootScope.loadImg();

					if(!_.isUndefined($window.afterLoad)) {

						$window.afterLoad();
					}

				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.loadMore = function() {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if($scope.page < $scope.pagecount) {
				$scope.loadMainitem($scope.data, $scope.page + 1);
			}
		};

		$scope.load(_.parseInt($stateParams.page));

	});

});
define('controllers/mkgpgmarticleCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('mkgpgmarticleCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc,
		mkgpgmarticleJson, mainitemJson) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('mkgpgmarticle' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('mkgpgmarticle.html', '');
			return;
		}

		$scope.appendSuit = function(mainitem) {
			var promises = [];
			_(mainitem.suits).forEach(function(el) {

				promises.push(mainitemJson.get(el.mainitemno));
			});

			$q.all(promises).then(function(suitmainitems) {
				mainitem.suits = [];
				mainitem.suits = suitmainitems;
			});
		};

		mkgpgmarticleJson.get($stateParams.id, $rootScope.bust).then(function(data) {

				var title = '[' + data.name + ' ' + data.id + ']';

				$scope.mkgpgmarticle = data;
				var mainitemnos = [];
				_.forEach(data.lines, function(mainitem) {
					mainitemnos.push(mainitem.id);
				});

				$scope.mkgpgmarticle.lines = [];

				var promises = [];

				for(var i = 0; i < mainitemnos.length; i++) {
					promises.push(mainitemJson.get(mainitemnos[i], $rootScope.bust));
				}

				$q.all(promises).then(function(values) {

					_(values).forEach(function(mainitem) {

						$scope.appendSuit(mainitem);

						title += ' [' + mainitem.name + ' ' + mainitem.dispunits[0].id + ' ' + mainitem.dispunits[0].prodspec1.name + ']';

						$scope.mkgpgmarticle.lines.push(mainitem);

					});

					$rootScope.loadImg();

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
		mkgpgmJson, mkgpgmarticleJson, pageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('mkgpgm' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

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
			}, {
				reload: true
			});
		};

		$scope.load = function(page) {

			mkgpgmJson.get($stateParams.id, $rootScope.bust).then(function(data) {

					$scope.data = data;

					$rootScope.title = '[' + data.name + '] -' + $rootScope.title;

					$scope.mkgpgm = {};
					_.set($scope.mkgpgm, "id", data.id);
					_.set($scope.mkgpgm, "name", data.name);
					_.set($scope.mkgpgm, "lines", []);

					$scope.loadMkgpgm(data, page);

				})
				.catch(function(err) {
					console.log(err);
				});

		};

		$scope.loadMkgpgm = function(data, page) {

			var promises = [];

			var fetch = pageSvc.fetch($scope, data.lines, page);

			for(var i = fetch.first; i < fetch.max; i++) {
				if(i < data.lines.length) {
					var articleid = data.lines[i].articleid;
					promises.push(mkgpgmarticleJson.get(articleid, $rootScope.bust));
				}
			}

			$q.all(promises).then(function(values) {

					_(values).forEach(function(mkgpgmarticle) {
						$scope.mkgpgm.lines.push(mkgpgmarticle);
					});

					$rootScope.loadImg();

					if(!_.isUndefined($window.afterLoad)) {

						$window.afterLoad();
					}
				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.loadMore = function() {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if($scope.page < $scope.pagecount) {
				$scope.loadMkgpgm($scope.data, $scope.page + 1);
			}
		};

		$scope.load(_.parseInt($stateParams.page));

	});

});
define('controllers/mainitemCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	/*
	 * /mainitem/:template/:path/:mainitemno/:spec1/:spec2
	 */

	module.controller('mainitemCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		mainitemJson, memberfollowApi, shoppingcartApi, mainitemSvc, initctrlSvc, dialogSvc, $alert) {

		var template = initctrlSvc.getTemplate($stateParams);

		var isload = initctrlSvc.controlLoad('mainitem' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('mainitem.html', '');
			return;
		}

		$scope.loadSuccessHandle = function() {

			$rootScope.loadImg();

			var title = '[' + $scope.mainitem.name + ' ' + $scope.dispunit.id + ' ' + $scope.dispunit.prodspec1.name + ']';

			if(!_.isUndefined($scope.mainitem.brand) && _.trim($scope.mainitem.brand.name) !== "") {
				title += ' ' + $scope.mainitem.brand.name;
			}
			$rootScope.title = title + ' -' + $rootScope.title;

			setTimeout(function() {
				if($rootScope.identify !== null) {

					$scope.memberfollow($scope.mainitem);
				}
				$scope.appendBrowse($scope.mainitem);

			}, 1000);

		};

		mainitemSvc.init($scope, $rootScope, $location, $stateParams);

		$scope.load();

	});

});
define('controllers/itemsearchCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('itemsearchCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('itemsearch' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('itemsearch.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/loginCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('loginCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberidentifyApi, shoppingcartApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('login' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('login.html', '');
			return;
		}

		$scope.user = {
			id: null,
			password: null
		};

		if($rootScope.identify !== null) {

			$rootScope.gohome();
			return;
		}

		$scope.login = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			$scope.user.id = md.id;
			$scope.user.password = md5(md.password);

			memberidentifyApi.login($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					if(!_.isUndefined($rootScope.loginReturnState) && $rootScope.loginReturnState != null) {

						$state.go($rootScope.loginReturnState.name, $rootScope.loginReturnParams, {
							reload: true
						});

					} else {
						$rootScope.gohome();
					}

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

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
		var isload = initctrlSvc.controlLoad('member' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('member.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/salesorderCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	/*
	 * /order/:template/:pk
	 */
	module.controller('salesorderCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		salesorderApi, shoppingcartApi, member2addrApi, mainitemJson, initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('salesorder' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {
			$templateCache.put('salesorder.html', '');
			return;
		}

		$scope.addresslist = [];
		$scope.salesorder = null;

		$scope.approve = function() {

			$.bizerror('');

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			salesorderApi.approve($stateParams.pk).then(function(data) {

				if(!_.isUndefined(data.errorcode)) {
					$.bizerror(data.message);
					return;
				}

				$state.go('orderconfirmsuccess', {
					template: '',
					pk: data.pk
				}, {
					reload: true
				});

			}, function(err) {

				dialogSvc.error(err);
			});

		};

		$scope.load = function() {

			if(!$rootScope.loginValid()) {
				return;
			}

			salesorderApi.get($stateParams.pk).then(function(data) {
				console.info(data.isapprove);
				if(data.isapprove) {

					$rootScope.gohome();
					return;
				}
				$rootScope.loadMainitems(data.lines, 'mainitems');
				$scope.salesorder = data;

			}, function(err) {

				$rootScope.gohome();

			});

		};

		$scope.setShippingaddr = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			salesorderApi.setshippingaddr($stateParams.pk, md.pk).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					$scope.addresslist = [];
					$scope.load();

				}

			}, function(err) {

				dialogSvc.error(err);
			});
		};

		$scope.toggleAddrs = function() {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			if($scope.addresslist.length === 0) {

				member2addrApi.select().then(function(data) {

					$scope.addresslist = data;

				}, function(err) {
					console.error(err);
				});

			} else {
				$scope.addresslist = [];
			}

		};

		$scope.load();
		$rootScope.loadImg();

	});

});
define('controllers/shoppingcartadditemCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	/*
	 * 添加到购物车
	 * /shoppingcartadditem/:template/:mainitemno/:prodspec1/:prodspec2/:shoppingqty
	 * 
	 */
	module.controller('shoppingcartadditemCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		shoppingcartApi, mainitemJson, mainitemSvc, initctrlSvc, dialogSvc, languageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('shoppingcartadditem' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('shoppingcartadditem.html', '');
			return;
		}

		$scope.loadSuccessHandle = function() {

			$rootScope.loadImg();

			var isRefresh = _.isUndefined($rootScope.fromState) || $rootScope.fromState.name === '';
			if(!isRefresh && $rootScope.fromState.name !== "shoppingcart") { //防止返回

				$scope.addShoppingcart();
				return;

			}

			$state.go('shoppingcart', {
				template: ''
			}, {
				reload: true
			});

		};

		$scope.state = 0;

		$scope.addShoppingcart = function() {

			shoppingcartApi.get().then(function(shoppingcart) {

				$rootScope.setShoppingcartKey(shoppingcart.pk);

				if(shoppingcart.lines === null) {
					shoppingcart.lines = [];
				}

				/*
				 * merge
				 */
				var line = {
					mainitem: {
						pk: $scope.mainitem.pk
					},
					prodspec1: {
						pk: $scope.prodspec1.pk
					},
					prodspec2: {
						pk: $scope.prodspec2.pk
					},
					item: {
						pk: $scope.item.pk
					},
					txsqty: $stateParams.shoppingqty
				};

				var ismerge = false;
				for(var i = 0; i < shoppingcart.lines.length; i++) {
					var el = shoppingcart.lines[i];

					if(el.item.pk === line.item.pk) {
						el.txsqty = parseInt(el.txsqty) + parseInt(line.txsqty);
						ismerge = true;
						break;
					}

				}

				if(!ismerge) {
					shoppingcart.lines.push(line);
				}

				shoppingcartApi.saveorupdate(shoppingcart).then(function(d) {

					$scope.state = 1;

				}, function(err) {
					$scope.state = 2;
				});

			}, function(err) {
				$scope.state = 2;
			});

		};

		mainitemSvc.init($scope, $rootScope, $location, $stateParams);

		$scope.load();

	});

});
define('controllers/shoppingcartCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	/*
	 * pk和ver不一致就刷新 
	 */
	module.controller('shoppingcartCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		shoppingcartApi, salesorderApi, mainitemJson, initctrlSvc, dialogSvc, languageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('shoppingcart' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('shoppingcart.html', '');
			return;
		}

		$scope.remove = function(line) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(dialogSvc.confirm(languageSvc.confirm_delete(line.mainitem.name))) {
				var lines = _.remove($scope.shoppingcart.lines, function(n) {
					return n.pk === line.pk;
				});

				$scope.save();
			}

		};

		$scope.minu = function(line) {

			if(line.txsqty >= 2) {
				line.txsqty = line.txsqty - 1;
			}

			$scope.save();
		};

		$scope.plus = function(line) {

			if(line.txsqty < 999) {
				line.txsqty = line.txsqty + 1;
			}
			$scope.save();
		};

		$scope.convertorder = function() {

			$.bizerror('');

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			shoppingcartApi.get().then(function(data) {

				$rootScope.setShoppingcartKey(data.pk);
				if(data.ver !== $scope.shoppingcart.ver || data.pk !== $scope.shoppingcart.pk) {
					$scope.load();
					return;
				}

				salesorderApi.convertfromshoppingcart().then(function(ord) {

					if(!_.isUndefined(ord.errorcode)) {
						$.bizerror(ord.message);
						return;
					}

					$state.go('salesorder', {
						template: '',
						pk: ord.pk
					}, {
						reload: true
					});

				}, function(err) {

					dialogSvc.error(err);
				});

			}, function(err) {

				dialogSvc.error(err);
			});

		};

		$scope.save = function() {

			shoppingcartApi.get().then(function(data) {

				$rootScope.setShoppingcartKey(data.pk);

				if(data.ver !== $scope.shoppingcart.ver || data.pk !== $scope.shoppingcart.pk) {
					$scope.load();
					return;
				}

				shoppingcartApi.saveorupdate($scope.shoppingcart).then(function(d) {

					$scope.load();
				}, function(err) {

					dialogSvc.error(err);
				});

			}, function(err) {

				dialogSvc.error(err);
			});

		};

		$scope.load = function() {
			 
				
			shoppingcartApi.get().then(function(data) {
	
				$rootScope.setShoppingcartKey(data.pk);

				$rootScope.loadMainitems(data.lines, 'mainitems');
				$scope.shoppingcart = data;

			}, function(err) {

				dialogSvc.error(err);
			});

		};

		$scope.load();
		$rootScope.loadImg();

	});

});
define('controllers/orderpayCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('orderpayCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('orderpay' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('orderpay.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/orderconfirmsuccessCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('orderconfirmsuccessCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		salesorderApi, initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('orderconfirmsuccess' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('orderconfirmsuccess.html', '');
			return;
		}

		$scope.load = function() {

			salesorderApi.get($stateParams.pk).then(function(data) {
				console.info(data.isapprove);
				if(!data.isapprove) {

					$rootScope.gohome();
					return;
				}

				$rootScope.loadMainitems(data.lines, 'mainitems');
				$scope.salesorder = data;

			}, function(err) {

				$rootScope.gohome();

			});

		};

		$scope.load();

		$rootScope.loadImg();

	});

});
define('controllers/orderpaysuccessCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('orderpaysuccessCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('orderpaysuccess' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('orderpaysuccess.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/registCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('registCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('regist' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('regist.html', '');
			return;
		}

		$scope.user = {
			id: null,
			password: null,
			email: null,
			mobphoneno: null,
			authtype: null,
			client: (new Date()).toISOString()
		};

		$scope.regist = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			$scope.user.id = md.id;
			$scope.user.password = md5(md.password);
			$scope.user.email = md.email;
			$scope.user.mobphoneno = md.mobphoneno;
			$scope.user.authtype = md.authtype;

			memberaccountApi.regist($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {
					$state.go("info", {
						template: 'registsuccess',
						message: $scope.user.id
					}, {
						reload: true
					});
				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};
	});

});
define('controllers/loadCtrl',['require', './module'], function(require, module) {
	'use strict';

	module.controller('loadCtrl', function($scope, $rootScope, $templateCache, $state, $window,
		initctrlSvc, webpageJson, webpagecontentJson) {

		//		var webpage = webpageJson.get('load', false); 加快速度避免過多同步
		$rootScope.title = '';
		$rootScope.icon = '';
		var webpagecontent = webpagecontentJson.get('load', false);

		$templateCache.put('load.html', webpagecontent);
		initctrlSvc.resourcesInit($window, $rootScope, $state);

	});

});
define('controllers/infoCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('infoCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window, initctrlSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('info' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('info.html', '');
			return;
		}

		$scope.message = $stateParams.message;

		$rootScope.loadImg();

	});

});
define('controllers/actionauthCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('actionauthCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('actionauth' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: false
		});

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

		$scope.send = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			$scope.actionauth.authfrom = md.authfrom;

			memberaccountApi.actionauth($scope.actionauth).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {
					if($scope.actionauth.authtype === 'email') {

						$state.go("info", {
							template: 'gotoemail',
							message: ''
						}, {
							reload: true
						});
					}

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};

		$rootScope.loadImg();

	});

});
define('controllers/changepasswordCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var md5 = require('md5');

	module.controller('changepasswordCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountApi, memberidentifyApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('changepassword' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: false,
			isAsync: true
		});

		if(!isload) {

			$templateCache.put('changepassword.html', '');
			return;
		}

		$scope.md = {
			actionauthpk: $stateParams.actionauthpk,
			password: null
		};

		$scope.changepassword = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			$scope.md.password = md.password;

			memberaccountApi.changepassword($scope.md.actionauthpk, md5($scope.md.password)).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyApi.logout().then(function(da) {

						$state.go("info", {
							template: 'changepasswordsuccess',
							message: ''
						}, {
							reload: true
						});

					}, function(err) {

					});

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};

		$rootScope.loadImg();

	});

});
define('controllers/bindingemailCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('bindingemailCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberaccountbindingApi, memberidentifyApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('bindingemail' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('bindingemail.html', '');
			return;
		}

		$scope.accountbinding = {
			id: $rootScope.identify.email,
			authtype: 'email',
			client: (new Date()).toISOString()
		};

		$scope.send = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			$scope.accountbinding.id = md.id;

			memberaccountbindingApi.add($scope.accountbinding).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyApi.logout().then(function(da) {

						$state.go("info", {
							template: 'gotoemail',
							message: $rootScope.identify.email
						}, {
							reload: true
						});

					}, function(err) {

					});

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};

		$rootScope.loadImg();

	});

});
define('controllers/memberaddresslistCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberaddresslistCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, countryJson, govadmdivJson, member2addrApi, languageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberaddresslist' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberaddresslist.html', '');
			return;
		}

		$scope.addresslist = [];

		$scope.load = function() {
			member2addrApi.select().then(function(data) {
				$scope.addresslist = data;

			}, function(err) {
				console.error(err);
			});
		};

		$scope.delete = function(md) {

			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			if(dialogSvc.confirm(languageSvc.confirm_delete(md.addr1))) {
				member2addrApi.delete(md.pk).then(function(data) {

					if(JSON.stringify(data).toLowerCase() === 'true') {

						$scope.load();

					} else {

						dialogSvc.error(data.message);

					}

				}, function(err) {
					dialogSvc.error(err);
				});

			}
		};

		$rootScope.loadImg();
		$scope.load();
	});

});
define('controllers/memberaddressmodifyCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberaddressmodifyCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, govadmdivJson, countryJson, member2addrApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberaddressmodify' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberaddressmodify.html', '');
			return;
		}

		$scope.address = {
			addrtype: null,
			country: null,
			state: null,
			city: null,
			district: null,
			county: null,
			addr1: null,
			addr2: null,
			addr3: null,
			name: null,
			zipcode: null,
			phoneno: null,
			contacts: null,
			mobphoneno: null
		};

		$scope.currGovadmdiv = [];

		countryJson.get($rootScope.bust).then(function(data) {
			$scope.govadmdiv = data;
			$scope.currGovadmdiv = data;
		}, function(err) {
			console.error(err);
		});

		$scope.load = function(pk) {

			member2addrApi.get(pk).then(function(data) {
				$scope.address = data;
				$scope.currGovadmdiv = [];
				console.info($scope.address);
			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');
			});
		};

		if($stateParams.ismajor === 'true') {
			//主地址查询

			member2addrApi.select().then(function(data) {
				for(var i = 0; i < data.length; i++) {
					if(data[i].ismajor) {
						$scope.load(data[i].pk);
					}
				}
			}, function(err) {
				console.error(err);
			});

		} else {

			if($stateParams.pk !== '') {

				$scope.load($stateParams.pk);
			}

		}

		$scope.selectGovadmdiv = function(arg, after) {

			$scope.currGovadmdiv = [];
			var isCountry = _.isUndefined(arg.lines);
			if(isCountry) {

				govadmdivJson.get(arg.id, true, $rootScope.bust).then(function(data) {
					arg.lines = data;
					if(arg.lines.length > 0) {
						$scope.currGovadmdiv = arg.lines;

						if(!_.isUndefined(after)) {
							after();
						}

					}
				}, function(err) {
					console.error(err);
				});

			} else {
				if(arg.lines.length > 0) {
					$scope.currGovadmdiv = arg.lines;
					if(!_.isUndefined(after)) {
						after();
					}

				}
			}

		};
		$scope.clear = function() {

			$scope.address.country = null;
			$scope.address.state = null;
			$scope.address.city = null;
			$scope.address.district = null;
			$scope.currGovadmdiv = $scope.govadmdiv;
		};
		$scope.selectCountry = function(arg) {

			$scope.selectGovadmdiv(arg, function() {
				if($scope.currGovadmdiv.length === 1) {
					$scope.selectState($scope.currGovadmdiv[0]);
				}
			});
			$scope.address.country = {
				pk: arg.pk,
				id: arg.id,
				name: arg.name
			};

		};
		$scope.selectState = function(arg) {

			$scope.selectGovadmdiv(arg, function() {
				if($scope.currGovadmdiv.length === 1) {
					$scope.selectCity($scope.currGovadmdiv[0]);
				}
			});
			$scope.address.state = {
				pk: arg.pk,
				id: arg.id,
				name: arg.name
			};

		};
		$scope.selectCity = function(arg) {

			$scope.selectGovadmdiv(arg, function() {
				if($scope.currGovadmdiv.length === 1) {
					$scope.selectDistrict($scope.currGovadmdiv[0]);
				}
			});
			$scope.address.city = {
				pk: arg.pk,
				id: arg.id,
				name: arg.name
			};

		};
		$scope.selectDistrict = function(arg) {

			$scope.selectGovadmdiv(arg, function() {
				if($scope.currGovadmdiv.length === 1) {
					$scope.selectCounty($scope.currGovadmdiv[0]);
				}
			});
			$scope.address.district = {
				pk: arg.pk,
				id: arg.id,
				name: arg.name
			};

		};
		$scope.selectCounty = function(arg) {

			$scope.selectGovadmdiv(arg);
			$scope.address.county = {
				pk: arg.pk,
				id: arg.id,
				name: arg.name
			};

		};

		$scope.save = function(md) {
			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			if($stateParams.ismajor === 'true') {
				$scope.address.ismajor = true;
				$scope.address.addrtype = {
					pk: '10009G'
				};
			} else {

				$scope.address.ismajor = false;
				$scope.address.addrtype = {
					pk: '10009A'
				};
			}

			$scope.address.name = md.name;
			$scope.address.mobphoneno = md.mobphoneno;
			$scope.address.contacts = md.contacts;
			$scope.address.phoneno = md.phoneno;
			$scope.address.zipcode = md.zipcode;
			$scope.address.addr1 = md.addr1;
			$scope.address.addr2 = md.addr2;
			$scope.address.addr3 = md.addr3;

			member2addrApi.saveorupdate($scope.address).then(function(data) {

				if(_.isUndefined(data.errorcode)) {

					if($stateParams.ismajor === 'true') {

						$state.go("member", {
							template: ''
						}, {
							reload: true
						});
					} else {

						$state.go("memberaddresslist", {
							template: ''
						}, {
							reload: true
						});
					}

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};

		$rootScope.loadImg();

	});

});
define('controllers/memberbrowseCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberbrowseCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		memberbrowseApi, mainitemJson, initctrlSvc, dialogSvc, languageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberbrowse' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberbrowse.html', '');
			return;
		}

		$scope.browses = [];

		$scope.loadDetail = function(data) {

			var promises = [];
			console.info(data);
			for(var i = 0; i < data.length; i++) {
				var mainitemno = data[i].objectid;
				promises.push(mainitemJson.get(mainitemno, $rootScope.bust));
			}

			$q.all(promises).then(function(values) {

					for(var i = 0; i < values.length; i++) {
						values[i].url = data[i].url;
						values[i].pk = data[i].pk;
						$scope.browses.push(values[i]);

					}

					$rootScope.loadImg();

					if(!_.isUndefined($window.afterLoad)) {

						$window.afterLoad();
					}

				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.load = function() {
			memberbrowseApi.select().then(function(data) {
					$scope.browses = [];
					$scope.loadDetail(data);
				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.delete = function(md) {
			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			memberbrowseApi.delete(md.pk).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					$scope.load();

				} else {

					dialogSvc.error(data.message);

				}

			}, function(err) {
				dialogSvc.error(err);
			});
		};

		$scope.deletelist = function() {
			if(!$rootScope.submittimeValid()) {
				return;
			}
			if(!$rootScope.loginValid()) {
				return;
			}

			var pks = [];
			_.forEach($scope.browses, function(value) {
				pks.push({
					pk: value.pk
				});
			});

			if(dialogSvc.confirm(languageSvc.confirm_delete(""))) {
				memberbrowseApi.deletelist(pks).then(function(data) {

					if(JSON.stringify(data).toLowerCase() === 'true') {

						$scope.load();

					} else {

						dialogSvc.error(data.message);

					}

				}, function(err) {
					dialogSvc.error(err);
				});
			}

		};

		$scope.load();

	});

});
define('controllers/memberfollowCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberfollowCtrl', function($q, $scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		memberfollowApi, mainitemJson, initctrlSvc, dialogSvc, languageSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberfollow' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberfollow.html', '');
			return;
		}

		$scope.follows = [];

		$scope.loadDetail = function(data) {

			var promises = [];
			console.info(data);
			for(var i = 0; i < data.length; i++) {
				var mainitemno = data[i].objectid;
				promises.push(mainitemJson.get(mainitemno, $rootScope.bust));
			}

			$q.all(promises).then(function(values) {

					for(var i = 0; i < values.length; i++) {
						values[i].url = data[i].url;
						values[i].pk = data[i].pk;
						$scope.follows.push(values[i]);

					}

					$rootScope.loadImg();

					if(!_.isUndefined($window.afterLoad)) {

						$window.afterLoad();
					}

				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.load = function() {
			memberfollowApi.select().then(function(data) {
					$scope.follows = [];
					$scope.loadDetail(data);
				})
				.catch(function(err) {
					console.log(err);
				});
		};

		$scope.delete = function(md) {
			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}
			memberfollowApi.delete(md.pk).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					$scope.load();

				} else {

					dialogSvc.error(data.message);

				}

			}, function(err) {
				dialogSvc.error(err);
			});
		};

		$scope.deletelist = function() {
			if(!$rootScope.submittimeValid()) {
				return;
			}
			if(!$rootScope.loginValid()) {
				return;
			}
			var pks = [];
			_.forEach($scope.follows, function(value) {
				pks.push({
					pk: value.pk
				});
			});

			if(dialogSvc.confirm(languageSvc.confirm_delete(""))) {
				memberfollowApi.deletelist(pks).then(function(data) {

					if(JSON.stringify(data).toLowerCase() === 'true') {

						$scope.load();

					} else {

						dialogSvc.error(data.message);

					}

				}, function(err) {
					dialogSvc.error(err);
				});
			}

		};

		$scope.load();

	});

});
define('controllers/membermodifyCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('membermodifyCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc, memberinfoApi, memberidentifyApi) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('membermodify' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('membermodify.html', '');
			return;
		}

		memberinfoApi.get().then(function(data) {

			$scope.user = data;
			console.info($scope.user);
		}, function(err) {
			dialogSvc.error("net error!");
			$.bizerror('');

		});

		$scope.save = function(md) {
			if(!$rootScope.submittimeValid()) {
				return;
			}

			if(!$rootScope.loginValid()) {
				return;
			}

			$scope.user.name = md.name;
			$scope.user.gendertype = md.gendertype;
			$scope.user.birthday = md.birthday.replace('年', '-').replace('月', '-').replace('日', '') + ' 00:00:00';

			memberinfoApi.saveorupdate($scope.user).then(function(data) {

				if(JSON.stringify(data).toLowerCase() === 'true') {

					memberidentifyApi.logout().then(function(da) {

						$state.go("info", {
							template: 'membermodifysuccess',
							message: ''
						}, {
							reload: true
						});

					}, function(err) {

					});

				} else {

					$.bizerror(data.message);

				}

			}, function(err) {
				dialogSvc.error("net error!");
				$.bizerror('');

			});

		};

		$rootScope.loadImg();

	});

});
define('controllers/memberorderlistCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberorderlistCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberorderlist' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberorderlist.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/membermessageCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('membermessageCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('membermessage' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('membermessage.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/memberorderCtrl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');

	module.controller('memberorderCtrl', function($scope, $rootScope, $stateParams, $templateCache, $state, $location, $window,
		initctrlSvc, dialogSvc) {

		var template = initctrlSvc.getTemplate($stateParams);
		var isload = initctrlSvc.controlLoad('memberorder' + template, $state, $location, $rootScope, $stateParams, $templateCache, {
			auth: true,
			isAsync: false
		});

		if(!isload) {

			$templateCache.put('memberorder.html', '');
			return;
		}

		$rootScope.loadImg();

	});

});
define('controllers/main',['./articleCtrl', './errorCtrl', './homeCtrl', './mkgdispgroupCtrl', './mkgpgmarticleCtrl', './mkgpgmCtrl',
		'./mainitemCtrl', './itemsearchCtrl', './loginCtrl', './memberCtrl',
		'./salesorderCtrl',
		
		'./shoppingcartadditemCtrl', './shoppingcartCtrl',
		'./orderpayCtrl', './orderconfirmsuccessCtrl', './orderpaysuccessCtrl',
		
		'./registCtrl', './loadCtrl', './infoCtrl', './actionauthCtrl', './changepasswordCtrl',
		'./bindingemailCtrl', './memberaddresslistCtrl', './memberaddressmodifyCtrl', './memberbrowseCtrl',
		'./memberfollowCtrl', './membermodifyCtrl', './memberorderlistCtrl', './membermessageCtrl', './memberorderCtrl'
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
define('filters/hasnodes',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('hasnodes', function() {

		return function(sitemap, pid) {

			var result = [];

			_.forIn(sitemap, function(value, key) {
				if(value.psitemapid === pid) {						
					result.push(value);
				}
			});
 
 
			return result.length > 0;
		};

	});

});
define('filters/nothasnodes',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('nothasnodes', function() {

		return function(sitemap, pid) {

			var result = [];

			_.forIn(sitemap, function(value, key) {
				if(value.psitemapid === pid) {						
					result.push(value);
				}
			});
 
 
			return result.length === 0;
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
define('filters/nodeslength',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('nodeslength', function() {

		return function(sitemap, pid) {

			var result = [];

			_.forIn(sitemap, function(value, key) {
				if(value.psitemapid === pid) {						
					result.push(value);
				}
			});
 
 
			return result.length;
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
			for (var i = start; i < start+length && i< input.length; i++) {
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
define('filters/nvl',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('nvl', function() {

		return function(input, value) { 
		
			
			if(_.isUndefined(input)) { 
				return value;
			}

			if(input == null) {
				return value;
			}

			if(_.isEmpty(input)) {
				return value;
			}

			return input;

		};

	});

});
define('filters/cutindex',['require', './module'], function(require, module) {
	'use strict';

	var _ = require('lodash');
	var angular = require('angular');

	module.filter('cutindex', function() {

		return function(input, len) {
			
			var result = [];
			if(_.isUndefined(input)){
				return result; 
			}
			var count = input.length;
			if(count === 0) {

				return 0;
			}
			while(count > 0) {
				count = count - len;
				result.push(result.length * len);
			}
			return result;

		};

	});

});
define('filters/main',['./testFilter', './nodes', './hasnodes', './nothasnodes', './nodeattr', './nodeslength', './ifvalue', './range', './privatestring', './nvl', './cutindex'],
	function() {

		'use strict';

	});
define('app/main',['../jsons/main', '../apis/main', '../directives/main', '../services/main', '../controllers/main', '../filters/main'],
	function() {

		'use strict';

	});
define('app/module',['require', './main'], function(require) {

	'use strict';

	var ng = require('angular');

	var app = ng.module('app', [
		'ui.router',
		'ui.router.state',
		'ngAnimate',
		'mgcrea.ngStrap',
		'monospaced.qrcode',
		'app.jsons', 'app.apis', 'app.directives', 'app.services',
		'app.controllers', 'app.filters'

	]);

	//'jqwidgets', 
	return app;
});
