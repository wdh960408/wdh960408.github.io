$(function(){

	/**********************导航条部分****************************/
	$(window).on('resize',function(){
		if($(window).width()>768){
			$(window).scroll(function(){
			if($(window).scrollTop()>25){
				$('.navbar_blog').css({'background':'#000','padding':0});
				}else{
					$('.navbar_blog').css({'background':'transparent','padding':'20px 0'})
				}
			});
		}else{
			$('.navbar_blog').css({'background':'#000','padding':0,'transition':''});
		}
		$('.intro').css({'height':$(window).height()});
	}).trigger('resize');
	
	/*锚点滚动*/
	$('a.page-scroll').click(function() {
        var target = $(this.hash);
			console.log(this.hash);
            $('html,body').stop().animate({
              scrollTop: target.offset().top -40
            }, 900);
			return false;
      });
      
      var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
      
      
      
      
      $('b.count').counterUp({
			delay: 10, // the delay time in ms
			time: 1000 // the speed time in ms
			});
      
	
	/**********************banner部分****************************/
	$("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });
	
});
