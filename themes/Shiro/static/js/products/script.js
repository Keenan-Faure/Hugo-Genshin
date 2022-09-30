$(document).ready(()=>
{
    $('.rarities').on('dblclick', ()=>
    {
        if($('.rarities').css('height') != '500px')
        {
            $('.rarities').removeClass('fadeUp'); 
            $('.rarities').addClass('fadeDown');     
        }
        else
        {
            $('.rarities').removeClass('fadeDown'); 
            $('.rarities').addClass('fadeUp'); 
        }
    });
    $('.elements').on('dblclick', ()=>
    {
        if($('.elements').css('height') != '500px')
        {
            $('.elements').removeClass('fadeUp'); 
            $('.elements').addClass('fadeDown');     
        }
        else
        {
            $('.elements').removeClass('fadeDown'); 
            $('.elements').addClass('fadeUp'); 
        }
    });
    $('.weapons').on('dblclick', ()=>
    {
        if($('.weapons').css('height') != '500px')
        {
            $('.weapons').removeClass('fadeUp'); 
            $('.weapons').addClass('fadeDown');     
        }
        else
        {
            $('.weapons').removeClass('fadeDown'); 
            $('.weapons').addClass('fadeUp'); 
        }
    });
    $('.regions').on('dblclick', ()=>
    {
        if($('.regions').css('height') != '500px')
        {
            $('.regions').removeClass('fadeUp'); 
            $('.regions').addClass('fadeDown');     
        }
        else
        {
            $('.regions').removeClass('fadeDown'); 
            $('.regions').addClass('fadeUp'); 
        }
    });
});