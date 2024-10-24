function UT(e, t) {
  for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
          for (const i in r)
              if (i !== "default" && !(i in e)) {
                  const o = Object.getOwnPropertyDescriptor(r, i);
                  o && Object.defineProperty(e, i, o.get ? o : {
                      enumerable: !0,
                      get: () => r[i]
                  })
              }
      }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
  }))
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
  new MutationObserver(i => {
      for (const o of i)
          if (o.type === "childList")
              for (const s of o.addedNodes)
                  s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
      o
  }
  function r(i) {
      if (i.ep)
          return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o)
  }
}
)();
var Ki = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var p_ = {
  exports: {}
}
, Xf = {}
, h_ = {
  exports: {}
}
, Ve = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Cu = Symbol.for("react.element")
, VT = Symbol.for("react.portal")
, HT = Symbol.for("react.fragment")
, WT = Symbol.for("react.strict_mode")
, qT = Symbol.for("react.profiler")
, YT = Symbol.for("react.provider")
, GT = Symbol.for("react.context")
, XT = Symbol.for("react.forward_ref")
, KT = Symbol.for("react.suspense")
, QT = Symbol.for("react.memo")
, JT = Symbol.for("react.lazy")
, my = Symbol.iterator;
function ZT(e) {
  return e === null || typeof e != "object" ? null : (e = my && e[my] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var m_ = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, g_ = Object.assign
, v_ = {};
function Ba(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = v_,
  this.updater = n || m_
}
Ba.prototype.isReactComponent = {};
Ba.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ba.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function y_() {}
y_.prototype = Ba.prototype;
function Bm(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = v_,
  this.updater = n || m_
}
var Um = Bm.prototype = new y_;
Um.constructor = Bm;
g_(Um, Ba.prototype);
Um.isPureReactComponent = !0;
var gy = Array.isArray
, w_ = Object.prototype.hasOwnProperty
, Vm = {
  current: null
}
, __ = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function b_(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t)
          w_.call(t, r) && !__.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
      i.children = n;
  else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++)
          l[u] = arguments[u + 2];
      i.children = l
  }
  if (e && e.defaultProps)
      for (r in a = e.defaultProps,
      a)
          i[r] === void 0 && (i[r] = a[r]);
  return {
      $$typeof: Cu,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Vm.current
  }
}
function eC(e, t) {
  return {
      $$typeof: Cu,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}
function Hm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cu
}
function tC(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
  })
}
var vy = /\/+/g;
function Vd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? tC("" + e.key) : t.toString(36)
}
function Oc(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null)
      s = !0;
  else
      switch (o) {
      case "string":
      case "number":
          s = !0;
          break;
      case "object":
          switch (e.$$typeof) {
          case Cu:
          case VT:
              s = !0
          }
      }
  if (s)
      return s = e,
      i = i(s),
      e = r === "" ? "." + Vd(s, 0) : r,
      gy(i) ? (n = "",
      e != null && (n = e.replace(vy, "$&/") + "/"),
      Oc(i, t, n, "", function(u) {
          return u
      })) : i != null && (Hm(i) && (i = eC(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(vy, "$&/") + "/") + e)),
      t.push(i)),
      1;
  if (s = 0,
  r = r === "" ? "." : r + ":",
  gy(e))
      for (var a = 0; a < e.length; a++) {
          o = e[a];
          var l = r + Vd(o, a);
          s += Oc(o, t, n, l, i)
      }
  else if (l = ZT(e),
  typeof l == "function")
      for (e = l.call(e),
      a = 0; !(o = e.next()).done; )
          o = o.value,
          l = r + Vd(o, a++),
          s += Oc(o, t, n, l, i);
  else if (o === "object")
      throw t = String(e),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s
}
function qu(e, t, n) {
  if (e == null)
      return e;
  var r = []
    , i = 0;
  return Oc(e, r, "", "", function(o) {
      return t.call(n, o, i++)
  }),
  r
}
function nC(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(),
      t.then(function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
      e._result = t)
  }
  if (e._status === 1)
      return e._result.default;
  throw e._result
}
var Wn = {
  current: null
}
, Ac = {
  transition: null
}
, rC = {
  ReactCurrentDispatcher: Wn,
  ReactCurrentBatchConfig: Ac,
  ReactCurrentOwner: Vm
};
Ve.Children = {
  map: qu,
  forEach: function(e, t, n) {
      qu(e, function() {
          t.apply(this, arguments)
      }, n)
  },
  count: function(e) {
      var t = 0;
      return qu(e, function() {
          t++
      }),
      t
  },
  toArray: function(e) {
      return qu(e, function(t) {
          return t
      }) || []
  },
  only: function(e) {
      if (!Hm(e))
          throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
Ve.Component = Ba;
Ve.Fragment = HT;
Ve.Profiler = qT;
Ve.PureComponent = Bm;
Ve.StrictMode = WT;
Ve.Suspense = KT;
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rC;
Ve.cloneElement = function(e, t, n) {
  if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = g_({}, e.props)
    , i = e.key
    , o = e.ref
    , s = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (o = t.ref,
      s = Vm.current),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
          var a = e.type.defaultProps;
      for (l in t)
          w_.call(t, l) && !__.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2;
  if (l === 1)
      r.children = n;
  else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++)
          a[u] = arguments[u + 2];
      r.children = a
  }
  return {
      $$typeof: Cu,
      type: e.type,
      key: i,
      ref: o,
      props: r,
      _owner: s
  }
}
;
Ve.createContext = function(e) {
  return e = {
      $$typeof: GT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  e.Provider = {
      $$typeof: YT,
      _context: e
  },
  e.Consumer = e
}
;
Ve.createElement = b_;
Ve.createFactory = function(e) {
  var t = b_.bind(null, e);
  return t.type = e,
  t
}
;
Ve.createRef = function() {
  return {
      current: null
  }
}
;
Ve.forwardRef = function(e) {
  return {
      $$typeof: XT,
      render: e
  }
}
;
Ve.isValidElement = Hm;
Ve.lazy = function(e) {
  return {
      $$typeof: JT,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: nC
  }
}
;
Ve.memo = function(e, t) {
  return {
      $$typeof: QT,
      type: e,
      compare: t === void 0 ? null : t
  }
}
;
Ve.startTransition = function(e) {
  var t = Ac.transition;
  Ac.transition = {};
  try {
      e()
  } finally {
      Ac.transition = t
  }
}
;
Ve.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
}
;
Ve.useCallback = function(e, t) {
  return Wn.current.useCallback(e, t)
}
;
Ve.useContext = function(e) {
  return Wn.current.useContext(e)
}
;
Ve.useDebugValue = function() {}
;
Ve.useDeferredValue = function(e) {
  return Wn.current.useDeferredValue(e)
}
;
Ve.useEffect = function(e, t) {
  return Wn.current.useEffect(e, t)
}
;
Ve.useId = function() {
  return Wn.current.useId()
}
;
Ve.useImperativeHandle = function(e, t, n) {
  return Wn.current.useImperativeHandle(e, t, n)
}
;
Ve.useInsertionEffect = function(e, t) {
  return Wn.current.useInsertionEffect(e, t)
}
;
Ve.useLayoutEffect = function(e, t) {
  return Wn.current.useLayoutEffect(e, t)
}
;
Ve.useMemo = function(e, t) {
  return Wn.current.useMemo(e, t)
}
;
Ve.useReducer = function(e, t, n) {
  return Wn.current.useReducer(e, t, n)
}
;
Ve.useRef = function(e) {
  return Wn.current.useRef(e)
}
;
Ve.useState = function(e) {
  return Wn.current.useState(e)
}
;
Ve.useSyncExternalStore = function(e, t, n) {
  return Wn.current.useSyncExternalStore(e, t, n)
}
;
Ve.useTransition = function() {
  return Wn.current.useTransition()
}
;
Ve.version = "18.2.0";
h_.exports = Ve;
var C = h_.exports;
const Jn = Lo(C)
, x_ = UT({
  __proto__: null,
  default: Jn
}, [C]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var iC = C
, oC = Symbol.for("react.element")
, sC = Symbol.for("react.fragment")
, aC = Object.prototype.hasOwnProperty
, lC = iC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, uC = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function S_(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n),
  t.key !== void 0 && (o = "" + t.key),
  t.ref !== void 0 && (s = t.ref);
  for (r in t)
      aC.call(t, r) && !uC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          i[r] === void 0 && (i[r] = t[r]);
  return {
      $$typeof: oC,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: lC.current
  }
}
Xf.Fragment = sC;
Xf.jsx = S_;
Xf.jsxs = S_;
p_.exports = Xf;
var V = p_.exports
, Jp = {}
, E_ = {
  exports: {}
}
, xr = {}
, T_ = {
  exports: {}
}
, C_ = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(L, K) {
      var A = L.length;
      L.push(K);
      e: for (; 0 < A; ) {
          var me = A - 1 >>> 1
            , Te = L[me];
          if (0 < i(Te, K))
              L[me] = K,
              L[A] = Te,
              A = me;
          else
              break e
      }
  }
  function n(L) {
      return L.length === 0 ? null : L[0]
  }
  function r(L) {
      if (L.length === 0)
          return null;
      var K = L[0]
        , A = L.pop();
      if (A !== K) {
          L[0] = A;
          e: for (var me = 0, Te = L.length, N = Te >>> 1; me < N; ) {
              var xe = 2 * (me + 1) - 1
                , Ge = L[xe]
                , Ze = xe + 1
                , Xe = L[Ze];
              if (0 > i(Ge, A))
                  Ze < Te && 0 > i(Xe, Ge) ? (L[me] = Xe,
                  L[Ze] = A,
                  me = Ze) : (L[me] = Ge,
                  L[xe] = A,
                  me = xe);
              else if (Ze < Te && 0 > i(Xe, A))
                  L[me] = Xe,
                  L[Ze] = A,
                  me = Ze;
              else
                  break e
          }
      }
      return K
  }
  function i(L, K) {
      var A = L.sortIndex - K.sortIndex;
      return A !== 0 ? A : L.id - K.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
          return o.now()
      }
  } else {
      var s = Date
        , a = s.now();
      e.unstable_now = function() {
          return s.now() - a
      }
  }
  var l = []
    , u = []
    , f = 1
    , d = null
    , h = 3
    , g = !1
    , _ = !1
    , m = !1
    , T = typeof setTimeout == "function" ? setTimeout : null
    , x = typeof clearTimeout == "function" ? clearTimeout : null
    , w = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(L) {
      for (var K = n(u); K !== null; ) {
          if (K.callback === null)
              r(u);
          else if (K.startTime <= L)
              r(u),
              K.sortIndex = K.expirationTime,
              t(l, K);
          else
              break;
          K = n(u)
      }
  }
  function b(L) {
      if (m = !1,
      S(L),
      !_)
          if (n(l) !== null)
              _ = !0,
              ae(k);
          else {
              var K = n(u);
              K !== null && oe(b, K.startTime - L)
          }
  }
  function k(L, K) {
      _ = !1,
      m && (m = !1,
      x(R),
      R = -1),
      g = !0;
      var A = h;
      try {
          for (S(K),
          d = n(l); d !== null && (!(d.expirationTime > K) || L && !Q()); ) {
              var me = d.callback;
              if (typeof me == "function") {
                  d.callback = null,
                  h = d.priorityLevel;
                  var Te = me(d.expirationTime <= K);
                  K = e.unstable_now(),
                  typeof Te == "function" ? d.callback = Te : d === n(l) && r(l),
                  S(K)
              } else
                  r(l);
              d = n(l)
          }
          if (d !== null)
              var N = !0;
          else {
              var xe = n(u);
              xe !== null && oe(b, xe.startTime - K),
              N = !1
          }
          return N
      } finally {
          d = null,
          h = A,
          g = !1
      }
  }
  var D = !1
    , O = null
    , R = -1
    , M = 5
    , j = -1;
  function Q() {
      return !(e.unstable_now() - j < M)
  }
  function I() {
      if (O !== null) {
          var L = e.unstable_now();
          j = L;
          var K = !0;
          try {
              K = O(!0, L)
          } finally {
              K ? Z() : (D = !1,
              O = null)
          }
      } else
          D = !1
  }
  var Z;
  if (typeof w == "function")
      Z = function() {
          w(I)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var te = new MessageChannel
        , ue = te.port2;
      te.port1.onmessage = I,
      Z = function() {
          ue.postMessage(null)
      }
  } else
      Z = function() {
          T(I, 0)
      }
      ;
  function ae(L) {
      O = L,
      D || (D = !0,
      Z())
  }
  function oe(L, K) {
      R = T(function() {
          L(e.unstable_now())
      }, K)
  }
  e.unstable_IdlePriority = 5,
  e.unstable_ImmediatePriority = 1,
  e.unstable_LowPriority = 4,
  e.unstable_NormalPriority = 3,
  e.unstable_Profiling = null,
  e.unstable_UserBlockingPriority = 2,
  e.unstable_cancelCallback = function(L) {
      L.callback = null
  }
  ,
  e.unstable_continueExecution = function() {
      _ || g || (_ = !0,
      ae(k))
  }
  ,
  e.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < L ? Math.floor(1e3 / L) : 5
  }
  ,
  e.unstable_getCurrentPriorityLevel = function() {
      return h
  }
  ,
  e.unstable_getFirstCallbackNode = function() {
      return n(l)
  }
  ,
  e.unstable_next = function(L) {
      switch (h) {
      case 1:
      case 2:
      case 3:
          var K = 3;
          break;
      default:
          K = h
      }
      var A = h;
      h = K;
      try {
          return L()
      } finally {
          h = A
      }
  }
  ,
  e.unstable_pauseExecution = function() {}
  ,
  e.unstable_requestPaint = function() {}
  ,
  e.unstable_runWithPriority = function(L, K) {
      switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          L = 3
      }
      var A = h;
      h = L;
      try {
          return K()
      } finally {
          h = A
      }
  }
  ,
  e.unstable_scheduleCallback = function(L, K, A) {
      var me = e.unstable_now();
      switch (typeof A == "object" && A !== null ? (A = A.delay,
      A = typeof A == "number" && 0 < A ? me + A : me) : A = me,
      L) {
      case 1:
          var Te = -1;
          break;
      case 2:
          Te = 250;
          break;
      case 5:
          Te = 1073741823;
          break;
      case 4:
          Te = 1e4;
          break;
      default:
          Te = 5e3
      }
      return Te = A + Te,
      L = {
          id: f++,
          callback: K,
          priorityLevel: L,
          startTime: A,
          expirationTime: Te,
          sortIndex: -1
      },
      A > me ? (L.sortIndex = A,
      t(u, L),
      n(l) === null && L === n(u) && (m ? (x(R),
      R = -1) : m = !0,
      oe(b, A - me))) : (L.sortIndex = Te,
      t(l, L),
      _ || g || (_ = !0,
      ae(k))),
      L
  }
  ,
  e.unstable_shouldYield = Q,
  e.unstable_wrapCallback = function(L) {
      var K = h;
      return function() {
          var A = h;
          h = K;
          try {
              return L.apply(this, arguments)
          } finally {
              h = A
          }
      }
  }
}
)(C_);
T_.exports = C_;
var cC = T_.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var k_ = C
, _r = cC;
function X(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var P_ = new Set
, Kl = {};
function Es(e, t) {
  Ca(e, t),
  Ca(e + "Capture", t)
}
function Ca(e, t) {
  for (Kl[e] = t,
  e = 0; e < t.length; e++)
      P_.add(t[e])
}
var $i = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, Zp = Object.prototype.hasOwnProperty
, fC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, yy = {}
, wy = {};
function dC(e) {
  return Zp.call(wy, e) ? !0 : Zp.call(yy, e) ? !1 : fC.test(e) ? wy[e] = !0 : (yy[e] = !0,
  !1)
}
function pC(e, t, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
      e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}
function hC(e, t, n, r) {
  if (t === null || typeof t > "u" || pC(e, t, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !t;
      case 4:
          return t === !1;
      case 5:
          return isNaN(t);
      case 6:
          return isNaN(t) || 1 > t
      }
  return !1
}
function qn(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
  this.attributeName = r,
  this.attributeNamespace = i,
  this.mustUseProperty = n,
  this.propertyName = e,
  this.type = t,
  this.sanitizeURL = o,
  this.removeEmptyString = s
}
var En = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  En[e] = new qn(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  En[t] = new qn(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  En[e] = new qn(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  En[e] = new qn(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  En[e] = new qn(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  En[e] = new qn(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
  En[e] = new qn(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  En[e] = new qn(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
  En[e] = new qn(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Wm = /[\-:]([a-z])/g;
function qm(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(Wm, qm);
  En[t] = new qn(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Wm, qm);
  En[t] = new qn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Wm, qm);
  En[t] = new qn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  En[e] = new qn(e,1,!1,e.toLowerCase(),null,!1,!1)
});
En.xlinkHref = new qn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
  En[e] = new qn(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ym(e, t, n, r) {
  var i = En.hasOwnProperty(t) ? En[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hC(t, n, i, r) && (n = null),
  r || i === null ? dC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
  r = i.attributeNamespace,
  n === null ? e.removeAttribute(t) : (i = i.type,
  n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qi = k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, Yu = Symbol.for("react.element")
, qs = Symbol.for("react.portal")
, Ys = Symbol.for("react.fragment")
, Gm = Symbol.for("react.strict_mode")
, eh = Symbol.for("react.profiler")
, O_ = Symbol.for("react.provider")
, A_ = Symbol.for("react.context")
, Xm = Symbol.for("react.forward_ref")
, th = Symbol.for("react.suspense")
, nh = Symbol.for("react.suspense_list")
, Km = Symbol.for("react.memo")
, ro = Symbol.for("react.lazy")
, R_ = Symbol.for("react.offscreen")
, _y = Symbol.iterator;
function Za(e) {
  return e === null || typeof e != "object" ? null : (e = _y && e[_y] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var Rt = Object.assign, Hd;
function _l(e) {
  if (Hd === void 0)
      try {
          throw Error()
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Hd = t && t[1] || ""
      }
  return `
` + Hd + e
}
var Wd = !1;
function qd(e, t) {
  if (!e || Wd)
      return "";
  Wd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function() {
              throw Error()
          }
          ,
          Object.defineProperty(t.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (u) {
                  var r = u
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (u) {
                  r = u
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (u) {
              r = u
          }
          e()
      }
  } catch (u) {
      if (u && r && typeof u.stack == "string") {
          for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
              a--;
          for (; 1 <= s && 0 <= a; s--,
          a--)
              if (i[s] !== o[a]) {
                  if (s !== 1 || a !== 1)
                      do
                          if (s--,
                          a--,
                          0 > a || i[s] !== o[a]) {
                              var l = `
` + i[s].replace(" at new ", " at ");
                              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                              l
                          }
                      while (1 <= s && 0 <= a);
                  break
              }
      }
  } finally {
      Wd = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? _l(e) : ""
}
function mC(e) {
  switch (e.tag) {
  case 5:
      return _l(e.type);
  case 16:
      return _l("Lazy");
  case 13:
      return _l("Suspense");
  case 19:
      return _l("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = qd(e.type, !1),
      e;
  case 11:
      return e = qd(e.type.render, !1),
      e;
  case 1:
      return e = qd(e.type, !0),
      e;
  default:
      return ""
  }
}
function rh(e) {
  if (e == null)
      return null;
  if (typeof e == "function")
      return e.displayName || e.name || null;
  if (typeof e == "string")
      return e;
  switch (e) {
  case Ys:
      return "Fragment";
  case qs:
      return "Portal";
  case eh:
      return "Profiler";
  case Gm:
      return "StrictMode";
  case th:
      return "Suspense";
  case nh:
      return "SuspenseList"
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
      case A_:
          return (e.displayName || "Context") + ".Consumer";
      case O_:
          return (e._context.displayName || "Context") + ".Provider";
      case Xm:
          var t = e.render;
          return e = e.displayName,
          e || (e = t.displayName || t.name || "",
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case Km:
          return t = e.displayName || null,
          t !== null ? t : rh(e.type) || "Memo";
      case ro:
          t = e._payload,
          e = e._init;
          try {
              return rh(e(t))
          } catch {}
      }
  return null
}
function gC(e) {
  var t = e.type;
  switch (e.tag) {
  case 24:
      return "Cache";
  case 9:
      return (t.displayName || "Context") + ".Consumer";
  case 10:
      return (t._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return e = t.render,
      e = e.displayName || e.name || "",
      t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return t;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return rh(t);
  case 8:
      return t === Gm ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof t == "function")
          return t.displayName || t.name || null;
      if (typeof t == "string")
          return t
  }
  return null
}
function Po(e) {
  switch (typeof e) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return e;
  case "object":
      return e;
  default:
      return ""
  }
}
function D_(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function vC(e) {
  var t = D_(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get
        , o = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
              return i.call(this)
          },
          set: function(s) {
              r = "" + s,
              o.call(this, s)
          }
      }),
      Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(s) {
              r = "" + s
          },
          stopTracking: function() {
              e._valueTracker = null,
              delete e[t]
          }
      }
  }
}
function Gu(e) {
  e._valueTracker || (e._valueTracker = vC(e))
}
function L_(e) {
  if (!e)
      return !1;
  var t = e._valueTracker;
  if (!t)
      return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = D_(e) ? e.checked ? "true" : "false" : e.value),
  e = r,
  e !== n ? (t.setValue(e),
  !0) : !1
}
function of(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
  typeof e > "u")
      return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}
function ih(e, t) {
  var n = t.checked;
  return Rt({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}
function by(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = Po(t.value != null ? t.value : n),
  e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}
function M_(e, t) {
  t = t.checked,
  t != null && Ym(e, "checked", t, !1)
}
function oh(e, t) {
  M_(e, t);
  var n = Po(t.value)
    , r = t.type;
  if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? sh(e, t.type, n) : t.hasOwnProperty("defaultValue") && sh(e, t.type, Po(t.defaultValue)),
  t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function xy(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
          return;
      t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
  n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked,
  n !== "" && (e.name = n)
}
function sh(e, t, n) {
  (t !== "number" || of(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var bl = Array.isArray;
function fa(e, t, n, r) {
  if (e = e.options,
  t) {
      t = {};
      for (var i = 0; i < n.length; i++)
          t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
          i = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + Po(n),
      t = null,
      i = 0; i < e.length; i++) {
          if (e[i].value === n) {
              e[i].selected = !0,
              r && (e[i].defaultSelected = !0);
              return
          }
          t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
  }
}
function ah(e, t) {
  if (t.dangerouslySetInnerHTML != null)
      throw Error(X(91));
  return Rt({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}
function Sy(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children,
      t = t.defaultValue,
      n != null) {
          if (t != null)
              throw Error(X(92));
          if (bl(n)) {
              if (1 < n.length)
                  throw Error(X(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
      initialValue: Po(n)
  }
}
function I_(e, t) {
  var n = Po(t.value)
    , r = Po(t.defaultValue);
  n != null && (n = "" + n,
  n !== e.value && (e.value = n),
  t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
  r != null && (e.defaultValue = "" + r)
}
function Ey(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function N_(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function lh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? N_(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xu, F_ = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, i)
      })
  }
  : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
      e.innerHTML = t;
  else {
      for (Xu = Xu || document.createElement("div"),
      Xu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = Xu.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
      for (; t.firstChild; )
          e.appendChild(t.firstChild)
  }
});
function Ql(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var Ol = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, yC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ol).forEach(function(e) {
  yC.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1),
      Ol[t] = Ol[e]
  })
});
function j_(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ol.hasOwnProperty(e) && Ol[e] ? ("" + t).trim() : t + "px"
}
function z_(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , i = j_(n, t[n], r);
          n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, i) : e[n] = i
      }
}
var wC = Rt({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function uh(e, t) {
  if (t) {
      if (wC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(X(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
              throw Error(X(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
              throw Error(X(61))
      }
      if (t.style != null && typeof t.style != "object")
          throw Error(X(62))
  }
}
function ch(e, t) {
  if (e.indexOf("-") === -1)
      return typeof t.is == "string";
  switch (e) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var fh = null;
function Qm(e) {
  return e = e.target || e.srcElement || window,
  e.correspondingUseElement && (e = e.correspondingUseElement),
  e.nodeType === 3 ? e.parentNode : e
}
var dh = null
, da = null
, pa = null;
function Ty(e) {
  if (e = Ou(e)) {
      if (typeof dh != "function")
          throw Error(X(280));
      var t = e.stateNode;
      t && (t = ed(t),
      dh(e.stateNode, e.type, t))
  }
}
function $_(e) {
  da ? pa ? pa.push(e) : pa = [e] : da = e
}
function B_() {
  if (da) {
      var e = da
        , t = pa;
      if (pa = da = null,
      Ty(e),
      t)
          for (e = 0; e < t.length; e++)
              Ty(t[e])
  }
}
function U_(e, t) {
  return e(t)
}
function V_() {}
var Yd = !1;
function H_(e, t, n) {
  if (Yd)
      return e(t, n);
  Yd = !0;
  try {
      return U_(e, t, n)
  } finally {
      Yd = !1,
      (da !== null || pa !== null) && (V_(),
      B_())
  }
}
function Jl(e, t) {
  var n = e.stateNode;
  if (n === null)
      return null;
  var r = ed(n);
  if (r === null)
      return null;
  n = r[t];
  e: switch (t) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
      (r = !r.disabled) || (e = e.type,
      r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
      e = !r;
      break e;
  default:
      e = !1
  }
  if (e)
      return null;
  if (n && typeof n != "function")
      throw Error(X(231, t, typeof n));
  return n
}
var ph = !1;
if ($i)
  try {
      var el = {};
      Object.defineProperty(el, "passive", {
          get: function() {
              ph = !0
          }
      }),
      window.addEventListener("test", el, el),
      window.removeEventListener("test", el, el)
  } catch {
      ph = !1
  }
function _C(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, u)
  } catch (f) {
      this.onError(f)
  }
}
var Al = !1
, sf = null
, af = !1
, hh = null
, bC = {
  onError: function(e) {
      Al = !0,
      sf = e
  }
};
function xC(e, t, n, r, i, o, s, a, l) {
  Al = !1,
  sf = null,
  _C.apply(bC, arguments)
}
function SC(e, t, n, r, i, o, s, a, l) {
  if (xC.apply(this, arguments),
  Al) {
      if (Al) {
          var u = sf;
          Al = !1,
          sf = null
      } else
          throw Error(X(198));
      af || (af = !0,
      hh = u)
  }
}
function Ts(e) {
  var t = e
    , n = e;
  if (e.alternate)
      for (; t.return; )
          t = t.return;
  else {
      e = t;
      do
          t = e,
          t.flags & 4098 && (n = t.return),
          e = t.return;
      while (e)
  }
  return t.tag === 3 ? n : null
}
function W_(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
          return t.dehydrated
  }
  return null
}
function Cy(e) {
  if (Ts(e) !== e)
      throw Error(X(188))
}
function EC(e) {
  var t = e.alternate;
  if (!t) {
      if (t = Ts(e),
      t === null)
          throw Error(X(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
          break;
      var o = i.alternate;
      if (o === null) {
          if (r = i.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (i.child === o.child) {
          for (o = i.child; o; ) {
              if (o === n)
                  return Cy(i),
                  e;
              if (o === r)
                  return Cy(i),
                  t;
              o = o.sibling
          }
          throw Error(X(188))
      }
      if (n.return !== r.return)
          n = i,
          r = o;
      else {
          for (var s = !1, a = i.child; a; ) {
              if (a === n) {
                  s = !0,
                  n = i,
                  r = o;
                  break
              }
              if (a === r) {
                  s = !0,
                  r = i,
                  n = o;
                  break
              }
              a = a.sibling
          }
          if (!s) {
              for (a = o.child; a; ) {
                  if (a === n) {
                      s = !0,
                      n = o,
                      r = i;
                      break
                  }
                  if (a === r) {
                      s = !0,
                      r = o,
                      n = i;
                      break
                  }
                  a = a.sibling
              }
              if (!s)
                  throw Error(X(189))
          }
      }
      if (n.alternate !== r)
          throw Error(X(190))
  }
  if (n.tag !== 3)
      throw Error(X(188));
  return n.stateNode.current === n ? e : t
}
function q_(e) {
  return e = EC(e),
  e !== null ? Y_(e) : null
}
function Y_(e) {
  if (e.tag === 5 || e.tag === 6)
      return e;
  for (e = e.child; e !== null; ) {
      var t = Y_(e);
      if (t !== null)
          return t;
      e = e.sibling
  }
  return null
}
var G_ = _r.unstable_scheduleCallback
, ky = _r.unstable_cancelCallback
, TC = _r.unstable_shouldYield
, CC = _r.unstable_requestPaint
, Wt = _r.unstable_now
, kC = _r.unstable_getCurrentPriorityLevel
, Jm = _r.unstable_ImmediatePriority
, X_ = _r.unstable_UserBlockingPriority
, lf = _r.unstable_NormalPriority
, PC = _r.unstable_LowPriority
, K_ = _r.unstable_IdlePriority
, Kf = null
, mi = null;
function OC(e) {
  if (mi && typeof mi.onCommitFiberRoot == "function")
      try {
          mi.onCommitFiberRoot(Kf, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
}
var ei = Math.clz32 ? Math.clz32 : DC
, AC = Math.log
, RC = Math.LN2;
function DC(e) {
  return e >>>= 0,
  e === 0 ? 32 : 31 - (AC(e) / RC | 0) | 0
}
var Ku = 64
, Qu = 4194304;
function xl(e) {
  switch (e & -e) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return e & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return e
  }
}
function uf(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , i = e.suspendedLanes
    , o = e.pingedLanes
    , s = n & 268435455;
  if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = xl(a) : (o &= s,
      o !== 0 && (r = xl(o)))
  } else
      s = n & ~i,
      s !== 0 ? r = xl(s) : o !== 0 && (r = xl(o));
  if (r === 0)
      return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
  o = t & -t,
  i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
  if (r & 4 && (r |= n & 16),
  t = e.entangledLanes,
  t !== 0)
      for (e = e.entanglements,
      t &= r; 0 < t; )
          n = 31 - ei(t),
          i = 1 << n,
          r |= e[n],
          t &= ~i;
  return r
}
function LC(e, t) {
  switch (e) {
  case 1:
  case 2:
  case 4:
      return t + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function MC(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - ei(o)
        , a = 1 << s
        , l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = LC(a, t)) : l <= t && (e.expiredLanes |= a),
      o &= ~a
  }
}
function mh(e) {
  return e = e.pendingLanes & -1073741825,
  e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Q_() {
  var e = Ku;
  return Ku <<= 1,
  !(Ku & 4194240) && (Ku = 64),
  e
}
function Gd(e) {
  for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
  return t
}
function ku(e, t, n) {
  e.pendingLanes |= t,
  t !== 536870912 && (e.suspendedLanes = 0,
  e.pingedLanes = 0),
  e = e.eventTimes,
  t = 31 - ei(t),
  e[t] = n
}
function IC(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
  e.suspendedLanes = 0,
  e.pingedLanes = 0,
  e.expiredLanes &= t,
  e.mutableReadLanes &= t,
  e.entangledLanes &= t,
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - ei(n)
        , o = 1 << i;
      t[i] = 0,
      r[i] = -1,
      e[i] = -1,
      n &= ~o
  }
}
function Zm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
      var r = 31 - ei(n)
        , i = 1 << r;
      i & t | e[r] & t && (e[r] |= t),
      n &= ~i
  }
}
var st = 0;
function J_(e) {
  return e &= -e,
  1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Z_, eg, e1, t1, n1, gh = !1, Ju = [], go = null, vo = null, yo = null, Zl = new Map, eu = new Map, oo = [], NC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Py(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      go = null;
      break;
  case "dragenter":
  case "dragleave":
      vo = null;
      break;
  case "mouseover":
  case "mouseout":
      yo = null;
      break;
  case "pointerover":
  case "pointerout":
      Zl.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      eu.delete(t.pointerId)
  }
}
function tl(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i]
  },
  t !== null && (t = Ou(t),
  t !== null && eg(t)),
  e) : (e.eventSystemFlags |= r,
  t = e.targetContainers,
  i !== null && t.indexOf(i) === -1 && t.push(i),
  e)
}
function FC(e, t, n, r, i) {
  switch (t) {
  case "focusin":
      return go = tl(go, e, t, n, r, i),
      !0;
  case "dragenter":
      return vo = tl(vo, e, t, n, r, i),
      !0;
  case "mouseover":
      return yo = tl(yo, e, t, n, r, i),
      !0;
  case "pointerover":
      var o = i.pointerId;
      return Zl.set(o, tl(Zl.get(o) || null, e, t, n, r, i)),
      !0;
  case "gotpointercapture":
      return o = i.pointerId,
      eu.set(o, tl(eu.get(o) || null, e, t, n, r, i)),
      !0
  }
  return !1
}
function r1(e) {
  var t = Go(e.target);
  if (t !== null) {
      var n = Ts(t);
      if (n !== null) {
          if (t = n.tag,
          t === 13) {
              if (t = W_(n),
              t !== null) {
                  e.blockedOn = t,
                  n1(e.priority, function() {
                      e1(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}
function Rc(e) {
  if (e.blockedOn !== null)
      return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = vh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type,n);
          fh = r,
          n.target.dispatchEvent(r),
          fh = null
      } else
          return t = Ou(n),
          t !== null && eg(t),
          e.blockedOn = n,
          !1;
      t.shift()
  }
  return !0
}
function Oy(e, t, n) {
  Rc(e) && n.delete(t)
}
function jC() {
  gh = !1,
  go !== null && Rc(go) && (go = null),
  vo !== null && Rc(vo) && (vo = null),
  yo !== null && Rc(yo) && (yo = null),
  Zl.forEach(Oy),
  eu.forEach(Oy)
}
function nl(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
  gh || (gh = !0,
  _r.unstable_scheduleCallback(_r.unstable_NormalPriority, jC)))
}
function tu(e) {
  function t(i) {
      return nl(i, e)
  }
  if (0 < Ju.length) {
      nl(Ju[0], e);
      for (var n = 1; n < Ju.length; n++) {
          var r = Ju[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (go !== null && nl(go, e),
  vo !== null && nl(vo, e),
  yo !== null && nl(yo, e),
  Zl.forEach(t),
  eu.forEach(t),
  n = 0; n < oo.length; n++)
      r = oo[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < oo.length && (n = oo[0],
  n.blockedOn === null); )
      r1(n),
      n.blockedOn === null && oo.shift()
}
var ha = qi.ReactCurrentBatchConfig
, cf = !0;
function zC(e, t, n, r) {
  var i = st
    , o = ha.transition;
  ha.transition = null;
  try {
      st = 1,
      tg(e, t, n, r)
  } finally {
      st = i,
      ha.transition = o
  }
}
function $C(e, t, n, r) {
  var i = st
    , o = ha.transition;
  ha.transition = null;
  try {
      st = 4,
      tg(e, t, n, r)
  } finally {
      st = i,
      ha.transition = o
  }
}
function tg(e, t, n, r) {
  if (cf) {
      var i = vh(e, t, n, r);
      if (i === null)
          ip(e, t, r, ff, n),
          Py(e, r);
      else if (FC(i, e, t, n, r))
          r.stopPropagation();
      else if (Py(e, r),
      t & 4 && -1 < NC.indexOf(e)) {
          for (; i !== null; ) {
              var o = Ou(i);
              if (o !== null && Z_(o),
              o = vh(e, t, n, r),
              o === null && ip(e, t, r, ff, n),
              o === i)
                  break;
              i = o
          }
          i !== null && r.stopPropagation()
      } else
          ip(e, t, r, null, n)
  }
}
var ff = null;
function vh(e, t, n, r) {
  if (ff = null,
  e = Qm(r),
  e = Go(e),
  e !== null)
      if (t = Ts(e),
      t === null)
          e = null;
      else if (n = t.tag,
      n === 13) {
          if (e = W_(t),
          e !== null)
              return e;
          e = null
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
      } else
          t !== e && (e = null);
  return ff = e,
  null
}
function i1(e) {
  switch (e) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (kC()) {
      case Jm:
          return 1;
      case X_:
          return 4;
      case lf:
      case PC:
          return 16;
      case K_:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var ao = null
, ng = null
, Dc = null;
function o1() {
  if (Dc)
      return Dc;
  var e, t = ng, n = t.length, r, i = "value"in ao ? ao.value : ao.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
      ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
  return Dc = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Lc(e) {
  var t = e.keyCode;
  return "charCode"in e ? (e = e.charCode,
  e === 0 && t === 13 && (e = 13)) : e = t,
  e === 10 && (e = 13),
  32 <= e || e === 13 ? e : 0
}
function Zu() {
  return !0
}
function Ay() {
  return !1
}
function Sr(e) {
  function t(n, r, i, o, s) {
      this._reactName = n,
      this._targetInst = i,
      this.type = r,
      this.nativeEvent = o,
      this.target = s,
      this.currentTarget = null;
      for (var a in e)
          e.hasOwnProperty(a) && (n = e[a],
          this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Zu : Ay,
      this.isPropagationStopped = Ay,
      this
  }
  return Rt(t.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = Zu)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = Zu)
      },
      persist: function() {},
      isPersistent: Zu
  }),
  t
}
var Ua = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e) {
      return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, rg = Sr(Ua), Pu = Rt({}, Ua, {
  view: 0,
  detail: 0
}), BC = Sr(Pu), Xd, Kd, rl, Qf = Rt({}, Pu, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: ig,
  button: 0,
  buttons: 0,
  relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function(e) {
      return "movementX"in e ? e.movementX : (e !== rl && (rl && e.type === "mousemove" ? (Xd = e.screenX - rl.screenX,
      Kd = e.screenY - rl.screenY) : Kd = Xd = 0,
      rl = e),
      Xd)
  },
  movementY: function(e) {
      return "movementY"in e ? e.movementY : Kd
  }
}), Ry = Sr(Qf), UC = Rt({}, Qf, {
  dataTransfer: 0
}), VC = Sr(UC), HC = Rt({}, Pu, {
  relatedTarget: 0
}), Qd = Sr(HC), WC = Rt({}, Ua, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), qC = Sr(WC), YC = Rt({}, Ua, {
  clipboardData: function(e) {
      return "clipboardData"in e ? e.clipboardData : window.clipboardData
  }
}), GC = Sr(YC), XC = Rt({}, Ua, {
  data: 0
}), Dy = Sr(XC), KC = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, QC = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, JC = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function ZC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = JC[e]) ? !!t[e] : !1
}
function ig() {
  return ZC
}
var ek = Rt({}, Pu, {
  key: function(e) {
      if (e.key) {
          var t = KC[e.key] || e.key;
          if (t !== "Unidentified")
              return t
      }
      return e.type === "keypress" ? (e = Lc(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? QC[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: ig,
  charCode: function(e) {
      return e.type === "keypress" ? Lc(e) : 0
  },
  keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function(e) {
      return e.type === "keypress" ? Lc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
, tk = Sr(ek)
, nk = Rt({}, Qf, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, Ly = Sr(nk)
, rk = Rt({}, Pu, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: ig
})
, ik = Sr(rk)
, ok = Rt({}, Ua, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, sk = Sr(ok)
, ak = Rt({}, Qf, {
  deltaX: function(e) {
      return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
  },
  deltaY: function(e) {
      return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, lk = Sr(ak)
, uk = [9, 13, 27, 32]
, og = $i && "CompositionEvent"in window
, Rl = null;
$i && "documentMode"in document && (Rl = document.documentMode);
var ck = $i && "TextEvent"in window && !Rl
, s1 = $i && (!og || Rl && 8 < Rl && 11 >= Rl)
, My = String.fromCharCode(32)
, Iy = !1;
function a1(e, t) {
  switch (e) {
  case "keyup":
      return uk.indexOf(t.keyCode) !== -1;
  case "keydown":
      return t.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function l1(e) {
  return e = e.detail,
  typeof e == "object" && "data"in e ? e.data : null
}
var Gs = !1;
function fk(e, t) {
  switch (e) {
  case "compositionend":
      return l1(t);
  case "keypress":
      return t.which !== 32 ? null : (Iy = !0,
      My);
  case "textInput":
      return e = t.data,
      e === My && Iy ? null : e;
  default:
      return null
  }
}
function dk(e, t) {
  if (Gs)
      return e === "compositionend" || !og && a1(e, t) ? (e = o1(),
      Dc = ng = ao = null,
      Gs = !1,
      e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
              return t.char;
          if (t.which)
              return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return s1 && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var pk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Ny(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pk[e.type] : t === "textarea"
}
function u1(e, t, n, r) {
  $_(r),
  t = df(t, "onChange"),
  0 < t.length && (n = new rg("onChange","change",null,n,r),
  e.push({
      event: n,
      listeners: t
  }))
}
var Dl = null
, nu = null;
function hk(e) {
  _1(e, 0)
}
function Jf(e) {
  var t = Qs(e);
  if (L_(t))
      return e
}
function mk(e, t) {
  if (e === "change")
      return t
}
var c1 = !1;
if ($i) {
  var Jd;
  if ($i) {
      var Zd = "oninput"in document;
      if (!Zd) {
          var Fy = document.createElement("div");
          Fy.setAttribute("oninput", "return;"),
          Zd = typeof Fy.oninput == "function"
      }
      Jd = Zd
  } else
      Jd = !1;
  c1 = Jd && (!document.documentMode || 9 < document.documentMode)
}
function jy() {
  Dl && (Dl.detachEvent("onpropertychange", f1),
  nu = Dl = null)
}
function f1(e) {
  if (e.propertyName === "value" && Jf(nu)) {
      var t = [];
      u1(t, nu, e, Qm(e)),
      H_(hk, t)
  }
}
function gk(e, t, n) {
  e === "focusin" ? (jy(),
  Dl = t,
  nu = n,
  Dl.attachEvent("onpropertychange", f1)) : e === "focusout" && jy()
}
function vk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Jf(nu)
}
function yk(e, t) {
  if (e === "click")
      return Jf(t)
}
function wk(e, t) {
  if (e === "input" || e === "change")
      return Jf(t)
}
function _k(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ri = typeof Object.is == "function" ? Object.is : _k;
function ru(e, t) {
  if (ri(e, t))
      return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Zp.call(t, i) || !ri(e[i], t[i]))
          return !1
  }
  return !0
}
function zy(e) {
  for (; e && e.firstChild; )
      e = e.firstChild;
  return e
}
function $y(e, t) {
  var n = zy(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length,
          e <= t && r >= t)
              return {
                  node: n,
                  offset: t - e
              };
          e = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = zy(n)
  }
}
function d1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? d1(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function p1() {
  for (var e = window, t = of(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          e = t.contentWindow;
      else
          break;
      t = of(e.document)
  }
  return t
}
function sg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function bk(e) {
  var t = p1()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && d1(n.ownerDocument.documentElement, n)) {
      if (r !== null && sg(n)) {
          if (t = r.start,
          e = r.end,
          e === void 0 && (e = t),
          "selectionStart"in n)
              n.selectionStart = t,
              n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
              e = e.getSelection();
              var i = n.textContent.length
                , o = Math.min(r.start, i);
              r = r.end === void 0 ? o : Math.min(r.end, i),
              !e.extend && o > r && (i = r,
              r = o,
              o = i),
              i = $y(n, o);
              var s = $y(n, r);
              i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              o > r ? (e.addRange(t),
              e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
              e.addRange(t)))
          }
      }
      for (t = [],
      e = n; e = e.parentNode; )
          e.nodeType === 1 && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
          e = t[n],
          e.element.scrollLeft = e.left,
          e.element.scrollTop = e.top
  }
}
var xk = $i && "documentMode"in document && 11 >= document.documentMode
, Xs = null
, yh = null
, Ll = null
, wh = !1;
function By(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wh || Xs == null || Xs !== of(r) || (r = Xs,
  "selectionStart"in r && sg(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  Ll && ru(Ll, r) || (Ll = r,
  r = df(yh, "onSelect"),
  0 < r.length && (t = new rg("onSelect","select",null,t,n),
  e.push({
      event: t,
      listeners: r
  }),
  t.target = Xs)))
}
function ec(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
  n["Webkit" + e] = "webkit" + t,
  n["Moz" + e] = "moz" + t,
  n
}
var Ks = {
  animationend: ec("Animation", "AnimationEnd"),
  animationiteration: ec("Animation", "AnimationIteration"),
  animationstart: ec("Animation", "AnimationStart"),
  transitionend: ec("Transition", "TransitionEnd")
}
, ep = {}
, h1 = {};
$i && (h1 = document.createElement("div").style,
"AnimationEvent"in window || (delete Ks.animationend.animation,
delete Ks.animationiteration.animation,
delete Ks.animationstart.animation),
"TransitionEvent"in window || delete Ks.transitionend.transition);
function Zf(e) {
  if (ep[e])
      return ep[e];
  if (!Ks[e])
      return e;
  var t = Ks[e], n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in h1)
          return ep[e] = t[n];
  return e
}
var m1 = Zf("animationend")
, g1 = Zf("animationiteration")
, v1 = Zf("animationstart")
, y1 = Zf("transitionend")
, w1 = new Map
, Uy = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mo(e, t) {
  w1.set(e, t),
  Es(t, [e])
}
for (var tp = 0; tp < Uy.length; tp++) {
  var np = Uy[tp]
    , Sk = np.toLowerCase()
    , Ek = np[0].toUpperCase() + np.slice(1);
  Mo(Sk, "on" + Ek)
}
Mo(m1, "onAnimationEnd");
Mo(g1, "onAnimationIteration");
Mo(v1, "onAnimationStart");
Mo("dblclick", "onDoubleClick");
Mo("focusin", "onFocus");
Mo("focusout", "onBlur");
Mo(y1, "onTransitionEnd");
Ca("onMouseEnter", ["mouseout", "mouseover"]);
Ca("onMouseLeave", ["mouseout", "mouseover"]);
Ca("onPointerEnter", ["pointerout", "pointerover"]);
Ca("onPointerLeave", ["pointerout", "pointerover"]);
Es("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Es("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Es("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Es("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Es("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Es("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, Tk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sl));
function Vy(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
  SC(r, t, void 0, e),
  e.currentTarget = null
}
function _1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n]
        , i = r.event;
      r = r.listeners;
      e: {
          var o = void 0;
          if (t)
              for (var s = r.length - 1; 0 <= s; s--) {
                  var a = r[s]
                    , l = a.instance
                    , u = a.currentTarget;
                  if (a = a.listener,
                  l !== o && i.isPropagationStopped())
                      break e;
                  Vy(i, a, u),
                  o = l
              }
          else
              for (s = 0; s < r.length; s++) {
                  if (a = r[s],
                  l = a.instance,
                  u = a.currentTarget,
                  a = a.listener,
                  l !== o && i.isPropagationStopped())
                      break e;
                  Vy(i, a, u),
                  o = l
              }
      }
  }
  if (af)
      throw e = hh,
      af = !1,
      hh = null,
      e
}
function wt(e, t) {
  var n = t[Eh];
  n === void 0 && (n = t[Eh] = new Set);
  var r = e + "__bubble";
  n.has(r) || (b1(t, e, 2, !1),
  n.add(r))
}
function rp(e, t, n) {
  var r = 0;
  t && (r |= 4),
  b1(n, e, r, t)
}
var tc = "_reactListening" + Math.random().toString(36).slice(2);
function iu(e) {
  if (!e[tc]) {
      e[tc] = !0,
      P_.forEach(function(n) {
          n !== "selectionchange" && (Tk.has(n) || rp(n, !1, e),
          rp(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tc] || (t[tc] = !0,
      rp("selectionchange", !1, t))
  }
}
function b1(e, t, n, r) {
  switch (i1(t)) {
  case 1:
      var i = zC;
      break;
  case 4:
      i = $C;
      break;
  default:
      i = tg
  }
  n = i.bind(null, t, n, e),
  i = void 0,
  !ph || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
  r ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
  }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
  }) : e.addEventListener(t, n, !1)
}
function ip(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var s = r.tag;
          if (s === 3 || s === 4) {
              var a = r.stateNode.containerInfo;
              if (a === i || a.nodeType === 8 && a.parentNode === i)
                  break;
              if (s === 4)
                  for (s = r.return; s !== null; ) {
                      var l = s.tag;
                      if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                      l === i || l.nodeType === 8 && l.parentNode === i))
                          return;
                      s = s.return
                  }
              for (; a !== null; ) {
                  if (s = Go(a),
                  s === null)
                      return;
                  if (l = s.tag,
                  l === 5 || l === 6) {
                      r = o = s;
                      continue e
                  }
                  a = a.parentNode
              }
          }
          r = r.return
      }
  H_(function() {
      var u = o
        , f = Qm(n)
        , d = [];
      e: {
          var h = w1.get(e);
          if (h !== void 0) {
              var g = rg
                , _ = e;
              switch (e) {
              case "keypress":
                  if (Lc(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  g = tk;
                  break;
              case "focusin":
                  _ = "focus",
                  g = Qd;
                  break;
              case "focusout":
                  _ = "blur",
                  g = Qd;
                  break;
              case "beforeblur":
              case "afterblur":
                  g = Qd;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  g = Ry;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  g = VC;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  g = ik;
                  break;
              case m1:
              case g1:
              case v1:
                  g = qC;
                  break;
              case y1:
                  g = sk;
                  break;
              case "scroll":
                  g = BC;
                  break;
              case "wheel":
                  g = lk;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  g = GC;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  g = Ly
              }
              var m = (t & 4) !== 0
                , T = !m && e === "scroll"
                , x = m ? h !== null ? h + "Capture" : null : h;
              m = [];
              for (var w = u, S; w !== null; ) {
                  S = w;
                  var b = S.stateNode;
                  if (S.tag === 5 && b !== null && (S = b,
                  x !== null && (b = Jl(w, x),
                  b != null && m.push(ou(w, b, S)))),
                  T)
                      break;
                  w = w.return
              }
              0 < m.length && (h = new g(h,_,null,n,f),
              d.push({
                  event: h,
                  listeners: m
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (h = e === "mouseover" || e === "pointerover",
              g = e === "mouseout" || e === "pointerout",
              h && n !== fh && (_ = n.relatedTarget || n.fromElement) && (Go(_) || _[Bi]))
                  break e;
              if ((g || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window,
              g ? (_ = n.relatedTarget || n.toElement,
              g = u,
              _ = _ ? Go(_) : null,
              _ !== null && (T = Ts(_),
              _ !== T || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (g = null,
              _ = u),
              g !== _)) {
                  if (m = Ry,
                  b = "onMouseLeave",
                  x = "onMouseEnter",
                  w = "mouse",
                  (e === "pointerout" || e === "pointerover") && (m = Ly,
                  b = "onPointerLeave",
                  x = "onPointerEnter",
                  w = "pointer"),
                  T = g == null ? h : Qs(g),
                  S = _ == null ? h : Qs(_),
                  h = new m(b,w + "leave",g,n,f),
                  h.target = T,
                  h.relatedTarget = S,
                  b = null,
                  Go(f) === u && (m = new m(x,w + "enter",_,n,f),
                  m.target = S,
                  m.relatedTarget = T,
                  b = m),
                  T = b,
                  g && _)
                      t: {
                          for (m = g,
                          x = _,
                          w = 0,
                          S = m; S; S = Ms(S))
                              w++;
                          for (S = 0,
                          b = x; b; b = Ms(b))
                              S++;
                          for (; 0 < w - S; )
                              m = Ms(m),
                              w--;
                          for (; 0 < S - w; )
                              x = Ms(x),
                              S--;
                          for (; w--; ) {
                              if (m === x || x !== null && m === x.alternate)
                                  break t;
                              m = Ms(m),
                              x = Ms(x)
                          }
                          m = null
                      }
                  else
                      m = null;
                  g !== null && Hy(d, h, g, m, !1),
                  _ !== null && T !== null && Hy(d, T, _, m, !0)
              }
          }
          e: {
              if (h = u ? Qs(u) : window,
              g = h.nodeName && h.nodeName.toLowerCase(),
              g === "select" || g === "input" && h.type === "file")
                  var k = mk;
              else if (Ny(h))
                  if (c1)
                      k = wk;
                  else {
                      k = vk;
                      var D = gk
                  }
              else
                  (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = yk);
              if (k && (k = k(e, u))) {
                  u1(d, k, n, f);
                  break e
              }
              D && D(e, h, u),
              e === "focusout" && (D = h._wrapperState) && D.controlled && h.type === "number" && sh(h, "number", h.value)
          }
          switch (D = u ? Qs(u) : window,
          e) {
          case "focusin":
              (Ny(D) || D.contentEditable === "true") && (Xs = D,
              yh = u,
              Ll = null);
              break;
          case "focusout":
              Ll = yh = Xs = null;
              break;
          case "mousedown":
              wh = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              wh = !1,
              By(d, n, f);
              break;
          case "selectionchange":
              if (xk)
                  break;
          case "keydown":
          case "keyup":
              By(d, n, f)
          }
          var O;
          if (og)
              e: {
                  switch (e) {
                  case "compositionstart":
                      var R = "onCompositionStart";
                      break e;
                  case "compositionend":
                      R = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      R = "onCompositionUpdate";
                      break e
                  }
                  R = void 0
              }
          else
              Gs ? a1(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
          R && (s1 && n.locale !== "ko" && (Gs || R !== "onCompositionStart" ? R === "onCompositionEnd" && Gs && (O = o1()) : (ao = f,
          ng = "value"in ao ? ao.value : ao.textContent,
          Gs = !0)),
          D = df(u, R),
          0 < D.length && (R = new Dy(R,e,null,n,f),
          d.push({
              event: R,
              listeners: D
          }),
          O ? R.data = O : (O = l1(n),
          O !== null && (R.data = O)))),
          (O = ck ? fk(e, n) : dk(e, n)) && (u = df(u, "onBeforeInput"),
          0 < u.length && (f = new Dy("onBeforeInput","beforeinput",null,n,f),
          d.push({
              event: f,
              listeners: u
          }),
          f.data = O))
      }
      _1(d, t)
  })
}
function ou(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}
function df(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e
        , o = i.stateNode;
      i.tag === 5 && o !== null && (i = o,
      o = Jl(e, n),
      o != null && r.unshift(ou(e, o, i)),
      o = Jl(e, t),
      o != null && r.push(ou(e, o, i))),
      e = e.return
  }
  return r
}
function Ms(e) {
  if (e === null)
      return null;
  do
      e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function Hy(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n
        , l = a.alternate
        , u = a.stateNode;
      if (l !== null && l === r)
          break;
      a.tag === 5 && u !== null && (a = u,
      i ? (l = Jl(n, o),
      l != null && s.unshift(ou(n, l, a))) : i || (l = Jl(n, o),
      l != null && s.push(ou(n, l, a)))),
      n = n.return
  }
  s.length !== 0 && e.push({
      event: t,
      listeners: s
  })
}
var Ck = /\r\n?/g
, kk = /\u0000|\uFFFD/g;
function Wy(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ck, `
`).replace(kk, "")
}
function nc(e, t, n) {
  if (t = Wy(t),
  Wy(e) !== t && n)
      throw Error(X(425))
}
function pf() {}
var _h = null
, bh = null;
function xh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Sh = typeof setTimeout == "function" ? setTimeout : void 0
, Pk = typeof clearTimeout == "function" ? clearTimeout : void 0
, qy = typeof Promise == "function" ? Promise : void 0
, Ok = typeof queueMicrotask == "function" ? queueMicrotask : typeof qy < "u" ? function(e) {
  return qy.resolve(null).then(e).catch(Ak)
}
: Sh;
function Ak(e) {
  setTimeout(function() {
      throw e
  })
}
function op(e, t) {
  var n = t
    , r = 0;
  do {
      var i = n.nextSibling;
      if (e.removeChild(n),
      i && i.nodeType === 8)
          if (n = i.data,
          n === "/$") {
              if (r === 0) {
                  e.removeChild(i),
                  tu(t);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i
  } while (n);
  tu(t)
}
function wo(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
          break;
      if (t === 8) {
          if (t = e.data,
          t === "$" || t === "$!" || t === "$?")
              break;
          if (t === "/$")
              return null
      }
  }
  return e
}
function Yy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0)
                  return e;
              t--
          } else
              n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var Va = Math.random().toString(36).slice(2)
, ui = "__reactFiber$" + Va
, su = "__reactProps$" + Va
, Bi = "__reactContainer$" + Va
, Eh = "__reactEvents$" + Va
, Rk = "__reactListeners$" + Va
, Dk = "__reactHandles$" + Va;
function Go(e) {
  var t = e[ui];
  if (t)
      return t;
  for (var n = e.parentNode; n; ) {
      if (t = n[Bi] || n[ui]) {
          if (n = t.alternate,
          t.child !== null || n !== null && n.child !== null)
              for (e = Yy(e); e !== null; ) {
                  if (n = e[ui])
                      return n;
                  e = Yy(e)
              }
          return t
      }
      e = n,
      n = e.parentNode
  }
  return null
}
function Ou(e) {
  return e = e[ui] || e[Bi],
  !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qs(e) {
  if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
  throw Error(X(33))
}
function ed(e) {
  return e[su] || null
}
var Th = []
, Js = -1;
function Io(e) {
  return {
      current: e
  }
}
function bt(e) {
  0 > Js || (e.current = Th[Js],
  Th[Js] = null,
  Js--)
}
function gt(e, t) {
  Js++,
  Th[Js] = e.current,
  e.current = t
}
var Oo = {}
, Ln = Io(Oo)
, tr = Io(!1)
, ps = Oo;
function ka(e, t) {
  var n = e.type.contextTypes;
  if (!n)
      return Oo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
      i[o] = t[o];
  return r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = t,
  e.__reactInternalMemoizedMaskedChildContext = i),
  i
}
function nr(e) {
  return e = e.childContextTypes,
  e != null
}
function hf() {
  bt(tr),
  bt(Ln)
}
function Gy(e, t, n) {
  if (Ln.current !== Oo)
      throw Error(X(168));
  gt(Ln, t),
  gt(tr, n)
}
function x1(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var i in r)
      if (!(i in t))
          throw Error(X(108, gC(e) || "Unknown", i));
  return Rt({}, n, r)
}
function mf(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Oo,
  ps = Ln.current,
  gt(Ln, e),
  gt(tr, tr.current),
  !0
}
function Xy(e, t, n) {
  var r = e.stateNode;
  if (!r)
      throw Error(X(169));
  n ? (e = x1(e, t, ps),
  r.__reactInternalMemoizedMergedChildContext = e,
  bt(tr),
  bt(Ln),
  gt(Ln, e)) : bt(tr),
  gt(tr, n)
}
var Oi = null
, td = !1
, sp = !1;
function S1(e) {
  Oi === null ? Oi = [e] : Oi.push(e)
}
function Lk(e) {
  td = !0,
  S1(e)
}
function No() {
  if (!sp && Oi !== null) {
      sp = !0;
      var e = 0
        , t = st;
      try {
          var n = Oi;
          for (st = 1; e < n.length; e++) {
              var r = n[e];
              do
                  r = r(!0);
              while (r !== null)
          }
          Oi = null,
          td = !1
      } catch (i) {
          throw Oi !== null && (Oi = Oi.slice(e + 1)),
          G_(Jm, No),
          i
      } finally {
          st = t,
          sp = !1
      }
  }
  return null
}
var Zs = []
, ea = 0
, gf = null
, vf = 0
, Ar = []
, Rr = 0
, hs = null
, Di = 1
, Li = "";
function Vo(e, t) {
  Zs[ea++] = vf,
  Zs[ea++] = gf,
  gf = e,
  vf = t
}
function E1(e, t, n) {
  Ar[Rr++] = Di,
  Ar[Rr++] = Li,
  Ar[Rr++] = hs,
  hs = e;
  var r = Di;
  e = Li;
  var i = 32 - ei(r) - 1;
  r &= ~(1 << i),
  n += 1;
  var o = 32 - ei(t) + i;
  if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32),
      r >>= s,
      i -= s,
      Di = 1 << 32 - ei(t) + i | n << i | r,
      Li = o + e
  } else
      Di = 1 << o | n << i | r,
      Li = e
}
function ag(e) {
  e.return !== null && (Vo(e, 1),
  E1(e, 1, 0))
}
function lg(e) {
  for (; e === gf; )
      gf = Zs[--ea],
      Zs[ea] = null,
      vf = Zs[--ea],
      Zs[ea] = null;
  for (; e === hs; )
      hs = Ar[--Rr],
      Ar[Rr] = null,
      Li = Ar[--Rr],
      Ar[Rr] = null,
      Di = Ar[--Rr],
      Ar[Rr] = null
}
var yr = null
, vr = null
, Et = !1
, Kr = null;
function T1(e, t) {
  var n = Mr(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = t,
  n.return = e,
  t = e.deletions,
  t === null ? (e.deletions = [n],
  e.flags |= 16) : t.push(n)
}
function Ky(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
      t !== null ? (e.stateNode = t,
      yr = e,
      vr = wo(t.firstChild),
      !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
      t !== null ? (e.stateNode = t,
      yr = e,
      vr = null,
      !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t,
      t !== null ? (n = hs !== null ? {
          id: Di,
          overflow: Li
      } : null,
      e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      },
      n = Mr(18, null, null, 0),
      n.stateNode = t,
      n.return = e,
      e.child = n,
      yr = e,
      vr = null,
      !0) : !1;
  default:
      return !1
  }
}
function Ch(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function kh(e) {
  if (Et) {
      var t = vr;
      if (t) {
          var n = t;
          if (!Ky(e, t)) {
              if (Ch(e))
                  throw Error(X(418));
              t = wo(n.nextSibling);
              var r = yr;
              t && Ky(e, t) ? T1(r, n) : (e.flags = e.flags & -4097 | 2,
              Et = !1,
              yr = e)
          }
      } else {
          if (Ch(e))
              throw Error(X(418));
          e.flags = e.flags & -4097 | 2,
          Et = !1,
          yr = e
      }
  }
}
function Qy(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
  yr = e
}
function rc(e) {
  if (e !== yr)
      return !1;
  if (!Et)
      return Qy(e),
      Et = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
  t = t !== "head" && t !== "body" && !xh(e.type, e.memoizedProps)),
  t && (t = vr)) {
      if (Ch(e))
          throw C1(),
          Error(X(418));
      for (; t; )
          T1(e, t),
          t = wo(t.nextSibling)
  }
  if (Qy(e),
  e.tag === 13) {
      if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
          throw Error(X(317));
      e: {
          for (e = e.nextSibling,
          t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          vr = wo(e.nextSibling);
                          break e
                      }
                      t--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          vr = null
      }
  } else
      vr = yr ? wo(e.stateNode.nextSibling) : null;
  return !0
}
function C1() {
  for (var e = vr; e; )
      e = wo(e.nextSibling)
}
function Pa() {
  vr = yr = null,
  Et = !1
}
function ug(e) {
  Kr === null ? Kr = [e] : Kr.push(e)
}
var Mk = qi.ReactCurrentBatchConfig;
function Yr(e, t) {
  if (e && e.defaultProps) {
      t = Rt({}, t),
      e = e.defaultProps;
      for (var n in e)
          t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
var yf = Io(null)
, wf = null
, ta = null
, cg = null;
function fg() {
  cg = ta = wf = null
}
function dg(e) {
  var t = yf.current;
  bt(yf),
  e._currentValue = t
}
function Ph(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
          break;
      e = e.return
  }
}
function ma(e, t) {
  wf = e,
  cg = ta = null,
  e = e.dependencies,
  e !== null && e.firstContext !== null && (e.lanes & t && (er = !0),
  e.firstContext = null)
}
function Br(e) {
  var t = e._currentValue;
  if (cg !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
      },
      ta === null) {
          if (wf === null)
              throw Error(X(308));
          ta = e,
          wf.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else
          ta = ta.next = e;
  return t
}
var Xo = null;
function pg(e) {
  Xo === null ? Xo = [e] : Xo.push(e)
}
function k1(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n,
  pg(t)) : (n.next = i.next,
  i.next = n),
  t.interleaved = n,
  Ui(e, r)
}
function Ui(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
  n = e,
  e = e.return; e !== null; )
      e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var io = !1;
function hg(e) {
  e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function P1(e, t) {
  e = e.updateQueue,
  t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}
function Ni(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function _o(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  et & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next,
      i.next = t),
      r.pending = t,
      Ui(e, n)
  }
  return i = r.interleaved,
  i === null ? (t.next = t,
  pg(r)) : (t.next = i.next,
  i.next = t),
  r.interleaved = t,
  Ui(e, n)
}
function Mc(e, t, n) {
  if (t = t.updateQueue,
  t !== null && (t = t.shared,
  (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Zm(e, n)
  }
}
function Jy(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var i = null
        , o = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var s = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              o === null ? i = o = s : o = o.next = s,
              n = n.next
          } while (n !== null);
          o === null ? i = o = t : o = o.next = t
      } else
          i = o = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects
      },
      e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate,
  e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function _f(e, t, n, r) {
  var i = e.updateQueue;
  io = !1;
  var o = i.firstBaseUpdate
    , s = i.lastBaseUpdate
    , a = i.shared.pending;
  if (a !== null) {
      i.shared.pending = null;
      var l = a
        , u = l.next;
      l.next = null,
      s === null ? o = u : s.next = u,
      s = l;
      var f = e.alternate;
      f !== null && (f = f.updateQueue,
      a = f.lastBaseUpdate,
      a !== s && (a === null ? f.firstBaseUpdate = u : a.next = u,
      f.lastBaseUpdate = l))
  }
  if (o !== null) {
      var d = i.baseState;
      s = 0,
      f = u = l = null,
      a = o;
      do {
          var h = a.lane
            , g = a.eventTime;
          if ((r & h) === h) {
              f !== null && (f = f.next = {
                  eventTime: g,
                  lane: 0,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              });
              e: {
                  var _ = e
                    , m = a;
                  switch (h = t,
                  g = n,
                  m.tag) {
                  case 1:
                      if (_ = m.payload,
                      typeof _ == "function") {
                          d = _.call(g, d, h);
                          break e
                      }
                      d = _;
                      break e;
                  case 3:
                      _.flags = _.flags & -65537 | 128;
                  case 0:
                      if (_ = m.payload,
                      h = typeof _ == "function" ? _.call(g, d, h) : _,
                      h == null)
                          break e;
                      d = Rt({}, d, h);
                      break e;
                  case 2:
                      io = !0
                  }
              }
              a.callback !== null && a.lane !== 0 && (e.flags |= 64,
              h = i.effects,
              h === null ? i.effects = [a] : h.push(a))
          } else
              g = {
                  eventTime: g,
                  lane: h,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              },
              f === null ? (u = f = g,
              l = d) : f = f.next = g,
              s |= h;
          if (a = a.next,
          a === null) {
              if (a = i.shared.pending,
              a === null)
                  break;
              h = a,
              a = h.next,
              h.next = null,
              i.lastBaseUpdate = h,
              i.shared.pending = null
          }
      } while (1);
      if (f === null && (l = d),
      i.baseState = l,
      i.firstBaseUpdate = u,
      i.lastBaseUpdate = f,
      t = i.shared.interleaved,
      t !== null) {
          i = t;
          do
              s |= i.lane,
              i = i.next;
          while (i !== t)
      } else
          o === null && (i.shared.lanes = 0);
      gs |= s,
      e.lanes = s,
      e.memoizedState = d
  }
}
function Zy(e, t, n) {
  if (e = t.effects,
  t.effects = null,
  e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t]
            , i = r.callback;
          if (i !== null) {
              if (r.callback = null,
              r = n,
              typeof i != "function")
                  throw Error(X(191, i));
              i.call(r)
          }
      }
}
var O1 = new k_.Component().refs;
function Oh(e, t, n, r) {
  t = e.memoizedState,
  n = n(r, t),
  n = n == null ? t : Rt({}, t, n),
  e.memoizedState = n,
  e.lanes === 0 && (e.updateQueue.baseState = n)
}
var nd = {
  isMounted: function(e) {
      return (e = e._reactInternals) ? Ts(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = Hn()
        , i = xo(e)
        , o = Ni(r, i);
      o.payload = t,
      n != null && (o.callback = n),
      t = _o(e, o, i),
      t !== null && (ti(t, e, i, r),
      Mc(t, e, i))
  },
  enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = Hn()
        , i = xo(e)
        , o = Ni(r, i);
      o.tag = 1,
      o.payload = t,
      n != null && (o.callback = n),
      t = _o(e, o, i),
      t !== null && (ti(t, e, i, r),
      Mc(t, e, i))
  },
  enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Hn()
        , r = xo(e)
        , i = Ni(n, r);
      i.tag = 2,
      t != null && (i.callback = t),
      t = _o(e, i, r),
      t !== null && (ti(t, e, r, n),
      Mc(t, e, r))
  }
};
function e0(e, t, n, r, i, o, s) {
  return e = e.stateNode,
  typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ru(n, r) || !ru(i, o) : !0
}
function A1(e, t, n) {
  var r = !1
    , i = Oo
    , o = t.contextType;
  return typeof o == "object" && o !== null ? o = Br(o) : (i = nr(t) ? ps : Ln.current,
  r = t.contextTypes,
  o = (r = r != null) ? ka(e, i) : Oo),
  t = new t(n,o),
  e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
  t.updater = nd,
  e.stateNode = t,
  t._reactInternals = e,
  r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = i,
  e.__reactInternalMemoizedMaskedChildContext = o),
  t
}
function t0(e, t, n, r) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
  typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
  t.state !== e && nd.enqueueReplaceState(t, t.state, null)
}
function Ah(e, t, n, r) {
  var i = e.stateNode;
  i.props = n,
  i.state = e.memoizedState,
  i.refs = O1,
  hg(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Br(o) : (o = nr(t) ? ps : Ln.current,
  i.context = ka(e, o)),
  i.state = e.memoizedState,
  o = t.getDerivedStateFromProps,
  typeof o == "function" && (Oh(e, t, o, n),
  i.state = e.memoizedState),
  typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
  typeof i.componentWillMount == "function" && i.componentWillMount(),
  typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
  t !== i.state && nd.enqueueReplaceState(i, i.state, null),
  _f(e, n, i, r),
  i.state = e.memoizedState),
  typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function il(e, t, n) {
  if (e = n.ref,
  e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(X(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(X(147, e));
          var i = r
            , o = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
              var a = i.refs;
              a === O1 && (a = i.refs = {}),
              s === null ? delete a[o] : a[o] = s
          }
          ,
          t._stringRef = o,
          t)
      }
      if (typeof e != "string")
          throw Error(X(284));
      if (!n._owner)
          throw Error(X(290, e))
  }
  return e
}
function ic(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(X(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function n0(e) {
  var t = e._init;
  return t(e._payload)
}
function R1(e) {
  function t(x, w) {
      if (e) {
          var S = x.deletions;
          S === null ? (x.deletions = [w],
          x.flags |= 16) : S.push(w)
      }
  }
  function n(x, w) {
      if (!e)
          return null;
      for (; w !== null; )
          t(x, w),
          w = w.sibling;
      return null
  }
  function r(x, w) {
      for (x = new Map; w !== null; )
          w.key !== null ? x.set(w.key, w) : x.set(w.index, w),
          w = w.sibling;
      return x
  }
  function i(x, w) {
      return x = So(x, w),
      x.index = 0,
      x.sibling = null,
      x
  }
  function o(x, w, S) {
      return x.index = S,
      e ? (S = x.alternate,
      S !== null ? (S = S.index,
      S < w ? (x.flags |= 2,
      w) : S) : (x.flags |= 2,
      w)) : (x.flags |= 1048576,
      w)
  }
  function s(x) {
      return e && x.alternate === null && (x.flags |= 2),
      x
  }
  function a(x, w, S, b) {
      return w === null || w.tag !== 6 ? (w = pp(S, x.mode, b),
      w.return = x,
      w) : (w = i(w, S),
      w.return = x,
      w)
  }
  function l(x, w, S, b) {
      var k = S.type;
      return k === Ys ? f(x, w, S.props.children, b, S.key) : w !== null && (w.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ro && n0(k) === w.type) ? (b = i(w, S.props),
      b.ref = il(x, w, S),
      b.return = x,
      b) : (b = $c(S.type, S.key, S.props, null, x.mode, b),
      b.ref = il(x, w, S),
      b.return = x,
      b)
  }
  function u(x, w, S, b) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== S.containerInfo || w.stateNode.implementation !== S.implementation ? (w = hp(S, x.mode, b),
      w.return = x,
      w) : (w = i(w, S.children || []),
      w.return = x,
      w)
  }
  function f(x, w, S, b, k) {
      return w === null || w.tag !== 7 ? (w = is(S, x.mode, b, k),
      w.return = x,
      w) : (w = i(w, S),
      w.return = x,
      w)
  }
  function d(x, w, S) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
          return w = pp("" + w, x.mode, S),
          w.return = x,
          w;
      if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
          case Yu:
              return S = $c(w.type, w.key, w.props, null, x.mode, S),
              S.ref = il(x, null, w),
              S.return = x,
              S;
          case qs:
              return w = hp(w, x.mode, S),
              w.return = x,
              w;
          case ro:
              var b = w._init;
              return d(x, b(w._payload), S)
          }
          if (bl(w) || Za(w))
              return w = is(w, x.mode, S, null),
              w.return = x,
              w;
          ic(x, w)
      }
      return null
  }
  function h(x, w, S, b) {
      var k = w !== null ? w.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number")
          return k !== null ? null : a(x, w, "" + S, b);
      if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
          case Yu:
              return S.key === k ? l(x, w, S, b) : null;
          case qs:
              return S.key === k ? u(x, w, S, b) : null;
          case ro:
              return k = S._init,
              h(x, w, k(S._payload), b)
          }
          if (bl(S) || Za(S))
              return k !== null ? null : f(x, w, S, b, null);
          ic(x, S)
      }
      return null
  }
  function g(x, w, S, b, k) {
      if (typeof b == "string" && b !== "" || typeof b == "number")
          return x = x.get(S) || null,
          a(w, x, "" + b, k);
      if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
          case Yu:
              return x = x.get(b.key === null ? S : b.key) || null,
              l(w, x, b, k);
          case qs:
              return x = x.get(b.key === null ? S : b.key) || null,
              u(w, x, b, k);
          case ro:
              var D = b._init;
              return g(x, w, S, D(b._payload), k)
          }
          if (bl(b) || Za(b))
              return x = x.get(S) || null,
              f(w, x, b, k, null);
          ic(w, b)
      }
      return null
  }
  function _(x, w, S, b) {
      for (var k = null, D = null, O = w, R = w = 0, M = null; O !== null && R < S.length; R++) {
          O.index > R ? (M = O,
          O = null) : M = O.sibling;
          var j = h(x, O, S[R], b);
          if (j === null) {
              O === null && (O = M);
              break
          }
          e && O && j.alternate === null && t(x, O),
          w = o(j, w, R),
          D === null ? k = j : D.sibling = j,
          D = j,
          O = M
      }
      if (R === S.length)
          return n(x, O),
          Et && Vo(x, R),
          k;
      if (O === null) {
          for (; R < S.length; R++)
              O = d(x, S[R], b),
              O !== null && (w = o(O, w, R),
              D === null ? k = O : D.sibling = O,
              D = O);
          return Et && Vo(x, R),
          k
      }
      for (O = r(x, O); R < S.length; R++)
          M = g(O, x, R, S[R], b),
          M !== null && (e && M.alternate !== null && O.delete(M.key === null ? R : M.key),
          w = o(M, w, R),
          D === null ? k = M : D.sibling = M,
          D = M);
      return e && O.forEach(function(Q) {
          return t(x, Q)
      }),
      Et && Vo(x, R),
      k
  }
  function m(x, w, S, b) {
      var k = Za(S);
      if (typeof k != "function")
          throw Error(X(150));
      if (S = k.call(S),
      S == null)
          throw Error(X(151));
      for (var D = k = null, O = w, R = w = 0, M = null, j = S.next(); O !== null && !j.done; R++,
      j = S.next()) {
          O.index > R ? (M = O,
          O = null) : M = O.sibling;
          var Q = h(x, O, j.value, b);
          if (Q === null) {
              O === null && (O = M);
              break
          }
          e && O && Q.alternate === null && t(x, O),
          w = o(Q, w, R),
          D === null ? k = Q : D.sibling = Q,
          D = Q,
          O = M
      }
      if (j.done)
          return n(x, O),
          Et && Vo(x, R),
          k;
      if (O === null) {
          for (; !j.done; R++,
          j = S.next())
              j = d(x, j.value, b),
              j !== null && (w = o(j, w, R),
              D === null ? k = j : D.sibling = j,
              D = j);
          return Et && Vo(x, R),
          k
      }
      for (O = r(x, O); !j.done; R++,
      j = S.next())
          j = g(O, x, R, j.value, b),
          j !== null && (e && j.alternate !== null && O.delete(j.key === null ? R : j.key),
          w = o(j, w, R),
          D === null ? k = j : D.sibling = j,
          D = j);
      return e && O.forEach(function(I) {
          return t(x, I)
      }),
      Et && Vo(x, R),
      k
  }
  function T(x, w, S, b) {
      if (typeof S == "object" && S !== null && S.type === Ys && S.key === null && (S = S.props.children),
      typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
          case Yu:
              e: {
                  for (var k = S.key, D = w; D !== null; ) {
                      if (D.key === k) {
                          if (k = S.type,
                          k === Ys) {
                              if (D.tag === 7) {
                                  n(x, D.sibling),
                                  w = i(D, S.props.children),
                                  w.return = x,
                                  x = w;
                                  break e
                              }
                          } else if (D.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ro && n0(k) === D.type) {
                              n(x, D.sibling),
                              w = i(D, S.props),
                              w.ref = il(x, D, S),
                              w.return = x,
                              x = w;
                              break e
                          }
                          n(x, D);
                          break
                      } else
                          t(x, D);
                      D = D.sibling
                  }
                  S.type === Ys ? (w = is(S.props.children, x.mode, b, S.key),
                  w.return = x,
                  x = w) : (b = $c(S.type, S.key, S.props, null, x.mode, b),
                  b.ref = il(x, w, S),
                  b.return = x,
                  x = b)
              }
              return s(x);
          case qs:
              e: {
                  for (D = S.key; w !== null; ) {
                      if (w.key === D)
                          if (w.tag === 4 && w.stateNode.containerInfo === S.containerInfo && w.stateNode.implementation === S.implementation) {
                              n(x, w.sibling),
                              w = i(w, S.children || []),
                              w.return = x,
                              x = w;
                              break e
                          } else {
                              n(x, w);
                              break
                          }
                      else
                          t(x, w);
                      w = w.sibling
                  }
                  w = hp(S, x.mode, b),
                  w.return = x,
                  x = w
              }
              return s(x);
          case ro:
              return D = S._init,
              T(x, w, D(S._payload), b)
          }
          if (bl(S))
              return _(x, w, S, b);
          if (Za(S))
              return m(x, w, S, b);
          ic(x, S)
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S,
      w !== null && w.tag === 6 ? (n(x, w.sibling),
      w = i(w, S),
      w.return = x,
      x = w) : (n(x, w),
      w = pp(S, x.mode, b),
      w.return = x,
      x = w),
      s(x)) : n(x, w)
  }
  return T
}
var Oa = R1(!0)
, D1 = R1(!1)
, Au = {}
, gi = Io(Au)
, au = Io(Au)
, lu = Io(Au);
function Ko(e) {
  if (e === Au)
      throw Error(X(174));
  return e
}
function mg(e, t) {
  switch (gt(lu, t),
  gt(au, e),
  gt(gi, Au),
  e = t.nodeType,
  e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lh(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t,
      t = e.namespaceURI || null,
      e = e.tagName,
      t = lh(t, e)
  }
  bt(gi),
  gt(gi, t)
}
function Aa() {
  bt(gi),
  bt(au),
  bt(lu)
}
function L1(e) {
  Ko(lu.current);
  var t = Ko(gi.current)
    , n = lh(t, e.type);
  t !== n && (gt(au, e),
  gt(gi, n))
}
function gg(e) {
  au.current === e && (bt(gi),
  bt(au))
}
var kt = Io(0);
function bf(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128)
              return t
      } else if (t.child !== null) {
          t.child.return = t,
          t = t.child;
          continue
      }
      if (t === e)
          break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
              return null;
          t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var ap = [];
function vg() {
  for (var e = 0; e < ap.length; e++)
      ap[e]._workInProgressVersionPrimary = null;
  ap.length = 0
}
var Ic = qi.ReactCurrentDispatcher
, lp = qi.ReactCurrentBatchConfig
, ms = 0
, At = null
, tn = null
, dn = null
, xf = !1
, Ml = !1
, uu = 0
, Ik = 0;
function Cn() {
  throw Error(X(321))
}
function yg(e, t) {
  if (t === null)
      return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!ri(e[n], t[n]))
          return !1;
  return !0
}
function wg(e, t, n, r, i, o) {
  if (ms = o,
  At = t,
  t.memoizedState = null,
  t.updateQueue = null,
  t.lanes = 0,
  Ic.current = e === null || e.memoizedState === null ? zk : $k,
  e = n(r, i),
  Ml) {
      o = 0;
      do {
          if (Ml = !1,
          uu = 0,
          25 <= o)
              throw Error(X(301));
          o += 1,
          dn = tn = null,
          t.updateQueue = null,
          Ic.current = Bk,
          e = n(r, i)
      } while (Ml)
  }
  if (Ic.current = Sf,
  t = tn !== null && tn.next !== null,
  ms = 0,
  dn = tn = At = null,
  xf = !1,
  t)
      throw Error(X(300));
  return e
}
function _g() {
  var e = uu !== 0;
  return uu = 0,
  e
}
function ai() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return dn === null ? At.memoizedState = dn = e : dn = dn.next = e,
  dn
}
function Ur() {
  if (tn === null) {
      var e = At.alternate;
      e = e !== null ? e.memoizedState : null
  } else
      e = tn.next;
  var t = dn === null ? At.memoizedState : dn.next;
  if (t !== null)
      dn = t,
      tn = e;
  else {
      if (e === null)
          throw Error(X(310));
      tn = e,
      e = {
          memoizedState: tn.memoizedState,
          baseState: tn.baseState,
          baseQueue: tn.baseQueue,
          queue: tn.queue,
          next: null
      },
      dn === null ? At.memoizedState = dn = e : dn = dn.next = e
  }
  return dn
}
function cu(e, t) {
  return typeof t == "function" ? t(e) : t
}
function up(e) {
  var t = Ur()
    , n = t.queue;
  if (n === null)
      throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = tn
    , i = r.baseQueue
    , o = n.pending;
  if (o !== null) {
      if (i !== null) {
          var s = i.next;
          i.next = o.next,
          o.next = s
      }
      r.baseQueue = i = o,
      n.pending = null
  }
  if (i !== null) {
      o = i.next,
      r = r.baseState;
      var a = s = null
        , l = null
        , u = o;
      do {
          var f = u.lane;
          if ((ms & f) === f)
              l !== null && (l = l.next = {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              }),
              r = u.hasEagerState ? u.eagerState : e(r, u.action);
          else {
              var d = {
                  lane: f,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null
              };
              l === null ? (a = l = d,
              s = r) : l = l.next = d,
              At.lanes |= f,
              gs |= f
          }
          u = u.next
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a,
      ri(r, t.memoizedState) || (er = !0),
      t.memoizedState = r,
      t.baseState = s,
      t.baseQueue = l,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
  e !== null) {
      i = e;
      do
          o = i.lane,
          At.lanes |= o,
          gs |= o,
          i = i.next;
      while (i !== e)
  } else
      i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function cp(e) {
  var t = Ur()
    , n = t.queue;
  if (n === null)
      throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , i = n.pending
    , o = t.memoizedState;
  if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
          o = e(o, s.action),
          s = s.next;
      while (s !== i);
      ri(o, t.memoizedState) || (er = !0),
      t.memoizedState = o,
      t.baseQueue === null && (t.baseState = o),
      n.lastRenderedState = o
  }
  return [o, r]
}
function M1() {}
function I1(e, t) {
  var n = At
    , r = Ur()
    , i = t()
    , o = !ri(r.memoizedState, i);
  if (o && (r.memoizedState = i,
  er = !0),
  r = r.queue,
  bg(j1.bind(null, n, r, e), [e]),
  r.getSnapshot !== t || o || dn !== null && dn.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      fu(9, F1.bind(null, n, r, i, t), void 0, null),
      pn === null)
          throw Error(X(349));
      ms & 30 || N1(n, t, i)
  }
  return i
}
function N1(e, t, n) {
  e.flags |= 16384,
  e = {
      getSnapshot: t,
      value: n
  },
  t = At.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  At.updateQueue = t,
  t.stores = [e]) : (n = t.stores,
  n === null ? t.stores = [e] : n.push(e))
}
function F1(e, t, n, r) {
  t.value = n,
  t.getSnapshot = r,
  z1(t) && $1(e)
}
function j1(e, t, n) {
  return n(function() {
      z1(t) && $1(e)
  })
}
function z1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !ri(e, n)
  } catch {
      return !0
  }
}
function $1(e) {
  var t = Ui(e, 1);
  t !== null && ti(t, e, 1, -1)
}
function r0(e) {
  var t = ai();
  return typeof e == "function" && (e = e()),
  t.memoizedState = t.baseState = e,
  e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cu,
      lastRenderedState: e
  },
  t.queue = e,
  e = e.dispatch = jk.bind(null, At, e),
  [t.memoizedState, e]
}
function fu(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  },
  t = At.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  At.updateQueue = t,
  t.lastEffect = e.next = e) : (n = t.lastEffect,
  n === null ? t.lastEffect = e.next = e : (r = n.next,
  n.next = e,
  e.next = r,
  t.lastEffect = e)),
  e
}
function B1() {
  return Ur().memoizedState
}
function Nc(e, t, n, r) {
  var i = ai();
  At.flags |= e,
  i.memoizedState = fu(1 | t, n, void 0, r === void 0 ? null : r)
}
function rd(e, t, n, r) {
  var i = Ur();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (tn !== null) {
      var s = tn.memoizedState;
      if (o = s.destroy,
      r !== null && yg(r, s.deps)) {
          i.memoizedState = fu(t, n, o, r);
          return
      }
  }
  At.flags |= e,
  i.memoizedState = fu(1 | t, n, o, r)
}
function i0(e, t) {
  return Nc(8390656, 8, e, t)
}
function bg(e, t) {
  return rd(2048, 8, e, t)
}
function U1(e, t) {
  return rd(4, 2, e, t)
}
function V1(e, t) {
  return rd(4, 4, e, t)
}
function H1(e, t) {
  if (typeof t == "function")
      return e = e(),
      t(e),
      function() {
          t(null)
      }
      ;
  if (t != null)
      return e = e(),
      t.current = e,
      function() {
          t.current = null
      }
}
function W1(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
  rd(4, 4, H1.bind(null, t, e), n)
}
function xg() {}
function q1(e, t) {
  var n = Ur();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yg(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
  e)
}
function Y1(e, t) {
  var n = Ur();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yg(t, r[1]) ? r[0] : (e = e(),
  n.memoizedState = [e, t],
  e)
}
function G1(e, t, n) {
  return ms & 21 ? (ri(n, t) || (n = Q_(),
  At.lanes |= n,
  gs |= n,
  e.baseState = !0),
  t) : (e.baseState && (e.baseState = !1,
  er = !0),
  e.memoizedState = n)
}
function Nk(e, t) {
  var n = st;
  st = n !== 0 && 4 > n ? n : 4,
  e(!0);
  var r = lp.transition;
  lp.transition = {};
  try {
      e(!1),
      t()
  } finally {
      st = n,
      lp.transition = r
  }
}
function X1() {
  return Ur().memoizedState
}
function Fk(e, t, n) {
  var r = xo(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  K1(e))
      Q1(t, n);
  else if (n = k1(e, t, n, r),
  n !== null) {
      var i = Hn();
      ti(n, e, r, i),
      J1(n, t, r)
  }
}
function jk(e, t, n) {
  var r = xo(e)
    , i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (K1(e))
      Q1(t, i);
  else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
      o !== null))
          try {
              var s = t.lastRenderedState
                , a = o(s, n);
              if (i.hasEagerState = !0,
              i.eagerState = a,
              ri(a, s)) {
                  var l = t.interleaved;
                  l === null ? (i.next = i,
                  pg(t)) : (i.next = l.next,
                  l.next = i),
                  t.interleaved = i;
                  return
              }
          } catch {} finally {}
      n = k1(e, t, i, r),
      n !== null && (i = Hn(),
      ti(n, e, r, i),
      J1(n, t, r))
  }
}
function K1(e) {
  var t = e.alternate;
  return e === At || t !== null && t === At
}
function Q1(e, t) {
  Ml = xf = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
  n.next = t),
  e.pending = t
}
function J1(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Zm(e, n)
  }
}
var Sf = {
  readContext: Br,
  useCallback: Cn,
  useContext: Cn,
  useEffect: Cn,
  useImperativeHandle: Cn,
  useInsertionEffect: Cn,
  useLayoutEffect: Cn,
  useMemo: Cn,
  useReducer: Cn,
  useRef: Cn,
  useState: Cn,
  useDebugValue: Cn,
  useDeferredValue: Cn,
  useTransition: Cn,
  useMutableSource: Cn,
  useSyncExternalStore: Cn,
  useId: Cn,
  unstable_isNewReconciler: !1
}
, zk = {
  readContext: Br,
  useCallback: function(e, t) {
      return ai().memoizedState = [e, t === void 0 ? null : t],
      e
  },
  useContext: Br,
  useEffect: i0,
  useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null,
      Nc(4194308, 4, H1.bind(null, t, e), n)
  },
  useLayoutEffect: function(e, t) {
      return Nc(4194308, 4, e, t)
  },
  useInsertionEffect: function(e, t) {
      return Nc(4, 2, e, t)
  },
  useMemo: function(e, t) {
      var n = ai();
      return t = t === void 0 ? null : t,
      e = e(),
      n.memoizedState = [e, t],
      e
  },
  useReducer: function(e, t, n) {
      var r = ai();
      return t = n !== void 0 ? n(t) : t,
      r.memoizedState = r.baseState = t,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
      },
      r.queue = e,
      e = e.dispatch = Fk.bind(null, At, e),
      [r.memoizedState, e]
  },
  useRef: function(e) {
      var t = ai();
      return e = {
          current: e
      },
      t.memoizedState = e
  },
  useState: r0,
  useDebugValue: xg,
  useDeferredValue: function(e) {
      return ai().memoizedState = e
  },
  useTransition: function() {
      var e = r0(!1)
        , t = e[0];
      return e = Nk.bind(null, e[1]),
      ai().memoizedState = e,
      [t, e]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(e, t, n) {
      var r = At
        , i = ai();
      if (Et) {
          if (n === void 0)
              throw Error(X(407));
          n = n()
      } else {
          if (n = t(),
          pn === null)
              throw Error(X(349));
          ms & 30 || N1(r, t, n)
      }
      i.memoizedState = n;
      var o = {
          value: n,
          getSnapshot: t
      };
      return i.queue = o,
      i0(j1.bind(null, r, o, e), [e]),
      r.flags |= 2048,
      fu(9, F1.bind(null, r, o, n, t), void 0, null),
      n
  },
  useId: function() {
      var e = ai()
        , t = pn.identifierPrefix;
      if (Et) {
          var n = Li
            , r = Di;
          n = (r & ~(1 << 32 - ei(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = uu++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
          n = Ik++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
  },
  unstable_isNewReconciler: !1
}
, $k = {
  readContext: Br,
  useCallback: q1,
  useContext: Br,
  useEffect: bg,
  useImperativeHandle: W1,
  useInsertionEffect: U1,
  useLayoutEffect: V1,
  useMemo: Y1,
  useReducer: up,
  useRef: B1,
  useState: function() {
      return up(cu)
  },
  useDebugValue: xg,
  useDeferredValue: function(e) {
      var t = Ur();
      return G1(t, tn.memoizedState, e)
  },
  useTransition: function() {
      var e = up(cu)[0]
        , t = Ur().memoizedState;
      return [e, t]
  },
  useMutableSource: M1,
  useSyncExternalStore: I1,
  useId: X1,
  unstable_isNewReconciler: !1
}
, Bk = {
  readContext: Br,
  useCallback: q1,
  useContext: Br,
  useEffect: bg,
  useImperativeHandle: W1,
  useInsertionEffect: U1,
  useLayoutEffect: V1,
  useMemo: Y1,
  useReducer: cp,
  useRef: B1,
  useState: function() {
      return cp(cu)
  },
  useDebugValue: xg,
  useDeferredValue: function(e) {
      var t = Ur();
      return tn === null ? t.memoizedState = e : G1(t, tn.memoizedState, e)
  },
  useTransition: function() {
      var e = cp(cu)[0]
        , t = Ur().memoizedState;
      return [e, t]
  },
  useMutableSource: M1,
  useSyncExternalStore: I1,
  useId: X1,
  unstable_isNewReconciler: !1
};
function Ra(e, t) {
  try {
      var n = ""
        , r = t;
      do
          n += mC(r),
          r = r.return;
      while (r);
      var i = n
  } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
      value: e,
      source: t,
      stack: i,
      digest: null
  }
}
function fp(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}
function Rh(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var Uk = typeof WeakMap == "function" ? WeakMap : Map;
function Z1(e, t, n) {
  n = Ni(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function() {
      Tf || (Tf = !0,
      Bh = r),
      Rh(e, t)
  }
  ,
  n
}
function eb(e, t, n) {
  n = Ni(-1, n),
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
          return r(i)
      }
      ,
      n.callback = function() {
          Rh(e, t)
      }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Rh(e, t),
      typeof r != "function" && (bo === null ? bo = new Set([this]) : bo.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : ""
      })
  }
  ),
  n
}
function o0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new Uk;
      var i = new Set;
      r.set(t, i)
  } else
      i = r.get(t),
      i === void 0 && (i = new Set,
      r.set(t, i));
  i.has(n) || (i.add(n),
  e = nP.bind(null, e, t, n),
  t.then(e, e))
}
function s0(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
          return e;
      e = e.return
  } while (e !== null);
  return null
}
function a0(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536,
  e.lanes = i,
  e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ni(-1, 1),
  t.tag = 2,
  _o(n, t, 1))),
  n.lanes |= 1),
  e)
}
var Vk = qi.ReactCurrentOwner
, er = !1;
function Fn(e, t, n, r) {
  t.child = e === null ? D1(t, null, n, r) : Oa(t, e.child, n, r)
}
function l0(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return ma(t, i),
  r = wg(e, t, n, r, o, i),
  n = _g(),
  e !== null && !er ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~i,
  Vi(e, t, i)) : (Et && n && ag(t),
  t.flags |= 1,
  Fn(e, t, r, i),
  t.child)
}
function u0(e, t, n, r, i) {
  if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ag(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = o,
      tb(e, t, o, r, i)) : (e = $c(n.type, null, r, t, t.mode, i),
      e.ref = t.ref,
      e.return = t,
      t.child = e)
  }
  if (o = e.child,
  !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : ru,
      n(s, r) && e.ref === t.ref)
          return Vi(e, t, i)
  }
  return t.flags |= 1,
  e = So(o, r),
  e.ref = t.ref,
  e.return = t,
  t.child = e
}
function tb(e, t, n, r, i) {
  if (e !== null) {
      var o = e.memoizedProps;
      if (ru(o, r) && e.ref === t.ref)
          if (er = !1,
          t.pendingProps = r = o,
          (e.lanes & i) !== 0)
              e.flags & 131072 && (er = !0);
          else
              return t.lanes = e.lanes,
              Vi(e, t, i)
  }
  return Dh(e, t, n, r, i)
}
function nb(e, t, n) {
  var r = t.pendingProps
    , i = r.children
    , o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1))
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          gt(ra, dr),
          dr |= n;
      else {
          if (!(n & 1073741824))
              return e = o !== null ? o.baseLanes | n : n,
              t.lanes = t.childLanes = 1073741824,
              t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null
              },
              t.updateQueue = null,
              gt(ra, dr),
              dr |= e,
              null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = o !== null ? o.baseLanes : n,
          gt(ra, dr),
          dr |= r
      }
  else
      o !== null ? (r = o.baseLanes | n,
      t.memoizedState = null) : r = n,
      gt(ra, dr),
      dr |= r;
  return Fn(e, t, i, n),
  t.child
}
function rb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
  t.flags |= 2097152)
}
function Dh(e, t, n, r, i) {
  var o = nr(n) ? ps : Ln.current;
  return o = ka(t, o),
  ma(t, i),
  n = wg(e, t, n, r, o, i),
  r = _g(),
  e !== null && !er ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~i,
  Vi(e, t, i)) : (Et && r && ag(t),
  t.flags |= 1,
  Fn(e, t, n, i),
  t.child)
}
function c0(e, t, n, r, i) {
  if (nr(n)) {
      var o = !0;
      mf(t)
  } else
      o = !1;
  if (ma(t, i),
  t.stateNode === null)
      Fc(e, t),
      A1(t, n, r),
      Ah(t, n, r, i),
      r = !0;
  else if (e === null) {
      var s = t.stateNode
        , a = t.memoizedProps;
      s.props = a;
      var l = s.context
        , u = n.contextType;
      typeof u == "object" && u !== null ? u = Br(u) : (u = nr(n) ? ps : Ln.current,
      u = ka(t, u));
      var f = n.getDerivedStateFromProps
        , d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && t0(t, s, r, u),
      io = !1;
      var h = t.memoizedState;
      s.state = h,
      _f(t, r, s, i),
      l = t.memoizedState,
      a !== r || h !== l || tr.current || io ? (typeof f == "function" && (Oh(t, n, f, r),
      l = t.memoizedState),
      (a = io || e0(t, n, a, r, h, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
      typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
      t.memoizedProps = r,
      t.memoizedState = l),
      s.props = r,
      s.state = l,
      s.context = u,
      r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
      r = !1)
  } else {
      s = t.stateNode,
      P1(e, t),
      a = t.memoizedProps,
      u = t.type === t.elementType ? a : Yr(t.type, a),
      s.props = u,
      d = t.pendingProps,
      h = s.context,
      l = n.contextType,
      typeof l == "object" && l !== null ? l = Br(l) : (l = nr(n) ? ps : Ln.current,
      l = ka(t, l));
      var g = n.getDerivedStateFromProps;
      (f = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || h !== l) && t0(t, s, r, l),
      io = !1,
      h = t.memoizedState,
      s.state = h,
      _f(t, r, s, i);
      var _ = t.memoizedState;
      a !== d || h !== _ || tr.current || io ? (typeof g == "function" && (Oh(t, n, g, r),
      _ = t.memoizedState),
      (u = io || e0(t, n, u, r, h, _, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, l),
      typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, l)),
      typeof s.componentDidUpdate == "function" && (t.flags |= 4),
      typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
      typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
      t.memoizedProps = r,
      t.memoizedState = _),
      s.props = r,
      s.state = _,
      s.context = l,
      r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
      typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
      r = !1)
  }
  return Lh(e, t, n, r, o, i)
}
function Lh(e, t, n, r, i, o) {
  rb(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s)
      return i && Xy(t, n, !1),
      Vi(e, t, o);
  r = t.stateNode,
  Vk.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
  e !== null && s ? (t.child = Oa(t, e.child, null, o),
  t.child = Oa(t, null, a, o)) : Fn(e, t, a, o),
  t.memoizedState = r.state,
  i && Xy(t, n, !0),
  t.child
}
function ib(e) {
  var t = e.stateNode;
  t.pendingContext ? Gy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gy(e, t.context, !1),
  mg(e, t.containerInfo)
}
function f0(e, t, n, r, i) {
  return Pa(),
  ug(i),
  t.flags |= 256,
  Fn(e, t, n, r),
  t.child
}
var Mh = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function Ih(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}
function ob(e, t, n) {
  var r = t.pendingProps, i = kt.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
  a ? (o = !0,
  t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
  gt(kt, i & 1),
  e === null)
      return kh(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
      e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (s = r.children,
      e = r.fallback,
      o ? (r = t.mode,
      o = t.child,
      s = {
          mode: "hidden",
          children: s
      },
      !(r & 1) && o !== null ? (o.childLanes = 0,
      o.pendingProps = s) : o = sd(s, r, 0, null),
      e = is(e, r, n, null),
      o.return = t,
      e.return = t,
      o.sibling = e,
      t.child = o,
      t.child.memoizedState = Ih(n),
      t.memoizedState = Mh,
      e) : Sg(t, s));
  if (i = e.memoizedState,
  i !== null && (a = i.dehydrated,
  a !== null))
      return Hk(e, t, s, r, a, i, n);
  if (o) {
      o = r.fallback,
      s = t.mode,
      i = e.child,
      a = i.sibling;
      var l = {
          mode: "hidden",
          children: r.children
      };
      return !(s & 1) && t.child !== i ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = l,
      t.deletions = null) : (r = So(i, l),
      r.subtreeFlags = i.subtreeFlags & 14680064),
      a !== null ? o = So(a, o) : (o = is(o, s, n, null),
      o.flags |= 2),
      o.return = t,
      r.return = t,
      r.sibling = o,
      t.child = r,
      r = o,
      o = t.child,
      s = e.child.memoizedState,
      s = s === null ? Ih(n) : {
          baseLanes: s.baseLanes | n,
          cachePool: null,
          transitions: s.transitions
      },
      o.memoizedState = s,
      o.childLanes = e.childLanes & ~n,
      t.memoizedState = Mh,
      r
  }
  return o = e.child,
  e = o.sibling,
  r = So(o, {
      mode: "visible",
      children: r.children
  }),
  !(t.mode & 1) && (r.lanes = n),
  r.return = t,
  r.sibling = null,
  e !== null && (n = t.deletions,
  n === null ? (t.deletions = [e],
  t.flags |= 16) : n.push(e)),
  t.child = r,
  t.memoizedState = null,
  r
}
function Sg(e, t) {
  return t = sd({
      mode: "visible",
      children: t
  }, e.mode, 0, null),
  t.return = e,
  e.child = t
}
function oc(e, t, n, r) {
  return r !== null && ug(r),
  Oa(t, e.child, null, n),
  e = Sg(t, t.pendingProps.children),
  e.flags |= 2,
  t.memoizedState = null,
  e
}
function Hk(e, t, n, r, i, o, s) {
  if (n)
      return t.flags & 256 ? (t.flags &= -257,
      r = fp(Error(X(422))),
      oc(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
      t.flags |= 128,
      null) : (o = r.fallback,
      i = t.mode,
      r = sd({
          mode: "visible",
          children: r.children
      }, i, 0, null),
      o = is(o, i, s, null),
      o.flags |= 2,
      r.return = t,
      o.return = t,
      r.sibling = o,
      t.child = r,
      t.mode & 1 && Oa(t, e.child, null, s),
      t.child.memoizedState = Ih(s),
      t.memoizedState = Mh,
      o);
  if (!(t.mode & 1))
      return oc(e, t, s, null);
  if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset,
      r)
          var a = r.dgst;
      return r = a,
      o = Error(X(419)),
      r = fp(o, r, void 0),
      oc(e, t, s, r)
  }
  if (a = (s & e.childLanes) !== 0,
  er || a) {
      if (r = pn,
      r !== null) {
          switch (s & -s) {
          case 4:
              i = 2;
              break;
          case 16:
              i = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              i = 32;
              break;
          case 536870912:
              i = 268435456;
              break;
          default:
              i = 0
          }
          i = i & (r.suspendedLanes | s) ? 0 : i,
          i !== 0 && i !== o.retryLane && (o.retryLane = i,
          Ui(e, i),
          ti(r, e, i, -1))
      }
      return Og(),
      r = fp(Error(X(421))),
      oc(e, t, s, r)
  }
  return i.data === "$?" ? (t.flags |= 128,
  t.child = e.child,
  t = rP.bind(null, e),
  i._reactRetry = t,
  null) : (e = o.treeContext,
  vr = wo(i.nextSibling),
  yr = t,
  Et = !0,
  Kr = null,
  e !== null && (Ar[Rr++] = Di,
  Ar[Rr++] = Li,
  Ar[Rr++] = hs,
  Di = e.id,
  Li = e.overflow,
  hs = t),
  t = Sg(t, r.children),
  t.flags |= 4096,
  t)
}
function d0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
  Ph(e.return, t, n)
}
function dp(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i
  } : (o.isBackwards = t,
  o.rendering = null,
  o.renderingStartTime = 0,
  o.last = r,
  o.tail = n,
  o.tailMode = i)
}
function sb(e, t, n) {
  var r = t.pendingProps
    , i = r.revealOrder
    , o = r.tail;
  if (Fn(e, t, r.children, n),
  r = kt.current,
  r & 2)
      r = r & 1 | 2,
      t.flags |= 128;
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                  e.memoizedState !== null && d0(e, n, t);
              else if (e.tag === 19)
                  d0(e, n, t);
              else if (e.child !== null) {
                  e.child.return = e,
                  e = e.child;
                  continue
              }
              if (e === t)
                  break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                      break e;
                  e = e.return
              }
              e.sibling.return = e.return,
              e = e.sibling
          }
      r &= 1
  }
  if (gt(kt, r),
  !(t.mode & 1))
      t.memoizedState = null;
  else
      switch (i) {
      case "forwards":
          for (n = t.child,
          i = null; n !== null; )
              e = n.alternate,
              e !== null && bf(e) === null && (i = n),
              n = n.sibling;
          n = i,
          n === null ? (i = t.child,
          t.child = null) : (i = n.sibling,
          n.sibling = null),
          dp(t, !1, i, n, o);
          break;
      case "backwards":
          for (n = null,
          i = t.child,
          t.child = null; i !== null; ) {
              if (e = i.alternate,
              e !== null && bf(e) === null) {
                  t.child = i;
                  break
              }
              e = i.sibling,
              i.sibling = n,
              n = i,
              i = e
          }
          dp(t, !0, n, null, o);
          break;
      case "together":
          dp(t, !1, null, null, void 0);
          break;
      default:
          t.memoizedState = null
      }
  return t.child
}
function Fc(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
  t.alternate = null,
  t.flags |= 2)
}
function Vi(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
  gs |= t.lanes,
  !(n & t.childLanes))
      return null;
  if (e !== null && t.child !== e.child)
      throw Error(X(153));
  if (t.child !== null) {
      for (e = t.child,
      n = So(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null; )
          e = e.sibling,
          n = n.sibling = So(e, e.pendingProps),
          n.return = t;
      n.sibling = null
  }
  return t.child
}
function Wk(e, t, n) {
  switch (t.tag) {
  case 3:
      ib(t),
      Pa();
      break;
  case 5:
      L1(t);
      break;
  case 1:
      nr(t.type) && mf(t);
      break;
  case 4:
      mg(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context
        , i = t.memoizedProps.value;
      gt(yf, r._currentValue),
      r._currentValue = i;
      break;
  case 13:
      if (r = t.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (gt(kt, kt.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? ob(e, t, n) : (gt(kt, kt.current & 1),
          e = Vi(e, t, n),
          e !== null ? e.sibling : null);
      gt(kt, kt.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0,
      e.flags & 128) {
          if (r)
              return sb(e, t, n);
          t.flags |= 128
      }
      if (i = t.memoizedState,
      i !== null && (i.rendering = null,
      i.tail = null,
      i.lastEffect = null),
      gt(kt, kt.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0,
      nb(e, t, n)
  }
  return Vi(e, t, n)
}
var ab, Nh, lb, ub;
ab = function(e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === t)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
Nh = function() {}
;
lb = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
      e = t.stateNode,
      Ko(gi.current);
      var o = null;
      switch (n) {
      case "input":
          i = ih(e, i),
          r = ih(e, r),
          o = [];
          break;
      case "select":
          i = Rt({}, i, {
              value: void 0
          }),
          r = Rt({}, r, {
              value: void 0
          }),
          o = [];
          break;
      case "textarea":
          i = ah(e, i),
          r = ah(e, r),
          o = [];
          break;
      default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pf)
      }
      uh(n, r);
      var s;
      n = null;
      for (u in i)
          if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
              if (u === "style") {
                  var a = i[u];
                  for (s in a)
                      a.hasOwnProperty(s) && (n || (n = {}),
                      n[s] = "")
              } else
                  u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Kl.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
      for (u in r) {
          var l = r[u];
          if (a = i != null ? i[u] : void 0,
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
              if (u === "style")
                  if (a) {
                      for (s in a)
                          !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                          n[s] = "");
                      for (s in l)
                          l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                          n[s] = l[s])
                  } else
                      n || (o || (o = []),
                      o.push(u, n)),
                      n = l;
              else
                  u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                  a = a ? a.__html : void 0,
                  l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Kl.hasOwnProperty(u) ? (l != null && u === "onScroll" && wt("scroll", e),
                  o || a === l || (o = [])) : (o = o || []).push(u, l))
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4)
  }
}
;
ub = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
}
;
function ol(e, t) {
  if (!Et)
      switch (e.tailMode) {
      case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
              t.alternate !== null && (n = t),
              t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
      }
}
function kn(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
      for (var i = e.child; i !== null; )
          n |= i.lanes | i.childLanes,
          r |= i.subtreeFlags & 14680064,
          r |= i.flags & 14680064,
          i.return = e,
          i = i.sibling;
  else
      for (i = e.child; i !== null; )
          n |= i.lanes | i.childLanes,
          r |= i.subtreeFlags,
          r |= i.flags,
          i.return = e,
          i = i.sibling;
  return e.subtreeFlags |= r,
  e.childLanes = n,
  t
}
function qk(e, t, n) {
  var r = t.pendingProps;
  switch (lg(t),
  t.tag) {
  case 2:
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
      return kn(t),
      null;
  case 1:
      return nr(t.type) && hf(),
      kn(t),
      null;
  case 3:
      return r = t.stateNode,
      Aa(),
      bt(tr),
      bt(Ln),
      vg(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (e === null || e.child === null) && (rc(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
      Kr !== null && (Hh(Kr),
      Kr = null))),
      Nh(e, t),
      kn(t),
      null;
  case 5:
      gg(t);
      var i = Ko(lu.current);
      if (n = t.type,
      e !== null && t.stateNode != null)
          lb(e, t, n, r, i),
          e.ref !== t.ref && (t.flags |= 512,
          t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null)
                  throw Error(X(166));
              return kn(t),
              null
          }
          if (e = Ko(gi.current),
          rc(t)) {
              r = t.stateNode,
              n = t.type;
              var o = t.memoizedProps;
              switch (r[ui] = t,
              r[su] = o,
              e = (t.mode & 1) !== 0,
              n) {
              case "dialog":
                  wt("cancel", r),
                  wt("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  wt("load", r);
                  break;
              case "video":
              case "audio":
                  for (i = 0; i < Sl.length; i++)
                      wt(Sl[i], r);
                  break;
              case "source":
                  wt("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  wt("error", r),
                  wt("load", r);
                  break;
              case "details":
                  wt("toggle", r);
                  break;
              case "input":
                  by(r, o),
                  wt("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!o.multiple
                  },
                  wt("invalid", r);
                  break;
              case "textarea":
                  Sy(r, o),
                  wt("invalid", r)
              }
              uh(n, o),
              i = null;
              for (var s in o)
                  if (o.hasOwnProperty(s)) {
                      var a = o[s];
                      s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && nc(r.textContent, a, e),
                      i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && nc(r.textContent, a, e),
                      i = ["children", "" + a]) : Kl.hasOwnProperty(s) && a != null && s === "onScroll" && wt("scroll", r)
                  }
              switch (n) {
              case "input":
                  Gu(r),
                  xy(r, o, !0);
                  break;
              case "textarea":
                  Gu(r),
                  Ey(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof o.onClick == "function" && (r.onclick = pf)
              }
              r = i,
              t.updateQueue = r,
              r !== null && (t.flags |= 4)
          } else {
              s = i.nodeType === 9 ? i : i.ownerDocument,
              e === "http://www.w3.org/1999/xhtml" && (e = N_(n)),
              e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                  is: r.is
              }) : (e = s.createElement(n),
              n === "select" && (s = e,
              r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
              e[ui] = t,
              e[su] = r,
              ab(e, t, !1, !1),
              t.stateNode = e;
              e: {
                  switch (s = ch(n, r),
                  n) {
                  case "dialog":
                      wt("cancel", e),
                      wt("close", e),
                      i = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      wt("load", e),
                      i = r;
                      break;
                  case "video":
                  case "audio":
                      for (i = 0; i < Sl.length; i++)
                          wt(Sl[i], e);
                      i = r;
                      break;
                  case "source":
                      wt("error", e),
                      i = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      wt("error", e),
                      wt("load", e),
                      i = r;
                      break;
                  case "details":
                      wt("toggle", e),
                      i = r;
                      break;
                  case "input":
                      by(e, r),
                      i = ih(e, r),
                      wt("invalid", e);
                      break;
                  case "option":
                      i = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      i = Rt({}, r, {
                          value: void 0
                      }),
                      wt("invalid", e);
                      break;
                  case "textarea":
                      Sy(e, r),
                      i = ah(e, r),
                      wt("invalid", e);
                      break;
                  default:
                      i = r
                  }
                  uh(n, i),
                  a = i;
                  for (o in a)
                      if (a.hasOwnProperty(o)) {
                          var l = a[o];
                          o === "style" ? z_(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                          l != null && F_(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ql(e, l) : typeof l == "number" && Ql(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Kl.hasOwnProperty(o) ? l != null && o === "onScroll" && wt("scroll", e) : l != null && Ym(e, o, l, s))
                      }
                  switch (n) {
                  case "input":
                      Gu(e),
                      xy(e, r, !1);
                      break;
                  case "textarea":
                      Gu(e),
                      Ey(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + Po(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple,
                      o = r.value,
                      o != null ? fa(e, !!r.multiple, o, !1) : r.defaultValue != null && fa(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof i.onClick == "function" && (e.onclick = pf)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return kn(t),
      null;
  case 6:
      if (e && t.stateNode != null)
          ub(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null)
              throw Error(X(166));
          if (n = Ko(lu.current),
          Ko(gi.current),
          rc(t)) {
              if (r = t.stateNode,
              n = t.memoizedProps,
              r[ui] = t,
              (o = r.nodeValue !== n) && (e = yr,
              e !== null))
                  switch (e.tag) {
                  case 3:
                      nc(r.nodeValue, n, (e.mode & 1) !== 0);
                      break;
                  case 5:
                      e.memoizedProps.suppressHydrationWarning !== !0 && nc(r.nodeValue, n, (e.mode & 1) !== 0)
                  }
              o && (t.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[ui] = t,
              t.stateNode = r
      }
      return kn(t),
      null;
  case 13:
      if (bt(kt),
      r = t.memoizedState,
      e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Et && vr !== null && t.mode & 1 && !(t.flags & 128))
              C1(),
              Pa(),
              t.flags |= 98560,
              o = !1;
          else if (o = rc(t),
          r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!o)
                      throw Error(X(318));
                  if (o = t.memoizedState,
                  o = o !== null ? o.dehydrated : null,
                  !o)
                      throw Error(X(317));
                  o[ui] = t
              } else
                  Pa(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  t.flags |= 4;
              kn(t),
              o = !1
          } else
              Kr !== null && (Hh(Kr),
              Kr = null),
              o = !0;
          if (!o)
              return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
      t) : (r = r !== null,
      r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
      t.mode & 1 && (e === null || kt.current & 1 ? rn === 0 && (rn = 3) : Og())),
      t.updateQueue !== null && (t.flags |= 4),
      kn(t),
      null);
  case 4:
      return Aa(),
      Nh(e, t),
      e === null && iu(t.stateNode.containerInfo),
      kn(t),
      null;
  case 10:
      return dg(t.type._context),
      kn(t),
      null;
  case 17:
      return nr(t.type) && hf(),
      kn(t),
      null;
  case 19:
      if (bt(kt),
      o = t.memoizedState,
      o === null)
          return kn(t),
          null;
      if (r = (t.flags & 128) !== 0,
      s = o.rendering,
      s === null)
          if (r)
              ol(o, !1);
          else {
              if (rn !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null; ) {
                      if (s = bf(e),
                      s !== null) {
                          for (t.flags |= 128,
                          ol(o, !1),
                          r = s.updateQueue,
                          r !== null && (t.updateQueue = r,
                          t.flags |= 4),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child; n !== null; )
                              o = n,
                              e = r,
                              o.flags &= 14680066,
                              s = o.alternate,
                              s === null ? (o.childLanes = 0,
                              o.lanes = e,
                              o.child = null,
                              o.subtreeFlags = 0,
                              o.memoizedProps = null,
                              o.memoizedState = null,
                              o.updateQueue = null,
                              o.dependencies = null,
                              o.stateNode = null) : (o.childLanes = s.childLanes,
                              o.lanes = s.lanes,
                              o.child = s.child,
                              o.subtreeFlags = 0,
                              o.deletions = null,
                              o.memoizedProps = s.memoizedProps,
                              o.memoizedState = s.memoizedState,
                              o.updateQueue = s.updateQueue,
                              o.type = s.type,
                              e = s.dependencies,
                              o.dependencies = e === null ? null : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                              }),
                              n = n.sibling;
                          return gt(kt, kt.current & 1 | 2),
                          t.child
                      }
                      e = e.sibling
                  }
              o.tail !== null && Wt() > Da && (t.flags |= 128,
              r = !0,
              ol(o, !1),
              t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = bf(s),
              e !== null) {
                  if (t.flags |= 128,
                  r = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n,
                  t.flags |= 4),
                  ol(o, !0),
                  o.tail === null && o.tailMode === "hidden" && !s.alternate && !Et)
                      return kn(t),
                      null
              } else
                  2 * Wt() - o.renderingStartTime > Da && n !== 1073741824 && (t.flags |= 128,
                  r = !0,
                  ol(o, !1),
                  t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child,
          t.child = s) : (n = o.last,
          n !== null ? n.sibling = s : t.child = s,
          o.last = s)
      }
      return o.tail !== null ? (t = o.tail,
      o.rendering = t,
      o.tail = t.sibling,
      o.renderingStartTime = Wt(),
      t.sibling = null,
      n = kt.current,
      gt(kt, r ? n & 1 | 2 : n & 1),
      t) : (kn(t),
      null);
  case 22:
  case 23:
      return Pg(),
      r = t.memoizedState !== null,
      e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
      r && t.mode & 1 ? dr & 1073741824 && (kn(t),
      t.subtreeFlags & 6 && (t.flags |= 8192)) : kn(t),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(X(156, t.tag))
}
function Yk(e, t) {
  switch (lg(t),
  t.tag) {
  case 1:
      return nr(t.type) && hf(),
      e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 3:
      return Aa(),
      bt(tr),
      bt(Ln),
      vg(),
      e = t.flags,
      e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
      t) : null;
  case 5:
      return gg(t),
      null;
  case 13:
      if (bt(kt),
      e = t.memoizedState,
      e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
              throw Error(X(340));
          Pa()
      }
      return e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 19:
      return bt(kt),
      null;
  case 4:
      return Aa(),
      null;
  case 10:
      return dg(t.type._context),
      null;
  case 22:
  case 23:
      return Pg(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var sc = !1
, On = !1
, Gk = typeof WeakSet == "function" ? WeakSet : Set
, de = null;
function na(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              Mt(e, t, r)
          }
      else
          n.current = null
}
function Fh(e, t, n) {
  try {
      n()
  } catch (r) {
      Mt(e, t, r)
  }
}
var p0 = !1;
function Xk(e, t) {
  if (_h = cf,
  e = p1(),
  sg(e)) {
      if ("selectionStart"in e)
          var n = {
              start: e.selectionStart,
              end: e.selectionEnd
          };
      else
          e: {
              n = (n = e.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var i = r.anchorOffset
                    , o = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      o.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var s = 0
                    , a = -1
                    , l = -1
                    , u = 0
                    , f = 0
                    , d = e
                    , h = null;
                  t: for (; ; ) {
                      for (var g; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i),
                      d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r),
                      d.nodeType === 3 && (s += d.nodeValue.length),
                      (g = d.firstChild) !== null; )
                          h = d,
                          d = g;
                      for (; ; ) {
                          if (d === e)
                              break t;
                          if (h === n && ++u === i && (a = s),
                          h === o && ++f === r && (l = s),
                          (g = d.nextSibling) !== null)
                              break;
                          d = h,
                          h = d.parentNode
                      }
                      d = g
                  }
                  n = a === -1 || l === -1 ? null : {
                      start: a,
                      end: l
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (bh = {
      focusedElem: e,
      selectionRange: n
  },
  cf = !1,
  de = t; de !== null; )
      if (t = de,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t,
          de = e;
      else
          for (; de !== null; ) {
              t = de;
              try {
                  var _ = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (_ !== null) {
                              var m = _.memoizedProps
                                , T = _.memoizedState
                                , x = t.stateNode
                                , w = x.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Yr(t.type, m), T);
                              x.__reactInternalSnapshotBeforeUpdate = w
                          }
                          break;
                      case 3:
                          var S = t.stateNode.containerInfo;
                          S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(X(163))
                      }
              } catch (b) {
                  Mt(t, t.return, b)
              }
              if (e = t.sibling,
              e !== null) {
                  e.return = t.return,
                  de = e;
                  break
              }
              de = t.return
          }
  return _ = p0,
  p0 = !1,
  _
}
function Il(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var i = r = r.next;
      do {
          if ((i.tag & e) === e) {
              var o = i.destroy;
              i.destroy = void 0,
              o !== void 0 && Fh(t, n, o)
          }
          i = i.next
      } while (i !== r)
  }
}
function id(e, t) {
  if (t = t.updateQueue,
  t = t !== null ? t.lastEffect : null,
  t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}
function jh(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}
function cb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
  cb(t)),
  e.child = null,
  e.deletions = null,
  e.sibling = null,
  e.tag === 5 && (t = e.stateNode,
  t !== null && (delete t[ui],
  delete t[su],
  delete t[Eh],
  delete t[Rk],
  delete t[Dk])),
  e.stateNode = null,
  e.return = null,
  e.dependencies = null,
  e.memoizedProps = null,
  e.memoizedState = null,
  e.pendingProps = null,
  e.stateNode = null,
  e.updateQueue = null
}
function fb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function h0(e) {
  e: for (; ; ) {
      for (; e.sibling === null; ) {
          if (e.return === null || fb(e.return))
              return null;
          e = e.return
      }
      for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
          e.child.return = e,
          e = e.child
      }
      if (!(e.flags & 2))
          return e.stateNode
  }
}
function zh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
      t.insertBefore(e, n)) : (t = n,
      t.appendChild(e)),
      n = n._reactRootContainer,
      n != null || t.onclick !== null || (t.onclick = pf));
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (zh(e, t, n),
      e = e.sibling; e !== null; )
          zh(e, t, n),
          e = e.sibling
}
function $h(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
  e !== null))
      for ($h(e, t, n),
      e = e.sibling; e !== null; )
          $h(e, t, n),
          e = e.sibling
}
var _n = null
, Gr = !1;
function Qi(e, t, n) {
  for (n = n.child; n !== null; )
      db(e, t, n),
      n = n.sibling
}
function db(e, t, n) {
  if (mi && typeof mi.onCommitFiberUnmount == "function")
      try {
          mi.onCommitFiberUnmount(Kf, n)
      } catch {}
  switch (n.tag) {
  case 5:
      On || na(n, t);
  case 6:
      var r = _n
        , i = Gr;
      _n = null,
      Qi(e, t, n),
      _n = r,
      Gr = i,
      _n !== null && (Gr ? (e = _n,
      n = n.stateNode,
      e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _n.removeChild(n.stateNode));
      break;
  case 18:
      _n !== null && (Gr ? (e = _n,
      n = n.stateNode,
      e.nodeType === 8 ? op(e.parentNode, n) : e.nodeType === 1 && op(e, n),
      tu(e)) : op(_n, n.stateNode));
      break;
  case 4:
      r = _n,
      i = Gr,
      _n = n.stateNode.containerInfo,
      Gr = !0,
      Qi(e, t, n),
      _n = r,
      Gr = i;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!On && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          i = r = r.next;
          do {
              var o = i
                , s = o.destroy;
              o = o.tag,
              s !== void 0 && (o & 2 || o & 4) && Fh(n, t, s),
              i = i.next
          } while (i !== r)
      }
      Qi(e, t, n);
      break;
  case 1:
      if (!On && (na(n, t),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (a) {
              Mt(n, t, a)
          }
      Qi(e, t, n);
      break;
  case 21:
      Qi(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (On = (r = On) || n.memoizedState !== null,
      Qi(e, t, n),
      On = r) : Qi(e, t, n);
      break;
  default:
      Qi(e, t, n)
  }
}
function m0(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Gk),
      t.forEach(function(r) {
          var i = iP.bind(null, e, r);
          n.has(r) || (n.add(r),
          r.then(i, i))
      })
  }
}
function Hr(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var i = n[r];
          try {
              var o = e
                , s = t
                , a = s;
              e: for (; a !== null; ) {
                  switch (a.tag) {
                  case 5:
                      _n = a.stateNode,
                      Gr = !1;
                      break e;
                  case 3:
                      _n = a.stateNode.containerInfo,
                      Gr = !0;
                      break e;
                  case 4:
                      _n = a.stateNode.containerInfo,
                      Gr = !0;
                      break e
                  }
                  a = a.return
              }
              if (_n === null)
                  throw Error(X(160));
              db(o, s, i),
              _n = null,
              Gr = !1;
              var l = i.alternate;
              l !== null && (l.return = null),
              i.return = null
          } catch (u) {
              Mt(i, t, u)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
          pb(t, e),
          t = t.sibling
}
function pb(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (Hr(t, e),
      si(e),
      r & 4) {
          try {
              Il(3, e, e.return),
              id(3, e)
          } catch (m) {
              Mt(e, e.return, m)
          }
          try {
              Il(5, e, e.return)
          } catch (m) {
              Mt(e, e.return, m)
          }
      }
      break;
  case 1:
      Hr(t, e),
      si(e),
      r & 512 && n !== null && na(n, n.return);
      break;
  case 5:
      if (Hr(t, e),
      si(e),
      r & 512 && n !== null && na(n, n.return),
      e.flags & 32) {
          var i = e.stateNode;
          try {
              Ql(i, "")
          } catch (m) {
              Mt(e, e.return, m)
          }
      }
      if (r & 4 && (i = e.stateNode,
      i != null)) {
          var o = e.memoizedProps
            , s = n !== null ? n.memoizedProps : o
            , a = e.type
            , l = e.updateQueue;
          if (e.updateQueue = null,
          l !== null)
              try {
                  a === "input" && o.type === "radio" && o.name != null && M_(i, o),
                  ch(a, s);
                  var u = ch(a, o);
                  for (s = 0; s < l.length; s += 2) {
                      var f = l[s]
                        , d = l[s + 1];
                      f === "style" ? z_(i, d) : f === "dangerouslySetInnerHTML" ? F_(i, d) : f === "children" ? Ql(i, d) : Ym(i, f, d, u)
                  }
                  switch (a) {
                  case "input":
                      oh(i, o);
                      break;
                  case "textarea":
                      I_(i, o);
                      break;
                  case "select":
                      var h = i._wrapperState.wasMultiple;
                      i._wrapperState.wasMultiple = !!o.multiple;
                      var g = o.value;
                      g != null ? fa(i, !!o.multiple, g, !1) : h !== !!o.multiple && (o.defaultValue != null ? fa(i, !!o.multiple, o.defaultValue, !0) : fa(i, !!o.multiple, o.multiple ? [] : "", !1))
                  }
                  i[su] = o
              } catch (m) {
                  Mt(e, e.return, m)
              }
      }
      break;
  case 6:
      if (Hr(t, e),
      si(e),
      r & 4) {
          if (e.stateNode === null)
              throw Error(X(162));
          i = e.stateNode,
          o = e.memoizedProps;
          try {
              i.nodeValue = o
          } catch (m) {
              Mt(e, e.return, m)
          }
      }
      break;
  case 3:
      if (Hr(t, e),
      si(e),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              tu(t.containerInfo)
          } catch (m) {
              Mt(e, e.return, m)
          }
      break;
  case 4:
      Hr(t, e),
      si(e);
      break;
  case 13:
      Hr(t, e),
      si(e),
      i = e.child,
      i.flags & 8192 && (o = i.memoizedState !== null,
      i.stateNode.isHidden = o,
      !o || i.alternate !== null && i.alternate.memoizedState !== null || (Cg = Wt())),
      r & 4 && m0(e);
      break;
  case 22:
      if (f = n !== null && n.memoizedState !== null,
      e.mode & 1 ? (On = (u = On) || f,
      Hr(t, e),
      On = u) : Hr(t, e),
      si(e),
      r & 8192) {
          if (u = e.memoizedState !== null,
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
              for (de = e,
              f = e.child; f !== null; ) {
                  for (d = de = f; de !== null; ) {
                      switch (h = de,
                      g = h.child,
                      h.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Il(4, h, h.return);
                          break;
                      case 1:
                          na(h, h.return);
                          var _ = h.stateNode;
                          if (typeof _.componentWillUnmount == "function") {
                              r = h,
                              n = h.return;
                              try {
                                  t = r,
                                  _.props = t.memoizedProps,
                                  _.state = t.memoizedState,
                                  _.componentWillUnmount()
                              } catch (m) {
                                  Mt(r, n, m)
                              }
                          }
                          break;
                      case 5:
                          na(h, h.return);
                          break;
                      case 22:
                          if (h.memoizedState !== null) {
                              v0(d);
                              continue
                          }
                      }
                      g !== null ? (g.return = h,
                      de = g) : v0(d)
                  }
                  f = f.sibling
              }
          e: for (f = null,
          d = e; ; ) {
              if (d.tag === 5) {
                  if (f === null) {
                      f = d;
                      try {
                          i = d.stateNode,
                          u ? (o = i.style,
                          typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode,
                          l = d.memoizedProps.style,
                          s = l != null && l.hasOwnProperty("display") ? l.display : null,
                          a.style.display = j_("display", s))
                      } catch (m) {
                          Mt(e, e.return, m)
                      }
                  }
              } else if (d.tag === 6) {
                  if (f === null)
                      try {
                          d.stateNode.nodeValue = u ? "" : d.memoizedProps
                      } catch (m) {
                          Mt(e, e.return, m)
                      }
              } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                  d.child.return = d,
                  d = d.child;
                  continue
              }
              if (d === e)
                  break e;
              for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                      break e;
                  f === d && (f = null),
                  d = d.return
              }
              f === d && (f = null),
              d.sibling.return = d.return,
              d = d.sibling
          }
      }
      break;
  case 19:
      Hr(t, e),
      si(e),
      r & 4 && m0(e);
      break;
  case 21:
      break;
  default:
      Hr(t, e),
      si(e)
  }
}
function si(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if (fb(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(X(160))
          }
          switch (r.tag) {
          case 5:
              var i = r.stateNode;
              r.flags & 32 && (Ql(i, ""),
              r.flags &= -33);
              var o = h0(e);
              $h(e, o, i);
              break;
          case 3:
          case 4:
              var s = r.stateNode.containerInfo
                , a = h0(e);
              zh(e, a, s);
              break;
          default:
              throw Error(X(161))
          }
      } catch (l) {
          Mt(e, e.return, l)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Kk(e, t, n) {
  de = e,
  hb(e)
}
function hb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; de !== null; ) {
      var i = de
        , o = i.child;
      if (i.tag === 22 && r) {
          var s = i.memoizedState !== null || sc;
          if (!s) {
              var a = i.alternate
                , l = a !== null && a.memoizedState !== null || On;
              a = sc;
              var u = On;
              if (sc = s,
              (On = l) && !u)
                  for (de = i; de !== null; )
                      s = de,
                      l = s.child,
                      s.tag === 22 && s.memoizedState !== null ? y0(i) : l !== null ? (l.return = s,
                      de = l) : y0(i);
              for (; o !== null; )
                  de = o,
                  hb(o),
                  o = o.sibling;
              de = i,
              sc = a,
              On = u
          }
          g0(e)
      } else
          i.subtreeFlags & 8772 && o !== null ? (o.return = i,
          de = o) : g0(e)
  }
}
function g0(e) {
  for (; de !== null; ) {
      var t = de;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      On || id(5, t);
                      break;
                  case 1:
                      var r = t.stateNode;
                      if (t.flags & 4 && !On)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var i = t.elementType === t.type ? n.memoizedProps : Yr(t.type, n.memoizedProps);
                              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var o = t.updateQueue;
                      o !== null && Zy(t, o, r);
                      break;
                  case 3:
                      var s = t.updateQueue;
                      if (s !== null) {
                          if (n = null,
                          t.child !== null)
                              switch (t.child.tag) {
                              case 5:
                                  n = t.child.stateNode;
                                  break;
                              case 1:
                                  n = t.child.stateNode
                              }
                          Zy(t, s, n)
                      }
                      break;
                  case 5:
                      var a = t.stateNode;
                      if (n === null && t.flags & 4) {
                          n = a;
                          var l = t.memoizedProps;
                          switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              l.autoFocus && n.focus();
                              break;
                          case "img":
                              l.src && (n.src = l.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (t.memoizedState === null) {
                          var u = t.alternate;
                          if (u !== null) {
                              var f = u.memoizedState;
                              if (f !== null) {
                                  var d = f.dehydrated;
                                  d !== null && tu(d)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(X(163))
                  }
              On || t.flags & 512 && jh(t)
          } catch (h) {
              Mt(t, t.return, h)
          }
      }
      if (t === e) {
          de = null;
          break
      }
      if (n = t.sibling,
      n !== null) {
          n.return = t.return,
          de = n;
          break
      }
      de = t.return
  }
}
function v0(e) {
  for (; de !== null; ) {
      var t = de;
      if (t === e) {
          de = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return,
          de = n;
          break
      }
      de = t.return
  }
}
function y0(e) {
  for (; de !== null; ) {
      var t = de;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  id(4, t)
              } catch (l) {
                  Mt(t, n, l)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var i = t.return;
                  try {
                      r.componentDidMount()
                  } catch (l) {
                      Mt(t, i, l)
                  }
              }
              var o = t.return;
              try {
                  jh(t)
              } catch (l) {
                  Mt(t, o, l)
              }
              break;
          case 5:
              var s = t.return;
              try {
                  jh(t)
              } catch (l) {
                  Mt(t, s, l)
              }
          }
      } catch (l) {
          Mt(t, t.return, l)
      }
      if (t === e) {
          de = null;
          break
      }
      var a = t.sibling;
      if (a !== null) {
          a.return = t.return,
          de = a;
          break
      }
      de = t.return
  }
}
var Qk = Math.ceil
, Ef = qi.ReactCurrentDispatcher
, Eg = qi.ReactCurrentOwner
, jr = qi.ReactCurrentBatchConfig
, et = 0
, pn = null
, Qt = null
, Sn = 0
, dr = 0
, ra = Io(0)
, rn = 0
, du = null
, gs = 0
, od = 0
, Tg = 0
, Nl = null
, Qn = null
, Cg = 0
, Da = 1 / 0
, ki = null
, Tf = !1
, Bh = null
, bo = null
, ac = !1
, lo = null
, Cf = 0
, Fl = 0
, Uh = null
, jc = -1
, zc = 0;
function Hn() {
  return et & 6 ? Wt() : jc !== -1 ? jc : jc = Wt()
}
function xo(e) {
  return e.mode & 1 ? et & 2 && Sn !== 0 ? Sn & -Sn : Mk.transition !== null ? (zc === 0 && (zc = Q_()),
  zc) : (e = st,
  e !== 0 || (e = window.event,
  e = e === void 0 ? 16 : i1(e.type)),
  e) : 1
}
function ti(e, t, n, r) {
  if (50 < Fl)
      throw Fl = 0,
      Uh = null,
      Error(X(185));
  ku(e, n, r),
  (!(et & 2) || e !== pn) && (e === pn && (!(et & 2) && (od |= n),
  rn === 4 && so(e, Sn)),
  rr(e, r),
  n === 1 && et === 0 && !(t.mode & 1) && (Da = Wt() + 500,
  td && No()))
}
function rr(e, t) {
  var n = e.callbackNode;
  MC(e, t);
  var r = uf(e, e === pn ? Sn : 0);
  if (r === 0)
      n !== null && ky(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
  e.callbackPriority !== t) {
      if (n != null && ky(n),
      t === 1)
          e.tag === 0 ? Lk(w0.bind(null, e)) : S1(w0.bind(null, e)),
          Ok(function() {
              !(et & 6) && No()
          }),
          n = null;
      else {
          switch (J_(r)) {
          case 1:
              n = Jm;
              break;
          case 4:
              n = X_;
              break;
          case 16:
              n = lf;
              break;
          case 536870912:
              n = K_;
              break;
          default:
              n = lf
          }
          n = xb(n, mb.bind(null, e))
      }
      e.callbackPriority = t,
      e.callbackNode = n
  }
}
function mb(e, t) {
  if (jc = -1,
  zc = 0,
  et & 6)
      throw Error(X(327));
  var n = e.callbackNode;
  if (ga() && e.callbackNode !== n)
      return null;
  var r = uf(e, e === pn ? Sn : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & e.expiredLanes || t)
      t = kf(e, r);
  else {
      t = r;
      var i = et;
      et |= 2;
      var o = vb();
      (pn !== e || Sn !== t) && (ki = null,
      Da = Wt() + 500,
      rs(e, t));
      do
          try {
              eP();
              break
          } catch (a) {
              gb(e, a)
          }
      while (1);
      fg(),
      Ef.current = o,
      et = i,
      Qt !== null ? t = 0 : (pn = null,
      Sn = 0,
      t = rn)
  }
  if (t !== 0) {
      if (t === 2 && (i = mh(e),
      i !== 0 && (r = i,
      t = Vh(e, i))),
      t === 1)
          throw n = du,
          rs(e, 0),
          so(e, r),
          rr(e, Wt()),
          n;
      if (t === 6)
          so(e, r);
      else {
          if (i = e.current.alternate,
          !(r & 30) && !Jk(i) && (t = kf(e, r),
          t === 2 && (o = mh(e),
          o !== 0 && (r = o,
          t = Vh(e, o))),
          t === 1))
              throw n = du,
              rs(e, 0),
              so(e, r),
              rr(e, Wt()),
              n;
          switch (e.finishedWork = i,
          e.finishedLanes = r,
          t) {
          case 0:
          case 1:
              throw Error(X(345));
          case 2:
              Ho(e, Qn, ki);
              break;
          case 3:
              if (so(e, r),
              (r & 130023424) === r && (t = Cg + 500 - Wt(),
              10 < t)) {
                  if (uf(e, 0) !== 0)
                      break;
                  if (i = e.suspendedLanes,
                  (i & r) !== r) {
                      Hn(),
                      e.pingedLanes |= e.suspendedLanes & i;
                      break
                  }
                  e.timeoutHandle = Sh(Ho.bind(null, e, Qn, ki), t);
                  break
              }
              Ho(e, Qn, ki);
              break;
          case 4:
              if (so(e, r),
              (r & 4194240) === r)
                  break;
              for (t = e.eventTimes,
              i = -1; 0 < r; ) {
                  var s = 31 - ei(r);
                  o = 1 << s,
                  s = t[s],
                  s > i && (i = s),
                  r &= ~o
              }
              if (r = i,
              r = Wt() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qk(r / 1960)) - r,
              10 < r) {
                  e.timeoutHandle = Sh(Ho.bind(null, e, Qn, ki), r);
                  break
              }
              Ho(e, Qn, ki);
              break;
          case 5:
              Ho(e, Qn, ki);
              break;
          default:
              throw Error(X(329))
          }
      }
  }
  return rr(e, Wt()),
  e.callbackNode === n ? mb.bind(null, e) : null
}
function Vh(e, t) {
  var n = Nl;
  return e.current.memoizedState.isDehydrated && (rs(e, t).flags |= 256),
  e = kf(e, t),
  e !== 2 && (t = Qn,
  Qn = n,
  t !== null && Hh(t)),
  e
}
function Hh(e) {
  Qn === null ? Qn = e : Qn.push.apply(Qn, e)
}
function Jk(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var i = n[r]
                    , o = i.getSnapshot;
                  i = i.value;
                  try {
                      if (!ri(o(), i))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
          n.return = t,
          t = n;
      else {
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return !0;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
  }
  return !0
}
function so(e, t) {
  for (t &= ~Tg,
  t &= ~od,
  e.suspendedLanes |= t,
  e.pingedLanes &= ~t,
  e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ei(t)
        , r = 1 << n;
      e[n] = -1,
      t &= ~r
  }
}
function w0(e) {
  if (et & 6)
      throw Error(X(327));
  ga();
  var t = uf(e, 0);
  if (!(t & 1))
      return rr(e, Wt()),
      null;
  var n = kf(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = mh(e);
      r !== 0 && (t = r,
      n = Vh(e, r))
  }
  if (n === 1)
      throw n = du,
      rs(e, 0),
      so(e, t),
      rr(e, Wt()),
      n;
  if (n === 6)
      throw Error(X(345));
  return e.finishedWork = e.current.alternate,
  e.finishedLanes = t,
  Ho(e, Qn, ki),
  rr(e, Wt()),
  null
}
function kg(e, t) {
  var n = et;
  et |= 1;
  try {
      return e(t)
  } finally {
      et = n,
      et === 0 && (Da = Wt() + 500,
      td && No())
  }
}
function vs(e) {
  lo !== null && lo.tag === 0 && !(et & 6) && ga();
  var t = et;
  et |= 1;
  var n = jr.transition
    , r = st;
  try {
      if (jr.transition = null,
      st = 1,
      e)
          return e()
  } finally {
      st = r,
      jr.transition = n,
      et = t,
      !(et & 6) && No()
  }
}
function Pg() {
  dr = ra.current,
  bt(ra)
}
function rs(e, t) {
  e.finishedWork = null,
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
  Pk(n)),
  Qt !== null)
      for (n = Qt.return; n !== null; ) {
          var r = n;
          switch (lg(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && hf();
              break;
          case 3:
              Aa(),
              bt(tr),
              bt(Ln),
              vg();
              break;
          case 5:
              gg(r);
              break;
          case 4:
              Aa();
              break;
          case 13:
              bt(kt);
              break;
          case 19:
              bt(kt);
              break;
          case 10:
              dg(r.type._context);
              break;
          case 22:
          case 23:
              Pg()
          }
          n = n.return
      }
  if (pn = e,
  Qt = e = So(e.current, null),
  Sn = dr = t,
  rn = 0,
  du = null,
  Tg = od = gs = 0,
  Qn = Nl = null,
  Xo !== null) {
      for (t = 0; t < Xo.length; t++)
          if (n = Xo[t],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var i = r.next
                , o = n.pending;
              if (o !== null) {
                  var s = o.next;
                  o.next = i,
                  r.next = s
              }
              n.pending = r
          }
      Xo = null
  }
  return e
}
function gb(e, t) {
  do {
      var n = Qt;
      try {
          if (fg(),
          Ic.current = Sf,
          xf) {
              for (var r = At.memoizedState; r !== null; ) {
                  var i = r.queue;
                  i !== null && (i.pending = null),
                  r = r.next
              }
              xf = !1
          }
          if (ms = 0,
          dn = tn = At = null,
          Ml = !1,
          uu = 0,
          Eg.current = null,
          n === null || n.return === null) {
              rn = 1,
              du = t,
              Qt = null;
              break
          }
          e: {
              var o = e
                , s = n.return
                , a = n
                , l = t;
              if (t = Sn,
              a.flags |= 32768,
              l !== null && typeof l == "object" && typeof l.then == "function") {
                  var u = l
                    , f = a
                    , d = f.tag;
                  if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                      var h = f.alternate;
                      h ? (f.updateQueue = h.updateQueue,
                      f.memoizedState = h.memoizedState,
                      f.lanes = h.lanes) : (f.updateQueue = null,
                      f.memoizedState = null)
                  }
                  var g = s0(s);
                  if (g !== null) {
                      g.flags &= -257,
                      a0(g, s, a, o, t),
                      g.mode & 1 && o0(o, u, t),
                      t = g,
                      l = u;
                      var _ = t.updateQueue;
                      if (_ === null) {
                          var m = new Set;
                          m.add(l),
                          t.updateQueue = m
                      } else
                          _.add(l);
                      break e
                  } else {
                      if (!(t & 1)) {
                          o0(o, u, t),
                          Og();
                          break e
                      }
                      l = Error(X(426))
                  }
              } else if (Et && a.mode & 1) {
                  var T = s0(s);
                  if (T !== null) {
                      !(T.flags & 65536) && (T.flags |= 256),
                      a0(T, s, a, o, t),
                      ug(Ra(l, a));
                      break e
                  }
              }
              o = l = Ra(l, a),
              rn !== 4 && (rn = 2),
              Nl === null ? Nl = [o] : Nl.push(o),
              o = s;
              do {
                  switch (o.tag) {
                  case 3:
                      o.flags |= 65536,
                      t &= -t,
                      o.lanes |= t;
                      var x = Z1(o, l, t);
                      Jy(o, x);
                      break e;
                  case 1:
                      a = l;
                      var w = o.type
                        , S = o.stateNode;
                      if (!(o.flags & 128) && (typeof w.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (bo === null || !bo.has(S)))) {
                          o.flags |= 65536,
                          t &= -t,
                          o.lanes |= t;
                          var b = eb(o, a, t);
                          Jy(o, b);
                          break e
                      }
                  }
                  o = o.return
              } while (o !== null)
          }
          wb(n)
      } catch (k) {
          t = k,
          Qt === n && n !== null && (Qt = n = n.return);
          continue
      }
      break
  } while (1)
}
function vb() {
  var e = Ef.current;
  return Ef.current = Sf,
  e === null ? Sf : e
}
function Og() {
  (rn === 0 || rn === 3 || rn === 2) && (rn = 4),
  pn === null || !(gs & 268435455) && !(od & 268435455) || so(pn, Sn)
}
function kf(e, t) {
  var n = et;
  et |= 2;
  var r = vb();
  (pn !== e || Sn !== t) && (ki = null,
  rs(e, t));
  do
      try {
          Zk();
          break
      } catch (i) {
          gb(e, i)
      }
  while (1);
  if (fg(),
  et = n,
  Ef.current = r,
  Qt !== null)
      throw Error(X(261));
  return pn = null,
  Sn = 0,
  rn
}
function Zk() {
  for (; Qt !== null; )
      yb(Qt)
}
function eP() {
  for (; Qt !== null && !TC(); )
      yb(Qt)
}
function yb(e) {
  var t = bb(e.alternate, e, dr);
  e.memoizedProps = e.pendingProps,
  t === null ? wb(e) : Qt = t,
  Eg.current = null
}
function wb(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return,
      t.flags & 32768) {
          if (n = Yk(n, t),
          n !== null) {
              n.flags &= 32767,
              Qt = n;
              return
          }
          if (e !== null)
              e.flags |= 32768,
              e.subtreeFlags = 0,
              e.deletions = null;
          else {
              rn = 6,
              Qt = null;
              return
          }
      } else if (n = qk(n, t, dr),
      n !== null) {
          Qt = n;
          return
      }
      if (t = t.sibling,
      t !== null) {
          Qt = t;
          return
      }
      Qt = t = e
  } while (t !== null);
  rn === 0 && (rn = 5)
}
function Ho(e, t, n) {
  var r = st
    , i = jr.transition;
  try {
      jr.transition = null,
      st = 1,
      tP(e, t, n, r)
  } finally {
      jr.transition = i,
      st = r
  }
  return null
}
function tP(e, t, n, r) {
  do
      ga();
  while (lo !== null);
  if (et & 6)
      throw Error(X(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
      return null;
  if (e.finishedWork = null,
  e.finishedLanes = 0,
  n === e.current)
      throw Error(X(177));
  e.callbackNode = null,
  e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (IC(e, o),
  e === pn && (Qt = pn = null,
  Sn = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ac || (ac = !0,
  xb(lf, function() {
      return ga(),
      null
  })),
  o = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || o) {
      o = jr.transition,
      jr.transition = null;
      var s = st;
      st = 1;
      var a = et;
      et |= 4,
      Eg.current = null,
      Xk(e, n),
      pb(n, e),
      bk(bh),
      cf = !!_h,
      bh = _h = null,
      e.current = n,
      Kk(n),
      CC(),
      et = a,
      st = s,
      jr.transition = o
  } else
      e.current = n;
  if (ac && (ac = !1,
  lo = e,
  Cf = i),
  o = e.pendingLanes,
  o === 0 && (bo = null),
  OC(n.stateNode),
  rr(e, Wt()),
  t !== null)
      for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
          i = t[n],
          r(i.value, {
              componentStack: i.stack,
              digest: i.digest
          });
  if (Tf)
      throw Tf = !1,
      e = Bh,
      Bh = null,
      e;
  return Cf & 1 && e.tag !== 0 && ga(),
  o = e.pendingLanes,
  o & 1 ? e === Uh ? Fl++ : (Fl = 0,
  Uh = e) : Fl = 0,
  No(),
  null
}
function ga() {
  if (lo !== null) {
      var e = J_(Cf)
        , t = jr.transition
        , n = st;
      try {
          if (jr.transition = null,
          st = 16 > e ? 16 : e,
          lo === null)
              var r = !1;
          else {
              if (e = lo,
              lo = null,
              Cf = 0,
              et & 6)
                  throw Error(X(331));
              var i = et;
              for (et |= 4,
              de = e.current; de !== null; ) {
                  var o = de
                    , s = o.child;
                  if (de.flags & 16) {
                      var a = o.deletions;
                      if (a !== null) {
                          for (var l = 0; l < a.length; l++) {
                              var u = a[l];
                              for (de = u; de !== null; ) {
                                  var f = de;
                                  switch (f.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Il(8, f, o)
                                  }
                                  var d = f.child;
                                  if (d !== null)
                                      d.return = f,
                                      de = d;
                                  else
                                      for (; de !== null; ) {
                                          f = de;
                                          var h = f.sibling
                                            , g = f.return;
                                          if (cb(f),
                                          f === u) {
                                              de = null;
                                              break
                                          }
                                          if (h !== null) {
                                              h.return = g,
                                              de = h;
                                              break
                                          }
                                          de = g
                                      }
                              }
                          }
                          var _ = o.alternate;
                          if (_ !== null) {
                              var m = _.child;
                              if (m !== null) {
                                  _.child = null;
                                  do {
                                      var T = m.sibling;
                                      m.sibling = null,
                                      m = T
                                  } while (m !== null)
                              }
                          }
                          de = o
                      }
                  }
                  if (o.subtreeFlags & 2064 && s !== null)
                      s.return = o,
                      de = s;
                  else
                      e: for (; de !== null; ) {
                          if (o = de,
                          o.flags & 2048)
                              switch (o.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  Il(9, o, o.return)
                              }
                          var x = o.sibling;
                          if (x !== null) {
                              x.return = o.return,
                              de = x;
                              break e
                          }
                          de = o.return
                      }
              }
              var w = e.current;
              for (de = w; de !== null; ) {
                  s = de;
                  var S = s.child;
                  if (s.subtreeFlags & 2064 && S !== null)
                      S.return = s,
                      de = S;
                  else
                      e: for (s = w; de !== null; ) {
                          if (a = de,
                          a.flags & 2048)
                              try {
                                  switch (a.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      id(9, a)
                                  }
                              } catch (k) {
                                  Mt(a, a.return, k)
                              }
                          if (a === s) {
                              de = null;
                              break e
                          }
                          var b = a.sibling;
                          if (b !== null) {
                              b.return = a.return,
                              de = b;
                              break e
                          }
                          de = a.return
                      }
              }
              if (et = i,
              No(),
              mi && typeof mi.onPostCommitFiberRoot == "function")
                  try {
                      mi.onPostCommitFiberRoot(Kf, e)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          st = n,
          jr.transition = t
      }
  }
  return !1
}
function _0(e, t, n) {
  t = Ra(n, t),
  t = Z1(e, t, 1),
  e = _o(e, t, 1),
  t = Hn(),
  e !== null && (ku(e, 1, t),
  rr(e, t))
}
function Mt(e, t, n) {
  if (e.tag === 3)
      _0(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              _0(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bo === null || !bo.has(r))) {
                  e = Ra(n, e),
                  e = eb(t, e, 1),
                  t = _o(t, e, 1),
                  e = Hn(),
                  t !== null && (ku(t, 1, e),
                  rr(t, e));
                  break
              }
          }
          t = t.return
      }
}
function nP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
  t = Hn(),
  e.pingedLanes |= e.suspendedLanes & n,
  pn === e && (Sn & n) === n && (rn === 4 || rn === 3 && (Sn & 130023424) === Sn && 500 > Wt() - Cg ? rs(e, 0) : Tg |= n),
  rr(e, t)
}
function _b(e, t) {
  t === 0 && (e.mode & 1 ? (t = Qu,
  Qu <<= 1,
  !(Qu & 130023424) && (Qu = 4194304)) : t = 1);
  var n = Hn();
  e = Ui(e, t),
  e !== null && (ku(e, t, n),
  rr(e, n))
}
function rP(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
  _b(e, n)
}
function iP(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode
        , i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(X(314))
  }
  r !== null && r.delete(t),
  _b(e, n)
}
var bb;
bb = function(e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || tr.current)
          er = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128))
              return er = !1,
              Wk(e, t, n);
          er = !!(e.flags & 131072)
      }
  else
      er = !1,
      Et && t.flags & 1048576 && E1(t, vf, t.index);
  switch (t.lanes = 0,
  t.tag) {
  case 2:
      var r = t.type;
      Fc(e, t),
      e = t.pendingProps;
      var i = ka(t, Ln.current);
      ma(t, n),
      i = wg(null, t, r, e, i, n);
      var o = _g();
      return t.flags |= 1,
      typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
      t.memoizedState = null,
      t.updateQueue = null,
      nr(r) ? (o = !0,
      mf(t)) : o = !1,
      t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
      hg(t),
      i.updater = nd,
      t.stateNode = i,
      i._reactInternals = t,
      Ah(t, r, e, n),
      t = Lh(null, t, r, !0, o, n)) : (t.tag = 0,
      Et && o && ag(t),
      Fn(null, t, i, n),
      t = t.child),
      t;
  case 16:
      r = t.elementType;
      e: {
          switch (Fc(e, t),
          e = t.pendingProps,
          i = r._init,
          r = i(r._payload),
          t.type = r,
          i = t.tag = sP(r),
          e = Yr(r, e),
          i) {
          case 0:
              t = Dh(null, t, r, e, n);
              break e;
          case 1:
              t = c0(null, t, r, e, n);
              break e;
          case 11:
              t = l0(null, t, r, e, n);
              break e;
          case 14:
              t = u0(null, t, r, Yr(r.type, e), n);
              break e
          }
          throw Error(X(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type,
      i = t.pendingProps,
      i = t.elementType === r ? i : Yr(r, i),
      Dh(e, t, r, i, n);
  case 1:
      return r = t.type,
      i = t.pendingProps,
      i = t.elementType === r ? i : Yr(r, i),
      c0(e, t, r, i, n);
  case 3:
      e: {
          if (ib(t),
          e === null)
              throw Error(X(387));
          r = t.pendingProps,
          o = t.memoizedState,
          i = o.element,
          P1(e, t),
          _f(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element,
          o.isDehydrated)
              if (o = {
                  element: r,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions
              },
              t.updateQueue.baseState = o,
              t.memoizedState = o,
              t.flags & 256) {
                  i = Ra(Error(X(423)), t),
                  t = f0(e, t, r, n, i);
                  break e
              } else if (r !== i) {
                  i = Ra(Error(X(424)), t),
                  t = f0(e, t, r, n, i);
                  break e
              } else
                  for (vr = wo(t.stateNode.containerInfo.firstChild),
                  yr = t,
                  Et = !0,
                  Kr = null,
                  n = D1(t, null, r, n),
                  t.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (Pa(),
              r === i) {
                  t = Vi(e, t, n);
                  break e
              }
              Fn(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return L1(t),
      e === null && kh(t),
      r = t.type,
      i = t.pendingProps,
      o = e !== null ? e.memoizedProps : null,
      s = i.children,
      xh(r, i) ? s = null : o !== null && xh(r, o) && (t.flags |= 32),
      rb(e, t),
      Fn(e, t, s, n),
      t.child;
  case 6:
      return e === null && kh(t),
      null;
  case 13:
      return ob(e, t, n);
  case 4:
      return mg(t, t.stateNode.containerInfo),
      r = t.pendingProps,
      e === null ? t.child = Oa(t, null, r, n) : Fn(e, t, r, n),
      t.child;
  case 11:
      return r = t.type,
      i = t.pendingProps,
      i = t.elementType === r ? i : Yr(r, i),
      l0(e, t, r, i, n);
  case 7:
      return Fn(e, t, t.pendingProps, n),
      t.child;
  case 8:
      return Fn(e, t, t.pendingProps.children, n),
      t.child;
  case 12:
      return Fn(e, t, t.pendingProps.children, n),
      t.child;
  case 10:
      e: {
          if (r = t.type._context,
          i = t.pendingProps,
          o = t.memoizedProps,
          s = i.value,
          gt(yf, r._currentValue),
          r._currentValue = s,
          o !== null)
              if (ri(o.value, s)) {
                  if (o.children === i.children && !tr.current) {
                      t = Vi(e, t, n);
                      break e
                  }
              } else
                  for (o = t.child,
                  o !== null && (o.return = t); o !== null; ) {
                      var a = o.dependencies;
                      if (a !== null) {
                          s = o.child;
                          for (var l = a.firstContext; l !== null; ) {
                              if (l.context === r) {
                                  if (o.tag === 1) {
                                      l = Ni(-1, n & -n),
                                      l.tag = 2;
                                      var u = o.updateQueue;
                                      if (u !== null) {
                                          u = u.shared;
                                          var f = u.pending;
                                          f === null ? l.next = l : (l.next = f.next,
                                          f.next = l),
                                          u.pending = l
                                      }
                                  }
                                  o.lanes |= n,
                                  l = o.alternate,
                                  l !== null && (l.lanes |= n),
                                  Ph(o.return, n, t),
                                  a.lanes |= n;
                                  break
                              }
                              l = l.next
                          }
                      } else if (o.tag === 10)
                          s = o.type === t.type ? null : o.child;
                      else if (o.tag === 18) {
                          if (s = o.return,
                          s === null)
                              throw Error(X(341));
                          s.lanes |= n,
                          a = s.alternate,
                          a !== null && (a.lanes |= n),
                          Ph(s, n, t),
                          s = o.sibling
                      } else
                          s = o.child;
                      if (s !== null)
                          s.return = o;
                      else
                          for (s = o; s !== null; ) {
                              if (s === t) {
                                  s = null;
                                  break
                              }
                              if (o = s.sibling,
                              o !== null) {
                                  o.return = s.return,
                                  s = o;
                                  break
                              }
                              s = s.return
                          }
                      o = s
                  }
          Fn(e, t, i.children, n),
          t = t.child
      }
      return t;
  case 9:
      return i = t.type,
      r = t.pendingProps.children,
      ma(t, n),
      i = Br(i),
      r = r(i),
      t.flags |= 1,
      Fn(e, t, r, n),
      t.child;
  case 14:
      return r = t.type,
      i = Yr(r, t.pendingProps),
      i = Yr(r.type, i),
      u0(e, t, r, i, n);
  case 15:
      return tb(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type,
      i = t.pendingProps,
      i = t.elementType === r ? i : Yr(r, i),
      Fc(e, t),
      t.tag = 1,
      nr(r) ? (e = !0,
      mf(t)) : e = !1,
      ma(t, n),
      A1(t, r, i),
      Ah(t, r, i, n),
      Lh(null, t, r, !0, e, n);
  case 19:
      return sb(e, t, n);
  case 22:
      return nb(e, t, n)
  }
  throw Error(X(156, t.tag))
}
;
function xb(e, t) {
  return G_(e, t)
}
function oP(e, t, n, r) {
  this.tag = e,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function Mr(e, t, n, r) {
  return new oP(e,t,n,r)
}
function Ag(e) {
  return e = e.prototype,
  !(!e || !e.isReactComponent)
}
function sP(e) {
  if (typeof e == "function")
      return Ag(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof,
      e === Xm)
          return 11;
      if (e === Km)
          return 14
  }
  return 2
}
function So(e, t) {
  var n = e.alternate;
  return n === null ? (n = Mr(e.tag, t, e.key, e.mode),
  n.elementType = e.elementType,
  n.type = e.type,
  n.stateNode = e.stateNode,
  n.alternate = e,
  e.alternate = n) : (n.pendingProps = t,
  n.type = e.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = e.flags & 14680064,
  n.childLanes = e.childLanes,
  n.lanes = e.lanes,
  n.child = e.child,
  n.memoizedProps = e.memoizedProps,
  n.memoizedState = e.memoizedState,
  n.updateQueue = e.updateQueue,
  t = e.dependencies,
  n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  },
  n.sibling = e.sibling,
  n.index = e.index,
  n.ref = e.ref,
  n
}
function $c(e, t, n, r, i, o) {
  var s = 2;
  if (r = e,
  typeof e == "function")
      Ag(e) && (s = 1);
  else if (typeof e == "string")
      s = 5;
  else
      e: switch (e) {
      case Ys:
          return is(n.children, i, o, t);
      case Gm:
          s = 8,
          i |= 8;
          break;
      case eh:
          return e = Mr(12, n, t, i | 2),
          e.elementType = eh,
          e.lanes = o,
          e;
      case th:
          return e = Mr(13, n, t, i),
          e.elementType = th,
          e.lanes = o,
          e;
      case nh:
          return e = Mr(19, n, t, i),
          e.elementType = nh,
          e.lanes = o,
          e;
      case R_:
          return sd(n, i, o, t);
      default:
          if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
              case O_:
                  s = 10;
                  break e;
              case A_:
                  s = 9;
                  break e;
              case Xm:
                  s = 11;
                  break e;
              case Km:
                  s = 14;
                  break e;
              case ro:
                  s = 16,
                  r = null;
                  break e
              }
          throw Error(X(130, e == null ? e : typeof e, ""))
      }
  return t = Mr(s, n, t, i),
  t.elementType = e,
  t.type = r,
  t.lanes = o,
  t
}
function is(e, t, n, r) {
  return e = Mr(7, e, r, t),
  e.lanes = n,
  e
}
function sd(e, t, n, r) {
  return e = Mr(22, e, r, t),
  e.elementType = R_,
  e.lanes = n,
  e.stateNode = {
      isHidden: !1
  },
  e
}
function pp(e, t, n) {
  return e = Mr(6, e, null, t),
  e.lanes = n,
  e
}
function hp(e, t, n) {
  return t = Mr(4, e.children !== null ? e.children : [], e.key, t),
  t.lanes = n,
  t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  },
  t
}
function aP(e, t, n, r, i) {
  this.tag = t,
  this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = Gd(0),
  this.expirationTimes = Gd(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = Gd(0),
  this.identifierPrefix = r,
  this.onRecoverableError = i,
  this.mutableSourceEagerHydrationData = null
}
function Rg(e, t, n, r, i, o, s, a, l) {
  return e = new aP(e,t,n,a,l),
  t === 1 ? (t = 1,
  o === !0 && (t |= 8)) : t = 0,
  o = Mr(3, null, null, t),
  e.current = o,
  o.stateNode = e,
  o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  hg(o),
  e
}
function lP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: qs,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}
function Sb(e) {
  if (!e)
      return Oo;
  e = e._reactInternals;
  e: {
      if (Ts(e) !== e || e.tag !== 1)
          throw Error(X(170));
      var t = e;
      do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (nr(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(X(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (nr(n))
          return x1(e, n, t)
  }
  return t
}
function Eb(e, t, n, r, i, o, s, a, l) {
  return e = Rg(n, r, !0, e, i, o, s, a, l),
  e.context = Sb(null),
  n = e.current,
  r = Hn(),
  i = xo(n),
  o = Ni(r, i),
  o.callback = t ?? null,
  _o(n, o, i),
  e.current.lanes = i,
  ku(e, i, r),
  rr(e, r),
  e
}
function ad(e, t, n, r) {
  var i = t.current
    , o = Hn()
    , s = xo(i);
  return n = Sb(n),
  t.context === null ? t.context = n : t.pendingContext = n,
  t = Ni(o, s),
  t.payload = {
      element: e
  },
  r = r === void 0 ? null : r,
  r !== null && (t.callback = r),
  e = _o(i, t, s),
  e !== null && (ti(e, i, s, o),
  Mc(e, i, s)),
  s
}
function Pf(e) {
  if (e = e.current,
  !e.child)
      return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}
function b0(e, t) {
  if (e = e.memoizedState,
  e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Dg(e, t) {
  b0(e, t),
  (e = e.alternate) && b0(e, t)
}
function uP() {
  return null
}
var Tb = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
}
;
function Lg(e) {
  this._internalRoot = e
}
ld.prototype.render = Lg.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
      throw Error(X(409));
  ad(e, t, null, null)
}
;
ld.prototype.unmount = Lg.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      vs(function() {
          ad(null, e, null, null)
      }),
      t[Bi] = null
  }
}
;
function ld(e) {
  this._internalRoot = e
}
ld.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
      var t = t1();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < oo.length && t !== 0 && t < oo[n].priority; n++)
          ;
      oo.splice(n, 0, e),
      n === 0 && r1(e)
  }
}
;
function Mg(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function ud(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function x0() {}
function cP(e, t, n, r, i) {
  if (i) {
      if (typeof r == "function") {
          var o = r;
          r = function() {
              var u = Pf(s);
              o.call(u)
          }
      }
      var s = Eb(t, r, e, 0, null, !1, !1, "", x0);
      return e._reactRootContainer = s,
      e[Bi] = s.current,
      iu(e.nodeType === 8 ? e.parentNode : e),
      vs(),
      s
  }
  for (; i = e.lastChild; )
      e.removeChild(i);
  if (typeof r == "function") {
      var a = r;
      r = function() {
          var u = Pf(l);
          a.call(u)
      }
  }
  var l = Rg(e, 0, !1, null, null, !1, !1, "", x0);
  return e._reactRootContainer = l,
  e[Bi] = l.current,
  iu(e.nodeType === 8 ? e.parentNode : e),
  vs(function() {
      ad(t, l, n, r)
  }),
  l
}
function cd(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
      var s = o;
      if (typeof i == "function") {
          var a = i;
          i = function() {
              var l = Pf(s);
              a.call(l)
          }
      }
      ad(t, s, e, i)
  } else
      s = cP(n, t, e, i, r);
  return Pf(s)
}
Z_ = function(e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = xl(t.pendingLanes);
          n !== 0 && (Zm(t, n | 1),
          rr(t, Wt()),
          !(et & 6) && (Da = Wt() + 500,
          No()))
      }
      break;
  case 13:
      vs(function() {
          var r = Ui(e, 1);
          if (r !== null) {
              var i = Hn();
              ti(r, e, 1, i)
          }
      }),
      Dg(e, 1)
  }
}
;
eg = function(e) {
  if (e.tag === 13) {
      var t = Ui(e, 134217728);
      if (t !== null) {
          var n = Hn();
          ti(t, e, 134217728, n)
      }
      Dg(e, 134217728)
  }
}
;
e1 = function(e) {
  if (e.tag === 13) {
      var t = xo(e)
        , n = Ui(e, t);
      if (n !== null) {
          var r = Hn();
          ti(n, e, t, r)
      }
      Dg(e, t)
  }
}
;
t1 = function() {
  return st
}
;
n1 = function(e, t) {
  var n = st;
  try {
      return st = e,
      t()
  } finally {
      st = n
  }
}
;
dh = function(e, t, n) {
  switch (t) {
  case "input":
      if (oh(e, n),
      t = n.name,
      n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var i = ed(r);
                  if (!i)
                      throw Error(X(90));
                  L_(r),
                  oh(r, i)
              }
          }
      }
      break;
  case "textarea":
      I_(e, n);
      break;
  case "select":
      t = n.value,
      t != null && fa(e, !!n.multiple, t, !1)
  }
}
;
U_ = kg;
V_ = vs;
var fP = {
  usingClientEntryPoint: !1,
  Events: [Ou, Qs, ed, $_, B_, kg]
}
, sl = {
  findFiberByHostInstance: Go,
  bundleType: 0,
  version: "18.2.0",
  rendererPackageName: "react-dom"
}
, dP = {
  bundleType: sl.bundleType,
  version: sl.version,
  rendererPackageName: sl.rendererPackageName,
  rendererConfig: sl.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: qi.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(e) {
      return e = q_(e),
      e === null ? null : e.stateNode
  },
  findFiberByHostInstance: sl.findFiberByHostInstance || uP,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var lc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lc.isDisabled && lc.supportsFiber)
      try {
          Kf = lc.inject(dP),
          mi = lc
      } catch {}
}
xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fP;
xr.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mg(t))
      throw Error(X(200));
  return lP(e, t, null, n)
}
;
xr.createRoot = function(e, t) {
  if (!Mg(e))
      throw Error(X(299));
  var n = !1
    , r = ""
    , i = Tb;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
  t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
  t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
  t = Rg(e, 1, !1, null, null, n, !1, r, i),
  e[Bi] = t.current,
  iu(e.nodeType === 8 ? e.parentNode : e),
  new Lg(t)
}
;
xr.findDOMNode = function(e) {
  if (e == null)
      return null;
  if (e.nodeType === 1)
      return e;
  var t = e._reactInternals;
  if (t === void 0)
      throw typeof e.render == "function" ? Error(X(188)) : (e = Object.keys(e).join(","),
      Error(X(268, e)));
  return e = q_(t),
  e = e === null ? null : e.stateNode,
  e
}
;
xr.flushSync = function(e) {
  return vs(e)
}
;
xr.hydrate = function(e, t, n) {
  if (!ud(t))
      throw Error(X(200));
  return cd(null, e, t, !0, n)
}
;
xr.hydrateRoot = function(e, t, n) {
  if (!Mg(e))
      throw Error(X(405));
  var r = n != null && n.hydratedSources || null
    , i = !1
    , o = ""
    , s = Tb;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0),
  n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
  t = Eb(t, null, e, 1, n ?? null, i, !1, o, s),
  e[Bi] = t.current,
  iu(e),
  r)
      for (e = 0; e < r.length; e++)
          n = r[e],
          i = n._getVersion,
          i = i(n._source),
          t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
  return new ld(t)
}
;
xr.render = function(e, t, n) {
  if (!ud(t))
      throw Error(X(200));
  return cd(null, e, t, !1, n)
}
;
xr.unmountComponentAtNode = function(e) {
  if (!ud(e))
      throw Error(X(40));
  return e._reactRootContainer ? (vs(function() {
      cd(null, null, e, !1, function() {
          e._reactRootContainer = null,
          e[Bi] = null
      })
  }),
  !0) : !1
}
;
xr.unstable_batchedUpdates = kg;
xr.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ud(n))
      throw Error(X(200));
  if (e == null || e._reactInternals === void 0)
      throw Error(X(38));
  return cd(e, t, n, !1, r)
}
;
xr.version = "18.2.0-next-9e3b772b8-20220608";
function Cb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cb)
      } catch (e) {
          console.error(e)
      }
}
Cb(),
E_.exports = xr;
var fd = E_.exports;
const pP = Lo(fd);
var S0 = fd;
Jp.createRoot = S0.createRoot,
Jp.hydrateRoot = S0.hydrateRoot;
const hP = "modulepreload"
, mP = function(e) {
  return "/" + e
}
, E0 = {}
, lr = function(t, n, r) {
  if (!n || n.length === 0)
      return t();
  const i = document.getElementsByTagName("link");
  return Promise.all(n.map(o => {
      if (o = mP(o),
      o in E0)
          return;
      E0[o] = !0;
      const s = o.endsWith(".css")
        , a = s ? '[rel="stylesheet"]' : "";
      if (!!r)
          for (let f = i.length - 1; f >= 0; f--) {
              const d = i[f];
              if (d.href === o && (!s || d.rel === "stylesheet"))
                  return
          }
      else if (document.querySelector(`link[href="${o}"]${a}`))
          return;
      const u = document.createElement("link");
      if (u.rel = s ? "stylesheet" : hP,
      s || (u.as = "script",
      u.crossOrigin = ""),
      u.href = o,
      document.head.appendChild(u),
      s)
          return new Promise( (f, d) => {
              u.addEventListener("load", f),
              u.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${o}`)))
          }
          )
  }
  )).then( () => t()).catch(o => {
      const s = new Event("vite:preloadError",{
          cancelable: !0
      });
      if (s.payload = o,
      window.dispatchEvent(s),
      !s.defaultPrevented)
          throw o
  }
  )
};
/**
* @remix-run/router v1.9.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Ct.apply(this, arguments)
}
var Yt;
(function(e) {
  e.Pop = "POP",
  e.Push = "PUSH",
  e.Replace = "REPLACE"
}
)(Yt || (Yt = {}));
const T0 = "popstate";
function gP(e) {
  e === void 0 && (e = {});
  function t(r, i) {
      let {pathname: o, search: s, hash: a} = r.location;
      return pu("", {
          pathname: o,
          search: s,
          hash: a
      }, i.state && i.state.usr || null, i.state && i.state.key || "default")
  }
  function n(r, i) {
      return typeof i == "string" ? i : ys(i)
  }
  return yP(t, n, null, e)
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > "u")
      throw new Error(t)
}
function La(e, t) {
  if (!e) {
      typeof console < "u" && console.warn(t);
      try {
          throw new Error(t)
      } catch {}
  }
}
function vP() {
  return Math.random().toString(36).substr(2, 8)
}
function C0(e, t) {
  return {
      usr: e.state,
      key: e.key,
      idx: t
  }
}
function pu(e, t, n, r) {
  return n === void 0 && (n = null),
  Ct({
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: ""
  }, typeof t == "string" ? Yi(t) : t, {
      state: n,
      key: t && t.key || r || vP()
  })
}
function ys(e) {
  let {pathname: t="/", search: n="", hash: r=""} = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
  r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
  t
}
function Yi(e) {
  let t = {};
  if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substr(n),
      e = e.substr(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substr(r),
      e = e.substr(0, r)),
      e && (t.pathname = e)
  }
  return t
}
function yP(e, t, n, r) {
  r === void 0 && (r = {});
  let {window: i=document.defaultView, v5Compat: o=!1} = r
    , s = i.history
    , a = Yt.Pop
    , l = null
    , u = f();
  u == null && (u = 0,
  s.replaceState(Ct({}, s.state, {
      idx: u
  }), ""));
  function f() {
      return (s.state || {
          idx: null
      }).idx
  }
  function d() {
      a = Yt.Pop;
      let T = f()
        , x = T == null ? null : T - u;
      u = T,
      l && l({
          action: a,
          location: m.location,
          delta: x
      })
  }
  function h(T, x) {
      a = Yt.Push;
      let w = pu(m.location, T, x);
      n && n(w, T),
      u = f() + 1;
      let S = C0(w, u)
        , b = m.createHref(w);
      try {
          s.pushState(S, "", b)
      } catch (k) {
          if (k instanceof DOMException && k.name === "DataCloneError")
              throw k;
          i.location.assign(b)
      }
      o && l && l({
          action: a,
          location: m.location,
          delta: 1
      })
  }
  function g(T, x) {
      a = Yt.Replace;
      let w = pu(m.location, T, x);
      n && n(w, T),
      u = f();
      let S = C0(w, u)
        , b = m.createHref(w);
      s.replaceState(S, "", b),
      o && l && l({
          action: a,
          location: m.location,
          delta: 0
      })
  }
  function _(T) {
      let x = i.location.origin !== "null" ? i.location.origin : i.location.href
        , w = typeof T == "string" ? T : ys(T);
      return Be(x, "No window.location.(origin|href) available to create URL for href: " + w),
      new URL(w,x)
  }
  let m = {
      get action() {
          return a
      },
      get location() {
          return e(i, s)
      },
      listen(T) {
          if (l)
              throw new Error("A history only accepts one active listener");
          return i.addEventListener(T0, d),
          l = T,
          () => {
              i.removeEventListener(T0, d),
              l = null
          }
      },
      createHref(T) {
          return t(i, T)
      },
      createURL: _,
      encodeLocation(T) {
          let x = _(T);
          return {
              pathname: x.pathname,
              search: x.search,
              hash: x.hash
          }
      },
      push: h,
      replace: g,
      go(T) {
          return s.go(T)
      }
  };
  return m
}
var Vt;
(function(e) {
  e.data = "data",
  e.deferred = "deferred",
  e.redirect = "redirect",
  e.error = "error"
}
)(Vt || (Vt = {}));
const wP = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function _P(e) {
  return e.index === !0
}
function Wh(e, t, n, r) {
  return n === void 0 && (n = []),
  r === void 0 && (r = {}),
  e.map( (i, o) => {
      let s = [...n, o]
        , a = typeof i.id == "string" ? i.id : s.join("-");
      if (Be(i.index !== !0 || !i.children, "Cannot specify children on an index route"),
      Be(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
      _P(i)) {
          let l = Ct({}, i, t(i), {
              id: a
          });
          return r[a] = l,
          l
      } else {
          let l = Ct({}, i, t(i), {
              id: a,
              children: void 0
          });
          return r[a] = l,
          i.children && (l.children = Wh(i.children, t, s, r)),
          l
      }
  }
  )
}
function ia(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Yi(t) : t
    , i = Ha(r.pathname || "/", n);
  if (i == null)
      return null;
  let o = kb(e);
  xP(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a)
      s = RP(o[a], MP(i));
  return s
}
function bP(e, t) {
  let {route: n, pathname: r, params: i} = e;
  return {
      id: n.id,
      pathname: r,
      params: i,
      data: t[n.id],
      handle: n.handle
  }
}
function kb(e, t, n, r) {
  t === void 0 && (t = []),
  n === void 0 && (n = []),
  r === void 0 && (r = "");
  let i = (o, s, a) => {
      let l = {
          relativePath: a === void 0 ? o.path || "" : a,
          caseSensitive: o.caseSensitive === !0,
          childrenIndex: s,
          route: o
      };
      l.relativePath.startsWith("/") && (Be(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
      l.relativePath = l.relativePath.slice(r.length));
      let u = Fi([r, l.relativePath])
        , f = n.concat(l);
      o.children && o.children.length > 0 && (Be(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
      kb(o.children, t, f, u)),
      !(o.path == null && !o.index) && t.push({
          path: u,
          score: OP(u, o.index),
          routesMeta: f
      })
  }
  ;
  return e.forEach( (o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?")))
          i(o, s);
      else
          for (let l of Pb(o.path))
              i(o, s, l)
  }
  ),
  t
}
function Pb(e) {
  let t = e.split("/");
  if (t.length === 0)
      return [];
  let[n,...r] = t
    , i = n.endsWith("?")
    , o = n.replace(/\?$/, "");
  if (r.length === 0)
      return i ? [o, ""] : [o];
  let s = Pb(r.join("/"))
    , a = [];
  return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
  i && a.push(...s),
  a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function xP(e) {
  e.sort( (t, n) => t.score !== n.score ? n.score - t.score : AP(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const SP = /^:\w+$/
, EP = 3
, TP = 2
, CP = 1
, kP = 10
, PP = -2
, k0 = e => e === "*";
function OP(e, t) {
  let n = e.split("/")
    , r = n.length;
  return n.some(k0) && (r += PP),
  t && (r += TP),
  n.filter(i => !k0(i)).reduce( (i, o) => i + (SP.test(o) ? EP : o === "" ? CP : kP), r)
}
function AP(e, t) {
  return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function RP(e, t) {
  let {routesMeta: n} = e
    , r = {}
    , i = "/"
    , o = [];
  for (let s = 0; s < n.length; ++s) {
      let a = n[s]
        , l = s === n.length - 1
        , u = i === "/" ? t : t.slice(i.length) || "/"
        , f = DP({
          path: a.relativePath,
          caseSensitive: a.caseSensitive,
          end: l
      }, u);
      if (!f)
          return null;
      Object.assign(r, f.params);
      let d = a.route;
      o.push({
          params: r,
          pathname: Fi([i, f.pathname]),
          pathnameBase: jP(Fi([i, f.pathnameBase])),
          route: d
      }),
      f.pathnameBase !== "/" && (i = Fi([i, f.pathnameBase]))
  }
  return o
}
function DP(e, t) {
  typeof e == "string" && (e = {
      path: e,
      caseSensitive: !1,
      end: !0
  });
  let[n,r] = LP(e.path, e.caseSensitive, e.end)
    , i = t.match(n);
  if (!i)
      return null;
  let o = i[0]
    , s = o.replace(/(.)\/+$/, "$1")
    , a = i.slice(1);
  return {
      params: r.reduce( (u, f, d) => {
          if (f === "*") {
              let h = a[d] || "";
              s = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1")
          }
          return u[f] = IP(a[d] || "", f),
          u
      }
      , {}),
      pathname: o,
      pathnameBase: s,
      pattern: e
  }
}
function LP(e, t, n) {
  t === void 0 && (t = !1),
  n === void 0 && (n = !0),
  La(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = []
    , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, a) => (r.push(a),
  "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"),
  i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
  [new RegExp(i,t ? void 0 : "i"), r]
}
function MP(e) {
  try {
      return decodeURI(e)
  } catch (t) {
      return La(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
      e
  }
}
function IP(e, t) {
  try {
      return decodeURIComponent(e)
  } catch (n) {
      return La(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
      e
  }
}
function Ha(e, t) {
  if (t === "/")
      return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
      return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length
    , r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/"
}
function NP(e, t) {
  t === void 0 && (t = "/");
  let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? Yi(e) : e;
  return {
      pathname: n ? n.startsWith("/") ? n : FP(n, t) : t,
      search: zP(r),
      hash: $P(i)
  }
}
function FP(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach(i => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
  }
  ),
  n.length > 1 ? n.join("/") : "/"
}
function mp(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function dd(e) {
  return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Ig(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Yi(e) : (i = Ct({}, e),
  Be(!i.pathname || !i.pathname.includes("?"), mp("?", "pathname", "search", i)),
  Be(!i.pathname || !i.pathname.includes("#"), mp("#", "pathname", "hash", i)),
  Be(!i.search || !i.search.includes("#"), mp("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
  if (r || s == null)
      a = n;
  else {
      let d = t.length - 1;
      if (s.startsWith("..")) {
          let h = s.split("/");
          for (; h[0] === ".."; )
              h.shift(),
              d -= 1;
          i.pathname = h.join("/")
      }
      a = d >= 0 ? t[d] : "/"
  }
  let l = NP(i, a)
    , u = s && s !== "/" && s.endsWith("/")
    , f = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"),
  l
}
const Fi = e => e.join("/").replace(/\/\/+/g, "/")
, jP = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
, zP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
, $P = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Ng {
  constructor(t, n, r, i) {
      i === void 0 && (i = !1),
      this.status = t,
      this.statusText = n || "",
      this.internal = i,
      r instanceof Error ? (this.data = r.toString(),
      this.error = r) : this.data = r
  }
}
function Ob(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Ab = ["post", "put", "patch", "delete"]
, BP = new Set(Ab)
, UP = ["get", ...Ab]
, VP = new Set(UP)
, HP = new Set([301, 302, 303, 307, 308])
, WP = new Set([307, 308])
, gp = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}
, qP = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}
, al = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}
, Rb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
, YP = e => ({
  hasErrorBoundary: !!e.hasErrorBoundary
});
function GP(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0
    , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
    , r = !n;
  Be(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i;
  if (e.mapRouteProperties)
      i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
      let z = e.detectErrorBoundary;
      i = B => ({
          hasErrorBoundary: z(B)
      })
  } else
      i = YP;
  let o = {}, s = Wh(e.routes, i, void 0, o), a, l = e.basename || "/", u = Ct({
      v7_normalizeFormMethod: !1,
      v7_prependBasename: !1
  }, e.future), f = null, d = new Set, h = null, g = null, _ = null, m = e.hydrationData != null, T = ia(s, e.history.location, l), x = null;
  if (T == null) {
      let z = Pr(404, {
          pathname: e.history.location.pathname
      })
        , {matches: B, route: W} = I0(s);
      T = B,
      x = {
          [W.id]: z
      }
  }
  let w = !T.some(z => z.route.lazy) && (!T.some(z => z.route.loader) || e.hydrationData != null), S, b = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: w,
      navigation: gp,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: e.hydrationData && e.hydrationData.loaderData || {},
      actionData: e.hydrationData && e.hydrationData.actionData || null,
      errors: e.hydrationData && e.hydrationData.errors || x,
      fetchers: new Map,
      blockers: new Map
  }, k = Yt.Pop, D = !1, O, R = !1, M = !1, j = [], Q = [], I = new Map, Z = 0, te = -1, ue = new Map, ae = new Set, oe = new Map, L = new Map, K = new Map, A = !1;
  function me() {
      return f = e.history.listen(z => {
          let {action: B, location: W, delta: re} = z;
          if (A) {
              A = !1;
              return
          }
          La(K.size === 0 || re != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let _e = zt({
              currentLocation: b.location,
              nextLocation: W,
              historyAction: B
          });
          if (_e && re != null) {
              A = !0,
              e.history.go(re * -1),
              je(_e, {
                  state: "blocked",
                  location: W,
                  proceed() {
                      je(_e, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: W
                      }),
                      e.history.go(re)
                  },
                  reset() {
                      let J = new Map(b.blockers);
                      J.set(_e, al),
                      xe({
                          blockers: J
                      })
                  }
              });
              return
          }
          return Oe(B, W)
      }
      ),
      b.initialized || Oe(Yt.Pop, b.location),
      S
  }
  function Te() {
      f && f(),
      d.clear(),
      O && O.abort(),
      b.fetchers.forEach( (z, B) => $(B)),
      b.blockers.forEach( (z, B) => Ce(B))
  }
  function N(z) {
      return d.add(z),
      () => d.delete(z)
  }
  function xe(z) {
      b = Ct({}, b, z),
      d.forEach(B => B(b))
  }
  function Ge(z, B) {
      var W, re;
      let _e = b.actionData != null && b.navigation.formMethod != null && Xr(b.navigation.formMethod) && b.navigation.state === "loading" && ((W = z.state) == null ? void 0 : W._isRedirect) !== !0, J;
      B.actionData ? Object.keys(B.actionData).length > 0 ? J = B.actionData : J = null : _e ? J = b.actionData : J = null;
      let be = B.loaderData ? M0(b.loaderData, B.loaderData, B.matches || [], B.errors) : b.loaderData
        , he = b.blockers;
      he.size > 0 && (he = new Map(he),
      he.forEach( (ke, pt) => he.set(pt, al)));
      let ee = D === !0 || b.navigation.formMethod != null && Xr(b.navigation.formMethod) && ((re = z.state) == null ? void 0 : re._isRedirect) !== !0;
      a && (s = a,
      a = void 0),
      R || k === Yt.Pop || (k === Yt.Push ? e.history.push(z, z.state) : k === Yt.Replace && e.history.replace(z, z.state)),
      xe(Ct({}, B, {
          actionData: J,
          loaderData: be,
          historyAction: k,
          location: z,
          initialized: !0,
          navigation: gp,
          revalidation: "idle",
          restoreScrollPosition: dt(z, B.matches || b.matches),
          preventScrollReset: ee,
          blockers: he
      })),
      k = Yt.Pop,
      D = !1,
      R = !1,
      M = !1,
      j = [],
      Q = []
  }
  async function Ze(z, B) {
      if (typeof z == "number") {
          e.history.go(z);
          return
      }
      let W = qh(b.location, b.matches, l, u.v7_prependBasename, z, B == null ? void 0 : B.fromRouteId, B == null ? void 0 : B.relative)
        , {path: re, submission: _e, error: J} = P0(u.v7_normalizeFormMethod, !1, W, B)
        , be = b.location
        , he = pu(b.location, re, B && B.state);
      he = Ct({}, he, e.history.encodeLocation(he));
      let ee = B && B.replace != null ? B.replace : void 0
        , ke = Yt.Push;
      ee === !0 ? ke = Yt.Replace : ee === !1 || _e != null && Xr(_e.formMethod) && _e.formAction === b.location.pathname + b.location.search && (ke = Yt.Replace);
      let pt = B && "preventScrollReset"in B ? B.preventScrollReset === !0 : void 0
        , Se = zt({
          currentLocation: be,
          nextLocation: he,
          historyAction: ke
      });
      if (Se) {
          je(Se, {
              state: "blocked",
              location: he,
              proceed() {
                  je(Se, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: he
                  }),
                  Ze(z, B)
              },
              reset() {
                  let Re = new Map(b.blockers);
                  Re.set(Se, al),
                  xe({
                      blockers: Re
                  })
              }
          });
          return
      }
      return await Oe(ke, he, {
          submission: _e,
          pendingError: J,
          preventScrollReset: pt,
          replace: B && B.replace
      })
  }
  function Xe() {
      if (E(),
      xe({
          revalidation: "loading"
      }),
      b.navigation.state !== "submitting") {
          if (b.navigation.state === "idle") {
              Oe(b.historyAction, b.location, {
                  startUninterruptedRevalidation: !0
              });
              return
          }
          Oe(k || b.historyAction, b.navigation.location, {
              overrideNavigation: b.navigation
          })
      }
  }
  async function Oe(z, B, W) {
      O && O.abort(),
      O = null,
      k = z,
      R = (W && W.startUninterruptedRevalidation) === !0,
      vn(b.location, b.matches),
      D = (W && W.preventScrollReset) === !0;
      let re = a || s
        , _e = W && W.overrideNavigation
        , J = ia(re, B, l);
      if (!J) {
          let Re = Pr(404, {
              pathname: B.pathname
          })
            , {matches: ce, route: ge} = I0(re);
          it(),
          Ge(B, {
              matches: ce,
              loaderData: {},
              errors: {
                  [ge.id]: Re
              }
          });
          return
      }
      if (b.initialized && !M && ZP(b.location, B) && !(W && W.submission && Xr(W.submission.formMethod))) {
          Ge(B, {
              matches: J
          });
          return
      }
      O = new AbortController;
      let be = ul(e.history, B, O.signal, W && W.submission), he, ee;
      if (W && W.pendingError)
          ee = {
              [oa(J).route.id]: W.pendingError
          };
      else if (W && W.submission && Xr(W.submission.formMethod)) {
          let Re = await ot(be, B, W.submission, J, {
              replace: W.replace
          });
          if (Re.shortCircuited)
              return;
          he = Re.pendingActionData,
          ee = Re.pendingActionError,
          _e = vp(B, W.submission),
          be = new Request(be.url,{
              signal: be.signal
          })
      }
      let {shortCircuited: ke, loaderData: pt, errors: Se} = await Tn(be, B, J, _e, W && W.submission, W && W.fetcherSubmission, W && W.replace, he, ee);
      ke || (O = null,
      Ge(B, Ct({
          matches: J
      }, he ? {
          actionData: he
      } : {}, {
          loaderData: pt,
          errors: Se
      })))
  }
  async function ot(z, B, W, re, _e) {
      _e === void 0 && (_e = {}),
      E();
      let J = rO(B, W);
      xe({
          navigation: J
      });
      let be, he = Gh(re, B);
      if (!he.route.action && !he.route.lazy)
          be = {
              type: Vt.error,
              error: Pr(405, {
                  method: z.method,
                  pathname: B.pathname,
                  routeId: he.route.id
              })
          };
      else if (be = await ll("action", z, he, re, o, i, l),
      z.signal.aborted)
          return {
              shortCircuited: !0
          };
      if (va(be)) {
          let ee;
          return _e && _e.replace != null ? ee = _e.replace : ee = be.location === b.location.pathname + b.location.search,
          await ut(b, be, {
              submission: W,
              replace: ee
          }),
          {
              shortCircuited: !0
          }
      }
      if (jl(be)) {
          let ee = oa(re, he.route.id);
          return (_e && _e.replace) !== !0 && (k = Yt.Push),
          {
              pendingActionData: {},
              pendingActionError: {
                  [ee.route.id]: be.error
              }
          }
      }
      if (Qo(be))
          throw Pr(400, {
              type: "defer-action"
          });
      return {
          pendingActionData: {
              [he.route.id]: be.data
          }
      }
  }
  async function Tn(z, B, W, re, _e, J, be, he, ee) {
      let ke = re || vp(B, _e)
        , pt = _e || J || j0(ke)
        , Se = a || s
        , [Re,ce] = O0(e.history, b, W, pt, B, M, j, Q, oe, ae, Se, l, he, ee);
      if (it(we => !(W && W.some(nt => nt.route.id === we)) || Re && Re.some(nt => nt.route.id === we)),
      te = ++Z,
      Re.length === 0 && ce.length === 0) {
          let we = G();
          return Ge(B, Ct({
              matches: W,
              loaderData: {},
              errors: ee || null
          }, he ? {
              actionData: he
          } : {}, we ? {
              fetchers: new Map(b.fetchers)
          } : {})),
          {
              shortCircuited: !0
          }
      }
      if (!R) {
          ce.forEach(nt => {
              let He = b.fetchers.get(nt.key)
                , Qe = cl(void 0, He ? He.data : void 0);
              b.fetchers.set(nt.key, Qe)
          }
          );
          let we = he || b.actionData;
          xe(Ct({
              navigation: ke
          }, we ? Object.keys(we).length === 0 ? {
              actionData: null
          } : {
              actionData: we
          } : {}, ce.length > 0 ? {
              fetchers: new Map(b.fetchers)
          } : {}))
      }
      ce.forEach(we => {
          I.has(we.key) && q(we.key),
          we.controller && I.set(we.key, we.controller)
      }
      );
      let ge = () => ce.forEach(we => q(we.key));
      O && O.signal.addEventListener("abort", ge);
      let {results: se, loaderResults: Me, fetcherResults: ne} = await jt(b.matches, W, Re, ce, z);
      if (z.signal.aborted)
          return {
              shortCircuited: !0
          };
      O && O.signal.removeEventListener("abort", ge),
      ce.forEach(we => I.delete(we.key));
      let Ee = N0(se);
      if (Ee) {
          if (Ee.idx >= Re.length) {
              let we = ce[Ee.idx - Re.length].key;
              ae.add(we)
          }
          return await ut(b, Ee.result, {
              replace: be
          }),
          {
              shortCircuited: !0
          }
      }
      let {loaderData: ie, errors: ye} = L0(b, W, Re, Me, ee, ce, ne, L);
      L.forEach( (we, nt) => {
          we.subscribe(He => {
              (He || we.done) && L.delete(nt)
          }
          )
      }
      );
      let ht = G()
        , Le = fe(te)
        , tt = ht || Le || ce.length > 0;
      return Ct({
          loaderData: ie,
          errors: ye
      }, tt ? {
          fetchers: new Map(b.fetchers)
      } : {})
  }
  function Ft(z) {
      return b.fetchers.get(z) || qP
  }
  function gn(z, B, W, re) {
      if (r)
          throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
      I.has(z) && q(z);
      let _e = a || s
        , J = qh(b.location, b.matches, l, u.v7_prependBasename, W, B, re == null ? void 0 : re.relative)
        , be = ia(_e, J, l);
      if (!be) {
          F(z, B, Pr(404, {
              pathname: J
          }));
          return
      }
      let {path: he, submission: ee, error: ke} = P0(u.v7_normalizeFormMethod, !0, J, re);
      if (ke) {
          F(z, B, ke);
          return
      }
      let pt = Gh(be, he);
      if (D = (re && re.preventScrollReset) === !0,
      ee && Xr(ee.formMethod)) {
          Ae(z, B, he, pt, be, ee);
          return
      }
      oe.set(z, {
          routeId: B,
          path: he
      }),
      lt(z, B, he, pt, be, ee)
  }
  async function Ae(z, B, W, re, _e, J) {
      if (E(),
      oe.delete(z),
      !re.route.action && !re.route.lazy) {
          let We = Pr(405, {
              method: J.formMethod,
              pathname: W,
              routeId: B
          });
          F(z, B, We);
          return
      }
      let be = b.fetchers.get(z)
        , he = iO(J, be);
      b.fetchers.set(z, he),
      xe({
          fetchers: new Map(b.fetchers)
      });
      let ee = new AbortController
        , ke = ul(e.history, W, ee.signal, J);
      I.set(z, ee);
      let pt = Z
        , Se = await ll("action", ke, re, _e, o, i, l);
      if (ke.signal.aborted) {
          I.get(z) === ee && I.delete(z);
          return
      }
      if (va(Se))
          if (I.delete(z),
          te > pt) {
              let We = Vs(void 0);
              b.fetchers.set(z, We),
              xe({
                  fetchers: new Map(b.fetchers)
              });
              return
          } else {
              ae.add(z);
              let We = cl(J);
              return b.fetchers.set(z, We),
              xe({
                  fetchers: new Map(b.fetchers)
              }),
              ut(b, Se, {
                  fetcherSubmission: J
              })
          }
      if (jl(Se)) {
          F(z, B, Se.error);
          return
      }
      if (Qo(Se))
          throw Pr(400, {
              type: "defer-action"
          });
      let Re = b.navigation.location || b.location
        , ce = ul(e.history, Re, ee.signal)
        , ge = a || s
        , se = b.navigation.state !== "idle" ? ia(ge, b.navigation.location, l) : b.matches;
      Be(se, "Didn't find any matches after fetcher action");
      let Me = ++Z;
      ue.set(z, Me);
      let ne = cl(J, Se.data);
      b.fetchers.set(z, ne);
      let[Ee,ie] = O0(e.history, b, se, J, Re, M, j, Q, oe, ae, ge, l, {
          [re.route.id]: Se.data
      }, void 0);
      ie.filter(We => We.key !== z).forEach(We => {
          let rt = We.key
            , en = b.fetchers.get(rt)
            , Yn = cl(void 0, en ? en.data : void 0);
          b.fetchers.set(rt, Yn),
          I.has(rt) && q(rt),
          We.controller && I.set(rt, We.controller)
      }
      ),
      xe({
          fetchers: new Map(b.fetchers)
      });
      let ye = () => ie.forEach(We => q(We.key));
      ee.signal.addEventListener("abort", ye);
      let {results: ht, loaderResults: Le, fetcherResults: tt} = await jt(b.matches, se, Ee, ie, ce);
      if (ee.signal.aborted)
          return;
      ee.signal.removeEventListener("abort", ye),
      ue.delete(z),
      I.delete(z),
      ie.forEach(We => I.delete(We.key));
      let we = N0(ht);
      if (we) {
          if (we.idx >= Ee.length) {
              let We = ie[we.idx - Ee.length].key;
              ae.add(We)
          }
          return ut(b, we.result)
      }
      let {loaderData: nt, errors: He} = L0(b, b.matches, Ee, Le, void 0, ie, tt, L);
      if (b.fetchers.has(z)) {
          let We = Vs(Se.data);
          b.fetchers.set(z, We)
      }
      let Qe = fe(Me);
      b.navigation.state === "loading" && Me > te ? (Be(k, "Expected pending action"),
      O && O.abort(),
      Ge(b.navigation.location, {
          matches: se,
          loaderData: nt,
          errors: He,
          fetchers: new Map(b.fetchers)
      })) : (xe(Ct({
          errors: He,
          loaderData: M0(b.loaderData, nt, se, He)
      }, Qe || ie.length > 0 ? {
          fetchers: new Map(b.fetchers)
      } : {})),
      M = !1)
  }
  async function lt(z, B, W, re, _e, J) {
      let be = b.fetchers.get(z)
        , he = cl(J, be ? be.data : void 0);
      b.fetchers.set(z, he),
      xe({
          fetchers: new Map(b.fetchers)
      });
      let ee = new AbortController
        , ke = ul(e.history, W, ee.signal);
      I.set(z, ee);
      let pt = Z
        , Se = await ll("loader", ke, re, _e, o, i, l);
      if (Qo(Se) && (Se = await Mb(Se, ke.signal, !0) || Se),
      I.get(z) === ee && I.delete(z),
      ke.signal.aborted)
          return;
      if (va(Se))
          if (te > pt) {
              let ce = Vs(void 0);
              b.fetchers.set(z, ce),
              xe({
                  fetchers: new Map(b.fetchers)
              });
              return
          } else {
              ae.add(z),
              await ut(b, Se);
              return
          }
      if (jl(Se)) {
          let ce = oa(b.matches, B);
          b.fetchers.delete(z),
          xe({
              fetchers: new Map(b.fetchers),
              errors: {
                  [ce.route.id]: Se.error
              }
          });
          return
      }
      Be(!Qo(Se), "Unhandled fetcher deferred data");
      let Re = Vs(Se.data);
      b.fetchers.set(z, Re),
      xe({
          fetchers: new Map(b.fetchers)
      })
  }
  async function ut(z, B, W) {
      let {submission: re, fetcherSubmission: _e, replace: J} = W === void 0 ? {} : W;
      B.revalidate && (M = !0);
      let be = pu(z.location, B.location, {
          _isRedirect: !0
      });
      if (Be(be, "Expected a location on the redirect navigation"),
      n) {
          let Re = !1;
          if (B.reloadDocument)
              Re = !0;
          else if (Rb.test(B.location)) {
              const ce = e.history.createURL(B.location);
              Re = ce.origin !== t.location.origin || Ha(ce.pathname, l) == null
          }
          if (Re) {
              J ? t.location.replace(B.location) : t.location.assign(B.location);
              return
          }
      }
      O = null;
      let he = J === !0 ? Yt.Replace : Yt.Push
        , {formMethod: ee, formAction: ke, formEncType: pt} = z.navigation;
      !re && !_e && ee && ke && pt && (re = j0(z.navigation));
      let Se = re || _e;
      if (WP.has(B.status) && Se && Xr(Se.formMethod))
          await Oe(he, be, {
              submission: Ct({}, Se, {
                  formAction: B.location
              }),
              preventScrollReset: D
          });
      else {
          let Re = vp(be, re);
          await Oe(he, be, {
              overrideNavigation: Re,
              fetcherSubmission: _e,
              preventScrollReset: D
          })
      }
  }
  async function jt(z, B, W, re, _e) {
      let J = await Promise.all([...W.map(ee => ll("loader", _e, ee, B, o, i, l)), ...re.map(ee => ee.matches && ee.match && ee.controller ? ll("loader", ul(e.history, ee.path, ee.controller.signal), ee.match, ee.matches, o, i, l) : {
          type: Vt.error,
          error: Pr(404, {
              pathname: ee.path
          })
      })])
        , be = J.slice(0, W.length)
        , he = J.slice(W.length);
      return await Promise.all([F0(z, W, be, be.map( () => _e.signal), !1, b.loaderData), F0(z, re.map(ee => ee.match), he, re.map(ee => ee.controller ? ee.controller.signal : null), !0)]),
      {
          results: J,
          loaderResults: be,
          fetcherResults: he
      }
  }
  function E() {
      M = !0,
      j.push(...it()),
      oe.forEach( (z, B) => {
          I.has(B) && (Q.push(B),
          q(B))
      }
      )
  }
  function F(z, B, W) {
      let re = oa(b.matches, B);
      $(z),
      xe({
          errors: {
              [re.route.id]: W
          },
          fetchers: new Map(b.fetchers)
      })
  }
  function $(z) {
      let B = b.fetchers.get(z);
      I.has(z) && !(B && B.state === "loading" && ue.has(z)) && q(z),
      oe.delete(z),
      ue.delete(z),
      ae.delete(z),
      b.fetchers.delete(z)
  }
  function q(z) {
      let B = I.get(z);
      Be(B, "Expected fetch controller: " + z),
      B.abort(),
      I.delete(z)
  }
  function Y(z) {
      for (let B of z) {
          let W = Ft(B)
            , re = Vs(W.data);
          b.fetchers.set(B, re)
      }
  }
  function G() {
      let z = []
        , B = !1;
      for (let W of ae) {
          let re = b.fetchers.get(W);
          Be(re, "Expected fetcher: " + W),
          re.state === "loading" && (ae.delete(W),
          z.push(W),
          B = !0)
      }
      return Y(z),
      B
  }
  function fe(z) {
      let B = [];
      for (let[W,re] of ue)
          if (re < z) {
              let _e = b.fetchers.get(W);
              Be(_e, "Expected fetcher: " + W),
              _e.state === "loading" && (q(W),
              ue.delete(W),
              B.push(W))
          }
      return Y(B),
      B.length > 0
  }
  function Ke(z, B) {
      let W = b.blockers.get(z) || al;
      return K.get(z) !== B && K.set(z, B),
      W
  }
  function Ce(z) {
      b.blockers.delete(z),
      K.delete(z)
  }
  function je(z, B) {
      let W = b.blockers.get(z) || al;
      Be(W.state === "unblocked" && B.state === "blocked" || W.state === "blocked" && B.state === "blocked" || W.state === "blocked" && B.state === "proceeding" || W.state === "blocked" && B.state === "unblocked" || W.state === "proceeding" && B.state === "unblocked", "Invalid blocker state transition: " + W.state + " -> " + B.state);
      let re = new Map(b.blockers);
      re.set(z, B),
      xe({
          blockers: re
      })
  }
  function zt(z) {
      let {currentLocation: B, nextLocation: W, historyAction: re} = z;
      if (K.size === 0)
          return;
      K.size > 1 && La(!1, "A router only supports one blocker at a time");
      let _e = Array.from(K.entries())
        , [J,be] = _e[_e.length - 1]
        , he = b.blockers.get(J);
      if (!(he && he.state === "proceeding") && be({
          currentLocation: B,
          nextLocation: W,
          historyAction: re
      }))
          return J
  }
  function it(z) {
      let B = [];
      return L.forEach( (W, re) => {
          (!z || z(re)) && (W.cancel(),
          B.push(re),
          L.delete(re))
      }
      ),
      B
  }
  function qt(z, B, W) {
      if (h = z,
      _ = B,
      g = W || null,
      !m && b.navigation === gp) {
          m = !0;
          let re = dt(b.location, b.matches);
          re != null && xe({
              restoreScrollPosition: re
          })
      }
      return () => {
          h = null,
          _ = null,
          g = null
      }
  }
  function Dt(z, B) {
      return g && g(z, B.map(re => bP(re, b.loaderData))) || z.key
  }
  function vn(z, B) {
      if (h && _) {
          let W = Dt(z, B);
          h[W] = _()
      }
  }
  function dt(z, B) {
      if (h) {
          let W = Dt(z, B)
            , re = h[W];
          if (typeof re == "number")
              return re
      }
      return null
  }
  function an(z) {
      o = {},
      a = Wh(z, i, void 0, o)
  }
  return S = {
      get basename() {
          return l
      },
      get state() {
          return b
      },
      get routes() {
          return s
      },
      initialize: me,
      subscribe: N,
      enableScrollRestoration: qt,
      navigate: Ze,
      fetch: gn,
      revalidate: Xe,
      createHref: z => e.history.createHref(z),
      encodeLocation: z => e.history.encodeLocation(z),
      getFetcher: Ft,
      deleteFetcher: $,
      dispose: Te,
      getBlocker: Ke,
      deleteBlocker: Ce,
      _internalFetchControllers: I,
      _internalActiveDeferreds: L,
      _internalSetRoutes: an
  },
  S
}
function XP(e) {
  return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function qh(e, t, n, r, i, o, s) {
  let a, l;
  if (o != null && s !== "path") {
      a = [];
      for (let f of t)
          if (a.push(f),
          f.route.id === o) {
              l = f;
              break
          }
  } else
      a = t,
      l = t[t.length - 1];
  let u = Ig(i || ".", dd(a).map(f => f.pathnameBase), Ha(e.pathname, n) || e.pathname, s === "path");
  return i == null && (u.search = e.search,
  u.hash = e.hash),
  (i == null || i === "" || i === ".") && l && l.route.index && !Fg(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
  r && n !== "/" && (u.pathname = u.pathname === "/" ? n : Fi([n, u.pathname])),
  ys(u)
}
function P0(e, t, n, r) {
  if (!r || !XP(r))
      return {
          path: n
      };
  if (r.formMethod && !nO(r.formMethod))
      return {
          path: n,
          error: Pr(405, {
              method: r.formMethod
          })
      };
  let i = () => ({
      path: n,
      error: Pr(400, {
          type: "invalid-body"
      })
  })
    , o = r.formMethod || "get"
    , s = e ? o.toUpperCase() : o.toLowerCase()
    , a = Lb(n);
  if (r.body !== void 0) {
      if (r.formEncType === "text/plain") {
          if (!Xr(s))
              return i();
          let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (g, _) => {
              let[m,T] = _;
              return "" + g + m + "=" + T + `
`
          }
          , "") : String(r.body);
          return {
              path: n,
              submission: {
                  formMethod: s,
                  formAction: a,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: void 0,
                  text: h
              }
          }
      } else if (r.formEncType === "application/json") {
          if (!Xr(s))
              return i();
          try {
              let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
              return {
                  path: n,
                  submission: {
                      formMethod: s,
                      formAction: a,
                      formEncType: r.formEncType,
                      formData: void 0,
                      json: h,
                      text: void 0
                  }
              }
          } catch {
              return i()
          }
      }
  }
  Be(typeof FormData == "function", "FormData is not available in this environment");
  let l, u;
  if (r.formData)
      l = Yh(r.formData),
      u = r.formData;
  else if (r.body instanceof FormData)
      l = Yh(r.body),
      u = r.body;
  else if (r.body instanceof URLSearchParams)
      l = r.body,
      u = D0(l);
  else if (r.body == null)
      l = new URLSearchParams,
      u = new FormData;
  else
      try {
          l = new URLSearchParams(r.body),
          u = D0(l)
      } catch {
          return i()
      }
  let f = {
      formMethod: s,
      formAction: a,
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: u,
      json: void 0,
      text: void 0
  };
  if (Xr(f.formMethod))
      return {
          path: n,
          submission: f
      };
  let d = Yi(n);
  return t && d.search && Fg(d.search) && l.append("index", ""),
  d.search = "?" + l,
  {
      path: ys(d),
      submission: f
  }
}
function KP(e, t) {
  let n = e;
  if (t) {
      let r = e.findIndex(i => i.route.id === t);
      r >= 0 && (n = e.slice(0, r))
  }
  return n
}
function O0(e, t, n, r, i, o, s, a, l, u, f, d, h, g) {
  let _ = g ? Object.values(g)[0] : h ? Object.values(h)[0] : void 0
    , m = e.createURL(t.location)
    , T = e.createURL(i)
    , x = g ? Object.keys(g)[0] : void 0
    , S = KP(n, x).filter( (k, D) => {
      if (k.route.lazy)
          return !0;
      if (k.route.loader == null)
          return !1;
      if (QP(t.loaderData, t.matches[D], k) || s.some(M => M === k.route.id))
          return !0;
      let O = t.matches[D]
        , R = k;
      return A0(k, Ct({
          currentUrl: m,
          currentParams: O.params,
          nextUrl: T,
          nextParams: R.params
      }, r, {
          actionResult: _,
          defaultShouldRevalidate: o || m.pathname + m.search === T.pathname + T.search || m.search !== T.search || Db(O, R)
      }))
  }
  )
    , b = [];
  return l.forEach( (k, D) => {
      if (!n.some(Q => Q.route.id === k.routeId))
          return;
      let O = ia(f, k.path, d);
      if (!O) {
          b.push({
              key: D,
              routeId: k.routeId,
              path: k.path,
              matches: null,
              match: null,
              controller: null
          });
          return
      }
      let R = t.fetchers.get(D)
        , M = Gh(O, k.path)
        , j = !1;
      u.has(D) ? j = !1 : a.includes(D) ? j = !0 : R && R.state !== "idle" && R.data === void 0 ? j = o : j = A0(M, Ct({
          currentUrl: m,
          currentParams: t.matches[t.matches.length - 1].params,
          nextUrl: T,
          nextParams: n[n.length - 1].params
      }, r, {
          actionResult: _,
          defaultShouldRevalidate: o
      })),
      j && b.push({
          key: D,
          routeId: k.routeId,
          path: k.path,
          matches: O,
          match: M,
          controller: new AbortController
      })
  }
  ),
  [S, b]
}
function QP(e, t, n) {
  let r = !t || n.route.id !== t.route.id
    , i = e[n.route.id] === void 0;
  return r || i
}
function Db(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function A0(e, t) {
  if (e.route.shouldRevalidate) {
      let n = e.route.shouldRevalidate(t);
      if (typeof n == "boolean")
          return n
  }
  return t.defaultShouldRevalidate
}
async function R0(e, t, n) {
  if (!e.lazy)
      return;
  let r = await e.lazy();
  if (!e.lazy)
      return;
  let i = n[e.id];
  Be(i, "No route found in manifest");
  let o = {};
  for (let s in r) {
      let l = i[s] !== void 0 && s !== "hasErrorBoundary";
      La(!l, 'Route "' + i.id + '" has a static property "' + s + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + s + '" will be ignored.')),
      !l && !wP.has(s) && (o[s] = r[s])
  }
  Object.assign(i, o),
  Object.assign(i, Ct({}, t(i), {
      lazy: void 0
  }))
}
async function ll(e, t, n, r, i, o, s, a) {
  a === void 0 && (a = {});
  let l, u, f, d = _ => {
      let m, T = new Promise( (x, w) => m = w);
      return f = () => m(),
      t.signal.addEventListener("abort", f),
      Promise.race([_({
          request: t,
          params: n.params,
          context: a.requestContext
      }), T])
  }
  ;
  try {
      let _ = n.route[e];
      if (n.route.lazy)
          if (_) {
              let m, T = await Promise.all([d(_).catch(x => {
                  m = x
              }
              ), R0(n.route, o, i)]);
              if (m)
                  throw m;
              u = T[0]
          } else if (await R0(n.route, o, i),
          _ = n.route[e],
          _)
              u = await d(_);
          else if (e === "action") {
              let m = new URL(t.url)
                , T = m.pathname + m.search;
              throw Pr(405, {
                  method: t.method,
                  pathname: T,
                  routeId: n.route.id
              })
          } else
              return {
                  type: Vt.data,
                  data: void 0
              };
      else if (_)
          u = await d(_);
      else {
          let m = new URL(t.url)
            , T = m.pathname + m.search;
          throw Pr(404, {
              pathname: T
          })
      }
      Be(u !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
  } catch (_) {
      l = Vt.error,
      u = _
  } finally {
      f && t.signal.removeEventListener("abort", f)
  }
  if (tO(u)) {
      let _ = u.status;
      if (HP.has(_)) {
          let x = u.headers.get("Location");
          if (Be(x, "Redirects returned/thrown from loaders/actions must have a Location header"),
          !Rb.test(x))
              x = qh(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, x);
          else if (!a.isStaticRequest) {
              let w = new URL(t.url)
                , S = x.startsWith("//") ? new URL(w.protocol + x) : new URL(x)
                , b = Ha(S.pathname, s) != null;
              S.origin === w.origin && b && (x = S.pathname + S.search + S.hash)
          }
          if (a.isStaticRequest)
              throw u.headers.set("Location", x),
              u;
          return {
              type: Vt.redirect,
              status: _,
              location: x,
              revalidate: u.headers.get("X-Remix-Revalidate") !== null,
              reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null
          }
      }
      if (a.isRouteRequest)
          throw {
              type: l === Vt.error ? Vt.error : Vt.data,
              response: u
          };
      let m, T = u.headers.get("Content-Type");
      return T && /\bapplication\/json\b/.test(T) ? m = await u.json() : m = await u.text(),
      l === Vt.error ? {
          type: l,
          error: new Ng(_,u.statusText,m),
          headers: u.headers
      } : {
          type: Vt.data,
          data: m,
          statusCode: u.status,
          headers: u.headers
      }
  }
  if (l === Vt.error)
      return {
          type: l,
          error: u
      };
  if (eO(u)) {
      var h, g;
      return {
          type: Vt.deferred,
          deferredData: u,
          statusCode: (h = u.init) == null ? void 0 : h.status,
          headers: ((g = u.init) == null ? void 0 : g.headers) && new Headers(u.init.headers)
      }
  }
  return {
      type: Vt.data,
      data: u
  }
}
function ul(e, t, n, r) {
  let i = e.createURL(Lb(t)).toString()
    , o = {
      signal: n
  };
  if (r && Xr(r.formMethod)) {
      let {formMethod: s, formEncType: a} = r;
      o.method = s.toUpperCase(),
      a === "application/json" ? (o.headers = new Headers({
          "Content-Type": a
      }),
      o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = Yh(r.formData) : o.body = r.formData
  }
  return new Request(i,o)
}
function Yh(e) {
  let t = new URLSearchParams;
  for (let[n,r] of e.entries())
      t.append(n, typeof r == "string" ? r : r.name);
  return t
}
function D0(e) {
  let t = new FormData;
  for (let[n,r] of e.entries())
      t.append(n, r);
  return t
}
function JP(e, t, n, r, i) {
  let o = {}, s = null, a, l = !1, u = {};
  return n.forEach( (f, d) => {
      let h = t[d].route.id;
      if (Be(!va(f), "Cannot handle redirect results in processLoaderData"),
      jl(f)) {
          let g = oa(e, h)
            , _ = f.error;
          r && (_ = Object.values(r)[0],
          r = void 0),
          s = s || {},
          s[g.route.id] == null && (s[g.route.id] = _),
          o[h] = void 0,
          l || (l = !0,
          a = Ob(f.error) ? f.error.status : 500),
          f.headers && (u[h] = f.headers)
      } else
          Qo(f) ? (i.set(h, f.deferredData),
          o[h] = f.deferredData.data) : o[h] = f.data,
          f.statusCode != null && f.statusCode !== 200 && !l && (a = f.statusCode),
          f.headers && (u[h] = f.headers)
  }
  ),
  r && (s = r,
  o[Object.keys(r)[0]] = void 0),
  {
      loaderData: o,
      errors: s,
      statusCode: a || 200,
      loaderHeaders: u
  }
}
function L0(e, t, n, r, i, o, s, a) {
  let {loaderData: l, errors: u} = JP(t, n, r, i, a);
  for (let f = 0; f < o.length; f++) {
      let {key: d, match: h, controller: g} = o[f];
      Be(s !== void 0 && s[f] !== void 0, "Did not find corresponding fetcher result");
      let _ = s[f];
      if (!(g && g.signal.aborted))
          if (jl(_)) {
              let m = oa(e.matches, h == null ? void 0 : h.route.id);
              u && u[m.route.id] || (u = Ct({}, u, {
                  [m.route.id]: _.error
              })),
              e.fetchers.delete(d)
          } else if (va(_))
              Be(!1, "Unhandled fetcher revalidation redirect");
          else if (Qo(_))
              Be(!1, "Unhandled fetcher deferred data");
          else {
              let m = Vs(_.data);
              e.fetchers.set(d, m)
          }
  }
  return {
      loaderData: l,
      errors: u
  }
}
function M0(e, t, n, r) {
  let i = Ct({}, t);
  for (let o of n) {
      let s = o.route.id;
      if (t.hasOwnProperty(s) ? t[s] !== void 0 && (i[s] = t[s]) : e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
      r && r.hasOwnProperty(s))
          break
  }
  return i
}
function oa(e, t) {
  return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function I0(e) {
  let t = e.find(n => n.index || !n.path || n.path === "/") || {
      id: "__shim-error-route__"
  };
  return {
      matches: [{
          params: {},
          pathname: "",
          pathnameBase: "",
          route: t
      }],
      route: t
  }
}
function Pr(e, t) {
  let {pathname: n, routeId: r, method: i, type: o} = t === void 0 ? {} : t
    , s = "Unknown Server Error"
    , a = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request",
  i && n && r ? a = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden",
  a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found",
  a = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed",
  i && n && r ? a = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
  new Ng(e || 500,s,new Error(a),!0)
}
function N0(e) {
  for (let t = e.length - 1; t >= 0; t--) {
      let n = e[t];
      if (va(n))
          return {
              result: n,
              idx: t
          }
  }
}
function Lb(e) {
  let t = typeof e == "string" ? Yi(e) : e;
  return ys(Ct({}, t, {
      hash: ""
  }))
}
function ZP(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Qo(e) {
  return e.type === Vt.deferred
}
function jl(e) {
  return e.type === Vt.error
}
function va(e) {
  return (e && e.type) === Vt.redirect
}
function eO(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function tO(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function nO(e) {
  return VP.has(e.toLowerCase())
}
function Xr(e) {
  return BP.has(e.toLowerCase())
}
async function F0(e, t, n, r, i, o) {
  for (let s = 0; s < n.length; s++) {
      let a = n[s]
        , l = t[s];
      if (!l)
          continue;
      let u = e.find(d => d.route.id === l.route.id)
        , f = u != null && !Db(u, l) && (o && o[l.route.id]) !== void 0;
      if (Qo(a) && (i || f)) {
          let d = r[s];
          Be(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
          await Mb(a, d, i).then(h => {
              h && (n[s] = h || n[s])
          }
          )
      }
  }
}
async function Mb(e, t, n) {
  if (n === void 0 && (n = !1),
  !await e.deferredData.resolveData(t)) {
      if (n)
          try {
              return {
                  type: Vt.data,
                  data: e.deferredData.unwrappedData
              }
          } catch (i) {
              return {
                  type: Vt.error,
                  error: i
              }
          }
      return {
          type: Vt.data,
          data: e.deferredData.data
      }
  }
}
function Fg(e) {
  return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function Gh(e, t) {
  let n = typeof t == "string" ? Yi(t).search : t.search;
  if (e[e.length - 1].route.index && Fg(n || ""))
      return e[e.length - 1];
  let r = dd(e);
  return r[r.length - 1]
}
function j0(e) {
  let {formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: s} = e;
  if (!(!t || !n || !r)) {
      if (i != null)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: void 0,
              json: void 0,
              text: i
          };
      if (o != null)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: o,
              json: void 0,
              text: void 0
          };
      if (s !== void 0)
          return {
              formMethod: t,
              formAction: n,
              formEncType: r,
              formData: void 0,
              json: s,
              text: void 0
          }
  }
}
function vp(e, t) {
  return t ? {
      state: "loading",
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text
  } : {
      state: "loading",
      location: e,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
  }
}
function rO(e, t) {
  return {
      state: "submitting",
      location: e,
      formMethod: t.formMethod,
      formAction: t.formAction,
      formEncType: t.formEncType,
      formData: t.formData,
      json: t.json,
      text: t.text
  }
}
function cl(e, t) {
  return e ? {
      state: "loading",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t
  } : {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: t
  }
}
function iO(e, t) {
  return {
      state: "submitting",
      formMethod: e.formMethod,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formData: e.formData,
      json: e.json,
      text: e.text,
      data: t ? t.data : void 0
  }
}
function Vs(e) {
  return {
      state: "idle",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: e
  }
}
/**
* React Router v6.16.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Of.apply(this, arguments)
}
const pd = C.createContext(null)
, Ib = C.createContext(null)
, Wa = C.createContext(null)
, hd = C.createContext(null)
, Gi = C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
})
, Nb = C.createContext(null);
function oO(e, t) {
  let {relative: n} = t === void 0 ? {} : t;
  Ru() || Be(!1);
  let {basename: r, navigator: i} = C.useContext(Wa)
    , {hash: o, pathname: s, search: a} = jb(e, {
      relative: n
  })
    , l = s;
  return r !== "/" && (l = s === "/" ? r : Fi([r, s])),
  i.createHref({
      pathname: l,
      search: a,
      hash: o
  })
}
function Ru() {
  return C.useContext(hd) != null
}
function Du() {
  return Ru() || Be(!1),
  C.useContext(hd).location
}
function Fb(e) {
  C.useContext(Wa).static || C.useLayoutEffect(e)
}
function sO() {
  let {isDataRoute: e} = C.useContext(Gi);
  return e ? _O() : aO()
}
function aO() {
  Ru() || Be(!1);
  let e = C.useContext(pd)
    , {basename: t, navigator: n} = C.useContext(Wa)
    , {matches: r} = C.useContext(Gi)
    , {pathname: i} = Du()
    , o = JSON.stringify(dd(r).map(l => l.pathnameBase))
    , s = C.useRef(!1);
  return Fb( () => {
      s.current = !0
  }
  ),
  C.useCallback(function(l, u) {
      if (u === void 0 && (u = {}),
      !s.current)
          return;
      if (typeof l == "number") {
          n.go(l);
          return
      }
      let f = Ig(l, JSON.parse(o), i, u.relative === "path");
      e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Fi([t, f.pathname])),
      (u.replace ? n.replace : n.push)(f, u.state, u)
  }, [t, n, o, i, e])
}
const lO = C.createContext(null);
function uO(e) {
  let t = C.useContext(Gi).outlet;
  return t && C.createElement(lO.Provider, {
      value: e
  }, t)
}
function U5() {
  let {matches: e} = C.useContext(Gi)
    , t = e[e.length - 1];
  return t ? t.params : {}
}
function jb(e, t) {
  let {relative: n} = t === void 0 ? {} : t
    , {matches: r} = C.useContext(Gi)
    , {pathname: i} = Du()
    , o = JSON.stringify(dd(r).map(s => s.pathnameBase));
  return C.useMemo( () => Ig(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function cO(e, t, n) {
  Ru() || Be(!1);
  let {navigator: r} = C.useContext(Wa)
    , {matches: i} = C.useContext(Gi)
    , o = i[i.length - 1]
    , s = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let l = Du(), u;
  if (t) {
      var f;
      let m = typeof t == "string" ? Yi(t) : t;
      a === "/" || (f = m.pathname) != null && f.startsWith(a) || Be(!1),
      u = m
  } else
      u = l;
  let d = u.pathname || "/"
    , h = a === "/" ? d : d.slice(a.length) || "/"
    , g = ia(e, {
      pathname: h
  })
    , _ = mO(g && g.map(m => Object.assign({}, m, {
      params: Object.assign({}, s, m.params),
      pathname: Fi([a, r.encodeLocation ? r.encodeLocation(m.pathname).pathname : m.pathname]),
      pathnameBase: m.pathnameBase === "/" ? a : Fi([a, r.encodeLocation ? r.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
  })), i, n);
  return t && _ ? C.createElement(hd.Provider, {
      value: {
          location: Of({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
          }, u),
          navigationType: Yt.Pop
      }
  }, _) : _
}
function fO() {
  let e = wO()
    , t = Ob(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
    , n = e instanceof Error ? e.stack : null
    , i = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)"
  }
    , o = null;
  return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
      style: {
          fontStyle: "italic"
      }
  }, t), n ? C.createElement("pre", {
      style: i
  }, n) : null, o)
}
const dO = C.createElement(fO, null);
class pO extends C.Component {
  constructor(t) {
      super(t),
      this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error
      }
  }
  static getDerivedStateFromError(t) {
      return {
          error: t
      }
  }
  static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
          error: t.error,
          location: t.location,
          revalidation: t.revalidation
      } : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation
      }
  }
  componentDidCatch(t, n) {
      console.error("React Router caught the following error during render", t, n)
  }
  render() {
      return this.state.error ? C.createElement(Gi.Provider, {
          value: this.props.routeContext
      }, C.createElement(Nb.Provider, {
          value: this.state.error,
          children: this.props.component
      })) : this.props.children
  }
}
function hO(e) {
  let {routeContext: t, match: n, children: r} = e
    , i = C.useContext(pd);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
  C.createElement(Gi.Provider, {
      value: t
  }, r)
}
function mO(e, t, n) {
  var r;
  if (t === void 0 && (t = []),
  n === void 0 && (n = null),
  e == null) {
      var i;
      if ((i = n) != null && i.errors)
          e = n.matches;
      else
          return null
  }
  let o = e
    , s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
      let a = o.findIndex(l => l.route.id && (s == null ? void 0 : s[l.route.id]));
      a >= 0 || Be(!1),
      o = o.slice(0, Math.min(o.length, a + 1))
  }
  return o.reduceRight( (a, l, u) => {
      let f = l.route.id ? s == null ? void 0 : s[l.route.id] : null
        , d = null;
      n && (d = l.route.errorElement || dO);
      let h = t.concat(o.slice(0, u + 1))
        , g = () => {
          let _;
          return f ? _ = d : l.route.Component ? _ = C.createElement(l.route.Component, null) : l.route.element ? _ = l.route.element : _ = a,
          C.createElement(hO, {
              match: l,
              routeContext: {
                  outlet: a,
                  matches: h,
                  isDataRoute: n != null
              },
              children: _
          })
      }
      ;
      return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0) ? C.createElement(pO, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: f,
          children: g(),
          routeContext: {
              outlet: null,
              matches: h,
              isDataRoute: !0
          }
      }) : g()
  }
  , null)
}
var zb = function(e) {
  return e.UseBlocker = "useBlocker",
  e.UseRevalidator = "useRevalidator",
  e.UseNavigateStable = "useNavigate",
  e
}(zb || {})
, Af = function(e) {
  return e.UseBlocker = "useBlocker",
  e.UseLoaderData = "useLoaderData",
  e.UseActionData = "useActionData",
  e.UseRouteError = "useRouteError",
  e.UseNavigation = "useNavigation",
  e.UseRouteLoaderData = "useRouteLoaderData",
  e.UseMatches = "useMatches",
  e.UseRevalidator = "useRevalidator",
  e.UseNavigateStable = "useNavigate",
  e.UseRouteId = "useRouteId",
  e
}(Af || {});
function gO(e) {
  let t = C.useContext(pd);
  return t || Be(!1),
  t
}
function vO(e) {
  let t = C.useContext(Ib);
  return t || Be(!1),
  t
}
function yO(e) {
  let t = C.useContext(Gi);
  return t || Be(!1),
  t
}
function $b(e) {
  let t = yO()
    , n = t.matches[t.matches.length - 1];
  return n.route.id || Be(!1),
  n.route.id
}
function wO() {
  var e;
  let t = C.useContext(Nb)
    , n = vO(Af.UseRouteError)
    , r = $b(Af.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function _O() {
  let {router: e} = gO(zb.UseNavigateStable)
    , t = $b(Af.UseNavigateStable)
    , n = C.useRef(!1);
  return Fb( () => {
      n.current = !0
  }
  ),
  C.useCallback(function(i, o) {
      o === void 0 && (o = {}),
      n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Of({
          fromRouteId: t
      }, o)))
  }, [e, t])
}
const bO = "startTransition"
, z0 = x_[bO];
function xO(e) {
  let {fallbackElement: t, router: n, future: r} = e
    , [i,o] = C.useState(n.state)
    , {v7_startTransition: s} = r || {}
    , a = C.useCallback(d => {
      s && z0 ? z0( () => o(d)) : o(d)
  }
  , [o, s]);
  C.useLayoutEffect( () => n.subscribe(a), [n, a]);
  let l = C.useMemo( () => ({
      createHref: n.createHref,
      encodeLocation: n.encodeLocation,
      go: d => n.navigate(d),
      push: (d, h, g) => n.navigate(d, {
          state: h,
          preventScrollReset: g == null ? void 0 : g.preventScrollReset
      }),
      replace: (d, h, g) => n.navigate(d, {
          replace: !0,
          state: h,
          preventScrollReset: g == null ? void 0 : g.preventScrollReset
      })
  }), [n])
    , u = n.basename || "/"
    , f = C.useMemo( () => ({
      router: n,
      navigator: l,
      static: !1,
      basename: u
  }), [n, l, u]);
  return C.createElement(C.Fragment, null, C.createElement(pd.Provider, {
      value: f
  }, C.createElement(Ib.Provider, {
      value: i
  }, C.createElement(TO, {
      basename: u,
      location: i.location,
      navigationType: i.historyAction,
      navigator: l
  }, i.initialized ? C.createElement(SO, {
      routes: n.routes,
      state: i
  }) : t))), null)
}
function SO(e) {
  let {routes: t, state: n} = e;
  return cO(t, void 0, n)
}
function EO(e) {
  return uO(e.context)
}
function TO(e) {
  let {basename: t="/", children: n=null, location: r, navigationType: i=Yt.Pop, navigator: o, static: s=!1} = e;
  Ru() && Be(!1);
  let a = t.replace(/^\/*/, "/")
    , l = C.useMemo( () => ({
      basename: a,
      navigator: o,
      static: s
  }), [a, o, s]);
  typeof r == "string" && (r = Yi(r));
  let {pathname: u="/", search: f="", hash: d="", state: h=null, key: g="default"} = r
    , _ = C.useMemo( () => {
      let m = Ha(u, a);
      return m == null ? null : {
          location: {
              pathname: m,
              search: f,
              hash: d,
              state: h,
              key: g
          },
          navigationType: i
      }
  }
  , [a, u, f, d, h, g, i]);
  return _ == null ? null : C.createElement(Wa.Provider, {
      value: l
  }, C.createElement(hd.Provider, {
      children: n,
      value: _
  }))
}
new Promise( () => {}
);
function CO(e) {
  let t = {
      hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && Object.assign(t, {
      element: C.createElement(e.Component),
      Component: void 0
  }),
  e.ErrorBoundary && Object.assign(t, {
      errorElement: C.createElement(e.ErrorBoundary),
      ErrorBoundary: void 0
  }),
  t
}
/**
* React Router DOM v6.16.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  hu.apply(this, arguments)
}
function kO(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function PO(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function OO(e, t) {
  return e.button === 0 && (!t || t === "_self") && !PO(e)
}
const AO = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function RO(e, t) {
  return GP({
      basename: t == null ? void 0 : t.basename,
      future: hu({}, t == null ? void 0 : t.future, {
          v7_prependBasename: !0
      }),
      history: gP({
          window: t == null ? void 0 : t.window
      }),
      hydrationData: (t == null ? void 0 : t.hydrationData) || DO(),
      routes: e,
      mapRouteProperties: CO
  }).initialize()
}
function DO() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = hu({}, t, {
      errors: LO(t.errors)
  })),
  t
}
function LO(e) {
  if (!e)
      return null;
  let t = Object.entries(e)
    , n = {};
  for (let[r,i] of t)
      if (i && i.__type === "RouteErrorResponse")
          n[r] = new Ng(i.status,i.statusText,i.data,i.internal === !0);
      else if (i && i.__type === "Error") {
          if (i.__subType) {
              let o = window[i.__subType];
              if (typeof o == "function")
                  try {
                      let s = new o(i.message);
                      s.stack = "",
                      n[r] = s
                  } catch {}
          }
          if (n[r] == null) {
              let o = new Error(i.message);
              o.stack = "",
              n[r] = o
          }
      } else
          n[r] = i;
  return n
}
const MO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
, IO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
, V5 = C.forwardRef(function(t, n) {
  let {onClick: r, relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: f} = t, d = kO(t, AO), {basename: h} = C.useContext(Wa), g, _ = !1;
  if (typeof u == "string" && IO.test(u) && (g = u,
  MO))
      try {
          let w = new URL(window.location.href)
            , S = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u)
            , b = Ha(S.pathname, h);
          S.origin === w.origin && b != null ? u = b + S.search + S.hash : _ = !0
      } catch {}
  let m = oO(u, {
      relative: i
  })
    , T = NO(u, {
      replace: s,
      state: a,
      target: l,
      preventScrollReset: f,
      relative: i
  });
  function x(w) {
      r && r(w),
      w.defaultPrevented || T(w)
  }
  return C.createElement("a", hu({}, d, {
      href: g || m,
      onClick: _ || o ? r : x,
      ref: n,
      target: l
  }))
});
var $0;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration",
  e.UseSubmit = "useSubmit",
  e.UseSubmitFetcher = "useSubmitFetcher",
  e.UseFetcher = "useFetcher"
}
)($0 || ($0 = {}));
var B0;
(function(e) {
  e.UseFetchers = "useFetchers",
  e.UseScrollRestoration = "useScrollRestoration"
}
)(B0 || (B0 = {}));
function NO(e, t) {
  let {target: n, replace: r, state: i, preventScrollReset: o, relative: s} = t === void 0 ? {} : t
    , a = sO()
    , l = Du()
    , u = jb(e, {
      relative: s
  });
  return C.useCallback(f => {
      if (OO(f, n)) {
          f.preventDefault();
          let d = r !== void 0 ? r : ys(l) === ys(u);
          a(e, {
              replace: d,
              state: i,
              preventScrollReset: o,
              relative: s
          })
      }
  }
  , [l, a, u, r, i, n, e, o, s])
}
var Bb = {
  exports: {}
}
, FO = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
, jO = FO
, zO = jO;
function Ub() {}
function Vb() {}
Vb.resetWarningCache = Ub;
var $O = function() {
  function e(r, i, o, s, a, l) {
      if (l !== zO) {
          var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw u.name = "Invariant Violation",
          u
      }
  }
  e.isRequired = e;
  function t() {
      return e
  }
  var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Vb,
      resetWarningCache: Ub
  };
  return n.PropTypes = n,
  n
};
Bb.exports = $O();
var BO = Bb.exports;
const Ne = Lo(BO);
function UO(e) {
  return e && typeof e == "object" && "default"in e ? e.default : e
}
var Hb = C
, VO = UO(Hb);
function U0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
function HO(e, t) {
  e.prototype = Object.create(t.prototype),
  e.prototype.constructor = e,
  e.__proto__ = t
}
var WO = !!(typeof window < "u" && window.document && window.document.createElement);
function qO(e, t, n) {
  if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
      throw new Error("Expected mapStateOnServer to either be undefined or a function.");
  function r(i) {
      return i.displayName || i.name || "Component"
  }
  return function(o) {
      if (typeof o != "function")
          throw new Error("Expected WrappedComponent to be a React component.");
      var s = [], a;
      function l() {
          a = e(s.map(function(f) {
              return f.props
          })),
          u.canUseDOM ? t(a) : n && (a = n(a))
      }
      var u = function(f) {
          HO(d, f);
          function d() {
              return f.apply(this, arguments) || this
          }
          d.peek = function() {
              return a
          }
          ,
          d.rewind = function() {
              if (d.canUseDOM)
                  throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
              var _ = a;
              return a = void 0,
              s = [],
              _
          }
          ;
          var h = d.prototype;
          return h.UNSAFE_componentWillMount = function() {
              s.push(this),
              l()
          }
          ,
          h.componentDidUpdate = function() {
              l()
          }
          ,
          h.componentWillUnmount = function() {
              var _ = s.indexOf(this);
              s.splice(_, 1),
              l()
          }
          ,
          h.render = function() {
              return VO.createElement(o, this.props)
          }
          ,
          d
      }(Hb.PureComponent);
      return U0(u, "displayName", "SideEffect(" + r(o) + ")"),
      U0(u, "canUseDOM", WO),
      u
  }
}
var YO = qO;
const GO = Lo(YO);
var XO = typeof Element < "u"
, KO = typeof Map == "function"
, QO = typeof Set == "function"
, JO = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Bc(e, t) {
  if (e === t)
      return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor)
          return !1;
      var n, r, i;
      if (Array.isArray(e)) {
          if (n = e.length,
          n != t.length)
              return !1;
          for (r = n; r-- !== 0; )
              if (!Bc(e[r], t[r]))
                  return !1;
          return !0
      }
      var o;
      if (KO && e instanceof Map && t instanceof Map) {
          if (e.size !== t.size)
              return !1;
          for (o = e.entries(); !(r = o.next()).done; )
              if (!t.has(r.value[0]))
                  return !1;
          for (o = e.entries(); !(r = o.next()).done; )
              if (!Bc(r.value[1], t.get(r.value[0])))
                  return !1;
          return !0
      }
      if (QO && e instanceof Set && t instanceof Set) {
          if (e.size !== t.size)
              return !1;
          for (o = e.entries(); !(r = o.next()).done; )
              if (!t.has(r.value[0]))
                  return !1;
          return !0
      }
      if (JO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
          if (n = e.length,
          n != t.length)
              return !1;
          for (r = n; r-- !== 0; )
              if (e[r] !== t[r])
                  return !1;
          return !0
      }
      if (e.constructor === RegExp)
          return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
          return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
          return e.toString() === t.toString();
      if (i = Object.keys(e),
      n = i.length,
      n !== Object.keys(t).length)
          return !1;
      for (r = n; r-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, i[r]))
              return !1;
      if (XO && e instanceof Element)
          return !1;
      for (r = n; r-- !== 0; )
          if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !Bc(e[i[r]], t[i[r]]))
              return !1;
      return !0
  }
  return e !== e && t !== t
}
var ZO = function(t, n) {
  try {
      return Bc(t, n)
  } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
          return console.warn("react-fast-compare cannot handle circular refs"),
          !1;
      throw r
  }
};
const eA = Lo(ZO);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var V0 = Object.getOwnPropertySymbols
, tA = Object.prototype.hasOwnProperty
, nA = Object.prototype.propertyIsEnumerable;
function rA(e) {
  if (e == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e)
}
function iA() {
  try {
      if (!Object.assign)
          return !1;
      var e = new String("abc");
      if (e[5] = "de",
      Object.getOwnPropertyNames(e)[0] === "5")
          return !1;
      for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
      var r = Object.getOwnPropertyNames(t).map(function(o) {
          return t[o]
      });
      if (r.join("") !== "0123456789")
          return !1;
      var i = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(o) {
          i[o] = o
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
  } catch {
      return !1
  }
}
var oA = iA() ? Object.assign : function(e, t) {
  for (var n, r = rA(e), i, o = 1; o < arguments.length; o++) {
      n = Object(arguments[o]);
      for (var s in n)
          tA.call(n, s) && (r[s] = n[s]);
      if (V0) {
          i = V0(n);
          for (var a = 0; a < i.length; a++)
              nA.call(n, i[a]) && (r[i[a]] = n[i[a]])
      }
  }
  return r
}
;
const sA = Lo(oA);
var os = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
}
, Pe = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
Object.keys(Pe).map(function(e) {
  return Pe[e]
});
var St = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
}
, Rf = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}
, mu = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
}
, aA = Object.keys(Rf).reduce(function(e, t) {
  return e[Rf[t]] = t,
  e
}, {})
, lA = [Pe.NOSCRIPT, Pe.SCRIPT, Pe.STYLE]
, Zr = "data-react-helmet"
, uA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
  return typeof e
}
: function(e) {
  return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
, cA = function(e, t) {
  if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function")
}
, fA = function() {
  function e(t, n) {
      for (var r = 0; r < n.length; r++) {
          var i = n[r];
          i.enumerable = i.enumerable || !1,
          i.configurable = !0,
          "value"in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
  }
  return function(t, n, r) {
      return n && e(t.prototype, n),
      r && e(t, r),
      t
  }
}()
, Xn = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
  }
  return e
}
, dA = function(e, t) {
  if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
      constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
      }
  }),
  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
, H0 = function(e, t) {
  var n = {};
  for (var r in e)
      t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n
}
, pA = function(e, t) {
  if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e
}
, Xh = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}
, hA = function(t) {
  var n = ya(t, Pe.TITLE)
    , r = ya(t, mu.TITLE_TEMPLATE);
  if (r && n)
      return r.replace(/%s/g, function() {
          return Array.isArray(n) ? n.join("") : n
      });
  var i = ya(t, mu.DEFAULT_TITLE);
  return n || i || void 0
}
, mA = function(t) {
  return ya(t, mu.ON_CHANGE_CLIENT_STATE) || function() {}
}
, yp = function(t, n) {
  return n.filter(function(r) {
      return typeof r[t] < "u"
  }).map(function(r) {
      return r[t]
  }).reduce(function(r, i) {
      return Xn({}, r, i)
  }, {})
}
, gA = function(t, n) {
  return n.filter(function(r) {
      return typeof r[Pe.BASE] < "u"
  }).map(function(r) {
      return r[Pe.BASE]
  }).reverse().reduce(function(r, i) {
      if (!r.length)
          for (var o = Object.keys(i), s = 0; s < o.length; s++) {
              var a = o[s]
                , l = a.toLowerCase();
              if (t.indexOf(l) !== -1 && i[l])
                  return r.concat(i)
          }
      return r
  }, [])
}
, fl = function(t, n, r) {
  var i = {};
  return r.filter(function(o) {
      return Array.isArray(o[t]) ? !0 : (typeof o[t] < "u" && _A("Helmet: " + t + ' should be of type "Array". Instead found type "' + uA(o[t]) + '"'),
      !1)
  }).map(function(o) {
      return o[t]
  }).reverse().reduce(function(o, s) {
      var a = {};
      s.filter(function(h) {
          for (var g = void 0, _ = Object.keys(h), m = 0; m < _.length; m++) {
              var T = _[m]
                , x = T.toLowerCase();
              n.indexOf(x) !== -1 && !(g === St.REL && h[g].toLowerCase() === "canonical") && !(x === St.REL && h[x].toLowerCase() === "stylesheet") && (g = x),
              n.indexOf(T) !== -1 && (T === St.INNER_HTML || T === St.CSS_TEXT || T === St.ITEM_PROP) && (g = T)
          }
          if (!g || !h[g])
              return !1;
          var w = h[g].toLowerCase();
          return i[g] || (i[g] = {}),
          a[g] || (a[g] = {}),
          i[g][w] ? !1 : (a[g][w] = !0,
          !0)
      }).reverse().forEach(function(h) {
          return o.push(h)
      });
      for (var l = Object.keys(a), u = 0; u < l.length; u++) {
          var f = l[u]
            , d = sA({}, i[f], a[f]);
          i[f] = d
      }
      return o
  }, []).reverse()
}
, ya = function(t, n) {
  for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r];
      if (i.hasOwnProperty(n))
          return i[n]
  }
  return null
}
, vA = function(t) {
  return {
      baseTag: gA([St.HREF, St.TARGET], t),
      bodyAttributes: yp(os.BODY, t),
      defer: ya(t, mu.DEFER),
      encode: ya(t, mu.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: yp(os.HTML, t),
      linkTags: fl(Pe.LINK, [St.REL, St.HREF], t),
      metaTags: fl(Pe.META, [St.NAME, St.CHARSET, St.HTTPEQUIV, St.PROPERTY, St.ITEM_PROP], t),
      noscriptTags: fl(Pe.NOSCRIPT, [St.INNER_HTML], t),
      onChangeClientState: mA(t),
      scriptTags: fl(Pe.SCRIPT, [St.SRC, St.INNER_HTML], t),
      styleTags: fl(Pe.STYLE, [St.CSS_TEXT], t),
      title: hA(t),
      titleAttributes: yp(os.TITLE, t)
  }
}
, Kh = function() {
  var e = Date.now();
  return function(t) {
      var n = Date.now();
      n - e > 16 ? (e = n,
      t(n)) : setTimeout(function() {
          Kh(t)
      }, 0)
  }
}()
, W0 = function(t) {
  return clearTimeout(t)
}
, yA = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Kh : global.requestAnimationFrame || Kh
, wA = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || W0 : global.cancelAnimationFrame || W0
, _A = function(t) {
  return console && typeof console.warn == "function" && console.warn(t)
}
, dl = null
, bA = function(t) {
  dl && wA(dl),
  t.defer ? dl = yA(function() {
      q0(t, function() {
          dl = null
      })
  }) : (q0(t),
  dl = null)
}
, q0 = function(t, n) {
  var r = t.baseTag
    , i = t.bodyAttributes
    , o = t.htmlAttributes
    , s = t.linkTags
    , a = t.metaTags
    , l = t.noscriptTags
    , u = t.onChangeClientState
    , f = t.scriptTags
    , d = t.styleTags
    , h = t.title
    , g = t.titleAttributes;
  Qh(Pe.BODY, i),
  Qh(Pe.HTML, o),
  xA(h, g);
  var _ = {
      baseTag: Is(Pe.BASE, r),
      linkTags: Is(Pe.LINK, s),
      metaTags: Is(Pe.META, a),
      noscriptTags: Is(Pe.NOSCRIPT, l),
      scriptTags: Is(Pe.SCRIPT, f),
      styleTags: Is(Pe.STYLE, d)
  }
    , m = {}
    , T = {};
  Object.keys(_).forEach(function(x) {
      var w = _[x]
        , S = w.newTags
        , b = w.oldTags;
      S.length && (m[x] = S),
      b.length && (T[x] = _[x].oldTags)
  }),
  n && n(),
  u(t, m, T)
}
, Wb = function(t) {
  return Array.isArray(t) ? t.join("") : t
}
, xA = function(t, n) {
  typeof t < "u" && document.title !== t && (document.title = Wb(t)),
  Qh(Pe.TITLE, n)
}
, Qh = function(t, n) {
  var r = document.getElementsByTagName(t)[0];
  if (r) {
      for (var i = r.getAttribute(Zr), o = i ? i.split(",") : [], s = [].concat(o), a = Object.keys(n), l = 0; l < a.length; l++) {
          var u = a[l]
            , f = n[u] || "";
          r.getAttribute(u) !== f && r.setAttribute(u, f),
          o.indexOf(u) === -1 && o.push(u);
          var d = s.indexOf(u);
          d !== -1 && s.splice(d, 1)
      }
      for (var h = s.length - 1; h >= 0; h--)
          r.removeAttribute(s[h]);
      o.length === s.length ? r.removeAttribute(Zr) : r.getAttribute(Zr) !== a.join(",") && r.setAttribute(Zr, a.join(","))
  }
}
, Is = function(t, n) {
  var r = document.head || document.querySelector(Pe.HEAD)
    , i = r.querySelectorAll(t + "[" + Zr + "]")
    , o = Array.prototype.slice.call(i)
    , s = []
    , a = void 0;
  return n && n.length && n.forEach(function(l) {
      var u = document.createElement(t);
      for (var f in l)
          if (l.hasOwnProperty(f))
              if (f === St.INNER_HTML)
                  u.innerHTML = l.innerHTML;
              else if (f === St.CSS_TEXT)
                  u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
              else {
                  var d = typeof l[f] > "u" ? "" : l[f];
                  u.setAttribute(f, d)
              }
      u.setAttribute(Zr, "true"),
      o.some(function(h, g) {
          return a = g,
          u.isEqualNode(h)
      }) ? o.splice(a, 1) : s.push(u)
  }),
  o.forEach(function(l) {
      return l.parentNode.removeChild(l)
  }),
  s.forEach(function(l) {
      return r.appendChild(l)
  }),
  {
      oldTags: o,
      newTags: s
  }
}
, qb = function(t) {
  return Object.keys(t).reduce(function(n, r) {
      var i = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + i : i
  }, "")
}
, SA = function(t, n, r, i) {
  var o = qb(r)
    , s = Wb(n);
  return o ? "<" + t + " " + Zr + '="true" ' + o + ">" + Xh(s, i) + "</" + t + ">" : "<" + t + " " + Zr + '="true">' + Xh(s, i) + "</" + t + ">"
}
, EA = function(t, n, r) {
  return n.reduce(function(i, o) {
      var s = Object.keys(o).filter(function(u) {
          return !(u === St.INNER_HTML || u === St.CSS_TEXT)
      }).reduce(function(u, f) {
          var d = typeof o[f] > "u" ? f : f + '="' + Xh(o[f], r) + '"';
          return u ? u + " " + d : d
      }, "")
        , a = o.innerHTML || o.cssText || ""
        , l = lA.indexOf(t) === -1;
      return i + "<" + t + " " + Zr + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
  }, "")
}
, Yb = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(t).reduce(function(r, i) {
      return r[Rf[i] || i] = t[i],
      r
  }, n)
}
, TA = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(t).reduce(function(r, i) {
      return r[aA[i] || i] = t[i],
      r
  }, n)
}
, CA = function(t, n, r) {
  var i, o = (i = {
      key: n
  },
  i[Zr] = !0,
  i), s = Yb(r, o);
  return [Jn.createElement(Pe.TITLE, s, n)]
}
, kA = function(t, n) {
  return n.map(function(r, i) {
      var o, s = (o = {
          key: i
      },
      o[Zr] = !0,
      o);
      return Object.keys(r).forEach(function(a) {
          var l = Rf[a] || a;
          if (l === St.INNER_HTML || l === St.CSS_TEXT) {
              var u = r.innerHTML || r.cssText;
              s.dangerouslySetInnerHTML = {
                  __html: u
              }
          } else
              s[l] = r[a]
      }),
      Jn.createElement(t, s)
  })
}
, Si = function(t, n, r) {
  switch (t) {
  case Pe.TITLE:
      return {
          toComponent: function() {
              return CA(t, n.title, n.titleAttributes)
          },
          toString: function() {
              return SA(t, n.title, n.titleAttributes, r)
          }
      };
  case os.BODY:
  case os.HTML:
      return {
          toComponent: function() {
              return Yb(n)
          },
          toString: function() {
              return qb(n)
          }
      };
  default:
      return {
          toComponent: function() {
              return kA(t, n)
          },
          toString: function() {
              return EA(t, n, r)
          }
      }
  }
}
, Gb = function(t) {
  var n = t.baseTag
    , r = t.bodyAttributes
    , i = t.encode
    , o = t.htmlAttributes
    , s = t.linkTags
    , a = t.metaTags
    , l = t.noscriptTags
    , u = t.scriptTags
    , f = t.styleTags
    , d = t.title
    , h = d === void 0 ? "" : d
    , g = t.titleAttributes;
  return {
      base: Si(Pe.BASE, n, i),
      bodyAttributes: Si(os.BODY, r, i),
      htmlAttributes: Si(os.HTML, o, i),
      link: Si(Pe.LINK, s, i),
      meta: Si(Pe.META, a, i),
      noscript: Si(Pe.NOSCRIPT, l, i),
      script: Si(Pe.SCRIPT, u, i),
      style: Si(Pe.STYLE, f, i),
      title: Si(Pe.TITLE, {
          title: h,
          titleAttributes: g
      }, i)
  }
}
, PA = function(t) {
  var n, r;
  return r = n = function(i) {
      dA(o, i);
      function o() {
          return cA(this, o),
          pA(this, i.apply(this, arguments))
      }
      return o.prototype.shouldComponentUpdate = function(a) {
          return !eA(this.props, a)
      }
      ,
      o.prototype.mapNestedChildrenToProps = function(a, l) {
          if (!l)
              return null;
          switch (a.type) {
          case Pe.SCRIPT:
          case Pe.NOSCRIPT:
              return {
                  innerHTML: l
              };
          case Pe.STYLE:
              return {
                  cssText: l
              }
          }
          throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
      }
      ,
      o.prototype.flattenArrayTypeChildren = function(a) {
          var l, u = a.child, f = a.arrayTypeChildren, d = a.newChildProps, h = a.nestedChildren;
          return Xn({}, f, (l = {},
          l[u.type] = [].concat(f[u.type] || [], [Xn({}, d, this.mapNestedChildrenToProps(u, h))]),
          l))
      }
      ,
      o.prototype.mapObjectTypeChildren = function(a) {
          var l, u, f = a.child, d = a.newProps, h = a.newChildProps, g = a.nestedChildren;
          switch (f.type) {
          case Pe.TITLE:
              return Xn({}, d, (l = {},
              l[f.type] = g,
              l.titleAttributes = Xn({}, h),
              l));
          case Pe.BODY:
              return Xn({}, d, {
                  bodyAttributes: Xn({}, h)
              });
          case Pe.HTML:
              return Xn({}, d, {
                  htmlAttributes: Xn({}, h)
              })
          }
          return Xn({}, d, (u = {},
          u[f.type] = Xn({}, h),
          u))
      }
      ,
      o.prototype.mapArrayTypeChildrenToProps = function(a, l) {
          var u = Xn({}, l);
          return Object.keys(a).forEach(function(f) {
              var d;
              u = Xn({}, u, (d = {},
              d[f] = a[f],
              d))
          }),
          u
      }
      ,
      o.prototype.warnOnInvalidChildren = function(a, l) {
          return !0
      }
      ,
      o.prototype.mapChildrenToProps = function(a, l) {
          var u = this
            , f = {};
          return Jn.Children.forEach(a, function(d) {
              if (!(!d || !d.props)) {
                  var h = d.props
                    , g = h.children
                    , _ = H0(h, ["children"])
                    , m = TA(_);
                  switch (u.warnOnInvalidChildren(d, g),
                  d.type) {
                  case Pe.LINK:
                  case Pe.META:
                  case Pe.NOSCRIPT:
                  case Pe.SCRIPT:
                  case Pe.STYLE:
                      f = u.flattenArrayTypeChildren({
                          child: d,
                          arrayTypeChildren: f,
                          newChildProps: m,
                          nestedChildren: g
                      });
                      break;
                  default:
                      l = u.mapObjectTypeChildren({
                          child: d,
                          newProps: l,
                          newChildProps: m,
                          nestedChildren: g
                      });
                      break
                  }
              }
          }),
          l = this.mapArrayTypeChildrenToProps(f, l),
          l
      }
      ,
      o.prototype.render = function() {
          var a = this.props
            , l = a.children
            , u = H0(a, ["children"])
            , f = Xn({}, u);
          return l && (f = this.mapChildrenToProps(l, f)),
          Jn.createElement(t, f)
      }
      ,
      fA(o, null, [{
          key: "canUseDOM",
          set: function(a) {
              t.canUseDOM = a
          }
      }]),
      o
  }(Jn.Component),
  n.propTypes = {
      base: Ne.object,
      bodyAttributes: Ne.object,
      children: Ne.oneOfType([Ne.arrayOf(Ne.node), Ne.node]),
      defaultTitle: Ne.string,
      defer: Ne.bool,
      encodeSpecialCharacters: Ne.bool,
      htmlAttributes: Ne.object,
      link: Ne.arrayOf(Ne.object),
      meta: Ne.arrayOf(Ne.object),
      noscript: Ne.arrayOf(Ne.object),
      onChangeClientState: Ne.func,
      script: Ne.arrayOf(Ne.object),
      style: Ne.arrayOf(Ne.object),
      title: Ne.string,
      titleAttributes: Ne.object,
      titleTemplate: Ne.string
  },
  n.defaultProps = {
      defer: !0,
      encodeSpecialCharacters: !0
  },
  n.peek = t.peek,
  n.rewind = function() {
      var i = t.rewind();
      return i || (i = Gb({
          baseTag: [],
          bodyAttributes: {},
          encodeSpecialCharacters: !0,
          htmlAttributes: {},
          linkTags: [],
          metaTags: [],
          noscriptTags: [],
          scriptTags: [],
          styleTags: [],
          title: "",
          titleAttributes: {}
      })),
      i
  }
  ,
  r
}
, OA = function() {
  return null
}
, AA = GO(vA, bA, Gb)(OA)
, Jh = PA(AA);
Jh.renderStatic = Jh.rewind;
const RA = "/src/assets/issue-83dc1305.svg";
function on() {
  return on = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  on.apply(this, arguments)
}
function Eo(e, t, {checkForDefaultPrevented: n=!0}={}) {
  return function(i) {
      if (e == null || e(i),
      n === !1 || !i.defaultPrevented)
          return t == null ? void 0 : t(i)
  }
}
function DA(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Xb(...e) {
  return t => e.forEach(n => DA(n, t))
}
function qa(...e) {
  return C.useCallback(Xb(...e), e)
}
function LA(e, t=[]) {
  let n = [];
  function r(o, s) {
      const a = C.createContext(s)
        , l = n.length;
      n = [...n, s];
      function u(d) {
          const {scope: h, children: g, ..._} = d
            , m = (h == null ? void 0 : h[e][l]) || a
            , T = C.useMemo( () => _, Object.values(_));
          return C.createElement(m.Provider, {
              value: T
          }, g)
      }
      function f(d, h) {
          const g = (h == null ? void 0 : h[e][l]) || a
            , _ = C.useContext(g);
          if (_)
              return _;
          if (s !== void 0)
              return s;
          throw new Error(`\`${d}\` must be used within \`${o}\``)
      }
      return u.displayName = o + "Provider",
      [u, f]
  }
  const i = () => {
      const o = n.map(s => C.createContext(s));
      return function(a) {
          const l = (a == null ? void 0 : a[e]) || o;
          return C.useMemo( () => ({
              [`__scope${e}`]: {
                  ...a,
                  [e]: l
              }
          }), [a, l])
      }
  }
  ;
  return i.scopeName = e,
  [r, MA(i, ...t)]
}
function MA(...e) {
  const t = e[0];
  if (e.length === 1)
      return t;
  const n = () => {
      const r = e.map(i => ({
          useScope: i(),
          scopeName: i.scopeName
      }));
      return function(o) {
          const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
              const d = l(o)[`__scope${u}`];
              return {
                  ...a,
                  ...d
              }
          }
          , {});
          return C.useMemo( () => ({
              [`__scope${t.scopeName}`]: s
          }), [s])
      }
  }
  ;
  return n.scopeName = t.scopeName,
  n
}
const Zh = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {}
, IA = x_["useId".toString()] || ( () => {}
);
let NA = 0;
function wp(e) {
  const [t,n] = C.useState(IA());
  return Zh( () => {
      e || n(r => r ?? String(NA++))
  }
  , [e]),
  e || (t ? `radix-${t}` : "")
}
function ws(e) {
  const t = C.useRef(e);
  return C.useEffect( () => {
      t.current = e
  }
  ),
  C.useMemo( () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
  }
  , [])
}
function FA({prop: e, defaultProp: t, onChange: n= () => {}
}) {
  const [r,i] = jA({
      defaultProp: t,
      onChange: n
  })
    , o = e !== void 0
    , s = o ? e : r
    , a = ws(n)
    , l = C.useCallback(u => {
      if (o) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d)
      } else
          i(u)
  }
  , [o, e, i, a]);
  return [s, l]
}
function jA({defaultProp: e, onChange: t}) {
  const n = C.useState(e)
    , [r] = n
    , i = C.useRef(r)
    , o = ws(t);
  return C.useEffect( () => {
      i.current !== r && (o(r),
      i.current = r)
  }
  , [r, i, o]),
  n
}
const jg = C.forwardRef( (e, t) => {
  const {children: n, ...r} = e
    , i = C.Children.toArray(n)
    , o = i.find($A);
  if (o) {
      const s = o.props.children
        , a = i.map(l => l === o ? C.Children.count(s) > 1 ? C.Children.only(null) : C.isValidElement(s) ? s.props.children : null : l);
      return C.createElement(em, on({}, r, {
          ref: t
      }), C.isValidElement(s) ? C.cloneElement(s, void 0, a) : null)
  }
  return C.createElement(em, on({}, r, {
      ref: t
  }), n)
}
);
jg.displayName = "Slot";
const em = C.forwardRef( (e, t) => {
  const {children: n, ...r} = e;
  return C.isValidElement(n) ? C.cloneElement(n, {
      ...BA(r, n.props),
      ref: t ? Xb(t, n.ref) : n.ref
  }) : C.Children.count(n) > 1 ? C.Children.only(null) : null
}
);
em.displayName = "SlotClone";
const zA = ({children: e}) => C.createElement(C.Fragment, null, e);
function $A(e) {
  return C.isValidElement(e) && e.type === zA
}
function BA(e, t) {
  const n = {
      ...t
  };
  for (const r in t) {
      const i = e[r]
        , o = t[r];
      /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
          o(...a),
          i(...a)
      }
      : i && (n[r] = i) : r === "style" ? n[r] = {
          ...i,
          ...o
      } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
  }
  return {
      ...e,
      ...n
  }
}
const UA = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
, Fo = UA.reduce( (e, t) => {
  const n = C.forwardRef( (r, i) => {
      const {asChild: o, ...s} = r
        , a = o ? jg : t;
      return C.useEffect( () => {
          window[Symbol.for("radix-ui")] = !0
      }
      , []),
      C.createElement(a, on({}, s, {
          ref: i
      }))
  }
  );
  return n.displayName = `Primitive.${t}`,
  {
      ...e,
      [t]: n
  }
}
, {});
function VA(e, t) {
  e && fd.flushSync( () => e.dispatchEvent(t))
}
function HA(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = ws(e);
  C.useEffect( () => {
      const r = i => {
          i.key === "Escape" && n(i)
      }
      ;
      return t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
  }
  , [n, t])
}
const tm = "dismissableLayer.update"
, WA = "dismissableLayer.pointerDownOutside"
, qA = "dismissableLayer.focusOutside";
let Y0;
const YA = C.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
})
, GA = C.forwardRef( (e, t) => {
  var n;
  const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: i, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: a, onDismiss: l, ...u} = e
    , f = C.useContext(YA)
    , [d,h] = C.useState(null)
    , g = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document
    , [,_] = C.useState({})
    , m = qa(t, R => h(R))
    , T = Array.from(f.layers)
    , [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1)
    , w = T.indexOf(x)
    , S = d ? T.indexOf(d) : -1
    , b = f.layersWithOutsidePointerEventsDisabled.size > 0
    , k = S >= w
    , D = XA(R => {
      const M = R.target
        , j = [...f.branches].some(Q => Q.contains(M));
      !k || j || (o == null || o(R),
      a == null || a(R),
      R.defaultPrevented || l == null || l())
  }
  , g)
    , O = KA(R => {
      const M = R.target;
      [...f.branches].some(Q => Q.contains(M)) || (s == null || s(R),
      a == null || a(R),
      R.defaultPrevented || l == null || l())
  }
  , g);
  return HA(R => {
      S === f.layers.size - 1 && (i == null || i(R),
      !R.defaultPrevented && l && (R.preventDefault(),
      l()))
  }
  , g),
  C.useEffect( () => {
      if (d)
          return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Y0 = g.body.style.pointerEvents,
          g.body.style.pointerEvents = "none"),
          f.layersWithOutsidePointerEventsDisabled.add(d)),
          f.layers.add(d),
          G0(),
          () => {
              r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Y0)
          }
  }
  , [d, g, r, f]),
  C.useEffect( () => () => {
      d && (f.layers.delete(d),
      f.layersWithOutsidePointerEventsDisabled.delete(d),
      G0())
  }
  , [d, f]),
  C.useEffect( () => {
      const R = () => _({});
      return document.addEventListener(tm, R),
      () => document.removeEventListener(tm, R)
  }
  , []),
  C.createElement(Fo.div, on({}, u, {
      ref: m,
      style: {
          pointerEvents: b ? k ? "auto" : "none" : void 0,
          ...e.style
      },
      onFocusCapture: Eo(e.onFocusCapture, O.onFocusCapture),
      onBlurCapture: Eo(e.onBlurCapture, O.onBlurCapture),
      onPointerDownCapture: Eo(e.onPointerDownCapture, D.onPointerDownCapture)
  }))
}
);
function XA(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = ws(e)
    , r = C.useRef(!1)
    , i = C.useRef( () => {}
  );
  return C.useEffect( () => {
      const o = a => {
          if (a.target && !r.current) {
              let u = function() {
                  Kb(WA, n, l, {
                      discrete: !0
                  })
              };
              const l = {
                  originalEvent: a
              };
              a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
              i.current = u,
              t.addEventListener("click", i.current, {
                  once: !0
              })) : u()
          } else
              t.removeEventListener("click", i.current);
          r.current = !1
      }
        , s = window.setTimeout( () => {
          t.addEventListener("pointerdown", o)
      }
      , 0);
      return () => {
          window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current)
      }
  }
  , [t, n]),
  {
      onPointerDownCapture: () => r.current = !0
  }
}
function KA(e, t=globalThis == null ? void 0 : globalThis.document) {
  const n = ws(e)
    , r = C.useRef(!1);
  return C.useEffect( () => {
      const i = o => {
          o.target && !r.current && Kb(qA, n, {
              originalEvent: o
          }, {
              discrete: !1
          })
      }
      ;
      return t.addEventListener("focusin", i),
      () => t.removeEventListener("focusin", i)
  }
  , [t, n]),
  {
      onFocusCapture: () => r.current = !0,
      onBlurCapture: () => r.current = !1
  }
}
function G0() {
  const e = new CustomEvent(tm);
  document.dispatchEvent(e)
}
function Kb(e, t, n, {discrete: r}) {
  const i = n.originalEvent.target
    , o = new CustomEvent(e,{
      bubbles: !1,
      cancelable: !0,
      detail: n
  });
  t && i.addEventListener(e, t, {
      once: !0
  }),
  r ? VA(i, o) : i.dispatchEvent(o)
}
const _p = "focusScope.autoFocusOnMount"
, bp = "focusScope.autoFocusOnUnmount"
, X0 = {
  bubbles: !1,
  cancelable: !0
}
, QA = C.forwardRef( (e, t) => {
  const {loop: n=!1, trapped: r=!1, onMountAutoFocus: i, onUnmountAutoFocus: o, ...s} = e
    , [a,l] = C.useState(null)
    , u = ws(i)
    , f = ws(o)
    , d = C.useRef(null)
    , h = qa(t, m => l(m))
    , g = C.useRef({
      paused: !1,
      pause() {
          this.paused = !0
      },
      resume() {
          this.paused = !1
      }
  }).current;
  C.useEffect( () => {
      if (r) {
          let m = function(S) {
              if (g.paused || !a)
                  return;
              const b = S.target;
              a.contains(b) ? d.current = b : to(d.current, {
                  select: !0
              })
          }
            , T = function(S) {
              if (g.paused || !a)
                  return;
              const b = S.relatedTarget;
              b !== null && (a.contains(b) || to(d.current, {
                  select: !0
              }))
          }
            , x = function(S) {
              if (document.activeElement === document.body)
                  for (const k of S)
                      k.removedNodes.length > 0 && to(a)
          };
          document.addEventListener("focusin", m),
          document.addEventListener("focusout", T);
          const w = new MutationObserver(x);
          return a && w.observe(a, {
              childList: !0,
              subtree: !0
          }),
          () => {
              document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", T),
              w.disconnect()
          }
      }
  }
  , [r, a, g.paused]),
  C.useEffect( () => {
      if (a) {
          Q0.add(g);
          const m = document.activeElement;
          if (!a.contains(m)) {
              const x = new CustomEvent(_p,X0);
              a.addEventListener(_p, u),
              a.dispatchEvent(x),
              x.defaultPrevented || (JA(rR(Qb(a)), {
                  select: !0
              }),
              document.activeElement === m && to(a))
          }
          return () => {
              a.removeEventListener(_p, u),
              setTimeout( () => {
                  const x = new CustomEvent(bp,X0);
                  a.addEventListener(bp, f),
                  a.dispatchEvent(x),
                  x.defaultPrevented || to(m ?? document.body, {
                      select: !0
                  }),
                  a.removeEventListener(bp, f),
                  Q0.remove(g)
              }
              , 0)
          }
      }
  }
  , [a, u, f, g]);
  const _ = C.useCallback(m => {
      if (!n && !r || g.paused)
          return;
      const T = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
        , x = document.activeElement;
      if (T && x) {
          const w = m.currentTarget
            , [S,b] = ZA(w);
          S && b ? !m.shiftKey && x === b ? (m.preventDefault(),
          n && to(S, {
              select: !0
          })) : m.shiftKey && x === S && (m.preventDefault(),
          n && to(b, {
              select: !0
          })) : x === w && m.preventDefault()
      }
  }
  , [n, r, g.paused]);
  return C.createElement(Fo.div, on({
      tabIndex: -1
  }, s, {
      ref: h,
      onKeyDown: _
  }))
}
);
function JA(e, {select: t=!1}={}) {
  const n = document.activeElement;
  for (const r of e)
      if (to(r, {
          select: t
      }),
      document.activeElement !== n)
          return
}
function ZA(e) {
  const t = Qb(e)
    , n = K0(t, e)
    , r = K0(t.reverse(), e);
  return [n, r]
}
function Qb(e) {
  const t = []
    , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
          const i = r.tagName === "INPUT" && r.type === "hidden";
          return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
  });
  for (; n.nextNode(); )
      t.push(n.currentNode);
  return t
}
function K0(e, t) {
  for (const n of e)
      if (!eR(n, {
          upTo: t
      }))
          return n
}
function eR(e, {upTo: t}) {
  if (getComputedStyle(e).visibility === "hidden")
      return !0;
  for (; e; ) {
      if (t !== void 0 && e === t)
          return !1;
      if (getComputedStyle(e).display === "none")
          return !0;
      e = e.parentElement
  }
  return !1
}
function tR(e) {
  return e instanceof HTMLInputElement && "select"in e
}
function to(e, {select: t=!1}={}) {
  if (e && e.focus) {
      const n = document.activeElement;
      e.focus({
          preventScroll: !0
      }),
      e !== n && tR(e) && t && e.select()
  }
}
const Q0 = nR();
function nR() {
  let e = [];
  return {
      add(t) {
          const n = e[0];
          t !== n && (n == null || n.pause()),
          e = J0(e, t),
          e.unshift(t)
      },
      remove(t) {
          var n;
          e = J0(e, t),
          (n = e[0]) === null || n === void 0 || n.resume()
      }
  }
}
function J0(e, t) {
  const n = [...e]
    , r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1),
  n
}
function rR(e) {
  return e.filter(t => t.tagName !== "A")
}
const iR = C.forwardRef( (e, t) => {
  var n;
  const {container: r=globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...i} = e;
  return r ? pP.createPortal(C.createElement(Fo.div, on({}, i, {
      ref: t
  })), r) : null
}
);
function oR(e, t) {
  return C.useReducer( (n, r) => {
      const i = t[n][r];
      return i ?? n
  }
  , e)
}
const md = e => {
  const {present: t, children: n} = e
    , r = sR(t)
    , i = typeof n == "function" ? n({
      present: r.isPresent
  }) : C.Children.only(n)
    , o = qa(r.ref, i.ref);
  return typeof n == "function" || r.isPresent ? C.cloneElement(i, {
      ref: o
  }) : null
}
;
md.displayName = "Presence";
function sR(e) {
  const [t,n] = C.useState()
    , r = C.useRef({})
    , i = C.useRef(e)
    , o = C.useRef("none")
    , s = e ? "mounted" : "unmounted"
    , [a,l] = oR(s, {
      mounted: {
          UNMOUNT: "unmounted",
          ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
          MOUNT: "mounted",
          ANIMATION_END: "unmounted"
      },
      unmounted: {
          MOUNT: "mounted"
      }
  });
  return C.useEffect( () => {
      const u = uc(r.current);
      o.current = a === "mounted" ? u : "none"
  }
  , [a]),
  Zh( () => {
      const u = r.current
        , f = i.current;
      if (f !== e) {
          const h = o.current
            , g = uc(u);
          e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && h !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          i.current = e
      }
  }
  , [e, l]),
  Zh( () => {
      if (t) {
          const u = d => {
              const g = uc(r.current).includes(d.animationName);
              d.target === t && g && fd.flushSync( () => l("ANIMATION_END"))
          }
            , f = d => {
              d.target === t && (o.current = uc(r.current))
          }
          ;
          return t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u)
          }
      } else
          l("ANIMATION_END")
  }
  , [t, l]),
  {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: C.useCallback(u => {
          u && (r.current = getComputedStyle(u)),
          n(u)
      }
      , [])
  }
}
function uc(e) {
  return (e == null ? void 0 : e.animationName) || "none"
}
let xp = 0;
function aR() {
  C.useEffect( () => {
      var e, t;
      const n = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Z0()),
      document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Z0()),
      xp++,
      () => {
          xp === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()),
          xp--
      }
  }
  , [])
}
function Z0() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""),
  e.tabIndex = 0,
  e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
  e
}
var ci = function() {
  return ci = Object.assign || function(t) {
      for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
      }
      return t
  }
  ,
  ci.apply(this, arguments)
};
function Jb(e, t) {
  var n = {};
  for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n
}
function lR(e, t, n) {
  if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)
          (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
          o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t))
}
var Uc = "right-scroll-bar-position"
, Vc = "width-before-scroll-bar"
, uR = "with-scroll-bars-hidden"
, cR = "--removed-body-scroll-bar-size";
function Sp(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t),
  e
}
function fR(e, t) {
  var n = C.useState(function() {
      return {
          value: e,
          callback: t,
          facade: {
              get current() {
                  return n.value
              },
              set current(r) {
                  var i = n.value;
                  i !== r && (n.value = r,
                  n.callback(r, i))
              }
          }
      }
  })[0];
  return n.callback = t,
  n.facade
}
var dR = typeof window < "u" ? C.useLayoutEffect : C.useEffect
, ew = new WeakMap;
function pR(e, t) {
  var n = fR(t || null, function(r) {
      return e.forEach(function(i) {
          return Sp(i, r)
      })
  });
  return dR(function() {
      var r = ew.get(n);
      if (r) {
          var i = new Set(r)
            , o = new Set(e)
            , s = n.current;
          i.forEach(function(a) {
              o.has(a) || Sp(a, null)
          }),
          o.forEach(function(a) {
              i.has(a) || Sp(a, s)
          })
      }
      ew.set(n, e)
  }, [e]),
  n
}
function hR(e) {
  return e
}
function mR(e, t) {
  t === void 0 && (t = hR);
  var n = []
    , r = !1
    , i = {
      read: function() {
          if (r)
              throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          return n.length ? n[n.length - 1] : e
      },
      useMedium: function(o) {
          var s = t(o, r);
          return n.push(s),
          function() {
              n = n.filter(function(a) {
                  return a !== s
              })
          }
      },
      assignSyncMedium: function(o) {
          for (r = !0; n.length; ) {
              var s = n;
              n = [],
              s.forEach(o)
          }
          n = {
              push: function(a) {
                  return o(a)
              },
              filter: function() {
                  return n
              }
          }
      },
      assignMedium: function(o) {
          r = !0;
          var s = [];
          if (n.length) {
              var a = n;
              n = [],
              a.forEach(o),
              s = n
          }
          var l = function() {
              var f = s;
              s = [],
              f.forEach(o)
          }
            , u = function() {
              return Promise.resolve().then(l)
          };
          u(),
          n = {
              push: function(f) {
                  s.push(f),
                  u()
              },
              filter: function(f) {
                  return s = s.filter(f),
                  n
              }
          }
      }
  };
  return i
}
function gR(e) {
  e === void 0 && (e = {});
  var t = mR(null);
  return t.options = ci({
      async: !0,
      ssr: !1
  }, e),
  t
}
var Zb = function(e) {
  var t = e.sideCar
    , n = Jb(e, ["sideCar"]);
  if (!t)
      throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
      throw new Error("Sidecar medium not found");
  return C.createElement(r, ci({}, n))
};
Zb.isSideCarExport = !0;
function vR(e, t) {
  return e.useMedium(t),
  Zb
}
var ex = gR()
, Ep = function() {}
, gd = C.forwardRef(function(e, t) {
  var n = C.useRef(null)
    , r = C.useState({
      onScrollCapture: Ep,
      onWheelCapture: Ep,
      onTouchMoveCapture: Ep
  })
    , i = r[0]
    , o = r[1]
    , s = e.forwardProps
    , a = e.children
    , l = e.className
    , u = e.removeScrollBar
    , f = e.enabled
    , d = e.shards
    , h = e.sideCar
    , g = e.noIsolation
    , _ = e.inert
    , m = e.allowPinchZoom
    , T = e.as
    , x = T === void 0 ? "div" : T
    , w = Jb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"])
    , S = h
    , b = pR([n, t])
    , k = ci(ci({}, w), i);
  return C.createElement(C.Fragment, null, f && C.createElement(S, {
      sideCar: ex,
      removeScrollBar: u,
      shards: d,
      noIsolation: g,
      inert: _,
      setCallbacks: o,
      allowPinchZoom: !!m,
      lockRef: n
  }), s ? C.cloneElement(C.Children.only(a), ci(ci({}, k), {
      ref: b
  })) : C.createElement(x, ci({}, k, {
      className: l,
      ref: b
  }), a))
});
gd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
gd.classNames = {
  fullWidth: Vc,
  zeroRight: Uc
};
var tw, yR = function() {
  if (tw)
      return tw;
  if (typeof __webpack_nonce__ < "u")
      return __webpack_nonce__
};
function wR() {
  if (!document)
      return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yR();
  return t && e.setAttribute("nonce", t),
  e
}
function _R(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function bR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e)
}
var xR = function() {
  var e = 0
    , t = null;
  return {
      add: function(n) {
          e == 0 && (t = wR()) && (_R(t, n),
          bR(t)),
          e++
      },
      remove: function() {
          e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t),
          t = null)
      }
  }
}
, SR = function() {
  var e = xR();
  return function(t, n) {
      C.useEffect(function() {
          return e.add(t),
          function() {
              e.remove()
          }
      }, [t && n])
  }
}
, tx = function() {
  var e = SR()
    , t = function(n) {
      var r = n.styles
        , i = n.dynamic;
      return e(r, i),
      null
  };
  return t
}
, ER = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}
, Tp = function(e) {
  return parseInt(e || "", 10) || 0
}
, TR = function(e) {
  var t = window.getComputedStyle(document.body)
    , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
    , r = t[e === "padding" ? "paddingTop" : "marginTop"]
    , i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tp(n), Tp(r), Tp(i)]
}
, CR = function(e) {
  if (e === void 0 && (e = "margin"),
  typeof window > "u")
      return ER;
  var t = TR(e)
    , n = document.documentElement.clientWidth
    , r = window.innerWidth;
  return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
  }
}
, kR = tx()
, wa = "data-scroll-locked"
, PR = function(e, t, n, r) {
  var i = e.left
    , o = e.top
    , s = e.right
    , a = e.gap;
  return n === void 0 && (n = "margin"),
  `
.`.concat(uR, ` {
 overflow: hidden `).concat(r, `;
 padding-right: `).concat(a, "px ").concat(r, `;
}
body[`).concat(wa, `] {
  overflow: hidden `).concat(r, `;
  overscroll-behavior: contain;
  `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
  padding-left: `.concat(i, `px;
  padding-top: `).concat(o, `px;
  padding-right: `).concat(s, `px;
  margin-left:0;
  margin-top:0;
  margin-right: `).concat(a, "px ").concat(r, `;
  `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
}

.`).concat(Uc, ` {
  right: `).concat(a, "px ").concat(r, `;
}

.`).concat(Vc, ` {
  margin-right: `).concat(a, "px ").concat(r, `;
}

.`).concat(Uc, " .").concat(Uc, ` {
  right: 0 `).concat(r, `;
}

.`).concat(Vc, " .").concat(Vc, ` {
  margin-right: 0 `).concat(r, `;
}

body[`).concat(wa, `] {
  `).concat(cR, ": ").concat(a, `px;
}
`)
}
, nw = function() {
  var e = parseInt(document.body.getAttribute(wa) || "0", 10);
  return isFinite(e) ? e : 0
}
, OR = function() {
  C.useEffect(function() {
      return document.body.setAttribute(wa, (nw() + 1).toString()),
      function() {
          var e = nw() - 1;
          e <= 0 ? document.body.removeAttribute(wa) : document.body.setAttribute(wa, e.toString())
      }
  }, [])
}
, AR = function(e) {
  var t = e.noRelative
    , n = e.noImportant
    , r = e.gapMode
    , i = r === void 0 ? "margin" : r;
  OR();
  var o = C.useMemo(function() {
      return CR(i)
  }, [i]);
  return C.createElement(kR, {
      styles: PR(o, !t, i, n ? "" : "!important")
  })
}
, nm = !1;
if (typeof window < "u")
  try {
      var cc = Object.defineProperty({}, "passive", {
          get: function() {
              return nm = !0,
              !0
          }
      });
      window.addEventListener("test", cc, cc),
      window.removeEventListener("test", cc, cc)
  } catch {
      nm = !1
  }
var Ns = nm ? {
  passive: !1
} : !1
, RR = function(e) {
  return e.tagName === "TEXTAREA"
}
, nx = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !RR(e) && n[t] === "visible")
}
, DR = function(e) {
  return nx(e, "overflowY")
}
, LR = function(e) {
  return nx(e, "overflowX")
}
, rw = function(e, t) {
  var n = t;
  do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = rx(e, n);
      if (r) {
          var i = ix(e, n)
            , o = i[1]
            , s = i[2];
          if (o > s)
              return !0
      }
      n = n.parentNode
  } while (n && n !== document.body);
  return !1
}
, MR = function(e) {
  var t = e.scrollTop
    , n = e.scrollHeight
    , r = e.clientHeight;
  return [t, n, r]
}
, IR = function(e) {
  var t = e.scrollLeft
    , n = e.scrollWidth
    , r = e.clientWidth;
  return [t, n, r]
}
, rx = function(e, t) {
  return e === "v" ? DR(t) : LR(t)
}
, ix = function(e, t) {
  return e === "v" ? MR(t) : IR(t)
}
, NR = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1
}
, FR = function(e, t, n, r, i) {
  var o = NR(e, window.getComputedStyle(t).direction)
    , s = o * r
    , a = n.target
    , l = t.contains(a)
    , u = !1
    , f = s > 0
    , d = 0
    , h = 0;
  do {
      var g = ix(e, a)
        , _ = g[0]
        , m = g[1]
        , T = g[2]
        , x = m - T - o * _;
      (_ || x) && rx(e, a) && (d += x,
      h += _),
      a = a.parentNode
  } while (!l && a !== document.body || l && (t.contains(a) || t === a));
  return (f && (i && d === 0 || !i && s > d) || !f && (i && h === 0 || !i && -s > h)) && (u = !0),
  u
}
, fc = function(e) {
  return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
, iw = function(e) {
  return [e.deltaX, e.deltaY]
}
, ow = function(e) {
  return e && "current"in e ? e.current : e
}
, jR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1]
}
, zR = function(e) {
  return `
.block-interactivity-`.concat(e, ` {pointer-events: none;}
.allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
, $R = 0
, Fs = [];
function BR(e) {
  var t = C.useRef([])
    , n = C.useRef([0, 0])
    , r = C.useRef()
    , i = C.useState($R++)[0]
    , o = C.useState(function() {
      return tx()
  })[0]
    , s = C.useRef(e);
  C.useEffect(function() {
      s.current = e
  }, [e]),
  C.useEffect(function() {
      if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(i));
          var m = lR([e.lockRef.current], (e.shards || []).map(ow), !0).filter(Boolean);
          return m.forEach(function(T) {
              return T.classList.add("allow-interactivity-".concat(i))
          }),
          function() {
              document.body.classList.remove("block-interactivity-".concat(i)),
              m.forEach(function(T) {
                  return T.classList.remove("allow-interactivity-".concat(i))
              })
          }
      }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = C.useCallback(function(m, T) {
      if ("touches"in m && m.touches.length === 2)
          return !s.current.allowPinchZoom;
      var x = fc(m), w = n.current, S = "deltaX"in m ? m.deltaX : w[0] - x[0], b = "deltaY"in m ? m.deltaY : w[1] - x[1], k, D = m.target, O = Math.abs(S) > Math.abs(b) ? "h" : "v";
      if ("touches"in m && O === "h" && D.type === "range")
          return !1;
      var R = rw(O, D);
      if (!R)
          return !0;
      if (R ? k = O : (k = O === "v" ? "h" : "v",
      R = rw(O, D)),
      !R)
          return !1;
      if (!r.current && "changedTouches"in m && (S || b) && (r.current = k),
      !k)
          return !0;
      var M = r.current || k;
      return FR(M, T, m, M === "h" ? S : b, !0)
  }, [])
    , l = C.useCallback(function(m) {
      var T = m;
      if (!(!Fs.length || Fs[Fs.length - 1] !== o)) {
          var x = "deltaY"in T ? iw(T) : fc(T)
            , w = t.current.filter(function(k) {
              return k.name === T.type && k.target === T.target && jR(k.delta, x)
          })[0];
          if (w && w.should) {
              T.cancelable && T.preventDefault();
              return
          }
          if (!w) {
              var S = (s.current.shards || []).map(ow).filter(Boolean).filter(function(k) {
                  return k.contains(T.target)
              })
                , b = S.length > 0 ? a(T, S[0]) : !s.current.noIsolation;
              b && T.cancelable && T.preventDefault()
          }
      }
  }, [])
    , u = C.useCallback(function(m, T, x, w) {
      var S = {
          name: m,
          delta: T,
          target: x,
          should: w
      };
      t.current.push(S),
      setTimeout(function() {
          t.current = t.current.filter(function(b) {
              return b !== S
          })
      }, 1)
  }, [])
    , f = C.useCallback(function(m) {
      n.current = fc(m),
      r.current = void 0
  }, [])
    , d = C.useCallback(function(m) {
      u(m.type, iw(m), m.target, a(m, e.lockRef.current))
  }, [])
    , h = C.useCallback(function(m) {
      u(m.type, fc(m), m.target, a(m, e.lockRef.current))
  }, []);
  C.useEffect(function() {
      return Fs.push(o),
      e.setCallbacks({
          onScrollCapture: d,
          onWheelCapture: d,
          onTouchMoveCapture: h
      }),
      document.addEventListener("wheel", l, Ns),
      document.addEventListener("touchmove", l, Ns),
      document.addEventListener("touchstart", f, Ns),
      function() {
          Fs = Fs.filter(function(m) {
              return m !== o
          }),
          document.removeEventListener("wheel", l, Ns),
          document.removeEventListener("touchmove", l, Ns),
          document.removeEventListener("touchstart", f, Ns)
      }
  }, []);
  var g = e.removeScrollBar
    , _ = e.inert;
  return C.createElement(C.Fragment, null, _ ? C.createElement(o, {
      styles: zR(i)
  }) : null, g ? C.createElement(AR, {
      gapMode: "margin"
  }) : null)
}
const UR = vR(ex, BR);
var ox = C.forwardRef(function(e, t) {
  return C.createElement(gd, ci({}, e, {
      ref: t,
      sideCar: UR
  }))
});
ox.classNames = gd.classNames;
const VR = ox;
var HR = function(e) {
  if (typeof document > "u")
      return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body
}
, js = new WeakMap
, dc = new WeakMap
, pc = {}
, Cp = 0
, sx = function(e) {
  return e && (e.host || sx(e.parentNode))
}
, WR = function(e, t) {
  return t.map(function(n) {
      if (e.contains(n))
          return n;
      var r = sx(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
      null)
  }).filter(function(n) {
      return !!n
  })
}
, qR = function(e, t, n, r) {
  var i = WR(t, Array.isArray(e) ? e : [e]);
  pc[n] || (pc[n] = new WeakMap);
  var o = pc[n]
    , s = []
    , a = new Set
    , l = new Set(i)
    , u = function(d) {
      !d || a.has(d) || (a.add(d),
      u(d.parentNode))
  };
  i.forEach(u);
  var f = function(d) {
      !d || l.has(d) || Array.prototype.forEach.call(d.children, function(h) {
          if (a.has(h))
              f(h);
          else
              try {
                  var g = h.getAttribute(r)
                    , _ = g !== null && g !== "false"
                    , m = (js.get(h) || 0) + 1
                    , T = (o.get(h) || 0) + 1;
                  js.set(h, m),
                  o.set(h, T),
                  s.push(h),
                  m === 1 && _ && dc.set(h, !0),
                  T === 1 && h.setAttribute(n, "true"),
                  _ || h.setAttribute(r, "true")
              } catch (x) {
                  console.error("aria-hidden: cannot operate on ", h, x)
              }
      })
  };
  return f(t),
  a.clear(),
  Cp++,
  function() {
      s.forEach(function(d) {
          var h = js.get(d) - 1
            , g = o.get(d) - 1;
          js.set(d, h),
          o.set(d, g),
          h || (dc.has(d) || d.removeAttribute(r),
          dc.delete(d)),
          g || d.removeAttribute(n)
      }),
      Cp--,
      Cp || (js = new WeakMap,
      js = new WeakMap,
      dc = new WeakMap,
      pc = {})
  }
}
, YR = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e])
    , i = t || HR(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))),
  qR(r, i, n, "aria-hidden")) : function() {
      return null
  }
};
const ax = "Dialog"
, [lx,H5] = LA(ax)
, [GR,ii] = lx(ax)
, XR = e => {
  const {__scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: o, modal: s=!0} = e
    , a = C.useRef(null)
    , l = C.useRef(null)
    , [u=!1,f] = FA({
      prop: r,
      defaultProp: i,
      onChange: o
  });
  return C.createElement(GR, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: wp(),
      titleId: wp(),
      descriptionId: wp(),
      open: u,
      onOpenChange: f,
      onOpenToggle: C.useCallback( () => f(d => !d), [f]),
      modal: s
  }, n)
}
, KR = "DialogTrigger"
, QR = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , i = ii(KR, n)
    , o = qa(t, i.triggerRef);
  return C.createElement(Fo.button, on({
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": i.open,
      "aria-controls": i.contentId,
      "data-state": zg(i.open)
  }, r, {
      ref: o,
      onClick: Eo(e.onClick, i.onOpenToggle)
  }))
}
)
, ux = "DialogPortal"
, [JR,cx] = lx(ux, {
  forceMount: void 0
})
, ZR = e => {
  const {__scopeDialog: t, forceMount: n, children: r, container: i} = e
    , o = ii(ux, t);
  return C.createElement(JR, {
      scope: t,
      forceMount: n
  }, C.Children.map(r, s => C.createElement(md, {
      present: n || o.open
  }, C.createElement(iR, {
      asChild: !0,
      container: i
  }, s))))
}
, rm = "DialogOverlay"
, eD = C.forwardRef( (e, t) => {
  const n = cx(rm, e.__scopeDialog)
    , {forceMount: r=n.forceMount, ...i} = e
    , o = ii(rm, e.__scopeDialog);
  return o.modal ? C.createElement(md, {
      present: r || o.open
  }, C.createElement(tD, on({}, i, {
      ref: t
  }))) : null
}
)
, tD = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , i = ii(rm, n);
  return C.createElement(VR, {
      as: jg,
      allowPinchZoom: !0,
      shards: [i.contentRef]
  }, C.createElement(Fo.div, on({
      "data-state": zg(i.open)
  }, r, {
      ref: t,
      style: {
          pointerEvents: "auto",
          ...r.style
      }
  })))
}
)
, gu = "DialogContent"
, nD = C.forwardRef( (e, t) => {
  const n = cx(gu, e.__scopeDialog)
    , {forceMount: r=n.forceMount, ...i} = e
    , o = ii(gu, e.__scopeDialog);
  return C.createElement(md, {
      present: r || o.open
  }, o.modal ? C.createElement(rD, on({}, i, {
      ref: t
  })) : C.createElement(iD, on({}, i, {
      ref: t
  })))
}
)
, rD = C.forwardRef( (e, t) => {
  const n = ii(gu, e.__scopeDialog)
    , r = C.useRef(null)
    , i = qa(t, n.contentRef, r);
  return C.useEffect( () => {
      const o = r.current;
      if (o)
          return YR(o)
  }
  , []),
  C.createElement(fx, on({}, e, {
      ref: i,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: Eo(e.onCloseAutoFocus, o => {
          var s;
          o.preventDefault(),
          (s = n.triggerRef.current) === null || s === void 0 || s.focus()
      }
      ),
      onPointerDownOutside: Eo(e.onPointerDownOutside, o => {
          const s = o.detail.originalEvent
            , a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && o.preventDefault()
      }
      ),
      onFocusOutside: Eo(e.onFocusOutside, o => o.preventDefault())
  }))
}
)
, iD = C.forwardRef( (e, t) => {
  const n = ii(gu, e.__scopeDialog)
    , r = C.useRef(!1)
    , i = C.useRef(!1);
  return C.createElement(fx, on({}, e, {
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: o => {
          var s;
          if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, o),
          !o.defaultPrevented) {
              var a;
              r.current || (a = n.triggerRef.current) === null || a === void 0 || a.focus(),
              o.preventDefault()
          }
          r.current = !1,
          i.current = !1
      }
      ,
      onInteractOutside: o => {
          var s, a;
          (s = e.onInteractOutside) === null || s === void 0 || s.call(e, o),
          o.defaultPrevented || (r.current = !0,
          o.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const l = o.target;
          ((a = n.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(l)) && o.preventDefault(),
          o.detail.originalEvent.type === "focusin" && i.current && o.preventDefault()
      }
  }))
}
)
, fx = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: o, ...s} = e
    , a = ii(gu, n)
    , l = C.useRef(null)
    , u = qa(t, l);
  return aR(),
  C.createElement(C.Fragment, null, C.createElement(QA, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: i,
      onUnmountAutoFocus: o
  }, C.createElement(GA, on({
      role: "dialog",
      id: a.contentId,
      "aria-describedby": a.descriptionId,
      "aria-labelledby": a.titleId,
      "data-state": zg(a.open)
  }, s, {
      ref: u,
      onDismiss: () => a.onOpenChange(!1)
  }))), !1)
}
)
, oD = "DialogTitle"
, sD = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , i = ii(oD, n);
  return C.createElement(Fo.h2, on({
      id: i.titleId
  }, r, {
      ref: t
  }))
}
)
, aD = "DialogDescription"
, lD = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , i = ii(aD, n);
  return C.createElement(Fo.p, on({
      id: i.descriptionId
  }, r, {
      ref: t
  }))
}
)
, uD = "DialogClose"
, cD = C.forwardRef( (e, t) => {
  const {__scopeDialog: n, ...r} = e
    , i = ii(uD, n);
  return C.createElement(Fo.button, on({
      type: "button"
  }, r, {
      ref: t,
      onClick: Eo(e.onClick, () => i.onOpenChange(!1))
  }))
}
);
function zg(e) {
  return e ? "open" : "closed"
}
const fD = XR
, dD = QR
, pD = ZR
, dx = eD
, px = nD
, hx = sD
, mx = lD
, hD = cD;
function gx(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
      r += e;
  else if (typeof e == "object")
      if (Array.isArray(e)) {
          var i = e.length;
          for (t = 0; t < i; t++)
              e[t] && (n = gx(e[t])) && (r && (r += " "),
              r += n)
      } else
          for (n in e)
              e[n] && (r && (r += " "),
              r += n);
  return r
}
function mD() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
      (e = arguments[n]) && (t = gx(e)) && (r && (r += " "),
      r += t);
  return r
}
const $g = "-";
function gD(e) {
  const t = yD(e)
    , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
  function i(s) {
      const a = s.split($g);
      return a[0] === "" && a.length !== 1 && a.shift(),
      vx(a, t) || vD(s)
  }
  function o(s, a) {
      const l = n[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l
  }
  return {
      getClassGroupId: i,
      getConflictingClassGroupIds: o
  }
}
function vx(e, t) {
  var s;
  if (e.length === 0)
      return t.classGroupId;
  const n = e[0]
    , r = t.nextPart.get(n)
    , i = r ? vx(e.slice(1), r) : void 0;
  if (i)
      return i;
  if (t.validators.length === 0)
      return;
  const o = e.join($g);
  return (s = t.validators.find( ({validator: a}) => a(o))) == null ? void 0 : s.classGroupId
}
const sw = /^\[(.+)\]$/;
function vD(e) {
  if (sw.test(e)) {
      const t = sw.exec(e)[1]
        , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n)
          return "arbitrary.." + n
  }
}
function yD(e) {
  const {theme: t, prefix: n} = e
    , r = {
      nextPart: new Map,
      validators: []
  };
  return _D(Object.entries(e.classGroups), n).forEach( ([o,s]) => {
      im(s, r, o, t)
  }
  ),
  r
}
function im(e, t, n, r) {
  e.forEach(i => {
      if (typeof i == "string") {
          const o = i === "" ? t : aw(t, i);
          o.classGroupId = n;
          return
      }
      if (typeof i == "function") {
          if (wD(i)) {
              im(i(r), t, n, r);
              return
          }
          t.validators.push({
              validator: i,
              classGroupId: n
          });
          return
      }
      Object.entries(i).forEach( ([o,s]) => {
          im(s, aw(t, o), n, r)
      }
      )
  }
  )
}
function aw(e, t) {
  let n = e;
  return t.split($g).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
          nextPart: new Map,
          validators: []
      }),
      n = n.nextPart.get(r)
  }
  ),
  n
}
function wD(e) {
  return e.isThemeGetter
}
function _D(e, t) {
  return t ? e.map( ([n,r]) => {
      const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([s,a]) => [t + s, a])) : o);
      return [n, i]
  }
  ) : e
}
function bD(e) {
  if (e < 1)
      return {
          get: () => {}
          ,
          set: () => {}
      };
  let t = 0
    , n = new Map
    , r = new Map;
  function i(o, s) {
      n.set(o, s),
      t++,
      t > e && (t = 0,
      r = n,
      n = new Map)
  }
  return {
      get(o) {
          let s = n.get(o);
          if (s !== void 0)
              return s;
          if ((s = r.get(o)) !== void 0)
              return i(o, s),
              s
      },
      set(o, s) {
          n.has(o) ? n.set(o, s) : i(o, s)
      }
  }
}
const yx = "!";
function xD(e) {
  const t = e.separator
    , n = t.length === 1
    , r = t[0]
    , i = t.length;
  return function(s) {
      const a = [];
      let l = 0, u = 0, f;
      for (let m = 0; m < s.length; m++) {
          let T = s[m];
          if (l === 0) {
              if (T === r && (n || s.slice(m, m + i) === t)) {
                  a.push(s.slice(u, m)),
                  u = m + i;
                  continue
              }
              if (T === "/") {
                  f = m;
                  continue
              }
          }
          T === "[" ? l++ : T === "]" && l--
      }
      const d = a.length === 0 ? s : s.substring(u)
        , h = d.startsWith(yx)
        , g = h ? d.substring(1) : d
        , _ = f && f > u ? f - u : void 0;
      return {
          modifiers: a,
          hasImportantModifier: h,
          baseClassName: g,
          maybePostfixModifierPosition: _
      }
  }
}
function SD(e) {
  if (e.length <= 1)
      return e;
  const t = [];
  let n = [];
  return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r),
      n = []) : n.push(r)
  }
  ),
  t.push(...n.sort()),
  t
}
function ED(e) {
  return {
      cache: bD(e.cacheSize),
      splitModifiers: xD(e),
      ...gD(e)
  }
}
const TD = /\s+/;
function CD(e, t) {
  const {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
    , o = new Set;
  return e.trim().split(TD).map(s => {
      const {modifiers: a, hasImportantModifier: l, baseClassName: u, maybePostfixModifierPosition: f} = n(s);
      let d = r(f ? u.substring(0, f) : u)
        , h = !!f;
      if (!d) {
          if (!f)
              return {
                  isTailwindClass: !1,
                  originalClassName: s
              };
          if (d = r(u),
          !d)
              return {
                  isTailwindClass: !1,
                  originalClassName: s
              };
          h = !1
      }
      const g = SD(a).join(":");
      return {
          isTailwindClass: !0,
          modifierId: l ? g + yx : g,
          classGroupId: d,
          originalClassName: s,
          hasPostfixModifier: h
      }
  }
  ).reverse().filter(s => {
      if (!s.isTailwindClass)
          return !0;
      const {modifierId: a, classGroupId: l, hasPostfixModifier: u} = s
        , f = a + l;
      return o.has(f) ? !1 : (o.add(f),
      i(l, u).forEach(d => o.add(a + d)),
      !0)
  }
  ).reverse().map(s => s.originalClassName).join(" ")
}
function kD() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
      (t = arguments[e++]) && (n = wx(t)) && (r && (r += " "),
      r += n);
  return r
}
function wx(e) {
  if (typeof e == "string")
      return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
      e[r] && (t = wx(e[r])) && (n && (n += " "),
      n += t);
  return n
}
function PD(e, ...t) {
  let n, r, i, o = s;
  function s(l) {
      const u = t.reduce( (f, d) => d(f), e());
      return n = ED(u),
      r = n.cache.get,
      i = n.cache.set,
      o = a,
      a(l)
  }
  function a(l) {
      const u = r(l);
      if (u)
          return u;
      const f = CD(l, n);
      return i(l, f),
      f
  }
  return function() {
      return o(kD.apply(null, arguments))
  }
}
function yt(e) {
  const t = n => n[e] || [];
  return t.isThemeGetter = !0,
  t
}
const _x = /^\[(?:([a-z-]+):)?(.+)\]$/i
, OD = /^\d+\/\d+$/
, AD = new Set(["px", "full", "screen"])
, RD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
, DD = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
, LD = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
, MD = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
, ID = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ei(e) {
  return Jo(e) || AD.has(e) || OD.test(e)
}
function Ji(e) {
  return Ya(e, "length", VD)
}
function Jo(e) {
  return !!e && !Number.isNaN(Number(e))
}
function hc(e) {
  return Ya(e, "number", Jo)
}
function pl(e) {
  return !!e && Number.isInteger(Number(e))
}
function ND(e) {
  return e.endsWith("%") && Jo(e.slice(0, -1))
}
function De(e) {
  return _x.test(e)
}
function Zi(e) {
  return RD.test(e)
}
const FD = new Set(["length", "size", "percentage"]);
function jD(e) {
  return Ya(e, FD, bx)
}
function zD(e) {
  return Ya(e, "position", bx)
}
const $D = new Set(["image", "url"]);
function BD(e) {
  return Ya(e, $D, WD)
}
function UD(e) {
  return Ya(e, "", HD)
}
function hl() {
  return !0
}
function Ya(e, t, n) {
  const r = _x.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
function VD(e) {
  return DD.test(e) && !LD.test(e)
}
function bx() {
  return !1
}
function HD(e) {
  return MD.test(e)
}
function WD(e) {
  return ID.test(e)
}
function qD() {
  const e = yt("colors")
    , t = yt("spacing")
    , n = yt("blur")
    , r = yt("brightness")
    , i = yt("borderColor")
    , o = yt("borderRadius")
    , s = yt("borderSpacing")
    , a = yt("borderWidth")
    , l = yt("contrast")
    , u = yt("grayscale")
    , f = yt("hueRotate")
    , d = yt("invert")
    , h = yt("gap")
    , g = yt("gradientColorStops")
    , _ = yt("gradientColorStopPositions")
    , m = yt("inset")
    , T = yt("margin")
    , x = yt("opacity")
    , w = yt("padding")
    , S = yt("saturate")
    , b = yt("scale")
    , k = yt("sepia")
    , D = yt("skew")
    , O = yt("space")
    , R = yt("translate")
    , M = () => ["auto", "contain", "none"]
    , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
    , Q = () => ["auto", De, t]
    , I = () => [De, t]
    , Z = () => ["", Ei, Ji]
    , te = () => ["auto", Jo, De]
    , ue = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
    , ae = () => ["solid", "dashed", "dotted", "double", "none"]
    , oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
    , L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
    , K = () => ["", "0", De]
    , A = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
    , me = () => [Jo, hc]
    , Te = () => [Jo, De];
  return {
      cacheSize: 500,
      separator: ":",
      theme: {
          colors: [hl],
          spacing: [Ei, Ji],
          blur: ["none", "", Zi, De],
          brightness: me(),
          borderColor: [e],
          borderRadius: ["none", "", "full", Zi, De],
          borderSpacing: I(),
          borderWidth: Z(),
          contrast: me(),
          grayscale: K(),
          hueRotate: Te(),
          invert: K(),
          gap: I(),
          gradientColorStops: [e],
          gradientColorStopPositions: [ND, Ji],
          inset: Q(),
          margin: Q(),
          opacity: me(),
          padding: I(),
          saturate: me(),
          scale: me(),
          sepia: K(),
          skew: Te(),
          space: I(),
          translate: I()
      },
      classGroups: {
          aspect: [{
              aspect: ["auto", "square", "video", De]
          }],
          container: ["container"],
          columns: [{
              columns: [Zi]
          }],
          "break-after": [{
              "break-after": A()
          }],
          "break-before": [{
              "break-before": A()
          }],
          "break-inside": [{
              "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
          }],
          "box-decoration": [{
              "box-decoration": ["slice", "clone"]
          }],
          box: [{
              box: ["border", "content"]
          }],
          display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
          float: [{
              float: ["right", "left", "none", "start", "end"]
          }],
          clear: [{
              clear: ["left", "right", "both", "none", "start", "end"]
          }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [{
              object: ["contain", "cover", "fill", "none", "scale-down"]
          }],
          "object-position": [{
              object: [...ue(), De]
          }],
          overflow: [{
              overflow: j()
          }],
          "overflow-x": [{
              "overflow-x": j()
          }],
          "overflow-y": [{
              "overflow-y": j()
          }],
          overscroll: [{
              overscroll: M()
          }],
          "overscroll-x": [{
              "overscroll-x": M()
          }],
          "overscroll-y": [{
              "overscroll-y": M()
          }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{
              inset: [m]
          }],
          "inset-x": [{
              "inset-x": [m]
          }],
          "inset-y": [{
              "inset-y": [m]
          }],
          start: [{
              start: [m]
          }],
          end: [{
              end: [m]
          }],
          top: [{
              top: [m]
          }],
          right: [{
              right: [m]
          }],
          bottom: [{
              bottom: [m]
          }],
          left: [{
              left: [m]
          }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{
              z: ["auto", pl, De]
          }],
          basis: [{
              basis: Q()
          }],
          "flex-direction": [{
              flex: ["row", "row-reverse", "col", "col-reverse"]
          }],
          "flex-wrap": [{
              flex: ["wrap", "wrap-reverse", "nowrap"]
          }],
          flex: [{
              flex: ["1", "auto", "initial", "none", De]
          }],
          grow: [{
              grow: K()
          }],
          shrink: [{
              shrink: K()
          }],
          order: [{
              order: ["first", "last", "none", pl, De]
          }],
          "grid-cols": [{
              "grid-cols": [hl]
          }],
          "col-start-end": [{
              col: ["auto", {
                  span: ["full", pl, De]
              }, De]
          }],
          "col-start": [{
              "col-start": te()
          }],
          "col-end": [{
              "col-end": te()
          }],
          "grid-rows": [{
              "grid-rows": [hl]
          }],
          "row-start-end": [{
              row: ["auto", {
                  span: [pl, De]
              }, De]
          }],
          "row-start": [{
              "row-start": te()
          }],
          "row-end": [{
              "row-end": te()
          }],
          "grid-flow": [{
              "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
          }],
          "auto-cols": [{
              "auto-cols": ["auto", "min", "max", "fr", De]
          }],
          "auto-rows": [{
              "auto-rows": ["auto", "min", "max", "fr", De]
          }],
          gap: [{
              gap: [h]
          }],
          "gap-x": [{
              "gap-x": [h]
          }],
          "gap-y": [{
              "gap-y": [h]
          }],
          "justify-content": [{
              justify: ["normal", ...L()]
          }],
          "justify-items": [{
              "justify-items": ["start", "end", "center", "stretch"]
          }],
          "justify-self": [{
              "justify-self": ["auto", "start", "end", "center", "stretch"]
          }],
          "align-content": [{
              content: ["normal", ...L(), "baseline"]
          }],
          "align-items": [{
              items: ["start", "end", "center", "baseline", "stretch"]
          }],
          "align-self": [{
              self: ["auto", "start", "end", "center", "stretch", "baseline"]
          }],
          "place-content": [{
              "place-content": [...L(), "baseline"]
          }],
          "place-items": [{
              "place-items": ["start", "end", "center", "baseline", "stretch"]
          }],
          "place-self": [{
              "place-self": ["auto", "start", "end", "center", "stretch"]
          }],
          p: [{
              p: [w]
          }],
          px: [{
              px: [w]
          }],
          py: [{
              py: [w]
          }],
          ps: [{
              ps: [w]
          }],
          pe: [{
              pe: [w]
          }],
          pt: [{
              pt: [w]
          }],
          pr: [{
              pr: [w]
          }],
          pb: [{
              pb: [w]
          }],
          pl: [{
              pl: [w]
          }],
          m: [{
              m: [T]
          }],
          mx: [{
              mx: [T]
          }],
          my: [{
              my: [T]
          }],
          ms: [{
              ms: [T]
          }],
          me: [{
              me: [T]
          }],
          mt: [{
              mt: [T]
          }],
          mr: [{
              mr: [T]
          }],
          mb: [{
              mb: [T]
          }],
          ml: [{
              ml: [T]
          }],
          "space-x": [{
              "space-x": [O]
          }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{
              "space-y": [O]
          }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{
              w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", De, t]
          }],
          "min-w": [{
              "min-w": [De, t, "min", "max", "fit"]
          }],
          "max-w": [{
              "max-w": [De, t, "none", "full", "min", "max", "fit", "prose", {
                  screen: [Zi]
              }, Zi]
          }],
          h: [{
              h: [De, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          "min-h": [{
              "min-h": [De, t, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          "max-h": [{
              "max-h": [De, t, "min", "max", "fit", "svh", "lvh", "dvh"]
          }],
          size: [{
              size: [De, t, "auto", "min", "max", "fit"]
          }],
          "font-size": [{
              text: ["base", Zi, Ji]
          }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [{
              font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hc]
          }],
          "font-family": [{
              font: [hl]
          }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [{
              tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", De]
          }],
          "line-clamp": [{
              "line-clamp": ["none", Jo, hc]
          }],
          leading: [{
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ei, De]
          }],
          "list-image": [{
              "list-image": ["none", De]
          }],
          "list-style-type": [{
              list: ["none", "disc", "decimal", De]
          }],
          "list-style-position": [{
              list: ["inside", "outside"]
          }],
          "placeholder-color": [{
              placeholder: [e]
          }],
          "placeholder-opacity": [{
              "placeholder-opacity": [x]
          }],
          "text-alignment": [{
              text: ["left", "center", "right", "justify", "start", "end"]
          }],
          "text-color": [{
              text: [e]
          }],
          "text-opacity": [{
              "text-opacity": [x]
          }],
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          "text-decoration-style": [{
              decoration: [...ae(), "wavy"]
          }],
          "text-decoration-thickness": [{
              decoration: ["auto", "from-font", Ei, Ji]
          }],
          "underline-offset": [{
              "underline-offset": ["auto", Ei, De]
          }],
          "text-decoration-color": [{
              decoration: [e]
          }],
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{
              text: ["wrap", "nowrap", "balance", "pretty"]
          }],
          indent: [{
              indent: I()
          }],
          "vertical-align": [{
              align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", De]
          }],
          whitespace: [{
              whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
          }],
          break: [{
              break: ["normal", "words", "all", "keep"]
          }],
          hyphens: [{
              hyphens: ["none", "manual", "auto"]
          }],
          content: [{
              content: ["none", De]
          }],
          "bg-attachment": [{
              bg: ["fixed", "local", "scroll"]
          }],
          "bg-clip": [{
              "bg-clip": ["border", "padding", "content", "text"]
          }],
          "bg-opacity": [{
              "bg-opacity": [x]
          }],
          "bg-origin": [{
              "bg-origin": ["border", "padding", "content"]
          }],
          "bg-position": [{
              bg: [...ue(), zD]
          }],
          "bg-repeat": [{
              bg: ["no-repeat", {
                  repeat: ["", "x", "y", "round", "space"]
              }]
          }],
          "bg-size": [{
              bg: ["auto", "cover", "contain", jD]
          }],
          "bg-image": [{
              bg: ["none", {
                  "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
              }, BD]
          }],
          "bg-color": [{
              bg: [e]
          }],
          "gradient-from-pos": [{
              from: [_]
          }],
          "gradient-via-pos": [{
              via: [_]
          }],
          "gradient-to-pos": [{
              to: [_]
          }],
          "gradient-from": [{
              from: [g]
          }],
          "gradient-via": [{
              via: [g]
          }],
          "gradient-to": [{
              to: [g]
          }],
          rounded: [{
              rounded: [o]
          }],
          "rounded-s": [{
              "rounded-s": [o]
          }],
          "rounded-e": [{
              "rounded-e": [o]
          }],
          "rounded-t": [{
              "rounded-t": [o]
          }],
          "rounded-r": [{
              "rounded-r": [o]
          }],
          "rounded-b": [{
              "rounded-b": [o]
          }],
          "rounded-l": [{
              "rounded-l": [o]
          }],
          "rounded-ss": [{
              "rounded-ss": [o]
          }],
          "rounded-se": [{
              "rounded-se": [o]
          }],
          "rounded-ee": [{
              "rounded-ee": [o]
          }],
          "rounded-es": [{
              "rounded-es": [o]
          }],
          "rounded-tl": [{
              "rounded-tl": [o]
          }],
          "rounded-tr": [{
              "rounded-tr": [o]
          }],
          "rounded-br": [{
              "rounded-br": [o]
          }],
          "rounded-bl": [{
              "rounded-bl": [o]
          }],
          "border-w": [{
              border: [a]
          }],
          "border-w-x": [{
              "border-x": [a]
          }],
          "border-w-y": [{
              "border-y": [a]
          }],
          "border-w-s": [{
              "border-s": [a]
          }],
          "border-w-e": [{
              "border-e": [a]
          }],
          "border-w-t": [{
              "border-t": [a]
          }],
          "border-w-r": [{
              "border-r": [a]
          }],
          "border-w-b": [{
              "border-b": [a]
          }],
          "border-w-l": [{
              "border-l": [a]
          }],
          "border-opacity": [{
              "border-opacity": [x]
          }],
          "border-style": [{
              border: [...ae(), "hidden"]
          }],
          "divide-x": [{
              "divide-x": [a]
          }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{
              "divide-y": [a]
          }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{
              "divide-opacity": [x]
          }],
          "divide-style": [{
              divide: ae()
          }],
          "border-color": [{
              border: [i]
          }],
          "border-color-x": [{
              "border-x": [i]
          }],
          "border-color-y": [{
              "border-y": [i]
          }],
          "border-color-t": [{
              "border-t": [i]
          }],
          "border-color-r": [{
              "border-r": [i]
          }],
          "border-color-b": [{
              "border-b": [i]
          }],
          "border-color-l": [{
              "border-l": [i]
          }],
          "divide-color": [{
              divide: [i]
          }],
          "outline-style": [{
              outline: ["", ...ae()]
          }],
          "outline-offset": [{
              "outline-offset": [Ei, De]
          }],
          "outline-w": [{
              outline: [Ei, Ji]
          }],
          "outline-color": [{
              outline: [e]
          }],
          "ring-w": [{
              ring: Z()
          }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{
              ring: [e]
          }],
          "ring-opacity": [{
              "ring-opacity": [x]
          }],
          "ring-offset-w": [{
              "ring-offset": [Ei, Ji]
          }],
          "ring-offset-color": [{
              "ring-offset": [e]
          }],
          shadow: [{
              shadow: ["", "inner", "none", Zi, UD]
          }],
          "shadow-color": [{
              shadow: [hl]
          }],
          opacity: [{
              opacity: [x]
          }],
          "mix-blend": [{
              "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
          }],
          "bg-blend": [{
              "bg-blend": oe()
          }],
          filter: [{
              filter: ["", "none"]
          }],
          blur: [{
              blur: [n]
          }],
          brightness: [{
              brightness: [r]
          }],
          contrast: [{
              contrast: [l]
          }],
          "drop-shadow": [{
              "drop-shadow": ["", "none", Zi, De]
          }],
          grayscale: [{
              grayscale: [u]
          }],
          "hue-rotate": [{
              "hue-rotate": [f]
          }],
          invert: [{
              invert: [d]
          }],
          saturate: [{
              saturate: [S]
          }],
          sepia: [{
              sepia: [k]
          }],
          "backdrop-filter": [{
              "backdrop-filter": ["", "none"]
          }],
          "backdrop-blur": [{
              "backdrop-blur": [n]
          }],
          "backdrop-brightness": [{
              "backdrop-brightness": [r]
          }],
          "backdrop-contrast": [{
              "backdrop-contrast": [l]
          }],
          "backdrop-grayscale": [{
              "backdrop-grayscale": [u]
          }],
          "backdrop-hue-rotate": [{
              "backdrop-hue-rotate": [f]
          }],
          "backdrop-invert": [{
              "backdrop-invert": [d]
          }],
          "backdrop-opacity": [{
              "backdrop-opacity": [x]
          }],
          "backdrop-saturate": [{
              "backdrop-saturate": [S]
          }],
          "backdrop-sepia": [{
              "backdrop-sepia": [k]
          }],
          "border-collapse": [{
              border: ["collapse", "separate"]
          }],
          "border-spacing": [{
              "border-spacing": [s]
          }],
          "border-spacing-x": [{
              "border-spacing-x": [s]
          }],
          "border-spacing-y": [{
              "border-spacing-y": [s]
          }],
          "table-layout": [{
              table: ["auto", "fixed"]
          }],
          caption: [{
              caption: ["top", "bottom"]
          }],
          transition: [{
              transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", De]
          }],
          duration: [{
              duration: Te()
          }],
          ease: [{
              ease: ["linear", "in", "out", "in-out", De]
          }],
          delay: [{
              delay: Te()
          }],
          animate: [{
              animate: ["none", "spin", "ping", "pulse", "bounce", De]
          }],
          transform: [{
              transform: ["", "gpu", "none"]
          }],
          scale: [{
              scale: [b]
          }],
          "scale-x": [{
              "scale-x": [b]
          }],
          "scale-y": [{
              "scale-y": [b]
          }],
          rotate: [{
              rotate: [pl, De]
          }],
          "translate-x": [{
              "translate-x": [R]
          }],
          "translate-y": [{
              "translate-y": [R]
          }],
          "skew-x": [{
              "skew-x": [D]
          }],
          "skew-y": [{
              "skew-y": [D]
          }],
          "transform-origin": [{
              origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", De]
          }],
          accent: [{
              accent: ["auto", e]
          }],
          appearance: [{
              appearance: ["none", "auto"]
          }],
          cursor: [{
              cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", De]
          }],
          "caret-color": [{
              caret: [e]
          }],
          "pointer-events": [{
              "pointer-events": ["none", "auto"]
          }],
          resize: [{
              resize: ["none", "y", "x", ""]
          }],
          "scroll-behavior": [{
              scroll: ["auto", "smooth"]
          }],
          "scroll-m": [{
              "scroll-m": I()
          }],
          "scroll-mx": [{
              "scroll-mx": I()
          }],
          "scroll-my": [{
              "scroll-my": I()
          }],
          "scroll-ms": [{
              "scroll-ms": I()
          }],
          "scroll-me": [{
              "scroll-me": I()
          }],
          "scroll-mt": [{
              "scroll-mt": I()
          }],
          "scroll-mr": [{
              "scroll-mr": I()
          }],
          "scroll-mb": [{
              "scroll-mb": I()
          }],
          "scroll-ml": [{
              "scroll-ml": I()
          }],
          "scroll-p": [{
              "scroll-p": I()
          }],
          "scroll-px": [{
              "scroll-px": I()
          }],
          "scroll-py": [{
              "scroll-py": I()
          }],
          "scroll-ps": [{
              "scroll-ps": I()
          }],
          "scroll-pe": [{
              "scroll-pe": I()
          }],
          "scroll-pt": [{
              "scroll-pt": I()
          }],
          "scroll-pr": [{
              "scroll-pr": I()
          }],
          "scroll-pb": [{
              "scroll-pb": I()
          }],
          "scroll-pl": [{
              "scroll-pl": I()
          }],
          "snap-align": [{
              snap: ["start", "end", "center", "align-none"]
          }],
          "snap-stop": [{
              snap: ["normal", "always"]
          }],
          "snap-type": [{
              snap: ["none", "x", "y", "both"]
          }],
          "snap-strictness": [{
              snap: ["mandatory", "proximity"]
          }],
          touch: [{
              touch: ["auto", "none", "manipulation"]
          }],
          "touch-x": [{
              "touch-pan": ["x", "left", "right"]
          }],
          "touch-y": [{
              "touch-pan": ["y", "up", "down"]
          }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{
              select: ["none", "text", "all", "auto"]
          }],
          "will-change": [{
              "will-change": ["auto", "scroll", "contents", "transform", De]
          }],
          fill: [{
              fill: [e, "none"]
          }],
          "stroke-w": [{
              stroke: [Ei, Ji, hc]
          }],
          stroke: [{
              stroke: [e, "none"]
          }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{
              "forced-color-adjust": ["auto", "none"]
          }]
      },
      conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
          "font-size": ["leading"]
      }
  }
}
const YD = PD(qD);
function Lu(...e) {
  return YD(mD(e))
}
const GD = fD
, XD = dD
, KD = pD
, xx = C.forwardRef( ({className: e, ...t}, n) => V.jsx(dx, {
  ref: n,
  className: Lu("fixed inset-0  bg-black/90 opacity-5  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
  ...t
}));
xx.displayName = dx.displayName;
const Sx = C.forwardRef( ({className: e, children: t, ...n}, r) => V.jsxs(KD, {
  children: [V.jsx(xx, {}), V.jsxs(px, {
      ref: r,
      className: Lu("fixed left-[50%] top-[50%] z-50 grid w-full md:max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
      ...n,
      children: [t, V.jsxs(hD, {
          className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          children: [V.jsx("span", {
              children: "Close"
          }), V.jsx("span", {
              className: "sr-only",
              children: "Close"
          })]
      })]
  })]
}));
Sx.displayName = px.displayName;
const Ex = ({className: e, ...t}) => V.jsx("div", {
  className: Lu("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
Ex.displayName = "DialogHeader";
const Tx = C.forwardRef( ({className: e, ...t}, n) => V.jsx(hx, {
  ref: n,
  className: Lu("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
Tx.displayName = hx.displayName;
const Cx = C.forwardRef( ({className: e, ...t}, n) => V.jsx(mx, {
  ref: n,
  className: Lu("text-sm text-muted-foreground", e),
  ...t
}));
Cx.displayName = mx.displayName;
const QD = "/src/assets/OffShoreItSupport-edb4db12.svg"
, JD = "/src/assets/GlobalReach-eab801cc.svg"
, ZD = "/src/assets/BudgetSaving-3dc36810.svg"
, eL = "/src/assets/Friendly-b47d837f.svg"
, tL = "/src/assets/TopTierSkills-67a1da58.svg"
, nL = "/src/assets/services-managed-services-142c7029.svg"
, rL = "/src/assets/services-end-user-support-820e2189.svg"
, iL = "/src/assets/services-it-staffing-417162a4.svg"
, oL = "/src/assets/services-project-management-e4fe6210.svg"
, sL = "/src/assets/services-installation-provisioning-ab276686.svg"
, aL = "/src/assets/Analysis-1bfb26fa.svg"
, lL = "/src/assets/Management-6b4d1409.svg"
, uL = "/src/assets/saving-accdb247.svg"
, cL = "/src/assets/solution-c949c424.svg"
, fL = "/src/assets/tech-eabfe0ee.svg"
, dL = "/src/assets/Admin-bro-c5e9672d.svg"
, pL = "/src/assets/Client-3d5eb95b.svg"
, hL = "/src/assets/DownTime-c347680a.svg"
, mL = "/src/assets/OnSiteSupport-c0c52cae.svg"
, gL = "/src/assets/choice-b65c7806.svg"
, vL = "/src/assets/DownTime-d7ef2e24.svg"
, yL = "/src/assets/option-97164331.svg"
, wL = "/src/assets/SkillSet-dde437d6.svg"
, _L = "/src/assets/advance-9a7719ef.svg"
, bL = "/src/assets/Efficiency-7c1b6ba9.svg"
, xL = "/src/assets/guide-f04512c4.svg"
, SL = "/src/assets/scale-b0486765.svg"
, EL = "/src/assets/assurance-3578721b.svg"
, TL = "/src/assets/oversight-a5a6e20c.svg"
, CL = "/src/assets/swift-bd633cd6.svg"
, kL = "/src/assets/transparant-2889f475.svg"
, W5 = "From resolving simple connectivity issues to managing mission-critical services, we handle all your technological needs so that you can focus on the things that truly matter: your business and services."
, PL = "6LdhzUgoAAAAAAFicy42XNCrGucUH2kQR7geR4AJ"
, OL = [{
  name: "Managed Services",
  des: "We take care of your IT infrastructure, monitoring, and management needs, ensuring smooth operations.",
  img: nL,
  link: "/services/managed-services",
  id: "box-1"
}, {
  name: "End User Support",
  des: "Our friendly and highly-skilled technicians are always ready to provide quick on-site or remote support, ensuring your team can get back to work seamlessly and experience minimal downtime.",
  img: rL,
  link: "/services/end-user-support",
  id: "box-2"
}, {
  name: "IT Staffing",
  des: "Choose from a carefully curated group of experienced IT professionals to join your team, offering both temporary and long-term support. ",
  img: iL,
  link: "/services/it-staffing",
  id: "box-3"
}, {
  name: "Project Management",
  des: "Our team of experts personally oversees all aspects of your IT projects, ensuring that the solutions provided are swift and well-executed.",
  img: oL,
  link: "/services/project-management",
  id: "box-4"
}, {
  name: "Installation and Provisioning",
  des: "With our specialty in installing and provisioning new IT equipment, our solutions minimise downtime and maximise the productivity of any team.",
  img: sL,
  link: "/services/installation-and-provisioning",
  id: "box-5"
}]
, q5 = 'Our Managed IT Services at <a href="https://techcloud.sg/services/managed-services" class="ahref" >TechCloud</a> are designed to provide you with comprehensive IT infrastructure support and management. Specialising in proactive monitoring and efficient management, we ensure your organization experiences seamless and uninterrupted operations. These are the various aspects of our Managed Services: '
, Y5 = [{
  title: "Proactive Infrastructure Monitoring:",
  des: "Our Managed Services begin with vigilant monitoring of your IT infrastructure. Here's how it benefits your organization: ",
  issueList: [{
      name: "Real-Time Monitoring: We employ advanced tools to monitor your systems in real-time, letting us detect potential issues before they disrupt your operations. "
  }, {
      name: "Predictive Analysis: Through historical data and predictive analytics, we can anticipate and address issues that may arise in the future, minimizing downtime and preventing costly emergencies. "
  }, {
      name: "Immediate Issue Resolution: When problems are identified, our team of experts swiftly initiates resolution protocols to ensure minimal disruption to your business processes. "
  }],
  img: aL,
  alt: "IT Infrastructure"
}, {
  title: "Comprehensive Management: ",
  des: "Our Managed Services extend beyond monitoring to encompass comprehensive management of your IT environment: ",
  issueList: [{
      name: "Patch Management: We keep your systems up-to-date with the latest patches and updates, enhancing security and performance. "
  }, {
      name: "Asset Management: We maintain an inventory of your IT assets, ensuring efficient resource allocation and facilitating timely hardware and software upgrades. "
  }, {
      name: "Security Management: Protecting your data and network is our priority. Our Managed Services include robust security measures, such as firewall management, intrusion detection, and regular security audits. "
  }],
  img: lL,
  alt: "Professional IT Managed Services"
}, {
  title: "Cost Savings and Efficiency:",
  des: "Managed Services offer several cost-saving benefits: ",
  issueList: [{
      name: "Reduced Downtime: Proactive monitoring and issue resolution minimize downtime, ensuring that your team remains productive and your revenue stream is uninterrupted. "
  }, {
      name: "Scalability: Our services can be scaled to meet your organization's changing needs, allowing you to allocate resources efficiently and avoid unnecessary expenses. "
  }, {
      name: "Predictable Costs: With fixed monthly prices, you can plan your IT budget effectively and avoid unexpected costs associated with ad-hoc IT support. "
  }],
  img: uL,
  alt: "Data migration"
}, {
  title: "Expertise and Best Practices:",
  des: "Our team of IT professionals stays current with industry best practices and emerging technologies. This expertise is at your disposal, ensuring that your IT environment is optimized for performance, security, and efficiency. ",
  issueList: [],
  img: fL,
  alt: "Data security"
}, {
  title: "Customized Solutions:",
  des: "We understand that every organization has unique IT needs. Our Managed Services are tailored to your specific requirements, ensuring that you receive the support and management that aligns with your business objectives. ",
  issueList: [],
  img: cL,
  alt: "Cyber security"
}]
, G5 = 'At <a href="https://techcloud.sg/services/end-user-support" class="ahref">TechCloud</a>, our commitment to excellent IT services extends to our End User Support. We understand that technical issues can disrupt your workflow and productivity, which is why our friendly and highly-skilled technicians are dedicated to assisting you promptly, whether on-site or through remote support.'
, X5 = [{
  title: "On-Site Support",
  des: "Our on-site support services are designed to address technical issues that require physical implementation to fix. Here's what you can expect:",
  issueList: [{
      name: "Rapid Response:Our technicians are strategically located to ensure swift response times. When you encounter a problem, we'll be there in no time."
  }, {
      name: "Skilled Technicians:Our team is made up of highly-trained professionals who are well-equipped to diagnose and resolve a wide range of technical issues."
  }, {
      name: "Hardware and Software Assistance:Whether it's a hardware malfunction or software glitch, we've got you covered. We'll work diligently to get your systems up and running smoothly in no time "
  }],
  img: mL,
  alt: "On-Site Support Services"
}, {
  title: "Remote Support:",
  des: "For issues that can be resolved remotely, our remote support service is a convenient and efficient solution:",
  issueList: [{
      name: "Cost Efficient:Remote support not only offers swift issue resolution but also presents a cost-effective alternative to traditional on-site technical support. "
  }, {
      name: "Quick Resolution:Our technicians can access your systems remotely to diagnose and troubleshoot issues, providing speedy solutions without the need for an on-site visit."
  }, {
      name: "Secure Connection:Rest assured that our remote support sessions are conducted over secure and encrypted connections, ensuring the safety of your data."
  }],
  img: dL,
  alt: "remote support services"
}, {
  title: "Minimizing Downtime:",
  des: "We understand that downtime can be costly and disruptive. Our End User Support is geared towards minimizing such inefficiency in several ways:",
  issueList: [{
      name: "Proactive Monitoring:We proactively monitor your systems to identify potential issues before they cause disruptions. This allows us to take preventive measures and keep your operations running smoothly."
  }, {
      name: "24/7 Availability:Technical problems don't always occur during regular working hours. Our support services are available round-the-clock to ensure you're covered at all times."
  }, {
      name: "Effective Troubleshooting:Our technicians are skilled in efficient troubleshooting, ensuring that issues are diagnosed accurately and resolved promptly."
  }],
  img: hL,
  alt: "IT support on site"
}, {
  title: "Client-Centric Approach:",
  des: "Our End User Support services are designed with your specific needs in mind:",
  issueList: [{
      name: "Tailored Solutions:We understand that every organization is unique. Our support services are customized to align with your IT infrastructure and operational requirements."
  }, {
      name: "Friendly and Approachable:Our technicians are not just experts in their field; they are also known for their friendly and approachable demeanour. We prioritize excellent customer service."
  }, {
      name: "Training and Guidance:In addition to resolving issues, we also provide guidance and training to your team, helping them become more self-sufficient when it comes to minor technical problems."
  }],
  img: pL,
  alt: " end user IT support"
}]
, K5 = `At <a href='https://techcloud.sg/services/it-staffing' class="ahref">TechCloud</a>, we offer a unique IT staffing solution that empowers your business with skilled professionals tailored specifically to your needs. Dive into the details of our IT Staffing services and discover how we can augment your team with experienced IT talent: `
, Q5 = [{
  title: "Skill Set and Expertise ",
  des: "With our IT professionals, elevate your projects with a world of expertise tailored to your needs. Each and every professional brings top-tier skills to enhance your team. ",
  issueList: [{
      name: "Diverse Skill Sets: Select from a range of professionals with precisely the skills your projects require. Whether you need a network specialist, a software developer, a cybersecurity expert, or other IT professionals, we have you covered. "
  }, {
      name: "Expert Guidance: Our experienced IT professionals not only bring technical expertise but also offer valuable guidance. Benefit from their insights, best practices, and industry knowledge as they contribute to the success of your projects. "
  }],
  img: wL,
  alt: "IT Staffing Solution"
}, {
  title: "Support Options ",
  des: "Discover flexible support options designed to adapt to your business dynamics and scale your IT support effortlessly, whether it is for a short-term project or long-term growth. ",
  issueList: [{
      name: "Temporary and Long-Term Support: We provide flexible options, including both temporary and long-term support. Whether it is a short-term project or ongoing IT requirements, our IT professionals are ready to support your endeavours. "
  }, {
      name: "Scalability and Flexibility: As your business evolves, so can your IT staffing requirements. Our solution offers scalability and flexibility, allowing you to easily adjust the size and composition of your IT team based on changing demands. "
  }],
  img: yL,
  alt: "IT Staffing Services"
}, {
  title: " Efficiency and Convenience ",
  des: "Effortlessly streamline your hiring process for immediate support without the hassle, while enjoying cost savings through our efficient IT staffing solution, paying for talent as you need it. ",
  issueList: [{
      name: "Streamlined Recruitment Process: We have carefully curated a group of experienced IT professionals who are ready to hit the ground running. Say goodbye to the lengthy hiring process and hello to immediate support. "
  }, {
      name: "Cost-Effective Solution: Hiring full-time IT staff can be expensive, not to mention the additional costs of benefits and training. With our IT Staffing services, you pay for the talent you need when you need it, without the overhead of permanent hires. "
  }],
  img: vL,
  alt: "Skilled IT Staffing"
}, {
  title: "Responsiveness and Customisation",
  des: "With TechCloud, enjoy rapid responses to IT challenges and minimize downtime and losses. Additionally, customize your IT team to match your business's unique goals and culture.",
  issueList: [{
      name: "Rapid Response: IT emergencies can happen at any time. When urgent issues arise, our professionals are available to address them promptly, minimizing downtime and potential losses. "
  }, {
      name: "Customized to Your Needs: Every business is unique, and so are its IT requirements. We work closely with you to understand your specific needs and tailor our IT staffing solution accordingly. You have the freedom to choose professionals who align with your project goals and company culture. "
  }],
  img: gL,
  alt: "IT staffing companies"
}]
, J5 = "At <a href='https://techcloud.sg/services/project-management' class='ahref'>TechCloud</a>, we take pride in our commitment to delivering IT projects with precision and efficiency. Our dedicated team of experts is here to guide you through every stage of your project, from inception to completion. Explore the key components of our project management services:  "
, Z5 = [{
  title: "Comprehensive Oversight ",
  des: "Experience a higher level of project management with TechCloud. Our dedicated team of experts personally oversees all aspects of your IT projects, ensuring a comprehensive approach that leaves no detail unchecked.  ",
  issueList: [{
      name: "Holistic Supervision: Our seasoned project managers provide end-to-end supervision, maintaining a sharp focus on timelines, budgets, and quality standards to deliver the best possible results. "
  }, {
      name: "Resource Optimization: Maximise your efficiency through expert resource allocation. We carefully allocate the right talents and tools to ensure your project stays on course, optimizing resource utilization for cost-effectiveness. "
  }, {
      name: "Quality Assurance: We conduct rigorous quality checks to ensure high-quality results that meet industry standards. We adhere to strict quality control measures throughout the project, delivering solutions that exceed expectations. "
  }],
  img: TL,
  alt: "Professional Project Management"
}, {
  title: "Transparent Communication ",
  des: "Stay connected and informed throughout your project journey with our transparent communication practices.  ",
  issueList: [{
      name: "Open Channels: At TechCloud, we adopt clear and open communication channels for regular updates on project progress. We believe in transparent communication, keeping you informed at every step of the project.  "
  }, {
      name: "Progress Milestones: We provide regular milestone updates so that you are always aware of the status of your project, to track the project's progress and anticipate key deliverables.  "
  }, {
      name: "Responsive Support: With quick responses to inquiries, you will never be left in the dark. Our responsive support team is here to address your questions and concerns promptly, providing peace of mind. "
  }],
  img: kL,
  alt: "IT projects Services"
}, {
  title: " Post-Project Assurance  ",
  des: "Our commitment extends beyond project completion. Discover the advantages of our post-project support. ",
  issueList: [{
      name: "Ongoing Assistance: Count on us for continuous support and maintenance even after your IT project is completed. We are here to assist with any post-project needs, ensuring your solutions remain in peak condition. "
  }, {
      name: "Performance Monitoring: We perform regular checks to ensure your solutions continue to perform at their best, by monitoring your systems' performance to identify and resolve any issues swiftly.  "
  }, {
      name: "Solutions Optimization: Our experts at TechCloud provide recommendations for improvements and enhancements as needed. We offer insights and suggestions to enhance your solutions based on evolving needs and industry best practices. "
  }],
  img: EL,
  alt: "IT projects "
}, {
  title: "Swift and Well-Executed Solutions ",
  des: "Experience the TechCloud difference with project solutions that are not only swift but also well-executed, with a focus on efficiency and proactiveness. ",
  issueList: [{
      name: "Efficiency Focus: We guarantee a commitment to delivering IT projects with precision and efficiency. Rest assured that your projects will be completed on time and within budget, so that you are better able to reach your goals. "
  }, {
      name: "Customized to Your Needs: Every business is unique, and so are its IT requirements. We work closely with you to understand your specific needs and tailor our IT staffing solution accordingly. You have the freedom to choose professionals who align with your project goals and company culture. "
  }, {
      name: "Proactive Management: By identifying and mitigating potential risks, we keep your project on track. Our proactive management approach anticipates challenges and addresses them swiftly to ensure your project's success. "
  }],
  img: CL,
  alt: "IT project management services"
}]
, e3 = `Whether you are setting up a new office, expanding your existing infrastructure, or replacing outdated equipment, our experts at <a href= 'https://techcloud.sg/services/installation-and-provisioning' class="ahref">TechCloud</a> have you covered. Our installation services encompass a wide range of IT equipment, including servers, workstations, networking hardware, and more. Find out more below: `
, t3 = [{
  title: "Efficient Deployment ",
  des: "Minimize downtime and optimize productivity through efficient equipment deployment.  ",
  issueList: [{
      name: "Swift Setup: Our experienced technicians ensure rapid installation and setup of IT equipment, reducing downtime and ensuring your team's efficiency. Resource Optimization: Maximise your efficiency through expert resource allocation. We carefully allocate the right talents and tools to ensure your project stays on course, optimizing resource utilization for cost-effectiveness. "
  }, {
      name: "Customized Configuration: Tailored configuration for each device ensures that new equipment are integrated seamlessly into your existing IT ecosystem.  Assurance: We conduct rigorous quality checks to ensure high-quality results that meet industry standards. We adhere to strict quality control measures throughout the project, delivering solutions that exceed expectations. "
  }, {
      name: "Disruption-Free Installation: Our meticulous planning and execution minimizes disruptions to your workflow. Rest assured that your business will continue to operate smoothly during installation. "
  }],
  img: bL,
  alt: "IT consultation Singapore"
}, {
  title: "Advanced Hardware and Software Integration  ",
  des: "Whether you require hardware or software integration, our engineers are trained with top-class skills to handle all situations. ",
  issueList: [{
      name: "Hardware Proficiency: Our skilled technicians specialize in setting up diverse IT hardware, from workstations and servers to networking devices and peripherals.  Channels: At TechCloud, we adopt clear and open communication channels for regular updates on project progress. We believe in transparent communication, keeping you informed at every step of the project.  "
  }, {
      name: "Comprehensive Software Integration: We also integrate the necessary software that comes alongside hardware, guaranteeing full functionality and compatibility.  Milestones: We provide regular milestone updates so that you are always aware of the status of your project, to track the project's progress and anticipate key deliverables.  "
  }, {
      name: "Quality Assurance Testing: Rigorous post-installation testing ensures that your IT equipment perform optimally and without issues.  Support: With quick responses to inquiries, you will never be left in the dark. Our responsive support team is here to address your questions and concerns promptly, providing peace of mind. "
  }],
  img: _L,
  alt: "IT Installation Services"
}, {
  title: " Scalable Solutions for Future Growth   ",
  des: "Prepare for future growth with scalable installation and provisioning solutions, matching your changing needs at any point in time.   ",
  issueList: [{
      name: "Scalability: Our services are designed to accommodate your business's expansion, making it easy to add new equipment as needed.  Assistance: Count on us for continuous support and maintenance even after your IT project is completed. We are here to assist with any post-project needs, ensuring your solutions remain in peak condition. "
  }, {
      name: "Adaptability: Whether you require a single workstation setup or a comprehensive network installation, our solutions are flexible and tailored to your scale.  Monitoring: We perform regular checks to ensure your solutions continue to perform at their best, by monitoring your systems' performance to identify and resolve any issues swiftly.  "
  }, {
      name: "Future-Ready Investments: We consider long-term technology trends when provisioning equipment, ensuring that your investments remain relevant and valuable in the evolving IT landscape.  Optimization: Our experts at TechCloud provide recommendations for improvements and enhancements as needed. We offer insights and suggestions to enhance your solutions based on evolving needs and industry best practices. "
  }],
  img: SL,
  alt: "IT equipment"
}, {
  title: "Expert Guidance and Ongoing Support ",
  des: "Benefit from expert guidance, training, and continuous support for your IT equipment. ",
  issueList: [{
      name: "Consultative Approach: Our team at TechCloud offers expert guidance and IT consultation, helping you choose the right equipment and setup strategies to align with your business objectives.  "
  }, {
      name: "Training and Onboarding: We provide training and onboarding support to ensure your staff can efficiently utilize newly installed equipment.  "
  }, {
      name: "Sustained Support: Our commitment extends beyond installation; we offer ongoing support and maintenance services to promptly address any issues that may arise, ensuring your IT infrastructure remains productive.  "
  }],
  img: xL,
  alt: "Expert IT consultation"
}]
, n3 = [{
  title: "Offshore IT Services:",
  des: `In today's dynamic business environment, flexibility is key. We offer you the option to offshore <a href="https://techcloud.sg/services/managed-services" class="ahref" >IT services</a> to us. Instead of hiring a full-time in-house IT employee, you can tap into our skilled team whenever you need it. Basically, you will have your own IT department without any of the overhead. `,
  alt: "IT Services",
  img: QD
}, {
  title: "Budget Savings: ",
  des: "We understand the importance of keeping your costs in check. With TechCloud, you can enjoy significant budget savings. Our competitive pricing models and flexible service plans mean you only pay for what you need, when you need it. No hidden costs, no surprises – just straightforward, affordable business IT solutions. ",
  alt: "Budget Saving",
  img: ZD
}, {
  title: "Top-Tier Skills:",
  alt: "Top Tier Skills",
  des: "When you partner with TechCloud, you gain access to a team of IT professionals who are experts in their field. Our professionals are trained and pride themselves on being kept up to date on the most recent technological advances. We bring top-tier skills to your doorstep, helping your business thrive in the digital age. ",
  img: tL
}, {
  title: "Local Expertise, Global Reach:",
  alt: "Global Reach",
  des: "While we are a local IT company, our reach extends far. We combine local expertise with a global perspective, giving you the best of both worlds. Whether you are a small local firm or a growing enterprise, we tailor our services to meet your unique needs. ",
  img: JD
}, {
  title: "Friendly, Personalized Service:",
  alt: "Personalized Services",
  des: "At TechCloud, we believe that IT does not have to be intimidating. Our friendly and approachable team is here to demystify technology, offering personalized service that is as approachable as it is effective.  ",
  img: eL
}]
, r3 = [{
  name: "Sarah T.",
  jobTitle: "IT director",
  text: "Shawn and the TechCloud team have been an invaluable asset to our company. Their expertise in IT managed services and commitment to customer satisfaction are evident in every interaction. From provisioning new equipment to ongoing support, they handle it all with professionalism and skill. We are extremely pleased with their services and highly recommend them. "
}, {
  name: "Mike L.",
  jobTitle: "Operations manager",
  text: "TechCloud has truly been a game-changer for our business. Shawn and his team are incredibly responsive and knowledgeable. They take care of monitoring our systems remotely to sourcing and setting up new equipment, ensuring our IT infrastructure is always up-to-date and running smoothly. I recommend TechCloud to any business looking for reliable and professional IT managed services! "
}, {
  name: "Lisa W.",
  jobTitle: "Business owner",
  text: "Working with TechCloud has been a pleasure. Shawn and his engineers are not only skilled but also very responsive. They manage our IT needs comprehensively, and handle on-site issues swiftly when servers act up. Their dedication and expertise give us peace of mind, knowing our IT is in good hands."
}, {
  name: "Jessica T.",
  jobTitle: "Corporate relations",
  text: 'We cannot say enough good things about TechCloud. They are very on-the-ball, handling everything for us. As IT novices, it is such a relief knowing if anything breaks, they are just a call away, and they always get us back on track quickly." '
}, {
  name: "Steven K.",
  jobTitle: "Operations manager",
  text: "TechCloud has been a reliable partner for our IT needs. We contracted them to take care of our IT infrastructure, and they have been proactive in monitoring our systems remotely and coming on-site to fix server issues. Their quick response times and deep knowledge have made a huge difference in keeping our operations running smoothly. We could not be happier with their support! "
}];
function kx(e, t) {
  return function() {
      return e.apply(t, arguments)
  }
}
const {toString: AL} = Object.prototype
, {getPrototypeOf: Bg} = Object
, vd = (e => t => {
  const n = AL.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
, _i = e => (e = e.toLowerCase(),
t => vd(t) === e)
, yd = e => t => typeof t === e
, {isArray: Ga} = Array
, vu = yd("undefined");
function RL(e) {
  return e !== null && !vu(e) && e.constructor !== null && !vu(e.constructor) && zr(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Px = _i("ArrayBuffer");
function DL(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Px(e.buffer),
  t
}
const LL = yd("string")
, zr = yd("function")
, Ox = yd("number")
, wd = e => e !== null && typeof e == "object"
, ML = e => e === !0 || e === !1
, Hc = e => {
  if (vd(e) !== "object")
      return !1;
  const t = Bg(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
, IL = _i("Date")
, NL = _i("File")
, FL = _i("Blob")
, jL = _i("FileList")
, zL = e => wd(e) && zr(e.pipe)
, $L = e => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || zr(e.append) && ((t = vd(e)) === "formdata" || t === "object" && zr(e.toString) && e.toString() === "[object FormData]"))
}
, BL = _i("URLSearchParams")
, UL = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mu(e, t, {allOwnKeys: n=!1}={}) {
  if (e === null || typeof e > "u")
      return;
  let r, i;
  if (typeof e != "object" && (e = [e]),
  Ga(e))
      for (r = 0,
      i = e.length; r < i; r++)
          t.call(null, e[r], r, e);
  else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
        , s = o.length;
      let a;
      for (r = 0; r < s; r++)
          a = o[r],
          t.call(null, e[a], a, e)
  }
}
function Ax(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
      if (i = n[r],
      t === i.toLowerCase())
          return i;
  return null
}
const Rx = ( () => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)()
, Dx = e => !vu(e) && e !== Rx;
function om() {
  const {caseless: e} = Dx(this) && this || {}
    , t = {}
    , n = (r, i) => {
      const o = e && Ax(t, i) || i;
      Hc(t[o]) && Hc(r) ? t[o] = om(t[o], r) : Hc(r) ? t[o] = om({}, r) : Ga(r) ? t[o] = r.slice() : t[o] = r
  }
  ;
  for (let r = 0, i = arguments.length; r < i; r++)
      arguments[r] && Mu(arguments[r], n);
  return t
}
const VL = (e, t, n, {allOwnKeys: r}={}) => (Mu(t, (i, o) => {
  n && zr(i) ? e[o] = kx(i, n) : e[o] = i
}
, {
  allOwnKeys: r
}),
e)
, HL = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
, WL = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r),
  e.prototype.constructor = e,
  Object.defineProperty(e, "super", {
      value: t.prototype
  }),
  n && Object.assign(e.prototype, n)
}
, qL = (e, t, n, r) => {
  let i, o, s;
  const a = {};
  if (t = t || {},
  e == null)
      return t;
  do {
      for (i = Object.getOwnPropertyNames(e),
      o = i.length; o-- > 0; )
          s = i[o],
          (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
          a[s] = !0);
      e = n !== !1 && Bg(e)
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t
}
, YL = (e, t, n) => {
  e = String(e),
  (n === void 0 || n > e.length) && (n = e.length),
  n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n
}
, GL = e => {
  if (!e)
      return null;
  if (Ga(e))
      return e;
  let t = e.length;
  if (!Ox(t))
      return null;
  const n = new Array(t);
  for (; t-- > 0; )
      n[t] = e[t];
  return n
}
, XL = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Bg(Uint8Array))
, KL = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1])
  }
}
, QL = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
      r.push(n);
  return r
}
, JL = _i("HTMLFormElement")
, ZL = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
  return r.toUpperCase() + i
})
, lw = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
, eM = _i("RegExp")
, Lx = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e)
    , r = {};
  Mu(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i)
  }
  ),
  Object.defineProperties(e, r)
}
, tM = e => {
  Lx(e, (t, n) => {
      if (zr(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
      const r = e[n];
      if (zr(r)) {
          if (t.enumerable = !1,
          "writable"in t) {
              t.writable = !1;
              return
          }
          t.set || (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'")
          }
          )
      }
  }
  )
}
, nM = (e, t) => {
  const n = {}
    , r = i => {
      i.forEach(o => {
          n[o] = !0
      }
      )
  }
  ;
  return Ga(e) ? r(e) : r(String(e).split(t)),
  n
}
, rM = () => {}
, iM = (e, t) => (e = +e,
Number.isFinite(e) ? e : t)
, kp = "abcdefghijklmnopqrstuvwxyz"
, uw = "0123456789"
, Mx = {
  DIGIT: uw,
  ALPHA: kp,
  ALPHA_DIGIT: kp + kp.toUpperCase() + uw
}
, oM = (e=16, t=Mx.ALPHA_DIGIT) => {
  let n = "";
  const {length: r} = t;
  for (; e--; )
      n += t[Math.random() * r | 0];
  return n
}
;
function sM(e) {
  return !!(e && zr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const aM = e => {
  const t = new Array(10)
    , n = (r, i) => {
      if (wd(r)) {
          if (t.indexOf(r) >= 0)
              return;
          if (!("toJSON"in r)) {
              t[i] = r;
              const o = Ga(r) ? [] : {};
              return Mu(r, (s, a) => {
                  const l = n(s, i + 1);
                  !vu(l) && (o[a] = l)
              }
              ),
              t[i] = void 0,
              o
          }
      }
      return r
  }
  ;
  return n(e, 0)
}
, lM = _i("AsyncFunction")
, uM = e => e && (wd(e) || zr(e)) && zr(e.then) && zr(e.catch)
, H = {
  isArray: Ga,
  isArrayBuffer: Px,
  isBuffer: RL,
  isFormData: $L,
  isArrayBufferView: DL,
  isString: LL,
  isNumber: Ox,
  isBoolean: ML,
  isObject: wd,
  isPlainObject: Hc,
  isUndefined: vu,
  isDate: IL,
  isFile: NL,
  isBlob: FL,
  isRegExp: eM,
  isFunction: zr,
  isStream: zL,
  isURLSearchParams: BL,
  isTypedArray: XL,
  isFileList: jL,
  forEach: Mu,
  merge: om,
  extend: VL,
  trim: UL,
  stripBOM: HL,
  inherits: WL,
  toFlatObject: qL,
  kindOf: vd,
  kindOfTest: _i,
  endsWith: YL,
  toArray: GL,
  forEachEntry: KL,
  matchAll: QL,
  isHTMLForm: JL,
  hasOwnProperty: lw,
  hasOwnProp: lw,
  reduceDescriptors: Lx,
  freezeMethods: tM,
  toObjectSet: nM,
  toCamelCase: ZL,
  noop: rM,
  toFiniteNumber: iM,
  findKey: Ax,
  global: Rx,
  isContextDefined: Dx,
  ALPHABET: Mx,
  generateString: oM,
  isSpecCompliantForm: sM,
  toJSONObject: aM,
  isAsyncFn: lM,
  isThenable: uM
};
function Je(e, t, n, r, i) {
  Error.call(this),
  Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
  this.message = e,
  this.name = "AxiosError",
  t && (this.code = t),
  n && (this.config = n),
  r && (this.request = r),
  i && (this.response = i)
}
H.inherits(Je, Error, {
  toJSON: function() {
      return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: H.toJSONObject(this.config),
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
      }
  }
});
const Ix = Je.prototype
, Nx = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
  Nx[e] = {
      value: e
  }
}
);
Object.defineProperties(Je, Nx);
Object.defineProperty(Ix, "isAxiosError", {
  value: !0
});
Je.from = (e, t, n, r, i, o) => {
  const s = Object.create(Ix);
  return H.toFlatObject(e, s, function(l) {
      return l !== Error.prototype
  }, a => a !== "isAxiosError"),
  Je.call(s, e.message, t, n, r, i),
  s.cause = e,
  s.name = e.name,
  o && Object.assign(s, o),
  s
}
;
const cM = null;
function sm(e) {
  return H.isPlainObject(e) || H.isArray(e)
}
function Fx(e) {
  return H.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function cw(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
      return i = Fx(i),
      !n && o ? "[" + i + "]" : i
  }).join(n ? "." : "") : t
}
function fM(e) {
  return H.isArray(e) && !e.some(sm)
}
const dM = H.toFlatObject(H, {}, null, function(t) {
  return /^is[A-Z]/.test(t)
});
function _d(e, t, n) {
  if (!H.isObject(e))
      throw new TypeError("target must be an object");
  t = t || new FormData,
  n = H.toFlatObject(n, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
  }, !1, function(m, T) {
      return !H.isUndefined(T[m])
  });
  const r = n.metaTokens
    , i = n.visitor || f
    , o = n.dots
    , s = n.indexes
    , l = (n.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(t);
  if (!H.isFunction(i))
      throw new TypeError("visitor must be a function");
  function u(_) {
      if (_ === null)
          return "";
      if (H.isDate(_))
          return _.toISOString();
      if (!l && H.isBlob(_))
          throw new Je("Blob is not supported. Use a Buffer instead.");
      return H.isArrayBuffer(_) || H.isTypedArray(_) ? l && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _
  }
  function f(_, m, T) {
      let x = _;
      if (_ && !T && typeof _ == "object") {
          if (H.endsWith(m, "{}"))
              m = r ? m : m.slice(0, -2),
              _ = JSON.stringify(_);
          else if (H.isArray(_) && fM(_) || (H.isFileList(_) || H.endsWith(m, "[]")) && (x = H.toArray(_)))
              return m = Fx(m),
              x.forEach(function(S, b) {
                  !(H.isUndefined(S) || S === null) && t.append(s === !0 ? cw([m], b, o) : s === null ? m : m + "[]", u(S))
              }),
              !1
      }
      return sm(_) ? !0 : (t.append(cw(T, m, o), u(_)),
      !1)
  }
  const d = []
    , h = Object.assign(dM, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: sm
  });
  function g(_, m) {
      if (!H.isUndefined(_)) {
          if (d.indexOf(_) !== -1)
              throw Error("Circular reference detected in " + m.join("."));
          d.push(_),
          H.forEach(_, function(x, w) {
              (!(H.isUndefined(x) || x === null) && i.call(t, x, H.isString(w) ? w.trim() : w, m, h)) === !0 && g(x, m ? m.concat(w) : [w])
          }),
          d.pop()
      }
  }
  if (!H.isObject(e))
      throw new TypeError("data must be an object");
  return g(e),
  t
}
function fw(e) {
  const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
      return t[r]
  })
}
function Ug(e, t) {
  this._pairs = [],
  e && _d(e, this, t)
}
const jx = Ug.prototype;
jx.append = function(t, n) {
  this._pairs.push([t, n])
}
;
jx.toString = function(t) {
  const n = t ? function(r) {
      return t.call(this, r, fw)
  }
  : fw;
  return this._pairs.map(function(i) {
      return n(i[0]) + "=" + n(i[1])
  }, "").join("&")
}
;
function pM(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function zx(e, t, n) {
  if (!t)
      return e;
  const r = n && n.encode || pM
    , i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = H.isURLSearchParams(t) ? t.toString() : new Ug(t,n).toString(r),
  o) {
      const s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)),
      e += (e.indexOf("?") === -1 ? "?" : "&") + o
  }
  return e
}
class hM {
  constructor() {
      this.handlers = []
  }
  use(t, n, r) {
      return this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null
      }),
      this.handlers.length - 1
  }
  eject(t) {
      this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
      this.handlers && (this.handlers = [])
  }
  forEach(t) {
      H.forEach(this.handlers, function(r) {
          r !== null && t(r)
      })
  }
}
const dw = hM
, $x = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}
, mM = typeof URLSearchParams < "u" ? URLSearchParams : Ug
, gM = typeof FormData < "u" ? FormData : null
, vM = typeof Blob < "u" ? Blob : null
, yM = {
  isBrowser: !0,
  classes: {
      URLSearchParams: mM,
      FormData: gM,
      Blob: vM
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}
, Bx = typeof window < "u" && typeof document < "u"
, wM = (e => Bx && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
, _M = ( () => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")()
, bM = Object.freeze(Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Bx,
  hasStandardBrowserEnv: wM,
  hasStandardBrowserWebWorkerEnv: _M
}, Symbol.toStringTag, {
  value: "Module"
}))
, di = {
  ...bM,
  ...yM
};
function xM(e, t) {
  return _d(e, new di.classes.URLSearchParams, Object.assign({
      visitor: function(n, r, i, o) {
          return di.isNode && H.isBuffer(n) ? (this.append(r, n.toString("base64")),
          !1) : o.defaultVisitor.apply(this, arguments)
      }
  }, t))
}
function SM(e) {
  return H.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function EM(e) {
  const t = {}
    , n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
      o = n[r],
      t[o] = e[o];
  return t
}
function Ux(e) {
  function t(n, r, i, o) {
      let s = n[o++];
      const a = Number.isFinite(+s)
        , l = o >= n.length;
      return s = !s && H.isArray(i) ? i.length : s,
      l ? (H.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r,
      !a) : ((!i[s] || !H.isObject(i[s])) && (i[s] = []),
      t(n, r, i[s], o) && H.isArray(i[s]) && (i[s] = EM(i[s])),
      !a)
  }
  if (H.isFormData(e) && H.isFunction(e.entries)) {
      const n = {};
      return H.forEachEntry(e, (r, i) => {
          t(SM(r), i, n, 0)
      }
      ),
      n
  }
  return null
}
function TM(e, t, n) {
  if (H.isString(e))
      try {
          return (t || JSON.parse)(e),
          H.trim(e)
      } catch (r) {
          if (r.name !== "SyntaxError")
              throw r
      }
  return (n || JSON.stringify)(e)
}
const Vg = {
  transitional: $x,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
      const r = n.getContentType() || ""
        , i = r.indexOf("application/json") > -1
        , o = H.isObject(t);
      if (o && H.isHTMLForm(t) && (t = new FormData(t)),
      H.isFormData(t))
          return i && i ? JSON.stringify(Ux(t)) : t;
      if (H.isArrayBuffer(t) || H.isBuffer(t) || H.isStream(t) || H.isFile(t) || H.isBlob(t))
          return t;
      if (H.isArrayBufferView(t))
          return t.buffer;
      if (H.isURLSearchParams(t))
          return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
          t.toString();
      let a;
      if (o) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
              return xM(t, this.formSerializer).toString();
          if ((a = H.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
              const l = this.env && this.env.FormData;
              return _d(a ? {
                  "files[]": t
              } : t, l && new l, this.formSerializer)
          }
      }
      return o || i ? (n.setContentType("application/json", !1),
      TM(t)) : t
  }
  ],
  transformResponse: [function(t) {
      const n = this.transitional || Vg.transitional
        , r = n && n.forcedJSONParsing
        , i = this.responseType === "json";
      if (t && H.isString(t) && (r && !this.responseType || i)) {
          const s = !(n && n.silentJSONParsing) && i;
          try {
              return JSON.parse(t)
          } catch (a) {
              if (s)
                  throw a.name === "SyntaxError" ? Je.from(a, Je.ERR_BAD_RESPONSE, this, null, this.response) : a
          }
      }
      return t
  }
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
      FormData: di.classes.FormData,
      Blob: di.classes.Blob
  },
  validateStatus: function(t) {
      return t >= 200 && t < 300
  },
  headers: {
      common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0
      }
  }
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
  Vg.headers[e] = {}
}
);
const Hg = Vg
, CM = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
, kM = e => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(s) {
      i = s.indexOf(":"),
      n = s.substring(0, i).trim().toLowerCase(),
      r = s.substring(i + 1).trim(),
      !(!n || t[n] && CM[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
  }),
  t
}
, pw = Symbol("internals");
function ml(e) {
  return e && String(e).trim().toLowerCase()
}
function Wc(e) {
  return e === !1 || e == null ? e : H.isArray(e) ? e.map(Wc) : String(e)
}
function PM(e) {
  const t = Object.create(null)
    , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
      t[r[1]] = r[2];
  return t
}
const OM = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Pp(e, t, n, r, i) {
  if (H.isFunction(r))
      return r.call(this, t, n);
  if (i && (t = n),
  !!H.isString(t)) {
      if (H.isString(r))
          return t.indexOf(r) !== -1;
      if (H.isRegExp(r))
          return r.test(t)
  }
}
function AM(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function RM(e, t) {
  const n = H.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(r => {
      Object.defineProperty(e, r + n, {
          value: function(i, o, s) {
              return this[r].call(this, t, i, o, s)
          },
          configurable: !0
      })
  }
  )
}
class bd {
  constructor(t) {
      t && this.set(t)
  }
  set(t, n, r) {
      const i = this;
      function o(a, l, u) {
          const f = ml(l);
          if (!f)
              throw new Error("header name must be a non-empty string");
          const d = H.findKey(i, f);
          (!d || i[d] === void 0 || u === !0 || u === void 0 && i[d] !== !1) && (i[d || l] = Wc(a))
      }
      const s = (a, l) => H.forEach(a, (u, f) => o(u, f, l));
      return H.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : H.isString(t) && (t = t.trim()) && !OM(t) ? s(kM(t), n) : t != null && o(n, t, r),
      this
  }
  get(t, n) {
      if (t = ml(t),
      t) {
          const r = H.findKey(this, t);
          if (r) {
              const i = this[r];
              if (!n)
                  return i;
              if (n === !0)
                  return PM(i);
              if (H.isFunction(n))
                  return n.call(this, i, r);
              if (H.isRegExp(n))
                  return n.exec(i);
              throw new TypeError("parser must be boolean|regexp|function")
          }
      }
  }
  has(t, n) {
      if (t = ml(t),
      t) {
          const r = H.findKey(this, t);
          return !!(r && this[r] !== void 0 && (!n || Pp(this, this[r], r, n)))
      }
      return !1
  }
  delete(t, n) {
      const r = this;
      let i = !1;
      function o(s) {
          if (s = ml(s),
          s) {
              const a = H.findKey(r, s);
              a && (!n || Pp(r, r[a], a, n)) && (delete r[a],
              i = !0)
          }
      }
      return H.isArray(t) ? t.forEach(o) : o(t),
      i
  }
  clear(t) {
      const n = Object.keys(this);
      let r = n.length
        , i = !1;
      for (; r--; ) {
          const o = n[r];
          (!t || Pp(this, this[o], o, t, !0)) && (delete this[o],
          i = !0)
      }
      return i
  }
  normalize(t) {
      const n = this
        , r = {};
      return H.forEach(this, (i, o) => {
          const s = H.findKey(r, o);
          if (s) {
              n[s] = Wc(i),
              delete n[o];
              return
          }
          const a = t ? AM(o) : String(o).trim();
          a !== o && delete n[o],
          n[a] = Wc(i),
          r[a] = !0
      }
      ),
      this
  }
  concat(...t) {
      return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
      const n = Object.create(null);
      return H.forEach(this, (r, i) => {
          r != null && r !== !1 && (n[i] = t && H.isArray(r) ? r.join(", ") : r)
      }
      ),
      n
  }
  [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
      return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
  }
  get[Symbol.toStringTag]() {
      return "AxiosHeaders"
  }
  static from(t) {
      return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
      const r = new this(t);
      return n.forEach(i => r.set(i)),
      r
  }
  static accessor(t) {
      const r = (this[pw] = this[pw] = {
          accessors: {}
      }).accessors
        , i = this.prototype;
      function o(s) {
          const a = ml(s);
          r[a] || (RM(i, s),
          r[a] = !0)
      }
      return H.isArray(t) ? t.forEach(o) : o(t),
      this
  }
}
bd.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
H.reduceDescriptors(bd.prototype, ({value: e}, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
      get: () => e,
      set(r) {
          this[n] = r
      }
  }
}
);
H.freezeMethods(bd);
const ji = bd;
function Op(e, t) {
  const n = this || Hg
    , r = t || n
    , i = ji.from(r.headers);
  let o = r.data;
  return H.forEach(e, function(a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0)
  }),
  i.normalize(),
  o
}
function Vx(e) {
  return !!(e && e.__CANCEL__)
}
function Iu(e, t, n) {
  Je.call(this, e ?? "canceled", Je.ERR_CANCELED, t, n),
  this.name = "CanceledError"
}
H.inherits(Iu, Je, {
  __CANCEL__: !0
});
function DM(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Je("Request failed with status code " + n.status,[Je.ERR_BAD_REQUEST, Je.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
const LM = di.hasStandardBrowserEnv ? {
  write(e, t, n, r, i, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      H.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
      H.isString(r) && s.push("path=" + r),
      H.isString(i) && s.push("domain=" + i),
      o === !0 && s.push("secure"),
      document.cookie = s.join("; ")
  },
  read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null
  },
  remove(e) {
      this.write(e, "", Date.now() - 864e5)
  }
} : {
  write() {},
  read() {
      return null
  },
  remove() {}
};
function MM(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function IM(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Hx(e, t) {
  return e && !MM(t) ? IM(e, t) : t
}
const NM = di.hasStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent)
    , n = document.createElement("a");
  let r;
  function i(o) {
      let s = o;
      return t && (n.setAttribute("href", s),
      s = n.href),
      n.setAttribute("href", s),
      {
          href: n.href,
          protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
          host: n.host,
          search: n.search ? n.search.replace(/^\?/, "") : "",
          hash: n.hash ? n.hash.replace(/^#/, "") : "",
          hostname: n.hostname,
          port: n.port,
          pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      }
  }
  return r = i(window.location.href),
  function(s) {
      const a = H.isString(s) ? i(s) : s;
      return a.protocol === r.protocol && a.host === r.host
  }
}() : function() {
  return function() {
      return !0
  }
}();
function FM(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || ""
}
function jM(e, t) {
  e = e || 10;
  const n = new Array(e)
    , r = new Array(e);
  let i = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3,
  function(l) {
      const u = Date.now()
        , f = r[o];
      s || (s = u),
      n[i] = l,
      r[i] = u;
      let d = o
        , h = 0;
      for (; d !== i; )
          h += n[d++],
          d = d % e;
      if (i = (i + 1) % e,
      i === o && (o = (o + 1) % e),
      u - s < t)
          return;
      const g = f && u - f;
      return g ? Math.round(h * 1e3 / g) : void 0
  }
}
function hw(e, t) {
  let n = 0;
  const r = jM(50, 250);
  return i => {
      const o = i.loaded
        , s = i.lengthComputable ? i.total : void 0
        , a = o - n
        , l = r(a)
        , u = o <= s;
      n = o;
      const f = {
          loaded: o,
          total: s,
          progress: s ? o / s : void 0,
          bytes: a,
          rate: l || void 0,
          estimated: l && s && u ? (s - o) / l : void 0,
          event: i
      };
      f[t ? "download" : "upload"] = !0,
      e(f)
  }
}
const zM = typeof XMLHttpRequest < "u"
, $M = zM && function(e) {
  return new Promise(function(n, r) {
      let i = e.data;
      const o = ji.from(e.headers).normalize();
      let {responseType: s, withXSRFToken: a} = e, l;
      function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
          e.signal && e.signal.removeEventListener("abort", l)
      }
      let f;
      if (H.isFormData(i)) {
          if (di.hasStandardBrowserEnv || di.hasStandardBrowserWebWorkerEnv)
              o.setContentType(!1);
          else if ((f = o.getContentType()) !== !1) {
              const [m,...T] = f ? f.split(";").map(x => x.trim()).filter(Boolean) : [];
              o.setContentType([m || "multipart/form-data", ...T].join("; "))
          }
      }
      let d = new XMLHttpRequest;
      if (e.auth) {
          const m = e.auth.username || ""
            , T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          o.set("Authorization", "Basic " + btoa(m + ":" + T))
      }
      const h = Hx(e.baseURL, e.url);
      d.open(e.method.toUpperCase(), zx(h, e.params, e.paramsSerializer), !0),
      d.timeout = e.timeout;
      function g() {
          if (!d)
              return;
          const m = ji.from("getAllResponseHeaders"in d && d.getAllResponseHeaders())
            , x = {
              data: !s || s === "text" || s === "json" ? d.responseText : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: m,
              config: e,
              request: d
          };
          DM(function(S) {
              n(S),
              u()
          }, function(S) {
              r(S),
              u()
          }, x),
          d = null
      }
      if ("onloadend"in d ? d.onloadend = g : d.onreadystatechange = function() {
          !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g)
      }
      ,
      d.onabort = function() {
          d && (r(new Je("Request aborted",Je.ECONNABORTED,e,d)),
          d = null)
      }
      ,
      d.onerror = function() {
          r(new Je("Network Error",Je.ERR_NETWORK,e,d)),
          d = null
      }
      ,
      d.ontimeout = function() {
          let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
          const x = e.transitional || $x;
          e.timeoutErrorMessage && (T = e.timeoutErrorMessage),
          r(new Je(T,x.clarifyTimeoutError ? Je.ETIMEDOUT : Je.ECONNABORTED,e,d)),
          d = null
      }
      ,
      di.hasStandardBrowserEnv && (a && H.isFunction(a) && (a = a(e)),
      a || a !== !1 && NM(h))) {
          const m = e.xsrfHeaderName && e.xsrfCookieName && LM.read(e.xsrfCookieName);
          m && o.set(e.xsrfHeaderName, m)
      }
      i === void 0 && o.setContentType(null),
      "setRequestHeader"in d && H.forEach(o.toJSON(), function(T, x) {
          d.setRequestHeader(x, T)
      }),
      H.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials),
      s && s !== "json" && (d.responseType = e.responseType),
      typeof e.onDownloadProgress == "function" && d.addEventListener("progress", hw(e.onDownloadProgress, !0)),
      typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", hw(e.onUploadProgress)),
      (e.cancelToken || e.signal) && (l = m => {
          d && (r(!m || m.type ? new Iu(null,e,d) : m),
          d.abort(),
          d = null)
      }
      ,
      e.cancelToken && e.cancelToken.subscribe(l),
      e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
      const _ = FM(h);
      if (_ && di.protocols.indexOf(_) === -1) {
          r(new Je("Unsupported protocol " + _ + ":",Je.ERR_BAD_REQUEST,e));
          return
      }
      d.send(i || null)
  }
  )
}
, am = {
  http: cM,
  xhr: $M
};
H.forEach(am, (e, t) => {
  if (e) {
      try {
          Object.defineProperty(e, "name", {
              value: t
          })
      } catch {}
      Object.defineProperty(e, "adapterName", {
          value: t
      })
  }
}
);
const mw = e => `- ${e}`
, BM = e => H.isFunction(e) || e === null || e === !1
, Wx = {
  getAdapter: e => {
      e = H.isArray(e) ? e : [e];
      const {length: t} = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
          n = e[o];
          let s;
          if (r = n,
          !BM(n) && (r = am[(s = String(n)).toLowerCase()],
          r === void 0))
              throw new Je(`Unknown adapter '${s}'`);
          if (r)
              break;
          i[s || "#" + o] = r
      }
      if (!r) {
          const o = Object.entries(i).map( ([a,l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
          let s = t ? o.length > 1 ? `since :
` + o.map(mw).join(`
`) : " " + mw(o[0]) : "as no adapter specified";
          throw new Je("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
      }
      return r
  }
  ,
  adapters: am
};
function Ap(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(),
  e.signal && e.signal.aborted)
      throw new Iu(null,e)
}
function gw(e) {
  return Ap(e),
  e.headers = ji.from(e.headers),
  e.data = Op.call(e, e.transformRequest),
  ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
  Wx.getAdapter(e.adapter || Hg.adapter)(e).then(function(r) {
      return Ap(e),
      r.data = Op.call(e, e.transformResponse, r),
      r.headers = ji.from(r.headers),
      r
  }, function(r) {
      return Vx(r) || (Ap(e),
      r && r.response && (r.response.data = Op.call(e, e.transformResponse, r.response),
      r.response.headers = ji.from(r.response.headers))),
      Promise.reject(r)
  })
}
const vw = e => e instanceof ji ? e.toJSON() : e;
function Ma(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, d) {
      return H.isPlainObject(u) && H.isPlainObject(f) ? H.merge.call({
          caseless: d
      }, u, f) : H.isPlainObject(f) ? H.merge({}, f) : H.isArray(f) ? f.slice() : f
  }
  function i(u, f, d) {
      if (H.isUndefined(f)) {
          if (!H.isUndefined(u))
              return r(void 0, u, d)
      } else
          return r(u, f, d)
  }
  function o(u, f) {
      if (!H.isUndefined(f))
          return r(void 0, f)
  }
  function s(u, f) {
      if (H.isUndefined(f)) {
          if (!H.isUndefined(u))
              return r(void 0, u)
      } else
          return r(void 0, f)
  }
  function a(u, f, d) {
      if (d in t)
          return r(u, f);
      if (d in e)
          return r(void 0, u)
  }
  const l = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      withXSRFToken: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: a,
      headers: (u, f) => i(vw(u), vw(f), !0)
  };
  return H.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
      const d = l[f] || i
        , h = d(e[f], t[f], f);
      H.isUndefined(h) && d !== a || (n[f] = h)
  }),
  n
}
const qx = "1.6.2"
, Wg = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
  Wg[e] = function(r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
  }
}
);
const yw = {};
Wg.transitional = function(t, n, r) {
  function i(o, s) {
      return "[Axios v" + qx + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
  }
  return (o, s, a) => {
      if (t === !1)
          throw new Je(i(s, " has been removed" + (n ? " in " + n : "")),Je.ERR_DEPRECATED);
      return n && !yw[s] && (yw[s] = !0,
      console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
      t ? t(o, s, a) : !0
  }
}
;
function UM(e, t, n) {
  if (typeof e != "object")
      throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
      const o = r[i]
        , s = t[o];
      if (s) {
          const a = e[o]
            , l = a === void 0 || s(a, o, e);
          if (l !== !0)
              throw new Je("option " + o + " must be " + l,Je.ERR_BAD_OPTION_VALUE);
          continue
      }
      if (n !== !0)
          throw new Je("Unknown option " + o,Je.ERR_BAD_OPTION)
  }
}
const lm = {
  assertOptions: UM,
  validators: Wg
}
, eo = lm.validators;
class Df {
  constructor(t) {
      this.defaults = t,
      this.interceptors = {
          request: new dw,
          response: new dw
      }
  }
  request(t, n) {
      typeof t == "string" ? (n = n || {},
      n.url = t) : n = t || {},
      n = Ma(this.defaults, n);
      const {transitional: r, paramsSerializer: i, headers: o} = n;
      r !== void 0 && lm.assertOptions(r, {
          silentJSONParsing: eo.transitional(eo.boolean),
          forcedJSONParsing: eo.transitional(eo.boolean),
          clarifyTimeoutError: eo.transitional(eo.boolean)
      }, !1),
      i != null && (H.isFunction(i) ? n.paramsSerializer = {
          serialize: i
      } : lm.assertOptions(i, {
          encode: eo.function,
          serialize: eo.function
      }, !0)),
      n.method = (n.method || this.defaults.method || "get").toLowerCase();
      let s = o && H.merge(o.common, o[n.method]);
      o && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _ => {
          delete o[_]
      }
      ),
      n.headers = ji.concat(s, o);
      const a = [];
      let l = !0;
      this.interceptors.request.forEach(function(m) {
          typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous,
          a.unshift(m.fulfilled, m.rejected))
      });
      const u = [];
      this.interceptors.response.forEach(function(m) {
          u.push(m.fulfilled, m.rejected)
      });
      let f, d = 0, h;
      if (!l) {
          const _ = [gw.bind(this), void 0];
          for (_.unshift.apply(_, a),
          _.push.apply(_, u),
          h = _.length,
          f = Promise.resolve(n); d < h; )
              f = f.then(_[d++], _[d++]);
          return f
      }
      h = a.length;
      let g = n;
      for (d = 0; d < h; ) {
          const _ = a[d++]
            , m = a[d++];
          try {
              g = _(g)
          } catch (T) {
              m.call(this, T);
              break
          }
      }
      try {
          f = gw.call(this, g)
      } catch (_) {
          return Promise.reject(_)
      }
      for (d = 0,
      h = u.length; d < h; )
          f = f.then(u[d++], u[d++]);
      return f
  }
  getUri(t) {
      t = Ma(this.defaults, t);
      const n = Hx(t.baseURL, t.url);
      return zx(n, t.params, t.paramsSerializer)
  }
}
H.forEach(["delete", "get", "head", "options"], function(t) {
  Df.prototype[t] = function(n, r) {
      return this.request(Ma(r || {}, {
          method: t,
          url: n,
          data: (r || {}).data
      }))
  }
});
H.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
      return function(o, s, a) {
          return this.request(Ma(a || {}, {
              method: t,
              headers: r ? {
                  "Content-Type": "multipart/form-data"
              } : {},
              url: o,
              data: s
          }))
      }
  }
  Df.prototype[t] = n(),
  Df.prototype[t + "Form"] = n(!0)
});
const qc = Df;
class qg {
  constructor(t) {
      if (typeof t != "function")
          throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function(o) {
          n = o
      }
      );
      const r = this;
      this.promise.then(i => {
          if (!r._listeners)
              return;
          let o = r._listeners.length;
          for (; o-- > 0; )
              r._listeners[o](i);
          r._listeners = null
      }
      ),
      this.promise.then = i => {
          let o;
          const s = new Promise(a => {
              r.subscribe(a),
              o = a
          }
          ).then(i);
          return s.cancel = function() {
              r.unsubscribe(o)
          }
          ,
          s
      }
      ,
      t(function(o, s, a) {
          r.reason || (r.reason = new Iu(o,s,a),
          n(r.reason))
      })
  }
  throwIfRequested() {
      if (this.reason)
          throw this.reason
  }
  subscribe(t) {
      if (this.reason) {
          t(this.reason);
          return
      }
      this._listeners ? this._listeners.push(t) : this._listeners = [t]
  }
  unsubscribe(t) {
      if (!this._listeners)
          return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
      let t;
      return {
          token: new qg(function(i) {
              t = i
          }
          ),
          cancel: t
      }
  }
}
const VM = qg;
function HM(e) {
  return function(n) {
      return e.apply(null, n)
  }
}
function WM(e) {
  return H.isObject(e) && e.isAxiosError === !0
}
const um = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(um).forEach( ([e,t]) => {
  um[t] = e
}
);
const qM = um;
function Yx(e) {
  const t = new qc(e)
    , n = kx(qc.prototype.request, t);
  return H.extend(n, qc.prototype, t, {
      allOwnKeys: !0
  }),
  H.extend(n, t, null, {
      allOwnKeys: !0
  }),
  n.create = function(i) {
      return Yx(Ma(e, i))
  }
  ,
  n
}
const Zt = Yx(Hg);
Zt.Axios = qc;
Zt.CanceledError = Iu;
Zt.CancelToken = VM;
Zt.isCancel = Vx;
Zt.VERSION = qx;
Zt.toFormData = _d;
Zt.AxiosError = Je;
Zt.Cancel = Zt.CanceledError;
Zt.all = function(t) {
  return Promise.all(t)
}
;
Zt.spread = HM;
Zt.isAxiosError = WM;
Zt.mergeConfig = Ma;
Zt.AxiosHeaders = ji;
Zt.formToJSON = e => Ux(H.isHTMLForm(e) ? new FormData(e) : e);
Zt.getAdapter = Wx.getAdapter;
Zt.HttpStatusCode = qM;
Zt.default = Zt;
const YM = Zt;
var GM = ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl", "isolated"];
function cm() {
  return cm = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  cm.apply(this, arguments)
}
function XM(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function mc(e) {
  if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
function KM(e, t) {
  e.prototype = Object.create(t.prototype),
  e.prototype.constructor = e,
  fm(e, t)
}
function fm(e, t) {
  return fm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
      return r.__proto__ = i,
      r
  }
  ,
  fm(e, t)
}
var xd = function(e) {
  KM(t, e);
  function t() {
      var r;
      return r = e.call(this) || this,
      r.handleExpired = r.handleExpired.bind(mc(r)),
      r.handleErrored = r.handleErrored.bind(mc(r)),
      r.handleChange = r.handleChange.bind(mc(r)),
      r.handleRecaptchaRef = r.handleRecaptchaRef.bind(mc(r)),
      r
  }
  var n = t.prototype;
  return n.getCaptchaFunction = function(i) {
      return this.props.grecaptcha ? this.props.grecaptcha.enterprise ? this.props.grecaptcha.enterprise[i] : this.props.grecaptcha[i] : null
  }
  ,
  n.getValue = function() {
      var i = this.getCaptchaFunction("getResponse");
      return i && this._widgetId !== void 0 ? i(this._widgetId) : null
  }
  ,
  n.getWidgetId = function() {
      return this.props.grecaptcha && this._widgetId !== void 0 ? this._widgetId : null
  }
  ,
  n.execute = function() {
      var i = this.getCaptchaFunction("execute");
      if (i && this._widgetId !== void 0)
          return i(this._widgetId);
      this._executeRequested = !0
  }
  ,
  n.executeAsync = function() {
      var i = this;
      return new Promise(function(o, s) {
          i.executionResolve = o,
          i.executionReject = s,
          i.execute()
      }
      )
  }
  ,
  n.reset = function() {
      var i = this.getCaptchaFunction("reset");
      i && this._widgetId !== void 0 && i(this._widgetId)
  }
  ,
  n.forceReset = function() {
      var i = this.getCaptchaFunction("reset");
      i && i()
  }
  ,
  n.handleExpired = function() {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null)
  }
  ,
  n.handleErrored = function() {
      this.props.onErrored && this.props.onErrored(),
      this.executionReject && (this.executionReject(),
      delete this.executionResolve,
      delete this.executionReject)
  }
  ,
  n.handleChange = function(i) {
      this.props.onChange && this.props.onChange(i),
      this.executionResolve && (this.executionResolve(i),
      delete this.executionReject,
      delete this.executionResolve)
  }
  ,
  n.explicitRender = function() {
      var i = this.getCaptchaFunction("render");
      if (i && this._widgetId === void 0) {
          var o = document.createElement("div");
          this._widgetId = i(o, {
              sitekey: this.props.sitekey,
              callback: this.handleChange,
              theme: this.props.theme,
              type: this.props.type,
              tabindex: this.props.tabindex,
              "expired-callback": this.handleExpired,
              "error-callback": this.handleErrored,
              size: this.props.size,
              stoken: this.props.stoken,
              hl: this.props.hl,
              badge: this.props.badge,
              isolated: this.props.isolated
          }),
          this.captcha.appendChild(o)
      }
      this._executeRequested && this.props.grecaptcha && this._widgetId !== void 0 && (this._executeRequested = !1,
      this.execute())
  }
  ,
  n.componentDidMount = function() {
      this.explicitRender()
  }
  ,
  n.componentDidUpdate = function() {
      this.explicitRender()
  }
  ,
  n.handleRecaptchaRef = function(i) {
      this.captcha = i
  }
  ,
  n.render = function() {
      var i = this.props;
      i.sitekey,
      i.onChange,
      i.theme,
      i.type,
      i.tabindex,
      i.onExpired,
      i.onErrored,
      i.size,
      i.stoken,
      i.grecaptcha,
      i.badge,
      i.hl,
      i.isolated;
      var o = XM(i, GM);
      return C.createElement("div", cm({}, o, {
          ref: this.handleRecaptchaRef
      }))
  }
  ,
  t
}(C.Component);
xd.displayName = "ReCAPTCHA";
xd.propTypes = {
  sitekey: Ne.string.isRequired,
  onChange: Ne.func,
  grecaptcha: Ne.object,
  theme: Ne.oneOf(["dark", "light"]),
  type: Ne.oneOf(["image", "audio"]),
  tabindex: Ne.number,
  onExpired: Ne.func,
  onErrored: Ne.func,
  size: Ne.oneOf(["compact", "normal", "invisible"]),
  stoken: Ne.string,
  hl: Ne.string,
  badge: Ne.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: Ne.bool
};
xd.defaultProps = {
  onChange: function() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};
var Gx = {
  exports: {}
}
, at = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var mn = typeof Symbol == "function" && Symbol.for
, Yg = mn ? Symbol.for("react.element") : 60103
, Gg = mn ? Symbol.for("react.portal") : 60106
, Sd = mn ? Symbol.for("react.fragment") : 60107
, Ed = mn ? Symbol.for("react.strict_mode") : 60108
, Td = mn ? Symbol.for("react.profiler") : 60114
, Cd = mn ? Symbol.for("react.provider") : 60109
, kd = mn ? Symbol.for("react.context") : 60110
, Xg = mn ? Symbol.for("react.async_mode") : 60111
, Pd = mn ? Symbol.for("react.concurrent_mode") : 60111
, Od = mn ? Symbol.for("react.forward_ref") : 60112
, Ad = mn ? Symbol.for("react.suspense") : 60113
, QM = mn ? Symbol.for("react.suspense_list") : 60120
, Rd = mn ? Symbol.for("react.memo") : 60115
, Dd = mn ? Symbol.for("react.lazy") : 60116
, JM = mn ? Symbol.for("react.block") : 60121
, ZM = mn ? Symbol.for("react.fundamental") : 60117
, eI = mn ? Symbol.for("react.responder") : 60118
, tI = mn ? Symbol.for("react.scope") : 60119;
function Er(e) {
  if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
      case Yg:
          switch (e = e.type,
          e) {
          case Xg:
          case Pd:
          case Sd:
          case Td:
          case Ed:
          case Ad:
              return e;
          default:
              switch (e = e && e.$$typeof,
              e) {
              case kd:
              case Od:
              case Dd:
              case Rd:
              case Cd:
                  return e;
              default:
                  return t
              }
          }
      case Gg:
          return t
      }
  }
}
function Xx(e) {
  return Er(e) === Pd
}
at.AsyncMode = Xg;
at.ConcurrentMode = Pd;
at.ContextConsumer = kd;
at.ContextProvider = Cd;
at.Element = Yg;
at.ForwardRef = Od;
at.Fragment = Sd;
at.Lazy = Dd;
at.Memo = Rd;
at.Portal = Gg;
at.Profiler = Td;
at.StrictMode = Ed;
at.Suspense = Ad;
at.isAsyncMode = function(e) {
  return Xx(e) || Er(e) === Xg
}
;
at.isConcurrentMode = Xx;
at.isContextConsumer = function(e) {
  return Er(e) === kd
}
;
at.isContextProvider = function(e) {
  return Er(e) === Cd
}
;
at.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yg
}
;
at.isForwardRef = function(e) {
  return Er(e) === Od
}
;
at.isFragment = function(e) {
  return Er(e) === Sd
}
;
at.isLazy = function(e) {
  return Er(e) === Dd
}
;
at.isMemo = function(e) {
  return Er(e) === Rd
}
;
at.isPortal = function(e) {
  return Er(e) === Gg
}
;
at.isProfiler = function(e) {
  return Er(e) === Td
}
;
at.isStrictMode = function(e) {
  return Er(e) === Ed
}
;
at.isSuspense = function(e) {
  return Er(e) === Ad
}
;
at.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Sd || e === Pd || e === Td || e === Ed || e === Ad || e === QM || typeof e == "object" && e !== null && (e.$$typeof === Dd || e.$$typeof === Rd || e.$$typeof === Cd || e.$$typeof === kd || e.$$typeof === Od || e.$$typeof === ZM || e.$$typeof === eI || e.$$typeof === tI || e.$$typeof === JM)
}
;
at.typeOf = Er;
Gx.exports = at;
var nI = Gx.exports
, Kg = nI
, rI = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}
, iI = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}
, oI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}
, Kx = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}
, Qg = {};
Qg[Kg.ForwardRef] = oI;
Qg[Kg.Memo] = Kx;
function ww(e) {
  return Kg.isMemo(e) ? Kx : Qg[e.$$typeof] || rI
}
var sI = Object.defineProperty
, aI = Object.getOwnPropertyNames
, _w = Object.getOwnPropertySymbols
, lI = Object.getOwnPropertyDescriptor
, uI = Object.getPrototypeOf
, bw = Object.prototype;
function Qx(e, t, n) {
  if (typeof t != "string") {
      if (bw) {
          var r = uI(t);
          r && r !== bw && Qx(e, r, n)
      }
      var i = aI(t);
      _w && (i = i.concat(_w(t)));
      for (var o = ww(e), s = ww(t), a = 0; a < i.length; ++a) {
          var l = i[a];
          if (!iI[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
              var u = lI(t, l);
              try {
                  sI(e, l, u)
              } catch {}
          }
      }
  }
  return e
}
var cI = Qx;
const fI = Lo(cI);
function dm() {
  return dm = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  dm.apply(this, arguments)
}
function dI(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function pI(e, t) {
  e.prototype = Object.create(t.prototype),
  e.prototype.constructor = e,
  e.__proto__ = t
}
var Wr = {}
, hI = 0;
function mI(e, t) {
  return t = t || {},
  function(r) {
      var i = r.displayName || r.name || "Component"
        , o = function(a) {
          pI(l, a);
          function l(f, d) {
              var h;
              return h = a.call(this, f, d) || this,
              h.state = {},
              h.__scriptURL = "",
              h
          }
          var u = l.prototype;
          return u.asyncScriptLoaderGetScriptLoaderID = function() {
              return this.__scriptLoaderID || (this.__scriptLoaderID = "async-script-loader-" + hI++),
              this.__scriptLoaderID
          }
          ,
          u.setupScriptURL = function() {
              return this.__scriptURL = typeof e == "function" ? e() : e,
              this.__scriptURL
          }
          ,
          u.asyncScriptLoaderHandleLoad = function(d) {
              var h = this;
              this.setState(d, function() {
                  return h.props.asyncScriptOnLoad && h.props.asyncScriptOnLoad(h.state)
              })
          }
          ,
          u.asyncScriptLoaderTriggerOnScriptLoaded = function() {
              var d = Wr[this.__scriptURL];
              if (!d || !d.loaded)
                  throw new Error("Script is not loaded.");
              for (var h in d.observers)
                  d.observers[h](d);
              delete window[t.callbackName]
          }
          ,
          u.componentDidMount = function() {
              var d = this
                , h = this.setupScriptURL()
                , g = this.asyncScriptLoaderGetScriptLoaderID()
                , _ = t
                , m = _.globalName
                , T = _.callbackName
                , x = _.scriptId;
              if (m && typeof window[m] < "u" && (Wr[h] = {
                  loaded: !0,
                  observers: {}
              }),
              Wr[h]) {
                  var w = Wr[h];
                  if (w && (w.loaded || w.errored)) {
                      this.asyncScriptLoaderHandleLoad(w);
                      return
                  }
                  w.observers[g] = function(O) {
                      return d.asyncScriptLoaderHandleLoad(O)
                  }
                  ;
                  return
              }
              var S = {};
              S[g] = function(O) {
                  return d.asyncScriptLoaderHandleLoad(O)
              }
              ,
              Wr[h] = {
                  loaded: !1,
                  observers: S
              };
              var b = document.createElement("script");
              b.src = h,
              b.async = !0;
              for (var k in t.attributes)
                  b.setAttribute(k, t.attributes[k]);
              x && (b.id = x);
              var D = function(R) {
                  if (Wr[h]) {
                      var M = Wr[h]
                        , j = M.observers;
                      for (var Q in j)
                          R(j[Q]) && delete j[Q]
                  }
              };
              T && typeof window < "u" && (window[T] = function() {
                  return d.asyncScriptLoaderTriggerOnScriptLoaded()
              }
              ),
              b.onload = function() {
                  var O = Wr[h];
                  O && (O.loaded = !0,
                  D(function(R) {
                      return T ? !1 : (R(O),
                      !0)
                  }))
              }
              ,
              b.onerror = function() {
                  var O = Wr[h];
                  O && (O.errored = !0,
                  D(function(R) {
                      return R(O),
                      !0
                  }))
              }
              ,
              document.body.appendChild(b)
          }
          ,
          u.componentWillUnmount = function() {
              var d = this.__scriptURL;
              if (t.removeOnUnmount === !0)
                  for (var h = document.getElementsByTagName("script"), g = 0; g < h.length; g += 1)
                      h[g].src.indexOf(d) > -1 && h[g].parentNode && h[g].parentNode.removeChild(h[g]);
              var _ = Wr[d];
              _ && (delete _.observers[this.asyncScriptLoaderGetScriptLoaderID()],
              t.removeOnUnmount === !0 && delete Wr[d])
          }
          ,
          u.render = function() {
              var d = t.globalName
                , h = this.props;
              h.asyncScriptOnLoad;
              var g = h.forwardedRef
                , _ = dI(h, ["asyncScriptOnLoad", "forwardedRef"]);
              return d && typeof window < "u" && (_[d] = typeof window[d] < "u" ? window[d] : void 0),
              _.ref = g,
              C.createElement(r, _)
          }
          ,
          l
      }(C.Component)
        , s = C.forwardRef(function(a, l) {
          return C.createElement(o, dm({}, a, {
              forwardedRef: l
          }))
      });
      return s.displayName = "AsyncScriptLoader(" + i + ")",
      s.propTypes = {
          asyncScriptOnLoad: Ne.func
      },
      fI(s, r)
  }
}
var pm = "onloadcallback"
, gI = "grecaptcha";
function hm() {
  return typeof window < "u" && window.recaptchaOptions || {}
}
function vI() {
  var e = hm()
    , t = e.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return e.enterprise ? "https://" + t + "/recaptcha/enterprise.js?onload=" + pm + "&render=explicit" : "https://" + t + "/recaptcha/api.js?onload=" + pm + "&render=explicit"
}
const yI = mI(vI, {
  callbackName: pm,
  globalName: gI,
  attributes: hm().nonce ? {
      nonce: hm().nonce
  } : {}
})(xd);
var Nu = e => e.type === "checkbox"
, sa = e => e instanceof Date
, $n = e => e == null;
const Jx = e => typeof e == "object";
var sn = e => !$n(e) && !Array.isArray(e) && Jx(e) && !sa(e)
, wI = e => sn(e) && e.target ? Nu(e.target) ? e.target.checked : e.target.value : e
, _I = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
, bI = (e, t) => e.has(_I(t))
, xI = e => {
  const t = e.constructor && e.constructor.prototype;
  return sn(t) && t.hasOwnProperty("isPrototypeOf")
}
, Jg = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ci(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
      t = new Date(e);
  else if (e instanceof Set)
      t = new Set(e);
  else if (!(Jg && (e instanceof Blob || e instanceof FileList)) && (n || sn(e)))
      if (t = n ? [] : {},
      !n && !xI(e))
          t = e;
      else
          for (const r in e)
              e.hasOwnProperty(r) && (t[r] = Ci(e[r]));
  else
      return e;
  return t
}
var Fu = e => Array.isArray(e) ? e.filter(Boolean) : []
, Xt = e => e === void 0
, ve = (e, t, n) => {
  if (!t || !sn(e))
      return n;
  const r = Fu(t.split(/[,[\].]+?/)).reduce( (i, o) => $n(i) ? i : i[o], e);
  return Xt(r) || r === e ? Xt(e[t]) ? n : e[t] : r
}
, Zo = e => typeof e == "boolean";
const xw = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}
, Jr = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}
, Ti = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
Jn.createContext(null);
var SI = (e, t, n, r=!0) => {
  const i = {
      defaultValues: t._defaultValues
  };
  for (const o in e)
      Object.defineProperty(i, o, {
          get: () => {
              const s = o;
              return t._proxyFormState[s] !== Jr.all && (t._proxyFormState[s] = !r || Jr.all),
              n && (n[s] = !0),
              e[s]
          }
      });
  return i
}
, Or = e => sn(e) && !Object.keys(e).length
, EI = (e, t, n, r) => {
  n(e);
  const {name: i, ...o} = e;
  return Or(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find(s => t[s] === (!r || Jr.all))
}
, Rp = e => Array.isArray(e) ? e : [e];
function TI(e) {
  const t = Jn.useRef(e);
  t.current = e,
  Jn.useEffect( () => {
      const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
          next: t.current.next
      });
      return () => {
          n && n.unsubscribe()
      }
  }
  , [e.disabled])
}
var pi = e => typeof e == "string"
, CI = (e, t, n, r, i) => pi(e) ? (r && t.watch.add(e),
ve(n, e, i)) : Array.isArray(e) ? e.map(o => (r && t.watch.add(o),
ve(n, o))) : (r && (t.watchAll = !0),
n)
, Zg = e => /^\w*$/.test(e)
, Zx = e => Fu(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function xt(e, t, n) {
  let r = -1;
  const i = Zg(t) ? [t] : Zx(t)
    , o = i.length
    , s = o - 1;
  for (; ++r < o; ) {
      const a = i[r];
      let l = n;
      if (r !== s) {
          const u = e[a];
          l = sn(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : []
      }
      e[a] = l,
      e = e[a]
  }
  return e
}
var kI = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
      ...n[e] && n[e].types ? n[e].types : {},
      [r]: i || !0
  }
} : {};
const mm = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
      const i = ve(e, r);
      if (i) {
          const {_f: o, ...s} = i;
          if (o && t(o.name)) {
              if (o.ref.focus) {
                  o.ref.focus();
                  break
              } else if (o.refs && o.refs[0].focus) {
                  o.refs[0].focus();
                  break
              }
          } else
              sn(s) && mm(s, t)
      }
  }
}
;
var Sw = e => ({
  isOnSubmit: !e || e === Jr.onSubmit,
  isOnBlur: e === Jr.onBlur,
  isOnChange: e === Jr.onChange,
  isOnAll: e === Jr.all,
  isOnTouch: e === Jr.onTouched
})
, Ew = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))))
, PI = (e, t, n) => {
  const r = Fu(ve(e, n));
  return xt(r, "root", t[n]),
  xt(e, n, r),
  e
}
, ev = e => e.type === "file"
, uo = e => typeof e == "function"
, Lf = e => {
  if (!Jg)
      return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
}
, Yc = e => pi(e)
, tv = e => e.type === "radio"
, Mf = e => e instanceof RegExp;
const Tw = {
  value: !1,
  isValid: !1
}
, Cw = {
  value: !0,
  isValid: !0
};
var eS = e => {
  if (Array.isArray(e)) {
      if (e.length > 1) {
          const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
          return {
              value: t,
              isValid: !!t.length
          }
      }
      return e[0].checked && !e[0].disabled ? e[0].attributes && !Xt(e[0].attributes.value) ? Xt(e[0].value) || e[0].value === "" ? Cw : {
          value: e[0].value,
          isValid: !0
      } : Cw : Tw
  }
  return Tw
}
;
const kw = {
  isValid: !1,
  value: null
};
var tS = e => Array.isArray(e) ? e.reduce( (t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, kw) : kw;
function Pw(e, t, n="validate") {
  if (Yc(e) || Array.isArray(e) && e.every(Yc) || Zo(e) && !e)
      return {
          type: n,
          message: Yc(e) ? e : "",
          ref: t
      }
}
var zs = e => sn(e) && !Mf(e) ? e : {
  value: e,
  message: ""
}
, Ow = async (e, t, n, r, i) => {
  const {ref: o, refs: s, required: a, maxLength: l, minLength: u, min: f, max: d, pattern: h, validate: g, name: _, valueAsNumber: m, mount: T, disabled: x} = e._f
    , w = ve(t, _);
  if (!T || x)
      return {};
  const S = s ? s[0] : o
    , b = I => {
      r && S.reportValidity && (S.setCustomValidity(Zo(I) ? "" : I || ""),
      S.reportValidity())
  }
    , k = {}
    , D = tv(o)
    , O = Nu(o)
    , R = D || O
    , M = (m || ev(o)) && Xt(o.value) && Xt(w) || Lf(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length
    , j = kI.bind(null, _, n, k)
    , Q = (I, Z, te, ue=Ti.maxLength, ae=Ti.minLength) => {
      const oe = I ? Z : te;
      k[_] = {
          type: I ? ue : ae,
          message: oe,
          ref: o,
          ...j(I ? ue : ae, oe)
      }
  }
  ;
  if (i ? !Array.isArray(w) || !w.length : a && (!R && (M || $n(w)) || Zo(w) && !w || O && !eS(s).isValid || D && !tS(s).isValid)) {
      const {value: I, message: Z} = Yc(a) ? {
          value: !!a,
          message: a
      } : zs(a);
      if (I && (k[_] = {
          type: Ti.required,
          message: Z,
          ref: S,
          ...j(Ti.required, Z)
      },
      !n))
          return b(Z),
          k
  }
  if (!M && (!$n(f) || !$n(d))) {
      let I, Z;
      const te = zs(d)
        , ue = zs(f);
      if (!$n(w) && !isNaN(w)) {
          const ae = o.valueAsNumber || w && +w;
          $n(te.value) || (I = ae > te.value),
          $n(ue.value) || (Z = ae < ue.value)
      } else {
          const ae = o.valueAsDate || new Date(w)
            , oe = A => new Date(new Date().toDateString() + " " + A)
            , L = o.type == "time"
            , K = o.type == "week";
          pi(te.value) && w && (I = L ? oe(w) > oe(te.value) : K ? w > te.value : ae > new Date(te.value)),
          pi(ue.value) && w && (Z = L ? oe(w) < oe(ue.value) : K ? w < ue.value : ae < new Date(ue.value))
      }
      if ((I || Z) && (Q(!!I, te.message, ue.message, Ti.max, Ti.min),
      !n))
          return b(k[_].message),
          k
  }
  if ((l || u) && !M && (pi(w) || i && Array.isArray(w))) {
      const I = zs(l)
        , Z = zs(u)
        , te = !$n(I.value) && w.length > +I.value
        , ue = !$n(Z.value) && w.length < +Z.value;
      if ((te || ue) && (Q(te, I.message, Z.message),
      !n))
          return b(k[_].message),
          k
  }
  if (h && !M && pi(w)) {
      const {value: I, message: Z} = zs(h);
      if (Mf(I) && !w.match(I) && (k[_] = {
          type: Ti.pattern,
          message: Z,
          ref: o,
          ...j(Ti.pattern, Z)
      },
      !n))
          return b(Z),
          k
  }
  if (g) {
      if (uo(g)) {
          const I = await g(w, t)
            , Z = Pw(I, S);
          if (Z && (k[_] = {
              ...Z,
              ...j(Ti.validate, Z.message)
          },
          !n))
              return b(Z.message),
              k
      } else if (sn(g)) {
          let I = {};
          for (const Z in g) {
              if (!Or(I) && !n)
                  break;
              const te = Pw(await g[Z](w, t), S, Z);
              te && (I = {
                  ...te,
                  ...j(Z, te.message)
              },
              b(te.message),
              n && (k[_] = I))
          }
          if (!Or(I) && (k[_] = {
              ref: S,
              ...I
          },
          !n))
              return k
      }
  }
  return b(!0),
  k
}
;
function OI(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
      e = Xt(e) ? r++ : e[t[r++]];
  return e
}
function AI(e) {
  for (const t in e)
      if (e.hasOwnProperty(t) && !Xt(e[t]))
          return !1;
  return !0
}
function yn(e, t) {
  const n = Array.isArray(t) ? t : Zg(t) ? [t] : Zx(t)
    , r = n.length === 1 ? e : OI(e, n)
    , i = n.length - 1
    , o = n[i];
  return r && delete r[o],
  i !== 0 && (sn(r) && Or(r) || Array.isArray(r) && AI(r)) && yn(e, n.slice(0, -1)),
  e
}
function Dp() {
  let e = [];
  return {
      get observers() {
          return e
      },
      next: i => {
          for (const o of e)
              o.next && o.next(i)
      }
      ,
      subscribe: i => (e.push(i),
      {
          unsubscribe: () => {
              e = e.filter(o => o !== i)
          }
      }),
      unsubscribe: () => {
          e = []
      }
  }
}
var If = e => $n(e) || !Jx(e);
function es(e, t) {
  if (If(e) || If(t))
      return e === t;
  if (sa(e) && sa(t))
      return e.getTime() === t.getTime();
  const n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (const i of n) {
      const o = e[i];
      if (!r.includes(i))
          return !1;
      if (i !== "ref") {
          const s = t[i];
          if (sa(o) && sa(s) || sn(o) && sn(s) || Array.isArray(o) && Array.isArray(s) ? !es(o, s) : o !== s)
              return !1
      }
  }
  return !0
}
var nS = e => e.type === "select-multiple"
, RI = e => tv(e) || Nu(e)
, Lp = e => Lf(e) && e.isConnected
, rS = e => {
  for (const t in e)
      if (uo(e[t]))
          return !0;
  return !1
}
;
function Nf(e, t={}) {
  const n = Array.isArray(e);
  if (sn(e) || n)
      for (const r in e)
          Array.isArray(e[r]) || sn(e[r]) && !rS(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {},
          Nf(e[r], t[r])) : $n(e[r]) || (t[r] = !0);
  return t
}
function iS(e, t, n) {
  const r = Array.isArray(e);
  if (sn(e) || r)
      for (const i in e)
          Array.isArray(e[i]) || sn(e[i]) && !rS(e[i]) ? Xt(t) || If(n[i]) ? n[i] = Array.isArray(e[i]) ? Nf(e[i], []) : {
              ...Nf(e[i])
          } : iS(e[i], $n(t) ? {} : t[i], n[i]) : n[i] = !es(e[i], t[i]);
  return n
}
var Mp = (e, t) => iS(e, t, Nf(t))
, oS = (e, {valueAsNumber: t, valueAsDate: n, setValueAs: r}) => Xt(e) ? e : t ? e === "" ? NaN : e && +e : n && pi(e) ? new Date(e) : r ? r(e) : e;
function Ip(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled))
      return ev(t) ? t.files : tv(t) ? tS(e.refs).value : nS(t) ? [...t.selectedOptions].map( ({value: n}) => n) : Nu(t) ? eS(e.refs).value : oS(Xt(t.value) ? e.ref.value : t.value, e)
}
var DI = (e, t, n, r) => {
  const i = {};
  for (const o of e) {
      const s = ve(t, o);
      s && xt(i, o, s._f)
  }
  return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r
  }
}
, gl = e => Xt(e) ? e : Mf(e) ? e.source : sn(e) ? Mf(e.value) ? e.value.source : e.value : e
, LI = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Aw(e, t, n) {
  const r = ve(e, n);
  if (r || Zg(n))
      return {
          error: r,
          name: n
      };
  const i = n.split(".");
  for (; i.length; ) {
      const o = i.join(".")
        , s = ve(t, o)
        , a = ve(e, o);
      if (s && !Array.isArray(s) && n !== o)
          return {
              name: n
          };
      if (a && a.type)
          return {
              name: o,
              error: a
          };
      i.pop()
  }
  return {
      name: n
  }
}
var MI = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0
, II = (e, t) => !Fu(ve(e, t)).length && yn(e, t);
const NI = {
  mode: Jr.onSubmit,
  reValidateMode: Jr.onChange,
  shouldFocusError: !0
};
function FI(e={}, t) {
  let n = {
      ...NI,
      ...e
  }, r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: uo(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {}
  }, i = {}, o = sn(n.defaultValues) || sn(n.values) ? Ci(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : Ci(o), a = {
      action: !1,
      mount: !1,
      watch: !1
  }, l = {
      mount: new Set,
      unMount: new Set,
      array: new Set,
      watch: new Set
  }, u, f = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
  }
    , h = {
      values: Dp(),
      array: Dp(),
      state: Dp()
  }
    , g = e.resetOptions && e.resetOptions.keepDirtyValues
    , _ = Sw(n.mode)
    , m = Sw(n.reValidateMode)
    , T = n.criteriaMode === Jr.all
    , x = E => F => {
      clearTimeout(f),
      f = setTimeout(E, F)
  }
    , w = async E => {
      if (d.isValid || E) {
          const F = n.resolver ? Or((await M()).errors) : await Q(i, !0);
          F !== r.isValid && h.state.next({
              isValid: F
          })
      }
  }
    , S = E => d.isValidating && h.state.next({
      isValidating: E
  })
    , b = (E, F=[], $, q, Y=!0, G=!0) => {
      if (q && $) {
          if (a.action = !0,
          G && Array.isArray(ve(i, E))) {
              const fe = $(ve(i, E), q.argA, q.argB);
              Y && xt(i, E, fe)
          }
          if (G && Array.isArray(ve(r.errors, E))) {
              const fe = $(ve(r.errors, E), q.argA, q.argB);
              Y && xt(r.errors, E, fe),
              II(r.errors, E)
          }
          if (d.touchedFields && G && Array.isArray(ve(r.touchedFields, E))) {
              const fe = $(ve(r.touchedFields, E), q.argA, q.argB);
              Y && xt(r.touchedFields, E, fe)
          }
          d.dirtyFields && (r.dirtyFields = Mp(o, s)),
          h.state.next({
              name: E,
              isDirty: Z(E, F),
              dirtyFields: r.dirtyFields,
              errors: r.errors,
              isValid: r.isValid
          })
      } else
          xt(s, E, F)
  }
    , k = (E, F) => {
      xt(r.errors, E, F),
      h.state.next({
          errors: r.errors
      })
  }
    , D = (E, F, $, q) => {
      const Y = ve(i, E);
      if (Y) {
          const G = ve(s, E, Xt($) ? ve(o, E) : $);
          Xt(G) || q && q.defaultChecked || F ? xt(s, E, F ? G : Ip(Y._f)) : ae(E, G),
          a.mount && w()
      }
  }
    , O = (E, F, $, q, Y) => {
      let G = !1
        , fe = !1;
      const Ke = {
          name: E
      };
      if (!$ || q) {
          d.isDirty && (fe = r.isDirty,
          r.isDirty = Ke.isDirty = Z(),
          G = fe !== Ke.isDirty);
          const Ce = es(ve(o, E), F);
          fe = ve(r.dirtyFields, E),
          Ce ? yn(r.dirtyFields, E) : xt(r.dirtyFields, E, !0),
          Ke.dirtyFields = r.dirtyFields,
          G = G || d.dirtyFields && fe !== !Ce
      }
      if ($) {
          const Ce = ve(r.touchedFields, E);
          Ce || (xt(r.touchedFields, E, $),
          Ke.touchedFields = r.touchedFields,
          G = G || d.touchedFields && Ce !== $)
      }
      return G && Y && h.state.next(Ke),
      G ? Ke : {}
  }
    , R = (E, F, $, q) => {
      const Y = ve(r.errors, E)
        , G = d.isValid && Zo(F) && r.isValid !== F;
      if (e.delayError && $ ? (u = x( () => k(E, $)),
      u(e.delayError)) : (clearTimeout(f),
      u = null,
      $ ? xt(r.errors, E, $) : yn(r.errors, E)),
      ($ ? !es(Y, $) : Y) || !Or(q) || G) {
          const fe = {
              ...q,
              ...G && Zo(F) ? {
                  isValid: F
              } : {},
              errors: r.errors,
              name: E
          };
          r = {
              ...r,
              ...fe
          },
          h.state.next(fe)
      }
      S(!1)
  }
    , M = async E => n.resolver(s, n.context, DI(E || l.mount, i, n.criteriaMode, n.shouldUseNativeValidation))
    , j = async E => {
      const {errors: F} = await M(E);
      if (E)
          for (const $ of E) {
              const q = ve(F, $);
              q ? xt(r.errors, $, q) : yn(r.errors, $)
          }
      else
          r.errors = F;
      return F
  }
    , Q = async (E, F, $={
      valid: !0
  }) => {
      for (const q in E) {
          const Y = E[q];
          if (Y) {
              const {_f: G, ...fe} = Y;
              if (G) {
                  const Ke = l.array.has(G.name)
                    , Ce = await Ow(Y, s, T, n.shouldUseNativeValidation && !F, Ke);
                  if (Ce[G.name] && ($.valid = !1,
                  F))
                      break;
                  !F && (ve(Ce, G.name) ? Ke ? PI(r.errors, Ce, G.name) : xt(r.errors, G.name, Ce[G.name]) : yn(r.errors, G.name))
              }
              fe && await Q(fe, F, $)
          }
      }
      return $.valid
  }
    , I = () => {
      for (const E of l.unMount) {
          const F = ve(i, E);
          F && (F._f.refs ? F._f.refs.every($ => !Lp($)) : !Lp(F._f.ref)) && Ze(E)
      }
      l.unMount = new Set
  }
    , Z = (E, F) => (E && F && xt(s, E, F),
  !es(me(), o))
    , te = (E, F, $) => CI(E, l, {
      ...a.mount ? s : Xt(F) ? o : pi(E) ? {
          [E]: F
      } : F
  }, $, F)
    , ue = E => Fu(ve(a.mount ? s : o, E, e.shouldUnregister ? ve(o, E, []) : []))
    , ae = (E, F, $={}) => {
      const q = ve(i, E);
      let Y = F;
      if (q) {
          const G = q._f;
          G && (!G.disabled && xt(s, E, oS(F, G)),
          Y = Lf(G.ref) && $n(F) ? "" : F,
          nS(G.ref) ? [...G.ref.options].forEach(fe => fe.selected = Y.includes(fe.value)) : G.refs ? Nu(G.ref) ? G.refs.length > 1 ? G.refs.forEach(fe => (!fe.defaultChecked || !fe.disabled) && (fe.checked = Array.isArray(Y) ? !!Y.find(Ke => Ke === fe.value) : Y === fe.value)) : G.refs[0] && (G.refs[0].checked = !!Y) : G.refs.forEach(fe => fe.checked = fe.value === Y) : ev(G.ref) ? G.ref.value = "" : (G.ref.value = Y,
          G.ref.type || h.values.next({
              name: E,
              values: {
                  ...s
              }
          })))
      }
      ($.shouldDirty || $.shouldTouch) && O(E, Y, $.shouldTouch, $.shouldDirty, !0),
      $.shouldValidate && A(E)
  }
    , oe = (E, F, $) => {
      for (const q in F) {
          const Y = F[q]
            , G = `${E}.${q}`
            , fe = ve(i, G);
          (l.array.has(E) || !If(Y) || fe && !fe._f) && !sa(Y) ? oe(G, Y, $) : ae(G, Y, $)
      }
  }
    , L = (E, F, $={}) => {
      const q = ve(i, E)
        , Y = l.array.has(E)
        , G = Ci(F);
      xt(s, E, G),
      Y ? (h.array.next({
          name: E,
          values: {
              ...s
          }
      }),
      (d.isDirty || d.dirtyFields) && $.shouldDirty && h.state.next({
          name: E,
          dirtyFields: Mp(o, s),
          isDirty: Z(E, G)
      })) : q && !q._f && !$n(G) ? oe(E, G, $) : ae(E, G, $),
      Ew(E, l) && h.state.next({
          ...r
      }),
      h.values.next({
          name: E,
          values: {
              ...s
          }
      }),
      !a.mount && t()
  }
    , K = async E => {
      const F = E.target;
      let $ = F.name
        , q = !0;
      const Y = ve(i, $)
        , G = () => F.type ? Ip(Y._f) : wI(E);
      if (Y) {
          let fe, Ke;
          const Ce = G()
            , je = E.type === xw.BLUR || E.type === xw.FOCUS_OUT
            , zt = !LI(Y._f) && !n.resolver && !ve(r.errors, $) && !Y._f.deps || MI(je, ve(r.touchedFields, $), r.isSubmitted, m, _)
            , it = Ew($, l, je);
          xt(s, $, Ce),
          je ? (Y._f.onBlur && Y._f.onBlur(E),
          u && u(0)) : Y._f.onChange && Y._f.onChange(E);
          const qt = O($, Ce, je, !1)
            , Dt = !Or(qt) || it;
          if (!je && h.values.next({
              name: $,
              type: E.type,
              values: {
                  ...s
              }
          }),
          zt)
              return d.isValid && w(),
              Dt && h.state.next({
                  name: $,
                  ...it ? {} : qt
              });
          if (!je && it && h.state.next({
              ...r
          }),
          S(!0),
          n.resolver) {
              const {errors: vn} = await M([$])
                , dt = Aw(r.errors, i, $)
                , an = Aw(vn, i, dt.name || $);
              fe = an.error,
              $ = an.name,
              Ke = Or(vn)
          } else
              fe = (await Ow(Y, s, T, n.shouldUseNativeValidation))[$],
              q = Number.isNaN(Ce) || Ce === ve(s, $, Ce),
              q && (fe ? Ke = !1 : d.isValid && (Ke = await Q(i, !0)));
          q && (Y._f.deps && A(Y._f.deps),
          R($, Ke, fe, qt))
      }
  }
    , A = async (E, F={}) => {
      let $, q;
      const Y = Rp(E);
      if (S(!0),
      n.resolver) {
          const G = await j(Xt(E) ? E : Y);
          $ = Or(G),
          q = E ? !Y.some(fe => ve(G, fe)) : $
      } else
          E ? (q = (await Promise.all(Y.map(async G => {
              const fe = ve(i, G);
              return await Q(fe && fe._f ? {
                  [G]: fe
              } : fe)
          }
          ))).every(Boolean),
          !(!q && !r.isValid) && w()) : q = $ = await Q(i);
      return h.state.next({
          ...!pi(E) || d.isValid && $ !== r.isValid ? {} : {
              name: E
          },
          ...n.resolver || !E ? {
              isValid: $
          } : {},
          errors: r.errors,
          isValidating: !1
      }),
      F.shouldFocus && !q && mm(i, G => G && ve(r.errors, G), E ? Y : l.mount),
      q
  }
    , me = E => {
      const F = {
          ...o,
          ...a.mount ? s : {}
      };
      return Xt(E) ? F : pi(E) ? ve(F, E) : E.map($ => ve(F, $))
  }
    , Te = (E, F) => ({
      invalid: !!ve((F || r).errors, E),
      isDirty: !!ve((F || r).dirtyFields, E),
      isTouched: !!ve((F || r).touchedFields, E),
      error: ve((F || r).errors, E)
  })
    , N = E => {
      E && Rp(E).forEach(F => yn(r.errors, F)),
      h.state.next({
          errors: E ? r.errors : {}
      })
  }
    , xe = (E, F, $) => {
      const q = (ve(i, E, {
          _f: {}
      })._f || {}).ref;
      xt(r.errors, E, {
          ...F,
          ref: q
      }),
      h.state.next({
          name: E,
          errors: r.errors,
          isValid: !1
      }),
      $ && $.shouldFocus && q && q.focus && q.focus()
  }
    , Ge = (E, F) => uo(E) ? h.values.subscribe({
      next: $ => E(te(void 0, F), $)
  }) : te(E, F, !0)
    , Ze = (E, F={}) => {
      for (const $ of E ? Rp(E) : l.mount)
          l.mount.delete($),
          l.array.delete($),
          F.keepValue || (yn(i, $),
          yn(s, $)),
          !F.keepError && yn(r.errors, $),
          !F.keepDirty && yn(r.dirtyFields, $),
          !F.keepTouched && yn(r.touchedFields, $),
          !n.shouldUnregister && !F.keepDefaultValue && yn(o, $);
      h.values.next({
          values: {
              ...s
          }
      }),
      h.state.next({
          ...r,
          ...F.keepDirty ? {
              isDirty: Z()
          } : {}
      }),
      !F.keepIsValid && w()
  }
    , Xe = ({disabled: E, name: F, field: $, fields: q}) => {
      if (Zo(E)) {
          const Y = E ? void 0 : ve(s, F, Ip($ ? $._f : ve(q, F)._f));
          xt(s, F, Y),
          O(F, Y, !1, !1, !0)
      }
  }
    , Oe = (E, F={}) => {
      let $ = ve(i, E);
      const q = Zo(F.disabled);
      return xt(i, E, {
          ...$ || {},
          _f: {
              ...$ && $._f ? $._f : {
                  ref: {
                      name: E
                  }
              },
              name: E,
              mount: !0,
              ...F
          }
      }),
      l.mount.add(E),
      $ ? Xe({
          field: $,
          disabled: F.disabled,
          name: E
      }) : D(E, !0, F.value),
      {
          ...q ? {
              disabled: F.disabled
          } : {},
          ...n.progressive ? {
              required: !!F.required,
              min: gl(F.min),
              max: gl(F.max),
              minLength: gl(F.minLength),
              maxLength: gl(F.maxLength),
              pattern: gl(F.pattern)
          } : {},
          name: E,
          onChange: K,
          onBlur: K,
          ref: Y => {
              if (Y) {
                  Oe(E, F),
                  $ = ve(i, E);
                  const G = Xt(Y.value) && Y.querySelectorAll && Y.querySelectorAll("input,select,textarea")[0] || Y
                    , fe = RI(G)
                    , Ke = $._f.refs || [];
                  if (fe ? Ke.find(Ce => Ce === G) : G === $._f.ref)
                      return;
                  xt(i, E, {
                      _f: {
                          ...$._f,
                          ...fe ? {
                              refs: [...Ke.filter(Lp), G, ...Array.isArray(ve(o, E)) ? [{}] : []],
                              ref: {
                                  type: G.type,
                                  name: E
                              }
                          } : {
                              ref: G
                          }
                      }
                  }),
                  D(E, !1, void 0, G)
              } else
                  $ = ve(i, E, {}),
                  $._f && ($._f.mount = !1),
                  (n.shouldUnregister || F.shouldUnregister) && !(bI(l.array, E) && a.action) && l.unMount.add(E)
          }
      }
  }
    , ot = () => n.shouldFocusError && mm(i, E => E && ve(r.errors, E), l.mount)
    , Tn = (E, F) => async $ => {
      $ && ($.preventDefault && $.preventDefault(),
      $.persist && $.persist());
      let q = Ci(s);
      if (h.state.next({
          isSubmitting: !0
      }),
      n.resolver) {
          const {errors: Y, values: G} = await M();
          r.errors = Y,
          q = G
      } else
          await Q(i);
      yn(r.errors, "root"),
      Or(r.errors) ? (h.state.next({
          errors: {}
      }),
      await E(q, $)) : (F && await F({
          ...r.errors
      }, $),
      ot(),
      setTimeout(ot)),
      h.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Or(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors
      })
  }
    , Ft = (E, F={}) => {
      ve(i, E) && (Xt(F.defaultValue) ? L(E, ve(o, E)) : (L(E, F.defaultValue),
      xt(o, E, F.defaultValue)),
      F.keepTouched || yn(r.touchedFields, E),
      F.keepDirty || (yn(r.dirtyFields, E),
      r.isDirty = F.defaultValue ? Z(E, ve(o, E)) : Z()),
      F.keepError || (yn(r.errors, E),
      d.isValid && w()),
      h.state.next({
          ...r
      }))
  }
    , gn = (E, F={}) => {
      const $ = E ? Ci(E) : o
        , q = Ci($)
        , Y = E && !Or(E) ? q : o;
      if (F.keepDefaultValues || (o = $),
      !F.keepValues) {
          if (F.keepDirtyValues || g)
              for (const G of l.mount)
                  ve(r.dirtyFields, G) ? xt(Y, G, ve(s, G)) : L(G, ve(Y, G));
          else {
              if (Jg && Xt(E))
                  for (const G of l.mount) {
                      const fe = ve(i, G);
                      if (fe && fe._f) {
                          const Ke = Array.isArray(fe._f.refs) ? fe._f.refs[0] : fe._f.ref;
                          if (Lf(Ke)) {
                              const Ce = Ke.closest("form");
                              if (Ce) {
                                  Ce.reset();
                                  break
                              }
                          }
                      }
                  }
              i = {}
          }
          s = e.shouldUnregister ? F.keepDefaultValues ? Ci(o) : {} : Ci(Y),
          h.array.next({
              values: {
                  ...Y
              }
          }),
          h.values.next({
              values: {
                  ...Y
              }
          })
      }
      l = {
          mount: new Set,
          unMount: new Set,
          array: new Set,
          watch: new Set,
          watchAll: !1,
          focus: ""
      },
      !a.mount && t(),
      a.mount = !d.isValid || !!F.keepIsValid,
      a.watch = !!e.shouldUnregister,
      h.state.next({
          submitCount: F.keepSubmitCount ? r.submitCount : 0,
          isDirty: F.keepDirty ? r.isDirty : !!(F.keepDefaultValues && !es(E, o)),
          isSubmitted: F.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: F.keepDirtyValues ? r.dirtyFields : F.keepDefaultValues && E ? Mp(o, E) : {},
          touchedFields: F.keepTouched ? r.touchedFields : {},
          errors: F.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1
      })
  }
    , Ae = (E, F) => gn(uo(E) ? E(s) : E, F);
  return {
      control: {
          register: Oe,
          unregister: Ze,
          getFieldState: Te,
          handleSubmit: Tn,
          setError: xe,
          _executeSchema: M,
          _getWatch: te,
          _getDirty: Z,
          _updateValid: w,
          _removeUnmounted: I,
          _updateFieldArray: b,
          _updateDisabledField: Xe,
          _getFieldArray: ue,
          _reset: gn,
          _resetDefaultValues: () => uo(n.defaultValues) && n.defaultValues().then(E => {
              Ae(E, n.resetOptions),
              h.state.next({
                  isLoading: !1
              })
          }
          ),
          _updateFormState: E => {
              r = {
                  ...r,
                  ...E
              }
          }
          ,
          _subjects: h,
          _proxyFormState: d,
          get _fields() {
              return i
          },
          get _formValues() {
              return s
          },
          get _state() {
              return a
          },
          set _state(E) {
              a = E
          },
          get _defaultValues() {
              return o
          },
          get _names() {
              return l
          },
          set _names(E) {
              l = E
          },
          get _formState() {
              return r
          },
          set _formState(E) {
              r = E
          },
          get _options() {
              return n
          },
          set _options(E) {
              n = {
                  ...n,
                  ...E
              }
          }
      },
      trigger: A,
      register: Oe,
      handleSubmit: Tn,
      watch: Ge,
      setValue: L,
      getValues: me,
      reset: Ae,
      resetField: Ft,
      clearErrors: N,
      unregister: Ze,
      setError: xe,
      setFocus: (E, F={}) => {
          const $ = ve(i, E)
            , q = $ && $._f;
          if (q) {
              const Y = q.refs ? q.refs[0] : q.ref;
              Y.focus && (Y.focus(),
              F.shouldSelect && Y.select())
          }
      }
      ,
      getFieldState: Te
  }
}
function jI(e={}) {
  const t = Jn.useRef()
    , n = Jn.useRef()
    , [r,i] = Jn.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: uo(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: uo(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
      ...FI(e, () => i(s => ({
          ...s
      }))),
      formState: r
  });
  const o = t.current.control;
  return o._options = e,
  TI({
      subject: o._subjects.state,
      next: s => {
          EI(s, o._proxyFormState, o._updateFormState, !0) && i({
              ...o._formState
          })
      }
  }),
  Jn.useEffect( () => {
      e.values && !es(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions),
      n.current = e.values) : o._resetDefaultValues()
  }
  , [e.values, o]),
  Jn.useEffect( () => {
      o._state.mount || (o._updateValid(),
      o._state.mount = !0),
      o._state.watch && (o._state.watch = !1,
      o._subjects.state.next({
          ...o._formState
      })),
      o._removeUnmounted()
  }
  ),
  t.current.formState = SI(r, o),
  t.current
}
var sS = {
  exports: {}
};
/*!
* sweetalert2 v11.10.7
* Released under the MIT License.
*/
(function(e, t) {
  (function(n, r) {
      e.exports = r()
  }
  )(Ki, function() {
      function n(y, c, p) {
          if (typeof y == "function" ? y === c : y.has(c))
              return arguments.length < 3 ? c : p;
          throw new TypeError("Private element is not present on this object")
      }
      function r(y, c, p) {
          return c = T(c),
          S(y, a() ? Reflect.construct(c, p || [], T(y).constructor) : c.apply(y, p))
      }
      function i(y, c) {
          return y.get(n(y, c))
      }
      function o(y, c, p) {
          return y.set(n(y, c), p),
          p
      }
      function s(y, c, p) {
          if (a())
              return Reflect.construct.apply(null, arguments);
          var v = [null];
          v.push.apply(v, c);
          var P = new (y.bind.apply(y, v));
          return p && x(P, p.prototype),
          P
      }
      function a() {
          try {
              var y = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
          } catch {}
          return (a = function() {
              return !!y
          }
          )()
      }
      function l(y, c) {
          var p = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
          if (p != null) {
              var v, P, U, le, Ie = [], ze = !0, Lt = !1;
              try {
                  if (U = (p = p.call(y)).next,
                  c === 0) {
                      if (Object(p) !== p)
                          return;
                      ze = !1
                  } else
                      for (; !(ze = (v = U.call(p)).done) && (Ie.push(v.value),
                      Ie.length !== c); ze = !0)
                          ;
              } catch (Ja) {
                  Lt = !0,
                  P = Ja
              } finally {
                  try {
                      if (!ze && p.return != null && (le = p.return(),
                      Object(le) !== le))
                          return
                  } finally {
                      if (Lt)
                          throw P
                  }
              }
              return Ie
          }
      }
      function u(y, c) {
          if (typeof y != "object" || !y)
              return y;
          var p = y[Symbol.toPrimitive];
          if (p !== void 0) {
              var v = p.call(y, c || "default");
              if (typeof v != "object")
                  return v;
              throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return (c === "string" ? String : Number)(y)
      }
      function f(y) {
          var c = u(y, "string");
          return typeof c == "symbol" ? c : String(c)
      }
      function d(y) {
          "@babel/helpers - typeof";
          return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
              return typeof c
          }
          : function(c) {
              return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
          }
          ,
          d(y)
      }
      function h(y, c) {
          if (!(y instanceof c))
              throw new TypeError("Cannot call a class as a function")
      }
      function g(y, c) {
          for (var p = 0; p < c.length; p++) {
              var v = c[p];
              v.enumerable = v.enumerable || !1,
              v.configurable = !0,
              "value"in v && (v.writable = !0),
              Object.defineProperty(y, f(v.key), v)
          }
      }
      function _(y, c, p) {
          return c && g(y.prototype, c),
          p && g(y, p),
          Object.defineProperty(y, "prototype", {
              writable: !1
          }),
          y
      }
      function m(y, c) {
          if (typeof c != "function" && c !== null)
              throw new TypeError("Super expression must either be null or a function");
          y.prototype = Object.create(c && c.prototype, {
              constructor: {
                  value: y,
                  writable: !0,
                  configurable: !0
              }
          }),
          Object.defineProperty(y, "prototype", {
              writable: !1
          }),
          c && x(y, c)
      }
      function T(y) {
          return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(p) {
              return p.__proto__ || Object.getPrototypeOf(p)
          }
          ,
          T(y)
      }
      function x(y, c) {
          return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, P) {
              return v.__proto__ = P,
              v
          }
          ,
          x(y, c)
      }
      function w(y) {
          if (y === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return y
      }
      function S(y, c) {
          if (c && (typeof c == "object" || typeof c == "function"))
              return c;
          if (c !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
          return w(y)
      }
      function b(y, c) {
          for (; !Object.prototype.hasOwnProperty.call(y, c) && (y = T(y),
          y !== null); )
              ;
          return y
      }
      function k() {
          return typeof Reflect < "u" && Reflect.get ? k = Reflect.get.bind() : k = function(c, p, v) {
              var P = b(c, p);
              if (P) {
                  var U = Object.getOwnPropertyDescriptor(P, p);
                  return U.get ? U.get.call(arguments.length < 3 ? c : v) : U.value
              }
          }
          ,
          k.apply(this, arguments)
      }
      function D(y, c) {
          return M(y) || l(y, c) || Q(y, c) || te()
      }
      function O(y) {
          return R(y) || j(y) || Q(y) || Z()
      }
      function R(y) {
          if (Array.isArray(y))
              return I(y)
      }
      function M(y) {
          if (Array.isArray(y))
              return y
      }
      function j(y) {
          if (typeof Symbol < "u" && y[Symbol.iterator] != null || y["@@iterator"] != null)
              return Array.from(y)
      }
      function Q(y, c) {
          if (y) {
              if (typeof y == "string")
                  return I(y, c);
              var p = Object.prototype.toString.call(y).slice(8, -1);
              if (p === "Object" && y.constructor && (p = y.constructor.name),
              p === "Map" || p === "Set")
                  return Array.from(y);
              if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                  return I(y, c)
          }
      }
      function I(y, c) {
          (c == null || c > y.length) && (c = y.length);
          for (var p = 0, v = new Array(c); p < c; p++)
              v[p] = y[p];
          return v
      }
      function Z() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function te() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function ue(y, c) {
          if (c.has(y))
              throw new TypeError("Cannot initialize the same private elements twice on an object")
      }
      function ae(y, c, p) {
          ue(y, c),
          c.set(y, p)
      }
      var oe = 100
        , L = {}
        , K = function() {
          L.previousActiveElement instanceof HTMLElement ? (L.previousActiveElement.focus(),
          L.previousActiveElement = null) : document.body && document.body.focus()
      }
        , A = function(c) {
          return new Promise(function(p) {
              if (!c)
                  return p();
              var v = window.scrollX
                , P = window.scrollY;
              L.restoreFocusTimeout = setTimeout(function() {
                  K(),
                  p()
              }, oe),
              window.scrollTo(v, P)
          }
          )
      }
        , me = "swal2-"
        , Te = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]
        , N = Te.reduce(function(y, c) {
          return y[c] = me + c,
          y
      }, {})
        , xe = ["success", "warning", "info", "question", "error"]
        , Ge = xe.reduce(function(y, c) {
          return y[c] = me + c,
          y
      }, {})
        , Ze = "SweetAlert2:"
        , Xe = function(c) {
          return c.charAt(0).toUpperCase() + c.slice(1)
      }
        , Oe = function(c) {
          console.warn("".concat(Ze, " ").concat(d(c) === "object" ? c.join(" ") : c))
      }
        , ot = function(c) {
          console.error("".concat(Ze, " ").concat(c))
      }
        , Tn = []
        , Ft = function(c) {
          Tn.includes(c) || (Tn.push(c),
          Oe(c))
      }
        , gn = function(c, p) {
          Ft('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(p, '" instead.'))
      }
        , Ae = function(c) {
          return typeof c == "function" ? c() : c
      }
        , lt = function(c) {
          return c && typeof c.toPromise == "function"
      }
        , ut = function(c) {
          return lt(c) ? c.toPromise() : Promise.resolve(c)
      }
        , jt = function(c) {
          return c && Promise.resolve(c) === c
      }
        , E = function() {
          return document.body.querySelector(".".concat(N.container))
      }
        , F = function(c) {
          var p = E();
          return p ? p.querySelector(c) : null
      }
        , $ = function(c) {
          return F(".".concat(c))
      }
        , q = function() {
          return $(N.popup)
      }
        , Y = function() {
          return $(N.icon)
      }
        , G = function() {
          return $(N["icon-content"])
      }
        , fe = function() {
          return $(N.title)
      }
        , Ke = function() {
          return $(N["html-container"])
      }
        , Ce = function() {
          return $(N.image)
      }
        , je = function() {
          return $(N["progress-steps"])
      }
        , zt = function() {
          return $(N["validation-message"])
      }
        , it = function() {
          return F(".".concat(N.actions, " .").concat(N.confirm))
      }
        , qt = function() {
          return F(".".concat(N.actions, " .").concat(N.cancel))
      }
        , Dt = function() {
          return F(".".concat(N.actions, " .").concat(N.deny))
      }
        , vn = function() {
          return $(N["input-label"])
      }
        , dt = function() {
          return F(".".concat(N.loader))
      }
        , an = function() {
          return $(N.actions)
      }
        , z = function() {
          return $(N.footer)
      }
        , B = function() {
          return $(N["timer-progress-bar"])
      }
        , W = function() {
          return $(N.close)
      }
        , re = `
a[href],
area[href],
input:not([disabled]),
select:not([disabled]),
textarea:not([disabled]),
button:not([disabled]),
iframe,
object,
embed,
[tabindex="0"],
[contenteditable],
audio[controls],
video[controls],
summary
`
        , _e = function() {
          var c = q();
          if (!c)
              return [];
          var p = c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
            , v = Array.from(p).sort(function(le, Ie) {
              var ze = parseInt(le.getAttribute("tabindex") || "0")
                , Lt = parseInt(Ie.getAttribute("tabindex") || "0");
              return ze > Lt ? 1 : ze < Lt ? -1 : 0
          })
            , P = c.querySelectorAll(re)
            , U = Array.from(P).filter(function(le) {
              return le.getAttribute("tabindex") !== "-1"
          });
          return O(new Set(v.concat(U))).filter(function(le) {
              return we(le)
          })
      }
        , J = function() {
          return ke(document.body, N.shown) && !ke(document.body, N["toast-shown"]) && !ke(document.body, N["no-backdrop"])
      }
        , be = function() {
          var c = q();
          return c ? ke(c, N.toast) : !1
      }
        , he = function() {
          var c = q();
          return c ? c.hasAttribute("data-loading") : !1
      }
        , ee = function(c, p) {
          if (c.textContent = "",
          p) {
              var v = new DOMParser
                , P = v.parseFromString(p, "text/html")
                , U = P.querySelector("head");
              U && Array.from(U.childNodes).forEach(function(Ie) {
                  c.appendChild(Ie)
              });
              var le = P.querySelector("body");
              le && Array.from(le.childNodes).forEach(function(Ie) {
                  Ie instanceof HTMLVideoElement || Ie instanceof HTMLAudioElement ? c.appendChild(Ie.cloneNode(!0)) : c.appendChild(Ie)
              })
          }
      }
        , ke = function(c, p) {
          if (!p)
              return !1;
          for (var v = p.split(/\s+/), P = 0; P < v.length; P++)
              if (!c.classList.contains(v[P]))
                  return !1;
          return !0
      }
        , pt = function(c, p) {
          Array.from(c.classList).forEach(function(v) {
              !Object.values(N).includes(v) && !Object.values(Ge).includes(v) && !Object.values(p.showClass || {}).includes(v) && c.classList.remove(v)
          })
      }
        , Se = function(c, p, v) {
          if (pt(c, p),
          p.customClass && p.customClass[v]) {
              if (typeof p.customClass[v] != "string" && !p.customClass[v].forEach) {
                  Oe("Invalid type of customClass.".concat(v, '! Expected string or iterable object, got "').concat(d(p.customClass[v]), '"'));
                  return
              }
              se(c, p.customClass[v])
          }
      }
        , Re = function(c, p) {
          if (!p)
              return null;
          switch (p) {
          case "select":
          case "textarea":
          case "file":
              return c.querySelector(".".concat(N.popup, " > .").concat(N[p]));
          case "checkbox":
              return c.querySelector(".".concat(N.popup, " > .").concat(N.checkbox, " input"));
          case "radio":
              return c.querySelector(".".concat(N.popup, " > .").concat(N.radio, " input:checked")) || c.querySelector(".".concat(N.popup, " > .").concat(N.radio, " input:first-child"));
          case "range":
              return c.querySelector(".".concat(N.popup, " > .").concat(N.range, " input"));
          default:
              return c.querySelector(".".concat(N.popup, " > .").concat(N.input))
          }
      }
        , ce = function(c) {
          if (c.focus(),
          c.type !== "file") {
              var p = c.value;
              c.value = "",
              c.value = p
          }
      }
        , ge = function(c, p, v) {
          !c || !p || (typeof p == "string" && (p = p.split(/\s+/).filter(Boolean)),
          p.forEach(function(P) {
              Array.isArray(c) ? c.forEach(function(U) {
                  v ? U.classList.add(P) : U.classList.remove(P)
              }) : v ? c.classList.add(P) : c.classList.remove(P)
          }))
      }
        , se = function(c, p) {
          ge(c, p, !0)
      }
        , Me = function(c, p) {
          ge(c, p, !1)
      }
        , ne = function(c, p) {
          for (var v = Array.from(c.children), P = 0; P < v.length; P++) {
              var U = v[P];
              if (U instanceof HTMLElement && ke(U, p))
                  return U
          }
      }
        , Ee = function(c, p, v) {
          v === "".concat(parseInt(v)) && (v = parseInt(v)),
          v || parseInt(v) === 0 ? c.style.setProperty(p, typeof v == "number" ? "".concat(v, "px") : v) : c.style.removeProperty(p)
      }
        , ie = function(c) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
          c && (c.style.display = p)
      }
        , ye = function(c) {
          c && (c.style.display = "none")
      }
        , ht = function(c) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
          c && new MutationObserver(function() {
              tt(c, c.innerHTML, p)
          }
          ).observe(c, {
              childList: !0,
              subtree: !0
          })
      }
        , Le = function(c, p, v, P) {
          var U = c.querySelector(p);
          U && U.style.setProperty(v, P)
      }
        , tt = function(c, p) {
          var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
          p ? ie(c, v) : ye(c)
      }
        , we = function(c) {
          return !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length))
      }
        , nt = function() {
          return !we(it()) && !we(Dt()) && !we(qt())
      }
        , He = function(c) {
          return c.scrollHeight > c.clientHeight
      }
        , Qe = function(c) {
          var p = window.getComputedStyle(c)
            , v = parseFloat(p.getPropertyValue("animation-duration") || "0")
            , P = parseFloat(p.getPropertyValue("transition-duration") || "0");
          return v > 0 || P > 0
      }
        , We = function(c) {
          var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
            , v = B();
          v && we(v) && (p && (v.style.transition = "none",
          v.style.width = "100%"),
          setTimeout(function() {
              v.style.transition = "width ".concat(c / 1e3, "s linear"),
              v.style.width = "0%"
          }, 10))
      }
        , rt = function() {
          var c = B();
          if (c) {
              var p = parseInt(window.getComputedStyle(c).width);
              c.style.removeProperty("transition"),
              c.style.width = "100%";
              var v = parseInt(window.getComputedStyle(c).width)
                , P = p / v * 100;
              c.style.width = "".concat(P, "%")
          }
      }
        , en = function() {
          return typeof window > "u" || typeof document > "u"
      }
        , Yn = `
<div aria-labelledby="`.concat(N.title, '" aria-describedby="').concat(N["html-container"], '" class="').concat(N.popup, `" tabindex="-1">
 <button type="button" class="`).concat(N.close, `"></button>
 <ul class="`).concat(N["progress-steps"], `"></ul>
 <div class="`).concat(N.icon, `"></div>
 <img class="`).concat(N.image, `" />
 <h2 class="`).concat(N.title, '" id="').concat(N.title, `"></h2>
 <div class="`).concat(N["html-container"], '" id="').concat(N["html-container"], `"></div>
 <input class="`).concat(N.input, '" id="').concat(N.input, `" />
 <input type="file" class="`).concat(N.file, `" />
 <div class="`).concat(N.range, `">
   <input type="range" />
   <output></output>
 </div>
 <select class="`).concat(N.select, '" id="').concat(N.select, `"></select>
 <div class="`).concat(N.radio, `"></div>
 <label class="`).concat(N.checkbox, `">
   <input type="checkbox" id="`).concat(N.checkbox, `" />
   <span class="`).concat(N.label, `"></span>
 </label>
 <textarea class="`).concat(N.textarea, '" id="').concat(N.textarea, `"></textarea>
 <div class="`).concat(N["validation-message"], '" id="').concat(N["validation-message"], `"></div>
 <div class="`).concat(N.actions, `">
   <div class="`).concat(N.loader, `"></div>
   <button type="button" class="`).concat(N.confirm, `"></button>
   <button type="button" class="`).concat(N.deny, `"></button>
   <button type="button" class="`).concat(N.cancel, `"></button>
 </div>
 <div class="`).concat(N.footer, `"></div>
 <div class="`).concat(N["timer-progress-bar-container"], `">
   <div class="`).concat(N["timer-progress-bar"], `"></div>
 </div>
</div>
`).replace(/(^|\n)\s*/g, "")
        , Mn = function() {
          var c = E();
          return c ? (c.remove(),
          Me([document.documentElement, document.body], [N["no-backdrop"], N["toast-shown"], N["has-column"]]),
          !0) : !1
      }
        , vt = function() {
          L.currentInstance.resetValidationMessage()
      }
        , ln = function() {
          var c = q()
            , p = ne(c, N.input)
            , v = ne(c, N.file)
            , P = c.querySelector(".".concat(N.range, " input"))
            , U = c.querySelector(".".concat(N.range, " output"))
            , le = ne(c, N.select)
            , Ie = c.querySelector(".".concat(N.checkbox, " input"))
            , ze = ne(c, N.textarea);
          p.oninput = vt,
          v.onchange = vt,
          le.onchange = vt,
          Ie.onchange = vt,
          ze.oninput = vt,
          P.oninput = function() {
              vt(),
              U.value = P.value
          }
          ,
          P.onchange = function() {
              vt(),
              U.value = P.value
          }
      }
        , bi = function(c) {
          return typeof c == "string" ? document.querySelector(c) : c
      }
        , ks = function(c) {
          var p = q();
          p.setAttribute("role", c.toast ? "alert" : "dialog"),
          p.setAttribute("aria-live", c.toast ? "polite" : "assertive"),
          c.toast || p.setAttribute("aria-modal", "true")
      }
        , un = function(c) {
          window.getComputedStyle(c).direction === "rtl" && se(E(), N.rtl)
      }
        , $t = function(c) {
          var p = Mn();
          if (en()) {
              ot("SweetAlert2 requires document to initialize");
              return
          }
          var v = document.createElement("div");
          v.className = N.container,
          p && se(v, N["no-transition"]),
          ee(v, Yn);
          var P = bi(c.target);
          P.appendChild(v),
          ks(c),
          un(P),
          ln()
      }
        , Gn = function(c, p) {
          c instanceof HTMLElement ? p.appendChild(c) : d(c) === "object" ? Xa(c, p) : c && ee(p, c)
      }
        , Xa = function(c, p) {
          c.jquery ? zu(p, c) : ee(p, c.toString())
      }
        , zu = function(c, p) {
          if (c.textContent = "",
          0 in p)
              for (var v = 0; v in p; v++)
                  c.appendChild(p[v].cloneNode(!0));
          else
              c.appendChild(p.cloneNode(!0))
      }
        , ur = function() {
          if (en())
              return !1;
          var y = document.createElement("div");
          return typeof y.style.webkitAnimation < "u" ? "webkitAnimationEnd" : typeof y.style.animation < "u" ? "animationend" : !1
      }()
        , Tr = function(c, p) {
          var v = an()
            , P = dt();
          !v || !P || (!p.showConfirmButton && !p.showDenyButton && !p.showCancelButton ? ye(v) : ie(v),
          Se(v, p, "actions"),
          zo(v, P, p),
          ee(P, p.loaderHtml || ""),
          Se(P, p, "loader"))
      };
      function zo(y, c, p) {
          var v = it()
            , P = Dt()
            , U = qt();
          !v || !P || !U || (xi(v, "confirm", p),
          xi(P, "deny", p),
          xi(U, "cancel", p),
          Ps(v, P, U, p),
          p.reverseButtons && (p.toast ? (y.insertBefore(U, v),
          y.insertBefore(P, v)) : (y.insertBefore(U, c),
          y.insertBefore(P, c),
          y.insertBefore(v, c))))
      }
      function Ps(y, c, p, v) {
          if (!v.buttonsStyling) {
              Me([y, c, p], N.styled);
              return
          }
          se([y, c, p], N.styled),
          v.confirmButtonColor && (y.style.backgroundColor = v.confirmButtonColor,
          se(y, N["default-outline"])),
          v.denyButtonColor && (c.style.backgroundColor = v.denyButtonColor,
          se(c, N["default-outline"])),
          v.cancelButtonColor && (p.style.backgroundColor = v.cancelButtonColor,
          se(p, N["default-outline"]))
      }
      function xi(y, c, p) {
          var v = Xe(c);
          tt(y, p["show".concat(v, "Button")], "inline-block"),
          ee(y, p["".concat(c, "ButtonText")] || ""),
          y.setAttribute("aria-label", p["".concat(c, "ButtonAriaLabel")] || ""),
          y.className = N[c],
          Se(y, p, "".concat(c, "Button"))
      }
      var L2 = function(c, p) {
          var v = W();
          v && (ee(v, p.closeButtonHtml || ""),
          Se(v, p, "closeButton"),
          tt(v, p.showCloseButton),
          v.setAttribute("aria-label", p.closeButtonAriaLabel || ""))
      }
        , M2 = function(c, p) {
          var v = E();
          v && (I2(v, p.backdrop),
          N2(v, p.position),
          F2(v, p.grow),
          Se(v, p, "container"))
      };
      function I2(y, c) {
          typeof c == "string" ? y.style.background = c : c || se([document.documentElement, document.body], N["no-backdrop"])
      }
      function N2(y, c) {
          c && (c in N ? se(y, N[c]) : (Oe('The "position" parameter is not valid, defaulting to "center"'),
          se(y, N.center)))
      }
      function F2(y, c) {
          c && se(y, N["grow-".concat(c)])
      }
      var mt = {
          innerParams: new WeakMap,
          domCache: new WeakMap
      }
        , j2 = ["input", "file", "range", "select", "radio", "checkbox", "textarea"]
        , z2 = function(c, p) {
          var v = q();
          if (v) {
              var P = mt.innerParams.get(c)
                , U = !P || p.input !== P.input;
              j2.forEach(function(le) {
                  var Ie = ne(v, N[le]);
                  Ie && (U2(le, p.inputAttributes),
                  Ie.className = N[le],
                  U && ye(Ie))
              }),
              p.input && (U && $2(p),
              V2(p))
          }
      }
        , $2 = function(c) {
          if (c.input) {
              if (!Bt[c.input]) {
                  ot("Unexpected type of input! Expected ".concat(Object.keys(Bt).join(" | "), ', got "').concat(c.input, '"'));
                  return
              }
              var p = kv(c.input)
                , v = Bt[c.input](p, c);
              ie(p),
              c.inputAutoFocus && setTimeout(function() {
                  ce(v)
              })
          }
      }
        , B2 = function(c) {
          for (var p = 0; p < c.attributes.length; p++) {
              var v = c.attributes[p].name;
              ["id", "type", "value", "style"].includes(v) || c.removeAttribute(v)
          }
      }
        , U2 = function(c, p) {
          var v = Re(q(), c);
          if (v) {
              B2(v);
              for (var P in p)
                  v.setAttribute(P, p[P])
          }
      }
        , V2 = function(c) {
          var p = kv(c.input);
          d(c.customClass) === "object" && se(p, c.customClass.input)
      }
        , Fd = function(c, p) {
          (!c.placeholder || p.inputPlaceholder) && (c.placeholder = p.inputPlaceholder)
      }
        , Ka = function(c, p, v) {
          if (v.inputLabel) {
              var P = document.createElement("label")
                , U = N["input-label"];
              P.setAttribute("for", c.id),
              P.className = U,
              d(v.customClass) === "object" && se(P, v.customClass.inputLabel),
              P.innerText = v.inputLabel,
              p.insertAdjacentElement("beforebegin", P)
          }
      }
        , kv = function(c) {
          return ne(q(), N[c] || N.input)
      }
        , $u = function(c, p) {
          ["string", "number"].includes(d(p)) ? c.value = "".concat(p) : jt(p) || Oe('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(d(p), '"'))
      }
        , Bt = {};
      Bt.text = Bt.email = Bt.password = Bt.number = Bt.tel = Bt.url = Bt.search = Bt.date = Bt["datetime-local"] = Bt.time = Bt.week = Bt.month = function(y, c) {
          return $u(y, c.inputValue),
          Ka(y, y, c),
          Fd(y, c),
          y.type = c.input,
          y
      }
      ,
      Bt.file = function(y, c) {
          return Ka(y, y, c),
          Fd(y, c),
          y
      }
      ,
      Bt.range = function(y, c) {
          var p = y.querySelector("input")
            , v = y.querySelector("output");
          return $u(p, c.inputValue),
          p.type = c.input,
          $u(v, c.inputValue),
          Ka(p, y, c),
          y
      }
      ,
      Bt.select = function(y, c) {
          if (y.textContent = "",
          c.inputPlaceholder) {
              var p = document.createElement("option");
              ee(p, c.inputPlaceholder),
              p.value = "",
              p.disabled = !0,
              p.selected = !0,
              y.appendChild(p)
          }
          return Ka(y, y, c),
          y
      }
      ,
      Bt.radio = function(y) {
          return y.textContent = "",
          y
      }
      ,
      Bt.checkbox = function(y, c) {
          var p = Re(q(), "checkbox");
          p.value = "1",
          p.checked = !!c.inputValue;
          var v = y.querySelector("span");
          return ee(v, c.inputPlaceholder),
          p
      }
      ,
      Bt.textarea = function(y, c) {
          $u(y, c.inputValue),
          Fd(y, c),
          Ka(y, y, c);
          var p = function(P) {
              return parseInt(window.getComputedStyle(P).marginLeft) + parseInt(window.getComputedStyle(P).marginRight)
          };
          return setTimeout(function() {
              if ("MutationObserver"in window) {
                  var v = parseInt(window.getComputedStyle(q()).width)
                    , P = function() {
                      if (document.body.contains(y)) {
                          var le = y.offsetWidth + p(y);
                          le > v ? q().style.width = "".concat(le, "px") : Ee(q(), "width", c.width)
                      }
                  };
                  new MutationObserver(P).observe(y, {
                      attributes: !0,
                      attributeFilter: ["style"]
                  })
              }
          }),
          y
      }
      ;
      var H2 = function(c, p) {
          var v = Ke();
          v && (ht(v),
          Se(v, p, "htmlContainer"),
          p.html ? (Gn(p.html, v),
          ie(v, "block")) : p.text ? (v.textContent = p.text,
          ie(v, "block")) : ye(v),
          z2(c, p))
      }
        , W2 = function(c, p) {
          var v = z();
          v && (ht(v),
          tt(v, p.footer, "block"),
          p.footer && Gn(p.footer, v),
          Se(v, p, "footer"))
      }
        , q2 = function(c, p) {
          var v = mt.innerParams.get(c)
            , P = Y();
          if (P) {
              if (v && p.icon === v.icon) {
                  Ov(P, p),
                  Pv(P, p);
                  return
              }
              if (!p.icon && !p.iconHtml) {
                  ye(P);
                  return
              }
              if (p.icon && Object.keys(Ge).indexOf(p.icon) === -1) {
                  ot('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(p.icon, '"')),
                  ye(P);
                  return
              }
              ie(P),
              Ov(P, p),
              Pv(P, p),
              se(P, p.showClass && p.showClass.icon)
          }
      }
        , Pv = function(c, p) {
          for (var v = 0, P = Object.entries(Ge); v < P.length; v++) {
              var U = D(P[v], 2)
                , le = U[0]
                , Ie = U[1];
              p.icon !== le && Me(c, Ie)
          }
          se(c, p.icon && Ge[p.icon]),
          K2(c, p),
          Y2(),
          Se(c, p, "icon")
      }
        , Y2 = function() {
          var c = q();
          if (c)
              for (var p = window.getComputedStyle(c).getPropertyValue("background-color"), v = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), P = 0; P < v.length; P++)
                  v[P].style.backgroundColor = p
      }
        , G2 = `
<div class="swal2-success-circular-line-left"></div>
<span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
<div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
<div class="swal2-success-circular-line-right"></div>
`
        , X2 = `
<span class="swal2-x-mark">
  <span class="swal2-x-mark-line-left"></span>
  <span class="swal2-x-mark-line-right"></span>
</span>
`
        , Ov = function(c, p) {
          if (!(!p.icon && !p.iconHtml)) {
              var v = c.innerHTML
                , P = "";
              if (p.iconHtml)
                  P = Av(p.iconHtml);
              else if (p.icon === "success")
                  P = G2,
                  v = v.replace(/ style=".*?"/g, "");
              else if (p.icon === "error")
                  P = X2;
              else if (p.icon) {
                  var U = {
                      question: "?",
                      warning: "!",
                      info: "i"
                  };
                  P = Av(U[p.icon])
              }
              v.trim() !== P.trim() && ee(c, P)
          }
      }
        , K2 = function(c, p) {
          if (p.iconColor) {
              c.style.color = p.iconColor,
              c.style.borderColor = p.iconColor;
              for (var v = 0, P = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; v < P.length; v++) {
                  var U = P[v];
                  Le(c, U, "background-color", p.iconColor)
              }
              Le(c, ".swal2-success-ring", "border-color", p.iconColor)
          }
      }
        , Av = function(c) {
          return '<div class="'.concat(N["icon-content"], '">').concat(c, "</div>")
      }
        , Q2 = function(c, p) {
          var v = Ce();
          if (v) {
              if (!p.imageUrl) {
                  ye(v);
                  return
              }
              ie(v, ""),
              v.setAttribute("src", p.imageUrl),
              v.setAttribute("alt", p.imageAlt || ""),
              Ee(v, "width", p.imageWidth),
              Ee(v, "height", p.imageHeight),
              v.className = N.image,
              Se(v, p, "image")
          }
      }
        , J2 = function(c, p) {
          var v = E()
            , P = q();
          if (!(!v || !P)) {
              if (p.toast) {
                  Ee(v, "width", p.width),
                  P.style.width = "100%";
                  var U = dt();
                  U && P.insertBefore(U, Y())
              } else
                  Ee(P, "width", p.width);
              Ee(P, "padding", p.padding),
              p.color && (P.style.color = p.color),
              p.background && (P.style.background = p.background),
              ye(zt()),
              Z2(P, p)
          }
      }
        , Z2 = function(c, p) {
          var v = p.showClass || {};
          c.className = "".concat(N.popup, " ").concat(we(c) ? v.popup : ""),
          p.toast ? (se([document.documentElement, document.body], N["toast-shown"]),
          se(c, N.toast)) : se(c, N.modal),
          Se(c, p, "popup"),
          typeof p.customClass == "string" && se(c, p.customClass),
          p.icon && se(c, N["icon-".concat(p.icon)])
      }
        , eE = function(c, p) {
          var v = je();
          if (v) {
              var P = p.progressSteps
                , U = p.currentProgressStep;
              if (!P || P.length === 0 || U === void 0) {
                  ye(v);
                  return
              }
              ie(v),
              v.textContent = "",
              U >= P.length && Oe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
              P.forEach(function(le, Ie) {
                  var ze = tE(le);
                  if (v.appendChild(ze),
                  Ie === U && se(ze, N["active-progress-step"]),
                  Ie !== P.length - 1) {
                      var Lt = nE(p);
                      v.appendChild(Lt)
                  }
              })
          }
      }
        , tE = function(c) {
          var p = document.createElement("li");
          return se(p, N["progress-step"]),
          ee(p, c),
          p
      }
        , nE = function(c) {
          var p = document.createElement("li");
          return se(p, N["progress-step-line"]),
          c.progressStepsDistance && Ee(p, "width", c.progressStepsDistance),
          p
      }
        , rE = function(c, p) {
          var v = fe();
          v && (ht(v),
          tt(v, p.title || p.titleText, "block"),
          p.title && Gn(p.title, v),
          p.titleText && (v.innerText = p.titleText),
          Se(v, p, "title"))
      }
        , Rv = function(c, p) {
          J2(c, p),
          M2(c, p),
          eE(c, p),
          q2(c, p),
          Q2(c, p),
          rE(c, p),
          L2(c, p),
          H2(c, p),
          Tr(c, p),
          W2(c, p);
          var v = q();
          typeof p.didRender == "function" && v && p.didRender(v)
      }
        , iE = function() {
          return we(q())
      }
        , Dv = function() {
          var c;
          return (c = it()) === null || c === void 0 ? void 0 : c.click()
      }
        , oE = function() {
          var c;
          return (c = Dt()) === null || c === void 0 ? void 0 : c.click()
      }
        , sE = function() {
          var c;
          return (c = qt()) === null || c === void 0 ? void 0 : c.click()
      }
        , Os = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer"
      })
        , Lv = function(c) {
          c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
              capture: c.keydownListenerCapture
          }),
          c.keydownHandlerAdded = !1)
      }
        , aE = function(c, p, v) {
          Lv(c),
          p.toast || (c.keydownHandler = function(P) {
              return uE(p, P, v)
          }
          ,
          c.keydownTarget = p.keydownListenerCapture ? window : q(),
          c.keydownListenerCapture = p.keydownListenerCapture,
          c.keydownTarget.addEventListener("keydown", c.keydownHandler, {
              capture: c.keydownListenerCapture
          }),
          c.keydownHandlerAdded = !0)
      }
        , jd = function(c, p) {
          var v, P = _e();
          if (P.length) {
              c = c + p,
              c === P.length ? c = 0 : c === -1 && (c = P.length - 1),
              P[c].focus();
              return
          }
          (v = q()) === null || v === void 0 || v.focus()
      }
        , Mv = ["ArrowRight", "ArrowDown"]
        , lE = ["ArrowLeft", "ArrowUp"]
        , uE = function(c, p, v) {
          c && (p.isComposing || p.keyCode === 229 || (c.stopKeydownPropagation && p.stopPropagation(),
          p.key === "Enter" ? cE(p, c) : p.key === "Tab" ? fE(p) : [].concat(Mv, lE).includes(p.key) ? dE(p.key) : p.key === "Escape" && pE(p, c, v)))
      }
        , cE = function(c, p) {
          if (Ae(p.allowEnterKey)) {
              var v = Re(q(), p.input);
              if (c.target && v && c.target instanceof HTMLElement && c.target.outerHTML === v.outerHTML) {
                  if (["textarea", "file"].includes(p.input))
                      return;
                  Dv(),
                  c.preventDefault()
              }
          }
      }
        , fE = function(c) {
          for (var p = c.target, v = _e(), P = -1, U = 0; U < v.length; U++)
              if (p === v[U]) {
                  P = U;
                  break
              }
          c.shiftKey ? jd(P, -1) : jd(P, 1),
          c.stopPropagation(),
          c.preventDefault()
      }
        , dE = function(c) {
          var p = an()
            , v = it()
            , P = Dt()
            , U = qt();
          if (!(!p || !v || !P || !U)) {
              var le = [v, P, U];
              if (!(document.activeElement instanceof HTMLElement && !le.includes(document.activeElement))) {
                  var Ie = Mv.includes(c) ? "nextElementSibling" : "previousElementSibling"
                    , ze = document.activeElement;
                  if (ze) {
                      for (var Lt = 0; Lt < p.children.length; Lt++) {
                          if (ze = ze[Ie],
                          !ze)
                              return;
                          if (ze instanceof HTMLButtonElement && we(ze))
                              break
                      }
                      ze instanceof HTMLButtonElement && ze.focus()
                  }
              }
          }
      }
        , pE = function(c, p, v) {
          Ae(p.allowEscapeKey) && (c.preventDefault(),
          v(Os.esc))
      }
        , As = {
          swalPromiseResolve: new WeakMap,
          swalPromiseReject: new WeakMap
      }
        , hE = function() {
          var c = E()
            , p = Array.from(document.body.children);
          p.forEach(function(v) {
              v.contains(c) || (v.hasAttribute("aria-hidden") && v.setAttribute("data-previous-aria-hidden", v.getAttribute("aria-hidden") || ""),
              v.setAttribute("aria-hidden", "true"))
          })
      }
        , Iv = function() {
          var c = Array.from(document.body.children);
          c.forEach(function(p) {
              p.hasAttribute("data-previous-aria-hidden") ? (p.setAttribute("aria-hidden", p.getAttribute("data-previous-aria-hidden") || ""),
              p.removeAttribute("data-previous-aria-hidden")) : p.removeAttribute("aria-hidden")
          })
      }
        , Nv = typeof window < "u" && !!window.GestureEvent
        , mE = function() {
          if (Nv && !ke(document.body, N.iosfix)) {
              var c = document.body.scrollTop;
              document.body.style.top = "".concat(c * -1, "px"),
              se(document.body, N.iosfix),
              gE()
          }
      }
        , gE = function() {
          var c = E();
          if (c) {
              var p;
              c.ontouchstart = function(v) {
                  p = vE(v)
              }
              ,
              c.ontouchmove = function(v) {
                  p && (v.preventDefault(),
                  v.stopPropagation())
              }
          }
      }
        , vE = function(c) {
          var p = c.target
            , v = E()
            , P = Ke();
          return !v || !P || yE(c) || wE(c) ? !1 : p === v || !He(v) && p instanceof HTMLElement && p.tagName !== "INPUT" && p.tagName !== "TEXTAREA" && !(He(P) && P.contains(p))
      }
        , yE = function(c) {
          return c.touches && c.touches.length && c.touches[0].touchType === "stylus"
      }
        , wE = function(c) {
          return c.touches && c.touches.length > 1
      }
        , _E = function() {
          if (ke(document.body, N.iosfix)) {
              var c = parseInt(document.body.style.top, 10);
              Me(document.body, N.iosfix),
              document.body.style.top = "",
              document.body.scrollTop = c * -1
          }
      }
        , bE = function() {
          var c = document.createElement("div");
          c.className = N["scrollbar-measure"],
          document.body.appendChild(c);
          var p = c.getBoundingClientRect().width - c.clientWidth;
          return document.body.removeChild(c),
          p
      }
        , Rs = null
        , xE = function(c) {
          Rs === null && (document.body.scrollHeight > window.innerHeight || c === "scroll") && (Rs = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),
          document.body.style.paddingRight = "".concat(Rs + bE(), "px"))
      }
        , SE = function() {
          Rs !== null && (document.body.style.paddingRight = "".concat(Rs, "px"),
          Rs = null)
      };
      function Fv(y, c, p, v) {
          be() ? zv(y, v) : (A(p).then(function() {
              return zv(y, v)
          }),
          Lv(L)),
          Nv ? (c.setAttribute("style", "display:none !important"),
          c.removeAttribute("class"),
          c.innerHTML = "") : c.remove(),
          J() && (SE(),
          _E(),
          Iv()),
          EE()
      }
      function EE() {
          Me([document.documentElement, document.body], [N.shown, N["height-auto"], N["no-backdrop"], N["toast-shown"]])
      }
      function Xi(y) {
          y = CE(y);
          var c = As.swalPromiseResolve.get(this)
            , p = TE(this);
          this.isAwaitingPromise ? y.isDismissed || (Qa(this),
          c(y)) : p && c(y)
      }
      var TE = function(c) {
          var p = q();
          if (!p)
              return !1;
          var v = mt.innerParams.get(c);
          if (!v || ke(p, v.hideClass.popup))
              return !1;
          Me(p, v.showClass.popup),
          se(p, v.hideClass.popup);
          var P = E();
          return Me(P, v.showClass.backdrop),
          se(P, v.hideClass.backdrop),
          kE(c, p, v),
          !0
      };
      function jv(y) {
          var c = As.swalPromiseReject.get(this);
          Qa(this),
          c && c(y)
      }
      var Qa = function(c) {
          c.isAwaitingPromise && (delete c.isAwaitingPromise,
          mt.innerParams.get(c) || c._destroy())
      }
        , CE = function(c) {
          return typeof c > "u" ? {
              isConfirmed: !1,
              isDenied: !1,
              isDismissed: !0
          } : Object.assign({
              isConfirmed: !1,
              isDenied: !1,
              isDismissed: !1
          }, c)
      }
        , kE = function(c, p, v) {
          var P = E()
            , U = ur && Qe(p);
          typeof v.willClose == "function" && v.willClose(p),
          U ? PE(c, p, P, v.returnFocus, v.didClose) : Fv(c, P, v.returnFocus, v.didClose)
      }
        , PE = function(c, p, v, P, U) {
          ur && (L.swalCloseEventFinishedCallback = Fv.bind(null, c, v, P, U),
          p.addEventListener(ur, function(le) {
              le.target === p && (L.swalCloseEventFinishedCallback(),
              delete L.swalCloseEventFinishedCallback)
          }))
      }
        , zv = function(c, p) {
          setTimeout(function() {
              typeof p == "function" && p.bind(c.params)(),
              c._destroy && c._destroy()
          })
      }
        , Ds = function(c) {
          var p = q();
          if (p || new Wu,
          p = q(),
          !!p) {
              var v = dt();
              be() ? ye(Y()) : OE(p, c),
              ie(v),
              p.setAttribute("data-loading", "true"),
              p.setAttribute("aria-busy", "true"),
              p.focus()
          }
      }
        , OE = function(c, p) {
          var v = an()
            , P = dt();
          !v || !P || (!p && we(it()) && (p = it()),
          ie(v),
          p && (ye(p),
          P.setAttribute("data-button-to-replace", p.className),
          v.insertBefore(P, p)),
          se([c, v], N.loading))
      }
        , AE = function(c, p) {
          p.input === "select" || p.input === "radio" ? IE(c, p) : ["text", "email", "number", "tel", "textarea"].some(function(v) {
              return v === p.input
          }) && (lt(p.inputValue) || jt(p.inputValue)) && (Ds(it()),
          NE(c, p))
      }
        , RE = function(c, p) {
          var v = c.getInput();
          if (!v)
              return null;
          switch (p.input) {
          case "checkbox":
              return DE(v);
          case "radio":
              return LE(v);
          case "file":
              return ME(v);
          default:
              return p.inputAutoTrim ? v.value.trim() : v.value
          }
      }
        , DE = function(c) {
          return c.checked ? 1 : 0
      }
        , LE = function(c) {
          return c.checked ? c.value : null
      }
        , ME = function(c) {
          return c.files && c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null
      }
        , IE = function(c, p) {
          var v = q();
          if (v) {
              var P = function(le) {
                  p.input === "select" ? FE(v, $v(le), p) : p.input === "radio" && jE(v, $v(le), p)
              };
              lt(p.inputOptions) || jt(p.inputOptions) ? (Ds(it()),
              ut(p.inputOptions).then(function(U) {
                  c.hideLoading(),
                  P(U)
              })) : d(p.inputOptions) === "object" ? P(p.inputOptions) : ot("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(d(p.inputOptions)))
          }
      }
        , NE = function(c, p) {
          var v = c.getInput();
          v && (ye(v),
          ut(p.inputValue).then(function(P) {
              v.value = p.input === "number" ? "".concat(parseFloat(P) || 0) : "".concat(P),
              ie(v),
              v.focus(),
              c.hideLoading()
          }).catch(function(P) {
              ot("Error in inputValue promise: ".concat(P)),
              v.value = "",
              ie(v),
              v.focus(),
              c.hideLoading()
          }))
      };
      function FE(y, c, p) {
          var v = ne(y, N.select);
          if (v) {
              var P = function(le, Ie, ze) {
                  var Lt = document.createElement("option");
                  Lt.value = ze,
                  ee(Lt, Ie),
                  Lt.selected = Bv(ze, p.inputValue),
                  le.appendChild(Lt)
              };
              c.forEach(function(U) {
                  var le = U[0]
                    , Ie = U[1];
                  if (Array.isArray(Ie)) {
                      var ze = document.createElement("optgroup");
                      ze.label = le,
                      ze.disabled = !1,
                      v.appendChild(ze),
                      Ie.forEach(function(Lt) {
                          return P(ze, Lt[1], Lt[0])
                      })
                  } else
                      P(v, Ie, le)
              }),
              v.focus()
          }
      }
      function jE(y, c, p) {
          var v = ne(y, N.radio);
          if (v) {
              c.forEach(function(U) {
                  var le = U[0]
                    , Ie = U[1]
                    , ze = document.createElement("input")
                    , Lt = document.createElement("label");
                  ze.type = "radio",
                  ze.name = N.radio,
                  ze.value = le,
                  Bv(le, p.inputValue) && (ze.checked = !0);
                  var Ja = document.createElement("span");
                  ee(Ja, Ie),
                  Ja.className = N.label,
                  Lt.appendChild(ze),
                  Lt.appendChild(Ja),
                  v.appendChild(Lt)
              });
              var P = v.querySelectorAll("input");
              P.length && P[0].focus()
          }
      }
      var $v = function y(c) {
          var p = [];
          return c instanceof Map ? c.forEach(function(v, P) {
              var U = v;
              d(U) === "object" && (U = y(U)),
              p.push([P, U])
          }) : Object.keys(c).forEach(function(v) {
              var P = c[v];
              d(P) === "object" && (P = y(P)),
              p.push([v, P])
          }),
          p
      }
        , Bv = function(c, p) {
          return !!p && p.toString() === c.toString()
      }
        , Bu = void 0
        , zE = function(c) {
          var p = mt.innerParams.get(c);
          c.disableButtons(),
          p.input ? Uv(c, "confirm") : $d(c, !0)
      }
        , $E = function(c) {
          var p = mt.innerParams.get(c);
          c.disableButtons(),
          p.returnInputValueOnDeny ? Uv(c, "deny") : zd(c, !1)
      }
        , BE = function(c, p) {
          c.disableButtons(),
          p(Os.cancel)
      }
        , Uv = function(c, p) {
          var v = mt.innerParams.get(c);
          if (!v.input) {
              ot('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Xe(p)));
              return
          }
          var P = c.getInput()
            , U = RE(c, v);
          v.inputValidator ? UE(c, U, p) : P && !P.checkValidity() ? (c.enableButtons(),
          c.showValidationMessage(v.validationMessage || P.validationMessage)) : p === "deny" ? zd(c, U) : $d(c, U)
      }
        , UE = function(c, p, v) {
          var P = mt.innerParams.get(c);
          c.disableInput();
          var U = Promise.resolve().then(function() {
              return ut(P.inputValidator(p, P.validationMessage))
          });
          U.then(function(le) {
              c.enableButtons(),
              c.enableInput(),
              le ? c.showValidationMessage(le) : v === "deny" ? zd(c, p) : $d(c, p)
          })
      }
        , zd = function(c, p) {
          var v = mt.innerParams.get(c || Bu);
          if (v.showLoaderOnDeny && Ds(Dt()),
          v.preDeny) {
              c.isAwaitingPromise = !0;
              var P = Promise.resolve().then(function() {
                  return ut(v.preDeny(p, v.validationMessage))
              });
              P.then(function(U) {
                  U === !1 ? (c.hideLoading(),
                  Qa(c)) : c.close({
                      isDenied: !0,
                      value: typeof U > "u" ? p : U
                  })
              }).catch(function(U) {
                  return Hv(c || Bu, U)
              })
          } else
              c.close({
                  isDenied: !0,
                  value: p
              })
      }
        , Vv = function(c, p) {
          c.close({
              isConfirmed: !0,
              value: p
          })
      }
        , Hv = function(c, p) {
          c.rejectPromise(p)
      }
        , $d = function(c, p) {
          var v = mt.innerParams.get(c || Bu);
          if (v.showLoaderOnConfirm && Ds(),
          v.preConfirm) {
              c.resetValidationMessage(),
              c.isAwaitingPromise = !0;
              var P = Promise.resolve().then(function() {
                  return ut(v.preConfirm(p, v.validationMessage))
              });
              P.then(function(U) {
                  we(zt()) || U === !1 ? (c.hideLoading(),
                  Qa(c)) : Vv(c, typeof U > "u" ? p : U)
              }).catch(function(U) {
                  return Hv(c || Bu, U)
              })
          } else
              Vv(c, p)
      };
      function Uu() {
          var y = mt.innerParams.get(this);
          if (y) {
              var c = mt.domCache.get(this);
              ye(c.loader),
              be() ? y.icon && ie(Y()) : VE(c),
              Me([c.popup, c.actions], N.loading),
              c.popup.removeAttribute("aria-busy"),
              c.popup.removeAttribute("data-loading"),
              c.confirmButton.disabled = !1,
              c.denyButton.disabled = !1,
              c.cancelButton.disabled = !1
          }
      }
      var VE = function(c) {
          var p = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
          p.length ? ie(p[0], "inline-block") : nt() && ye(c.actions)
      };
      function Wv() {
          var y = mt.innerParams.get(this)
            , c = mt.domCache.get(this);
          return c ? Re(c.popup, y.input) : null
      }
      function qv(y, c, p) {
          var v = mt.domCache.get(y);
          c.forEach(function(P) {
              v[P].disabled = p
          })
      }
      function Yv(y, c) {
          var p = q();
          if (!(!p || !y))
              if (y.type === "radio")
                  for (var v = p.querySelectorAll('[name="'.concat(N.radio, '"]')), P = 0; P < v.length; P++)
                      v[P].disabled = c;
              else
                  y.disabled = c
      }
      function Gv() {
          qv(this, ["confirmButton", "denyButton", "cancelButton"], !1)
      }
      function Xv() {
          qv(this, ["confirmButton", "denyButton", "cancelButton"], !0)
      }
      function Kv() {
          Yv(this.getInput(), !1)
      }
      function Qv() {
          Yv(this.getInput(), !0)
      }
      function Jv(y) {
          var c = mt.domCache.get(this)
            , p = mt.innerParams.get(this);
          ee(c.validationMessage, y),
          c.validationMessage.className = N["validation-message"],
          p.customClass && p.customClass.validationMessage && se(c.validationMessage, p.customClass.validationMessage),
          ie(c.validationMessage);
          var v = this.getInput();
          v && (v.setAttribute("aria-invalid", "true"),
          v.setAttribute("aria-describedby", N["validation-message"]),
          ce(v),
          se(v, N.inputerror))
      }
      function Zv() {
          var y = mt.domCache.get(this);
          y.validationMessage && ye(y.validationMessage);
          var c = this.getInput();
          c && (c.removeAttribute("aria-invalid"),
          c.removeAttribute("aria-describedby"),
          Me(c, N.inputerror))
      }
      var Ls = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: !1,
          animation: !0,
          showClass: {
              popup: "swal2-show",
              backdrop: "swal2-backdrop-show",
              icon: "swal2-icon-show"
          },
          hideClass: {
              popup: "swal2-hide",
              backdrop: "swal2-backdrop-hide",
              icon: "swal2-icon-hide"
          },
          customClass: {},
          target: "body",
          color: void 0,
          backdrop: !0,
          heightAuto: !0,
          allowOutsideClick: !0,
          allowEscapeKey: !0,
          allowEnterKey: !0,
          stopKeydownPropagation: !0,
          keydownListenerCapture: !1,
          showConfirmButton: !0,
          showDenyButton: !1,
          showCancelButton: !1,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: !0,
          reverseButtons: !1,
          focusConfirm: !0,
          focusDeny: !1,
          focusCancel: !1,
          returnFocus: !0,
          showCloseButton: !1,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: !1,
          showLoaderOnDeny: !1,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: !1,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoFocus: !0,
          inputAutoTrim: !0,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: !1,
          validationMessage: void 0,
          grow: !1,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: !0
      }
        , HE = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"]
        , WE = {}
        , qE = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"]
        , ey = function(c) {
          return Object.prototype.hasOwnProperty.call(Ls, c)
      }
        , ty = function(c) {
          return HE.indexOf(c) !== -1
      }
        , ny = function(c) {
          return WE[c]
      }
        , YE = function(c) {
          ey(c) || Oe('Unknown parameter "'.concat(c, '"'))
      }
        , GE = function(c) {
          qE.includes(c) && Oe('The parameter "'.concat(c, '" is incompatible with toasts'))
      }
        , XE = function(c) {
          var p = ny(c);
          p && gn(c, p)
      }
        , KE = function(c) {
          c.backdrop === !1 && c.allowOutsideClick && Oe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          for (var p in c)
              YE(p),
              c.toast && GE(p),
              XE(p)
      };
      function ry(y) {
          var c = q()
            , p = mt.innerParams.get(this);
          if (!c || ke(c, p.hideClass.popup)) {
              Oe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
              return
          }
          var v = QE(y)
            , P = Object.assign({}, p, v);
          Rv(this, P),
          mt.innerParams.set(this, P),
          Object.defineProperties(this, {
              params: {
                  value: Object.assign({}, this.params, y),
                  writable: !1,
                  enumerable: !0
              }
          })
      }
      var QE = function(c) {
          var p = {};
          return Object.keys(c).forEach(function(v) {
              ty(v) ? p[v] = c[v] : Oe("Invalid parameter to update: ".concat(v))
          }),
          p
      };
      function iy() {
          var y = mt.domCache.get(this)
            , c = mt.innerParams.get(this);
          if (!c) {
              oy(this);
              return
          }
          y.popup && L.swalCloseEventFinishedCallback && (L.swalCloseEventFinishedCallback(),
          delete L.swalCloseEventFinishedCallback),
          typeof c.didDestroy == "function" && c.didDestroy(),
          JE(this)
      }
      var JE = function(c) {
          oy(c),
          delete c.params,
          delete L.keydownHandler,
          delete L.keydownTarget,
          delete L.currentInstance
      }
        , oy = function(c) {
          c.isAwaitingPromise ? (Bd(mt, c),
          c.isAwaitingPromise = !0) : (Bd(As, c),
          Bd(mt, c),
          delete c.isAwaitingPromise,
          delete c.disableButtons,
          delete c.enableButtons,
          delete c.getInput,
          delete c.disableInput,
          delete c.enableInput,
          delete c.hideLoading,
          delete c.disableLoading,
          delete c.showValidationMessage,
          delete c.resetValidationMessage,
          delete c.close,
          delete c.closePopup,
          delete c.closeModal,
          delete c.closeToast,
          delete c.rejectPromise,
          delete c.update,
          delete c._destroy)
      }
        , Bd = function(c, p) {
          for (var v in c)
              c[v].delete(p)
      }
        , ZE = Object.freeze({
          __proto__: null,
          _destroy: iy,
          close: Xi,
          closeModal: Xi,
          closePopup: Xi,
          closeToast: Xi,
          disableButtons: Xv,
          disableInput: Qv,
          disableLoading: Uu,
          enableButtons: Gv,
          enableInput: Kv,
          getInput: Wv,
          handleAwaitingPromise: Qa,
          hideLoading: Uu,
          rejectPromise: jv,
          resetValidationMessage: Zv,
          showValidationMessage: Jv,
          update: ry
      })
        , eT = function(c, p, v) {
          c.toast ? tT(c, p, v) : (rT(p),
          iT(p),
          oT(c, p, v))
      }
        , tT = function(c, p, v) {
          p.popup.onclick = function() {
              c && (nT(c) || c.timer || c.input) || v(Os.close)
          }
      }
        , nT = function(c) {
          return !!(c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton)
      }
        , Vu = !1
        , rT = function(c) {
          c.popup.onmousedown = function() {
              c.container.onmouseup = function(p) {
                  c.container.onmouseup = function() {}
                  ,
                  p.target === c.container && (Vu = !0)
              }
          }
      }
        , iT = function(c) {
          c.container.onmousedown = function() {
              c.popup.onmouseup = function(p) {
                  c.popup.onmouseup = function() {}
                  ,
                  (p.target === c.popup || p.target instanceof HTMLElement && c.popup.contains(p.target)) && (Vu = !0)
              }
          }
      }
        , oT = function(c, p, v) {
          p.container.onclick = function(P) {
              if (Vu) {
                  Vu = !1;
                  return
              }
              P.target === p.container && Ae(c.allowOutsideClick) && v(Os.backdrop)
          }
      }
        , sT = function(c) {
          return d(c) === "object" && c.jquery
      }
        , sy = function(c) {
          return c instanceof Element || sT(c)
      }
        , aT = function(c) {
          var p = {};
          return d(c[0]) === "object" && !sy(c[0]) ? Object.assign(p, c[0]) : ["title", "html", "icon"].forEach(function(v, P) {
              var U = c[P];
              typeof U == "string" || sy(U) ? p[v] = U : U !== void 0 && ot("Unexpected type of ".concat(v, '! Expected "string" or "Element", got ').concat(d(U)))
          }),
          p
      };
      function lT() {
          for (var y = this, c = arguments.length, p = new Array(c), v = 0; v < c; v++)
              p[v] = arguments[v];
          return s(y, p)
      }
      function uT(y) {
          var c = function(p) {
              m(v, p);
              function v() {
                  return h(this, v),
                  r(this, v, arguments)
              }
              return _(v, [{
                  key: "_main",
                  value: function(U, le) {
                      return k(T(v.prototype), "_main", this).call(this, U, Object.assign({}, y, le))
                  }
              }]),
              v
          }(this);
          return c
      }
      var cT = function() {
          return L.timeout && L.timeout.getTimerLeft()
      }
        , ay = function() {
          if (L.timeout)
              return rt(),
              L.timeout.stop()
      }
        , ly = function() {
          if (L.timeout) {
              var c = L.timeout.start();
              return We(c),
              c
          }
      }
        , fT = function() {
          var c = L.timeout;
          return c && (c.running ? ay() : ly())
      }
        , dT = function(c) {
          if (L.timeout) {
              var p = L.timeout.increase(c);
              return We(p, !0),
              p
          }
      }
        , pT = function() {
          return !!(L.timeout && L.timeout.isRunning())
      }
        , uy = !1
        , Ud = {};
      function hT() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
          Ud[y] = this,
          uy || (document.body.addEventListener("click", mT),
          uy = !0)
      }
      var mT = function(c) {
          for (var p = c.target; p && p !== document; p = p.parentNode)
              for (var v in Ud) {
                  var P = p.getAttribute(v);
                  if (P) {
                      Ud[v].fire({
                          template: P
                      });
                      return
                  }
              }
      }
        , gT = Object.freeze({
          __proto__: null,
          argsToParams: aT,
          bindClickHandler: hT,
          clickCancel: sE,
          clickConfirm: Dv,
          clickDeny: oE,
          enableLoading: Ds,
          fire: lT,
          getActions: an,
          getCancelButton: qt,
          getCloseButton: W,
          getConfirmButton: it,
          getContainer: E,
          getDenyButton: Dt,
          getFocusableElements: _e,
          getFooter: z,
          getHtmlContainer: Ke,
          getIcon: Y,
          getIconContent: G,
          getImage: Ce,
          getInputLabel: vn,
          getLoader: dt,
          getPopup: q,
          getProgressSteps: je,
          getTimerLeft: cT,
          getTimerProgressBar: B,
          getTitle: fe,
          getValidationMessage: zt,
          increaseTimer: dT,
          isDeprecatedParameter: ny,
          isLoading: he,
          isTimerRunning: pT,
          isUpdatableParameter: ty,
          isValidParameter: ey,
          isVisible: iE,
          mixin: uT,
          resumeTimer: ly,
          showLoading: Ds,
          stopTimer: ay,
          toggleTimer: fT
      })
        , vT = function() {
          function y(c, p) {
              h(this, y),
              this.callback = c,
              this.remaining = p,
              this.running = !1,
              this.start()
          }
          return _(y, [{
              key: "start",
              value: function() {
                  return this.running || (this.running = !0,
                  this.started = new Date,
                  this.id = setTimeout(this.callback, this.remaining)),
                  this.remaining
              }
          }, {
              key: "stop",
              value: function() {
                  return this.started && this.running && (this.running = !1,
                  clearTimeout(this.id),
                  this.remaining -= new Date().getTime() - this.started.getTime()),
                  this.remaining
              }
          }, {
              key: "increase",
              value: function(p) {
                  var v = this.running;
                  return v && this.stop(),
                  this.remaining += p,
                  v && this.start(),
                  this.remaining
              }
          }, {
              key: "getTimerLeft",
              value: function() {
                  return this.running && (this.stop(),
                  this.start()),
                  this.remaining
              }
          }, {
              key: "isRunning",
              value: function() {
                  return this.running
              }
          }]),
          y
      }()
        , cy = ["swal-title", "swal-html", "swal-footer"]
        , yT = function(c) {
          var p = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
          if (!p)
              return {};
          var v = p.content;
          CT(v);
          var P = Object.assign(wT(v), _T(v), bT(v), xT(v), ST(v), ET(v), TT(v, cy));
          return P
      }
        , wT = function(c) {
          var p = {}
            , v = Array.from(c.querySelectorAll("swal-param"));
          return v.forEach(function(P) {
              $o(P, ["name", "value"]);
              var U = P.getAttribute("name")
                , le = P.getAttribute("value");
              typeof Ls[U] == "boolean" ? p[U] = le !== "false" : d(Ls[U]) === "object" ? p[U] = JSON.parse(le) : p[U] = le
          }),
          p
      }
        , _T = function(c) {
          var p = {}
            , v = Array.from(c.querySelectorAll("swal-function-param"));
          return v.forEach(function(P) {
              var U = P.getAttribute("name")
                , le = P.getAttribute("value");
              p[U] = new Function("return ".concat(le))()
          }),
          p
      }
        , bT = function(c) {
          var p = {}
            , v = Array.from(c.querySelectorAll("swal-button"));
          return v.forEach(function(P) {
              $o(P, ["type", "color", "aria-label"]);
              var U = P.getAttribute("type");
              p["".concat(U, "ButtonText")] = P.innerHTML,
              p["show".concat(Xe(U), "Button")] = !0,
              P.hasAttribute("color") && (p["".concat(U, "ButtonColor")] = P.getAttribute("color")),
              P.hasAttribute("aria-label") && (p["".concat(U, "ButtonAriaLabel")] = P.getAttribute("aria-label"))
          }),
          p
      }
        , xT = function(c) {
          var p = {}
            , v = c.querySelector("swal-image");
          return v && ($o(v, ["src", "width", "height", "alt"]),
          v.hasAttribute("src") && (p.imageUrl = v.getAttribute("src")),
          v.hasAttribute("width") && (p.imageWidth = v.getAttribute("width")),
          v.hasAttribute("height") && (p.imageHeight = v.getAttribute("height")),
          v.hasAttribute("alt") && (p.imageAlt = v.getAttribute("alt"))),
          p
      }
        , ST = function(c) {
          var p = {}
            , v = c.querySelector("swal-icon");
          return v && ($o(v, ["type", "color"]),
          v.hasAttribute("type") && (p.icon = v.getAttribute("type")),
          v.hasAttribute("color") && (p.iconColor = v.getAttribute("color")),
          p.iconHtml = v.innerHTML),
          p
      }
        , ET = function(c) {
          var p = {}
            , v = c.querySelector("swal-input");
          v && ($o(v, ["type", "label", "placeholder", "value"]),
          p.input = v.getAttribute("type") || "text",
          v.hasAttribute("label") && (p.inputLabel = v.getAttribute("label")),
          v.hasAttribute("placeholder") && (p.inputPlaceholder = v.getAttribute("placeholder")),
          v.hasAttribute("value") && (p.inputValue = v.getAttribute("value")));
          var P = Array.from(c.querySelectorAll("swal-input-option"));
          return P.length && (p.inputOptions = {},
          P.forEach(function(U) {
              $o(U, ["value"]);
              var le = U.getAttribute("value")
                , Ie = U.innerHTML;
              p.inputOptions[le] = Ie
          })),
          p
      }
        , TT = function(c, p) {
          var v = {};
          for (var P in p) {
              var U = p[P]
                , le = c.querySelector(U);
              le && ($o(le, []),
              v[U.replace(/^swal-/, "")] = le.innerHTML.trim())
          }
          return v
      }
        , CT = function(c) {
          var p = cy.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
          Array.from(c.children).forEach(function(v) {
              var P = v.tagName.toLowerCase();
              p.includes(P) || Oe("Unrecognized element <".concat(P, ">"))
          })
      }
        , $o = function(c, p) {
          Array.from(c.attributes).forEach(function(v) {
              p.indexOf(v.name) === -1 && Oe(['Unrecognized attribute "'.concat(v.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(p.length ? "Allowed attributes are: ".concat(p.join(", ")) : "To set the value, use HTML within the element.")])
          })
      }
        , fy = 10
        , kT = function(c) {
          var p = E()
            , v = q();
          typeof c.willOpen == "function" && c.willOpen(v);
          var P = window.getComputedStyle(document.body)
            , U = P.overflowY;
          RT(p, v, c),
          setTimeout(function() {
              OT(p, v)
          }, fy),
          J() && (AT(p, c.scrollbarPadding, U),
          hE()),
          !be() && !L.previousActiveElement && (L.previousActiveElement = document.activeElement),
          typeof c.didOpen == "function" && setTimeout(function() {
              return c.didOpen(v)
          }),
          Me(p, N["no-transition"])
      }
        , PT = function y(c) {
          var p = q();
          if (!(c.target !== p || !ur)) {
              var v = E();
              p.removeEventListener(ur, y),
              v.style.overflowY = "auto"
          }
      }
        , OT = function(c, p) {
          ur && Qe(p) ? (c.style.overflowY = "hidden",
          p.addEventListener(ur, PT)) : c.style.overflowY = "auto"
      }
        , AT = function(c, p, v) {
          mE(),
          p && v !== "hidden" && xE(v),
          setTimeout(function() {
              c.scrollTop = 0
          })
      }
        , RT = function(c, p, v) {
          se(c, v.showClass.backdrop),
          v.animation ? (p.style.setProperty("opacity", "0", "important"),
          ie(p, "grid"),
          setTimeout(function() {
              se(p, v.showClass.popup),
              p.style.removeProperty("opacity")
          }, fy)) : ie(p, "grid"),
          se([document.documentElement, document.body], N.shown),
          v.heightAuto && v.backdrop && !v.toast && se([document.documentElement, document.body], N["height-auto"])
      }
        , dy = {
          email: function(c, p) {
              return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(c) ? Promise.resolve() : Promise.resolve(p || "Invalid email address")
          },
          url: function(c, p) {
              return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(p || "Invalid URL")
          }
      };
      function DT(y) {
          y.inputValidator || (y.input === "email" && (y.inputValidator = dy.email),
          y.input === "url" && (y.inputValidator = dy.url))
      }
      function LT(y) {
          (!y.target || typeof y.target == "string" && !document.querySelector(y.target) || typeof y.target != "string" && !y.target.appendChild) && (Oe('Target parameter is not valid, defaulting to "body"'),
          y.target = "body")
      }
      function MT(y) {
          DT(y),
          y.showLoaderOnConfirm && !y.preConfirm && Oe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
          LT(y),
          typeof y.title == "string" && (y.title = y.title.split(`
`).join("<br />")),
          $t(y)
      }
      var oi, Hu = new WeakMap, Ut = function() {
          function y() {
              if (h(this, y),
              ae(this, Hu, void 0),
              !(typeof window > "u")) {
                  oi = this;
                  for (var c = arguments.length, p = new Array(c), v = 0; v < c; v++)
                      p[v] = arguments[v];
                  var P = Object.freeze(this.constructor.argsToParams(p));
                  this.params = P,
                  this.isAwaitingPromise = !1,
                  o(Hu, this, this._main(oi.params))
              }
          }
          return _(y, [{
              key: "_main",
              value: function(p) {
                  var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  if (KE(Object.assign({}, v, p)),
                  L.currentInstance) {
                      var P = As.swalPromiseResolve.get(L.currentInstance)
                        , U = L.currentInstance.isAwaitingPromise;
                      L.currentInstance._destroy(),
                      U || P({
                          isDismissed: !0
                      }),
                      J() && Iv()
                  }
                  L.currentInstance = oi;
                  var le = NT(p, v);
                  MT(le),
                  Object.freeze(le),
                  L.timeout && (L.timeout.stop(),
                  delete L.timeout),
                  clearTimeout(L.restoreFocusTimeout);
                  var Ie = FT(oi);
                  return Rv(oi, le),
                  mt.innerParams.set(oi, le),
                  IT(oi, Ie, le)
              }
          }, {
              key: "then",
              value: function(p) {
                  return i(Hu, this).then(p)
              }
          }, {
              key: "finally",
              value: function(p) {
                  return i(Hu, this).finally(p)
              }
          }]),
          y
      }(), IT = function(c, p, v) {
          return new Promise(function(P, U) {
              var le = function(ze) {
                  c.close({
                      isDismissed: !0,
                      dismiss: ze
                  })
              };
              As.swalPromiseResolve.set(c, P),
              As.swalPromiseReject.set(c, U),
              p.confirmButton.onclick = function() {
                  zE(c)
              }
              ,
              p.denyButton.onclick = function() {
                  $E(c)
              }
              ,
              p.cancelButton.onclick = function() {
                  BE(c, le)
              }
              ,
              p.closeButton.onclick = function() {
                  le(Os.close)
              }
              ,
              eT(v, p, le),
              aE(L, v, le),
              AE(c, v),
              kT(v),
              jT(L, v, le),
              zT(p, v),
              setTimeout(function() {
                  p.container.scrollTop = 0
              })
          }
          )
      }, NT = function(c, p) {
          var v = yT(c)
            , P = Object.assign({}, Ls, p, v, c);
          return P.showClass = Object.assign({}, Ls.showClass, P.showClass),
          P.hideClass = Object.assign({}, Ls.hideClass, P.hideClass),
          P.animation === !1 && (P.showClass = {
              backdrop: "swal2-noanimation"
          },
          P.hideClass = {}),
          P
      }, FT = function(c) {
          var p = {
              popup: q(),
              container: E(),
              actions: an(),
              confirmButton: it(),
              denyButton: Dt(),
              cancelButton: qt(),
              loader: dt(),
              closeButton: W(),
              validationMessage: zt(),
              progressSteps: je()
          };
          return mt.domCache.set(c, p),
          p
      }, jT = function(c, p, v) {
          var P = B();
          ye(P),
          p.timer && (c.timeout = new vT(function() {
              v("timer"),
              delete c.timeout
          }
          ,p.timer),
          p.timerProgressBar && (ie(P),
          Se(P, p, "timerProgressBar"),
          setTimeout(function() {
              c.timeout && c.timeout.running && We(p.timer)
          })))
      }, zT = function(c, p) {
          if (!p.toast) {
              if (!Ae(p.allowEnterKey)) {
                  BT();
                  return
              }
              $T(c, p) || jd(-1, 1)
          }
      }, $T = function(c, p) {
          return p.focusDeny && we(c.denyButton) ? (c.denyButton.focus(),
          !0) : p.focusCancel && we(c.cancelButton) ? (c.cancelButton.focus(),
          !0) : p.focusConfirm && we(c.confirmButton) ? (c.confirmButton.focus(),
          !0) : !1
      }, BT = function() {
          document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
      };
      if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
          var py = new Date
            , hy = localStorage.getItem("swal-initiation");
          hy ? (py.getTime() - Date.parse(hy)) / (1e3 * 60 * 60 * 24) > 3 && setTimeout(function() {
              document.body.style.pointerEvents = "none";
              var y = document.createElement("audio");
              y.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",
              y.loop = !0,
              document.body.appendChild(y),
              setTimeout(function() {
                  y.play().catch(function() {})
              }, 2500)
          }, 500) : localStorage.setItem("swal-initiation", "".concat(py))
      }
      Ut.prototype.disableButtons = Xv,
      Ut.prototype.enableButtons = Gv,
      Ut.prototype.getInput = Wv,
      Ut.prototype.disableInput = Qv,
      Ut.prototype.enableInput = Kv,
      Ut.prototype.hideLoading = Uu,
      Ut.prototype.disableLoading = Uu,
      Ut.prototype.showValidationMessage = Jv,
      Ut.prototype.resetValidationMessage = Zv,
      Ut.prototype.close = Xi,
      Ut.prototype.closePopup = Xi,
      Ut.prototype.closeModal = Xi,
      Ut.prototype.closeToast = Xi,
      Ut.prototype.rejectPromise = jv,
      Ut.prototype.update = ry,
      Ut.prototype._destroy = iy,
      Object.assign(Ut, gT),
      Object.keys(ZE).forEach(function(y) {
          Ut[y] = function() {
              if (oi && oi[y]) {
                  var c;
                  return (c = oi)[y].apply(c, arguments)
              }
              return null
          }
      }),
      Ut.DismissReason = Os,
      Ut.version = "11.10.7";
      var Wu = Ut;
      return Wu.default = Wu,
      Wu
  }),
  typeof Ki < "u" && Ki.Sweetalert2 && (Ki.swal = Ki.sweetAlert = Ki.Swal = Ki.SweetAlert = Ki.Sweetalert2),
  typeof document < "u" && function(n, r) {
      var i = n.createElement("style");
      if (n.getElementsByTagName("head")[0].appendChild(i),
      i.styleSheet)
          i.styleSheet.disabled || (i.styleSheet.cssText = r);
      else
          try {
              i.innerHTML = r
          } catch {
              i.innerText = r
          }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')
}
)(sS);
var zI = sS.exports;
const Rw = Lo(zI)
, aS = ({padding: e, className: t, height: n}) => {
  let r, [i,o] = C.useState(!1);
  const [s,a] = C.useState(!1)
    , [l,u] = C.useState(!1)
    , [f,d] = C.useState("")
    , [h,g] = C.useState("")
    , [_,m] = C.useState("")
    , T = D => {
      o(i = !0),
      m(D)
  }
    , {handleSubmit: x, register: w, reset: S} = jI()
    , b = async D => {
      a(!0);
      const O = "https://api.techcloud.sg/submit-contact-form";
      S(),
      r.reset(),
      o(i = !1),
      D.token = _,
      await YM({
          headers: {
              Accept: "application/json"
          },
          method: "POST",
          url: O,
          data: D
      }).then(R => {
          a(!1),
          u(!1),
          Rw.fire({
              title: "Success",
              text: "Email sent successfully. Please check your inbox for a confirmation email.",
              icon: "success"
          }).catch(M => {
              console.log(M),
              Rw.fire({
                  title: "Error",
                  text: M.message,
                  icon: "error"
              })
          }
          )
      }
      )
  }
    , k = D => {
      const R = D.target.value.replace(/\D/g, "");
      D.target.value = R,
      d(R),
      R.length < 8 ? g("Phone number must be at least 8 digits.") : g("")
  }
  ;
  return {
      setSuccess: u,
      success: l,
      render: V.jsx("div", {
          children: V.jsx("form", {
              onSubmit: x(b),
              children: V.jsx("div", {
                  className: t || "mt-5 bg-white rounded-xl shadow-md md:w-[700px]",
                  children: V.jsxs("div", {
                      className: e || "p-8",
                      children: [V.jsxs("div", {
                          className: "flex justify-between flex-col md:flex-row gap-7 md:gap-5",
                          children: [V.jsxs("div", {
                              className: "relative space-y-2 bg-inherit w-full",
                              children: [V.jsx("label", {
                                  htmlFor: "Name",
                                  children: "Name"
                              }), V.jsx("input", {
                                  type: "text",
                                  id: "Name",
                                  className: "peer bg-transparent h-12 w-full rounded text-black  ring-2 px-2 ring-gray-400 focus:ring-sky-600 focus:outline-none focus:border-rose-600",
                                  placeholder: "Name",
                                  required: !0,
                                  ...w("name")
                              })]
                          }), V.jsxs("div", {
                              className: "relative bg-inherit w-full space-y-2",
                              children: [V.jsx("label", {
                                  htmlFor: "Email",
                                  children: "Email"
                              }), V.jsx("input", {
                                  type: "email",
                                  id: "Email",
                                  className: "peer bg-transparent h-12 w-full rounded text-black  ring-2 px-2 ring-gray-400 focus:ring-sky-600 focus:outline-none invalid:border-rose-600",
                                  placeholder: "Email",
                                  required: !0,
                                  ...w("email")
                              })]
                          })]
                      }), V.jsx("div", {
                          className: " flex md:my-10 my-7 w-full md:flex-row flex-col gap-7 md:gap-5",
                          children: V.jsxs("div", {
                              className: "relative bg-inherit md:w-1/2 w-full space-y-2",
                              children: [V.jsx("label", {
                                  htmlFor: "Name",
                                  children: "Phone Number"
                              }), V.jsx("input", {
                                  type: "text",
                                  id: "Phone",
                                  placeholder: "+65",
                                  className: "peer bg-transparent w-full h-12 rounded text-black  ring-2 px-2 ring-gray-400 focus:ring-sky-600 focus:outline-none focus:border-rose-600",
                                  maxLength: 8,
                                  onInput: k,
                                  required: !0,
                                  ...w("phone")
                              })]
                          })
                      }), V.jsxs("div", {
                          className: "relative bg-inherit space-y-2",
                          children: [V.jsx("label", {
                              htmlFor: "Message",
                              children: "Message"
                          }), V.jsx("textarea", {
                              id: "Message",
                              className: `peer resize-none bg-transparent w-full rounded text-black ${n || "h-32"}  ring-2 px-2 py-1 ring-gray-400 focus:ring-sky-600 focus:outline-none focus:border-rose-600"`,
                              placeholder: "What can we do for you",
                              required: !0,
                              ...w("message")
                          })]
                      }), V.jsxs("div", {
                          className: "mt-7 flex justify-between md:items-center w-full md:flex-row flex-col ",
                          children: [V.jsxs("div", {
                              className: "space-y-4",
                              children: [!i || h ? V.jsxs("span", {
                                  className: "text-sm text-red-500",
                                  children: ["( ", h || "Please confirm that you are not a robot!", " )"]
                              }) : V.jsx("div", {}), V.jsx(yI, {
                                  sitekey: PL,
                                  onChange: T,
                                  ref: D => {
                                      r = D
                                  }
                              })]
                          }), V.jsx("button", {
                              type: "submit",
                              title: i ? "" : "Please confirm that you are not a robot",
                              className: `flex justify-center items-center md:m-4 mt-5 gap-5 md:flex-row w-auto text-center h-12 min-w-[200px] px-6 text-white font-bold transition-all duration-500 ease-in-out rounded-[0.7rem] bg-[#36699f] sm:w-auto ${i ? "hover:scale-[1.1]" : "0"}`,
                              style: !i || h ? {
                                  backgroundColor: "#96bed6"
                              } : {
                                  backgroundColor: "#36699f"
                              },
                              disabled: !i || h !== "",
                              children: V.jsx("span", {
                                  children: s ? "Submitting..." : "Submit"
                              })
                          })]
                      })]
                  })
              })
          })
      })
  }
}
, $I = ({children: e, className: t}) => {
  const {render: n, success: r, setSuccess: i} = aS({
      padding: "p-0",
      className: "none",
      height: "h-32"
  });
  return V.jsxs(GD, {
      open: r,
      onOpenChange: i,
      children: [V.jsx(XD, {
          asChild: !0,
          children: V.jsx("div", {
              className: t,
              children: e
          })
      }), V.jsxs(Sx, {
          onInteractOutside: o => o.preventDefault(),
          className: "text-black bg-white z-[100] rounded-md lg:h-[100%] md:h-[90%] h-[90%] overflow-y-scroll scale-90 ",
          children: [V.jsxs(Ex, {
              className: "text-start",
              children: [V.jsx(Tx, {
                  className: "text-[#36699f]",
                  children: "Contact us"
              }), V.jsx(Cx, {
                  children: "Get Your Complimentary IT Consult Today!"
              })]
          }), n]
      })]
  })
}
, BI = ({}) => V.jsx($I, {
  children: V.jsx("div", {
      className: "box-btn2",
      children: V.jsxs("button", {
          className: "btn-class-name ",
          children: [V.jsx("span", {
              className: "text-white",
              children: "Contact us"
          }), V.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "1em",
              viewBox: "0 0 320 512",
              fill: "white",
              children: V.jsx("path", {
                  d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              })
          })]
      })
  })
})
, UI = e => V.jsx("section", {
  className: "bg-white p-0 py-32  ",
  children: V.jsx("div", {
      className: "relative rounded-2xl md:ml-12 md:mr-12 ml-5 mr-5 p-10 text-white bg-[#36699f]  text-center",
      id: "Contact-us",
      children: V.jsxs("div", {
          className: "flex justify-between md:flex-row flex-col ",
          children: [V.jsxs("div", {
              className: "flex justify-center items-start flex-col",
              children: [V.jsx("h3", {
                  className: "md:text-6xl text-4xl text-start font-semibold ",
                  children: "Stuck with an IT Issue?"
              }), V.jsx("p", {
                  className: "mt-8 md:text-xl text-md text-start font-light",
                  children: "Get Your Complimentary IT Consultation Today!"
              }), V.jsx("div", {
                  className: "mt-8 flex justify-center items-center",
                  children: V.jsx("div", {
                      className: "border-2 border-white rounded-xl",
                      children: V.jsx(BI, {})
                  })
              })]
          }), V.jsx("div", {
              children: V.jsx("img", {
                  src: RA,
                  alt: "CTA issue",
                  className: "h-full w-[400px]"
              })
          })]
      })
  })
})
, VI = "/src/assets/contact-42cf9d6c.svg"
, HI = () => V.jsx(V.Fragment, {
  children: V.jsx("div", {
      children: V.jsx("img", {
          src: VI,
          alt: "IT Issue",
          width: 50,
          height: 50
      })
  })
})
, WI = e => {
  const {render: t} = aS({});
  return V.jsx(V.Fragment, {
      children: V.jsxs("section", {
          className: "contact md:max-w-none max-w-[800px]",
          id: "Contact",
          children: [V.jsx("div", {
              className: "contact-left ",
              children: V.jsx(HI, {})
          }), V.jsxs("div", {
              className: "contact-right",
              children: [V.jsx("strong", {
                  children: "Contact Us"
              }), V.jsx("h2", {
                  children: "Get Your Complimentary IT Consult Today!"
              }), t]
          })]
      })
  })
}
, qI = () => V.jsx(V.Fragment, {
  children: V.jsx("div", {
      className: "flex space-x-2 justify-center items-center w-full bg-white h-screen",
      children: V.jsx("span", {
          className: "text-black md:text-3xl text-xl"
      })
  })
});
function Pi(e) {
  if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
function lS(e, t) {
  e.prototype = Object.create(t.prototype),
  e.prototype.constructor = e,
  e.__proto__ = t
}
/*!
* GSAP 3.12.2
* https://greensock.com
*
* @license Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var wr = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
      lineHeight: ""
  }
}, Ia = {
  duration: .5,
  overwrite: !1,
  delay: 0
}, nv, Rn, It, Ir = 1e8, ft = 1 / Ir, gm = Math.PI * 2, YI = gm / 4, GI = 0, uS = Math.sqrt, XI = Math.cos, KI = Math.sin, hn = function(t) {
  return typeof t == "string"
}, Nt = function(t) {
  return typeof t == "function"
}, Hi = function(t) {
  return typeof t == "number"
}, rv = function(t) {
  return typeof t > "u"
}, wi = function(t) {
  return typeof t == "object"
}, ir = function(t) {
  return t !== !1
}, iv = function() {
  return typeof window < "u"
}, gc = function(t) {
  return Nt(t) || hn(t)
}, cS = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Dn = Array.isArray, vm = /(?:-?\.?\d|\.)+/gi, fS = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, aa = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Np = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, dS = /[+-]=-?[.\d]+/, pS = /[^,'"\[\]\s]+/gi, QI = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Pt, kr, ym, ov, br = {}, Ff = {}, hS, mS = function(t) {
  return (Ff = _s(t, br)) && ar
}, sv = function(t, n) {
  return console.warn("Invalid property", t, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, jf = function(t, n) {
  return !n && console.warn(t)
}, gS = function(t, n) {
  return t && (br[t] = n) && Ff && (Ff[t] = n) || br
}, yu = function() {
  return 0
}, JI = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Gc = {
  suppressEvents: !0,
  kill: !1
}, ZI = {
  suppressEvents: !0
}, av = {}, To = [], wm = {}, vS, hr = {}, Fp = {}, Dw = 30, Xc = [], lv = "", uv = function(t) {
  var n = t[0], r, i;
  if (wi(n) || Nt(n) || (t = [t]),
  !(r = (n._gsap || {}).harness)) {
      for (i = Xc.length; i-- && !Xc[i].targetTest(n); )
          ;
      r = Xc[i]
  }
  for (i = t.length; i--; )
      t[i] && (t[i]._gsap || (t[i]._gsap = new BS(t[i],r))) || t.splice(i, 1);
  return t
}, ss = function(t) {
  return t._gsap || uv(Nr(t))[0]._gsap
}, yS = function(t, n, r) {
  return (r = t[n]) && Nt(r) ? t[n]() : rv(r) && t.getAttribute && t.getAttribute(n) || r
}, or = function(t, n) {
  return (t = t.split(",")).forEach(n) || t
}, Ht = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0
}, bn = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0
}, _a = function(t, n) {
  var r = n.charAt(0)
    , i = parseFloat(n.substr(2));
  return t = parseFloat(t),
  r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
}, eN = function(t, n) {
  for (var r = n.length, i = 0; t.indexOf(n[i]) < 0 && ++i < r; )
      ;
  return i < r
}, zf = function() {
  var t = To.length, n = To.slice(0), r, i;
  for (wm = {},
  To.length = 0,
  r = 0; r < t; r++)
      i = n[r],
      i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, wS = function(t, n, r, i) {
  To.length && !Rn && zf(),
  t.render(n, r, i || Rn && n < 0 && (t._initted || t._startAt)),
  To.length && !Rn && zf()
}, _S = function(t) {
  var n = parseFloat(t);
  return (n || n === 0) && (t + "").match(pS).length < 2 ? n : hn(t) ? t.trim() : t
}, bS = function(t) {
  return t
}, Vr = function(t, n) {
  for (var r in n)
      r in t || (t[r] = n[r]);
  return t
}, tN = function(t) {
  return function(n, r) {
      for (var i in r)
          i in n || i === "duration" && t || i === "ease" || (n[i] = r[i])
  }
}, _s = function(t, n) {
  for (var r in n)
      t[r] = n[r];
  return t
}, Lw = function e(t, n) {
  for (var r in n)
      r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = wi(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
  return t
}, $f = function(t, n) {
  var r = {}, i;
  for (i in t)
      i in n || (r[i] = t[i]);
  return r
}, zl = function(t) {
  var n = t.parent || Pt
    , r = t.keyframes ? tN(Dn(t.keyframes)) : Vr;
  if (ir(t.inherit))
      for (; n; )
          r(t, n.vars.defaults),
          n = n.parent || n._dp;
  return t
}, nN = function(t, n) {
  for (var r = t.length, i = r === n.length; i && r-- && t[r] === n[r]; )
      ;
  return r < 0
}, xS = function(t, n, r, i, o) {
  r === void 0 && (r = "_first"),
  i === void 0 && (i = "_last");
  var s = t[i], a;
  if (o)
      for (a = n[o]; s && s[o] > a; )
          s = s._prev;
  return s ? (n._next = s._next,
  s._next = n) : (n._next = t[r],
  t[r] = n),
  n._next ? n._next._prev = n : t[i] = n,
  n._prev = s,
  n.parent = n._dp = t,
  n
}, Ld = function(t, n, r, i) {
  r === void 0 && (r = "_first"),
  i === void 0 && (i = "_last");
  var o = n._prev
    , s = n._next;
  o ? o._next = s : t[r] === n && (t[r] = s),
  s ? s._prev = o : t[i] === n && (t[i] = o),
  n._next = n._prev = n.parent = null
}, Ao = function(t, n) {
  t.parent && (!n || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
  t._act = 0
}, as = function(t, n) {
  if (t && (!n || n._end > t._dur || n._start < 0))
      for (var r = t; r; )
          r._dirty = 1,
          r = r.parent;
  return t
}, rN = function(t) {
  for (var n = t.parent; n && n.parent; )
      n._dirty = 1,
      n.totalDuration(),
      n = n.parent;
  return t
}, _m = function(t, n, r, i) {
  return t._startAt && (Rn ? t._startAt.revert(Gc) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(n, !0, i))
}, iN = function e(t) {
  return !t || t._ts && e(t.parent)
}, Mw = function(t) {
  return t._repeat ? Na(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Na = function(t, n) {
  var r = Math.floor(t /= n);
  return t && r === t ? r - 1 : r
}, Bf = function(t, n) {
  return (t - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, Md = function(t) {
  return t._end = bn(t._start + (t._tDur / Math.abs(t._ts || t._rts || ft) || 0))
}, Id = function(t, n) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = bn(r._time - (t._ts > 0 ? n / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - n) / -t._ts)),
  Md(t),
  r._dirty || as(r, t)),
  t
}, SS = function(t, n) {
  var r;
  if ((n._time || !n._dur && n._initted || n._start < t._time && (n._dur || !n.add)) && (r = Bf(t.rawTime(), n),
  (!n._dur || ju(0, n.totalDuration(), r) - n._tTime > ft) && n.render(r, !0)),
  as(t, n)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration())
          for (r = t; r._dp; )
              r.rawTime() >= 0 && r.totalTime(r._tTime),
              r = r._dp;
      t._zTime = -ft
  }
}, fi = function(t, n, r, i) {
  return n.parent && Ao(n),
  n._start = bn((Hi(r) ? r : r || t !== Pt ? Cr(t, r, n) : t._time) + n._delay),
  n._end = bn(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
  xS(t, n, "_first", "_last", t._sort ? "_start" : 0),
  bm(n) || (t._recent = n),
  i || SS(t, n),
  t._ts < 0 && Id(t, t._tTime),
  t
}, ES = function(t, n) {
  return (br.ScrollTrigger || sv("scrollTrigger", n)) && br.ScrollTrigger.create(n, t)
}, TS = function(t, n, r, i, o) {
  if (fv(t, n, o),
  !t._initted)
      return 1;
  if (!r && t._pt && !Rn && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && vS !== mr.frame)
      return To.push(t),
      t._lazy = [o, i],
      1
}, oN = function e(t) {
  var n = t.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
}, bm = function(t) {
  var n = t.data;
  return n === "isFromStart" || n === "isStart"
}, sN = function(t, n, r, i) {
  var o = t.ratio, s = n < 0 || !n && (!t._start && oN(t) && !(!t._initted && bm(t)) || (t._ts < 0 || t._dp._ts < 0) && !bm(t)) ? 0 : 1, a = t._rDelay, l = 0, u, f, d;
  if (a && t._repeat && (l = ju(0, t._tDur, n),
  f = Na(l, a),
  t._yoyo && f & 1 && (s = 1 - s),
  f !== Na(t._tTime, a) && (o = 1 - s,
  t.vars.repeatRefresh && t._initted && t.invalidate())),
  s !== o || Rn || i || t._zTime === ft || !n && t._zTime) {
      if (!t._initted && TS(t, n, i, r, l))
          return;
      for (d = t._zTime,
      t._zTime = n || (r ? ft : 0),
      r || (r = n && !d),
      t.ratio = s,
      t._from && (s = 1 - s),
      t._time = 0,
      t._tTime = l,
      u = t._pt; u; )
          u.r(s, u.d),
          u = u._next;
      n < 0 && _m(t, n, r, !0),
      t._onUpdate && !r && Fr(t, "onUpdate"),
      l && t._repeat && !r && t.parent && Fr(t, "onRepeat"),
      (n >= t._tDur || n < 0) && t.ratio === s && (s && Ao(t, 1),
      !r && !Rn && (Fr(t, s ? "onComplete" : "onReverseComplete", !0),
      t._prom && t._prom()))
  } else
      t._zTime || (t._zTime = n)
}, aN = function(t, n, r) {
  var i;
  if (r > n)
      for (i = t._first; i && i._start <= r; ) {
          if (i.data === "isPause" && i._start > n)
              return i;
          i = i._next
      }
  else
      for (i = t._last; i && i._start >= r; ) {
          if (i.data === "isPause" && i._start < n)
              return i;
          i = i._prev
      }
}, Fa = function(t, n, r, i) {
  var o = t._repeat
    , s = bn(n) || 0
    , a = t._tTime / t._tDur;
  return a && !i && (t._time *= s / t._dur),
  t._dur = s,
  t._tDur = o ? o < 0 ? 1e10 : bn(s * (o + 1) + t._rDelay * o) : s,
  a > 0 && !i && Id(t, t._tTime = t._tDur * a),
  t.parent && Md(t),
  r || as(t.parent, t),
  t
}, Iw = function(t) {
  return t instanceof Zn ? as(t) : Fa(t, t._dur)
}, lN = {
  _start: 0,
  endTime: yu,
  totalDuration: yu
}, Cr = function e(t, n, r) {
  var i = t.labels, o = t._recent || lN, s = t.duration() >= Ir ? o.endTime(!1) : t._dur, a, l, u;
  return hn(n) && (isNaN(n) || n in i) ? (l = n.charAt(0),
  u = n.substr(-1) === "%",
  a = n.indexOf("="),
  l === "<" || l === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
  (l === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (a < 0 ? o : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = s),
  i[n]) : (l = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
  u && r && (l = l / 100 * (Dn(r) ? r[0] : r).totalDuration()),
  a > 1 ? e(t, n.substr(0, a - 1), r) + l : s + l)) : n == null ? s : +n
}, $l = function(t, n, r) {
  var i = Hi(n[1]), o = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = n[o], a, l;
  if (i && (s.duration = n[1]),
  s.parent = r,
  t) {
      for (a = s,
      l = r; l && !("immediateRender"in a); )
          a = l.vars.defaults || {},
          l = ir(l.vars.inherit) && l.parent;
      s.immediateRender = ir(a.immediateRender),
      t < 2 ? s.runBackwards = 1 : s.startAt = n[o - 1]
  }
  return new Kt(n[0],s,n[o + 1])
}, jo = function(t, n) {
  return t || t === 0 ? n(t) : n
}, ju = function(t, n, r) {
  return r < t ? t : r > n ? n : r
}, An = function(t, n) {
  return !hn(t) || !(n = QI.exec(t)) ? "" : n[1]
}, uN = function(t, n, r) {
  return jo(r, function(i) {
      return ju(t, n, i)
  })
}, xm = [].slice, CS = function(t, n) {
  return t && wi(t) && "length"in t && (!n && !t.length || t.length - 1 in t && wi(t[0])) && !t.nodeType && t !== kr
}, cN = function(t, n, r) {
  return r === void 0 && (r = []),
  t.forEach(function(i) {
      var o;
      return hn(i) && !n || CS(i, 1) ? (o = r).push.apply(o, Nr(i)) : r.push(i)
  }) || r
}, Nr = function(t, n, r) {
  return It && !n && It.selector ? It.selector(t) : hn(t) && !r && (ym || !ja()) ? xm.call((n || ov).querySelectorAll(t), 0) : Dn(t) ? cN(t, r) : CS(t) ? xm.call(t, 0) : t ? [t] : []
}, Sm = function(t) {
  return t = Nr(t)[0] || jf("Invalid scope") || {},
  function(n) {
      var r = t.current || t.nativeElement || t;
      return Nr(n, r.querySelectorAll ? r : r === t ? jf("Invalid scope") || ov.createElement("div") : t)
  }
}, kS = function(t) {
  return t.sort(function() {
      return .5 - Math.random()
  })
}, PS = function(t) {
  if (Nt(t))
      return t;
  var n = wi(t) ? t : {
      each: t
  }
    , r = ls(n.ease)
    , i = n.from || 0
    , o = parseFloat(n.base) || 0
    , s = {}
    , a = i > 0 && i < 1
    , l = isNaN(i) || a
    , u = n.axis
    , f = i
    , d = i;
  return hn(i) ? f = d = {
      center: .5,
      edges: .5,
      end: 1
  }[i] || 0 : !a && l && (f = i[0],
  d = i[1]),
  function(h, g, _) {
      var m = (_ || n).length, T = s[m], x, w, S, b, k, D, O, R, M;
      if (!T) {
          if (M = n.grid === "auto" ? 0 : (n.grid || [1, Ir])[1],
          !M) {
              for (O = -Ir; O < (O = _[M++].getBoundingClientRect().left) && M < m; )
                  ;
              M--
          }
          for (T = s[m] = [],
          x = l ? Math.min(M, m) * f - .5 : i % M,
          w = M === Ir ? 0 : l ? m * d / M - .5 : i / M | 0,
          O = 0,
          R = Ir,
          D = 0; D < m; D++)
              S = D % M - x,
              b = w - (D / M | 0),
              T[D] = k = u ? Math.abs(u === "y" ? b : S) : uS(S * S + b * b),
              k > O && (O = k),
              k < R && (R = k);
          i === "random" && kS(T),
          T.max = O - R,
          T.min = R,
          T.v = m = (parseFloat(n.amount) || parseFloat(n.each) * (M > m ? m - 1 : u ? u === "y" ? m / M : M : Math.max(M, m / M)) || 0) * (i === "edges" ? -1 : 1),
          T.b = m < 0 ? o - m : o,
          T.u = An(n.amount || n.each) || 0,
          r = r && m < 0 ? jS(r) : r
      }
      return m = (T[h] - T.min) / T.max || 0,
      bn(T.b + (r ? r(m) : m) * T.v) + T.u
  }
}, Em = function(t) {
  var n = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
      var i = bn(Math.round(parseFloat(r) / t) * t * n);
      return (i - i % 1) / n + (Hi(r) ? 0 : An(r))
  }
}, OS = function(t, n) {
  var r = Dn(t), i, o;
  return !r && wi(t) && (i = r = t.radius || Ir,
  t.values ? (t = Nr(t.values),
  (o = !Hi(t[0])) && (i *= i)) : t = Em(t.increment)),
  jo(n, r ? Nt(t) ? function(s) {
      return o = t(s),
      Math.abs(o - s) <= i ? o : s
  }
  : function(s) {
      for (var a = parseFloat(o ? s.x : s), l = parseFloat(o ? s.y : 0), u = Ir, f = 0, d = t.length, h, g; d--; )
          o ? (h = t[d].x - a,
          g = t[d].y - l,
          h = h * h + g * g) : h = Math.abs(t[d] - a),
          h < u && (u = h,
          f = d);
      return f = !i || u <= i ? t[f] : s,
      o || f === s || Hi(s) ? f : f + An(s)
  }
  : Em(t))
}, AS = function(t, n, r, i) {
  return jo(Dn(t) ? !n : r === !0 ? !!(r = 0) : !i, function() {
      return Dn(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (n - t + r * .99)) / r) * r * i) / i
  })
}, fN = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
  return function(i) {
      return n.reduce(function(o, s) {
          return s(o)
      }, i)
  }
}, dN = function(t, n) {
  return function(r) {
      return t(parseFloat(r)) + (n || An(r))
  }
}, pN = function(t, n, r) {
  return DS(t, n, 0, 1, r)
}, RS = function(t, n, r) {
  return jo(r, function(i) {
      return t[~~n(i)]
  })
}, hN = function e(t, n, r) {
  var i = n - t;
  return Dn(t) ? RS(t, e(0, t.length), n) : jo(r, function(o) {
      return (i + (o - t) % i) % i + t
  })
}, mN = function e(t, n, r) {
  var i = n - t
    , o = i * 2;
  return Dn(t) ? RS(t, e(0, t.length - 1), n) : jo(r, function(s) {
      return s = (o + (s - t) % o) % o || 0,
      t + (s > i ? o - s : s)
  })
}, wu = function(t) {
  for (var n = 0, r = "", i, o, s, a; ~(i = t.indexOf("random(", n)); )
      s = t.indexOf(")", i),
      a = t.charAt(i + 7) === "[",
      o = t.substr(i + 7, s - i - 7).match(a ? pS : vm),
      r += t.substr(n, i - n) + AS(a ? o : +o[0], a ? 0 : +o[1], +o[2] || 1e-5),
      n = s + 1;
  return r + t.substr(n, t.length - n)
}, DS = function(t, n, r, i, o) {
  var s = n - t
    , a = i - r;
  return jo(o, function(l) {
      return r + ((l - t) / s * a || 0)
  })
}, gN = function e(t, n, r, i) {
  var o = isNaN(t + n) ? 0 : function(g) {
      return (1 - g) * t + g * n
  }
  ;
  if (!o) {
      var s = hn(t), a = {}, l, u, f, d, h;
      if (r === !0 && (i = 1) && (r = null),
      s)
          t = {
              p: t
          },
          n = {
              p: n
          };
      else if (Dn(t) && !Dn(n)) {
          for (f = [],
          d = t.length,
          h = d - 2,
          u = 1; u < d; u++)
              f.push(e(t[u - 1], t[u]));
          d--,
          o = function(_) {
              _ *= d;
              var m = Math.min(h, ~~_);
              return f[m](_ - m)
          }
          ,
          r = n
      } else
          i || (t = _s(Dn(t) ? [] : {}, t));
      if (!f) {
          for (l in n)
              cv.call(a, t, l, "get", n[l]);
          o = function(_) {
              return hv(_, a) || (s ? t.p : t)
          }
      }
  }
  return jo(r, o)
}, Nw = function(t, n, r) {
  var i = t.labels, o = Ir, s, a, l;
  for (s in i)
      a = i[s] - n,
      a < 0 == !!r && a && o > (a = Math.abs(a)) && (l = s,
      o = a);
  return l
}, Fr = function(t, n, r) {
  var i = t.vars, o = i[n], s = It, a = t._ctx, l, u, f;
  if (o)
      return l = i[n + "Params"],
      u = i.callbackScope || t,
      r && To.length && zf(),
      a && (It = a),
      f = l ? o.apply(u, l) : o.call(u),
      It = s,
      f
}, El = function(t) {
  return Ao(t),
  t.scrollTrigger && t.scrollTrigger.kill(!!Rn),
  t.progress() < 1 && Fr(t, "onInterrupt"),
  t
}, la, LS = [], MS = function(t) {
  if (iv() && t) {
      t = !t.name && t.default || t;
      var n = t.name
        , r = Nt(t)
        , i = n && !r && t.init ? function() {
          this._props = []
      }
      : t
        , o = {
          init: yu,
          render: hv,
          add: cv,
          kill: DN,
          modifier: RN,
          rawVars: 0
      }
        , s = {
          targetTest: 0,
          get: 0,
          getSetter: pv,
          aliases: {},
          register: 0
      };
      if (ja(),
      t !== i) {
          if (hr[n])
              return;
          Vr(i, Vr($f(t, o), s)),
          _s(i.prototype, _s(o, $f(t, s))),
          hr[i.prop = n] = i,
          t.targetTest && (Xc.push(i),
          av[n] = 1),
          n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
      }
      gS(n, i),
      t.register && t.register(ar, i, sr)
  } else
      t && LS.push(t)
}, ct = 255, Tl = {
  aqua: [0, ct, ct],
  lime: [0, ct, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ct],
  navy: [0, 0, 128],
  white: [ct, ct, ct],
  olive: [128, 128, 0],
  yellow: [ct, ct, 0],
  orange: [ct, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ct, 0, 0],
  pink: [ct, 192, 203],
  cyan: [0, ct, ct],
  transparent: [ct, ct, ct, 0]
}, jp = function(t, n, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0,
  (t * 6 < 1 ? n + (r - n) * t * 6 : t < .5 ? r : t * 3 < 2 ? n + (r - n) * (2 / 3 - t) * 6 : n) * ct + .5 | 0
}, IS = function(t, n, r) {
  var i = t ? Hi(t) ? [t >> 16, t >> 8 & ct, t & ct] : 0 : Tl.black, o, s, a, l, u, f, d, h, g, _;
  if (!i) {
      if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
      Tl[t])
          i = Tl[t];
      else if (t.charAt(0) === "#") {
          if (t.length < 6 && (o = t.charAt(1),
          s = t.charAt(2),
          a = t.charAt(3),
          t = "#" + o + o + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
          t.length === 9)
              return i = parseInt(t.substr(1, 6), 16),
              [i >> 16, i >> 8 & ct, i & ct, parseInt(t.substr(7), 16) / 255];
          t = parseInt(t.substr(1), 16),
          i = [t >> 16, t >> 8 & ct, t & ct]
      } else if (t.substr(0, 3) === "hsl") {
          if (i = _ = t.match(vm),
          !n)
              l = +i[0] % 360 / 360,
              u = +i[1] / 100,
              f = +i[2] / 100,
              s = f <= .5 ? f * (u + 1) : f + u - f * u,
              o = f * 2 - s,
              i.length > 3 && (i[3] *= 1),
              i[0] = jp(l + 1 / 3, o, s),
              i[1] = jp(l, o, s),
              i[2] = jp(l - 1 / 3, o, s);
          else if (~t.indexOf("="))
              return i = t.match(fS),
              r && i.length < 4 && (i[3] = 1),
              i
      } else
          i = t.match(vm) || Tl.transparent;
      i = i.map(Number)
  }
  return n && !_ && (o = i[0] / ct,
  s = i[1] / ct,
  a = i[2] / ct,
  d = Math.max(o, s, a),
  h = Math.min(o, s, a),
  f = (d + h) / 2,
  d === h ? l = u = 0 : (g = d - h,
  u = f > .5 ? g / (2 - d - h) : g / (d + h),
  l = d === o ? (s - a) / g + (s < a ? 6 : 0) : d === s ? (a - o) / g + 2 : (o - s) / g + 4,
  l *= 60),
  i[0] = ~~(l + .5),
  i[1] = ~~(u * 100 + .5),
  i[2] = ~~(f * 100 + .5)),
  r && i.length < 4 && (i[3] = 1),
  i
}, NS = function(t) {
  var n = []
    , r = []
    , i = -1;
  return t.split(Co).forEach(function(o) {
      var s = o.match(aa) || [];
      n.push.apply(n, s),
      r.push(i += s.length + 1)
  }),
  n.c = r,
  n
}, Fw = function(t, n, r) {
  var i = "", o = (t + i).match(Co), s = n ? "hsla(" : "rgba(", a = 0, l, u, f, d;
  if (!o)
      return t;
  if (o = o.map(function(h) {
      return (h = IS(h, n, 1)) && s + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
  }),
  r && (f = NS(t),
  l = r.c,
  l.join(i) !== f.c.join(i)))
      for (u = t.replace(Co, "1").split(aa),
      d = u.length - 1; a < d; a++)
          i += u[a] + (~l.indexOf(a) ? o.shift() || s + "0,0,0,0)" : (f.length ? f : o.length ? o : r).shift());
  if (!u)
      for (u = t.split(Co),
      d = u.length - 1; a < d; a++)
          i += u[a] + o[a];
  return i + u[d]
}, Co = function() {
  var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Tl)
      e += "|" + t + "\\b";
  return new RegExp(e + ")","gi")
}(), vN = /hsl[a]?\(/, FS = function(t) {
  var n = t.join(" "), r;
  if (Co.lastIndex = 0,
  Co.test(n))
      return r = vN.test(n),
      t[1] = Fw(t[1], r),
      t[0] = Fw(t[0], r, NS(t[1])),
      !0
}, _u, mr = function() {
  var e = Date.now, t = 500, n = 33, r = e(), i = r, o = 1e3 / 240, s = o, a = [], l, u, f, d, h, g, _ = function m(T) {
      var x = e() - i, w = T === !0, S, b, k, D;
      if (x > t && (r += x - n),
      i += x,
      k = i - r,
      S = k - s,
      (S > 0 || w) && (D = ++d.frame,
      h = k - d.time * 1e3,
      d.time = k = k / 1e3,
      s += S + (S >= o ? 4 : o - S),
      b = 1),
      w || (l = u(m)),
      b)
          for (g = 0; g < a.length; g++)
              a[g](k, h, D, T)
  };
  return d = {
      time: 0,
      frame: 0,
      tick: function() {
          _(!0)
      },
      deltaRatio: function(T) {
          return h / (1e3 / (T || 60))
      },
      wake: function() {
          hS && (!ym && iv() && (kr = ym = window,
          ov = kr.document || {},
          br.gsap = ar,
          (kr.gsapVersions || (kr.gsapVersions = [])).push(ar.version),
          mS(Ff || kr.GreenSockGlobals || !kr.gsap && kr || {}),
          f = kr.requestAnimationFrame,
          LS.forEach(MS)),
          l && d.sleep(),
          u = f || function(T) {
              return setTimeout(T, s - d.time * 1e3 + 1 | 0)
          }
          ,
          _u = 1,
          _(2))
      },
      sleep: function() {
          (f ? kr.cancelAnimationFrame : clearTimeout)(l),
          _u = 0,
          u = yu
      },
      lagSmoothing: function(T, x) {
          t = T || 1 / 0,
          n = Math.min(x || 33, t)
      },
      fps: function(T) {
          o = 1e3 / (T || 240),
          s = d.time * 1e3 + o
      },
      add: function(T, x, w) {
          var S = x ? function(b, k, D, O) {
              T(b, k, D, O),
              d.remove(S)
          }
          : T;
          return d.remove(T),
          a[w ? "unshift" : "push"](S),
          ja(),
          S
      },
      remove: function(T, x) {
          ~(x = a.indexOf(T)) && a.splice(x, 1) && g >= x && g--
      },
      _listeners: a
  },
  d
}(), ja = function() {
  return !_u && mr.wake()
}, Ye = {}, yN = /^[\d.\-M][\d.\-,\s]/, wN = /["']/g, _N = function(t) {
  for (var n = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], o = 1, s = r.length, a, l, u; o < s; o++)
      l = r[o],
      a = o !== s - 1 ? l.lastIndexOf(",") : l.length,
      u = l.substr(0, a),
      n[i] = isNaN(u) ? u.replace(wN, "").trim() : +u,
      i = l.substr(a + 1).trim();
  return n
}, bN = function(t) {
  var n = t.indexOf("(") + 1
    , r = t.indexOf(")")
    , i = t.indexOf("(", n);
  return t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)
}, xN = function(t) {
  var n = (t + "").split("(")
    , r = Ye[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [_N(n[1])] : bN(t).split(",").map(_S)) : Ye._CE && yN.test(t) ? Ye._CE("", t) : r
}, jS = function(t) {
  return function(n) {
      return 1 - t(1 - n)
  }
}, zS = function e(t, n) {
  for (var r = t._first, i; r; )
      r instanceof Zn ? e(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? e(r.timeline, n) : (i = r._ease,
      r._ease = r._yEase,
      r._yEase = i,
      r._yoyo = n)),
      r = r._next
}, ls = function(t, n) {
  return t && (Nt(t) ? t : Ye[t] || xN(t)) || n
}, Cs = function(t, n, r, i) {
  r === void 0 && (r = function(l) {
      return 1 - n(1 - l)
  }
  ),
  i === void 0 && (i = function(l) {
      return l < .5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2
  }
  );
  var o = {
      easeIn: n,
      easeOut: r,
      easeInOut: i
  }, s;
  return or(t, function(a) {
      Ye[a] = br[a] = o,
      Ye[s = a.toLowerCase()] = r;
      for (var l in o)
          Ye[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ye[a + "." + l] = o[l]
  }),
  o
}, $S = function(t) {
  return function(n) {
      return n < .5 ? (1 - t(1 - n * 2)) / 2 : .5 + t((n - .5) * 2) / 2
  }
}, zp = function e(t, n, r) {
  var i = n >= 1 ? n : 1
    , o = (r || (t ? .3 : .45)) / (n < 1 ? n : 1)
    , s = o / gm * (Math.asin(1 / i) || 0)
    , a = function(f) {
      return f === 1 ? 1 : i * Math.pow(2, -10 * f) * KI((f - s) * o) + 1
  }
    , l = t === "out" ? a : t === "in" ? function(u) {
      return 1 - a(1 - u)
  }
  : $S(a);
  return o = gm / o,
  l.config = function(u, f) {
      return e(t, u, f)
  }
  ,
  l
}, $p = function e(t, n) {
  n === void 0 && (n = 1.70158);
  var r = function(s) {
      return s ? --s * s * ((n + 1) * s + n) + 1 : 0
  }
    , i = t === "out" ? r : t === "in" ? function(o) {
      return 1 - r(1 - o)
  }
  : $S(r);
  return i.config = function(o) {
      return e(t, o)
  }
  ,
  i
};
or("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
  var n = t < 5 ? t + 1 : t;
  Cs(e + ",Power" + (n - 1), t ? function(r) {
      return Math.pow(r, n)
  }
  : function(r) {
      return r
  }
  , function(r) {
      return 1 - Math.pow(1 - r, n)
  }, function(r) {
      return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
  })
});
Ye.Linear.easeNone = Ye.none = Ye.Linear.easeIn;
Cs("Elastic", zp("in"), zp("out"), zp());
(function(e, t) {
  var n = 1 / t
    , r = 2 * n
    , i = 2.5 * n
    , o = function(a) {
      return a < n ? e * a * a : a < r ? e * Math.pow(a - 1.5 / t, 2) + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * Math.pow(a - 2.625 / t, 2) + .984375
  };
  Cs("Bounce", function(s) {
      return 1 - o(1 - s)
  }, o)
}
)(7.5625, 2.75);
Cs("Expo", function(e) {
  return e ? Math.pow(2, 10 * (e - 1)) : 0
});
Cs("Circ", function(e) {
  return -(uS(1 - e * e) - 1)
});
Cs("Sine", function(e) {
  return e === 1 ? 1 : -XI(e * YI) + 1
});
Cs("Back", $p("in"), $p("out"), $p());
Ye.SteppedEase = Ye.steps = br.SteppedEase = {
  config: function(t, n) {
      t === void 0 && (t = 1);
      var r = 1 / t
        , i = t + (n ? 0 : 1)
        , o = n ? 1 : 0
        , s = 1 - ft;
      return function(a) {
          return ((i * ju(0, s, a) | 0) + o) * r
      }
  }
};
Ia.ease = Ye["quad.out"];
or("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
  return lv += e + "," + e + "Params,"
});
var BS = function(t, n) {
  this.id = GI++,
  t._gsap = this,
  this.target = t,
  this.harness = n,
  this.get = n ? n.get : yS,
  this.set = n ? n.getSetter : pv
}
, bu = function() {
  function e(n) {
      this.vars = n,
      this._delay = +n.delay || 0,
      (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
      this._yoyo = !!n.yoyo || !!n.yoyoEase),
      this._ts = 1,
      Fa(this, +n.duration, 1, 1),
      this.data = n.data,
      It && (this._ctx = It,
      It.data.push(this)),
      _u || mr.wake()
  }
  var t = e.prototype;
  return t.delay = function(r) {
      return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
      this._delay = r,
      this) : this._delay
  }
  ,
  t.duration = function(r) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
  }
  ,
  t.totalDuration = function(r) {
      return arguments.length ? (this._dirty = 0,
      Fa(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
  }
  ,
  t.totalTime = function(r, i) {
      if (ja(),
      !arguments.length)
          return this._tTime;
      var o = this._dp;
      if (o && o.smoothChildTiming && this._ts) {
          for (Id(this, r),
          !o._dp || o.parent || SS(o, this); o && o.parent; )
              o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
              o = o.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && fi(this._dp, this, this._start - this._delay)
      }
      return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ft || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
      wS(this, r, i)),
      this
  }
  ,
  t.time = function(r, i) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Mw(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
  }
  ,
  t.totalProgress = function(r, i) {
      return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
  }
  ,
  t.progress = function(r, i) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Mw(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
  }
  ,
  t.iteration = function(r, i) {
      var o = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Na(this._tTime, o) + 1 : 1
  }
  ,
  t.timeScale = function(r) {
      if (!arguments.length)
          return this._rts === -ft ? 0 : this._rts;
      if (this._rts === r)
          return this;
      var i = this.parent && this._ts ? Bf(this.parent._time, this) : this._tTime;
      return this._rts = +r || 0,
      this._ts = this._ps || r === -ft ? 0 : this._rts,
      this.totalTime(ju(-Math.abs(this._delay), this._tDur, i), !0),
      Md(this),
      rN(this)
  }
  ,
  t.paused = function(r) {
      return arguments.length ? (this._ps !== r && (this._ps = r,
      r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
      this._ts = this._act = 0) : (ja(),
      this._ts = this._rts,
      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ft && (this._tTime -= ft)))),
      this) : this._ps
  }
  ,
  t.startTime = function(r) {
      if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return i && (i._sort || !this.parent) && fi(i, this, r - this._delay),
          this
      }
      return this._start
  }
  ,
  t.endTime = function(r) {
      return this._start + (ir(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
  }
  ,
  t.rawTime = function(r) {
      var i = this.parent || this._dp;
      return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bf(i.rawTime(r), this) : this._tTime : this._tTime
  }
  ,
  t.revert = function(r) {
      r === void 0 && (r = ZI);
      var i = Rn;
      return Rn = r,
      (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
      this.totalTime(-.01, r.suppressEvents)),
      this.data !== "nested" && r.kill !== !1 && this.kill(),
      Rn = i,
      this
  }
  ,
  t.globalTime = function(r) {
      for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
          o = i._start + o / (i._ts || 1),
          i = i._dp;
      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : o
  }
  ,
  t.repeat = function(r) {
      return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
      Iw(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
  }
  ,
  t.repeatDelay = function(r) {
      if (arguments.length) {
          var i = this._time;
          return this._rDelay = r,
          Iw(this),
          i ? this.time(i) : this
      }
      return this._rDelay
  }
  ,
  t.yoyo = function(r) {
      return arguments.length ? (this._yoyo = r,
      this) : this._yoyo
  }
  ,
  t.seek = function(r, i) {
      return this.totalTime(Cr(this, r), ir(i))
  }
  ,
  t.restart = function(r, i) {
      return this.play().totalTime(r ? -this._delay : 0, ir(i))
  }
  ,
  t.play = function(r, i) {
      return r != null && this.seek(r, i),
      this.reversed(!1).paused(!1)
  }
  ,
  t.reverse = function(r, i) {
      return r != null && this.seek(r || this.totalDuration(), i),
      this.reversed(!0).paused(!1)
  }
  ,
  t.pause = function(r, i) {
      return r != null && this.seek(r, i),
      this.paused(!0)
  }
  ,
  t.resume = function() {
      return this.paused(!1)
  }
  ,
  t.reversed = function(r) {
      return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ft : 0)),
      this) : this._rts < 0
  }
  ,
  t.invalidate = function() {
      return this._initted = this._act = 0,
      this._zTime = -ft,
      this
  }
  ,
  t.isActive = function() {
      var r = this.parent || this._dp, i = this._start, o;
      return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - ft)
  }
  ,
  t.eventCallback = function(r, i, o) {
      var s = this.vars;
      return arguments.length > 1 ? (i ? (s[r] = i,
      o && (s[r + "Params"] = o),
      r === "onUpdate" && (this._onUpdate = i)) : delete s[r],
      this) : s[r]
  }
  ,
  t.then = function(r) {
      var i = this;
      return new Promise(function(o) {
          var s = Nt(r) ? r : bS
            , a = function() {
              var u = i.then;
              i.then = null,
              Nt(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
              o(s),
              i.then = u
          };
          i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
      }
      )
  }
  ,
  t.kill = function() {
      El(this)
  }
  ,
  e
}();
Vr(bu.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ft,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Zn = function(e) {
  lS(t, e);
  function t(r, i) {
      var o;
      return r === void 0 && (r = {}),
      o = e.call(this, r) || this,
      o.labels = {},
      o.smoothChildTiming = !!r.smoothChildTiming,
      o.autoRemoveChildren = !!r.autoRemoveChildren,
      o._sort = ir(r.sortChildren),
      Pt && fi(r.parent || Pt, Pi(o), i),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      r.scrollTrigger && ES(Pi(o), r.scrollTrigger),
      o
  }
  var n = t.prototype;
  return n.to = function(i, o, s) {
      return $l(0, arguments, this),
      this
  }
  ,
  n.from = function(i, o, s) {
      return $l(1, arguments, this),
      this
  }
  ,
  n.fromTo = function(i, o, s, a) {
      return $l(2, arguments, this),
      this
  }
  ,
  n.set = function(i, o, s) {
      return o.duration = 0,
      o.parent = this,
      zl(o).repeatDelay || (o.repeat = 0),
      o.immediateRender = !!o.immediateRender,
      new Kt(i,o,Cr(this, s),1),
      this
  }
  ,
  n.call = function(i, o, s) {
      return fi(this, Kt.delayedCall(0, i, o), s)
  }
  ,
  n.staggerTo = function(i, o, s, a, l, u, f) {
      return s.duration = o,
      s.stagger = s.stagger || a,
      s.onComplete = u,
      s.onCompleteParams = f,
      s.parent = this,
      new Kt(i,s,Cr(this, l)),
      this
  }
  ,
  n.staggerFrom = function(i, o, s, a, l, u, f) {
      return s.runBackwards = 1,
      zl(s).immediateRender = ir(s.immediateRender),
      this.staggerTo(i, o, s, a, l, u, f)
  }
  ,
  n.staggerFromTo = function(i, o, s, a, l, u, f, d) {
      return a.startAt = s,
      zl(a).immediateRender = ir(a.immediateRender),
      this.staggerTo(i, o, a, l, u, f, d)
  }
  ,
  n.render = function(i, o, s) {
      var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = i <= 0 ? 0 : bn(i), d = this._zTime < 0 != i < 0 && (this._initted || !u), h, g, _, m, T, x, w, S, b, k, D, O;
      if (this !== Pt && f > l && i >= 0 && (f = l),
      f !== this._tTime || s || d) {
          if (a !== this._time && u && (f += this._time - a,
          i += this._time - a),
          h = f,
          b = this._start,
          S = this._ts,
          x = !S,
          d && (u || (a = this._zTime),
          (i || !o) && (this._zTime = i)),
          this._repeat) {
              if (D = this._yoyo,
              T = u + this._rDelay,
              this._repeat < -1 && i < 0)
                  return this.totalTime(T * 100 + i, o, s);
              if (h = bn(f % T),
              f === l ? (m = this._repeat,
              h = u) : (m = ~~(f / T),
              m && m === f / T && (h = u,
              m--),
              h > u && (h = u)),
              k = Na(this._tTime, T),
              !a && this._tTime && k !== m && this._tTime - k * T - this._dur <= 0 && (k = m),
              D && m & 1 && (h = u - h,
              O = 1),
              m !== k && !this._lock) {
                  var R = D && k & 1
                    , M = R === (D && m & 1);
                  if (m < k && (R = !R),
                  a = R ? 0 : f % u ? u : f,
                  this._lock = 1,
                  this.render(a || (O ? 0 : bn(m * T)), o, !u)._lock = 0,
                  this._tTime = f,
                  !o && this.parent && Fr(this, "onRepeat"),
                  this.vars.repeatRefresh && !O && (this.invalidate()._lock = 1),
                  a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                      return this;
                  if (u = this._dur,
                  l = this._tDur,
                  M && (this._lock = 2,
                  a = R ? u : -1e-4,
                  this.render(a, !0),
                  this.vars.repeatRefresh && !O && this.invalidate()),
                  this._lock = 0,
                  !this._ts && !x)
                      return this;
                  zS(this, O)
              }
          }
          if (this._hasPause && !this._forcing && this._lock < 2 && (w = aN(this, bn(a), bn(h)),
          w && (f -= h - (h = w._start))),
          this._tTime = f,
          this._time = h,
          this._act = !S,
          this._initted || (this._onUpdate = this.vars.onUpdate,
          this._initted = 1,
          this._zTime = i,
          a = 0),
          !a && h && !o && !m && (Fr(this, "onStart"),
          this._tTime !== f))
              return this;
          if (h >= a && i >= 0)
              for (g = this._first; g; ) {
                  if (_ = g._next,
                  (g._act || h >= g._start) && g._ts && w !== g) {
                      if (g.parent !== this)
                          return this.render(i, o, s);
                      if (g.render(g._ts > 0 ? (h - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (h - g._start) * g._ts, o, s),
                      h !== this._time || !this._ts && !x) {
                          w = 0,
                          _ && (f += this._zTime = -ft);
                          break
                      }
                  }
                  g = _
              }
          else {
              g = this._last;
              for (var j = i < 0 ? i : h; g; ) {
                  if (_ = g._prev,
                  (g._act || j <= g._end) && g._ts && w !== g) {
                      if (g.parent !== this)
                          return this.render(i, o, s);
                      if (g.render(g._ts > 0 ? (j - g._start) * g._ts : (g._dirty ? g.totalDuration() : g._tDur) + (j - g._start) * g._ts, o, s || Rn && (g._initted || g._startAt)),
                      h !== this._time || !this._ts && !x) {
                          w = 0,
                          _ && (f += this._zTime = j ? -ft : ft);
                          break
                      }
                  }
                  g = _
              }
          }
          if (w && !o && (this.pause(),
          w.render(h >= a ? 0 : -ft)._zTime = h >= a ? 1 : -1,
          this._ts))
              return this._start = b,
              Md(this),
              this.render(i, o, s);
          this._onUpdate && !o && Fr(this, "onUpdate", !0),
          (f === l && this._tTime >= this.totalDuration() || !f && a) && (b === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Ao(this, 1),
          !o && !(i < 0 && !a) && (f || a || !l) && (Fr(this, f === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(f < l && this.timeScale() > 0) && this._prom())))
      }
      return this
  }
  ,
  n.add = function(i, o) {
      var s = this;
      if (Hi(o) || (o = Cr(this, o, i)),
      !(i instanceof bu)) {
          if (Dn(i))
              return i.forEach(function(a) {
                  return s.add(a, o)
              }),
              this;
          if (hn(i))
              return this.addLabel(i, o);
          if (Nt(i))
              i = Kt.delayedCall(0, i);
          else
              return this
      }
      return this !== i ? fi(this, i, o) : this
  }
  ,
  n.getChildren = function(i, o, s, a) {
      i === void 0 && (i = !0),
      o === void 0 && (o = !0),
      s === void 0 && (s = !0),
      a === void 0 && (a = -Ir);
      for (var l = [], u = this._first; u; )
          u._start >= a && (u instanceof Kt ? o && l.push(u) : (s && l.push(u),
          i && l.push.apply(l, u.getChildren(!0, o, s)))),
          u = u._next;
      return l
  }
  ,
  n.getById = function(i) {
      for (var o = this.getChildren(1, 1, 1), s = o.length; s--; )
          if (o[s].vars.id === i)
              return o[s]
  }
  ,
  n.remove = function(i) {
      return hn(i) ? this.removeLabel(i) : Nt(i) ? this.killTweensOf(i) : (Ld(this, i),
      i === this._recent && (this._recent = this._last),
      as(this))
  }
  ,
  n.totalTime = function(i, o) {
      return arguments.length ? (this._forcing = 1,
      !this._dp && this._ts && (this._start = bn(mr.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
      e.prototype.totalTime.call(this, i, o),
      this._forcing = 0,
      this) : this._tTime
  }
  ,
  n.addLabel = function(i, o) {
      return this.labels[i] = Cr(this, o),
      this
  }
  ,
  n.removeLabel = function(i) {
      return delete this.labels[i],
      this
  }
  ,
  n.addPause = function(i, o, s) {
      var a = Kt.delayedCall(0, o || yu, s);
      return a.data = "isPause",
      this._hasPause = 1,
      fi(this, a, Cr(this, i))
  }
  ,
  n.removePause = function(i) {
      var o = this._first;
      for (i = Cr(this, i); o; )
          o._start === i && o.data === "isPause" && Ao(o),
          o = o._next
  }
  ,
  n.killTweensOf = function(i, o, s) {
      for (var a = this.getTweensOf(i, s), l = a.length; l--; )
          co !== a[l] && a[l].kill(i, o);
      return this
  }
  ,
  n.getTweensOf = function(i, o) {
      for (var s = [], a = Nr(i), l = this._first, u = Hi(o), f; l; )
          l instanceof Kt ? eN(l._targets, a) && (u ? (!co || l._initted && l._ts) && l.globalTime(0) <= o && l.globalTime(l.totalDuration()) > o : !o || l.isActive()) && s.push(l) : (f = l.getTweensOf(a, o)).length && s.push.apply(s, f),
          l = l._next;
      return s
  }
  ,
  n.tweenTo = function(i, o) {
      o = o || {};
      var s = this, a = Cr(s, i), l = o, u = l.startAt, f = l.onStart, d = l.onStartParams, h = l.immediateRender, g, _ = Kt.to(s, Vr({
          ease: o.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: a,
          overwrite: "auto",
          duration: o.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || ft,
          onStart: function() {
              if (s.pause(),
              !g) {
                  var T = o.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                  _._dur !== T && Fa(_, T, 0, 1).render(_._time, !0, !0),
                  g = 1
              }
              f && f.apply(_, d || [])
          }
      }, o));
      return h ? _.render(0) : _
  }
  ,
  n.tweenFromTo = function(i, o, s) {
      return this.tweenTo(o, Vr({
          startAt: {
              time: Cr(this, i)
          }
      }, s))
  }
  ,
  n.recent = function() {
      return this._recent
  }
  ,
  n.nextLabel = function(i) {
      return i === void 0 && (i = this._time),
      Nw(this, Cr(this, i))
  }
  ,
  n.previousLabel = function(i) {
      return i === void 0 && (i = this._time),
      Nw(this, Cr(this, i), 1)
  }
  ,
  n.currentLabel = function(i) {
      return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ft)
  }
  ,
  n.shiftChildren = function(i, o, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, l = this.labels, u; a; )
          a._start >= s && (a._start += i,
          a._end += i),
          a = a._next;
      if (o)
          for (u in l)
              l[u] >= s && (l[u] += i);
      return as(this)
  }
  ,
  n.invalidate = function(i) {
      var o = this._first;
      for (this._lock = 0; o; )
          o.invalidate(i),
          o = o._next;
      return e.prototype.invalidate.call(this, i)
  }
  ,
  n.clear = function(i) {
      i === void 0 && (i = !0);
      for (var o = this._first, s; o; )
          s = o._next,
          this.remove(o),
          o = s;
      return this._dp && (this._time = this._tTime = this._pTime = 0),
      i && (this.labels = {}),
      as(this)
  }
  ,
  n.totalDuration = function(i) {
      var o = 0, s = this, a = s._last, l = Ir, u, f, d;
      if (arguments.length)
          return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
      if (s._dirty) {
          for (d = s.parent; a; )
              u = a._prev,
              a._dirty && a.totalDuration(),
              f = a._start,
              f > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
              fi(s, a, f - a._delay, 1)._lock = 0) : l = f,
              f < 0 && a._ts && (o -= f,
              (!d && !s._dp || d && d.smoothChildTiming) && (s._start += f / s._ts,
              s._time -= f,
              s._tTime -= f),
              s.shiftChildren(-f, !1, -1 / 0),
              l = 0),
              a._end > o && a._ts && (o = a._end),
              a = u;
          Fa(s, s === Pt && s._time > o ? s._time : o, 1, 1),
          s._dirty = 0
      }
      return s._tDur
  }
  ,
  t.updateRoot = function(i) {
      if (Pt._ts && (wS(Pt, Bf(i, Pt)),
      vS = mr.frame),
      mr.frame >= Dw) {
          Dw += wr.autoSleep || 120;
          var o = Pt._first;
          if ((!o || !o._ts) && wr.autoSleep && mr._listeners.length < 2) {
              for (; o && !o._ts; )
                  o = o._next;
              o || mr.sleep()
          }
      }
  }
  ,
  t
}(bu);
Vr(Zn.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var SN = function(t, n, r, i, o, s, a) {
  var l = new sr(this._pt,t,n,0,1,YS,null,o), u = 0, f = 0, d, h, g, _, m, T, x, w;
  for (l.b = r,
  l.e = i,
  r += "",
  i += "",
  (x = ~i.indexOf("random(")) && (i = wu(i)),
  s && (w = [r, i],
  s(w, t, n),
  r = w[0],
  i = w[1]),
  h = r.match(Np) || []; d = Np.exec(i); )
      _ = d[0],
      m = i.substring(u, d.index),
      g ? g = (g + 1) % 5 : m.substr(-5) === "rgba(" && (g = 1),
      _ !== h[f++] && (T = parseFloat(h[f - 1]) || 0,
      l._pt = {
          _next: l._pt,
          p: m || f === 1 ? m : ",",
          s: T,
          c: _.charAt(1) === "=" ? _a(T, _) - T : parseFloat(_) - T,
          m: g && g < 4 ? Math.round : 0
      },
      u = Np.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "",
  l.fp = a,
  (dS.test(i) || x) && (l.e = 0),
  this._pt = l,
  l
}, cv = function(t, n, r, i, o, s, a, l, u, f) {
  Nt(i) && (i = i(o || 0, t, s));
  var d = t[n], h = r !== "get" ? r : Nt(d) ? u ? t[n.indexOf("set") || !Nt(t["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : t[n]() : d, g = Nt(d) ? u ? PN : WS : dv, _;
  if (hn(i) && (~i.indexOf("random(") && (i = wu(i)),
  i.charAt(1) === "=" && (_ = _a(h, i) + (An(h) || 0),
  (_ || _ === 0) && (i = _))),
  !f || h !== i || Tm)
      return !isNaN(h * i) && i !== "" ? (_ = new sr(this._pt,t,n,+h || 0,i - (h || 0),typeof d == "boolean" ? AN : qS,0,g),
      u && (_.fp = u),
      a && _.modifier(a, this, t),
      this._pt = _) : (!d && !(n in t) && sv(n, i),
      SN.call(this, t, n, h, i, g, l || wr.stringFilter, u))
}, EN = function(t, n, r, i, o) {
  if (Nt(t) && (t = Bl(t, o, n, r, i)),
  !wi(t) || t.style && t.nodeType || Dn(t) || cS(t))
      return hn(t) ? Bl(t, o, n, r, i) : t;
  var s = {}, a;
  for (a in t)
      s[a] = Bl(t[a], o, n, r, i);
  return s
}, US = function(t, n, r, i, o, s) {
  var a, l, u, f;
  if (hr[t] && (a = new hr[t]).init(o, a.rawVars ? n[t] : EN(n[t], i, o, s, r), r, i, s) !== !1 && (r._pt = l = new sr(r._pt,o,t,0,1,a.render,a,0,a.priority),
  r !== la))
      for (u = r._ptLookup[r._targets.indexOf(o)],
      f = a._props.length; f--; )
          u[a._props[f]] = l;
  return a
}, co, Tm, fv = function e(t, n, r) {
  var i = t.vars, o = i.ease, s = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, f = i.onUpdateParams, d = i.callbackScope, h = i.runBackwards, g = i.yoyoEase, _ = i.keyframes, m = i.autoRevert, T = t._dur, x = t._startAt, w = t._targets, S = t.parent, b = S && S.data === "nested" ? S.vars.targets : w, k = t._overwrite === "auto" && !nv, D = t.timeline, O, R, M, j, Q, I, Z, te, ue, ae, oe, L, K;
  if (D && (!_ || !o) && (o = "none"),
  t._ease = ls(o, Ia.ease),
  t._yEase = g ? jS(ls(g === !0 ? o : g, Ia.ease)) : 0,
  g && t._yoyo && !t._repeat && (g = t._yEase,
  t._yEase = t._ease,
  t._ease = g),
  t._from = !D && !!i.runBackwards,
  !D || _ && !i.stagger) {
      if (te = w[0] ? ss(w[0]).harness : 0,
      L = te && i[te.prop],
      O = $f(i, av),
      x && (x._zTime < 0 && x.progress(1),
      n < 0 && h && a && !m ? x.render(-1, !0) : x.revert(h && T ? Gc : JI),
      x._lazy = 0),
      s) {
          if (Ao(t._startAt = Kt.set(w, Vr({
              data: "isStart",
              overwrite: !1,
              parent: S,
              immediateRender: !0,
              lazy: !x && ir(l),
              startAt: null,
              delay: 0,
              onUpdate: u,
              onUpdateParams: f,
              callbackScope: d,
              stagger: 0
          }, s))),
          t._startAt._dp = 0,
          t._startAt._sat = t,
          n < 0 && (Rn || !a && !m) && t._startAt.revert(Gc),
          a && T && n <= 0 && r <= 0) {
              n && (t._zTime = n);
              return
          }
      } else if (h && T && !x) {
          if (n && (a = !1),
          M = Vr({
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !x && ir(l),
              immediateRender: a,
              stagger: 0,
              parent: S
          }, O),
          L && (M[te.prop] = L),
          Ao(t._startAt = Kt.set(w, M)),
          t._startAt._dp = 0,
          t._startAt._sat = t,
          n < 0 && (Rn ? t._startAt.revert(Gc) : t._startAt.render(-1, !0)),
          t._zTime = n,
          !a)
              e(t._startAt, ft, ft);
          else if (!n)
              return
      }
      for (t._pt = t._ptCache = 0,
      l = T && ir(l) || l && !T,
      R = 0; R < w.length; R++) {
          if (Q = w[R],
          Z = Q._gsap || uv(w)[R]._gsap,
          t._ptLookup[R] = ae = {},
          wm[Z.id] && To.length && zf(),
          oe = b === w ? R : b.indexOf(Q),
          te && (ue = new te).init(Q, L || O, t, oe, b) !== !1 && (t._pt = j = new sr(t._pt,Q,ue.name,0,1,ue.render,ue,0,ue.priority),
          ue._props.forEach(function(A) {
              ae[A] = j
          }),
          ue.priority && (I = 1)),
          !te || L)
              for (M in O)
                  hr[M] && (ue = US(M, O, t, oe, Q, b)) ? ue.priority && (I = 1) : ae[M] = j = cv.call(t, Q, M, "get", O[M], oe, b, 0, i.stringFilter);
          t._op && t._op[R] && t.kill(Q, t._op[R]),
          k && t._pt && (co = t,
          Pt.killTweensOf(Q, ae, t.globalTime(n)),
          K = !t.parent,
          co = 0),
          t._pt && l && (wm[Z.id] = 1)
      }
      I && GS(t),
      t._onInit && t._onInit(t)
  }
  t._onUpdate = u,
  t._initted = (!t._op || t._pt) && !K,
  _ && n <= 0 && D.render(Ir, !0, !0)
}, TN = function(t, n, r, i, o, s, a) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[n], u, f, d, h;
  if (!l)
      for (l = t._ptCache[n] = [],
      d = t._ptLookup,
      h = t._targets.length; h--; ) {
          if (u = d[h][n],
          u && u.d && u.d._pt)
              for (u = u.d._pt; u && u.p !== n && u.fp !== n; )
                  u = u._next;
          if (!u)
              return Tm = 1,
              t.vars[n] = "+=0",
              fv(t, a),
              Tm = 0,
              1;
          l.push(u)
      }
  for (h = l.length; h--; )
      f = l[h],
      u = f._pt || f,
      u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + s * u.c,
      u.c = r - u.s,
      f.e && (f.e = Ht(r) + An(f.e)),
      f.b && (f.b = u.s + An(f.b))
}, CN = function(t, n) {
  var r = t[0] ? ss(t[0]).harness : 0, i = r && r.aliases, o, s, a, l;
  if (!i)
      return n;
  o = _s({}, n);
  for (s in i)
      if (s in o)
          for (l = i[s].split(","),
          a = l.length; a--; )
              o[l[a]] = o[s];
  return o
}, kN = function(t, n, r, i) {
  var o = n.ease || i || "power1.inOut", s, a;
  if (Dn(n))
      a = r[t] || (r[t] = []),
      n.forEach(function(l, u) {
          return a.push({
              t: u / (n.length - 1) * 100,
              v: l,
              e: o
          })
      });
  else
      for (s in n)
          a = r[s] || (r[s] = []),
          s === "ease" || a.push({
              t: parseFloat(t),
              v: n[s],
              e: o
          })
}, Bl = function(t, n, r, i, o) {
  return Nt(t) ? t.call(n, r, i, o) : hn(t) && ~t.indexOf("random(") ? wu(t) : t
}, VS = lv + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", HS = {};
or(VS + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
  return HS[e] = 1
});
var Kt = function(e) {
  lS(t, e);
  function t(r, i, o, s) {
      var a;
      typeof i == "number" && (o.duration = i,
      i = o,
      o = null),
      a = e.call(this, s ? i : zl(i)) || this;
      var l = a.vars, u = l.duration, f = l.delay, d = l.immediateRender, h = l.stagger, g = l.overwrite, _ = l.keyframes, m = l.defaults, T = l.scrollTrigger, x = l.yoyoEase, w = i.parent || Pt, S = (Dn(r) || cS(r) ? Hi(r[0]) : "length"in i) ? [r] : Nr(r), b, k, D, O, R, M, j, Q;
      if (a._targets = S.length ? uv(S) : jf("GSAP target " + r + " not found. https://greensock.com", !wr.nullTargetWarn) || [],
      a._ptLookup = [],
      a._overwrite = g,
      _ || h || gc(u) || gc(f)) {
          if (i = a.vars,
          b = a.timeline = new Zn({
              data: "nested",
              defaults: m || {},
              targets: w && w.data === "nested" ? w.vars.targets : S
          }),
          b.kill(),
          b.parent = b._dp = Pi(a),
          b._start = 0,
          h || gc(u) || gc(f)) {
              if (O = S.length,
              j = h && PS(h),
              wi(h))
                  for (R in h)
                      ~VS.indexOf(R) && (Q || (Q = {}),
                      Q[R] = h[R]);
              for (k = 0; k < O; k++)
                  D = $f(i, HS),
                  D.stagger = 0,
                  x && (D.yoyoEase = x),
                  Q && _s(D, Q),
                  M = S[k],
                  D.duration = +Bl(u, Pi(a), k, M, S),
                  D.delay = (+Bl(f, Pi(a), k, M, S) || 0) - a._delay,
                  !h && O === 1 && D.delay && (a._delay = f = D.delay,
                  a._start += f,
                  D.delay = 0),
                  b.to(M, D, j ? j(k, M, S) : 0),
                  b._ease = Ye.none;
              b.duration() ? u = f = 0 : a.timeline = 0
          } else if (_) {
              zl(Vr(b.vars.defaults, {
                  ease: "none"
              })),
              b._ease = ls(_.ease || i.ease || "none");
              var I = 0, Z, te, ue;
              if (Dn(_))
                  _.forEach(function(ae) {
                      return b.to(S, ae, ">")
                  }),
                  b.duration();
              else {
                  D = {};
                  for (R in _)
                      R === "ease" || R === "easeEach" || kN(R, _[R], D, _.easeEach);
                  for (R in D)
                      for (Z = D[R].sort(function(ae, oe) {
                          return ae.t - oe.t
                      }),
                      I = 0,
                      k = 0; k < Z.length; k++)
                          te = Z[k],
                          ue = {
                              ease: te.e,
                              duration: (te.t - (k ? Z[k - 1].t : 0)) / 100 * u
                          },
                          ue[R] = te.v,
                          b.to(S, ue, I),
                          I += ue.duration;
                  b.duration() < u && b.to({}, {
                      duration: u - b.duration()
                  })
              }
          }
          u || a.duration(u = b.duration())
      } else
          a.timeline = 0;
      return g === !0 && !nv && (co = Pi(a),
      Pt.killTweensOf(S),
      co = 0),
      fi(w, Pi(a), o),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (d || !u && !_ && a._start === bn(w._time) && ir(d) && iN(Pi(a)) && w.data !== "nested") && (a._tTime = -ft,
      a.render(Math.max(0, -f) || 0)),
      T && ES(Pi(a), T),
      a
  }
  var n = t.prototype;
  return n.render = function(i, o, s) {
      var a = this._time, l = this._tDur, u = this._dur, f = i < 0, d = i > l - ft && !f ? l : i < ft ? 0 : i, h, g, _, m, T, x, w, S, b;
      if (!u)
          sN(this, i, o, s);
      else if (d !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
          if (h = d,
          S = this.timeline,
          this._repeat) {
              if (m = u + this._rDelay,
              this._repeat < -1 && f)
                  return this.totalTime(m * 100 + i, o, s);
              if (h = bn(d % m),
              d === l ? (_ = this._repeat,
              h = u) : (_ = ~~(d / m),
              _ && _ === d / m && (h = u,
              _--),
              h > u && (h = u)),
              x = this._yoyo && _ & 1,
              x && (b = this._yEase,
              h = u - h),
              T = Na(this._tTime, m),
              h === a && !s && this._initted)
                  return this._tTime = d,
                  this;
              _ !== T && (S && this._yEase && zS(S, x),
              this.vars.repeatRefresh && !x && !this._lock && (this._lock = s = 1,
              this.render(bn(m * _), !0).invalidate()._lock = 0))
          }
          if (!this._initted) {
              if (TS(this, f ? i : h, s, o, d))
                  return this._tTime = 0,
                  this;
              if (a !== this._time)
                  return this;
              if (u !== this._dur)
                  return this.render(i, o, s)
          }
          if (this._tTime = d,
          this._time = h,
          !this._act && this._ts && (this._act = 1,
          this._lazy = 0),
          this.ratio = w = (b || this._ease)(h / u),
          this._from && (this.ratio = w = 1 - w),
          h && !a && !o && !_ && (Fr(this, "onStart"),
          this._tTime !== d))
              return this;
          for (g = this._pt; g; )
              g.r(w, g.d),
              g = g._next;
          S && S.render(i < 0 ? i : !h && x ? -ft : S._dur * S._ease(h / this._dur), o, s) || this._startAt && (this._zTime = i),
          this._onUpdate && !o && (f && _m(this, i, o, s),
          Fr(this, "onUpdate")),
          this._repeat && _ !== T && this.vars.onRepeat && !o && this.parent && Fr(this, "onRepeat"),
          (d === this._tDur || !d) && this._tTime === d && (f && !this._onUpdate && _m(this, i, !0, !0),
          (i || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ao(this, 1),
          !o && !(f && !a) && (d || a || x) && (Fr(this, d === l ? "onComplete" : "onReverseComplete", !0),
          this._prom && !(d < l && this.timeScale() > 0) && this._prom()))
      }
      return this
  }
  ,
  n.targets = function() {
      return this._targets
  }
  ,
  n.invalidate = function(i) {
      return (!i || !this.vars.runBackwards) && (this._startAt = 0),
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
      this._ptLookup = [],
      this.timeline && this.timeline.invalidate(i),
      e.prototype.invalidate.call(this, i)
  }
  ,
  n.resetTo = function(i, o, s, a) {
      _u || mr.wake(),
      this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
      return this._initted || fv(this, l),
      u = this._ease(l / this._dur),
      TN(this, i, o, s, a, u, l) ? this.resetTo(i, o, s, a) : (Id(this, 0),
      this.parent || xS(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
      this.render(0))
  }
  ,
  n.kill = function(i, o) {
      if (o === void 0 && (o = "all"),
      !i && (!o || o === "all"))
          return this._lazy = this._pt = 0,
          this.parent ? El(this) : this;
      if (this.timeline) {
          var s = this.timeline.totalDuration();
          return this.timeline.killTweensOf(i, o, co && co.vars.overwrite !== !0)._first || El(this),
          this.parent && s !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / s, 0, 1),
          this
      }
      var a = this._targets, l = i ? Nr(i) : a, u = this._ptLookup, f = this._pt, d, h, g, _, m, T, x;
      if ((!o || o === "all") && nN(a, l))
          return o === "all" && (this._pt = 0),
          El(this);
      for (d = this._op = this._op || [],
      o !== "all" && (hn(o) && (m = {},
      or(o, function(w) {
          return m[w] = 1
      }),
      o = m),
      o = CN(a, o)),
      x = a.length; x--; )
          if (~l.indexOf(a[x])) {
              h = u[x],
              o === "all" ? (d[x] = o,
              _ = h,
              g = {}) : (g = d[x] = d[x] || {},
              _ = o);
              for (m in _)
                  T = h && h[m],
                  T && ((!("kill"in T.d) || T.d.kill(m) === !0) && Ld(this, T, "_pt"),
                  delete h[m]),
                  g !== "all" && (g[m] = 1)
          }
      return this._initted && !this._pt && f && El(this),
      this
  }
  ,
  t.to = function(i, o) {
      return new t(i,o,arguments[2])
  }
  ,
  t.from = function(i, o) {
      return $l(1, arguments)
  }
  ,
  t.delayedCall = function(i, o, s, a) {
      return new t(o,0,{
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: o,
          onReverseComplete: o,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: a
      })
  }
  ,
  t.fromTo = function(i, o, s) {
      return $l(2, arguments)
  }
  ,
  t.set = function(i, o) {
      return o.duration = 0,
      o.repeatDelay || (o.repeat = 0),
      new t(i,o)
  }
  ,
  t.killTweensOf = function(i, o, s) {
      return Pt.killTweensOf(i, o, s)
  }
  ,
  t
}(bu);
Vr(Kt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
or("staggerTo,staggerFrom,staggerFromTo", function(e) {
  Kt[e] = function() {
      var t = new Zn
        , n = xm.call(arguments, 0);
      return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0),
      t[e].apply(t, n)
  }
});
var dv = function(t, n, r) {
  return t[n] = r
}
, WS = function(t, n, r) {
  return t[n](r)
}
, PN = function(t, n, r, i) {
  return t[n](i.fp, r)
}
, ON = function(t, n, r) {
  return t.setAttribute(n, r)
}
, pv = function(t, n) {
  return Nt(t[n]) ? WS : rv(t[n]) && t.setAttribute ? ON : dv
}
, qS = function(t, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e6) / 1e6, n)
}
, AN = function(t, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * t), n)
}
, YS = function(t, n) {
  var r = n._pt
    , i = "";
  if (!t && n.b)
      i = n.b;
  else if (t === 1 && n.e)
      i = n.e;
  else {
      for (; r; )
          i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i,
          r = r._next;
      i += n.c
  }
  n.set(n.t, n.p, i, n)
}
, hv = function(t, n) {
  for (var r = n._pt; r; )
      r.r(t, r.d),
      r = r._next
}
, RN = function(t, n, r, i) {
  for (var o = this._pt, s; o; )
      s = o._next,
      o.p === i && o.modifier(t, n, r),
      o = s
}
, DN = function(t) {
  for (var n = this._pt, r, i; n; )
      i = n._next,
      n.p === t && !n.op || n.op === t ? Ld(this, n, "_pt") : n.dep || (r = 1),
      n = i;
  return !r
}
, LN = function(t, n, r, i) {
  i.mSet(t, n, i.m.call(i.tween, r, i.mt), i)
}
, GS = function(t) {
  for (var n = t._pt, r, i, o, s; n; ) {
      for (r = n._next,
      i = o; i && i.pr > n.pr; )
          i = i._next;
      (n._prev = i ? i._prev : s) ? n._prev._next = n : o = n,
      (n._next = i) ? i._prev = n : s = n,
      n = r
  }
  t._pt = o
}
, sr = function() {
  function e(n, r, i, o, s, a, l, u, f) {
      this.t = r,
      this.s = o,
      this.c = s,
      this.p = i,
      this.r = a || qS,
      this.d = l || this,
      this.set = u || dv,
      this.pr = f || 0,
      this._next = n,
      n && (n._prev = this)
  }
  var t = e.prototype;
  return t.modifier = function(r, i, o) {
      this.mSet = this.mSet || this.set,
      this.set = LN,
      this.m = r,
      this.mt = o,
      this.tween = i
  }
  ,
  e
}();
or(lv + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
  return av[e] = 1
});
br.TweenMax = br.TweenLite = Kt;
br.TimelineLite = br.TimelineMax = Zn;
Pt = new Zn({
  sortChildren: !1,
  defaults: Ia,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
wr.stringFilter = FS;
var us = []
, Kc = {}
, MN = []
, jw = 0
, IN = 0
, Bp = function(t) {
  return (Kc[t] || MN).map(function(n) {
      return n()
  })
}
, Cm = function() {
  var t = Date.now()
    , n = [];
  t - jw > 2 && (Bp("matchMediaInit"),
  us.forEach(function(r) {
      var i = r.queries, o = r.conditions, s, a, l, u;
      for (a in i)
          s = kr.matchMedia(i[a]).matches,
          s && (l = 1),
          s !== o[a] && (o[a] = s,
          u = 1);
      u && (r.revert(),
      l && n.push(r))
  }),
  Bp("matchMediaRevert"),
  n.forEach(function(r) {
      return r.onMatch(r)
  }),
  jw = t,
  Bp("matchMedia"))
}
, XS = function() {
  function e(n, r) {
      this.selector = r && Sm(r),
      this.data = [],
      this._r = [],
      this.isReverted = !1,
      this.id = IN++,
      n && this.add(n)
  }
  var t = e.prototype;
  return t.add = function(r, i, o) {
      Nt(r) && (o = i,
      i = r,
      r = Nt);
      var s = this
        , a = function() {
          var u = It, f = s.selector, d;
          return u && u !== s && u.data.push(s),
          o && (s.selector = Sm(o)),
          It = s,
          d = i.apply(s, arguments),
          Nt(d) && s._r.push(d),
          It = u,
          s.selector = f,
          s.isReverted = !1,
          d
      };
      return s.last = a,
      r === Nt ? a(s) : r ? s[r] = a : a
  }
  ,
  t.ignore = function(r) {
      var i = It;
      It = null,
      r(this),
      It = i
  }
  ,
  t.getTweens = function() {
      var r = [];
      return this.data.forEach(function(i) {
          return i instanceof e ? r.push.apply(r, i.getTweens()) : i instanceof Kt && !(i.parent && i.parent.data === "nested") && r.push(i)
      }),
      r
  }
  ,
  t.clear = function() {
      this._r.length = this.data.length = 0
  }
  ,
  t.kill = function(r, i) {
      var o = this;
      if (r) {
          var s = this.getTweens();
          this.data.forEach(function(l) {
              l.data === "isFlip" && (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function(u) {
                  return s.splice(s.indexOf(u), 1)
              }))
          }),
          s.map(function(l) {
              return {
                  g: l.globalTime(0),
                  t: l
              }
          }).sort(function(l, u) {
              return u.g - l.g || -1 / 0
          }).forEach(function(l) {
              return l.t.revert(r)
          }),
          this.data.forEach(function(l) {
              return !(l instanceof Kt) && l.revert && l.revert(r)
          }),
          this._r.forEach(function(l) {
              return l(r, o)
          }),
          this.isReverted = !0
      } else
          this.data.forEach(function(l) {
              return l.kill && l.kill()
          });
      if (this.clear(),
      i)
          for (var a = us.length; a--; )
              us[a].id === this.id && us.splice(a, 1)
  }
  ,
  t.revert = function(r) {
      this.kill(r || {})
  }
  ,
  e
}()
, NN = function() {
  function e(n) {
      this.contexts = [],
      this.scope = n
  }
  var t = e.prototype;
  return t.add = function(r, i, o) {
      wi(r) || (r = {
          matches: r
      });
      var s = new XS(0,o || this.scope), a = s.conditions = {}, l, u, f;
      It && !s.selector && (s.selector = It.selector),
      this.contexts.push(s),
      i = s.add("onMatch", i),
      s.queries = r;
      for (u in r)
          u === "all" ? f = 1 : (l = kr.matchMedia(r[u]),
          l && (us.indexOf(s) < 0 && us.push(s),
          (a[u] = l.matches) && (f = 1),
          l.addListener ? l.addListener(Cm) : l.addEventListener("change", Cm)));
      return f && i(s),
      this
  }
  ,
  t.revert = function(r) {
      this.kill(r || {})
  }
  ,
  t.kill = function(r) {
      this.contexts.forEach(function(i) {
          return i.kill(r, !0)
      })
  }
  ,
  e
}()
, Uf = {
  registerPlugin: function() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
      n.forEach(function(i) {
          return MS(i)
      })
  },
  timeline: function(t) {
      return new Zn(t)
  },
  getTweensOf: function(t, n) {
      return Pt.getTweensOf(t, n)
  },
  getProperty: function(t, n, r, i) {
      hn(t) && (t = Nr(t)[0]);
      var o = ss(t || {}).get
        , s = r ? bS : _S;
      return r === "native" && (r = ""),
      t && (n ? s((hr[n] && hr[n].get || o)(t, n, r, i)) : function(a, l, u) {
          return s((hr[a] && hr[a].get || o)(t, a, l, u))
      }
      )
  },
  quickSetter: function(t, n, r) {
      if (t = Nr(t),
      t.length > 1) {
          var i = t.map(function(f) {
              return ar.quickSetter(f, n, r)
          })
            , o = i.length;
          return function(f) {
              for (var d = o; d--; )
                  i[d](f)
          }
      }
      t = t[0] || {};
      var s = hr[n]
        , a = ss(t)
        , l = a.harness && (a.harness.aliases || {})[n] || n
        , u = s ? function(f) {
          var d = new s;
          la._pt = 0,
          d.init(t, r ? f + r : f, la, 0, [t]),
          d.render(1, d),
          la._pt && hv(1, la)
      }
      : a.set(t, l);
      return s ? u : function(f) {
          return u(t, l, r ? f + r : f, a, 1)
      }
  },
  quickTo: function(t, n, r) {
      var i, o = ar.to(t, _s((i = {},
      i[n] = "+=0.1",
      i.paused = !0,
      i), r || {})), s = function(l, u, f) {
          return o.resetTo(n, l, u, f)
      };
      return s.tween = o,
      s
  },
  isTweening: function(t) {
      return Pt.getTweensOf(t, !0).length > 0
  },
  defaults: function(t) {
      return t && t.ease && (t.ease = ls(t.ease, Ia.ease)),
      Lw(Ia, t || {})
  },
  config: function(t) {
      return Lw(wr, t || {})
  },
  registerEffect: function(t) {
      var n = t.name
        , r = t.effect
        , i = t.plugins
        , o = t.defaults
        , s = t.extendTimeline;
      (i || "").split(",").forEach(function(a) {
          return a && !hr[a] && !br[a] && jf(n + " effect requires " + a + " plugin.")
      }),
      Fp[n] = function(a, l, u) {
          return r(Nr(a), Vr(l || {}, o), u)
      }
      ,
      s && (Zn.prototype[n] = function(a, l, u) {
          return this.add(Fp[n](a, wi(l) ? l : (u = l) && {}, this), u)
      }
      )
  },
  registerEase: function(t, n) {
      Ye[t] = ls(n)
  },
  parseEase: function(t, n) {
      return arguments.length ? ls(t, n) : Ye
  },
  getById: function(t) {
      return Pt.getById(t)
  },
  exportRoot: function(t, n) {
      t === void 0 && (t = {});
      var r = new Zn(t), i, o;
      for (r.smoothChildTiming = ir(t.smoothChildTiming),
      Pt.remove(r),
      r._dp = 0,
      r._time = r._tTime = Pt._time,
      i = Pt._first; i; )
          o = i._next,
          (n || !(!i._dur && i instanceof Kt && i.vars.onComplete === i._targets[0])) && fi(r, i, i._start - i._delay),
          i = o;
      return fi(Pt, r, 0),
      r
  },
  context: function(t, n) {
      return t ? new XS(t,n) : It
  },
  matchMedia: function(t) {
      return new NN(t)
  },
  matchMediaRefresh: function() {
      return us.forEach(function(t) {
          var n = t.conditions, r, i;
          for (i in n)
              n[i] && (n[i] = !1,
              r = 1);
          r && t.revert()
      }) || Cm()
  },
  addEventListener: function(t, n) {
      var r = Kc[t] || (Kc[t] = []);
      ~r.indexOf(n) || r.push(n)
  },
  removeEventListener: function(t, n) {
      var r = Kc[t]
        , i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1)
  },
  utils: {
      wrap: hN,
      wrapYoyo: mN,
      distribute: PS,
      random: AS,
      snap: OS,
      normalize: pN,
      getUnit: An,
      clamp: uN,
      splitColor: IS,
      toArray: Nr,
      selector: Sm,
      mapRange: DS,
      pipe: fN,
      unitize: dN,
      interpolate: gN,
      shuffle: kS
  },
  install: mS,
  effects: Fp,
  ticker: mr,
  updateRoot: Zn.updateRoot,
  plugins: hr,
  globalTimeline: Pt,
  core: {
      PropTween: sr,
      globals: gS,
      Tween: Kt,
      Timeline: Zn,
      Animation: bu,
      getCache: ss,
      _removeLinkedListItem: Ld,
      reverting: function() {
          return Rn
      },
      context: function(t) {
          return t && It && (It.data.push(t),
          t._ctx = It),
          It
      },
      suppressOverwrites: function(t) {
          return nv = t
      }
  }
};
or("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
  return Uf[e] = Kt[e]
});
mr.add(Zn.updateRoot);
la = Uf.to({}, {
  duration: 0
});
var FN = function(t, n) {
  for (var r = t._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
  return r
}
, jN = function(t, n) {
  var r = t._targets, i, o, s;
  for (i in n)
      for (o = r.length; o--; )
          s = t._ptLookup[o][i],
          s && (s = s.d) && (s._pt && (s = FN(s, i)),
          s && s.modifier && s.modifier(n[i], t, r[o], i))
}
, Up = function(t, n) {
  return {
      name: t,
      rawVars: 1,
      init: function(i, o, s) {
          s._onInit = function(a) {
              var l, u;
              if (hn(o) && (l = {},
              or(o, function(f) {
                  return l[f] = 1
              }),
              o = l),
              n) {
                  l = {};
                  for (u in o)
                      l[u] = n(o[u]);
                  o = l
              }
              jN(a, o)
          }
      }
  }
}
, ar = Uf.registerPlugin({
  name: "attr",
  init: function(t, n, r, i, o) {
      var s, a, l;
      this.tween = r;
      for (s in n)
          l = t.getAttribute(s) || "",
          a = this.add(t, "setAttribute", (l || 0) + "", n[s], i, o, 0, 0, s),
          a.op = s,
          a.b = l,
          this._props.push(s)
  },
  render: function(t, n) {
      for (var r = n._pt; r; )
          Rn ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
          r = r._next
  }
}, {
  name: "endArray",
  init: function(t, n) {
      for (var r = n.length; r--; )
          this.add(t, r, t[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
  }
}, Up("roundProps", Em), Up("modifiers"), Up("snap", OS)) || Uf;
Kt.version = Zn.version = ar.version = "3.12.2";
hS = 1;
iv() && ja();
Ye.Power0;
Ye.Power1;
Ye.Power2;
Ye.Power3;
Ye.Power4;
Ye.Linear;
Ye.Quad;
Ye.Cubic;
Ye.Quart;
Ye.Quint;
Ye.Strong;
Ye.Elastic;
Ye.Back;
Ye.SteppedEase;
Ye.Bounce;
Ye.Sine;
Ye.Expo;
Ye.Circ;
/*!
* CSSPlugin 3.12.2
* https://greensock.com
*
* Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var zw, fo, ba, mv, ts, $w, gv, zN = function() {
  return typeof window < "u"
}, Wi = {}, Wo = 180 / Math.PI, xa = Math.PI / 180, $s = Math.atan2, Bw = 1e8, vv = /([A-Z])/g, $N = /(left|right|width|margin|padding|x)/i, BN = /[\s,\(]\S/, hi = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, km = function(t, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
}, UN = function(t, n) {
  return n.set(n.t, n.p, t === 1 ? n.e : Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u, n)
}, VN = function(t, n) {
  return n.set(n.t, n.p, t ? Math.round((n.s + n.c * t) * 1e4) / 1e4 + n.u : n.b, n)
}, HN = function(t, n) {
  var r = n.s + n.c * t;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, KS = function(t, n) {
  return n.set(n.t, n.p, t ? n.e : n.b, n)
}, QS = function(t, n) {
  return n.set(n.t, n.p, t !== 1 ? n.b : n.e, n)
}, WN = function(t, n, r) {
  return t.style[n] = r
}, qN = function(t, n, r) {
  return t.style.setProperty(n, r)
}, YN = function(t, n, r) {
  return t._gsap[n] = r
}, GN = function(t, n, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r
}, XN = function(t, n, r, i, o) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r,
  s.renderTransform(o, s)
}, KN = function(t, n, r, i, o) {
  var s = t._gsap;
  s[n] = r,
  s.renderTransform(o, s)
}, Ot = "transform", ni = Ot + "Origin", QN = function e(t, n) {
  var r = this
    , i = this.target
    , o = i.style;
  if (t in Wi && o) {
      if (this.tfm = this.tfm || {},
      t !== "transform")
          t = hi[t] || t,
          ~t.indexOf(",") ? t.split(",").forEach(function(s) {
              return r.tfm[s] = Ai(i, s)
          }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : Ai(i, t);
      else
          return hi.transform.split(",").forEach(function(s) {
              return e.call(r, s, n)
          });
      if (this.props.indexOf(Ot) >= 0)
          return;
      i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
      this.props.push(ni, n, "")),
      t = Ot
  }
  (o || n) && this.props.push(t, n, o[t])
}, JS = function(t) {
  t.translate && (t.removeProperty("translate"),
  t.removeProperty("scale"),
  t.removeProperty("rotate"))
}, JN = function() {
  var t = this.props, n = this.target, r = n.style, i = n._gsap, o, s;
  for (o = 0; o < t.length; o += 3)
      t[o + 1] ? n[t[o]] = t[o + 2] : t[o + 2] ? r[t[o]] = t[o + 2] : r.removeProperty(t[o].substr(0, 2) === "--" ? t[o] : t[o].replace(vv, "-$1").toLowerCase());
  if (this.tfm) {
      for (s in this.tfm)
          i[s] = this.tfm[s];
      i.svg && (i.renderTransform(),
      n.setAttribute("data-svg-origin", this.svgo || "")),
      o = gv(),
      (!o || !o.isStart) && !r[Ot] && (JS(r),
      i.uncache = 1)
  }
}, ZS = function(t, n) {
  var r = {
      target: t,
      props: [],
      revert: JN,
      save: QN
  };
  return t._gsap || ar.core.getCache(t),
  n && n.split(",").forEach(function(i) {
      return r.save(i)
  }),
  r
}, e2, Pm = function(t, n) {
  var r = fo.createElementNS ? fo.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fo.createElement(t);
  return r.style ? r : fo.createElement(t)
}, vi = function e(t, n, r) {
  var i = getComputedStyle(t);
  return i[n] || i.getPropertyValue(n.replace(vv, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, za(n) || n, 1) || ""
}, Uw = "O,Moz,ms,Ms,Webkit".split(","), za = function(t, n, r) {
  var i = n || ts
    , o = i.style
    , s = 5;
  if (t in o && !r)
      return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Uw[s] + t in o); )
      ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Uw[s] : "") + t
}, Om = function() {
  zN() && window.document && (zw = window,
  fo = zw.document,
  ba = fo.documentElement,
  ts = Pm("div") || {
      style: {}
  },
  Pm("div"),
  Ot = za(Ot),
  ni = Ot + "Origin",
  ts.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
  e2 = !!za("perspective"),
  gv = ar.core.reverting,
  mv = 1)
}, Vp = function e(t) {
  var n = Pm("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, s;
  if (ba.appendChild(n),
  n.appendChild(this),
  this.style.display = "block",
  t)
      try {
          s = this.getBBox(),
          this._gsapBBox = this.getBBox,
          this.getBBox = e
      } catch {}
  else
      this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
  ba.removeChild(n),
  this.style.cssText = o,
  s
}, Vw = function(t, n) {
  for (var r = n.length; r--; )
      if (t.hasAttribute(n[r]))
          return t.getAttribute(n[r])
}, t2 = function(t) {
  var n;
  try {
      n = t.getBBox()
  } catch {
      n = Vp.call(t, !0)
  }
  return n && (n.width || n.height) || t.getBBox === Vp || (n = Vp.call(t, !0)),
  n && !n.width && !n.x && !n.y ? {
      x: +Vw(t, ["x", "cx", "x1"]) || 0,
      y: +Vw(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
  } : n
}, n2 = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && t2(t))
}, xu = function(t, n) {
  if (n) {
      var r = t.style;
      n in Wi && n !== ni && (n = Ot),
      r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
      r.removeProperty(n.replace(vv, "-$1").toLowerCase())) : r.removeAttribute(n)
  }
}, po = function(t, n, r, i, o, s) {
  var a = new sr(t._pt,n,r,0,1,s ? QS : KS);
  return t._pt = a,
  a.b = i,
  a.e = o,
  t._props.push(r),
  a
}, Hw = {
  deg: 1,
  rad: 1,
  turn: 1
}, ZN = {
  grid: 1,
  flex: 1
}, Ro = function e(t, n, r, i) {
  var o = parseFloat(r) || 0, s = (r + "").trim().substr((o + "").length) || "px", a = ts.style, l = $N.test(n), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", g = i === "%", _, m, T, x;
  return i === s || !o || Hw[i] || Hw[s] ? o : (s !== "px" && !h && (o = e(t, n, r, "px")),
  x = t.getCTM && n2(t),
  (g || s === "%") && (Wi[n] || ~n.indexOf("adius")) ? (_ = x ? t.getBBox()[l ? "width" : "height"] : t[f],
  Ht(g ? o / _ * d : o / 100 * _)) : (a[l ? "width" : "height"] = d + (h ? s : i),
  m = ~n.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode,
  x && (m = (t.ownerSVGElement || {}).parentNode),
  (!m || m === fo || !m.appendChild) && (m = fo.body),
  T = m._gsap,
  T && g && T.width && l && T.time === mr.time && !T.uncache ? Ht(o / T.width * d) : ((g || s === "%") && !ZN[vi(m, "display")] && (a.position = vi(t, "position")),
  m === t && (a.position = "static"),
  m.appendChild(ts),
  _ = ts[f],
  m.removeChild(ts),
  a.position = "absolute",
  l && g && (T = ss(m),
  T.time = mr.time,
  T.width = m[f]),
  Ht(h ? _ * o / d : _ && o ? d / _ * o : 0))))
}, Ai = function(t, n, r, i) {
  var o;
  return mv || Om(),
  n in hi && n !== "transform" && (n = hi[n],
  ~n.indexOf(",") && (n = n.split(",")[0])),
  Wi[n] && n !== "transform" ? (o = Eu(t, i),
  o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : Hf(vi(t, ni)) + " " + o.zOrigin + "px") : (o = t.style[n],
  (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = Vf[n] && Vf[n](t, n, r) || vi(t, n) || yS(t, n) || (n === "opacity" ? 1 : 0))),
  r && !~(o + "").trim().indexOf(" ") ? Ro(t, n, o, r) + r : o
}, e5 = function(t, n, r, i) {
  if (!r || r === "none") {
      var o = za(n, t, 1)
        , s = o && vi(t, o, 1);
      s && s !== r ? (n = o,
      r = s) : n === "borderColor" && (r = vi(t, "borderTopColor"))
  }
  var a = new sr(this._pt,t.style,n,0,1,YS), l = 0, u = 0, f, d, h, g, _, m, T, x, w, S, b, k;
  if (a.b = r,
  a.e = i,
  r += "",
  i += "",
  i === "auto" && (t.style[n] = i,
  i = vi(t, n) || i,
  t.style[n] = r),
  f = [r, i],
  FS(f),
  r = f[0],
  i = f[1],
  h = r.match(aa) || [],
  k = i.match(aa) || [],
  k.length) {
      for (; d = aa.exec(i); )
          T = d[0],
          w = i.substring(l, d.index),
          _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1),
          T !== (m = h[u++] || "") && (g = parseFloat(m) || 0,
          b = m.substr((g + "").length),
          T.charAt(1) === "=" && (T = _a(g, T) + b),
          x = parseFloat(T),
          S = T.substr((x + "").length),
          l = aa.lastIndex - S.length,
          S || (S = S || wr.units[n] || b,
          l === i.length && (i += S,
          a.e += S)),
          b !== S && (g = Ro(t, n, m, S) || 0),
          a._pt = {
              _next: a._pt,
              p: w || u === 1 ? w : ",",
              s: g,
              c: x - g,
              m: _ && _ < 4 || n === "zIndex" ? Math.round : 0
          });
      a.c = l < i.length ? i.substring(l, i.length) : ""
  } else
      a.r = n === "display" && i === "none" ? QS : KS;
  return dS.test(i) && (a.e = 0),
  this._pt = a,
  a
}, Ww = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, t5 = function(t) {
  var n = t.split(" ")
    , r = n[0]
    , i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r,
  r = i,
  i = t),
  n[0] = Ww[r] || r,
  n[1] = Ww[i] || i,
  n.join(" ")
}, n5 = function(t, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t, i = r.style, o = n.u, s = r._gsap, a, l, u;
      if (o === "all" || o === !0)
          i.cssText = "",
          l = 1;
      else
          for (o = o.split(","),
          u = o.length; --u > -1; )
              a = o[u],
              Wi[a] && (l = 1,
              a = a === "transformOrigin" ? ni : Ot),
              xu(r, a);
      l && (xu(r, Ot),
      s && (s.svg && r.removeAttribute("transform"),
      Eu(r, 1),
      s.uncache = 1,
      JS(i)))
  }
}, Vf = {
  clearProps: function(t, n, r, i, o) {
      if (o.data !== "isFromStart") {
          var s = t._pt = new sr(t._pt,n,r,0,0,n5);
          return s.u = i,
          s.pr = -10,
          s.tween = o,
          t._props.push(r),
          1
      }
  }
}, Su = [1, 0, 0, 1, 0, 0], r2 = {}, i2 = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, qw = function(t) {
  var n = vi(t, Ot);
  return i2(n) ? Su : n.substr(7).match(fS).map(Ht)
}, yv = function(t, n) {
  var r = t._gsap || ss(t), i = t.style, o = qw(t), s, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
  o = [l.a, l.b, l.c, l.d, l.e, l.f],
  o.join(",") === "1,0,0,1,0,0" ? Su : o) : (o === Su && !t.offsetParent && t !== ba && !r.svg && (l = i.display,
  i.display = "block",
  s = t.parentNode,
  (!s || !t.offsetParent) && (u = 1,
  a = t.nextElementSibling,
  ba.appendChild(t)),
  o = qw(t),
  l ? i.display = l : xu(t, "display"),
  u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : ba.removeChild(t))),
  n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, Am = function(t, n, r, i, o, s) {
  var a = t._gsap, l = o || yv(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, g = l[0], _ = l[1], m = l[2], T = l[3], x = l[4], w = l[5], S = n.split(" "), b = parseFloat(S[0]) || 0, k = parseFloat(S[1]) || 0, D, O, R, M;
  r ? l !== Su && (O = g * T - _ * m) && (R = b * (T / O) + k * (-m / O) + (m * w - T * x) / O,
  M = b * (-_ / O) + k * (g / O) - (g * w - _ * x) / O,
  b = R,
  k = M) : (D = t2(t),
  b = D.x + (~S[0].indexOf("%") ? b / 100 * D.width : b),
  k = D.y + (~(S[1] || S[0]).indexOf("%") ? k / 100 * D.height : k)),
  i || i !== !1 && a.smooth ? (x = b - u,
  w = k - f,
  a.xOffset = d + (x * g + w * m) - x,
  a.yOffset = h + (x * _ + w * T) - w) : a.xOffset = a.yOffset = 0,
  a.xOrigin = b,
  a.yOrigin = k,
  a.smooth = !!i,
  a.origin = n,
  a.originIsAbsolute = !!r,
  t.style[ni] = "0px 0px",
  s && (po(s, a, "xOrigin", u, b),
  po(s, a, "yOrigin", f, k),
  po(s, a, "xOffset", d, a.xOffset),
  po(s, a, "yOffset", h, a.yOffset)),
  t.setAttribute("data-svg-origin", b + " " + k)
}, Eu = function(t, n) {
  var r = t._gsap || new BS(t);
  if ("x"in r && !n && !r.uncache)
      return r;
  var i = t.style, o = r.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(t), u = vi(t, ni) || "0", f, d, h, g, _, m, T, x, w, S, b, k, D, O, R, M, j, Q, I, Z, te, ue, ae, oe, L, K, A, me, Te, N, xe, Ge;
  return f = d = h = m = T = x = w = S = b = 0,
  g = _ = 1,
  r.svg = !!(t.getCTM && n2(t)),
  l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Ot] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Ot] !== "none" ? l[Ot] : "")),
  i.scale = i.rotate = i.translate = "none"),
  O = yv(t, r.svg),
  r.svg && (r.uncache ? (L = t.getBBox(),
  u = r.xOrigin - L.x + "px " + (r.yOrigin - L.y) + "px",
  oe = "") : oe = !n && t.getAttribute("data-svg-origin"),
  Am(t, oe || u, !!oe || r.originIsAbsolute, r.smooth !== !1, O)),
  k = r.xOrigin || 0,
  D = r.yOrigin || 0,
  O !== Su && (Q = O[0],
  I = O[1],
  Z = O[2],
  te = O[3],
  f = ue = O[4],
  d = ae = O[5],
  O.length === 6 ? (g = Math.sqrt(Q * Q + I * I),
  _ = Math.sqrt(te * te + Z * Z),
  m = Q || I ? $s(I, Q) * Wo : 0,
  w = Z || te ? $s(Z, te) * Wo + m : 0,
  w && (_ *= Math.abs(Math.cos(w * xa))),
  r.svg && (f -= k - (k * Q + D * Z),
  d -= D - (k * I + D * te))) : (Ge = O[6],
  N = O[7],
  A = O[8],
  me = O[9],
  Te = O[10],
  xe = O[11],
  f = O[12],
  d = O[13],
  h = O[14],
  R = $s(Ge, Te),
  T = R * Wo,
  R && (M = Math.cos(-R),
  j = Math.sin(-R),
  oe = ue * M + A * j,
  L = ae * M + me * j,
  K = Ge * M + Te * j,
  A = ue * -j + A * M,
  me = ae * -j + me * M,
  Te = Ge * -j + Te * M,
  xe = N * -j + xe * M,
  ue = oe,
  ae = L,
  Ge = K),
  R = $s(-Z, Te),
  x = R * Wo,
  R && (M = Math.cos(-R),
  j = Math.sin(-R),
  oe = Q * M - A * j,
  L = I * M - me * j,
  K = Z * M - Te * j,
  xe = te * j + xe * M,
  Q = oe,
  I = L,
  Z = K),
  R = $s(I, Q),
  m = R * Wo,
  R && (M = Math.cos(R),
  j = Math.sin(R),
  oe = Q * M + I * j,
  L = ue * M + ae * j,
  I = I * M - Q * j,
  ae = ae * M - ue * j,
  Q = oe,
  ue = L),
  T && Math.abs(T) + Math.abs(m) > 359.9 && (T = m = 0,
  x = 180 - x),
  g = Ht(Math.sqrt(Q * Q + I * I + Z * Z)),
  _ = Ht(Math.sqrt(ae * ae + Ge * Ge)),
  R = $s(ue, ae),
  w = Math.abs(R) > 2e-4 ? R * Wo : 0,
  b = xe ? 1 / (xe < 0 ? -xe : xe) : 0),
  r.svg && (oe = t.getAttribute("transform"),
  r.forceCSS = t.setAttribute("transform", "") || !i2(vi(t, Ot)),
  oe && t.setAttribute("transform", oe))),
  Math.abs(w) > 90 && Math.abs(w) < 270 && (o ? (g *= -1,
  w += m <= 0 ? 180 : -180,
  m += m <= 0 ? 180 : -180) : (_ *= -1,
  w += w <= 0 ? 180 : -180)),
  n = n || r.uncache,
  r.x = f - ((r.xPercent = f && (!n && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s,
  r.y = d - ((r.yPercent = d && (!n && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s,
  r.z = h + s,
  r.scaleX = Ht(g),
  r.scaleY = Ht(_),
  r.rotation = Ht(m) + a,
  r.rotationX = Ht(T) + a,
  r.rotationY = Ht(x) + a,
  r.skewX = w + a,
  r.skewY = S + a,
  r.transformPerspective = b + s,
  (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[ni] = Hf(u)),
  r.xOffset = r.yOffset = 0,
  r.force3D = wr.force3D,
  r.renderTransform = r.svg ? i5 : e2 ? o2 : r5,
  r.uncache = 0,
  r
}, Hf = function(t) {
  return (t = t.split(" "))[0] + " " + t[1]
}, Hp = function(t, n, r) {
  var i = An(n);
  return Ht(parseFloat(n) + parseFloat(Ro(t, "x", r + "px", i))) + i
}, r5 = function(t, n) {
  n.z = "0px",
  n.rotationY = n.rotationX = "0deg",
  n.force3D = 0,
  o2(t, n)
}, Bo = "0deg", vl = "0px", Uo = ") ", o2 = function(t, n) {
  var r = n || this
    , i = r.xPercent
    , o = r.yPercent
    , s = r.x
    , a = r.y
    , l = r.z
    , u = r.rotation
    , f = r.rotationY
    , d = r.rotationX
    , h = r.skewX
    , g = r.skewY
    , _ = r.scaleX
    , m = r.scaleY
    , T = r.transformPerspective
    , x = r.force3D
    , w = r.target
    , S = r.zOrigin
    , b = ""
    , k = x === "auto" && t && t !== 1 || x === !0;
  if (S && (d !== Bo || f !== Bo)) {
      var D = parseFloat(f) * xa, O = Math.sin(D), R = Math.cos(D), M;
      D = parseFloat(d) * xa,
      M = Math.cos(D),
      s = Hp(w, s, O * M * -S),
      a = Hp(w, a, -Math.sin(D) * -S),
      l = Hp(w, l, R * M * -S + S)
  }
  T !== vl && (b += "perspective(" + T + Uo),
  (i || o) && (b += "translate(" + i + "%, " + o + "%) "),
  (k || s !== vl || a !== vl || l !== vl) && (b += l !== vl || k ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + Uo),
  u !== Bo && (b += "rotate(" + u + Uo),
  f !== Bo && (b += "rotateY(" + f + Uo),
  d !== Bo && (b += "rotateX(" + d + Uo),
  (h !== Bo || g !== Bo) && (b += "skew(" + h + ", " + g + Uo),
  (_ !== 1 || m !== 1) && (b += "scale(" + _ + ", " + m + Uo),
  w.style[Ot] = b || "translate(0, 0)"
}, i5 = function(t, n) {
  var r = n || this, i = r.xPercent, o = r.yPercent, s = r.x, a = r.y, l = r.rotation, u = r.skewX, f = r.skewY, d = r.scaleX, h = r.scaleY, g = r.target, _ = r.xOrigin, m = r.yOrigin, T = r.xOffset, x = r.yOffset, w = r.forceCSS, S = parseFloat(s), b = parseFloat(a), k, D, O, R, M;
  l = parseFloat(l),
  u = parseFloat(u),
  f = parseFloat(f),
  f && (f = parseFloat(f),
  u += f,
  l += f),
  l || u ? (l *= xa,
  u *= xa,
  k = Math.cos(l) * d,
  D = Math.sin(l) * d,
  O = Math.sin(l - u) * -h,
  R = Math.cos(l - u) * h,
  u && (f *= xa,
  M = Math.tan(u - f),
  M = Math.sqrt(1 + M * M),
  O *= M,
  R *= M,
  f && (M = Math.tan(f),
  M = Math.sqrt(1 + M * M),
  k *= M,
  D *= M)),
  k = Ht(k),
  D = Ht(D),
  O = Ht(O),
  R = Ht(R)) : (k = d,
  R = h,
  D = O = 0),
  (S && !~(s + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (S = Ro(g, "x", s, "px"),
  b = Ro(g, "y", a, "px")),
  (_ || m || T || x) && (S = Ht(S + _ - (_ * k + m * O) + T),
  b = Ht(b + m - (_ * D + m * R) + x)),
  (i || o) && (M = g.getBBox(),
  S = Ht(S + i / 100 * M.width),
  b = Ht(b + o / 100 * M.height)),
  M = "matrix(" + k + "," + D + "," + O + "," + R + "," + S + "," + b + ")",
  g.setAttribute("transform", M),
  w && (g.style[Ot] = M)
}, o5 = function(t, n, r, i, o) {
  var s = 360, a = hn(o), l = parseFloat(o) * (a && ~o.indexOf("rad") ? Wo : 1), u = l - i, f = i + u + "deg", d, h;
  return a && (d = o.split("_")[1],
  d === "short" && (u %= s,
  u !== u % (s / 2) && (u += u < 0 ? s : -s)),
  d === "cw" && u < 0 ? u = (u + s * Bw) % s - ~~(u / s) * s : d === "ccw" && u > 0 && (u = (u - s * Bw) % s - ~~(u / s) * s)),
  t._pt = h = new sr(t._pt,n,r,i,u,UN),
  h.e = f,
  h.u = "deg",
  t._props.push(r),
  h
}, Yw = function(t, n) {
  for (var r in n)
      t[r] = n[r];
  return t
}, s5 = function(t, n, r) {
  var i = Yw({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, l, u, f, d, h, g, _;
  i.svg ? (u = r.getAttribute("transform"),
  r.setAttribute("transform", ""),
  s[Ot] = n,
  a = Eu(r, 1),
  xu(r, Ot),
  r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Ot],
  s[Ot] = n,
  a = Eu(r, 1),
  s[Ot] = u);
  for (l in Wi)
      u = i[l],
      f = a[l],
      u !== f && o.indexOf(l) < 0 && (g = An(u),
      _ = An(f),
      d = g !== _ ? Ro(r, l, u, _) : parseFloat(u),
      h = parseFloat(f),
      t._pt = new sr(t._pt,a,l,d,h - d,km),
      t._pt.u = _ || 0,
      t._props.push(l));
  Yw(a, i)
};
or("padding,margin,Width,Radius", function(e, t) {
  var n = "Top"
    , r = "Right"
    , i = "Bottom"
    , o = "Left"
    , s = (t < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(a) {
      return t < 2 ? e + a : "border" + a + e
  });
  Vf[t > 1 ? "border" + e : e] = function(a, l, u, f, d) {
      var h, g;
      if (arguments.length < 4)
          return h = s.map(function(_) {
              return Ai(a, _, u)
          }),
          g = h.join(" "),
          g.split(h[0]).length === 5 ? h[0] : g;
      h = (f + "").split(" "),
      g = {},
      s.forEach(function(_, m) {
          return g[_] = h[m] = h[m] || h[(m - 1) / 2 | 0]
      }),
      a.init(l, g, d)
  }
});
var s2 = {
  name: "css",
  register: Om,
  targetTest: function(t) {
      return t.style && t.nodeType
  },
  init: function(t, n, r, i, o) {
      var s = this._props, a = t.style, l = r.vars.startAt, u, f, d, h, g, _, m, T, x, w, S, b, k, D, O, R;
      mv || Om(),
      this.styles = this.styles || ZS(t),
      R = this.styles.props,
      this.tween = r;
      for (m in n)
          if (m !== "autoRound" && (f = n[m],
          !(hr[m] && US(m, n, r, i, t, o)))) {
              if (g = typeof f,
              _ = Vf[m],
              g === "function" && (f = f.call(r, i, t, o),
              g = typeof f),
              g === "string" && ~f.indexOf("random(") && (f = wu(f)),
              _)
                  _(this, t, m, f, r) && (O = 1);
              else if (m.substr(0, 2) === "--")
                  u = (getComputedStyle(t).getPropertyValue(m) + "").trim(),
                  f += "",
                  Co.lastIndex = 0,
                  Co.test(u) || (T = An(u),
                  x = An(f)),
                  x ? T !== x && (u = Ro(t, m, u, x) + x) : T && (f += T),
                  this.add(a, "setProperty", u, f, i, o, 0, 0, m),
                  s.push(m),
                  R.push(m, 0, a[m]);
              else if (g !== "undefined") {
                  if (l && m in l ? (u = typeof l[m] == "function" ? l[m].call(r, i, t, o) : l[m],
                  hn(u) && ~u.indexOf("random(") && (u = wu(u)),
                  An(u + "") || (u += wr.units[m] || An(Ai(t, m)) || ""),
                  (u + "").charAt(1) === "=" && (u = Ai(t, m))) : u = Ai(t, m),
                  h = parseFloat(u),
                  w = g === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                  w && (f = f.substr(2)),
                  d = parseFloat(f),
                  m in hi && (m === "autoAlpha" && (h === 1 && Ai(t, "visibility") === "hidden" && d && (h = 0),
                  R.push("visibility", 0, a.visibility),
                  po(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)),
                  m !== "scale" && m !== "transform" && (m = hi[m],
                  ~m.indexOf(",") && (m = m.split(",")[0]))),
                  S = m in Wi,
                  S) {
                      if (this.styles.save(m),
                      b || (k = t._gsap,
                      k.renderTransform && !n.parseTransform || Eu(t, n.parseTransform),
                      D = n.smoothOrigin !== !1 && k.smooth,
                      b = this._pt = new sr(this._pt,a,Ot,0,1,k.renderTransform,k,0,-1),
                      b.dep = 1),
                      m === "scale")
                          this._pt = new sr(this._pt,k,"scaleY",k.scaleY,(w ? _a(k.scaleY, w + d) : d) - k.scaleY || 0,km),
                          this._pt.u = 0,
                          s.push("scaleY", m),
                          m += "X";
                      else if (m === "transformOrigin") {
                          R.push(ni, 0, a[ni]),
                          f = t5(f),
                          k.svg ? Am(t, f, 0, D, 0, this) : (x = parseFloat(f.split(" ")[2]) || 0,
                          x !== k.zOrigin && po(this, k, "zOrigin", k.zOrigin, x),
                          po(this, a, m, Hf(u), Hf(f)));
                          continue
                      } else if (m === "svgOrigin") {
                          Am(t, f, 1, D, 0, this);
                          continue
                      } else if (m in r2) {
                          o5(this, k, m, h, w ? _a(h, w + f) : f);
                          continue
                      } else if (m === "smoothOrigin") {
                          po(this, k, "smooth", k.smooth, f);
                          continue
                      } else if (m === "force3D") {
                          k[m] = f;
                          continue
                      } else if (m === "transform") {
                          s5(this, f, t);
                          continue
                      }
                  } else
                      m in a || (m = za(m) || m);
                  if (S || (d || d === 0) && (h || h === 0) && !BN.test(f) && m in a)
                      T = (u + "").substr((h + "").length),
                      d || (d = 0),
                      x = An(f) || (m in wr.units ? wr.units[m] : T),
                      T !== x && (h = Ro(t, m, u, x)),
                      this._pt = new sr(this._pt,S ? k : a,m,h,(w ? _a(h, w + d) : d) - h,!S && (x === "px" || m === "zIndex") && n.autoRound !== !1 ? HN : km),
                      this._pt.u = x || 0,
                      T !== x && x !== "%" && (this._pt.b = u,
                      this._pt.r = VN);
                  else if (m in a)
                      e5.call(this, t, m, u, w ? w + f : f);
                  else if (m in t)
                      this.add(t, m, u || t[m], w ? w + f : f, i, o);
                  else if (m !== "parseTransform") {
                      sv(m, f);
                      continue
                  }
                  S || (m in a ? R.push(m, 0, a[m]) : R.push(m, 1, u || t[m])),
                  s.push(m)
              }
          }
      O && GS(this)
  },
  render: function(t, n) {
      if (n.tween._time || !gv())
          for (var r = n._pt; r; )
              r.r(t, r.d),
              r = r._next;
      else
          n.styles.revert()
  },
  get: Ai,
  aliases: hi,
  getSetter: function(t, n, r) {
      var i = hi[n];
      return i && i.indexOf(",") < 0 && (n = i),
      n in Wi && n !== ni && (t._gsap.x || Ai(t, "x")) ? r && $w === r ? n === "scale" ? GN : YN : ($w = r || {}) && (n === "scale" ? XN : KN) : t.style && !rv(t.style[n]) ? WN : ~n.indexOf("-") ? qN : pv(t, n)
  },
  core: {
      _removeProperty: xu,
      _getMatrix: yv
  }
};
ar.utils.checkPrefix = za;
ar.core.getStyleSaver = ZS;
(function(e, t, n, r) {
  var i = or(e + "," + t + "," + n, function(o) {
      Wi[o] = 1
  });
  or(t, function(o) {
      wr.units[o] = "deg",
      r2[o] = 1
  }),
  hi[i[13]] = e + "," + t,
  or(r, function(o) {
      var s = o.split(":");
      hi[s[1]] = i[s[0]]
  })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
or("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
  wr.units[e] = "px"
});
ar.registerPlugin(s2);
var wv = ar.registerPlugin(s2) || ar;
wv.core.Tween;
function Gw(e, t) {
  for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1,
      r.configurable = !0,
      "value"in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function a5(e, t, n) {
  return t && Gw(e.prototype, t),
  n && Gw(e, n),
  e
}
/*!
* Observer 3.12.2
* https://greensock.com
*
* @license Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var xn, Rm, gr, ho, mo, Sa, a2, qo, Ul, l2, Mi, qr, u2, c2 = function() {
  return xn || typeof window < "u" && (xn = window.gsap) && xn.registerPlugin && xn
}, f2 = 1, ua = [], $e = [], yi = [], Vl = Date.now, Dm = function(t, n) {
  return n
}, l5 = function() {
  var t = Ul.core
    , n = t.bridge || {}
    , r = t._scrollers
    , i = t._proxies;
  r.push.apply(r, $e),
  i.push.apply(i, yi),
  $e = r,
  yi = i,
  Dm = function(s, a) {
      return n[s](a)
  }
}, ko = function(t, n) {
  return ~yi.indexOf(t) && yi[yi.indexOf(t) + 1][n]
}, Hl = function(t) {
  return !!~l2.indexOf(t)
}, Nn = function(t, n, r, i, o) {
  return t.addEventListener(n, r, {
      passive: !i,
      capture: !!o
  })
}, In = function(t, n, r, i) {
  return t.removeEventListener(n, r, !!i)
}, vc = "scrollLeft", yc = "scrollTop", Lm = function() {
  return Mi && Mi.isPressed || $e.cache++
}, Wf = function(t, n) {
  var r = function i(o) {
      if (o || o === 0) {
          f2 && (gr.history.scrollRestoration = "manual");
          var s = Mi && Mi.isPressed;
          o = i.v = Math.round(o) || (Mi && Mi.iOS ? 1 : 0),
          t(o),
          i.cacheID = $e.cache,
          s && Dm("ss", o)
      } else
          (n || $e.cache !== i.cacheID || Dm("ref")) && (i.cacheID = $e.cache,
          i.v = t());
      return i.v + i.offset
  };
  return r.offset = 0,
  t && r
}, Un = {
  s: vc,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Wf(function(e) {
      return arguments.length ? gr.scrollTo(e, nn.sc()) : gr.pageXOffset || ho[vc] || mo[vc] || Sa[vc] || 0
  })
}, nn = {
  s: yc,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: Un,
  sc: Wf(function(e) {
      return arguments.length ? gr.scrollTo(Un.sc(), e) : gr.pageYOffset || ho[yc] || mo[yc] || Sa[yc] || 0
  })
}, Kn = function(t, n) {
  return (n && n._ctx && n._ctx.selector || xn.utils.toArray)(t)[0] || (typeof t == "string" && xn.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
}, Do = function(t, n) {
  var r = n.s
    , i = n.sc;
  Hl(t) && (t = ho.scrollingElement || mo);
  var o = $e.indexOf(t)
    , s = i === nn.sc ? 1 : 2;
  !~o && (o = $e.push(t) - 1),
  $e[o + s] || Nn(t, "scroll", Lm);
  var a = $e[o + s]
    , l = a || ($e[o + s] = Wf(ko(t, r), !0) || (Hl(t) ? i : Wf(function(u) {
      return arguments.length ? t[r] = u : t[r]
  })));
  return l.target = t,
  a || (l.smooth = xn.getProperty(t, "scrollBehavior") === "smooth"),
  l
}, Mm = function(t, n, r) {
  var i = t
    , o = t
    , s = Vl()
    , a = s
    , l = n || 50
    , u = Math.max(500, l * 3)
    , f = function(_, m) {
      var T = Vl();
      m || T - s > l ? (o = i,
      i = _,
      a = s,
      s = T) : r ? i += _ : i = o + (_ - o) / (T - a) * (s - a)
  }
    , d = function() {
      o = i = r ? 0 : i,
      a = s = 0
  }
    , h = function(_) {
      var m = a
        , T = o
        , x = Vl();
      return (_ || _ === 0) && _ !== i && f(_),
      s === a || x - a > u ? 0 : (i + (r ? T : -T)) / ((r ? x : s) - m) * 1e3
  };
  return {
      update: f,
      reset: d,
      getVelocity: h
  }
}, yl = function(t, n) {
  return n && !t._gsapAllow && t.preventDefault(),
  t.changedTouches ? t.changedTouches[0] : t
}, Xw = function(t) {
  var n = Math.max.apply(Math, t)
    , r = Math.min.apply(Math, t);
  return Math.abs(n) >= Math.abs(r) ? n : r
}, d2 = function() {
  Ul = xn.core.globals().ScrollTrigger,
  Ul && Ul.core && l5()
}, p2 = function(t) {
  return xn = t || c2(),
  xn && typeof document < "u" && document.body && (gr = window,
  ho = document,
  mo = ho.documentElement,
  Sa = ho.body,
  l2 = [gr, ho, mo, Sa],
  xn.utils.clamp,
  u2 = xn.core.context || function() {}
  ,
  qo = "onpointerenter"in Sa ? "pointer" : "mouse",
  a2 = Jt.isTouch = gr.matchMedia && gr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in gr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
  qr = Jt.eventTypes = ("ontouchstart"in mo ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in mo ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
  setTimeout(function() {
      return f2 = 0
  }, 500),
  d2(),
  Rm = 1),
  Rm
};
Un.op = nn;
$e.cache = 0;
var Jt = function() {
  function e(n) {
      this.init(n)
  }
  var t = e.prototype;
  return t.init = function(r) {
      Rm || p2(xn) || console.warn("Please gsap.registerPlugin(Observer)"),
      Ul || d2();
      var i = r.tolerance
        , o = r.dragMinimum
        , s = r.type
        , a = r.target
        , l = r.lineHeight
        , u = r.debounce
        , f = r.preventDefault
        , d = r.onStop
        , h = r.onStopDelay
        , g = r.ignore
        , _ = r.wheelSpeed
        , m = r.event
        , T = r.onDragStart
        , x = r.onDragEnd
        , w = r.onDrag
        , S = r.onPress
        , b = r.onRelease
        , k = r.onRight
        , D = r.onLeft
        , O = r.onUp
        , R = r.onDown
        , M = r.onChangeX
        , j = r.onChangeY
        , Q = r.onChange
        , I = r.onToggleX
        , Z = r.onToggleY
        , te = r.onHover
        , ue = r.onHoverEnd
        , ae = r.onMove
        , oe = r.ignoreCheck
        , L = r.isNormalizer
        , K = r.onGestureStart
        , A = r.onGestureEnd
        , me = r.onWheel
        , Te = r.onEnable
        , N = r.onDisable
        , xe = r.onClick
        , Ge = r.scrollSpeed
        , Ze = r.capture
        , Xe = r.allowClicks
        , Oe = r.lockAxis
        , ot = r.onLockAxis;
      this.target = a = Kn(a) || mo,
      this.vars = r,
      g && (g = xn.utils.toArray(g)),
      i = i || 1e-9,
      o = o || 0,
      _ = _ || 1,
      Ge = Ge || 1,
      s = s || "wheel,touch,pointer",
      u = u !== !1,
      l || (l = parseFloat(gr.getComputedStyle(Sa).lineHeight) || 22);
      var Tn, Ft, gn, Ae, lt, ut, jt, E = this, F = 0, $ = 0, q = Do(a, Un), Y = Do(a, nn), G = q(), fe = Y(), Ke = ~s.indexOf("touch") && !~s.indexOf("pointer") && qr[0] === "pointerdown", Ce = Hl(a), je = a.ownerDocument || ho, zt = [0, 0, 0], it = [0, 0, 0], qt = 0, Dt = function() {
          return qt = Vl()
      }, vn = function(ge, se) {
          return (E.event = ge) && g && ~g.indexOf(ge.target) || se && Ke && ge.pointerType !== "touch" || oe && oe(ge, se)
      }, dt = function() {
          E._vx.reset(),
          E._vy.reset(),
          Ft.pause(),
          d && d(E)
      }, an = function() {
          var ge = E.deltaX = Xw(zt)
            , se = E.deltaY = Xw(it)
            , Me = Math.abs(ge) >= i
            , ne = Math.abs(se) >= i;
          Q && (Me || ne) && Q(E, ge, se, zt, it),
          Me && (k && E.deltaX > 0 && k(E),
          D && E.deltaX < 0 && D(E),
          M && M(E),
          I && E.deltaX < 0 != F < 0 && I(E),
          F = E.deltaX,
          zt[0] = zt[1] = zt[2] = 0),
          ne && (R && E.deltaY > 0 && R(E),
          O && E.deltaY < 0 && O(E),
          j && j(E),
          Z && E.deltaY < 0 != $ < 0 && Z(E),
          $ = E.deltaY,
          it[0] = it[1] = it[2] = 0),
          (Ae || gn) && (ae && ae(E),
          gn && (w(E),
          gn = !1),
          Ae = !1),
          ut && !(ut = !1) && ot && ot(E),
          lt && (me(E),
          lt = !1),
          Tn = 0
      }, z = function(ge, se, Me) {
          zt[Me] += ge,
          it[Me] += se,
          E._vx.update(ge),
          E._vy.update(se),
          u ? Tn || (Tn = requestAnimationFrame(an)) : an()
      }, B = function(ge, se) {
          Oe && !jt && (E.axis = jt = Math.abs(ge) > Math.abs(se) ? "x" : "y",
          ut = !0),
          jt !== "y" && (zt[2] += ge,
          E._vx.update(ge, !0)),
          jt !== "x" && (it[2] += se,
          E._vy.update(se, !0)),
          u ? Tn || (Tn = requestAnimationFrame(an)) : an()
      }, W = function(ge) {
          if (!vn(ge, 1)) {
              ge = yl(ge, f);
              var se = ge.clientX
                , Me = ge.clientY
                , ne = se - E.x
                , Ee = Me - E.y
                , ie = E.isDragging;
              E.x = se,
              E.y = Me,
              (ie || Math.abs(E.startX - se) >= o || Math.abs(E.startY - Me) >= o) && (w && (gn = !0),
              ie || (E.isDragging = !0),
              B(ne, Ee),
              ie || T && T(E))
          }
      }, re = E.onPress = function(ce) {
          vn(ce, 1) || ce && ce.button || (E.axis = jt = null,
          Ft.pause(),
          E.isPressed = !0,
          ce = yl(ce),
          F = $ = 0,
          E.startX = E.x = ce.clientX,
          E.startY = E.y = ce.clientY,
          E._vx.reset(),
          E._vy.reset(),
          Nn(L ? a : je, qr[1], W, f, !0),
          E.deltaX = E.deltaY = 0,
          S && S(E))
      }
      , _e = E.onRelease = function(ce) {
          if (!vn(ce, 1)) {
              In(L ? a : je, qr[1], W, !0);
              var ge = !isNaN(E.y - E.startY)
                , se = E.isDragging && (Math.abs(E.x - E.startX) > 3 || Math.abs(E.y - E.startY) > 3)
                , Me = yl(ce);
              !se && ge && (E._vx.reset(),
              E._vy.reset(),
              f && Xe && xn.delayedCall(.08, function() {
                  if (Vl() - qt > 300 && !ce.defaultPrevented) {
                      if (ce.target.click)
                          ce.target.click();
                      else if (je.createEvent) {
                          var ne = je.createEvent("MouseEvents");
                          ne.initMouseEvent("click", !0, !0, gr, 1, Me.screenX, Me.screenY, Me.clientX, Me.clientY, !1, !1, !1, !1, 0, null),
                          ce.target.dispatchEvent(ne)
                      }
                  }
              })),
              E.isDragging = E.isGesturing = E.isPressed = !1,
              d && !L && Ft.restart(!0),
              x && se && x(E),
              b && b(E, se)
          }
      }
      , J = function(ge) {
          return ge.touches && ge.touches.length > 1 && (E.isGesturing = !0) && K(ge, E.isDragging)
      }, be = function() {
          return (E.isGesturing = !1) || A(E)
      }, he = function(ge) {
          if (!vn(ge)) {
              var se = q()
                , Me = Y();
              z((se - G) * Ge, (Me - fe) * Ge, 1),
              G = se,
              fe = Me,
              d && Ft.restart(!0)
          }
      }, ee = function(ge) {
          if (!vn(ge)) {
              ge = yl(ge, f),
              me && (lt = !0);
              var se = (ge.deltaMode === 1 ? l : ge.deltaMode === 2 ? gr.innerHeight : 1) * _;
              z(ge.deltaX * se, ge.deltaY * se, 0),
              d && !L && Ft.restart(!0)
          }
      }, ke = function(ge) {
          if (!vn(ge)) {
              var se = ge.clientX
                , Me = ge.clientY
                , ne = se - E.x
                , Ee = Me - E.y;
              E.x = se,
              E.y = Me,
              Ae = !0,
              (ne || Ee) && B(ne, Ee)
          }
      }, pt = function(ge) {
          E.event = ge,
          te(E)
      }, Se = function(ge) {
          E.event = ge,
          ue(E)
      }, Re = function(ge) {
          return vn(ge) || yl(ge, f) && xe(E)
      };
      Ft = E._dc = xn.delayedCall(h || .25, dt).pause(),
      E.deltaX = E.deltaY = 0,
      E._vx = Mm(0, 50, !0),
      E._vy = Mm(0, 50, !0),
      E.scrollX = q,
      E.scrollY = Y,
      E.isDragging = E.isGesturing = E.isPressed = !1,
      u2(this),
      E.enable = function(ce) {
          return E.isEnabled || (Nn(Ce ? je : a, "scroll", Lm),
          s.indexOf("scroll") >= 0 && Nn(Ce ? je : a, "scroll", he, f, Ze),
          s.indexOf("wheel") >= 0 && Nn(a, "wheel", ee, f, Ze),
          (s.indexOf("touch") >= 0 && a2 || s.indexOf("pointer") >= 0) && (Nn(a, qr[0], re, f, Ze),
          Nn(je, qr[2], _e),
          Nn(je, qr[3], _e),
          Xe && Nn(a, "click", Dt, !1, !0),
          xe && Nn(a, "click", Re),
          K && Nn(je, "gesturestart", J),
          A && Nn(je, "gestureend", be),
          te && Nn(a, qo + "enter", pt),
          ue && Nn(a, qo + "leave", Se),
          ae && Nn(a, qo + "move", ke)),
          E.isEnabled = !0,
          ce && ce.type && re(ce),
          Te && Te(E)),
          E
      }
      ,
      E.disable = function() {
          E.isEnabled && (ua.filter(function(ce) {
              return ce !== E && Hl(ce.target)
          }).length || In(Ce ? je : a, "scroll", Lm),
          E.isPressed && (E._vx.reset(),
          E._vy.reset(),
          In(L ? a : je, qr[1], W, !0)),
          In(Ce ? je : a, "scroll", he, Ze),
          In(a, "wheel", ee, Ze),
          In(a, qr[0], re, Ze),
          In(je, qr[2], _e),
          In(je, qr[3], _e),
          In(a, "click", Dt, !0),
          In(a, "click", Re),
          In(je, "gesturestart", J),
          In(je, "gestureend", be),
          In(a, qo + "enter", pt),
          In(a, qo + "leave", Se),
          In(a, qo + "move", ke),
          E.isEnabled = E.isPressed = E.isDragging = !1,
          N && N(E))
      }
      ,
      E.kill = E.revert = function() {
          E.disable();
          var ce = ua.indexOf(E);
          ce >= 0 && ua.splice(ce, 1),
          Mi === E && (Mi = 0)
      }
      ,
      ua.push(E),
      L && Hl(a) && (Mi = E),
      E.enable(m)
  }
  ,
  a5(e, [{
      key: "velocityX",
      get: function() {
          return this._vx.getVelocity()
      }
  }, {
      key: "velocityY",
      get: function() {
          return this._vy.getVelocity()
      }
  }]),
  e
}();
Jt.version = "3.12.2";
Jt.create = function(e) {
  return new Jt(e)
}
;
Jt.register = p2;
Jt.getAll = function() {
  return ua.slice()
}
;
Jt.getById = function(e) {
  return ua.filter(function(t) {
      return t.vars.id === e
  })[0]
}
;
c2() && xn.registerPlugin(Jt);
/*!
* ScrollTrigger 3.12.2
* https://greensock.com
*
* @license Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var pe, Hs, qe, Tt, Qr, _t, h2, qf, Yf, ca, Qc, wc, Pn, Nd, Im, jn, Kw, Qw, Ws, m2, Wp, g2, cr, v2, y2, w2, no, Nm, _v, Ea, bv, qp, _c = 1, Bn = Date.now, Yp = Bn(), $r = 0, Cl = 0, Jw = function(t, n, r) {
  var i = pr(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return r["_" + n + "Clamp"] = i,
  i ? t.substr(6, t.length - 7) : t
}, Zw = function(t, n) {
  return n && (!pr(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
}, u5 = function e() {
  return Cl && requestAnimationFrame(e)
}, e_ = function() {
  return Nd = 1
}, t_ = function() {
  return Nd = 0
}, li = function(t) {
  return t
}, kl = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0
}, _2 = function() {
  return typeof window < "u"
}, b2 = function() {
  return pe || _2() && (pe = window.gsap) && pe.registerPlugin && pe
}, bs = function(t) {
  return !!~h2.indexOf(t)
}, x2 = function(t) {
  return (t === "Height" ? bv : qe["inner" + t]) || Qr["client" + t] || _t["client" + t]
}, S2 = function(t) {
  return ko(t, "getBoundingClientRect") || (bs(t) ? function() {
      return rf.width = qe.innerWidth,
      rf.height = bv,
      rf
  }
  : function() {
      return Ri(t)
  }
  )
}, c5 = function(t, n, r) {
  var i = r.d
    , o = r.d2
    , s = r.a;
  return (s = ko(t, "getBoundingClientRect")) ? function() {
      return s()[i]
  }
  : function() {
      return (n ? x2(o) : t["client" + o]) || 0
  }
}, f5 = function(t, n) {
  return !n || ~yi.indexOf(t) ? S2(t) : function() {
      return rf
  }
}, Ii = function(t, n) {
  var r = n.s
    , i = n.d2
    , o = n.d
    , s = n.a;
  return Math.max(0, (r = "scroll" + i) && (s = ko(t, r)) ? s() - S2(t)()[o] : bs(t) ? (Qr[r] || _t[r]) - x2(i) : t[r] - t["offset" + i])
}, bc = function(t, n) {
  for (var r = 0; r < Ws.length; r += 3)
      (!n || ~n.indexOf(Ws[r + 1])) && t(Ws[r], Ws[r + 1], Ws[r + 2])
}, pr = function(t) {
  return typeof t == "string"
}, Vn = function(t) {
  return typeof t == "function"
}, Jc = function(t) {
  return typeof t == "number"
}, Yo = function(t) {
  return typeof t == "object"
}, wl = function(t, n, r) {
  return t && t.progress(n ? 0 : 1) && r && t.pause()
}, Gp = function(t, n) {
  if (t.enabled) {
      var r = n(t);
      r && r.totalTime && (t.callbackAnimation = r)
  }
}, Bs = Math.abs, E2 = "left", T2 = "top", xv = "right", Sv = "bottom", cs = "width", fs = "height", Wl = "Right", ql = "Left", Yl = "Top", Gl = "Bottom", Gt = "padding", Dr = "margin", $a = "Width", Ev = "Height", wn = "px", Lr = function(t) {
  return qe.getComputedStyle(t)
}, d5 = function(t) {
  var n = Lr(t).position;
  t.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, n_ = function(t, n) {
  for (var r in n)
      r in t || (t[r] = n[r]);
  return t
}, Ri = function(t, n) {
  var r = n && Lr(t)[Im] !== "matrix(1, 0, 0, 1, 0, 0)" && pe.to(t, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
  }).progress(1)
    , i = t.getBoundingClientRect();
  return r && r.progress(0).kill(),
  i
}, Fm = function(t, n) {
  var r = n.d2;
  return t["offset" + r] || t["client" + r] || 0
}, C2 = function(t) {
  var n = [], r = t.labels, i = t.duration(), o;
  for (o in r)
      n.push(r[o] / i);
  return n
}, p5 = function(t) {
  return function(n) {
      return pe.utils.snap(C2(t), n)
  }
}, Tv = function(t) {
  var n = pe.utils.snap(t)
    , r = Array.isArray(t) && t.slice(0).sort(function(i, o) {
      return i - o
  });
  return r ? function(i, o, s) {
      s === void 0 && (s = .001);
      var a;
      if (!o)
          return n(i);
      if (o > 0) {
          for (i -= s,
          a = 0; a < r.length; a++)
              if (r[a] >= i)
                  return r[a];
          return r[a - 1]
      } else
          for (a = r.length,
          i += s; a--; )
              if (r[a] <= i)
                  return r[a];
      return r[0]
  }
  : function(i, o, s) {
      s === void 0 && (s = .001);
      var a = n(i);
      return !o || Math.abs(a - i) < s || a - i < 0 == o < 0 ? a : n(o < 0 ? i - t : i + t)
  }
}, h5 = function(t) {
  return function(n, r) {
      return Tv(C2(t))(n, r.direction)
  }
}, xc = function(t, n, r, i) {
  return r.split(",").forEach(function(o) {
      return t(n, o, i)
  })
}, fn = function(t, n, r, i, o) {
  return t.addEventListener(n, r, {
      passive: !i,
      capture: !!o
  })
}, cn = function(t, n, r, i) {
  return t.removeEventListener(n, r, !!i)
}, Sc = function(t, n, r) {
  r = r && r.wheelHandler,
  r && (t(n, "wheel", r),
  t(n, "touchmove", r))
}, r_ = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Ec = {
  toggleActions: "play",
  anticipatePin: 0
}, Gf = {
  top: 0,
  left: 0,
  center: .5,
  bottom: 1,
  right: 1
}, Zc = function(t, n) {
  if (pr(t)) {
      var r = t.indexOf("=")
        , i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
      ~r && (t.indexOf("%") > r && (i *= n / 100),
      t = t.substr(0, r - 1)),
      t = i + (t in Gf ? Gf[t] * n : ~t.indexOf("%") ? parseFloat(t) * n / 100 : parseFloat(t) || 0)
  }
  return t
}, Tc = function(t, n, r, i, o, s, a, l) {
  var u = o.startColor
    , f = o.endColor
    , d = o.fontSize
    , h = o.indent
    , g = o.fontWeight
    , _ = Tt.createElement("div")
    , m = bs(r) || ko(r, "pinType") === "fixed"
    , T = t.indexOf("scroller") !== -1
    , x = m ? _t : r
    , w = t.indexOf("start") !== -1
    , S = w ? u : f
    , b = "border-color:" + S + ";font-size:" + d + ";color:" + S + ";font-weight:" + g + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return b += "position:" + ((T || l) && m ? "fixed;" : "absolute;"),
  (T || l || !m) && (b += (i === nn ? xv : Sv) + ":" + (s + parseFloat(h)) + "px;"),
  a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
  _._isStart = w,
  _.setAttribute("class", "gsap-marker-" + t + (n ? " marker-" + n : "")),
  _.style.cssText = b,
  _.innerText = n || n === 0 ? t + "-" + n : t,
  x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_),
  _._offset = _["offset" + i.op.d2],
  ef(_, 0, i, w),
  _
}, ef = function(t, n, r, i) {
  var o = {
      display: "block"
  }
    , s = r[i ? "os2" : "p2"]
    , a = r[i ? "p2" : "os2"];
  t._isFlipped = i,
  o[r.a + "Percent"] = i ? -100 : 0,
  o[r.a] = i ? "1px" : 0,
  o["border" + s + $a] = 1,
  o["border" + a + $a] = 0,
  o[r.p] = n + "px",
  pe.set(t, o)
}, Fe = [], jm = {}, Tu, i_ = function() {
  return Bn() - $r > 34 && (Tu || (Tu = requestAnimationFrame(zi)))
}, Us = function() {
  (!cr || !cr.isPressed || cr.startX > _t.clientWidth) && ($e.cache++,
  cr ? Tu || (Tu = requestAnimationFrame(zi)) : zi(),
  $r || Ss("scrollStart"),
  $r = Bn())
}, Xp = function() {
  w2 = qe.innerWidth,
  y2 = qe.innerHeight
}, Pl = function() {
  $e.cache++,
  !Pn && !g2 && !Tt.fullscreenElement && !Tt.webkitFullscreenElement && (!v2 || w2 !== qe.innerWidth || Math.abs(qe.innerHeight - y2) > qe.innerHeight * .25) && qf.restart(!0)
}, xs = {}, m5 = [], k2 = function e() {
  return cn(Ue, "scrollEnd", e) || ns(!0)
}, Ss = function(t) {
  return xs[t] && xs[t].map(function(n) {
      return n()
  }) || m5
}, fr = [], P2 = function(t) {
  for (var n = 0; n < fr.length; n += 5)
      (!t || fr[n + 4] && fr[n + 4].query === t) && (fr[n].style.cssText = fr[n + 1],
      fr[n].getBBox && fr[n].setAttribute("transform", fr[n + 2] || ""),
      fr[n + 3].uncache = 1)
}, Cv = function(t, n) {
  var r;
  for (jn = 0; jn < Fe.length; jn++)
      r = Fe[jn],
      r && (!n || r._ctx === n) && (t ? r.kill(1) : r.revert(!0, !0));
  n && P2(n),
  n || Ss("revert")
}, O2 = function(t, n) {
  $e.cache++,
  (n || !zn) && $e.forEach(function(r) {
      return Vn(r) && r.cacheID++ && (r.rec = 0)
  }),
  pr(t) && (qe.history.scrollRestoration = _v = t)
}, zn, ds = 0, o_, g5 = function() {
  if (o_ !== ds) {
      var t = o_ = ds;
      requestAnimationFrame(function() {
          return t === ds && ns(!0)
      })
  }
}, A2 = function() {
  _t.appendChild(Ea),
  bv = Ea.offsetHeight || qe.innerHeight,
  _t.removeChild(Ea)
}, ns = function(t, n) {
  if ($r && !t) {
      fn(Ue, "scrollEnd", k2);
      return
  }
  A2(),
  zn = Ue.isRefreshing = !0,
  $e.forEach(function(i) {
      return Vn(i) && ++i.cacheID && (i.rec = i())
  });
  var r = Ss("refreshInit");
  m2 && Ue.sort(),
  n || Cv(),
  $e.forEach(function(i) {
      Vn(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
      i(0))
  }),
  Fe.slice(0).forEach(function(i) {
      return i.refresh()
  }),
  Fe.forEach(function(i, o) {
      if (i._subPinOffset && i.pin) {
          var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
            , a = i.pin[s];
          i.revert(!0, 1),
          i.adjustPinSpacing(i.pin[s] - a),
          i.refresh()
      }
  }),
  Fe.forEach(function(i) {
      var o = Ii(i.scroller, i._dir);
      (i.vars.end === "max" || i._endClamp && i.end > o) && i.setPositions(i.start, Math.max(i.start + 1, o), !0)
  }),
  r.forEach(function(i) {
      return i && i.render && i.render(-1)
  }),
  $e.forEach(function(i) {
      Vn(i) && (i.smooth && requestAnimationFrame(function() {
          return i.target.style.scrollBehavior = "smooth"
      }),
      i.rec && i(i.rec))
  }),
  O2(_v, 1),
  qf.pause(),
  ds++,
  zn = 2,
  zi(2),
  Fe.forEach(function(i) {
      return Vn(i.vars.onRefresh) && i.vars.onRefresh(i)
  }),
  zn = Ue.isRefreshing = !1,
  Ss("refresh")
}, zm = 0, tf = 1, Xl, zi = function(t) {
  if (!zn || t === 2) {
      Ue.isUpdating = !0,
      Xl && Xl.update(0);
      var n = Fe.length
        , r = Bn()
        , i = r - Yp >= 50
        , o = n && Fe[0].scroll();
      if (tf = zm > o ? -1 : 1,
      zn || (zm = o),
      i && ($r && !Nd && r - $r > 200 && ($r = 0,
      Ss("scrollEnd")),
      Qc = Yp,
      Yp = r),
      tf < 0) {
          for (jn = n; jn-- > 0; )
              Fe[jn] && Fe[jn].update(0, i);
          tf = 1
      } else
          for (jn = 0; jn < n; jn++)
              Fe[jn] && Fe[jn].update(0, i);
      Ue.isUpdating = !1
  }
  Tu = 0
}, $m = [E2, T2, Sv, xv, Dr + Gl, Dr + Wl, Dr + Yl, Dr + ql, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], nf = $m.concat([cs, fs, "boxSizing", "max" + $a, "max" + Ev, "position", Dr, Gt, Gt + Yl, Gt + Wl, Gt + Gl, Gt + ql]), v5 = function(t, n, r) {
  Ta(r);
  var i = t._gsap;
  if (i.spacerIsNative)
      Ta(i.spacerState);
  else if (t._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(t, n),
      o.removeChild(n))
  }
  t._gsap.swappedIn = !1
}, Kp = function(t, n, r, i) {
  if (!t._gsap.swappedIn) {
      for (var o = $m.length, s = n.style, a = t.style, l; o--; )
          l = $m[o],
          s[l] = r[l];
      s.position = r.position === "absolute" ? "absolute" : "relative",
      r.display === "inline" && (s.display = "inline-block"),
      a[Sv] = a[xv] = "auto",
      s.flexBasis = r.flexBasis || "auto",
      s.overflow = "visible",
      s.boxSizing = "border-box",
      s[cs] = Fm(t, Un) + wn,
      s[fs] = Fm(t, nn) + wn,
      s[Gt] = a[Dr] = a[T2] = a[E2] = "0",
      Ta(i),
      a[cs] = a["max" + $a] = r[cs],
      a[fs] = a["max" + Ev] = r[fs],
      a[Gt] = r[Gt],
      t.parentNode !== n && (t.parentNode.insertBefore(n, t),
      n.appendChild(t)),
      t._gsap.swappedIn = !0
  }
}, y5 = /([A-Z])/g, Ta = function(t) {
  if (t) {
      var n = t.t.style, r = t.length, i = 0, o, s;
      for ((t.t._gsap || pe.core.getCache(t.t)).uncache = 1; i < r; i += 2)
          s = t[i + 1],
          o = t[i],
          s ? n[o] = s : n[o] && n.removeProperty(o.replace(y5, "-$1").toLowerCase())
  }
}, Cc = function(t) {
  for (var n = nf.length, r = t.style, i = [], o = 0; o < n; o++)
      i.push(nf[o], r[nf[o]]);
  return i.t = t,
  i
}, w5 = function(t, n, r) {
  for (var i = [], o = t.length, s = r ? 8 : 0, a; s < o; s += 2)
      a = t[s],
      i.push(a, a in n ? n[a] : t[s + 1]);
  return i.t = t.t,
  i
}, rf = {
  left: 0,
  top: 0
}, s_ = function(t, n, r, i, o, s, a, l, u, f, d, h, g, _) {
  Vn(t) && (t = t(l)),
  pr(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Zc("0" + t.substr(3), r) : 0));
  var m = g ? g.time() : 0, T, x, w;
  if (g && g.seek(0),
  isNaN(t) || (t = +t),
  Jc(t))
      g && (t = pe.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, h, t)),
      a && ef(a, r, i, !0);
  else {
      Vn(n) && (n = n(l));
      var S = (t || "0").split(" "), b, k, D, O;
      w = Kn(n, l) || _t,
      b = Ri(w) || {},
      (!b || !b.left && !b.top) && Lr(w).display === "none" && (O = w.style.display,
      w.style.display = "block",
      b = Ri(w),
      O ? w.style.display = O : w.style.removeProperty("display")),
      k = Zc(S[0], b[i.d]),
      D = Zc(S[1] || "0", r),
      t = b[i.p] - u[i.p] - f + k + o - D,
      a && ef(a, D, i, r - D < 20 || a._isStart && D > 20),
      r -= r - D
  }
  if (_ && (l[_] = t || -.001,
  t < 0 && (t = 0)),
  s) {
      var R = t + r
        , M = s._isStart;
      T = "scroll" + i.d2,
      ef(s, R, i, M && R > 20 || !M && (d ? Math.max(_t[T], Qr[T]) : s.parentNode[T]) <= R + 1),
      d && (u = Ri(a),
      d && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + wn))
  }
  return g && w && (T = Ri(w),
  g.seek(h),
  x = Ri(w),
  g._caScrollDist = T[i.p] - x[i.p],
  t = t / g._caScrollDist * h),
  g && g.seek(m),
  g ? t : Math.round(t)
}, _5 = /(webkit|moz|length|cssText|inset)/i, a_ = function(t, n, r, i) {
  if (t.parentNode !== n) {
      var o = t.style, s, a;
      if (n === _t) {
          t._stOrig = o.cssText,
          a = Lr(t);
          for (s in a)
              !+s && !_5.test(s) && a[s] && typeof o[s] == "string" && s !== "0" && (o[s] = a[s]);
          o.top = r,
          o.left = i
      } else
          o.cssText = t._stOrig;
      pe.core.getCache(t).uncache = 1,
      n.appendChild(t)
  }
}, R2 = function(t, n, r) {
  var i = n
    , o = i;
  return function(s) {
      var a = Math.round(t());
      return a !== i && a !== o && Math.abs(a - i) > 3 && Math.abs(a - o) > 3 && (s = a,
      r && r()),
      o = i,
      i = s,
      s
  }
}, kc = function(t, n, r) {
  var i = {};
  i[n.p] = "+=" + r,
  pe.set(t, i)
}, l_ = function(t, n) {
  var r = Do(t, n)
    , i = "_scroll" + n.p2
    , o = function s(a, l, u, f, d) {
      var h = s.tween
        , g = l.onComplete
        , _ = {};
      u = u || r();
      var m = R2(r, u, function() {
          h.kill(),
          s.tween = 0
      });
      return d = f && d || 0,
      f = f || a - u,
      h && h.kill(),
      l[i] = a,
      l.modifiers = _,
      _[i] = function() {
          return m(u + f * h.ratio + d * h.ratio * h.ratio)
      }
      ,
      l.onUpdate = function() {
          $e.cache++,
          zi()
      }
      ,
      l.onComplete = function() {
          s.tween = 0,
          g && g.call(h)
      }
      ,
      h = s.tween = pe.to(t, l),
      h
  };
  return t[i] = r,
  r.wheelHandler = function() {
      return o.tween && o.tween.kill() && (o.tween = 0)
  }
  ,
  fn(t, "wheel", r.wheelHandler),
  Ue.isTouch && fn(t, "touchmove", r.wheelHandler),
  o
}, Ue = function() {
  function e(n, r) {
      Hs || e.register(pe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      Nm(this),
      this.init(n, r)
  }
  var t = e.prototype;
  return t.init = function(r, i) {
      if (this.progress = this.start = 0,
      this.vars && this.kill(!0, !0),
      !Cl) {
          this.update = this.refresh = this.kill = li;
          return
      }
      r = n_(pr(r) || Jc(r) || r.nodeType ? {
          trigger: r
      } : r, Ec);
      var o = r, s = o.onUpdate, a = o.toggleClass, l = o.id, u = o.onToggle, f = o.onRefresh, d = o.scrub, h = o.trigger, g = o.pin, _ = o.pinSpacing, m = o.invalidateOnRefresh, T = o.anticipatePin, x = o.onScrubComplete, w = o.onSnapComplete, S = o.once, b = o.snap, k = o.pinReparent, D = o.pinSpacer, O = o.containerAnimation, R = o.fastScrollEnd, M = o.preventOverlaps, j = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Un : nn, Q = !d && d !== 0, I = Kn(r.scroller || qe), Z = pe.core.getCache(I), te = bs(I), ue = ("pinType"in r ? r.pinType : ko(I, "pinType") || te && "fixed") === "fixed", ae = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], oe = Q && r.toggleActions.split(" "), L = "markers"in r ? r.markers : Ec.markers, K = te ? 0 : parseFloat(Lr(I)["border" + j.p2 + $a]) || 0, A = this, me = r.onRefreshInit && function() {
          return r.onRefreshInit(A)
      }
      , Te = c5(I, te, j), N = f5(I, te), xe = 0, Ge = 0, Ze = 0, Xe = Do(I, j), Oe, ot, Tn, Ft, gn, Ae, lt, ut, jt, E, F, $, q, Y, G, fe, Ke, Ce, je, zt, it, qt, Dt, vn, dt, an, z, B, W, re, _e, J, be, he, ee, ke, pt, Se, Re;
      if (A._startClamp = A._endClamp = !1,
      A._dir = j,
      T *= 45,
      A.scroller = I,
      A.scroll = O ? O.time.bind(O) : Xe,
      Ft = Xe(),
      A.vars = r,
      i = i || r.animation,
      "refreshPriority"in r && (m2 = 1,
      r.refreshPriority === -9999 && (Xl = A)),
      Z.tweenScroll = Z.tweenScroll || {
          top: l_(I, nn),
          left: l_(I, Un)
      },
      A.tweenTo = Oe = Z.tweenScroll[j.p],
      A.scrubDuration = function(ne) {
          be = Jc(ne) && ne,
          be ? J ? J.duration(ne) : J = pe.to(i, {
              ease: "expo",
              totalProgress: "+=0",
              duration: be,
              paused: !0,
              onComplete: function() {
                  return x && x(A)
              }
          }) : (J && J.progress(1).kill(),
          J = 0)
      }
      ,
      i && (i.vars.lazy = !1,
      i._initted && !A.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
      A.animation = i.pause(),
      i.scrollTrigger = A,
      A.scrubDuration(d),
      re = 0,
      l || (l = i.vars.id)),
      b && ((!Yo(b) || b.push) && (b = {
          snapTo: b
      }),
      "scrollBehavior"in _t.style && pe.set(te ? [_t, Qr] : I, {
          scrollBehavior: "auto"
      }),
      $e.forEach(function(ne) {
          return Vn(ne) && ne.target === (te ? Tt.scrollingElement || Qr : I) && (ne.smooth = !1)
      }),
      Tn = Vn(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? p5(i) : b.snapTo === "labelsDirectional" ? h5(i) : b.directional !== !1 ? function(ne, Ee) {
          return Tv(b.snapTo)(ne, Bn() - Ge < 500 ? 0 : Ee.direction)
      }
      : pe.utils.snap(b.snapTo),
      he = b.duration || {
          min: .1,
          max: 2
      },
      he = Yo(he) ? ca(he.min, he.max) : ca(he, he),
      ee = pe.delayedCall(b.delay || be / 2 || .1, function() {
          var ne = Xe()
            , Ee = Bn() - Ge < 500
            , ie = Oe.tween;
          if ((Ee || Math.abs(A.getVelocity()) < 10) && !ie && !Nd && xe !== ne) {
              var ye = (ne - Ae) / Y
                , ht = i && !Q ? i.totalProgress() : ye
                , Le = Ee ? 0 : (ht - _e) / (Bn() - Qc) * 1e3 || 0
                , tt = pe.utils.clamp(-ye, 1 - ye, Bs(Le / 2) * Le / .185)
                , we = ye + (b.inertia === !1 ? 0 : tt)
                , nt = ca(0, 1, Tn(we, A))
                , He = Math.round(Ae + nt * Y)
                , Qe = b
                , We = Qe.onStart
                , rt = Qe.onInterrupt
                , en = Qe.onComplete;
              if (ne <= lt && ne >= Ae && He !== ne) {
                  if (ie && !ie._initted && ie.data <= Bs(He - ne))
                      return;
                  b.inertia === !1 && (tt = nt - ye),
                  Oe(He, {
                      duration: he(Bs(Math.max(Bs(we - ht), Bs(nt - ht)) * .185 / Le / .05 || 0)),
                      ease: b.ease || "power3",
                      data: Bs(He - ne),
                      onInterrupt: function() {
                          return ee.restart(!0) && rt && rt(A)
                      },
                      onComplete: function() {
                          A.update(),
                          xe = Xe(),
                          re = _e = i && !Q ? i.totalProgress() : A.progress,
                          w && w(A),
                          en && en(A)
                      }
                  }, ne, tt * Y, He - ne - tt * Y),
                  We && We(A, Oe.tween)
              }
          } else
              A.isActive && xe !== ne && ee.restart(!0)
      }).pause()),
      l && (jm[l] = A),
      h = A.trigger = Kn(h || g !== !0 && g),
      Re = h && h._gsap && h._gsap.stRevert,
      Re && (Re = Re(A)),
      g = g === !0 ? h : Kn(g),
      pr(a) && (a = {
          targets: h,
          className: a
      }),
      g && (_ === !1 || _ === Dr || (_ = !_ && g.parentNode && g.parentNode.style && Lr(g.parentNode).display === "flex" ? !1 : Gt),
      A.pin = g,
      ot = pe.core.getCache(g),
      ot.spacer ? G = ot.pinState : (D && (D = Kn(D),
      D && !D.nodeType && (D = D.current || D.nativeElement),
      ot.spacerIsNative = !!D,
      D && (ot.spacerState = Cc(D))),
      ot.spacer = Ce = D || Tt.createElement("div"),
      Ce.classList.add("pin-spacer"),
      l && Ce.classList.add("pin-spacer-" + l),
      ot.pinState = G = Cc(g)),
      r.force3D !== !1 && pe.set(g, {
          force3D: !0
      }),
      A.spacer = Ce = ot.spacer,
      W = Lr(g),
      vn = W[_ + j.os2],
      zt = pe.getProperty(g),
      it = pe.quickSetter(g, j.a, wn),
      Kp(g, Ce, W),
      Ke = Cc(g)),
      L) {
          $ = Yo(L) ? n_(L, r_) : r_,
          E = Tc("scroller-start", l, I, j, $, 0),
          F = Tc("scroller-end", l, I, j, $, 0, E),
          je = E["offset" + j.op.d2];
          var ce = Kn(ko(I, "content") || I);
          ut = this.markerStart = Tc("start", l, ce, j, $, je, 0, O),
          jt = this.markerEnd = Tc("end", l, ce, j, $, je, 0, O),
          O && (Se = pe.quickSetter([ut, jt], j.a, wn)),
          !ue && !(yi.length && ko(I, "fixedMarkers") === !0) && (d5(te ? _t : I),
          pe.set([E, F], {
              force3D: !0
          }),
          an = pe.quickSetter(E, j.a, wn),
          B = pe.quickSetter(F, j.a, wn))
      }
      if (O) {
          var ge = O.vars.onUpdate
            , se = O.vars.onUpdateParams;
          O.eventCallback("onUpdate", function() {
              A.update(0, 0, 1),
              ge && ge.apply(O, se || [])
          })
      }
      if (A.previous = function() {
          return Fe[Fe.indexOf(A) - 1]
      }
      ,
      A.next = function() {
          return Fe[Fe.indexOf(A) + 1]
      }
      ,
      A.revert = function(ne, Ee) {
          if (!Ee)
              return A.kill(!0);
          var ie = ne !== !1 || !A.enabled
            , ye = Pn;
          ie !== A.isReverted && (ie && (ke = Math.max(Xe(), A.scroll.rec || 0),
          Ze = A.progress,
          pt = i && i.progress()),
          ut && [ut, jt, E, F].forEach(function(ht) {
              return ht.style.display = ie ? "none" : "block"
          }),
          ie && (Pn = A,
          A.update(ie)),
          g && (!k || !A.isActive) && (ie ? v5(g, Ce, G) : Kp(g, Ce, Lr(g), dt)),
          ie || A.update(ie),
          Pn = ye,
          A.isReverted = ie)
      }
      ,
      A.refresh = function(ne, Ee, ie, ye) {
          if (!((Pn || !A.enabled) && !Ee)) {
              if (g && ne && $r) {
                  fn(e, "scrollEnd", k2);
                  return
              }
              !zn && me && me(A),
              Pn = A,
              Oe.tween && !ie && (Oe.tween.kill(),
              Oe.tween = 0),
              J && J.pause(),
              m && i && i.revert({
                  kill: !1
              }).invalidate(),
              A.isReverted || A.revert(!0, !0),
              A._subPinOffset = !1;
              var ht = Te(), Le = N(), tt = O ? O.duration() : Ii(I, j), we = Y <= .01, nt = 0, He = ye || 0, Qe = Yo(ie) ? ie.end : r.end, We = r.endTrigger || h, rt = Yo(ie) ? ie.start : r.start || (r.start === 0 || !h ? 0 : g ? "0 0" : "0 100%"), en = A.pinnedContainer = r.pinnedContainer && Kn(r.pinnedContainer, A), Yn = h && Math.max(0, Fe.indexOf(A)) || 0, Mn = Yn, vt, ln, bi, ks, un, $t, Gn, Xa, zu, ur, Tr, zo, Ps;
              for (L && Yo(ie) && (zo = pe.getProperty(E, j.p),
              Ps = pe.getProperty(F, j.p)); Mn--; )
                  $t = Fe[Mn],
                  $t.end || $t.refresh(0, 1) || (Pn = A),
                  Gn = $t.pin,
                  Gn && (Gn === h || Gn === g || Gn === en) && !$t.isReverted && (ur || (ur = []),
                  ur.unshift($t),
                  $t.revert(!0, !0)),
                  $t !== Fe[Mn] && (Yn--,
                  Mn--);
              for (Vn(rt) && (rt = rt(A)),
              rt = Jw(rt, "start", A),
              Ae = s_(rt, h, ht, j, Xe(), ut, E, A, Le, K, ue, tt, O, A._startClamp && "_startClamp") || (g ? -.001 : 0),
              Vn(Qe) && (Qe = Qe(A)),
              pr(Qe) && !Qe.indexOf("+=") && (~Qe.indexOf(" ") ? Qe = (pr(rt) ? rt.split(" ")[0] : "") + Qe : (nt = Zc(Qe.substr(2), ht),
              Qe = pr(rt) ? rt : (O ? pe.utils.mapRange(0, O.duration(), O.scrollTrigger.start, O.scrollTrigger.end, Ae) : Ae) + nt,
              We = h)),
              Qe = Jw(Qe, "end", A),
              lt = Math.max(Ae, s_(Qe || (We ? "100% 0" : tt), We, ht, j, Xe() + nt, jt, F, A, Le, K, ue, tt, O, A._endClamp && "_endClamp")) || -.001,
              nt = 0,
              Mn = Yn; Mn--; )
                  $t = Fe[Mn],
                  Gn = $t.pin,
                  Gn && $t.start - $t._pinPush <= Ae && !O && $t.end > 0 && (vt = $t.end - (A._startClamp ? Math.max(0, $t.start) : $t.start),
                  (Gn === h && $t.start - $t._pinPush < Ae || Gn === en) && isNaN(rt) && (nt += vt * (1 - $t.progress)),
                  Gn === g && (He += vt));
              if (Ae += nt,
              lt += nt,
              A._startClamp && (A._startClamp += nt),
              A._endClamp && !zn && (A._endClamp = lt || -.001,
              lt = Math.min(lt, Ii(I, j))),
              Y = lt - Ae || (Ae -= .01) && .001,
              we && (Ze = pe.utils.clamp(0, 1, pe.utils.normalize(Ae, lt, ke))),
              A._pinPush = He,
              ut && nt && (vt = {},
              vt[j.a] = "+=" + nt,
              en && (vt[j.p] = "-=" + Xe()),
              pe.set([ut, jt], vt)),
              g)
                  vt = Lr(g),
                  ks = j === nn,
                  bi = Xe(),
                  qt = parseFloat(zt(j.a)) + He,
                  !tt && lt > 1 && (Tr = (te ? Tt.scrollingElement || Qr : I).style,
                  Tr = {
                      style: Tr,
                      value: Tr["overflow" + j.a.toUpperCase()]
                  },
                  te && Lr(_t)["overflow" + j.a.toUpperCase()] !== "scroll" && (Tr.style["overflow" + j.a.toUpperCase()] = "scroll")),
                  Kp(g, Ce, vt),
                  Ke = Cc(g),
                  ln = Ri(g, !0),
                  Xa = ue && Do(I, ks ? Un : nn)(),
                  _ && (dt = [_ + j.os2, Y + He + wn],
                  dt.t = Ce,
                  Mn = _ === Gt ? Fm(g, j) + Y + He : 0,
                  Mn && dt.push(j.d, Mn + wn),
                  Ta(dt),
                  en && Fe.forEach(function(xi) {
                      xi.pin === en && xi.vars.pinSpacing !== !1 && (xi._subPinOffset = !0)
                  }),
                  ue && Xe(ke)),
                  ue && (un = {
                      top: ln.top + (ks ? bi - Ae : Xa) + wn,
                      left: ln.left + (ks ? Xa : bi - Ae) + wn,
                      boxSizing: "border-box",
                      position: "fixed"
                  },
                  un[cs] = un["max" + $a] = Math.ceil(ln.width) + wn,
                  un[fs] = un["max" + Ev] = Math.ceil(ln.height) + wn,
                  un[Dr] = un[Dr + Yl] = un[Dr + Wl] = un[Dr + Gl] = un[Dr + ql] = "0",
                  un[Gt] = vt[Gt],
                  un[Gt + Yl] = vt[Gt + Yl],
                  un[Gt + Wl] = vt[Gt + Wl],
                  un[Gt + Gl] = vt[Gt + Gl],
                  un[Gt + ql] = vt[Gt + ql],
                  fe = w5(G, un, k),
                  zn && Xe(0)),
                  i ? (zu = i._initted,
                  Wp(1),
                  i.render(i.duration(), !0, !0),
                  Dt = zt(j.a) - qt + Y + He,
                  z = Math.abs(Y - Dt) > 1,
                  ue && z && fe.splice(fe.length - 2, 2),
                  i.render(0, !0, !0),
                  zu || i.invalidate(!0),
                  i.parent || i.totalTime(i.totalTime()),
                  Wp(0)) : Dt = Y,
                  Tr && (Tr.value ? Tr.style["overflow" + j.a.toUpperCase()] = Tr.value : Tr.style.removeProperty("overflow-" + j.a));
              else if (h && Xe() && !O)
                  for (ln = h.parentNode; ln && ln !== _t; )
                      ln._pinOffset && (Ae -= ln._pinOffset,
                      lt -= ln._pinOffset),
                      ln = ln.parentNode;
              ur && ur.forEach(function(xi) {
                  return xi.revert(!1, !0)
              }),
              A.start = Ae,
              A.end = lt,
              Ft = gn = zn ? ke : Xe(),
              !O && !zn && (Ft < ke && Xe(ke),
              A.scroll.rec = 0),
              A.revert(!1, !0),
              Ge = Bn(),
              ee && (xe = -1,
              ee.restart(!0)),
              Pn = 0,
              i && Q && (i._initted || pt) && i.progress() !== pt && i.progress(pt || 0, !0).render(i.time(), !0, !0),
              (we || Ze !== A.progress || O) && (i && !Q && i.totalProgress(O && Ae < -.001 && !Ze ? pe.utils.normalize(Ae, lt, 0) : Ze, !0),
              A.progress = we || (Ft - Ae) / Y === Ze ? 0 : Ze),
              g && _ && (Ce._pinOffset = Math.round(A.progress * Dt)),
              J && J.invalidate(),
              isNaN(zo) || (zo -= pe.getProperty(E, j.p),
              Ps -= pe.getProperty(F, j.p),
              kc(E, j, zo),
              kc(ut, j, zo - (ye || 0)),
              kc(F, j, Ps),
              kc(jt, j, Ps - (ye || 0))),
              we && !zn && A.update(),
              f && !zn && !q && (q = !0,
              f(A),
              q = !1)
          }
      }
      ,
      A.getVelocity = function() {
          return (Xe() - gn) / (Bn() - Qc) * 1e3 || 0
      }
      ,
      A.endAnimation = function() {
          wl(A.callbackAnimation),
          i && (J ? J.progress(1) : i.paused() ? Q || wl(i, A.direction < 0, 1) : wl(i, i.reversed()))
      }
      ,
      A.labelToScroll = function(ne) {
          return i && i.labels && (Ae || A.refresh() || Ae) + i.labels[ne] / i.duration() * Y || 0
      }
      ,
      A.getTrailing = function(ne) {
          var Ee = Fe.indexOf(A)
            , ie = A.direction > 0 ? Fe.slice(0, Ee).reverse() : Fe.slice(Ee + 1);
          return (pr(ne) ? ie.filter(function(ye) {
              return ye.vars.preventOverlaps === ne
          }) : ie).filter(function(ye) {
              return A.direction > 0 ? ye.end <= Ae : ye.start >= lt
          })
      }
      ,
      A.update = function(ne, Ee, ie) {
          if (!(O && !ie && !ne)) {
              var ye = zn === !0 ? ke : A.scroll(), ht = ne ? 0 : (ye - Ae) / Y, Le = ht < 0 ? 0 : ht > 1 ? 1 : ht || 0, tt = A.progress, we, nt, He, Qe, We, rt, en, Yn;
              if (Ee && (gn = Ft,
              Ft = O ? Xe() : ye,
              b && (_e = re,
              re = i && !Q ? i.totalProgress() : Le)),
              T && !Le && g && !Pn && !_c && $r && Ae < ye + (ye - gn) / (Bn() - Qc) * T && (Le = 1e-4),
              Le !== tt && A.enabled) {
                  if (we = A.isActive = !!Le && Le < 1,
                  nt = !!tt && tt < 1,
                  rt = we !== nt,
                  We = rt || !!Le != !!tt,
                  A.direction = Le > tt ? 1 : -1,
                  A.progress = Le,
                  We && !Pn && (He = Le && !tt ? 0 : Le === 1 ? 1 : tt === 1 ? 2 : 3,
                  Q && (Qe = !rt && oe[He + 1] !== "none" && oe[He + 1] || oe[He],
                  Yn = i && (Qe === "complete" || Qe === "reset" || Qe in i))),
                  M && (rt || Yn) && (Yn || d || !i) && (Vn(M) ? M(A) : A.getTrailing(M).forEach(function(bi) {
                      return bi.endAnimation()
                  })),
                  Q || (J && !Pn && !_c ? (J._dp._time - J._start !== J._time && J.render(J._dp._time - J._start),
                  J.resetTo ? J.resetTo("totalProgress", Le, i._tTime / i._tDur) : (J.vars.totalProgress = Le,
                  J.invalidate().restart())) : i && i.totalProgress(Le, !!(Pn && (Ge || ne)))),
                  g) {
                      if (ne && _ && (Ce.style[_ + j.os2] = vn),
                      !ue)
                          it(kl(qt + Dt * Le));
                      else if (We) {
                          if (en = !ne && Le > tt && lt + 1 > ye && ye + 1 >= Ii(I, j),
                          k)
                              if (!ne && (we || en)) {
                                  var Mn = Ri(g, !0)
                                    , vt = ye - Ae;
                                  a_(g, _t, Mn.top + (j === nn ? vt : 0) + wn, Mn.left + (j === nn ? 0 : vt) + wn)
                              } else
                                  a_(g, Ce);
                          Ta(we || en ? fe : Ke),
                          z && Le < 1 && we || it(qt + (Le === 1 && !en ? Dt : 0))
                      }
                  }
                  b && !Oe.tween && !Pn && !_c && ee.restart(!0),
                  a && (rt || S && Le && (Le < 1 || !qp)) && Yf(a.targets).forEach(function(bi) {
                      return bi.classList[we || S ? "add" : "remove"](a.className)
                  }),
                  s && !Q && !ne && s(A),
                  We && !Pn ? (Q && (Yn && (Qe === "complete" ? i.pause().totalProgress(1) : Qe === "reset" ? i.restart(!0).pause() : Qe === "restart" ? i.restart(!0) : i[Qe]()),
                  s && s(A)),
                  (rt || !qp) && (u && rt && Gp(A, u),
                  ae[He] && Gp(A, ae[He]),
                  S && (Le === 1 ? A.kill(!1, 1) : ae[He] = 0),
                  rt || (He = Le === 1 ? 1 : 3,
                  ae[He] && Gp(A, ae[He]))),
                  R && !we && Math.abs(A.getVelocity()) > (Jc(R) ? R : 2500) && (wl(A.callbackAnimation),
                  J ? J.progress(1) : wl(i, Qe === "reverse" ? 1 : !Le, 1))) : Q && s && !Pn && s(A)
              }
              if (B) {
                  var ln = O ? ye / O.duration() * (O._caScrollDist || 0) : ye;
                  an(ln + (E._isFlipped ? 1 : 0)),
                  B(ln)
              }
              Se && Se(-ye / O.duration() * (O._caScrollDist || 0))
          }
      }
      ,
      A.enable = function(ne, Ee) {
          A.enabled || (A.enabled = !0,
          fn(I, "resize", Pl),
          te || fn(I, "scroll", Us),
          me && fn(e, "refreshInit", me),
          ne !== !1 && (A.progress = Ze = 0,
          Ft = gn = xe = Xe()),
          Ee !== !1 && A.refresh())
      }
      ,
      A.getTween = function(ne) {
          return ne && Oe ? Oe.tween : J
      }
      ,
      A.setPositions = function(ne, Ee, ie, ye) {
          if (O) {
              var ht = O.scrollTrigger
                , Le = O.duration()
                , tt = ht.end - ht.start;
              ne = ht.start + tt * ne / Le,
              Ee = ht.start + tt * Ee / Le
          }
          A.refresh(!1, !1, {
              start: Zw(ne, ie && !!A._startClamp),
              end: Zw(Ee, ie && !!A._endClamp)
          }, ye),
          A.update()
      }
      ,
      A.adjustPinSpacing = function(ne) {
          if (dt && ne) {
              var Ee = dt.indexOf(j.d) + 1;
              dt[Ee] = parseFloat(dt[Ee]) + ne + wn,
              dt[1] = parseFloat(dt[1]) + ne + wn,
              Ta(dt)
          }
      }
      ,
      A.disable = function(ne, Ee) {
          if (A.enabled && (ne !== !1 && A.revert(!0, !0),
          A.enabled = A.isActive = !1,
          Ee || J && J.pause(),
          ke = 0,
          ot && (ot.uncache = 1),
          me && cn(e, "refreshInit", me),
          ee && (ee.pause(),
          Oe.tween && Oe.tween.kill() && (Oe.tween = 0)),
          !te)) {
              for (var ie = Fe.length; ie--; )
                  if (Fe[ie].scroller === I && Fe[ie] !== A)
                      return;
              cn(I, "resize", Pl),
              te || cn(I, "scroll", Us)
          }
      }
      ,
      A.kill = function(ne, Ee) {
          A.disable(ne, Ee),
          J && !Ee && J.kill(),
          l && delete jm[l];
          var ie = Fe.indexOf(A);
          ie >= 0 && Fe.splice(ie, 1),
          ie === jn && tf > 0 && jn--,
          ie = 0,
          Fe.forEach(function(ye) {
              return ye.scroller === A.scroller && (ie = 1)
          }),
          ie || zn || (A.scroll.rec = 0),
          i && (i.scrollTrigger = null,
          ne && i.revert({
              kill: !1
          }),
          Ee || i.kill()),
          ut && [ut, jt, E, F].forEach(function(ye) {
              return ye.parentNode && ye.parentNode.removeChild(ye)
          }),
          Xl === A && (Xl = 0),
          g && (ot && (ot.uncache = 1),
          ie = 0,
          Fe.forEach(function(ye) {
              return ye.pin === g && ie++
          }),
          ie || (ot.spacer = 0)),
          r.onKill && r.onKill(A)
      }
      ,
      Fe.push(A),
      A.enable(!1, !1),
      Re && Re(A),
      i && i.add && !Y) {
          var Me = A.update;
          A.update = function() {
              A.update = Me,
              Ae || lt || A.refresh()
          }
          ,
          pe.delayedCall(.01, A.update),
          Y = .01,
          Ae = lt = 0
      } else
          A.refresh();
      g && g5()
  }
  ,
  e.register = function(r) {
      return Hs || (pe = r || b2(),
      _2() && window.document && e.enable(),
      Hs = Cl),
      Hs
  }
  ,
  e.defaults = function(r) {
      if (r)
          for (var i in r)
              Ec[i] = r[i];
      return Ec
  }
  ,
  e.disable = function(r, i) {
      Cl = 0,
      Fe.forEach(function(s) {
          return s[i ? "kill" : "disable"](r)
      }),
      cn(qe, "wheel", Us),
      cn(Tt, "scroll", Us),
      clearInterval(wc),
      cn(Tt, "touchcancel", li),
      cn(_t, "touchstart", li),
      xc(cn, Tt, "pointerdown,touchstart,mousedown", e_),
      xc(cn, Tt, "pointerup,touchend,mouseup", t_),
      qf.kill(),
      bc(cn);
      for (var o = 0; o < $e.length; o += 3)
          Sc(cn, $e[o], $e[o + 1]),
          Sc(cn, $e[o], $e[o + 2])
  }
  ,
  e.enable = function() {
      if (qe = window,
      Tt = document,
      Qr = Tt.documentElement,
      _t = Tt.body,
      pe && (Yf = pe.utils.toArray,
      ca = pe.utils.clamp,
      Nm = pe.core.context || li,
      Wp = pe.core.suppressOverwrites || li,
      _v = qe.history.scrollRestoration || "auto",
      zm = qe.pageYOffset,
      pe.core.globals("ScrollTrigger", e),
      _t)) {
          Cl = 1,
          Ea = document.createElement("div"),
          Ea.style.height = "100vh",
          Ea.style.position = "absolute",
          A2(),
          u5(),
          Jt.register(pe),
          e.isTouch = Jt.isTouch,
          no = Jt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
          fn(qe, "wheel", Us),
          h2 = [qe, Tt, Qr, _t],
          pe.matchMedia ? (e.matchMedia = function(l) {
              var u = pe.matchMedia(), f;
              for (f in l)
                  u.add(f, l[f]);
              return u
          }
          ,
          pe.addEventListener("matchMediaInit", function() {
              return Cv()
          }),
          pe.addEventListener("matchMediaRevert", function() {
              return P2()
          }),
          pe.addEventListener("matchMedia", function() {
              ns(0, 1),
              Ss("matchMedia")
          }),
          pe.matchMedia("(orientation: portrait)", function() {
              return Xp(),
              Xp
          })) : console.warn("Requires GSAP 3.11.0 or later"),
          Xp(),
          fn(Tt, "scroll", Us);
          var r = _t.style, i = r.borderTopStyle, o = pe.core.Animation.prototype, s, a;
          for (o.revert || Object.defineProperty(o, "revert", {
              value: function() {
                  return this.time(-.01, !0)
              }
          }),
          r.borderTopStyle = "solid",
          s = Ri(_t),
          nn.m = Math.round(s.top + nn.sc()) || 0,
          Un.m = Math.round(s.left + Un.sc()) || 0,
          i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
          wc = setInterval(i_, 250),
          pe.delayedCall(.5, function() {
              return _c = 0
          }),
          fn(Tt, "touchcancel", li),
          fn(_t, "touchstart", li),
          xc(fn, Tt, "pointerdown,touchstart,mousedown", e_),
          xc(fn, Tt, "pointerup,touchend,mouseup", t_),
          Im = pe.utils.checkPrefix("transform"),
          nf.push(Im),
          Hs = Bn(),
          qf = pe.delayedCall(.2, ns).pause(),
          Ws = [Tt, "visibilitychange", function() {
              var l = qe.innerWidth
                , u = qe.innerHeight;
              Tt.hidden ? (Kw = l,
              Qw = u) : (Kw !== l || Qw !== u) && Pl()
          }
          , Tt, "DOMContentLoaded", ns, qe, "load", ns, qe, "resize", Pl],
          bc(fn),
          Fe.forEach(function(l) {
              return l.enable(0, 1)
          }),
          a = 0; a < $e.length; a += 3)
              Sc(cn, $e[a], $e[a + 1]),
              Sc(cn, $e[a], $e[a + 2])
      }
  }
  ,
  e.config = function(r) {
      "limitCallbacks"in r && (qp = !!r.limitCallbacks);
      var i = r.syncInterval;
      i && clearInterval(wc) || (wc = i) && setInterval(i_, i),
      "ignoreMobileResize"in r && (v2 = e.isTouch === 1 && r.ignoreMobileResize),
      "autoRefreshEvents"in r && (bc(cn) || bc(fn, r.autoRefreshEvents || "none"),
      g2 = (r.autoRefreshEvents + "").indexOf("resize") === -1)
  }
  ,
  e.scrollerProxy = function(r, i) {
      var o = Kn(r)
        , s = $e.indexOf(o)
        , a = bs(o);
      ~s && $e.splice(s, a ? 6 : 2),
      i && (a ? yi.unshift(qe, i, _t, i, Qr, i) : yi.unshift(o, i))
  }
  ,
  e.clearMatchMedia = function(r) {
      Fe.forEach(function(i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
      })
  }
  ,
  e.isInViewport = function(r, i, o) {
      var s = (pr(r) ? Kn(r) : r).getBoundingClientRect()
        , a = s[o ? cs : fs] * i || 0;
      return o ? s.right - a > 0 && s.left + a < qe.innerWidth : s.bottom - a > 0 && s.top + a < qe.innerHeight
  }
  ,
  e.positionInViewport = function(r, i, o) {
      pr(r) && (r = Kn(r));
      var s = r.getBoundingClientRect()
        , a = s[o ? cs : fs]
        , l = i == null ? a / 2 : i in Gf ? Gf[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
      return o ? (s.left + l) / qe.innerWidth : (s.top + l) / qe.innerHeight
  }
  ,
  e.killAll = function(r) {
      if (Fe.slice(0).forEach(function(o) {
          return o.vars.id !== "ScrollSmoother" && o.kill()
      }),
      r !== !0) {
          var i = xs.killAll || [];
          xs = {},
          i.forEach(function(o) {
              return o()
          })
      }
  }
  ,
  e
}();
Ue.version = "3.12.2";
Ue.saveStyles = function(e) {
  return e ? Yf(e).forEach(function(t) {
      if (t && t.style) {
          var n = fr.indexOf(t);
          n >= 0 && fr.splice(n, 5),
          fr.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), pe.core.getCache(t), Nm())
      }
  }) : fr
}
;
Ue.revert = function(e, t) {
  return Cv(!e, t)
}
;
Ue.create = function(e, t) {
  return new Ue(e,t)
}
;
Ue.refresh = function(e) {
  return e ? Pl() : (Hs || Ue.register()) && ns(!0)
}
;
Ue.update = function(e) {
  return ++$e.cache && zi(e === !0 ? 2 : 0)
}
;
Ue.clearScrollMemory = O2;
Ue.maxScroll = function(e, t) {
  return Ii(e, t ? Un : nn)
}
;
Ue.getScrollFunc = function(e, t) {
  return Do(Kn(e), t ? Un : nn)
}
;
Ue.getById = function(e) {
  return jm[e]
}
;
Ue.getAll = function() {
  return Fe.filter(function(e) {
      return e.vars.id !== "ScrollSmoother"
  })
}
;
Ue.isScrolling = function() {
  return !!$r
}
;
Ue.snapDirectional = Tv;
Ue.addEventListener = function(e, t) {
  var n = xs[e] || (xs[e] = []);
  ~n.indexOf(t) || n.push(t)
}
;
Ue.removeEventListener = function(e, t) {
  var n = xs[e]
    , r = n && n.indexOf(t);
  r >= 0 && n.splice(r, 1)
}
;
Ue.batch = function(e, t) {
  var n = [], r = {}, i = t.interval || .016, o = t.batchMax || 1e9, s = function(u, f) {
      var d = []
        , h = []
        , g = pe.delayedCall(i, function() {
          f(d, h),
          d = [],
          h = []
      }).pause();
      return function(_) {
          d.length || g.restart(!0),
          d.push(_.trigger),
          h.push(_),
          o <= d.length && g.progress(1)
      }
  }, a;
  for (a in t)
      r[a] = a.substr(0, 2) === "on" && Vn(t[a]) && a !== "onRefreshInit" ? s(a, t[a]) : t[a];
  return Vn(o) && (o = o(),
  fn(Ue, "refresh", function() {
      return o = t.batchMax()
  })),
  Yf(e).forEach(function(l) {
      var u = {};
      for (a in r)
          u[a] = r[a];
      u.trigger = l,
      n.push(Ue.create(u))
  }),
  n
}
;
var u_ = function(t, n, r, i) {
  return n > i ? t(i) : n < 0 && t(0),
  r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Qp = function e(t, n) {
  n === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Jt.isTouch ? " pinch-zoom" : "") : "none",
  t === Qr && e(_t, n)
}, Pc = {
  auto: 1,
  scroll: 1
}, b5 = function(t) {
  var n = t.event, r = t.target, i = t.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, s = o._gsap || pe.core.getCache(o), a = Bn(), l;
  if (!s._isScrollT || a - s._isScrollT > 2e3) {
      for (; o && o !== _t && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Pc[(l = Lr(o)).overflowY] || Pc[l.overflowX])); )
          o = o.parentNode;
      s._isScroll = o && o !== r && !bs(o) && (Pc[(l = Lr(o)).overflowY] || Pc[l.overflowX]),
      s._isScrollT = a
  }
  (s._isScroll || i === "x") && (n.stopPropagation(),
  n._gsapAllow = !0)
}, D2 = function(t, n, r, i) {
  return Jt.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: i = i && b5,
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function() {
          return r && fn(Tt, Jt.eventTypes[0], f_, !1, !0)
      },
      onDisable: function() {
          return cn(Tt, Jt.eventTypes[0], f_, !0)
      }
  })
}, x5 = /(input|label|select|textarea)/i, c_, f_ = function(t) {
  var n = x5.test(t.target.tagName);
  (n || c_) && (t._gsapAllow = !0,
  c_ = n)
}, S5 = function(t) {
  Yo(t) || (t = {}),
  t.preventDefault = t.isNormalizer = t.allowClicks = !0,
  t.type || (t.type = "wheel,touch"),
  t.debounce = !!t.debounce,
  t.id = t.id || "normalizer";
  var n = t, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, s = n.onRelease, a, l, u = Kn(t.target) || Qr, f = pe.core.globals().ScrollSmoother, d = f && f.get(), h = no && (t.content && Kn(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), g = Do(u, nn), _ = Do(u, Un), m = 1, T = (Jt.isTouch && qe.visualViewport ? qe.visualViewport.scale * qe.visualViewport.width : qe.outerWidth) / qe.innerWidth, x = 0, w = Vn(i) ? function() {
      return i(a)
  }
  : function() {
      return i || 2.8
  }
  , S, b, k = D2(u, t.type, !0, o), D = function() {
      return b = !1
  }, O = li, R = li, M = function() {
      l = Ii(u, nn),
      R = ca(no ? 1 : 0, l),
      r && (O = ca(0, Ii(u, Un))),
      S = ds
  }, j = function() {
      h._gsap.y = kl(parseFloat(h._gsap.y) + g.offset) + "px",
      h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
      g.offset = g.cacheID = 0
  }, Q = function() {
      if (b) {
          requestAnimationFrame(D);
          var L = kl(a.deltaY / 2)
            , K = R(g.v - L);
          if (h && K !== g.v + g.offset) {
              g.offset = K - g.v;
              var A = kl((parseFloat(h && h._gsap.y) || 0) - g.offset);
              h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + A + ", 0, 1)",
              h._gsap.y = A + "px",
              g.cacheID = $e.cache,
              zi()
          }
          return !0
      }
      g.offset && j(),
      b = !0
  }, I, Z, te, ue, ae = function() {
      M(),
      I.isActive() && I.vars.scrollY > l && (g() > l ? I.progress(1) && g(l) : I.resetTo("scrollY", l))
  };
  return h && pe.set(h, {
      y: "+=0"
  }),
  t.ignoreCheck = function(oe) {
      return no && oe.type === "touchmove" && Q() || m > 1.05 && oe.type !== "touchstart" || a.isGesturing || oe.touches && oe.touches.length > 1
  }
  ,
  t.onPress = function() {
      b = !1;
      var oe = m;
      m = kl((qe.visualViewport && qe.visualViewport.scale || 1) / T),
      I.pause(),
      oe !== m && Qp(u, m > 1.01 ? !0 : r ? !1 : "x"),
      Z = _(),
      te = g(),
      M(),
      S = ds
  }
  ,
  t.onRelease = t.onGestureStart = function(oe, L) {
      if (g.offset && j(),
      !L)
          ue.restart(!0);
      else {
          $e.cache++;
          var K = w(), A, me;
          r && (A = _(),
          me = A + K * .05 * -oe.velocityX / .227,
          K *= u_(_, A, me, Ii(u, Un)),
          I.vars.scrollX = O(me)),
          A = g(),
          me = A + K * .05 * -oe.velocityY / .227,
          K *= u_(g, A, me, Ii(u, nn)),
          I.vars.scrollY = R(me),
          I.invalidate().duration(K).play(.01),
          (no && I.vars.scrollY >= l || A >= l - 1) && pe.to({}, {
              onUpdate: ae,
              duration: K
          })
      }
      s && s(oe)
  }
  ,
  t.onWheel = function() {
      I._ts && I.pause(),
      Bn() - x > 1e3 && (S = 0,
      x = Bn())
  }
  ,
  t.onChange = function(oe, L, K, A, me) {
      if (ds !== S && M(),
      L && r && _(O(A[2] === L ? Z + (oe.startX - oe.x) : _() + L - A[1])),
      K) {
          g.offset && j();
          var Te = me[2] === K
            , N = Te ? te + oe.startY - oe.y : g() + K - me[1]
            , xe = R(N);
          Te && N !== xe && (te += xe - N),
          g(xe)
      }
      (K || L) && zi()
  }
  ,
  t.onEnable = function() {
      Qp(u, r ? !1 : "x"),
      Ue.addEventListener("refresh", ae),
      fn(qe, "resize", ae),
      g.smooth && (g.target.style.scrollBehavior = "auto",
      g.smooth = _.smooth = !1),
      k.enable()
  }
  ,
  t.onDisable = function() {
      Qp(u, !0),
      cn(qe, "resize", ae),
      Ue.removeEventListener("refresh", ae),
      k.kill()
  }
  ,
  t.lockAxis = t.lockAxis !== !1,
  a = new Jt(t),
  a.iOS = no,
  no && !g() && g(1),
  no && pe.ticker.add(li),
  ue = a._dc,
  I = pe.to(a, {
      ease: "power4",
      paused: !0,
      scrollX: r ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
          scrollY: R2(g, g(), function() {
              return I.pause()
          })
      },
      onUpdate: zi,
      onComplete: ue.vars.onComplete
  }),
  a
};
Ue.sort = function(e) {
  return Fe.sort(e || function(t, n) {
      return (t.vars.refreshPriority || 0) * -1e6 + t.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
  }
  )
}
;
Ue.observe = function(e) {
  return new Jt(e)
}
;
Ue.normalizeScroll = function(e) {
  if (typeof e > "u")
      return cr;
  if (e === !0 && cr)
      return cr.enable();
  if (e === !1)
      return cr && cr.kill();
  var t = e instanceof Jt ? e : S5(e);
  return cr && cr.target === t.target && cr.kill(),
  bs(t.target) && (cr = t),
  t
}
;
Ue.core = {
  _getVelocityProp: Mm,
  _inputObserver: D2,
  _scrollers: $e,
  _proxies: yi,
  bridge: {
      ss: function() {
          $r || Ss("scrollStart"),
          $r = Bn()
      },
      ref: function() {
          return Pn
      }
  }
};
b2() && pe.registerPlugin(Ue);
const E5 = ({to: e, text: t, hidden: n}) => V.jsx("a", {
  href: `${e}`,
  className: n ? "hidden" : "box-btn2",
  children: V.jsxs("button", {
      className: "btn-class-name ",
      children: [V.jsx("span", {
          className: "text-white",
          children: t || "Get started"
      }), V.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: "1em",
          viewBox: "0 0 320 512",
          fill: "white",
          children: V.jsx("path", {
              d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          })
      })]
  })
});
wv.registerPlugin(Ue);
const T5 = () => {
  C.useEffect( () => {
      const t = wv.timeline().fromTo(".box", {
          autoAlpha: 0,
          y: 60
      }, {
          autoAlpha: 1,
          duration: .2,
          stagger: .2,
          y: 0,
          ease: "none"
      });
      Ue.create({
          trigger: ".box",
          animation: t,
          start: "clamp(top 60%)",
          immediateRender: !1
      })
  }
  , []);
  const e = OL;
  return V.jsxs("section", {
      className: "services",
      id: "Services",
      children: [V.jsxs("div", {
          className: "center-text",
          children: [V.jsx("strong", {
              children: "Services"
          }), V.jsx("h2", {
              children: "What we can do for you"
          })]
      }), V.jsx("div", {
          className: "services-content flex flex-col md:grid",
          children: e.map(t => V.jsxs("div", {
              className: "box",
              id: t.id,
              children: [V.jsx("div", {
                  className: "box-img",
                  children: V.jsx("img", {
                      src: t.img,
                      alt: t.name
                  })
              }), V.jsx("h3", {
                  children: t.name
              }), V.jsx("p", {
                  className: "mb-4",
                  children: t.des
              }), V.jsx(E5, {
                  to: t.link
              })]
          }, t.id))
      })]
  })
}
, C5 = C.lazy( () => lr( () => import("./AllBlogs-fa5c4de8.js"), ["src/assets/AllBlogs-fa5c4de8.js", "src/assets/index-a2ef37fb.js", "src/assets/blogSkelton-2834f82b.js", "src/assets/index-6db29298.js"]))
, d_ = C.lazy( () => lr( () => import("./blog-1070d10c.js"), ["src/assets/blog-1070d10c.js", "src/assets/index-a2ef37fb.js", "src/assets/blogSkelton-2834f82b.js"]))
, k5 = C.lazy( () => lr( () => import("./singleBlog-b26d4c8a.js"), ["src/assets/singleBlog-b26d4c8a.js", "src/assets/blogSkelton-2834f82b.js", "src/assets/index-6db29298.js"]))
, P5 = C.lazy( () => lr( () => import("./index-c8b2c376.js"), ["src/assets/index-c8b2c376.js", "src/assets/iconBase-44eca1d5.js"]))
, O5 = C.lazy( () => lr( () => import("./index-af50b535.js"), ["src/assets/index-af50b535.js", "src/assets/index.esm-ad86ea85.js", "src/assets/iconBase-44eca1d5.js"]))
, A5 = C.lazy( () => lr( () => import("./index-b630e7a0.js"), ["src/assets/index-b630e7a0.js", "src/assets/index.esm-ad86ea85.js", "src/assets/iconBase-44eca1d5.js"]))
, R5 = C.lazy( () => lr( () => import("./index-8bf3cd1f.js"), []))
, D5 = C.lazy( () => lr( () => import("./index-8708d899.js"), ["src/assets/index-8708d899.js", "src/assets/blog-1070d10c.js", "src/assets/index-a2ef37fb.js", "src/assets/blogSkelton-2834f82b.js", "src/assets/index-c8b2c376.js", "src/assets/iconBase-44eca1d5.js", "src/assets/index-af50b535.js", "src/assets/index.esm-ad86ea85.js", "src/assets/index-b630e7a0.js", "src/assets/index-945fbbbe.js"]))
, L5 = C.lazy( () => lr( () => import("./index-c069a149.js"), ["src/assets/index-c069a149.js", "src/assets/index-f5262972.js", "src/assets/index-72273a8c.css", "src/assets/index-6db29298.js"]))
, M5 = C.lazy( () => lr( () => import("./index-833a76d4.js"), ["src/assets/index-833a76d4.js", "src/assets/index-f5262972.js", "src/assets/index-72273a8c.css", "src/assets/index-6db29298.js"]))
, I5 = C.lazy( () => lr( () => import("./index-99e200a9.js"), ["src/assets/index-99e200a9.js", "src/assets/index-f5262972.js", "src/assets/index-72273a8c.css", "src/assets/index-6db29298.js"]))
, N5 = C.lazy( () => lr( () => import("./index-0bddd4d4.js"), ["src/assets/index-0bddd4d4.js", "src/assets/index-f5262972.js", "src/assets/index-72273a8c.css", "src/assets/index-6db29298.js"]))
, F5 = C.lazy( () => lr( () => import("./index-3ab7f86d.js"), ["src/assets/index-3ab7f86d.js", "src/assets/index-f5262972.js", "src/assets/index-72273a8c.css", "src/assets/index-6db29298.js"]));
C.lazy( () => lr( () => import("./index-945fbbbe.js"), []));
function j5() {
  const e = Du()
    , t = "/Blog/:id"
    , n = "/blogs";
  return V.jsxs("div", {
      children: [V.jsxs(Jh, {
          children: [V.jsx("meta", {
              charSet: "UTF-8"
          }), V.jsx("link", {
              rel: "canonical",
              href: `https://techcloud.sg${e.pathname}`
          }), V.jsx("meta", {
              name: "author",
              content: "- https://papercrowns.com/"
          })]
      }), V.jsx(A5, {}), V.jsx(EO, {}), e.pathname.split("/")[1] == "blogs" || e.pathname.split("/")[1] == "blogs" ? V.jsx("div", {}) : V.jsx(T5, {}), e.pathname == t || e.pathname == n ? V.jsx("div", {}) : V.jsx(d_, {}), e.pathname == t || n ? V.jsx("div", {}) : V.jsx(d_, {}), V.jsx(UI, {}), V.jsx(WI, {}), V.jsx(O5, {}), V.jsx(P5, {})]
  })
}
const z5 = RO([{
  path: "/",
  element: V.jsx(j5, {}),
  children: [{
      path: "blogs",
      element: V.jsx(C5, {})
  }, {
      path: "Blog/:id/:slug",
      element: V.jsx(k5, {})
  }, {
      path: "services/end-user-support",
      element: V.jsx(L5, {})
  }, {
      path: "services/installation-and-provisioning",
      element: V.jsx(I5, {})
  }, {
      path: "services/it-staffing",
      element: V.jsx(M5, {})
  }, {
      path: "services/managed-services",
      element: V.jsx(N5, {})
  }, {
      path: "services/project-management",
      element: V.jsx(F5, {})
  }]
}, {
  index: !0,
  element: V.jsx(D5, {})
}, {
  path: "*",
  element: V.jsx(R5, {})
}]);
function $5() {
  return V.jsx(C.Suspense, {
      fallback: V.jsx(qI, {}),
      children: V.jsx(xO, {
          router: z5
      })
  })
}
const B5 = Jp.createRoot(document.getElementById("root"));
B5.render(V.jsx("div", {
  children: V.jsx($5, {})
}));
export {jg as $, V5 as A, n3 as B, W5 as C, rL as E, Jh as H, E5 as L, $I as P, Jn as R, Ue as S, sO as a, Lu as b, Ki as c, r3 as d, T5 as e, UI as f, wv as g, WI as h, Du as i, V as j, G5 as k, X5 as l, nL as m, Q5 as n, K5 as o, sL as p, t3 as q, C as r, e3 as s, Y5 as t, U5 as u, q5 as v, oL as w, Z5 as x, J5 as y, BI as z};
