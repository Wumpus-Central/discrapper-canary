n.d(t, { E: () => d });
var r = n(134994),
    i = n(832454),
    a = n(741605),
    o = n(492733);
function s(e, t, n, r, i, a) {
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
        C = d,
        N = f,
        R = _,
        P = p,
        D = h,
        w = m,
        L = g,
        x = E,
        M = b,
        j = y,
        k = O,
        U = v;
    for (let e = 0; e < 8; e += 2)
        (C ^= (0, o.XG)((I + M) | 0, 7)),
            (D ^= (0, o.XG)((C + I) | 0, 9)),
            (M ^= (0, o.XG)((D + C) | 0, 13)),
            (I ^= (0, o.XG)((M + D) | 0, 18)),
            (w ^= (0, o.XG)((N + T) | 0, 7)),
            (j ^= (0, o.XG)((w + N) | 0, 9)),
            (T ^= (0, o.XG)((j + w) | 0, 13)),
            (N ^= (0, o.XG)((T + j) | 0, 18)),
            (k ^= (0, o.XG)((L + R) | 0, 7)),
            (S ^= (0, o.XG)((k + L) | 0, 9)),
            (R ^= (0, o.XG)((S + k) | 0, 13)),
            (L ^= (0, o.XG)((R + S) | 0, 18)),
            (A ^= (0, o.XG)((U + x) | 0, 7)),
            (P ^= (0, o.XG)((A + U) | 0, 9)),
            (x ^= (0, o.XG)((P + A) | 0, 13)),
            (U ^= (0, o.XG)((x + P) | 0, 18)),
            (T ^= (0, o.XG)((I + A) | 0, 7)),
            (S ^= (0, o.XG)((T + I) | 0, 9)),
            (A ^= (0, o.XG)((S + T) | 0, 13)),
            (I ^= (0, o.XG)((A + S) | 0, 18)),
            (R ^= (0, o.XG)((N + C) | 0, 7)),
            (P ^= (0, o.XG)((R + N) | 0, 9)),
            (C ^= (0, o.XG)((P + R) | 0, 13)),
            (N ^= (0, o.XG)((C + P) | 0, 18)),
            (x ^= (0, o.XG)((L + w) | 0, 7)),
            (D ^= (0, o.XG)((x + L) | 0, 9)),
            (w ^= (0, o.XG)((D + x) | 0, 13)),
            (L ^= (0, o.XG)((w + D) | 0, 18)),
            (M ^= (0, o.XG)((U + k) | 0, 7)),
            (j ^= (0, o.XG)((M + U) | 0, 9)),
            (k ^= (0, o.XG)((j + M) | 0, 13)),
            (U ^= (0, o.XG)((k + j) | 0, 18));
    (i[a++] = (s + I) | 0),
        (i[a++] = (l + T) | 0),
        (i[a++] = (c + S) | 0),
        (i[a++] = (u + A) | 0),
        (i[a++] = (d + C) | 0),
        (i[a++] = (f + N) | 0),
        (i[a++] = (_ + R) | 0),
        (i[a++] = (p + P) | 0),
        (i[a++] = (h + D) | 0),
        (i[a++] = (m + w) | 0),
        (i[a++] = (g + L) | 0),
        (i[a++] = (E + x) | 0),
        (i[a++] = (b + M) | 0),
        (i[a++] = (y + j) | 0),
        (i[a++] = (O + k) | 0),
        (i[a++] = (v + U) | 0);
}
function l(e, t, n, r, i) {
    let a = r + 0,
        o = r + 16 * i;
    for (let r = 0; r < 16; r++) n[o + r] = e[t + (2 * i - 1) * 16 + r];
    for (let r = 0; r < i; r++, a += 16, t += 16) s(n, o, e, t, n, a), r > 0 && (o += 16), s(n, a, e, (t += 16), n, o);
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
    } = (0, o.U5)(
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
    let g = (0, a.n)(i.JQ, e, t, {
            c: 1,
            dkLen: p * c,
        }),
        E = (0, o.Jq)(g),
        b = (0, o.Jq)(new Uint8Array(p * s)),
        y = (0, o.Jq)(new Uint8Array(p)),
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
function u(e, t, n, r, o) {
    let s = (0, a.n)(i.JQ, e, n, {
        c: 1,
        dkLen: t,
    });
    return n.fill(0), r.fill(0), o.fill(0), s;
}
async function d(e, t, n) {
    let {
        N: r,
        r: i,
        p: a,
        dkLen: s,
        blockSize32: d,
        V: f,
        B32: _,
        B: p,
        tmp: h,
        blockMixCb: m,
        asyncTick: g,
    } = c(e, t, n);
    o.iA || (0, o.l1)(_);
    for (let e = 0; e < a; e++) {
        let t = d * e;
        for (let e = 0; e < d; e++) f[e] = _[t + e];
        let n = 0;
        await (0, o.oY)(r - 1, g, () => {
            l(f, n, f, (n += d), i), m();
        }),
            l(f, (r - 1) * d, _, t, i),
            m(),
            await (0, o.oY)(r, g, () => {
                let e = _[t + d - 16] % r;
                for (let n = 0; n < d; n++) h[n] = _[t + n] ^ f[e * d + n];
                l(h, 0, _, t, i), m();
            });
    }
    return o.iA || (0, o.l1)(_), u(e, s, p, f, h);
}
