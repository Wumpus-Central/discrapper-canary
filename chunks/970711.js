let t;
function r(e) {
    t = e;
}
_.d(n, {
    A$: () => Q,
    AM: () => G,
    B: () => Z,
    B8: () => k,
    BQ: () => et,
    C2: () => ed,
    Cn: () => H,
    D7: () => eo,
    F8: () => Y,
    G6: () => eU,
    H0: () => D,
    Hh: () => em,
    IU: () => eM,
    KD: () => E,
    KE: () => eg,
    M2: () => eK,
    Mc: () => I,
    OU: () => ex,
    On: () => eb,
    Or: () => eX,
    R7: () => eT,
    RA: () => eI,
    Rb: () => eD,
    Rs: () => eR,
    S: () => z,
    Tc: () => eB,
    UE: () => eu,
    V3: () => eF,
    Vr: () => P,
    Wl: () => eV,
    Wt: () => ek,
    XP: () => eN,
    YA: () => ew,
    Yc: () => ej,
    Z5: () => eA,
    Zk: () => F,
    a9: () => en,
    aQ: () => ef,
    am: () => ey,
    d$: () => W,
    dE: () => eE,
    dJ: () => B,
    dN: () => N,
    eD: () => er,
    eW: () => x,
    ej: () => el,
    ex: () => ec,
    fY: () => eQ,
    fw: () => eS,
    h4: () => eJ,
    ht: () => ee,
    iF: () => L,
    iR: () => J,
    jG: () => eL,
    jm: () => es,
    jx: () => V,
    k7: () => X,
    kK: () => eW,
    kn: () => S,
    kr: () => e_,
    mO: () => eC,
    nG: () => U,
    nM: () => A,
    o$: () => e$,
    oH: () => eZ,
    oT: () => r,
    of: () => eG,
    p0: () => ez,
    pC: () => C,
    pj: () => eO,
    qb: () => $,
    qt: () => eP,
    r3: () => ea,
    rs: () => y,
    sB: () => eq,
    up: () => ep,
    w7: () => ev,
    xQ: () => eY,
    xb: () => eH,
    yR: () => q,
    z3: () => ei,
    z9: () => K,
    zF: () => eh
}),
    _(518263),
    _(970173),
    _(520712),
    _(268111),
    _(941497),
    _(32026),
    _(480839),
    _(744285),
    _(492257),
    _(873817),
    _(610885),
    _(126298),
    _(47120),
    _(266796),
    _(301563),
    _(26686),
    _(411104),
    _(107774),
    _(653041),
    _(590518),
    _(611060);
let c = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
c.decode();
let i = null;
function a() {
    return (null === i || 0 === i.byteLength) && (i = new Uint8Array(t.memory.buffer)), i;
}
function o(e, n) {
    return (e >>>= 0), c.decode(a().subarray(e, e + n));
}
function u(e) {
    let n = t.__externref_table_alloc();
    return t.__wbindgen_export_2.set(n, e), n;
}
function f(e, n) {
    try {
        return e.apply(this, n);
    } catch (n) {
        let e = u(n);
        t.__wbindgen_exn_store(e);
    }
}
function b(e) {
    return null == e;
}
let d = 0,
    s = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    w =
        'function' == typeof s.encodeInto
            ? function (e, n) {
                  return s.encodeInto(e, n);
              }
            : function (e, n) {
                  let _ = s.encode(e);
                  return (
                      n.set(_),
                      {
                          read: e.length,
                          written: _.length
                      }
                  );
              };
