let e;
function o(t) {
    e = t;
}
r.d(n, {
    $R: () => x,
    A$: () => z,
    AM: () => B,
    B: () => X,
    B8: () => A,
    BQ: () => to,
    C2: () => td,
    Cn: () => U,
    D7: () => tf,
    F8: () => $,
    G6: () => tV,
    H0: () => L,
    Hh: () => tw,
    IU: () => tS,
    KD: () => D,
    KE: () => ty,
    Mc: () => G,
    OU: () => tx,
    On: () => tp,
    Or: () => t0,
    R7: () => tI,
    Rb: () => tL,
    Rs: () => tO,
    S: () => N,
    Tc: () => tk,
    UE: () => ts,
    V3: () => tP,
    Vo: () => tG,
    Vr: () => J,
    Wl: () => tK,
    Wt: () => tA,
    XP: () => tQ,
    YA: () => th,
    Yc: () => tR,
    Z5: () => tj,
    Zk: () => P,
    a9: () => tr,
    aQ: () => tl,
    am: () => tm,
    d$: () => F,
    dE: () => tD,
    dJ: () => k,
    dN: () => Q,
    eD: () => ti,
    eW: () => m,
    ej: () => tb,
    ex: () => tu,
    fY: () => tz,
    fw: () => tW,
    h4: () => tZ,
    ht: () => tn,
    iF: () => q,
    iR: () => Z,
    jm: () => t_,
    jx: () => K,
    k7: () => tt,
    kK: () => tF,
    kn: () => W,
    kr: () => te,
    mO: () => tM,
    nG: () => V,
    nI: () => tq,
    nM: () => j,
    o$: () => tH,
    oH: () => tX,
    oT: () => o,
    of: () => tB,
    p0: () => tN,
    pC: () => M,
    pj: () => tE,
    qb: () => H,
    qt: () => tJ,
    r3: () => ta,
    rY: () => tY,
    rs: () => w,
    sB: () => tC,
    up: () => tv,
    w7: () => tT,
    xQ: () => t$,
    xb: () => tU,
    yR: () => C,
    z3: () => tc,
    z9: () => Y,
    zF: () => tg
}),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733),
    r(388685),
    r(953529),
    r(35282),
    r(49124),
    r(415506),
    r(824928),
    r(539854),
    r(563775),
    r(980754);
let i = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
i.decode();
let u = null;
function c() {
    return (null === u || 0 === u.byteLength) && (u = new Uint8Array(e.memory.buffer)), u;
}
function a(t, n) {
    return (t >>>= 0), i.decode(c().subarray(t, t + n));
}
function f(t) {
    let n = e.__externref_table_alloc();
    return e.__wbindgen_export_2.set(n, t), n;
}
function s(t, n) {
    try {
        return t.apply(this, n);
    } catch (n) {
        let t = f(n);
        e.__wbindgen_exn_store(t);
    }
}
function l(t) {
    return null == t;
}
let p = 0,
    d = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    _ =
        'function' == typeof d.encodeInto
            ? function (t, n) {
                  return d.encodeInto(t, n);
              }
            : function (t, n) {
                  let r = d.encode(t);
                  return (
                      n.set(r),
                      {
                          read: t.length,
                          written: r.length
                      }
                  );
              };
function h(t, n, r) {
    if (void 0 === r) {
        let r = d.encode(t),
            e = n(r.length, 1) >>> 0;
        return (
            c()
                .subarray(e, e + r.length)
                .set(r),
            (p = r.length),
            e
        );
    }
    let e = t.length,
        o = n(e, 1) >>> 0,
        i = c(),
        u = 0;
    for (; u < e; u++) {
        let n = t.charCodeAt(u);
        if (n > 127) break;
        i[o + u] = n;
    }
    if (u !== e) {
        0 !== u && (t = t.slice(u)), (o = r(o, e, (e = u + 3 * t.length), 1) >>> 0);
        let n = _(t, c().subarray(o + u, o + e));
        (u += n.written), (o = r(o, e, u, 1) >>> 0);
    }
    return (p = u), o;
}
let y = null;
function b() {
    return (null === y || !0 === y.buffer.detached || (void 0 === y.buffer.detached && y.buffer !== e.memory.buffer)) && (y = new DataView(e.memory.buffer)), y;
}
let g =
    'undefined' == typeof FinalizationRegistry
        ? {
              register: () => {},
              unregister: () => {}
          }
        : new FinalizationRegistry((t) => {
              e.__wbindgen_export_5.get(t.dtor)(t.a, t.b);
          });
