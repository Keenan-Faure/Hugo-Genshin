$(document).ready(()=>
{
    $('.rarities .headers').on('click', ()=>
    {
        if($('.rarities').css('height') != '400px')
        {
            $('.rarities').removeClass('fadeUp-rarities');
            $('.rarities').addClass('fadeDown-rarities');
            setTimeout(()=>
            {
                $('.rarities').children()[2].style.display = 'block'; 
            }, 300);    
        }
        else
        {
            $('.rarities').removeClass('fadeDown-rarities'); 
            $('.rarities').addClass('fadeUp-rarities'); 
            setTimeout(()=>
            {
                $('.rarities').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.elements .headers').on('click', ()=>
    {
        if($('.elements').css('height') != '1150px')
        {
            $('.elements').removeClass('fadeUp-elements'); 
            $('.elements').addClass('fadeDown-elements');  
            setTimeout(()=>
            {
                $('.elements').children()[2].style.display = 'block'; 
            }, 300);     
        }
        else
        {
            $('.elements').removeClass('fadeDown-elements'); 
            $('.elements').addClass('fadeUp-elements'); 
            setTimeout(()=>
            {
                $('.elements').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.weapons .headers').on('click', ()=>
    {
        if($('.weapons').css('height') != '350px')
        {
            $('.weapons').removeClass('fadeUp-weapons'); 
            $('.weapons').addClass('fadeDown-weapons');   
            setTimeout(()=>
            {
                $('.weapons').children()[2].style.display = 'block'; 
            }, 300);   
        }
        else
        {
            $('.weapons').removeClass('fadeDown-weapons'); 
            $('.weapons').addClass('fadeUp-weapons'); 
            setTimeout(()=>
            {
                $('.weapons').children()[2].style.display = 'none'; 
            }, 10); 
        }
    });
    $('.regions .headers').on('click', ()=>
    {
        if($('.regions').css('height') != '350px')
        {
            $('.regions').removeClass('fadeUp-regions'); 
            $('.regions').addClass('fadeDown-regions');  
            setTimeout(()=>
            {
                $('.regions').children()[2].style.display = 'block'; 
            }, 300);    
        }
        else
        {
            $('.regions').removeClass('fadeDown-regions'); 
            $('.regions').addClass('fadeUp-regions'); 
            setTimeout(()=>
            {
                $('.regions').children()[2].style.display = 'none'; 
            }, 10);
        }
    });
});