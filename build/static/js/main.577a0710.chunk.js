(this["webpackJsonprestaurant-name"]=this["webpackJsonprestaurant-name"]||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(1),c=n.n(s),r=n(25),i=n.n(r),o=n(14),l=n(16),u=n(33),d=n(5),j=n(12),b=n(3),m=n(26),h=n.n(m),O=(n(58),n(59),n(11)),p=n.n(O),x=n(19),f=(n(60),Object(s.createContext)(null)),v=n(0),g=Object(b.g)((function(e){var t=Object(s.useContext)(f),n=t.cartList,c=t.apiResponse.data.restaurantName;return console.log(n),Object(v.jsx)("nav",{className:"navbar",children:Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsx)(a.b,{to:"/",className:"link-item",children:Object(v.jsx)("h1",{className:"web-logo-heading",children:c})}),Object(v.jsxs)("div",{className:"cart-container",children:[Object(v.jsx)("p",{className:"my-order-menu",children:"My Orders"}),Object(v.jsx)(a.b,{to:"/cart",className:"link-item",children:Object(v.jsxs)("button",{type:"button","data-testid":"cart",className:"cart-btn cart-icon-container",children:[Object(v.jsx)(x.b,{size:24,className:"cart-icon"}),Object(v.jsx)("p",{className:"cart-orders",children:n.length})]})}),Object(v.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:function(){var t=e.history;p.a.remove("jwt_token"),t.replace("/login")},children:"Logout"})]})]})})})),N=(n(65),n(66),function(e){var t=e.eachItemDetails,n=Object(s.useContext)(f).addCartItem,a=Object(s.useState)(0),c=Object(j.a)(a,2),r=c[0],i=c[1],o=t.dishAvailability,l=t.dishCalories,u=t.dishCurrency,b=t.dishDescription,m=t.dishId,h=t.dishImage,O=t.dishName,p=t.dishPrice,x=t.dishType,g=t.addOnCat,N=1===x?"https://img.icons8.com/?size=48&id=61082&format=png":"https://img.icons8.com/?size=48&id=61083&format=png";return Object(v.jsxs)("li",{className:"eachItem",children:[Object(v.jsxs)("div",{className:"dish-type-and-dish-details",children:[Object(v.jsx)("img",{src:N,alt:O,className:"dish-type-img"}),Object(v.jsxs)("div",{className:"dish-details-container",children:[Object(v.jsx)("h1",{className:"dish-name",children:O}),Object(v.jsxs)("p",{className:"sar-val",children:[u," ",p]}),Object(v.jsx)("p",{className:"dish-desc",children:b}),o?Object(v.jsxs)("div",{className:"add-on-container",children:[Object(v.jsx)("button",{type:"button",className:"add-sub-btn",onClick:function(){i((function(e){return 0!==e?e-1:0}))},children:"-"}),Object(v.jsx)("p",{className:"number-dish",children:r}),Object(v.jsx)("button",{type:"button",className:"add-sub-btn",onClick:function(){i((function(e){return e+1}))},children:"+"})]}):Object(v.jsx)("p",{className:"not-available-error",children:"Not available"}),r>0&&Object(v.jsx)("button",{type:"button",onClick:function(){n(Object(d.a)(Object(d.a)({},t),{},{quantity:r}))},className:"add-cart-btn",children:"ADD TO CART"}),0!==g.length&&Object(v.jsx)("p",{className:"custom-avail",children:"Customizations available"})]})]}),Object(v.jsxs)("div",{className:"calories-and-image",children:[Object(v.jsx)("div",{className:"dish-calories-section",children:Object(v.jsxs)("p",{className:"calories",children:[l," calories"]})}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:h,alt:m,className:"dish-img"})})]})]})}),y=function(){var e=Object(s.useContext)(f).apiResponse.data.formattedData,t=Object(s.useState)(e[0].menuCategoryId),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{className:"menu-tabs",children:e.map((function(e){return Object(v.jsx)("li",{className:e.menuCategoryId===a?"tabs active":"tabs",children:Object(v.jsx)("button",{type:"submit",onClick:function(){return c(e.menuCategoryId)},className:e.menuCategoryId===a?"tab-btn active":"tab-btn",children:e.menuCategory})},e.menuCategoryId)}))}),function(){var t=e.filter((function(e){return e.menuCategoryId===a}))[0].categoryDishes;return Object(v.jsx)("div",{className:"menu-item-container",children:Object(v.jsx)("ul",{className:"menu-item-card-container",children:t.map((function(e){return Object(v.jsx)(N,{eachItemDetails:e},e.dishId)}))})})}()]})},C=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"menu-category-container",children:Object(v.jsx)(y,{})})]})},I=function(e){return void 0===p.a.get("jwt_token")?Object(v.jsx)(b.a,{to:"/login"}):Object(v.jsx)(b.b,Object(d.a)({},e))},w=n(29),S=n(30),k=n(31),_=n(32),F=(n(67),function(e){Object(k.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var n=e.props.history;p.a.set("jwt_token",t,{expires:30}),n.replace("/")},e.onSubmitFailure=function(t){e.setState({showSubmitError:!0,errorMsg:t})},e.submitForm=function(){var t=Object(l.a)(Object(o.a)().mark((function t(n){var a,s,c,r,i,l,u;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,s=a.username,c=a.password,r={username:s,password:c},"https://apis.ccbp.in/login",i={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",i);case 7:return l=t.sent,t.next=10,l.json();case 10:u=t.sent,!0===l.ok?e.onSubmitSuccess(u.jwt_token):e.onSubmitFailure(u.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(v.jsx)("input",{type:"password",id:"password",className:"password-input-field",value:t,onChange:e.onChangePassword,placeholder:"Password"})]})},e.renderUsernameField=function(){var t=e.state.username;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(v.jsx)("input",{type:"text",id:"username",className:"username-input-field",value:t,onChange:e.onChangeUsername,placeholder:"Username"})]})},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,n=e.errorMsg;return void 0!==p.a.get("jwt_token")?Object(v.jsx)(b.a,{to:"/"}):Object(v.jsx)("div",{className:"login-form-container",children:Object(v.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(v.jsx)("div",{className:"input-container",children:this.renderUsernameField()}),Object(v.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(v.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),t&&Object(v.jsxs)("p",{className:"error-message",children:["*",n]})]})})}}]),n}(s.Component)),q=F,D=(n(68),n(69),function(){return Object(v.jsxs)("div",{className:"cart-empty-view-container",children:[Object(v.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png",className:"cart-empty-img",alt:"cart empty"}),Object(v.jsx)("h1",{className:"cart-empty-heading",children:"Your Cart Is Empty"}),Object(v.jsx)(a.b,{to:"/",children:Object(v.jsx)("button",{type:"button",className:"shop-now-btn",children:"Shop Now"})})]})}),A=(n(70),function(e){var t=Object(s.useContext)(f),n=t.removeCartItem,a=t.incrementCartItemQuantity,c=t.decrementCartItemQuantity,r=e.cartItemDetails,i=r.dishId,o=r.dishName,l=r.dishCalories,u=r.quantity,d=r.dishPrice,j=r.dishImage,b=function(){n(i)},m=d*u;return Object(v.jsxs)("li",{className:"cart-item",children:[Object(v.jsx)("img",{className:"cart-product-image",src:j,alt:o}),Object(v.jsxs)("div",{className:"cart-item-details-container",children:[Object(v.jsxs)("div",{className:"cart-product-title-brand-container",children:[Object(v.jsx)("p",{className:"cart-product-title",children:o}),Object(v.jsxs)("p",{className:"cart-product-brand",children:["by ",l]})]}),Object(v.jsxs)("div",{className:"cart-quantity-container",children:[Object(v.jsx)("button",{type:"button",className:"quantity-controller-button","data-testid":"minus",onClick:function(){c(i)},children:"-"}),Object(v.jsx)("p",{className:"cart-quantity",children:u}),Object(v.jsx)("button",{type:"button",className:"quantity-controller-button","data-testid":"plus",onClick:function(){a(i)},children:"+"})]}),Object(v.jsxs)("div",{className:"total-price-remove-container",children:[Object(v.jsxs)("p",{className:"cart-total-price",children:["Rs ",m,"/-"]}),Object(v.jsx)("button",{className:"remove-button",type:"button",onClick:b,children:"Remove"})]})]}),Object(v.jsx)("button",{className:"delete-button",type:"button",onClick:b,"data-testid":"remove",children:Object(v.jsx)(x.a,{color:"#616E7C",size:20})})]})}),E=(n(71),function(){var e=Object(s.useContext)(f).cartList;return Object(v.jsx)("ul",{className:"cart-list",children:e.map((function(e){return Object(v.jsx)(A,{cartItemDetails:e},e.dishId)}))})}),P=function(){var e=Object(s.useContext)(f),t=e.cartList,n=e.removeAllCartItems;console.log(t);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"cart-container",children:0===t.length?Object(v.jsx)(D,{}):Object(v.jsxs)("div",{className:"cart-content-container",children:[Object(v.jsx)("h1",{className:"cart-heading",children:"My Cart"}),Object(v.jsx)("button",{type:"button",className:"remove-all-btn",onClick:function(){return n()},children:"Remove All"}),Object(v.jsx)(E,{})]})})]})},R="INITIAL",M="SUCCESS",L="FAILURE",T="IN_PROGRESS",U=function(){var e=Object(s.useState)({status:R,data:null,errorMsg:null}),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),r=Object(j.a)(c,2),i=r[0],m=r[1],O=function(e){var t=i.filter((function(t){return t.dishId!==e}));m(t)};Object(s.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,n,s,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(d.a)(Object(d.a)({},e),{},{status:T})})),"https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc",t={method:"GET"},e.next=5,fetch("https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc",t);case 5:return n=e.sent,e.next=8,n.json();case 8:s=e.sent,console.log(s),n.ok?(c={restaurantName:s[0].restaurant_name,formattedData:s[0].table_menu_list.map((function(e){return{menuCategory:e.menu_category,menuCategoryId:e.menu_category_id,categoryDishes:e.category_dishes.map((function(e){return{dishId:e.dish_id,dishName:e.dish_name,dishPrice:e.dish_price,dishImage:e.dish_image,dishCurrency:e.dish_currency,dishCalories:e.dish_calories,dishDescription:e.dish_description,dishAvailability:e.dish_Availability,dishType:e.dish_Type,addOnCat:e.addonCat}}))}}))},console.log(c),a((function(e){return Object(d.a)(Object(d.a)({},e),{},{data:c,status:M})}))):a((function(e){return Object(d.a)(Object(d.a)({},e),{},{status:L,errorMsg:s.errorMsg})}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(v.jsx)(f.Provider,{value:{apiResponse:n,cartList:i,addCartItem:function(e){var t=i.find((function(t){return t.dishId===e.dishId}));m(t?function(n){return n.map((function(n){if(t.dishId===n.dishId){var a=n.quantity+e.quantity;return Object(d.a)(Object(d.a)({},n),{},{quantity:a})}return n}))}:function(t){return[].concat(Object(u.a)(t),[e])})},removeCartItem:O,decrementCartItemQuantity:function(e){i.find((function(t){return t.dishId===e})).quantity>1?m((function(t){return t.map((function(t){if(e===t.dishId){var n=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:n})}return t}))})):O(e)},removeAllCartItems:function(){m([])},incrementCartItemQuantity:function(e){m((function(t){return t.map((function(t){if(e===t.dishId){var n=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:n})}return t}))}))}},children:Object(v.jsx)("div",{className:"page-container",children:Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{exact:!0,path:"/login",component:q}),function(){switch(n.status){case M:return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{exact:!0,path:"/",component:C}),Object(v.jsx)(I,{exact:!0,path:"/cart",component:P})]});case L:return function(){var e=n.errorMsg;return Object(v.jsx)("div",{className:"failure-view",children:e})}();case T:return Object(v.jsx)("div",{className:"loader-view",children:Object(v.jsx)(h.a,{color:"#000000",size:50})});default:return null}}()]})})})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(a.a,{children:Object(v.jsx)(U,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.577a0710.chunk.js.map