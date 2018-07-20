var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.dndfiles;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2-rx1";
var $strongName = 'AE84FCC82FF96BE055C4E9CA99F8B84D';
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
var $intern_0 = 2147483647, $intern_1 = {3:1, 6:1}, $intern_2 = {3:1, 8:1, 7:1, 4:1}, $intern_3 = 4194303, $intern_4 = 1048575, $intern_5 = 524288, $intern_6 = -17592186044416, $intern_7 = 17592186044416, $intern_8 = 4194304, $intern_9 = {3:1, 18:1, 4:1}, $intern_10 = {16:1, 13:1}, $intern_11 = {3:1, 8:1, 19:1, 7:1, 4:1}, $intern_12 = {14:1, 3:1, 20:1}, $intern_13 = {58:1, 14:1, 21:1, 47:1, 36:1}, $intern_14 = {14:1, 21:1, 47:1, 36:1}, $intern_15 = {16:1, 13:1, 79:1, 22:1}, $intern_16 = {3:1, 24:1}, $intern_17 = {27:1, 3:1, 6:1}, $intern_18 = {35:1}, $intern_19 = {11:1};
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
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
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
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
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
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
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

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
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

defineClass(60, 1, {}, Class);
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
_.toString_0 = function toString_13(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 60);
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 17, 0, 0, 1);
}

function $constructJavaStackTrace(this$static){
  var stackTrace;
  return $clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace);
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause_0);
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

function Throwable(message){
  $$init(this);
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}

function Throwable_0(message, cause){
  $$init(this);
  this.cause_0 = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
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
  return new Error(msg);
}
;
_.fillInStackTrace = function fillInStackTrace(){
  if (this.writetableStackTrace) {
    this.backingJsObject !== '__noinit__' && this.initializeBackingError();
    this.stackTrace = null;
  }
  return this;
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
defineClass(8, 4, {3:1, 8:1, 4:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 8);
function RuntimeException(){
  $$init(this);
  this.fillInStackTrace();
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Throwable.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable_0.call(this, message, cause);
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause_0 = cause;
  this.fillInStackTrace();
  this.initializeBackingError();
}

defineClass(7, 8, $intern_2, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 7);
defineClass(50, 7, $intern_2);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 50);
defineClass(89, 50, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 89);
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
  this.fillInStackTrace();
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

defineClass(40, 89, {40:1, 3:1, 8:1, 7:1, 4:1}, JavaScriptException);
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
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 40);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(139, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 139);
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
        reportToBrowser(instanceOf(e, 40)?castTo(e, 40).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(109, 139, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 109);
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
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
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
defineClass(153, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 153);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(90, 153, {}, StackTraceCreator$CollectorLegacy);
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 17, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 90);
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

defineClass(154, 153, {});
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 17, 0, 0, 1);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 154);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(91, 154, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 91);
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
  file = castToNative(input_0($name(($clinit_InputType() , file_1))).element, $wnd.HTMLInputElement);
  ($clinit_DomGlobal() , document_0).body.appendChild(file);
  out = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('output'), $wnd.HTMLElement))).element, $wnd.HTMLOutputElement);
  document_0.body.appendChild(out);
  input$ = $map($map(create_1(new RxElemental2$lambda$0$Type(file, ($clinit_EventType() , change).name_0)), new RxElemento$0methodref$cast$Type), new DndFiles$lambda$0$Type(file));
  drop$ = $map($map(create_1(new RxElemental2$lambda$0$Type(document_0.body, drop.name_0)), new RxElemento$0methodref$cast$Type), new DndFiles$lambda$1$Type);
  $subscribe_1((requireNonNull(input$, 'source1 is null') , requireNonNull(drop$, 'source2 is null') , $flatMap(fromArray(stampJavaTypeInfo(getClassLiteralForArray(Lio_reactivex_ObservableSource_2_classLit, 1), $intern_1, 13, 0, [input$, drop$])), ($clinit_Functions() , $clinit_Functions() , IDENTITY), ($clinit_Flowable() , $clinit_Flowable() , BUFFER_SIZE))), new DndFiles$lambda$2$Type(out), ON_ERROR_MISSING, EMPTY_ACTION, (null , EMPTY_CONSUMER));
  $subscribe_1($map(create_1(new RxElemental2$lambda$0$Type(document_0.body, dragover.name_0)), new RxElemento$0methodref$cast$Type), new DndFiles$lambda$3$Type, ON_ERROR_MISSING, EMPTY_ACTION, (null , EMPTY_CONSUMER));
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie9', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable_0.call(this, message, cause);
}

defineClass(18, 4, $intern_9);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 18);
defineClass(12, 18, $intern_9);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 12);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_4('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(80, 12, $intern_9, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 80);
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
  set_0(s_3, new CancellableDisposable(new RxElemental2$lambda$2$Type(source_0, type_1, listener, useCapture_2)));
}

function RxElemental2$0methodref$onNext$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(100, 1, {}, RxElemental2$0methodref$onNext$Type);
_.handleEvent = function handleEvent(arg0){
  $onNext(this.$$outer_0, arg0);
}
;
var Lcom_intendia_rxgwt2_elemental2_RxElemental2$0methodref$onNext$Type_2_classLit = createForClass('com.intendia.rxgwt2.elemental2', 'RxElemental2/0methodref$onNext$Type', 100);
function $subscribe(this$static, arg0){
  lambda$0(this$static.source_0, this$static.type_1, this$static.useCapture_2, arg0);
}

function RxElemental2$lambda$0$Type(source_0, type_1){
  this.source_0 = source_0;
  this.type_1 = type_1;
  this.useCapture_2 = false;
}

defineClass(48, 1, {}, RxElemental2$lambda$0$Type);
_.useCapture_2 = false;
var Lcom_intendia_rxgwt2_elemental2_RxElemental2$lambda$0$Type_2_classLit = createForClass('com.intendia.rxgwt2.elemental2', 'RxElemental2/lambda$0$Type', 48);
function RxElemental2$lambda$2$Type(source_0, type_1, listener_2, useCapture_3){
  this.source_0 = source_0;
  this.type_1 = type_1;
  this.listener_2 = listener_2;
  this.useCapture_3 = useCapture_3;
}

defineClass(101, 1, {162:1}, RxElemental2$lambda$2$Type);
_.useCapture_3 = false;
var Lcom_intendia_rxgwt2_elemental2_RxElemental2$lambda$2$Type_2_classLit = createForClass('com.intendia.rxgwt2.elemental2', 'RxElemental2/lambda$2$Type', 101);
function RxElemento$0methodref$cast$Type(){
}

defineClass(49, 1, {}, RxElemento$0methodref$cast$Type);
_.apply_0 = function apply_1(arg0){
  return arg0;
}
;
var Lcom_intendia_rxgwt2_elemento_RxElemento$0methodref$cast$Type_2_classLit = createForClass('com.intendia.rxgwt2.elemento', 'RxElemento/0methodref$cast$Type', 49);
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
  return li_0.textContent = reader_1.result.substr(0, 100);
}

function DndFiles$lambda$0$Type(file_0){
  this.file_0 = file_0;
}

defineClass(82, 1, {}, DndFiles$lambda$0$Type);
_.apply_0 = function apply_2(arg0){
  return this.file_0.files;
}
;
var Ldndfiles_client_DndFiles$lambda$0$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$0$Type', 82);
function DndFiles$lambda$1$Type(){
}

defineClass(83, 1, {}, DndFiles$lambda$1$Type);
_.apply_0 = function apply_3(arg0){
  return consume(castToNative(arg0, $wnd.DragEvent)).dataTransfer.files;
}
;
var Ldndfiles_client_DndFiles$lambda$1$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$1$Type', 83);
function DndFiles$lambda$2$Type(out_0){
  this.out_0 = out_0;
}

defineClass(84, 1, {}, DndFiles$lambda$2$Type);
_.accept = function accept(arg0){
  lambda$2(this.out_0, arg0);
}
;
var Ldndfiles_client_DndFiles$lambda$2$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$2$Type', 84);
function DndFiles$lambda$3$Type(){
}

defineClass(85, 1, {}, DndFiles$lambda$3$Type);
_.accept = function accept_0(arg0){
  consume(castToNative(arg0, $wnd.DragEvent)).dataTransfer.dropEffect = 'copy';
}
;
var Ldndfiles_client_DndFiles$lambda$3$Type_2_classLit = createForClass('dndfiles.client', 'DndFiles/lambda$3$Type', 85);
function DndFiles$lambda$4$Type(li_0){
  this.li_0 = li_0;
}

defineClass(167, $wnd.Function, {}, DndFiles$lambda$4$Type);
_.onInvoke = function onInvoke(arg0){
  return lambda$4(this.li_0, arg0);
}
;
function DndFiles$lambda$5$Type(li_0, reader_1){
  this.li_0 = li_0;
  this.reader_1 = reader_1;
}

defineClass(168, $wnd.Function, {}, DndFiles$lambda$5$Type);
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
function $clinit_Flowable(){
  $clinit_Flowable = emptyMethod;
  BUFFER_SIZE = $wnd.Math.max(1, 128);
}

var BUFFER_SIZE = 0;
var Lio_reactivex_ObservableSource_2_classLit = createForInterface('io.reactivex', 'ObservableSource');
function $flatMap(this$static, mapper, bufferSize){
  var v;
  requireNonNull(mapper, 'mapper is null');
  verifyPositive(2, 'maxConcurrency');
  verifyPositive(bufferSize, 'bufferSize');
  if (instanceOf(this$static, 79)) {
    v = castTo(this$static, 79).call_0();
    if (!v) {
      return onAssembly(($clinit_ObservableEmpty() , INSTANCE_1));
    }
    return onAssembly(new ObservableScalarXMap$ScalarXMapObservable(v, mapper));
  }
  return onAssembly(new ObservableFlatMap(this$static, mapper, bufferSize));
}

