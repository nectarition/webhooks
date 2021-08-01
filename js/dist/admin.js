module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=16)}([function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,e){t.exports=flarum.core.compat["common/components/Select"]},function(t,e){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["common/components/Alert"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["common/models/Forum"]},function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/models/Group"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["tags/common/helpers/tagIcon"]},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(8),r=o.n(s);function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}var u=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).id=a.a.attribute("id"),e.service=a.a.attribute("service"),e.url=a.a.attribute("url"),e.error=a.a.attribute("error"),e.events=a.a.attribute("events"),e.tagId=a.a.attribute("tag_id"),e.groupId=a.a.attribute("group_id"),e.extraText=a.a.attribute("extra_text"),e.isValid=a.a.attribute("is_valid",Boolean),e.usePlainText=a.a.attribute("use_plain_text",Boolean),e.maxPostContentLength=a.a.attribute("max_post_content_length"),e}l(e,t);var o=e.prototype;return o.apiEndpoint=function(){return"/fof/webhooks"+(this.exists?"/"+this.data.id:"")},o.tag=function(){return app.store.getById("tags",this.tagId())},e}(a.a),c=o(9),p=o.n(c),h=o(1),d=o.n(h),f=o(3),b=o.n(f),g=o(2),k=o.n(g),v=o(4),w=o.n(v),x=o(10),_=o.n(x),y=o(11),N=o.n(y),W=o(5),T=o.n(W),P=o(6),C=o.n(P),B=o(7),I=o.n(B),O=o(12),j=o.n(O),F=o(13),L=o.n(F),S=o(14),M=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.webhook=this.attrs.webhook;var o=app.data["fof-webhooks.events"];this.groupId=d()(this.webhook.groupId()||L.a.GUEST_ID),this.extraText=d()(this.webhook.extraText()||""),this.usePlainText=d()(this.webhook.usePlainText()),this.maxPostContentLength=d()(this.webhook.maxPostContentLength()),this.events=function(t,e){var o=Object.keys(t),n=Object.values(t);return o.map("function"==typeof e?e:function(t){return t[e]}).reduce((function(t,e,a){return t[e]||(t[e]={}),t[e][o[a]]=n[a],t}),{})}(o.reduce((function(t,e){var o=/((?:[a-z]+\\?)+?)\\Events?\\([a-z]+)/i.exec(e);if(!o)return t.other.push({full:e,name:e}),t.other=t.other.sort(),t;var n=o[1].toLowerCase().replace("\\",".");return t[n]||(t[n]=[]),t[n]=t[n].concat({full:e,name:o[2]}).sort(),t}),{other:[]}),(function(t){return t.split(".")[0]}))},o.className=function(){return"Modal--medium"},o.title=function(){return app.translator.trans("fof-webhooks.admin.settings.modal.title")},o.content=function(){var t=this,e={2:"fas fa-globe",3:"fas fa-user"},o=app.store.getById("groups",this.groupId());return m("div",{className:"FofWebhooksModal Modal-body"},m("form",{className:"Form",onsubmit:this.onsubmit.bind(this)},m(I.a,{state:this.usePlainText(),onchange:this.usePlainText},app.translator.trans("fof-webhooks.admin.settings.modal.use_plain_text_label")),m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-webhooks.admin.settings.modal.max_post_content_length_label")),m("p",{className:"helpText"},app.translator.trans("fof-webhooks.admin.settings.modal.max_post_content_length_help")),m("input",{type:"number",min:"0",className:"FormControl",bidi:this.maxPostContentLength,onkeypress:this.onkeypress.bind(this)})),m("div",{className:"Form-group hasLoading"},m("label",{className:"label"},app.translator.trans("fof-webhooks.admin.settings.modal.extra_text_label")),m("p",{className:"helpText"},app.translator.trans("fof-webhooks.admin.settings.modal.extra_text_help")),m("input",{type:"text",className:"FormControl",bidi:this.extraText,onkeypress:this.onkeypress.bind(this)})),m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-webhooks.admin.settings.modal.group_label")),m("p",{className:"helpText"},app.translator.trans("fof-webhooks.admin.settings.modal.group_help")),m(T.a,{label:[j()(o.icon()||e[o.id()]),o.namePlural()],buttonClassName:"Button Button--danger"},app.store.all("groups").filter((function(t){return["1","2"].includes(t.id())})).map((function(n){return m(k.a,{active:o.id()===n.id(),disabled:o.id()===n.id(),icon:n.icon()||e[n.id()],onclick:function(){return t.groupId(n.id())}},n.namePlural())})))),m("div",{className:"Form-group Webhook-events"},m("label",{className:"label"},app.translator.trans("fof-webhooks.admin.settings.modal.events_label")),app.translator.trans("fof-webhooks.admin.settings.modal.description"),Object.entries(this.events).map((function(e){var o,n=e[1];return m("div",null,Object.entries(n).sort((o=0,function(t,e){var n=t[o].toUpperCase(),a=e[o].toUpperCase();return n<a?-1:n>a?1:0})).map((function(e){var o=e[0],n=e[1];return n.length?m("div",null,m("h3",null,t.translate(o)),n.map((function(e){return m(I.a,{state:t.webhook.events().includes(e.full),onchange:t.onchange.bind(t,e.full)},t.translate(o,e.name.toLowerCase()))}))):null})))}))),m("div",{className:"Form-group"},m(k.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.isDirty()},app.translator.trans("core.admin.settings.submit_button")))))},o.translate=function(t,e){return void 0===e&&(e="title"),app.translator.trans("fof-webhooks.admin.settings.actions."+t+"."+e)},o.isDirty=function(){return this.extraText()!=this.webhook.extraText()||this.groupId()!==this.webhook.groupId()||this.usePlainText()!==this.webhook.usePlainText()||this.maxPostContentLength()!=this.webhook.maxPostContentLength()},o.onsubmit=function(t){var e=this;return t.preventDefault(),this.loading=!0,this.webhook.save({extraText:this.extraText(),group_id:this.groupId(),use_plain_text:this.usePlainText(),max_post_content_length:this.maxPostContentLength()||0}).then((function(){e.loading=!1,m.redraw()})).catch((function(){e.loading=!1,m.redraw()}))},o.onkeypress=function(t){"Enter"===t.key&&this.onsubmit(t)},o.onchange=function(t,e,o){o.loading=!0;var n=this.webhook.events();return e?n.push(t):n.splice(n.indexOf(t),1),this.attrs.updateWebhook(n).then((function(){o.loading=!1,m.redraw()}))},e}(o.n(S).a),E=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.webhook=this.attrs.webhook,this.services=this.attrs.services,this.url=d()(this.webhook.url()),this.service=d()(this.webhook.service()),this.events=d()(this.webhook.events()),this.error=d()(this.webhook.error()),this.loading={}},n.view=function(){var t=this,e=this.webhook,n=this.services,a=e.service(),s=[e.error&&e.error()];n[a]?e.isValid()?!e.tag()&&e.attribute("tag_id")&&s.push(app.translator.trans("fof-webhooks.admin.errors.tag_invalid")):s.push(app.translator.trans("fof-webhooks.admin.errors.url_invalid")):s.push(app.translator.trans("fof-webhooks.admin.errors.service_not_found",{service:a}));var r=o(15),i=e.tag(),l=!!this.loading.tag_id;return m("div",{className:"Webhooks--row","data-webhook-id":e.id()},m("div",{className:"Webhook-input"},m(w.a,{options:n,value:a,onchange:this.update("service"),disabled:this.loading.service}),m("input",{className:"FormControl Webhook-url",type:"url",value:this.url(),onchange:b()("value",this.update("url")),disabled:this.loading.url,placeholder:app.translator.trans("fof-webhooks.admin.settings.help.url")}),r&&m(T.a,{buttonClassName:"Button",label:i?m("span",null,!l&&r(i,{className:"Button-icon"})," ",i.name()):app.translator.trans("fof-webhooks.admin.settings.item.tag_any_label"),icon:l?"fas fa-spinner fa-spin":!!i||"fas fa-tag",caretIcon:null},m(k.a,{icon:"fas fa-tag",onclick:function(){return t.update("tag_id")(null)}},app.translator.trans("fof-webhooks.admin.settings.item.tag_any_label")),m("hr",null),app.store.all("tags").map((function(e){return m(k.a,{icon:!0,onclick:function(){return t.update("tag_id")(e.id())}},r(e,{className:"Button-icon"})," ",e.name())}))),m(k.a,{type:"button",className:"Button Webhook-button",icon:"fas fa-edit",onclick:function(){return app.modal.show(M,{webhook:e,updateWebhook:t.update("events")})}}),m(k.a,{type:"button",className:"Button Button--warning Webhook-button",icon:"fas fa-times",onclick:this.delete.bind(this)})),!this.events().length&&m(C.a,{className:"Webhook-error",dismissible:!1},app.translator.trans("fof-webhooks.admin.settings.help.disabled")),s.filter(Boolean).map((function(t){return m(C.a,{className:"Webhook-error",type:"error",dismissible:!1},app.translator.trans(t))})))},n.update=function(t){var e=this;return function(o){var n;return e.loading[t]=!0,e.webhook.save((n={},n[t]=o,n)).catch((function(){})).then((function(){e.loading[t]=!1,e[t]&&e[t](o),m.redraw()}))}},n.delete=function(){return this.webhook.delete().then((function(){return m.redraw()}))},e}(N.a),D=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.values={},this.services=app.data["fof-webhooks.services"].reduce((function(t,e){return t[e]=app.translator.trans("fof-webhooks.admin.settings.services."+e),t}),{}),this.newWebhook={service:d()("discord"),url:d()(""),loading:d()(!1)},this.loadingTags=this.isTagsEnabled()},o.oncreate=function(e){var o=this;t.prototype.oncreate.call(this,e),this.loadingTags&&app.store.find("tags").then((function(){o.loadingTags=!1,m.redraw()}))},o.content=function(){var t=this,e=app.store.all("nct_webhooks");return this.loadingTags?m(_.a,null):m("div",{className:"WebhookContent"},m("div",{className:"container"},m("div",{className:"Form-group"},this.buildSettingComponent({type:"boolean",setting:"fof-webhooks.debug",label:app.translator.trans("fof-webhooks.admin.settings.debug_label"),help:app.translator.trans("fof-webhooks.admin.settings.debug_help"),loading:this.loading,onchange:this.updateDebug.bind(this)})),m("hr",null),m("form",null,m("p",{className:"helpText"},app.translator.trans("fof-webhooks.admin.settings.help.general")),m("fieldset",null,m("div",{className:"Webhooks--Container"},e.map((function(e){return m(E,{webhook:e,services:t.services})})),m("div",{className:"Webhooks--row"},m("div",{className:"Webhook-input"},m(w.a,{options:this.services,value:this.newWebhook.service(),onchange:this.newWebhook.service}),m("input",{className:"FormControl Webhook-url",type:"url",placeholder:app.translator.trans("fof-webhooks.admin.settings.help.url"),onchange:b()("value",this.newWebhook.url),onkeypress:this.onkeypress.bind(this)}),m(k.a,{type:"button",loading:this.newWebhook.loading(),className:"Button Button--warning Webhook-button",icon:"fas fa-plus",onclick:this.addWebhook.bind(this)}))))))))},o.addWebhook=function(){var t=this;if(!this.newWebhook.loading())return this.newWebhook.loading(!0),app.store.createRecord("nct_webhooks").save({service:this.newWebhook.service(),url:this.newWebhook.url()}).then((function(){t.newWebhook.service("discord"),t.newWebhook.url(""),t.newWebhook.loading(!1),m.redraw()})).catch((function(){t.newWebhook.loading(!1),m.redraw()}))},o.onkeypress=function(t){"Enter"===t.key&&this.addWebhook()},o.changed=function(){var t=this;return this.fields.some((function(e){return t.values[e]()!==(app.data.settings[t.addPrefix(e)]||"")}))},o.isTagsEnabled=function(){return!!flarum.extensions["flarum-tags"]},o.updateDebug=function(t){return this.setting("fof-webhooks.debug")(t),this.saveSettings(new Event(null))},e}(p.a);app.initializers.add("nct/webhooks",(function(){app.store.models.webhooks=u,r.a.prototype.webhooks=a.a.hasMany("nct_webhooks"),app.extensionData.for("nct-webhooks").registerPage(D)}))}]);
//# sourceMappingURL=admin.js.map