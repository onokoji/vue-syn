(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{2048:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),i={key:"center"},r=Object(c["i"])("h2",null,"最初の画面",-1),h={key:"left"},u=Object(c["i"])("h2",null,"左の画面",-1),o={key:"right"},f=Object(c["i"])("h2",null,"右の画面",-1);function a(t,e,n,a,l,b){return Object(c["r"])(),Object(c["f"])(c["c"],{name:"fade",mode:"out-in"},{default:Object(c["C"])((function(){return[l.center?(Object(c["r"])(),Object(c["f"])("div",i,[r,Object(c["i"])("div",{onClick:e[1]||(e[1]=function(){return b.watchLeft&&b.watchLeft.apply(b,arguments)})},"左の画面にいく"),Object(c["i"])("div",{onClick:e[2]||(e[2]=function(){return b.watchRight&&b.watchRight.apply(b,arguments)})},"右の画面にいく")])):Object(c["g"])("",!0),l.left?(Object(c["r"])(),Object(c["f"])("div",h,[u,Object(c["i"])("div",{onClick:e[3]||(e[3]=function(){return b.watchCenter&&b.watchCenter.apply(b,arguments)})},"最初の画面に戻る"),Object(c["i"])("div",{onClick:e[4]||(e[4]=function(){return b.watchRight&&b.watchRight.apply(b,arguments)})},"右の画面にいく")])):Object(c["g"])("",!0),l.right?(Object(c["r"])(),Object(c["f"])("div",o,[f,Object(c["i"])("div",{onClick:e[5]||(e[5]=function(){return b.watchCenter&&b.watchCenter.apply(b,arguments)})},"最初の画面に戻る"),Object(c["i"])("div",{onClick:e[6]||(e[6]=function(){return b.watchLeft&&b.watchLeft.apply(b,arguments)})},"左の画面にいく")])):Object(c["g"])("",!0)]})),_:1})}var l={data:function(){return{show:!1,center:!0,left:!1,right:!1}},mounted:function(){this.show=!0},beforeRouteLeave:function(t,e,n){this.show=!1,setTimeout((function(){n()}),3e3)},methods:{watchCenter:function(){this.center=!0,this.left=!1,this.right=!1},watchLeft:function(){this.center=!1,this.left=!0,this.right=!1},watchRight:function(){this.center=!1,this.left=!1,this.right=!0}}};n("d414");l.render=a;e["default"]=l},d414:function(t,e,n){"use strict";n("d6d7")},d6d7:function(t,e,n){}}]);
//# sourceMappingURL=about.c61b49b4.js.map