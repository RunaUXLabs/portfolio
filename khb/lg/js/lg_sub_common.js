$(document).ready(function(){

    //nav togglebutton
    $(".mallbar").click(function(){
        $(this).toggleClass("on");
        $(".mnav").toggleClass("on");
        $("body > .inner > a").toggleClass("on");
    })

    //mnav 
    $(".m_menu_2").hide();
    $(".m_menu_1 > .depth2 > a").click(function(){
        $(this).next().slideToggle(300);
        //after (this)'s next part toggle

        $(".m_menu_1 > .depth2 > a").not(this).next().slideUp(300);
        return false;
        //next part toggle's canceling and after slideup --> the other things are not showing
    });
    
    $(".m_menu_1 > .depth2 > a").click(function(){
        $(this).toggleClass("on").siblings().removeClass("on");    
    });


});

//website connection
function openSite(select)
{
    if(select.value!='none') {
        window.open(select.value);
        select.value = 'none';
    } else {
        return;
    }
}


//________________common part__all subpages
