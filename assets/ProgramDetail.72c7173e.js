import{r as a,g as r,A as s,o as l,c as o,b as e,m as t}from"./vendor.76c7ad6e.js";import{a as n}from"./playlist.d765b589.js";import"./index.d6c2d342.js";const i={name:"ProgramDetail",setup(){const l=a({}),o=s().params.id;return r((async()=>{try{const a=await n(o);l.value=a.program}catch(a){console.log(a)}})),{program:l}}},c={class:"detail"},d={class:"detail-header"},m={class:"detail-info"},p={class:"detail-data"},u=e("span",null,"播放数",-1);i.render=function(a,r,s,n,i,g){return l(),o("div",c,[e("div",d,[e("img",{src:n.program.coverUrl,alt:n.program.name,class:"cover"},null,8,["src","alt"]),e("div",m,[e("h2",null,t(n.program.name),1),e("p",null,t(n.program.description),1),e("div",p,[u,e("span",null,t(n.program.listenerCount),1)])])])])};export default i;
