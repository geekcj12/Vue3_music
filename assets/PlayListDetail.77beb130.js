import{r as l,g as a,A as s,o as i,c as t,b as n,m as e,F as c,l as o}from"./vendor.95840c29.js";import{g as r}from"./playlist.4733f61a.js";import{P as p}from"./PlaySong.3f14185d.js";import"./index.ae571706.js";const d={name:"PlayListDetail",setup(){let i=l({});const t=s().params.id,{playSong:n}=p();return a((async()=>{try{const l=await r(t);i.value=l.playlist}catch(l){console.log(l)}})),{playlist:i,playSong:n}}},y={class:"detail"},m={class:"detail-header"},u={class:"detail-info"},g={class:"detail-data"},v=n("span",null,"播放数",-1),f={class:"detail-main"},k={class:"list"},h={class:"title"};d.render=function(l,a,s,r,p,d){return i(),t("div",y,[n("div",m,[n("img",{src:r.playlist.coverImgUrl,alt:r.playlist.name,class:"cover"},null,8,["src","alt"]),n("div",u,[n("h2",null,e(r.playlist.name),1),n("p",null,e(r.playlist.description),1),n("div",g,[v,n("span",null,e(r.playlist.playCount),1)])])]),n("div",f,[n("ul",k,[(i(!0),t(c,null,o(r.playlist.tracks,(l=>(i(),t("li",{key:l.id,class:"item",onClick:a=>r.playSong(l.id)},[n("h3",h,e(l.name),1),(i(!0),t(c,null,o(l.ar,(l=>(i(),t("span",{key:l.id,class:"singer"},e(l.name),1)))),128))],8,["onClick"])))),128))])])])};export default d;