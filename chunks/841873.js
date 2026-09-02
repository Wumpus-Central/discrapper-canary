"use strict";
let i;
function r(e) {
    i = e;
}
n.d(t, {
    BF: () => ti,
    CF: () => ts,
    CI: () => tp,
    DS: () => e0,
    Dn: () => eW,
    E1: () => eq,
    EH: () => eV,
    FH: () => Q,
    FP: () => ef,
    Fs: () => eg,
    GQ: () => tE,
    GZ: () => x,
    Gu: () => tP,
    HB: () => e4,
    HS: () => ep,
    Hq: () => tC,
    Hz: () => eS,
    Jp: () => J,
    LC: () => tS,
    LM: () => tI,
    M2: () => eU,
    Mo: () => eT,
    N8: () => tk,
    ND: () => es,
    NG: () => e1,
    NJ: () => e5,
    Ng: () => tf,
    Nh: () => e8,
    O$: () => ed,
    Oy: () => K,
    PJ: () => te,
    PR: () => tv,
    Ph: () => N,
    Py: () => tG,
    QH: () => eu,
    QR: () => tb,
    Qg: () => tm,
    Qn: () => tB,
    RG: () => ex,
    RK: () => eI,
    RR: () => ev,
    RX: () => eE,
    Rj: () => tL,
    Ry: () => ey,
    SJ: () => eN,
    Tb: () => q,
    Tp: () => th,
    U8: () => tw,
    Ux: () => ea,
    Vr: () => ek,
    Xb: () => ec,
    Xc: () => en,
    Y6: () => t_,
    YN: () => eD,
    ZA: () => j,
    ZJ: () => F,
    _U: () => X,
    _h: () => tn,
    _i: () => Z,
    _m: () => eZ,
    aI: () => eP,
    bL: () => tD,
    c6: () => eb,
    cV: () => Y,
    ce: () => tT,
    cy: () => et,
    dS: () => eJ,
    dz: () => eh,
    eF: () => tg,
    eI: () => eL,
    eT: () => w,
    eW: () => eR,
    fb: () => td,
    gG: () => em,
    gM: () => z,
    gR: () => e_,
    hI: () => eF,
    he: () => eB,
    iA: () => e6,
    ii: () => tl,
    j1: () => eK,
    jn: () => e$,
    ju: () => e2,
    k2: () => eX,
    k4: () => eH,
    kK: () => tu,
    l0: () => tr,
    lI: () => r,
    n8: () => $,
    nx: () => P,
    o: () => el,
    p8: () => e3,
    pD: () => eY,
    qN: () => tF,
    qg: () => tN,
    qv: () => tM,
    rR: () => tO,
    rf: () => m,
    rk: () => tt,
    rl: () => tR,
    s5: () => eA,
    sQ: () => eo,
    sW: () => tx,
    ss: () => ta,
    t7: () => O,
    tZ: () => ez,
    uo: () => eO,
    uw: () => e9,
    v: () => eM,
    v2: () => B,
    vF: () => eC,
    vU: () => tU,
    vV: () => ew,
    vb: () => C,
    w2: () => e7,
    w6: () => to,
    w9: () => er,
    wH: () => ei,
    wJ: () => eQ,
    wd: () => eG,
    x0: () => tc,
    x6: () => ee,
    xV: () => tA,
    xy: () => S,
    yc: () => tV,
    yq: () => ej,
    zE: () => ty,
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
let a = 0,
    s = null;
function l() {
    return (null === s || 0 === s.byteLength) && (s = new Uint8Array(i.memory.buffer)), s;
}
let o = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)("utf-8"),
    d =
        "function" == typeof o.encodeInto
            ? function (e, t) {
                  return o.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = o.encode(e);
                  return t.set(n), { read: e.length, written: n.length };
              };
function c(e, t, n) {
    if (void 0 === n) {
        let n = o.encode(e),
            i = t(n.length, 1) >>> 0;
        return (
            l()
                .subarray(i, i + n.length)
                .set(n),
            (a = n.length),
            i
        );
    }
    let i = e.length,
        r = t(i, 1) >>> 0,
        s = l(),
        c = 0;
    for (; c < i; c++) {
        let t = e.charCodeAt(c);
        if (t > 127) break;
        s[r + c] = t;
    }
    if (c !== i) {
        0 !== c && (e = e.slice(c)), (r = n(r, i, (i = c + 3 * e.length), 1) >>> 0);
        let t = d(e, l().subarray(r + c, r + i));
        (c += t.written), (r = n(r, i, c, 1) >>> 0);
    }
    return (a = c), r;
}
let u = null;
function _() {
    return (
        (null === u || !0 === u.buffer.detached || (void 0 === u.buffer.detached && u.buffer !== i.memory.buffer)) &&
            (u = new DataView(i.memory.buffer)),
        u
    );
}
let E = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
function A(e, t) {
    return (e >>>= 0), E.decode(l().subarray(e, e + t));
}
function h(e) {
    let t = i.__externref_table_alloc();
    return i.__wbindgen_export_4.set(t, e), t;
}
function I(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = h(t);
        i.__wbindgen_exn_store(e);
    }
}
function f(e) {
    return null == e;
}
E.decode();
let p =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => {
              i.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function T(e, t, n, r) {
    let a = { a: e, b: t, cnt: 1, dtor: n },
        s = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.cnt++;
            let s = a.a;
            a.a = 0;
            try {
                return r(s, a.b, ...t);
            } finally {
                0 == --a.cnt ? (i.__wbindgen_export_5.get(a.dtor)(s, a.b), p.unregister(a)) : (a.a = s);
            }
        };
    return (s.original = a), p.register(s, a, a), s;
}
function m(e, t, n, r, a) {
    i.installLogCallback(e, t, n, r, a);
}
function g(e) {
    let t = i.__wbindgen_export_4.get(e);
    return i.__externref_table_dealloc(e), t;
}
function S(e) {
    let t, n;
    try {
        let r = i.generateLaunchSignature(e);
        return (t = r[0]), (n = r[1]), A(r[0], r[1]);
    } finally {
        i.__wbindgen_free(t, n, 1);
    }
}
function N() {
    return i.initLibdiscore();
}
function C() {
    i.crash();
}
function O(e, t) {
    return i.rustMultiply(e, t);
}
function R(e, t) {
    i._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}
