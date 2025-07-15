let r;
function i(e) {
    r = e;
}
(n.d(t, {
    $R: () => A,
    A$: () => et,
    AM: () => W,
    B: () => eo,
    B8: () => I,
    BQ: () => e_,
    C2: () => ev,
    Cn: () => z,
    D7: () => eE,
    F8: () => en,
    G6: () => eQ,
    H0: () => F,
    Hh: () => eR,
    IU: () => ek,
    KD: () => Y,
    KE: () => eS,
    Mc: () => Q,
    OU: () => ew,
    On: () => eO,
    Or: () => te,
    R7: () => ej,
    Rb: () => eZ,
    Rs: () => eL,
    S: () => K,
    Tc: () => eG,
    UE: () => eb,
    Ub: () => v,
    V3: () => eV,
    Vr: () => es,
    Wl: () => e5,
    Wt: () => eD,
    XP: () => e6,
    YA: () => eT,
    Yc: () => eU,
    Z5: () => eB,
    Zk: () => B,
    a9: () => ed,
    aQ: () => ey,
    am: () => eP,
    bu: () => eJ,
    d$: () => Z,
    dE: () => eW,
    dJ: () => x,
    dN: () => ea,
    eD: () => ep,
    eW: () => S,
    ej: () => eA,
    ex: () => eh,
    fY: () => e1,
    fw: () => eX,
    gL: () => e0,
    h4: () => e9,
    ht: () => eu,
    iF: () => ee,
    iR: () => el,
    jm: () => eI,
    jx: () => ei,
    k7: () => ec,
    kK: () => eH,
    kn: () => q,
    kr: () => ef,
    mO: () => eF,
    nG: () => X,
    nM: () => G,
    o$: () => e3,
    oH: () => e8,
    oT: () => i,
    of: () => eK,
    ok: () => e$,
    p0: () => ez,
    pC: () => V,
    pj: () => eM,
    qJ: () => U,
    qb: () => er,
    qt: () => e7,
    r3: () => eg,
    rs: () => T,
    sB: () => eY,
    up: () => eC,
    vz: () => k,
    w7: () => ex,
    xQ: () => e2,
    xb: () => eq,
    yR: () => H,
    yu: () => J,
    z3: () => em,
    z9: () => $,
    zF: () => eN,
    zr: () => e4
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
    n(563775));
let a = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
a.decode();
let o = null;
function s() {
    return ((null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o);
}
function l(e, t) {
    return ((e >>>= 0), a.decode(s().subarray(e, e + t)));
}
function c(e) {
    let t = r.__externref_table_alloc();
    return (r.__wbindgen_export_2.set(t, e), t);
}
function u(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = c(t);
        r.__wbindgen_exn_store(e);
    }
}
function d(e, t) {
    return ((e >>>= 0), s().subarray(e / 1, e / 1 + t));
}
function f(e) {
    return null == e;
}
let _ = 0,
    p = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    h =
        'function' == typeof p.encodeInto
            ? function (e, t) {
                  return p.encodeInto(e, t);
              }
            : function (e, t) {
                  let n = p.encode(e);
                  return (
                      t.set(n),
                      {
                          read: e.length,
                          written: n.length
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
        (0 !== o && (e = e.slice(o)), (i = n(i, r, (r = o + 3 * e.length), 1) >>> 0));
        let t = h(e, s().subarray(i + o, i + r));
        ((o += t.written), (i = n(i, r, o, 1) >>> 0));
    }
    return ((_ = o), i);
}
let g = null;
function E() {
    return ((null === g || !0 === g.buffer.detached || (void 0 === g.buffer.detached && g.buffer !== r.memory.buffer)) && (g = new DataView(r.memory.buffer)), g);
}
let b =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => {
              r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
          });
function y(e, t, n, i) {
    let a = {
            a: e,
            b: t,
            cnt: 1,
            dtor: n
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
    return ((o.original = a), b.register(o, a, a), o);
}
function O(e) {
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
        t > 0 && (n += O(e[0]));
        for (let r = 1; r < t; r++) n += ', ' + O(e[r]);
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
function v(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return ((t = i[0]), (n = i[1]), l(i[0], i[1]));
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}
function I(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}
function T(e, t) {
    return r.rustMultiply(e, t);
}
function S() {
    return r.initLibdiscore();
}
function A() {
    r.crash();
}
function N(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a939e4ee92a7144(e, t);
}
function C(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd15e1711d7d607c(e, t);
}
function R(e, t, n) {
    r.closure496_externref_shim(e, t, n);
}
function P(e, t, n, i) {
    r.closure530_externref_shim(e, t, n, i);
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
        return ((this.__wbg_ptr = 0), L.unregister(this), e);
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
        return (0 !== a[0] && ((t = l(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t);
    }
    static startFetchingBlockedDomains(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
let M =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class k {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), M.unregister(this), e);
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static getConfig(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _,
            i = r.experimentcacher_getConfig(t, n);
        return 0 === i ? void 0 : U.__wrap(i);
    }
    static flushToCache(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        r.experimentcacher_flushToCache(t, n);
    }
}
let j =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_wasmcacheableexperimentconfig_free(e >>> 0, 1));
class U {
    static __wrap(e) {
        e >>>= 0;
        let t = Object.create(U.prototype);
        return ((t.__wbg_ptr = e), j.register(t, t.__wbg_ptr, t), t);
    }
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), j.unregister(this), e);
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
function G(e, t) {
    e.abort(t);
}
function B(e) {
    e.abort();
}
function V() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function F() {
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
function X(e, t) {
    return e.fetch(t);
}
function Q(e) {
    return fetch(e);
}
function J() {
    return u(function (e, t) {
        globalThis.crypto.getRandomValues(d(e, t));
    }, arguments);
}
function $() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function ee() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function et(e) {
    return e.headers;
}
function en(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function er(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ei(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ea() {
    return Symbol.iterator;
}
function eo(e) {
    return e.length;
}
function es(e, t) {
    return e.match(t);
}
function el() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function ec(e, t) {
    try {
        var n = {
                a: e,
                b: t
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
function eu() {
    return {};
}
function ed() {
    return [];
}
function ef(e) {
    return new Uint8Array(e);
}
function e_() {
    return u(function () {
        return new AbortController();
    }, arguments);
}
function ep(e, t) {
    return Function(l(e, t));
}
function eh(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function em() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eg() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function eE() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function eb(e) {
    return e.next;
}
function ey() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function eO(e, t, n) {
    return e.open(l(t, n));
}
function ev(e, t) {
    return e.push(t);
}
function eI(e, t, n) {
    return e.put(t, n);
}
function eT(e) {
    queueMicrotask(e);
}
function eS(e) {
    return e.queueMicrotask;
}
function eA(e) {
    return Promise.resolve(e);
}
function eN(e, t) {
    return setTimeout(e, t);
}
function eC() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function eR() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eP(e, t, n) {
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
function eM(e, t, n) {
    e.method = l(t, n);
}
function ek(e, t) {
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
    return f(e) ? 0 : c(e);
}
function eV() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return f(e) ? 0 : c(e);
}
function eF() {
    let e = 'undefined' == typeof self ? null : self;
    return f(e) ? 0 : c(e);
}
function eZ() {
    let e = 'undefined' == typeof window ? null : window;
    return f(e) ? 0 : c(e);
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
    let n = m(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
    (E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0));
}
function eq(e) {
    return e.value;
}
function eX(e, t) {
    console.warn(l(e, t));
}
function eQ(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function eJ(e, t, n) {
    return y(e, t, 497, R);
}
function e$(e, t, n) {
    return y(e, t, 341, N);
}
function e0(e, t, n) {
    return y(e, t, 366, C);
}
function e1(e, t) {
    let n = m(O(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
    (E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0));
}
function e2() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    (e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1));
}
function e3(e) {
    return 'function' == typeof e;
}
function e4(e) {
    return null === e;
}
function e5(e) {
    let t = e;
    return 'object' == typeof t && null !== t;
}
function e6(e) {
    return void 0 === e;
}
function e8() {
    return r.memory;
}
function e7(e, t) {
    let n = t,
        i = 'string' == typeof n ? n : void 0;
    var a = f(i) ? 0 : m(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = _;
    (E().setInt32(e + 4, o, !0), E().setInt32(e + 0, a, !0));
}
function e9(e, t) {
    return l(e, t);
}
function te(e, t) {
    throw Error(l(e, t));
}
