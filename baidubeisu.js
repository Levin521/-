// ==UserScript==
// @name         百度网盘在线倍数播放-全网最强，已做群组视频适配，不用保存文件也可倍速，无vip限制
// @namespace    http://tampermonkey.net/
// @version      1.6.8
// @description  仅支持网页端视频，8种倍速，自由选择，个人文件的视频和群组里面的视频都可以倍速播放。
// @author       猫小白
// @match        *://*.pan.baidu.com/play/*
// @match        *://*.pan.baidu.com/mbox/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var m_xb = "<div href='javascript:void(0)' id='box' style='cursor:pointer;z-index:98;display:block;width:100px;height:500px;line-height:30px;position:fixed;left:0;top:200px;text-size:15px;text-align:center;overflow:visible'> <style>a{font-size:16px;text-decoration:none;}a:hover {color:red;text-decoration:none}</style><a>可选速度</a><br/><a id='s1'>0.5倍</a><br/><a id='s2'>0.75倍</a><br/><a id='s3'>正常</a><br/><a id='s4'>1.25倍</a><br/><a id='s5'>1.5倍</a><br/><a id='s6' >2倍</a><br/><a id='s7' >2.5倍</a><br/><a id='s8' >3倍</a><br/><br/><a>当前速度</a><br/><a id='m_ts' style='color:red;font-size:16px;'>1倍速</a></div>";
    $("body").append(m_xb);
    $("#s1").click(speed1);
    $("#s2").click(speed2);
    $("#s3").click(speed3);
    $("#s4").click(speed4);
    $("#s5").click(speed5);
    $("#s6").click(speed6);
    $("#s7").click(speed7);
    $("#s8").click(speed8);
    function speed1(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(0.5);
        document.getElementById("m_ts").innerHTML = "0.5倍速";
    }
    function speed2(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(0.75);
        document.getElementById("m_ts").innerHTML = "0.75倍速";
    }
    function speed3(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.0);
        document.getElementById("m_ts").innerHTML = "1.0倍速";
    }
    function speed4(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.25);
        document.getElementById("m_ts").innerHTML = "1.25倍速";
    }
    function speed5(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.5);
        document.getElementById("m_ts").innerHTML = "1.5倍速";
    }
    function speed6(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(2.0);
        document.getElementById("m_ts").innerHTML = "2.0倍速";
    }
    function speed7(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(2.5);
        document.getElementById("m_ts").innerHTML = "2.5倍速";
    }
    function speed8(){
        window.videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(3.0);
        document.getElementById("m_ts").innerHTML = "3.0倍速";
    }
})();
