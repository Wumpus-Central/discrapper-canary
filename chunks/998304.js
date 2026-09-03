n.d(t, {
    De: () => p,
    E2: () => l,
    IB: () => u,
    Ob: () => d,
    Q7: () => c,
    WN: () => f,
    cb: () => o,
    fE: () => E,
    h6: () => h,
    lZ: () => A,
    tp: () => s,
}),
    n(321073);
var i = n(310784),
    r = n.n(i);
n(626584);
var a = n(325335);
function s(e, t) {
    let n, i, r, a;
    if (7 === e.length) return e + ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
    let s = "#" === e.charAt(0) ? e.slice(1) : e;
    switch (s.length) {
        case 3:
            return (
                (n = s.charAt(0)),
                (i = s.charAt(1)),
                (r = s.charAt(2)),
                (n += n),
                (i += i),
                (r += r),
                (a = ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase()),
                "#" + n + i + r + a
            );
        case 4:
            return (
                (n = s.charAt(0)),
                (i = s.charAt(1)),
                (r = s.charAt(2)),
                (a = s.charAt(3)),
                (n += n),
                (i += i),
                (r += r),
                "#" +
                    n +
                    i +
                    r +
                    ((255 * ((parseInt((a += a), 16) / 255) * t)) | 0).toString(16).padStart(2, "0").toUpperCase()
            );
        case 6:
            return "#" + s + ((255 * t) | 0).toString(16).padStart(2, "0").toUpperCase();
        case 8:
            return (
                "#" +
                s.slice(0, 6) +
                (((parseInt(s.slice(6), 16) / 255) * t * 255) | 0).toString(16).padStart(2, "0").toUpperCase()
            );
        default:
            throw Error("Invalid hex color format");
    }
}
function l(e) {
    let [t, n, i] = r()(e).rgb();
    return { r: t, g: n, b: i };
}
function o(e, t) {
    let { r: n, g: i, b: r } = l(e);
    return `rgba(${n}, ${i}, ${r}, ${t})`;
}
function d(e, t, n) {
    return "#" + (0x1000000 + (e << 16) + (t << 8) + n).toString(16).slice(1);
}
function c(e) {
    var t, n, i;
    let r,
        a,
        s,
        o,
        d,
        c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        u = [],
        {
            h: _,
            s: E,
            l: A,
        } = ((t = e[0]),
        (r = Math.min((t /= 255), (n = e[1] / 255), (i = e[2] / 255))),
        (s = (a = Math.max(t, n, i)) - r),
        (o = 0),
        (d = 0),
        (o = Math.round(
            60 * (o = 0 === s ? 0 : a === t ? ((n - i) / s) % 6 : a === n ? (i - t) / s + 2 : (t - n) / s + 4),
        )) < 0 && (o += 360),
        (d = (a + r) / 2),
        { h: o, s: +(100 * (0 === s ? 0 : s / (1 - Math.abs(2 * d - 1)))).toFixed(1), l: (d = +(100 * d).toFixed(1)) }),
        h = _,
        I = E,
        f = A;
    I < 30 && (I += 30), f > 80 && (f -= 40), f < 20 && (f += 15);
    let p = 360 / (c + 1);
    for (; u.length < c; ) {
        (h -= p) < 0 && (h += 360);
        let {
            r: e,
            g: t,
            b: n,
        } = l(
            (function (e, t, n) {
                let i = (t * Math.min((n /= 100), 1 - n)) / 100;
                function r(t) {
                    let r = (t + e / 30) % 12;
                    return Math.round(255 * (n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1)))
                        .toString(16)
                        .padStart(2, "0");
                }
                return `#${r(0)}${r(8)}${r(4)}`;
            })(h, I, f),
        );
        u.push([e, t, n]);
    }
    return u;
}
function u(e, t, n) {
    let i,
        r,
        a = Math.max((e /= 255), (t /= 255), (n /= 255)),
        s = Math.min(e, t, n),
        l = (a + s) / 2;
    if (a === s) i = r = 0;
    else {
        let o = a - s;
        switch (((r = l > 0.5 ? o / (2 - a - s) : o / (a + s)), a)) {
            case e:
                i = (t - n) / o + 6 * (t < n);
                break;
            case t:
                i = (n - e) / o + 2;
                break;
            case n:
                i = (e - t) / o + 4;
        }
        null == i ? (i = 0) : (i /= 6);
    }
    return { hue: 360 * i, saturation: r, lightness: l, alpha: 1 };
}
function _(e, t, n) {
    let i, r, s;
    if (((e /= 360), 0 === t)) i = r = s = n;
    else {
        let a = function (e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                    ? e + (t - e) * 6 * n
                    : n < 0.5
                      ? t
                      : n < 2 / 3
                        ? e + (t - e) * (2 / 3 - n) * 6
                        : e;
            },
            l = n < 0.5 ? n * (1 + t) : n + t - n * t,
            o = 2 * n - l;
        (i = a(o, l, e + 1 / 3)), (r = a(o, l, e)), (s = a(o, l, e - 1 / 3));
    }
    return new a.A(Math.round(255 * i), Math.round(255 * r), Math.round(255 * s), 1);
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = u(e.red, e.green, e.blue);
    return (
        n
            ? (i.lightness = i.lightness + t > 1 ? 0.9 : i.lightness + t)
            : (i.lightness = i.lightness - t < 0 ? 0.1 : i.lightness - t),
        _(i.hue, i.saturation, i.lightness)
    );
}
function A(e) {
    let { foreground: t, background: n, ratio: i = 5, saturationFactor: a = 1 } = e;
    a < 1 && ((t = t.set("hsl.s", t.get("hsl.s") * a)), (n = n.set("hsl.s", n.get("hsl.s") * a)));
    let s = 0.5 >= n.luminance(),
        l = r().contrast(t, n);
    for (let e = 0; e < 10 && l < i; e++) {
        let e = t.get("hsl.l");
        if (s)
            if (e < 0.95) t = t.set("hsl.l", e + 0.05);
            else break;
        else if (e > 0.05) t = t.set("hsl.l", e - 0.05);
        else break;
        l = r().contrast(t, n);
    }
    return t.alpha(1);
}
function h(e) {
    return e
        .slice(0, 3)
        .map((e) => ({
            hex: e,
            hsv: (function (e) {
                let t, n, i, r, a;
                var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                if (null == s) return null;
                var l = parseInt(s[1], 16),
                    o = parseInt(s[2], 16),
                    d = parseInt(s[3], 16);
                let c = l / 255,
                    u = o / 255,
                    _ = d / 255,
                    E = Math.max(c, u, _),
                    A = E - Math.min(c, u, _);
                function h(e) {
                    return (E - e) / 6 / A + 0.5;
                }
                function I(e) {
                    return Math.round(100 * e) / 100;
                }
                return (
                    0 === A
                        ? (r = a = 0)
                        : ((a = A / E),
                          (t = h(c)),
                          (n = h(u)),
                          (i = h(_)),
                          (r = c === E ? i - n : u === E ? 1 / 3 + t - i : _ === E ? 2 / 3 + n - t : 0) < 0
                              ? (r += 1)
                              : r > 1 && (r -= 1)),
                    { h: Math.round(360 * r), s: I(100 * a), v: I(100 * E) }
                );
            })(e) ?? { h: 0, s: 0, v: 0 },
        }))
        .sort(I)[0].hex;
}
function I(e, t) {
    let n = e.hsv,
        i = t.hsv;
    return i.s + i.v - (n.s + n.v);
}
function f(e) {
    let { colorRGB: t, saturationFactor: n = 1 } = e;
    if (null == t) return t;
    let i = u(t.get("rgb.r"), t.get("rgb.g"), t.get("rgb.b"));
    return null == i ? t?.hex() : _(i.hue, i.saturation * n, i.lightness)?.toHexString();
}
function p(e, t, n) {
    let i = parseInt(e.substring(1, 3), 16),
        r = parseInt(e.substring(3, 5), 16),
        a = parseInt(e.substring(5, 7), 16),
        s = parseInt(t.substring(1, 3), 16),
        l = parseInt(t.substring(3, 5), 16),
        o = parseInt(t.substring(5, 7), 16),
        d = Math.round(i + (s - i) * n)
            .toString(16)
            .padStart(2, "0"),
        c = Math.round(r + (l - r) * n)
            .toString(16)
            .padStart(2, "0"),
        u = Math.round(a + (o - a) * n)
            .toString(16)
            .padStart(2, "0");
    return `#${d}${c}${u}`;
}
n(375708);
