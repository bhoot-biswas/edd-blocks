!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.autop}()},function(e,t,n){var o;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t,n){var o=n(29).Symbol;e.exports=o},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t,n){var o=n(21),r=n(22),a=n(23),l=n(24);e.exports=function(e){return o(e)||r(e)||a(e)||l()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(25);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t,n){var o=n(26),r=n(3);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){var o=n(27),r=n(39),a=/&(?:amp|lt|gt|quot|#39);/g,l=RegExp(a.source);e.exports=function(e){return(e=o(e))&&l.test(e)?e.replace(a,r):e}},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){var o=n(9);e.exports=function(e){if(Array.isArray(e))return o(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var o=n(9);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var o=n(28);e.exports=function(e){return null==e?"":o(e)}},function(e,t,n){var o=n(7),r=n(32),a=n(33),l=n(34),c=o?o.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},function(e,t,n){var o=n(30),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(31))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var o=n(35),r=n(38);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},function(e,t,n){var o=n(7),r=n(36),a=n(37),l=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):a(e)}},function(e,t,n){var o=n(7),r=Object.prototype,a=r.hasOwnProperty,l=r.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[c]=n:delete e[c]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var o=n(40)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=o},function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},,,function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",(function(){return Q})),n.d(o,"settings",(function(){return $}));var r=n(10),a=n.n(r),l=n(11),c=n.n(l),i=n(12),s=n.n(i),u=n(3),d=n.n(u),b=n(13),p=n.n(b),f=n(14),w=n.n(f),h=n(8),m=n.n(h),g=n(0),y=n(15),_=n(5),O=n.n(_),j=function(e){var t=e.showThumbnails,n=e.image;return t&&n?Object(g.createElement)(g.RawHTML,{className:"edd_download_image"},n):null},v=n(16),E=n.n(v),C=n(1);function x(e){return e?E()(e).trim():Object(C.__)("(Untitled)")}var S=function(e){var t=e.link,n=e.title,o=e.className,r=e.showCount,a=e.count,l=e.type;return"tag"===l||"category"===l?Object(g.createElement)(g.Fragment,null,Object(g.createElement)("div",{className:"edd-download-term-title"},Object(g.createElement)("h3",{className:o},Object(g.createElement)("a",{href:t,target:"_blank"},x(n))),r&&Object(g.createElement)("span",{className:"edd-download-term-count"},"(",a,")"))):Object(g.createElement)(g.Fragment,null,Object(g.createElement)("h3",{className:o},Object(g.createElement)("a",{href:t,target:"_blank"},x(n))))},D=n(4),k=function(e){var t=e.description,n=e.showDescription,o=e.className;return n?Object(g.createElement)(g.RawHTML,{className:o},Object(D.autop)(t)):null},T=function(e){var t=e.content,n=e.showFullContent,o=e.className;return n?Object(g.createElement)(g.RawHTML,{className:o},Object(D.autop)(t)):null},A=function(e){var t=e.price;return e.showPrice?Object(g.createElement)("div",{className:"edd_price"},Object(g.createElement)(g.RawHTML,null,t)):null},N=n(2),P=function(e){var t=e.purchaseLink;return e.showBuyButton?Object(g.createElement)(N.Disabled,null,Object(g.createElement)("div",{className:"edd_download_buy_button"},Object(g.createElement)(g.RawHTML,null,t))):null},B=function(e){var t=e.attributes,n=t.showThumbnails,o=t.showDescription,r=t.showFullContent,a=t.showPrice,l=t.showBuyButton,c=e.download.info,i=c.image,s=c.link,u=c.title,d=c.excerpt,b=c.content,p=c.price,f=c.purchase_link;return Object(g.createElement)("div",{className:"edd_download"},Object(g.createElement)("div",{className:"edd_download_inner"},Object(g.createElement)(j,{image:i,showThumbnails:n}),Object(g.createElement)(S,{title:u,link:s,className:"edd_download_title"}),Object(g.createElement)(k,{description:d,showDescription:o,className:"edd_download_excerpt"}),Object(g.createElement)(T,{content:b,showFullContent:r,className:"edd_download_full_content"}),Object(g.createElement)(A,{price:p,showPrice:a}),Object(g.createElement)(P,{purchaseLink:f,showBuyButton:l})))},F=function(e){var t,n=e.attributes,o=n.showThumbnails,r=n.showTitle,a=n.showCount,l=n.showDescription,c=e.taxonomy,i=c.name,s=c.link,u=c.count,d=c.description,b=c.taxonomy,p=e.taxonomy.meta.image;return"download_tag"===b?t="tag":"download_category"===b&&(t="category"),Object(g.createElement)("div",{className:"edd-download-".concat(t)},Object(g.createElement)(j,{image:p,showThumbnails:o}),r&&Object(g.createElement)(S,{title:i,link:s,className:"edd_download_title",showCount:a,count:u,type:"".concat(t)}),l&&Object(g.createElement)(k,{description:d,showDescription:l,className:"edd-download-term-description"}))},R=n(6),L=n(17),M=n(18),I=n(19),U=n.n(I);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w()(this,n)}}var H=function(e){p()(n,e);var t=q(n);function n(){var e;return c()(this,n),(e=t.apply(this,arguments)).setDownloadCategory=e.setDownloadCategory.bind(d()(e)),e.showDescription=e.showDescription.bind(d()(e)),e.showFullContent=e.showFullContent.bind(d()(e)),e.state={isLoading:!0,showDescription:!0,showFullContent:!1,downloads:[]},e}return s()(n,[{key:"componentDidMount",value:function(){"downloads"===this.props.attributes.type&&this.fetchDownloads()}},{key:"componentDidUpdate",value:function(e){var t=this.props.attributes,n=t.category,o=t.number,r=t.order,a=t.orderBy,l=(t.showEmpty,t.type),c=wp.data.select("core/editor").getEditorSettings().alignWide,i=e.attributes;"downloads"===l&&(n===i.category&&o===i.number&&r===i.order&&a===i.orderBy||this.fetchDownloads(),"downloads"!==i.type&&(this.fetchDownloads(),this.props.setAttributes({orderBy:"id"}))),c||this.props.setAttributes({align:void 0})}},{key:"componentWillUnmount",value:function(){delete this.downloadsRequest}},{key:"getOrderOptions",value:function(){return[{value:"asc",label:Object(C.__)("Ascending")},{value:"desc",label:Object(C.__)("Descending")}]}},{key:"getOrderByOptions",value:function(){var e,t=this.props.attributes.type;return"downloads"===t?e=[{value:"date",label:Object(C.__)("Date Created")},{value:"earnings",label:Object(C.__)("Earnings")},{value:"id",label:Object(C.__)("ID")},{value:"price",label:Object(C.__)("Price")},{value:"random",label:Object(C.__)("Random")},{value:"sales",label:Object(C.__)("Sales")},{value:"name",label:Object(C.__)("Slug")},{value:"title",label:Object(C.__)("Title")}]:"download_categories"!==t&&"download_tags"!==t||(e=[{value:"count",label:Object(C.__)("Count")},{value:"id",label:Object(C.__)("ID")},{value:"name",label:Object(C.__)("Name")},{value:"slug",label:Object(C.__)("Slug")}]),e}},{key:"getDownloadCategories",value:function(){var e=this.props.downloadCategories;return[{value:"all",label:Object(C.__)("All")}].concat(a()(e))}},{key:"getBlockTypes",value:function(){return[{value:"downloads",label:Object(C.__)("Downloads")},{value:"download_categories",label:Object(C.__)("Download Categories")},{value:"download_tags",label:Object(C.__)("Download Tags")}]}},{key:"setDownloadCategory",value:function(e){"all"===e&&(e=void 0),this.props.setAttributes({category:e})}},{key:"showDescription",value:function(){var e=this.state.showDescription;this.setState({showDescription:!e,showFullContent:e},(function(){this.props.setAttributes({showDescription:!e}),this.props.setAttributes({showFullContent:!1})}))}},{key:"showFullContent",value:function(){var e=this.state.showFullContent;this.setState({showFullContent:!e,showDescription:e},(function(){this.props.setAttributes({showFullContent:!e}),this.props.setAttributes({showDescription:!1})}))}},{key:"fetchDownloads",value:function(){var e=this,t=this.getOrderByOptions(),n=this.props.attributes,o=n.category,r=n.number,a=n.order,l=n.orderBy,c=l;switch(c){case"id":c="ID";break;case"random":c="rand";break;default:c=l}var i={number:r,order:a,orderby:c};Object(y.isUndefined)(o)||(i.category=o);var s=edd_blocks_global_vars.url;t.find((function(e){return e.value===l}))||(i.orderby="date");var u=U()({url:Object(L.addQueryArgs)("".concat(s,"/?edd-api=products"),i)});u.then((function(t){e.downloadsRequest===u&&e.setState({downloads:t,isLoading:!1})})),this.downloadsRequest=u}},{key:"renderDownloads",value:function(){var e=this.state.downloads.products,t=this.props,n=t.downloadCategories,o=t.downloadTags,r=this.props.attributes,a=r.columns,l=r.type;return"downloads"===l?Object(g.createElement)("div",{className:O()("edd_downloads_list","edd_download_columns_"+a)},e.map((function(e){return Object(g.createElement)(B,{download:e,key:e.info.id.toString(),attributes:r})}))):"download_categories"===l?Object(g.createElement)("div",{className:O()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},n.map((function(e){return Object(g.createElement)(F,{key:e.id,taxonomy:e,attributes:r})}))):"download_tags"===l?Object(g.createElement)("div",{className:O()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},o.map((function(e){return Object(g.createElement)(F,{key:e.id,taxonomy:e,attributes:r})}))):void 0}},{key:"render",value:function(){var e,t,n=this.props,o=n.attributes,r=n.setAttributes,a=n.downloadTags,l=n.downloadCategories,c=o.align,i=o.number,s=o.columns,u=o.showBuyButton,d=o.showPrice,b=o.showThumbnails,p=o.showDescription,f=o.showFullContent,w=o.showPagination,h=o.order,m=o.orderBy,y=o.category,_=o.type,O=o.showTitle,j=o.showCount,v=o.showEmpty,E=this.state.isLoading,x=this.state.downloads.products,S="download_categories"===_||"download_tags"===_;if(e="downloads"===_?Object(C.__)("Show Excerpt"):"download_categories"===_?Object(C.__)("Show Category Description"):"download_tags"===_?Object(C.__)("Show Tag Description"):Object(C.__)("Show Description"),t="download_categories"===_?Object(C.__)("Loading download categories"):"download_tags"===_?Object(C.__)("Loading download tags"):Object(C.__)("Loading downloads"),E)return Object(g.createElement)(g.Fragment,null,Object(g.createElement)(N.Placeholder,{icon:"download",label:t},Object(g.createElement)(N.Spinner,null)));var D=Object(g.createElement)(R.InspectorControls,null,Object(g.createElement)(N.PanelBody,{title:Object(C.__)("Settings")},Object(g.createElement)(N.SelectControl,{label:Object(C.__)("Display"),value:_,options:this.getBlockTypes(),onChange:function(e){return r({type:e})}}),"downloads"===_&&Object(g.createElement)(N.RangeControl,{label:Object(C.__)("Downloads Per Page"),value:i,onChange:function(e){return r({number:e})},min:1,max:100}),Object(g.createElement)(N.RangeControl,{label:Object(C.__)("Columns"),value:s,onChange:function(e){return r({columns:e})},min:1,max:6}),"downloads"===_&&Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Buy Button"),checked:!!u,onChange:function(){return r({showBuyButton:!u})}}),"downloads"===_&&Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Price"),checked:!!d,onChange:function(){return r({showPrice:!d})}}),Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Thumbnails"),checked:!!b,onChange:function(){return r({showThumbnails:!b})}}),S&&Object(g.createElement)(N.ToggleControl,{label:"download_categories"===_?Object(C.__)("Show Category Name"):Object(C.__)("Show Tag Name"),checked:!!O,onChange:function(){return r({showTitle:!O})}}),Object(g.createElement)(N.ToggleControl,{label:e,checked:!!p,onChange:this.showDescription}),O&&S&&Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Count"),checked:!!j,onChange:function(){return r({showCount:!j})}}),S&&Object(g.createElement)(N.ToggleControl,{label:"download_categories"===_?Object(C.__)("Show Empty Categories"):Object(C.__)("Show Empty Tags"),checked:!!v,onChange:function(){return r({showEmpty:!v})}}),"downloads"===_&&Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Full Content"),checked:!!f,onChange:this.showFullContent}),"downloads"===_&&Object(g.createElement)(N.ToggleControl,{label:Object(C.__)("Show Pagination"),checked:!!w,onChange:function(){return r({showPagination:!w})}}),Object(g.createElement)(N.SelectControl,{label:Object(C.__)("Order By"),value:m,options:this.getOrderByOptions(),onChange:function(e){return r({orderBy:e})}}),Object(g.createElement)(N.SelectControl,{label:Object(C.__)("Order"),value:h,options:this.getOrderOptions(),onChange:function(e){return r({order:e})}}),"downloads"===_&&Object(g.createElement)(N.SelectControl,{label:Object(C.__)("Show Downloads From Category"),value:y,options:this.getDownloadCategories(),onChange:this.setDownloadCategory}))),k=Array.isArray(x)&&x.length,T=Array.isArray(a)&&a.length,A=Array.isArray(l)&&l.length;return k||"downloads"!==_?A||"download_categories"!==_?T||"download_tags"!==_?Object(g.createElement)(g.Fragment,null,D,Object(g.createElement)(R.BlockControls,null,Object(g.createElement)(R.BlockAlignmentToolbar,{value:c,onChange:function(e){return r({align:e})},controls:["wide","full"]})),Object(g.createElement)("div",{className:this.props.className},this.renderDownloads())):Object(g.createElement)(g.Fragment,null,D,Object(g.createElement)(N.Placeholder,{icon:"download",label:Object(C.__)("Loading download tags")},Array.isArray(a)?Object(C.__)("No download tags found."):Object(g.createElement)(N.Spinner,null))):Object(g.createElement)(g.Fragment,null,D,Object(g.createElement)(N.Placeholder,{icon:"download",label:Object(C.__)("Loading download categories")},Array.isArray(l)?Object(C.__)("No download categories found."):Object(g.createElement)(N.Spinner,null))):Object(g.createElement)(g.Fragment,null,D,Object(g.createElement)(N.Placeholder,{icon:"download",label:Object(C.__)("Loading downloads")},Array.isArray(x)?Object(C.__)("No downloads found."):Object(g.createElement)(N.Spinner,null)))}}]),n}(g.Component),W=Object(M.withSelect)((function(e,t){var n=t.attributes,o=(n.showEmpty,n.order),r={per_page:-1,orderby:n.orderBy,order:o},a=e("core").getEntityRecords;return{downloadCategories:a("taxonomy","download_category",r),downloadTags:a("taxonomy","download_tag",r)}}))(H),Q="easydigitaldownloads/downloads",$={title:Object(C.__)("Downloads"),description:Object(C.__)("Display Downloads, Categories and Tags from Easy Digital Downloads."),icon:"download",category:"widgets",keywords:[Object(C.__)("downloads"),Object(C.__)("edd")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"easy-digital-downloads"}},edit:W,save:function(){return null}},z=n(20);[o].forEach((function(e){var t=e.name,n=e.settings;Object(z.registerBlockType)(t,n)}))}]);
//# sourceMappingURL=main.js.map