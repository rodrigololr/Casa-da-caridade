$(function(){
 $('.mosaico .center .mosaico-wraper').slick({
    centerMode:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow:4,
    responsive:[
        {

            breakpoint:768,
            settings:{
            centerMode:true,
            slidesToShow:3,
            arrows:false
            }
        
        },
        {
            breakpoint:580,
            settings:{
            centerMode:true,
            slidesToShow:2,
            arrows:false
            }
        },
        {
            breakpoint:380,
            settings:{
            centerMode:true,
            slidesToShow:1,
            arrows:false
        }
    }


]
    })

    

})


$(function(){
    new Carousel(document.getElementById("cha_2019"), {
        Autoplay : {
          timeout : 3000
        }
      }, {
        Autoplay
      });

    })

    $(function(){
        new Carousel(document.getElementById("cha_2013"), {
            Autoplay : {
              timeout : 3000
            }
          }, {
            Autoplay
          });
    
        })


$(function(){
    $('#read_button').click(function(){
        var compact = $('.compact');
        compact.toggleClass('active');

        if (compact.hasClass('active')) {
            // Altera o texto do botão se tiver a classe 'active'
            return $('#read_button').text('Leia menos');
        }
        
        // Altera o texto do botão se não tiver a classe 'active'
        $('#read_button').text('Leia mais');
    })
})


$(function(){
    $('#read_button1').click(function(){
        var compact1= $('.compact-1');
        compact1.toggleClass('active');

        if (compact1.hasClass('active')) {
            // Altera o texto do botão se tiver a classe 'active'
            return $('#read_button').text('Leia menos');
        }
        
        // Altera o texto do botão se não tiver a classe 'active'
        $('#read_button1').text('Leia mais');
    })
})


$(function(){
    $('.fa-navicon').click(function(){
        $('nav.mobile').slideToggle()
    })
})


$('#seta').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top
    $('html,body').animate({'scrollTop':offSetTop})

    return false;
})




