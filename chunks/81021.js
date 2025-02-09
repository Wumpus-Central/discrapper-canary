var i,
    r = SyntaxError,
    a = Function,
    s = TypeError,
    o = function (e) {
        try {
        } catch (e) {}
    },
    l = Object.getOwnPropertyDescriptor;
if (l)
    try {
        l({}, '');
    } catch (e) {
        l = null;
    }
var u = function () {
        throw new s();
    },
    c = l
        ? (function () {
              try {
                  return arguments.callee, u;
              } catch (e) {
                  try {
                      return l(arguments, 'callee').get;
                  } catch (e) {
                      return u;
                  }
              }
          })()
        : u,
    d = n(322499)(),
    f = n(79536)(),
    _ =
        Object.getPrototypeOf ||
        (f
            ? function (e) {
                  return e.__proto__;
              }
            : null),
    p = {},
    h = 'undefined' != typeof Uint8Array && _ ? _(Uint8Array) : i,
    m = {
        '%AggregateError%': 'undefined' == typeof AggregateError ? i : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '%ArrayIteratorPrototype%': d && _ ? _([][Symbol.iterator]()) : i,
        '%AsyncFromSyncIteratorPrototype%': i,
        '%AsyncFunction%': p,
        '%AsyncGenerator%': p,
        '%AsyncGeneratorFunction%': p,
        '%AsyncIteratorPrototype%': p,
        '%Atomics%': 'undefined' == typeof Atomics ? i : Atomics,
        '%BigInt%': 'undefined' == typeof BigInt ? i : BigInt,
        '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? i : BigInt64Array,
        '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? i : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': 'undefined' == typeof DataView ? i : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': 'undefined' == typeof Float32Array ? i : Float32Array,
        '%Float64Array%': 'undefined' == typeof Float64Array ? i : Float64Array,
        '%FinalizationRegistry%': 'undefined' == typeof FinalizationRegistry ? i : FinalizationRegistry,
        '%Function%': a,
        '%GeneratorFunction%': p,
        '%Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '%Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '%Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': d && _ ? _(_([][Symbol.iterator]())) : i,
        '%JSON%': 'object' == typeof JSON ? JSON : i,
        '%Map%': 'undefined' == typeof Map ? i : Map,
        '%MapIteratorPrototype%': 'undefined' != typeof Map && d && _ ? _(new Map()[Symbol.iterator]()) : i,
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': 'undefined' == typeof Promise ? i : Promise,
        '%Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '%RegExp%': RegExp,
        '%Set%': 'undefined' == typeof Set ? i : Set,
        '%SetIteratorPrototype%': 'undefined' != typeof Set && d && _ ? _(new Set()[Symbol.iterator]()) : i,
        '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': d && _ ? _(''[Symbol.iterator]()) : i,
        '%Symbol%': d ? Symbol : i,
        '%SyntaxError%': r,
        '%ThrowTypeError%': c,
        '%TypedArray%': h,
        '%TypeError%': s,
        '%Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '%Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '%Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '%WeakRef%': 'undefined' == typeof WeakRef ? i : WeakRef,
        '%WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet
    };
if (_)
    try {
        null.error;
    } catch (e) {
        var g = _(_(e));
        m['%Error.prototype%'] = g;
    }
var E = function e(t) {
        var n;
        if ('%AsyncFunction%' === t) n = o('async function () {}');
        else if ('%GeneratorFunction%' === t) n = o('function* () {}');
        else if ('%AsyncGeneratorFunction%' === t) n = o('async function* () {}');
        else if ('%AsyncGenerator%' === t) {
            var i = e('%AsyncGeneratorFunction%');
            i && (n = i.prototype);
        } else if ('%AsyncIteratorPrototype%' === t) {
            var r = e('%AsyncGenerator%');
            r && _ && (n = _(r.prototype));
        }
        return (m[t] = n), n;
    },
    v = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
    },
    y = n(390976),
    I = n(706165),
    T = y.call(Function.call, Array.prototype.concat),
    b = y.call(Function.apply, Array.prototype.splice),
    S = y.call(Function.call, String.prototype.replace),
    A = y.call(Function.call, String.prototype.slice),
    N = y.call(Function.call, RegExp.prototype.exec),
    C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    R = /\\(\\)?/g,
    O = function (e) {
        var t = A(e, 0, 1),
            n = A(e, -1);
        if ('%' === t && '%' !== n) throw new r('invalid intrinsic syntax, expected closing `%`');
        if ('%' === n && '%' !== t) throw new r('invalid intrinsic syntax, expected opening `%`');
        var i = [];
        return (
            S(e, C, function (e, t, n, r) {
                i[i.length] = n ? S(r, R, '$1') : t || e;
            }),
            i
        );
    },
    D = function (e, t) {
        var n,
            i = e;
        if ((I(v, i) && (i = '%' + (n = v[i])[0] + '%'), I(m, i))) {
            var a = m[i];
            if ((a === p && (a = E(i)), void 0 === a && !t)) throw new s('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
            return {
                alias: n,
                name: i,
                value: a
            };
        }
        throw new r('intrinsic ' + e + ' does not exist!');
    };
e.exports = function (e, t) {
    if ('string' != typeof e || 0 === e.length) throw new s('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && 'boolean' != typeof t) throw new s('"allowMissing" argument must be a boolean');
    if (null === N(/^%?[^%]*%?$/, e)) throw new r('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var n = O(e),
        i = n.length > 0 ? n[0] : '',
        a = D('%' + i + '%', t),
        o = a.name,
        u = a.value,
        c = !1,
        d = a.alias;
    d && ((i = d[0]), b(n, T([0, 1], d)));
    for (var f = 1, _ = !0; f < n.length; f += 1) {
        var p = n[f],
            h = A(p, 0, 1),
            g = A(p, -1);
        if (('"' === h || "'" === h || '`' === h || '"' === g || "'" === g || '`' === g) && h !== g) throw new r('property names with quotes must have matching quotes');
        if ((('constructor' !== p && _) || (c = !0), (i += '.' + p), I(m, (o = '%' + i + '%')))) u = m[o];
        else if (null != u) {
            if (!(p in u)) {
                if (!t) throw new s('base intrinsic for ' + e + ' exists, but the property is not available.');
                return;
            }
            if (l && f + 1 >= n.length) {
                var E = l(u, p);
                u = (_ = !!E) && 'get' in E && !('originalValue' in E.get) ? E.get : u[p];
            } else (_ = I(u, p)), (u = u[p]);
            _ && !c && (m[o] = u);
        }
    }
    return u;
};
