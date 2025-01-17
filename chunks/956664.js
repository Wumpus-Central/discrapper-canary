r.d(n, {
    Bo: function () {
        return Z;
    },
    Dc: function () {
        return O;
    },
    OF: function () {
        return k;
    },
    QB: function () {
        return G;
    },
    Tj: function () {
        return y;
    },
    XN: function () {
        return M;
    },
    c0: function () {
        return V;
    },
    fD: function () {
        return B;
    },
    kD: function () {
        return F;
    },
    rn: function () {
        return D;
    },
    rv: function () {
        return L;
    },
    vV: function () {
        return R;
    },
    zp: function () {
        return A;
    }
});
var i = r(653041);
var a = r(642549);
var s = r(518263);
var o = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var _ = r(744285);
var h = r(492257);
var p = r(873817);
var m = r(411104);
var g = r(512722),
    E = r.n(g),
    v = r(392711),
    I = r.n(v),
    T = r(950200),
    b = r.n(T);
function y(e) {
    let { width: n, height: r, maxWidth: i, maxHeight: a, minWidth: s = 0, minHeight: o = 0 } = e;
    if (n !== i || r !== a) {
        let e = n > i ? i / n : 1;
        n = Math.max(Math.round(n * e), s);
        let l = (r = Math.max(Math.round(r * e), o)) > a ? a / r : 1;
        (n = Math.max(Math.round(n * l), s)), (r = Math.max(Math.round(r * l), o));
    }
    return {
        width: n,
        height: r
    };
}
let S = 2000;
function A(e, n) {
    let r =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      vertical: 0,
                      horizontal: 0
                  },
        i = Math.min(Math.round(0.65 * window.innerHeight), Math.round(window.innerHeight - r.vertical)),
        a = Math.min(Math.round(0.75 * window.innerWidth), Math.round(window.innerWidth - r.horizontal)),
        s = Math.min(i, S);
    return y({
        width: e,
        height: n,
        maxWidth: Math.min(a, S),
        maxHeight: s
    });
}
let N = 2,
    C = 1.3;
function R(e, n, r, i) {
    let a = Math.max(N, null == e || 0 === e || null == n || 0 === n ? 0 : e / r),
        s = N;
    null != r && r * a > window.innerWidth * C && (s = (window.innerWidth * C) / r);
    let o = N;
    return null != i && i * a > window.innerHeight * C && (o = (window.innerHeight * C) / i), (a = Math.min(a, s, o));
}
function O(e) {
    let { width: n, height: r, maxWidth: i, maxHeight: a } = e,
        s = 1;
    n > i && (s = i / n), (n = Math.round(n * s));
    let o = 1;
    return (r = Math.round(r * s)) > a && (o = a / r), Math.min(s * o, 1);
}
function D(e) {
    let { width: n, height: r, maxWidth: i, maxHeight: a } = e;
    return n === r ? 1 : Math.min(Math.max(i / n, a / r), 1);
}
function L(e) {
    return null == e || '' === e ? 'none' : 'url('.concat(e, ')');
}
function x(e, n, r) {
    let i = [];
    for (let a = 0, s, o, l, u, c; a < n; a += r) (o = e[(s = 4 * a) + 0]), (l = e[s + 1]), (u = e[s + 2]), (void 0 === (c = e[s + 3]) || c >= 125) && !(o > 250 && l > 250 && u > 250) && i.push([o, l, u]);
    return i;
}
let w = [[0, 0, 0]],
    P = 128;
function M(e, n, r) {
    let i = document.createElement('canvas'),
        a = i.getContext('2d');
    if (null == a) return w;
    let s = (i.width = 0 === e.width ? P : e.width),
        o = (i.height = 0 === e.height ? P : e.height);
    a.drawImage(e, 0, 0, s, o);
    let l = x(a.getImageData(0, 0, s, o).data, s * o, r),
        u = b()(l, n);
    return 'boolean' == typeof u ? w : u.palette();
}
let k = (e) => ('number' == typeof e ? null : U(e)),
    U = I().memoize(
        (e) =>
            new Promise((n, r) => {
                let i = new Image();
                (i.crossOrigin = 'Anonymous'),
                    (i.onerror = (e) => {
                        r(e), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.onload = () => {
                        n(M(i, 5, 10)), (i.onerror = i.onload = null), (i = null);
                    }),
                    (i.src = e);
            })
    );
function B(e) {
    return new Promise((n, r) => {
        let i = new FileReader();
        i.readAsDataURL(e),
            (i.onload = () => {
                E()('string' == typeof i.result, 'Result must be a string'), n(i.result);
            }),
            (i.onerror = (e) => r(e));
    });
}
function G(e) {
    let n = e.split(';base64,');
    return E()(2 === n.length, 'Input data is not a valid image.'), atob(n[1]).length;
}
async function Z(e, n, r) {
    let i = F(e);
    return new File([await i.arrayBuffer()], n, { type: r });
}
function F(e) {
    let n;
    n = e.split(',')[0].indexOf('base64') >= 0 ? atob(e.split(',')[1]) : btoa(e.split(',')[1]);
    let r = e.split(',')[0].split(':')[1].split(';')[0],
        i = new Uint8Array(n.length);
    for (var a = 0; a < n.length; a++) i[a] = n.charCodeAt(a);
    return new Blob([i], { type: r });
}
async function V(e) {
    var n;
    if ('image/png' !== (null === (n = e.type) || void 0 === n ? void 0 : n.split(';')[0])) throw Error('File is not a PNG');
    let r = await e.text(),
        i = r.indexOf('IDAT');
    return (!!(i > 0) && -1 !== r.substring(0, i).indexOf('acTL')) || !1;
}
