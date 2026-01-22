t.d(r, { H: () => a }),
    t(927092),
    t(212978),
    t(201528),
    t(393431),
    t(752391),
    t(532706),
    t(42231),
    t(232424),
    t(757074),
    t(949626),
    t(767709),
    t(65162),
    t(21862),
    t(801460),
    t(508300),
    t(650828),
    t(321073);
var o = t(344390);
function a(e) {
    let r = (function (e) {
        let { detail: r = 1, pop: t = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: a, min: l, max: n, cos: i, round: f } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            p = e[3] | (e[4] << 8),
            u = (63 & s) / 63,
            d = ((s >> 6) & 63) / 31.5 - 1,
            c = ((s >> 12) & 63) / 31.5 - 1,
            h = s >> 23,
            v = p >> 15,
            b = n(3, v ? (h ? 5 : 7) : 7 & p),
            g = n(3, v ? 7 & p : h ? 5 : 7),
            y = h ? (15 & e[5]) / 15 : 1,
            O = (e[5] >> 4) / 15,
            m = h ? 6 : 5,
            w = 0,
            x = (r, t, o) => {
                let a = [];
                for (let l = 0; l < t; l++)
                    for (let n = +!l; n * t < r * (t - l); n++)
                        a.push((((e[m + (w >> 1)] >> ((1 & w++) << 2)) & 15) / 7.5 - 1) * o);
                return a;
            },
            j = x(b, g, ((s >> 18) & 31) / 31 / 2),
            k = x(3, 3, (((p >> 3) & 63) / 63) * t),
            M = x(3, 3, (((p >> 9) & 63) / 63) * t),
            P = h ? x(5, 5, O) : [],
            _ = (0, o.HM)(e),
            A = f(_ > 1 ? 32 : 32 * _),
            C = f(_ > 1 ? 32 / _ : 32),
            H = new Uint8Array(A * C * 4),
            T = [],
            U = [];
        for (let e = 0, t = 0; e < C; e++)
            for (let o = 0; o < A; o++, t += 4) {
                let f = u,
                    s = d,
                    p = c,
                    v = y;
                for (let e = 0, r = n(b, h ? 5 : 3); e < r; e++) T[e] = i((a / A) * (o + 0.5) * e);
                for (let r = 0, t = n(g, h ? 5 : 3); r < t; r++) U[r] = i((a / C) * (e + 0.5) * r);
                for (let e = 0, t = 0; e < g; e++)
                    for (let o = +!e, a = 2 * U[e]; o * g < b * (g - e); o++, t++)
                        o > r || e > r || (f += j[t] * T[o] * a);
                for (let e = 0, r = 0; e < 3; e++)
                    for (let t = +!e, o = 2 * U[e]; t < 3 - e; t++, r++) {
                        let e = T[t] * o;
                        (s += k[r] * e), (p += M[r] * e);
                    }
                if (h)
                    for (let e = 0, r = 0; e < 5; e++)
                        for (let t = +!e, o = 2 * U[e]; t < 5 - e; t++, r++) v += P[r] * T[t] * o;
                let O = f - (2 / 3) * s,
                    m = (3 * f - O + p) / 2,
                    w = m - p;
                (H[t] = n(0, 255 * l(1, m))),
                    (H[t + 1] = n(0, 255 * l(1, w))),
                    (H[t + 2] = n(0, 255 * l(1, O))),
                    (H[t + 3] = n(0, 255 * l(1, v)));
            }
        return {
            w: A,
            h: C,
            rgba: H,
        };
    })(
        Uint8Array.from(atob(e), (e) => e.charCodeAt(0)),
        {
            detail: 1,
            pop: 1.1,
        },
    );
    return (0, o.J9)(r.w, r.h, r.rgba);
}
