import{s as e}from"./index.e71d49a7.js";import{r as s,g as n,a as l,o,c as a,b as t,F as r,l as c,w as i,m as d}from"./vendor.76c7ad6e.js";import{P as m}from"./PlaySong.2bd0afd6.js";const u={name:"Personalized",setup(){let l=s([]);return n((async()=>{const s=await e.get("/personalized");l.value=s.result})),{personalizedList:l}}},p={class:"personalized"},g=t("h3",null,"推荐歌单",-1),v={class:"recommend-list"},y={class:"title"};u.render=function(e,s,n,m,u,f){const h=l("router-link");return o(),a("div",p,[g,t("div",v,[(o(!0),a(r,null,c(m.personalizedList,(e=>(o(),a("div",{key:e.id,class:"recommend-item"},[t(h,{to:`/playlist/detail/${e.id}`},{default:i((()=>[t("img",{src:e.picUrl,class:"pic"},null,8,["src"]),t("h4",y,d(e.name),1)])),_:2},1032,["to"])])))),128))])])};const f={name:"NewSong",setup(){let l=s([]);const{playSong:o}=m();return n((async()=>{try{const s=await e.get("/personalized/newsong");l.value=s.result}catch(s){console.log(s)}})),{songs:l,playSong:o}}},h={class:"new-song"},w=t("h3",null,"最新音乐",-1),z={class:"recommend-list"},k={class:"title"};f.render=function(e,s,n,l,i,m){return o(),a("div",h,[w,t("div",z,[(o(!0),a(r,null,c(l.songs,(e=>(o(),a("div",{key:e.id,class:"recommend-item",onClick:s=>l.playSong(e.id)},[t("img",{src:e.picUrl,class:"pic"},null,8,["src"]),t("h4",k,d(e.name),1)],8,["onClick"])))),128))])])};const S={name:"Recommend",setup(){let l=s([]);const o=async()=>{try{const s=await e.get("/program/recommend");l.value=s.programs}catch(s){console.log(s)}};return n((()=>{o()})),{recommendList:l}}},P={class:"recommend"},L=t("h3",null,"推荐节目",-1),j={class:"recommend-list"},N={class:"title"};S.render=function(e,s,n,m,u,p){const g=l("router-link");return o(),a("div",P,[L,t("div",j,[(o(!0),a(r,null,c(m.recommendList,(e=>(o(),a("div",{key:e.id,class:"recommend-item"},[t(g,{to:`/program/detail/${e.id}`},{default:i((()=>[t("img",{src:e.coverUrl,class:"pic"},null,8,["src"]),t("h4",N,d(e.name),1)])),_:2},1032,["to"])])))),128))])])};const R={name:"Home",components:{Personalized:u,NewSong:f,Recommend:S}},U={class:"home"};R.render=function(e,s,n,r,c,i){const d=l("Personalized"),m=l("NewSong"),u=l("Recommend");return o(),a("div",U,[t(d),t(m),t(u)])};export default R;