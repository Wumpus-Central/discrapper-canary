let r;

function i(e) {
    r = e;
}
n.d(t, {
    BF: () => e$,
    CF: () => e1,
    CI: () => tr,
    DS: () => eH,
    Dn: () => ej,
    E1: () => eU,
    EH: () => eP,
    FH: () => Q,
    Fs: () => em,
    GQ: () => e8,
    HB: () => eK,
    HS: () => e_,
    Hz: () => eg,
    Jp: () => $,
    LC: () => ti,
    LM: () => tt,
    M2: () => eI,
    Mo: () => eh,
    ND: () => ea,
    NG: () => eY,
    Ng: () => tn,
    Nh: () => ez,
    Oy: () => T,
    PJ: () => eX,
    PR: () => tu,
    Ph: () => S,
    Py: () => t_,
    QH: () => ec,
    QR: () => td,
    Qn: () => tg,
    RG: () => eN,
    RR: () => eA,
    RX: () => ed,
    TE: () => ta,
    Tb: () => q,
    Tp: () => te,
    Ux: () => ei,
    Vr: () => eR,
    Xb: () => el,
    Xc: () => et,
    Y6: () => e7,
    YN: () => eO,
    ZA: () => H,
    ZJ: () => G,
    _U: () => Z,
    _h: () => eQ,
    _i: () => X,
    _j: () => ts,
    _m: () => eG,
    bL: () => tc,
    c6: () => ev,
    cV: () => W,
    cy: () => ee,
    dS: () => eB,
    dz: () => ep,
    eI: () => ey,
    eT: () => k,
    eW: () => eb,
    fb: () => e6,
    gM: () => z,
    gR: () => eu,
    gV: () => to,
    hI: () => ew,
    he: () => eD,
    ii: () => e2,
    j1: () => eM,
    ju: () => eW,
    k2: () => eV,
    k4: () => ex,
    kK: () => e5,
    l0: () => eJ,
    lI: () => i,
    n8: () => K,
    nx: () => j,
    o: () => es,
    qN: () => th,
    qv: () => tf,
    rf: () => v,
    rk: () => eZ,
    rl: () => tl,
    s5: () => ef,
    sQ: () => eo,
    ss: () => e0,
    t7: () => I,
    tZ: () => ek,
    uw: () => eq,
    v: () => eS,
    v2: () => F,
    vF: () => eE,
    vU: () => tp,
    vV: () => eT,
    w6: () => e3,
    w9: () => er,
    wH: () => en,
    wJ: () => eF,
    wd: () => eC,
    x0: () => e4,
    x6: () => J,
    xV: () => e9,
    xy: () => A,
    yc: () => tm,
    yq: () => eL,
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
let a = new ("u" < typeof TextDecoder ? (0, e.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
a.decode();
let s = null;

function o() {
    return (null === s || 0 === s.byteLength) && (s = new Uint8Array(r.memory.buffer)), s;
}

function l(e, t) {
    return (e >>>= 0), a.decode(o().subarray(e, e + t));
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

function f(e, t) {
    return (e >>>= 0), o().subarray(e / 1, e / 1 + t);
}
let p = 0,
    _ = new ("u" < typeof TextEncoder ? (0, e.require)("util").TextEncoder : TextEncoder)("utf-8"),
    h =
        "function" == typeof _.encodeInto
            ? function (e, t) {
                  return _.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = _.encode(e);
                  return (
                      t.set(n),
                      {
                          read: e.length,
                          written: n.length,
                      }
                  );
              };

function m(e, t, n) {
    if (void 0 === n) {
        let n = _.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            o()
                .subarray(r, r + n.length)
                .set(n),
            (p = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        a = o(),
        s = 0;
    for (; s < r; s++) {
        let t = e.charCodeAt(s);
        if (t > 127) break;
        a[i + s] = t;
    }
    if (s !== r) {
        0 !== s && (e = e.slice(s)), (i = n(i, r, (r = s + 3 * e.length), 1) >>> 0);
        let t = h(e, o().subarray(i + s, i + r));
        (s += t.written), (i = n(i, r, s, 1) >>> 0);
    }
    return (p = s), i;
}
let g = null;

function E() {
    return (
        (null === g || !0 === g.buffer.detached || (void 0 === g.buffer.detached && g.buffer !== r.memory.buffer)) &&
            (g = new DataView(r.memory.buffer)),
        g
    );
}
let b =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });

function y(e, t, n, i) {
    let a = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n,
        },
        s = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.cnt++;
            let s = a.a;
            a.a = 0;
            try {
                return i(s, a.b, ...t);
            } finally {
                0 == --a.cnt ? (r.__wbindgen_export_5.get(a.dtor)(s, a.b), b.unregister(a)) : (a.a = s);
            }
        };
    return (s.original = a), b.register(s, a, a), s;
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

function A(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return (t = i[0]), (n = i[1]), l(i[0], i[1]);
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}

function v(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}

function S() {
    return r.initLibdiscore();
}

function I(e, t) {
    return r.rustMultiply(e, t);
}

function T() {
    r.crash();
}

function C(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(
        e,
        t,
    );
}

function N(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h458d4dbdc7d6e3c4(
        e,
        t,
    );
}

function R(e, t, n) {
    r.closure575_externref_shim(e, t, n);
}

function w(e, t, n, i) {
    r.closure611_externref_shim(e, t, n, i);
}
let P = ["bytes"],
    D = ["omit", "same-origin", "include"],
    x = ["same-origin", "no-cors", "cors", "navigate"],
    L =
        "u" < typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {},
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class j {
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
            n = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = p,
            a = r.blockeddomainsstore_isBlockedDomain(n, i);
        return 0 !== a[0] && ((t = l(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = p;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
let M =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class k {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), M.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = p,
            i = r.experimentcacher_getConfig(t, n);
        return 0 === i ? void 0 : W.__wrap(i);
    }
    static flushToCache(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = p;
        r.experimentcacher_flushToCache(t, n);
    }
}
let U =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
class G {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), U.unregister(this), e;
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
        return P[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingbytesource_cancel(e);
    }
}
let V =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
class F {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), V.unregister(this), e;
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
let B =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
class H {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), B.unregister(this), e;
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
let Y =
    "u" < typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
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
    e.abort(t);
}

function z(e) {
    e.abort();
}

function q() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}

function X() {
    return u(function (e) {
        return e.arrayBuffer();
    }, arguments);
}

function Z(e) {
    return e.buffer;
}

function Q(e) {
    return e.buffer;
}

function $(e) {
    let t = e.byobRequest;
    return d(t) ? 0 : c(t);
}

function J(e) {
    return e.byteLength;
}

function ee(e) {
    return e.byteOffset;
}

function et() {
    return u(function (e) {
        return e.caches;
    }, arguments);
}

function en() {
    return u(function (e, t) {
        return e.call(t);
    }, arguments);
}

function er() {
    return u(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}

function ei(e) {
    return clearTimeout(e);
}

function ea(e) {
    return clearTimeout(e);
}

function es() {
    return u(function (e) {
        e.close();
    }, arguments);
}

function eo() {
    return u(function (e) {
        e.close();
    }, arguments);
}

function el(e) {
    return e.done;
}

function ec() {
    return u(function (e, t) {
        e.enqueue(t);
    }, arguments);
}

function eu(e, t) {
    return e.fetch(t);
}

function ed(e) {
    return fetch(e);
}

function ef() {
    return u(function (e, t) {
        globalThis.crypto.getRandomValues(f(e, t));
    }, arguments);
}

function ep() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}

function e_() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}

function eh(e) {
    return e.headers;
}

function em(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eg(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eE(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}

function eb() {
    return Symbol.iterator;
}

function ey(e) {
    return e.length;
}

function eO(e, t) {
    return e.match(t);
}

function eA() {
    return u(function () {
        return new Headers();
    }, arguments);
}

function ev(e, t) {
    try {
        var n = {
                a: e,
                b: t,
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return w(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}

function eS() {
    return {};
}

function eI() {
    return [];
}

function eT(e) {
    return new Uint8Array(e);
}

function eC(e, t) {
    return Error(l(e, t));
}

function eN() {
    return u(function () {
        return new AbortController();
    }, arguments);
}

function eR(e, t) {
    return Function(l(e, t));
}

function ew(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}

function eP() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}

function eD() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}

function ex() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}

function eL(e) {
    return e.next;
}

function ej() {
    return u(function (e) {
        return e.next();
    }, arguments);
}

function eM(e, t, n) {
    return e.open(l(t, n));
}

function ek(e, t) {
    return e.push(t);
}

function eU(e, t, n) {
    return e.put(t, n);
}

function eG(e) {
    queueMicrotask(e);
}

function eV(e) {
    return e.queueMicrotask;
}

function eF(e) {
    return Promise.resolve(e);
}

function eB() {
    return u(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}

function eH(e, t) {
    return setTimeout(e, t);
}

function eY() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}

function eW() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}

function eK(e, t, n) {
    e.set(t, n >>> 0);
}

function ez(e, t) {
    e.body = t;
}

function eq(e, t) {
    e.credentials = D[t];
}

function eX(e, t) {
    e.headers = t;
}

function eZ(e, t) {
    e.headers = t;
}

function eQ(e, t, n) {
    e.method = l(t, n);
}

function e$(e, t) {
    e.mode = x[t];
}

function eJ(e, t) {
    e.signal = t;
}

function e0(e, t) {
    e.status = t;
}

function e1(e) {
    return e.signal;
}

function e2() {
    let e = void 0 === n.g ? null : n.g;
    return d(e) ? 0 : c(e);
}

function e3() {
    let e = "u" < typeof globalThis ? null : globalThis;
    return d(e) ? 0 : c(e);
}

function e6() {
    let e = "u" < typeof self ? null : self;
    return d(e) ? 0 : c(e);
}

function e4() {
    let e = "u" < typeof window ? null : window;
    return d(e) ? 0 : c(e);
}

function e5(e) {
    return e.status;
}

function e7() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}

function e8(e, t) {
    return e.then(t);
}

function e9(e, t, n) {
    return e.then(t, n);
}

function te(e, t) {
    let n = m(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = p;
    E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0);
}

function tt(e) {
    return e.value;
}

function tn(e) {
    let t = e.view;
    return d(t) ? 0 : c(t);
}

function tr(e, t) {
    console.warn(l(e, t));
}

function ti(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}

function ta(e, t, n) {
    return y(e, t, 576, R);
}

function ts(e, t, n) {
    return y(e, t, 389, C);
}

function to(e, t, n) {
    return y(e, t, 429, N);
}

function tl(e, t) {
    let n = m(O(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = p;
    E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0);
}

function tc() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}

function tu(e) {
    return "function" == typeof e;
}

function td(e) {
    return null === e;
}

function tf(e) {
    let t = e;
    return "object" == typeof t && null !== t;
}

function tp(e) {
    return void 0 === e;
}

function t_() {
    return r.memory;
}

function th(e, t) {
    let n = t,
        i = "string" == typeof n ? n : void 0;
    var a = d(i) ? 0 : m(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        s = p;
    E().setInt32(e + 4, s, !0), E().setInt32(e + 0, a, !0);
}

function tm(e, t) {
    return l(e, t);
}

function tg(e, t) {
    throw Error(l(e, t));
}
