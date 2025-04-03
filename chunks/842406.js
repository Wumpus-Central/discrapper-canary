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
    _ = s(Boolean.prototype.valueOf);
if (l) var p = s(BigInt.prototype.valueOf);
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
    return '[object Map]' === u(e);
}
function E(e) {
    return '[object Set]' === u(e);
}
function b(e) {
    return '[object WeakMap]' === u(e);
}
function y(e) {
    return '[object WeakSet]' === u(e);
}
function v(e) {
    return '[object ArrayBuffer]' === u(e);
}
function O(e) {
    return 'undefined' != typeof ArrayBuffer && (v.working ? v(e) : e instanceof ArrayBuffer);
}
function I(e) {
    return '[object DataView]' === u(e);
}
function S(e) {
    return 'undefined' != typeof DataView && (I.working ? I(e) : e instanceof DataView);
}
(t.isArgumentsObject = r),
    (t.isGeneratorFunction = i),
    (t.isTypedArray = a),
    (t.isPromise = function (e) {
        return ('undefined' != typeof Promise && e instanceof Promise) || (null !== e && 'object' == typeof e && 'function' == typeof e.then && 'function' == typeof e.catch);
    }),
    (t.isArrayBufferView = function (e) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || S(e);
    }),
    (t.isUint8Array = function (e) {
        return 'Uint8Array' === o(e);
    }),
    (t.isUint8ClampedArray = function (e) {
        return 'Uint8ClampedArray' === o(e);
    }),
    (t.isUint16Array = function (e) {
        return 'Uint16Array' === o(e);
    }),
    (t.isUint32Array = function (e) {
        return 'Uint32Array' === o(e);
    }),
    (t.isInt8Array = function (e) {
        return 'Int8Array' === o(e);
    }),
    (t.isInt16Array = function (e) {
        return 'Int16Array' === o(e);
    }),
    (t.isInt32Array = function (e) {
        return 'Int32Array' === o(e);
    }),
    (t.isFloat32Array = function (e) {
        return 'Float32Array' === o(e);
    }),
    (t.isFloat64Array = function (e) {
        return 'Float64Array' === o(e);
    }),
    (t.isBigInt64Array = function (e) {
        return 'BigInt64Array' === o(e);
    }),
    (t.isBigUint64Array = function (e) {
        return 'BigUint64Array' === o(e);
    }),
    (g.working = 'undefined' != typeof Map && g(new Map())),
    (t.isMap = function (e) {
        return 'undefined' != typeof Map && (g.working ? g(e) : e instanceof Map);
    }),
    (E.working = 'undefined' != typeof Set && E(new Set())),
    (t.isSet = function (e) {
        return 'undefined' != typeof Set && (E.working ? E(e) : e instanceof Set);
    }),
    (b.working = 'undefined' != typeof WeakMap && b(new WeakMap())),
    (t.isWeakMap = function (e) {
        return 'undefined' != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap);
    }),
    (y.working = 'undefined' != typeof WeakSet && y(new WeakSet())),
    (t.isWeakSet = function (e) {
        return y(e);
    }),
    (v.working = 'undefined' != typeof ArrayBuffer && v(new ArrayBuffer())),
    (t.isArrayBuffer = O),
    (I.working = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView && I(new DataView(new ArrayBuffer(1), 0, 1))),
    (t.isDataView = S);
var T = 'undefined' != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
function N(e) {
    return '[object SharedArrayBuffer]' === u(e);
}
function A(e) {
    return void 0 !== T && (void 0 === N.working && (N.working = N(new T())), N.working ? N(e) : e instanceof T);
}
function C(e) {
    return m(e, d);
}
function R(e) {
    return m(e, f);
}
function P(e) {
    return m(e, _);
}
function w(e) {
    return l && m(e, p);
}
function D(e) {
    return c && m(e, h);
}
(t.isSharedArrayBuffer = A),
    (t.isAsyncFunction = function (e) {
        return '[object AsyncFunction]' === u(e);
    }),
    (t.isMapIterator = function (e) {
        return '[object Map Iterator]' === u(e);
    }),
    (t.isSetIterator = function (e) {
        return '[object Set Iterator]' === u(e);
    }),
    (t.isGeneratorObject = function (e) {
        return '[object Generator]' === u(e);
    }),
    (t.isWebAssemblyCompiledModule = function (e) {
        return '[object WebAssembly.Module]' === u(e);
    }),
    (t.isNumberObject = C),
    (t.isStringObject = R),
    (t.isBooleanObject = P),
    (t.isBigIntObject = w),
    (t.isSymbolObject = D),
    (t.isBoxedPrimitive = function (e) {
        return C(e) || R(e) || P(e) || w(e) || D(e);
    }),
    (t.isAnyArrayBuffer = function (e) {
        return 'undefined' != typeof Uint8Array && (O(e) || A(e));
    }),
    ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function () {
                throw Error(e + ' is not supported in userland');
            }
        });
    });
