(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2Xpuy",image:"ImageGalleryItem_image__YD6sA"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__3C37O",modal:"Modal_modal__2P9Bb"}},15:function(e,t,a){e.exports={wrapper:"Error_wrapper__vI-OH",text:"Error_text__4-6aL"}},27:function(e,t,a){e.exports={container:"Container_container__37FrA"}},28:function(e,t,a){e.exports={list:"ImageGallery_list__3nB3I"}},29:function(e,t,a){e.exports={btn:"Button_btn__1OmrT"}},31:function(e,t,a){e.exports={overlay:"Loader_overlay__7hGbu"}},37:function(e,t,a){},6:function(e,t,a){e.exports={header:"Searchbar_header__2GXfg",form:"Searchbar_form__3Do1S",btn:"Searchbar_btn__10_Ny",label:"Searchbar_label__29dLS",input:"Searchbar_input__1KsrJ"}},80:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(4),s=a.n(c),i=(a(37),a(5)),l=a.n(i),u=a(17),d=a(7),g=a(8),h=a(9),m=a(11),p=a(10),b=a(16),f=(a(39),a(26)),j=a.n(f),v=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("19173841-1948c6c8698f2c876b72e0f5c","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=a(27),O=a.n(x);function _(e){var t=e.children;return Object(n.jsx)("div",{className:O.a.container,children:t})}var y=a(6),w=a.n(y);function L(e){var t=e.onHandleSubmit,a=e.onSearchQueryChange,r=e.value;return Object(n.jsx)("header",{className:w.a.header,children:Object(n.jsxs)("form",{className:w.a.form,onSubmit:t,children:[Object(n.jsx)("button",{type:"submit",className:w.a.btn,children:Object(n.jsx)("span",{className:w.a.label,children:"Search"})}),Object(n.jsx)("input",{className:w.a.input,type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:a})]})})}var S=a(13),M=a.n(S);function k(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,o=e.onOpenModal;return Object(n.jsx)("li",{className:M.a.item,children:Object(n.jsx)("img",{src:t,alt:r,"data-source":a,className:M.a.image,onClick:o})})}var I=a(28),N=a.n(I);function C(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,r=e.webformatURL,o=e.largeImageURL,c=e.tags;return Object(n.jsx)(k,{webformatURL:r,largeImageURL:o,tags:c,onOpenModal:a},t)}))})}var U=a(29),R=a.n(U);function D(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:R.a.btn,onClick:t,children:"Load more"})}var q=a(30),B=a.n(q),T=(a(79),a(31)),E=a.n(T);function F(){return Object(n.jsx)("div",{className:E.a.overlay,children:Object(n.jsx)(B.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})}var G=a(14),P=a.n(G),A=document.querySelector("#modal-root"),H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(n.jsx)("div",{className:P.a.overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:P.a.modal,children:Object(n.jsx)("img",{src:e,alt:""})})}),A)}}]),a}(r.Component),K=a.p+"static/media/noImage.09ea9f6b.jpg",J=a(15),Q=a.n(J);function X(e){var t=e.texterror;return Object(n.jsxs)("div",{role:"alert",className:Q.a.wrapper,children:[Object(n.jsx)("img",{src:K,width:"550",alt:"sadcat"}),Object(n.jsx)("p",{text:t,className:Q.a.text,children:t})]})}var z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],largeImageURL:"",page:1,error:null,isLoading:!1,showModal:!1},e.searchImages=Object(d.a)(l.a.mark((function t(){var a,n,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.query,r=a.page,""!==n.trim()){t.next=3;break}return t.abrupt("return",b.b.info("Please enter a value for search images!"));case 3:return e.toggleLoader(),t.prev=4,t.next=7,v(n,r);case 7:o=t.sent,e.setState((function(e){var t=e.images,a=e.page;return{images:[].concat(Object(u.a)(t),Object(u.a)(o)),page:a+1}})),0===o.length&&e.setState({error:'No results were found for "'.concat(n,'"!')}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:"Something went wrong. Try again."});case 15:return t.prev=15,e.toggleLoader(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,12,15,18]])}))),e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.searchImages()},e.onLoadMore=function(){e.searchImages(),e.scrollPage()},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scrollPage=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),1e3)},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.setState({images:[],page:1,error:null})}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,r=e.largeImageURL,o=e.isLoading,c=e.showModal,s=e.error;return Object(n.jsxs)(_,{children:[Object(n.jsx)(L,{onHandleSubmit:this.handleSubmit,onSearchQueryChange:this.handleChange,value:t}),s&&Object(n.jsx)(X,{texterror:s}),a.length>0&&!s&&Object(n.jsx)(C,{images:a,onOpenModal:this.onOpenModal}),o&&Object(n.jsx)(F,{}),!o&&a.length>=12&&!s&&Object(n.jsx)(D,{onLoadMore:this.onLoadMore}),c&&Object(n.jsx)(H,{onToggleModal:this.toggleModal,largeImageURL:r}),Object(n.jsx)(b.a,{autoClose:3700})]})}}]),a}(r.Component);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.f9b57989.chunk.js.map