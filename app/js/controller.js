;(function(){
	angular.module('myMall.ctrl',[])

	.controller('homeController', [
		'$scope', 
		'$rootScope', 
		'$http',
		function($scope,$rootScope,$http){
			$rootScope.page.title = 'OYA商城';
			$rootScope.page.current = 'home';
			$http.get('json/scollimg.json').success(function(res){
				$scope.datalist = res;
			});
			$http.get('json/nav-img.json').success(function(res){
				$scope.navimg = res;
			})
			//懒加载			
	$(function(){
		var $datalist2 = $('.datalist2');
		var $ul2 = $('<ul/>');
		$.ajax({
			type:"get",
			async:true,
			url:'json/datalist2.json',
			success:function(res){
//				console.log(res);
				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img data-original="'+item.imgurl+'"/>').appendTo($li);					
					$li.appendTo($ul2);
				});
				$datalist2.append($ul2);				
		      $("img").lazyload({effect: "fadeIn"});		  
			}
		});
	});			
//	加载图片3
	$(function(){
		var $datalist3 = $('.datalist3');
		var $ul3 = $('<ul/>');
		$.ajax({
			type:"get",
			async:true,
			url:'json/datalist3.json',
			success:function(res){
//				console.log(res);			
				// 生成一个ul
				$.each(res,function(idx,item){
					var $li = $('<li/>');
					$('<a/>').attr({href:item.url}).html('<img data-original="'+item.imgurl+'"/>').appendTo($li);
					$('<p/>').addClass('title').html(item.title).appendTo($li);
					$('<p/>').addClass('price').html( '<span>&yen;' + item.price).appendTo($li);
					$li.appendTo($ul3);
//						console.log(item.imgurl)
				});				
				$datalist3.append($ul3);
				$("img").lazyload({effect: "fadeIn"});
			}
		});
	});

			$scope.mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				paginationClickable:true,
				loop:true,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper				
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			})			
		}		
	])

	.controller('jifenController', [
		'$scope', 
		'$rootScope', 
		function($scope,$rootScope){
			$rootScope.page.title = '我的金库';
			$rootScope.page.current = 'jifen';
		}
	])

	.controller('listController', [
		'$scope', 
		'$rootScope', 
		'$routeParams',
		'$http',
		function($scope,$rootScope,$routeParams,$http){
			$rootScope.page.title = '分类';
			$rootScope.page.current = 'list';

		}
	])
	.controller('catController', [
		'$scope', 
		'$rootScope', 
		'$routeParams',
		'$http',
		function($scope,$rootScope,$routeParams,$http){
			$rootScope.page.title = '购物车';
			$rootScope.page.current = 'cat';
		}
	])
	.controller('userController', [
		'$scope', 
		'$rootScope', 
		'$routeParams',
		'$http',
		function($scope,$rootScope,$routeParams,$http){
			$rootScope.page.title = '个人中心';
			$rootScope.page.current = 'user';
		}
	])	
	
	
	
})();