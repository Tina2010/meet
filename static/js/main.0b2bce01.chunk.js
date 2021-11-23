(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{46:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(34),i=n.n(r),s=(n(46),n(12)),c=n.n(s),l=n(15),u=n(6),d=n(11),h=n(8),m=n(7),f=(n(48),n(49),n(50),n(78)),p=n(79),v=(n(51),n(14)),g=n(40),b=n(37),w=n(36),j=(n(52),n(35)),y=n.n(j),k=n(1),x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={detailsShown:!1},e.showDetails=function(){e.setState((function(e){return{detailsShown:!e.detailsShown}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(k.jsx)(v.a,{className:"eventCard",style:{margin:"5px"},children:Object(k.jsxs)(v.a.Body,{children:[Object(k.jsxs)("div",{className:"visibleCardContent",children:[Object(k.jsx)(v.a.Title,{className:"summary",children:e.summary}),Object(k.jsxs)(v.a.Text,{className:"location",children:[Object(k.jsx)(w.a,{})," ",e.location]}),Object(k.jsxs)(v.a.Text,{className:"startDatetime",children:[Object(k.jsx)(b.a,{}),Object(k.jsx)(y.a,{format:" DD.MM.YYYY HH:MM ",children:e.start.dateTime}),"o'Clock"]}),Object(k.jsxs)(v.a.Text,{className:"mb-4 text-muted",children:["TZ: ",e.start.timeZone]})]}),Object(k.jsx)(g.a,{variant:"success",className:"detailsButton",onClick:this.showDetails,children:this.state.detailsShown?"Hide Details":"See Details"}),Object(k.jsxs)("div",{className:"eventDetails"+(this.state.detailsShown?" active":" inactive"),children:[Object(k.jsx)(v.a.Subtitle,{className:"mt-3 mb-2 text-muted",children:"Description"}),Object(k.jsx)(v.a.Text,{className:"description",children:e.description})]})]})})}}]),n}(a.Component),O=x,T=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(k.jsx)(f.a,{className:"EventList",children:e.map((function(e){return Object(k.jsx)(p.a,{children:Object(k.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component),S=T,Z=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,height:"20px",width:a.width}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"Alert",children:Object(k.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="rgb(25 38 183)",a.width="max-content",a}return n}(Z),M=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="rgb(163 20 20)",a}return n}(Z),C=(n(56),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"The city you are looking for can not be found. Please try another city."}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"CitySearch",children:[Object(k.jsx)(E,{text:this.state.infoText}),Object(k.jsx)("h5",{children:"Choose a location:"}),Object(k.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Enter a city"}),Object(k.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(k.jsx)("li",{style:{display:"block"},onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(k.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(k.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component)),W=C,A=(n(57),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:32},e.toggleAmountOfEvents=function(t){var n=t.target.value;n>0&&n<33?(e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(t.target.value)):(e.setState({errorText:"Please select a number from 1 - 32!"}),e.props.updateEventCount(32))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{style:{textAlign:"-webkit-center"},children:[Object(k.jsxs)("div",{className:"numberOfEvents",children:[Object(k.jsx)("h5",{children:"Choose the number of events you want to see, from currently 32: "}),Object(k.jsx)("input",{type:"number",className:"amountEventsOnePage",value:this.state.numberOfEvents,onChange:function(t){return e.toggleAmountOfEvents(t)}})]}),Object(k.jsx)(M,{text:this.state.errorText})]})}}]),n}(a.Component)),N=A;n(58);var J=function(e){return e.showWelcomeScreen?Object(k.jsxs)("div",{className:"WelcomeScreen",children:[Object(k.jsx)("h1",{children:"Welcome to LetsMeet"}),Object(k.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(k.jsx)("div",{className:"button_cont",align:"center",children:Object(k.jsx)("div",{className:"google-btn",children:Object(k.jsxs)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:[Object(k.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"}),Object(k.jsx)("b",{children:"Sign in with google"})]})})}),Object(k.jsx)("a",{href:"https://Tina2010.github.io/meet/privacy.html",rel:"nofollow noopener",style:{textDecoration:"none"},children:"Privacy policy"})]}):null},D=n(39),B=n(24),L=n.n(B),I=n(18),U=n.n(I),H=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript and waaaaaaaaaaaaay more",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T1400005",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"1",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T1400001",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"2",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T1400002",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"3",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T1400003",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"4",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],R=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t=e.map((function(e){return e.location}));return Object(D.a)(new Set(t))},Y=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return U.a.done(),e.abrupt("return",H);case 4:if(navigator.onLine){e.next=10;break}return e.next=7,localStorage.getItem("lastEvents");case 7:return t=e.sent,U.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=12,V();case 12:if(!(n=e.sent)){e.next=22;break}return R(),a="https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,L.a.get(a);case 18:return(o=e.sent).data&&(r=G(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),U.a.done(),e.abrupt("return",o.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,q(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,L.a.get("https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&Y(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=n(80),F=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(t){z().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),o=e.state.numberOfEvents;e.setState({events:a.slice(0,o)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,q(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&z().then((function(e){r.mounted&&r.setState({events:e,locations:G(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(k.jsx)("div",{className:"App"}):(console.log(this.state.events,"events render"),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"LetsMeet"}),Object(k.jsx)(W,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(k.jsx)(N,{numberOfEvents:this.state.numberOfEvents,updateEventCount:this.updateEventCount}),Object(k.jsx)(S,{events:this.state.events}),Object(k.jsxs)(_.a,{className:"mt-5",style:{justifyContent:"center"},children:[Object(k.jsx)("p",{style:{color:"white"},children:"Feel free to visit my Portfolio:"}),Object(k.jsx)("a",{href:"https://portfolio-tr.000webhostapp.com/",rel:"noreferrer",style:{textDecoration:"none"},target:"_blank",children:"portfolio-tr.000webhostapp.com"})]}),Object(k.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){V()}})]}))}}]),n}(a.Component),P=F,X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(38).config("5ca33d12b75f48faa3932e086e263109").install(),i.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),X()}},[[77,1,2]]]);
//# sourceMappingURL=main.0b2bce01.chunk.js.map