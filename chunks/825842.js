function i() {
    let e = 0,
        n = 0;
    for (let r = 0; r < 28; r += 7) {
        let i = this.buf[this.pos++];
        if (((e |= (127 & i) << r), (128 & i) == 0)) return this.assertBounds(), [e, n];
    }
    let r = this.buf[this.pos++];
    if (((e |= (15 & r) << 28), (n = (112 & r) >> 4), (128 & r) == 0)) return this.assertBounds(), [e, n];
    for (let r = 3; r <= 31; r += 7) {
        let i = this.buf[this.pos++];
        if (((n |= (127 & i) << r), (128 & i) == 0)) return this.assertBounds(), [e, n];
    }
    throw Error('invalid varint');
}
function a(e, n, r) {
    for (let i = 0; i < 28; i += 7) {
        let a = e >>> i,
            o = !(a >>> 7 == 0 && 0 == n),
            s = (o ? 128 | a : a) & 255;
        if ((r.push(s), !o)) return;
    }
    let i = ((e >>> 28) & 15) | ((7 & n) << 4),
        a = n >> 3 != 0;
    if ((r.push((a ? 128 | i : i) & 255), !!a)) {
        for (let e = 3; e < 31; e += 7) {
            let i = n >>> e,
                a = i >>> 7 != 0,
                o = (a ? 128 | i : i) & 255;
            if ((r.push(o), !a)) return;
        }
        r.push((n >>> 31) & 1);
    }
}
r.d(n, {
    IL: function () {
        return s;
    },
    _y: function () {
        return a;
    },
    fC: function () {
        return u;
    },
    gn: function () {
        return l;
    },
    jI: function () {
        return c;
    },
    sg: function () {
        return i;
    }
});
let o = 4294967296;
function s(e) {
    let n = '-' == e[0];
    n && (e = e.slice(1));
    let r = 1000000,
        i = 0,
        a = 0;
    function s(n, s) {
        let l = Number(e.slice(n, s));
        (a *= r), (i = i * r + l) >= o && ((a += (i / o) | 0), (i %= o));
    }
    return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), [n, i, a];
}
function l(e, n) {
    if (n <= 2097151) return '' + (o * n + (e >>> 0));
    let r = 16777215 & e,
        i = (((e >>> 24) | (n << 8)) >>> 0) & 16777215,
        a = (n >> 16) & 65535,
        s = r + 6777216 * i + 6710656 * a,
        l = i + 8147497 * a,
        u = 2 * a,
        c = 10000000;
    function d(e, n) {
        let r = e ? String(e) : '';
        return n ? '0000000'.slice(r.length) + r : r;
    }
    return s >= 10000000 && ((l += Math.floor(s / c)), (s %= c)), l >= c && ((u += Math.floor(l / c)), (l %= c)), d(u, 0) + d(l, u) + d(s, 1);
}
function u(e, n) {
    if (e >= 0) {
        for (; e > 127; ) n.push((127 & e) | 128), (e >>>= 7);
        n.push(e);
    } else {
        for (let r = 0; r < 9; r++) n.push((127 & e) | 128), (e >>= 7);
        n.push(1);
    }
}
function c() {
    let e = this.buf[this.pos++],
        n = 127 & e;
    if ((128 & e) == 0) return this.assertBounds(), n;
    if (((n |= (127 & (e = this.buf[this.pos++])) << 7), (128 & e) == 0)) return this.assertBounds(), n;
    if (((n |= (127 & (e = this.buf[this.pos++])) << 14), (128 & e) == 0)) return this.assertBounds(), n;
    if (((n |= (127 & (e = this.buf[this.pos++])) << 21), (128 & e) == 0)) return this.assertBounds(), n;
    n |= (15 & (e = this.buf[this.pos++])) << 28;
    for (let n = 5; (128 & e) != 0 && n < 10; n++) e = this.buf[this.pos++];
    if ((128 & e) != 0) throw Error('invalid varint');
    return this.assertBounds(), n >>> 0;
}
