var r = n(607974),
    i = n(350434),
    o = n(91826),
    a = n(400194);
function s(e) {
    return e.call.bind(e);
}
var l = 'undefined' != typeof BigInt,
    c = 'undefined' != typeof Symbol,
    u = s(Object.prototype.toString),
    d = s(Number.prototype.valueOf),
    f = s(String.prototype.valueOf),
    p = s(Boolean.prototype.valueOf);
if (l) var _ = s(BigInt.prototype.valueOf);
if (c) var h = s(Symbol.prototype.valueOf);
function m(e, t) {
    if ('object' != typeof e) return !1;
    try {
        return t(e), !0;
    } catch (e) {
        return !1;
    }
}
function g(e) {
    return ('undefined' != typeof Promise && e instanceof Promise) || (null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch);
}
function E(e) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || Z(e);
}
function v(e) {
    return 'Uint8Array' === o(e);
}
function b(e) {
    return 'Uint8ClampedArray' === o(e);
}
function y(e) {
    return 'Uint16Array' === o(e);
}
function O(e) {
    return 'Uint32Array' === o(e);
}
function S(e) {
    return 'Int8Array' === o(e);
}
function I(e) {
    return 'Int16Array' === o(e);
}
function T(e) {
    return 'Int32Array' === o(e);
}
function N(e) {
    return 'Float32Array' === o(e);
}
function A(e) {
    return 'Float64Array' === o(e);
}
function C(e) {
    return 'BigInt64Array' === o(e);
}
function R(e) {
    return 'BigUint64Array' === o(e);
}
function P(e) {
    return '[object Map]' === u(e);
}
function w(e) {
    return 'undefined' != typeof Map && (P.working ? P(e) : e instanceof Map);
}
function D(e) {
    return '[object Set]' === u(e);
}
function x(e) {
    return 'undefined' != typeof Set && (D.working ? D(e) : e instanceof Set);
}
function L(e) {
    return '[object WeakMap]' === u(e);
}
function M(e) {
    return 'undefined' != typeof WeakMap && (L.working ? L(e) : e instanceof WeakMap);
}
function k(e) {
    return '[object WeakSet]' === u(e);
}
function j(e) {
    return k(e);
}
function U(e) {
    return '[object ArrayBuffer]' === u(e);
}
function G(e) {
    return 'undefined' != typeof ArrayBuffer && (U.working ? U(e) : e instanceof ArrayBuffer);
}
function B(e) {
    return '[object DataView]' === u(e);
}
function Z(e) {
    return 'undefined' != typeof DataView && (B.working ? B(e) : e instanceof DataView);
}
(t.isArgumentsObject = r), (t.isGeneratorFunction = i), (t.isTypedArray = a), (t.isPromise = g), (t.isArrayBufferView = E), (t.isUint8Array = v), (t.isUint8ClampedArray = b), (t.isUint16Array = y), (t.isUint32Array = O), (t.isInt8Array = S), (t.isInt16Array = I), (t.isInt32Array = T), (t.isFloat32Array = N), (t.isFloat64Array = A), (t.isBigInt64Array = C), (t.isBigUint64Array = R), (P.working = 'undefined' != typeof Map && P(new Map())), (t.isMap = w), (D.working = 'undefined' != typeof Set && D(new Set())), (t.isSet = x), (L.working = 'undefined' != typeof WeakMap && L(new WeakMap())), (t.isWeakMap = M), (k.working = 'undefined' != typeof WeakSet && k(new WeakSet())), (t.isWeakSet = j), (U.working = 'undefined' != typeof ArrayBuffer && U(new ArrayBuffer())), (t.isArrayBuffer = G), (B.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && B(new DataView(new ArrayBuffer(1), 0, 1))), (t.isDataView = Z);
var F = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function V(e) {
    return '[object SharedArrayBuffer]' === u(e);
}
function H(e) {
    return void 0 !== F && (void 0 === V.working && (V.working = V(new F())), V.working ? V(e) : e instanceof F);
}
function W(e) {
    return '[object AsyncFunction]' === u(e);
}
function Y(e) {
    return '[object Map Iterator]' === u(e);
}
function K(e) {
    return '[object Set Iterator]' === u(e);
}
function z(e) {
    return '[object Generator]' === u(e);
}
function q(e) {
    return '[object WebAssembly.Module]' === u(e);
}
function Q(e) {
    return m(e, d);
}
function X(e) {
    return m(e, f);
}
function J(e) {
    return m(e, p);
}
function $(e) {
    return l && m(e, _);
}
function ee(e) {
    return c && m(e, h);
}
function et(e) {
    return Q(e) || X(e) || J(e) || $(e) || ee(e);
}
function en(e) {
    return 'undefined' != typeof Uint8Array && (G(e) || H(e));
}
(t.isSharedArrayBuffer = H),
    (t.isAsyncFunction = W),
    (t.isMapIterator = Y),
    (t.isSetIterator = K),
    (t.isGeneratorObject = z),
    (t.isWebAssemblyCompiledModule = q),
    (t.isNumberObject = Q),
    (t.isStringObject = X),
    (t.isBooleanObject = J),
    (t.isBigIntObject = $),
    (t.isSymbolObject = ee),
    (t.isBoxedPrimitive = et),
    (t.isAnyArrayBuffer = en),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
