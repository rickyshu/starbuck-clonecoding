// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div> 밑에 player가 자동적으로 html에 있는 player란
  //ID 값을 찾을 것이다!
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", //출력하고자 하는 유튜브 video의 id값에 해당!
    playerVars: {
      //영상 재생을 위한 여러 변수들
      autoplay: true, //자동재생 유무
      loop: true, //반복 재생 유무
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 id
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //재생되고 있는 영상 자체
      },
    },
  });
}
