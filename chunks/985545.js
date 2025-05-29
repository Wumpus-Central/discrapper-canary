let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => $,
    Cl: () => W,
    F0: () => F,
    HT: () => S,
    K5: () => D,
    KA: () => C,
    KG: () => E,
    KX: () => Q,
    M1: () => A,
    Or: () => R,
    Pn: () => X,
    Qc: () => m,
    Qr: () => T,
    Sp: () => L,
    WM: () => Y,
    Wl: () => P,
    XP: () => O,
    _D: () => z,
    _T: () => N,
    c1: () => q,
    dw: () => G,
    eY: () => I,
    fH: () => U,
    fY: () => B,
    hd: () => Z,
    o$: () => H,
    oH: () => V,
    oT: () => l,
    qt: () => w,
    s2: () => K,
    ug: () => p,
    yW: () => M,
    zk: () => J,
    zr: () => k
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = i.length;
function o(e) {
    let n = i[e];
    return e < 132 || ((i[e] = u), (u = e)), n;
}
let c = 0,
    a = null;
function d() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(r.memory.buffer)), a;
}
let s = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    f =
        'function' == typeof s.encodeInto
            ? function (e, n) {
                  return s.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = s.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length
                      }
                  );
              };
function _(e, n, t) {
    if (void 0 === t) {
        let t = s.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            d()
                .subarray(r, r + t.length)
                .set(t),
            (c = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = d(),
        u = 0;
    for (; u < r; u++) {
        let n = e.charCodeAt(u);
        if (n > 127) break;
        i[l + u] = n;
    }
    if (u !== r) {
        0 !== u && (e = e.slice(u)), (l = t(l, r, (r = u + 3 * e.length), 1) >>> 0);
        let n = f(e, d().subarray(l + u, l + r));
        (u += n.written), (l = t(l, r, u, 1) >>> 0);
    }
    return (c = u), l;
}
let g = null;
function h() {
    return (null === g || 0 === g.byteLength) && (g = new Int32Array(r.memory.buffer)), g;
}
let b = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
function x(e, n) {
    return (e >>>= 0), b.decode(d().subarray(e, e + n));
}
function y(e) {
    u === i.length && i.push(i.length + 1);
    let n = u;
    return (u = i[n]), (i[n] = e), n;
}
b.decode();
let j = null;
function m(e, n) {
    let t, l;
    try {
        let g = r.__wbindgen_add_to_stack_pointer(-16),
            b = _(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            j = c;
        r.parse(g, b, j, y(n));
        var i = h()[g / 4 + 0],
            u = h()[g / 4 + 1],
            a = h()[g / 4 + 2],
            d = h()[g / 4 + 3],
            s = i,
            f = u;
        if (d) throw ((s = 0), (f = 0), o(a));
        return (t = s), (l = f), x(s, f);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1);
    }
}
function v(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(y(e));
    }
}
function p(e) {
    o(e);
}
function w(e, n) {
    let t = i[n],
        l = 'string' == typeof t ? t : void 0;
    var u = null == l ? 0 : _(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        o = c;
    (h()[e / 4 + 1] = o), (h()[e / 4 + 0] = u);
}
function I(e) {
    return 'string' == typeof i[e];
}
function k(e) {
    return null === i[e];
}
function O(e) {
    return void 0 === i[e];
}
function Z(e, n) {
    return y(Error(x(e, n)));
}
function P(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function T(e, n) {
    return i[e] == i[n];
}
function S(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function A(e, n) {
    let t = i[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === j || 0 === j.byteLength) && (j = new Float64Array(r.memory.buffer)), j)[e / 8 + 1] = null == l ? 0 : l), (h()[e / 4 + 0] = null != l);
}
function C(e, n) {
    let t = _(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = c;
    (h()[e / 4 + 1] = l), (h()[e / 4 + 0] = t);
}
function E(e, n) {
    return y(i[e][n >>> 0]);
}
function N(e) {
    return i[e].length;
}
function H(e) {
    return 'function' == typeof i[e];
}
function q(e) {
    return y(i[e].next);
}
function $() {
    return v(function (e) {
        return y(i[e].next());
    }, arguments);
}
function D(e) {
    return i[e].done;
}
function Y(e) {
    return y(i[e].value);
}
function F() {
    return y(Symbol.iterator);
}
function K() {
    return v(function (e, n) {
        return y(Reflect.get(i[e], i[n]));
    }, arguments);
}
function L() {
    return v(function (e, n) {
        return y(i[e].call(i[n]));
    }, arguments);
}
function M(e) {
    return Array.isArray(i[e]);
}
function G(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function X(e) {
    return y(Object.entries(i[e]));
}
function z(e) {
    return y(i[e].buffer);
}
function Q(e) {
    return y(new Uint8Array(i[e]));
}
function U(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function W(e) {
    return i[e].length;
}
function J(e) {
    let n;
    try {
        n = i[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function B(e, n) {
    let t = _(
            (function e(n) {
                let t,
                    r = typeof n;
                if ('number' == r || 'boolean' == r || null == n) return `${n}`;
                if ('string' == r) return `"${n}"`;
                if ('symbol' == r) {
                    let e = n.description;
                    return null == e ? 'Symbol' : `Symbol(${e})`;
                }
                if ('function' == r) {
                    let e = n.name;
                    return 'string' == typeof e && e.length > 0 ? `Function(${e})` : 'Function';
                }
                if (Array.isArray(n)) {
                    let t = n.length,
                        r = '[';
                    t > 0 && (r += e(n[0]));
                    for (let l = 1; l < t; l++) r += ', ' + e(n[l]);
                    return r + ']';
                }
                let l = /\[object ([^\]]+)\]/.exec(toString.call(n));
                if (!(l.length > 1)) return toString.call(n);
                if ('Object' == (t = l[1]))
                    try {
                        return 'Object(' + JSON.stringify(n) + ')';
                    } catch (e) {
                        return 'Object';
                    }
                return n instanceof Error
                    ? `${n.name}: ${n.message}
${n.stack}`
                    : t;
            })(i[n]),
            r.__wbindgen_export_0,
            r.__wbindgen_export_1
        ),
        l = c;
    (h()[e / 4 + 1] = l), (h()[e / 4 + 0] = t);
}
function R(e, n) {
    throw Error(x(e, n));
}
function V() {
    return y(r.memory);
}
