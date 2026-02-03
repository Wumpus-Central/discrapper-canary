let r;

function i(e) {
    r = e;
}
n.d(t, {
    BF: () => ta,
    CF: () => tl,
    CI: () => tb,
    DS: () => e2,
    Dn: () => eK,
    E1: () => eX,
    EH: () => eB,
    FH: () => et,
    FP: () => ey,
    Fs: () => eA,
    GQ: () => th,
    GZ: () => V,
    Gu: () => tM,
    HB: () => e7,
    HS: () => eb,
    Hz: () => eI,
    Jp: () => en,
    LC: () => tI,
    LM: () => tE,
    M2: () => ej,
    Mo: () => eO,
    N8: () => tV,
    ND: () => ec,
    NG: () => e3,
    NJ: () => e5,
    Ng: () => ty,
    Nh: () => te,
    Nv: () => tT,
    Oy: () => Z,
    PJ: () => tn,
    PR: () => tD,
    Ph: () => A,
    Py: () => tU,
    QH: () => ep,
    QR: () => tL,
    Qg: () => tv,
    Qn: () => tH,
    RG: () => eG,
    RK: () => eE,
    RR: () => eD,
    RX: () => eh,
    Rj: () => tw,
    Ry: () => eR,
    SJ: () => eS,
    Tb: () => J,
    Tp: () => tg,
    U8: () => tk,
    Ux: () => el,
    Vr: () => eV,
    Xb: () => ef,
    Xc: () => ea,
    Y6: () => t_,
    YN: () => eP,
    ZA: () => K,
    ZJ: () => B,
    _U: () => ee,
    _h: () => ti,
    _i: () => $,
    _m: () => eJ,
    aI: () => eM,
    bL: () => tP,
    c6: () => eL,
    cV: () => q,
    ce: () => tO,
    cy: () => ei,
    dM: () => tS,
    dS: () => e1,
    dz: () => eg,
    eF: () => tA,
    eI: () => ew,
    eT: () => U,
    eW: () => eN,
    fb: () => td,
    gG: () => ev,
    gM: () => X,
    gR: () => e_,
    gx: () => tC,
    hI: () => eF,
    he: () => eH,
    iA: () => e8,
    ii: () => tc,
    j1: () => eq,
    jn: () => eZ,
    ju: () => e6,
    k2: () => e$,
    k4: () => eY,
    kK: () => tp,
    l0: () => to,
    lI: () => i,
    n8: () => Q,
    nx: () => j,
    o: () => eu,
    p8: () => e4,
    pD: () => ez,
    qN: () => tF,
    qv: () => tx,
    rf: () => T,
    rk: () => tr,
    rl: () => tN,
    s5: () => em,
    sQ: () => ed,
    sW: () => tG,
    ss: () => ts,
    t7: () => S,
    tZ: () => eQ,
    uo: () => eC,
    uw: () => tt,
    v: () => ex,
    v2: () => Y,
    vF: () => eT,
    vU: () => tj,
    vV: () => ek,
    vb: () => I,
    w2: () => e9,
    w6: () => tu,
    w9: () => es,
    wH: () => eo,
    wJ: () => e0,
    wd: () => eU,
    x0: () => tf,
    x6: () => er,
    xV: () => tm,
    xy: () => v,
    yc: () => tB,
    yq: () => eW,
    zE: () => tR,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048),
    n(228524),
    n(747238),
    n(457529),
    n(65821),
    n(734808),
    n(108757),
    n(321073),
    n(192585),
    (e = n.hmd(e));
let a = 0,
    o = null;

function s() {
    return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
}
let l = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)("utf-8"),
    c =
        "function" == typeof l.encodeInto
            ? function (e, t) {
                  return l.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = l.encode(e);
                  return (
                      t.set(n),
                      {
                          read: e.length,
                          written: n.length,
                      }
                  );
              };

