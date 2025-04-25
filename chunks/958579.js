let r;
function l(e) {
    r = e;
}
t.d(n, {
    $X: () => H,
    Cl: () => B,
    F0: () => K,
    HT: () => Z,
    K5: () => N,
    KA: () => T,
    KG: () => C,
    KX: () => F,
    M1: () => S,
    Or: () => R,
    Pn: () => L,
    Qc: () => v,
    Qr: () => P,
    Sp: () => Q,
    WM: () => Y,
    Wl: () => A,
    XP: () => I,
    _D: () => W,
    _T: () => $,
    c1: () => D,
    dw: () => X,
    eY: () => k,
    fH: () => z,
    fY: () => J,
    hd: () => E,
    o$: () => q,
    oH: () => V,
    oT: () => l,
    qt: () => j,
    s2: () => M,
    ug: () => x,
    yW: () => U,
    zk: () => G,
    zr: () => O
});
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let u = 0,
    o = null;
function c() {
    return (null === o || 0 === o.byteLength) && (o = new Uint8Array(r.memory.buffer)), o;
}
let a = new ('undefined' == typeof TextEncoder ? (0, module.require)('util').TextEncoder : TextEncoder)('utf-8'),
    d =
        'function' == typeof a.encodeInto
            ? function (e, n) {
                  return a.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = a.encode(e);
                  return (
                      n.set(t),
                      {
                          read: e.length,
                          written: t.length
                      }
                  );
              };
function s(e, n, t) {
    if (void 0 === t) {
        let t = a.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            c()
                .subarray(r, r + t.length)
                .set(t),
            (u = t.length),
            r
        );
    }
    let r = e.length,
        l = n(r, 1) >>> 0,
        i = c(),
        o = 0;
    for (; o < r; o++) {
        let n = e.charCodeAt(o);
        if (n > 127) break;
        i[l + o] = n;
    }
    if (o !== r) {
        0 !== o && (e = e.slice(o)), (l = t(l, r, (r = o + 3 * e.length), 1) >>> 0);
        let n = d(e, c().subarray(l + o, l + r));
        (o += n.written), (l = t(l, r, o, 1) >>> 0);
    }
    return (u = o), l;
}
let f = null;
function _() {
    return (null === f || 0 === f.byteLength) && (f = new Int32Array(r.memory.buffer)), f;
}
let g = i.length;
function b(e) {
    let n = i[e];
    return e < 132 || ((i[e] = g), (g = e)), n;
}
let h = new ('undefined' == typeof TextDecoder ? (0, module.require)('util').TextDecoder : TextDecoder)('utf-8', {
    ignoreBOM: !0,
    fatal: !0
});
function m(e, n) {
    return (e >>>= 0), h.decode(c().subarray(e, e + n));
}
function y(e) {
    g === i.length && i.push(i.length + 1);
    let n = g;
    return (g = i[n]), (i[n] = e), n;
}
h.decode();
let p = null;
function v(e, n) {
    let t, l;
    try {
        let g = r.__wbindgen_add_to_stack_pointer(-16),
            h = s(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            p = u;
        r.parse(g, h, p, y(n));
        var i = _()[g / 4 + 0],
            o = _()[g / 4 + 1],
            c = _()[g / 4 + 2],
            a = _()[g / 4 + 3],
            d = i,
            f = o;
        if (a) throw ((d = 0), (f = 0), b(c));
        return (t = d), (l = f), m(d, f);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export_2(t, l, 1);
    }
}
function w(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_3(y(e));
    }
}
function j(e, n) {
    let t = i[n],
        l = 'string' == typeof t ? t : void 0;
    var o = null == l ? 0 : s(l, r.__wbindgen_export_0, r.__wbindgen_export_1),
        c = u;
    (_()[e / 4 + 1] = c), (_()[e / 4 + 0] = o);
}
function x(e) {
    b(e);
}
function k(e) {
    return 'string' == typeof i[e];
}
function E(e, n) {
    return y(Error(m(e, n)));
}
function O(e) {
    return null === i[e];
}
function I(e) {
    return void 0 === i[e];
}
function A(e) {
    let n = i[e];
    return 'object' == typeof n && null !== n;
}
function P(e, n) {
    return i[e] == i[n];
}
function Z(e) {
    let n = i[e];
    return 'boolean' == typeof n ? +!!n : 2;
}
function S(e, n) {
    let t = i[n],
        l = 'number' == typeof t ? t : void 0;
    (((null === p || 0 === p.byteLength) && (p = new Float64Array(r.memory.buffer)), p)[e / 8 + 1] = null == l ? 0 : l), (_()[e / 4 + 0] = null != l);
}
function T(e, n) {
    let t = s(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
        l = u;
    (_()[e / 4 + 1] = l), (_()[e / 4 + 0] = t);
}
function C(e, n) {
    return y(i[e][n >>> 0]);
}
function $(e) {
    return i[e].length;
}
function q(e) {
    return 'function' == typeof i[e];
}
function D(e) {
    return y(i[e].next);
}
function H() {
    return w(function (e) {
        return y(i[e].next());
    }, arguments);
}
function N(e) {
    return i[e].done;
}
function Y(e) {
    return y(i[e].value);
}
function K() {
    return y(Symbol.iterator);
}
function M() {
    return w(function (e, n) {
        return y(Reflect.get(i[e], i[n]));
    }, arguments);
}
function Q() {
    return w(function (e, n) {
        return y(i[e].call(i[n]));
    }, arguments);
}
function U(e) {
    return Array.isArray(i[e]);
}
function X(e) {
    let n;
    try {
        n = i[e] instanceof ArrayBuffer;
    } catch (e) {
        n = !1;
    }
    return n;
}
function L(e) {
    return y(Object.entries(i[e]));
}
function W(e) {
    return y(i[e].buffer);
}
function F(e) {
    return y(new Uint8Array(i[e]));
}
function z(e, n, t) {
    i[e].set(i[n], t >>> 0);
}
function B(e) {
    return i[e].length;
}
function G(e) {
    let n;
    try {
        n = i[e] instanceof Uint8Array;
    } catch (e) {
        n = !1;
    }
    return n;
}
function J(e, n) {
    let t = s(
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
        l = u;
    (_()[e / 4 + 1] = l), (_()[e / 4 + 0] = t);
}
function R(e, n) {
    throw Error(m(e, n));
}
function V() {
    return y(r.memory);
}
