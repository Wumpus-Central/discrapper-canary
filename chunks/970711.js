let r;
function i(e) {
    r = e;
}
n.d(t, {
    $R: () => A,
    A$: () => eh,
    AM: () => er,
    B: () => ey,
    B8: () => I,
    BQ: () => eN,
    Bm: () => ta,
    C2: () => ek,
    Cn: () => ea,
    D7: () => eL,
    DZ: () => ev,
    F8: () => em,
    G6: () => ti,
    H0: () => q,
    Hh: () => eY,
    IU: () => eJ,
    KD: () => en,
    KE: () => eB,
    KH: () => ts,
    Mc: () => ed,
    OU: () => eK,
    On: () => ej,
    Or: () => tg,
    R7: () => e$,
    RC: () => eo,
    Rb: () => e5,
    Rs: () => eq,
    S: () => ei,
    S6: () => J,
    Tc: () => e1,
    UE: () => ex,
    Ub: () => v,
    Uj: () => eC,
    V3: () => e2,
    Vr: () => eO,
    Wl: () => tf,
    Wt: () => ez,
    XP: () => t_,
    YA: () => eG,
    Yc: () => e0,
    Z5: () => e3,
    Zk: () => K,
    Zs: () => X,
    a9: () => eS,
    aQ: () => eM,
    am: () => eW,
    bG: () => to,
    d$: () => Q,
    dE: () => e7,
    dJ: () => M,
    dN: () => eb,
    eD: () => eR,
    eW: () => T,
    ej: () => eZ,
    ex: () => eP,
    fY: () => tl,
    fw: () => tr,
    h4: () => tm,
    ht: () => eT,
    iF: () => ep,
    iR: () => G,
    jm: () => eU,
    jx: () => eE,
    k7: () => eI,
    kK: () => e8,
    kn: () => el,
    kr: () => eA,
    mO: () => e4,
    nG: () => eu,
    nM: () => W,
    nz: () => tn,
    o$: () => tu,
    oH: () => tp,
    oT: () => i,
    of: () => e9,
    p0: () => te,
    pC: () => z,
    pj: () => eQ,
    qJ: () => Y,
    qb: () => eg,
    qt: () => th,
    r3: () => ew,
    rs: () => S,
    sB: () => e6,
    uX: () => ec,
    up: () => eH,
    vH: () => $,
    vz: () => k,
    w7: () => eX,
    xB: () => Z,
    xH: () => eF,
    xQ: () => tc,
    xb: () => tt,
    xk: () => es,
    yH: () => V,
    yR: () => et,
    yg: () => ee,
    yu: () => ef,
    z3: () => eD,
    z9: () => e_,
    zF: () => eV,
    zr: () => td,
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
    n(980754),
    n(824928),
    n(539854),
    n(563775);
let a = new ("undefined" == typeof TextDecoder ? (0, module.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
a.decode();
let o = null;
function s() {
    return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
}
function l(e, t) {
    return (e >>>= 0), a.decode(s().subarray(e, e + t));
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
    return (e >>>= 0), s().subarray(e / 1, e / 1 + t);
}
let _ = 0,
    p = new ("undefined" == typeof TextEncoder ? (0, module.require)("util").TextEncoder : TextEncoder)("utf-8"),
    h =
        "function" == typeof p.encodeInto
            ? function (e, t) {
                  return p.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = p.encode(e);
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
        let n = p.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            s()
                .subarray(r, r + n.length)
                .set(n),
            (_ = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        a = s(),
        o = 0;
    for (; o < r; o++) {
        let t = e.charCodeAt(o);
        if (t > 127) break;
        a[i + o] = t;
    }
    if (o !== r) {
        0 !== o && (e = e.slice(o)), (i = n(i, r, (r = o + 3 * e.length), 1) >>> 0);
        let t = h(e, s().subarray(i + o, i + r));
        (o += t.written), (i = n(i, r, o, 1) >>> 0);
    }
    return (_ = o), i;
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
    "undefined" == typeof FinalizationRegistry
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
        o = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            a.cnt++;
            let o = a.a;
            a.a = 0;
            try {
                return i(o, a.b, ...t);
            } finally {
                0 == --a.cnt ? (r.__wbindgen_export_5.get(a.dtor)(o, a.b), b.unregister(a)) : (a.a = o);
            }
        };
    return (o.original = a), b.register(o, a, a), o;
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
        return (t = i[0]), (n = i[1]), l(i[0], i[1]);
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}
function I(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}
function T() {
    return r.initLibdiscore();
}
function S(e, t) {
    return r.rustMultiply(e, t);
}
function A() {
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
function P(e, t, n, i) {
    r.closure611_externref_shim(e, t, n, i);
}
let D = ["bytes"],
    w = ["omit", "same-origin", "include"],
    L = ["same-origin", "no-cors", "cors", "navigate"],
    x =
        "undefined" == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {},
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class M {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), x.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_blockeddomainsstore_free(e, 0);
    }
    static isBlockedDomain(e) {
        let t,
            n = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = _,
            a = r.blockeddomainsstore_isBlockedDomain(n, i);
        return 0 !== a[0] && ((t = l(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
let j =
    "undefined" == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class k {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), j.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _,
            i = r.experimentcacher_getConfig(t, n);
        return 0 === i ? void 0 : Y.__wrap(i);
    }
    static flushToCache(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        r.experimentcacher_flushToCache(t, n);
    }
}
let U =
    "undefined" == typeof FinalizationRegistry
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
        return D[r.intounderlyingbytesource_type(this.__wbg_ptr)];
    }
    cancel() {
        let e = this.__destroy_into_raw();
        r.intounderlyingbytesource_cancel(e);
    }
}
let B =
    "undefined" == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsink_free(e >>> 0, 1));
class Z {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), B.unregister(this), e;
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
let F =
    "undefined" == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_intounderlyingsource_free(e >>> 0, 1));
class V {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), F.unregister(this), e;
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
let H =
    "undefined" == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {},
          }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class Y {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(Y.prototype);
        return (t.__wbg_ptr = e), H.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), H.unregister(this), e;
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
function W(e, t) {
    e.abort(t);
}
function K(e) {
    e.abort();
}
function z() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function q() {
    return u(function (e) {
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
    return d(t) ? 0 : c(t);
}
function $(e) {
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
function eo() {
    return u(function (e) {
        e.close();
    }, arguments);
}
function es() {
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
function e_() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function ep() {
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
function ev() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function eI(e, t) {
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
function eT() {
    return {};
}
function eS() {
    return [];
}
function eA(e) {
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
function eP(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eD() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function ew() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function eL() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function ex(e) {
    return e.next;
}
function eM() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function ej(e, t, n) {
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
function eB(e) {
    return e.queueMicrotask;
}
function eZ(e) {
    return Promise.resolve(e);
}
function eF() {
    return u(function (e, t) {
        e.respond(t >>> 0);
    }, arguments);
}
function eV(e, t) {
    return setTimeout(e, t);
}
function eH() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function eY() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eW(e, t, n) {
    e.set(t, n >>> 0);
}
function eK(e, t) {
    e.body = t;
}
function ez(e, t) {
    e.credentials = w[t];
}
function eq(e, t) {
    e.headers = t;
}
function eX(e, t) {
    e.headers = t;
}
function eQ(e, t, n) {
    e.method = l(t, n);
}
function eJ(e, t) {
    e.mode = L[t];
}
function e$(e, t) {
    e.signal = t;
}
function e0(e, t) {
    e.status = t;
}
function e1(e) {
    return e.signal;
}
function e3() {
    let e = "undefined" == typeof global ? null : global;
    return d(e) ? 0 : c(e);
}
function e2() {
    let e = "undefined" == typeof globalThis ? null : globalThis;
    return d(e) ? 0 : c(e);
}
function e4() {
    let e = "undefined" == typeof self ? null : self;
    return d(e) ? 0 : c(e);
}
function e5() {
    let e = "undefined" == typeof window ? null : window;
    return d(e) ? 0 : c(e);
}
function e8(e) {
    return e.status;
}
function e6() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function e7(e, t) {
    return e.then(t);
}
function e9(e, t, n) {
    return e.then(t, n);
}
function te(e, t) {
    let n = m(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
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
function to(e, t, n) {
    return y(e, t, 389, C);
}
function ts(e, t, n) {
    return y(e, t, 429, N);
}
function tl(e, t) {
    let n = m(O(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
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
function t_(e) {
    return void 0 === e;
}
function tp() {
    return r.memory;
}
function th(e, t) {
    let n = t,
        i = "string" == typeof n ? n : void 0;
    var a = d(i) ? 0 : m(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = _;
    E().setInt32(e + 4, o, !0), E().setInt32(e + 0, a, !0);
}
function tm(e, t) {
    return l(e, t);
}
function tg(e, t) {
    throw Error(l(e, t));
}
