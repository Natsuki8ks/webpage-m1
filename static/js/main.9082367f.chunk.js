(this["webpackJsonpreact-webpage-no-v1"]=this["webpackJsonpreact-webpage-no-v1"]||[]).push([[0],{19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(15),c=t.n(r),i=(t(24),t(12)),o=t(2),m=t(17),s=t(6),u=(t(25),["btn--primary","btn--outline"]),E=["btn--medium","btn--large","btn--mobile","btn--wide"],b=["primary","blue","red","green"],v=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,i=e.buttonColor,o=u.includes(r)?r:u[0],m=E.includes(c)?c:E[0],s=b.includes(i)?i:null;return l.a.createElement("button",{className:"btn ".concat(o," ").concat(m," ").concat(s),onClick:n,type:t},a)},d=(t(26),t(0));t(27);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"profile-container"},l.a.createElement("div",{className:"profile-col",style:{display:"flex"}},l.a.createElement("div",{className:"home__profile-img"},l.a.createElement("img",{src:"images/img1.svg",alt:""})),l.a.createElement("div",{className:"home__profile-text"},"Hello! My name is Natsuki!")),l.a.createElement("div",{className:"profile-col",style:{display:"flex"}},l.a.createElement("div",{className:"home__profile-shorttext"},"I was a nurse.  But I want to become a frontend engineer!"),l.a.createElement("div",{className:"home__profile-img"},l.a.createElement("img",{src:"images/img3.svg",alt:""}))),l.a.createElement("div",{className:"profile-col",style:{display:"flex"}},l.a.createElement("div",{className:"home__profile-img"},l.a.createElement("img",{src:"images/img2.svg",alt:""})),l.a.createElement("div",{className:"home__profile-description"},"I\u2019m studying Programming right now. For example, HTML,CSS,JavaScript,React,    Gatsby,Docker,Linux,AWS...I have many things to learn more!"))))};var p=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),u=Object(i.a)(c,2),E=u[0],b=u[1],g=function(){return r(!1)},p=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.b.Provider,{value:{color:"#fff"}},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(o.b,{to:"/",className:"navbar-logo",onClick:g},l.a.createElement(m.a,{className:"navbar-icon"}),"SPINACH"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},t?l.a.createElement(s.e,null):l.a.createElement(s.a,null)),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/",className:"nav-links",onClick:g},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/profile",className:"nav-links",onClick:function(){return r(!1)}},"Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/services",className:"nav-links",onClick:g},"Services")),l.a.createElement("li",{className:"nav-btn"},E?l.a.createElement(o.b,{to:"sign-up",className:"btn-link"},l.a.createElement(v,{buttonStyle:"btn--outline"},"Sign Up")):l.a.createElement(o.b,{to:"sign-up",className:"btn-link",onClick:g},l.a.createElement(v,{buttonStyle:"btn--outline",buttonSize:"btn--mobile"},"Sign Up"))))))))},f=t(3);t(33);var N=function(e){var a=e.lightBg,t=e.topLine,n=e.lightText,r=e.lightTextDesc,c=e.headline,i=e.description,m=e.buttonLabel,s=e.img,u=e.imgStart,E=e.alt;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a?"home__hero-section":"home__hero-section farkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===u?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"},t),l.a.createElement("h1",{className:n?"heading":"heading dark"},c),l.a.createElement("p",{className:r?"home__hero-subtitle":"home__hero-subtitle dark"},i),l.a.createElement(o.b,{to:"/sign-up"},l.a.createElement(v,{buttonSize:"btn--wide",buttonColor:"red"},m)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{src:s,alt:E,className:"home__hero-img"})))))))},h={lightBg:!1,lightText:!0,lightDesc:!0,topLine:"Exclusive Access",headline:"When it comes to impossible, we are experts",description:"If you can't take your credit when you do something well, you're gonna be a bottom of piles forever.",buttonLabel:"Get started",imgStart:"",img:"images/svg-4.svg",alt:"Credit Card"};var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,h))},_=(t(34),t(18));var w=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(v,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(o.b,{to:"/sign-up"},"How it works"),l.a.createElement(o.b,{to:"/"},"Testimonials"),l.a.createElement(o.b,{to:"/"},"Careers"),l.a.createElement(o.b,{to:"/"},"Investors"),l.a.createElement(o.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(o.b,{to:"/"},"Contact"),l.a.createElement(o.b,{to:"/"},"Support"),l.a.createElement(o.b,{to:"/"},"Destinations"),l.a.createElement(o.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(o.b,{to:"/"},"Submit Video"),l.a.createElement(o.b,{to:"/"},"Ambassadors"),l.a.createElement(o.b,{to:"/"},"Agency"),l.a.createElement(o.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(o.b,{to:"/"},"Instagram"),l.a.createElement(o.b,{to:"/"},"Facebook"),l.a.createElement(o.b,{to:"/"},"Youtube"),l.a.createElement(o.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(o.b,{to:"/",className:"social-logo"},l.a.createElement(_.a,{className:"navbar-icon"}),"SPINACH")),l.a.createElement("small",{className:"website-rights"},"Natsuki \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement(s.b,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement(s.c,null)),l.a.createElement(o.b,{className:"social-icon-link",target:"_blank","aria-label":"Youtube"},l.a.createElement(s.g,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(s.f,null)),l.a.createElement(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(s.d,null))))))};var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center",fontSize:"25px"}},"No Pages"),l.a.createElement("img",{src:"images/svg-6.svg",alt:""})))};var S=function(){return l.a.createElement(o.a,null,l.a.createElement(p,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:k}),l.a.createElement(f.a,{path:"/profile",component:g}),l.a.createElement(f.a,{path:"/services",component:y})),l.a.createElement(w,null))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9082367f.chunk.js.map