function $map(this$static, mapper){
  requireNonNull(mapper, 'mapper is null');
  return onAssembly(new ObservableMap(this$static, mapper));
}

function $subscribe_0(this$static, observer){
  var e, npe;
  requireNonNull(observer, 'observer is null');
  try {
    observer = observer;
    requireNonNull(observer, 'Plugin returned null Observer');
    this$static.subscribeActual(observer);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      throw toJs(e);
    }
     else if (instanceOf($e0, 4)) {
      e = $e0;
      onError_4(e);
      npe = new NullPointerException_0("Actually not, but can't throw other exceptions due to RS");
      $initCause(npe, e);
      throw toJs(npe);
    }
     else 
      throw toJs($e0);
  }
}

function $subscribe_1(this$static, onNext, onError, onComplete, onSubscribe){
  var ls;
  requireNonNull(onNext, 'onNext is null');
  requireNonNull(onError, 'onError is null');
  requireNonNull(onComplete, 'onComplete is null');
  requireNonNull(onSubscribe, 'onSubscribe is null');
  ls = new LambdaObserver(onNext, onError);
  $subscribe_0(this$static, ls);
  return ls;
}

function create_1(source){
  requireNonNull(source, 'source is null');
  return onAssembly(new ObservableCreate(source));
}

function fromArray(items){
  requireNonNull(items, 'items is null');
  if (items.length == 0) {
    return onAssembly(($clinit_ObservableEmpty() , INSTANCE_1));
  }
   else if (items.length == 1) {
    return requireNonNull(items[0], 'The item is null') , onAssembly(new ObservableJust(items[0]));
  }
  return onAssembly(new ObservableFromArray(items));
}

defineClass(16, 1, $intern_10);
_.subscribe = function subscribe(observer){
  $subscribe_0(this, observer);
}
;
var Lio_reactivex_Observable_2_classLit = createForClass('io.reactivex', 'Observable', 16);
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
        root = cause;
      }
    }
  }
}