function L(e, t) {
    i._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(
        e,
        t,
    );
}
function y(e, t, n) {
    i.closure738_externref_shim(e, t, n);
}
let D = ["bytes"],
    v = ["omit", "same-origin", "include"],
    b = ["same-origin", "no-cors", "cors", "navigate"],
    M =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => i.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class P {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), M.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            r = a,
            s = i.blockeddomainsstore_isBlockedDomain(n, r);
        if (s[3]) throw g(s[2]);
        return 0 !== s[0] && ((t = A(s[0], s[1]).slice()), i.__wbindgen_free(s[0], +s[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = a,
            r = i.blockeddomainsstore_startFetchingBlockedDomains(t, n);
        if (r[1]) throw g(r[0]);
    }
}
let U =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_experimentcacher_free(e >>> 0, 1));
class w {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), U.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = a,
            r = i.experimentcacher_getConfig(t, n);
        if (r[2]) throw g(r[1]);
        return 0 === r[0] ? void 0 : Y.__wrap(r[0]);
    }
    static clearCache() {
        let e = i.experimentcacher_clearCache();
        if (e[1]) throw g(e[0]);
    }
    static flushToCache(e) {
        let t = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            n = a,
            r = i.experimentcacher_flushToCache(t, n);
        if (r[1]) throw g(r[0]);
    }
}
let G =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_fluxapi_free(e >>> 0, 1));
class x {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), G.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        i.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
        let t = i.fluxapi_connectStore(this.__wbg_ptr, e);
        if (t[2]) throw g(t[1]);
        return g(t[0]);
    }
    dispatchAction(e, t) {
        let n = c(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
            r = a;
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
            n = a;
        return i.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
        const e = i.fluxapi_new();
        return (this.__wbg_ptr = e >>> 0), G.register(this, this.__wbg_ptr, this), this;
    }
}
let k =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class F {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), k.unregister(this), e;
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
        return D[i.intounderlyingbytesource_type(this.__wbg_ptr)];
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
let W =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => i.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class Y {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(Y.prototype);
        return (t.__wbg_ptr = e), W.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), W.unregister(this), e;
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
        r = a;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function $(e, t) {
    e.abort(t);
}
function z(e) {
    e.abort();
}
function q() {
    return I(function (e, t, n, i, r) {
        e.append(A(t, n), A(i, r));
    }, arguments);
}
function Z() {
    return I(function (e) {
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
    return f(t) ? 0 : h(t);
}
function ee(e) {
    return e.byteLength;
}
function et(e) {
    return e.byteOffset;
}
function en() {
    return I(function (e) {
        return e.caches;
    }, arguments);
}
function ei() {
    return I(function (e, t) {
        return e.call(t);
    }, arguments);
}
function er() {
    return I(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function ea(e) {
    return clearTimeout(e);
}
function es(e) {
    return clearTimeout(e);
}
function el() {
    return I(function (e) {
        e.close();
    }, arguments);
}
function eo() {
    return I(function (e) {
        e.close();
    }, arguments);
}
function ed(e, t) {
    return e.delete(t);
}
function ec(e) {
    return e.done;
}
function eu() {
    return I(function (e, t) {
        e.enqueue(t);
    }, arguments);
}
function e_(e, t) {
    return e.fetch(t);
}
function eE(e) {
    return fetch(e);
}
function eA() {
    return I(function (e, t) {
        var n;
        globalThis.crypto.getRandomValues(((n = e >>> 0), l().subarray(n / 1, n / 1 + t)));
    }, arguments);
}
function eh() {
    return I(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function eI(e, t) {
    return e[t >>> 0];
}
function ef(e, t) {
    return e[t];
}
function ep() {
    return I(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function eT(e) {
    return e.headers;
}
function em(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eg(e) {
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
function eC(e) {
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
function eL(e) {
    return e.length;
}
function ey(e) {
    return e.length;
}
function eD(e, t) {
    return e.match(t);
}
function ev() {
    return I(function () {
        return new Headers();
    }, arguments);
}
function eb(e, t) {
    try {
        var n = { a: e, b: t };
        return new Promise((e, t) => {
            let r = n.a;
            n.a = 0;
            try {
                var a;
                return (a = n.b), void i.closure777_externref_shim(r, a, e, t);
            } finally {
                n.a = r;
            }
        });
    } finally {
        n.a = n.b = 0;
    }
}
function eM() {
    return {};
}
function eP() {
    return new Map();
}
function eU() {
    return [];
}
function ew(e) {
    return new Uint8Array(e);
}
function eG(e, t) {
    return Error(A(e, t));
}
function ex() {
    return I(function () {
        return new AbortController();
    }, arguments);
}
function ek(e, t) {
    return Function(A(e, t));
}
function eF(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eV() {
    return I(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eB() {
    return I(function (e, t, n) {
        return new Request(A(e, t), n);
    }, arguments);
}
function eH() {
    return I(function (e) {
        return new Blob(e);
    }, arguments);
}
function ej(e) {
    return e.next;
}
function eW() {
    return I(function (e) {
        return e.next();
    }, arguments);
}
function eY(e) {
    return e.now();
}
function eK(e, t, n) {
    return e.open(A(t, n));
}
function e$(e) {
    let t = e.performance;
    return f(t) ? 0 : h(t);
}
function ez(e, t) {
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
    return I(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}
function e0(e, t) {
    return setTimeout(e, t);
}
function e1() {
    return I(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function e2() {
    return I(function (e, t, n, i, r) {
        e.set(A(t, n), A(i, r));
    }, arguments);
}
function e3(e, t, n) {
    e[t >>> 0] = n;
}
function e5(e, t, n) {
    e[t] = n;
}
function e4(e, t, n) {
    e.set(t, n >>> 0);
}
function e6(e, t, n) {
    return e.set(t, n);
}
function e7() {
    return I(function (e, t, n) {
        return Reflect.set(e, t, n);
    }, arguments);
}
function e8(e, t) {
    e.body = t;
}
function e9(e, t) {
    e.credentials = v[t];
}
function te(e, t) {
    e.headers = t;
}
function tt(e, t) {
    e.headers = t;
}
function tn(e, t, n) {
    e.method = A(t, n);
}
function ti(e, t) {
    e.mode = b[t];
}
function tr(e, t) {
    e.signal = t;
}
function ta(e, t) {
    e.status = t;
}
function ts(e) {
    return e.signal;
}
function tl() {
    let e = void 0 === n.g ? null : n.g;
    return f(e) ? 0 : h(e);
}
function to() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return f(e) ? 0 : h(e);
}
function td() {
    let e = "u" < typeof self ? null : self;
    return f(e) ? 0 : h(e);
}
function tc() {
    let e = "u" < typeof window ? null : window;
    return f(e) ? 0 : h(e);
}
function tu(e) {
    return e.status;
}
function t_() {
    return I(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function tE(e, t) {
    return e.then(t);
}
function tA(e, t, n) {
    return e.then(t, n);
}
function th(e, t) {
    let n = c(t.url, i.__wbindgen_malloc, i.__wbindgen_realloc),
        r = a;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function tI(e) {
    return e.value;
}
function tf(e) {
    let t = e.view;
    return f(t) ? 0 : h(t);
}
function tp(e, t) {
    console.warn(A(e, t));
}
function tT(e) {
    return e;
}
function tm(e) {
    return BigInt.asUintN(64, e);
}
function tg(e) {
    return "boolean" == typeof e ? +!!e : 2;
}
function tS(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function tN(e, t, n) {
    return T(e, t, 555, R);
}
function tC(e, t, n) {
    return T(e, t, 595, L);
}
function tO(e, t, n) {
    return T(e, t, 739, y);
}
function tR(e, t) {
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
        r = a;
    _().setInt32(e + 4, r, !0), _().setInt32(e + 0, n, !0);
}
function tL(e, t) {
    return Error(A(e, t));
}
function ty(e, t) {
    return e in t;
}
function tD() {
    let e = i.__wbindgen_export_4,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function tv(e) {
    return "function" == typeof e;
}
function tb(e) {
    return null === e;
}
function tM(e) {
    return "object" == typeof e && null !== e;
}
function tP(e) {
    return "string" == typeof e;
}
function tU(e) {
    return void 0 === e;
}
function tw(e, t) {
    return e == t;
}
function tG() {
    return i.memory;
}
function tx(e, t) {
    let n = "number" == typeof t ? t : void 0;
    _().setFloat64(e + 8, f(n) ? 0 : n, !0), _().setInt32(e + 0, !f(n), !0);
}
function tk(e) {
    return e;
}
function tF(e, t) {
    let n = "string" == typeof t ? t : void 0;
    var r = f(n) ? 0 : c(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
        s = a;
    _().setInt32(e + 4, s, !0), _().setInt32(e + 0, r, !0);
}
function tV(e, t) {
    return A(e, t);
}
function tB(e, t) {
    throw Error(A(e, t));
}
