var i = n(607974),
    r = n(350434),
    a = n(91826),
    s = n(400194);
function o(e) {
    return e.call.bind(e);
}
var l = 'undefined' != typeof BigInt,
    u = 'undefined' != typeof Symbol,
    c = o(Object.prototype.toString),
    d = o(Number.prototype.valueOf),
    f = o(String.prototype.valueOf),
    _ = o(Boolean.prototype.valueOf);
if (l) var p = o(BigInt.prototype.valueOf);
if (u) var h = o(Symbol.prototype.valueOf);
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
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || F(e);
}
function v(e) {
    return 'Uint8Array' === a(e);
}
function y(e) {
    return 'Uint8ClampedArray' === a(e);
}
function I(e) {
    return 'Uint16Array' === a(e);
}
function b(e) {
    return 'Uint32Array' === a(e);
}
function T(e) {
    return 'Int8Array' === a(e);
}
function S(e) {
    return 'Int16Array' === a(e);
}
function A(e) {
    return 'Int32Array' === a(e);
}
function N(e) {
    return 'Float32Array' === a(e);
}
function C(e) {
    return 'Float64Array' === a(e);
}
function R(e) {
    return 'BigInt64Array' === a(e);
}
function O(e) {
    return 'BigUint64Array' === a(e);
}
function D(e) {
    return '[object Map]' === c(e);
}
function x(e) {
    return 'undefined' != typeof Map && (D.working ? D(e) : e instanceof Map);
}
function L(e) {
    return '[object Set]' === c(e);
}
function P(e) {
    return 'undefined' != typeof Set && (L.working ? L(e) : e instanceof Set);
}
function w(e) {
    return '[object WeakMap]' === c(e);
}
function M(e) {
    return 'undefined' != typeof WeakMap && (w.working ? w(e) : e instanceof WeakMap);
}
function k(e) {
    return '[object WeakSet]' === c(e);
}
function U(e) {
    return k(e);
}
function G(e) {
    return '[object ArrayBuffer]' === c(e);
}
function B(e) {
    return 'undefined' != typeof ArrayBuffer && (G.working ? G(e) : e instanceof ArrayBuffer);
}
function Z(e) {
    return '[object DataView]' === c(e);
}
function F(e) {
    return 'undefined' != typeof DataView && (Z.working ? Z(e) : e instanceof DataView);
}
(t.isArgumentsObject = i), (t.isGeneratorFunction = r), (t.isTypedArray = s), (t.isPromise = g), (t.isArrayBufferView = E), (t.isUint8Array = v), (t.isUint8ClampedArray = y), (t.isUint16Array = I), (t.isUint32Array = b), (t.isInt8Array = T), (t.isInt16Array = S), (t.isInt32Array = A), (t.isFloat32Array = N), (t.isFloat64Array = C), (t.isBigInt64Array = R), (t.isBigUint64Array = O), (D.working = 'undefined' != typeof Map && D(new Map())), (t.isMap = x), (L.working = 'undefined' != typeof Set && L(new Set())), (t.isSet = P), (w.working = 'undefined' != typeof WeakMap && w(new WeakMap())), (t.isWeakMap = M), (k.working = 'undefined' != typeof WeakSet && k(new WeakSet())), (t.isWeakSet = U), (G.working = 'undefined' != typeof ArrayBuffer && G(new ArrayBuffer())), (t.isArrayBuffer = B), (Z.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && Z(new DataView(new ArrayBuffer(1), 0, 1))), (t.isDataView = F);
var V = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function j(e) {
    return '[object SharedArrayBuffer]' === c(e);
}
function H(e) {
    return void 0 !== V && (void 0 === j.working && (j.working = j(new V())), j.working ? j(e) : e instanceof V);
}
function Y(e) {
    return '[object AsyncFunction]' === c(e);
}
function W(e) {
    return '[object Map Iterator]' === c(e);
}
function K(e) {
    return '[object Set Iterator]' === c(e);
}
function z(e) {
    return '[object Generator]' === c(e);
}
function q(e) {
    return '[object WebAssembly.Module]' === c(e);
}
function Q(e) {
    return m(e, d);
}
function X(e) {
    return m(e, f);
}
function J(e) {
    return m(e, _);
}
function $(e) {
    return l && m(e, p);
}
function ee(e) {
    return u && m(e, h);
}
function et(e) {
    return Q(e) || X(e) || J(e) || $(e) || ee(e);
}
function en(e) {
    return 'undefined' != typeof Uint8Array && (B(e) || H(e));
}
(t.isSharedArrayBuffer = H),
    (t.isAsyncFunction = Y),
    (t.isMapIterator = W),
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
