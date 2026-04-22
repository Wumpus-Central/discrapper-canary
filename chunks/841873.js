"use strict";
let r;
function i(e) {
    r = e;
}
n.d(t, {
    BF: () => tr,
    CF: () => ta,
    CI: () => tg,
    DS: () => e0,
    Dn: () => eW,
    E1: () => eq,
    EH: () => eF,
    FH: () => J,
    FP: () => em,
    Fs: () => eT,
    GQ: () => tf,
    GZ: () => x,
    Gu: () => tM,
    HB: () => e4,
    HS: () => eg,
    Hz: () => eS,
    Jp: () => Z,
    LC: () => tS,
    LM: () => tp,
    M2: () => eP,
    Mo: () => eA,
    N8: () => tG,
    ND: () => ea,
    NG: () => e1,
    NJ: () => e6,
    Ng: () => tm,
    Nh: () => e8,
    O$: () => eu,
    Oy: () => K,
    PJ: () => te,
    PR: () => tD,
    Ph: () => S,
    Py: () => tk,
    QH: () => ec,
    QR: () => tL,
    Qg: () => tI,
    Qn: () => tB,
    RG: () => ex,
    RK: () => ep,
    RR: () => eD,
    RX: () => ef,
    Rj: () => tv,
    Ry: () => eC,
    SJ: () => ey,
    Sc: () => tO,
    Tb: () => q,
    Tp: () => th,
    U8: () => tU,
    Ux: () => es,
    Vr: () => eG,
    Xb: () => ed,
    Xc: () => en,
    Y6: () => t_,
    YN: () => eb,
    ZA: () => Y,
    ZJ: () => V,
    _U: () => Q,
    _h: () => tn,
    _i: () => X,
    _m: () => eX,
    aI: () => eM,
    bL: () => tb,
    c6: () => eL,
    cV: () => j,
    ce: () => tA,
    cy: () => et,
    dS: () => eZ,
    dz: () => eh,
    eF: () => tT,
    eI: () => ev,
    eT: () => U,
    eW: () => eR,
    fb: () => tu,
    gG: () => eI,
    gM: () => z,
    gR: () => e_,
    hI: () => eV,
    he: () => eB,
    iA: () => e5,
    ii: () => to,
    j1: () => eK,
    jn: () => e$,
    ju: () => e2,
    k2: () => eQ,
    k4: () => eH,
    kK: () => tc,
    l0: () => ti,
    lI: () => i,
    n8: () => $,
    ni: () => ty,
    nv: () => tN,
    nx: () => M,
    o: () => eo,
    p8: () => e3,
    pD: () => ej,
    qN: () => tV,
    qv: () => tw,
    rf: () => O,
    rk: () => tt,
    rl: () => tR,
    s5: () => eE,
    sQ: () => el,
    sW: () => tx,
    ss: () => ts,
    t7: () => N,
    tZ: () => ez,
    uo: () => eO,
    uw: () => e9,
    v: () => ew,
    v2: () => B,
    vF: () => eN,
    vU: () => tP,
    vV: () => eU,
    vb: () => y,
    w2: () => e7,
    w6: () => tl,
    w9: () => ei,
    wH: () => er,
    wJ: () => eJ,
    wd: () => ek,
    x0: () => td,
    x6: () => ee,
    xV: () => tE,
    xy: () => T,
    yc: () => tF,
    yq: () => eY,
    zE: () => tC,
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
function d(e, t, n) {
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
        d = 0;
    for (; d < r; d++) {
        let t = e.charCodeAt(d);
        if (t > 127) break;
        a[i + d] = t;
    }
    if (d !== r) {
        0 !== d && (e = e.slice(d)), (i = n(i, r, (r = d + 3 * e.length), 1) >>> 0);
        let t = u(e, o().subarray(i + d, i + r));
        (d += t.written), (i = n(i, r, d, 1) >>> 0);
    }
    return (s = d), i;
}
let c = null;
function _() {
    return (
        (null === c || !0 === c.buffer.detached || (void 0 === c.buffer.detached && c.buffer !== r.memory.buffer)) &&
            (c = new DataView(r.memory.buffer)),
        c
    );
}
let f = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
function E(e, t) {
    return (e >>>= 0), f.decode(o().subarray(e, e + t));
}
function h(e) {
    let t = r.__externref_table_alloc();
    return r.__wbindgen_export_4.set(t, e), t;
}
function p(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = h(t);
        r.__wbindgen_exn_store(e);
    }
}
function m(e) {
    return null == e;
}
f.decode();
let g =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function A(e, t, n, i) {
    let s = { a: e, b: t, cnt: 1, dtor: n },
        a = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            s.cnt++;
            let a = s.a;
            s.a = 0;
            try {
                return i(a, s.b, ...t);
            } finally {
                0 == --s.cnt ? (r.__wbindgen_export_5.get(s.dtor)(a, s.b), g.unregister(s)) : (s.a = a);
            }
        };
    return (a.original = s), g.register(a, s, s), a;
}
function I(e) {
    let t = r.__wbindgen_export_4.get(e);
    return r.__externref_table_dealloc(e), t;
}
function T(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return (t = i[0]), (n = i[1]), E(i[0], i[1]);
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}
function S() {
    return r.initLibdiscore();
}
function y() {
    r.crash();
}
function N(e, t) {
    return r.rustMultiply(e, t);
}
function O(e, t, n, i, s) {
    r.installLogCallback(e, t, n, i, s);
}
function R(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}
function v(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(
        e,
        t,
    );
}
function C(e, t, n) {
    r.closure736_externref_shim(e, t, n);
}
let b = ["bytes"],
    D = ["omit", "same-origin", "include"],
    L = ["same-origin", "no-cors", "cors", "navigate"],
    w =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class M {
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
            n = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = s,
            a = r.blockeddomainsstore_isBlockedDomain(n, i);
        if (a[3]) throw I(a[2]);
        return 0 !== a[0] && ((t = E(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
        if (i[1]) throw I(i[0]);
    }
}
let P =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class U {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), P.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.experimentcacher_getConfig(t, n);
        if (i[2]) throw I(i[1]);
        return 0 === i[0] ? void 0 : j.__wrap(i[0]);
    }
    static clearCache() {
        let e = r.experimentcacher_clearCache();
        if (e[1]) throw I(e[0]);
    }
    static flushToCache(e) {
        let t = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s,
            i = r.experimentcacher_flushToCache(t, n);
        if (i[1]) throw I(i[0]);
    }
}
let k =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_fluxapi_free(e >>> 0, 1));
class x {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), k.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
        let t = r.fluxapi_connectStore(this.__wbg_ptr, e);
        if (t[2]) throw I(t[1]);
        return I(t[0]);
    }
    dispatchAction(e, t) {
        let n = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
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
        let t = d(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = s;
        return r.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
        const e = r.fluxapi_new();
        return (this.__wbg_ptr = e >>> 0), k.register(this, this.__wbg_ptr, this), this;
    }
}
let G =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class V {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), G.unregister(this), e;
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
        return b[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingbytesource_cancel(e);
    }
}
let F =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
class B {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), F.unregister(this), e;
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
let H =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
class Y {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), H.unregister(this), e;
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
let W =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class j {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(j.prototype);
        return (t.__wbg_ptr = e), W.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), W.unregister(this), e;
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
function K(e, t) {
    let n = d(String(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function $(e, t) {
    e.abort(t);
}
function z(e) {
    e.abort();
}
function q() {
    return p(function (e, t, n, r, i) {
        e.append(E(t, n), E(r, i));
    }, arguments);
}
function X() {
    return p(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function Q(e) {
    return e.buffer;
}
function J(e) {
    return e.buffer;
}
function Z(e) {
    let t = e.byobRequest;
    return m(t) ? 0 : h(t);
}
function ee(e) {
    return e.byteLength;
}
function et(e) {
    return e.byteOffset;
}
function en() {
    return p(function (e) {
        return e.caches;
    }, arguments);
}
function er() {
    return p(function (e, t) {
        return e.call(t);
    }, arguments);
}
function ei() {
    return p(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function es(e) {
    return clearTimeout(e);
}
function ea(e) {
    return clearTimeout(e);
}
function eo() {
    return p(function (e) {
        e.close();
    }, arguments);
}
function el() {
    return p(function (e) {
        e.close();
    }, arguments);
}
function eu(e, t) {
    return e.delete(t);
}
function ed(e) {
    return e.done;
}
function ec() {
    return p(function (e, t) {
        e.enqueue(t);
    }, arguments);
}
function e_(e, t) {
    return e.fetch(t);
}
function ef(e) {
    return fetch(e);
}
function eE() {
    return p(function (e, t) {
        var n;
        globalThis.crypto.getRandomValues(((n = e >>> 0), o().subarray(n / 1, n / 1 + t)));
    }, arguments);
}
function eh() {
    return p(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function ep(e, t) {
    return e[t >>> 0];
}
function em(e, t) {
    return e[t];
}
function eg() {
    return p(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function eA(e) {
    return e.headers;
}
function eI(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eT(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eS(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ey(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eN(e) {
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
function eR() {
    return Symbol.iterator;
}
function ev(e) {
    return e.length;
}
function eC(e) {
    return e.length;
}
function eb(e, t) {
    return e.match(t);
}
function eD() {
    return p(function () {
        return new Headers();
    }, arguments);
}
function eL(e, t) {
    try {
        var n = { a: e, b: t };
        return new Promise((e, t) => {
            let i = n.a;
            n.a = 0;
            try {
                var s;
                return (s = n.b), void r.closure775_externref_shim(i, s, e, t);
            } finally {
                n.a = i;
            }
        });
    } finally {
        n.a = n.b = 0;
    }
}
function ew() {
    return {};
}
function eM() {
    return new Map();
}
function eP() {
    return [];
}
function eU(e) {
    return new Uint8Array(e);
}
function ek(e, t) {
    return Error(E(e, t));
}
function ex() {
    return p(function () {
        return new AbortController();
    }, arguments);
}
function eG(e, t) {
    return Function(E(e, t));
}
function eV(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eF() {
    return p(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eB() {
    return p(function (e, t, n) {
        return new Request(E(e, t), n);
    }, arguments);
}
function eH() {
    return p(function (e) {
        return new Blob(e);
    }, arguments);
}
function eY(e) {
    return e.next;
}
function eW() {
    return p(function (e) {
        return e.next();
    }, arguments);
}
function ej(e) {
    return e.now();
}
function eK(e, t, n) {
    return e.open(E(t, n));
}
function e$(e) {
    let t = e.performance;
    return m(t) ? 0 : h(t);
}
function ez(e, t) {
    return e.push(t);
}
function eq(e, t, n) {
    return e.put(t, n);
}
function eX(e) {
    queueMicrotask(e);
}
function eQ(e) {
    return e.queueMicrotask;
}
function eJ(e) {
    return Promise.resolve(e);
}
function eZ() {
    return p(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}
function e0(e, t) {
    return setTimeout(e, t);
}
function e1() {
    return p(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function e2() {
    return p(function (e, t, n, r, i) {
        e.set(E(t, n), E(r, i));
    }, arguments);
}
function e3(e, t, n) {
    e[t >>> 0] = n;
}
function e6(e, t, n) {
    e[t] = n;
}
function e4(e, t, n) {
    e.set(t, n >>> 0);
}
function e5(e, t, n) {
    return e.set(t, n);
}
function e7() {
    return p(function (e, t, n) {
        return Reflect.set(e, t, n);
    }, arguments);
}
function e8(e, t) {
    e.body = t;
}
function e9(e, t) {
    e.credentials = D[t];
}
function te(e, t) {
    e.headers = t;
}
function tt(e, t) {
    e.headers = t;
}
function tn(e, t, n) {
    e.method = E(t, n);
}
function tr(e, t) {
    e.mode = L[t];
}
function ti(e, t) {
    e.signal = t;
}
function ts(e, t) {
    e.status = t;
}
function ta(e) {
    return e.signal;
}
function to() {
    let e = void 0 === n.g ? null : n.g;
    return m(e) ? 0 : h(e);
}
function tl() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return m(e) ? 0 : h(e);
}
function tu() {
    let e = "u" < typeof self ? null : self;
    return m(e) ? 0 : h(e);
}
function td() {
    let e = "u" < typeof window ? null : window;
    return m(e) ? 0 : h(e);
}
function tc(e) {
    return e.status;
}
function t_() {
    return p(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function tf(e, t) {
    return e.then(t);
}
function tE(e, t, n) {
    return e.then(t, n);
}
function th(e, t) {
    let n = d(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function tp(e) {
    return e.value;
}
function tm(e) {
    let t = e.view;
    return m(t) ? 0 : h(t);
}
function tg(e, t) {
    console.warn(E(e, t));
}
function tA(e) {
    return e;
}
function tI(e) {
    return BigInt.asUintN(64, e);
}
function tT(e) {
    return "boolean" == typeof e ? +!!e : 2;
}
function tS(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function ty(e, t, n) {
    return A(e, t, 553, R);
}
function tN(e, t, n) {
    return A(e, t, 593, v);
}
function tO(e, t, n) {
    return A(e, t, 737, C);
}
function tR(e, t) {
    let n = d(
            (function e(t) {
                let n,
                    r = typeof t;
                if ("number" == r || "boolean" == r || null == t) return `${t}`;
                if ("string" == r) return `"${t}"`;
                if ("symbol" == r) {
                    let e = t.description;
                    return null == e ? "Symbol" : `Symbol(${e})`;
                }
                if ("function" == r) {
                    let e = t.name;
                    return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                }
                if (Array.isArray(t)) {
                    let n = t.length,
                        r = "[";
                    n > 0 && (r += e(t[0]));
                    for (let i = 1; i < n; i++) r += ", " + e(t[i]);
                    return r + "]";
                }
                let i = /\[object ([^\]]+)\]/.exec(toString.call(t));
                if (!i || !(i.length > 1)) return toString.call(t);
                if ("Object" == (n = i[1]))
                    try {
                        return "Object(" + JSON.stringify(t) + ")";
                    } catch (e) {
                        return "Object";
                    }
                return t instanceof Error
                    ? `${t.name}: ${t.message}
${t.stack}`
                    : n;
            })(t),
            r.__wbindgen_malloc,
            r.__wbindgen_realloc,
        ),
        i = s;
    _().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0);
}
function tv(e, t) {
    return Error(E(e, t));
}
function tC(e, t) {
    return e in t;
}
function tb() {
    let e = r.__wbindgen_export_4,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function tD(e) {
    return "function" == typeof e;
}
function tL(e) {
    return null === e;
}
function tw(e) {
    return "object" == typeof e && null !== e;
}
function tM(e) {
    return "string" == typeof e;
}
function tP(e) {
    return void 0 === e;
}
function tU(e, t) {
    return e == t;
}
function tk() {
    return r.memory;
}
function tx(e, t) {
    let n = "number" == typeof t ? t : void 0;
    _().setFloat64(e + 8, m(n) ? 0 : n, !0), _().setInt32(e + 0, !m(n), !0);
}
function tG(e) {
    return e;
}
function tV(e, t) {
    let n = "string" == typeof t ? t : void 0;
    var i = m(n) ? 0 : d(n, r.__wbindgen_malloc, r.__wbindgen_realloc),
        a = s;
    _().setInt32(e + 4, a, !0), _().setInt32(e + 0, i, !0);
}
function tF(e, t) {
    return E(e, t);
}
function tB(e, t) {
    throw Error(E(e, t));
}
