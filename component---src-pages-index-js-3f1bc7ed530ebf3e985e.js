(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"52VX":function(e,t,a){},"5pF8":function(e,t,a){"use strict";a("a1Th"),a("Btvt"),a("I5cv"),a("OG14"),a("f3/d");var n=a("q1tI"),s=a.n(n),l=(a("N6Vo"),a("vDqi")),i=a.n(l),o=a("yjgI"),r=a.n(o);var d=function(e){var t,a;a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=l;function l(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={form:{nombre:{value:"",isValid:!1,isEmpty:!1},telefono:{value:"",isValid:!1,isEmpty:!1},correo:{value:"",isValid:!1,isEmpty:!1},motivo:{value:"",isValid:!1,isEmpty:!1},notas:{value:"",isValid:!1,isEmpty:!1}},isFormValid:!1,loading:!1,done:!1,captcha:!1},t.handleInputChange=function(e){var a=e.target.name,n=e.target.value,s=e.target.type,l=t.state.form;l[a].value=n,l[a].isValid=t.isInputValid(n,s),l[a].isEmpty=t.isInputEmpty(n);var i=t.isformValid(t.state.form,t.state.captcha);t.setState({form:l,isFormValid:i})},t.sendEmail=function(){t.state.isFormValid&&(t.setState({loading:!0}),i.a.post("https://0gza7dizjd.execute-api.us-west-2.amazonaws.com/PROD/SendEmail?name="+t.state.form.nombre.value+"&message="+t.state.form.notas.value+"&targetAddress=fpgm14@yahoo.es&email="+t.state.form.correo.value+". Teléfono:"+t.state.form.telefono.value+". Motivo:"+t.state.form.motivo.value,{name:t.state.form.nombre.value,message:t.state.form.notas.value,targetAddress:"fpgm14@yahoo.es",email:t.state.form.correo.value+"<br>Teléfono:"+t.state.form.telefono.value+"<br>Motivo"+t.state.form.motivo.value},{headers:{"Content-Type":"application/json"}}).then((function(e){t.setState({done:!0,loading:!1})})))},t.onVerify=function(e){var a=t.state.form,n=t.isformValid(a,!0);t.setState({isFormValid:n,captcha:!0})},t}var o=l.prototype;return o.isInputValid=function(e,t){return!!e.trim()&&("email"!==t||e.search("@")>0)},o.isformValid=function(e,t){var a=!0;for(var n in e)a=a&&e[n].isValid;return a=a&&t},o.isInputEmpty=function(e){return!!e.trim()},o.showForm=function(){return!this.state.loading&&!this.state.done},o.showLoading=function(){return this.state.loading&&!this.state.done},o.showDone=function(){return!this.state.loading&&this.state.done},o.render=function(){return s.a.createElement("div",{className:"scheduleddate"},s.a.createElement("div",{className:this.showForm()?"scheduleddate__form-container":"scheduleddate__display-none"},s.a.createElement("div",{className:"scheduleddate__title-wrap"},s.a.createElement("div",{className:"scheduleddate__alert"},s.a.createElement("p",{className:"scheduleddate__alert-important"},"!"),s.a.createElement("p",null," Recuerda usar este formulario para apartar citas. No se responderán consultas médicas por este medio.")),s.a.createElement("h3",{className:"scheduleddate__title"},"Aparta tu cita")),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"scheduleddate__input-wrap"},s.a.createElement("input",{className:this.state.form.nombre.isEmpty?"scheduleddate__input scheduleddate__input-valid":"scheduleddate__input",type:"text",name:"nombre",value:this.state.form.nombre.value,onChange:this.handleInputChange,required:!0}),s.a.createElement("label",{className:this.state.form.nombre.isEmpty?"scheduleddate__label scheduleddate__label-valid":"scheduleddate__label"},"Nombre")),s.a.createElement("div",{className:"scheduleddate__input-wrap"},s.a.createElement("input",{className:this.state.form.telefono.isEmpty?"scheduleddate__input scheduleddate__input-valid":"scheduleddate__input",type:"text",name:"telefono",value:this.state.form.telefono.value,onChange:this.handleInputChange,required:!0}),s.a.createElement("label",{className:this.state.form.telefono.isEmpty?"scheduleddate__label scheduleddate__label-valid":"scheduleddate__label"},"Teléfono")),s.a.createElement("div",{className:"scheduleddate__input-wrap"},s.a.createElement("input",{className:this.state.form.correo.isEmpty?"scheduleddate__input scheduleddate__input-valid":"scheduleddate__input",type:"email",name:"correo",value:this.state.form.correo.value,onChange:this.handleInputChange,required:!0}),s.a.createElement("label",{className:this.state.form.correo.isEmpty?"scheduleddate__label scheduleddate__label-valid":"scheduleddate__label"},"Correo")),s.a.createElement("div",{className:"scheduleddate__input-wrap"},s.a.createElement("input",{className:this.state.form.motivo.isEmpty?"scheduleddate__input scheduleddate__input-valid":"scheduleddate__input",type:"text",name:"motivo",value:this.state.form.motivo.value,onChange:this.handleInputChange,required:!0}),s.a.createElement("label",{className:this.state.form.motivo.isEmpty?"scheduleddate__label scheduleddate__label-valid":"scheduleddate__label"},"Motivo")),s.a.createElement("div",{className:"scheduleddate__input-wrap"},s.a.createElement("textarea",{className:this.state.form.notas.isEmpty?"scheduleddate__input scheduleddate__input-valid":"scheduleddate__input",type:"text",name:"notas",value:this.state.form.notas.value,onChange:this.handleInputChange,required:!0}),s.a.createElement("label",{className:this.state.form.notas.isEmpty?"scheduleddate__label scheduleddate__label-valid":"scheduleddate__label"},"Comentarios"))),s.a.createElement(r.a,{className:"scheduleddate__recaptcha",sitekey:"6Ld5c2YUAAAAAC6y_aK9bE43TOB552ZPcCRG-Kzc",onVerify:this.onVerify}),s.a.createElement("button",{onClick:this.sendEmail,className:this.state.isFormValid?"scheduleddate__submit-button scheduleddate__submit-button-enabled":"scheduleddate__submit-button scheduleddate__submit-button-disabled"},"Submit")),s.a.createElement("div",{className:this.showLoading()?"scheduleddate__loading":"scheduleddate__display-none"},s.a.createElement("img",{className:"header__title-flower",alt:"cargando",src:"/images/loading.gif"})),s.a.createElement("div",{className:this.showDone()?"scheduleddate__done":"scheduleddate__display-none"},s.a.createElement("h3",{className:"scheduleddate__thankyou"},"Muchas gracias por contactarme!"),s.a.createElement("div",{className:"scheduleddate__thankyousub"},"Tu correo se ha enviado exitosamente y me pondré en contacto pronto. ")))},l}(s.a.Component);t.a=d},ErLL:function(e,t,a){},N6Vo:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),l=a("8k0H"),i=a("vrFN"),o=(a("52VX"),function(){return s.a.createElement("div",{className:"aboutme"},s.a.createElement("div",{className:"aboutme__wrapper"},s.a.createElement("div",{className:"aboutme__image-wrap"},s.a.createElement("img",{className:"aboutme__image",alt:"foto de perfil",src:"/images/profile-photo.png"})),s.a.createElement("div",{className:"aboutme__content"},s.a.createElement("h3",{className:"aboutme__title"},"Perfil Profesional"),s.a.createElement("p",{className:"aboutme__text"}," Ginecóloga de la Universidad El Bosque, con 12 años de experiencia profesional, respaldada por actividad en consulta privada y vinculación a Medicina prepagada, Planes de Atención Complementaria, EPS y Hospitales del Distrito.",s.a.createElement("br",null),s.a.createElement("br",null),"Actualmente prestando servicios en consultorio privado. Convenios: Famisanar PAC, Protegemos, seguros Mapfre, Liberty seguros, COOMEVA prepagada, DHI seguros. ",s.a.createElement("br",null),s.a.createElement("br",null),"Actualmente prestando servicios en el consultorio privado de: consulta de ginecología, asesoría en planificación familiar (colocación de dispositivo intrauterino sencillo, dispositivo intrauterino hormonal, método intradermico, presentación de los diferentes anticonceptivos orales determinando el decuado para cada paciente, etc.) Consulta de prevención de cáncer de cuello uterino (patología cervical y colposcopia)"))))});a("a1Th"),a("Btvt"),a("I5cv"),a("ErLL");var r=function(e){var t,a;a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=l;function l(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).arrayClients=[{author:"Ana Molina",comment:"La Dra. Patricia Gómez, es muy querida, muy humana y su atención es excelente"},{author:"Paola",comment:"Es muy cumplida y me atendieron con respeto y cuidado, lo que es muy difícil con otros ginecólogos"},{author:"Joissy Nieto",comment:"Gran profesional, honesta en sus dictámenes y respetusa del tiempo de sus pacientes"}],t.currentIndex=0,t.state={currentClient:t.arrayClients[0]},t}var i=l.prototype;return i.componentDidMount=function(){this.startSlide()},i.startSlide=function(){var e=this;window.setInterval((function(){e.currentIndex=e.getNextIndex(),e.changeCurrentClient(e.currentIndex)}),2500)},i.changeCurrentClient=function(e){this.setState({currentClient:this.arrayClients[e]})},i.getNextIndex=function(){return(this.currentIndex+1)%this.arrayClients.length},i.render=function(){return s.a.createElement("div",{className:"clientslider"},s.a.createElement("div",{className:"clientslider__wrapper"},s.a.createElement("h3",{className:"clientslider__title"},"Nuestros clientes"),s.a.createElement("div",{className:"clientslider__comment clientslider__fadein-animation"},this.state.currentClient.comment),s.a.createElement("div",{className:"clientslider__triangle clientslider__fadein-animation"}),s.a.createElement("div",{className:"clientslider__author clientslider__fadein-animation"}," ",this.state.currentClient.author)))},l}(s.a.Component),d=a("5pF8");a("YLUN"),t.default=function(){return s.a.createElement(l.a,null,s.a.createElement(i.a,{lang:"es",description:"Doctora experta en ginecologia",title:"Home"}),s.a.createElement(o,null),s.a.createElement(r,null),s.a.createElement(d.a,null))}},YLUN:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3f1bc7ed530ebf3e985e.js.map