function v(t, n, r, o) {
    let i = {
            a: t,
            b: n,
            cnt: 1,
            dtor: r
        },
        u = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            i.cnt++;
            let u = i.a;
            i.a = 0;
            try {
                return o(u, i.b, ...n);
            } finally {
                0 == --i.cnt ? (e.__wbindgen_export_5.get(i.dtor)(u, i.b), g.unregister(i)) : (i.a = u);
            }
        };
    return (u.original = i), g.register(u, i, i), u;
}
function w(t, n) {
    return e.rustMultiply(t, n);
}
function m() {
    return e.initLibdiscore();
}
function x() {
    e.crash();
}
function A(t, n, r, o, i) {
    e.installLogCallback(t, n, r, o, i);
}
function O(t, n) {
    e._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc0a10dcc4cbf4b0c(t, n);
}
function T(t, n) {
    e._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h432f73bef2b498f4(t, n);
}
function E(t, n, r) {
    e.closure504_externref_shim(t, n, r);
}
let S = ['omit', 'same-origin', 'include'],
    I = ['same-origin', 'no-cors', 'cors', 'navigate'],
    R =
        'undefined' == typeof FinalizationRegistry
            ? {
                  register: () => {},
                  unregister: () => {}
              }
            : new FinalizationRegistry((t) => e.__wbg_blockeddomainsstore_free(t >>> 0, 1));
