function changeTitle() {
    var currentTitle = document.title;
    var newTitle = (currentTitle === "Hi !") ? "A warm welcome !" : "Hi !";
    document.title = newTitle;
  }


  // Set interval to change title every 4 seconds
  $(document).ready(function(){
  setInterval(changeTitle, 4000);
  RepeatFunction1();
  });
 function RepeatFunction1(){
    document.getElementById('icon').href = 'template.png';
    setTimeout(RepeatFunction2, 4000);
  }
  function RepeatFunction2(){
    document.getElementById('icon').href = 'Profile.png';
    setTimeout(RepeatFunction1, 4000);
  }

// Header Animation
$(document).ready(function(){
  HeaderAnim();
});
function HeaderAnim(){
  $('header').css({
    'transform':'translateY(0px)',
    'opacity':'1'
  });
  setTimeout(HeaderAnim2,600);
}

function HeaderAnim2(){
  $('header').addClass('headerAfterScale');
  setTimeout(offSetZero,600);
}
function offSetZero(){
  $('.HeaderContainer').addClass('offSetZeroClass');
   setTimeout(HeaderAnimations,500);
}

function HeaderAnimations(){
  $('.HeaderContainer').addClass('afterClass');
  $('.HeaderContainer').addClass('beforeClass');
  setTimeout(beforeClass2Fn,500);
  function beforeClass2Fn(){
    $('.offSetZeroClass').addClass('offSetZeroClassDNone');
    $('.HeaderContainer').addClass('beforeClass2');
  }
  setTimeout(EndFn,1000);
}
function EndFn(){
  $('header').removeClass('headerAfterScale');
}
  
