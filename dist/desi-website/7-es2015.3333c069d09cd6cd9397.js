(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{pG8d:function(e,n,t){"use strict";t.r(n);var r=t("ofXK"),o=t("tyNb"),a=t("fXoL"),b=t("gbi4"),c=t("5eHb"),i=t("3Pt+");function s(e,n){1&e&&(a.Rb(0,"span",42),a.nc(1,"Please enter your name !"),a.Qb())}function l(e,n){1&e&&(a.Rb(0,"span",42),a.nc(1,"Please enter your email !"),a.Qb())}function d(e,n){1&e&&(a.Rb(0,"span",42),a.nc(1,"Email is invalid!"),a.Qb())}function m(e,n){1&e&&(a.Rb(0,"span",42),a.nc(1,"Please enter the Query title!"),a.Qb())}function u(e,n){1&e&&(a.Rb(0,"span",42),a.nc(1,"Please enter the message!"),a.Qb())}const g=function(){return["/home"]},h=[{path:"",component:(()=>{class e{constructor(e,n){this.commonService=e,this.toaster=n}ngOnInit(){}sendMail(){let e={name:this.name,email:this.email,subject:this.subject,message:this.message};console.log(e),this.commonService.sendEmail(e).subscribe(e=>{this.name="",this.email="",this.subject="",this.message="",this.toaster.success("Our Team will connect to you shortly!","Thank You")})}}return e.\u0275fac=function(n){return new(n||e)(a.Mb(b.a),a.Mb(c.b))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-contact"]],decls:74,vars:20,consts:[[1,"container-xxl","py-5","bg-dark","hero-header","mb-5"],[1,"container","text-center","my-5","pt-5","pb-4"],[1,"display-3","text-white","mb-3","animated","slideInDown"],["aria-label","breadcrumb"],[1,"breadcrumb","justify-content-center","text-uppercase"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","text-white","active"],[1,"container-xxl","py-5"],[1,"container"],["data-wow-delay","0.1s",1,"text-center","wow","fadeInUp"],[1,"section-title","ff-secondary","text-center","text-primary","fw-normal"],[1,"mb-5"],[1,"row","g-4"],[1,"col-12"],[1,"row","gy-4"],[1,"col-md-4"],[1,"section-title","ff-secondary","fw-normal","text-start","text-primary"],[1,"fa","fa-envelope-open","text-primary","me-2"],["data-wow-delay","0.1s",1,"col-md-6","wow","fadeIn"],["frameborder","0","scrolling","no","marginheight","0","marginwidth","0","src","https://maps.google.com/maps?width=100%25&height=600&hl=en&q=140%20B.T.%20Road,%20Block-C,%20Ground%20Floor%20Dunlop%20Supermarket,%20beside%20Sonali%20Cinema%20Hall,%20Kolkata,%20West%20Bengal%20700108+(Love%20Desi%20Chinese)&t=k&z=16&ie=UTF8&iwloc=B&output=embed",1,"position-relative","rounded","w-100","h-100"],["href","https://www.gps.ie/marine-gps/"],[1,"col-md-6"],["data-wow-delay","0.2s",1,"wow","fadeInUp"],["id","contactform","role","form"],["contactForm","ngForm"],[1,"row","g-3"],[1,"form-floating"],["type","text","id","name","name","name","placeholder","Your Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["cus_name","ngModel"],["for","name"],["class","error-msg",4,"ngIf"],["type","email","name","email","pattern","[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","id","email","placeholder","Your Email","required","",1,"form-control",3,"ngModel","ngModelChange"],["mail","ngModel"],["for","email"],["type","text","name","subject","id","subject","placeholder","Subject","required","",1,"form-control",3,"ngModel","ngModelChange"],["cus_subject","ngModel"],["for","subject"],["name","message","placeholder","Leave a message here","id","message","required","",1,"form-control",2,"height","150px",3,"ngModel","ngModelChange"],["cus_message","ngModel"],["for","message"],["type","submit",1,"btn","btn-primary","w-100","py-3",3,"disabled","click"],[1,"error-msg"]],template:function(e,n){if(1&e&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"h1",2),a.nc(3,"Contact Us"),a.Qb(),a.Rb(4,"nav",3),a.Rb(5,"ol",4),a.Rb(6,"li",5),a.Rb(7,"a",6),a.nc(8,"Home"),a.Qb(),a.Qb(),a.Rb(9,"li",7),a.nc(10,"Contact"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(11,"div",8),a.Rb(12,"div",9),a.Rb(13,"div",10),a.Rb(14,"h5",11),a.nc(15,"Contact Us"),a.Qb(),a.Rb(16,"h1",12),a.nc(17,"Contact For Any Query"),a.Qb(),a.Qb(),a.Rb(18,"div",13),a.Rb(19,"div",14),a.Rb(20,"div",15),a.Rb(21,"div",16),a.Rb(22,"h5",17),a.nc(23,"Booking"),a.Qb(),a.Rb(24,"p"),a.Nb(25,"i",18),a.nc(26,"query.lovedesichinese@gmail.com"),a.Qb(),a.Qb(),a.Rb(27,"div",16),a.Rb(28,"h5",17),a.nc(29,"General"),a.Qb(),a.Rb(30,"p"),a.Nb(31,"i",18),a.nc(32,"lovedesichinese@gmail.com"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(33,"div",19),a.Rb(34,"iframe",20),a.Rb(35,"a",21),a.nc(36,"ship tracker"),a.Qb(),a.Qb(),a.Qb(),a.Rb(37,"div",22),a.Rb(38,"div",23),a.Rb(39,"form",24,25),a.Rb(41,"div",26),a.Rb(42,"div",22),a.Rb(43,"div",27),a.Rb(44,"input",28,29),a.Zb("ngModelChange",(function(e){return n.name=e})),a.Qb(),a.Rb(46,"label",30),a.nc(47,"Your Name"),a.Qb(),a.mc(48,s,2,0,"span",31),a.Qb(),a.Qb(),a.Rb(49,"div",22),a.Rb(50,"div",27),a.Rb(51,"input",32,33),a.Zb("ngModelChange",(function(e){return n.email=e})),a.Qb(),a.Rb(53,"label",34),a.nc(54,"Your Email"),a.Qb(),a.mc(55,l,2,0,"span",31),a.mc(56,d,2,0,"span",31),a.Qb(),a.Qb(),a.Rb(57,"div",14),a.Rb(58,"div",27),a.Rb(59,"input",35,36),a.Zb("ngModelChange",(function(e){return n.subject=e})),a.Qb(),a.Rb(61,"label",37),a.nc(62,"Subject"),a.Qb(),a.mc(63,m,2,0,"span",31),a.Qb(),a.Qb(),a.Rb(64,"div",14),a.Rb(65,"div",27),a.Rb(66,"textarea",38,39),a.Zb("ngModelChange",(function(e){return n.message=e})),a.Qb(),a.Rb(68,"label",40),a.nc(69,"Message"),a.Qb(),a.mc(70,u,2,0,"span",31),a.Qb(),a.Qb(),a.Rb(71,"div",14),a.Rb(72,"button",41),a.Zb("click",(function(){return n.sendMail()})),a.nc(73,"Send Message"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&e){const e=a.gc(40),t=a.gc(45),r=a.gc(52),o=a.gc(60),b=a.gc(67);a.Bb(7),a.cc("routerLink",a.ec(19,g)),a.Bb(37),a.Eb("has-error",t.touched),a.cc("ngModel",n.name),a.Bb(4),a.cc("ngIf",(null==t.errors?null:t.errors.required)&&t.touched),a.Bb(3),a.Eb("has-error",r.invalid&&r.touched),a.cc("ngModel",n.email),a.Bb(4),a.cc("ngIf",(null==r.errors?null:r.errors.required)&&r.touched),a.Bb(1),a.cc("ngIf",null==r.errors?null:r.errors.pattern),a.Bb(3),a.Eb("has-error",o.touched),a.cc("ngModel",n.subject),a.Bb(4),a.cc("ngIf",(null==o.errors?null:o.errors.required)&&o.touched),a.Bb(3),a.Eb("has-error",b.touched),a.cc("ngModel",n.message),a.Bb(4),a.cc("ngIf",(null==b.errors?null:b.errors.required)&&b.touched),a.Bb(2),a.cc("disabled",!e.valid)}},directives:[o.c,i.i,i.d,i.e,i.a,i.h,i.c,i.f,r.i,i.g],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(n){return new(n||e)},imports:[[o.d.forChild(h)],o.d]}),e})();t.d(n,"ContactModule",(function(){return f}));let f=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(n){return new(n||e)},imports:[[r.b,p,i.b]]}),e})()}}]);