function $getRootCause(this$static, e){
  var cause, root;
  root = e.getCause();
  if (!root || this$static.cause == root) {
    return e;
  }
  while (true) {
    cause = root.getCause();
    if (!cause || cause == root) {
      return root;
    }
    root = cause;
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
    ex = castTo($next_0(ex$iterator.it), 4);
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
  for (ex$iterator = new AbstractList$IteratorImpl(errors); ex$iterator.i < ex$iterator.this$01.size_1();) {
    ex = (checkCriticalElement(ex$iterator.i < ex$iterator.this$01.size_1()) , castTo(ex$iterator.this$01.get_1(ex$iterator.i++), 4));
    instanceOf(ex, 26)?$addAll(deDupedExceptions, castTo(ex, 26).exceptions):ex?(old = deDupedExceptions.map_0.put(ex, deDupedExceptions) , old == null):$add(deDupedExceptions, new NullPointerException_0('Throwable was null!'));
  }
  if (deDupedExceptions.map_0.size_1() == 0) {
    throw toJs(new IllegalArgumentException('errors is empty'));
  }
  $addAll_0(localExceptions, deDupedExceptions);
  this.exceptions = new Collections$UnmodifiableRandomAccessList(localExceptions);
  this.message_0 = this.exceptions.coll.array.length + ' exceptions occurred. ';
}

function CompositeException_0(exceptions){
  CompositeException.call(this, new Arrays$ArrayList(exceptions));
}

defineClass(26, 7, {26:1, 3:1, 8:1, 7:1, 4:1}, CompositeException_0);
_.getCause = function getCause_0(){
  var chain, child, child$iterator, e, e$iterator, listOfCauses, localCause, seenCauses;
  if (!this.cause) {
    localCause = new CompositeException$CompositeExceptionCausalChain;
    seenCauses = new HashSet;
    chain = localCause;
    for (e$iterator = new Collections$UnmodifiableCollectionIterator(new ArrayList$1(this.exceptions.coll)); $hasNext(e$iterator.it);) {
      e = castTo($next_0(e$iterator.it), 4);
      if (seenCauses.map_0.containsKey(e)) {
        continue;
      }
      seenCauses.map_0.put(e, seenCauses);
      listOfCauses = $getListOfCauses(e);
      for (child$iterator = new ArrayList$1(listOfCauses); child$iterator.i < child$iterator.this$01.array.length;) {
        child = castTo($next_0(child$iterator), 4);
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
      chain = $getRootCause(this, chain);
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
var Lio_reactivex_exceptions_CompositeException_2_classLit = createForClass('io.reactivex.exceptions', 'CompositeException', 26);
function CompositeException$CompositeExceptionCausalChain(){
  RuntimeException.call(this);
}

defineClass(123, 7, $intern_2, CompositeException$CompositeExceptionCausalChain);
_.getMessage = function getMessage_2(){
  return 'Chain of Causes for CompositeException In Order Received =>';
}
;
var Lio_reactivex_exceptions_CompositeException$CompositeExceptionCausalChain_2_classLit = createForClass('io.reactivex.exceptions', 'CompositeException/CompositeExceptionCausalChain', 123);
function OnErrorNotImplementedException(e){
  RuntimeException_1.call(this, e?e.getMessage():null, e?e:new NullPointerException);
}

defineClass(55, 7, {55:1, 3:1, 8:1, 7:1, 4:1}, OnErrorNotImplementedException);
var Lio_reactivex_exceptions_OnErrorNotImplementedException_2_classLit = createForClass('io.reactivex.exceptions', 'OnErrorNotImplementedException', 55);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(19, 7, $intern_11, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 19);
function ProtocolViolationException(){
  IllegalStateException.call(this, 'Disposable already set!');
}

defineClass(72, 19, $intern_11, ProtocolViolationException);
var Lio_reactivex_exceptions_ProtocolViolationException_2_classLit = createForClass('io.reactivex.exceptions', 'ProtocolViolationException', 72);
function UndeliverableException(cause){
  RuntimeException_2.call(this, cause);
}

defineClass(121, 19, $intern_11, UndeliverableException);
var Lio_reactivex_exceptions_UndeliverableException_2_classLit = createForClass('io.reactivex.exceptions', 'UndeliverableException', 121);
function $compareAndSet(this$static, expect, update){
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

function $lazySet(this$static, newValue){
  this$static.value_0 = newValue;
}

function $set(this$static, newValue){
  this$static.value_0 = newValue;
}

function AtomicReference(initialValue){
  this.value_0 = initialValue;
}

defineClass(20, 1, {3:1, 20:1}, AtomicReference);
_.toString_0 = function toString_5(){
  return valueOf_0(this.value_0);
}
;
var Ljava_util_concurrent_atomic_AtomicReference_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicReference', 20);
function $dispose(this$static){
  var c, ex;
  if (this$static.value_0 != null) {
    c = castTo($getAndSet(this$static, null), 162);
    if (c) {
      try {
        $removeEventListener(c.source_0, c.type_1, c.listener_2, c.useCapture_3);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          ex = $e0;
          onError_4(ex);
        }
         else 
          throw toJs($e0);
      }
    }
  }
}

function CancellableDisposable(cancellable){
  AtomicReference.call(this, cancellable);
}

defineClass(128, 20, $intern_12, CancellableDisposable);
_.dispose = function dispose(){
  $dispose(this);
}
;
var Lio_reactivex_internal_disposables_CancellableDisposable_2_classLit = createForClass('io.reactivex.internal.disposables', 'CancellableDisposable', 128);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(25, 1, {3:1, 28:1, 25:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode_0(this);
}
;
_.toString_0 = function toString_6(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 25);
function $clinit_DisposableHelper(){
  $clinit_DisposableHelper = emptyMethod;
  DISPOSED = new DisposableHelper;
}

function DisposableHelper(){
  Enum.call(this, 'DISPOSED', 0);
}

function dispose_1(field){
  $clinit_DisposableHelper();
  var current, d;
  current = castTo(field.value_0, 14);
  d = DISPOSED;
  if (current != d) {
    current = castTo($getAndSet(field, d), 14);
    if (current != d) {
      !!current && current.dispose();
      return true;
    }
  }
  return false;
}

function set_0(field, d){
  $clinit_DisposableHelper();
  var current;
  for (;;) {
    current = castTo(field.value_0, 14);
    if (current == DISPOSED) {
      $dispose(d);
      return false;
    }
    if ($compareAndSet(field, current, d)) {
      !!current && current.dispose();
      return true;
    }
  }
}

function setOnce(field, d){
  $clinit_DisposableHelper();
  requireNonNull(d, 'd is null');
  if (!$compareAndSet(field, null, d)) {
    d.dispose();
    maskUndefined(field.value_0) !== maskUndefined(DISPOSED) && onError_4(new ProtocolViolationException);
    return false;
  }
  return true;
}

function validate(current, next){
  $clinit_DisposableHelper();
  if (!next) {
    onError_4(new NullPointerException_0('next is null'));
    return false;
  }
  if (current) {
    next.dispose();
    onError_4(new ProtocolViolationException);
    return false;
  }
  return true;
}

function values_0(){
  $clinit_DisposableHelper();
  return stampJavaTypeInfo(getClassLiteralForArray(Lio_reactivex_internal_disposables_DisposableHelper_2_classLit, 1), $intern_1, 54, 0, [DISPOSED]);
}

defineClass(54, 25, {14:1, 54:1, 3:1, 28:1, 25:1}, DisposableHelper);
_.dispose = function dispose_0(){
}
;
var DISPOSED;
var Lio_reactivex_internal_disposables_DisposableHelper_2_classLit = createForEnum('io.reactivex.internal.disposables', 'DisposableHelper', 54, values_0);
function $clinit_EmptyDisposable(){
  $clinit_EmptyDisposable = emptyMethod;
  INSTANCE_0 = new EmptyDisposable('INSTANCE', 0);
  NEVER = new EmptyDisposable('NEVER', 1);
}

function EmptyDisposable(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_EmptyDisposable();
  return stampJavaTypeInfo(getClassLiteralForArray(Lio_reactivex_internal_disposables_EmptyDisposable_2_classLit, 1), $intern_1, 44, 0, [INSTANCE_0, NEVER]);
}

defineClass(44, 25, {14:1, 44:1, 21:1, 47:1, 36:1, 3:1, 28:1, 25:1}, EmptyDisposable);
_.dispose = function dispose_2(){
}
;
_.isEmpty = function isEmpty(){
  return true;
}
;
_.offer = function offer(value_0){
  throw toJs(new UnsupportedOperationException('Should not be called!'));
}
;
_.poll = function poll(){
  return null;
}
;
_.requestFusion = function requestFusion(mode){
  return mode & 2;
}
;
var INSTANCE_0, NEVER;
var Lio_reactivex_internal_disposables_EmptyDisposable_2_classLit = createForEnum('io.reactivex.internal.disposables', 'EmptyDisposable', 44, values_1);
function $clinit_Functions(){
  $clinit_Functions = emptyMethod;
  IDENTITY = new Functions$Identity;
  EMPTY_ACTION = new Functions$EmptyAction;
  EMPTY_CONSUMER = new Functions$EmptyConsumer;
  ON_ERROR_MISSING = new Functions$OnErrorMissingConsumer;
}

var EMPTY_ACTION, EMPTY_CONSUMER, IDENTITY, ON_ERROR_MISSING;
function Functions$EmptyAction(){
}

defineClass(106, 1, {}, Functions$EmptyAction);
_.toString_0 = function toString_7(){
  return 'EmptyAction';
}
;
var Lio_reactivex_internal_functions_Functions$EmptyAction_2_classLit = createForClass('io.reactivex.internal.functions', 'Functions/EmptyAction', 106);
function Functions$EmptyConsumer(){
}

defineClass(107, 1, {}, Functions$EmptyConsumer);
_.accept = function accept_1(v){
}
;
_.toString_0 = function toString_8(){
  return 'EmptyConsumer';
}
;
var Lio_reactivex_internal_functions_Functions$EmptyConsumer_2_classLit = createForClass('io.reactivex.internal.functions', 'Functions/EmptyConsumer', 107);
function Functions$Identity(){
}

defineClass(105, 1, {}, Functions$Identity);
_.apply_0 = function apply_4(v){
  return v;
}
;
_.toString_0 = function toString_9(){
  return 'IdentityFunction';
}
;
var Lio_reactivex_internal_functions_Functions$Identity_2_classLit = createForClass('io.reactivex.internal.functions', 'Functions/Identity', 105);
function $accept(error){
  onError_4(new OnErrorNotImplementedException(castTo(error, 4)));
}

function Functions$OnErrorMissingConsumer(){
}

defineClass(108, 1, {}, Functions$OnErrorMissingConsumer);
_.accept = function accept_2(error){
  $accept(error);
}
;
var Lio_reactivex_internal_functions_Functions$OnErrorMissingConsumer_2_classLit = createForClass('io.reactivex.internal.functions', 'Functions/OnErrorMissingConsumer', 108);
function requireNonNull(object, message){
  if (object == null) {
    throw toJs(new NullPointerException_0(message));
  }
  return object;
}

function verifyPositive(value_0, paramName){
  if (value_0 <= 0) {
    throw toJs(new IllegalArgumentException(paramName + ' > 0 required but it was ' + value_0));
  }
  return value_0;
}

function $onError(this$static, t){
  if (this$static.done_0) {
    onError_4(t);
    return;
  }
  this$static.done_0 = true;
  this$static.actual.onError_0(t);
}

function $transitiveBoundaryFusion(this$static, mode){
  var m, qs;
  qs = this$static.qs;
  if (qs) {
    if ((mode & 4) == 0) {
      m = qs.requestFusion(mode);
      m != 0 && (this$static.sourceMode = m);
      return m;
    }
  }
  return 0;
}

defineClass(103, 1, $intern_13);
_.dispose = function dispose_3(){
  this.s.dispose();
}
;
_.isEmpty = function isEmpty_0(){
  return this.qs.isEmpty();
}
;
_.offer = function offer_0(e){
  throw toJs(new UnsupportedOperationException('Should not be called!'));
}
;
_.onComplete = function onComplete_0(){
  if (this.done_0) {
    return;
  }
  this.done_0 = true;
  this.actual.onComplete();
}
;
_.onError_0 = function onError_0(t){
  $onError(this, t);
}
;
_.onSubscribe = function onSubscribe_0(s){
  if (validate(this.s, s)) {
    this.s = s;
    instanceOf(s, 21) && (this.qs = castTo(s, 21));
    this.actual.onSubscribe(this);
  }
}
;
_.done_0 = false;
_.sourceMode = 0;
var Lio_reactivex_internal_observers_BasicFuseableObserver_2_classLit = createForClass('io.reactivex.internal.observers', 'BasicFuseableObserver', 103);
defineClass(159, 1, $intern_14);
_.offer = function offer_1(e){
  throw toJs(new UnsupportedOperationException('Should not be called'));
}
;
var Lio_reactivex_internal_observers_BasicQueueDisposable_2_classLit = createForClass('io.reactivex.internal.observers', 'BasicQueueDisposable', 159);
function $onError_0(this$static, t){
  var e;
  if (maskUndefined(this$static.value_0) !== maskUndefined(($clinit_DisposableHelper() , DISPOSED))) {
    $lazySet(this$static, DISPOSED);
    try {
      $accept(t);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        onError_4(new CompositeException_0(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 4, 0, [t, e])));
      }
       else 
        throw toJs($e0);
    }
  }
}

function LambdaObserver(onNext, onError){
  this.onNext = onNext;
  this.onError = onError;
}

defineClass(112, 20, {58:1, 14:1, 3:1, 20:1}, LambdaObserver);
_.dispose = function dispose_4(){
  dispose_1(this);
}
;
_.onComplete = function onComplete_1(){
  maskUndefined(this.value_0) !== maskUndefined(($clinit_DisposableHelper() , DISPOSED)) && $set(this, DISPOSED);
}
;
_.onError_0 = function onError_1(t){
  $onError_0(this, t);
}
;
_.onNext_0 = function onNext_0(t){
  var e;
  if (maskUndefined(this.value_0) !== maskUndefined(($clinit_DisposableHelper() , DISPOSED))) {
    try {
      this.onNext.accept(t);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        castTo(this.value_0, 14).dispose();
        $onError_0(this, e);
      }
       else 
        throw toJs($e0);
    }
  }
}
;
_.onSubscribe = function onSubscribe_1(s){
  setOnce(this, s);
}
;
var Lio_reactivex_internal_observers_LambdaObserver_2_classLit = createForClass('io.reactivex.internal.observers', 'LambdaObserver', 112);
function AbstractObservableWithUpstream(source){
  this.source_0 = source;
}

defineClass(70, 16, $intern_10);
var Lio_reactivex_internal_operators_observable_AbstractObservableWithUpstream_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'AbstractObservableWithUpstream', 70);
function ObservableCreate(source){
  this.source_0 = source;
}

defineClass(119, 16, $intern_10, ObservableCreate);
_.subscribeActual = function subscribeActual(observer){
  var ex, parent_0;
  parent_0 = new ObservableCreate$CreateEmitter(observer);
  observer.onSubscribe(parent_0);
  try {
    $subscribe(this.source_0, parent_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      $tryOnError(parent_0, ex) || onError_4(ex);
    }
     else 
      throw toJs($e0);
  }
}
;
var Lio_reactivex_internal_operators_observable_ObservableCreate_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableCreate', 119);
function $onError_1(this$static, t){
  $tryOnError(this$static, t) || onError_4(t);
}

function $onNext(this$static, t){
  if (t == null) {
    $onError_1(this$static, new NullPointerException_0('onNext called with null. Null values are generally not allowed in 2.x operators and sources.'));
    return;
  }
  $clinit_DisposableHelper();
  castTo(this$static.value_0, 14) == DISPOSED || this$static.observer.onNext_0(t);
}

function $tryOnError(this$static, t){
  !t && (t = new NullPointerException_0('onError called with null. Null values are generally not allowed in 2.x operators and sources.'));
  $clinit_DisposableHelper();
  if (castTo(this$static.value_0, 14) != DISPOSED) {
    try {
      this$static.observer.onError_0(t);
    }
     finally {
      dispose_1(this$static);
    }
    return true;
  }
  return false;
}

function ObservableCreate$CreateEmitter(observer){
  this.observer = observer;
}

defineClass(120, 20, $intern_12, ObservableCreate$CreateEmitter);
_.dispose = function dispose_5(){
  dispose_1(this);
}
;
var Lio_reactivex_internal_operators_observable_ObservableCreate$CreateEmitter_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableCreate/CreateEmitter', 120);
function $clinit_ObservableEmpty(){
  $clinit_ObservableEmpty = emptyMethod;
  INSTANCE_1 = new ObservableEmpty;
}

function ObservableEmpty(){
}

defineClass(114, 16, $intern_15, ObservableEmpty);
_.call_0 = function call_0(){
  return null;
}
;
_.subscribeActual = function subscribeActual_0(o){
  $clinit_EmptyDisposable();
  o.onSubscribe(INSTANCE_0);
  o.onComplete();
}
;
var INSTANCE_1;
var Lio_reactivex_internal_operators_observable_ObservableEmpty_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableEmpty', 114);
function ObservableFlatMap(source, mapper, bufferSize){
  AbstractObservableWithUpstream.call(this, source);
  this.mapper = mapper;
  this.delayErrors = false;
  this.maxConcurrency = 2;
  this.bufferSize = bufferSize;
}

defineClass(117, 70, $intern_10, ObservableFlatMap);
_.subscribeActual = function subscribeActual_1(t){
  if (tryScalarXMapSubscribe(this.source_0, t)) {
    return;
  }
  $subscribe_0(this.source_0, new ObservableFlatMap$MergeObserver(t, this.mapper, this.delayErrors, this.maxConcurrency, this.bufferSize));
}
;
_.bufferSize = 0;
_.delayErrors = false;
_.maxConcurrency = 0;
var Lio_reactivex_internal_operators_observable_ObservableFlatMap_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableFlatMap', 117);
function ObservableFlatMap$InnerObserver(parent_0, id_0){
  this.id_0 = id_0;
  this.parent_0 = parent_0;
}

defineClass(31, 20, {58:1, 31:1, 3:1, 20:1}, ObservableFlatMap$InnerObserver);
_.onComplete = function onComplete_2(){
  this.done_0 = true;
  $drain(this.parent_0);
}
;
_.onError_0 = function onError_2(t){
  if (addThrowable(this.parent_0.errors, t)) {
    this.parent_0.delayErrors || $disposeAll(this.parent_0);
    this.done_0 = true;
    $drain(this.parent_0);
  }
   else {
    onError_4(t);
  }
}
;
_.onNext_0 = function onNext_1(t){
  this.fusionMode == 0?$tryEmit(this.parent_0, t, this):$drain(this.parent_0);
}
;
_.onSubscribe = function onSubscribe_2(s){
  var m, qd;
  if (setOnce(this, s)) {
    if (instanceOf(s, 21)) {
      qd = castTo(s, 21);
      m = qd.requestFusion(7);
      if (m == 1) {
        this.fusionMode = 1;
        this.queue = qd;
        this.done_0 = true;
        $drain(this.parent_0);
        return;
      }
      if (m == 2) {
        this.fusionMode = 2;
        this.queue = qd;
      }
    }
  }
}
;
_.done_0 = false;
_.fusionMode = 0;
_.id_0 = 0;
var Lio_reactivex_internal_operators_observable_ObservableFlatMap$InnerObserver_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableFlatMap/InnerObserver', 31);
defineClass(24, 1, $intern_16);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 24);
function $compareAndSet_0(this$static, update){
  if (this$static.value_1 == 0) {
    this$static.value_1 = update;
    return true;
  }
   else {
    return false;
  }
}

defineClass(160, 24, $intern_16);
_.toString_0 = function toString_10(){
  return '' + this.value_1;
}
;
_.value_1 = 0;
var Ljava_util_concurrent_atomic_AtomicInteger_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicInteger', 160);
function $clinit_ObservableFlatMap$MergeObserver(){
  $clinit_ObservableFlatMap$MergeObserver = emptyMethod;
  EMPTY = initUnidimensionalArray(Lio_reactivex_internal_operators_observable_ObservableFlatMap$InnerObserver_2_classLit, $intern_17, 31, 0, 0, 1);
  CANCELLED = initUnidimensionalArray(Lio_reactivex_internal_operators_observable_ObservableFlatMap$InnerObserver_2_classLit, $intern_17, 31, 0, 0, 1);
}

function $addInner(this$static, inner){
  var a, b, n;
  for (;;) {
    a = castTo(this$static.observers.value_0, 27);
    if (maskUndefined(a) === maskUndefined(CANCELLED)) {
      dispose_1(inner);
      return false;
    }
    n = a.length;
    b = initUnidimensionalArray(Lio_reactivex_internal_operators_observable_ObservableFlatMap$InnerObserver_2_classLit, $intern_17, 31, n + 1, 0, 1);
    arraycopy(a, 0, b, 0, n);
    b[n] = inner;
    if ($compareAndSet(this$static.observers, a, b)) {
      return true;
    }
  }
}

function $checkTerminate(this$static){
  var e;
  if (this$static.cancelled) {
    return true;
  }
  e = castTo(this$static.errors.value_0, 4);
  if (!this$static.delayErrors && !!e) {
    $disposeAll(this$static);
    e = terminate(this$static.errors);
    e != ($clinit_ExceptionHelper() , TERMINATED) && this$static.actual.onError_0(e);
    return true;
  }
  return false;
}

function $disposeAll(this$static){
  var a, inner, inner$index, inner$max;
  this$static.s.dispose();
  a = castTo(this$static.observers.value_0, 27);
  if (maskUndefined(a) !== maskUndefined(CANCELLED)) {
    a = castTo($getAndSet(this$static.observers, CANCELLED), 27);
    if (maskUndefined(a) !== maskUndefined(CANCELLED)) {
      for (inner$index = 0 , inner$max = a.length; inner$index < inner$max; ++inner$index) {
        inner = a[inner$index];
        dispose_1(inner);
      }
      return true;
    }
  }
  return false;
}

function $drain(this$static){
  this$static.value_1++ == 0 && $drainLoop(this$static);
}

function $drainLoop(this$static){
  var child, d, ex, i, i0, index_0, inner, innerCompleted, innerDone, innerQueue, is, j, j0, missed, n, o, p, q, startId, svq;
  child = this$static.actual;
  missed = 1;
  for (;;) {
    if ($checkTerminate(this$static)) {
      return;
    }
    svq = this$static.queue;
    if (svq) {
      for (;;) {
        for (;;) {
          if ($checkTerminate(this$static)) {
            return;
          }
          o = svq.poll();
          if (o == null) {
            break;
          }
          child.onNext_0(o);
        }
        break;
      }
    }
    d = this$static.done_0;
    svq = this$static.queue;
    inner = castTo(this$static.observers.value_0, 27);
    n = inner.length;
    if (d && (!svq || svq.isEmpty()) && n == 0) {
      ex = terminate(this$static.errors);
      ex != ($clinit_ExceptionHelper() , TERMINATED) && (!ex?child.onComplete():child.onError_0(ex));
      return;
    }
    innerCompleted = false;
    if (n != 0) {
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
      sourceLoop: for (i = 0; i < n; i++) {
        if ($checkTerminate(this$static)) {
          return;
        }
        is = inner[j];
        for (;;) {
          if ($checkTerminate(this$static)) {
            return;
          }
          q = is.queue;
          if (!q) {
            break;
          }
          for (;;) {
            try {
              o = q.poll();
            }
             catch ($e0) {
              $e0 = toJava($e0);
              if (instanceOf($e0, 4)) {
                ex = $e0;
                dispose_1(is);
                addThrowable(this$static.errors, ex);
                if ($checkTerminate(this$static)) {
                  return;
                }
                $removeInner(this$static, is);
                innerCompleted = true;
                ++i;
                continue sourceLoop;
              }
               else 
                throw toJs($e0);
            }
            if (o == null) {
              break;
            }
            child.onNext_0(o);
            if ($checkTerminate(this$static)) {
              return;
            }
          }
          break;
        }
        innerDone = is.done_0;
        innerQueue = is.queue;
        if (innerDone && (!innerQueue || innerQueue.isEmpty())) {
          $removeInner(this$static, is);
          if ($checkTerminate(this$static)) {
            return;
          }
          innerCompleted = true;
        }
        ++j;
        j == n && (j = 0);
      }
      this$static.lastIndex = j;
      this$static.lastId = inner[j].id_0;
    }
    if (innerCompleted) {
      if (this$static.maxConcurrency != $intern_0) {
        p = castTo($pollFirst(this$static.sources), 13);
        if (!p) {
          --this$static.wip;
          continue;
        }
        $subscribeInner(this$static, p);
      }
      continue;
    }
    missed = (this$static.value_1 += -missed , this$static.value_1);
    if (missed == 0) {
      break;
    }
  }
}

function $onError_2(this$static, t){
  if (this$static.done_0) {
    onError_4(t);
    return;
  }
  if (addThrowable(this$static.errors, t)) {
    this$static.done_0 = true;
    this$static.value_1++ == 0 && $drainLoop(this$static);
  }
   else {
    onError_4(t);
  }
}

function $removeInner(this$static, inner){
  var a, b, i, j, n;
  for (;;) {
    a = castTo(this$static.observers.value_0, 27);
    n = a.length;
    if (n == 0) {
      return;
    }
    j = -1;
    for (i = 0; i < n; i++) {
      if (a[i] == inner) {
        j = i;
        break;
      }
    }
    if (j < 0) {
      return;
    }
    if (n == 1) {
      b = EMPTY;
    }
     else {
      b = initUnidimensionalArray(Lio_reactivex_internal_operators_observable_ObservableFlatMap$InnerObserver_2_classLit, $intern_17, 31, n - 1, 0, 1);
      arraycopy(a, 0, b, 0, j);
      arraycopy(a, j + 1, b, j, n - j - 1);
    }
    if ($compareAndSet(this$static.observers, a, b)) {
      return;
    }
  }
}

function $subscribeInner(this$static, p){
  var $tmp, inner;
  for (;;) {
    if (instanceOf(p, 22)) {
      $tryEmitScalar(this$static, castTo(p, 22));
      if (this$static.maxConcurrency != $intern_0) {
        p = castTo($pollFirst(this$static.sources), 13);
        if (!p) {
          --this$static.wip;
          break;
        }
      }
       else {
        break;
      }
    }
     else {
      inner = new ObservableFlatMap$InnerObserver(this$static, ($tmp = this$static.uniqueId , this$static.uniqueId = add_1(this$static.uniqueId, 1) , $tmp));
      $addInner(this$static, inner) && p.subscribe(inner);
      break;
    }
  }
}

function $tryEmit(this$static, value_0, inner){
  var q;
  if (this$static.value_1 == 0 && $compareAndSet_0(this$static, 1)) {
    this$static.actual.onNext_0(value_0);
    if (--this$static.value_1 == 0) {
      return;
    }
  }
   else {
    q = inner.queue;
    if (!q) {
      q = new SpscLinkedArrayQueue(this$static.bufferSize);
      inner.queue = q;
    }
    q.offer(value_0);
    if (this$static.value_1++ != 0) {
      return;
    }
  }
  $drainLoop(this$static);
}

function $tryEmitScalar(this$static, value_0){
  var ex, q, u;
  try {
    u = value_0.call_0();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      addThrowable(this$static.errors, ex);
      this$static.value_1++ == 0 && $drainLoop(this$static);
      return;
    }
     else 
      throw toJs($e0);
  }
  if (!u) {
    return;
  }
  if (this$static.value_1 == 0 && $compareAndSet_0(this$static, 1)) {
    this$static.actual.onNext_0(u);
    if (--this$static.value_1 == 0) {
      return;
    }
  }
   else {
    q = this$static.queue;
    if (!q) {
      this$static.maxConcurrency == $intern_0?(q = new SpscLinkedArrayQueue(this$static.bufferSize)):(q = new SpscArrayQueue(this$static.maxConcurrency));
      this$static.queue = q;
    }
    if (!q.offer(u)) {
      $onError_2(this$static, new IllegalStateException('Scalar queue full?!'));
      return;
    }
    if (this$static.value_1++ != 0) {
      return;
    }
  }
  $drainLoop(this$static);
}

