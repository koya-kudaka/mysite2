$(function(){
  // windowを読み込んだ時orスクロールした時に実行
  $(window).on('load scroll', function() {
    var winScroll = $(window).scrollTop(); //topからのスクロール位置(px)を取得
    var winHeight = $(window).height();　//表示されているwindowのサイズ(高さpx)を取得
    var scrollPos = winScroll + (winHeight * 0.6);
    console.log(scrollPos);

    // scrollPosがoffset(目的のアンカー位置)よりも大きい値になったら、元々指定していたcssから新しいcssにtransformさせる(フェードイン)
    $(".show").each(function() {
       if($(this).offset().top < scrollPos) {
          $(this).css({opacity: 1, transform: 'translate(0, 0)'});
       }
    });
  });

  const hum = $('.hamburger, .close, #sp-about, #sp-sns, #sp-blog, #sp-contact')
	const nav = $('.sp-nav')
	hum.on('click', function(){
    nav.toggleClass('toggle');
  });
});