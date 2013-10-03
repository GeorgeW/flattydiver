$(document).ready(function () {
	 $("body").queryLoader2(); /*Preload Image*/

	$('a[id^=show]').click(function (e) {
		e.preventDefault();
		var page = $(this).attr('data-page');
		var pageId = $('#' + page);

		pageId.removeClass('hidden');
		pageId.addClass('show');

	$('html,body').animate({ scrollTop: pageId.offset().top }); /*Scroll to anchor*/
		console.log(page);
	});
});