function ObservableFlatMap$MergeObserver(actual, mapper, delayErrors, maxConcurrency, bufferSize){
  $clinit_ObservableFlatMap$MergeObserver();
  this.errors = new AtomicThrowable;
  this.actual = actual;
  this.mapper = mapper;
  this.delayErrors = delayErrors;
  this.maxConcurrency = maxConcurrency;
  this.bufferSize = bufferSize;
  maxConcurrency != $intern_0 && (this.sources = new ArrayDeque(maxConcurrency));
  this.observers = new AtomicReference(EMPTY);
}

defineClass(118, 160, {58:1, 14:1, 3:1, 24:1}, ObservableFlatMap$MergeObserver);
_.dispose = function dispose_6(){
  var ex;
  if (!this.cancelled) {
    this.cancelled = true;
    if ($disposeAll(this)) {
      ex = terminate(this.errors);
      !!ex && ex != ($clinit_ExceptionHelper() , TERMINATED) && onError_4(ex);
    }
  }
}
;
_.onComplete = function onComplete_3(){
  if (this.done_0) {
    return;
  }
  this.done_0 = true;
  this.value_1++ == 0 && $drainLoop(this);
}
;
_.onError_0 = function onError_3(t){
  $onError_2(this, t);
}
;
_.onNext_0 = function onNext_2(t){
  var e, p;
  if (this.done_0) {
    return;
  }
  try {
    p = castTo(requireNonNull(castTo(t, 13), 'The mapper returned a null ObservableSource'), 13);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      this.s.dispose();
      $onError_2(this, e);
      return;
    }
     else 
      throw toJs($e0);
  }
  if (this.maxConcurrency != $intern_0) {
    if (this.wip == this.maxConcurrency) {
      $addLast(this.sources, p);
      return;
    }
    ++this.wip;
  }
  $subscribeInner(this, p);
}
;
_.onSubscribe = function onSubscribe_3(s){
  if (validate(this.s, s)) {
    this.s = s;
    this.actual.onSubscribe(this);
  }
}
;
_.bufferSize = 0;
_.cancelled = false;
_.delayErrors = false;
_.done_0 = false;
_.lastId = 0;
_.lastIndex = 0;
_.maxConcurrency = 0;
_.uniqueId = 0;
_.wip = 0;
var CANCELLED, EMPTY;
var Lio_reactivex_internal_operators_observable_ObservableFlatMap$MergeObserver_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableFlatMap/MergeObserver', 118);
function ObservableFromArray(array){
  this.array = array;
}

