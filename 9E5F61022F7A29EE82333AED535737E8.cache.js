var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.dndfiles;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '9E5F61022F7A29EE82333AED535737E8';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 7:1}, $intern_2 = {3:1, 6:1, 4:1}, $intern_3 = 4194303, $intern_4 = 1048575, $intern_5 = 524288, $intern_6 = -17592186044416, $intern_7 = 17592186044416, $intern_8 = 4194304, $intern_9 = {3:1, 25:1, 4:1}, $intern_10 = {18:1, 19:1, 8:1}, $intern_11 = {18:1, 78:1, 8:1}, $intern_12 = {8:1}, $intern_13 = {3:1, 15:1}, $intern_14 = {44:1}, $intern_15 = {29:1}, $intern_16 = {13:1}, $intern_17 = {3:1, 29:1}, $intern_18 = {l:0, m:0, h:524288}, $intern_19 = {l:4194303, m:4194303, h:524287}, $intern_20 = {17:1, 10:1, 9:1}, $intern_21 = {28:1, 18:1, 19:1, 8:1}, $intern_22 = {3:1, 15:1, 17:1, 9:1}, $intern_23 = {9:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_4(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_1(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_0(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_0(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || src_0 && jsType && src_0 instanceof jsType);
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(80, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_6(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 80);
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 22, 0, 0, 1);
}

function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause_0, "Can't overwrite cause");
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause_0 = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 4, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.getCause();
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = $constructJavaStackTrace(this$static)) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  $$init(this);
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(4, 1, {3:1, 4:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.printStackTrace = function printStackTrace(){
  this.printStackTrace_0(($clinit_System() , err));
}
;
_.printStackTrace_0 = function printStackTrace_0(out){
  $printStackTraceImpl(this, out, '');
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Exception_0(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(26, 4, {3:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 26);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause_0 = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(6, 26, $intern_2, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 6);
defineClass(65, 6, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 65);
defineClass(107, 65, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 107);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_4(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(47, 107, {47:1, 3:1, 6:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 47);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(190, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 190);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 47)?castTo(e, 47).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(118, 190, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 118);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(203, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 203);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(108, 203, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 22, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 108);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(204, 203, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 22, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 204);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(109, 204, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 109);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_3;
  a1 = value_0 >> 22 & $intern_3;
  a2 = value_0 < 0?$intern_4:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_5 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_4;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_3;
  a.m = sum1 & $intern_3;
  a.h = sum2 & $intern_4;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_3, sum1 & $intern_3, sum2 & $intern_4);
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_4;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_3, res1 & $intern_3, res2 & $intern_4);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_5) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_4:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_4:0;
    res1 = negative?$intern_3:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_3, res1 & $intern_3, res2 & $intern_4);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_3, sum1 & $intern_3, sum2 & $intern_4);
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_2(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_5 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_2(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_3, $intern_3, 524287);
  create0(0, 0, $intern_5);
  ONE = create(1);
  create(2);
  create(0);
}

var MAX_VALUE, ONE;
function toJava(e){
  var javaException;
  if (instanceOf(e, 4)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_6 < result && result < $intern_7) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_8;
  }
  if (a2 == $intern_4) {
    return big_0.l + big_0.m * $intern_8 - $intern_7;
  }
  return big_0;
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function neq(a, b){
  return compare_0(a, b) != 0;
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_6 < result && result < $intern_7) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_7;
    a3 = $intern_4;
  }
  a1 = round_int(value_0 / $intern_8);
  a0 = round_int(value_0 - a1 * $intern_8);
  return create0(a0, a1, a3);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_3(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_2(a);
}

function init(){
  var file, out, input$, drop$;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  file = castToNative(input_1(($clinit_InputType() , file_1)).element, $wnd.HTMLInputElement);
  ($clinit_DomGlobal() , document_0).body.appendChild(file);
  out = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('output'), $wnd.HTMLElement))).element, $wnd.HTMLOutputElement);
  document_0.body.appendChild(out);
  input$ = new Observable(onCreate(new OnSubscribeMap(new Observable(onCreate(new OnSubscribeMap(new Observable(onCreate(new OnSubscribeCreate(new RxElemental2$lambda$0$Type(file, ($clinit_EventType() , change).name_0)))), new RxElemento$0methodref$cast$Type))), new DndFiles$lambda$0$Type(file))));
  drop$ = new Observable(onCreate(new OnSubscribeMap(new Observable(onCreate(new OnSubscribeMap(new Observable(onCreate(new OnSubscribeCreate(new RxElemental2$lambda$0$Type(document_0.body, drop.name_0)))), new RxElemento$0methodref$cast$Type))), new DndFiles$lambda$1$Type)));
  $subscribe_0(merge(from_0(stampJavaTypeInfo(getClassLiteralForArray(Lrx_Observable_2_classLit, 1), $intern_1, 12, 0, [input$, drop$]))), new DndFiles$lambda$2$Type(out));
  $subscribe_0(new Observable(onCreate(new OnSubscribeMap(new Observable(onCreate(new OnSubscribeCreate(new RxElemental2$lambda$0$Type(document_0.body, dragover.name_0)))), new RxElemento$0methodref$cast$Type))), new DndFiles$lambda$3$Type);
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('gecko1_8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(25, 4, $intern_9);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 25);
defineClass(14, 25, $intern_9);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 14);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_4('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(99, 14, $intern_9, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 99);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function lambda$0(source_0, type_1, useCapture_2, s_3){
  var listener;
  listener = new RxElemental2$0methodref$onNext$Type(s_3);
  source_0.addEventListener(type_1, listener, ($clinit_Boolean() , useCapture_2?true:false));
  s_3.setSubscription(create_1(new RxElemental2$lambda$1$Type(source_0, type_1, listener, useCapture_2)));
}

function RxElemental2$0methodref$onNext$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(113, 1, {}, RxElemental2$0methodref$onNext$Type);
_.handleEvent = function handleEvent(arg0){
  this.$$outer_0.onNext_0(arg0);
}
;
var Lcom_intendia_rxgwt_elemental2_RxElemental2$0methodref$onNext$Type_2_classLit = createForClass('com.intendia.rxgwt.elemental2', 'RxElemental2/0methodref$onNext$Type', 113);
function $call(this$static, arg0){
  lambda$0(this$static.source_0, this$static.type_1, this$static.useCapture_2, arg0);
}

function RxElemental2$lambda$0$Type(source_0, type_1){
  this.source_0 = source_0;
  this.type_1 = type_1;
  this.useCapture_2 = false;
}

defineClass(62, 1, $intern_10, RxElemental2$lambda$0$Type);
_.call_0 = function call_0(arg0){
  $call(this, arg0);
}
;
_.useCapture_2 = false;
var Lcom_intendia_rxgwt_elemental2_RxElemental2$lambda$0$Type_2_classLit = createForClass('com.intendia.rxgwt.elemental2', 'RxElemental2/lambda$0$Type', 62);
function RxElemental2$lambda$1$Type(source_0, type_1, listener_2, useCapture_3){
  this.source_0 = source_0;
  this.type_1 = type_1;
  this.listener_2 = listener_2;
  this.useCapture_3 = useCapture_3;
}

defineClass(114, 1, $intern_11, RxElemental2$lambda$1$Type);
_.call_1 = function call_1(){
  $removeEventListener(this.source_0, this.type_1, this.listener_2, this.useCapture_3);
}
;
_.useCapture_3 = false;
var Lcom_intendia_rxgwt_elemental2_RxElemental2$lambda$1$Type_2_classLit = createForClass('com.intendia.rxgwt.elemental2', 'RxElemental2/lambda$1$Type', 114);
function RxElemento$0methodref$cast$Type(){
}

defineClass(64, 1, $intern_12, RxElemento$0methodref$cast$Type);
_.call_2 = function call_2(arg0){
  return arg0;
}
;
var Lcom_intendia_rxgwt_elemento_RxElemento$0methodref$cast$Type_2_classLit = createForClass('com.intendia.rxgwt.elemento', 'RxElemento/0methodref$cast$Type', 64);
function consume(e){
  e.stopPropagation();
  e.preventDefault();
  return e;
}

function lambda$2(out_0, files_1){
  var f, i, li, reader;
  for (i = 0; i < files_1.length; i++) {
    f = files_1.item(i);
    out_0.appendChild($add_1($add_1(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('li'), $wnd.HTMLElement)), $textContent(new HtmlContentBuilder(castToNative(document_0.createElement('strong'), $wnd.HTMLElement)), f.name).element), $textContent(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), ' (' + f.type + ') - ' + f.size + 'bytes').element).element);
    li = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element, $wnd.HTMLLIElement);
    out_0.appendChild(li);
    reader = new $wnd.FileReader;
    reader.onprogress = makeLambdaFunction(DndFiles$lambda$4$Type.prototype.onInvoke, DndFiles$lambda$4$Type, [li]);
    reader.onload = makeLambdaFunction(DndFiles$lambda$5$Type.prototype.onInvoke, DndFiles$lambda$5$Type, [li, reader]);
    reader.readAsBinaryString(f);
  }
}

function lambda$4(li_0, e_1){
  return li_0.textContent = e_1.loaded / e_1.total + ' progress';
}

function lambda$5(li_0, reader_1){
  return li_0.textContent = castToString(reader_1.result).substr(0, 100);
}

function DndFiles$lambda$0$Type(file_0){
  this.file_0 = file_0;
}

defineClass(101, 1, $intern_12, DndFiles$lambda$0$Type);
_.call_2 = function call_3(arg0){
  return this.file_0.files;
}
;
var Ldndfiles_client_DndFiles$lambda$0$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$0$Type', 101);
function DndFiles$lambda$1$Type(){
}

defineClass(102, 1, $intern_12, DndFiles$lambda$1$Type);
_.call_2 = function call_4(arg0){
  return consume(castToNative(arg0, $wnd.DragEvent)).dataTransfer.files;
}
;
var Ldndfiles_client_DndFiles$lambda$1$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$1$Type', 102);
function DndFiles$lambda$2$Type(out_0){
  this.out_0 = out_0;
}

defineClass(103, 1, $intern_10, DndFiles$lambda$2$Type);
_.call_0 = function call_5(arg0){
  lambda$2(this.out_0, arg0);
}
;
var Ldndfiles_client_DndFiles$lambda$2$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$2$Type', 103);
function DndFiles$lambda$3$Type(){
}

defineClass(104, 1, $intern_10, DndFiles$lambda$3$Type);
_.call_0 = function call_6(arg0){
  consume(castToNative(arg0, $wnd.DragEvent)).dataTransfer.dropEffect = 'copy';
}
;
var Ldndfiles_client_DndFiles$lambda$3$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$3$Type', 104);
function DndFiles$lambda$4$Type(li_0){
  this.li_0 = li_0;
}

defineClass(220, $wnd.Function, {}, DndFiles$lambda$4$Type);
_.onInvoke = function onInvoke(arg0){
  return lambda$4(this.li_0, arg0);
}
;
function DndFiles$lambda$5$Type(li_0, reader_1){
  this.li_0 = li_0;
  this.reader_1 = reader_1;
}

defineClass(221, $wnd.Function, {}, DndFiles$lambda$5$Type);
_.onInvoke = function onInvoke_0(arg0){
  return lambda$5(this.li_0, this.reader_1);
}
;
function $removeEventListener(this$static, type_0, listener, options){
  this$static.removeEventListener(type_0, listener, ($clinit_Boolean() , options?true:false));
}

function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.window.document;
}

var document_0;
defineClass(205, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 205);
defineClass(206, 205, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 206);
function PrintStream(){
}

defineClass(110, 206, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 110);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(81, 1, {100:1});
_.toString_0 = function toString_5(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 81);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(112, 6, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 112);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(85, 6, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 85);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Boolean();
}

