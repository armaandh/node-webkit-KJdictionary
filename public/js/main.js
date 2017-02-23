(function(){

  $('.tabbing input').change(function(){
    var input = $(this);

    var tabNumber = input.attr("data_tab_number");

    var tabBackground = '.tab-item:nth-child(' + tabNumber + ') > .tab-background';

    var notTabBackground = '.tab-item:not(:nth-child(' + tabNumber + ')) > .tab-background';

    var tabText = '.tab-item:nth-child(' + tabNumber + ') > .tab-text';

    var notTabText = '.tab-item:not(:nth-child(' + tabNumber + ')) > .tab-text';

    var tabOverlay = '.tab-item:nth-child(' + tabNumber + ') > .tab-background > .overlay';

    var notTabOverlay = '.tab-item:not(:nth-child(' + tabNumber + ')) > .tab-background > .overlay';

    var translate = 'translateX(100%)';

    var reverseTranslate = 'translateX(-100%)';

    var notTranslate = 'translateX(0px)';

    $(tabBackground).css({
      'z-index':'1',
      'opacity':'1',
      'transform':notTranslate,
      '-webkit-transform':notTranslate
      });
    $(notTabBackground).css({
      'z-index':'0',
      'opacity':'0',
      'transform':translate,
      '-webkit-transform':translate
      });

    $(tabOverlay).css({
      'z-index':'1',
      'opacity':'1',
      'transform':notTranslate,
      '-webkit-transform':notTranslate
      });
    $(notTabOverlay).css({
      'z-index':'0',
      'opacity':'0',
      'transform':translate,
      '-webkit-transform':translate
      });

    $(tabText).css({
      'z-index':'1',
      'opacity':'1',
      'transform':notTranslate,
      '-webkit-transform':notTranslate
      });
    $(notTabText).css({
      'z-index':'0',
      'opacity':'0',
      'transform':reverseTranslate,
      '-webkit-transform':reverseTranslate
      });
  });

})();
