!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===a)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){var o=n(7).Symbol;e.exports=o},function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty;function r(e){return decodeURIComponent(e.replace(/\+/g," "))}t.stringify=function(e,t){t=t||"";var n=[];for(var r in"string"!=typeof t&&(t="?"),e)o.call(e,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return n.length?t+n.join("&"):""},t.parse=function(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);o[r(t[1])]=r(t[2]));return o}},function(e,t){e.exports=function(e){return void 0===e}},function(e,t,n){var o=n(5),r=n(17),a=/&(?:amp|lt|gt|quot|#39);/g,l=RegExp(a.source);e.exports=function(e){return(e=o(e))&&l.test(e)?e.replace(a,r):e}},function(e,t,n){var o=n(6);e.exports=function(e){return null==e?"":o(e)}},function(e,t,n){var o=n(1),r=n(10),a=n(11),l=n(12),i=1/0,s=o?o.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(l(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-i?"-0":n}},function(e,t,n){var o=n(8),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(9))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var o=n(13),r=n(16),a="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&o(e)==a}},function(e,t,n){var o=n(1),r=n(14),a=n(15),l="[object Null]",i="[object Undefined]",s=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:l:s&&s in Object(e)?r(e):a(e)}},function(e,t,n){var o=n(1),r=Object.prototype,a=r.hasOwnProperty,l=r.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[i]=n:delete e[i]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var o=n(18)({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});e.exports=o},function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"name",function(){return Y}),n.d(o,"settings",function(){return Z});n(20),n(21);var r=n(3),a=n.n(r),l=n(0),i=n.n(l),s=n(2),c=wp.element.RawHTML,d=function(e){var t=e.showThumbnails,n=e.image;return t&&n?wp.element.createElement(c,{className:"edd_download_image"},n):null},u=n(4),p=n.n(u),w=wp.i18n.__,m=wp.element.Fragment;function h(e){return e?p()(e).trim():w("(Untitled)")}var f=function(e){var t=e.link,n=e.title,o=e.className,r=e.showCount,a=e.count,l=e.type;return"tag"===l||"category"===l?wp.element.createElement(m,null,wp.element.createElement("div",{className:"edd-download-term-title"},wp.element.createElement("h3",{className:o},wp.element.createElement("a",{href:t,target:"_blank"},h(n))),r&&wp.element.createElement("span",{className:"edd-download-term-count"},"(",a,")"))):wp.element.createElement(m,null,wp.element.createElement("h3",{className:o},wp.element.createElement("a",{href:t,target:"_blank"},h(n))))};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=new RegExp("(<((?=!--|!\\[CDATA\\[)((?=!-)!(?:-(?!->)[^\\-]*)*(?:--\x3e)?|!\\[CDATA\\[[^\\]]*(?:](?!]>)[^\\]]*)*?(?:]]>)?)|[^>]*>?))");function b(e,t){for(var n=function(e){for(var t,n=[],o=e;t=o.match(y);)n.push(o.slice(0,t.index)),n.push(t[0]),o=o.slice(t.index+t[0].length);return o.length&&n.push(o),n}(e),o=!1,r=Object.keys(t),a=1;a<n.length;a+=2)for(var l=0;l<r.length;l++){var i=r[l];if(-1!==n[a].indexOf(i)){n[a]=n[a].replace(new RegExp(i,"g"),t[i]),o=!0;break}}return o&&(e=n.join("")),e}function v(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[];if(""===e.trim())return"";if(-1!==(e+="\n").indexOf("<pre")){var o=e.split("</pre>"),r=o.pop();e="";for(var a=0;a<o.length;a++){var l=o[a],i=l.indexOf("<pre");if(-1!==i){var s="<pre wp-pre-tag-"+a+"></pre>";n.push([s,l.substr(i)+"</pre>"]),e+=l.substr(0,i)+s}else e+=l}e+=r}var c="(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)";-1!==(e=b(e=(e=(e=(e=e.replace(/<br\s*\/?>\s*<br\s*\/?>/g,"\n\n")).replace(new RegExp("(<"+c+"[s/>])","g"),"\n\n$1")).replace(new RegExp("(</"+c+">)","g"),"$1\n\n")).replace(/\r\n|\r/g,"\n"),{"\n":" \x3c!-- wpnl --\x3e "})).indexOf("<option")&&(e=(e=e.replace(/\s*<option/g,"<option")).replace(/<\/option>\s*/g,"</option>")),-1!==e.indexOf("</object>")&&(e=(e=(e=e.replace(/(<object[^>]*>)\s*/g,"$1")).replace(/\s*<\/object>/g,"</object>")).replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/g,"$1")),-1===e.indexOf("<source")&&-1===e.indexOf("<track")||(e=(e=(e=e.replace(/([<\[](?:audio|video)[^>\]]*[>\]])\s*/g,"$1")).replace(/\s*([<\[]\/(?:audio|video)[>\]])/g,"$1")).replace(/\s*(<(?:source|track)[^>]*>)\s*/g,"$1")),-1!==e.indexOf("<figcaption")&&(e=(e=e.replace(/\s*(<figcaption[^>]*>)/,"$1")).replace(/<\/figcaption>\s*/,"</figcaption>"));var d=(e=e.replace(/\n\n+/g,"\n\n")).split(/\n\s*\n/).filter(Boolean);return e="",d.forEach(function(t){e+="<p>"+t.replace(/^\n*|\n*$/g,"")+"</p>\n"}),e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p>\s*<\/p>/g,"")).replace(/<p>([^<]+)<\/(div|address|form)>/g,"<p>$1</p></$2>")).replace(new RegExp("<p>s*(</?"+c+"[^>]*>)s*</p>","g"),"$1")).replace(/<p>(<li.+?)<\/p>/g,"$1")).replace(/<p><blockquote([^>]*)>/gi,"<blockquote$1><p>")).replace(/<\/blockquote><\/p>/g,"</p></blockquote>")).replace(new RegExp("<p>s*(</?"+c+"[^>]*>)","g"),"$1")).replace(new RegExp("(</?"+c+"[^>]*>)s*</p>","g"),"$1"),t&&(e=(e=(e=(e=e.replace(/<(script|style).*?<\/\\1>/g,function(e){return e[0].replace(/\n/g,"<WPPreserveNewline />")})).replace(/<br>|<br\/>/g,"<br />")).replace(/(<br \/>)?\s*\n/g,function(e,t){return t?e:"<br />\n"})).replace(/<WPPreserveNewline \/>/g,"\n")),e=(e=(e=e.replace(new RegExp("(</?"+c+"[^>]*>)s*<br />","g"),"$1")).replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/g,"$1")).replace(/\n<\/p>$/g,"</p>"),n.forEach(function(t){var n=g(t,2),o=n[0],r=n[1];e=e.replace(o,r)}),-1!==e.indexOf("\x3c!-- wpnl --\x3e")&&(e=e.replace(/\s?<!-- wpnl -->\s?/g,"\n")),e}var _=wp.element.RawHTML,E=function(e){var t=e.description,n=e.showDescription,o=e.className;return n?wp.element.createElement(_,{className:o},v(t)):null},x=wp.element.RawHTML,C=function(e){var t=e.content,n=e.showFullContent,o=e.className;return n?wp.element.createElement(x,{className:o},v(t)):null},D=wp.element.RawHTML,k=function(e){var t=e.price;return e.showPrice?wp.element.createElement("div",{className:"edd_price"},wp.element.createElement(D,null,t)):null},O=wp.element.RawHTML,T=wp.components.Disabled,S=function(e){var t=e.purchaseLink;return e.showBuyButton?wp.element.createElement(T,null,wp.element.createElement("div",{className:"edd_download_buy_button"},wp.element.createElement(O,null,t))):null},j=function(e){var t=e.attributes,n=t.showThumbnails,o=t.showDescription,r=t.showFullContent,a=t.showPrice,l=t.showBuyButton,i=e.download.info,s=i.image,c=i.link,u=i.title,p=i.excerpt,w=i.content,m=i.price,h=i.purchase_link;return wp.element.createElement("div",{className:"edd_download"},wp.element.createElement(d,{image:s,showThumbnails:n}),wp.element.createElement(f,{title:u,link:c,className:"edd_download_title"}),wp.element.createElement(E,{description:p,showDescription:o,className:"edd_download_excerpt"}),wp.element.createElement(C,{content:w,showFullContent:r,className:"edd_download_full_content"}),wp.element.createElement(k,{price:m,showPrice:a}),wp.element.createElement(S,{purchaseLink:h,showBuyButton:l}))},B=function(e){var t=e.attributes,n=t.showThumbnails,o=t.showTitle,r=t.showCount,a=t.showDescription,l=e.taxonomy,i=l.name,s=l.link,c=l.count,u=l.description,p=l.taxonomy,w=e.taxonomy.meta.image,m=void 0;return"download_tag"===p?m="tag":"download_category"===p&&(m="category"),wp.element.createElement("div",{className:"edd-download-"+m},wp.element.createElement(d,{image:w,showThumbnails:n}),o&&wp.element.createElement(f,{title:i,link:s,className:"edd_download_title",showCount:r,count:c,type:""+m}),a&&wp.element.createElement(E,{description:u,showDescription:a,className:"edd-download-term-description"}))},P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var A=wp.element,R=A.Component,F=A.Fragment,L=wp.components,$=L.PanelBody,q=L.Placeholder,M=L.ToggleControl,I=L.RangeControl,U=L.SelectControl,H=L.Spinner,W=wp.i18n.__,z=(wp.data.select,wp.editor),G=z.InspectorControls,J=z.BlockControls,K=z.BlockAlignmentToolbar,Q=wp.apiFetch,V=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.setDownloadCategory=e.setDownloadCategory.bind(e),e.showDescription=e.showDescription.bind(e),e.showFullContent=e.showFullContent.bind(e),e.state={isLoading:!0,showDescription:!0,showFullContent:!1,downloads:[],downloadCategories:[],downloadTags:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,R),N(t,[{key:"componentDidMount",value:function(){var e=this.props.attributes.type;"downloads"===e&&(this.fetchDownloads(),this.fetchDownloadTaxonomy({taxonomy:"download_category"})),"download_categories"===e&&this.fetchDownloadTaxonomy({taxonomy:"download_category"}),"download_tags"===e&&this.fetchDownloadTaxonomy({taxonomy:"download_tag"})}},{key:"componentDidUpdate",value:function(e){var t=this.props.attributes,n=t.category,o=t.number,r=t.order,a=t.orderBy,l=t.showEmpty,i=t.type,s=wp.data.select("core/editor").getEditorSettings().alignWide;"downloads"===i&&(n===e.attributes.category&&o===e.attributes.number&&r===e.attributes.order&&a===e.attributes.orderBy||this.fetchDownloads(),"downloads"!==e.attributes.type&&(this.fetchDownloads(),l||this.fetchDownloadTaxonomy({taxonomy:"download_category"}),this.props.setAttributes({orderBy:"date"}))),"download_categories"===i&&(l===e.attributes.showEmpty&&r===e.attributes.order&&a===e.attributes.orderBy||this.fetchDownloadTaxonomy({taxonomy:"download_category"}),"download_categories"!==e.attributes.type&&(this.fetchDownloadTaxonomy({taxonomy:"download_category"}),this.props.setAttributes({orderBy:"count"}))),"download_tags"===i&&(l===e.attributes.showEmpty&&r===e.attributes.order&&a===e.attributes.orderBy||this.fetchDownloadTaxonomy({taxonomy:"download_tag"}),"download_tags"!==e.attributes.type&&(this.fetchDownloadTaxonomy({taxonomy:"download_tag"}),this.props.setAttributes({orderBy:"count"}))),s||this.props.setAttributes({align:void 0})}},{key:"componentWillUnmount",value:function(){delete this.downloadsRequest,delete this.downloadCategoriesRequest,delete this.downloadTagsRequest}},{key:"getOrderOptions",value:function(){return[{value:"ASC",label:W("Ascending")},{value:"DESC",label:W("Descending")}]}},{key:"getOrderByOptions",value:function(){var e=this.props.attributes.type,t=void 0;return"downloads"===e?t=[{value:"date",label:W("Date Created")},{value:"earnings",label:W("Earnings")},{value:"id",label:W("ID")},{value:"price",label:W("Price")},{value:"random",label:W("Random")},{value:"sales",label:W("Sales")},{value:"name",label:W("Slug")},{value:"title",label:W("Title")}]:"download_categories"!==e&&"download_tags"!==e||(t=[{value:"count",label:W("Count")},{value:"id",label:W("ID")},{value:"name",label:W("Name")},{value:"slug",label:W("Slug")}]),t}},{key:"getDownloadCategories",value:function(){var e=this.state.downloadCategories,t=[{value:"all",label:W("All")}];return e.forEach(function(e){t.push({label:e.name,value:e.id})}),t}},{key:"getBlockTypes",value:function(){return[{value:"downloads",label:W("Downloads")},{value:"download_categories",label:W("Download Categories")},{value:"download_tags",label:W("Download Tags")}]}},{key:"setDownloadCategory",value:function(e){"all"===e&&(e=void 0),this.props.setAttributes({category:e})}},{key:"showDescription",value:function(){var e=this.state.showDescription;this.setState({showDescription:!e,showFullContent:e},function(){this.props.setAttributes({showDescription:!e}),this.props.setAttributes({showFullContent:!1})})}},{key:"showFullContent",value:function(){var e=this.state.showFullContent;this.setState({showFullContent:!e,showDescription:e},function(){this.props.setAttributes({showFullContent:!e}),this.props.setAttributes({showDescription:!1})})}},{key:"fetchDownloadTaxonomy",value:function(e){var t=this,n=this.props.attributes,o=n.showEmpty,r=n.order,a=n.orderBy,l=n.type,i=e.taxonomy,c=this.getOrderByOptions(),d={per_page:-1,orderby:e.orderBy?e.orderBy.toLowerCase():a.toLowerCase(),order:e.order?e.order.toLowerCase():r.toLowerCase()};("downloads"===l&&(d.orderby="name",d.order="asc"),"download_categories"===l||"download_tags"===l)&&(c.find(function(e){return e.value===a})||(d.orderby="count"),d.hide_empty=!0!==o);var u=Q({path:"/wp/v2/"+i+"?"+Object(s.stringify)(P({},d))});"download_category"===i&&(u.then(function(e){t.downloadCategoriesRequest===u&&t.setState({downloadCategories:e,isLoading:!1})}),this.downloadCategoriesRequest=u),"download_tag"===i&&(u.then(function(e){t.downloadTagsRequest===u&&t.setState({downloadTags:e,isLoading:!1})}),this.downloadTagsRequest=u)}},{key:"fetchDownloads",value:function(){var e=this,t=this.getOrderByOptions(),n=this.props.attributes,o=n.category,r=n.number,l=n.order,i=n.orderBy,c=i;switch(c){case"id":c="ID";break;case"random":c="rand";break;default:c=i}var d={number:r,order:l,orderby:c};a()(o)||(d.category=o);var u=edd_blocks_global_vars.url;t.find(function(e){return e.value===i})||(d.orderby="date");var p=Q({url:u+"/?edd-api=products&"+Object(s.stringify)(P({},d))});p.then(function(t){e.downloadsRequest===p&&e.setState({downloads:t,isLoading:!1})}),this.downloadsRequest=p}},{key:"renderDownloads",value:function(){var e=this.state.downloads.products,t=this.state,n=t.downloadCategories,o=t.downloadTags,r=this.props.attributes,a=r.columns,l=r.type;return"downloads"===l?wp.element.createElement("div",{className:i()("edd_downloads_list","edd_download_columns_"+a)},e.map(function(e){return wp.element.createElement(j,{download:e,key:e.info.id.toString(),attributes:r})})):"download_categories"===l?wp.element.createElement("div",{className:i()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},n.map(function(e){return wp.element.createElement(B,{key:e.id,taxonomy:e,attributes:r})})):"download_tags"===l?wp.element.createElement("div",{className:i()("edd_downloads_list","edd-download-terms","edd_download_columns_"+a)},o.map(function(e){return wp.element.createElement(B,{key:e.id,taxonomy:e,attributes:r})})):void 0}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,o=t.align,r=t.number,a=t.columns,l=t.showBuyButton,i=t.showPrice,s=t.showThumbnails,c=t.showDescription,d=t.showFullContent,u=t.showPagination,p=t.order,w=t.orderBy,m=t.category,h=t.type,f=t.showTitle,g=t.showCount,y=t.showEmpty,b=this.state.downloads.products,v=this.state.isLoading,_="download_categories"===h||"download_tags"===h,E=void 0;E=W("downloads"===h?"Show Excerpt":"download_categories"===h?"Show Category Description":"download_tags"===h?"Show Tag Description":"Show Description");var x=void 0;if(x=W("download_categories"===h?"Loading categories":"download_tags"===h?"Loading tags":"Loading downloads"),v)return wp.element.createElement(F,null,wp.element.createElement(q,{icon:"download",label:x},wp.element.createElement(H,null)));var C=wp.element.createElement(G,null,wp.element.createElement($,{title:W("Settings")},wp.element.createElement(U,{label:W("Display"),value:h,options:this.getBlockTypes(),onChange:function(e){return n({type:e})}}),"downloads"===h&&wp.element.createElement(I,{label:W("Downloads Per Page"),value:r,onChange:function(e){return n({number:e})},min:1,max:100}),wp.element.createElement(I,{label:W("Columns"),value:a,onChange:function(e){return n({columns:e})},min:1,max:6}),"downloads"===h&&wp.element.createElement(M,{label:W("Show Buy Button"),checked:!!l,onChange:function(){return n({showBuyButton:!l})}}),"downloads"===h&&wp.element.createElement(M,{label:W("Show Price"),checked:!!i,onChange:function(){return n({showPrice:!i})}}),wp.element.createElement(M,{label:W("Show Thumbnails"),checked:!!s,onChange:function(){return n({showThumbnails:!s})}}),_&&wp.element.createElement(M,{label:W("download_categories"===h?"Show Category Name":"Show Tag Name"),checked:!!f,onChange:function(){return n({showTitle:!f})}}),wp.element.createElement(M,{label:E,checked:!!c,onChange:this.showDescription}),f&&_&&wp.element.createElement(M,{label:W("Show Count"),checked:!!g,onChange:function(){return n({showCount:!g})}}),_&&wp.element.createElement(M,{label:W("download_categories"===h?"Show Empty Categories":"Show Empty Tags"),checked:!!y,onChange:function(){return n({showEmpty:!y})}}),"downloads"===h&&wp.element.createElement(M,{label:W("Show Full Content"),checked:!!d,onChange:this.showFullContent}),"downloads"===h&&wp.element.createElement(M,{label:W("Show Pagination"),checked:!!u,onChange:function(){return n({showPagination:!u})}}),wp.element.createElement(U,{label:W("Order By"),value:w,options:this.getOrderByOptions(),onChange:function(e){return n({orderBy:e})}}),wp.element.createElement(U,{label:W("Order"),value:p,options:this.getOrderOptions(),onChange:function(e){return n({order:e})}}),"downloads"===h&&wp.element.createElement(U,{label:W("Show Downloads From Category"),value:m,options:this.getDownloadCategories(),onChange:this.setDownloadCategory})));return Array.isArray(b)&&b.length||"downloads"!==h?wp.element.createElement(F,null,C,wp.element.createElement(J,null,wp.element.createElement(K,{value:o,onChange:function(e){return n({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderDownloads())):wp.element.createElement(F,null,C,wp.element.createElement(q,{icon:"download",label:W("Loading downloads")},Array.isArray(b)?W("No downloads found."):wp.element.createElement(H,null)))}}]),t}(),X=wp.i18n.__,Y="easydigitaldownloads/downloads",Z={title:X("Downloads"),description:X("Display downloads from Easy Digital Downloads."),icon:"download",category:"widgets",keywords:[X("downloads"),X("edd")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"easy-digital-downloads"}},edit:V,save:function(){return null}},ee=wp.blocks.registerBlockType;[o].forEach(function(e){var t=e.name,n=e.settings;ee(t,n)})},function(e,t){},function(e,t){}]);