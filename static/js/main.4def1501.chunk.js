(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(14),n(4)),i=n(5),u=n(8),l=n(7),d=function(e){var t=e.goods;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{style:{color:e.color}},e.name))})))},m=function(e){var t=e.handle,n=e.name;return r.a.createElement("button",{className:"control__btn",type:"button",onClick:t},n)},f=n(1),p=n.n(f),h=n(6),E=function(){var e=Object(h.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.updateList,n=e.setLoading,a=e.setError,o="https://mate.academy/students-api/goods",c=function(e){return e},s=function(e){return e.sort((function(e,t){return e.name>t.name?1:-1})).splice(0,5)},i=function(e){return e.filter((function(e){return"red"===e.color}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;a(!1),n(!0),E(o).then((function(a){n(!1),t(e(a.data))})).catch((function(){n(!1),a(!0)}))};return r.a.createElement("div",{className:"control"},r.a.createElement(m,{name:"Load All goods",handle:function(){u()}}),r.a.createElement(m,{name:"Load 5 first goods",handle:function(){u(s)}}),r.a.createElement(m,{name:"Load red goods",handle:function(){u(i)}}))},v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goods:[],isLoading:!1,hasError:!1},e.setLoading=function(t){e.setState({isLoading:t})},e.setError=function(t){e.setState({hasError:t})},e.updateGoodsList=function(t){e.setState({goods:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isLoading,a=e.hasError;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{updateList:this.updateGoodsList,setLoading:this.setLoading,setError:this.setError}),a&&r.a.createElement("p",{className:"error"},"Error occurred while loading"),n&&r.a.createElement("p",{className:"load"},"Loading..."),!a&&!n&&r.a.createElement(d,{goods:t}))}}]),n}(r.a.Component),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement(v,null))};c.a.render(r.a.createElement(L,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4def1501.chunk.js.map