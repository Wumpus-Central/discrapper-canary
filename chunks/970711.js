let r;
function i(e) {
    r = e;
}
n.d(t, {
    $R: () => T,
    A$: () => ee,
    AM: () => W,
    B: () => eo,
    B8: () => A,
    BQ: () => ef,
    C2: () => eO,
    Cn: () => z,
    D7: () => eg,
    Dj: () => U,
    EO: () => eJ,
    F8: () => et,
    G6: () => eX,
    H0: () => V,
    Hh: () => eC,
    IK: () => e$,
    IU: () => eM,
    KD: () => Y,
    KE: () => eS,
    Mc: () => X,
    OU: () => ew,
    On: () => ey,
    Or: () => e9,
    R7: () => ej,
    Rb: () => eZ,
    Rs: () => eL,
    S: () => K,
    S5: () => eP,
    Tc: () => eG,
    UE: () => eE,
    V3: () => eF,
    Vr: () => ea,
    Wl: () => e4,
    Wt: () => eD,
    XP: () => e5,
    YA: () => eI,
    Yc: () => eU,
    Z5: () => eB,
    Zk: () => B,
    a9: () => eu,
    aQ: () => eb,
    am: () => eR,
    d$: () => Z,
    dE: () => eW,
    dJ: () => x,
    dN: () => ei,
    eD: () => e_,
    eW: () => v,
    ej: () => eT,
    ex: () => ep,
    fY: () => e1,
    fw: () => eQ,
    h4: () => e7,
    ht: () => ec,
    iF: () => $,
    iR: () => es,
    jm: () => ev,
    jx: () => er,
    k7: () => el,
    kK: () => eH,
    kn: () => q,
    kr: () => ed,
    mO: () => eV,
    nG: () => Q,
    nM: () => G,
    o$: () => e3,
    oH: () => e6,
    oT: () => i,
    of: () => eK,
    p0: () => ez,
    pC: () => F,
    pj: () => ek,
    qb: () => en,
    qt: () => e8,
    r3: () => em,
    rs: () => O,
    s5: () => e0,
    sB: () => eY,
    up: () => eN,
    vz: () => M,
    w7: () => ex,
    xQ: () => e2,
    xb: () => eq,
    yR: () => H,
    z3: () => eh,
    z9: () => J,
    zF: () => eA
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
    n(539854),
    n(824928),
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
function O(e, t) {
    return r.rustMultiply(e, t);
}
function v() {
    return r.initLibdiscore();
}
function I(e, t) {
    e >>>= 0;
    let n = g(),
        i = [];
    for (let o = e; o < e + 4 * t; o += 4) i.push(r.__wbindgen_export_2.get(n.getUint32(o, !0)));
    return r.__externref_drop_slice(e, t), i;
}
function S(e, t) {
    let n = t(4 * e.length, 4) >>> 0;
    for (let t = 0; t < e.length; t++) {
        let r = c(e[t]);
        g().setUint32(n + 4 * t, r, !0);
    }
    return (f = e.length), n;
}
function T() {
    r.crash();
}
function A(e, t, n, i, o) {
    r.installLogCallback(e, t, n, i, o);
}
function N(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a939e4ee92a7144(e, t);
}
function C(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd15e1711d7d607c(e, t);
}
function P(e, t, n) {
    r.closure514_externref_shim(e, t, n);
}
function R(e, t, n, i) {
    r.closure548_externref_shim(e, t, n, i);
}
let w = ['omit', 'same-origin', 'include'],
    D = ['same-origin', 'no-cors', 'cors', 'navigate'],
    L =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class x {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), L.unregister(this), e;
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
let k =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class M {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), k.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static isExperimentIdEnabled(e) {
        let t = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = f;
        return 0 !== r.experimentcacher_isExperimentIdEnabled(t, n);
    }
    static getEnabledExperimentIds() {
        let e = r.experimentcacher_getEnabledExperimentIds();
        var t = I(e[0], e[1]).slice();
        return r.__wbindgen_free(e[0], 4 * e[1], 4), t;
    }
    static flushToCache(e) {
        let t = S(e, r.__wbindgen_malloc),
            n = f;
        r.experimentcacher_flushToCache(t, n);
    }
}
let j =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_notestore_free(e >>> 0, 1));
class U {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), j.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_notestore_free(e, 0);
    }
    static getNote(e) {
        let t = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = f;
        return r.notestore_getNote(t, n);
    }
    static handleAction(e) {
        let t = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = f;
        return r.notestore_handleAction(t, n);
    }
    static handleReset() {
        return r.notestore_handleReset();
    }
}
function G(e, t) {
    e.abort(t);
}
function B(e) {
    e.abort();
}
function F() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function V() {
    return u(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function Z(e) {
    return e.buffer;
}
function H() {
    return u(function (e) {
        return e.caches;
    }, arguments);
}
function Y() {
    return u(function (e, t) {
        return e.call(t);
    }, arguments);
}
function W() {
    return u(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function K(e) {
    return clearTimeout(e);
}
function z(e) {
    return clearTimeout(e);
}
function q(e) {
    return e.done;
}
function Q(e, t) {
    return e.fetch(t);
}
function X(e) {
    return fetch(e);
}
function J() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function $() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function ee(e) {
    return e.headers;
}
function et(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function en(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function er(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ei() {
    return Symbol.iterator;
}
function eo(e) {
    return e.length;
}
function ea(e, t) {
    return e.match(t);
}
function es() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function el(e, t) {
    try {
        var n = {
                a: e,
                b: t
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return R(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}
function ec() {
    return {};
}
function eu() {
    return [];
}
function ed(e) {
    return new Uint8Array(e);
}
function ef() {
    return u(function () {
        return new AbortController();
    }, arguments);
}
function e_(e, t) {
    return Function(l(e, t));
}
function ep(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eh() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function em() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function eg() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function eE(e) {
    return e.next;
}
function eb() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function ey(e, t, n) {
    return e.open(l(t, n));
}
function eO(e, t) {
    return e.push(t);
}
function ev(e, t, n) {
    return e.put(t, n);
}
function eI(e) {
    queueMicrotask(e);
}
function eS(e) {
    return e.queueMicrotask;
}
function eT(e) {
    return Promise.resolve(e);
}
function eA(e, t) {
    return setTimeout(e, t);
}
function eN() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function eC() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eP(e, t, n) {
    e[t] = n;
}
function eR(e, t, n) {
    e.set(t, n >>> 0);
}
function ew(e, t) {
    e.body = t;
}
function eD(e, t) {
    e.credentials = w[t];
}
function eL(e, t) {
    e.headers = t;
}
function ex(e, t) {
    e.headers = t;
}
function ek(e, t, n) {
    e.method = l(t, n);
}
function eM(e, t) {
    e.mode = D[t];
}
function ej(e, t) {
    e.signal = t;
}
function eU(e, t) {
    e.status = t;
}
function eG(e) {
    return e.signal;
}
function eB() {
    let e = 'undefined' == typeof global ? null : global;
    return d(e) ? 0 : c(e);
}
function eF() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return d(e) ? 0 : c(e);
}
function eV() {
    let e = 'undefined' == typeof self ? null : self;
    return d(e) ? 0 : c(e);
}
function eZ() {
    let e = 'undefined' == typeof window ? null : window;
    return d(e) ? 0 : c(e);
}
function eH(e) {
    return e.status;
}
function eY() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function eW(e, t) {
    return e.then(t);
}
function eK(e, t, n) {
    return e.then(t, n);
}
function ez(e, t) {
    let n = h(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function eq(e) {
    return e.value;
}
function eQ(e, t) {
    console.warn(l(e, t));
}
function eX(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function eJ(e, t, n) {
    return b(e, t, 515, P);
}
function e$(e, t, n) {
    return b(e, t, 362, N);
}
function e0(e, t, n) {
    return b(e, t, 387, C);
}
function e1(e, t) {
    let n = h(y(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function e2() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function e3(e) {
    return 'function' == typeof e;
}
function e4(e) {
    let t = e;
    return 'object' == typeof t && null !== t;
}
function e5(e) {
    return void 0 === e;
}
function e6() {
    return r.memory;
}
function e8(e, t) {
    let n = t,
        i = 'string' == typeof n ? n : void 0;
    var o = d(i) ? 0 : h(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        a = f;
    g().setInt32(e + 4, a, !0), g().setInt32(e + 0, o, !0);
}
function e7(e, t) {
    return l(e, t);
}
function e9(e, t) {
    throw Error(l(e, t));
}
