_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{jz8I:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/unsubscribe",function(){return n("oOeJ")}])},oOeJ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),u=n("q1tI"),c=n.n(u),i=n("R9S9"),s=n("icBp"),l=n("TeL5"),f=n("67um"),p=n.n(f),d=n("vDqi"),b=n.n(d),m=n("7vrA"),v=n("QojX"),w=n("cWnB"),h=c.a.createElement;function E(){var e=Object(u.useState)(!1),t=e[0],n=e[1];return h(i.a,null,h("div",{className:"content"},h(m.a,{className:"section"},h(l.a,{title:"Unsubscribe_",top:!0}),h(s.a,null,h("p",null,"Enter your netID to unsubscribe from the WECE mailing list."),h(v.a,{name:"unsubscribe-form",noValidate:!0,validated:t,onSubmit:function(e){var t=e.currentTarget;if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation(),n(!0);else{e.preventDefault(),n(!0);var r=new FormData(t),u=t.querySelectorAll("input");u.forEach((function(e){return e.disabled=!0})),function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://script.google.com/macros/s/AKfycbwyS4Us0lkzSDiFNLrikWOyYTSrAqYvqXhWRfw20l4fR6HtkGg/exec",r).then((function(e){alert("You have successfully unsubscribed.")})).catch((function(e){alert("Error: "+e.message)})).finally((function(){u.forEach((function(e){return e.disabled=!1})),n(!1)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}}},h(v.a.Group,{controlId:"formNetId"},h(v.a.Label,null,"NetId"),h(v.a.Control,{required:!0,type:"text",name:"netID",placeholder:"Enter NetId"}),h(v.a.Control.Feedback,{type:"invalid"},"Please enter your NetID.")),h(w.a,{id:p.a["submit-form"],type:"submit"},"Submit"))))))}}},[["jz8I",0,1,2,3,5,6]]]);