!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,l){l(1),l(3),l(6),e.exports=l(9)},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(2),a=(l.n(n),wp.i18n.__),i=wp.blocks,r=i.registerBlockType,o=i.BlockControls,s=i.AlignmentToolbar,c=i.BlockAlignmentToolbar;r("rtgb/highlight-box",{title:a("Highlight Box"),icon:"admin-customizer",category:"layout",description:a("Use to display highlight box with action button."),attributes:{title:{type:"array",field:{type:"rich-text",className:"highlight-title",placeholder:a("Title"),tagName:"h2"},selector:".highlight-title",source:"children"},content:{type:"array",field:{type:"rich-text",className:"highlight-content",placeholder:a("Content"),tagName:"div",multiline:"p"},selector:".highlight-content",source:"children"},button:{type:"object",field:{type:"button-editable"},selector:".button"},textAlign:{type:"string",default:"center"},blockAlign:{type:"string"},bgColor:{type:"string",field:{type:"color",label:a("Background Color"),placement:"inspector"}},textColor:{type:"string",field:{type:"color",label:a("Text Color"),placement:"inspector"}},buttonBgColor:{type:"string",field:{type:"color",label:a("Button Background Color"),placement:"inspector"}},buttonTextColor:{type:"string",field:{type:"color",label:a("Button Text Color"),placement:"inspector"}}},getEditWrapperProps:function(e){var t=e.blockAlign;if("full"===t||"center"===t||"wide"===t)return{"data-align":t}},edit:function(e){var t=e.attributes,l=t.bgColor,n=t.textColor,a=t.blockAlign,i=t.textAlign,r=t.buttonTextColor,m=t.buttonBgColor,p=e.className,d=e.isSelected,u=e.middleware,g=e.setAttributes,w=l?" has-background":"",h=i?" text-"+i:"",b=a?" align"+a:"",f=d&&[wp.element.createElement(o,{key:"controls"},wp.element.createElement(c,{value:a,onChange:function(e){g({blockAlign:e})},controls:["center","wide","full"]}),wp.element.createElement(s,{value:i,onChange:function(e){g({textAlign:e})}}))];return u.fields.button.props.style={backgroundColor:m,color:r},wp.element.createElement("div",{className:p+" highlight-box-wrapper "+w+b+h,style:{backgroundColor:l,color:n}},u.inspectorControls,f,wp.element.createElement("div",{className:"container"},u.fields.title,u.fields.content,u.fields.button))},save:function(e){var t=e.attributes,l=t.title,n=t.content,a=t.button,i=t.bgColor,r=t.textColor,o=t.blockAlign,s=t.textAlign,c=t.buttonTextColor,m=t.buttonBgColor,p=e.className,d=i?" has-background":"",u=s?" text-"+s:"",g=o?" align"+o:"";return wp.element.createElement("div",{className:p+" highlight-box-wrapper "+d+g+u,style:{backgroundColor:i,color:r}},wp.element.createElement("div",{className:"container"},wp.element.createElement("h2",{className:"highlight-title"},l),wp.element.createElement("div",{className:"highlight-content"},n),wp.element.createElement("a",{href:a.link,className:"button",style:{backgroundColor:m,color:c}},a.text)))}})},function(e,t){},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(4),a=(l.n(n),l(5)),i=(l.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("rtgb/showcase",{title:i("Showcase"),icon:"portfolio",category:"layout",description:i("Use for showcase"),attributes:{showCaseTitle:{type:"array",field:{type:"rich-text",className:"showcase-title",placeholder:i("Showcase Title"),tagName:"h3"},selector:".showcase-title",source:"children"},showCaseContent:{type:"array",field:{type:"rich-text",className:"showcase-content",placeholder:i("Showcase description"),tagName:"div",multiline:"p"},selector:".showcase-content",source:"children"},showCaseImage:{type:"object",field:{type:"image",buttonText:i("Upload"),imagePlaceholder:!0,removeButtonText:i("Remove")}},showCaseLink:{type:"string",field:{type:"link",placement:"inspector",label:i("Showcase link")}}},getEditWrapperProps:function(){return{"data-align":"wide"}},edit:function(e){var t=e.attributes.showCaseLink,l=e.middleware,n=e.className?e.className:"";return wp.element.createElement("div",{className:n+" showcase-wrapper alignwide"},wp.element.createElement("div",{className:"image-container"},l.fields.showCaseImage),wp.element.createElement("div",{className:"info-container"},l.inspectorControls,l.fields.showCaseTitle,l.fields.showCaseContent,t?wp.element.createElement("a",{href:t,title:i("Read More"),className:"button secondary"},i("Read More")):""))},save:function(e){var t=e.attributes,l=t.showCaseImage,n=t.showCaseTitle,a=t.showCaseContent,r=t.showCaseLink,o=e.className?e.className:"",s="";if(l){var c=wp.element.createElement("figure",null,wp.element.createElement("img",{src:l.url,alt:l.title}));s=wp.element.createElement("div",{className:"image-container"},r?wp.element.createElement("a",{href:r},c):c)}return wp.element.createElement("div",{className:o+" showcase-wrapper alignwide"},s,wp.element.createElement("div",{className:"info-container"},r?wp.element.createElement("h3",null,wp.element.createElement("a",{href:r,className:"showcase-title"},n)):wp.element.createElement("h3",{className:"showcase-title"},n),wp.element.createElement("div",{className:"showcase-content"},a),r?wp.element.createElement("a",{href:r,title:i("Read More"),className:"button secondary"},i("Read More")):""))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(7),a=(l.n(n),l(8)),i=(l.n(a),wp.i18n.__),r=wp.blocks,o=r.registerBlockType,s=r.BlockControls,c=r.BlockAlignmentToolbar;o("rtgb/testimonial",{title:i("Testimonial"),icon:"format-status",category:"layout",description:i("Display a testimonial with a picture, text, name and company"),attributes:{image:{type:"object",field:{type:"image",buttonText:i("Upload"),removeButtonText:i("Remove")}},content:{type:"array",field:{type:"rich-text",className:"testimonial-content",placeholder:i("Write testimonial content here"),tagName:"div"},selector:".testimonial-content",source:"children"},name:{type:"array",field:{type:"rich-text",className:"testimonial-name",placeholder:i("Name"),tagName:"p"},selector:".testimonial-name",source:"children"},companyName:{type:"array",field:{type:"rich-text",className:"testimonial-company",placeholder:i("Company"),tagName:"p"},selector:".testimonial-company",source:"children"},align:{type:"string"},bgColor:{type:"string",field:{type:"color",label:i("Background Color"),placement:"inspector"}},textColor:{type:"string",field:{type:"color",label:i("Text Color"),placement:"inspector"}}},getEditWrapperProps:function(e){var t=e.align;if("full"===t||"wide"===t)return{"data-align":t}},edit:function(e){var t=e.attributes,l=t.bgColor,n=t.textColor,a=t.align,i=e.className,r=e.isSelected,o=e.middleware,m=l?" has-background":"",p=a?" align"+a:"",d=r&&wp.element.createElement(s,{key:"controls"},wp.element.createElement(c,{value:a,onChange:function(t){e.setAttributes({align:t})},controls:["wide","center","full"]}));return[o.inspectorControls,d,wp.element.createElement("blockquote",{key:"quote",className:i},wp.element.createElement("div",{className:i+" testimonial-wrapper-bg"+m+p,style:{backgroundColor:l,color:n}},wp.element.createElement("div",{className:i+" testimonial-wrapper"},wp.element.createElement("div",{className:"testimonial-image"},o.fields.image),wp.element.createElement("div",{className:"testimonial-details"},o.fields.content,wp.element.createElement("div",{className:"testimonial-signature",style:{color:n}},o.fields.name,o.fields.companyName)))))]},save:function(e){var t=e.attributes,l=t.image,n=t.content,a=t.name,i=t.companyName,r=t.bgColor,o=t.align,s=t.textColor,c=e.className?e.className:"",m=r?" has-background":"",p=o?" align"+o:"",d=l?"":" no-image",u="";return l&&(u=wp.element.createElement("div",{className:"testimonial-image"},wp.element.createElement("figure",null,wp.element.createElement("img",{src:l.url,alt:l.title})))),wp.element.createElement("div",{className:c+" testimonial-wrapper-bg"+m+p,style:{backgroundColor:r,color:s}},wp.element.createElement("div",{className:"testimonial-wrapper"+d},u,wp.element.createElement("div",{className:"testimonial-details"},wp.element.createElement("div",{className:"testimonial-content"},n),wp.element.createElement("div",{className:"testimonial-signature"},wp.element.createElement("p",{className:"testimonial-name"},a),wp.element.createElement("p",{className:"testimonial-company"},i)))))}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(10),a=(l.n(n),l(11)),i=(l.n(a),wp.i18n.__);(0,wp.blocks.registerBlockType)("rtgb/timeline",{title:i("Timeline"),icon:"list-view",category:"common",description:i("Used to show WordPress contributors list"),attributes:{title:{type:"array",source:"children",selector:".timelineTitle",field:{type:"rich-text",className:"timeline-title",placeholder:i("Enter title"),tagName:"h4"}},content:{type:"array",source:"children",selector:".contributor",field:{type:"rich-text",className:"contributor",placeholder:i("Enter timeline description"),tagName:"p"}},releaseDate:{type:"string",source:"attribute",attribute:"datetime",selector:".timeline-date",field:{type:"date",label:i("Select Date"),placement:"inspector"}},releaseType:{type:"string",field:{type:"radio",label:i("Type"),placement:"inspector",options:[{value:"major",label:i("Major")},{value:"minor",label:i("Minor")}]},default:"major"},newsLink:{type:"string",source:"attribute",attribute:"href",selector:".timeline-news-link",field:{type:"link",placement:"inspector",label:i("Enter News Link")}},blogLink:{type:"string",source:"attribute",attribute:"href",selector:".timeline-blog-link",field:{type:"link",placement:"inspector",label:i("Enter Blog Link")}}},edit:function(e){var t=e.attributes,l=t.newsLink,n=t.blogLink,a=t.releaseDate,r=e.middleware,o=e.className?e.className:"",s=e.attributes.releaseType?e.attributes.releaseType:"major";return wp.element.createElement("div",{className:o+" timeline-"+s},r.inspectorControls,wp.element.createElement("div",{className:"timeline-container"},wp.element.createElement("time",{className:"timeline-date",dateTime:a},!!a&&moment(a).local().format("MMM, Y")),wp.element.createElement("div",{className:"separator"}),wp.element.createElement("div",{className:"content-wrap"},wp.element.createElement("div",{className:"content-inner"},r.fields.title,r.fields.content,wp.element.createElement("div",{className:"postlinks"},!(!l&&!n)&&wp.element.createElement("strong",null,i("Links:")),!!l&&wp.element.createElement("a",{href:l,className:"timeline-news-link"},i("News")),!!n&&wp.element.createElement("a",{href:n,className:"timeline-blog-link"},i("Blog")))))))},save:function(e){var t=e.attributes,l=t.title,n=t.content,a=t.releaseDate,r=t.newsLink,o=t.blogLink,s=e.className?e.className:"",c=e.attributes.releaseType?e.attributes.releaseType:"major";return wp.element.createElement("div",{className:s+" timeline-"+c},wp.element.createElement("div",{className:"timeline-container"},wp.element.createElement("time",{className:"timeline-date",dateTime:a},!!a&&moment(a).local().format("MMM, Y")),wp.element.createElement("div",{className:"separator"}),wp.element.createElement("div",{className:"content-wrap"},wp.element.createElement("div",{className:"content-inner"},wp.element.createElement("h4",{className:"timeline-title"},wp.element.createElement("span",{className:"timelineTitle"},l),!0===c&&wp.element.createElement("span",{className:"minor-release"},i("(Minor Release)"))),wp.element.createElement("p",{className:"timeline-description"},wp.element.createElement("span",{className:"contributor"},n)),wp.element.createElement("div",{className:"postlinks"},!(!r&&!o)&&wp.element.createElement("strong",null,i("Links:")),!!r&&wp.element.createElement("a",{href:r,className:"timeline-news-link"},i("News")),!!o&&wp.element.createElement("a",{href:o,className:"timeline-blog-link"},i("Blog")))))))}})},function(e,t){},function(e,t){}]);