"use strict";
let r;
function i(e) {
    r = e;
}
n.d(t, {
    BF: () => ta,
    CF: () => tu,
    CI: () => tT,
    DS: () => e3,
    Dn: () => e$,
    E1: () => eQ,
    EH: () => ej,
    FH: () => et,
    FP: () => eI,
    Fs: () => ev,
    GQ: () => tm,
    GZ: () => V,
    Gu: () => tk,
    HB: () => e8,
    HS: () => eT,
    Hz: () => eN,
    Jp: () => en,
    LC: () => tN,
    LM: () => tA,
    M2: () => eU,
    Mo: () => eS,
    N8: () => tB,
    ND: () => eu,
    NG: () => e6,
    NJ: () => e7,
    Ng: () => tI,
    Nh: () => tt,
    O$: () => e_,
    Oy: () => q,
    PJ: () => tr,
    PR: () => tM,
    Ph: () => N,
    Py: () => tF,
    QH: () => ep,
    QR: () => tx,
    Qg: () => ty,
    Qn: () => tY,
    RG: () => eV,
    RK: () => eA,
    RR: () => eM,
    RX: () => em,
    Rj: () => tD,
    Ry: () => eL,
    SJ: () => eC,
    Tb: () => Q,
    Tp: () => tg,
    U8: () => tG,
    Ux: () => el,
    Vr: () => eB,
    Xb: () => ef,
    Xc: () => es,
    Y6: () => th,
    YN: () => ew,
    ZA: () => K,
    ZB: () => tO,
    ZJ: () => H,
    _U: () => ee,
    _h: () => ts,
    _i: () => J,
    _m: () => eJ,
    aI: () => ek,
    bL: () => tw,
    c6: () => ex,
    cV: () => z,
    ce: () => tS,
    cy: () => ei,
    dS: () => e2,
    dz: () => eg,
    eF: () => tv,
    eI: () => eD,
    eT: () => G,
    eW: () => eb,
    fb: () => t_,
    gG: () => ey,
    gK: () => tR,
    gM: () => X,
    gR: () => eh,
    hI: () => eH,
    he: () => eY,
    iA: () => e9,
    ii: () => tc,
    j1: () => eq,
    jn: () => eZ,
    ju: () => e4,
    k2: () => e0,
    k4: () => eW,
    kK: () => tp,
    l0: () => to,
    lI: () => i,
    n8: () => Z,
    nx: () => k,
    o: () => ec,
    p8: () => e5,
    pD: () => ez,
    qN: () => tH,
    qv: () => tP,
    rf: () => y,
    rk: () => ti,
    rl: () => tb,
    s5: () => eE,
    sQ: () => ed,
    sW: () => tV,
    ss: () => tl,
    t7: () => R,
    tZ: () => eX,
    ul: () => tC,
    uo: () => eO,
    uw: () => tn,
    v: () => eP,
    v2: () => Y,
    vF: () => eR,
    vU: () => tU,
    vV: () => eG,
    vb: () => C,
    w2: () => te,
    w6: () => td,
    w9: () => eo,
    wH: () => ea,
    wJ: () => e1,
    wd: () => eF,
    x0: () => tf,
    x6: () => er,
    xV: () => tE,
    xy: () => v,
    yc: () => tj,
    yq: () => eK,
    zE: () => tL,
}),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073),
    (e = n.hmd(e));
let s = 0,
    a = null;
function o() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a;
}
let l = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)("utf-8"),
    u =
        "function" == typeof l.encodeInto
            ? function (e, t) {
                  return l.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = l.encode(e);
                  return t.set(n), { read: e.length, written: n.length };
              };
