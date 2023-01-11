$(function(){
    // NAV
    $('.nav').mouseenter(function(){
        $('.subnav').stop(true).slideDown(150)
        $('.subnav-bg').stop(true).slideDown(150)        
    }).mouseleave(function(){
        $('.subnav').stop(true).slideUp(150)
        $('.subnav-bg').stop(true).slideUp(150)        
    })
    $('.subnav-bg').mouseenter(function(){
        $('.subnav').stop(true).slideDown(150)
        $('.subnav-bg').stop(true).slideDown(150)        
    }).mouseleave(function(){
        $('.subnav').stop(true).slideUp(150)
        $('.subnav-bg').stop(true).slideUp(150)        
    })

    // SLIDER
    setInterval(function(){
        $('.slides').animate({'margin-left':'-100%'}, function(){
            $('.slide:first').appendTo('.slides')
            $('.slides').css({'margin-left':'0%'})
        })
    }, 7000)

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop(true).fadeIn(150)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(150)

    })
})