"use strict";
n.d(t, {
    De: () => g,
    E2: () => o,
    IB: () => d,
    Ob: () => u,
    Q7: () => c,
    WN: () => m,
    cb: () => l,
    fE: () => h,
    h6: () => p,
    lZ: () => f,
    tp: () => a,
}),
    n(321073);
var i = n(310784),
    r = n.n(i);
n(626584);
var s = n(325335);
function a(e, t) {
    let n, i, r, s;
    if (7 === e.length) return e + ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
    let a = "#" === e.charAt(0) ? e.slice(1) : e;
    switch (a.length) {
        case 3:
            return (
                (n = a.charAt(0)),
                (i = a.charAt(1)),
                (r = a.charAt(2)),
                (n += n),
                (i += i),
                (r += r),
                (s = ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase()),
                "#" + n + i + r + s
            );
        case 4:
            return (
                (n = a.charAt(0)),
                (i = a.charAt(1)),
                (r = a.charAt(2)),
                (s = a.charAt(3)),
                (n += n),
                (i += i),
                (r += r),
                "#" +
                    n +
                    i +
                    r +
                    ((255 * ((parseInt((s += s), 16) / 255) * t)) | 0).toString(16).padStart(2, "0").toUpperCase()
            );
        case 6:
            return "#" + a + ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
        case 8:
            return (
                "#" +
                a.slice(0, 6) +
                (((parseInt(a.slice(6), 16) / 255) * t * 255) | 0).toString(16).padStart(2, "0").toUpperCase()
            );
        default:
            throw Error("Invalid hex color format");
    }
}
function o(e) {
    let [t, n, i] = r()(e).rgb();
    return { r: t, g: n, b: i };
}
function l(e, t) {
    let { r: n, g: i, b: r } = o(e);
    return `rgba(${n}, ${i}, ${r}, ${t})`;
}
function u(e, t, n) {
    return "#" + (0x1000000 + (e << 16) + (t << 8) + n).toString(16).slice(1);
}
function c(e) {
    var t, n, i;
    let r,
        s,
        a,
        l,
        u,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        d = [],
        {
            h: _,
            s: h,
            l: f,
        } = ((t = e[0]),
        (r = Math.min((t /= 255), (n = e[1] / 255), (i = e[2] / 255))),
        (a = (s = Math.max(t, n, i)) - r),
        (l = 0),
        (u = 0),
        (l = Math.round(
            60 * (l = 0 === a ? 0 : s === t ? ((n - i) / a) % 6 : s === n ? (i - t) / a + 2 : (t - n) / a + 4),
        )) < 0 && (l += 360),
        (u = (s + r) / 2),
        { h: l, s: +(100 * (0 === a ? 0 : a / (1 - Math.abs(2 * u - 1)))).toFixed(1), l: (u = +(100 * u).toFixed(1)) }),
        p = _,
        E = h,
        m = f;
    E < 30 && (E += 30), m > 80 && (m -= 40), m < 20 && (m += 15);
    let g = 360 / (c + 1);
    for (; d.length < c; ) {
        (p -= g) < 0 && (p += 360);
        let {
            r: e,
            g: t,
            b: n,
        } = (function (e, t, n) {
            var i;
            let r, s;
            return o(
                ((r = (t * Math.min((i = n / 100), 1 - i)) / 100),
                (s = (t) => {
                    let n = (t + e / 30) % 12;
                    return Math.round(255 * (i - r * Math.max(Math.min(n - 3, 9 - n, 1), -1)))
                        .toString(16)
                        .padStart(2, "0");
                }),
                `#${s(0)}${s(8)}${s(4)}`),
            );
        })(p, E, m);
        d.push([e, t, n]);
    }
    return d;
}
function d(e, t, n) {
    let i,
        r,
        s = Math.max((e /= 255), (t /= 255), (n /= 255)),
        a = Math.min(e, t, n),
        o = (s + a) / 2;
    if (s === a) i = r = 0;
    else {
        let l = s - a;
        switch (((r = o > 0.5 ? l / (2 - s - a) : l / (s + a)), s)) {
            case e:
                i = (t - n) / l + 6 * (t < n);
                break;
            case t:
                i = (n - e) / l + 2;
                break;
            case n:
                i = (e - t) / l + 4;
        }
        null == i ? (i = 0) : (i /= 6);
    }
    return { hue: 360 * i, saturation: r, lightness: o, alpha: 1 };
}
function _(e, t, n) {
    let i, r, a;
    if (((e /= 360), 0 === t)) i = r = a = n;
    else {
        let s = function (e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                    ? e + (t - e) * 6 * n
                    : n < 0.5
                      ? t
                      : n < 2 / 3
                        ? e + (t - e) * (2 / 3 - n) * 6
                        : e;
            },
            o = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - o;
        (i = s(l, o, e + 1 / 3)), (r = s(l, o, e)), (a = s(l, o, e - 1 / 3));
    }
    return new s.A(Math.round(255 * i), Math.round(255 * r), Math.round(255 * a), 1);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = d(e.red, e.green, e.blue);
    return (
        n
            ? (i.lightness = i.lightness + t > 1 ? 0.9 : i.lightness + t)
            : (i.lightness = i.lightness - t < 0 ? 0.1 : i.lightness - t),
        _(i.hue, i.saturation, i.lightness)
    );
}
function f(e) {
    let { foreground: t, background: n, ratio: i = 5, saturationFactor: s = 1 } = e;
    s < 1 && ((t = t.set("hsl.s", t.get("hsl.s") * s)), (n = n.set("hsl.s", n.get("hsl.s") * s)));
    let a = 0.5 >= n.luminance(),
        o = r().contrast(t, n);
    for (let e = 0; e < 10 && o < i; e++) {
        let e = t.get("hsl.l");
        if (a)
            if (e < 0.95) t = t.set("hsl.l", e + 0.05);
            else break;
        else if (e > 0.05) t = t.set("hsl.l", e - 0.05);
        else break;
        o = r().contrast(t, n);
    }
    return t.alpha(1);
}
function p(e) {
    return e
        .slice(0, 3)
        .map((e) => ({
            hex: e,
            hsv: (function (e) {
                let t, n, i, r, s;
                var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                if (null == a) return null;
                var o = parseInt(a[1], 16),
                    l = parseInt(a[2], 16),
                    u = parseInt(a[3], 16);
                let c = o / 255,
                    d = l / 255,
                    _ = u / 255,
                    h = Math.max(c, d, _),
                    f = h - Math.min(c, d, _),
                    p = (e) => (h - e) / 6 / f + 0.5,
                    E = (e) => Math.round(100 * e) / 100;
                return (
                    0 === f
                        ? (r = s = 0)
                        : ((s = f / h),
                          (t = p(c)),
                          (n = p(d)),
                          (i = p(_)),
                          (r = c === h ? i - n : d === h ? 1 / 3 + t - i : _ === h ? 2 / 3 + n - t : 0) < 0
                              ? (r += 1)
                              : r > 1 && (r -= 1)),
                    { h: Math.round(360 * r), s: E(100 * s), v: E(100 * h) }
                );
            })(e) ?? { h: 0, s: 0, v: 0 },
        }))
        .sort(E)[0].hex;
}
function E(e, t) {
    let n = e.hsv,
        i = t.hsv;
    return i.s + i.v - (n.s + n.v);
}
function m(e) {
    let { colorRGB: t, saturationFactor: n = 1 } = e;
    if (null == t) return t;
    let i = d(t.get("rgb.r"), t.get("rgb.g"), t.get("rgb.b"));
    return null == i ? t?.hex() : _(i.hue, i.saturation * n, i.lightness)?.toHexString();
}
function g(e, t, n) {
    let i = parseInt(e.substring(1, 3), 16),
        r = parseInt(e.substring(3, 5), 16),
        s = parseInt(e.substring(5, 7), 16),
        a = parseInt(t.substring(1, 3), 16),
        o = parseInt(t.substring(3, 5), 16),
        l = parseInt(t.substring(5, 7), 16),
        u = Math.round(i + (a - i) * n)
            .toString(16)
            .padStart(2, "0"),
        c = Math.round(r + (o - r) * n)
            .toString(16)
            .padStart(2, "0"),
        d = Math.round(s + (l - s) * n)
            .toString(16)
            .padStart(2, "0");
    return `#${u}${c}${d}`;
}
n(375708);
