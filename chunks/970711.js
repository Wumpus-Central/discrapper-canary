let r;
function i(e) {
    r = e;
}
n.d(t, {
    $R: () => I,
    A$: () => Q,
    AM: () => V,
    B: () => et,
    B8: () => S,
    BQ: () => el,
    C2: () => eg,
    Cn: () => H,
    D7: () => e_,
    Dj: () => x,
    F8: () => X,
    G6: () => eK,
    H0: () => U,
    Hh: () => eS,
    IU: () => eD,
    KD: () => F,
    KE: () => ey,
    Mc: () => K,
    OU: () => eN,
    On: () => em,
    Or: () => e5,
    QI: () => ez,
    R7: () => eL,
    Rb: () => eG,
    Rs: () => eP,
    S: () => Z,
    S5: () => eT,
    Sk: () => eQ,
    Tc: () => ek,
    UE: () => ep,
    V3: () => ej,
    Vr: () => en,
    Wl: () => e0,
    Wt: () => eC,
    XP: () => e1,
    YA: () => eb,
    Yc: () => ex,
    Z5: () => eM,
    Zk: () => M,
    a9: () => eo,
    aQ: () => eh,
    am: () => eA,
    d$: () => G,
    dE: () => eV,
    dJ: () => D,
    dN: () => ee,
    eD: () => ec,
    eW: () => v,
    ej: () => eO,
    ex: () => eu,
    fY: () => eX,
    fw: () => eW,
    h4: () => e4,
    ht: () => ea,
    iF: () => q,
    iR: () => er,
    jm: () => eE,
    jx: () => $,
    k7: () => ei,
    kK: () => eB,
    kn: () => Y,
    kr: () => es,
    mO: () => eU,
    nG: () => W,
    nM: () => k,
    o$: () => e$,
    oH: () => e2,
    oT: () => i,
    of: () => eZ,
    p0: () => eH,
    pC: () => j,
    pj: () => ew,
    qb: () => J,
    qt: () => e3,
    r3: () => ef,
    rs: () => O,
    sB: () => eF,
    up: () => eI,
    w7: () => eR,
    xQ: () => eJ,
    xb: () => eY,
    yR: () => B,
    y_: () => eq,
    z3: () => ed,
    z9: () => z,
    zF: () => ev
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
    n(824928),
    n(539854),
    n(563775),
    n(980754);
let a = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
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
        a = s(),
        o = 0;
    for (; o < r; o++) {
        let t = e.charCodeAt(o);
        if (t > 127) break;
        a[i + o] = t;
    }
    if (o !== r) {
        0 !== o && (e = e.slice(o)), (i = n(i, r, (r = o + 3 * e.length), 1) >>> 0);
        let t = p(e, s().subarray(i + o, i + r));
        (o += t.written), (i = n(i, r, o, 1) >>> 0);
    }
    return (f = o), i;
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
                0 == --a.cnt ? (r.__wbindgen_export_5.get(a.dtor)(o, a.b), E.unregister(a)) : (a.a = o);
            }
        };
    return (o.original = a), E.register(o, a, a), o;
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
function I() {
    r.crash();
}
function S(e, t, n, i, a) {
    r.installLogCallback(e, t, n, i, a);
}
function T(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc0a10dcc4cbf4b0c(e, t);
}
function A(e, t) {
    r._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h432f73bef2b498f4(e, t);
}
function N(e, t, n) {
    r.closure500_externref_shim(e, t, n);
}
function C(e, t, n, i) {
    r.closure532_externref_shim(e, t, n, i);
}
let P = ['omit', 'same-origin', 'include'],
    R = ['same-origin', 'no-cors', 'cors', 'navigate'],
    w =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((e) => r.__wbg_blockeddomainsstore_free(e >>> 0, 1));
