$(document).ready(()=>
{
    $(".splash").fadeOut(1800);
    setTimeout(()=>
    {
        $('.cover').addClass('blurry');
    }, 2000);
});

$(document).ready(()=>
{
    $('#mo').on('click', ()=>
    {
        document.getElementById('m').scrollIntoView(false);
        document.getElementById('m').classList.add('clickFade');
        setTimeout(()=>
        {
            document.getElementById('m').classList.remove('clickFade');
        },1500);
    });
    $('#li').on('click', ()=>
    {
        document.getElementById('l').scrollIntoView(false);
        document.getElementById('l').classList.add('clickFade');
        setTimeout(()=>
        {
            document.getElementById('l').classList.remove('clickFade');
        },1500);
    });
    $('#in').on('click', ()=>
    {
        document.getElementById('i').scrollIntoView(false);
        document.getElementById('i').classList.add('clickFade');
        setTimeout(()=>
        {
            document.getElementById('i').classList.remove('clickFade');
        },1500);
    });
    $('#su').on('click', ()=>
    {
        document.getElementById('s').scrollIntoView(false);
        document.getElementById('s').classList.add('clickFade');
        setTimeout(()=>
        {
            document.getElementById('s').classList.remove('clickFade');
        },1500);
    });
    $('#wo').on('click', ()=>
    {
        document.getElementById('w').scrollIntoView(false);
        document.getElementById('w').classList.add('clickFade');
        setTimeout(()=>
        {
            document.getElementById('w').classList.remove('clickFade');
        },1500);
    });
});

function redirect(link)
{
    return window.location.href='/character-list/' + (link.toLowerCase());
}