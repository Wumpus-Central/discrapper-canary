n.d(t, { E: () => d });
var r = n(134994),
    i = n(832454),
    o = n(741605),
    a = n(492733);
function s(e, t, n, r, i, o) {
    let s = e[t++] ^ n[r++],
        l = e[t++] ^ n[r++],
        c = e[t++] ^ n[r++],
        u = e[t++] ^ n[r++],
        d = e[t++] ^ n[r++],
        f = e[t++] ^ n[r++],
        _ = e[t++] ^ n[r++],
        p = e[t++] ^ n[r++],
        h = e[t++] ^ n[r++],
        m = e[t++] ^ n[r++],
        g = e[t++] ^ n[r++],
        E = e[t++] ^ n[r++],
        b = e[t++] ^ n[r++],
        y = e[t++] ^ n[r++],
        O = e[t++] ^ n[r++],
        v = e[t++] ^ n[r++],
        I = s,
        T = l,
        S = c,
        A = u,
        N = d,
        C = f,
        R = _,
        P = p,
        w = h,
        D = m,
        L = g,
        x = E,
        M = b,
        k = y,
        j = O,
        U = v;
    for (let e = 0; e < 8; e += 2)
        (N ^= (0, a.XG)((I + M) | 0, 7)),
            (w ^= (0, a.XG)((N + I) | 0, 9)),
            (M ^= (0, a.XG)((w + N) | 0, 13)),
            (I ^= (0, a.XG)((M + w) | 0, 18)),
            (D ^= (0, a.XG)((C + T) | 0, 7)),
            (k ^= (0, a.XG)((D + C) | 0, 9)),
            (T ^= (0, a.XG)((k + D) | 0, 13)),
            (C ^= (0, a.XG)((T + k) | 0, 18)),
            (j ^= (0, a.XG)((L + R) | 0, 7)),
            (S ^= (0, a.XG)((j + L) | 0, 9)),
            (R ^= (0, a.XG)((S + j) | 0, 13)),
            (L ^= (0, a.XG)((R + S) | 0, 18)),
            (A ^= (0, a.XG)((U + x) | 0, 7)),
            (P ^= (0, a.XG)((A + U) | 0, 9)),
            (x ^= (0, a.XG)((P + A) | 0, 13)),
            (U ^= (0, a.XG)((x + P) | 0, 18)),
            (T ^= (0, a.XG)((I + A) | 0, 7)),
            (S ^= (0, a.XG)((T + I) | 0, 9)),
            (A ^= (0, a.XG)((S + T) | 0, 13)),
            (I ^= (0, a.XG)((A + S) | 0, 18)),
            (R ^= (0, a.XG)((C + N) | 0, 7)),
            (P ^= (0, a.XG)((R + C) | 0, 9)),
            (N ^= (0, a.XG)((P + R) | 0, 13)),
            (C ^= (0, a.XG)((N + P) | 0, 18)),
            (x ^= (0, a.XG)((L + D) | 0, 7)),
            (w ^= (0, a.XG)((x + L) | 0, 9)),
            (D ^= (0, a.XG)((w + x) | 0, 13)),
            (L ^= (0, a.XG)((D + w) | 0, 18)),
            (M ^= (0, a.XG)((U + j) | 0, 7)),
            (k ^= (0, a.XG)((M + U) | 0, 9)),
            (j ^= (0, a.XG)((k + M) | 0, 13)),
            (U ^= (0, a.XG)((j + k) | 0, 18));
    (i[o++] = (s + I) | 0),
        (i[o++] = (l + T) | 0),
        (i[o++] = (c + S) | 0),
        (i[o++] = (u + A) | 0),
        (i[o++] = (d + N) | 0),
        (i[o++] = (f + C) | 0),
        (i[o++] = (_ + R) | 0),
        (i[o++] = (p + P) | 0),
        (i[o++] = (h + w) | 0),
        (i[o++] = (m + D) | 0),
        (i[o++] = (g + L) | 0),
        (i[o++] = (E + x) | 0),
        (i[o++] = (b + M) | 0),
        (i[o++] = (y + k) | 0),
        (i[o++] = (O + j) | 0),
        (i[o++] = (v + U) | 0);
}
function l(e, t, n, r, i) {
    let o = r + 0,
        a = r + 16 * i;
    for (let r = 0; r < 16; r++) n[a + r] = e[t + (2 * i - 1) * 16 + r];
    for (let r = 0; r < i; r++, o += 16, t += 16) s(n, a, e, t, n, o), r > 0 && (a += 16), s(n, o, e, (t += 16), n, a);
}
function c(e, t, n) {
    let {
        N: s,
        r: l,
        p: c,
        dkLen: u,
        asyncTick: d,
        maxmem: f,
        onProgress: _,
    } = (0, a.U5)(
        {
            dkLen: 32,
            asyncTick: 10,
            maxmem: 1073742848,
        },
        n,
    );
    if (
        ((0, r.Rx)(s),
        (0, r.Rx)(l),
        (0, r.Rx)(c),
        (0, r.Rx)(u),
        (0, r.Rx)(d),
        (0, r.Rx)(f),
        void 0 !== _ && "function" != typeof _)
    )
        throw Error("progressCb should be function");
    let p = 128 * l,
        h = p / 4;
    if (s <= 1 || (s & (s - 1)) != 0 || s > 4294967296)
        throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
    if (c < 0 || c > ((4294967296 - 1) * 32) / p)
        throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
    if (u < 0 || u > (4294967296 - 1) * 32)
        throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
    let m = p * (s + c);
    if (m > f) throw Error(`Scrypt: parameters too large, ${m} (128 * r * (N + p)) > ${f} (maxmem)`);
    let g = (0, o.n)(i.JQ, e, t, {
            c: 1,
            dkLen: p * c,
        }),
        E = (0, a.Jq)(g),
        b = (0, a.Jq)(new Uint8Array(p * s)),
        y = (0, a.Jq)(new Uint8Array(p)),
        O = () => {};
    if (_) {
        let e = 2 * s * c,
            t = Math.max(Math.floor(e / 10000), 1),
            n = 0;
        O = () => {
            n++, _ && (!(n % t) || n === e) && _(n / e);
        };
    }
    return {
        N: s,
        r: l,
        p: c,
        dkLen: u,
        blockSize32: h,
        V: b,
        B32: E,
        B: g,
        tmp: y,
        blockMixCb: O,
        asyncTick: d,
    };
}
function u(e, t, n, r, a) {
    let s = (0, o.n)(i.JQ, e, n, {
        c: 1,
        dkLen: t,
    });
    return n.fill(0), r.fill(0), a.fill(0), s;
}
async function d(e, t, n) {
    let {
        N: r,
        r: i,
        p: o,
        dkLen: s,
        blockSize32: d,
        V: f,
        B32: _,
        B: p,
        tmp: h,
        blockMixCb: m,
        asyncTick: g,
    } = c(e, t, n);
    a.iA || (0, a.l1)(_);
    for (let e = 0; e < o; e++) {
        let t = d * e;
        for (let e = 0; e < d; e++) f[e] = _[t + e];
        let n = 0;
        await (0, a.oY)(r - 1, g, () => {
            l(f, n, f, (n += d), i), m();
        }),
            l(f, (r - 1) * d, _, t, i),
            m(),
            await (0, a.oY)(r, g, () => {
                let e = _[t + d - 16] % r;
                for (let n = 0; n < d; n++) h[n] = _[t + n] ^ f[e * d + n];
                l(h, 0, _, t, i), m();
            });
    }
    return a.iA || (0, a.l1)(_), u(e, s, p, f, h);
}
