(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{844:function(e,t,n){"use strict";n.r(t);n(277);var o=n(846),r=n.n(o),a=(n(180),n(211)),i=n.n(a),p=(n(103),n(70)),s=n.n(p),u=n(1),l=n.n(u),c=n(63),f=n(84),h=n.n(f),y=n(21),b=n(852),d=n.n(b),g=n(853),m=n(854),_=n(869),w=n.n(_);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return(j=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=j(t).call(this,e))||"object"!==v(r)&&"function"!==typeof r?E(o):r).onRefresh=n.onRefresh.bind(E(E(n))),n.onPageChange=n.onPageChange.bind(E(E(n))),n.updateIssue=n.updateIssue.bind(E(E(n))),n}var n,o,a;return n=t,(o=[{key:"onRefresh",value:function(){this.props.dispatch(y.routerRedux.push({pathname:this.props.location.pathname,search:this.props.location.search}))}},{key:"onPageChange",value:function(e){var t=h.a.parse(this.props.location.search);this.props.dispatch(y.routerRedux.push({pathname:this.props.location.pathname,search:h.a.stringify(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){O(e,t,n[t])})}return e}({},t,{page:1===e?void 0:e}))}))}},{key:"updateIssue",value:function(e){this.props.dispatch({type:"all/updateIssue",payload:e})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:"\u6240\u6709\u6587\u7ae0",action:l.a.createElement(s.a,{type:"primary",onClick:this.onRefresh},"\u5237\u65b0"),breadcrumbList:[{title:null}]}),l.a.createElement(g.a,null,l.a.createElement(r.a,{bordered:!1},l.a.createElement(m.a,{list:this.props.list,loading:this.props.loading,updateIssue:this.updateIssue}),l.a.createElement(i.a,{className:w.a.pagination,current:this.props.page,showQuickJumper:!0,pageSize:this.props.pageSize,total:this.props.total,showTotal:function(e){return"\u5171 ".concat(e," \u9879")},onChange:this.onPageChange}))))}}])&&S(n.prototype,o),a&&S(n,a),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");P(e.prototype,t&&t.prototype),t&&P(e,t)}(t,e),t}(l.a.PureComponent);t.default=Object(c.connect)(function(e){return{loading:e.all.loading,list:e.all.list,total:e.all.total,page:e.all.page,pageSize:e.all.pageSize}})(k)},869:function(e,t,n){e.exports={italic:"index_italic__1jW3i",ellipsis:"index_ellipsis__2Pf4J",ponter:"index_ponter__2xTGn",pagination:"index_pagination__3GCSo"}}}]);
//# sourceMappingURL=10.0e6423cc.chunk.js.map