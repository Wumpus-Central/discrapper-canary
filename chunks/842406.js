var i = r(607974),
    a = r(350434),
    o = r(91826),
    s = r(400194);
function l(e) {
    return e.call.bind(e);
}
var u = 'undefined' != typeof BigInt,
    c = 'undefined' != typeof Symbol,
    d = l(Object.prototype.toString),
    f = l(Number.prototype.valueOf),
    p = l(String.prototype.valueOf),
    h = l(Boolean.prototype.valueOf);
if (u) var _ = l(BigInt.prototype.valueOf);
if (c) var m = l(Symbol.prototype.valueOf);
function g(e, n) {
    if ('object' != typeof e) return !1;
    try {
        return n(e), !0;
    } catch (e) {
        return !1;
    }
}
function E(e) {
    return ('undefined' != typeof Promise && e instanceof Promise) || (null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch);
}
function v(e) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || V(e);
}
function y(e) {
    return 'Uint8Array' === o(e);
}
function b(e) {
    return 'Uint8ClampedArray' === o(e);
}
function I(e) {
    return 'Uint16Array' === o(e);
}
function T(e) {
    return 'Uint32Array' === o(e);
}
function S(e) {
    return 'Int8Array' === o(e);
}
function A(e) {
    return 'Int16Array' === o(e);
}
function C(e) {
    return 'Int32Array' === o(e);
}
function N(e) {
    return 'Float32Array' === o(e);
}
function R(e) {
    return 'Float64Array' === o(e);
}
function O(e) {
    return 'BigInt64Array' === o(e);
}
function D(e) {
    return 'BigUint64Array' === o(e);
}
function x(e) {
    return '[object Map]' === d(e);
}
function L(e) {
    return 'undefined' != typeof Map && (x.working ? x(e) : e instanceof Map);
}
function w(e) {
    return '[object Set]' === d(e);
}
function P(e) {
    return 'undefined' != typeof Set && (w.working ? w(e) : e instanceof Set);
}
function M(e) {
    return '[object WeakMap]' === d(e);
}
function k(e) {
    return 'undefined' != typeof WeakMap && (M.working ? M(e) : e instanceof WeakMap);
}
function U(e) {
    return '[object WeakSet]' === d(e);
}
function B(e) {
    return U(e);
}
function G(e) {
    return '[object ArrayBuffer]' === d(e);
}
function Z(e) {
    return 'undefined' != typeof ArrayBuffer && (G.working ? G(e) : e instanceof ArrayBuffer);
}
function F(e) {
    return '[object DataView]' === d(e);
}
function V(e) {
    return 'undefined' != typeof DataView && (F.working ? F(e) : e instanceof DataView);
}
(n.isArgumentsObject = i), (n.isGeneratorFunction = a), (n.isTypedArray = s), (n.isPromise = E), (n.isArrayBufferView = v), (n.isUint8Array = y), (n.isUint8ClampedArray = b), (n.isUint16Array = I), (n.isUint32Array = T), (n.isInt8Array = S), (n.isInt16Array = A), (n.isInt32Array = C), (n.isFloat32Array = N), (n.isFloat64Array = R), (n.isBigInt64Array = O), (n.isBigUint64Array = D), (x.working = 'undefined' != typeof Map && x(new Map())), (n.isMap = L), (w.working = 'undefined' != typeof Set && w(new Set())), (n.isSet = P), (M.working = 'undefined' != typeof WeakMap && M(new WeakMap())), (n.isWeakMap = k), (U.working = 'undefined' != typeof WeakSet && U(new WeakSet())), (n.isWeakSet = B), (G.working = 'undefined' != typeof ArrayBuffer && G(new ArrayBuffer())), (n.isArrayBuffer = Z), (F.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && F(new DataView(new ArrayBuffer(1), 0, 1))), (n.isDataView = V);
var j = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function H(e) {
    return '[object SharedArrayBuffer]' === d(e);
}
function Y(e) {
    return void 0 !== j && (void 0 === H.working && (H.working = H(new j())), H.working ? H(e) : e instanceof j);
}
function W(e) {
    return '[object AsyncFunction]' === d(e);
}
function K(e) {
    return '[object Map Iterator]' === d(e);
}
function z(e) {
    return '[object Set Iterator]' === d(e);
}
function q(e) {
    return '[object Generator]' === d(e);
}
function Q(e) {
    return '[object WebAssembly.Module]' === d(e);
}
function X(e) {
    return g(e, f);
}
function J(e) {
    return g(e, p);
}
function $(e) {
    return g(e, h);
}
function ee(e) {
    return u && g(e, _);
}
function et(e) {
    return c && g(e, m);
}
function en(e) {
    return X(e) || J(e) || $(e) || ee(e) || et(e);
}
function er(e) {
    return 'undefined' != typeof Uint8Array && (Z(e) || Y(e));
}
(n.isSharedArrayBuffer = Y),
    (n.isAsyncFunction = W),
    (n.isMapIterator = K),
    (n.isSetIterator = z),
    (n.isGeneratorObject = q),
    (n.isWebAssemblyCompiledModule = Q),
    (n.isNumberObject = X),
    (n.isStringObject = J),
    (n.isBooleanObject = $),
    (n.isBigIntObject = ee),
    (n.isSymbolObject = et),
    (n.isBoxedPrimitive = en),
    (n.isAnyArrayBuffer = er),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(n, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
