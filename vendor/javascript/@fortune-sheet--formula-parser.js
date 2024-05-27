import t from"tiny-emitter";import*as e from"@formulajs/formulajs";
/**
 * Convert value into number.
 *
 * @param {String|Number} number
 * @returns {*}
 */function toNumber(t){var e;typeof t==="number"?e=t:typeof t==="string"&&(e=t.indexOf(".")>-1?parseFloat(t):parseInt(t,10));return e}
/**
 * Invert provided number.
 *
 * @param {Number} number
 * @returns {Number} Returns inverted number.
 */function invertNumber(t){return-1*toNumber(t)}var r;function _defineProperty(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:true,configurable:true,writable:true}):t[e]=r;return t}var n="ERROR";var a="DIV/0";var i="NAME";var s="N/A";var l="NULL";var u="NUM";var c="REF";var h="VALUE";var f=(r={},_defineProperty(r,n,"#ERROR!"),_defineProperty(r,a,"#DIV/0!"),_defineProperty(r,i,"#NAME?"),_defineProperty(r,s,"#N/A"),_defineProperty(r,l,"#NULL!"),_defineProperty(r,u,"#NUM!"),_defineProperty(r,c,"#REF!"),_defineProperty(r,h,"#VALUE!"),r);
/**
 * Return error type based on provided error id.
 *
 * @param {String} type Error type.
 * @returns {String|null} Returns error id.
 */function error(t){var e;t=(t+"").replace(/#|!|\?/g,"");f[t]&&(e=f[t]);return e||null}
/**
 * Check if error type is strict valid with knows errors.
 *
 * @param {String} Error type.
 * @return {Boolean}
 */function isValidStrict(t){var e=false;for(var r in f)if(Object.prototype.hasOwnProperty.call(f,r)&&f[r]===t){e=true;break}return e}var y="+";function func$c(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=r.reduce((function(t,e){return t+toNumber(e||0)}),toNumber(t||0));if(isNaN(a))throw Error(h);return a}func$c.SYMBOL=y;var p="&";function func$b(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce((function(t,e){return t+e.toString()}),"")}func$b.SYMBOL=p;var b="/";function func$a(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var i=r.reduce((function(t,e){return t/toNumber(e)}),toNumber(t));return i===Infinity?a:isNaN(i)?h:i}func$a.SYMBOL=b;var v="=";function func$9(t,e){return t===e}func$9.SYMBOL=v;var _=Object.keys(e);var g=_;function func$8(t){return function __formulaFunction(){t=t.toUpperCase();var r=t.split(".");var n=false;var a;if(r.length===1){if(e[r[0]]){n=true;a=e[r[0]].apply(e,arguments)}}else{var s=r.length;var l=0;var u=e;while(l<s){u=u[r[l]];l++;if(!u){u=null;break}}if(u){n=true;a=u.apply(void 0,arguments)}}if(!n)throw Error(i);return a}}func$8.isFactory=true;func$8.SYMBOL=g;var m=">";function func$7(t,e){return t>e}func$7.SYMBOL=m;var d=">=";function func$6(t,e){return t>=e}func$6.SYMBOL=d;var $="<";function func$5(t,e){return t<e}func$5.SYMBOL=$;var O="<=";function func$4(t,e){return t<=e}func$4.SYMBOL=O;var A="-";function func$3(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=r.reduce((function(t,e){return t-toNumber(e)}),toNumber(t));if(isNaN(a))throw Error(h);return a}func$3.SYMBOL=A;var k="*";function func$2(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=r.reduce((function(t,e){return t*toNumber(e)}),toNumber(t));if(isNaN(a))throw Error(h);return a}func$2.SYMBOL=k;var L="<>";function func$1(t,e){return t!==e}func$1.SYMBOL=L;var S="^";function func(t,e){var r=Math.pow(toNumber(t),toNumber(e));if(isNaN(r))throw Error(h);return r}func.SYMBOL=S;function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray$2(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray$2(t,e){if(t){if(typeof t==="string")return _arrayLikeToArray$2(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);r==="Object"&&t.constructor&&(r=t.constructor.name);return r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray$2(t,e):void 0}}function _iterableToArray(t){if(typeof Symbol!=="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray$2(t)}function _arrayLikeToArray$2(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=Object.create(null);
/**
 * Evaluate values by operator id.git
 *
 * @param {String} operator Operator id.
 * @param {Array} [params=[]] Arguments to evaluate.
 * @returns {*}
 */function evaluateByOperator(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];t=t.toUpperCase();if(!E[t])throw Error(i);return E[t].apply(E,_toConsumableArray(e))}
/**
 * Register operator.
 *
 * @param {String|Array} symbol Symbol to register.
 * @param {Function} func Logic to register for this symbol.
 */function registerOperation(t,e){Array.isArray(t)||(t=[t.toUpperCase()]);t.forEach((function(t){e.isFactory?E[t]=e(t):E[t]=e}))}registerOperation(func$c.SYMBOL,func$c);registerOperation(func$b.SYMBOL,func$b);registerOperation(func$a.SYMBOL,func$a);registerOperation(func$9.SYMBOL,func$9);registerOperation(func.SYMBOL,func);registerOperation(func$8.SYMBOL,func$8);registerOperation(func$7.SYMBOL,func$7);registerOperation(func$6.SYMBOL,func$6);registerOperation(func$5.SYMBOL,func$5);registerOperation(func$4.SYMBOL,func$4);registerOperation(func$2.SYMBOL,func$2);registerOperation(func$1.SYMBOL,func$1);registerOperation(func$3.SYMBOL,func$3);var w=function o(t,e,r,n){for(r=r||{},n=t.length;n--;r[t[n]]=e);return r},x=[1,5],I=[1,8],N=[1,6],T=[1,7],P=[1,9],B=[1,14],R=[1,15],M=[1,16],V=[1,12],C=[1,13],j=[1,17],Y=[1,19],F=[1,20],U=[1,21],z=[1,22],Z=[1,23],D=[1,24],H=[1,25],W=[1,26],G=[1,27],X=[1,28],q=[5,9,10,11,13,14,15,16,17,18,19,20,29,30],J=[5,9,10,11,13,14,15,16,17,18,19,20,29,30,32],K=[5,9,10,11,13,14,15,16,17,18,19,20,29,30,34],Q=[5,10,11,13,14,15,16,17,29,30],tt=[5,10,13,14,15,16,29,30],et=[5,10,11,13,14,15,16,17,18,19,29,30],rt=[13,29,30];var nt={trace:function trace(){},yy:{},symbols_:{error:2,expressions:3,expression:4,EOF:5,variableSequence:6,number:7,STRING:8,"&":9,"=":10,"+":11,"(":12,")":13,"<":14,">":15,NOT:16,"-":17,"*":18,"/":19,"^":20,FUNCTION:21,expseq:22,cell:23,ABSOLUTE_CELL:24,RELATIVE_CELL:25,MIXED_CELL:26,":":27,ARRAY:28,";":29,",":30,VARIABLE:31,DECIMAL:32,NUMBER:33,"%":34,ERROR:35,$accept:0,$end:1},terminals_:{5:"EOF",8:"STRING",9:"&",10:"=",11:"+",12:"(",13:")",14:"<",15:">",16:"NOT",17:"-",18:"*",19:"/",20:"^",21:"FUNCTION",24:"ABSOLUTE_CELL",25:"RELATIVE_CELL",26:"MIXED_CELL",27:":",28:"ARRAY",29:";",30:",",31:"VARIABLE",32:"DECIMAL",33:"NUMBER",34:"%",35:"ERROR"},productions_:[0,[3,2],[4,1],[4,1],[4,1],[4,3],[4,3],[4,3],[4,3],[4,4],[4,4],[4,4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,3],[4,4],[4,1],[4,1],[4,2],[23,1],[23,1],[23,1],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[22,1],[22,1],[22,3],[22,3],[6,1],[6,3],[7,1],[7,3],[7,2],[2,1]],performAction:function anonymous(t,e,r,n,a,i,s){var l=i.length-1;switch(a){case 1:return i[l-1];case 2:this.$=n.callVariable(i[l][0]);break;case 3:this.$=n.toNumber(i[l]);break;case 4:this.$=n.trimEdges(i[l]);break;case 5:this.$=n.evaluateByOperator("&",[i[l-2],i[l]]);break;case 6:this.$=n.evaluateByOperator("=",[i[l-2],i[l]]);break;case 7:this.$=n.evaluateByOperator("+",[i[l-2],i[l]]);break;case 8:this.$=i[l-1];break;case 9:this.$=n.evaluateByOperator("<=",[i[l-3],i[l]]);break;case 10:this.$=n.evaluateByOperator(">=",[i[l-3],i[l]]);break;case 11:this.$=n.evaluateByOperator("<>",[i[l-3],i[l]]);break;case 12:this.$=n.evaluateByOperator("NOT",[i[l-2],i[l]]);break;case 13:this.$=n.evaluateByOperator(">",[i[l-2],i[l]]);break;case 14:this.$=n.evaluateByOperator("<",[i[l-2],i[l]]);break;case 15:this.$=n.evaluateByOperator("-",[i[l-2],i[l]]);break;case 16:this.$=n.evaluateByOperator("*",[i[l-2],i[l]]);break;case 17:this.$=n.evaluateByOperator("/",[i[l-2],i[l]]);break;case 18:this.$=n.evaluateByOperator("^",[i[l-2],i[l]]);break;case 19:var u=n.invertNumber(i[l]);this.$=u;isNaN(this.$)&&(this.$=0);break;case 20:u=n.toNumber(i[l]);this.$=u;isNaN(this.$)&&(this.$=0);break;case 21:this.$=n.callFunction(i[l-2]);break;case 22:this.$=n.callFunction(i[l-3],i[l-1]);break;case 26:case 27:case 28:this.$=n.cellValue(i[l]);break;case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:this.$=n.rangeValue(i[l-2],i[l]);break;case 38:case 42:this.$=[i[l]];break;case 39:this.$=n.trimEdges(t).split(",");break;case 40:case 41:i[l-2].push(i[l]);this.$=i[l-2];break;case 43:this.$=Array.isArray(i[l-2])?i[l-2]:[i[l-2]];this.$.push(i[l]);break;case 44:this.$=i[l];break;case 45:this.$=(i[l-2]+"."+i[l])*1;break;case 46:this.$=i[l-1]*.01;break;case 47:this.$=n.throwError(i[l]);break}},table:[{2:11,3:1,4:2,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{1:[3]},{5:[1,18],9:Y,10:F,11:U,14:z,15:Z,16:D,17:H,18:W,19:G,20:X},w(q,[2,2],{32:[1,29]}),w(q,[2,3],{34:[1,30]}),w(q,[2,4]),{2:11,4:31,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:32,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:33,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{12:[1,34]},w(q,[2,23]),w(q,[2,24],{2:35,35:j}),w(J,[2,42]),w(K,[2,44],{32:[1,36]}),w(q,[2,26],{27:[1,37]}),w(q,[2,27],{27:[1,38]}),w(q,[2,28],{27:[1,39]}),w([5,9,10,11,13,14,15,16,17,18,19,20,29,30,35],[2,47]),{1:[2,1]},{2:11,4:40,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:41,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:42,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:45,6:3,7:4,8:x,10:[1,43],11:I,12:N,15:[1,44],17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:47,6:3,7:4,8:x,10:[1,46],11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:48,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:49,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:50,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:51,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:52,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{31:[1,53]},w(K,[2,46]),{9:Y,10:F,11:U,13:[1,54],14:z,15:Z,16:D,17:H,18:W,19:G,20:X},w(Q,[2,19],{9:Y,18:W,19:G,20:X}),w(Q,[2,20],{9:Y,18:W,19:G,20:X}),{2:11,4:57,6:3,7:4,8:x,11:I,12:N,13:[1,55],17:T,21:P,22:56,23:10,24:B,25:R,26:M,28:[1,58],31:V,33:C,35:j},w(q,[2,25]),{33:[1,59]},{24:[1,60],25:[1,61],26:[1,62]},{24:[1,63],25:[1,64],26:[1,65]},{24:[1,66],25:[1,67],26:[1,68]},w(q,[2,5]),w([5,10,13,29,30],[2,6],{9:Y,11:U,14:z,15:Z,16:D,17:H,18:W,19:G,20:X}),w(Q,[2,7],{9:Y,18:W,19:G,20:X}),{2:11,4:69,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:70,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},w(tt,[2,14],{9:Y,11:U,17:H,18:W,19:G,20:X}),{2:11,4:71,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},w(tt,[2,13],{9:Y,11:U,17:H,18:W,19:G,20:X}),w([5,10,13,16,29,30],[2,12],{9:Y,11:U,14:z,15:Z,17:H,18:W,19:G,20:X}),w(Q,[2,15],{9:Y,18:W,19:G,20:X}),w(et,[2,16],{9:Y,20:X}),w(et,[2,17],{9:Y,20:X}),w([5,10,11,13,14,15,16,17,18,19,20,29,30],[2,18],{9:Y}),w(J,[2,43]),w(q,[2,8]),w(q,[2,21]),{13:[1,72],29:[1,73],30:[1,74]},w(rt,[2,38],{9:Y,10:F,11:U,14:z,15:Z,16:D,17:H,18:W,19:G,20:X}),w(rt,[2,39]),w(K,[2,45]),w(q,[2,29]),w(q,[2,30]),w(q,[2,31]),w(q,[2,32]),w(q,[2,33]),w(q,[2,34]),w(q,[2,35]),w(q,[2,36]),w(q,[2,37]),w(tt,[2,9],{9:Y,11:U,17:H,18:W,19:G,20:X}),w(tt,[2,11],{9:Y,11:U,17:H,18:W,19:G,20:X}),w(tt,[2,10],{9:Y,11:U,17:H,18:W,19:G,20:X}),w(q,[2,22]),{2:11,4:75,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},{2:11,4:76,6:3,7:4,8:x,11:I,12:N,17:T,21:P,23:10,24:B,25:R,26:M,31:V,33:C,35:j},w(rt,[2,40],{9:Y,10:F,11:U,14:z,15:Z,16:D,17:H,18:W,19:G,20:X}),w(rt,[2,41],{9:Y,10:F,11:U,14:z,15:Z,16:D,17:H,18:W,19:G,20:X})],defaultActions:{18:[2,1]},parseError:function parseError(t,e){if(!e.recoverable){var r=new Error(t);r.hash=e;throw r}this.trace(t)},parse:function parse(t){var e=this,r=[0],n=[null],a=[],i=this.table,s="",l=0,u=0,c=0,h=2,f=1;var y=a.slice.call(arguments,1);var p=Object.create(this.lexer);var b={yy:{}};for(var v in this.yy)Object.prototype.hasOwnProperty.call(this.yy,v)&&(b.yy[v]=this.yy[v]);p.setInput(t,b.yy);b.yy.lexer=p;b.yy.parser=this;typeof p.yylloc=="undefined"&&(p.yylloc={});var _=p.yylloc;a.push(_);var g=p.options&&p.options.ranges;typeof b.yy.parseError==="function"?this.parseError=b.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function popStack(t){r.length=r.length-2*t;n.length=n.length-t;a.length=a.length-t}var m=function lex(){var t;t=p.lex()||f;typeof t!=="number"&&(t=e.symbols_[t]||t);return t};var d,$,O,A,k,L,S,E,w,x={};while(true){O=r[r.length-1];if(this.defaultActions[O])A=this.defaultActions[O];else{d!==null&&typeof d!="undefined"||(d=m());A=i[O]&&i[O][d]}if(typeof A==="undefined"||!A.length||!A[0]){var I=function locateNearestErrorRecoveryRule(t){var e=r.length-1;var n=0;for(;;){if(h.toString()in i[t])return n;if(t===0||e<2)return false;e-=2;t=r[e];++n}};var N;var T="";if(c)$!==f&&(N=I(O));else{N=I(O);w=[];for(L in i[O])this.terminals_[L]&&L>h&&w.push("'"+this.terminals_[L]+"'");T=p.showPosition?"Parse error on line "+(l+1)+":\n"+p.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(l+1)+": Unexpected "+(d==f?"end of input":"'"+(this.terminals_[d]||d)+"'");this.parseError(T,{text:p.match,token:this.terminals_[d]||d,line:p.yylineno,loc:_,expected:w,recoverable:N!==false})}if(c==3){if(d===f||$===f)throw new Error(T||"Parsing halted while starting to recover from another error.");u=p.yyleng;s=p.yytext;l=p.yylineno;_=p.yylloc;d=m()}if(N===false)throw new Error(T||"Parsing halted. No suitable error recovery rule available.");popStack(N);$=d==h?null:d;d=h;O=r[r.length-1];A=i[O]&&i[O][h];c=3}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+d);switch(A[0]){case 1:r.push(d);n.push(p.yytext);a.push(p.yylloc);r.push(A[1]);d=null;if($){d=$;$=null}else{u=p.yyleng;s=p.yytext;l=p.yylineno;_=p.yylloc;c>0&&c--}break;case 2:S=this.productions_[A[1]][1];x.$=n[n.length-S];x._$={first_line:a[a.length-(S||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(S||1)].first_column,last_column:a[a.length-1].last_column};g&&(x._$.range=[a[a.length-(S||1)].range[0],a[a.length-1].range[1]]);k=this.performAction.apply(x,[s,u,l,b.yy,A[1],n,a].concat(y));if(typeof k!=="undefined")return k;if(S){r=r.slice(0,-1*S*2);n=n.slice(0,-1*S);a=a.slice(0,-1*S)}r.push(this.productions_[A[1]][0]);n.push(x.$);a.push(x._$);E=i[r[r.length-2]][r[r.length-1]];r.push(E);break;case 3:return true}}return true}};var at=function(){var t={EOF:1,parseError:function parseError(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function setInput(t,e){this.yy=e||this.yy||{};this._input=t;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&(this.yylloc.range=[0,0]);this.offset=0;return this},input:function input(){var t=this._input[0];this.yytext+=t;this.yyleng++;this.offset++;this.match+=t;this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);if(e){this.yylineno++;this.yylloc.last_line++}else this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return t},unput:function unput(t){var e=t.length;var r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-e);this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-e};this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]);this.yyleng=this.yytext.length;return this},more:function more(){this._more=true;return this},reject:function reject(){if(!this.options.backtrack_lexer)return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno});this._backtrack=true;return this},less:function less(t){this.unput(this.match.slice(t))},pastInput:function pastInput(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function upcomingInput(){var t=this.match;t.length<20&&(t+=this._input.substr(0,20-t.length));return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function showPosition(){var t=this.pastInput();var e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function test_match(t,e){var r,n,a;if(this.options.backtrack_lexer){a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))}n=t[0].match(/(?:\r\n?|\n).*/g);n&&(this.yylineno+=n.length);this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._more=false;this._backtrack=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]);this.done&&this._input&&(this.done=false);if(r)return r;if(this._backtrack){for(var i in a)this[i]=a[i];return false}return false},next:function next(){if(this.done)return this.EOF;this._input||(this.done=true);var t,e,r,n;if(!this._more){this.yytext="";this.match=""}var a=this._currentRules();for(var i=0;i<a.length;i++){r=this._input.match(this.rules[a[i]]);if(r&&(!e||r[0].length>e[0].length)){e=r;n=i;if(this.options.backtrack_lexer){t=this.test_match(r,a[i]);if(t!==false)return t;if(this._backtrack){e=false;continue}return false}if(!this.options.flex)break}}if(e){t=this.test_match(e,a[n]);return t!==false&&t}return this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var t=this.next();return t||this.lex()},begin:function begin(t){this.conditionStack.push(t)},popState:function popState(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(t){t=this.conditionStack.length-1-Math.abs(t||0);return t>=0?this.conditionStack[t]:"INITIAL"},pushState:function pushState(t){this.begin(t)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{},performAction:function anonymous(t,e,r,n){switch(r){case 0:break;case 1:return 33;case 2:return 8;case 3:return 8;case 4:return 21;case 5:return 35;case 6:return 24;case 7:return 26;case 8:return 26;case 9:return 25;case 10:return 21;case 11:return 31;case 12:return 31;case 13:return 33;case 14:return 28;case 15:return 9;case 16:return" ";case 17:return 32;case 18:return 27;case 19:return 29;case 20:return 30;case 21:return 18;case 22:return 19;case 23:return 17;case 24:return 11;case 25:return 20;case 26:return 12;case 27:return 13;case 28:return 15;case 29:return 14;case 30:return 16;case 31:return'"';case 32:return"'";case 33:return"!";case 34:return 10;case 35:return 34;case 36:return"#";case 37:return 5}},rules:[/^(?:\s+)/,/^(?:[0-9]*\.?[0-9]+)/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/,/^(?:#[A-Z0-9\/]+(!|\?)?)/,/^(?:\$[A-Za-z]+\$[0-9]+)/,/^(?:\$[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z]+\$[0-9]+)/,/^(?:[A-Za-z]+[0-9]+)/,/^(?:[A-Za-z\.]+(?=[(]))/,/^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/,/^(?:[A-Za-z_]+)/,/^(?:[0-9]+)/,/^(?:\[(.*)?\])/,/^(?:&)/,/^(?: )/,/^(?:[.])/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:>)/,/^(?:<)/,/^(?:NOT\b)/,/^(?:")/,/^(?:')/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:[#])/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],inclusive:true}}};return t}();nt.lexer=at;function Parser$1(){this.yy={}}Parser$1.prototype=nt;nt.Parser=Parser$1;
/**
 * Trim value by cutting character starting from the beginning and ending at the same time.
 *
 * @param {String} string String to trimming.
 * @param {Number} [margin=1] Number of character to cut.
 * @returns {String}
 */function trimEdges(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;t=t.substring(e,t.length-e);return t}function _slicedToArray$1(t,e){return _arrayWithHoles$1(t)||_iterableToArrayLimit$1(t,e)||_unsupportedIterableToArray$1(t,e)||_nonIterableRest$1()}function _nonIterableRest$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray$1(t,e){if(t){if(typeof t==="string")return _arrayLikeToArray$1(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);r==="Object"&&t.constructor&&(r=t.constructor.name);return r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray$1(t,e):void 0}}function _arrayLikeToArray$1(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _iterableToArrayLimit$1(t,e){var r=t==null?null:typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[];var a=true;var i=false;var s,l;try{for(r=r.call(t);!(a=(s=r.next()).done);a=true){n.push(s.value);if(e&&n.length===e)break}}catch(t){i=true;l=t}finally{try{a||r.return==null||r.return()}finally{if(i)throw l}}return n}}function _arrayWithHoles$1(t){if(Array.isArray(t))return t}
/**
 * Convert row label to index.
 *
 * @param {String} label Row label (eq. '1', '5')
 * @returns {Number} Returns -1 if label is not recognized otherwise proper row index.
 */function rowLabelToIndex(t){var e=parseInt(t,10);e=isNaN(e)?-1:Math.max(e-1,-1);return e}
/**
 * Convert row index to label.
 *
 * @param {Number} row Row index.
 * @returns {String} Returns row label (eq. '1', '7').
 */function rowIndexToLabel(t){var e="";t>=0&&(e="".concat(t+1));return e}var it="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var ot=it.length;
/**
 * Convert column label to index.
 *
 * @param {String} label Column label (eq. 'ABB', 'CNQ')
 * @returns {Number} Returns -1 if label is not recognized otherwise proper column index.
 */function columnLabelToIndex(t){var e=0;if(typeof t==="string"){t=t.toUpperCase();for(var r=0,n=t.length-1;r<t.length;r+=1,n-=1)e+=Math.pow(ot,n)*(it.indexOf(t[r])+1)}--e;return e}
/**
 * Convert column index to label.
 *
 * @param {Number} column Column index.
 * @returns {String} Returns column label (eq. 'ABB', 'CNQ').
 */function columnIndexToLabel(t){var e="";while(t>=0){e=String.fromCharCode(t%ot+97)+e;t=Math.floor(t/ot)-1}return e.toUpperCase()}var st="[A-Za-z0-9_À-ʯ]+";var lt="'(?:(?!').|'')*'";var ut="(".concat(st,"|").concat(lt,")!");var ct=new RegExp("^(?:".concat(ut,")?([$])?([A-Za-z]*)([$])?([0-9]*)$"));
/**
 * Extract cell coordinates.
 *
 * @param {String} label Cell coordinates (eq. 'A1', '$B6', '$N$98').
 * @returns {Array} Returns an array of objects.
 */function extractLabel(t){if(typeof t!=="string"||!ct.test(t))return[];var e=t.toUpperCase().match(ct),r=_slicedToArray$1(e,6),n=r[1],a=r[2],i=r[3],s=r[4],l=r[5];if(i==null&&l==null)return[];var u=n==null?null:t.slice(0,n.length).replace(/^'|'$/g,"").replace(/''/g,"'");return[{index:rowLabelToIndex(l),label:l,isAbsolute:s==="$"},{index:columnLabelToIndex(i),label:i,isAbsolute:a==="$"},u]}
/**
 * Convert row and column indexes into cell label.
 *
 * @param {Object} row Object with `index` and `isAbsolute` properties.
 * @param {Object} column Object with `index` and `isAbsolute` properties.
 * @returns {String} Returns cell label.
 */function toLabel(t,e){var r=(t.isAbsolute?"$":"")+rowIndexToLabel(t.index);var n=(e.isAbsolute?"$":"")+columnIndexToLabel(e.index);return n+r}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if(typeof t==="string")return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);r==="Object"&&t.constructor&&(r=t.constructor.name);return r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _iterableToArrayLimit(t,e){var r=t==null?null:typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[];var a=true;var i=false;var s,l;try{for(r=r.call(t);!(a=(s=r.next()).done);a=true){n.push(s.value);if(e&&n.length===e)break}}catch(t){i=true;l=t}finally{try{a||r.return==null||r.return()}finally{if(i)throw l}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){e&&_defineProperties(t.prototype,e);r&&_defineProperties(t,r);Object.defineProperty(t,"prototype",{writable:false});return t}function _inherits(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});Object.defineProperty(t,"prototype",{writable:false});e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){t.__proto__=e;return t};return _setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function _createSuperInternal(){var r,n=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){if(e&&(_typeof(e)==="object"||typeof e==="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(t){return false}}function _getPrototypeOf(t){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(t)}var ht=function(t){_inherits(Parser,t);var e=_createSuper(Parser);function Parser(){var t;_classCallCheck(this,Parser);t=e.call(this);t.parser=new Parser$1;t.parser.yy={toNumber:toNumber,trimEdges:trimEdges,invertNumber:invertNumber,throwError:function throwError(e){return t._throwError(e)},callVariable:function callVariable(e){return t._callVariable(e)},evaluateByOperator:evaluateByOperator,callFunction:function callFunction(e,r){return t._callFunction(e,r)},cellValue:function cellValue(e){return t._callCellValue(e)},rangeValue:function rangeValue(e,r){return t._callRangeValue(e,r)}};t.variables=Object.create(null);t.functions=Object.create(null);t.options=Object.create(null);t.setVariable("TRUE",true).setVariable("FALSE",false).setVariable("NULL",null);return t}
/**
   * Parse formula expression.
   *
   * @param {string} expression to parse.
   * @param {object} options additional params.
   * @param {string} options.sheetId id of sheet which the formula expression belongs to.
   * @return {*} Returns an object with tow properties `error` and `result`.
   */_createClass(Parser,[{key:"parse",value:function parse(t,e){var r=null;var a=null;this.options=e;try{r=t===""?"":this.parser.parse(t)}catch(t){var i=error(t.message);a=i||error(n)}if(r instanceof Error){a=error(r.message)||error(n);r=null}return{error:a,result:r}}
/**
     * Set predefined variable name which can be visible while parsing formula expression.
     *
     * @param {String} name Variable name.
     * @param {*} value Variable value.
     * @returns {Parser}
     */},{key:"setVariable",value:function setVariable(t,e){this.variables[t]=e;return this}
/**
     * Get variable name.
     *
     * @param {String} name Variable name.
     * @returns {*}
     */},{key:"getVariable",value:function getVariable(t){return this.variables[t]}
/**
     * Retrieve variable value by its name.
     *
     * @param name Variable name.
     * @returns {*}
     * @private
     */},{key:"_callVariable",value:function _callVariable(t){var e=this.getVariable(t);this.emit("callVariable",t,(function(t){t!==void 0&&(e=t)}));if(e===void 0)throw Error(i);return e}
/**
     * Set custom function which can be visible while parsing formula expression.
     *
     * @param {String} name Custom function name.
     * @param {Function} fn Custom function.
     * @returns {Parser}
     */},{key:"setFunction",value:function setFunction(t,e){this.functions[t]=e;return this}
/**
     * Get custom function.
     *
     * @param {String} name Custom function name.
     * @returns {*}
     */},{key:"getFunction",value:function getFunction(t){return this.functions[t]}
/**
     * Call function with provided params.
     *
     * @param name Function name.
     * @param params Function params.
     * @returns {*}
     * @private
     */},{key:"_callFunction",value:function _callFunction(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];var r=this.getFunction(t);var n;r&&(n=r(e));this.emit("callFunction",t,e,(function(t){t!==void 0&&(n=t)}));return n===void 0?evaluateByOperator(t,e):n}
/**
     * Retrieve value by its label (`B3`, `B$3`, `B$3`, `$B$3`).
     *
     * @param {String} label Coordinates.
     * @returns {*}
     * @private
     */},{key:"_callCellValue",value:function _callCellValue(t){var e=extractLabel(t),r=_slicedToArray(e,3),n=r[0],a=r[1],s=r[2];if((a===null||a===void 0?void 0:a.index)===-1){if(n.isAbsolute||a.isAbsolute)throw Error(i);return n.index+1}if((n===null||n===void 0?void 0:n.index)===-1)throw Error(i);var l=void 0;this.emit("callCellValue",{label:t,row:n,column:a,sheetName:s},this.options,(function(t){l=t}));return l}
/**
     * Retrieve value by its label (`B3:A1`, `B$3:A1`, `B$3:$A1`, `$B$3:A$1`).
     *
     * @param {String} startLabel Coordinates of the first cell.
     * @param {String} endLabel Coordinates of the last cell.
     * @returns {Array} Returns an array of mixed values.
     * @private
     */},{key:"_callRangeValue",value:function _callRangeValue(t,e){var r=extractLabel(t),n=_slicedToArray(r,3),a=n[0],i=n[1],s=n[2];var l=extractLabel(e),u=_slicedToArray(l,3),c=u[0],f=u[1],y=u[2];if(y!=null&&s!=y)throw Error(h);var p={};var b={};p.sheetName=s;if(a.index<=c.index){p.row=a;b.row=c}else{p.row=c;b.row=a}if(i.index<=f.index){p.column=i;b.column=f}else{p.column=f;b.column=i}p.label=toLabel(p.row,p.column);b.label=toLabel(b.row,b.column);var v=[];this.emit("callRangeValue",p,b,this.options,(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];v=t}));return v}
/**
     * Try to throw error by its name.
     *
     * @param {String} errorName Error name.
     * @returns {String}
     * @private
     */},{key:"_throwError",value:function _throwError(t){if(isValidStrict(t))throw Error(t);throw Error(n)}}]);return Parser}(t);export{n as ERROR,a as ERROR_DIV_ZERO,i as ERROR_NAME,s as ERROR_NOT_AVAILABLE,l as ERROR_NULL,u as ERROR_NUM,c as ERROR_REF,h as ERROR_VALUE,ht as Parser,_ as SUPPORTED_FORMULAS,columnIndexToLabel,columnLabelToIndex,error,extractLabel,rowIndexToLabel,rowLabelToIndex,toLabel};
