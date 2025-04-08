let r;
function i(e) {
    r = e;
}
n.d(t, {
    $R: () => I,
    A$: () => z,
    AM: () => B,
    B: () => $,
    B8: () => S,
    BQ: () => ea,
    C2: () => eh,
    Cn: () => F,
    D7: () => ed,
    F8: () => q,
    G6: () => eH,
    H0: () => k,
    Hh: () => eO,
    I$: () => eY,
    IU: () => eR,
    KD: () => G,
    KE: () => eE,
    Mc: () => W,
    OU: () => eS,
    On: () => ep,
    Or: () => e2,
    R7: () => eP,
    Rb: () => ek,
    Rs: () => eN,
    S: () => V,
    Tc: () => eD,
    UE: () => ef,
    V3: () => ex,
    Vr: () => ee,
    Wl: () => eX,
    Wt: () => eT,
    XP: () => eJ,
    YA: () => eg,
    Yc: () => ew,
    Z5: () => eL,
    ZC: () => eW,
    Zk: () => x,
    a9: () => ei,
    aQ: () => e_,
    am: () => eI,
    d$: () => j,
    dE: () => eG,
    dJ: () => D,
    dN: () => J,
    eD: () => es,
    eF: () => eK,
    eW: () => O,
    ej: () => eb,
    ex: () => el,
    fY: () => ez,
    fw: () => eZ,
    h4: () => e1,
    ht: () => er,
    iF: () => K,
    iR: () => et,
    jm: () => em,
    jx: () => X,
    k7: () => en,
    kK: () => ej,
    kn: () => Z,
    kr: () => eo,
    mO: () => eM,
    nG: () => H,
    nM: () => L,
    o$: () => eQ,
    oH: () => e$,
    oT: () => i,
    of: () => eB,
    p0: () => eV,
    pC: () => M,
    pj: () => eC,
    qb: () => Q,
    qt: () => e0,
    r3: () => eu,
    rs: () => v,
    sB: () => eU,
    up: () => ev,
    w7: () => eA,
    xQ: () => eq,
    xb: () => eF,
    yR: () => U,
    z3: () => ec,
    z9: () => Y,
    zF: () => ey
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(388685),
    n(953529),
    n(35282),
    n(49124),
    n(415506),
    n(824928),
    n(539854),
    n(563775),
    n(980754);
let o = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
o.decode();
let a = null;
function s() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a;
}
function l(e, t) {
    return (e >>>= 0), o.decode(s().subarray(e, e + t));
}
function c(e) {
    let t = r.__externref_table_alloc();
    return r.__wbindgen_export_2.set(t, e), t;
}
function u(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = c(t);
        r.__wbindgen_exn_store(e);
    }
}
function d(e) {
    return null == e;
}
let f = 0,
    _ = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    p =
        'function' == typeof _.encodeInto
            ? function (e, t) {
                  return _.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = _.encode(e);
                  return (
                      t.set(n),
                      {
                          read: e.length,
                          written: n.length
                      }
                  );
              };
