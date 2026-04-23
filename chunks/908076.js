e(393431),
    e(532706),
    e(42231),
    e(232424),
    e(949626),
    e(767709),
    e(65162),
    e(508300),
    e(321073),
    self.addEventListener("message", (r) => {
        let t,
            {
                data: { id: e, placeholderData: o },
            } = r,
            c = (function (r, t, e) {
                let o = 4 * r + 1,
                    c = 6 + t * (5 + o),
                    n = [
                        137,
                        80,
                        78,
                        71,
                        13,
                        10,
                        26,
                        10,
                        0,
                        0,
                        0,
                        13,
                        73,
                        72,
                        68,
                        82,
                        0,
                        0,
                        r >> 8,
                        255 & r,
                        0,
                        0,
                        t >> 8,
                        255 & t,
                        8,
                        6,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        c >>> 24,
                        (c >> 16) & 255,
                        (c >> 8) & 255,
                        255 & c,
                        73,
                        68,
                        65,
                        84,
                        120,
                        1,
                    ],
                    a = [
                        0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c,
                        -0x12477ce0, -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88,
                        -0x42420de4,
                    ],
                    s = 1,
                    i = 0;
                for (let r = 0, c = 0, a = o - 1; r < t; r++, a += o - 1)
                    for (
                        n.push(r + 1 < t ? 0 : 1, 255 & o, o >> 8, 255 & ~o, (o >> 8) ^ 255, 0), i = (i + s) % 65521;
                        c < a;
                        c++
                    ) {
                        let r = 255 & e[c];
                        n.push(r), (i = (i + (s = (s + r) % 65521)) % 65521);
                    }
                for (let [r, t] of (n.push(
                    i >> 8,
                    255 & i,
                    s >> 8,
                    255 & s,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    73,
                    69,
                    78,
                    68,
                    174,
                    66,
                    96,
                    130,
                ),
                [
                    [12, 29],
                    [37, 41 + c],
                ])) {
                    let e = -1;
                    for (let o = r; o < t; o++) (e ^= n[o]), (e = ((e = (e >>> 4) ^ a[15 & e]) >>> 4) ^ a[15 & e]);
                    (e = ~e),
                        (n[t++] = e >>> 24),
                        (n[t++] = (e >> 16) & 255),
                        (n[t++] = (e >> 8) & 255),
                        (n[t++] = 255 & e);
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...n));
            })(
                (t = (function (r) {
                    let t,
                        e,
                        o,
                        { detail: c = 1, pop: n = 1 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { PI: a, min: s, max: i, cos: E, round: l } = Math,
                        f = r[0] | (r[1] << 8) | (r[2] << 16),
                        p = r[3] | (r[4] << 8),
                        R = (63 & f) / 63,
                        u = ((f >> 6) & 63) / 31.5 - 1,
                        d = ((f >> 12) & 63) / 31.5 - 1,
                        _ = f >> 23,
                        m = p >> 15,
                        v = i(3, m ? (_ ? 5 : 7) : 7 & p),
                        I = i(3, m ? 7 & p : _ ? 5 : 7),
                        h = _ ? (15 & r[5]) / 15 : 1,
                        x = (r[5] >> 4) / 15,
                        A = _ ? 6 : 5,
                        O = 0,
                        T = (t, e, o) => {
                            let c = [];
                            for (let n = 0; n < e; n++)
                                for (let a = +!n; a * e < t * (e - n); a++)
                                    c.push((((r[A + (O >> 1)] >> ((1 & O++) << 2)) & 15) / 7.5 - 1) * o);
                            return c;
                        },
                        b = T(v, I, ((f >> 18) & 31) / 31 / 2),
                        N = T(3, 3, (((p >> 3) & 63) / 63) * n),
                        S = T(3, 3, (((p >> 9) & 63) / 63) * n),
                        D = _ ? T(5, 5, x) : [],
                        y =
                            ((t = r[3]),
                            (e = 128 & r[2]),
                            ((o = 128 & r[4]) ? (e ? 5 : 7) : 7 & t) / (o ? 7 & t : e ? 5 : 7)),
                        g = l(y > 1 ? 32 : 32 * y),
                        w = l(y > 1 ? 32 / y : 32),
                        C = new Uint8Array(g * w * 4),
                        M = [],
                        k = [];
                    for (let r = 0, t = 0; r < w; r++)
                        for (let e = 0; e < g; e++, t += 4) {
                            let o = R,
                                n = u,
                                l = d,
                                f = h;
                            for (let r = 0, t = i(v, _ ? 5 : 3); r < t; r++) M[r] = E((a / g) * (e + 0.5) * r);
                            for (let t = 0, e = i(I, _ ? 5 : 3); t < e; t++) k[t] = E((a / w) * (r + 0.5) * t);
                            for (let r = 0, t = 0; r < I; r++)
                                for (let e = +!r, n = 2 * k[r]; e * I < v * (I - r); e++, t++)
                                    e > c || r > c || (o += b[t] * M[e] * n);
                            for (let r = 0, t = 0; r < 3; r++)
                                for (let e = +!r, o = 2 * k[r]; e < 3 - r; e++, t++) {
                                    let r = M[e] * o;
                                    (n += N[t] * r), (l += S[t] * r);
                                }
                            if (_)
                                for (let r = 0, t = 0; r < 5; r++)
                                    for (let e = +!r, o = 2 * k[r]; e < 5 - r; e++, t++) f += D[t] * M[e] * o;
                            let p = o - (2 / 3) * n,
                                m = (3 * o - p + l) / 2,
                                x = m - l;
                            (C[t] = i(0, 255 * s(1, m))),
                                (C[t + 1] = i(0, 255 * s(1, x))),
                                (C[t + 2] = i(0, 255 * s(1, p))),
                                (C[t + 3] = i(0, 255 * s(1, f)));
                        }
                    return { w: g, h: w, rgba: C };
                })(
                    Uint8Array.from(atob(o), (r) => r.charCodeAt(0)),
                    { detail: 1, pop: 1.1 },
                )).w,
                t.h,
                t.rgba,
            );
        self.postMessage({ png: c, id: e });
    });
