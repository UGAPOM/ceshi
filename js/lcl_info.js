/**
 * Created by think on 2017/1/20.
 */
//顶部入口

$(".lhh1c").mouseover(function () {
    $(this).css("color","white")
}).mouseout(function () {
    $(this).css("color","lightgrey")
})
// 内容左分类信息栏
$(".lcl_info").click(function () {
    $(this).nextAll().removeClass("lcl_info_click")
    $(this).prevAll().removeClass("lcl_info_click")
    $(this).addClass("lcl_info_click")
}).mouseover(function(){
    $(this).css({"border-bottom":"2px solid orange","font-style":"oblique"})

}).mouseout(function(){
    $(this).css({"border-bottom":"1px  solid lightgrey","font-style":"normal"})
})

//翻页器
$("#change_page li").mouseover(function(){
    $(this).css("border","1px solid orange")
}).mouseout(function(){
    $(this).css("border","1px solid #cccccc")
}).click(function () {
    $(this).nextAll().removeClass("change_page_click")
    $(this).prevAll().removeClass("change_page_click")
    $(this).addClass("change_page_click")
})