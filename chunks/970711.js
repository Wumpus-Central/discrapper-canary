let r;
function i(e) {
    r = e;
}
(n.d(t, {
    $R: () => A,
    A$: () => er,
    AM: () => z,
    B: () => el,
    B8: () => C,
    BQ: () => eh,
    C2: () => eT,
    Cn: () => X,
    D7: () => ey,
    Dj: () => B,
    F8: () => ei,
    G6: () => e0,
    Gu: () => e3,
    H0: () => H,
    Hh: () => ew,
    IU: () => eG,
    KD: () => K,
    KE: () => eN,
    Mc: () => $,
    OU: () => ex,
    On: () => eI,
    Or: () => tr,
    Qu: () => e1,
    R7: () => eB,
    Rb: () => eW,
    Rs: () => eM,
    S: () => q,
    S5: () => eD,
    Tc: () => eF,
    UE: () => eO,
    Ub: () => N,
    V3: () => eH,
    Vr: () => ec,
    Wl: () => e7,
    Wt: () => ek,
    XP: () => e9,
    YA: () => eA,
    Yc: () => eV,
    Z5: () => eZ,
    Zk: () => F,
    a9: () => e_,
    aQ: () => ev,
    am: () => eL,
    d$: () => Y,
    dE: () => eq,
    dJ: () => M,
    dN: () => es,
    eD: () => em,
    eW: () => I,
    ej: () => eC,
    ex: () => eg,
    fY: () => e4,
    fw: () => e$,
    h4: () => tn,
    ht: () => ef,
    iF: () => en,
    iR: () => eu,
    jm: () => eS,
    jx: () => eo,
    k7: () => ed,
    kK: () => eK,
    kn: () => Q,
    kr: () => ep,
    lx: () => e2,
    mO: () => eY,
    nG: () => J,
    nM: () => V,
    o$: () => e6,
    oH: () => te,
    oT: () => i,
    of: () => eX,
    p0: () => eQ,
    pC: () => Z,
    pj: () => eU,
    qb: () => ea,
    qt: () => tt,
    r3: () => eb,
    rs: () => v,
    sB: () => ez,
    up: () => eP,
    vz: () => U,
    w7: () => ej,
    xQ: () => e5,
    xb: () => eJ,
    yR: () => W,
    yu: () => ee,
    z3: () => eE,
    z9: () => et,
    zF: () => eR,
    zr: () => e8
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
    n(980754),
    n(824928),
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
function v(e, t) {
    return r.rustMultiply(e, t);
}
function I() {
    return r.initLibdiscore();
}
function T(e, t) {
    e >>>= 0;
    let n = E(),
        i = [];
    for (let a = e; a < e + 4 * t; a += 4) i.push(r.__wbindgen_export_2.get(n.getUint32(a, !0)));
    return (r.__externref_drop_slice(e, t), i);
}
function S(e, t) {
    let n = t(4 * e.length, 4) >>> 0;
    for (let t = 0; t < e.length; t++) {
        let r = c(e[t]);
        E().setUint32(n + 4 * t, r, !0);
    }
    return ((_ = e.length), n);
}
function A() {
    r.crash();
}
function N(e) {
    let t, n;
    try {
        let i = r.generateLaunchSignature(e);
        return ((t = i[0]), (n = i[1]), l(i[0], i[1]));
    } finally {
        r.__wbindgen_free(t, n, 1);
    }
}
function C(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}
function R(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a939e4ee92a7144(e, t);
}
function P(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd15e1711d7d607c(e, t);
}
function w(e, t, n) {
    r.closure521_externref_shim(e, t, n);
}
function D(e, t, n, i) {
    r.closure555_externref_shim(e, t, n, i);
}
let L = ['omit', 'same-origin', 'include'],
    x = ['same-origin', 'no-cors', 'cors', 'navigate'],
    k =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class M {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), k.unregister(this), e);
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
let j =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_experimentcacher_free(e >>> 0, 1));
class U {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), j.unregister(this), e);
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_experimentcacher_free(e, 0);
    }
    static isExperimentIdEnabled(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        return 0 !== r.experimentcacher_isExperimentIdEnabled(t, n);
    }
    static getEnabledExperimentIds() {
        let e = r.experimentcacher_getEnabledExperimentIds();
        var t = T(e[0], e[1]).slice();
        return (r.__wbindgen_free(e[0], 4 * e[1], 4), t);
    }
    static flushToCache(e) {
        let t = S(e, r.__wbindgen_malloc),
            n = _;
        r.experimentcacher_flushToCache(t, n);
    }
}
let G =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_notestore_free(e >>> 0, 1));
class B {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return ((this.__wbg_ptr = 0), G.unregister(this), e);
    }
    free() {
        let e = this.__destroy_into_raw();
        r.__wbg_notestore_free(e, 0);
    }
    static getNote(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        return r.notestore_getNote(t, n);
    }
    static handleAction(e) {
        let t = m(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = _;
        return r.notestore_handleAction(t, n);
    }
    static handleReset() {
        return r.notestore_handleReset();
    }
}
function V(e, t) {
    e.abort(t);
}
function F(e) {
    e.abort();
}
function Z() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function H() {
    return u(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function Y(e) {
    return e.buffer;
}
function W() {
    return u(function (e) {
        return e.caches;
    }, arguments);
}
function K() {
    return u(function (e, t) {
        return e.call(t);
    }, arguments);
}
function z() {
    return u(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function q(e) {
    return clearTimeout(e);
}
function X(e) {
    return clearTimeout(e);
}
function Q(e) {
    return e.done;
}
function J(e, t) {
    return e.fetch(t);
}
function $(e) {
    return fetch(e);
}
function ee() {
    return u(function (e, t) {
        globalThis.crypto.getRandomValues(d(e, t));
    }, arguments);
}
function et() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function en() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function er(e) {
    return e.headers;
}
function ei(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ea(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function eo(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function es() {
    return Symbol.iterator;
}
function el(e) {
    return e.length;
}
function ec(e, t) {
    return e.match(t);
}
function eu() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function ed(e, t) {
    try {
        var n = {
                a: e,
                b: t
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return D(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}
function ef() {
    return {};
}
function e_() {
    return [];
}
function ep(e) {
    return new Uint8Array(e);
}
function eh() {
    return u(function () {
        return new AbortController();
    }, arguments);
}
function em(e, t) {
    return Function(l(e, t));
}
function eg(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function eE() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function eb() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function ey() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function eO(e) {
    return e.next;
}
function ev() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function eI(e, t, n) {
    return e.open(l(t, n));
}
function eT(e, t) {
    return e.push(t);
}
function eS(e, t, n) {
    return e.put(t, n);
}
function eA(e) {
    queueMicrotask(e);
}
function eN(e) {
    return e.queueMicrotask;
}
function eC(e) {
    return Promise.resolve(e);
}
function eR(e, t) {
    return setTimeout(e, t);
}
function eP() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function ew() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eD(e, t, n) {
    e[t] = n;
}
function eL(e, t, n) {
    e.set(t, n >>> 0);
}
function ex(e, t) {
    e.body = t;
}
function ek(e, t) {
    e.credentials = L[t];
}
function eM(e, t) {
    e.headers = t;
}
function ej(e, t) {
    e.headers = t;
}
function eU(e, t, n) {
    e.method = l(t, n);
}
function eG(e, t) {
    e.mode = x[t];
}
function eB(e, t) {
    e.signal = t;
}
function eV(e, t) {
    e.status = t;
}
function eF(e) {
    return e.signal;
}
function eZ() {
    let e = 'undefined' == typeof global ? null : global;
    return f(e) ? 0 : c(e);
}
function eH() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return f(e) ? 0 : c(e);
}
function eY() {
    let e = 'undefined' == typeof self ? null : self;
    return f(e) ? 0 : c(e);
}
function eW() {
    let e = 'undefined' == typeof window ? null : window;
    return f(e) ? 0 : c(e);
}
function eK(e) {
    return e.status;
}
function ez() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function eq(e, t) {
    return e.then(t);
}
function eX(e, t, n) {
    return e.then(t, n);
}
function eQ(e, t) {
    let n = m(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
    (E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0));
}
function eJ(e) {
    return e.value;
}
function e$(e, t) {
    console.warn(l(e, t));
}
function e0(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function e1(e, t, n) {
    return y(e, t, 522, w);
}
function e2(e, t, n) {
    return y(e, t, 369, R);
}
function e3(e, t, n) {
    return y(e, t, 394, P);
}
function e4(e, t) {
    let n = m(O(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = _;
    (E().setInt32(e + 4, i, !0), E().setInt32(e + 0, n, !0));
}
function e5() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    (e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1));
}
function e6(e) {
    return 'function' == typeof e;
}
function e8(e) {
    return null === e;
}
function e7(e) {
    let t = e;
    return 'object' == typeof t && null !== t;
}
function e9(e) {
    return void 0 === e;
}
function te() {
    return r.memory;
}
function tt(e, t) {
    let n = t,
        i = 'string' == typeof n ? n : void 0;
    var a = f(i) ? 0 : m(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = _;
    (E().setInt32(e + 4, o, !0), E().setInt32(e + 0, a, !0));
}
function tn(e, t) {
    return l(e, t);
}
function tr(e, t) {
    throw Error(l(e, t));
}