function u(e, t, n) {
    if (void 0 === n) {
        let n = l.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            s()
                .subarray(r, r + n.length)
                .set(n),
            (a = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        o = s(),
        u = 0;
    for (; u < r; u++) {
        let t = e.charCodeAt(u);
        if (t > 127) break;
        o[i + u] = t;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (i = n(i, r, (r = u + 3 * e.length), 1) >>> 0);
        let t = c(e, s().subarray(i + u, i + r));
        (u += t.written), (i = n(i, r, u, 1) >>> 0);
    }
    return (a = u), i;
}
let d = null;

function f() {
    return (
        (null === d || !0 === d.buffer.detached || (void 0 === d.buffer.detached && d.buffer !== r.memory.buffer)) &&
            (d = new DataView(r.memory.buffer)),
        d
    );
}
let p = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});

function _(e, t) {
    return (e >>>= 0), p.decode(s().subarray(e, e + t));
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

function g(e) {
    return null == e;
}

function E(e, t) {
    return (e >>>= 0), s().subarray(e / 1, e / 1 + t);
}
p.decode();
let y =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });

function b(e, t, n, i) {
    let a = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n,
        },
        o = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.cnt++;
            let o = a.a;
            a.a = 0;
            try {
                return i(o, a.b, ...t);
            } finally {
                0 == --a.cnt ? (r.__wbindgen_export_5.get(a.dtor)(o, a.b), y.unregister(a)) : (a.a = o);
            }
        };
    return (o.original = a), y.register(o, a, a), o;
}

function O(e) {
    let t,
        n = typeof e;
    if ("number" == n || "boolean" == n || null == e) return "".concat(e);
    if ("string" == n) return '"'.concat(e, '"');
    if ("symbol" == n) {
        let t = e.description;
        return null == t ? "Symbol" : "Symbol(".concat(t, ")");
    }
    if ("function" == n) {
        let t = e.name;
        return "string" == typeof t && t.length > 0 ? "Function(".concat(t, ")") : "Function";
    }
    if (Array.isArray(e)) {
        let t = e.length,
            n = "[";
        t > 0 && (n += O(e[0]));
        for (let r = 1; r < t; r++) n += ", " + O(e[r]);
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
    return e instanceof Error ? "".concat(e.name, ": ").concat(e.message, "\n").concat(e.stack) : t;
}

function v(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return (t = i[0]), (n = i[1]), _(i[0], i[1]);
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}

function A() {
    return r.initLibdiscore();
}

function I() {
    r.crash();
}

function S(e, t) {
    return r.rustMultiply(e, t);
}

function T(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}

function C(e) {
    let t = r.__wbindgen_export_4.get(e);
    return r.__externref_table_dealloc(e), t;
}

function N(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}

function w(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(
        e,
        t,
    );
}

function R(e, t, n) {
    r.closure628_externref_shim(e, t, n);
}

function P(e, t, n, i) {
    r.closure664_externref_shim(e, t, n, i);
}
let D = ["bytes"],
    L = ["omit", "same-origin", "include"],
    x = ["same-origin", "no-cors", "cors", "navigate"],
    M =
        "u" < typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {},
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class j {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), M.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = a,
            o = r.blockeddomainsstore_isBlockedDomain(n, i);
        return 0 !== o[0] && ((t = _(o[0], o[1]).slice()), r.__wbindgen_free(o[0], +o[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = a;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
let k =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class U {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), k.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = a,
            i = r.experimentcacher_getConfig(t, n);
        return 0 === i ? void 0 : q.__wrap(i);
    }
    static flushToCache(e) {
        let t = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = a;
        r.experimentcacher_flushToCache(t, n);
    }
}
let G =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_fluxapi_free(e >>> 0, 1));
class V {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), G.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_fluxapi_free(e, 0);
    }
    connectStore(e) {
        let t = r.fluxapi_connectStore(this.__wbg_ptr, e);
        if (t[2]) throw C(t[1]);
        return C(t[0]);
    }
    dispatchAction(e, t) {
        let n = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = a;
        return r.fluxapi_dispatchAction(this.__wbg_ptr, n, i, t);
    }
    flushReplicationStates() {
        return r.fluxapi_flushReplicationStates(this.__wbg_ptr);
    }
    getRegisteredActionTypes() {
        return r.fluxapi_getRegisteredActionTypes(this.__wbg_ptr);
    }
    findStoresThatCanHandleActionType(e) {
        let t = u(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = a;
        return r.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, t, n);
    }
    constructor() {
        const e = r.fluxapi_new();
        return (this.__wbg_ptr = e >>> 0), G.register(this, this.__wbg_ptr, this), this;
    }
}
let F =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class B {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), F.unregister(this), e;
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
        return D[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingbytesource_cancel(e);
    }
}
let H =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
class Y {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), H.unregister(this), e;
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
        ? {
              register: () => {},
              unregister: () => {},
          }
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
let z =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class q {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(q.prototype);
        return (t.__wbg_ptr = e), z.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), z.unregister(this), e;
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

