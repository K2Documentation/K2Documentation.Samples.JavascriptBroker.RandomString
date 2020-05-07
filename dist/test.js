"use strict";require("core-js/modules/es.object.to-string"),require("core-js/modules/es.promise"),require("core-js/modules/web.queue-microtask"),require("regenerator-runtime/runtime");var e,r,t,n,s,o=(e=require("ava"))&&"object"==typeof e&&"default"in e?e.default:e;function a(e,r,t,n,s,o,a){try{var i=e[o](a),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(n,s)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var o=e.apply(r,t);function i(e){a(o,n,s,i,u,"next",e)}function u(e){a(o,n,s,i,u,"throw",e)}i(void 0)}))}}function u(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,r){global[e]=r}require("@k2oss/k2-broker-core/test-framework"),require("./index"),o("describe returns the hardcoded instance",(r=i(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,p("postSchema",(function(e){t=e})),e.next=4,Promise.resolve(ondescribe());case 4:r.deepEqual(t,{objects:{randomstring:{displayName:"Random String",description:"Utility for generating random strings",properties:{returnString:{displayName:"Return string",type:"string"}},methods:{generateCode:{displayName:"Generate Access Code",type:"execute",parameters:{pCharacters:{displayName:"Length",description:"The number of characters 5-8 in the returned string",type:"number"}},requiredParameters:["pCharacters"],outputs:["returnString"]}}}}}),r.pass();case 6:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})),o("execute fails with the wrong parameters",(t=i(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.throwsAsync(Promise.resolve(onexecute("test1","unused",{},{},{})));case 2:return t=e.sent,r.deepEqual(t.message,"The object test1 is not supported."),e.next=6,r.throwsAsync(Promise.resolve(onexecute("randomString","test2",{},{},{})));case 6:t=e.sent,r.deepEqual(t.message,"The method test2 is not supported."),r.pass();case 9:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})),o("execute passes with method params",(n=i(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){t=e},t=null,p("postResult",n),e.next=5,Promise.resolve(onexecute("randomstring","getParams",{pid:456},{},{}));case 5:r.deepEqual(t,{id:456}),r.pass();case 7:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})),o("execute passes",(s=i(regeneratorRuntime.mark((function e(r){var t,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(e){n=e},t=null,p("XMLHttpRequest",function(){function e(){u(this,e),t=this.recorder={},this.recorder.headers={}}var r,n,s;return r=e,(n=[{key:"open",value:function(e,r){this.recorder.opened={method:e,url:r}}},{key:"setRequestHeader",value:function(e,r){this.recorder.headers[e]=r}},{key:"send",value:function(){var e=this;queueMicrotask((function(){e.readyState=4,e.status=200,e.responseText=JSON.stringify({id:123,userId:51,title:"Groceries",completed:!1}),e.onreadystatechange(),delete e.responseText}))}}])&&c(r.prototype,n),s&&c(r,s),e}()),n=null,p("postResult",s),e.next=8,Promise.resolve(onexecute("todo","get",{},{id:123},{}));case 8:r.deepEqual(t,{opened:{method:"GET",url:"https://jsonplaceholder.typicode.com/todos/123"},headers:{test:"test value"}}),r.deepEqual(n,{id:123,userId:51,title:"Groceries",completed:!1}),r.pass();case 11:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)}));
//# sourceMappingURL=test.js.map
