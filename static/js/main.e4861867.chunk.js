(this.webpackJsonpvcentry=this.webpackJsonpvcentry||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(31),r=n.n(c),i=n(2),o=n(3),l=n(5),j=n(4),h=n(9),d=n(6),b=n(13),u=n(8),O=n(0),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onInputFocus=function(e){a.setState({error:Object(u.a)(Object(u.a)({},a.state.error),{},Object(b.a)({},e.target.name,!1))})},a.onInputBlur=function(e){0===e.target.value.length&&a.setState({error:Object(u.a)(Object(u.a)({},a.state.error),{},Object(b.a)({},e.target.name,!0))})},a.onHandleInput=function(e){if("checkbox"===e.target.type){if(e.target.checked)a.state.register.hobbies.push(e.target.value);else{var t=a.state.register.hobbies.findIndex((function(t){return t===e.target.value}));a.state.register.hobbies.splice(t,1)}a.setState({register:Object(u.a)(Object(u.a)({},a.state.register),{},{hobbies:a.state.register.hobbies})})}else a.setState({register:Object(u.a)(Object(u.a)({},a.state.register),{},Object(b.a)({},e.target.name,e.target.value))})},a.state={register:{firstName:" ",lastName:" ",email:" ",password:" ",address:" ",gender:" ",hobbies:[],city:" ",dateOfBirth:" "},error:{firstName:!1,lastName:!1,email:!1,password:!1,address:!1,gender:!1,hobbies:!1,city:!1,dateOfBirth:!1}},a}return Object(o.a)(n,[{key:"account",value:function(){for(var e in this.state.register)"hobbies"===e?0===this.state.register.hobbies.length?this.state.error.hobbies=!0:this.state.error.hobbies=!1:" "===this.state.register[e]?this.state.error[e]=!0:this.state.error[e]=!1;this.setState({error:this.state.error}),console.log(this.state.register)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"design",children:[Object(O.jsxs)("div",{className:"login-form",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"CREATE YOUR ACCOUNT"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"label",children:"Enter your First Name:"}),Object(O.jsx)("input",{type:"text",name:"firstName",className:"input",placeholder:"please enter your first name..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.firstName&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid first name"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Last Name:"}),Object(O.jsx)("input",{type:"text",name:"lastName",className:"input",placeholder:"please enter your last name..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.lastName&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid last name"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Email Id:"}),Object(O.jsx)("input",{type:"text",name:"email",className:"input",placeholder:"please enter your emailid..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.email&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid email"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Password:"}),Object(O.jsx)("input",{type:"password",name:"password",className:"input",placeholder:"please enter your password..",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.password&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid password"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your DOB:"}),Object(O.jsx)("input",{type:"date",className:"input",name:"dateOfBirth",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.dateOfBirth&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid DOB"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your Gender:"}),Object(O.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.onHandleInput}),"Male",Object(O.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.onHandleInput}),"Female",Object(O.jsx)("input",{type:"radio",name:"gender",value:"do not wish to specify",onChange:this.onHandleInput}),"others",this.state.error.gender&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please select vaild gender:"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your Hobbies:"}),Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",onChange:this.onHandleInput,value:"cricket"}),"Cricket",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",onChange:this.onHandleInput,value:"BasketBall"}),"BasketBall",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",onChange:this.onHandleInput,value:"Carrom"}),"Carrom",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",onChange:this.onHandleInput,value:"Football"}),"FootBall",Object(O.jsx)("input",{type:"checkbox",className:"m-left-10",name:"hobbies",onChange:this.onHandleInput,value:"Hockey"}),"Hockey",this.state.error.hobbies&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please select vaild hobbies:"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Address:"}),Object(O.jsx)("textarea",{placeholder:"enter your address..",className:"text-box",name:"address",onChange:this.onHandleInput,onFocus:this.onInputFocus,onBlur:this.onInputBlur}),this.state.error.address&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please enter valid address"})})]}),Object(O.jsxs)("div",{className:"m-top-15",children:[Object(O.jsx)("label",{className:"label",children:"Select your City:"}),Object(O.jsxs)("select",{className:"input",defaultValue:" ",name:"city",onChange:this.onHandleInput,children:[Object(O.jsx)("option",{disabled:!0,value:" ",children:"please enter your city:"}),Object(O.jsx)("option",{value:"Chennai",children:"Chennai"}),Object(O.jsx)("option",{value:"vellore",children:"Vellore"}),Object(O.jsx)("option",{value:"kanchepuram",children:"Kanchepuram"}),Object(O.jsx)("option",{value:"chengalpattu",children:"chengalpattu"}),Object(O.jsx)("option",{value:"karaikal",children:"Karaikal"}),Object(O.jsx)("option",{value:"kochi",children:"Kochi"})]}),this.state.error.city&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:"Please select vaild city:"})})]}),Object(O.jsx)("div",{className:"m-top-15",children:Object(O.jsx)("button",{onClick:function(){e.account()},children:"Create Account"})})]}),Object(O.jsx)(h.b,{to:"/login",children:"Go Back To Login"})]})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState({login:Object(u.a)(Object(u.a)({},a.state.login),{},Object(b.a)({},e.target.name,e.target.value))})},a.state={login:{email:"",password:""},error:{email:!1,password:!1}},a}return Object(o.a)(n,[{key:"onLogin",value:function(){for(var e in console.log(this.state.login),this.state.login)if("email"==e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.state.login.email).toLowerCase());this.state.error.email=!t}else if("password"==e){var n=0===this.state.login.password.length;this.state.error.password=n}for(var a in this.setState({error:this.state.error}),this.state.error)if(this.state.error[a])return;this.props.history.push("/mail/inbox",this.state.login)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Welcome to Login Page"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter EmailID:"}),Object(O.jsx)("input",{type:"text",placeholder:"please enter email id... ",name:"email",onChange:this.onHandleInput}),this.state.error.email&&Object(O.jsx)("span",{children:"Invalid Email"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter Password:"}),Object(O.jsx)("input",{type:"password",placeholder:"please enter password...",name:"password",onChange:this.onHandleInput}),this.state.error.password&&Object(O.jsx)("span",{children:"Invalid password"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){e.onLogin()},children:"Login"})})]}),Object(O.jsx)(h.b,{to:"/mail/inbox",children:"Go to Mail Page"})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Welcome to Home Page"})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Welcome To Index Page"})})}}]),n}(a.Component),g=n(15),f=n.n(g),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={userList:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.listAPI()}},{key:"listAPI",value:function(){var e=this;f.a.get("https://reqres.in/api/users?page=2").then((function(t){console.log(t.data.data),e.setState({userList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.history.location.state;console.log(t);var n=this.state.userList.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.first_name}),Object(O.jsx)("td",{children:e.last_name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:e.avatar})})]},t)}));return console.log(n),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["Logged IN user - ",t.email]}),Object(O.jsxs)("h1",{children:["Logged IN password-",t.password]}),Object(O.jsx)("h1",{children:"This is Inbox Page"}),Object(O.jsx)("button",{onClick:function(){return e.listAPI()},children:"List API"}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"ID"}),Object(O.jsx)("th",{children:"FirstName"}),Object(O.jsx)("th",{children:"LastName"}),Object(O.jsx)("th",{children:"EmailID"}),Object(O.jsx)("th",{children:"ProfilePicture"}),Object(O.jsx)("th",{})]})}),Object(O.jsx)("tbody",{children:n})]})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.state={name:"",job:""},a}return Object(o.a)(n,[{key:"onSubmit",value:function(){f.a.post("https://reqres.in/api/users",this.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is Sent Page"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter Username :"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Enter username..",onChange:this.onHandleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter Job :"}),Object(O.jsx)("input",{type:"text",name:"job",placeholder:"Enter job..",onChange:this.onHandleInput})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.onSubmit()},children:"Submit"})})]})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){a.setState({edit:Object(u.a)(Object(u.a)({},a.state.edit),{},Object(b.a)({},e.target.name,e.target.value))})},a.state={edit:{name:" ",job:" "}},a}return Object(o.a)(n,[{key:"onUpdate",value:function(){console.log(this.state.edit);f.a.put("https://reqres.in/api/users/2",this.state.edit).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is Trash Page"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Edit UserName:"}),Object(O.jsx)("input",{type:"text",placeholder:"edit username..",name:"name",onChange:this.onHandleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Edit Job:"}),Object(O.jsx)("input",{type:"text",placeholder:"edit job..",name:"job",onChange:this.onHandleInput})]}),Object(O.jsx)("button",{onClick:function(){e.onUpdate()},children:"UpdateInfo"})]})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"onDeleteUser",value:function(){f.a.delete("https://reqres.in/api/users/2").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){e.onDeleteUser()},children:"DeleteUser"})})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:"sandhiya"},console.log("Called Constructor Method"),a}return Object(o.a)(n,[{key:"onHandleInput",value:function(){this.setState({name:"dhiya"})}},{key:"shouldComponentUpdate",value:function(e,t){return console.log(e,t),!0}},{key:"componentWillMount",value:function(){console.log("Called ComponentWillMount Method")}},{key:"componentDidMount",value:function(){console.log("ComponentDidMount Method")}},{key:"componentWillUnmount",value:function(){console.log("Called Component Will Unmount")}},{key:"componentWillUpdate",value:function(){console.log("Called Component Will Update")}},{key:"componentDidUpdate",value:function(){console.log("Called Component Did Update")}},{key:"render",value:function(){var e=this;return console.log("Called Render Method"),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:['"The user name is:"',this.state.name]}),Object(O.jsx)("h1",{children:"This is Life Cycle Page"}),Object(O.jsx)("button",{onClick:function(){e.onHandleInput()},children:"Change"})]})}}]),n}(a.Component),H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onHandleInput=function(e){console.log(e.target.value),a.props.onLoadName(e.target.value)},console.log(e),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a child component"}),Object(O.jsxs)("h1",{children:["UserName-",this.props.name]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter your name:"}),Object(O.jsx)("input",{type:"text",placeholder:"please enter your name...",onChange:this.onHandleInput})]})]})}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onReceiveName=function(e){console.log(e),a.setState({message:e})},a.state={userName:"sandhiya ",message:" "},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["New Message:",this.state.message]}),Object(O.jsx)("h1",{children:"This is a Parent Component"}),Object(O.jsx)(H,Object(u.a)(Object(u.a)({name:this.state.userName},this.state),{},{onLoadName:this.onReceiveName}))]})}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("div",{className:"header"}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)(h.b,{to:"/mail/inbox",className:"btn",activeClassName:"active-btn",children:"Inbox"}),Object(O.jsx)(h.b,{to:"/mail/sent",className:"btn",activeClassName:"active-btn",children:"Sent"}),Object(O.jsx)(h.b,{to:"/mail/trash",className:"btn",activeClassName:"active-btn",children:"Trash"}),Object(O.jsx)(h.b,{to:"/mail/delete",className:"btn",activeClassName:"active-btn",children:"Delete"}),Object(O.jsx)(h.b,{to:"/mail/cycle",className:"btn",activeClassName:"active-btn",children:"LifeCycle"}),Object(O.jsx)(h.b,{to:"/mail/parent",className:"btn",activeClassName:"active-btn",children:"Parent"})]}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/mail/inbox",component:y}),Object(O.jsx)(d.a,{path:"/mail/sent",component:C}),Object(O.jsx)(d.a,{path:"/mail/trash",component:N}),Object(O.jsx)(d.a,{path:"/mail/delete",component:k}),Object(O.jsx)(d.a,{path:"/mail/cycle",component:I}),Object(O.jsx)(d.a,{path:"/mail/parent",component:P})]})})]})]})})}}]),n}(a.Component),B=s.a.createContext(),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onHandleChange=function(t){console.log(t.target.value),e.context.fromSearch(t.target.value)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(B.Consumer,{children:function(t){return console.log(t),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"search-box",placeholder:"Enter a search value...",onChange:e.onHandleChange})})}})}}]),n}(a.Component);S.contextType=B;var E=S,F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{children:"Header Page"}),Object(O.jsx)(E,{})]})}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsx)("h1",{children:"Side Bar"})})}}]),n}(a.Component),U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(B.Consumer,{children:function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is product list component"}),Object(O.jsxs)("h1",{children:["The search result is ",e.searchMessage]})]})}})}}]),n}(a.Component);U.contextType=B;var T=U,D=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={userName:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h1",{children:"Content Page"}),Object(O.jsx)(T,{})]})}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).receivedValue=function(e){a.setState({data:e})},a.state={data:" "},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(B.Provider,{value:{message:"Hello from dashboard component",fromSearch:this.receivedValue,searchMessage:this.state.data},children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(F,{}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsx)(L,{}),Object(O.jsx)(D,{})]})]})})}}]),n}(a.Component),A=(n(61),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/login",component:m}),Object(O.jsx)(d.a,{path:"/register",component:p}),Object(O.jsx)(d.a,{path:"/home",component:x}),Object(O.jsx)(d.a,{path:"/index",component:v}),Object(O.jsx)(d.a,{path:"/mail",component:w}),Object(O.jsx)(d.a,{path:"/dashboard",component:M})]})})}}]),n}(a.Component));r.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.e4861867.chunk.js.map