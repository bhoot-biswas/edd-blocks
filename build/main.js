!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=36)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.autop}()},function(e,t,o){var n;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===a)for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t,o){var n=o(22).Symbol;e.exports=n},function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,o){var n=o(18);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,o){var n=o(19),r=o(3);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,o){var n=o(20),r=o(32),a=/&(?:amp|lt|gt|quot|#39);/g,l=RegExp(a.source);e.exports=function(e){return(e=n(e))&&l.test(e)?e.replace(a,r):e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?e.exports=n=function(e){return o(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)},n(t)}e.exports=n},function(e,t,o){var n=o(21);e.exports=function(e){return null==e?"":n(e)}},function(e,t,o){var n=o(7),r=o(25),a=o(26),l=o(27),c=n?n.prototype:void 0,s=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return s?s.call(t):"";var o=t+"";return"0"==o&&1/t==-1/0?"-0":o}},function(e,t,o){var n=o(23),r="object"==typeof self&&self&&self.Object===Object&&self,a=n||r||Function("return this")();e.exports=a},function(e,t,o){(function(t){var o="object"==typeof t&&t&&t.Object===Object&&t;e.exports=o}).call(this,o(24))},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t){e.exports=function(e,t){for(var o=-1,n=null==e?0:e.length,r=Array(n);++o<n;)r[o]=t(e[o],o,e);return r}},function(e,t){var o=Array.isArray;e.exports=o},function(e,t,o){var n=o(28),r=o(31);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==n(e)}},function(e,t,o){var n=o(7),r=o(29),a=o(30),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?r(e):a(e)}},function(e,t,o){var n=o(7),r=Object.prototype,a=r.hasOwnProperty,l=r.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),o=e[c];try{e[c]=void 0;var n=!0}catch(e){}var r=l.call(e);return n&&(t?e[c]=o:delete e[c]),r}},function(e,t){var o=Object.prototype.toString;e.exports=function(e){return o.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,o){var n=o(33)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=n},function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},,,function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"name",(function(){return H})),o.d(n,"settings",(function(){return U}));var r=o(11),a=o.n(r),l=o(12),c=o.n(l),s=o(3),i=o.n(s),d=o(13),u=o.n(d),b=o(14),p=o.n(b),w=o(8),f=o.n(w),h=o(0),m=o(15),g=o(5),y=o.n(g),_=function(e){var t=e.showThumbnails,o=e.image;return t&&o?Object(h.createElement)(h.RawHTML,{className:"edd_download_image"},o):null},O=o(16),j=o.n(O),v=o(1);function E(e){return e?j()(e).trim():Object(v.__)("(Untitled)")}var C=function(e){var t=e.link,o=e.title,n=e.className,r=e.showCount,a=e.count,l=e.type;return"tag"===l||"category"===l?Object(h.createElement)(h.Fragment,null,Object(h.createElement)("div",{className:"edd-download-term-title"},Object(h.createElement)("h3",{className:n},Object(h.createElement)("a",{href:t,target:"_blank"},E(o))),r&&Object(h.createElement)("span",{className:"edd-download-term-count"},"(",a,")"))):Object(h.createElement)(h.Fragment,null,Object(h.createElement)("h3",{className:n},Object(h.createElement)("a",{href:t,target:"_blank"},E(o))))},x=o(4),D=function(e){var t=e.description,o=e.showDescription,n=e.className;return o?Object(h.createElement)(h.RawHTML,{className:n},Object(x.autop)(t)):null},S=function(e){var t=e.content,o=e.showFullContent,n=e.className;return o?Object(h.createElement)(h.RawHTML,{className:n},Object(x.autop)(t)):null},T=function(e){var t=e.price;return e.showPrice?Object(h.createElement)("div",{className:"edd_price"},Object(h.createElement)(h.RawHTML,null,t)):null},k=o(2),B=function(e){var t=e.purchaseLink;return e.showBuyButton?Object(h.createElement)(k.Disabled,null,Object(h.createElement)("div",{className:"edd_download_buy_button"},Object(h.createElement)(h.RawHTML,null,t))):null},A=function(e){var t=e.attributes,o=t.showThumbnails,n=t.showDescription,r=t.showFullContent,a=t.showPrice,l=t.showBuyButton,c=e.download.info,s=c.image,i=c.link,d=c.title,u=c.excerpt,b=c.content,p=c.price,w=c.purchase_link;return Object(h.createElement)("div",{className:"edd_download"},Object(h.createElement)("div",{className:"edd_download_inner"},Object(h.createElement)(_,{image:s,showThumbnails:o}),Object(h.createElement)(C,{title:d,link:i,className:"edd_download_title"}),Object(h.createElement)(D,{description:u,showDescription:n,className:"edd_download_excerpt"}),Object(h.createElement)(S,{content:b,showFullContent:r,className:"edd_download_full_content"}),Object(h.createElement)(T,{price:p,showPrice:a}),Object(h.createElement)(B,{purchaseLink:w,showBuyButton:l})))},N=function(e){var t,o=e.attributes,n=o.showThumbnails,r=o.showTitle,a=o.showCount,l=o.showDescription,c=e.taxonomy,s=c.name,i=c.link,d=c.count,u=c.description,b=c.taxonomy,p=e.taxonomy.meta.image;return"download_tag"===b?t="tag":"download_category"===b&&(t="category"),Object(h.createElement)("div",{className:"edd-download-".concat(t)},Object(h.createElement)(_,{image:p,showThumbnails:n}),r&&Object(h.createElement)(C,{title:s,link:i,className:"edd_download_title",showCount:a,count:d,type:"".concat(t)}),l&&Object(h.createElement)(D,{description:u,showDescription:l,className:"edd-download-term-description"}))},P=o(6),F=o(9),R=o.n(F),L=o(10);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=f()(e);if(t){var r=f()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return p()(this,o)}}var M=function(e){u()(o,e);var t=q(o);function o(){var e;return a()(this,o),(e=t.apply(this,arguments)).setDownloadCategory=e.setDownloadCategory.bind(i()(e)),e.showDescription=e.showDescription.bind(i()(e)),e.showFullContent=e.showFullContent.bind(i()(e)),e.state={isLoading:!0,showDescription:!0,showFullContent:!1,downloads:[],downloadCategories:[],downloadTags:[]},e}return c()(o,[{key:"componentDidMount",value:function(){var e=this.props.attributes.type;"downloads"===e&&(this.fetchDownloads(),this.fetchDownloadTaxonomy({taxonomy:"download_category"})),"download_categories"===e&&this.fetchDownloadTaxonomy({taxonomy:"download_category"}),"download_tags"===e&&this.fetchDownloadTaxonomy({taxonomy:"download_tag"})}},{key:"componentDidUpdate",value:function(e){var t=this.props.attributes,o=t.category,n=t.number,r=t.order,a=t.orderBy,l=t.showEmpty,c=t.type,s=wp.data.select("core/editor").getEditorSettings().alignWide,i=e.attributes;"downloads"===c&&(o===i.category&&n===i.number&&r===i.order&&a===i.orderBy||this.fetchDownloads(),"downloads"!==i.type&&(this.fetchDownloads(),l||this.fetchDownloadTaxonomy({taxonomy:"download_category"}),this.props.setAttributes({orderBy:"date"}))),"download_categories"===c&&(l===i.showEmpty&&r===i.order&&a===i.orderBy||this.fetchDownloadTaxonomy({taxonomy:"download_category"}),"download_categories"!==i.type&&(this.fetchDownloadTaxonomy({taxonomy:"download_category"}),this.props.setAttributes({orderBy:"count"}))),"download_tags"===c&&(l===i.showEmpty&&r===i.order&&a===i.orderBy||this.fetchDownloadTaxonomy({taxonomy:"download_tag"}),"download_tags"!==i.type&&(this.fetchDownloadTaxonomy({taxonomy:"download_tag"}),this.props.setAttributes({orderBy:"count"}))),s||this.props.setAttributes({align:void 0})}},{key:"componentWillUnmount",value:function(){delete this.downloadsRequest,delete this.downloadCategoriesRequest,delete this.downloadTagsRequest}},{key:"getOrderOptions",value:function(){return[{value:"ASC",label:Object(v.__)("Ascending")},{value:"DESC",label:Object(v.__)("Descending")}]}},{key:"getOrderByOptions",value:function(){var e,t=this.props.attributes.type;return"downloads"===t?e=[{value:"date",label:Object(v.__)("Date Created")},{value:"earnings",label:Object(v.__)("Earnings")},{value:"id",label:Object(v.__)("ID")},{value:"price",label:Object(v.__)("Price")},{value:"random",label:Object(v.__)("Random")},{value:"sales",label:Object(v.__)("Sales")},{value:"name",label:Object(v.__)("Slug")},{value:"title",label:Object(v.__)("Title")}]:"download_categories"!==t&&"download_tags"!==t||(e=[{value:"count",label:Object(v.__)("Count")},{value:"id",label:Object(v.__)("ID")},{value:"name",label:Object(v.__)("Name")},{value:"slug",label:Object(v.__)("Slug")}]),e}},{key:"getDownloadCategories",value:function(){var e=this.state.downloadCategories,t=[{value:"all",label:Object(v.__)("All")}];return e.forEach((function(e){t.push({label:e.name,value:e.id})})),t}},{key:"getBlockTypes",value:function(){return[{value:"downloads",label:Object(v.__)("Downloads")},{value:"download_categories",label:Object(v.__)("Download Categories")},{value:"download_tags",label:Object(v.__)("Download Tags")}]}},{key:"setDownloadCategory",value:function(e){"all"===e&&(e=void 0),this.props.setAttributes({category:e})}},{key:"showDescription",value:function(){var e=this.state.showDescription;this.setState({showDescription:!e,showFullContent:e},(function(){this.props.setAttributes({showDescription:!e}),this.props.setAttributes({showFullContent:!1})}))}},{key:"showFullContent",value:function(){var e=this.state.showFullContent;this.setState({showFullContent:!e,showDescription:e},(function(){this.props.setAttributes({showFullContent:!e}),this.props.setAttributes({showDescription:!1})}))}},{key:"fetchDownloadTaxonomy",value:function(e){var t=this,o=this.props.attributes,n=o.showEmpty,r=o.order,a=o.orderBy,l=o.type,c=e.taxonomy,s=this.getOrderByOptions(),i={per_page:-1,orderby:e.orderBy?e.orderBy.toLowerCase():a.toLowerCase(),order:e.order?e.order.toLowerCase():r.toLowerCase()};("downloads"===l&&(i.orderby="name",i.order="asc"),"download_categories"===l||"download_tags"===l)&&(s.find((function(e){return e.value===a}))||(i.orderby="count"),i.hide_empty=!0!==n);var d=R()({path:Object(L.addQueryArgs)("/wp/v2/".concat(c),i)});"download_category"===c&&(d.then((function(e){t.downloadCategoriesRequest===d&&t.setState({downloadCategories:e,isLoading:!1})})),this.downloadCategoriesRequest=d),"download_tag"===c&&(d.then((function(e){t.downloadTagsRequest===d&&t.setState({downloadTags:e,isLoading:!1})})),this.downloadTagsRequest=d)}},{key:"fetchDownloads",value:function(){var e=this,t=this.getOrderByOptions(),o=this.props.attributes,n=o.category,r=o.number,a=o.order,l=o.orderBy,c=l;switch(c){case"id":c="ID";break;case"random":c="rand";break;default:c=l}var s={number:r,order:a,orderby:c};Object(m.isUndefined)(n)||(s.category=n);var i=edd_blocks_global_vars.url;t.find((function(e){return e.value===l}))||(s.orderby="date");var d=R()({url:Object(L.addQueryArgs)("".concat(i,"/?edd-api=products"),s)});d.then((function(t){e.downloadsRequest===d&&e.setState({downloads:t,isLoading:!1})})),this.downloadsRequest=d}},{key:"renderDownloads",value:function(){var e=this.state.downloads.products,t=this.state,o=t.downloadCategories,n=t.downloadTags,r=this.props.attributes,a=r.columns,l=r.type;return"downloads"===l?Object(h.createElement)("div",{className:y()("edd_downloads_list","edd_download_columns_"+a)},e.map((function(e){return Object(h.createElement)(A,{download:e,key:e.info.id.toString(),attributes:r})}))):"download_categories"===l?Object(h.createElement)("div",{className:y()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},o.map((function(e){return Object(h.createElement)(N,{key:e.id,taxonomy:e,attributes:r})}))):"download_tags"===l?Object(h.createElement)("div",{className:y()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},n.map((function(e){return Object(h.createElement)(N,{key:e.id,taxonomy:e,attributes:r})}))):void 0}},{key:"render",value:function(){var e,t,o=this.props,n=o.attributes,r=o.setAttributes,a=n.align,l=n.number,c=n.columns,s=n.showBuyButton,i=n.showPrice,d=n.showThumbnails,u=n.showDescription,b=n.showFullContent,p=n.showPagination,w=n.order,f=n.orderBy,m=n.category,g=n.type,y=n.showTitle,_=n.showCount,O=n.showEmpty,j=this.state,E=j.downloadTags,C=j.downloadCategories,x=j.isLoading,D=this.state.downloads.products,S="download_categories"===g||"download_tags"===g;if(e="downloads"===g?Object(v.__)("Show Excerpt"):"download_categories"===g?Object(v.__)("Show Category Description"):"download_tags"===g?Object(v.__)("Show Tag Description"):Object(v.__)("Show Description"),t="download_categories"===g?Object(v.__)("Loading download categories"):"download_tags"===g?Object(v.__)("Loading download tags"):Object(v.__)("Loading downloads"),x)return Object(h.createElement)(h.Fragment,null,Object(h.createElement)(k.Placeholder,{icon:"download",label:t},Object(h.createElement)(k.Spinner,null)));var T=Object(h.createElement)(P.InspectorControls,null,Object(h.createElement)(k.PanelBody,{title:Object(v.__)("Settings")},Object(h.createElement)(k.SelectControl,{label:Object(v.__)("Display"),value:g,options:this.getBlockTypes(),onChange:function(e){return r({type:e})}}),"downloads"===g&&Object(h.createElement)(k.RangeControl,{label:Object(v.__)("Downloads Per Page"),value:l,onChange:function(e){return r({number:e})},min:1,max:100}),Object(h.createElement)(k.RangeControl,{label:Object(v.__)("Columns"),value:c,onChange:function(e){return r({columns:e})},min:1,max:6}),"downloads"===g&&Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Buy Button"),checked:!!s,onChange:function(){return r({showBuyButton:!s})}}),"downloads"===g&&Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Price"),checked:!!i,onChange:function(){return r({showPrice:!i})}}),Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Thumbnails"),checked:!!d,onChange:function(){return r({showThumbnails:!d})}}),S&&Object(h.createElement)(k.ToggleControl,{label:"download_categories"===g?Object(v.__)("Show Category Name"):Object(v.__)("Show Tag Name"),checked:!!y,onChange:function(){return r({showTitle:!y})}}),Object(h.createElement)(k.ToggleControl,{label:e,checked:!!u,onChange:this.showDescription}),y&&S&&Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Count"),checked:!!_,onChange:function(){return r({showCount:!_})}}),S&&Object(h.createElement)(k.ToggleControl,{label:"download_categories"===g?Object(v.__)("Show Empty Categories"):Object(v.__)("Show Empty Tags"),checked:!!O,onChange:function(){return r({showEmpty:!O})}}),"downloads"===g&&Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Full Content"),checked:!!b,onChange:this.showFullContent}),"downloads"===g&&Object(h.createElement)(k.ToggleControl,{label:Object(v.__)("Show Pagination"),checked:!!p,onChange:function(){return r({showPagination:!p})}}),Object(h.createElement)(k.SelectControl,{label:Object(v.__)("Order By"),value:f,options:this.getOrderByOptions(),onChange:function(e){return r({orderBy:e})}}),Object(h.createElement)(k.SelectControl,{label:Object(v.__)("Order"),value:w,options:this.getOrderOptions(),onChange:function(e){return r({order:e})}}),"downloads"===g&&Object(h.createElement)(k.SelectControl,{label:Object(v.__)("Show Downloads From Category"),value:m,options:this.getDownloadCategories(),onChange:this.setDownloadCategory}))),B=Array.isArray(D)&&D.length,A=Array.isArray(E)&&E.length,N=Array.isArray(C)&&C.length;return B||"downloads"!==g?N||"download_categories"!==g?A||"download_tags"!==g?Object(h.createElement)(h.Fragment,null,T,Object(h.createElement)(P.BlockControls,null,Object(h.createElement)(P.BlockAlignmentToolbar,{value:a,onChange:function(e){return r({align:e})},controls:["wide","full"]})),Object(h.createElement)("div",{className:this.props.className},this.renderDownloads())):Object(h.createElement)(h.Fragment,null,T,Object(h.createElement)(k.Placeholder,{icon:"download",label:Object(v.__)("Loading download tags")},Array.isArray(E)?Object(v.__)("No download tags found."):Object(h.createElement)(k.Spinner,null))):Object(h.createElement)(h.Fragment,null,T,Object(h.createElement)(k.Placeholder,{icon:"download",label:Object(v.__)("Loading download categories")},Array.isArray(C)?Object(v.__)("No download categories found."):Object(h.createElement)(k.Spinner,null))):Object(h.createElement)(h.Fragment,null,T,Object(h.createElement)(k.Placeholder,{icon:"download",label:Object(v.__)("Loading downloads")},Array.isArray(D)?Object(v.__)("No downloads found."):Object(h.createElement)(k.Spinner,null)))}}]),o}(h.Component),H="easydigitaldownloads/downloads",U={title:Object(v.__)("Downloads"),description:Object(v.__)("Display Downloads, Categories and Tags from Easy Digital Downloads."),icon:"download",category:"widgets",keywords:[Object(v.__)("downloads"),Object(v.__)("edd")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"easy-digital-downloads"}},edit:M,save:function(){return null}},I=o(17);[n].forEach((function(e){var t=e.name,o=e.settings;Object(I.registerBlockType)(t,o)}))}]);
//# sourceMappingURL=main.js.map