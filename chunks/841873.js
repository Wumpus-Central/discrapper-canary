"use strict";
let i;
function r(e) {
    i = e;
}
n.d(t, {
    BF: () => ti,
    CF: () => ta,
    CI: () => tg,
    DS: () => e0,
    Dn: () => eY,
    E1: () => eq,
    EH: () => eV,
    FH: () => Q,
    FP: () => em,
    Fs: () => eT,
    GQ: () => tf,
    GZ: () => k,
    Gu: () => tM,
    HB: () => e4,
    HS: () => eg,
    Hz: () => eS,
    Jp: () => J,
    LC: () => tS,
    LM: () => tE,
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
    Py: () => tU,
    QH: () => ed,
    QR: () => tL,
    Qg: () => tI,
    Qn: () => tB,
    RG: () => ek,
    RK: () => eE,
    RR: () => eD,
    RX: () => ef,
    Rj: () => tO,
    Ry: () => eR,
    SJ: () => eN,
    Sc: () => tC,
    Tb: () => q,
    Tp: () => tp,
    U8: () => tx,
    Ux: () => es,
    Vr: () => eG,
    Xb: () => ec,
    Xc: () => en,
    Y6: () => t_,
    YN: () => eb,
    ZA: () => j,
    ZJ: () => F,
    _U: () => X,
    _h: () => tn,
    _i: () => Z,
    _m: () => eZ,
    aI: () => eM,
    bL: () => tb,
    c6: () => eL,
    cV: () => W,
    ce: () => tA,
    cy: () => et,
    dS: () => eJ,
    dz: () => ep,
    eF: () => tT,
    eI: () => eO,
    eT: () => x,
    eW: () => ev,
    fb: () => tu,
    gG: () => eI,
    gM: () => $,
    gR: () => e_,
    hI: () => eF,
    he: () => eB,
    iA: () => e5,
    ii: () => to,
    j1: () => eK,
    jn: () => ez,
    ju: () => e2,
    k2: () => eX,
    k4: () => eH,
    kK: () => td,
    l0: () => tr,
    lI: () => r,
    n8: () => z,
    ni: () => tN,
    nv: () => ty,
    nx: () => M,
    o: () => eo,
    p8: () => e3,
    pD: () => eW,
    qN: () => tF,
    qv: () => tw,
    rf: () => C,
    rk: () => tt,
    rl: () => tv,
    s5: () => eh,
    sQ: () => el,
    sW: () => tk,
    ss: () => ts,
    t7: () => y,
    tZ: () => e$,
    uo: () => eC,
    uw: () => e9,
    v: () => ew,
    v2: () => B,
    vF: () => ey,
    vU: () => tP,
    vV: () => ex,
    vb: () => N,
    w2: () => e7,
    w6: () => tl,
    w9: () => er,
    wH: () => ei,
    wJ: () => eQ,
    wd: () => eU,
    x0: () => tc,
    x6: () => ee,
    xV: () => th,
    xy: () => T,
    yc: () => tV,
    yq: () => ej,
    zE: () => tR,
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
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(i.memory.buffer)), a;
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
            i = t(n.length, 1) >>> 0;
        return (
            o()
                .subarray(i, i + n.length)
                .set(n),
            (s = n.length),
            i
        );
    }
    let i = e.length,
        r = t(i, 1) >>> 0,
        a = o(),
        c = 0;
    for (; c < i; c++) {
        let t = e.charCodeAt(c);
        if (t > 127) break;
        a[r + c] = t;
    }
    if (c !== i) {
        0 !== c && (e = e.slice(c)), (r = n(r, i, (i = c + 3 * e.length), 1) >>> 0);
        let t = u(e, o().subarray(r + c, r + i));
        (c += t.written), (r = n(r, i, c, 1) >>> 0);
    }
    return (s = c), r;
}
let d = null;
function _() {
    return (
        (null === d || !0 === d.buffer.detached || (void 0 === d.buffer.detached && d.buffer !== i.memory.buffer)) &&
            (d = new DataView(i.memory.buffer)),
        d
    );
}
let f = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
function h(e, t) {
    return (e >>>= 0), f.decode(o().subarray(e, e + t));
}
function p(e) {
    let t = i.__externref_table_alloc();
    return i.__wbindgen_export_4.set(t, e), t;
}
function E(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = p(t);
        i.__wbindgen_exn_store(e);
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
              i.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function A(e, t, n, r) {
    let s = { a: e, b: t, cnt: 1, dtor: n },
        a = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            s.cnt++;
            let a = s.a;
            s.a = 0;
            try {
                return r(a, s.b, ...t);
            } finally {
                0 == --s.cnt ? (i.__wbindgen_export_5.get(s.dtor)(a, s.b), g.unregister(s)) : (s.a = a);
            }
        };
    return (a.original = s), g.register(a, s, s), a;
}
function I(e) {
    let t = i.__wbindgen_export_4.get(e);
    return i.__externref_table_dealloc(e), t;
}
function T(e) {
    let t, n;
    try {
        let r = i.generateLaunchSignature(e);
        return (t = r[0]), (n = r[1]), h(r[0], r[1]);
    } finally {
        i.__wbindgen_free(t, n, 1);
    }
}
function S() {
    return i.initLibdiscore();
}
function N() {
    i.crash();
}
function y(e, t) {
    return i.rustMultiply(e, t);
}
function C(e, t, n, r, s) {
    i.installLogCallback(e, t, n, r, s);
}
function v(e, t) {
    i._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}
