$(document).ready(()=>
{
    $('.rarities').on('dblclick', ()=>
    {
        if($('.rarities').css('height') != '600px')
        {
            $('.rarities').css(
                {
                    "background-position": "relative",
                    "height": "600px"
                }
            )
        }
        else
        {
            $('.rarities').css(
                {
                    "background-position": "relative",
                    "height": ""
                }
            )
        }
    });
    $('.elements').on('dblclick', ()=>
    {
        if($('.elements').css('height') != '600px')
        {
            $('.elements').css(
                {
                    "background-position": "relative",
                    "height": "600px"
                }
            )
        }
        else
        {
            $('.elements').css(
                {
                    "background-position": "relative",
                    "height": ""
                }
            )
        }
    });
    $('.weapons').on('dblclick', ()=>
    {
        if($('.weapons').css('height') != '600px')
        {
            $('.weapons').css(
                {
                    "background-position": "relative",
                    "height": "600px"
                }
            )
        }
        else
        {
            $('.weapons').css(
                {
                    "background-position": "relative",
                    "height": ""
                }
            )
        }
    });
    $('.regions').on('dblclick', ()=>
    {
        if($('.regions').css('height') != '600px')
        {
            $('.regions').css(
                {
                    "background-position": "relative",
                    "height": "600px"
                }
            )
        }
        else
        {
            $('.regions').css(
                {
                    "background-position": "relative",
                    "height": ""
                }
            )
        }
    });
});