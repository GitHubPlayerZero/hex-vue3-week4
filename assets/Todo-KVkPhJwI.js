import{_ as U,l as V,r as l,w as I,o as A,a as n,c as r,b as t,d as x,v as M,e as D,f as i,F as C,g as F,t as T,h as E,i as a,u as S,j as K,p as $,k as j}from"./index-Cbs8jyKg.js";const q="/hex-vue3-week4/assets/empty-OUh-Azg3.png",v=c=>($("data-v-16635586"),c=c(),j(),c),z={class:"container todoListPage"},O={key:0,class:"todoList_Content"},P={class:"inputBox"},R=v(()=>t("i",{class:"fa-solid fa-plus"},null,-1)),G=[R],H={key:0,class:"todoList_list"},J={class:"todoList_tab"},Q={class:"todoList_items"},W={class:"todoList_item"},X={key:0},Y={class:"todoList_label"},Z=["onUpdate:modelValue","onClick"],tt=["onClick"],et=v(()=>t("i",{class:"fa-solid fa-times"},null,-1)),st=[et],ot={class:"todoList_statistics"},at={class:"text-bold"},lt={key:1,class:"empty"},nt=v(()=>t("p",{class:"empty-desc"},"目前尚無待辦事項",-1)),rt=v(()=>t("img",{src:q,alt:"無待辦事項",class:"empty-img"},null,-1)),it=[nt,rt],ct={__name:"Todo",setup(c){const d=V.get(),u=l(""),g=l(null),_=l([]),w=l(!1);async function p(){try{const s=await a.getTodos(d);_.value=s.data.data,w.value=!0}catch(s){console.error("[getTodoList] error ==>",s),alert(a.parseError(s))}}p();async function L(){const s=u.value;if(!s){alert("請先輸入待辦事項！"),g.value.focus();return}const o={content:s};try{await a.postTodos(d,o),u.value="",await p()}catch(e){console.error("[addTodo] error ==>",e),alert(a.parseError)}}async function N(s){try{await a.deleteTodos(d,s),await p()}catch(o){console.error("[deleteTodo] error ==>",o),alert(a.parseError)}}async function B(s){try{await a.patchTodosToggle(d,s),await p()}catch(o){console.error("[changeTodoStatus] error ==>",o),alert(a.parseError)}}const h=l(0),f=l(0);I(()=>{h.value=0,f.value=0,_.value.forEach(s=>{s.status?h.value++:f.value++})});let m=l(void 0),b=[];A(()=>{b=document.querySelectorAll(".tab-link")});function k(s,o){m.value=o,b.forEach(e=>{e.classList.remove("active")}),s.target.classList.add("active")}return(s,o)=>(n(),r("div",z,[w.value?(n(),r("div",O,[t("div",P,[x(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>u.value=e),ref_key:"refNewTodo",ref:g,onKeyup:D(L,["enter"]),type:"text",placeholder:"請輸入待辦事項"},null,544),[[M,u.value,void 0,{trim:!0}]]),t("a",{href:"#",class:"inputBoxAdd",onClick:i(L,["prevent"])},G)]),_.value.length>0?(n(),r("div",H,[t("ul",J,[t("li",null,[t("a",{href:"#",class:"tab-link active",onClick:o[1]||(o[1]=i(e=>k(e),["prevent"]))},"全部")]),t("li",null,[t("a",{href:"#",class:"tab-link",onClick:o[2]||(o[2]=i(e=>k(e,!1),["prevent"]))},"待完成")]),t("li",null,[t("a",{href:"#",class:"tab-link",onClick:o[3]||(o[3]=i(e=>k(e,!0),["prevent"]))},"已完成")])]),t("div",Q,[t("ul",W,[(n(!0),r(C,null,F(_.value,e=>(n(),r(C,{key:e.id},[S(m)===void 0||S(m)===e.status?(n(),r("li",X,[t("label",Y,[x(t("input",{"onUpdate:modelValue":y=>e.status=y,onClick:y=>B(e.id),class:"todoList_input",type:"checkbox",value:"true"},null,8,Z),[[K,e.status]]),t("span",null,T(e.content),1)]),t("a",{href:"#",onClick:i(y=>N(e.id),["prevent"])},st,8,tt)])):E("",!0)],64))),128))]),t("div",ot,[t("p",at,T(f.value)+" 個待完成項目",1),t("p",null,T(h.value)+" 個已完成項目",1)])])])):(n(),r("div",lt,it))])):E("",!0)]))}},ut=U(ct,[["__scopeId","data-v-16635586"]]);export{ut as default};