function O(e, t) {
    i._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(
        e,
        t,
    );
}
function R(e, t, n) {
    i.closure736_externref_shim(e, t, n);
}
let b = ["bytes"],
    D = ["omit", "same-origin", "include"],
    L = ["same-origin", "no-cors", "cors", "navigate"],
    w =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class M {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), w.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            r = s,
            a = i.blockeddomainsstore_isBlockedDomain(n, r);
        if (a[3]) throw I(a[2]);
        return 0 !== a[0] && ((t = h(a[0], a[1]).slice()), i.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = s,
            r = i.blockeddomainsstore_startFetchingBlockedDomains(t, n);
        if (r[1]) throw I(r[0]);
    }
}
let P =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_experimentcacher_free(e >>> 0, 1));
class x {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), P.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = s,
            r = i.experimentcacher_getConfig(t, n);
        if (r[2]) throw I(r[1]);
        return 0 === r[0] ? void 0 : W.__wrap(r[0]);
    }
    static clearCache() {
        let e = i.experimentcacher_clearCache();
        if (e[1]) throw I(e[0]);
    }
    static flushToCache(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = s,
            r = i.experimentcacher_flushToCache(t, n);
        if (r[1]) throw I(r[0]);
    }
}
let U =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_fluxapi_free(e >>> 0, 1));
class k {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), U.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
        let t = i.fluxapi_connectStore(this.__wbg_ptr, e);
        if (t[2]) throw I(t[1]);
        return I(t[0]);
    }
    dispatchAction(e, t) {
        let n = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            r = s;
        return i.fluxapi_dispatchAction(this.__wbg_ptr, n, r, t);
    }
    flushReplicationStates() {
        return i.fluxapi_flushReplicationStates(this.__wbg_ptr);
    }
    getRegisteredActionTypes() {
        return i.fluxapi_getRegisteredActionTypes(this.__wbg_ptr);
    }
    findStoresThatCanHandleActionType(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = s;
        return i.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
        const e = i.fluxapi_new();
        return (this.__wbg_ptr = e >>> 0), U.register(this, this.__wbg_ptr, this), this;
    }
}
let G =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class F {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), G.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_intounderlyingbytesource_free(e, 0);
    }
    get autoAllocateChunkSize() {
        return i.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
    }
    pull(e) {
        return i.intounderlyingbytesource_pull(this.__wbg_ptr, e);
    }
    start(e) {
        i.intounderlyingbytesource_start(this.__wbg_ptr, e);
    }
    get type() {
        return b[i.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        i.intounderlyingbytesource_cancel(e);
    }
}
let V =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_intounderlyingsink_free(e >>> 0, 1));
class B {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), V.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_intounderlyingsink_free(e, 0);
    }
    abort(e) {
        let t = this.__destroy_into_raw();
        return i.intounderlyingsink_abort(t, e);
    }
    close() {
        let e = this.__destroy_into_raw();
        return i.intounderlyingsink_close(e);
    }
    write(e) {
        return i.intounderlyingsink_write(this.__wbg_ptr, e);
    }
}
let H =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_intounderlyingsource_free(e >>> 0, 1));
class j {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), H.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_intounderlyingsource_free(e, 0);
    }
    pull(e) {
        return i.intounderlyingsource_pull(this.__wbg_ptr, e);
    }
    cancel() {
        let e = this.__destroy_into_raw();
        i.intounderlyingsource_cancel(e);
    }
}
let Y =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class W {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(W.prototype);
        return (t.__wbg_ptr = e), Y.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Y.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_wasmcacheableexperimentconfig_free(e, 0);
    }
    get treatmentId() {
        return i.__wbg_get_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr);
    }
    set treatmentId(e) {
        i.__wbg_set_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr, e);
    }
}
function K(e, t) {
    let n = c(String(t), i.__wbindgen_malloc, i.__wbindgen_realloc),
        r = s;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function z(e, t) {
    e.abort(t);
}
function $(e) {
    e.abort();
}
function q() {
    return E(function (e, t, n, i, r) {
        e.append(h(t, n), h(i, r));
    }, arguments);
}
function Z() {
    return E(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function X(e) {
    return e.buffer;
}
function Q(e) {
    return e.buffer;
}
function J(e) {
    let t = e.byobRequest;
    return m(t) ? 0 : p(t);
}
function ee(e) {
    return e.byteLength;
}
function et(e) {
    return e.byteOffset;
}
function en() {
    return E(function (e) {
        return e.caches;
    }, arguments);
}
function ei() {
    return E(function (e, t) {
        return e.call(t);
    }, arguments);
}
function er() {
    return E(function (e, t, n) {
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
    return E(function (e) {
        e.close();
    }, arguments);
}
function el() {
    return E(function (e) {
        e.close();
    }, arguments);
}
function eu(e, t) {
    return e.delete(t);
}
function ec(e) {
    return e.done;
}
function ed() {
    return E(function (e, t) {
        e.enqueue(t);
    }, arguments);
}
function e_(e, t) {
    return e.fetch(t);
}
function ef(e) {
    return fetch(e);
}
function eh() {
    return E(function (e, t) {
        var n;
        globalThis.crypto.getRandomValues(((n = e >>> 0), o().subarray(n / 1, n / 1 + t)));
    }, arguments);
}
function ep() {
    return E(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function eE(e, t) {
    return e[t >>> 0];
}
function em(e, t) {
    return e[t];
}
function eg() {
    return E(function (e, t) {
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
function eN(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ey(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eC(e) {
    return Array.isArray(e);
}
function ev() {
    return Symbol.iterator;
}
function eO(e) {
    return e.length;
}
function eR(e) {
    return e.length;
}
function eb(e, t) {
    return e.match(t);
}
function eD() {
    return E(function () {
        return new Headers();
    }, arguments);
}
function eL(e, t) {
    try {
        var n = { a: e, b: t };
        return new Promise((e, t) => {
            let r = n.a;
            n.a = 0;
            try {
                var s;
                return (s = n.b), void i.closure775_externref_shim(r, s, e, t);
            } finally {
                n.a = r;
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
function ex(e) {
    return new Uint8Array(e);
}
function eU(e, t) {
    return Error(h(e, t));
}
function ek() {
    return E(function () {
        return new AbortController();
    }, arguments);
}
function eG(e, t) {
    return Function(h(e, t));
}
function eF(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eV() {
    return E(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eB() {
    return E(function (e, t, n) {
        return new Request(h(e, t), n);
    }, arguments);
}
function eH() {
    return E(function (e) {
        return new Blob(e);
    }, arguments);
}
function ej(e) {
    return e.next;
}
function eY() {
    return E(function (e) {
        return e.next();
    }, arguments);
}
function eW(e) {
    return e.now();
}
function eK(e, t, n) {
    return e.open(h(t, n));
}
function ez(e) {
    let t = e.performance;
    return m(t) ? 0 : p(t);
}
function e$(e, t) {
    return e.push(t);
}
function eq(e, t, n) {
    return e.put(t, n);
}
function eZ(e) {
    queueMicrotask(e);
}
function eX(e) {
    return e.queueMicrotask;
}
function eQ(e) {
    return Promise.resolve(e);
}
function eJ() {
    return E(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}
function e0(e, t) {
    return setTimeout(e, t);
}
function e1() {
    return E(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function e2() {
    return E(function (e, t, n, i, r) {
        e.set(h(t, n), h(i, r));
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
    return E(function (e, t, n) {
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
    e.method = h(t, n);
}
function ti(e, t) {
    e.mode = L[t];
}
function tr(e, t) {
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
    return m(e) ? 0 : p(e);
}
function tl() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return m(e) ? 0 : p(e);
}
function tu() {
    let e = "u" < typeof self ? null : self;
    return m(e) ? 0 : p(e);
}
function tc() {
    let e = "u" < typeof window ? null : window;
    return m(e) ? 0 : p(e);
}
function td(e) {
    return e.status;
}
function t_() {
    return E(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function tf(e, t) {
    return e.then(t);
}
function th(e, t, n) {
    return e.then(t, n);
}
function tp(e, t) {
    let n = c(t.url, i.__wbindgen_malloc, i.__wbindgen_realloc),
        r = s;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function tE(e) {
    return e.value;
}
function tm(e) {
    let t = e.view;
    return m(t) ? 0 : p(t);
}
function tg(e, t) {
    console.warn(h(e, t));
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
function tN(e, t, n) {
    return A(e, t, 553, v);
}
function ty(e, t, n) {
    return A(e, t, 593, O);
}
function tC(e, t, n) {
    return A(e, t, 737, R);
}
function tv(e, t) {
    let n = c(
            (function e(t) {
                let n,
                    i = typeof t;
                if ("number" == i || "boolean" == i || null == t) return `${t}`;
                if ("string" == i) return `"${t}"`;
                if ("symbol" == i) {
                    let e = t.description;
                    return null == e ? "Symbol" : `Symbol(${e})`;
                }
                if ("function" == i) {
                    let e = t.name;
                    return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                }
                if (Array.isArray(t)) {
                    let n = t.length,
                        i = "[";
                    n > 0 && (i += e(t[0]));
                    for (let r = 1; r < n; r++) i += ", " + e(t[r]);
                    return i + "]";
                }
                let r = /\[object ([^\]]+)\]/.exec(toString.call(t));
                if (!r || !(r.length > 1)) return toString.call(t);
                if ("Object" == (n = r[1]))
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
            i.__wbindgen_malloc,
            i.__wbindgen_realloc,
        ),
        r = s;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function tO(e, t) {
    return Error(h(e, t));
}
function tR(e, t) {
    return e in t;
}
function tb() {
    let e = i.__wbindgen_export_4,
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
function tx(e, t) {
    return e == t;
}
function tU() {
    return i.memory;
}
function tk(e, t) {
    let n = "number" == typeof t ? t : void 0;
    _().setFloat64(e + 8, m(n) ? 0 : n, !0), _().setInt32(e + 0, !m(n), !0);
}
function tG(e) {
    return e;
}
function tF(e, t) {
    let n = "string" == typeof t ? t : void 0;
    var r = m(n) ? 0 : c(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
        a = s;
    _().setInt32(e + 4, a, !0), _().setInt32(e + 0, r, !0);
}
function tV(e, t) {
    return h(e, t);
}
function tB(e, t) {
    throw Error(h(e, t));
}