function g(e, n, _) {
    if (void 0 === _) {
        let _ = s.encode(e),
            t = n(_.length, 1) >>> 0;
        return (
            a()
                .subarray(t, t + _.length)
                .set(_),
            (d = _.length),
            t
        );
    }
    let t = e.length,
        r = n(t, 1) >>> 0,
        c = a(),
        i = 0;
    for (; i < t; i++) {
        let n = e.charCodeAt(i);
        if (n > 127) break;
        c[r + i] = n;
    }
    if (i !== t) {
        0 !== i && (e = e.slice(i)), (r = _(r, t, (t = i + 3 * e.length), 1) >>> 0);
        let n = w(e, a().subarray(r + i, r + t));
        (i += n.written), (r = _(r, t, i, 1) >>> 0);
    }
    return (d = i), r;
}
let l = null;
function h() {
    return (null === l || !0 === l.buffer.detached || (void 0 === l.buffer.detached && l.buffer !== t.memory.buffer)) && (l = new DataView(t.memory.buffer)), l;
}
let p =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => {
              t.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function m(e, n, _, r) {
    let c = {
            a: e,
            b: n,
            cnt: 1,
            dtor: _
        },
        i = function () {
            for (var e = arguments.length, n = Array(e), _ = 0; _ < e; _++) n[_] = arguments[_];
            c.cnt++;
            let i = c.a;
            c.a = 0;
            try {
                return r(i, c.b, ...n);
            } finally {
                0 == --c.cnt ? (t.__wbindgen_export_5.get(c.dtor)(i, c.b), p.unregister(c)) : (c.a = i);
            }
        };
    return (i.original = c), p.register(i, c, c), i;
}
function y(e, n) {
    return t.rustMultiply(e, n);
}
function x() {
    return t.initLibdiscore();
}
function k(e, n, _, r, c) {
    t.installLogCallback(e, n, _, r, c);
}
function R(e, n) {
    t._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d9f524a369b50d3(e, n);
}
function v(e, n) {
    t._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h83f15003f1e5040a(e, n);
}
function O(e, n, _) {
    t.closure464_externref_shim(e, n, _);
}
let M = ['omit', 'same-origin', 'include'],
    T = ['same-origin', 'no-cors', 'cors', 'navigate'],
    j =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((e) => t.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class B {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), j.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        t.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let n,
            _ = g(e, t.__wbindgen_malloc, t.__wbindgen_realloc),
            r = d,
            c = t.blockeddomainsstore_isBlockedDomain(_, r);
        return 0 !== c[0] && ((n = o(c[0], c[1]).slice()), t.__wbindgen_free(c[0], +c[1], 1)), n;
    }
    static startFetchingBlockedDomains() {
        t.blockeddomainsstore_startFetchingBlockedDomains();
    }
}
function A(e, n) {
    e.abort(n);
}
function F(e) {
    e.abort();
}
function C() {
    return f(function (e, n, _, t, r) {
        e.append(o(n, _), o(t, r));
    }, arguments);
}
function D() {
    return f(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function W(e) {
    return e.buffer;
}
function q() {
    return f(function (e) {
        return e.caches;
    }, arguments);
}
function E() {
    return f(function (e, n) {
        return e.call(n);
    }, arguments);
}
function G() {
    return f(function (e, n, _) {
        return e.call(n, _);
    }, arguments);
}
function z(e) {
    return clearTimeout(e);
}
function H(e) {
    return clearTimeout(e);
}
function S(e) {
    return e.done;
}
function U(e, n) {
    return e.fetch(n);
}
function I(e) {
    return fetch(e);
}
function K() {
    return f(function (e, n) {
        return Reflect.get(e, n);
    }, arguments);
}
function L() {
    return f(function (e, n) {
        return Reflect.has(e, n);
    }, arguments);
}
function Q(e) {
    return e.headers;
}
function Y(e) {
    let n;
    try {
        n = e instanceof Cache;
    } catch (e) {
        n = !1;
    }
    return n;
}
function $(e) {
    let n;
    try {
        n = e instanceof Response;
    } catch (e) {
        n = !1;
    }
    return n;
}
function V(e) {
    let n;
    try {
        n = e instanceof Window;
    } catch (e) {
        n = !1;
    }
    return n;
}
function N() {
    return Symbol.iterator;
}
function Z(e) {
    return e.length;
}
function P(e, n) {
    return e.match(n);
}
function J() {
    return f(function () {
        return new Headers();
    }, arguments);
}
function X(e, n) {
    try {
        var _ = {
            a: e,
            b: n
        };
        return new Promise((e, n) => {
            let r = _.a;
            _.a = 0;
            try {
                var c;
                return (c = _.b), void t.closure486_externref_shim(r, c, e, n);
            } finally {
                _.a = r;
            }
        });
    } finally {
        _.a = _.b = 0;
    }
}
function ee() {
    return {};
}
function en() {
    return [];
}
function e_(e) {
    return new Uint8Array(e);
}
function et() {
    return f(function () {
        return new AbortController();
    }, arguments);
}
function er(e, n) {
    return Function(o(e, n));
}
function ec(e, n, _) {
    return new Uint8Array(e, n >>> 0, _ >>> 0);
}
function ei() {
    return f(function (e, n) {
        return new Response(e, n);
    }, arguments);
}
function ea() {
    return f(function (e, n, _) {
        return new Request(o(e, n), _);
    }, arguments);
}
function eo() {
    return f(function (e) {
        return new Blob(e);
    }, arguments);
}
function eu(e) {
    return e.next;
}
function ef() {
    return f(function (e) {
        return e.next();
    }, arguments);
}
function eb(e, n, _) {
    return e.open(o(n, _));
}
function ed(e, n) {
    return e.push(n);
}
function es(e, n, _) {
    return e.put(n, _);
}
function ew(e) {
    queueMicrotask(e);
}
function eg(e) {
    return e.queueMicrotask;
}
function el(e) {
    return Promise.resolve(e);
}
function eh(e, n) {
    return setTimeout(e, n);
}
function ep() {
    return f(function (e, n) {
        return setTimeout(e, n);
    }, arguments);
}
function em() {
    return f(function (e, n, _, t, r) {
        e.set(o(n, _), o(t, r));
    }, arguments);
}
function ey(e, n, _) {
    e.set(n, _ >>> 0);
}
function ex(e, n) {
    e.body = n;
}
function ek(e, n) {
    e.credentials = M[n];
}
function eR(e, n) {
    e.headers = n;
}
function ev(e, n) {
    e.headers = n;
}
function eO(e, n, _) {
    e.method = o(n, _);
}
function eM(e, n) {
    e.mode = T[n];
}
function eT(e, n) {
    e.signal = n;
}
function ej(e, n) {
    e.status = n;
}
function eB(e) {
    return e.signal;
}
function eA() {
    let e = 'undefined' == typeof global ? null : global;
    return b(e) ? 0 : u(e);
}
function eF() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return b(e) ? 0 : u(e);
}
function eC() {
    let e = 'undefined' == typeof self ? null : self;
    return b(e) ? 0 : u(e);
}
function eD() {
    let e = 'undefined' == typeof window ? null : window;
    return b(e) ? 0 : u(e);
}
function eW(e) {
    return e.status;
}
function eq() {
    return f(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function eE(e, n) {
    return e.then(n);
}
function eG(e, n, _) {
    return e.then(n, _);
}
function ez(e, n) {
    let _ = g(n.url, t.__wbindgen_malloc, t.__wbindgen_realloc),
        r = d;
    h().setInt32(e + 4, r, !0), h().setInt32(e + 0, _, !0);
}
function eH(e) {
    return e.value;
}
function eS(e, n) {
    console.warn(o(e, n));
}
function eU(e) {
    let n = e.original;
    return 1 == n.cnt-- && ((n.a = 0), !0);
}
function eI(e, n, _) {
    return m(e, n, 465, O);
}
function eK(e, n, _) {
    return m(e, n, 301, R);
}
function eL(e, n, _) {
    return m(e, n, 308, v);
}
function eQ(e, n) {
    let _ = g(
            (function e(n) {
                let _,
                    t = typeof n;
                if ('number' == t || 'boolean' == t || null == n) return ''.concat(n);
                if ('string' == t) return '"'.concat(n, '"');
                if ('symbol' == t) {
                    let e = n.description;
                    return null == e ? 'Symbol' : 'Symbol('.concat(e, ')');
                }
                if ('function' == t) {
                    let e = n.name;
                    return 'string' == typeof e && e.length > 0 ? 'Function('.concat(e, ')') : 'Function';
                }
                if (Array.isArray(n)) {
                    let _ = n.length,
                        t = '[';
                    _ > 0 && (t += e(n[0]));
                    for (let r = 1; r < _; r++) t += ', ' + e(n[r]);
                    return t + ']';
                }
                let r = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!r || !(r.length > 1)) return toString.call(n);
                if ('Object' == (_ = r[1]))
                    try {
                        return 'Object(' + JSON.stringify(n) + ')';
                    } catch (e) {
                        return 'Object';
                    }
                return n instanceof Error ? ''.concat(n.name, ': ').concat(n.message, '\n').concat(n.stack) : _;
            })(n),
            t.__wbindgen_malloc,
            t.__wbindgen_realloc
        ),
        r = d;
    h().setInt32(e + 4, r, !0), h().setInt32(e + 0, _, !0);
}
function eY() {
    let e = t.__wbindgen_export_2,
        n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
}
function e$(e) {
    return 'function' == typeof e;
}
function eV(e) {
    return 'object' == typeof e && null !== e;
}
function eN(e) {
    return void 0 === e;
}
function eZ() {
    return t.memory;
}
function eP(e, n) {
    let _ = 'string' == typeof n ? n : void 0;
    var r = b(_) ? 0 : g(_, t.__wbindgen_malloc, t.__wbindgen_realloc),
        c = d;
    h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
}
function eJ(e, n) {
    return o(e, n);
}
function eX(e, n) {
    throw Error(o(e, n));
}