class D {
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
            n = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            i = f,
            a = r.blockeddomainsstore_isBlockedDomain(n, i);
        return 0 !== a[0] && ((t = l(a[0], a[1]).slice()), r.__wbindgen_free(a[0], +a[1], 1)), t;
    }
    static startFetchingBlockedDomains(e) {
        let t = h(e, r.__wbindgen_malloc, r.__wbindgen_realloc),
            n = f;
        r.blockeddomainsstore_startFetchingBlockedDomains(t, n);
    }
}
let L =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((e) => r.__wbg_notestore_free(e >>> 0, 1));
class x {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), L.unregister(this), e;
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
function k(e, t) {
    e.abort(t);
}
function M(e) {
    e.abort();
}
function j() {
    return u(function (e, t, n, r, i) {
        e.append(l(t, n), l(r, i));
    }, arguments);
}
function U() {
    return u(function (e) {
        return e.arrayBuffer();
    }, arguments);
}
function G(e) {
    return e.buffer;
}
function B() {
    return u(function (e) {
        return e.caches;
    }, arguments);
}
function F() {
    return u(function (e, t) {
        return e.call(t);
    }, arguments);
}
function V() {
    return u(function (e, t, n) {
        return e.call(t, n);
    }, arguments);
}
function Z(e) {
    return clearTimeout(e);
}
function H(e) {
    return clearTimeout(e);
}
function Y(e) {
    return e.done;
}
function W(e, t) {
    return e.fetch(t);
}
function K(e) {
    return fetch(e);
}
function z() {
    return u(function (e, t) {
        return Reflect.get(e, t);
    }, arguments);
}
function q() {
    return u(function (e, t) {
        return Reflect.has(e, t);
    }, arguments);
}
function Q(e) {
    return e.headers;
}
function X(e) {
    let t;
    try {
        t = e instanceof Cache;
    } catch (e) {
        t = !1;
    }
    return t;
}
function J(e) {
    let t;
    try {
        t = e instanceof Response;
    } catch (e) {
        t = !1;
    }
    return t;
}
function $(e) {
    let t;
    try {
        t = e instanceof Window;
    } catch (e) {
        t = !1;
    }
    return t;
}
function ee() {
    return Symbol.iterator;
}
function et(e) {
    return e.length;
}
function en(e, t) {
    return e.match(t);
}
function er() {
    return u(function () {
        return new Headers();
    }, arguments);
}
function ei(e, t) {
    try {
        var n = {
                a: e,
                b: t
            },
            r = (e, t) => {
                let r = n.a;
                n.a = 0;
                try {
                    return C(r, n.b, e, t);
                } finally {
                    n.a = r;
                }
            };
        return new Promise(r);
    } finally {
        n.a = n.b = 0;
    }
}
function ea() {
    return {};
}
function eo() {
    return [];
}
function es(e) {
    return new Uint8Array(e);
}
function el() {
    return u(function () {
        return new AbortController();
    }, arguments);
}
function ec(e, t) {
    return Function(l(e, t));
}
function eu(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
}
function ed() {
    return u(function (e, t) {
        return new Response(e, t);
    }, arguments);
}
function ef() {
    return u(function (e, t, n) {
        return new Request(l(e, t), n);
    }, arguments);
}
function e_() {
    return u(function (e) {
        return new Blob(e);
    }, arguments);
}
function ep(e) {
    return e.next;
}
function eh() {
    return u(function (e) {
        return e.next();
    }, arguments);
}
function em(e, t, n) {
    return e.open(l(t, n));
}
function eg(e, t) {
    return e.push(t);
}
function eE(e, t, n) {
    return e.put(t, n);
}
function eb(e) {
    queueMicrotask(e);
}
function ey(e) {
    return e.queueMicrotask;
}
function eO(e) {
    return Promise.resolve(e);
}
function ev(e, t) {
    return setTimeout(e, t);
}
function eI() {
    return u(function (e, t) {
        return setTimeout(e, t);
    }, arguments);
}
function eS() {
    return u(function (e, t, n, r, i) {
        e.set(l(t, n), l(r, i));
    }, arguments);
}
function eT(e, t, n) {
    e[t] = n;
}
function eA(e, t, n) {
    e.set(t, n >>> 0);
}
function eN(e, t) {
    e.body = t;
}
function eC(e, t) {
    e.credentials = P[t];
}
function eP(e, t) {
    e.headers = t;
}
function eR(e, t) {
    e.headers = t;
}
function ew(e, t, n) {
    e.method = l(t, n);
}
function eD(e, t) {
    e.mode = R[t];
}
function eL(e, t) {
    e.signal = t;
}
function ex(e, t) {
    e.status = t;
}
function ek(e) {
    return e.signal;
}
function eM() {
    let e = 'undefined' == typeof global ? null : global;
    return d(e) ? 0 : c(e);
}
function ej() {
    let e = 'undefined' == typeof globalThis ? null : globalThis;
    return d(e) ? 0 : c(e);
}
function eU() {
    let e = 'undefined' == typeof self ? null : self;
    return d(e) ? 0 : c(e);
}
function eG() {
    let e = 'undefined' == typeof window ? null : window;
    return d(e) ? 0 : c(e);
}
function eB(e) {
    return e.status;
}
function eF() {
    return u(function (e) {
        return JSON.stringify(e);
    }, arguments);
}
function eV(e, t) {
    return e.then(t);
}
function eZ(e, t, n) {
    return e.then(t, n);
}
function eH(e, t) {
    let n = h(t.url, r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function eY(e) {
    return e.value;
}
function eW(e, t) {
    console.warn(l(e, t));
}
function eK(e) {
    let t = e.original;
    return 1 == t.cnt-- && ((t.a = 0), !0);
}
function ez(e, t, n) {
    return b(e, t, 501, N);
}
function eq(e, t, n) {
    return b(e, t, 347, T);
}
function eQ(e, t, n) {
    return b(e, t, 354, A);
}
function eX(e, t) {
    let n = h(y(t), r.__wbindgen_malloc, r.__wbindgen_realloc),
        i = f;
    g().setInt32(e + 4, i, !0), g().setInt32(e + 0, n, !0);
}
function eJ() {
    let e = r.__wbindgen_export_2,
        t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
}
function e$(e) {
    return 'function' == typeof e;
}
function e0(e) {
    let t = e;
    return 'object' == typeof t && null !== t;
}
function e1(e) {
    return void 0 === e;
}
function e2() {
    return r.memory;
}
function e3(e, t) {
    let n = t,
        i = 'string' == typeof n ? n : void 0;
    var a = d(i) ? 0 : h(i, r.__wbindgen_malloc, r.__wbindgen_realloc),
        o = f;
    g().setInt32(e + 4, o, !0), g().setInt32(e + 0, a, !0);
}
function e4(e, t) {
    return l(e, t);
}
function e5(e, t) {
    throw Error(l(e, t));
}