defineClass(110, 16, $intern_10, ObservableFromArray);
_.subscribeActual = function subscribeActual_2(s){
  var d;
  d = new ObservableFromArray$FromArrayDisposable(s, this.array);
  s.onSubscribe(d);
  if (d.fusionMode) {
    return;
  }
  $run(d);
}
;
var Lio_reactivex_internal_operators_observable_ObservableFromArray_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableFromArray', 110);
function $run(this$static){
  var a, i, n, value_0;
  a = this$static.array;
  n = a.length;
  for (i = 0; i < n && !this$static.disposed; i++) {
    value_0 = a[i];
    if (!value_0) {
      this$static.actual.onError_0(new NullPointerException_0('The ' + i + 'th element is null'));
      return;
    }
    this$static.actual.onNext_0(value_0);
  }
  this$static.disposed || this$static.actual.onComplete();
}

function ObservableFromArray$FromArrayDisposable(actual, array){
  this.actual = actual;
  this.array = array;
}

defineClass(111, 159, $intern_14, ObservableFromArray$FromArrayDisposable);
_.dispose = function dispose_7(){
  this.disposed = true;
}
;
_.isEmpty = function isEmpty_1(){
  return this.index_0 == this.array.length;
}
;
_.poll = function poll_0(){
  var a, i;
  i = this.index_0;
  a = this.array;
  if (i != a.length) {
    this.index_0 = i + 1;
    return requireNonNull(a[i], 'The array element is null');
  }
  return null;
}
;
_.requestFusion = function requestFusion_0(mode){
  if ((mode & 1) != 0) {
    this.fusionMode = true;
    return 1;
  }
  return 0;
}
;
_.disposed = false;
_.fusionMode = false;
_.index_0 = 0;
var Lio_reactivex_internal_operators_observable_ObservableFromArray$FromArrayDisposable_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableFromArray/FromArrayDisposable', 111);
function ObservableJust(value_0){
  this.value_0 = value_0;
}

defineClass(115, 16, $intern_15, ObservableJust);
_.call_0 = function call_1(){
  return this.value_0;
}
;
_.subscribeActual = function subscribeActual_3(s){
  var sd;
  sd = new ObservableScalarXMap$ScalarDisposable(s, this.value_0);
  s.onSubscribe(sd);
  $run_0(sd);
}
;
var Lio_reactivex_internal_operators_observable_ObservableJust_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableJust', 115);
function ObservableMap(source, function_0){
  AbstractObservableWithUpstream.call(this, source);
  this.function_0 = function_0;
}

defineClass(102, 70, $intern_10, ObservableMap);
_.subscribeActual = function subscribeActual_4(t){
  $subscribe_0(this.source_0, new ObservableMap$MapObserver(t, this.function_0));
}
;
var Lio_reactivex_internal_operators_observable_ObservableMap_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableMap', 102);
function ObservableMap$MapObserver(actual, mapper){
  this.actual = actual;
  this.mapper = mapper;
}

defineClass(104, 103, $intern_13, ObservableMap$MapObserver);
_.onNext_0 = function onNext_3(t){
  var ex, v;
  if (this.done_0) {
    return;
  }
  if (this.sourceMode != 0) {
    this.actual.onNext_0(null);
    return;
  }
  try {
    v = requireNonNull(this.mapper.apply_0(t), 'The mapper function returned a null value.');
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      this.s.dispose();
      $onError(this, ex);
      return;
    }
     else 
      throw toJs($e0);
  }
  this.actual.onNext_0(v);
}
;
_.poll = function poll_1(){
  var t;
  t = this.qs.poll();
  return t != null?requireNonNull(this.mapper.apply_0(t), 'The mapper function returned a null value.'):null;
}
;
_.requestFusion = function requestFusion_1(mode){
  return $transitiveBoundaryFusion(this, mode);
}
;
var Lio_reactivex_internal_operators_observable_ObservableMap$MapObserver_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableMap/MapObserver', 104);
function tryScalarXMapSubscribe(source, observer){
  var ex, r, sd, t, u;
  if (instanceOf(source, 22)) {
    try {
      t = castTo(source, 22).call_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        ex = $e0;
        $clinit_EmptyDisposable();
        observer.onSubscribe(INSTANCE_0);
        observer.onError_0(ex);
        return true;
      }
       else 
        throw toJs($e0);
    }
    if (!t) {
      $clinit_EmptyDisposable();
      observer.onSubscribe(INSTANCE_0);
      observer.onComplete();
      return true;
    }
    try {
      r = castTo(requireNonNull(t, 'The mapper returned a null ObservableSource'), 13);
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (instanceOf($e1, 4)) {
        ex = $e1;
        $clinit_EmptyDisposable();
        observer.onSubscribe(INSTANCE_0);
        observer.onError_0(ex);
        return true;
      }
       else 
        throw toJs($e1);
    }
    if (instanceOf(r, 22)) {
      try {
        u = castTo(r, 22).call_0();
      }
       catch ($e2) {
        $e2 = toJava($e2);
        if (instanceOf($e2, 4)) {
          ex = $e2;
          $clinit_EmptyDisposable();
          observer.onSubscribe(INSTANCE_0);
          observer.onError_0(ex);
          return true;
        }
         else 
          throw toJs($e2);
      }
      if (!u) {
        $clinit_EmptyDisposable();
        observer.onSubscribe(INSTANCE_0);
        observer.onComplete();
        return true;
      }
      sd = new ObservableScalarXMap$ScalarDisposable(observer, u);
      observer.onSubscribe(sd);
      $run_0(sd);
    }
     else {
      r.subscribe(observer);
    }
    return true;
  }
  return false;
}

