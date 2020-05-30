!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("santa-components"),require("lodash"),require("santa-core-utils")):"function"==typeof define&&define.amd?define(["react","prop-types","santa-components","lodash","santa-core-utils"],t):"object"==typeof exports?exports["bolt-components"]=t(require("react"),require("prop-types"),require("santa-components"),require("lodash"),require("santa-core-utils")):e["bolt-components"]=t(e.react,e["prop-types"],e["santa-components"],e.lodash,e["santa-core-utils"])}(this,function(e,t,r,o,i){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,r){"use strict";var o=r(5),i=r(7),n=r(8),s=r(9),a=r(10),p=r(11),l=r(12),u=r(13),c=r(14),d=r(15),f=r(16),m=r(17),y=r(18),h=r(19);e.exports={BoltSite:o,SiteRoot:i,SystemAnchor:n,BoltPageGroup:s,FontsContainer:a,PopupRoot:p,ResponsiveStylesRenderer:l,gallerySeoHOC:u,tpaSeoHOC:c,CssContainer:d,PopoverLayer:f,RemoteRefDeadComp:m,GhostRefComp:y,MaxZIndexComponent:h}},function(e,t,r){"use strict";var o="/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/BoltSite.js";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var n=r(3),s=r(0),a=r(1),p=r(2),l=p.utils.createSantaTypesDefinitions,u=p.santaTypesDefinitions,c=r(6),d={aspectCompsContainer:!0,POPUPS_ROOT:!0,FONTS_CONTAINER:!0},f=l({navigateTo:a.func,parseNavInfo:a.func,navigateToLanguage:a.func,shouldShowAllBoltSiteContainerChildren:a.bool,isWixSite:a.bool,getPrimaryRootNavigationInfo:a.func,getCustomClickOccurred:a.func,isExternalNavigationAllowed:a.bool,previewTooltipCallback:a.func},"BoltSite"),m=function(e){return e.stopPropagation(),e.preventDefault(),!1},y=function(e,t,r,o,i,n,s,a,p,l){return function(u){var d=s();n();var f=function e(t,r){return t&&t.tagName?t.tagName.toLowerCase()===r?t:e(t.parentNode,r):null}(u.target,"a");if(!f)return!0;var y=function(e){return{href:e.getAttribute("href"),target:e.getAttribute("target"),pageItemAdditionalData:e.getAttribute("data-page-item-context"),anchorData:e.getAttribute("data-anchor"),noUrlChangeAttr:e.getAttribute("data-no-physical-url"),isChangingUrl:!e.getAttribute("data-no-physical-url"),isKeepingRoots:!!e.getAttribute("data-keep-roots"),cancelLink:!!e.getAttribute("data-cancel-link")}}(f),h=y.noUrlChangeAttr||y.href,g=i(h),_="_blank"===y.target||!g,v="_self"===y.target&&!g,b="_blank"===y.target&&g&&g.pageId;if(function(e,t,r,o){if(t.cancelLink)return!0;if(!e)return!1;var i=o(),n=!r&&"_self"===t.target,s="_blank"!==t.target&&r&&r.pageId&&r.pageId!==i.pageId,a="_blank"!==t.target&&r&&r.innerRoute&&r.innerRoute!==i.innerRoute;return n||s||a}(d,y,g,a))return m(u);var N=!!h&&0===h.indexOf("mailto");if(!l&&(v||N||b)){if(p){var T=u.target.getBoundingClientRect();p(T,"text_editor_inactive_link_on_preview")}return m(u)}return g&&g.pageId===c.errorPages.IDS.NOT_FOUND&&!l?m(u):!(f&&!_&&g.pageId!==c.errorPages.IDS.NOT_FOUND)||(g&&g.queryParams&&g.queryParams.lang&&r&&g.queryParams.lang!==r.languageCode&&o&&o("sv_multilingualSubDomains")?t(g.queryParams.lang):e(y),m(u))}},h=function(e){var t=[],r=e.isWixSite,o=e.isVisualFocusEnabled;return r?t.push("wixSiteProperties"):t.push("noop"),o&&t.push("visual-focus-on"),t.join(" ")},g=function(e){var t=e.isMeshLayoutMechanism,r=e.getPrimaryRootNavigationInfo,i=e.isExperimentOpen;if(!r)return null;var a=i&&i("sv_earlyCloseWelcome")?"\n        if (window.requestCloseWelcomeScreen) {\n            window.requestCloseWelcomeScreen();\n        }\n    ":"";return s.createElement("script",{id:"partiallyVisibleBeat",dangerouslySetInnerHTML:{__html:"\n                if (window.wixBiSession) {\n                    wixBiSession.isUsingMesh = "+(t?"true":"false")+";\n                    if (wixBiSession.sendBeat) {\n                        wixBiSession.sendBeat(12, 'Partially visible', '&pid="+n.get(r(),["primaryPage","pageId"],"")+"');\n                    }\n                    "+a+"\n                }\n            "},__source:{fileName:o,lineNumber:138},__self:this})};g.propTypes={isMeshLayoutMechanism:u.Layout.isMeshLayoutMechanism,getPrimaryRootNavigationInfo:f.getPrimaryRootNavigationInfo.isRequired,isExperimentOpen:u.isExperimentOpen.isRequired};var _=function(e){return e.shouldShowAllBoltSiteContainerChildren?e.children||null:s.Children.map(e.children,function(e){return d[n.get(e,"props.id")]?e:null})},v=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.navigateTo,r=e.navigateToLanguage,n=e.currentLanguage,a=e.isExperimentOpen,p=e.parseNavInfo,l=e.resetCustomClickOccurred,u=e.getCustomClickOccurred,c=e.isMeshLayoutMechanism,d=e.getPrimaryRootNavigationInfo,f=e.previewTooltipCallback,m=e.isExternalNavigationAllowed;return s.createElement("div",{key:"BoltSite",className:h(e),style:{position:"relative"},onClick:y(t,r,n,a,p,l,u,d,f,m),__source:{fileName:o,lineNumber:175},__self:this},s.createElement(_,i({},e,{__source:{fileName:o,lineNumber:181},__self:this})),s.createElement(g,{key:"partiallyVisibleBeat",isMeshLayoutMechanism:c,getPrimaryRootNavigationInfo:d,isExperimentOpen:a,__source:{fileName:o,lineNumber:182},__self:this}))},n}(s.Component);v.displayName="BoltSite",v.santaTypeDefinitions=f,v.compType="BOLT_SITE",v.propTypes={children:a.node,navigateTo:f.navigateTo.isRequired,navigateToLanguage:f.navigateToLanguage.isRequired,currentLanguage:u.RendererModel.multilingual.currentLanguage,parseNavInfo:f.parseNavInfo.isRequired,isVisualFocusEnabled:u.isVisualFocusEnabled.isRequired,isWixSite:f.isWixSite.isRequired,shouldShowAllBoltSiteContainerChildren:f.shouldShowAllBoltSiteContainerChildren,isMeshLayoutMechanism:u.Layout.isMeshLayoutMechanism,resetCustomClickOccurred:u.resetCustomClickOccurred,getPrimaryRootNavigationInfo:f.getPrimaryRootNavigationInfo.isRequired,getCustomClickOccurred:f.getCustomClickOccurred,isExperimentOpen:u.isExperimentOpen,previewTooltipCallback:u.RenderRealtimeConfig.previewTooltipCallback,isExternalNavigationAllowed:u.RenderFlags.isExternalNavigationAllowed},v.defaultProps={shouldShowAllBoltSiteContainerChildren:!0},e.exports=v},function(e,t){e.exports=i},function(e,t,r){"use strict";var o=r(0),i=r(1),n=r(2).utils,s=n.createReactElement,a=(0,n.createSantaTypesDefinitions)({siteRootStyle:i.object,siteRootAriaHidden:i.bool},"SiteRoot"),p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e="SITE_ROOT";return s("div",{id:e,key:e,className:e,style:this.props.siteRootStyle,"aria-hidden":this.props.siteRootAriaHidden},this.props.children)},o}(o.Component);p.displayName="SiteRoot",p.santaTypesDefinitions=a,p.compType="SITE_ROOT",p.propTypes={children:i.node,siteRootStyle:a.siteRootStyle,siteRootAriaHidden:a.siteRootAriaHidden},e.exports=p},function(e,t,r){"use strict";var o=r(0),i=r(1),n=r(2),s=n.utils.createReactElement,a=n.santaTypesDefinitions,p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props,t=e.id,r=e.getTranslatedAriaLabel,o=e.ariaLabelKey,i=e.ariaLabelDefault;return s("div",{id:t,key:t,tabIndex:-1,"aria-label":r("AriaLabels",o,i),role:"region",style:{height:0}})},o}(o.Component);p.displayName="SystemAnchor",p.compType="SYSTEM_ANCHOR",p.propTypes={id:i.string,ariaLabelKey:i.string,ariaLabelDefault:i.string,getTranslatedAriaLabel:a.Accessibility.getTranslatedAriaLabel.isRequired},e.exports=p},function(e,t,r){"use strict";var o=r(0),i=r(1),n=r(2).utils,s=n.createReactElement,a=(0,n.createSantaTypesDefinitions)({id:i.string,registerNextPageTransition:i.func,children:i.node},"BoltPageGroup"),p=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=o.prototype;return i.componentWillReceiveProps=function(e){this.shouldPerformPageTransition=e.isDuringPageTransition},i.componentDidLayout=function(){this.shouldPerformPageTransition&&(this.props.registerNextPageTransition(!0),this.shouldPerformPageTransition=!1)},i.render=function(){return s("div",{id:this.props.id,style:{width:"100%"}},this.props.children)},o}(o.Component);p.displayName="BoltPageGroup",p.compType="wysiwyg.viewer.components.PageGroup",p.santaTypesDefinitions=a,p.propTypes={id:a.id,registerNextPageTransition:a.registerNextPageTransition,isDuringPageTransition:i.bool,children:a.children},e.exports=p},function(e,t,r){"use strict";var o="/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/FontsContainer.js";var i=r(0),n=r(1),s=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.fontsLinks,t="FONTS_CONTAINER";return i.createElement("div",{id:t,key:t,__source:{fileName:o,lineNumber:16},__self:this},e.map(function(e,t){return i.createElement("link",{key:t,href:e,rel:"stylesheet",type:"text/css",__source:{fileName:o,lineNumber:17},__self:this})}))},n}(i.Component);s.displayName="FontsContainer",s.compType="FONTS_CONTAINER",s.propTypes={fontsLinks:n.array},e.exports=s},function(e,t,r){"use strict";var o=r(0),i=r(1),n=r(3),s=r(2),a=s.utils.createReactElement,p=s.santaTypesDefinitions,l=function(e){var t,r;function o(t){var r;return(r=e.call(this,t)||this).state={},r}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=o.prototype;return i.getPopupsWrapperStyles=function(e,t,r,o){return n.assign({margin:"0 auto",width:t?r:"auto"},!e&&{minWidth:r,minHeight:o})},i.getPopupsRootClassName=function(){return"POPUPS_ROOT"+(this.props.isMobileView?" mobile":"")+(this.props.isResponsive?" responsive":"")},i.render=function(){var e=a("div",{id:"POPUPS_WRAPPER",className:"POPUPS_WRAPPER",key:"POPUPS_WRAPPER",style:this.props.isResponsive?{}:this.getPopupsWrapperStyles(this.props.isMesh,this.props.isMobileView,this.props.siteWidth,this.props.getScreenHeight()),onScroll:this.props.onScrollHandler},this.props.children);return a("div",{id:this.props.id,className:this.getPopupsRootClassName(),key:this.props.id,style:{overflow:this.props.allowSiteOverflow?null:"hidden"}},[e])},o}(o.Component);l.displayName="WixPopupRoot",l.compType="PopupRoot",l.propTypes={id:i.string.isRequired,children:i.node,onScrollHandler:i.func,currentPopupId:p.currentPopupId.isRequired,isMobileView:p.isMobileView.isRequired,isMesh:p.Layout.isMeshLayoutMechanism.isRequired,siteWidth:p.siteWidth.isRequired,getScreenHeight:p.getScreenHeight.isRequired,isResponsive:p.RendererModel.isResponsive,allowSiteOverflow:p.RenderFlags.allowSiteOverflow.isRequired},e.exports=l},function(e,t,r){"use strict";var o="/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/ResponsiveStylesRenderer.js";var i=r(0),n=r(1),s=r(2).utils.createSantaTypesDefinitions,a="RESPONSIVE_STYLES_RENDERER",p=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.layoutCss,r=e.layoutDsOverrides;return i.createElement("div",{id:a,key:a,__source:{fileName:o,lineNumber:13},__self:this},i.createElement("style",{id:"responsive-layout-styles",__source:{fileName:o,lineNumber:14},__self:this},t.join("\n")),i.createElement("style",{id:"responsive-layout-ds-styles-overrides",__source:{fileName:o,lineNumber:17},__self:this},r.join("\n")))},n}(i.Component);p.compType=a,p.displayName="ResponsiveStylesRenderer",p.santaTypesDefinitions=s({layoutCss:n.array,layoutDsOverrides:n.array},p.displayName),p.propTypes={layoutCss:p.santaTypesDefinitions.layoutCss,layoutDsOverrides:p.santaTypesDefinitions.layoutDsOverrides},e.exports=p},function(e,t,r){"use strict";var o=r(3),i=r(0),n=r(1),s=r(2),a=s.utils,p=a.createReactElement,l=a.createSantaTypesDefinitions,u=s.santaTypesDefinitions,c=250,d=20,f=function e(t){function r(e){return p("table",{id:e.id,type:t.displayName,style:o.assign({},o.pick(e.style,["position"]),{borderCollapse:"separate",borderSpacing:d})},function(e){var t=function(e){var t=Math.floor(e.style.width/(c+d));return o.chain(e).get("compData.items").map(function(t,r){return function(e,t,r){var i=r.staticMediaUrl+"/"+e.uri,n=function(e,t){var r={};switch(t.compProp.galleryImageOnClickAction){case"zoomMode":r=t.renderImageZoomLink(t.rootNavigationInfo,e,t.compData.id,void 0,t.id);break;case"goToLink":e.link&&(r=o.assign({},t.renderLink(e.link,t.rootNavigationInfo)))}return r}(e,r),s=r.compProp.textMode,a=e.width/e.height,p=c,l=Math.floor(c/a);return o.assign({},e,n,{index:t,src:i,width:p,height:l,textMode:s})}(t,r,e)}).groupBy(function(e){return Math.floor(e.index/t)}).values().value()}(e);return p("tbody",null,o.map(t,function(e,t){return function(e,t){return p("tr",{key:t},o.map(e,function(e){return function(e){var t=e.href?function(e){return p("a",{href:e.href,target:e.target},a(e))}(e):a(e),r=function(e){var t=[];o=e.textMode,("titleAndDescription"===o||"titleOnly"===o)&&t.push((r=e.title,p("h2",{itemProp:"name"},r)));var r;var o;(function(e){return"titleAndDescription"===e||"descriptionOnly"===e})(e.textMode)&&t.push((i=e.description,p("h3",{itemProp:"description"},i)));var i;return p.apply(void 0,["div",null].concat(t))}(e);return p("th",{key:e.id,id:e.id,itemScope:!0,itemType:"http://schema.org/ImageObject",style:{verticalAlign:"middle"}},t,r)}(e)}))}(e,t)}))}(e))}var n=function(e,t){return p(r,o.assign({forwardedRef:t},e))};n.displayName="seoGallery";var s=i.forwardRef(n);return s.displayName="ForwardRef(seoGallery)",s.propTypes=o.assign({staticMediaUrl:u.ServiceTopology.staticMediaUrl.isRequired,renderImageZoomLink:e.santaTypeDefinitions.renderImageZoomLink,renderLink:e.santaTypeDefinitions.renderLink},t.propTypes),s;function a(e){return p("img",{src:e.src,alt:e.title,itemProp:"contentURL",width:e.width,height:e.height})}},m=l({renderImageZoomLink:n.func,renderLink:n.func},"gallerySeoHOC");f.santaTypeDefinitions=m,f.propTypes={renderImageZoomLink:m.renderImageZoomLink.isRequired,renderLink:m.renderLink.isRequired},e.exports=f},function(e,t,r){"use strict";var o=r(3),i=r(0),n=r(2),s=n.utils.createReactElement,a=n.santaTypesDefinitions;e.exports=function(e){function t(t){return t.seoHtmlContent?s("div",{id:t.id,ref:t.forwardedRef,style:o.omit(t.style,"height"),dangerouslySetInnerHTML:{__html:t.seoHtmlContent}}):s(e,o.assign({},t,{ref:t.forwardedRef}))}var r=function(e,r){return s(t,o.assign({forwardedRef:r},e))};r.displayName="seoTpa";var n=i.forwardRef(r);return n.displayName="ForwardRef(seoTpa)",n.propTypes=o.assign({seoHtmlContent:a.TPA.seoHtmlContent},e.propTypes),n}},function(e,t,r){"use strict";var o="/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/CssContainer.js";var i=r(3),n=r(0),s=r(1),a="CSS_CONTAINER",p=function(e,t){return n.createElement("style",{id:e+"_css",key:e,dangerouslySetInnerHTML:{__html:t},__source:{fileName:o,lineNumber:8},__self:this})},l=function(e){var t,r;function s(){return e.apply(this,arguments)||this}return r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,s.prototype.render=function(){var e=this.props.css,t=e.masterPage,r=i.reduce(e,function(e,t,r){return"masterPage"!==r&&(e[r]=t),e},{});return n.createElement("div",{id:a,key:a,__source:{fileName:o,lineNumber:25},__self:this},t&&p("masterPage",t),i.map(r,function(e,t){return p(t,e)}))},s}(n.Component);l.compType=a,l.displayName="CssContainer",l.propTypes={css:s.object},e.exports=l},function(e,t,r){"use strict";var o=r(0),i=r(1),n=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n=i.prototype;return n.render=function(){return o.createElement("div",{style:{position:"absolute"},id:"popoverLayer",__source:{fileName:"/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/PopoverLayer.js",lineNumber:18},__self:this})},n.componentDidMount=function(){this.props.setPopoversLayerMounted("popoverLayer")},i}(o.Component);n.displayName="PopoverLayer",n.compType="PopoverLayer",n.propTypes={setPopoversLayerMounted:i.func.isRequired},e.exports=n},function(e,t,r){"use strict";var o="/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/RemoteRefDeadComp.js";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var n=r(0),s=r(1),a=r(2),p=a.utils.createSantaTypesDefinitions,l=a.santaTypesDefinitions,u="REMOTE_REF_DEAD_COMP",c=p({deadCompText:s.object},"RemoteRefDeadComp"),d=n.createElement("svg",{width:"22px",height:"23px",viewBox:"0 0 22 23",version:"1.1",className:u+"-icon",__source:{fileName:o,lineNumber:11},__self:void 0},n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",__source:{fileName:o,lineNumber:12},__self:void 0},n.createElement("g",{id:"Error-Message",transform:"translate(-308.000000, -690.000000)",fill:"#174165",fillRule:"nonzero",__source:{fileName:o,lineNumber:13},__self:void 0},n.createElement("g",{id:"Group-3",transform:"translate(66.000000, 75.000000)",__source:{fileName:o,lineNumber:14},__self:void 0},n.createElement("g",{id:"Group-Copy",transform:"translate(110.000000, 429.000000)",__source:{fileName:o,lineNumber:15},__self:void 0},n.createElement("g",{id:"Group-2",transform:"translate(128.000000, 186.000000)",__source:{fileName:o,lineNumber:16},__self:void 0},n.createElement("path",{d:"M13.5652174,6 L16.4347826,6 L16.4347826,10.0908203 L15.9602582,13 L14.1082817,13 L13.5652174,10.0638428 L13.5652174,6 Z M13.5652174,14 L16.4347826,14 L16.4347826,17 L13.5652174,17 L13.5652174,14 Z M14.5217391,2 C9.76728781,2 5.91304348,6.02943725 5.91304348,11 L5.91304348,12 C5.91304348,16.9705627 9.76728781,21 14.5217391,21 L15.4782609,21 C20.2327122,21 24.0869565,16.9705627 24.0869565,12 L24.0869565,11 C24.0869565,6.02943725 20.2327122,2 15.4782609,2 L14.5217391,2 Z M14.5217391,0 L15.4782609,0 C21.2892569,0 26,4.92486775 26,11 L26,12 C26,18.0751322 21.2892569,23 15.4782609,23 L14.5217391,23 C8.71074307,23 4,18.0751322 4,12 L4,11 C4,4.92486775 8.71074307,0 14.5217391,0 Z",id:"!",__source:{fileName:o,lineNumber:17},__self:void 0}))))))),f={margin:"0 auto",width:"fit-content",marginTop:"12px"},m={lengthAdjust:"spacingAndGlyphs",fontSize:"5",fill:"#7A92A5"},y=function(e){var t,r;function s(){return e.apply(this,arguments)||this}return r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,s.prototype.render=function(){var e=this.props,t=e.id,r=e.deadCompText,s=r.title,a=r.desc;return n.createElement("div",{id:t,style:{width:"100%",height:"100%"},__source:{fileName:o,lineNumber:45},__self:this},n.createElement("div",{style:f,__source:{fileName:o,lineNumber:46},__self:this},d,n.createElement("svg",{viewBox:"0 0 100 100",style:{width:"100%",height:"100%"},__source:{fileName:o,lineNumber:48},__self:this},n.createElement("text",i({x:"0",y:"10",className:u+"-title"},m,{style:{fontWeight:"bold"},__source:{fileName:o,lineNumber:49},__self:this}),s),n.createElement("text",i({x:"0",dy:"20",className:u+"-desc"},m,{__source:{fileName:o,lineNumber:52},__self:this}),a))))},s}(n.Component);y.compType=u,y.displayName="RemoteRefDeadComp",y.santaTypesDefinitions=c,y.propTypes={id:l.Component.id,deadCompText:c.deadCompText},e.exports=y},function(e,t,r){"use strict";var o=r(0),i=r(2).santaTypesDefinitions,n={visibility:"hidden",overflow:"hidden",width:0,minWidth:0,height:0,minHeight:0,marginBottom:0,pointerEvents:"none"},s=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.render=function(){var e=this.props,t=e.id,r=e.isCollapsed;return o.createElement("div",{id:t,"data-collapsed":r,style:n,__source:{fileName:"/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/GhostRefComp.js",lineNumber:23},__self:this})},i}(o.Component);s.compType="GHOST_REF_COMP",s.propTypes={id:i.Component.id,isCollapsed:i.Component.isCollapsed},e.exports=s},function(e,t,r){"use strict";var o=r(0),i=r(1),n=r(3),s="MAX_Z_INDEX_COMPONENT",a=function(e){var t,r;function i(t){var r;return(r=e.call(this,t)||this).lastComps=t.compsToShowOnTop.slice(),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.componentWillReceiveProps=function(e){var t=this;n(this.lastComps).xor(e.compsToShowOnTop).forEach(function(e){return t.props.registerRelayoutPending(e)}),this.lastComps=e.compsToShowOnTop.slice()},a.render=function(){var e=this.props.css;return o.createElement("style",{id:s,__source:{fileName:"/home/builduser/agent00/work/10f54baeb10a783d/bolt-components/src/MaxZIndexComponent.js",lineNumber:24},__self:this},e)},i}(o.Component);a.compType=s,a.displayName="MaxZIndexComponent",a.propTypes={css:i.string,compsToShowOnTop:i.arrayOf(i.string),registerRelayoutPending:i.func},e.exports=a}])});
//# sourceMappingURL=bolt-components.js.map