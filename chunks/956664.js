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
        return T;
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
var o = r(518263);
var s = r(970173);
var l = r(520712);
var u = r(268111);
var c = r(941497);
var d = r(32026);
var f = r(480839);
var p = r(744285);
var h = r(492257);
var _ = r(873817);
var m = r(411104);
var g = r(512722),
    E = r.n(g),
    v = r(392711),
    y = r.n(v),
    b = r(950200),
    I = r.n(b);
function T(e) {
    let { width: n, height: r, maxWidth: i, maxHeight: a, minWidth: o = 0, minHeight: s = 0 } = e;
    if (n !== i || r !== a) {
        let e = n > i ? i / n : 1;
        n = Math.max(Math.round(n * e), o);
        let l = (r = Math.max(Math.round(r * e), s)) > a ? a / r : 1;
        (n = Math.max(Math.round(n * l), o)), (r = Math.max(Math.round(r * l), s));
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
        o = Math.min(i, S);
    return T({
        width: e,
        height: n,
        maxWidth: Math.min(a, S),
        maxHeight: o
    });
}
let C = 2,
    N = 1.3;
function R(e, n, r, i) {
    let a = Math.max(C, null == e || 0 === e || null == n || 0 === n ? 0 : e / r),
        o = C;
    null != r && r * a > window.innerWidth * N && (o = (window.innerWidth * N) / r);
    let s = C;
    return null != i && i * a > window.innerHeight * N && (s = (window.innerHeight * N) / i), (a = Math.min(a, o, s));
}
function O(e) {
    let { width: n, height: r, maxWidth: i, maxHeight: a } = e,
        o = 1;
    n > i && (o = i / n), (n = Math.round(n * o));
    let s = 1;
    return (r = Math.round(r * o)) > a && (s = a / r), Math.min(o * s, 1);
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
    for (let a = 0, o, s, l, u, c; a < n; a += r) (s = e[(o = 4 * a) + 0]), (l = e[o + 1]), (u = e[o + 2]), (void 0 === (c = e[o + 3]) || c >= 125) && !(s > 250 && l > 250 && u > 250) && i.push([s, l, u]);
    return i;
}
let w = [[0, 0, 0]],
    P = 128;
function M(e, n, r) {
    let i = document.createElement('canvas'),
        a = i.getContext('2d');
    if (null == a) return w;
    let o = (i.width = 0 === e.width ? P : e.width),
        s = (i.height = 0 === e.height ? P : e.height);
    a.drawImage(e, 0, 0, o, s);
    let l = x(a.getImageData(0, 0, o, s).data, o * s, r),
        u = I()(l, n);
    return 'boolean' == typeof u ? w : u.palette();
}
let k = (e) => ('number' == typeof e ? null : U(e)),
    U = y().memoize(
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