function c(e, t, n) {
    if (void 0 === n) {
        let n = l.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            o()
                .subarray(r, r + n.length)
                .set(n),
            (s = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        a = o(),
        c = 0;
    for (; c < r; c++) {
        let t = e.charCodeAt(c);
        if (t > 127) break;
        a[i + c] = t;
    }
    if (c !== r) {
        0 !== c && (e = e.slice(c)), (i = n(i, r, (r = c + 3 * e.length), 1) >>> 0);
        let t = u(e, o().subarray(i + c, i + r));
        (c += t.written), (i = n(i, r, c, 1) >>> 0);
    }
    return (s = c), i;
}
let d = null;
function _() {
    return (
        (null === d || !0 === d.buffer.detached || (void 0 === d.buffer.detached && d.buffer !== r.memory.buffer)) &&
            (d = new DataView(r.memory.buffer)),
        d
    );
}
let f = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
function p(e, t) {
    return (e >>>= 0), f.decode(o().subarray(e, e + t));
}
function h(e) {
    let t = r.__externref_table_alloc();
    return r.__wbindgen_export_4.set(t, e), t;
}
function m(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = h(t);
        r.__wbindgen_exn_store(e);
    }
}
function E(e) {
    return null == e;
}
function g(e, t) {
    return (e >>>= 0), o().subarray(e / 1, e / 1 + t);
}
f.decode();
let A =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function I(e, t, n, i) {
    let s = { a: e, b: t, cnt: 1, dtor: n },
        a = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            s.cnt++;
            let a = s.a;
            s.a = 0;
            try {
                return i(a, s.b, ...t);
            } finally {
                0 == --s.cnt ? (r.__wbindgen_export_5.get(s.dtor)(a, s.b), A.unregister(s)) : (s.a = a);
            }
        };
    return (a.original = s), A.register(a, s, s), a;
}
function T(e) {
    let t,
        n = typeof e;
    if ("number" == n || "boolean" == n || null == e) return `${e}`;
    if ("string" == n) return `"${e}"`;
    if ("symbol" == n) {
        let t = e.description;
        return null == t ? "Symbol" : `Symbol(${t})`;
    }
    if ("function" == n) {
        let t = e.name;
        return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function";
    }
    if (Array.isArray(e)) {
        let t = e.length,
            n = "[";
        t > 0 && (n += T(e[0]));
        for (let r = 1; r < t; r++) n += ", " + T(e[r]);
        return n + "]";
    }
    let r = /\[object ([^\]]+)\]/.exec(toString.call(e));
    if (!r || !(r.length > 1)) return toString.call(e);
    if ("Object" == (t = r[1]))
        try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch (e) {
            return "Object";
        }
    return e instanceof Error
        ? `${e.name}: ${e.message}
${e.stack}`
        : t;
}
function S(e) {
    let t = r.__wbindgen_export_4.get(e);
    return r.__externref_table_dealloc(e), t;
}
function y(e, t, n, i, s) {
    r.installLogCallback(e, t, n, i, s);
}
function v(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return (t = i[0]), (n = i[1]), p(i[0], i[1]);
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}
function N() {
    return r.initLibdiscore();
}
function C() {
    r.crash();
}
function R(e, t) {
    return r.rustMultiply(e, t);
}
function O(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}
function b(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(
        e,
        t,
    );
}
function D(e, t, n) {
    r.closure736_externref_shim(e, t, n);
}
function L(e, t, n, i) {
    r.closure775_externref_shim(e, t, n, i);
}
let w = ["bytes"],
    M = ["omit", "same-origin", "include"],
    x = ["same-origin", "no-cors", "cors", "navigate"],
    P =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class k {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), P.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = s,
            a = r.blockeddomainsstore_isBlockedDomain(n, i);
        if (a[3]) throw S(a[2]);
        return 0 !== a[0] && ((t = p(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
        if (i[1]) throw S(i[0]);
    }
}
let U =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class G {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), U.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.experimentcacher_getConfig(t, n);
        if (i[2]) throw S(i[1]);
        return 0 === i[0] ? void 0 : z.__wrap(i[0]);
    }
    static clearCache() {
        let e = r.experimentcacher_clearCache();
        if (e[1]) throw S(e[0]);
    }
    static flushToCache(e) {
        let t = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.experimentcacher_flushToCache(t, n);
        if (i[1]) throw S(i[0]);
    }
}
let F =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_fluxapi_free(e >>> 0, 1));
class V {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), F.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
        let t = r.fluxapi_connectStore(this.__wbg_ptr, e);
        if (t[2]) throw S(t[1]);
        return S(t[0]);
    }
    dispatchAction(e, t) {
        let n = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = s;
        return r.fluxapi_dispatchAction(this.__wbg_ptr, n, i, t);
    }
    flushReplicationStates() {
        return r.fluxapi_flushReplicationStates(this.__wbg_ptr);
    }
    getRegisteredActionTypes() {
        return r.fluxapi_getRegisteredActionTypes(this.__wbg_ptr);
    }
    findStoresThatCanHandleActionType(e) {
        let t = c(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s;
        return r.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
        const e = r.fluxapi_new();
        return (this.__wbg_ptr = e >>> 0), F.register(this, this.__wbg_ptr, this), this;
    }
}
let B =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class H {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), B.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_intounderlyingbytesource_free(e, 0);
    }
    get autoAllocateChunkSize() {
        return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
    }
    pull(e) {
        return r.intounderlyingbytesource_pull(this.__wbg_ptr, e);
    }
    start(e) {
        r.intounderlyingbytesource_start(this.__wbg_ptr, e);
    }
    get type() {
        return w[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingbytesource_cancel(e);
    }
}
let j =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
class Y {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), j.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_intounderlyingsink_free(e, 0);
    }
    abort(e) {
        let t = this.__destroy_into_raw();
        return r.intounderlyingsink_abort(t, e);
    }
    close() {
        let e = this.__destroy_into_raw();
        return r.intounderlyingsink_close(e);
    }
    write(e) {
        return r.intounderlyingsink_write(this.__wbg_ptr, e);
    }
}
let W =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
class K {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), W.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_intounderlyingsource_free(e, 0);
    }
    pull(e) {
        return r.intounderlyingsource_pull(this.__wbg_ptr, e);
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingsource_cancel(e);
    }
}
let $ =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class z {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(z.prototype);
        return (t.__wbg_ptr = e), $.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), $.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_wasmcacheableexperimentconfig_free(e, 0);
    }
    get treatmentId() {
        return r.__wbg_get_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr);
    }
    set treatmentId(e) {
        r.__wbg_set_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr, e);
    }
}
function q(e, t) {
    let n = c(String(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function Z(e, t) {
    e.abort(t);
}
function X(e) {
    e.abort();
}
function Q() {
    return m(function (e, t, n, r, i) {
        e.append(p(t, n), p(r, i));
    }, arguments);
}
function J() {
    return m(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function ee(e) {
    return e.buffer;
}
function et(e) {
    return e.buffer;
}
function en(e) {
    let t = e.byobRequest;
    return E(t) ? 0 : h(t);
}
function er(e) {
    return e.byteLength;
}
function ei(e) {
    return e.byteOffset;
}
function es() {
    return m(function (e) {
        return e.caches;
    }, arguments);
}
function ea() {
    return m(function (e, t) {
        return e.call(t);
    }, arguments);
}
function eo() {
    return m(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function el(e) {
    return clearTimeout(e);
}
function eu(e) {
    return clearTimeout(e);
}
function ec() {
    return m(function (e) {
        e.close();
    }, arguments);
}
function ed() {
    return m(function (e) {
        e.close();
    }, arguments);
}
function e_(e, t) {
    return e.delete(t);
}
function ef(e) {
    return e.done;
}
function ep() {
    return m(function (e, t) {
        e.enqueue(t);
    }, arguments);
}
function eh(e, t) {
    return e.fetch(t);
}
function em(e) {
    return fetch(e);
}
function eE() {
    return m(function (e, t) {
        globalThis.crypto.getRandomValues(g(e, t));
    }, arguments);
}
function eg() {
    return m(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function eA(e, t) {
    return e[t >>> 0];
}
function eI(e, t) {
    return e[t];
}
function eT() {
    return m(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function eS(e) {
    return e.headers;
}
function ey(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ev(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eN(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eC(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eR(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eO(e) {
    return Array.isArray(e);
}
function eb() {
    return Symbol.iterator;
}
function eD(e) {
    return e.length;
}
function eL(e) {
    return e.length;
}
function ew(e, t) {
    return e.match(t);
}
function eM() {
    return m(function () {
        return new Headers();
    }, arguments);
}
function ex(e, t) {
    try {
        var n = { a: e, b: t },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return L(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}
function eP() {
    return {};
}
function ek() {
    return new Map();
}
function eU() {
    return [];
}
function eG(e) {
    return new Uint8Array(e);
}
function eF(e, t) {
    return Error(p(e, t));
}
function eV() {
    return m(function () {
        return new AbortController();
    }, arguments);
}
function eB(e, t) {
    return Function(p(e, t));
}
function eH(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function ej() {
    return m(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eY() {
    return m(function (e, t, n) {
        return new Request(p(e, t), n);
    }, arguments);
}
function eW() {
    return m(function (e) {
        return new Blob(e);
    }, arguments);
}
function eK(e) {
    return e.next;
}
function e$() {
    return m(function (e) {
        return e.next();
    }, arguments);
}
function ez(e) {
    return e.now();
}
function eq(e, t, n) {
    return e.open(p(t, n));
}
function eZ(e) {
    let t = e.performance;
    return E(t) ? 0 : h(t);
}
function eX(e, t) {
    return e.push(t);
}
function eQ(e, t, n) {
    return e.put(t, n);
}
function eJ(e) {
    queueMicrotask(e);
}
function e0(e) {
    return e.queueMicrotask;
}
function e1(e) {
    return Promise.resolve(e);
}
function e2() {
    return m(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}
function e3(e, t) {
    return setTimeout(e, t);
}
function e6() {
    return m(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function e4() {
    return m(function (e, t, n, r, i) {
        e.set(p(t, n), p(r, i));
    }, arguments);
}
function e5(e, t, n) {
    e[t >>> 0] = n;
}
function e7(e, t, n) {
    e[t] = n;
}
function e8(e, t, n) {
    e.set(t, n >>> 0);
}
function e9(e, t, n) {
    return e.set(t, n);
}
function te() {
    return m(function (e, t, n) {
        return Reflect.set(e, t, n);
    }, arguments);
}
function tt(e, t) {
    e.body = t;
}
function tn(e, t) {
    e.credentials = M[t];
}
function tr(e, t) {
    e.headers = t;
}
function ti(e, t) {
    e.headers = t;
}
function ts(e, t, n) {
    e.method = p(t, n);
}
function ta(e, t) {
    e.mode = x[t];
}
function to(e, t) {
    e.signal = t;
}
function tl(e, t) {
    e.status = t;
}
function tu(e) {
    return e.signal;
}
function tc() {
    let e = void 0 === n.g ? null : n.g;
    return E(e) ? 0 : h(e);
}
function td() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return E(e) ? 0 : h(e);
}
function t_() {
    let e = "u" < typeof self ? null : self;
    return E(e) ? 0 : h(e);
}
function tf() {
    let e = "u" < typeof window ? null : window;
    return E(e) ? 0 : h(e);
}
function tp(e) {
    return e.status;
}
function th() {
    return m(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function tm(e, t) {
    return e.then(t);
}
function tE(e, t, n) {
    return e.then(t, n);
}
function tg(e, t) {
    let n = c(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function tA(e) {
    return e.value;
}
function tI(e) {
    let t = e.view;
    return E(t) ? 0 : h(t);
}
function tT(e, t) {
    console.warn(p(e, t));
}
function tS(e) {
    return e;
}
function ty(e) {
    return BigInt.asUintN(64, e);
}
function tv(e) {
    let t = e;
    return "boolean" == typeof t ? +!!t : 2;
}
function tN(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function tC(e, t, n) {
    return I(e, t, 553, O);
}
function tR(e, t, n) {
    return I(e, t, 593, b);
}
function tO(e, t, n) {
    return I(e, t, 737, D);
}
function tb(e, t) {
    let n = c(T(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function tD(e, t) {
    return Error(p(e, t));
}
function tL(e, t) {
    return e in t;
}
function tw() {
    let e = r.__wbindgen_export_4,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function tM(e) {
    return "function" == typeof e;
}
function tx(e) {
    return null === e;
}
function tP(e) {
    let t = e;
    return "object" == typeof t && null !== t;
}
function tk(e) {
    return "string" == typeof e;
}
function tU(e) {
    return void 0 === e;
}
function tG(e, t) {
    return e == t;
}
function tF() {
    return r.memory;
}
function tV(e, t) {
    let n = t,
        r = "number" == typeof n ? n : void 0;
    _().setFloat64(e + 8, E(r) ? 0 : r, !0), _().setInt32(e + 0, !E(r), !0);
}
function tB(e) {
    return e;
}
function tH(e, t) {
    let n = t,
        i = "string" == typeof n ? n : void 0;
    var a = E(i) ? 0 : c(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = s;
    _().setInt32(e + 4, o, !0), _().setInt32(e + 0, a, !0);
}
function tj(e, t) {
    return p(e, t);
}
function tY(e, t) {
    throw Error(p(e, t));
}
