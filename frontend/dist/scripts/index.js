"use strict";(function b(c,d,e){function a(h,i){if(!d[h]){if(!c[h]){var j=typeof require=="function"&&require;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k;}var f=d[h]={exports:{}};c[h][0].call(f.exports,function(b){var d=c[h][1][b];return a(d?d:b);},f,f.exports,b,c,d,e);}return d[h].exports;}for(var g=typeof require=="function"&&require,f=0;f<e.length;f++){a(e[f]);}return a;})({1:[function(a,b,c){'use strict';Object.defineProperty(c,"__esModule",{value:true});c.default=e;var k=a('./utils'),l=d(k);function d(d){if(d&&d.__esModule){return d;}else{var a={};if(d!=null){for(var b in d){if(Object.prototype.hasOwnProperty.call(d,b))a[b]=d[b];}}a.default=d;return a;}}var m=null,n={},o=function e(f){for(var a=arguments.length,b=Array(a>1?a-1:0),c=1;c<a;c++){b[c-1]=arguments[c];}return f in n&&n[f].apply(n,b);},p=void 0,q={on:f,login:g,auth:h,redeem:i};function e(){if(!('WebSocket'in window))throw new Error('Unsupported browser: WebSocket is required!');if(m)return q;var b=location.protocol=='https:'?'wss:':'ws:';m=new WebSocket(b+'//'+location.host+'/ws');m.onopen=function(){p=setInterval(j,30*1000,{action:'ping'});};m.onmessage=function(d,a){var b=l.parseJSON(d.data,{});if(!b.action)return console.warn('Unknown ws message: ',d);console.log('Received ws message. action:',b.action);if(b.action=='connect')return o('connect');if(b.action=='logOn')return o('login',b.result=='success'?null:b.message,b.detail);if(b.action=='authCode')return o('auth');if(b.action=='redeem')return o('redeem',b.detail);if(b.action=='pong')return;};m.onclose=function(){clearInterval(p);o('disconnect');};return q;}function f(c,a){n[c]=a;return q;}function g(c,d){j({action:'logOn',username:c,password:d});return q;}function h(b){j({action:'authCode',authCode:b});return q;}function i(b){j({action:'redeem',keys:b});return q;}function j(c){try{m.send(JSON.stringify(c));}catch(a){console.error('ws send failed:',c,'error: ',a);}}},{"./utils":8}],2:[function(a,b,c){'use strict';Object.defineProperty(c,"__esModule",{value:true});var d=c.strings={title:"Steam Key Redeem",title_login:'Steam Login',disconnect_with_server:'Disconnected with server!',login_failed:'Login Failed!',login_missing_username:'please input your steam username',login_missing_password:'please input your password',login_username:'Steam Username',login_password:'Password',login:'Login',logining:'Logining...',steam_guard:'Steam Guard',steam_guard_from:'You can in your steam mobile app or you email',btn_continue:'Continue',label_keys:'Keys:',redeem:'Redeem',redeem_result:'Redeem Result',redeem_limited:['Fatal Error: Rate Limited. ','You can redeem keys for this account after at least 1 hour.'],table_no:'No.',table_key:'Key',table_status:'Status',table_name:'Name',status_unsupported:['Your browser is unsupported. ','(recommended browser: Chrome, Firefox, Edge)','(and please keep your browser up to date)'],status_connecting:'Connecting to server... ',status_connected:'Connected, you can login now.',status_logined:'You have been login, you can redeem keys now. Username:',status_refresh:'Please refresh this page.',made_by:'Made by ',based_on_project:'based on project ',based_on_project_from:' from ',license_prefix:'Code released under the',icon_from:'Icons from ',framework_on:'Frontend page based on ',fonts_from_1:'Web fonts (',fonts_from_2:') are copied fro',donate_link:'Donate links: ',donation_description:['Your donation is power for open-source ','and free redeeming server.'],'result:InvalidPassword':'Invalid password','result:TwoFactorCodeMismatch':'Invalid two factor code','result:Limited account':'Limited account could not redeeming','result:AuthCodeError':'Auth code is error','result:Waiting':'Waiting...','result:Redeeming':'Redeeming...','result:OK':'Success','result:Fail':'Failed','result:NoDetail':' ','result:AlreadyPurchased':'Already Purchased','result:DuplicateActivationCode':'Duplicate Activation Code','result:BadActivationCode':'Bad Activation Code','result:RateLimited':'Rate Limited','result:DoesNotOwnRequiredApp':'Does Not Own Required App','result:RestrictedCountry':'Restricted Country'};},{}],3:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:true});c.EN=undefined;c.updateUI=e;c.get=f;c.result=g;c.getLanguageName=h;c.setLanguage=i;var j=a("./zh-CN"),k=d(j),l=a("./en"),m=d(l);function d(d){if(d&&d.__esModule){return d;}else{var a={};if(d!=null){for(var b in d){if(Object.prototype.hasOwnProperty.call(d,b))a[b]=d[b];}}a.default=d;return a;}}var n='steam-key-redeem-language',o=c.EN='en',p={'zh-CN':k,en:m},q=p[o],r=localStorage.getItem(n)||o,s=p[r]||q;Object.keys(p).map(function(b){return p[b].strings;}).forEach(function(c){return Object.keys(c).filter(function(a){return Array.isArray(c[a]);}).forEach(function(a){return c[a]=c[a].join('');});});e();function e(){for(var i=document.querySelectorAll('[data-i18n]'),a=i.length,b=q.strings,c=s.strings,d=0;d<a;d++){var e=i[d],f=e.getAttribute('data-i18n'),g=c[f]||b[f];if(!g)continue;if(e.tagName=='INPUT'||e.tagName=='TEXTAREA')e.value=g;else e.innerHTML=g;}}function f(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return s.strings[b]||q.strings[b]||b;}function g(){var c=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'',a="result:"+c;return s.strings[a]||q.strings[a]||c;}function h(){return r;}function i(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:o;if(!(b in p))return;r=b;s=p[b];e();localStorage.setItem(n,b);}},{"./en":2,"./zh-CN":4}],4:[function(a,b,c){'use strict';Object.defineProperty(c,"__esModule",{value:true});var d=c.strings={title:"Steam Key 批量激活工具",title_login:'登录 Steam',disconnect_with_server:'与服务器断开连接! ',login_failed:'登录失败!',login_missing_username:'请输入你的Steam账号',login_missing_password:'请输入你的Steam密码',login_username:'用户名',login_password:'密码',login:'登录',logining:'登录中...',steam_guard:'Steam 令牌',steam_guard_from:'你可以从你的手机APP或电子邮箱中找到',btn_continue:'继续登录',label_keys:'激活码(支持很多很多个):',redeem:'激活',redeem_result:'激活结果',redeem_limited:['致命错误: Steam 限制了你的激活(短时间内激活/失败次数太多) ','建议对这个账号的游戏激活在一个小时后再进行'],table_no:'No.',table_key:'Key',table_status:'状态',table_name:'信息',status_unsupported:['你的浏览器太老了,此工具无法支持','(推荐浏览器:Chrome, Firefox, Edge)','(请保持你的浏览器是最新的版本)'],status_connecting:'正在连接到服务器...',status_connected:'已连接,现在你可以登录你的Steam账号了.',status_logined:'已登录,输入Key点击"激活"吧, 用户名: ',status_refresh:'请刷新过当前页面.',made_by:'本项目由我: ',based_on_project:'基于项目',based_on_project_from:' 开发, 原项目作者: ',license_prefix:'本项目开源协议:',icon_from:'图标来源 ',framework_on:'前端页面基于 ',fonts_from_1:'使用了字体 (',fonts_from_2:') 来源于',donate_link:'捐赠链接: ',donation_description:['你的捐赠能撑起开源的美好明天, ','也能让免费的公用SteamKey激活服务器走的更远'],'result:InvalidPassword':'无效的密码','result:TwoFactorCodeMismatch':'安全令错误','result:Limited account':'受限用户暂无法使用','result:AuthCodeError':'验证码有误','result:Waiting':'排队中...','result:Redeeming':'兑换中...','result:OK':'成功','result:Fail':'失败','result:NoDetail':' ','result:AlreadyPurchased':'已拥有','result:DuplicateActivationCode':'重复激活','result:BadActivationCode':'无效激活码','result:RateLimited':'次数上限','result:DoesNotOwnRequiredApp':'缺少主游戏','result:RestrictedCountry':'区域限制'};},{}],5:[function(a,b,c){"use strict";var n=a("./api"),o=e(n),p=a("./utils"),q=d(p),r=a("./status"),s=d(r),t=a("./redeem"),u=d(t),v=a("./i18n/index"),w=d(v);function d(d){if(d&&d.__esModule){return d;}else{var a={};if(d!=null){for(var b in d){if(Object.prototype.hasOwnProperty.call(d,b))a[b]=d[b];}}a.default=d;return a;}}function e(b){return b&&b.__esModule?b:{default:b};}var x='#modal2FA',y='#formLogin',z='#form2fa',A='#inputUser',B='#inputPasswd',C='#inputAuthCode',D='#inputKeys',E='#btnLogin',F='#btnLogining',G='#btnRedeem',H='#btnSwitchLanguage',I='#alertLoginFailed',J='#txtLoginFailed',K='',L='';$(f);function f(){(0,o.default)().on('connect',s.connected).on('disconnect',function(){return s.broken(w.get('disconnect_with_server'));}).on('auth',function(){return $(x).modal({keyboard:false,backdrop:'static'});}).on('redeem',function(b){return u.onRedeem(b);}).on('login',h);u.bindAPI((0,o.default)().redeem);u.bindStringProvider(w.result);g();s.connecting();$(y).submit(j);$(z).submit(i);$(G).click(function(){var b=q.extractKeysFromText(k(D));if(b.length<1)return;$(D).val('');u.add(b);});$(H).click(function(){var b=$(H);w.setLanguage(b.attr('data-lang')||w.EN);g();});$(x).on('shown.bs.modal',function(){return $(C).val('').focus();});}function g(){var c=$(H),a=w.getLanguageName();c.attr('data-lang',a==w.EN?"zh-CN":"en");c.text(a==w.EN?"中文":"English");}function h(d,a){$(F).hide();$(E).show();if(d){console.error('login failed:',d);var b=String(d);if(b.match(/password/i))return m(B,w.result(b));if(b.match(/account/i))return m(A,w.result(b));$(J).text(w.result(b));$(I).show();return;}console.log('login success:',a);s.logined(K+" "+a.steamID);}function i(c){c.preventDefault();var a=k(C).trim().toUpperCase();if(a){(0,o.default)().auth(a);$(x).modal('hide');}}function j(b){b.preventDefault();$(I).hide();l(A);l(B);K=k(A).trim();L=k(B).trim();if(!K)return m(A,w.get('login_missing_username'));if(!L)return m(B,w.get('login_missing_password'));(0,o.default)().login(K,L);$(E).hide();$(F).show();}function k(b){return String($(b).val()||"");}function l(b){$(b).removeClass('is-invalid').siblings('.form-control-feedback').text('');}function m(c,a){$(c).addClass('is-invalid').focus().siblings('.form-control-feedback').text(a);}},{"./api":1,"./i18n/index":3,"./redeem":6,"./status":7,"./utils":8}],6:[function(a,b,c){'use strict';Object.defineProperty(c,"__esModule",{value:true});c.onRedeem=g;c.bindAPI=h;c.bindStringProvider=j;c.bindStopNowCallback=k;c.add=l;var m='#cardResult',n='#tbResult',o='#txtRedeemFatal',p='RateLimited',q=9*1000,r=1*1000,s=[],t={},u=0,v=void 0,w=null,x=function b(c){return void c;},y=function b(c){return c;};function i(){var j=Date.now(),a=true;if(j>u+q&&s.filter(function(b){return b.status=='Redeeming';}).length==0){var b=true,k=false,d=undefined;try{for(var e=s[Symbol.iterator](),l,g;!(b=(l=e.next()).done);b=true){g=l.value;if(g.status=='Waiting'){x([g.key]);u=j;a=false;g.status='Redeeming';f();break;}}}catch(b){k=true;d=b;}finally{try{if(!b&&e.return){e.return();}}finally{if(k){throw d;}}}if(a){v=void 0;return;}}v=setTimeout(i,r);}function d(){if(typeof v=='undefined')v=setTimeout(i,r);}function e(){clearTimeout(v);v=void 0;$(o).show();w&&w();}var z=$('<a target="_blank"></a>');function f(){$(n).html(s.map(function(l){var a='',b='span';if(l.status=='OK'||l.status=='Fail'){b='b';a=l.status=='OK'?'text-primary':'text-danger';}var c='--';if(l.packages.length){c='';var d=true,m=false,f=undefined;try{for(var g=l.packages[Symbol.iterator](),h;!(d=(h=g.next()).done);d=true){var i=h.value,j=z.clone();j.attr('href','https://steamdb.info/sub/'+i.subId+'/');j.text('('+i.subId+') '+i.name);c+=j.prop('outerHTML')+'<br/>';}}catch(b){m=true;f=b;}finally{try{if(!d&&g.return){g.return();}}finally{if(m){throw f;}}}}return'<tr>\n\t\t\t<td>'+l.no+'</td>\n\t\t\t<td><code>'+l.key+'</code></td>\n\t\t\t<td class="'+a+'">\n\t\t\t\t<'+b+'>'+y(l.status)+'</'+b+'>\n\t\t\t\t'+y(l.resultMsg)+'\n\t\t\t</td>\n\t\t\t<td>'+c+'</td>\n\t\t</tr>';}).join('\n'));}function g(c){s.filter(function(a){return a.key==c.key;}).forEach(function(a){a.status=c.result;a.resultMsg=c.details;a.packages=Object.keys(c.packages).map(function(a){return{subId:a,name:c.packages[a]};});});f();if(c.result==p)e();}function h(b){x=b;}function j(b){y=b;}function k(b){w=b;}function l(i){console.log('adding '+i.length+' keys.');var a=0,b=true,j=false,k=undefined;try{for(var e=i[Symbol.iterator](),l,g;!(b=(l=e.next()).done);b=true){g=l.value;if(g in t){console.log('key: (duplicated)',g);continue;}console.log('key:',g);a++;t[g]=true;s.push({no:s.length,key:g,status:'Waiting',resultMsg:'',packages:[]});}}catch(b){j=true;k=b;}finally{try{if(!b&&e.return){e.return();}}finally{if(j){throw k;}}}if(a){$(m).show();f();d();}}},{}],7:[function(a,b,c){'use strict';Object.defineProperty(c,"__esModule",{value:true});var e=c.connecting=function a(){return d('statusConnecting');},f=c.connected=function a(){d('statusConnected');$('#cardLogin').show();},g=c.logined=function b(c){d('statusLogined');$('#txtUsername').text(c);$('#cardLogin').hide();$('#cardInput').show();},h=c.broken=function b(c){d('statusBroken');$('#txtBrokenReason').text(c);$('#cardLogin').hide();$('#cardInput').hide();};function d(b){$('.card-status').hide().filter('#'+b).show();}},{}],8:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:true});c.extractKeysFromText=d;c.parseJSON=e;function d(e){e=e.trim();var a=/([0-9,A-Z]{5}\-){2,4}[0-9,A-Z]{5}/g,b=[],c=null;while(!!(c=a.exec(e))){b.push(c[0]);}return b;}function e(c,a){try{return JSON.parse(c);}catch(b){return a;}}},{}]},{},[5]);