function $run_0(this$static){
  if (this$static.value_1 == 0 && $compareAndSet_0(this$static, 2)) {
    this$static.observer.onNext_0(this$static.value_0);
    if (this$static.value_1 == 2) {
      this$static.value_1 = 3;
      this$static.observer.onComplete();
    }
  }
}

function ObservableScalarXMap$ScalarDisposable(observer, value_0){
  this.observer = observer;
  this.value_0 = value_0;
}

defineClass(53, 160, {14:1, 21:1, 47:1, 36:1, 3:1, 24:1}, ObservableScalarXMap$ScalarDisposable);
_.dispose = function dispose_8(){
  this.value_1 = 3;
}
;
_.isEmpty = function isEmpty_2(){
  return this.value_1 != 1;
}
;
_.offer = function offer_2(value_0){
  throw toJs(new UnsupportedOperationException('Should not be called!'));
}
;
_.poll = function poll_2(){
  if (this.value_1 == 1) {
    this.value_1 = 3;
    return this.value_0;
  }
  return null;
}
;
_.requestFusion = function requestFusion_2(mode){
  if ((mode & 1) != 0) {
    this.value_1 = 1;
    return 1;
  }
  return 0;
}
;
var Lio_reactivex_internal_operators_observable_ObservableScalarXMap$ScalarDisposable_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableScalarXMap/ScalarDisposable', 53);
function ObservableScalarXMap$ScalarXMapObservable(value_0, mapper){
  this.value_0 = value_0;
  this.mapper = mapper;
}

defineClass(116, 16, $intern_10, ObservableScalarXMap$ScalarXMapObservable);
_.subscribeActual = function subscribeActual_5(s){
  var e, ex, other, sd, u;
  try {
    other = castTo(requireNonNull(castTo(this.value_0, 13), 'The mapper returned a null ObservableSource'), 13);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      $clinit_EmptyDisposable();
      s.onSubscribe(INSTANCE_0);
      s.onError_0(e);
      return;
    }
     else 
      throw toJs($e0);
  }
  if (instanceOf(other, 22)) {
    try {
      u = castTo(other, 22).call_0();
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (instanceOf($e1, 4)) {
        ex = $e1;
        $clinit_EmptyDisposable();
        s.onSubscribe(INSTANCE_0);
        s.onError_0(ex);
        return;
      }
       else 
        throw toJs($e1);
    }
    if (!u) {
      $clinit_EmptyDisposable();
      s.onSubscribe(INSTANCE_0);
      s.onComplete();
      return;
    }
    sd = new ObservableScalarXMap$ScalarDisposable(s, u);
    s.onSubscribe(sd);
    $run_0(sd);
  }
   else {
    other.subscribe(s);
  }
}
;
var Lio_reactivex_internal_operators_observable_ObservableScalarXMap$ScalarXMapObservable_2_classLit = createForClass('io.reactivex.internal.operators.observable', 'ObservableScalarXMap/ScalarXMapObservable', 116);
function $get(this$static, i){
  return this$static.array[i];
}

function $set_0(this$static, i, newValue){
  this$static.array[i] = newValue;
}

function AtomicReferenceArray(length_0){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, length_0, 5, 1);
}

defineClass(33, 1, {3:1, 33:1}, AtomicReferenceArray);
_.toString_0 = function toString_11(){
  return toString_20(this.array);
}
;
var Ljava_util_concurrent_atomic_AtomicReferenceArray_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicReferenceArray', 33);
function $clinit_SpscArrayQueue(){
  $clinit_SpscArrayQueue = emptyMethod;
  MAX_LOOK_AHEAD_STEP = valueOf(4096);
}

function SpscArrayQueue(capacity){
  $clinit_SpscArrayQueue();
  AtomicReferenceArray.call(this, 1 << 32 - numberOfLeadingZeros_0(capacity - 1));
  this.mask = this.array.length - 1;
  this.producerIndex = new AtomicLong;
  this.consumerIndex = new AtomicLong;
  this.lookAheadStep = $wnd.Math.min(capacity / 4 | 0, MAX_LOOK_AHEAD_STEP.value_0);
}

defineClass(129, 33, {36:1, 3:1, 33:1}, SpscArrayQueue);
_.isEmpty = function isEmpty_3(){
  return eq(this.producerIndex.value_0, this.consumerIndex.value_0);
}
;
_.offer = function offer_3(e){
  var index_0, mask, offset, step;
  if (null == e) {
    throw toJs(new NullPointerException_0('Null is not a valid element'));
  }
  mask = this.mask;
  index_0 = this.producerIndex.value_0;
  offset = toInt_0(index_0) & mask;
  if (gte_0(index_0, this.producerLookAhead)) {
    step = this.lookAheadStep;
    if (null == $get(this, toInt_0(add_1(index_0, step)) & mask)) {
      this.producerLookAhead = add_1(index_0, step);
    }
     else if (null != this.array[offset]) {
      return false;
    }
  }
  this.array[offset] = e;
  $lazySet_0(this.producerIndex, add_1(index_0, 1));
  return true;
}
;
_.poll = function poll_3(){
  var e, index_0, offset;
  index_0 = this.consumerIndex.value_0;
  offset = toInt_0(index_0) & this.mask;
  e = this.array[offset];
  if (null == e) {
    return null;
  }
  $lazySet_0(this.consumerIndex, add_1(index_0, 1));
  this.array[offset] = null;
  return e;
}
;
_.lookAheadStep = 0;
_.mask = 0;
_.producerLookAhead = 0;
var MAX_LOOK_AHEAD_STEP;
var Lio_reactivex_internal_queue_SpscArrayQueue_2_classLit = createForClass('io.reactivex.internal.queue', 'SpscArrayQueue', 129);
function $clinit_SpscLinkedArrayQueue(){
  $clinit_SpscLinkedArrayQueue = emptyMethod;
  HAS_NEXT = new Object_0;
}

function $newBufferPoll(this$static, nextBuffer, index_0, mask){
  var n, offsetInNew;
  this$static.consumerBuffer = nextBuffer;
  offsetInNew = toInt_0(index_0) & mask;
  n = nextBuffer.array[offsetInNew];
  if (null != n) {
    nextBuffer.array[offsetInNew] = null;
    $set_1(this$static.consumerIndex, add_1(index_0, 1));
  }
  return n;
}

function $writeToQueue(this$static, buffer, e, index_0, offset){
  buffer.array[offset] = e;
  $set_1(this$static.producerIndex, add_1(index_0, 1));
  return true;
}

function SpscLinkedArrayQueue(bufferSize){
  $clinit_SpscLinkedArrayQueue();
  var buffer, mask, p2capacity;
  this.producerIndex = new AtomicLong;
  this.consumerIndex = new AtomicLong;
  p2capacity = 1 << 32 - numberOfLeadingZeros_0($wnd.Math.max(8, bufferSize) - 1);
  mask = p2capacity - 1;
  buffer = new AtomicReferenceArray(p2capacity + 1);
  this.producerBuffer = buffer;
  this.producerMask = mask;
  this.producerLookAheadStep = $wnd.Math.min(p2capacity / 4 | 0, 4096);
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

defineClass(75, 1, {36:1}, SpscLinkedArrayQueue);
_.isEmpty = function isEmpty_4(){
  return eq(this.producerIndex.value_0, this.consumerIndex.value_0);
}
;
_.offer = function offer_4(e){
  var buffer, index_0, lookAheadElementOffset, lookAheadStep, mask, offset, capacity, newBuffer;
  if (null == e) {
    throw toJs(new NullPointerException_0('Null is not a valid element'));
  }
  buffer = this.producerBuffer;
  index_0 = this.producerIndex.value_0;
  mask = this.producerMask;
  offset = toInt_0(index_0) & mask;
  if (lt(index_0, this.producerLookAhead)) {
    return $writeToQueue(this, buffer, e, index_0, offset);
  }
   else {
    lookAheadStep = this.producerLookAheadStep;
    lookAheadElementOffset = toInt_0(add_1(index_0, lookAheadStep)) & mask;
    if (null == buffer.array[lookAheadElementOffset]) {
      this.producerLookAhead = sub_1(add_1(index_0, lookAheadStep), 1);
      return $writeToQueue(this, buffer, e, index_0, offset);
    }
     else if (null == lvElement(buffer, toInt_0(add_1(index_0, 1)) & mask)) {
      return $writeToQueue(this, buffer, e, index_0, offset);
    }
     else {
      capacity = buffer.array.length;
      newBuffer = new AtomicReferenceArray(capacity);
      this.producerBuffer = newBuffer;
      this.producerLookAhead = sub_1(add_1(index_0, mask), 1);
      newBuffer.array[offset] = e;
      soElement(buffer, buffer.array.length - 1, newBuffer);
      $set_0(buffer, offset, HAS_NEXT);
      $set_1(this.producerIndex, add_1(index_0, 1));
      return true;
    }
  }
}
;
_.poll = function poll_4(){
  var buffer, e, index_0, isNextBuffer, mask, offset, nextBuffer;
  buffer = this.consumerBuffer;
  index_0 = this.consumerIndex.value_0;
  mask = this.consumerMask;
  offset = toInt_0(index_0) & mask;
  e = buffer.array[offset];
  isNextBuffer = maskUndefined(e) === maskUndefined(HAS_NEXT);
  if (null != e && !isNextBuffer) {
    buffer.array[offset] = null;
    $set_1(this.consumerIndex, add_1(index_0, 1));
    return e;
  }
   else if (isNextBuffer) {
    return $newBufferPoll(this, (nextBuffer = castTo(buffer.array[mask + 1], 33) , buffer.array[mask + 1] = null , nextBuffer), index_0, mask);
  }
  return null;
}
;
_.consumerMask = 0;
_.producerLookAhead = 0;
_.producerLookAheadStep = 0;
_.producerMask = 0;
var HAS_NEXT;
var Lio_reactivex_internal_queue_SpscLinkedArrayQueue_2_classLit = createForClass('io.reactivex.internal.queue', 'SpscLinkedArrayQueue', 75);
function AtomicThrowable(){
}

defineClass(126, 20, {3:1, 20:1}, AtomicThrowable);
var Lio_reactivex_internal_util_AtomicThrowable_2_classLit = createForClass('io.reactivex.internal.util', 'AtomicThrowable', 126);
function $clinit_ExceptionHelper(){
  $clinit_ExceptionHelper = emptyMethod;
  TERMINATED = new ExceptionHelper$Termination;
}

function addThrowable(field, exception){
  $clinit_ExceptionHelper();
  var current, update;
  for (;;) {
    current = castTo(field.value_0, 4);
    if (current == TERMINATED) {
      return false;
    }
    !current?(update = exception):(update = new CompositeException_0(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 4, 0, [current, exception])));
    if ($compareAndSet(field, current, update)) {
      return true;
    }
  }
}

