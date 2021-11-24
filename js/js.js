$(function(){
    $('#single').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
        autoplay:true,
        fade:true,
        
      });
      $('.picture_div').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        centerMode:true,
        centerPadding:'0px', 
        asNavFor:'.text_div',         
      });
      $('.text_div').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:false,
        fade:true, 
        asNavFor:'.picture_div', 
            
                 
      });
      
    })