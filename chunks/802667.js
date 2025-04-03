n.d(e, { E: () => f });
var r = n(180450),
    i = n(241303),
    s = n(520589),
    o = n(362133);
function h(t, e, n, r, i, s) {
    let h = t[e++] ^ n[r++],
        a = t[e++] ^ n[r++],
        f = t[e++] ^ n[r++],
        c = t[e++] ^ n[r++],
        l = t[e++] ^ n[r++],
        u = t[e++] ^ n[r++],
        d = t[e++] ^ n[r++],
        x = t[e++] ^ n[r++],
        p = t[e++] ^ n[r++],
        b = t[e++] ^ n[r++],
        g = t[e++] ^ n[r++],
        y = t[e++] ^ n[r++],
        w = t[e++] ^ n[r++],
        G = t[e++] ^ n[r++],
        L = t[e++] ^ n[r++],
        X = t[e++] ^ n[r++],
        U = h,
        A = a,
        E = f,
        H = c,
        I = l,
        k = u,
        v = d,
        m = x,
        O = p,
        R = b,
        _ = g,
        B = y,
        C = w,
        J = G,
        j = L,
        D = X;
    for (let t = 0; t < 8; t += 2) (I ^= (0, o.XG)((U + C) | 0, 7)), (O ^= (0, o.XG)((I + U) | 0, 9)), (C ^= (0, o.XG)((O + I) | 0, 13)), (U ^= (0, o.XG)((C + O) | 0, 18)), (R ^= (0, o.XG)((k + A) | 0, 7)), (J ^= (0, o.XG)((R + k) | 0, 9)), (A ^= (0, o.XG)((J + R) | 0, 13)), (k ^= (0, o.XG)((A + J) | 0, 18)), (j ^= (0, o.XG)((_ + v) | 0, 7)), (E ^= (0, o.XG)((j + _) | 0, 9)), (v ^= (0, o.XG)((E + j) | 0, 13)), (_ ^= (0, o.XG)((v + E) | 0, 18)), (H ^= (0, o.XG)((D + B) | 0, 7)), (m ^= (0, o.XG)((H + D) | 0, 9)), (B ^= (0, o.XG)((m + H) | 0, 13)), (D ^= (0, o.XG)((B + m) | 0, 18)), (A ^= (0, o.XG)((U + H) | 0, 7)), (E ^= (0, o.XG)((A + U) | 0, 9)), (H ^= (0, o.XG)((E + A) | 0, 13)), (U ^= (0, o.XG)((H + E) | 0, 18)), (v ^= (0, o.XG)((k + I) | 0, 7)), (m ^= (0, o.XG)((v + k) | 0, 9)), (I ^= (0, o.XG)((m + v) | 0, 13)), (k ^= (0, o.XG)((I + m) | 0, 18)), (B ^= (0, o.XG)((_ + R) | 0, 7)), (O ^= (0, o.XG)((B + _) | 0, 9)), (R ^= (0, o.XG)((O + B) | 0, 13)), (_ ^= (0, o.XG)((R + O) | 0, 18)), (C ^= (0, o.XG)((D + j) | 0, 7)), (J ^= (0, o.XG)((C + D) | 0, 9)), (j ^= (0, o.XG)((J + C) | 0, 13)), (D ^= (0, o.XG)((j + J) | 0, 18));
    (i[s++] = (h + U) | 0), (i[s++] = (a + A) | 0), (i[s++] = (f + E) | 0), (i[s++] = (c + H) | 0), (i[s++] = (l + I) | 0), (i[s++] = (u + k) | 0), (i[s++] = (d + v) | 0), (i[s++] = (x + m) | 0), (i[s++] = (p + O) | 0), (i[s++] = (b + R) | 0), (i[s++] = (g + _) | 0), (i[s++] = (y + B) | 0), (i[s++] = (w + C) | 0), (i[s++] = (G + J) | 0), (i[s++] = (L + j) | 0), (i[s++] = (X + D) | 0);
}
function a(t, e, n, r, i) {
    let s = r + 0,
        o = r + 16 * i;
    for (let r = 0; r < 16; r++) n[o + r] = t[e + (2 * i - 1) * 16 + r];
    for (let r = 0; r < i; r++, s += 16, e += 16) h(n, o, t, e, n, s), r > 0 && (o += 16), h(n, s, t, (e += 16), n, o);
}
async function f(t, e, n) {
    let {
        N: h,
        r: f,
        p: c,
        dkLen: l,
        blockSize32: u,
        V: d,
        B32: x,
        B: p,
        tmp: b,
        blockMixCb: g,
        asyncTick: y
    } = (function (t, e, n) {
        let {
            N: h,
            r: a,
            p: f,
            dkLen: c,
            asyncTick: l,
            maxmem: u,
            onProgress: d
        } = (0, o.U5)(
            {
                dkLen: 32,
                asyncTick: 10,
                maxmem: 1073742848
            },
            n
        );
        if (((0, r.Rx)(h), (0, r.Rx)(a), (0, r.Rx)(f), (0, r.Rx)(c), (0, r.Rx)(l), (0, r.Rx)(u), void 0 !== d && 'function' != typeof d)) throw Error('progressCb should be function');
        let x = 128 * a,
            p = x / 4;
        if (h <= 1 || (h & (h - 1)) != 0 || h > 4294967296) throw Error('Scrypt: N must be larger than 1, a power of 2, and less than 2^32');
        if (f < 0 || f > ((4294967296 - 1) * 32) / x) throw Error('Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)');
        if (c < 0 || c > (4294967296 - 1) * 32) throw Error('Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32');
        let b = x * (h + f);
        if (b > u) throw Error(`Scrypt: parameters too large, ${b} (128 * r * (N + p)) > ${u} (maxmem)`);
        let g = (0, s.n)(i.JQ, t, e, {
                c: 1,
                dkLen: x * f
            }),
            y = (0, o.Jq)(g),
            w = (0, o.Jq)(new Uint8Array(x * h)),
            G = (0, o.Jq)(new Uint8Array(x)),
            L = () => {};
        if (d) {
            let t = 2 * h * f,
                e = Math.max(Math.floor(t / 10000), 1),
                n = 0;
            L = () => {
                n++, d && (!(n % e) || n === t) && d(n / t);
            };
        }
        return {
            N: h,
            r: a,
            p: f,
            dkLen: c,
            blockSize32: p,
            V: w,
            B32: y,
            B: g,
            tmp: G,
            blockMixCb: L,
            asyncTick: l
        };
    })(t, e, n);
    o.iA || (0, o.l1)(x);
    for (let t = 0; t < c; t++) {
        let e = u * t;
        for (let t = 0; t < u; t++) d[t] = x[e + t];
        let n = 0;
        await (0, o.oY)(h - 1, y, () => {
            a(d, n, d, (n += u), f), g();
        }),
            a(d, (h - 1) * u, x, e, f),
            g(),
            await (0, o.oY)(h, y, () => {
                let t = x[e + u - 16] % h;
                for (let n = 0; n < u; n++) b[n] = x[e + n] ^ d[t * u + n];
                a(b, 0, x, e, f), g();
            });
    }
    o.iA || (0, o.l1)(x);
    let w = (0, s.n)(i.JQ, t, p, {
        c: 1,
        dkLen: l
    });
    return p.fill(0), d.fill(0), b.fill(0), w;
}
