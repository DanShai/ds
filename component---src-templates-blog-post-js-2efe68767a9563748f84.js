(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return p});var a=n(8),r=n.n(a),i=n(0),l=n.n(i),s=n(179),o=n.n(s),c=n(158),u=n(214),m=n.n(u),d=n(165),h=(n(252),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=m()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;a.index,a.total;return l.a.createElement(d.a,null,l.a.createElement(o.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),l.a.createElement("section",{className:"container"},l.a.createElement(c.Link,{className:"alink",to:"/blog"},"Back to Blog"),l.a.createElement("span",{className:"bheader"},l.a.createElement("h3",null,e.frontmatter.date," , ",e.frontmatter.author),l.a.createElement("h2",null,e.frontmatter.title)),l.a.createElement("div",{className:"box boxshadow",dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("ul",{className:"grid-2"},r&&l.a.createElement("li",{className:"left"},l.a.createElement("span",null,l.a.createElement(c.Link,{className:"alink",to:r.fields.slug,rel:"prev"},r.frontmatter.title))),i&&l.a.createElement("li",{className:"right"},l.a.createElement("span",null,l.a.createElement(c.Link,{className:"alink",to:i.fields.slug,rel:"next"},i.frontmatter.title))))))},t}(l.a.Component));t.default=h;var p="1594519860"},155:function(e,t,n){},157:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},158:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),s=n(150),o=n.n(s);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(26);n.d(t,"waitForRouteChange",function(){return c.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(37);n.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},160:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},161:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),s=n(52),o=n(1),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,n){},165:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),l=n.n(i),s=(n(4),n(155),n(160)),o=n.n(s),c=n(158),u=(n(163),n(174)),m=n(175),d=n(176),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.start=null,this.scrolly=0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,clearTimeout(this.autotimeout),window.removeEventListener("scroll",function(){return e.handlescroll()})},n.hidemenu=function(){this._isMounted&&this.setState({showmenu:!1,open:!1},function(){})},n.btnClicked=function(){var e=this;this._isMounted&&this.setState({open:!this.state.open},function(){e.autoclose()})},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&this._isMounted&&this.setState({showmenu:!0,open:!1},function(){return e.scrolly=e.curscrolly}),this.start=(new Date).getSeconds(),clearTimeout(this.autotimeout),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return l.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},l.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},l.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),l.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),l.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),l.a.createElement(c.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/mnistpred"},l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:m.a}))),l.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:d.a})," ")),l.a.createElement(c.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:m.b}))),l.a.createElement(c.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},l.a.createElement("i",{className:"icon"},l.a.createElement(u.a,{icon:m.c}))))},t}(l.a.Component),p=function(e){return l.a.createElement("section",{className:"banner"},l.a.createElement(h,null),l.a.createElement("div",{className:"banner-content"},l.a.createElement("img",{src:o.a,className:"logo",alt:"Dan Shai"}),l.a.createElement("div",{className:"title"},"Dan Shai")))},f=function(e){return l.a.createElement("section",{className:"footer center bg-dark"},l.a.createElement("p",null," ",l.a.createElement("span",null," Dan shai © 2018 ")," "))},E=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(p,null),e,l.a.createElement(f,null))},t}(l.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2efe68767a9563748f84.js.map