class k {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), R.unregister(this), t;
    }
    free() {
        let t = this.__destroy_into_raw();
        e.__wbg_blockeddomainsstore_free(t, 0);
    }
    static isBlockedDomain(t) {
        let n,
            r = h(t, e.__wbindgen_malloc, e.__wbindgen_realloc),
            o = p,
            i = e.blockeddomainsstore_isBlockedDomain(r, o);
        return 0 !== i[0] && ((n = a(i[0], i[1]).slice()), e.__wbindgen_free(i[0], +i[1], 1)), n;
    }
    static startFetchingBlockedDomains(t) {
        let n = h(t, e.__wbindgen_malloc, e.__wbindgen_realloc),
            r = p;
        e.blockeddomainsstore_startFetchingBlockedDomains(n, r);
    }
}
function j(t, n) {
    t.abort(n);
}
function P(t) {
    t.abort();
}
function M() {
    return s(function (t, n, r, e, o) {
        t.append(a(n, r), a(e, o));
    }, arguments);
}
function L() {
    return s(function (t) {
        return t.arrayBuffer();
    }, arguments);
}
function F(t) {
    return t.buffer;
}
function C() {
    return s(function (t) {
        return t.caches;
    }, arguments);
}
function D() {
    return s(function (t, n) {
        return t.call(n);
    }, arguments);
}
function B() {
    return s(function (t, n, r) {
        return t.call(n, r);
    }, arguments);
}
function N(t) {
    return clearTimeout(t);
}
function U(t) {
    return clearTimeout(t);
}
function W(t) {
    return t.done;
}
function V(t, n) {
    return t.fetch(n);
}
function G(t) {
    return fetch(t);
}
function Y() {
    return s(function (t, n) {
        return Reflect.get(t, n);
    }, arguments);
}
function q() {
    return s(function (t, n) {
        return Reflect.has(t, n);
    }, arguments);
}
function z(t) {
    return t.headers;
}
function $(t) {
    let n;
    try {
        n = t instanceof Cache;
    } catch (t) {
        n = !1;
    }
    return n;
}
function H(t) {
    let n;
    try {
        n = t instanceof Response;
    } catch (t) {
        n = !1;
    }
    return n;
}
function K(t) {
    let n;
    try {
        n = t instanceof Window;
    } catch (t) {
        n = !1;
    }
    return n;
}
function Q() {
    return Symbol.iterator;
}
function X(t) {
    return t.length;
}
function J(t, n) {
    return t.match(n);
}
function Z() {
    return s(function () {
        return new Headers();
    }, arguments);
}
function tt(t, n) {
    try {
        var r = {
            a: t,
            b: n
        };
        return new Promise((t, n) => {
            let o = r.a;
            r.a = 0;
            try {
                var i;
                return (i = r.b), void e.closure526_externref_shim(o, i, t, n);
            } finally {
                r.a = o;
            }
        });
    } finally {
        r.a = r.b = 0;
    }
}
function tn() {
    return {};
}
function tr() {
    return [];
}
function te(t) {
    return new Uint8Array(t);
}
function to() {
    return s(function () {
        return new AbortController();
    }, arguments);
}
function ti(t, n) {
    return Function(a(t, n));
}
function tu(t, n, r) {
    return new Uint8Array(t, n >>> 0, r >>> 0);
}
function tc() {
    return s(function (t, n) {
        return new Response(t, n);
    }, arguments);
}
function ta() {
    return s(function (t, n, r) {
        return new Request(a(t, n), r);
    }, arguments);
}
function tf() {
    return s(function (t) {
        return new Blob(t);
    }, arguments);
}
function ts(t) {
    return t.next;
}
function tl() {
    return s(function (t) {
        return t.next();
    }, arguments);
}
function tp(t, n, r) {
    return t.open(a(n, r));
}
function td(t, n) {
    return t.push(n);
}
function t_(t, n, r) {
    return t.put(n, r);
}
function th(t) {
    queueMicrotask(t);
}
function ty(t) {
    return t.queueMicrotask;
}
function tb(t) {
    return Promise.resolve(t);
}
function tg(t, n) {
    return setTimeout(t, n);
}
function tv() {
    return s(function (t, n) {
        return setTimeout(t, n);
    }, arguments);
}
function tw() {
    return s(function (t, n, r, e, o) {
        t.set(a(n, r), a(e, o));
    }, arguments);
}
function tm(t, n, r) {
    t.set(n, r >>> 0);
}
function tx(t, n) {
    t.body = n;
}
function tA(t, n) {
    t.credentials = S[n];
}
function tO(t, n) {
    t.headers = n;
}
function tT(t, n) {
    t.headers = n;
}
function tE(t, n, r) {
    t.method = a(n, r);
}
function tS(t, n) {
    t.mode = I[n];
}
function tI(t, n) {
    t.signal = n;
}
function tR(t, n) {
    t.status = n;
}
function tk(t) {
    return t.signal;
}
function tj() {
    let t = 'undefined' == typeof global ? null : global;
    return l(t) ? 0 : f(t);
}
function tP() {
    let t = 'undefined' == typeof globalThis ? null : globalThis;
    return l(t) ? 0 : f(t);
}
function tM() {
    let t = 'undefined' == typeof self ? null : self;
    return l(t) ? 0 : f(t);
}
function tL() {
    let t = 'undefined' == typeof window ? null : window;
    return l(t) ? 0 : f(t);
}
function tF(t) {
    return t.status;
}
function tC() {
    return s(function (t) {
        return JSON.stringify(t);
    }, arguments);
}
function tD(t, n) {
    return t.then(n);
}
function tB(t, n, r) {
    return t.then(n, r);
}
function tN(t, n) {
    let r = h(n.url, e.__wbindgen_malloc, e.__wbindgen_realloc),
        o = p;
    b().setInt32(t + 4, o, !0), b().setInt32(t + 0, r, !0);
}
function tU(t) {
    return t.value;
}
function tW(t, n) {
    console.warn(a(t, n));
}
function tV(t) {
    let n = t.original;
    return 1 == n.cnt-- && ((n.a = 0), !0);
}
function tG(t, n, r) {
    return v(t, n, 505, E);
}
function tY(t, n, r) {
    return v(t, n, 341, O);
}
function tq(t, n, r) {
    return v(t, n, 348, T);
}
function tz(t, n) {
    let r = h(
            (function t(n) {
                let r,
                    e = typeof n;
                if ('number' == e || 'boolean' == e || null == n) return ''.concat(n);
                if ('string' == e) return '"'.concat(n, '"');
                if ('symbol' == e) {
                    let t = n.description;
                    return null == t ? 'Symbol' : 'Symbol('.concat(t, ')');
                }
                if ('function' == e) {
                    let t = n.name;
                    return 'string' == typeof t && t.length > 0 ? 'Function('.concat(t, ')') : 'Function';
                }
                if (Array.isArray(n)) {
                    let r = n.length,
                        e = '[';
                    r > 0 && (e += t(n[0]));
                    for (let o = 1; o < r; o++) e += ', ' + t(n[o]);
                    return e + ']';
                }
                let o = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!o || !(o.length > 1)) return toString.call(n);
                if ('Object' == (r = o[1]))
                    try {
                        return 'Object(' + JSON.stringify(n) + ')';
                    } catch (t) {
                        return 'Object';
                    }
                return n instanceof Error ? ''.concat(n.name, ': ').concat(n.message, '\n').concat(n.stack) : r;
            })(n),
            e.__wbindgen_malloc,
            e.__wbindgen_realloc
        ),
        o = p;
    b().setInt32(t + 4, o, !0), b().setInt32(t + 0, r, !0);
}
function t$() {
    let t = e.__wbindgen_export_2,
        n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, !0), t.set(n + 3, !1);
}
function tH(t) {
    return 'function' == typeof t;
}
function tK(t) {
    return 'object' == typeof t && null !== t;
}
function tQ(t) {
    return void 0 === t;
}
function tX() {
    return e.memory;
}
function tJ(t, n) {
    let r = 'string' == typeof n ? n : void 0;
    var o = l(r) ? 0 : h(r, e.__wbindgen_malloc, e.__wbindgen_realloc),
        i = p;
    b().setInt32(t + 4, i, !0), b().setInt32(t + 0, o, !0);
}
function tZ(t, n) {
    return a(t, n);
}
function t0(t, n) {
    throw Error(a(t, n));
}
