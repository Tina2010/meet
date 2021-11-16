(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(35),o=n.n(s),c=(n(47),n(8)),i=n(9),u=n(12),l=n(10),d=(n(48),n(49),n(50),n(26)),h=n(77),m=n(78),p=n(14),f=n(39),v=n(38),b=n(37),j=(n(51),n(36)),g=n.n(j),w=n(2),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={detailsShown:!1},e.showDetails=function(){e.setState((function(e){return{detailsShown:!e.detailsShown}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(w.jsx)(p.a,{className:"Event",children:Object(w.jsxs)(p.a.Body,{children:[Object(w.jsx)(p.a.Title,{className:"summary",children:e.summary}),Object(w.jsxs)(p.a.Text,{className:"location",children:[Object(w.jsx)(b.a,{})," ",e.location]}),Object(w.jsxs)(p.a.Text,{className:"startDatetime",children:[Object(w.jsx)(v.a,{}),Object(w.jsx)(g.a,{format:" DD.MM.YYYY HH:MM ",children:e.start.dateTime}),"o'Clock",Object(w.jsxs)("span",{className:"mt-3 mb-2 text-muted",children:[" (TZ: ",e.start.timeZone,") "]})]}),Object(w.jsx)(f.a,{variant:"success",className:"detailsButton",onClick:this.showDetails,children:this.state.detailsShown?"Hide Details":"See Details"}),Object(w.jsxs)("div",{xs:1,sm:2,md:2,lg:1,className:"eventDetails"+(this.state.detailsShown?" active":" inactive"),children:[Object(w.jsx)(p.a.Subtitle,{className:"mt-3 mb-2 text-muted",children:"Description"}),Object(w.jsx)(p.a.Text,{className:"description",children:e.description})]})]})})}}]),n}(a.Component),y=O,x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(w.jsx)(h.a,{children:Object(w.jsx)(m.a,{children:Object(w.jsx)(d.a,{className:"EventList",children:e.map((function(e){return Object(w.jsx)(d.a.Item,{xs:1,sm:2,md:2,lg:1,children:Object(w.jsx)(y,{event:e})},e.id)}))})})})}}]),n}(a.Component),k=x,S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"CitySearch",children:[Object(w.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Enter a city"}),Object(w.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(w.jsx)("li",{style:{display:"block"},onClick:function(){return e.handleItemClicked(t)},onBlur:function(){e.setState({showSuggestions:!1})},children:t},t)})),Object(w.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(w.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),E=S,T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.toggleAmountOfEvents=function(t){var n=t.target.value;n>-1&&n<33?(e.setState({numberOfEvents:n}),e.props.updateEventCount(t.target.value)):alert("Please enter a number between 0 and 32!")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"numberOfEvents",style:{marginBottom:"20px"},children:[Object(w.jsx)("p",{style:{paddingRight:"5px"},children:"Number of Events:"}),Object(w.jsx)("input",{type:"number",className:"amountEventsOnePage",value:this.state.numberOfEvents,onChange:function(t){return e.toggleAmountOfEvents(t)}})]})}}]),n}(a.Component),C=T,Z=n(42),N=n(13),M=n.n(N),D=n(16),I=n(24),B=n.n(I),A=n(25),q=n.n(A),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],J=function(){var e=Object(D.a)(M.a.mark((function e(){var t,n,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=3;break}return e.abrupt("return",W);case 3:return e.next=5,H();case 5:if(!(t=e.sent)){e.next=15;break}return U(),n="https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=11,B.a.get(n);case 11:return(a=e.sent).data&&(r=L(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),q.a.done(),e.abrupt("return",a.data.events);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.map((function(e){return e.location}));return Object(Z.a)(new Set(t))},R=function(){var e=Object(D.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},F=function(){var e=Object(D.a)(M.a.mark((function e(t){var n,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(D.a)(M.a.mark((function e(){var t,n,a,r,s,o;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,R(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,B.a.get("https://b0vy91f8hf.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&F(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32},e.updateEvents=function(t){J().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,J().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:L(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h1",{children:"LetsMeet"}),Object(w.jsx)(E,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(w.jsx)(C,{numberOfEvents:this.state.numberOfEvents,updateEventCount:this.updateEventCount}),Object(w.jsx)(k,{events:this.state.events})]})}}]),n}(a.Component),z=Y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),_()}},[[75,1,2]]]);
//# sourceMappingURL=main.39cff16f.chunk.js.map