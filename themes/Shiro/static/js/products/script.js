$(document).ready(()=>
{
    $('.rarities').on('click', ()=>
    {
        if($('.rarities').css('height') != '400px')
        {
            $('.rarities').removeClass('fadeUp');
            $('.rarities').addClass('fadeDown');
            setTimeout(()=>
            {
                $('.rarities').children()[2].style.display = 'block'; 
            }, 300);    
        }
        else
        {
            $('.rarities').removeClass('fadeDown'); 
            $('.rarities').addClass('fadeUp'); 
            setTimeout(()=>
            {
                $('.rarities').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.elements').on('click', ()=>
    {
        if($('.elements').css('height') != '400px')
        {
            $('.elements').removeClass('fadeUp'); 
            $('.elements').addClass('fadeDown');  
            setTimeout(()=>
            {
                $('.elements').children()[2].style.display = 'block'; 
            }, 300);     
        }
        else
        {
            $('.elements').removeClass('fadeDown'); 
            $('.elements').addClass('fadeUp'); 
            setTimeout(()=>
            {
                $('.elements').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.weapons').on('click', ()=>
    {
        if($('.weapons').css('height') != '400px')
        {
            $('.weapons').removeClass('fadeUp'); 
            $('.weapons').addClass('fadeDown');   
            setTimeout(()=>
            {
                $('.weapons').children()[2].style.display = 'block'; 
            }, 300);   
        }
        else
        {
            $('.weapons').removeClass('fadeDown'); 
            $('.weapons').addClass('fadeUp'); 
            setTimeout(()=>
            {
                $('.weapons').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.regions').on('click', ()=>
    {
        if($('.regions').css('height') != '400px')
        {
            $('.regions').removeClass('fadeUp'); 
            $('.regions').addClass('fadeDown');  
            setTimeout(()=>
            {
                $('.regions').children()[2].style.display = 'block'; 
            }, 300);    
        }
        else
        {
            $('.regions').removeClass('fadeDown'); 
            $('.regions').addClass('fadeUp'); 
            setTimeout(()=>
            {
                $('.regions').children()[2].style.display = 'none'; 
            }, 10);
        }
    });
});