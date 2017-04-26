/*
* @Author: JMW
* @Date:   2017-03-17 09:05:36
* @Last Modified by:   JMW
* @Last Modified time: 2017-03-22 15:56:27
*/
'use strict';
jQuery(document).ready(function($) {
	//鼠标移入显示菜单栏,移出隐藏菜单栏
	$(".nav-text").hover(function (){ 
		$(this).find(".nav-text0").css("color","#ffc000");
        $(this).find("div").show();  
    },function (){
    	$(this).find(".nav-text0").css({"color":"#f9dabb","background":"none"});
		$(this).find("div").hide(); 
    });
    $(".nav-text").on("click",function(){
    	$(".nav-text0").css({"color":"#f9dabb","background":"none"});
    	$(this).find(".nav-text0").css({"color":"#573300","background":"#dfc199"});
    	return false;
    })
	//首页轮播图
	$(".slidershow_paging a").html("");	
	$('#slideshow_2').cycle({
        fx: 'fade',		
		speed:  900, 
		timeout: 1000, 
		pager: '#lunbo .slideshow_paging', 
        prev: '#lunbo .prev',
        next: '#lunbo .next',
		before: function(currSlideElement, nextSlideElement) {
			var data = $('.data', $(nextSlideElement)).html();
			$('#lunbo .slideshow_box').stop(true, true).animate({ bottom:'-130px'}, 400, function(){
				$('#lunbo .slideshow_box .data').html(data);
			});
			$('#lunbo .slideshow_box').delay(100).animate({ bottom:'60px'}, 400);
		}
    });
	$('#lunbo').mouseenter(function(){
		$('#slideshow_2').cycle('pause');
		$('#lunbo .slideshow_prev').stop(true, true).animate({ left:'20px'}, 200);
		$('#lunbo .slideshow_next').stop(true, true).animate({ right:'20px'}, 200);
    }).mouseleave(function(){
		$('#slideshow_2').cycle('resume');
		$('#lunbo .slideshow_prev').stop(true, true).animate({ left:'-40px'}, 200);
		$('#lunbo .slideshow_next').stop(true, true).animate({ right:'-40px'}, 200);
    });
	$('a[href="#"]').click(function(event){ 
		event.preventDefault();
	});

	//新闻动态动画效果
	$(".box-hover-model").mouseenter(function(){
		var wayNum = getMouseWay(this);
		if (wayNum == 0) {
			$(this).find(".mask2").css({
				"display": "block",
				"top": "0",
				"left": -$(".mask2").width()
			}).animate({
				"left": "0"
			}, 200).animate({"top":"-464px"},500);
		}
		else if (wayNum == 1) {
			$(this).find(".mask2").css({
				"display": "block",
				"top": -$(".mask2").height(),
				"left": '0'
			}).animate({
				"top": "0"
			}, 200).animate({"top":"-464px"},500);
		}
		else if (wayNum == 2) {
			$(this).find(".mask2").css({
				"display": "block",
				"top": "0",
				"left": $(".mask2").width()
			}).animate({
				"left": "0"
			}, 200).animate({"top":"-464px"},500);
		}
		else if (wayNum == 3) {
			$(this).find(".mask2").css({
				"display": "block",
				"top": $(".mask2").height(),
				"left": 0
			}).animate({
				"top": "0"
			}, 200).animate({"top":"-464px"},500);
		}
	});
	function getMouseWay(nowEle) {
		//获取当前鼠标位置
		var mx = event.pageX;
		var my = event.pageY;
		//获取当前元素的上下左右
		var bl = $(nowEle).offset().left;
		var bt = $(nowEle).offset().top;
		var br = bl + parseInt($(nowEle).width());
		var bb = bt + parseInt($(nowEle).height());
		//计算出鼠标距离上下左右哪个最近
		var ml = Math.abs(mx - bl);
		var mt = Math.abs(my - bt);
		var mr = Math.abs(br - mx);
		var mb = Math.abs(bb - my);
		//把计算出的是个距离放到数组bm里面
		var bm = [ml, mt, mr, mb];
		//计算出最小的那个值,虽然我不懂apply但是挺管用的
		var bmMin = Math.min.apply(null, bm);
		//根据最小值遍历数组判断出是哪边最近
		var way;
		$.each(bm, function (index, content) {
			if (content == bmMin) {
				way = index;
			}
		});
		return way;
	}
	$(".news-con").mouseenter(function(){
		$(this).css("color","#ffc000");
	}).mouseleave(function(){
		$(this).css("color","#535252");
	});
	$(".news-con").on("click",function(){
		$(this).css("color","#909090");
		return false;
	})
	//数字化平台“大学”动画
	$(".szhpt-img").click(function(){
		$(this).css("left","480px");
		$(this).animate({
			"left":"154px"
		},1000);
	});
});