function h(e, t, n) {
    if (void 0 === n) {
        let n = _.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            s()
                .subarray(r, r + n.length)
                .set(n),
            (f = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        o = s(),
        a = 0;
    for (; a < r; a++) {
        let t = e.charCodeAt(a);
        if (t > 127) break;
        o[i + a] = t;
    }
    if (a !== r) {
        0 !== a && (e = e.slice(a)), (i = n(i, r, (r = a + 3 * e.length), 1) >>> 0);
        let t = p(e, s().subarray(i + a, i + r));
        (a += t.written), (i = n(i, r, a, 1) >>> 0);
    }
    return (f = a), i;
}
let m = null;
function g() {
    return (null === m || !0 === m.buffer.detached || (void 0 === m.buffer.detached && m.buffer !== r.memory.buffer)) && (m = new DataView(r.memory.buffer)), m;
}
let E =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function b(e, t, n, i) {
    let o = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
        },
        a = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            o.cnt++;
            let a = o.a;
            o.a = 0;
            try {
                return i(a, o.b, ...t);
            } finally {
                0 == --o.cnt ? (r.__wbindgen_export_5.get(o.dtor)(a, o.b), E.unregister(o)) : (o.a = a);
            }
        };
    return (a.original = o), E.register(a, o, o), a;
}
function y(e) {
    let t,
        n = typeof e;
    if ('number' == n || 'boolean' == n || null == e) return ''.concat(e);
    if ('string' == n) return '"'.concat(e, '"');
    if ('symbol' == n) {
        let t = e.description;
        return null == t ? 'Symbol' : 'Symbol('.concat(t, ')');
    }
    if ('function' == n) {
        let t = e.name;
        return 'string' == typeof t && t.length > 0 ? 'Function('.concat(t, ')') : 'Function';
    }
    if (Array.isArray(e)) {
        let t = e.length,
            n = '[';
        t > 0 && (n += y(e[0]));
        for (let r = 1; r < t; r++) n += ', ' + y(e[r]);
        return n + ']';
    }
    let r = /\[object ([^\]]+)\]/.exec(toString.call(e));
    if (!r || !(r.length > 1)) return toString.call(e);
    if ('Object' == (t = r[1]))
        try {
            return 'Object(' + JSON.stringify(e) + ')';
        } catch (e) {
            return 'Object';
        }
    return e instanceof Error ? ''.concat(e.name, ': ').concat(e.message, '\n').concat(e.stack) : t;
}
function v(e, t) {
    return r.rustMultiply(e, t);
}
function O() {
    return r.initLibdiscore();
}
function I() {
    r.crash();
}
function S(e, t, n, i, o) {
    r.installLogCallback(e, t, n, i, o);
}
function T(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0d9f524a369b50d3(e, t);
}
function N(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h83f15003f1e5040a(e, t);
}
function A(e, t, n) {
    r.closure465_externref_shim(e, t, n);
}
function C(e, t, n, i) {
    r.closure487_externref_shim(e, t, n, i);
}
let R = ['omit', 'same-origin', 'include'],
    P = ['same-origin', 'no-cors', 'cors', 'navigate'],
    w =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class D {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), w.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = f,
            o = r.blockeddomainsstore_isBlockedDomain(n, i);
        return 0 !== o[0] && ((t = l(o[0], o[1]).slice()), r.__wbindgen_free(o[0], +o[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = f;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
function L(e, t) {
    e.abort(t);
}
function x(e) {
    e.abort();
}
function M() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function k() {
    return u(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function j(e) {
    return e.buffer;
}
function U() {
    return u(function (e) {
        return e.caches;
    }, arguments);
}
function G() {
    return u(function (e, t) {
        return e.call(t);
    }, arguments);
}
function B() {
    return u(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function V(e) {
    return clearTimeout(e);
}
function F(e) {
    return clearTimeout(e);
}
function Z(e) {
    return e.done;
}
function H(e, t) {
    return e.fetch(t);
}
function W(e) {
    return fetch(e);
}
function Y() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function K() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function z(e) {
    return e.headers;
}
function q(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function Q(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function X(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function J() {
    return Symbol.iterator;
}
function $(e) {
    return e.length;
}
function ee(e, t) {
    return e.match(t);
}
function et() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function en(e, t) {
    try {
        var n = {
                a: e,
                b: t
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return C(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}
function er() {
    return {};
}
function ei() {
    return [];
}
function eo(e) {
    return new Uint8Array(e);
}
function ea() {
    return u(function () {
        return new AbortController();
    }, arguments);
}
function es(e, t) {
    return Function(l(e, t));
}
function el(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function ec() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eu() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function ed() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function ef(e) {
    return e.next;
}
function e_() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function ep(e, t, n) {
    return e.open(l(t, n));
}
function eh(e, t) {
    return e.push(t);
}
function em(e, t, n) {
    return e.put(t, n);
}
function eg(e) {
    queueMicrotask(e);
}
function eE(e) {
    return e.queueMicrotask;
}
function eb(e) {
    return Promise.resolve(e);
}
function ey(e, t) {
    return setTimeout(e, t);
}
function ev() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function eO() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eI(e, t, n) {
    e.set(t, n >>> 0);
}
function eS(e, t) {
    e.body = t;
}
function eT(e, t) {
    e.credentials = R[t];
}
function eN(e, t) {
    e.headers = t;
}
function eA(e, t) {
    e.headers = t;
}
function eC(e, t, n) {
    e.method = l(t, n);
}
function eR(e, t) {
    e.mode = P[t];
}
function eP(e, t) {
    e.signal = t;
}
function ew(e, t) {
    e.status = t;
}
function eD(e) {
    return e.signal;
}
function eL() {
    let e = 'undefined' == typeof global ? null : global;
    return d(e) ? 0 : c(e);
}
function ex() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return d(e) ? 0 : c(e);
}
function eM() {
    let e = 'undefined' == typeof self ? null : self;
    return d(e) ? 0 : c(e);
}
function ek() {
    let e = 'undefined' == typeof window ? null : window;
    return d(e) ? 0 : c(e);
}
function ej(e) {
    return e.status;
}
function eU() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function eG(e, t) {
    return e.then(t);
}
function eB(e, t, n) {
    return e.then(t, n);
}
function eV(e, t) {
    let n = h(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function eF(e) {
    return e.value;
}
function eZ(e, t) {
    console.warn(l(e, t));
}
function eH(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function eW(e, t, n) {
    return b(e, t, 466, A);
}
function eY(e, t, n) {
    return b(e, t, 302, T);
}
function eK(e, t, n) {
    return b(e, t, 309, N);
}
function ez(e, t) {
    let n = h(y(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function eq() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function eQ(e) {
    return 'function' == typeof e;
}
function eX(e) {
    let t = e;
    return 'object' == typeof t && null !== t;
}
function eJ(e) {
    return void 0 === e;
}
function e$() {
    return r.memory;
}
function e0(e, t) {
    let n = t,
        i = 'string' == typeof n ? n : void 0;
    var o = d(i) ? 0 : h(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        a = f;
    g().setInt32(e + 4, a, !0), g().setInt32(e + 0, o, !0);
}
function e1(e, t) {
    return l(e, t);
}
function e2(e, t) {
    throw Error(l(e, t));
}
