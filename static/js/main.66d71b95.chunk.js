(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),u=n(1),o=n.n(u),i=n(2),s=n(3),p=n(6),m=n(7),g=n(10),h=n(8),b=n(11),f=n(9),v=(n(19),function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.iev.aero/api/flights/13-06-2019",e.next=3,fetch("https://api.iev.aero/api/flights/13-06-2019");case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),d=function(e){var t=e.perPage,n=e.onPerPageChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"items per Pages",t),r.a.createElement("select",{value:t,onChange:n,name:"perPage"},r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20")))},E=n(20),P=function(e){var t=e.handleFlipButton,n=e.handlePageButtons,a=e.page,l=e.pageNumber,c=e.buttonsNumbers,u=function(e,t){return E({button:!0,"button--pagination":!0,"button--active":e===t})},o=E({dots:!0,hide:a<4}),i=E({dots:!0,hide:a>c.length-3});return r.a.createElement("div",{className:"Pagination"},r.a.createElement("button",{name:"back",onClick:t,className:"button button--flip",type:"submit",disabled:1===a},"<"),r.a.createElement("ul",{className:"pagination__list"},r.a.createElement("li",{key:c[0]},r.a.createElement("button",{name:c[0],onClick:n,type:"button",className:u(c[0],a,c.length)},c[0])),r.a.createElement("li",{className:o},"..."),c.filter(function(e,t,n){return 0!==t&&t!==n.length-1&&(t+1===a||t+1===a+1||t+1===a-1)}).map(function(e,t,l){return r.a.createElement("li",{key:e},r.a.createElement("button",{name:e,onClick:n,type:"button",className:u(e,a,l.length)},e))}),r.a.createElement("li",{className:i},"..."),r.a.createElement("li",{key:c[c.length-1]},r.a.createElement("button",{name:c[c.length-1],onClick:n,type:"button",className:u(c[c.length-1],a,c.length)},c[c.length-1]))),r.a.createElement("button",{name:"next",onClick:t,className:"button button--flip",type:"submit",disabled:a===l},">"))},k=function(e,t){return Math.ceil(t/e)},y=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={arrivals:[],perPage:20,page:1},n.handlePageButtons=function(e){var t=e.target.name;n.setState({page:+t})},n.handleFlipButton=function(e){var t=e.target.name,a=n.state,r=a.page,l=a.perPage,c=a.arrivals,u=k(l,c.length);"next"===t&&r<u&&n.setState(function(e){return{page:e.page+1}}),"back"===t&&r>1&&n.setState(function(e){return{page:e.page-1}})},n.onPerPageChange=function(e){var t,a=e.target,r=a.name,l=a.value;n.setState((t={},Object(s.a)(t,r,+l),Object(s.a)(t,"page",1),t))},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,this.setState({arrivals:t.body.arrival});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.perPage,a=e.arrivals,l=function(e,t,n){return e.filter(function(e,a){return a>=(t-1)*n&&a<t*n})}(a,t,n),c=k(n,a.length),u=function(e){for(var t=[],n=1;n<=e;)t=[].concat(Object(f.a)(t),[n]),n+=1;return t}(c),o="\n      ".concat(t*n-n+1,"\n      - ").concat(t*n-n+l.length,"\n    ");return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,a.length," Flights"),r.a.createElement("h3",null,"number Of Pages",c),r.a.createElement(d,{perPage:n,onPerPageChange:this.onPerPageChange}),r.a.createElement("p",null,"Shown",o," ","from",a.length),r.a.createElement("ul",null,l.map(function(e){return r.a.createElement("li",{key:e.ID},e.airline.en.name)})),r.a.createElement(P,{handleFlipButton:this.handleFlipButton,handlePageButtons:this.handlePageButtons,page:t,pageNumber:c,buttonsNumbers:u}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.66d71b95.chunk.js.map