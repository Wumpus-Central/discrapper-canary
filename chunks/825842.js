function i() {
    let e = 0,
        t = 0;
    for (let n = 0; n < 28; n += 7) {
        let i = this.buf[this.pos++];
        if (((e |= (127 & i) << n), (128 & i) == 0)) return this.assertBounds(), [e, t];
    }
    let n = this.buf[this.pos++];
    if (((e |= (15 & n) << 28), (t = (112 & n) >> 4), (128 & n) == 0)) return this.assertBounds(), [e, t];
    for (let n = 3; n <= 31; n += 7) {
        let i = this.buf[this.pos++];
        if (((t |= (127 & i) << n), (128 & i) == 0)) return this.assertBounds(), [e, t];
    }
    throw Error('invalid varint');
}
function r(e, t, n) {
    for (let i = 0; i < 28; i += 7) {
        let r = e >>> i,
            a = !(r >>> 7 == 0 && 0 == t),
            s = (a ? 128 | r : r) & 255;
        if ((n.push(s), !a)) return;
    }
    let i = ((e >>> 28) & 15) | ((7 & t) << 4),
        r = t >> 3 != 0;
    if ((n.push((r ? 128 | i : i) & 255), r)) {
        for (let e = 3; e < 31; e += 7) {
            let i = t >>> e,
                r = i >>> 7 != 0,
                a = (r ? 128 | i : i) & 255;
            if ((n.push(a), !r)) return;
        }
        n.push((t >>> 31) & 1);
    }
}
n.d(t, {
    IL: () => s,
    _y: () => r,
    fC: () => l,
    gn: () => o,
    jI: () => u,
    sg: () => i
});
let a = 4294967296;
function s(e) {
    let t = '-' == e[0];
    t && (e = e.slice(1));
    let n = 1000000,
        i = 0,
        r = 0;
    function s(t, s) {
        let o = Number(e.slice(t, s));
        (r *= n), (i = i * n + o) >= a && ((r += (i / a) | 0), (i %= a));
    }
    return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), [t, i, r];
}
function o(e, t) {
    if (t <= 2097151) return '' + (a * t + (e >>> 0));
    let n = 16777215 & e,
        i = (((e >>> 24) | (t << 8)) >>> 0) & 16777215,
        r = (t >> 16) & 65535,
        s = n + 6777216 * i + 6710656 * r,
        o = i + 8147497 * r,
        l = 2 * r,
        u = 10000000;
    function c(e, t) {
        let n = e ? String(e) : '';
        return t ? '0000000'.slice(n.length) + n : n;
    }
    return s >= 10000000 && ((o += Math.floor(s / u)), (s %= u)), o >= u && ((l += Math.floor(o / u)), (o %= u)), c(l, 0) + c(o, l) + c(s, 1);
}
function l(e, t) {
    if (e >= 0) {
        for (; e > 127; ) t.push((127 & e) | 128), (e >>>= 7);
        t.push(e);
    } else {
        for (let n = 0; n < 9; n++) t.push((127 & e) | 128), (e >>= 7);
        t.push(1);
    }
}
function u() {
    let e = this.buf[this.pos++],
        t = 127 & e;
    if ((128 & e) == 0 || ((t |= (127 & (e = this.buf[this.pos++])) << 7), (128 & e) == 0) || ((t |= (127 & (e = this.buf[this.pos++])) << 14), (128 & e) == 0) || ((t |= (127 & (e = this.buf[this.pos++])) << 21), (128 & e) == 0)) return this.assertBounds(), t;
    t |= (15 & (e = this.buf[this.pos++])) << 28;
    for (let t = 5; (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
    if ((128 & e) != 0) throw Error('invalid varint');
    return this.assertBounds(), t >>> 0;
}
