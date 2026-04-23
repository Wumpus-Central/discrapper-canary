e.d(t, { H: () => n }), e(393431), e(532706), e(42231), e(232424), e(949626), e(767709), e(65162), e(508300), e(321073);
var o = e(344390);
function n(r) {
    let t = (function (r) {
        let { detail: t = 1, pop: e = 1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { PI: n, min: c, max: a, cos: s, round: i } = Math,
            E = r[0] | (r[1] << 8) | (r[2] << 16),
            l = r[3] | (r[4] << 8),
            f = (63 & E) / 63,
            p = ((E >> 6) & 63) / 31.5 - 1,
            R = ((E >> 12) & 63) / 31.5 - 1,
            u = E >> 23,
            d = l >> 15,
            _ = a(3, d ? (u ? 5 : 7) : 7 & l),
            m = a(3, d ? 7 & l : u ? 5 : 7),
            v = u ? (15 & r[5]) / 15 : 1,
            I = (r[5] >> 4) / 15,
            O = u ? 6 : 5,
            b = 0,
            h = (t, e, o) => {
                let n = [];
                for (let c = 0; c < e; c++)
                    for (let a = +!c; a * e < t * (e - c); a++)
                        n.push((((r[O + (b >> 1)] >> ((1 & b++) << 2)) & 15) / 7.5 - 1) * o);
                return n;
            },
            x = h(_, m, ((E >> 18) & 31) / 31 / 2),
            A = h(3, 3, (((l >> 3) & 63) / 63) * e),
            T = h(3, 3, (((l >> 9) & 63) / 63) * e),
            N = u ? h(5, 5, I) : [],
            S = (0, o.HM)(r),
            y = i(S > 1 ? 32 : 32 * S),
            D = i(S > 1 ? 32 / S : 32),
            g = new Uint8Array(y * D * 4),
            w = [],
            C = [];
        for (let r = 0, e = 0; r < D; r++)
            for (let o = 0; o < y; o++, e += 4) {
                let i = f,
                    E = p,
                    l = R,
                    d = v;
                for (let r = 0, t = a(_, u ? 5 : 3); r < t; r++) w[r] = s((n / y) * (o + 0.5) * r);
                for (let t = 0, e = a(m, u ? 5 : 3); t < e; t++) C[t] = s((n / D) * (r + 0.5) * t);
                for (let r = 0, e = 0; r < m; r++)
                    for (let o = +!r, n = 2 * C[r]; o * m < _ * (m - r); o++, e++)
                        o > t || r > t || (i += x[e] * w[o] * n);
                for (let r = 0, t = 0; r < 3; r++)
                    for (let e = +!r, o = 2 * C[r]; e < 3 - r; e++, t++) {
                        let r = w[e] * o;
                        (E += A[t] * r), (l += T[t] * r);
                    }
                if (u)
                    for (let r = 0, t = 0; r < 5; r++)
                        for (let e = +!r, o = 2 * C[r]; e < 5 - r; e++, t++) d += N[t] * w[e] * o;
                let I = i - (2 / 3) * E,
                    O = (3 * i - I + l) / 2,
                    b = O - l;
                (g[e] = a(0, 255 * c(1, O))),
                    (g[e + 1] = a(0, 255 * c(1, b))),
                    (g[e + 2] = a(0, 255 * c(1, I))),
                    (g[e + 3] = a(0, 255 * c(1, d)));
            }
        return { w: y, h: D, rgba: g };
    })(
        Uint8Array.from(atob(r), (r) => r.charCodeAt(0)),
        { detail: 1, pop: 1.1 },
    );
    return (0, o.J9)(t.w, t.h, t.rgba);
}
