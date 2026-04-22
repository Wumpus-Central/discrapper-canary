"use strict";
n.d(t, {
    De: () => g,
    E2: () => o,
    IB: () => c,
    Ob: () => u,
    Q7: () => d,
    WN: () => m,
    cb: () => l,
    fE: () => f,
    h6: () => h,
    lZ: () => E,
    tp: () => a,
}),
    n(321073);
var r = n(310784),
    i = n.n(r);
n(626584);
var s = n(325335);
function a(e, t) {
    let n, r, i, s;
    if (7 === e.length) return e + ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
    let a = "#" === e.charAt(0) ? e.slice(1) : e;
    switch (a.length) {
        case 3:
            return (
                (n = a.charAt(0)),
                (r = a.charAt(1)),
                (i = a.charAt(2)),
                (n += n),
                (r += r),
                (i += i),
                (s = ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase()),
                "#" + n + r + i + s
            );
        case 4:
            return (
                (n = a.charAt(0)),
                (r = a.charAt(1)),
                (i = a.charAt(2)),
                (s = a.charAt(3)),
                (n += n),
                (r += r),
                (i += i),
                "#" +
                    n +
                    r +
                    i +
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
    let [t, n, r] = i()(e).rgb();
    return { r: t, g: n, b: r };
}
function l(e, t) {
    let { r: n, g: r, b: i } = o(e);
    return `rgba(${n}, ${r}, ${i}, ${t})`;
}
function u(e, t, n) {
    return "#" + (0x1000000 + (e << 16) + (t << 8) + n).toString(16).slice(1);
}
function d(e) {
    var t, n, r;
    let i,
        s,
        a,
        l,
        u,
        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        c = [],
        {
            h: _,
            s: f,
            l: E,
        } = ((t = e[0]),
        (i = Math.min((t /= 255), (n = e[1] / 255), (r = e[2] / 255))),
        (a = (s = Math.max(t, n, r)) - i),
        (l = 0),
        (u = 0),
        (l = Math.round(
            60 * (l = 0 === a ? 0 : s === t ? ((n - r) / a) % 6 : s === n ? (r - t) / a + 2 : (t - n) / a + 4),
        )) < 0 && (l += 360),
        (u = (s + i) / 2),
        { h: l, s: +(100 * (0 === a ? 0 : a / (1 - Math.abs(2 * u - 1)))).toFixed(1), l: (u = +(100 * u).toFixed(1)) }),
        h = _,
        p = f,
        m = E;
    p < 30 && (p += 30), m > 80 && (m -= 40), m < 20 && (m += 15);
    let g = 360 / (d + 1);
    for (; c.length < d; ) {
        (h -= g) < 0 && (h += 360);
        let {
            r: e,
            g: t,
            b: n,
        } = (function (e, t, n) {
            var r;
            let i, s;
            return o(
                ((i = (t * Math.min((r = n / 100), 1 - r)) / 100),
                (s = (t) => {
                    let n = (t + e / 30) % 12;
                    return Math.round(255 * (r - i * Math.max(Math.min(n - 3, 9 - n, 1), -1)))
                        .toString(16)
                        .padStart(2, "0");
                }),
                `#${s(0)}${s(8)}${s(4)}`),
            );
        })(h, p, m);
        c.push([e, t, n]);
    }
    return c;
}
function c(e, t, n) {
    let r,
        i,
        s = Math.max((e /= 255), (t /= 255), (n /= 255)),
        a = Math.min(e, t, n),
        o = (s + a) / 2;
    if (s === a) r = i = 0;
    else {
        let l = s - a;
        switch (((i = o > 0.5 ? l / (2 - s - a) : l / (s + a)), s)) {
            case e:
                r = (t - n) / l + 6 * (t < n);
                break;
            case t:
                r = (n - e) / l + 2;
                break;
            case n:
                r = (e - t) / l + 4;
        }
        null == r ? (r = 0) : (r /= 6);
    }
    return { hue: 360 * r, saturation: i, lightness: o, alpha: 1 };
}
function _(e, t, n) {
    let r, i, a;
    if (((e /= 360), 0 === t)) r = i = a = n;
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
        (r = s(l, o, e + 1 / 3)), (i = s(l, o, e)), (a = s(l, o, e - 1 / 3));
    }
    return new s.A(Math.round(255 * r), Math.round(255 * i), Math.round(255 * a), 1);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = c(e.red, e.green, e.blue);
    return (
        n
            ? (r.lightness = r.lightness + t > 1 ? 0.9 : r.lightness + t)
            : (r.lightness = r.lightness - t < 0 ? 0.1 : r.lightness - t),
        _(r.hue, r.saturation, r.lightness)
    );
}
function E(e) {
    let { foreground: t, background: n, ratio: r = 5, saturationFactor: s = 1 } = e;
    s < 1 && ((t = t.set("hsl.s", t.get("hsl.s") * s)), (n = n.set("hsl.s", n.get("hsl.s") * s)));
    let a = 0.5 >= n.luminance(),
        o = i().contrast(t, n);
    for (let e = 0; e < 10 && o < r; e++) {
        let e = t.get("hsl.l");
        if (a)
            if (e < 0.95) t = t.set("hsl.l", e + 0.05);
            else break;
        else if (e > 0.05) t = t.set("hsl.l", e - 0.05);
        else break;
        o = i().contrast(t, n);
    }
    return t.alpha(1);
}
function h(e) {
    return e
        .slice(0, 3)
        .map((e) => ({
            hex: e,
            hsv: (function (e) {
                let t, n, r, i, s;
                var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                if (null == a) return null;
                var o = parseInt(a[1], 16),
                    l = parseInt(a[2], 16),
                    u = parseInt(a[3], 16);
                let d = o / 255,
                    c = l / 255,
                    _ = u / 255,
                    f = Math.max(d, c, _),
                    E = f - Math.min(d, c, _),
                    h = (e) => (f - e) / 6 / E + 0.5,
                    p = (e) => Math.round(100 * e) / 100;
                return (
                    0 === E
                        ? (i = s = 0)
                        : ((s = E / f),
                          (t = h(d)),
                          (n = h(c)),
                          (r = h(_)),
                          (i = d === f ? r - n : c === f ? 1 / 3 + t - r : _ === f ? 2 / 3 + n - t : 0) < 0
                              ? (i += 1)
                              : i > 1 && (i -= 1)),
                    { h: Math.round(360 * i), s: p(100 * s), v: p(100 * f) }
                );
            })(e) ?? { h: 0, s: 0, v: 0 },
        }))
        .sort(p)[0].hex;
}
function p(e, t) {
    let n = e.hsv,
        r = t.hsv;
    return r.s + r.v - (n.s + n.v);
}
function m(e) {
    let { colorRGB: t, saturationFactor: n = 1 } = e;
    if (null == t) return t;
    let r = c(t.get("rgb.r"), t.get("rgb.g"), t.get("rgb.b"));
    return null == r ? t?.hex() : _(r.hue, r.saturation * n, r.lightness)?.toHexString();
}
function g(e, t, n) {
    let r = parseInt(e.substring(1, 3), 16),
        i = parseInt(e.substring(3, 5), 16),
        s = parseInt(e.substring(5, 7), 16),
        a = parseInt(t.substring(1, 3), 16),
        o = parseInt(t.substring(3, 5), 16),
        l = parseInt(t.substring(5, 7), 16),
        u = Math.round(r + (a - r) * n)
            .toString(16)
            .padStart(2, "0"),
        d = Math.round(i + (o - i) * n)
            .toString(16)
            .padStart(2, "0"),
        c = Math.round(s + (l - s) * n)
            .toString(16)
            .padStart(2, "0");
    return `#${u}${d}${c}`;
}
n(985018);
