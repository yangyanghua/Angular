(function(){
		var app = angular.module('myMall',['ngRoute','myMall.ctrl']);
	//路由配置
	app.config([
		'$routeProvider',
		function($routeProvider){
			//首页路由
			$routeProvider.when('/home',{
				
				templateUrl:'view/home.html',
				controller:'homeController'
			})
			.when('/jifen',{
				templateUrl:'view/jifen.html',
				controller:'jifenController'
			})

			.when('/list',{
				templateUrl:'view/list.html',
				controller:'listController'
			})
			.when('/cat',{
				templateUrl:'view/cat.html',
				controller:'catController'
			})
			.when('/user',{
				templateUrl:'view/user.html',
				controller:'userController'
			})

			// 当以上所有路由都不匹配时使用
			.otherwise({redirectTo:'/home'})
		
		
		}
	]);
	app.run([
		"$rootScope",
		function($rootScope){
			$rootScope.page = {};
			
//				//回到顶部
	$(function(){
		$(".comeback").hide();
		$(window).scroll(function(){
			console.log(123);
			if( $(window).scrollTop()>500 )
			{
				$(".comeback").fadeIn();
			}else{
				$(".comeback").fadeOut();
			}
		});	
		$rootScope.comback = function(){
			
			$('html body').animate({scrollTop:0});
		}
	});
			
		}
		
		
	])
	
	
})();