function Z(e, t) {
    let n = u(String(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = a;
    f().setInt32(e + 4, i, !0), f().setInt32(e + 0, n, !0);
}

function Q(e, t) {
    e.abort(t);
}

function X(e) {
    e.abort();
}

function J() {
    return m(function (e, t, n, r, i) {
        e.append(_(t, n), _(r, i));
    }, arguments);
}

function $() {
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
    return g(t) ? 0 : h(t);
}

function er(e) {
    return e.byteLength;
}

function ei(e) {
    return e.byteOffset;
}

function ea() {
    return m(function (e) {
        return e.caches;
    }, arguments);
}

function eo() {
    return m(function (e, t) {
        return e.call(t);
    }, arguments);
}

function es() {
    return m(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}

function el(e) {
    return clearTimeout(e);
}

function ec(e) {
    return clearTimeout(e);
}

function eu() {
    return m(function (e) {
        e.close();
    }, arguments);
}

function ed() {
    return m(function (e) {
        e.close();
    }, arguments);
}

function ef(e) {
    return e.done;
}

function ep() {
    return m(function (e, t) {
        e.enqueue(t);
    }, arguments);
}

function e_(e, t) {
    return e.fetch(t);
}

function eh(e) {
    return fetch(e);
}

function em() {
    return m(function (e, t) {
        globalThis.crypto.getRandomValues(E(e, t));
    }, arguments);
}

function eg() {
    return m(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}

function eE(e, t) {
    return e[t >>> 0];
}

function ey(e, t) {
    return e[t];
}

function eb() {
    return m(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}

function eO(e) {
    return e.headers;
}

function ev(e) {
    let t;
    try {
        t = e instanceof ArrayBuffer;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eA(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eI(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eS(e) {
    let t;
    try {
        t = e instanceof Uint8Array;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eT(e) {
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

function eN() {
    return Symbol.iterator;
}

function ew(e) {
    return e.length;
}

function eR(e) {
    return e.length;
}

function eP(e, t) {
    return e.match(t);
}

function eD() {
    return m(function () {
        return new Headers();
    }, arguments);
}

function eL(e, t) {
    try {
        var n = {
                a: e,
                b: t,
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return P(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}

function ex() {
    return {};
}

function eM() {
    return new Map();
}

function ej() {
    return [];
}

function ek(e) {
    return new Uint8Array(e);
}

function eU(e, t) {
    return Error(_(e, t));
}

function eG() {
    return m(function () {
        return new AbortController();
    }, arguments);
}

function eV(e, t) {
    return Function(_(e, t));
}

function eF(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}

function eB() {
    return m(function (e, t) {
        return new Response(e, t);
    }, arguments);
}

function eH() {
    return m(function (e, t, n) {
        return new Request(_(e, t), n);
    }, arguments);
}

function eY() {
    return m(function (e) {
        return new Blob(e);
    }, arguments);
}

function eW(e) {
    return e.next;
}

function eK() {
    return m(function (e) {
        return e.next();
    }, arguments);
}

function ez(e) {
    return e.now();
}

function eq(e, t, n) {
    return e.open(_(t, n));
}

function eZ(e) {
    let t = e.performance;
    return g(t) ? 0 : h(t);
}

function eQ(e, t) {
    return e.push(t);
}

function eX(e, t, n) {
    return e.put(t, n);
}

function eJ(e) {
    queueMicrotask(e);
}

function e$(e) {
    return e.queueMicrotask;
}

function e0(e) {
    return Promise.resolve(e);
}

function e1() {
    return m(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}

function e2(e, t) {
    return setTimeout(e, t);
}

function e3() {
    return m(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}

function e6() {
    return m(function (e, t, n, r, i) {
        e.set(_(t, n), _(r, i));
    }, arguments);
}

function e4(e, t, n) {
    e[t >>> 0] = n;
}

function e5(e, t, n) {
    e[t] = n;
}

function e7(e, t, n) {
    e.set(t, n >>> 0);
}

function e8(e, t, n) {
    return e.set(t, n);
}

function e9() {
    return m(function (e, t, n) {
        return Reflect.set(e, t, n);
    }, arguments);
}

function te(e, t) {
    e.body = t;
}

function tt(e, t) {
    e.credentials = L[t];
}

function tn(e, t) {
    e.headers = t;
}

function tr(e, t) {
    e.headers = t;
}

function ti(e, t, n) {
    e.method = _(t, n);
}

function ta(e, t) {
    e.mode = x[t];
}

function to(e, t) {
    e.signal = t;
}

function ts(e, t) {
    e.status = t;
}

function tl(e) {
    return e.signal;
}

function tc() {
    let e = void 0 === n.g ? null : n.g;
    return g(e) ? 0 : h(e);
}

function tu() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return g(e) ? 0 : h(e);
}

function td() {
    let e = "u" < typeof self ? null : self;
    return g(e) ? 0 : h(e);
}

function tf() {
    let e = "u" < typeof window ? null : window;
    return g(e) ? 0 : h(e);
}

function tp(e) {
    return e.status;
}

function t_() {
    return m(function (e) {
        return JSON.stringify(e);
    }, arguments);
}

function th(e, t) {
    return e.then(t);
}

function tm(e, t, n) {
    return e.then(t, n);
}

function tg(e, t) {
    let n = u(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = a;
    f().setInt32(e + 4, i, !0), f().setInt32(e + 0, n, !0);
}

function tE(e) {
    return e.value;
}

function ty(e) {
    let t = e.view;
    return g(t) ? 0 : h(t);
}

function tb(e, t) {
    console.warn(_(e, t));
}

function tO(e) {
    return e;
}

function tv(e) {
    return BigInt.asUintN(64, e);
}

function tA(e) {
    let t = e;
    return "boolean" == typeof t ? +!!t : 2;
}

function tI(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}

function tS(e, t, n) {
    return b(e, t, 442, N);
}

function tT(e, t, n) {
    return b(e, t, 482, w);
}

function tC(e, t, n) {
    return b(e, t, 629, R);
}

function tN(e, t) {
    let n = u(O(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = a;
    f().setInt32(e + 4, i, !0), f().setInt32(e + 0, n, !0);
}

function tw(e, t) {
    return Error(_(e, t));
}

function tR(e, t) {
    return e in t;
}

function tP() {
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

function tx(e) {
    let t = e;
    return "object" == typeof t && null !== t;
}

function tM(e) {
    return "string" == typeof e;
}

function tj(e) {
    return void 0 === e;
}

function tk(e, t) {
    return e == t;
}

function tU() {
    return r.memory;
}

function tG(e, t) {
    let n = t,
        r = "number" == typeof n ? n : void 0;
    f().setFloat64(e + 8, g(r) ? 0 : r, !0), f().setInt32(e + 0, !g(r), !0);
}

function tV(e) {
    return e;
}

function tF(e, t) {
    let n = t,
        i = "string" == typeof n ? n : void 0;
    var o = g(i) ? 0 : u(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        s = a;
    f().setInt32(e + 4, s, !0), f().setInt32(e + 0, o, !0);
}

function tB(e, t) {
    return _(e, t);
}

function tH(e, t) {
    throw Error(_(e, t));
}
