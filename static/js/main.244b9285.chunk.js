(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),i=(t(73),t(22)),s=t(17),o=(t(74),t(75),t(77),t(4)),m=t(32),u=t(7),d=t(50),p=t.n(d),g=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],r=a[1],c=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",r(a)):"leave"===e.event?(a[e.icon.id]="socialicons",r(a)):void 0};return l.a.createElement("div",null,l.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{className:"container container-fluid text-center "},l.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),l.a.createElement(p.a,{className:"lead"}," ",o.f),l.a.createElement("div",{className:"p-5"},o.j.map((function(e){return l.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),l.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},h=t(19),f=t.n(h),b=t(37),E=t.n(b),v=t(51),N=t.n(v),A=(t(95),{display:"flex",flexDirection:"row",alignItems:"center"}),y=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(o.p),c=Object(u.a)(r,2),i=c[0],s=c[1],m=Object(n.useState)(E.a),d=Object(u.a)(m,1)[0];Object(n.useEffect)((function(){i&&p()}),[i]);var p=function(e){f.a.get(o.k+o.m+o.l).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return s(!1),console.error(e.message)})).finally((function(){}))};return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row",style:A},l.a.createElement("div",{className:"col-5 d-none d-lg-inline align-self-center"},l.a.createElement("img",{className:"border border-secondary rounded-circle",src:N.a,alt:"profilepicture",width:"375",height:"375"})),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),l.a.createElement("p",{className:"lead text-center"},o.d),l.a.createElement("br",null),d&&l.a.createElement("p",{className:"lead text-center"},l.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},w=function(e){var a=e.value,t=Object(n.useState)([]),r=Object(u.a)(t,2),c=r[0],i=r[1],s=Object(n.useCallback)((function(e){f.a.get(a).then((function(e){return i(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in c)o.push(d),m+=c[d];return l.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return l.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/m*1e3)/10," %")})))},x=function(e){var a=e.value,t=Object(n.useState)("0 mints"),r=Object(u.a)(t,2),c=r[0],i=r[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),l=Math.trunc(n/1e3/60/60);if(l<24)return i("".concat(l.toString()," hours ago"));var r=t.getDate(),c=t.getMonth(),s=t.getFullYear();return i("on ".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,g=a.languages_url;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},o," "),l.a.createElement("p",{className:"card-text"},m," "),l.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},l.a.createElement("i",{className:"fab fa-github"})," Clone Project"),l.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},l.a.createElement("i",{className:"fab fa-github"})," Repo"),l.a.createElement("hr",null),l.a.createElement(w,{value:g}),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"text-dark card-link mr-4"},l.a.createElement("i",{className:"fab fa-github"})," Stars"," ",l.a.createElement("span",{className:"badge badge-dark"},p)),l.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},k=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useCallback)((function(e){f.a.get(o.g+o.i+o.h).then((function(e){return r(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),l.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},t.length&&l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},o.n),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement(x,{key:e.id,id:e.id,value:e})})))))},j=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=(Object(u.a)(e,1)[0],Object(n.useState)(new Array(o.j.length).fill("sociali"))),t=Object(u.a)(a,2);t[0],t[1];return l.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h2",{className:"display-4 pb-3 text-center"},"Get In Touch"),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"I would love to be helpful for your project. Do not hesitate in contact me if you have questions you can contact me to",l.a.createElement("a",{href:"mailto:mauro.benetti@gmail.com"}," ","mauro.benetti@gmail.com"),"."),l.a.createElement("footer",{style:{backgroundColor:"#f7f7f7"},className:"mt-auto py-3 text-center"},l.a.createElement("i",{className:"fas fa-code"})," with ",l.a.createElement("i",{className:"fas fa-heart"})," by"," ",l.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/maurobenetti","aria-label":"My GitHub"},"Mauro Benetti")," ","using ",l.a.createElement("i",{className:"fab fa-react"})))))},I=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==r&&c(e)}))}),[r]),l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(r?"bg-transparent":"bg-gradient"," ")},l.a.createElement("a",{className:"navbar-brand",href:"/home/#home"},"<".concat(o.a," />")),l.a.createElement("button",{className:"d-none navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#aboutme"},l.a.createElement("b",null,"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#experience"},l.a.createElement("b",null,"Experience"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#projects"},l.a.createElement("b",null,"Projects"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#leadership"},l.a.createElement("b",null,"Leadership"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#skills"},l.a.createElement("b",null,"Skills"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#interests"},l.a.createElement("b",null,"Interests"))))))},q=t(54),S=function e(a){var t=this,r=a.title,c=a.image,i=a.description;Object(q.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(l.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(l.a.createElement(n.Fragment,{key:t.list.length},l.a.createElement("h1",{className:""},e),l.a.createElement("hr",null))),t},this.getBlog=function(){return l.a.createElement("div",{className:"container-lg"},t.list)},this.title=r,this.image=c,this.description=i},C=[],M=new S({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),O=new S({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");C.push(O),C.push(M);var P=t(14),T=t(57),U=t.n(T),R=t(58),D=t.n(R),L=t(59),W=t.n(L),J=t(60),G=t.n(J),F=t(61),H=t.n(F),Q=t(62),Z=t.n(Q),K=t(63),B=t.n(K),V=t(64),z=t.n(V),X=function(){return l.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-3 text-center"},"Leadership"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("p",{className:"lead text-left"},"Throughout my professional career, I have been grateful to have opportunities to learn from my peers and share experiences. My path was unconventional, from ",l.a.createElement("b",null,"Electronics")," to ",l.a.createElement("b",null,"Telecommunications")," then to ",l.a.createElement("b",null,"Engineering")," and finally to ",l.a.createElement("b",null,"BI & Analytics"),". From Argentina to Germany to grow and evolve as a person and as a professional. I was honored to participated in Data Science Meetups and present my",l.a.createElement("b",null," Master Thesis")," in one of those. At my position as a Consultant I worked with SAP and Azure as platforms for Analytics and Industrial IoT. Adapt and learn is my lemma, and the more I learn the more I want to learn.")),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement(P.a,null,l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:D.a,alt:"culture",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:U.a,alt:"service",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:B.a,alt:"SEC",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:H.a,alt:"zilker",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:z.a,alt:"custodialappreciation",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:W.a,alt:"committee",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:G.a,alt:"volunteer",width:"600",height:"400"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"rounded",src:Z.a,alt:"family",width:"600",height:"400"})))))))))},_=t(65),Y=t.n(_),$=t(66),ee=t.n($),ae={display:"flex",flexDirection:"row",alignItems:"center"},te=function(){return l.a.createElement("div",{id:"experience",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},"Some of my others homes"),l.a.createElement("div",{className:"row",style:ae},l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:ee.a,alt:"dell technologies logo",width:"420",height:"170"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"Implementation Manager 3G and 4G Technologies",l.a.createElement("br",null),"2014 - 2016")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:Y.a,alt:"boeing logo",width:"300",height:"220"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"Group Leader, Argentina, Mexico, Guatemala, Costa Rica, El Salvador, Brazil",l.a.createElement("br",null),"1996 to 2005")))))))},ne={display:"flex",flexDirection:"row",alignItems:"center"},le=function(){return l.a.createElement("div",{id:"interests",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-4 text-center"},"Interests"),l.a.createElement("div",{className:"row",style:ne},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Meditation"),l.a.createElement("img",{src:"https://img.icons8.com/nolan/128/light.png"}),l.a.createElement("p",{className:"lead text-center"},"Every morning, I begin my day with ",l.a.createElement("a",{href:"https://www.headspace.com/",target:"_blank"},"Headspace"),". I started meditating about one year ago and have learned how to be more focused, mindful, and relaxed. So far, I've meditated for a total of 1,385 minutes, and I am continuing to grow this number every day!")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Reading"),l.a.createElement("img",{src:"https://img.icons8.com/nolan/128/saving-book.png"}),l.a.createElement("p",{className:"lead text-center"},"I had never been much of a reader until this year. When quarantine started, I thought it'd be a great opportunity to get into reading and find books I really enjoy. I've read 7 books since March and can't wait to read more. Check out what I've been reading on ",l.a.createElement("a",{href:"https://www.goodreads.com/ana_ashrafi",target:"_blank"},"Goodreads"),"!")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Soccer"),l.a.createElement("img",{src:"https://img.icons8.com/nolan/128/football2.png"}),l.a.createElement("p",{className:"lead text-center"},"I first picked up a soccer ball when I was 4 years old and have played the beautiful game since. I played competitively for FC Dallas, while also playing for my high school soccer team. In college, I play intramural soccer and frequently look for pick-up games to play!")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center",style:{fontSize:"28px"}},"Food"),l.a.createElement("img",{src:"https://img.icons8.com/nolan/128/meal.png"}),l.a.createElement("p",{className:"lead text-center"},"I am a big foodie! Growing up with a mom who cooks the best Persian food, I fell in love with food at an early age. I'm currently working on a cookbook of all my mom's original recipes and am learning more about cooking too. I love trying new restaurants and recipes!")))))))},re=t(13),ce=t(67),ie=t(40),se={display:"flex",flexDirection:"row",alignItems:"center"},oe=function(){return l.a.createElement("div",{id:"skills",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},"Skills"),l.a.createElement(ce.a,{defaultActiveKey:"home",justify:!0,variant:"tabs",transition:!1,id:"skills-tabs",style:{backgroundColor:"#f7f7f7",fontSize:"1.25rem"}},l.a.createElement(ie.a,{eventKey:"home",title:"Hard Skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Agile/Lean Methodologies",l.a.createElement(re.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"JavaScript",l.a.createElement(re.a,{now:87,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"C#",l.a.createElement(re.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"C/C++",l.a.createElement(re.a,{now:70,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Python",l.a.createElement(re.a,{now:60,style:{width:"490px",backgroundColor:"white"}}))),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Java",l.a.createElement(re.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"HTML/CSS",l.a.createElement(re.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Test-Driven Development",l.a.createElement(re.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"SQL",l.a.createElement(re.a,{now:75,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"React",l.a.createElement(re.a,{now:50,style:{width:"490px",backgroundColor:"white"}}))))),l.a.createElement(ie.a,{eventKey:"soft",title:"Soft Skills"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("br",null),l.a.createElement("div",{className:"row",style:se},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Collaboration"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/collaboration-female-male.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Problem Solving"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/critical-thinking.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Positivity"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/happy-cloud.png"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"row",style:se},l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Goal Setting"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/goal.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Organization"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/to-do.png"})),l.a.createElement("div",{className:"col text-center"},l.a.createElement("p",{className:"lead text-center"},"Empathy"),l.a.createElement("img",{src:"https://img.icons8.com/ios/75/000000/trust.png"})))))))))},me=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(te,null),l.a.createElement(k,null),l.a.createElement(X,null),l.a.createElement(oe,null),l.a.createElement(le,null))},ue=function(){return l.a.createElement(i.a,{basename:"/home/"},o.q&&l.a.createElement(I,null),l.a.createElement(s.a,{path:"/",exact:!0,component:me}),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,a,t){e.exports=t.p+"static/media/CVBenettiMEng2020.1d0cc7b9.pdf"},4:function(e){e.exports=JSON.parse('{"a":"Mauro","c":"","b":"Benetti","f":"Passionate about changing the world with technology.","j":[{"id":0,"image":"fa-github","url":"https://github.com/maurobenetti","style":"socialicons"},{"id":1,"image":"fa-linkedin","url":"https://www.linkedin.com/in/maurobenetti/?locale=en_US","style":"socialicons"}],"e":"About Me","p":true,"k":"https://www.instagram.com/","m":"mau.8420","l":"/?__a=1","d":"Hello! My name is Mauro and I am a Engineer with a Master in Business Intelligence and Analytics. The past two years, I have been a Consultant at Datagroup GmbH. I\'m most passionate about AI, electronics and Industrial IoT","n":"Recent Projects","g":"https://api.github.com/users/","i":"mbenetti","h":"/repos?sort=updated&direction=desc","o":6,"q":true}')},51:function(e,a,t){e.exports=t.p+"static/media/Profile.9e48ef37.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/service.497d47f0.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/culture.ac1bcc62.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/committee.60381589.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/park.31979142.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/zilker.0cd01491.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/retreat.f9a5e4d9.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/sec.3e464a5a.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/custodians.216242f4.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/boeing.3cbd6cad.jpg"},66:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACMCAMAAADvAVSuAAAAM1BMVEUSQZEwWZ9Nca1ribqJoMj///+nuNbx9Pm2xN3E0OQhTZjT3OtcfbTi6PI/ZaZ6lMGYrM8xY/OqAAAAAW9yTlQBz6J3mgAAA4NJREFUeNrtmdmyqjAQACVsEgX5/6+9ngOSmWQCVukx1q3uN5dsTZgMw+kEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Hkq51zdaOr7d1Xpif0VraaOfnaPH5r1c9e3OfqzW/7UPL4ZVF/+Iv58lWO7eFaj6NV/maJ4tlqR79p9Bp9XNAlD/aTGjhXdZJ/Ntynq9f2iFZ3bIy5ZRZPYfpdKjx0p8mqn9qXv4HSRamMrRfWhoeV/lqKrWPbZR2NHihrdZfdtivSMlKJLe8xoK5J252RsraiK+3SnohirvOUUPWGobStLkdgXfZ2OrR0kt/NwtIiPK/o9bQxFrn0GZygSUX4J1HuKjGGuTyzk7xWNvbkMU1GXBtBw1qWKvNgWKtLZiobtv9vv41coGuTFCwsxFVV7HSWKZDrUeauJUhSilgubr+jBH1Yjk5HzrqLdjmJFMh1q7CZSkR9D4xC3i+aPYjUyL3ws5mVFIh3qr5kmUlEI7Pe9Om8f5u9QdIofEN6gSKRD45RrIhSFrLFTn9qC+aNU5NOQ/aIikQ5dfLaJULTt5CWnDnuq4MGvpjCJbTT61xXJB4kp3yQoChNY7vQQmQrmj/oqySR4eF3RIBOiOtskLH878B/xOUzo8iWKVMieX1ckAq5xcieKQuKxZfhhG9WnQsT3+iDWVL/hRJP7svN2k03R5iPkisFasYM/VuRlNWt6Q14kHUUhO1YUMrNx2NjZhYUUqbpO719XpDucrCarIp8vaC4UOvgTRfqyv0GRdlQbTVZFUZkopVDhKFWkQuyWTUpFN6MfJ5YbP+lXMidt0rEXRUmZKKXMwW8oMuuvqhgypMhlJMUQVdgPQVsv/bjqWyh/tEb3RnnxrsgfryGjSNVDQtBWip6qRhU5+M0LNKWB8+f+GJ9ZxcmuXcuE6xG0laJwWeboJV1TuHBk7+GrqegwnrZLSDXfgMgItwZtqSgcEundJKJUiYM/M7HExs/cDk/l9enTfo9Wx91JRfsPY2ELlsgfc9cufqn4u6bpyNFyC2XexipHP0FbWAmX5GxMUmyjAgd/TlEcstcn7/3XsWtRO6NIG74H7aCoOigMiU39+fzRrSS1Cu8U1fZ1Mw8Wc3N93ARVrtNK9jhtYztfuew84smUfjcLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wP/AFikROmiKIg5AAAAAElFTkSuQmCC"},68:function(e,a,t){e.exports=t(104)},73:function(e,a,t){},77:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.244b9285.chunk.js.map