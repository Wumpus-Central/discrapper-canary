var i = r(607974),
    a = r(350434),
    s = r(91826),
    o = r(400194);
function l(e) {
    return e.call.bind(e);
}
var u = 'undefined' != typeof BigInt,
    c = 'undefined' != typeof Symbol,
    d = l(Object.prototype.toString),
    f = l(Number.prototype.valueOf),
    _ = l(String.prototype.valueOf),
    h = l(Boolean.prototype.valueOf);
if (u) var p = l(BigInt.prototype.valueOf);
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
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || V(e);
}
function I(e) {
    return 'Uint8Array' === s(e);
}
function T(e) {
    return 'Uint8ClampedArray' === s(e);
}
function b(e) {
    return 'Uint16Array' === s(e);
}
function y(e) {
    return 'Uint32Array' === s(e);
}
function S(e) {
    return 'Int8Array' === s(e);
}
function A(e) {
    return 'Int16Array' === s(e);
}
function N(e) {
    return 'Int32Array' === s(e);
}
function C(e) {
    return 'Float32Array' === s(e);
}
function R(e) {
    return 'Float64Array' === s(e);
}
function O(e) {
    return 'BigInt64Array' === s(e);
}
function D(e) {
    return 'BigUint64Array' === s(e);
}
function L(e) {
    return '[object Map]' === d(e);
}
function x(e) {
    return 'undefined' != typeof Map && (L.working ? L(e) : e instanceof Map);
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
(n.isArgumentsObject = i), (n.isGeneratorFunction = a), (n.isTypedArray = o), (n.isPromise = E), (n.isArrayBufferView = v), (n.isUint8Array = I), (n.isUint8ClampedArray = T), (n.isUint16Array = b), (n.isUint32Array = y), (n.isInt8Array = S), (n.isInt16Array = A), (n.isInt32Array = N), (n.isFloat32Array = C), (n.isFloat64Array = R), (n.isBigInt64Array = O), (n.isBigUint64Array = D), (L.working = 'undefined' != typeof Map && L(new Map())), (n.isMap = x), (w.working = 'undefined' != typeof Set && w(new Set())), (n.isSet = P), (M.working = 'undefined' != typeof WeakMap && M(new WeakMap())), (n.isWeakMap = k), (U.working = 'undefined' != typeof WeakSet && U(new WeakSet())), (n.isWeakSet = B), (G.working = 'undefined' != typeof ArrayBuffer && G(new ArrayBuffer())), (n.isArrayBuffer = Z), (F.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && F(new DataView(new ArrayBuffer(1), 0, 1))), (n.isDataView = V);
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
    return g(e, _);
}
function $(e) {
    return g(e, h);
}
function ee(e) {
    return u && g(e, p);
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
