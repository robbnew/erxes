(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,6035,7420],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(7294),i=a(3905),r=a(2263),o=a(6291),l=a(8648),c=a(4034),s=a(9973),u=a(6010),d=a(6700),m=a(944),p=a(1839),b=a(3783),h=a(7898),f=a(6742),v=a(3919),E=a(5537),g=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=a(4478),_=a(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",I="menu_Bmed",x="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R",T="sidebarMenuIcon_fgN0",P="sidebarMenuCloseIcon_1lpH",A="menuLinkExternal_1OhN";var R=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},M=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,["items"]);return t.map((function(e,t){return n.createElement(L,(0,c.Z)({key:t,item:e},a))}))}));function L(e){switch(e.item.type){case"category":return n.createElement(O,e);case"link":default:return n.createElement(F,e)}}function O(e){var t,a,i,r=e.item,o=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),p=r.items,b=r.label,h=R(r,d),f=(a=h,i=(0,n.useRef)(a),(0,n.useEffect)((function(){i.current=a}),[a]),i.current),v=(0,n.useState)((function(){return!!l&&(!h&&r.collapsed)})),E=v[0],g=v[1],k=(0,n.useRef)(null),_=(0,n.useState)(void 0),C=_[0],N=_[1],S=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&g(!1)}),[h,f,E]);var Z=(0,n.useCallback)((function(e){e.preventDefault(),C||S(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===p.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[x]=!l,t)),onClick:l?Z:void 0,href:l?"#!":void 0},m),b),n.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||S(!1)}},n.createElement(M,{items:p,tabIndex:E?"-1":"0",onItemClick:o,collapsible:l,activePath:d})))}function F(e){var t,a=e.item,i=e.onItemClick,r=e.activePath,o=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,d=a.label,m=R(a,r);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(f.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[A]=!(0,v.Z)(l),t)),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",B),onClick:t},n.createElement(g,{className:w}))}function D(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(T,P)},"\xd7"):n.createElement(k.Z,{className:T,height:24,width:24}))}var K=function(e){var t,a,i=e.path,r=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,x=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,p.Z)(t);var i=(0,b.Z)();return(0,n.useEffect)((function(){i===b.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),B=x.showResponsiveSidebar,w=x.closeResponsiveSidebar,T=x.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=g,t[S]=s,t))},g&&n.createElement(E.Z,{tabIndex:-1,className:Z}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":B},a[y]=!_&&f,a))},n.createElement(D,{responsiveSidebarOpened:B,onClick:T}),n.createElement("ul",{className:"menu__list"},n.createElement(M,{items:r,onItemClick:w,collapsible:l,activePath:i}))),k&&n.createElement(H,{onClick:c}))},W=a(3541),z=a(4608),J=a(5977),U="docPage_31aa",Y="docMainContainer_3ufF",G="docMainContainerEnhanced_3NYZ",Q="docSidebarContainer_3Kbt",X="docSidebarContainerHidden_3pA8",j="collapsedDocSidebar_2JMH",q="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,a,o,c,s,m=e.currentDocRoute,p=e.versionMetadata,b=e.children,h=(0,r.default)(),f=h.siteConfig,v=h.isClient,E=p.pluginId,k=p.permalinkToSidebar,C=p.docsSidebars,N=p.version,S=k[m.path],Z=C[S],I=(0,n.useState)(!1),x=I[0],y=I[1],B=(0,n.useState)(!1),w=B[0],T=B[1],P=(0,n.useCallback)((function(){w&&T(!1),y(!x)}),[w]);return n.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(E,N)}},n.createElement("div",{className:U},Z&&n.createElement("div",{className:(0,u.Z)(Q,(t={},t[X]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q)&&x&&T(!0)},role:"complementary"},n.createElement(K,{key:S,sidebar:Z,path:m.path,sidebarCollapsible:null==(a=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:P,isHidden:w}),w&&n.createElement("div",{className:j,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},n.createElement(g,{className:q}))),n.createElement("main",{className:(0,u.Z)(Y,(c={},c[G]=x||!Z,c))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",$,(s={},s[V]=x,s))},n.createElement(i.Zo,{components:W.Z},b)))))}var te=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,r=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return r?n.createElement(ee,{currentDocRoute:r,versionMetadata:a},(0,o.Z)(t)):n.createElement(z.default,e)}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),i=a(8648),r=a(4973);t.default=function(){return n.createElement(i.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,a){"use strict";var n=a(7294),i=a(4184),r=a.n(i),o=a(2263),l=a(5977),c=a(2644);t.Z=function(e){var t=(0,n.useState)(!1),i=t[0],s=t[1],u=(0,n.useRef)(null),d=(0,o.default)().siteConfig,m=(void 0===d?{}:d).themeConfig.algolia,p=(0,l.k6)(),b=(0,c.Z)().navigateToSearchPage;var h=function(e){void 0===e&&(e=!0),i||Promise.all([Promise.all([a.e(4362),a.e(5525)]).then(a.t.bind(a,4362,23)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,3343))]).then((function(t){var a=t[0].default;s(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,t,a){t.stopPropagation();var n=document.createElement("a");n.href=a.url;var i="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;p.push(i)}}),e&&u.current.focus()}(e)}))},f=(0,n.useCallback)((function(){h(),i&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=(0,n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=(0,n.useCallback)((function(e){var t="mouseover"!==e.type;h(t)})),g=(0,n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:r()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:r()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:E,onFocus:E,onBlur:v,onKeyDown:g,ref:u}))}}}]);