function terminate(field){
  $clinit_ExceptionHelper();
  var current;
  current = castTo(field.value_0, 4);
  current != TERMINATED && (current = castTo($getAndSet(field, TERMINATED), 4));
  return current;
}

function wrapOrThrow(error){
  $clinit_ExceptionHelper();
  if (instanceOf(error, 18)) {
    throw toJs(castTo(error, 18));
  }
  if (instanceOf(error, 7)) {
    return castTo(error, 7);
  }
  return new RuntimeException_2(error);
}

var TERMINATED;
function ExceptionHelper$Termination(){
  Throwable.call(this, 'No further exceptions');
}

defineClass(113, 4, {3:1, 4:1}, ExceptionHelper$Termination);
_.fillInStackTrace = function fillInStackTrace_0(){
  return this;
}
;
var Lio_reactivex_internal_util_ExceptionHelper$Termination_2_classLit = createForClass('io.reactivex.internal.util', 'ExceptionHelper/Termination', 113);
function apply_5(f, t){
  var ex;
  try {
    return f.apply_0(t);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      throw toJs(wrapOrThrow(ex));
    }
     else 
      throw toJs($e0);
  }
}

function isBug(error){
  if (instanceOf(error, 55)) {
    return true;
  }
  if (instanceOf(error, 19)) {
    return true;
  }
  if (instanceOf(error, 10)) {
    return true;
  }
  if (instanceOf(error, 39)) {
    return true;
  }
  if (instanceOf(error, 26)) {
    return true;
  }
  return false;
}

function onAssembly(source){
  var f;
  f = onObservableAssembly;
  if (f) {
    return castTo(apply_5(f, source), 16);
  }
  return source;
}

function onError_4(error){
  var e, f;
  f = errorHandler;
  !error?(error = new NullPointerException_0('onError called with null. Null values are generally not allowed in 2.x operators and sources.')):isBug(error) || (error = new UndeliverableException(error));
  if (f) {
    try {
      f.accept(error);
      return;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        e.printStackTrace();
        $clinit_Thread();
        null.$_nullMethod();
      }
       else 
        throw toJs($e0);
    }
  }
  error.printStackTrace();
  $clinit_Thread();
  null.$_nullMethod();
}

var errorHandler, onObservableAssembly;
defineClass(155, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 155);
defineClass(156, 155, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 156);
function PrintStream(){
}

defineClass(93, 156, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 93);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(61, 1, {81:1});
_.toString_0 = function toString_12(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 61);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(95, 7, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 95);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(67, 7, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 67);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {3:1, 28:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 149);
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(87, 7, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 87);
doubleCastMap = {3:1, 28:1, 24:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 150);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 7, {3:1, 8:1, 39:1, 7:1, 4:1}, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 39);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(51, 7, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 51);
function Integer(value_0){
  this.value_0 = value_0;
}

function highestOneBit(i){
  var rtn;
  if (i < 0) {
    return -2147483648;
  }
   else if (i == 0) {
    return 0;
  }
   else {
    for (rtn = 1073741824; (rtn & i) == 0; rtn >>= 1)
    ;
    return rtn;
  }
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

defineClass(30, 24, {3:1, 28:1, 30:1, 24:1}, Integer);
_.equals_0 = function equals_1(o){
  return instanceOf(o, 30) && castTo(o, 30).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_2(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 30);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 30, 256, 0, 1);
}

