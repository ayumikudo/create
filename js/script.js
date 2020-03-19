//スムーススクロール
$(function () {
	$("a[href*=#]:not([href=#], .person_occupation li a)").click(function () {
		var target = $($(this).attr("href")).offset().top;
		target -= 40;
		$("html, body").animate({ scrollTop: target }, 500);
		return false;
	});
});

//ナビメニュー
$(function () {
	$("header button").click(function () {
		$("header nav").slideToggle(300);
		$(this).toggleClass('active');
	});
});

//ページ内リンクしたらulを閉じる
$(function () {
	$("nav ul a").click(function () {
		$("header nav").fadeOut(300);
		$(".menu_trigger").removeClass('active');
	});
});

//PERSONのタブ切り替え
$(function () {
	$("#tab2,#tab3,#tab4,#tab5").hide();

	$(".person_occupation li a").click(function () {
		$("#tab1,#tab2,#tab3,#tab4,#tab5").hide();
		$($(this).attr("href")).show();
		return false;
	});
});


/* 幅が640px以下の場合 */
if (window.matchMedia("(max-width: 640px)").matches) {


	/* 幅が640px以上の場合 */
} else {

}
