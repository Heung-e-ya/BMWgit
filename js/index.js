
 $(document).ready(function(){
    $(window).trigger('resize');

    $(window).resize(function(){

        var windowWidth = $(this).width();

        if(windowWidth<=1024) {
            $('.total-menu').css({width:'100%'});
            $('.main-menu').off('mouseover');
            $('.main-menu').off('mouseout');
            $('.search-box').prependTo('nav');
        }else{
            $('.total-menu').css({width:windowWidth});
            $('.main-menu').on('mouseover', function(){
              $('.sub-menu, .total-menu').stop().show();
            });
            $('.main-menu').on('mouseout', function(){
              $('.sub-menu, .total-menu').stop().hide();
            });
            $('.search-box').appendTo('.t-title');
        }//1024
      
    });//resize

    $('.bar-menu').click(function(){
        $('nav').animate({left:'0'},300);
    });
    $('.close-btn').click(function(){
        $('nav').animate({left:'-80%'},300);
    });

    

    

});//loading