booleanCastMap = {3:1, 36:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 201);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(105, 6, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 105);
defineClass(15, 1, $intern_13);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 15);
doubleCastMap = {3:1, 36:1, 15:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 202);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(23, 1, {3:1, 36:1, 23:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_7(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 23);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(30, 6, $intern_2, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 30);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(31, 6, {3:1, 31:1, 6:1, 4:1}, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 31);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(48, 6, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 48);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(39, 15, {3:1, 36:1, 39:1, 15:1}, Integer);
_.equals_0 = function equals_1(o){
  return instanceOf(o, 39) && castTo(o, 39).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_2(){
  return this.value_0;
}
;
_.toString_0 = function toString_8(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 39);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 39, 256, 0, 1);
}

var boxedValues;
function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(16, 65, $intern_2, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 16);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(22, 1, {3:1, 22:1}, StackTraceElement);
_.equals_0 = function equals_2(other){
  var st;
  if (instanceOf(other, 22)) {
    st = castTo(other, 22);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode_9(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_9(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 22);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function valueOf_0(x_0){
  return x_0 == null?'null':toString_4(x_0);
}

stringCastMap = {3:1, 100:1, 36:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append(this$static){
  this$static.string += '\n';
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(82, 81, {100:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 82);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destComp, destEnd, destType, destlen, srcComp, srcType, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        dest[destEnd] = src_0[--srcOfs];
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        dest[destOfs++] = src_0[srcOfs++];
      }
    }
  }
   else 
    len > 0 && copy(src_0, srcOfs, dest, destOfs, len, true);
}

defineClass(577, 1, {});
var err;
function $clinit_Thread(){
  $clinit_Thread = emptyMethod;
  new Thread(true);
}

function Thread(inner){
  if (!inner)
    throw toJs(new UnsupportedOperationException_0('Multi-thread not supported'));
}

defineClass(153, 1, {}, Thread);
var Ljava_lang_Thread_2_classLit = createForClass('java.lang', 'Thread', 153);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(24, 6, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 24);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = new Collections$UnmodifiableCollectionIterator(new ArrayList$1(c.coll)); $hasNext(e$iterator.it);) {
    e = $next(e$iterator.it);
    changed = changed | (old = this$static.map_0.put(e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static, a){
  var i, it, result, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = (result = new Array(size_0) , getElementTypeCategory(a) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(a), a.castableTypeMap, a.__elementTypeId$, getElementTypeCategory(a), result) , result));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_0(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_0(joiner, e === this$static?'(this Collection)':e == null?'null':toString_4(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(208, 1, {});
_.add_0 = function add_2(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toString_0 = function toString_10(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 208);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 13);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_4(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(213, 1, {61:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_3(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 61)) {
    return false;
  }
  otherMap = castTo(obj, 61);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 13);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_10(this.entrySet());
}
;
_.size_1 = function size_1(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_11(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 13);
    $add_0(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 213);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get(this$static, key){
  return instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_0(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?key == null?$remove_1(this$static.hashCodeMap, null):$remove_2(this$static.stringMap, key):$remove_1(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(75, 213, {61:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get(this, key);
}
;
_.put = function put(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_0 = function remove(key){
  return $remove(this, key);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 75);
defineClass(212, 208, $intern_14);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 44)) {
    return false;
  }
  other = castTo(o, 44);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_5(){
  return hashCode_10(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 212);
function $contains(this$static, o){
  if (instanceOf(o, 13)) {
    return $containsEntry(this$static.this$01, castTo(o, 13));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(180, 212, $intern_14, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 180);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(181, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_0(){
  var rv;
  return checkStructuralChange(this.this$01, this) , checkCriticalElement(this.hasNext) , rv = castTo(this.current.next_1(), 13) , this.hasNext = $computeHasNext(this) , rv;
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 181);
function $equals_0(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 29)) {
    return false;
  }
  other = castTo(o, 29);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_10(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(209, 208, $intern_15);
_.add_1 = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_5(o){
  return $equals_0(this, o);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_11(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 209);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(91, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_1(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 91);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(159, 91, {}, AbstractList$ListIteratorImpl);
_.add_2 = function add_5(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 159);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(95, 212, $intern_14, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = this.this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 95);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(74, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 13) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 74);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(172, 1, $intern_16);
_.equals_0 = function equals_6(other){
  var entry;
  if (!instanceOf(other, 13)) {
    return false;
  }
  entry = castTo(other, 13);
  return equals_10(this.key, entry.getKey()) && equals_10(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return hashCode_13(this.key) ^ hashCode_13(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_12(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 172);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(94, 172, $intern_16, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 94);
defineClass(214, 1, $intern_16);
_.equals_0 = function equals_7(other){
  var entry;
  if (!instanceOf(other, 13)) {
    return false;
  }
  entry = castTo(other, 13);
  return equals_10(this.val$entry2.value[0], entry.getKey()) && equals_10($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this.val$entry2.value[0]) ^ hashCode_13($getValue(this));
}
;
_.toString_0 = function toString_13(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 214);
defineClass(211, 208, {});
_.add_0 = function add_6(o){
  checkCriticalState($offer_0(this, o), 'Unable to add element to queue');
  return true;
}
;
var Ljava_util_AbstractQueue_2_classLit = createForClass('java.util', 'AbstractQueue', 211);
defineClass(210, 209, $intern_15);
_.add_1 = function add_7(index_0, element){
  var iter;
  iter = this.listIterator(index_0);
  iter.add_2(element);
}
;
_.get_1 = function get_2(index_0){
  var iter;
  iter = this.listIterator(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 59)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_3(){
  return this.listIterator(0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 210);
function $$init_0(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = $toArray(c, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, c.map_0.size_1(), 5, 1));
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_10(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function ArrayList(){
  $$init_0(this);
}

function ArrayList_0(c){
  $$init_0(this);
  insertTo_0(this.array, 0, $toArray(c, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, c.size_0, 5, 1)));
}

defineClass(42, 209, $intern_17, ArrayList, ArrayList_0);
_.add_1 = function add_8(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_9(o){
  return this.array[this.array.length] = o , true;
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_3(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 42);
function $hasNext(this$static){
  return this$static.i < this$static.this$01.array.length;
}

function $next(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(43, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_2(){
  return $hasNext(this);
}
;
_.next_1 = function next_3(){
  return $next(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 43);
function hashCode_9(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function toString_14(x_0){
  if (x_0 == null) {
    return 'null';
  }
  return $toString_0(new Arrays$ArrayList(x_0));
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(55, 209, $intern_17, Arrays$ArrayList);
_.contains_0 = function contains_3(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_1 = function get_4(index_0){
  checkCriticalElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 55);
function hashCode_10(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_11(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

defineClass(169, 1, {});
_.add_0 = function add_10(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_1(){
  return this.coll.array.length == 0;
}
;
_.iterator = function iterator_5(){
  return new Collections$UnmodifiableCollectionIterator(new ArrayList$1(this.coll));
}
;
_.size_1 = function size_7(){
  return this.coll.array.length;
}
;
_.toString_0 = function toString_15(){
  return $toString_0(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 169);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(56, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_3(){
  return $hasNext(this.it);
}
;
_.next_1 = function next_4(){
  return $next(this.it);
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 56);
defineClass(170, 169, $intern_15);
_.equals_0 = function equals_8(o){
  return $equals_0(this.list, o);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_11(this.list);
}
;
_.isEmpty = function isEmpty_2(){
  return this.list.array.length == 0;
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 170);
function Collections$UnmodifiableRandomAccessList(list){
  this.coll = list;
  this.list = list;
}

defineClass(171, 170, $intern_15, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 171);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(189, 6, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 189);
function HashMap(){
  $reset(this);
}

function HashMap_0(){
  checkCriticalArgument(true, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(60, 75, {3:1, 61:1}, HashMap, HashMap_0);
_.equals_1 = function equals_9(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 60);
function $add(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_0(this$static, o){
  return this$static.map_0.remove_0(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(){
  this.map_0 = new HashMap_0;
}

function HashSet_1(map_0){
  this.map_0 = map_0;
}

defineClass(50, 212, {3:1, 44:1}, HashSet, HashSet_0);
_.add_0 = function add_11(o){
  return $add(this, o);
}
;
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_3(){
  return this.map_0.size_1() == 0;
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_8(){
  return this.map_0.size_1();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 50);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_1(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(184, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_7(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 184);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(96, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_5(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_4(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 96);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_0(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_2(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(185, 1, {}, InternalStringMap);
_.iterator = function iterator_8(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 185);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(97, 1, {}, InternalStringMap$1);
_.next_1 = function next_6(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_5(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 97);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_0(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(186, 214, $intern_16, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 186);
function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_4(entry);
    $addToEnd(entry);
  }
}

function $remove_3(this$static, key){
  var entry;
  entry = castTo($remove(this$static.map_0, key), 35);
  if (entry) {
    $remove_4(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  $reset(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next_0 = this.head;
}

defineClass(177, 60, {3:1, 61:1}, LinkedHashMap);
_.containsKey = function containsKey_1(key){
  return $containsKey(this.map_0, key);
}
;
_.entrySet = function entrySet_0(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_0 = function get_5(key){
  var entry;
  entry = castTo($get(this.map_0, key), 35);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_0(key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get(this.map_0, key), 35);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key, value_0);
    $put(this.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove_0 = function remove_0(key){
  return $remove_3(this, key);
}
;
_.size_1 = function size_9(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 177);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function $remove_4(this$static){
  this$static.next_0.prev = this$static.prev;
  this$static.prev.next_0 = this$static.next_0;
  this$static.next_0 = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(35, 94, {35:1, 13:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 35);
function $contains_2(this$static, o){
  if (instanceOf(o, 13)) {
    return $containsEntry(this$static.this$01, castTo(o, 13));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(178, 212, $intern_14, LinkedHashMap$EntrySet);
_.contains_0 = function contains_5(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_9(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.size_1 = function size_10(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 178);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  var modCount;
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  modCount = this$1.this$01.map_0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(179, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.next_1 = function next_7(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next_0 != this.this$11.this$01.head) , this.last = this.next_0 , this.next_0 = this.next_0.next_0 , this.last;
}
;
_.hasNext_0 = function hasNext_6(){
  return this.next_0 != this.this$11.this$01.head;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 179);
function LinkedHashSet(){
  HashSet_1.call(this, new LinkedHashMap);
}

defineClass(173, 50, {3:1, 44:1}, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 173);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $offer(this$static, o){
  return $addNode(this$static, o, this$static.tail.prev, this$static.tail) , true;
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(90, 210, $intern_17, LinkedList);
_.add_0 = function add_12(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator = function listIterator_0(index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i = this.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.offer = function offer(o){
  return $offer(this, o);
}
;
_.poll = function poll(){
  return this.size_0 == 0?null:(checkCriticalElement(this.size_0 != 0) , $removeNode(this, this.header.next_0));
}
;
_.size_1 = function size_11(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 90);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(158, 1, {}, LinkedList$ListIteratorImpl);
_.add_2 = function add_13(o){
  $addNode(this.this$01, o, this.currentNode_0.prev, this.currentNode_0);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_7(){
  return this.currentNode_0 != this.this$01.tail;
}
;
_.next_1 = function next_8(){
  checkCriticalElement(this.currentNode_0 != this.this$01.tail);
  this.lastNode = this.currentNode_0;
  this.currentNode_0 = this.currentNode_0.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 158);
function LinkedList$Node(){
}

defineClass(73, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 73);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(59, 6, {3:1, 6:1, 4:1, 59:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 59);
function equals_10(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_13(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull(obj){
  if (obj == null) {
    throw toJs(new NullPointerException_0('element required'));
  }
  return obj;
}

function $add_0(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_3(this$static.builder, this$static.delimiter);
  $append_1(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(83, 1, {}, StringJoiner);
_.toString_0 = function toString_16(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 83);
function ConcurrentLinkedQueue(){
  LinkedList.call(this);
}

defineClass(182, 90, $intern_17, ConcurrentLinkedQueue);
var Ljava_util_concurrent_ConcurrentLinkedQueue_2_classLit = createForClass('java.util.concurrent', 'ConcurrentLinkedQueue', 182);
function $compareAndSet(this$static){
  if (this$static.value_1)
    return false;
  this$static.value_1 = true;
  return true;
}

defineClass(207, 1, {3:1});
_.toString_0 = function toString_17(){
  return $clinit_Boolean() , '' + this.value_1;
}
;
_.value_1 = false;
var Ljava_util_concurrent_atomic_AtomicBoolean_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicBoolean', 207);
function $addAndGet(this$static, delta){
  this$static.value_1 += delta;
  return this$static.value_1;
}

function $compareAndSet_0(this$static, expect, update){
  if (this$static.value_1 == expect) {
    this$static.value_1 = update;
    return true;
  }
   else {
    return false;
  }
}

function AtomicInteger(){
}

defineClass(88, 15, $intern_13, AtomicInteger);
_.toString_0 = function toString_18(){
  return '' + this.value_1;
}
;
_.value_1 = 0;
var Ljava_util_concurrent_atomic_AtomicInteger_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicInteger', 88);
function $compareAndSet_1(this$static, expect, update){
  if (eq(this$static.value_0, expect)) {
    this$static.value_0 = update;
    return true;
  }
   else {
    return false;
  }
}

function $lazySet(this$static, newValue){
  this$static.value_0 = newValue;
}

function AtomicLong(){
}

defineClass(40, 15, $intern_13, AtomicLong);
_.toString_0 = function toString_19(){
  return '' + toString_3(this.value_0);
}
;
_.value_0 = 0;
var Ljava_util_concurrent_atomic_AtomicLong_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicLong', 40);
function $compareAndSet_2(this$static, expect, update){
  if (maskUndefined(this$static.value_0) !== maskUndefined(expect))
    return false;
  this$static.value_0 = update;
  return true;
}

function $getAndSet(this$static, newValue){
  var previous;
  previous = this$static.value_0;
  this$static.value_0 = newValue;
  return previous;
}

function $set(this$static, newValue){
  this$static.value_0 = newValue;
}

function AtomicReference(){
}

function AtomicReference_0(initialValue){
  this.value_0 = initialValue;
}

defineClass(33, 1, {3:1}, AtomicReference, AtomicReference_0);
_.toString_0 = function toString_20(){
  return valueOf_0(this.value_0);
}
;
var Ljava_util_concurrent_atomic_AtomicReference_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicReference', 33);
function $get_1(this$static, i){
  return this$static.array[i];
}

function $set_0(this$static, i, newValue){
  this$static.array[i] = newValue;
}

function AtomicReferenceArray(length_0){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, length_0, 5, 1);
}

defineClass(34, 1, {3:1, 34:1}, AtomicReferenceArray);
_.toString_0 = function toString_21(){
  return toString_14(this.array);
}
;
var Ljava_util_concurrent_atomic_AtomicReferenceArray_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicReferenceArray', 34);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalStateException(errorMessage));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode_0(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_1(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count == 256) {
    back_0 = front;
    front = {};
    count = 0;
  }
  ++count;
}

var back_0, count = 0, front;
defineClass(573, 1, {});
function input_0(type_0){
  var el;
  el = castToNative(castToNative(($clinit_DomGlobal() , document_0).createElement('input'), $wnd.HTMLElement), $wnd.HTMLInputElement);
  el.type = type_0;
  return new InputBuilder(el);
}

function input_1(type_0){
  return input_0(type_0.name_0 != null?type_0.name_0:'' + type_0.ordinal);
}

function $clinit_EventType(){
  $clinit_EventType = emptyMethod;
  new EventType('online');
  new EventType('offline');
  new EventType('focus');
  new EventType('blur');
  new EventType('pagehide');
  new EventType('pageshow');
  new EventType('popstate');
  new EventType('reset');
  new EventType('submit');
  new EventType('beforeprint');
  new EventType('afterprint');
  new EventType('compositionstart');
  new EventType('compositionupdate');
  new EventType('compositionend');
  new EventType('fullscreenchange');
  new EventType('fullscreenerror');
  new EventType('resize');
  new EventType('scroll');
  new EventType('cut');
  new EventType('copy');
  new EventType('paste');
  new EventType('keydown');
  new EventType('keypress');
  new EventType('keyup');
  new EventType('mouseenter');
  new EventType('mouseover');
  new EventType('mousemove');
  new EventType('mousedown');
  new EventType('mouseup');
  new EventType('auxclick');
  new EventType('click');
  new EventType('dblclick');
  new EventType('contextmenu');
  new EventType('wheel');
  new EventType('mouseleave');
  new EventType('mouseout');
  new EventType('pointerlockchange');
  new EventType('pointerlockerror');
  new EventType('dragstart');
  new EventType('drag');
  new EventType('dragend');
  new EventType('dragenter');
  dragover = new EventType('dragover');
  new EventType('dragleave');
  drop = new EventType('drop');
  new EventType('touchcancel');
  new EventType('touchend');
  new EventType('touchmove');
  new EventType('touchstart');
  new EventType('hashchange');
  new EventType('input');
  new EventType('readystatechange');
  change = new EventType('change');
  new EventType('invalid');
  new EventType('show');
  new EventType('storage');
}

function EventType(name_0){
  this.name_0 = name_0;
}

defineClass(5, 1, {}, EventType);
var change, dragover, drop;
var Lorg_jboss_gwt_elemento_core_EventType_2_classLit = createForClass('org.jboss.gwt.elemento.core', 'EventType', 5);
function $clinit_InputType(){
  $clinit_InputType = emptyMethod;
  button = new InputType('button', 0);
  checkbox = new InputType('checkbox', 1);
  color_0 = new InputType('color', 2);
  date = new InputType('date', 3);
  datetime = new InputType('datetime', 4);
  email = new InputType('email', 5);
  file_1 = new InputType('file', 6);
  hidden = new InputType('hidden', 7);
  image = new InputType('image', 8);
  month = new InputType('month', 9);
  number_0 = new InputType('number', 10);
  password = new InputType('password', 11);
  radio = new InputType('radio', 12);
  range = new InputType('range', 13);
  reset_0 = new InputType('reset', 14);
  search = new InputType('search', 15);
  select = new InputType('select', 16);
  tel = new InputType('tel', 17);
  text_1 = new InputType('text', 18);
  textarea = new InputType('textarea', 19);
  time = new InputType('time', 20);
  url_0 = new InputType('url', 21);
  week = new InputType('week', 22);
}

function InputType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_InputType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_gwt_elemento_core_InputType_2_classLit, 1), $intern_1, 11, 0, [button, checkbox, color_0, date, datetime, email, file_1, hidden, image, month, number_0, password, radio, range, reset_0, search, select, tel, text_1, textarea, time, url_0, week]);
}

defineClass(11, 23, {3:1, 36:1, 23:1, 11:1}, InputType);
var button, checkbox, color_0, date, datetime, email, file_1, hidden, image, month, number_0, password, radio, range, reset_0, search, select, tel, text_1, textarea, time, url_0, week;
var Lorg_jboss_gwt_elemento_core_InputType_2_classLit = createForEnum('org.jboss.gwt.elemento.core', 'InputType', 11, values_0);
function ElementBuilder(element){
  this.element = requireNonNull(element);
}

defineClass(84, 1, {});
var Lorg_jboss_gwt_elemento_core_builder_ElementBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'ElementBuilder', 84);
function $add_1(this$static, element){
  return this$static.element.appendChild(element) , this$static;
}

function $textContent(this$static, text_0){
  return this$static.element.textContent = text_0 , this$static;
}

function HtmlContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(45, 84, {}, HtmlContentBuilder);
var Lorg_jboss_gwt_elemento_core_builder_HtmlContentBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'HtmlContentBuilder', 45);
function InputBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(111, 84, {}, InputBuilder);
var Lorg_jboss_gwt_elemento_core_builder_InputBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'InputBuilder', 111);
function $lift(this$static, operator){
  return new Observable(onCreate(new OnSubscribeLift(this$static.onSubscribe, operator)));
}

function $subscribe(this$static, subscriber){
  return subscribe(subscriber, this$static);
}

function $subscribe_0(this$static, onNext){
  var onError;
  onError = ($clinit_InternalObservableUtils() , ERROR_NOT_IMPLEMENTED);
  return $subscribe(this$static, new ActionSubscriber(onNext, onError));
}

function $unsafeSubscribe(this$static, subscriber){
  var e, e2, r;
  try {
    subscriber.onStart();
    onObservableStart_0(this$static, this$static.onSubscribe).call_0(subscriber);
    return onObservableReturn_0(subscriber);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 4)) {
      e = $e1;
      throwIfFatal(e);
      try {
        subscriber.onError_0(onObservableError(e));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          e2 = $e0;
          throwIfFatal(e2);
          r = new OnErrorFailedException('Error occurred attempting to subscribe [' + e.getMessage() + '] and then again while trying to pass to onError.', e2);
          onObservableError(r);
          throw toJs(r);
        }
         else 
          throw toJs($e0);
      }
      return $clinit_Subscriptions() , $clinit_Subscriptions() , UNSUBSCRIBED;
    }
     else 
      throw toJs($e1);
  }
}

function Observable(f){
  this.onSubscribe = f;
}

function from_0(array){
  var n;
  n = array.length;
  if (n == 0) {
    return $clinit_EmptyObservableHolder() , $clinit_EmptyObservableHolder() , EMPTY;
  }
   else if (n == 1) {
    return $clinit_ScalarSynchronousObservable() , new ScalarSynchronousObservable(array[0]);
  }
  return new Observable(onCreate(new OnSubscribeFromArray(array)));
}

function merge(source){
  if (source.___clazz == Lrx_internal_util_ScalarSynchronousObservable_2_classLit) {
    return new Observable(onCreate(new ScalarSynchronousObservable$3(castTo(source, 32))));
  }
  return $lift(source, ($clinit_OperatorMerge$HolderNoDelay() , INSTANCE_2));
}

function subscribe(subscriber, observable){
  var e, e2, r;
  if (!observable.onSubscribe) {
    throw toJs(new IllegalStateException('onSubscribe function can not be null.'));
  }
  subscriber.onStart();
  instanceOf(subscriber, 66) || (subscriber = new SafeSubscriber(subscriber));
  try {
    onObservableStart_0(observable, observable.onSubscribe).call_0(subscriber);
    return onObservableReturn_0(subscriber);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 4)) {
      e = $e1;
      throwIfFatal(e);
      if (subscriber.subscriptions_0.unsubscribed) {
        onError_9(onObservableError(e));
      }
       else {
        try {
          subscriber.onError_0(onObservableError(e));
        }
         catch ($e0) {
          $e0 = toJava($e0);
          if (instanceOf($e0, 4)) {
            e2 = $e0;
            throwIfFatal(e2);
            r = new OnErrorFailedException('Error occurred attempting to subscribe [' + e.getMessage() + '] and then again while trying to pass to onError.', e2);
            onObservableError(r);
            throw toJs(r);
          }
           else 
            throw toJs($e0);
        }
      }
      return $clinit_Subscriptions() , $clinit_Subscriptions() , UNSUBSCRIBED;
    }
     else 
      throw toJs($e1);
  }
}

defineClass(12, 1, {12:1}, Observable);
var Lrx_Observable_2_classLit = createForClass('rx', 'Observable', 12);
defineClass(58, 1, {58:1, 9:1});
_.isUnsubscribed = function isUnsubscribed(){
  return this.cs.unsubscribed;
}
;
_.unsubscribe = function unsubscribe_0(){
  $unsubscribe_0(this.cs);
}
;
var Lrx_SingleSubscriber_2_classLit = createForClass('rx', 'SingleSubscriber', 58);
function $addToRequested(this$static, n){
  var total;
  if (eq(this$static.requested, $intern_18)) {
    this$static.requested = n;
  }
   else {
    total = add_1(this$static.requested, n);
    compare_0(total, 0) < 0?(this$static.requested = $intern_19):(this$static.requested = total);
  }
}

function $request(this$static, n){
  var producerToRequestFrom;
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('number requested cannot be negative: ' + toString_3(n)));
  }
  if (this$static.producer_0) {
    producerToRequestFrom = this$static.producer_0;
  }
   else {
    $addToRequested(this$static, n);
    return;
  }
  producerToRequestFrom.request(n);
}

function $setProducer(this$static, p){
  var passToSubscriber, toRequest;
  passToSubscriber = false;
  toRequest = this$static.requested;
  this$static.producer_0 = p;
  !!this$static.subscriber && eq(toRequest, $intern_18) && (passToSubscriber = true);
  passToSubscriber?this$static.subscriber.setProducer(this$static.producer_0):eq(toRequest, $intern_18)?this$static.producer_0.request($intern_19):this$static.producer_0.request(toRequest);
}

function Subscriber(){
  Subscriber_1.call(this, null, false);
}

function Subscriber_0(subscriber){
  Subscriber_1.call(this, subscriber, true);
}

function Subscriber_1(subscriber, shareSubscriptions){
  this.subscriber = subscriber;
  this.subscriptions_0 = shareSubscriptions && !!subscriber?subscriber.subscriptions_0:new SubscriptionList;
}

defineClass(10, 1, $intern_20);
_.isUnsubscribed = function isUnsubscribed_0(){
  return this.subscriptions_0.unsubscribed;
}
;
_.onStart = function onStart(){
}
;
_.setProducer = function setProducer(p){
  $setProducer(this, p);
}
;
_.unsubscribe = function unsubscribe_1(){
  $unsubscribe_0(this.subscriptions_0);
}
;
_.requested = $intern_18;
var Lrx_Subscriber_2_classLit = createForClass('rx', 'Subscriber', 10);
function $appendStackTrace(this$static, b, ex, prefix){
  var stackElement, stackElement$array, stackElement$index, stackElement$max;
  $append($append_2((b.string += prefix , b), ex));
  for (stackElement$array = (ex.stackTrace == null && (ex.stackTrace = $constructJavaStackTrace(ex)) , ex.stackTrace) , stackElement$index = 0 , stackElement$max = stackElement$array.length; stackElement$index < stackElement$max; ++stackElement$index) {
    stackElement = stackElement$array[stackElement$index];
    $append($append_2((b.string += '\t\tat ' , b), stackElement));
  }
  if (ex.getCause()) {
    b.string += '\tCaused by: ';
    $appendStackTrace(this$static, b, ex.getCause(), '');
  }
}

function $getListOfCauses(ex){
  var cause, list, root;
  list = new ArrayList;
  root = ex.getCause();
  if (!root || root == ex) {
    return list;
  }
   else {
    while (true) {
      list.array[list.array.length] = root;
      cause = root.getCause();
      if (!cause || cause == root) {
        return list;
      }
       else {
        root = root.getCause();
      }
    }
  }
}

function $getRootCause(e){
  var cause, root;
  root = e.getCause();
  if (!root || root == e) {
    return e;
  }
   else {
    while (true) {
      cause = root.getCause();
      if (!cause || cause == root) {
        return root;
      }
      root = root.getCause();
    }
  }
}

function $printStackTrace(this$static){
  var b, ex, ex$iterator, i, myStackElement, myStackElement$array, myStackElement$index, myStackElement$max;
  b = new StringBuilder;
  $append((b.string += this$static , b));
  for (myStackElement$array = (this$static.stackTrace == null && (this$static.stackTrace = $constructJavaStackTrace(this$static)) , this$static.stackTrace) , myStackElement$index = 0 , myStackElement$max = myStackElement$array.length; myStackElement$index < myStackElement$max; ++myStackElement$index) {
    myStackElement = myStackElement$array[myStackElement$index];
    $append($append_2((b.string += '\tat ' , b), myStackElement));
  }
  i = 1;
  for (ex$iterator = new Collections$UnmodifiableCollectionIterator(new ArrayList$1(this$static.exceptions.coll)); $hasNext(ex$iterator.it);) {
    ex = castTo($next(ex$iterator.it), 4);
    $append_3($append_0((b.string += '  ComposedException ' , b), i), ' :\n');
    $appendStackTrace(this$static, b, ex, '\t');
    ++i;
  }
}

function CompositeException(errors){
  var deDupedExceptions, ex, ex$iterator, localExceptions, old;
  RuntimeException.call(this);
  deDupedExceptions = new LinkedHashSet;
  localExceptions = new ArrayList;
  if (errors) {
    for (ex$iterator = errors.iterator(); ex$iterator.hasNext_0();) {
      ex = castTo(ex$iterator.next_1(), 4);
      instanceOf(ex, 21)?$addAll(deDupedExceptions, castTo(ex, 21).exceptions):ex?(old = deDupedExceptions.map_0.put(ex, deDupedExceptions) , old == null):$add(deDupedExceptions, new NullPointerException);
    }
  }
   else {
    $add(deDupedExceptions, new NullPointerException);
  }
  $addAll_0(localExceptions, deDupedExceptions);
  this.exceptions = new Collections$UnmodifiableRandomAccessList(localExceptions);
  this.message_0 = this.exceptions.coll.array.length + ' exceptions occurred. ';
}

function CompositeException_0(errors){
  CompositeException.call(this, errors);
}

defineClass(21, 6, {3:1, 6:1, 4:1, 21:1}, CompositeException_0);
_.getCause = function getCause_0(){
  var chain, child, child$iterator, e, e$iterator, listOfCauses, localCause, seenCauses;
  if (!this.cause) {
    localCause = new CompositeException$CompositeExceptionCausalChain;
    seenCauses = new HashSet;
    chain = localCause;
    for (e$iterator = new Collections$UnmodifiableCollectionIterator(new ArrayList$1(this.exceptions.coll)); $hasNext(e$iterator.it);) {
      e = castTo($next(e$iterator.it), 4);
      if (seenCauses.map_0.containsKey(e)) {
        continue;
      }
      seenCauses.map_0.put(e, seenCauses);
      listOfCauses = $getListOfCauses(e);
      for (child$iterator = new ArrayList$1(listOfCauses); child$iterator.i < child$iterator.this$01.array.length;) {
        child = castTo($next(child$iterator), 4);
        if (seenCauses.map_0.containsKey(child)) {
          e = new RuntimeException_0('Duplicate found in causal chain so cropping to prevent loop ...');
          continue;
        }
        seenCauses.map_0.put(child, seenCauses);
      }
      try {
        $initCause(chain, e);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 4))
          throw toJs($e0);
      }
      chain = $getRootCause(chain);
    }
    this.cause = localCause;
  }
  return this.cause;
}
;
_.getMessage = function getMessage_1(){
  return this.message_0;
}
;
_.printStackTrace = function printStackTrace_1(){
  var lastArg;
  $printStackTrace((lastArg = this , $clinit_System() , lastArg));
}
;
_.printStackTrace_0 = function printStackTrace_2(s){
  $printStackTrace(this);
}
;
var Lrx_exceptions_CompositeException_2_classLit = createForClass('rx.exceptions', 'CompositeException', 21);
function CompositeException$CompositeExceptionCausalChain(){
  RuntimeException.call(this);
}

defineClass(160, 6, $intern_2, CompositeException$CompositeExceptionCausalChain);
_.getMessage = function getMessage_2(){
  return 'Chain of Causes for CompositeException In Order Received =>';
}
;
var Lrx_exceptions_CompositeException$CompositeExceptionCausalChain_2_classLit = createForClass('rx.exceptions', 'CompositeException/CompositeExceptionCausalChain', 160);
function addCause(e, cause){
  var i, seenCauses;
  seenCauses = new HashSet;
  i = 0;
  while (e.getCause()) {
    if (i++ >= 25) {
      return;
    }
    e = e.getCause();
    if ($contains_0(seenCauses, e.getCause())) {
      break;
    }
     else {
      $add(seenCauses, e.getCause());
    }
  }
  try {
    $initCause(e, cause);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 4))
      throw toJs($e0);
  }
}

function getFinalCause(e){
  var i;
  i = 0;
  while (e.getCause()) {
    if (i++ >= 25) {
      return new RuntimeException_0('Stack too deep to get final cause');
    }
    e = e.getCause();
  }
  return e;
}

function throwIfAny(exceptions){
  var t;
  if (!!exceptions && exceptions.array.length != 0) {
    if (exceptions.array.length == 1) {
      t = (checkCriticalElementIndex(0, exceptions.array.length) , castTo(exceptions.array[0], 4));
      if (instanceOf(t, 6)) {
        throw toJs(castTo(t, 6));
      }
       else if (instanceOf(t, 25)) {
        throw toJs(castTo(t, 25));
      }
       else {
        throw toJs(new RuntimeException_2(t));
      }
    }
    throw toJs(new CompositeException_0(exceptions));
  }
}

function throwIfFatal(t){
  if (instanceOf(t, 41)) {
    throw toJs(castTo(t, 41));
  }
   else if (instanceOf(t, 27)) {
    throw toJs(castTo(t, 27));
  }
   else if (instanceOf(t, 54)) {
    throw toJs(castTo(t, 54));
  }
}

function MissingBackpressureException(){
  Exception.call(this);
}

function MissingBackpressureException_0(){
  Exception_0.call(this, 'create: could not emit value due to lack of requests');
}

defineClass(51, 26, {3:1, 4:1, 51:1}, MissingBackpressureException, MissingBackpressureException_0);
var Lrx_exceptions_MissingBackpressureException_2_classLit = createForClass('rx.exceptions', 'MissingBackpressureException', 51);
function OnCompletedFailedException(message, throwable){
  RuntimeException_1.call(this, message, throwable?throwable:new NullPointerException);
}

defineClass(54, 6, {3:1, 6:1, 4:1, 54:1}, OnCompletedFailedException);
var Lrx_exceptions_OnCompletedFailedException_2_classLit = createForClass('rx.exceptions', 'OnCompletedFailedException', 54);
function OnErrorFailedException(message, e){
  RuntimeException_1.call(this, message, e?e:new NullPointerException);
}

function OnErrorFailedException_0(e){
  RuntimeException_1.call(this, e?e.getMessage():null, e?e:new NullPointerException);
}

defineClass(27, 6, {3:1, 6:1, 4:1, 27:1}, OnErrorFailedException, OnErrorFailedException_0);
var Lrx_exceptions_OnErrorFailedException_2_classLit = createForClass('rx.exceptions', 'OnErrorFailedException', 27);
function OnErrorNotImplementedException(e){
  RuntimeException_1.call(this, 'Observer.onError not implemented and error while unsubscribing.', e);
}

function OnErrorNotImplementedException_0(e){
  RuntimeException_1.call(this, e?e.getMessage():null, e?e:new NullPointerException);
}

defineClass(41, 6, {3:1, 6:1, 4:1, 41:1}, OnErrorNotImplementedException, OnErrorNotImplementedException_0);
var Lrx_exceptions_OnErrorNotImplementedException_2_classLit = createForClass('rx.exceptions', 'OnErrorNotImplementedException', 41);
function addValueAsLastCause(e, value_0){
  var lastCause;
  !e && (e = new NullPointerException);
  lastCause = getFinalCause(e);
  if (instanceOf(lastCause, 57)) {
    if (maskUndefined(castTo(lastCause, 57).value_0) === maskUndefined(value_0)) {
      return e;
    }
  }
  addCause(e, new OnErrorThrowable$OnNextValue(value_0));
  return e;
}

function OnErrorThrowable$OnNextValue(value_0){
  var ex, v;
  RuntimeException_0.call(this, 'OnError while emitting onNext value: ' + renderValue(value_0));
  if (instanceOf(value_0, 3)) {
    v = value_0;
  }
   else {
    try {
      v = value_0 == null?'null':toString_4(value_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        ex = $e0;
        v = ex.getMessage();
      }
       else 
        throw toJs($e0);
    }
  }
  this.value_0 = v;
}

function renderValue(value_0){
  var pluggedRendering;
  if (value_0 == null) {
    return 'null';
  }
  if ($contains_0(($clinit_OnErrorThrowable$OnNextValue$Primitives() , INSTANCE_0), getClass__Ljava_lang_Class___devirtual$(value_0))) {
    return toString_4(value_0);
  }
  if (instanceOfString(value_0)) {
    return castToString(value_0);
  }
  if (instanceOf(value_0, 23)) {
    return $name(castTo(value_0, 23));
  }
  pluggedRendering = ($getErrorHandler(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , value_0 , $handleOnNextValueRendering());
  if (pluggedRendering != null) {
    return pluggedRendering;
  }
  return $getName(getClass__Ljava_lang_Class___devirtual$(value_0)) + '.class';
}

defineClass(57, 6, {3:1, 6:1, 4:1, 57:1}, OnErrorThrowable$OnNextValue);
var Lrx_exceptions_OnErrorThrowable$OnNextValue_2_classLit = createForClass('rx.exceptions', 'OnErrorThrowable/OnNextValue', 57);
function $clinit_OnErrorThrowable$OnNextValue$Primitives(){
  var set_0;
  $clinit_OnErrorThrowable$OnNextValue$Primitives = emptyMethod;
  INSTANCE_0 = (set_0 = new HashSet , set_0.map_0.put(Ljava_lang_Boolean_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Character_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Byte_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Short_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Integer_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Long_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Float_2_classLit, set_0) , set_0.map_0.put(Ljava_lang_Double_2_classLit, set_0) , set_0);
}

var INSTANCE_0;
function UnsubscribeFailedException(message, throwable){
  RuntimeException_1.call(this, message, throwable?throwable:new NullPointerException);
}

defineClass(168, 6, $intern_2, UnsubscribeFailedException);
var Lrx_exceptions_UnsubscribeFailedException_2_classLit = createForClass('rx.exceptions', 'UnsubscribeFailedException', 168);
function getAndAddRequest(requested, n){
  var current, next, u;
  while (true) {
    current = requested.value_0;
    next = (u = add_1(current, n) , compare_0(u, 0) < 0 && (u = $intern_19) , u);
    if ($compareAndSet_1(requested, current, next)) {
      return current;
    }
  }
}

function produced_0(requested, n){
  var current, next;
  for (;;) {
    current = requested.value_0;
    if (eq(current, $intern_19)) {
      return $intern_19;
    }
    next = sub_1(current, n);
    if (compare_0(next, 0) < 0) {
      throw toJs(new IllegalStateException('More produced than requested: ' + toString_3(next)));
    }
    if ($compareAndSet_1(requested, current, next)) {
      return next;
    }
  }
}

function validate(n){
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('n >= 0 required but it was ' + toString_3(n)));
  }
  return compare_0(n, 0) != 0;
}

function $clinit_EmptyObservableHolder(){
  $clinit_EmptyObservableHolder = emptyMethod;
  INSTANCE_1 = new EmptyObservableHolder;
  EMPTY = new Observable(onCreate(INSTANCE_1));
}

function EmptyObservableHolder(){
  Enum.call(this, 'INSTANCE', 0);
}

function values_1(){
  $clinit_EmptyObservableHolder();
  return stampJavaTypeInfo(getClassLiteralForArray(Lrx_internal_operators_EmptyObservableHolder_2_classLit, 1), $intern_1, 67, 0, [INSTANCE_1]);
}

defineClass(67, 23, {3:1, 36:1, 23:1, 28:1, 18:1, 19:1, 8:1, 67:1}, EmptyObservableHolder);
_.call_0 = function call_7(child){
  castTo(child, 10).onCompleted();
}
;
var EMPTY, INSTANCE_1;
var Lrx_internal_operators_EmptyObservableHolder_2_classLit = createForEnum('rx.internal.operators', 'EmptyObservableHolder', 67, values_1);
function $clinit_NotificationLite(){
  $clinit_NotificationLite = emptyMethod;
  ON_NEXT_NULL_SENTINEL = new NotificationLite$2;
}

var ON_NEXT_NULL_SENTINEL;
function NotificationLite$2(){
}

defineClass(174, 1, {3:1}, NotificationLite$2);
_.toString_0 = function toString_22(){
  return 'Notification=>NULL';
}
;
var Lrx_internal_operators_NotificationLite$2_2_classLit = createForClass('rx.internal.operators', 'NotificationLite/2', 174);
function $call_0(this$static, t){
  var emitter;
  switch (this$static.backpressure) {
    case 0:
      {
        emitter = new OnSubscribeCreate$NoneEmitter(t);
        break;
      }

    case 1:
      {
        emitter = new OnSubscribeCreate$ErrorEmitter(t);
        break;
      }

    case 3:
      {
        emitter = new OnSubscribeCreate$DropEmitter(t);
        break;
      }

    case 4:
      {
        emitter = new OnSubscribeCreate$LatestEmitter(t);
        break;
      }

    default:{
        emitter = new OnSubscribeCreate$BufferEmitter(t, ($clinit_RxRingBuffer() , SIZE));
        break;
      }

  }
  $add_2(t.subscriptions_0, emitter);
  t.setProducer(emitter);
  $call(this$static.Emitter, emitter);
}

function OnSubscribeCreate(Emitter){
  this.Emitter = Emitter;
  this.backpressure = 4;
}

defineClass(63, 1, $intern_21, OnSubscribeCreate);
_.call_0 = function call_8(t){
  $call_0(this, castTo(t, 10));
}
;
_.backpressure = 0;
var Lrx_internal_operators_OnSubscribeCreate_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate', 63);
function $onCompleted(this$static){
  if (this$static.actual.subscriptions_0.unsubscribed) {
    return;
  }
  try {
    this$static.actual.onCompleted();
  }
   finally {
    $unsubscribe(this$static.serial.state);
  }
}

function $onError(this$static, e){
  if (this$static.actual.subscriptions_0.unsubscribed) {
    return;
  }
  try {
    this$static.actual.onError_0(e);
  }
   finally {
    $unsubscribe(this$static.serial.state);
  }
}

function OnSubscribeCreate$BaseEmitter(actual){
  this.actual = actual;
  this.serial = new SerialSubscription;
}

defineClass(53, 40, $intern_22);
_.isUnsubscribed = function isUnsubscribed_1(){
  return maskUndefined(this.serial.state.value_0) === maskUndefined(($clinit_Unsubscribed() , INSTANCE_3));
}
;
_.onRequested = function onRequested(){
}
;
_.onUnsubscribed = function onUnsubscribed(){
}
;
_.request = function request(n){
  if (validate(n)) {
    getAndAddRequest(this, n);
    this.onRequested();
  }
}
;
_.setSubscription = function setSubscription(s){
  $set_1(this.serial, s);
}
;
_.unsubscribe = function unsubscribe_2(){
  $unsubscribe(this.serial.state);
  this.onUnsubscribed();
}
;
var Lrx_internal_operators_OnSubscribeCreate$BaseEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/BaseEmitter', 53);
function $drain(this$static){
  var a, d, e, empty, missed, o, q, r;
  if (this$static.wip.value_1++ != 0) {
    return;
  }
  missed = 1;
  a = this$static.actual;
  q = this$static.queue;
  for (;;) {
    r = this$static.value_0;
    e = 0;
    while (compare_0(e, r) != 0) {
      if (a.subscriptions_0.unsubscribed) {
        $clear(q);
        return;
      }
      d = this$static.done_0;
      o = $poll_2(q);
      empty = o == null;
      if (d && empty) {
        $onCompleted(this$static);
        return;
      }
      if (empty) {
        break;
      }
      a.onNext_0(($clinit_NotificationLite() , maskUndefined(o) === maskUndefined(ON_NEXT_NULL_SENTINEL)?null:o));
      e = add_1(e, 1);
    }
    if (compare_0(e, r) == 0) {
      if (a.subscriptions_0.unsubscribed) {
        $clear(q);
        return;
      }
      d = this$static.done_0;
      empty = eq(q.producerIndex.value_0, q.consumerIndex.value_0);
      if (d && empty) {
        $onCompleted(this$static);
        return;
      }
    }
    compare_0(e, 0) != 0 && produced_0(this$static, e);
    missed = $addAndGet(this$static.wip, -missed);
    if (missed == 0) {
      break;
    }
  }
}

function OnSubscribeCreate$BufferEmitter(actual, capacityHint){
  OnSubscribeCreate$BaseEmitter.call(this, actual);
  this.queue = new SpscUnboundedAtomicArrayQueue(capacityHint);
  this.wip = new AtomicInteger;
}

defineClass(149, 53, $intern_22, OnSubscribeCreate$BufferEmitter);
_.onNext_0 = function onNext_0(t){
  $offer_1(this.queue, ($clinit_NotificationLite() , t == null?ON_NEXT_NULL_SENTINEL:t));
  $drain(this);
}
;
_.onRequested = function onRequested_0(){
  $drain(this);
}
;
_.onUnsubscribed = function onUnsubscribed_0(){
  this.wip.value_1++ == 0 && $clear(this.queue);
}
;
_.done_0 = false;
var Lrx_internal_operators_OnSubscribeCreate$BufferEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/BufferEmitter', 149);
function $onNext(this$static, t){
  if (this$static.actual.subscriptions_0.unsubscribed) {
    return;
  }
  if (neq(this$static.value_0, 0)) {
    this$static.actual.onNext_0(t);
    produced_0(this$static, 1);
  }
   else {
    this$static.onOverflow();
  }
}

function OnSubscribeCreate$NoOverflowBaseEmitter(actual){
  OnSubscribeCreate$BaseEmitter.call(this, actual);
}

defineClass(86, 53, $intern_22);
_.onNext_0 = function onNext_1(t){
  $onNext(this, t);
}
;
var Lrx_internal_operators_OnSubscribeCreate$NoOverflowBaseEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/NoOverflowBaseEmitter', 86);
function OnSubscribeCreate$DropEmitter(actual){
  OnSubscribeCreate$NoOverflowBaseEmitter.call(this, actual);
}

defineClass(147, 86, $intern_22, OnSubscribeCreate$DropEmitter);
_.onOverflow = function onOverflow(){
}
;
var Lrx_internal_operators_OnSubscribeCreate$DropEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/DropEmitter', 147);
function $onError_0(this$static, e){
  if (this$static.done_0) {
    onError_9(e);
    return;
  }
  this$static.done_0 = true;
  $onError(this$static, e);
}

function OnSubscribeCreate$ErrorEmitter(actual){
  OnSubscribeCreate$NoOverflowBaseEmitter.call(this, actual);
}

defineClass(148, 86, $intern_22, OnSubscribeCreate$ErrorEmitter);
_.onNext_0 = function onNext_2(t){
  if (this.done_0) {
    return;
  }
  $onNext(this, t);
}
;
_.onOverflow = function onOverflow_0(){
  $onError_0(this, new MissingBackpressureException_0);
}
;
_.done_0 = false;
var Lrx_internal_operators_OnSubscribeCreate$ErrorEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/ErrorEmitter', 148);
function $drain_0(this$static){
  var a, d, e, empty, missed, o, q, r;
  if (this$static.wip.value_1++ != 0) {
    return;
  }
  missed = 1;
  a = this$static.actual;
  q = this$static.queue;
  for (;;) {
    r = this$static.value_0;
    e = 0;
    while (compare_0(e, r) != 0) {
      if (a.subscriptions_0.unsubscribed) {
        q.value_0 = null;
        return;
      }
      d = this$static.done_0;
      o = $getAndSet(q, null);
      empty = o == null;
      if (d && empty) {
        $onCompleted(this$static);
        return;
      }
      if (empty) {
        break;
      }
      a.onNext_0(($clinit_NotificationLite() , maskUndefined(o) === maskUndefined(ON_NEXT_NULL_SENTINEL)?null:o));
      e = add_1(e, 1);
    }
    if (compare_0(e, r) == 0) {
      if (a.subscriptions_0.unsubscribed) {
        q.value_0 = null;
        return;
      }
      d = this$static.done_0;
      empty = q.value_0 == null;
      if (d && empty) {
        $onCompleted(this$static);
        return;
      }
    }
    compare_0(e, 0) != 0 && produced_0(this$static, e);
    missed = $addAndGet(this$static.wip, -missed);
    if (missed == 0) {
      break;
    }
  }
}

function OnSubscribeCreate$LatestEmitter(actual){
  OnSubscribeCreate$BaseEmitter.call(this, actual);
  this.queue = new AtomicReference;
  this.wip = new AtomicInteger;
}

defineClass(150, 53, $intern_22, OnSubscribeCreate$LatestEmitter);
_.onNext_0 = function onNext_3(t){
  $set(this.queue, ($clinit_NotificationLite() , t == null?ON_NEXT_NULL_SENTINEL:t));
  $drain_0(this);
}
;
_.onRequested = function onRequested_1(){
  $drain_0(this);
}
;
_.onUnsubscribed = function onUnsubscribed_1(){
  this.wip.value_1++ == 0 && (this.queue.value_0 = null);
}
;
_.done_0 = false;
var Lrx_internal_operators_OnSubscribeCreate$LatestEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/LatestEmitter', 150);
function OnSubscribeCreate$NoneEmitter(actual){
  OnSubscribeCreate$BaseEmitter.call(this, actual);
}

defineClass(146, 53, $intern_22, OnSubscribeCreate$NoneEmitter);
_.onNext_0 = function onNext_4(t){
  var r;
  if (this.actual.subscriptions_0.unsubscribed) {
    return;
  }
  this.actual.onNext_0(t);
  for (;;) {
    r = this.value_0;
    if (compare_0(r, 0) == 0 || $compareAndSet_1(this, r, sub_1(r, 1))) {
      return;
    }
  }
}
;
var Lrx_internal_operators_OnSubscribeCreate$NoneEmitter_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeCreate/NoneEmitter', 146);
function $call_1(this$static, child){
  child.setProducer(new OnSubscribeFromArray$FromArrayProducer(child, this$static.array));
}

function OnSubscribeFromArray(array){
  this.array = array;
}

defineClass(137, 1, $intern_21, OnSubscribeFromArray);
_.call_0 = function call_9(child){
  $call_1(this, castTo(child, 10));
}
;
var Lrx_internal_operators_OnSubscribeFromArray_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeFromArray', 137);
function $fastPath(this$static){
  var child, t, t$array, t$index, t$max;
  child = this$static.child;
  for (t$array = this$static.array , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    if (child.subscriptions_0.unsubscribed) {
      return;
    }
    child.onNext_0(t);
  }
  if (child.subscriptions_0.unsubscribed) {
    return;
  }
  child.onCompleted();
}

function $slowPath(this$static, r){
  var array, child, e, i, n;
  child = this$static.child;
  array = this$static.array;
  n = array.length;
  e = 0;
  i = this$static.index_0;
  for (;;) {
    while (compare_0(r, 0) != 0 && i != n) {
      if (child.subscriptions_0.unsubscribed) {
        return;
      }
      child.onNext_0(array[i]);
      ++i;
      if (i == n) {
        child.subscriptions_0.unsubscribed || child.onCompleted();
        return;
      }
      r = sub_1(r, 1);
      e = sub_1(e, 1);
    }
    r = add_1(this$static.value_0, e);
    if (compare_0(r, 0) == 0) {
      this$static.index_0 = i;
      r = (this$static.value_0 = add_1(this$static.value_0, e) , this$static.value_0);
      if (compare_0(r, 0) == 0) {
        return;
      }
      e = 0;
    }
  }
}

function OnSubscribeFromArray$FromArrayProducer(child, array){
  this.child = child;
  this.array = array;
}

defineClass(138, 40, $intern_13, OnSubscribeFromArray$FromArrayProducer);
_.request = function request_0(n){
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('n >= 0 required but it was ' + toString_3(n)));
  }
  eq(n, $intern_19)?eq(getAndAddRequest(this, $intern_19), 0) && $fastPath(this):compare_0(n, 0) != 0 && eq(getAndAddRequest(this, n), 0) && $slowPath(this, n);
}
;
_.index_0 = 0;
var Lrx_internal_operators_OnSubscribeFromArray$FromArrayProducer_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeFromArray/FromArrayProducer', 138);
function $call_2(this$static, o){
  var e, st;
  try {
    st = castTo(onObservableLift_0(this$static.operator).call_2(o), 10);
    try {
      st.onStart();
      this$static.parent_0.call_0(st);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        throwIfFatal(e);
        st.onError_0(e);
      }
       else 
        throw toJs($e0);
    }
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 4)) {
      e = $e1;
      throwIfFatal(e);
      o.onError_0(e);
    }
     else 
      throw toJs($e1);
  }
}

function OnSubscribeLift(parent_0, operator){
  this.parent_0 = parent_0;
  this.operator = operator;
}

defineClass(151, 1, $intern_21, OnSubscribeLift);
_.call_0 = function call_10(o){
  $call_2(this, castTo(o, 10));
}
;
var Lrx_internal_operators_OnSubscribeLift_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeLift', 151);
function $call_3(this$static, o){
  var parent_0;
  parent_0 = new OnSubscribeMap$MapSubscriber(o, this$static.transformer);
  $add_2(o.subscriptions_0, parent_0);
  $unsafeSubscribe(this$static.source, parent_0);
}

function OnSubscribeMap(source, transformer){
  this.source = source;
  this.transformer = transformer;
}

defineClass(46, 1, $intern_21, OnSubscribeMap);
_.call_0 = function call_11(o){
  $call_3(this, castTo(o, 10));
}
;
var Lrx_internal_operators_OnSubscribeMap_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeMap', 46);
function $onError_1(this$static, e){
  if (this$static.done_0) {
    onError_9(e);
    return;
  }
  this$static.done_0 = true;
  this$static.actual.onError_0(e);
}

function OnSubscribeMap$MapSubscriber(actual, mapper){
  Subscriber.call(this);
  this.actual = actual;
  this.mapper = mapper;
}

defineClass(115, 10, $intern_20, OnSubscribeMap$MapSubscriber);
_.onCompleted = function onCompleted(){
  if (this.done_0) {
    return;
  }
  this.actual.onCompleted();
}
;
_.onError_0 = function onError_0(e){
  $onError_1(this, e);
}
;
_.onNext_0 = function onNext_5(t){
  var ex, result;
  try {
    result = this.mapper.call_2(t);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      throwIfFatal(ex);
      $unsubscribe_0(this.subscriptions_0);
      $onError_1(this, addValueAsLastCause(ex, t));
      return;
    }
     else 
      throw toJs($e0);
  }
  this.actual.onNext_0(result);
}
;
_.setProducer = function setProducer_0(p){
  this.actual.setProducer(p);
}
;
_.done_0 = false;
var Lrx_internal_operators_OnSubscribeMap$MapSubscriber_2_classLit = createForClass('rx.internal.operators', 'OnSubscribeMap/MapSubscriber', 115);
function $call_4(this$static, child){
  var producer, s;
  producer = new SingleDelayedProducer(child);
  s = new OperatorAny$1(this$static, producer, child);
  $add_2(child.subscriptions_0, s);
  child.setProducer(producer);
  return s;
}

function OperatorAny(){
  this.returnOnEmpty = true;
}

defineClass(135, 1, {77:1, 8:1}, OperatorAny);
_.call_2 = function call_12(child){
  return $call_4(this, castTo(child, 10));
}
;
_.returnOnEmpty = false;
var Lrx_internal_operators_OperatorAny_2_classLit = createForClass('rx.internal.operators', 'OperatorAny', 135);
function $onError_2(this$static, e){
  if (this$static.done_0) {
    onError_9(e);
  }
   else {
    this$static.done_0 = true;
    this$static.val$child3.onError_0(e);
  }
}

function OperatorAny$1(this$0, val$producer, val$child){
  this.this$01 = this$0;
  this.val$producer2 = val$producer;
  this.val$child3 = val$child;
  Subscriber.call(this);
}

defineClass(136, 10, $intern_20, OperatorAny$1);
_.onCompleted = function onCompleted_0(){
  if (!this.done_0) {
    this.done_0 = true;
    this.hasElements?$setValue_0(this.val$producer2, ($clinit_Boolean() , $clinit_Boolean() , false)):$setValue_0(this.val$producer2, ($clinit_Boolean() , this.this$01.returnOnEmpty?true:false));
  }
}
;
_.onError_0 = function onError_1(e){
  $onError_2(this, e);
}
;
_.onNext_0 = function onNext_6(t){
  var e, result;
  if (this.done_0) {
    return;
  }
  this.hasElements = true;
  try {
    result = checkNotNull(($clinit_Boolean() , $clinit_Boolean() , true));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      throwIfFatal(e);
      $onError_2(this, addValueAsLastCause(e, t));
      return;
    }
     else 
      throw toJs($e0);
  }
  if (result) {
    this.done_0 = true;
    $setValue_0(this.val$producer2, ($clinit_Boolean() , this.this$01.returnOnEmpty?false:true));
    $unsubscribe_0(this.subscriptions_0);
  }
}
;
_.done_0 = false;
_.hasElements = false;
var Lrx_internal_operators_OperatorAny$1_2_classLit = createForClass('rx.internal.operators', 'OperatorAny/1', 136);
function $call_5(this$static, child){
  var producer, subscriber;
  subscriber = new OperatorMerge$MergeSubscriber(child, this$static.delayErrors, this$static.maxConcurrent);
  producer = new OperatorMerge$MergeProducer(subscriber);
  subscriber.producer = producer;
  $add_2(child.subscriptions_0, subscriber);
  child.setProducer(producer);
  return subscriber;
}

function OperatorMerge(){
  this.delayErrors = false;
  this.maxConcurrent = $intern_0;
}

defineClass(142, 1, {77:1, 8:1}, OperatorMerge);
_.call_2 = function call_13(child){
  return $call_5(this, castTo(child, 10));
}
;
_.delayErrors = false;
_.maxConcurrent = 0;
var Lrx_internal_operators_OperatorMerge_2_classLit = createForClass('rx.internal.operators', 'OperatorMerge', 142);
function $clinit_OperatorMerge$HolderNoDelay(){
  $clinit_OperatorMerge$HolderNoDelay = emptyMethod;
  INSTANCE_2 = new OperatorMerge;
}

var INSTANCE_2;
function $clinit_OperatorMerge$InnerSubscriber(){
  $clinit_OperatorMerge$InnerSubscriber = emptyMethod;
  LIMIT = ($clinit_RxRingBuffer() , SIZE) / 4 | 0;
}

function $onError_3(this$static, e){
  this$static.done_0 = true;
  $offer($getOrCreateErrorQueue(this$static.parent_0), e);
  $emit(this$static.parent_0);
}

function $requestMore(this$static, n){
  var k, r;
  r = this$static.outstanding - toInt_0(n);
  if (r > LIMIT) {
    this$static.outstanding = r;
    return;
  }
  this$static.outstanding = ($clinit_RxRingBuffer() , SIZE);
  k = SIZE - r;
  k > 0 && $request(this$static, k);
}

function OperatorMerge$InnerSubscriber(parent_0, id_0){
  $clinit_OperatorMerge$InnerSubscriber();
  Subscriber.call(this);
  this.parent_0 = parent_0;
  this.id_0 = id_0;
}

defineClass(49, 10, {17:1, 10:1, 9:1, 49:1}, OperatorMerge$InnerSubscriber);
_.onCompleted = function onCompleted_1(){
  this.done_0 = true;
  $emit(this.parent_0);
}
;
_.onError_0 = function onError_2(e){
  $onError_3(this, e);
}
;
_.onNext_0 = function onNext_7(t){
  $tryEmit_0(this.parent_0, this, t);
}
;
_.onStart = function onStart_0(){
  this.outstanding = ($clinit_RxRingBuffer() , SIZE);
  $request(this, SIZE);
}
;
_.done_0 = false;
_.id_0 = 0;
_.outstanding = 0;
var LIMIT = 0;
var Lrx_internal_operators_OperatorMerge$InnerSubscriber_2_classLit = createForClass('rx.internal.operators', 'OperatorMerge/InnerSubscriber', 49);
function $produced(this$static, n){
  return this$static.value_0 = add_1(this$static.value_0, -n) , this$static.value_0;
}

function OperatorMerge$MergeProducer(subscriber){
  this.subscriber = subscriber;
}

defineClass(143, 40, $intern_13, OperatorMerge$MergeProducer);
_.request = function request_1(n){
  if (compare_0(n, 0) > 0) {
    if (eq(this.value_0, $intern_19)) {
      return;
    }
    getAndAddRequest(this, n);
    $emit(this.subscriber);
  }
   else if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('n >= 0 required'));
  }
}
;
var Lrx_internal_operators_OperatorMerge$MergeProducer_2_classLit = createForClass('rx.internal.operators', 'OperatorMerge/MergeProducer', 143);
function $clinit_OperatorMerge$MergeSubscriber(){
  $clinit_OperatorMerge$MergeSubscriber = emptyMethod;
  EMPTY_0 = initUnidimensionalArray(Lrx_internal_operators_OperatorMerge$InnerSubscriber_2_classLit, $intern_1, 49, 0, 0, 1);
}

function $checkTerminate(this$static){
  var e, list;
  if (this$static.child.subscriptions_0.unsubscribed) {
    return true;
  }
  e = this$static.errors;
  if (!this$static.delayErrors && !!e && e.size_0 != 0) {
    try {
      list = new ArrayList_0(this$static.errors);
      list.array.length == 1?this$static.child.onError_0((checkCriticalElementIndex(0, list.array.length) , castTo(list.array[0], 4))):this$static.child.onError_0(new CompositeException_0(list));
    }
     finally {
      $unsubscribe_0(this$static.subscriptions_0);
    }
    return true;
  }
  return false;
}

function $emit(this$static){
  if (this$static.emitting) {
    this$static.missed = true;
    return;
  }
  this$static.emitting = true;
  $emitLoop(this$static);
}

function $emitEmpty(this$static){
  var produced;
  produced = this$static.scalarEmissionCount + 1;
  if (produced == this$static.scalarEmissionLimit) {
    this$static.scalarEmissionCount = 0;
    $request(this$static, produced);
  }
   else {
    this$static.scalarEmissionCount = produced;
  }
}

function $emitLoop(this$static){
  var child, d, e, i, i0, index_0, inner, innerCompleted, innerDone, innerQueue, is, j, j0, list, n, o, produced, q, q0, r, replenishMain, scalarEmission, skipFinal, startId, svq, t, unbounded, v;
  skipFinal = false;
  try {
    child = this$static.child;
    for (;;) {
      if ($checkTerminate(this$static)) {
        skipFinal = true;
        return;
      }
      svq = this$static.queue;
      r = this$static.producer.value_0;
      unbounded = eq(r, $intern_19);
      replenishMain = 0;
      if (svq) {
        for (;;) {
          scalarEmission = 0;
          o = null;
          while (compare_0(r, 0) > 0) {
            o = svq.poll();
            if ($checkTerminate(this$static)) {
              skipFinal = true;
              return;
            }
            if (o == null) {
              break;
            }
            v = ($clinit_NotificationLite() , maskUndefined(o) === maskUndefined(ON_NEXT_NULL_SENTINEL)?null:o);
            try {
              child.onNext_0(v);
            }
             catch ($e0) {
              $e0 = toJava($e0);
              if (instanceOf($e0, 4)) {
                t = $e0;
                if (!this$static.delayErrors) {
                  throwIfFatal(t);
                  skipFinal = true;
                  $unsubscribe_0(this$static.subscriptions_0);
                  child.onError_0(t);
                  return;
                }
                $offer($getOrCreateErrorQueue(this$static), t);
              }
               else 
                throw toJs($e0);
            }
            ++replenishMain;
            ++scalarEmission;
            r = sub_1(r, 1);
          }
          scalarEmission > 0 && (unbounded?(r = $intern_19):(r = $produced(this$static.producer, scalarEmission)));
          if (compare_0(r, 0) == 0 || o == null) {
            break;
          }
        }
      }
      d = this$static.done_0;
      svq = this$static.queue;
      inner = this$static.innerSubscribers;
      n = inner.length;
      if (d && (!svq || svq.isEmpty()) && n == 0) {
        e = this$static.errors;
        !e || e.size_0 == 0?child.onCompleted():(list = new ArrayList_0(this$static.errors) , list.array.length == 1?this$static.child.onError_0((checkCriticalElementIndex(0, list.array.length) , castTo(list.array[0], 4))):this$static.child.onError_0(new CompositeException_0(list)));
        skipFinal = true;
        return;
      }
      innerCompleted = false;
      if (n > 0) {
        startId = this$static.lastId;
        index_0 = this$static.lastIndex;
        if (n <= index_0 || neq(inner[index_0].id_0, startId)) {
          n <= index_0 && (index_0 = 0);
          j0 = index_0;
          for (i0 = 0; i0 < n; i0++) {
            if (eq(inner[j0].id_0, startId)) {
              break;
            }
            ++j0;
            j0 == n && (j0 = 0);
          }
          index_0 = j0;
          this$static.lastIndex = j0;
          this$static.lastId = inner[j0].id_0;
        }
        j = index_0;
        for (i = 0; i < n; i++) {
          if ($checkTerminate(this$static)) {
            skipFinal = true;
            return;
          }
          is = inner[j];
          o = null;
          for (;;) {
            produced = 0;
            while (compare_0(r, 0) > 0) {
              if ($checkTerminate(this$static)) {
                skipFinal = true;
                return;
              }
              q0 = is.queue;
              if (!q0) {
                break;
              }
              o = $poll(q0);
              if (o == null) {
                break;
              }
              v = ($clinit_NotificationLite() , maskUndefined(o) === maskUndefined(ON_NEXT_NULL_SENTINEL)?null:o);
              try {
                child.onNext_0(v);
              }
               catch ($e1) {
                $e1 = toJava($e1);
                if (instanceOf($e1, 4)) {
                  t = $e1;
                  skipFinal = true;
                  throwIfFatal(t);
                  try {
                    child.onError_0(t);
                  }
                   finally {
                    $unsubscribe_0(this$static.subscriptions_0);
                  }
                  return;
                }
                 else 
                  throw toJs($e1);
              }
              r = sub_1(r, 1);
              ++produced;
            }
            if (produced > 0) {
              unbounded?(r = $intern_19):(r = $produced(this$static.producer, produced));
              $requestMore(is, produced);
            }
            if (compare_0(r, 0) == 0 || o == null) {
              break;
            }
          }
          innerDone = is.done_0;
          innerQueue = is.queue;
          if (innerDone && (!innerQueue || (q = innerQueue.queue , !q || eq(q.producerIndex.value_0, q.consumerIndex.value_0)))) {
            $removeInner(this$static, is);
            if ($checkTerminate(this$static)) {
              skipFinal = true;
              return;
            }
            ++replenishMain;
            innerCompleted = true;
          }
          if (compare_0(r, 0) == 0) {
            break;
          }
          ++j;
          j == n && (j = 0);
        }
        this$static.lastIndex = j;
        this$static.lastId = inner[j].id_0;
      }
      replenishMain > 0 && $request(this$static, replenishMain);
      if (innerCompleted) {
        continue;
      }
      if (!this$static.missed) {
        skipFinal = true;
        this$static.emitting = false;
        break;
      }
      this$static.missed = false;
    }
  }
   finally {
    skipFinal || (this$static.emitting = false);
  }
}

function $emitScalar(this$static, value_0, r){
  var produced, skipFinal, t;
  skipFinal = false;
  try {
    try {
      this$static.child.onNext_0(value_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        t = $e0;
        if (!this$static.delayErrors) {
          throwIfFatal(t);
          skipFinal = true;
          $unsubscribe_0(this$static.subscriptions_0);
          $onError_4(this$static, t);
          return;
        }
        $offer($getOrCreateErrorQueue(this$static), t);
      }
       else 
        throw toJs($e0);
    }
    neq(r, $intern_19) && $produced(this$static.producer, 1);
    produced = this$static.scalarEmissionCount + 1;
    if (produced == this$static.scalarEmissionLimit) {
      this$static.scalarEmissionCount = 0;
      $request(this$static, produced);
    }
     else {
      this$static.scalarEmissionCount = produced;
    }
    skipFinal = true;
    if (!this$static.missed) {
      this$static.emitting = false;
      return;
    }
    this$static.missed = false;
  }
   finally {
    skipFinal || (this$static.emitting = false);
  }
  $emitLoop(this$static);
}

function $emitScalar_0(this$static, subscriber, value_0, r){
  var skipFinal, t;
  skipFinal = false;
  try {
    try {
      this$static.child.onNext_0(value_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        t = $e0;
        if (!this$static.delayErrors) {
          throwIfFatal(t);
          skipFinal = true;
          $unsubscribe_0(subscriber.subscriptions_0);
          $onError_3(subscriber, t);
          return;
        }
        $offer($getOrCreateErrorQueue(this$static), t);
      }
       else 
        throw toJs($e0);
    }
    neq(r, $intern_19) && $produced(this$static.producer, 1);
    $requestMore(subscriber, 1);
    skipFinal = true;
    if (!this$static.missed) {
      this$static.emitting = false;
      return;
    }
    this$static.missed = false;
  }
   finally {
    skipFinal || (this$static.emitting = false);
  }
  $emitLoop(this$static);
}

function $getOrCreateComposite(this$static){
  var c, shouldAdd;
  c = this$static.subscriptions;
  if (!c) {
    shouldAdd = false;
    c = this$static.subscriptions;
    if (!c) {
      c = new CompositeSubscription;
      this$static.subscriptions = c;
      shouldAdd = true;
    }
    shouldAdd && $add_2(this$static.subscriptions_0, c);
  }
  return c;
}

function $getOrCreateErrorQueue(this$static){
  var q;
  q = this$static.errors;
  if (!q) {
    q = this$static.errors;
    if (!q) {
      q = new ConcurrentLinkedQueue;
      this$static.errors = q;
    }
  }
  return q;
}

function $onError_4(this$static, e){
  $offer($getOrCreateErrorQueue(this$static), e);
  this$static.done_0 = true;
  $emit(this$static);
}

function $onNext_0(this$static, t){
  var $tmp, inner, a, n, b;
  if (!t) {
    return;
  }
  if (t == ($clinit_EmptyObservableHolder() , $clinit_EmptyObservableHolder() , EMPTY)) {
    $emitEmpty(this$static);
  }
   else if (instanceOf(t, 32)) {
    $tryEmit(this$static, castTo(t, 32).t);
  }
   else {
    inner = new OperatorMerge$InnerSubscriber(this$static, ($tmp = this$static.uniqueId , this$static.uniqueId = add_1(this$static.uniqueId, 1) , $tmp));
    $add_3($getOrCreateComposite(this$static), inner);
    a = this$static.innerSubscribers;
    n = a.length;
    b = initUnidimensionalArray(Lrx_internal_operators_OperatorMerge$InnerSubscriber_2_classLit, $intern_1, 49, n + 1, 0, 1);
    arraycopy(a, 0, b, 0, n);
    b[n] = inner;
    this$static.innerSubscribers = b;
    $unsafeSubscribe(t, inner);
    $emit(this$static);
  }
}

function $queueScalar(this$static, value_0){
  var mc, q;
  q = this$static.queue;
  if (!q) {
    mc = this$static.maxConcurrent;
    mc == $intern_0?(q = new SpscUnboundedAtomicArrayQueue(($clinit_RxRingBuffer() , SIZE))):(mc & mc - 1) == 0?(q = new SpscAtomicArrayQueue(mc)):(q = new SpscExactAtomicArrayQueue(mc));
    this$static.queue = q;
  }
  if (!q.offer(($clinit_NotificationLite() , !value_0?ON_NEXT_NULL_SENTINEL:value_0))) {
    $unsubscribe_0(this$static.subscriptions_0);
    $onError_4(this$static, addValueAsLastCause(new MissingBackpressureException, value_0));
  }
}

function $queueScalar_0(subscriber, value_0){
  var ex, q;
  q = subscriber.queue;
  if (!q) {
    q = ($clinit_RxRingBuffer() , new RxRingBuffer);
    $add_2(subscriber.subscriptions_0, q);
    subscriber.queue = q;
  }
  try {
    $onNext_1(q, ($clinit_NotificationLite() , value_0 == null?ON_NEXT_NULL_SENTINEL:value_0));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 51)) {
      ex = $e0;
      $unsubscribe_0(subscriber.subscriptions_0);
      $onError_3(subscriber, ex);
    }
     else if (instanceOf($e0, 31)) {
      ex = $e0;
      if (!subscriber.subscriptions_0.unsubscribed) {
        $unsubscribe_0(subscriber.subscriptions_0);
        $onError_3(subscriber, ex);
      }
    }
     else 
      throw toJs($e0);
  }
}

function $removeInner(this$static, inner){
  var a, b, i, j, n;
  $remove_5(this$static.subscriptions, inner);
  a = this$static.innerSubscribers;
  n = a.length;
  j = -1;
  for (i = 0; i < n; i++) {
    if (inner == a[i]) {
      j = i;
      break;
    }
  }
  if (j < 0) {
    return;
  }
  if (n == 1) {
    this$static.innerSubscribers = EMPTY_0;
    return;
  }
  b = initUnidimensionalArray(Lrx_internal_operators_OperatorMerge$InnerSubscriber_2_classLit, $intern_1, 49, n - 1, 0, 1);
  arraycopy(a, 0, b, 0, j);
  arraycopy(a, j + 1, b, j, n - j - 1);
  this$static.innerSubscribers = b;
}

function $tryEmit(this$static, value_0){
  var mainQueue, r, success;
  success = false;
  r = this$static.producer.value_0;
  if (compare_0(r, 0) != 0) {
    r = this$static.producer.value_0;
    if (!this$static.emitting && compare_0(r, 0) != 0) {
      this$static.emitting = true;
      success = true;
    }
  }
  if (success) {
    mainQueue = this$static.queue;
    if (!mainQueue || mainQueue.isEmpty()) {
      $emitScalar(this$static, value_0, r);
    }
     else {
      $queueScalar(this$static, value_0);
      $emitLoop(this$static);
    }
  }
   else {
    $queueScalar(this$static, value_0);
    $emit(this$static);
  }
}

function $tryEmit_0(this$static, subscriber, value_0){
  var q, r, subscriberQueue, success;
  success = false;
  r = this$static.producer.value_0;
  if (compare_0(r, 0) != 0) {
    r = this$static.producer.value_0;
    if (!this$static.emitting && compare_0(r, 0) != 0) {
      this$static.emitting = true;
      success = true;
    }
  }
  if (success) {
    subscriberQueue = subscriber.queue;
    if (!subscriberQueue || (q = subscriberQueue.queue , !q || eq(q.producerIndex.value_0, q.consumerIndex.value_0))) {
      $emitScalar_0(this$static, subscriber, value_0, r);
    }
     else {
      $queueScalar_0(subscriber, value_0);
      $emitLoop(this$static);
    }
  }
   else {
    $queueScalar_0(subscriber, value_0);
    $emit(this$static);
  }
}

function OperatorMerge$MergeSubscriber(child, delayErrors, maxConcurrent){
  $clinit_OperatorMerge$MergeSubscriber();
  Subscriber.call(this);
  this.child = child;
  this.delayErrors = delayErrors;
  this.maxConcurrent = maxConcurrent;
  this.innerSubscribers = EMPTY_0;
  if (maxConcurrent == $intern_0) {
    this.scalarEmissionLimit = $intern_0;
    $request(this, $intern_19);
  }
   else {
    this.scalarEmissionLimit = 1 > maxConcurrent >> 1?1:maxConcurrent >> 1;
    $request(this, maxConcurrent);
  }
}

defineClass(144, 10, $intern_20, OperatorMerge$MergeSubscriber);
_.onNext_0 = function onNext_8(t){
  $onNext_0(this, castTo(t, 12));
}
;
_.onCompleted = function onCompleted_2(){
  this.done_0 = true;
  $emit(this);
}
;
_.onError_0 = function onError_3(e){
  $onError_4(this, e);
}
;
_.delayErrors = false;
_.done_0 = false;
_.emitting = false;
_.lastId = 0;
_.lastIndex = 0;
_.maxConcurrent = 0;
_.missed = false;
_.scalarEmissionCount = 0;
_.scalarEmissionLimit = 0;
_.uniqueId = 0;
var EMPTY_0;
var Lrx_internal_operators_OperatorMerge$MergeSubscriber_2_classLit = createForClass('rx.internal.operators', 'OperatorMerge/MergeSubscriber', 144);
function $call_6(t){
  var parent_0;
  parent_0 = new SingleFromObservable$WrapSingleIntoSubscriber(t);
  $add_2(t.cs, parent_0);
  $call_7(parent_0);
}

function SingleFromObservable(){
}

defineClass(164, 1, {215:1, 18:1, 19:1, 8:1}, SingleFromObservable);
_.call_0 = function call_14(t){
  $call_6(castTo(t, 58));
}
;
var Lrx_internal_operators_SingleFromObservable_2_classLit = createForClass('rx.internal.operators', 'SingleFromObservable', 164);
function $onError_5(this$static, e){
  if (this$static.state == 2) {
    onError_9(e);
  }
   else {
    this$static.value_0 = null;
    $onError_6(this$static.actual, e);
  }
}

function SingleFromObservable$WrapSingleIntoSubscriber(actual){
  Subscriber.call(this);
  this.actual = actual;
}

defineClass(165, 10, $intern_20, SingleFromObservable$WrapSingleIntoSubscriber);
_.onCompleted = function onCompleted_3(){
  var s, v;
  s = this.state;
  if (s == 0) {
    $onError_6(this.actual, new NoSuchElementException);
  }
   else if (s == 1) {
    this.state = 2;
    v = this.value_0;
    this.value_0 = null;
    $onSuccess(this.actual, v);
  }
}
;
_.onError_0 = function onError_4(e){
  $onError_5(this, e);
}
;
_.onNext_0 = function onNext_9(t){
  var s;
  s = this.state;
  if (s == 0) {
    this.state = 1;
    this.value_0 = t;
  }
   else if (s == 1) {
    this.state = 2;
    $onError_6(this.actual, new IndexOutOfBoundsException_0('The upstream produced more than one value'));
  }
}
;
_.state = 0;
var Lrx_internal_operators_SingleFromObservable$WrapSingleIntoSubscriber_2_classLit = createForClass('rx.internal.operators', 'SingleFromObservable/WrapSingleIntoSubscriber', 165);
function $onError_6(this$static, error){
  $onError_5(this$static.actual, error);
}

function $onSuccess(this$static, value_0){
  $setProducer(this$static.actual, new SingleProducer(this$static.actual, value_0));
}

function SingleLiftObservableOperator$WrapSubscriberIntoSingle(actual){
  this.cs = new SubscriptionList;
  this.actual = actual;
}

defineClass(176, 58, {58:1, 9:1}, SingleLiftObservableOperator$WrapSubscriberIntoSingle);
var Lrx_internal_operators_SingleLiftObservableOperator$WrapSubscriberIntoSingle_2_classLit = createForClass('rx.internal.operators', 'SingleLiftObservableOperator/WrapSubscriberIntoSingle', 176);
function $call_7(t){
  var parent_0;
  parent_0 = new SingleLiftObservableOperator$WrapSubscriberIntoSingle(t);
  $add_2(t.subscriptions_0, parent_0);
  null.$_nullMethod();
}

function $setValue_0(this$static, value_0){
  var s;
  for (;;) {
    s = this$static.value_1;
    if (s == 0) {
      this$static.value_0 = value_0;
      if (!$compareAndSet_0(this$static, 0, 1)) {
        continue;
      }
    }
     else 
      s == 2 && $compareAndSet_0(this$static, 2, 3) && emit(this$static.child, value_0);
    return;
  }
}

function SingleDelayedProducer(child){
  this.child = child;
}

function emit(c, v){
  var e;
  if (c.subscriptions_0.unsubscribed) {
    return;
  }
  try {
    c.onNext_0(v);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      throwIfFatal(e);
      c.onError_0(addValueAsLastCause(e, v));
      return;
    }
     else 
      throw toJs($e0);
  }
  if (c.subscriptions_0.unsubscribed) {
    return;
  }
  c.onCompleted();
}

defineClass(152, 88, $intern_13, SingleDelayedProducer);
_.request = function request_2(n){
  var s;
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('n >= 0 required'));
  }
  if (compare_0(n, 0) == 0) {
    return;
  }
  for (;;) {
    s = this.value_1;
    if (s == 0) {
      if (!$compareAndSet_0(this, 0, 2)) {
        continue;
      }
    }
     else 
      s == 1 && $compareAndSet_0(this, 1, 3) && emit(this.child, this.value_0);
    return;
  }
}
;
var Lrx_internal_producers_SingleDelayedProducer_2_classLit = createForClass('rx.internal.producers', 'SingleDelayedProducer', 152);
function SingleProducer(child, value_0){
  this.child = child;
  this.value_0 = value_0;
}

defineClass(93, 207, {3:1}, SingleProducer);
_.request = function request_3(n){
  var c, e, v;
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalArgumentException('n >= 0 required'));
  }
  if (compare_0(n, 0) == 0) {
    return;
  }
  if ($compareAndSet(this)) {
    c = this.child;
    if (c.subscriptions_0.unsubscribed) {
      return;
    }
    v = this.value_0;
    try {
      c.onNext_0(v);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        throwIfFatal(e);
        c.onError_0(addValueAsLastCause(e, v));
        return;
      }
       else 
        throw toJs($e0);
    }
    if (c.subscriptions_0.unsubscribed) {
      return;
    }
    c.onCompleted();
  }
}
;
var Lrx_internal_producers_SingleProducer_2_classLit = createForClass('rx.internal.producers', 'SingleProducer', 93);
function $unsubscribe(this$static){
  var current;
  current = castTo(this$static.value_0, 9);
  if (current != ($clinit_Unsubscribed() , INSTANCE_3)) {
    current = castTo($getAndSet(this$static, INSTANCE_3), 9);
    !!current && current != INSTANCE_3 && current.unsubscribe();
  }
}

function $update(this$static, next){
  var current;
  for (;;) {
    current = castTo(this$static.value_0, 9);
    if (current == ($clinit_Unsubscribed() , INSTANCE_3)) {
      $unsubscribe_1(next);
      return false;
    }
    if ($compareAndSet_2(this$static, current, next)) {
      !!current && current.unsubscribe();
      return true;
    }
  }
}

function SequentialSubscription(){
}

defineClass(175, 33, {3:1, 9:1}, SequentialSubscription);
_.isUnsubscribed = function isUnsubscribed_2(){
  return maskUndefined(this.value_0) === maskUndefined(($clinit_Unsubscribed() , INSTANCE_3));
}
;
_.unsubscribe = function unsubscribe_3(){
  $unsubscribe(this);
}
;
var Lrx_internal_subscriptions_SequentialSubscription_2_classLit = createForClass('rx.internal.subscriptions', 'SequentialSubscription', 175);
function $clinit_Unsubscribed(){
  $clinit_Unsubscribed = emptyMethod;
  INSTANCE_3 = new Unsubscribed;
}

function Unsubscribed(){
  Enum.call(this, 'INSTANCE', 0);
}

function values_2(){
  $clinit_Unsubscribed();
  return stampJavaTypeInfo(getClassLiteralForArray(Lrx_internal_subscriptions_Unsubscribed_2_classLit, 1), $intern_1, 76, 0, [INSTANCE_3]);
}

defineClass(76, 23, {3:1, 36:1, 23:1, 9:1, 76:1}, Unsubscribed);
_.isUnsubscribed = function isUnsubscribed_3(){
  return true;
}
;
_.unsubscribe = function unsubscribe_4(){
}
;
var INSTANCE_3;
var Lrx_internal_subscriptions_Unsubscribed_2_classLit = createForEnum('rx.internal.subscriptions', 'Unsubscribed', 76, values_2);
function ActionSubscriber(onNext, onError){
  Subscriber.call(this);
  this.onNext = onNext;
  this.onError = onError;
}

defineClass(117, 10, $intern_20, ActionSubscriber);
_.onCompleted = function onCompleted_4(){
}
;
_.onError_0 = function onError_5(e){
  $call_8(e);
}
;
_.onNext_0 = function onNext_10(t){
  this.onNext.call_0(t);
}
;
var Lrx_internal_util_ActionSubscriber_2_classLit = createForClass('rx.internal.util', 'ActionSubscriber', 117);
function $clinit_InternalObservableUtils(){
  $clinit_InternalObservableUtils = emptyMethod;
  ERROR_NOT_IMPLEMENTED = new InternalObservableUtils$ErrorNotImplementedAction;
  new OperatorAny;
}

var ERROR_NOT_IMPLEMENTED;
function $call_8(t){
  $call_9(castTo(t, 4));
}

function $call_9(t){
  throw toJs(new OnErrorNotImplementedException_0(t));
}

function InternalObservableUtils$ErrorNotImplementedAction(){
}

defineClass(116, 1, $intern_10, InternalObservableUtils$ErrorNotImplementedAction);
_.call_0 = function call_15(t){
  $call_8(t);
}
;
var Lrx_internal_util_InternalObservableUtils$ErrorNotImplementedAction_2_classLit = createForClass('rx.internal.util', 'InternalObservableUtils/ErrorNotImplementedAction', 116);
function $clinit_RxRingBuffer(){
  $clinit_RxRingBuffer = emptyMethod;
  SIZE = 128;
}

function $onNext_1(this$static, o){
  var iae, mbe, q;
  iae = false;
  mbe = false;
  q = this$static.queue;
  q?(mbe = !$offer_0(q, ($clinit_NotificationLite() , o == null?ON_NEXT_NULL_SENTINEL:o))):(iae = true);
  if (iae) {
    throw toJs(new IllegalStateException('This instance has been unsubscribed and the queue is no longer usable.'));
  }
  if (mbe) {
    throw toJs(new MissingBackpressureException);
  }
}

function $poll(this$static){
  var o, q, ts;
  q = this$static.queue;
  if (!q) {
    return null;
  }
  o = $poll_0(q);
  ts = this$static.terminalState;
  if (o == null && ts != null && $lvElement(q, $calcElementOffset(q, q.consumerIndex.value_0)) == null) {
    o = ts;
    this$static.terminalState = null;
  }
  return o;
}

function RxRingBuffer(){
  $clinit_RxRingBuffer();
  RxRingBuffer_0.call(this, new SpscAtomicArrayQueue(SIZE));
}

function RxRingBuffer_0(queue){
  this.queue = queue;
}

defineClass(89, 1, $intern_23, RxRingBuffer);
_.isUnsubscribed = function isUnsubscribed_4(){
  return !this.queue;
}
;
_.unsubscribe = function unsubscribe_5(){
}
;
var SIZE = 0;
var Lrx_internal_util_RxRingBuffer_2_classLit = createForClass('rx.internal.util', 'RxRingBuffer', 89);
function $clinit_ScalarSynchronousObservable(){
  $clinit_ScalarSynchronousObservable = emptyMethod;
  STRONG_MODE = checkNotNull(($clinit_Boolean() , $clinit_Boolean() , false));
}

function ScalarSynchronousObservable(t){
  $clinit_ScalarSynchronousObservable();
  Observable.call(this, onCreate(new ScalarSynchronousObservable$JustOnSubscribe(t)));
  this.t = t;
}

function createProducer(s, v){
  $clinit_ScalarSynchronousObservable();
  if (STRONG_MODE) {
    return new SingleProducer(s, v);
  }
  return new ScalarSynchronousObservable$WeakSingleProducer(s, v);
}

defineClass(32, 12, {12:1, 32:1}, ScalarSynchronousObservable);
var STRONG_MODE = false;
var Lrx_internal_util_ScalarSynchronousObservable_2_classLit = createForClass('rx.internal.util', 'ScalarSynchronousObservable', 32);
function $call_10(this$static, child){
  var o;
  o = this$static.this$01.t;
  instanceOf(o, 32)?child.setProducer(createProducer(child, castTo(o, 32).t)):$unsafeSubscribe(o, new Subscribers$5(child, child));
}

function ScalarSynchronousObservable$3(this$0){
  this.this$01 = this$0;
}

defineClass(141, 1, $intern_21, ScalarSynchronousObservable$3);
_.call_0 = function call_16(child){
  $call_10(this, castTo(child, 10));
}
;
var Lrx_internal_util_ScalarSynchronousObservable$3_2_classLit = createForClass('rx.internal.util', 'ScalarSynchronousObservable/3', 141);
function $call_11(this$static, s){
  s.setProducer(createProducer(s, this$static.value_0));
}

function ScalarSynchronousObservable$JustOnSubscribe(value_0){
  this.value_0 = value_0;
}

defineClass(139, 1, $intern_21, ScalarSynchronousObservable$JustOnSubscribe);
_.call_0 = function call_17(s){
  $call_11(this, castTo(s, 10));
}
;
var Lrx_internal_util_ScalarSynchronousObservable$JustOnSubscribe_2_classLit = createForClass('rx.internal.util', 'ScalarSynchronousObservable/JustOnSubscribe', 139);
function ScalarSynchronousObservable$WeakSingleProducer(actual, value_0){
  this.actual = actual;
  this.value_0 = value_0;
}

defineClass(140, 1, {}, ScalarSynchronousObservable$WeakSingleProducer);
_.request = function request_4(n){
  var a, e, v;
  if (this.once_0) {
    return;
  }
  if (compare_0(n, 0) < 0) {
    throw toJs(new IllegalStateException('n >= required but it was ' + toString_3(n)));
  }
  if (compare_0(n, 0) == 0) {
    return;
  }
  this.once_0 = true;
  a = this.actual;
  if (a.subscriptions_0.unsubscribed) {
    return;
  }
  v = this.value_0;
  try {
    a.onNext_0(v);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      throwIfFatal(e);
      a.onError_0(addValueAsLastCause(e, v));
      return;
    }
     else 
      throw toJs($e0);
  }
  if (a.subscriptions_0.unsubscribed) {
    return;
  }
  a.onCompleted();
}
;
_.once_0 = false;
var Lrx_internal_util_ScalarSynchronousObservable$WeakSingleProducer_2_classLit = createForClass('rx.internal.util', 'ScalarSynchronousObservable/WeakSingleProducer', 140);
function $add_2(this$static, s){
  var subs;
  if (s.isUnsubscribed()) {
    return;
  }
  if (!this$static.unsubscribed) {
    if (!this$static.unsubscribed) {
      subs = this$static.subscriptions;
      if (!subs) {
        subs = new LinkedList;
        this$static.subscriptions = subs;
      }
      subs.add_0(s);
      return;
    }
  }
  s.unsubscribe();
}

function $unsubscribe_0(this$static){
  var list;
  if (!this$static.unsubscribed) {
    if (this$static.unsubscribed) {
      return;
    }
    this$static.unsubscribed = true;
    list = this$static.subscriptions;
    this$static.subscriptions = null;
    unsubscribeFromAll(list);
  }
}

function SubscriptionList(){
}

function unsubscribeFromAll(subscriptions){
  var e, es, s, s$iterator;
  if (!subscriptions) {
    return;
  }
  es = null;
  for (s$iterator = subscriptions.iterator(); s$iterator.hasNext_0();) {
    s = castTo(s$iterator.next_1(), 9);
    try {
      s.unsubscribe();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !es && (es = new ArrayList);
        es.array[es.array.length] = e;
      }
       else 
        throw toJs($e0);
    }
  }
  throwIfAny(es);
}

defineClass(87, 1, $intern_23, SubscriptionList);
_.isUnsubscribed = function isUnsubscribed_5(){
  return this.unsubscribed;
}
;
_.unsubscribe = function unsubscribe_6(){
  $unsubscribe_0(this);
}
;
_.unsubscribed = false;
var Lrx_internal_util_SubscriptionList_2_classLit = createForClass('rx.internal.util', 'SubscriptionList', 87);
function $calcElementOffset(this$static, index_0){
  return toInt_0(index_0) & this$static.mask;
}

function $lvElement(this$static, offset){
  return $lvElement_0(this$static.buffer, offset);
}

function $lvElement_0(buffer, offset){
  return buffer.array[offset];
}

defineClass(187, 211, {});
_.iterator = function iterator_10(){
  throw toJs(new UnsupportedOperationException);
}
;
_.mask = 0;
var Lrx_internal_util_atomic_AtomicReferenceArrayQueue_2_classLit = createForClass('rx.internal.util.atomic', 'AtomicReferenceArrayQueue', 187);
function $clinit_SpscAtomicArrayQueue(){
  $clinit_SpscAtomicArrayQueue = emptyMethod;
  MAX_LOOK_AHEAD_STEP = valueOf(($clinit_RxJavaPlugins() , 4096));
}

function $offer_0(this$static, e){
  var buffer, index_0, mask, offset, step;
  if (null == e) {
    throw toJs(new NullPointerException_0('Null is not a valid element'));
  }
  buffer = this$static.buffer;
  mask = this$static.mask;
  index_0 = this$static.producerIndex.value_0;
  offset = toInt_0(index_0) & mask;
  if (gte_0(index_0, this$static.producerLookAhead)) {
    step = this$static.lookAheadStep;
    if (null == $lvElement_0(buffer, toInt_0(add_1(index_0, step)) & mask)) {
      this$static.producerLookAhead = add_1(index_0, step);
    }
     else if (null != buffer.array[offset]) {
      return false;
    }
  }
  buffer.array[offset] = e;
  $lazySet(this$static.producerIndex, add_1(index_0, 1));
  return true;
}

function $poll_0(this$static){
  var e, index_0, lElementBuffer, offset;
  index_0 = this$static.consumerIndex.value_0;
  offset = toInt_0(index_0) & this$static.mask;
  lElementBuffer = this$static.buffer;
  e = lElementBuffer.array[offset];
  if (null == e) {
    return null;
  }
  lElementBuffer.array[offset] = null;
  $lazySet(this$static.consumerIndex, add_1(index_0, 1));
  return e;
}

function SpscAtomicArrayQueue(capacity){
  var actualCapacity;
  $clinit_SpscAtomicArrayQueue();
  actualCapacity = 1 << 32 - numberOfLeadingZeros_0(capacity - 1);
  this.mask = actualCapacity - 1;
  this.buffer = new AtomicReferenceArray(actualCapacity);
  this.producerIndex = new AtomicLong;
  this.consumerIndex = new AtomicLong;
  this.lookAheadStep = min_0(capacity / 4 | 0, MAX_LOOK_AHEAD_STEP.value_0);
}

defineClass(98, 187, {}, SpscAtomicArrayQueue);
_.isEmpty = function isEmpty_4(){
  return eq(this.producerIndex.value_0, this.consumerIndex.value_0);
}
;
_.offer = function offer_0(e){
  return $offer_0(this, e);
}
;
_.poll = function poll_0(){
  return $poll_0(this);
}
;
_.size_1 = function size_12(){
  var after, before, currentProducerIndex;
  after = this.consumerIndex.value_0;
  while (true) {
    before = after;
    currentProducerIndex = this.producerIndex.value_0;
    after = this.consumerIndex.value_0;
    if (compare_0(before, after) == 0) {
      return toInt_0(sub_1(currentProducerIndex, after));
    }
  }
}
;
_.lookAheadStep = 0;
_.producerLookAhead = 0;
var MAX_LOOK_AHEAD_STEP;
var Lrx_internal_util_atomic_SpscAtomicArrayQueue_2_classLit = createForClass('rx.internal.util.atomic', 'SpscAtomicArrayQueue', 98);
function $poll_1(this$static){
  var ci, offset, value_0;
  ci = this$static.consumerIndex.value_0;
  offset = toInt_0(ci) & this$static.mask;
  value_0 = this$static.array[offset];
  if (value_0 == null) {
    return null;
  }
  $lazySet(this$static.consumerIndex, add_1(ci, 1));
  this$static.array[offset] = null;
  return value_0;
}

function SpscExactAtomicArrayQueue(capacity){
  var len;
  AtomicReferenceArray.call(this, 1 << 32 - numberOfLeadingZeros_0(capacity - 1));
  len = this.array.length;
  this.mask = len - 1;
  this.capacitySkip = len - capacity;
  this.producerIndex = new AtomicLong;
  this.consumerIndex = new AtomicLong;
}

defineClass(188, 34, {3:1, 34:1}, SpscExactAtomicArrayQueue);
_.add_0 = function add_14(e){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_5(){
  return this.producerIndex == this.consumerIndex;
}
;
_.iterator = function iterator_11(){
  throw toJs(new UnsupportedOperationException);
}
;
_.offer = function offer_1(value_0){
  var fullCheck, m, offset, pi;
  if (value_0 == null) {
    throw toJs(new NullPointerException);
  }
  pi = this.producerIndex.value_0;
  m = this.mask;
  fullCheck = toInt_0(add_1(pi, this.capacitySkip)) & m;
  if (this.array[fullCheck] != null) {
    return false;
  }
  offset = toInt_0(pi) & m;
  $lazySet(this.producerIndex, add_1(pi, 1));
  this.array[offset] = value_0;
  return true;
}
;
_.poll = function poll_1(){
  return $poll_1(this);
}
;
_.size_1 = function size_13(){
  var ci, ci2, pi;
  ci = this.consumerIndex.value_0;
  for (;;) {
    pi = this.producerIndex.value_0;
    ci2 = this.consumerIndex.value_0;
    if (compare_0(ci, ci2) == 0) {
      return toInt_0(sub_1(pi, ci2));
    }
    ci = ci2;
  }
}
;
_.capacitySkip = 0;
_.mask = 0;
var Lrx_internal_util_atomic_SpscExactAtomicArrayQueue_2_classLit = createForClass('rx.internal.util.atomic', 'SpscExactAtomicArrayQueue', 188);
function $clinit_SpscUnboundedAtomicArrayQueue(){
  $clinit_SpscUnboundedAtomicArrayQueue = emptyMethod;
  MAX_LOOK_AHEAD_STEP_0 = ($clinit_RxJavaPlugins() , 4096);
  HAS_NEXT = new Object_0;
}

function $clear(this$static){
  while ($poll_2(this$static) != null || neq(this$static.producerIndex.value_0, this$static.consumerIndex.value_0))
  ;
}

function $newBufferPoll(this$static, nextBuffer, index_0, mask){
  var n, offsetInNew;
  this$static.consumerBuffer = nextBuffer;
  offsetInNew = toInt_0(index_0) & mask;
  n = nextBuffer.array[offsetInNew];
  if (null == n) {
    return null;
  }
   else {
    $lazySet(this$static.consumerIndex, add_1(index_0, 1));
    nextBuffer.array[offsetInNew] = null;
    return n;
  }
}

function $offer_1(this$static, e){
  var buffer, index_0, lookAheadElementOffset, lookAheadStep, mask, offset, capacity, newBuffer;
  if (e == null) {
    throw toJs(new NullPointerException);
  }
  buffer = this$static.producerBuffer;
  index_0 = this$static.producerIndex.value_0;
  mask = this$static.producerMask;
  offset = toInt_0(index_0) & mask;
  if (lt(index_0, this$static.producerLookAhead)) {
    return $writeToQueue(this$static, buffer, e, index_0, offset);
  }
   else {
    lookAheadStep = this$static.producerLookAheadStep;
    lookAheadElementOffset = toInt_0(add_1(index_0, lookAheadStep)) & mask;
    if (null == buffer.array[lookAheadElementOffset]) {
      this$static.producerLookAhead = sub_1(add_1(index_0, lookAheadStep), 1);
      return $writeToQueue(this$static, buffer, e, index_0, offset);
    }
     else if (null != lvElement(buffer, toInt_0(add_1(index_0, 1)) & mask)) {
      return $writeToQueue(this$static, buffer, e, index_0, offset);
    }
     else {
      capacity = buffer.array.length;
      newBuffer = new AtomicReferenceArray(capacity);
      this$static.producerBuffer = newBuffer;
      this$static.producerLookAhead = sub_1(add_1(index_0, mask), 1);
      $lazySet(this$static.producerIndex, add_1(index_0, 1));
      newBuffer.array[offset] = e;
      soElement(buffer, buffer.array.length - 1, newBuffer);
      $set_0(buffer, offset, HAS_NEXT);
      return true;
    }
  }
}

function $poll_2(this$static){
  var buffer, e, index_0, isNextBuffer, mask, offset;
  buffer = this$static.consumerBuffer;
  index_0 = this$static.consumerIndex.value_0;
  mask = this$static.consumerMask;
  offset = toInt_0(index_0) & mask;
  e = buffer.array[offset];
  isNextBuffer = maskUndefined(e) === maskUndefined(HAS_NEXT);
  if (null != e && !isNextBuffer) {
    $lazySet(this$static.consumerIndex, add_1(index_0, 1));
    buffer.array[offset] = null;
    return e;
  }
   else if (isNextBuffer) {
    return $newBufferPoll(this$static, castTo($get_1(buffer, buffer.array.length - 1), 34), index_0, mask);
  }
  return null;
}

function $writeToQueue(this$static, buffer, e, index_0, offset){
  $lazySet(this$static.producerIndex, add_1(index_0, 1));
  buffer.array[offset] = e;
  return true;
}

function SpscUnboundedAtomicArrayQueue(bufferSize){
  $clinit_SpscUnboundedAtomicArrayQueue();
  var buffer, mask, p2capacity;
  p2capacity = 1 << 32 - numberOfLeadingZeros_0((8 > bufferSize?8:bufferSize) - 1);
  mask = p2capacity - 1;
  this.producerIndex = new AtomicLong;
  this.consumerIndex = new AtomicLong;
  buffer = new AtomicReferenceArray(p2capacity + 1);
  this.producerBuffer = buffer;
  this.producerMask = mask;
  this.producerLookAheadStep = min_0(p2capacity / 4 | 0, MAX_LOOK_AHEAD_STEP_0);
  this.consumerBuffer = buffer;
  this.consumerMask = mask;
  this.producerLookAhead = mask - 1;
  this.producerIndex.value_0 = 0;
}

function lvElement(buffer, offset){
  return buffer.array[offset];
}

function soElement(buffer, offset, e){
  buffer.array[offset] = e;
}

defineClass(92, 1, {}, SpscUnboundedAtomicArrayQueue);
_.add_0 = function add_15(e){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_6(){
  return eq(this.producerIndex.value_0, this.consumerIndex.value_0);
}
;
_.iterator = function iterator_12(){
  throw toJs(new UnsupportedOperationException);
}
;
_.offer = function offer_2(e){
  return $offer_1(this, e);
}
;
_.poll = function poll_2(){
  return $poll_2(this);
}
;
_.size_1 = function size_14(){
  var after, before, currentProducerIndex;
  after = this.consumerIndex.value_0;
  while (true) {
    before = after;
    currentProducerIndex = this.producerIndex.value_0;
    after = this.consumerIndex.value_0;
    if (compare_0(before, after) == 0) {
      return toInt_0(sub_1(currentProducerIndex, after));
    }
  }
}
;
_.consumerMask = 0;
_.producerLookAhead = 0;
_.producerLookAheadStep = 0;
_.producerMask = 0;
var HAS_NEXT, MAX_LOOK_AHEAD_STEP_0 = 0;
var Lrx_internal_util_atomic_SpscUnboundedAtomicArrayQueue_2_classLit = createForClass('rx.internal.util.atomic', 'SpscUnboundedAtomicArrayQueue', 92);
function $_onError(this$static, e){
  var e2, unsubscribeException;
  $getErrorHandler(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5));
  try {
    this$static.actual.onError_0(e);
  }
   catch ($e2) {
    $e2 = toJava($e2);
    if (instanceOf($e2, 41)) {
      e2 = $e2;
      try {
        $unsubscribe_0(this$static.subscriptions_0);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          unsubscribeException = $e0;
          onError_9(unsubscribeException);
          throw toJs(new OnErrorNotImplementedException(new CompositeException_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 4, 0, [e, unsubscribeException])))));
        }
         else 
          throw toJs($e0);
      }
      throw toJs(e2);
    }
     else if (instanceOf($e2, 4)) {
      e2 = $e2;
      onError_9(e2);
      try {
        $unsubscribe_0(this$static.subscriptions_0);
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 4)) {
          unsubscribeException = $e1;
          onError_9(unsubscribeException);
          throw toJs(new OnErrorFailedException('Error occurred when trying to propagate error to Observer.onError and during unsubscription.', new CompositeException_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 4, 0, [e, e2, unsubscribeException])))));
        }
         else 
          throw toJs($e1);
      }
      throw toJs(new OnErrorFailedException('Error occurred when trying to propagate error to Observer.onError', new CompositeException_0(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 4, 0, [e, e2])))));
    }
     else 
      throw toJs($e2);
  }
  try {
    $unsubscribe_0(this$static.subscriptions_0);
  }
   catch ($e3) {
    $e3 = toJava($e3);
    if (instanceOf($e3, 4)) {
      unsubscribeException = $e3;
      onError_9(unsubscribeException);
      throw toJs(new OnErrorFailedException_0(unsubscribeException));
    }
     else 
      throw toJs($e3);
  }
}

function $onError_7(this$static, e){
  throwIfFatal(e);
  if (!this$static.done_0) {
    this$static.done_0 = true;
    $_onError(this$static, e);
  }
}

function SafeSubscriber(actual){
  Subscriber_0.call(this, actual);
  this.actual = actual;
}

defineClass(66, 10, {17:1, 10:1, 9:1, 66:1}, SafeSubscriber);
_.onCompleted = function onCompleted_5(){
  var e;
  if (!this.done_0) {
    this.done_0 = true;
    try {
      this.actual.onCompleted();
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (instanceOf($e1, 4)) {
        e = $e1;
        throwIfFatal(e);
        onError_9(e);
        throw toJs(new OnCompletedFailedException(e.getMessage(), e));
      }
       else 
        throw toJs($e1);
    }
     finally {
      try {
        $unsubscribe_0(this.subscriptions_0);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          onError_9(e);
          throw toJs(new UnsubscribeFailedException(e.getMessage(), e));
        }
         else 
          throw toJs($e0);
      }
    }
  }
}
;
_.onError_0 = function onError_6(e){
  $onError_7(this, e);
}
;
_.onNext_0 = function onNext_11(t){
  var e;
  try {
    this.done_0 || this.actual.onNext_0(t);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      throwIfFatal(e);
      $onError_7(this, e);
    }
     else 
      throw toJs($e0);
  }
}
;
_.done_0 = false;
var Lrx_observers_SafeSubscriber_2_classLit = createForClass('rx.observers', 'SafeSubscriber', 66);
function Subscribers$5($anonymous0, val$subscriber){
  this.val$subscriber2 = val$subscriber;
  Subscriber_0.call(this, $anonymous0);
}

defineClass(157, 10, $intern_20, Subscribers$5);
_.onCompleted = function onCompleted_6(){
  this.val$subscriber2.onCompleted();
}
;
_.onError_0 = function onError_7(e){
  this.val$subscriber2.onError_0(e);
}
;
_.onNext_0 = function onNext_12(t){
  this.val$subscriber2.onNext_0(t);
}
;
var Lrx_observers_Subscribers$5_2_classLit = createForClass('rx.observers', 'Subscribers/5', 157);
defineClass(71, 1, {71:1});
var Lrx_plugins_RxJavaCompletableExecutionHook_2_classLit = createForClass('rx.plugins', 'RxJavaCompletableExecutionHook', 71);
function $handleOnNextValueRendering(){
  try {
    return null;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 4))
      throw toJs($e0);
  }
}

defineClass(68, 1, {68:1});
var Lrx_plugins_RxJavaErrorHandler_2_classLit = createForClass('rx.plugins', 'RxJavaErrorHandler', 68);
function $clinit_RxJavaHooks(){
  $clinit_RxJavaHooks = emptyMethod;
  onError_8 = new RxJavaHooks$1;
  onObservableStart = new RxJavaHooks$2;
  onObservableReturn = new RxJavaHooks$3;
  onSingleStart = new RxJavaHooks$4;
  onSingleReturn = new RxJavaHooks$5;
  onCompletableStart = new RxJavaHooks$6;
  onScheduleAction = new RxJavaHooks$7;
  onObservableSubscribeError = new RxJavaHooks$8;
  onObservableLift = new RxJavaHooks$9;
  onSingleSubscribeError = new RxJavaHooks$10;
  onSingleLift = new RxJavaHooks$11;
  onCompletableSubscribeError = new RxJavaHooks$12;
  onCompletableLift = new RxJavaHooks$13;
  onObservableCreate = new RxJavaHooks$14;
  onSingleCreate = new RxJavaHooks$15;
  onCompletableCreate = new RxJavaHooks$16;
}

function onCreate(onSubscribe){
  $clinit_RxJavaHooks();
  var f;
  f = onObservableCreate;
  if (f) {
    return castTo(f.call_2(onSubscribe), 28);
  }
  return onSubscribe;
}

function onError_9(ex){
  $clinit_RxJavaHooks();
  var f, pluginException;
  f = onError_8;
  if (f) {
    try {
      f.call_0(ex);
      return;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        pluginException = $e0;
        $clinit_System();
        "The onError handler threw an Exception. It shouldn't. => " + pluginException.getMessage();
        pluginException.printStackTrace();
        $clinit_Thread();
        null.$_nullMethod();
      }
       else 
        throw toJs($e0);
    }
  }
  $clinit_Thread();
  null.$_nullMethod();
}

function onObservableError(error){
  $clinit_RxJavaHooks();
  var f;
  f = onObservableSubscribeError;
  if (f) {
    return castTo(f.call_2(error), 4);
  }
  return error;
}

function onObservableLift_0(operator){
  $clinit_RxJavaHooks();
  var f;
  f = onObservableLift;
  if (f) {
    return castTo(f.call_2(operator), 77);
  }
  return operator;
}

function onObservableReturn_0(subscription){
  $clinit_RxJavaHooks();
  var f;
  f = onObservableReturn;
  if (f) {
    return castTo(f.call_2(subscription), 9);
  }
  return subscription;
}

function onObservableStart_0(instance, onSubscribe){
  $clinit_RxJavaHooks();
  var f;
  f = onObservableStart;
  if (f) {
    return castTo(f.call_3(instance, onSubscribe), 28);
  }
  return onSubscribe;
}

var onCompletableCreate, onCompletableLift, onCompletableStart, onCompletableSubscribeError, onError_8, onObservableCreate, onObservableLift, onObservableReturn, onObservableStart, onObservableSubscribeError, onScheduleAction, onSingleCreate, onSingleLift, onSingleReturn, onSingleStart, onSingleSubscribeError;
function RxJavaHooks$1(){
}

defineClass(119, 1, $intern_10, RxJavaHooks$1);
_.call_0 = function call_18(e){
  castTo(e, 4);
  $getErrorHandler(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5));
}
;
var Lrx_plugins_RxJavaHooks$1_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/1', 119);
function $call_12(t){
  return $getSingleExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$10(){
}

defineClass(128, 1, $intern_12, RxJavaHooks$10);
_.call_2 = function call_19(t){
  return $call_12(castTo(t, 4));
}
;
var Lrx_plugins_RxJavaHooks$10_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/10', 128);
function $call_13(t){
  return $getSingleExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$11(){
}

defineClass(129, 1, $intern_12, RxJavaHooks$11);
_.call_2 = function call_20(t){
  return $call_13(castTo(t, 77));
}
;
var Lrx_plugins_RxJavaHooks$11_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/11', 129);
function $call_14(t){
  return $getCompletableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$12(){
}

defineClass(130, 1, $intern_12, RxJavaHooks$12);
_.call_2 = function call_21(t){
  return $call_14(castTo(t, 4));
}
;
var Lrx_plugins_RxJavaHooks$12_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/12', 130);
function $call_15(t){
  return $getCompletableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$13(){
}

defineClass(131, 1, $intern_12, RxJavaHooks$13);
_.call_2 = function call_22(t){
  return $call_15(throwClassCastExceptionUnlessNull(t));
}
;
var Lrx_plugins_RxJavaHooks$13_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/13', 131);
function $call_16(f){
  return $getObservableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , f;
}

function RxJavaHooks$14(){
}

defineClass(132, 1, $intern_12, RxJavaHooks$14);
_.call_2 = function call_23(f){
  return $call_16(castTo(f, 28));
}
;
var Lrx_plugins_RxJavaHooks$14_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/14', 132);
function $call_17(f){
  return $getSingleExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , f;
}

function RxJavaHooks$15(){
}

defineClass(133, 1, $intern_12, RxJavaHooks$15);
_.call_2 = function call_24(f){
  return $call_17(castTo(f, 215));
}
;
var Lrx_plugins_RxJavaHooks$15_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/15', 133);
function $call_18(f){
  return $getCompletableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , f;
}

function RxJavaHooks$16(){
}

defineClass(134, 1, $intern_12, RxJavaHooks$16);
_.call_2 = function call_25(f){
  return $call_18(throwClassCastExceptionUnlessNull(f));
}
;
var Lrx_plugins_RxJavaHooks$16_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/16', 134);
function RxJavaHooks$2(){
}

defineClass(120, 1, $intern_12, RxJavaHooks$2);
_.call_3 = function call_26(t1, t2){
  return $getObservableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t2;
}
;
var Lrx_plugins_RxJavaHooks$2_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/2', 120);
function $call_19(f){
  return $getObservableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , f;
}

function RxJavaHooks$3(){
}

defineClass(121, 1, $intern_12, RxJavaHooks$3);
_.call_2 = function call_27(f){
  return $call_19(castTo(f, 9));
}
;
var Lrx_plugins_RxJavaHooks$3_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/3', 121);
function $call_20(t2){
  var hook;
  hook = $getSingleExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5));
  if (hook == ($clinit_RxJavaSingleExecutionHookDefault() , $clinit_RxJavaSingleExecutionHookDefault() , INSTANCE_6)) {
    return t2;
  }
  return new SingleFromObservable;
}

function RxJavaHooks$4(){
}

defineClass(122, 1, $intern_12, RxJavaHooks$4);
_.call_3 = function call_28(t1, t2){
  return $call_20((throwClassCastExceptionUnlessNull(t1) , throwClassCastExceptionUnlessNull(t2)));
}
;
var Lrx_plugins_RxJavaHooks$4_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/4', 122);
function $call_21(f){
  return $getSingleExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , f;
}

function RxJavaHooks$5(){
}

defineClass(123, 1, $intern_12, RxJavaHooks$5);
_.call_2 = function call_29(f){
  return $call_21(castTo(f, 9));
}
;
var Lrx_plugins_RxJavaHooks$5_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/5', 123);
function $call_22(t2){
  return $getCompletableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t2;
}

function RxJavaHooks$6(){
}

defineClass(124, 1, $intern_12, RxJavaHooks$6);
_.call_3 = function call_30(t1, t2){
  return $call_22((throwClassCastExceptionUnlessNull(t1) , throwClassCastExceptionUnlessNull(t2)));
}
;
var Lrx_plugins_RxJavaHooks$6_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/6', 124);
function $call_23(a){
  return $getSchedulersHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , a;
}

function RxJavaHooks$7(){
}

defineClass(125, 1, $intern_12, RxJavaHooks$7);
_.call_2 = function call_31(a){
  return $call_23(castTo(a, 78));
}
;
var Lrx_plugins_RxJavaHooks$7_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/7', 125);
function $call_24(t){
  return $getObservableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$8(){
}

defineClass(126, 1, $intern_12, RxJavaHooks$8);
_.call_2 = function call_32(t){
  return $call_24(castTo(t, 4));
}
;
var Lrx_plugins_RxJavaHooks$8_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/8', 126);
function $call_25(t){
  return $getObservableExecutionHook(($clinit_RxJavaPlugins() , $clinit_RxJavaPlugins() , INSTANCE_5)) , t;
}

function RxJavaHooks$9(){
}

defineClass(127, 1, $intern_12, RxJavaHooks$9);
_.call_2 = function call_33(t){
  return $call_25(castTo(t, 77));
}
;
var Lrx_plugins_RxJavaHooks$9_2_classLit = createForClass('rx.plugins', 'RxJavaHooks/9', 127);
defineClass(69, 1, {69:1});
var Lrx_plugins_RxJavaObservableExecutionHook_2_classLit = createForClass('rx.plugins', 'RxJavaObservableExecutionHook', 69);
function $clinit_RxJavaObservableExecutionHookDefault(){
  $clinit_RxJavaObservableExecutionHookDefault = emptyMethod;
  INSTANCE_4 = new RxJavaObservableExecutionHookDefault;
}

function RxJavaObservableExecutionHookDefault(){
}

defineClass(167, 69, {69:1}, RxJavaObservableExecutionHookDefault);
var INSTANCE_4;
var Lrx_plugins_RxJavaObservableExecutionHookDefault_2_classLit = createForClass('rx.plugins', 'RxJavaObservableExecutionHookDefault', 167);
function $clinit_RxJavaPlugins(){
  $clinit_RxJavaPlugins = emptyMethod;
  INSTANCE_5 = new RxJavaPlugins;
  DEFAULT_ERROR_HANDLER = new RxJavaPlugins$1;
}

function $getCompletableExecutionHook(this$static){
  this$static.completableExecutionHook.value_0 == null && $compareAndSet_2(this$static.completableExecutionHook, null, new RxJavaPlugins$2);
  return castTo(this$static.completableExecutionHook.value_0, 71);
}

function $getErrorHandler(this$static){
  this$static.errorHandler.value_0 == null && $compareAndSet_2(this$static.errorHandler, null, DEFAULT_ERROR_HANDLER);
  return castTo(this$static.errorHandler.value_0, 68);
}

function $getObservableExecutionHook(this$static){
  this$static.observableExecutionHook.value_0 == null && $compareAndSet_2(this$static.observableExecutionHook, null, ($clinit_RxJavaObservableExecutionHookDefault() , $clinit_RxJavaObservableExecutionHookDefault() , INSTANCE_4));
  return castTo(this$static.observableExecutionHook.value_0, 69);
}

function $getSchedulersHook(this$static){
  this$static.schedulersHook.value_0 == null && $compareAndSet_2(this$static.schedulersHook, null, ($clinit_RxJavaSchedulersHook() , $clinit_RxJavaSchedulersHook() , DEFAULT_INSTANCE));
  return castTo(this$static.schedulersHook.value_0, 72);
}

function $getSingleExecutionHook(this$static){
  this$static.singleExecutionHook.value_0 == null && $compareAndSet_2(this$static.singleExecutionHook, null, ($clinit_RxJavaSingleExecutionHookDefault() , $clinit_RxJavaSingleExecutionHookDefault() , INSTANCE_6));
  return castTo(this$static.singleExecutionHook.value_0, 70);
}

function RxJavaPlugins(){
  this.errorHandler = new AtomicReference;
  this.observableExecutionHook = new AtomicReference;
  this.singleExecutionHook = new AtomicReference;
  this.completableExecutionHook = new AtomicReference;
  this.schedulersHook = new AtomicReference;
}

defineClass(154, 1, {}, RxJavaPlugins);
var DEFAULT_ERROR_HANDLER, INSTANCE_5;
var Lrx_plugins_RxJavaPlugins_2_classLit = createForClass('rx.plugins', 'RxJavaPlugins', 154);
function RxJavaPlugins$1(){
}

defineClass(155, 68, {68:1}, RxJavaPlugins$1);
var Lrx_plugins_RxJavaPlugins$1_2_classLit = createForClass('rx.plugins', 'RxJavaPlugins/1', 155);
function RxJavaPlugins$2(){
}

defineClass(156, 71, {71:1}, RxJavaPlugins$2);
var Lrx_plugins_RxJavaPlugins$2_2_classLit = createForClass('rx.plugins', 'RxJavaPlugins/2', 156);
function $clinit_RxJavaSchedulersHook(){
  $clinit_RxJavaSchedulersHook = emptyMethod;
  DEFAULT_INSTANCE = new RxJavaSchedulersHook;
}

function RxJavaSchedulersHook(){
}

defineClass(72, 1, {72:1}, RxJavaSchedulersHook);
var DEFAULT_INSTANCE;
var Lrx_plugins_RxJavaSchedulersHook_2_classLit = createForClass('rx.plugins', 'RxJavaSchedulersHook', 72);
defineClass(70, 1, {70:1});
var Lrx_plugins_RxJavaSingleExecutionHook_2_classLit = createForClass('rx.plugins', 'RxJavaSingleExecutionHook', 70);
function $clinit_RxJavaSingleExecutionHookDefault(){
  $clinit_RxJavaSingleExecutionHookDefault = emptyMethod;
  INSTANCE_6 = new RxJavaSingleExecutionHookDefault;
}

function RxJavaSingleExecutionHookDefault(){
}

defineClass(163, 70, {70:1}, RxJavaSingleExecutionHookDefault);
var INSTANCE_6;
var Lrx_plugins_RxJavaSingleExecutionHookDefault_2_classLit = createForClass('rx.plugins', 'RxJavaSingleExecutionHookDefault', 163);
function $clinit_BooleanSubscription(){
  $clinit_BooleanSubscription = emptyMethod;
  EMPTY_ACTION = new BooleanSubscription$1;
}

function $unsubscribe_1(this$static){
  var action;
  action = castTo(this$static.actionRef.value_0, 78);
  if (action != EMPTY_ACTION) {
    action = castTo($getAndSet(this$static.actionRef, EMPTY_ACTION), 78);
    !!action && action != EMPTY_ACTION && action.call_1();
  }
}

function BooleanSubscription(action){
  $clinit_BooleanSubscription();
  this.actionRef = new AtomicReference_0(action);
}

defineClass(161, 1, $intern_23, BooleanSubscription);
_.isUnsubscribed = function isUnsubscribed_6(){
  return maskUndefined(this.actionRef.value_0) === maskUndefined(EMPTY_ACTION);
}
;
_.unsubscribe = function unsubscribe_7(){
  $unsubscribe_1(this);
}
;
var EMPTY_ACTION;
var Lrx_subscriptions_BooleanSubscription_2_classLit = createForClass('rx.subscriptions', 'BooleanSubscription', 161);
function BooleanSubscription$1(){
}

defineClass(162, 1, $intern_11, BooleanSubscription$1);
_.call_1 = function call_34(){
}
;
var Lrx_subscriptions_BooleanSubscription$1_2_classLit = createForClass('rx.subscriptions', 'BooleanSubscription/1', 162);
function $add_3(this$static, s){
  if (s.subscriptions_0.unsubscribed) {
    return;
  }
  if (!this$static.unsubscribed) {
    if (!this$static.unsubscribed) {
      !this$static.subscriptions && (this$static.subscriptions = new HashSet_0);
      $add(this$static.subscriptions, s);
      return;
    }
  }
  $unsubscribe_0(s.subscriptions_0);
}

function $remove_5(this$static, s){
  var unsubscribe;
  if (!this$static.unsubscribed) {
    if (this$static.unsubscribed || !this$static.subscriptions) {
      return;
    }
    unsubscribe = $remove_0(this$static.subscriptions, s);
    unsubscribe && $unsubscribe_0(s.subscriptions_0);
  }
}

function CompositeSubscription(){
}

function unsubscribeFromAll_0(subscriptions){
  var e, entry, es, outerIter, s, s$iterator;
  if (!subscriptions) {
    return;
  }
  es = null;
  for (s$iterator = (outerIter = (new AbstractMap$1(subscriptions.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); s$iterator.val$outerIter2.hasNext_0();) {
    s = (entry = castTo(s$iterator.val$outerIter2.next_1(), 13) , castTo(entry.getKey(), 9));
    try {
      s.unsubscribe();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !es && (es = new ArrayList);
        es.array[es.array.length] = e;
      }
       else 
        throw toJs($e0);
    }
  }
  throwIfAny(es);
}

defineClass(183, 1, $intern_23, CompositeSubscription);
_.isUnsubscribed = function isUnsubscribed_7(){
  return this.unsubscribed;
}
;
_.unsubscribe = function unsubscribe_8(){
  var unsubscribe;
  if (!this.unsubscribed) {
    if (this.unsubscribed) {
      return;
    }
    this.unsubscribed = true;
    unsubscribe = this.subscriptions;
    this.subscriptions = null;
    unsubscribeFromAll_0(unsubscribe);
  }
}
;
_.unsubscribed = false;
var Lrx_subscriptions_CompositeSubscription_2_classLit = createForClass('rx.subscriptions', 'CompositeSubscription', 183);
function $set_1(this$static, s){
  $update(this$static.state, s);
}

function SerialSubscription(){
  this.state = new SequentialSubscription;
}

defineClass(166, 1, $intern_23, SerialSubscription);
_.isUnsubscribed = function isUnsubscribed_8(){
  return maskUndefined(this.state.value_0) === maskUndefined(($clinit_Unsubscribed() , INSTANCE_3));
}
;
_.unsubscribe = function unsubscribe_9(){
  $unsubscribe(this.state);
}
;
var Lrx_subscriptions_SerialSubscription_2_classLit = createForClass('rx.subscriptions', 'SerialSubscription', 166);
function $clinit_Subscriptions(){
  $clinit_Subscriptions = emptyMethod;
  UNSUBSCRIBED = new Subscriptions$Unsubscribed;
}

function create_1(unsubscribe){
  $clinit_Subscriptions();
  return $clinit_BooleanSubscription() , new BooleanSubscription(unsubscribe);
}

var UNSUBSCRIBED;
function Subscriptions$Unsubscribed(){
}

defineClass(145, 1, $intern_23, Subscriptions$Unsubscribed);
_.isUnsubscribed = function isUnsubscribed_9(){
  return true;
}
;
_.unsubscribe = function unsubscribe_10(){
}
;
var Lrx_subscriptions_Subscriptions$Unsubscribed_2_classLit = createForClass('rx.subscriptions', 'Subscriptions/Unsubscribed', 145);
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', null);
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', null);
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', null);
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', null);
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', null);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=dndfiles-0.js

