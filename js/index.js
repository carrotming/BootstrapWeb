/**
 * Created by Administrator on 2017/4/16.
 */
       $(function () {
             $(window).on('resize',change);
           function change() {
               var $oUl=$('#wjs_product .nav');
               var $oUlW=0;
               var $oLi=$('li[role="presentation"]',$oUl);
               $oLi.each(function (index,obj) {
                   $oUlW+=$(obj).width();
               });
               var $panentW= $oUl.parent().width();
               if($oUlW>=$panentW){
                   $oUl.css({
                       width: $oUlW
                   });
                  $('#wjs_product').css({
                       paddingTop:'30px'
                   })
                   $('#wjs_news').css({
                       paddingTop:'20px'
                   })
               }else{
                   $oUl.removeAttr('style');
               }
           }
           $(window).trigger('resize');
           $('[data-toggle="tooltip"]').tooltip();

       });