var boxedValues;
defineClass(582, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(10, 50, {3:1, 8:1, 10:1, 7:1, 4:1}, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 10);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(17, 1, {3:1, 17:1}, StackTraceElement);
_.equals_0 = function equals_2(other){
  var st;
  if (instanceOf(other, 17)) {
    st = castTo(other, 17);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_3(){
  return hashCode_9(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 17);
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
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
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
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

stringCastMap = {3:1, 81:1, 28:1, 2:1};
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

defineClass(62, 61, {81:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 62);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(92, 51, $intern_2, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 92);
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
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
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

defineClass(586, 1, {});
var err;
function $clinit_Thread(){
  $clinit_Thread = emptyMethod;
  new Thread(true);
}

function Thread(inner){
  if (!inner)
    throw toJs(new UnsupportedOperationException('Multi-thread not supported'));
}

defineClass(124, 1, {}, Thread);
var Ljava_lang_Thread_2_classLit = createForClass('java.lang', 'Thread', 124);
function UnsupportedOperationException(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 7, $intern_2, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 41);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = new Collections$UnmodifiableCollectionIterator(new ArrayList$1(c.coll)); $hasNext(e$iterator.it);) {
    e = $next_0(e$iterator.it);
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
  var entry, i, it, outerIter, size_0;
  size_0 = this$static.map_0.size_1();
  a.length < size_0 && (a = stampJavaTypeInfo_0(new Array(size_0), a));
  it = (outerIter = (new AbstractMap$1(this$static.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter));
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, (entry = castTo(it.val$outerIter2.next_1(), 11) , entry.getKey()));
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

defineClass(151, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toString_0 = function toString_16(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 151);
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
    entry = castTo(iter.next_1(), 11);
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

defineClass(158, 1, {46:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_3(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 46)) {
    return false;
  }
  otherMap = castTo(obj, 46);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 11);
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
_.toString_0 = function toString_17(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 11);
    $add_0(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 158);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_0(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_0(this$static, key){
  return instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_1(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(130, 158, {46:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_0(this, key);
}
;
_.put = function put(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 130);
defineClass(157, 151, $intern_18);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 35)) {
    return false;
  }
  other = castTo(o, 35);
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
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 157);
function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(134, 157, $intern_18, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  if (instanceOf(o, 11)) {
    return $containsEntry(this.this$01, castTo(o, 11));
  }
  return false;
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
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 134);
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
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(135, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_0(){
  var rv;
  return checkStructuralChange(this.this$01, this) , checkCriticalElement(this.hasNext) , rv = castTo(this.current.next_1(), 11) , this.hasNext = $computeHasNext(this) , rv;
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 135);
function $equals_0(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 38)) {
    return false;
  }
  other = castTo(o, 38);
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

defineClass(152, 151, {38:1});
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 152);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(64, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01.size_1();
}
;
_.next_1 = function next_1(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 64);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(69, 157, $intern_18, AbstractMap$1);
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
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 69);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(52, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 11) , entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 52);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(99, 1, $intern_19);
_.equals_0 = function equals_6(other){
  var entry;
  if (!instanceOf(other, 11)) {
    return false;
  }
  entry = castTo(other, 11);
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
_.toString_0 = function toString_18(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 99);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(68, 99, $intern_19, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 68);
defineClass(161, 1, $intern_19);
_.equals_0 = function equals_7(other){
  var entry;
  if (!instanceOf(other, 11)) {
    return false;
  }
  entry = castTo(other, 11);
  return equals_10(this.val$entry2.value[0], entry.getKey()) && equals_10($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this.val$entry2.value[0]) ^ hashCode_13($getValue(this));
}
;
_.toString_0 = function toString_19(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 161);
function $addLast(this$static, e){
  checkCriticalNotNull(e);
  setCheck(this$static.array, this$static.tail, e);
  this$static.tail = this$static.tail + 1 & this$static.array.length - 1;
  $ensureCapacity(this$static);
}

function $contains(it, o){
  if (o == null) {
    return false;
  }
  while (it.currentIndex != it.fence) {
    if (equals_Ljava_lang_Object__Z__devirtual$(o, $next(it))) {
      return true;
    }
  }
  return false;
}

function $copyElements(this$static, dest, count){
  var dstIdx, i, mask;
  mask = this$static.array.length - 1;
  for (i = this$static.head , dstIdx = 0; dstIdx < count; i = i + 1 & mask , ++dstIdx) {
    setCheck(dest, dstIdx, this$static.array[i]);
  }
}

function $ensureCapacity(this$static){
  var newArray, newLength, numElements;
  if (this$static.head != this$static.tail) {
    return;
  }
  numElements = this$static.array.length;
  newLength = highestOneBit($wnd.Math.max(8, numElements)) << 1;
  if (this$static.head != 0) {
    newArray = createFrom(this$static.array, newLength);
    $copyElements(this$static, newArray, numElements);
    this$static.array = newArray;
    this$static.head = 0;
  }
   else {
    setLength(this$static.array, newLength);
  }
  this$static.tail = numElements;
}

function $pollFirst(this$static){
  var e;
  e = this$static.array[this$static.head];
  if (e == null) {
    return null;
  }
  setCheck(this$static.array, this$static.head, null);
  this$static.head = this$static.head + 1 & this$static.array.length - 1;
  return e;
}

function ArrayDeque(numElements){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 8, 5, 1);
  setLength(this.array, highestOneBit($wnd.Math.max(8, numElements)) << 1);
}

function checkConcurrentModification(expression){
  if (!expression) {
    throw toJs(new ConcurrentModificationException);
  }
}

defineClass(125, 151, {}, ArrayDeque);
_.contains_0 = function contains_2(o){
  return $contains(new ArrayDeque$IteratorImpl(this), o);
}
;
_.iterator = function iterator_3(){
  return new ArrayDeque$IteratorImpl(this);
}
;
_.size_1 = function size_5(){
  return this.tail - this.head & this.array.length - 1;
}
;
_.head = 0;
_.tail = 0;
var Ljava_util_ArrayDeque_2_classLit = createForClass('java.util', 'ArrayDeque', 125);
function $next(this$static){
  var e;
  checkCriticalElement(this$static.currentIndex != this$static.fence);
  e = this$static.this$01.array[this$static.currentIndex];
  checkConcurrentModification(this$static.fence == this$static.this$01.tail && e != null);
  this$static.currentIndex = this$static.currentIndex + 1 & this$static.this$01.array.length - 1;
  return e;
}

function ArrayDeque$IteratorImpl(this$0){
  this.this$01 = this$0;
  this.currentIndex = this.this$01.head;
  this.fence = this.this$01.tail;
}

defineClass(71, 1, {}, ArrayDeque$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.currentIndex != this.fence;
}
;
_.next_1 = function next_3(){
  return $next(this);
}
;
_.currentIndex = 0;
_.fence = 0;
var Ljava_util_ArrayDeque$IteratorImpl_2_classLit = createForClass('java.util', 'ArrayDeque/IteratorImpl', 71);
function $addAll_0(this$static, c){
  var cArray, len;
  cArray = $toArray(c, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, c.map_0.size_1(), 5, 1));
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo(this$static.array, this$static.array.length, cArray);
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
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

defineClass(74, 152, {3:1, 38:1}, ArrayList);
_.contains_0 = function contains_3(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_2(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 74);
function $hasNext(this$static){
  return this$static.i < this$static.this$01.array.length;
}

function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(32, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3(){
  return $hasNext(this);
}
;
_.next_1 = function next_4(){
  return $next_0(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 32);
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

function toString_20(x_0){
  if (x_0 == null) {
    return 'null';
  }
  return $toString_0(new Arrays$ArrayList(x_0));
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(63, 152, {3:1, 38:1}, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_1 = function get_3(index_0){
  checkCriticalElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 63);
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

defineClass(96, 1, {});
_.iterator = function iterator_5(){
  return new Collections$UnmodifiableCollectionIterator(new ArrayList$1(this.coll));
}
;
_.size_1 = function size_8(){
  return this.coll.array.length;
}
;
_.toString_0 = function toString_21(){
  return $toString_0(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 96);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(43, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_4(){
  return $hasNext(this.it);
}
;
_.next_1 = function next_5(){
  return $next_0(this.it);
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 43);
defineClass(97, 96, {38:1});
_.equals_0 = function equals_8(o){
  return $equals_0(this.list, o);
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_11(this.list);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 97);
function Collections$UnmodifiableRandomAccessList(list){
  this.coll = list;
  this.list = list;
}

defineClass(98, 97, {38:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 98);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(76, 7, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 76);
function HashMap(){
  this.hashCodeMap = new InternalHashCodeMap(this);
  this.stringMap = new InternalStringMap(this);
  structureChanged(this);
}

defineClass(56, 130, {3:1, 46:1}, HashMap);
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
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 56);
function $add(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(73, 157, {3:1, 35:1}, HashSet);
_.contains_0 = function contains_5(o){
  return this.map_0.containsKey(o);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_9(){
  return this.map_0.size_1();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 73);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host_0.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host_0.getHashCode(key)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host_0.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?new Array:chain);
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
  structureChanged(this$static.host_0);
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(138, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_7(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 138);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(78, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_5(){
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
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 78);
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
function $contains_0(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_1(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host_0);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host_0 = host;
}

defineClass(136, 1, {}, InternalStringMap);
_.iterator = function iterator_8(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 136);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(77, 1, {}, InternalStringMap$1);
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 77);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_1(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(137, 161, $intern_19, InternalStringMap$2);
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
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 137);
function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    entry.next_0.prev = entry.prev;
    entry.prev.next_0 = entry.next_0;
    entry.next_0 = entry.prev = null;
    $addToEnd(entry);
  }
}

function LinkedHashMap(){
  HashMap.call(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next_0 = this.head;
}

defineClass(131, 56, {3:1, 46:1}, LinkedHashMap);
_.containsKey = function containsKey_1(key){
  return $containsKey(this.map_0, key);
}
;
_.entrySet = function entrySet_0(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_0 = function get_4(key){
  var entry;
  entry = castTo($get_0(this.map_0, key), 34);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_0(key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get_0(this.map_0, key), 34);
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
_.size_1 = function size_10(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 131);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(34, 68, {34:1, 11:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 34);
function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(132, 157, $intern_18, LinkedHashMap$EntrySet);
_.contains_0 = function contains_6(o){
  if (instanceOf(o, 11)) {
    return $containsEntry(this.this$01, castTo(o, 11));
  }
  return false;
}
;
_.iterator = function iterator_9(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.size_1 = function size_11(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 132);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(133, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.next_1 = function next_8(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next_0 != this.this$11.this$01.head) , this.last = this.next_0 , this.next_0 = this.next_0.next_0 , this.last;
}
;
_.hasNext_0 = function hasNext_7(){
  return this.next_0 != this.this$11.this$01.head;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 133);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(127, 73, {3:1, 35:1}, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 127);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(122, 7, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 122);
function equals_10(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_13(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull_0(obj){
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

defineClass(65, 1, {}, StringJoiner);
_.toString_0 = function toString_22(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 65);
function $lazySet_0(this$static, newValue){
  this$static.value_0 = newValue;
}

function $set_1(this$static, newValue){
  this$static.value_0 = newValue;
}

function AtomicLong(){
}

defineClass(45, 24, $intern_16, AtomicLong);
_.toString_0 = function toString_23(){
  return '' + toString_3(this.value_0);
}
;
_.value_0 = 0;
var Ljava_util_concurrent_atomic_AtomicLong_2_classLit = createForClass('java.util.concurrent.atomic', 'AtomicLong', 45);
function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  return stampJavaTypeInfo_0(new Array(length_0), array);
}

function insertTo(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function setLength(array, length_0){
  array.length = length_0;
}

defineClass(584, 1, {});
function stampJavaTypeInfo_0(array, referenceType){
  return getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array) , array;
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

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException("Can't overwrite cause"));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

defineClass(574, 1, {});
function getHashCode_0(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
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
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(576, 1, {});
function input_0(type_0){
  var el;
  el = castToNative(castToNative(($clinit_DomGlobal() , document_0).createElement('input'), $wnd.HTMLElement), $wnd.HTMLInputElement);
  el.type = type_0;
  return new InputBuilder(el);
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
  new EventType('load');
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

function values_2(){
  $clinit_InputType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_gwt_elemento_core_InputType_2_classLit, 1), $intern_1, 9, 0, [button, checkbox, color_0, date, datetime, email, file_1, hidden, image, month, number_0, password, radio, range, reset_0, search, select, tel, text_1, textarea, time, url_0, week]);
}

defineClass(9, 25, {3:1, 28:1, 25:1, 9:1}, InputType);
var button, checkbox, color_0, date, datetime, email, file_1, hidden, image, month, number_0, password, radio, range, reset_0, search, select, tel, text_1, textarea, time, url_0, week;
var Lorg_jboss_gwt_elemento_core_InputType_2_classLit = createForEnum('org.jboss.gwt.elemento.core', 'InputType', 9, values_2);
function ElementBuilder(element){
  this.element = requireNonNull_0(element);
}

defineClass(66, 1, {});
var Lorg_jboss_gwt_elemento_core_builder_ElementBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'ElementBuilder', 66);
function $add_1(this$static, element){
  return this$static.element.appendChild(element) , this$static;
}

function $textContent(this$static, text_0){
  return this$static.element.textContent = text_0 , this$static;
}

function HtmlContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(37, 66, {}, HtmlContentBuilder);
var Lorg_jboss_gwt_elemento_core_builder_HtmlContentBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'HtmlContentBuilder', 37);
function InputBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(94, 66, {}, InputBuilder);
var Lorg_jboss_gwt_elemento_core_builder_InputBuilder_2_classLit = createForClass('org.jboss.gwt.elemento.core.builder', 'InputBuilder', 94);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=dndfiles-0.js

