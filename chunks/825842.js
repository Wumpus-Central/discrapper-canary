function r() {
    let e = 0,
        t = 0;
    for (let n = 0; n < 28; n += 7) {
        let r = this.buf[this.pos++];
        if (((e |= (127 & r) << n), (128 & r) == 0)) return this.assertBounds(), [e, t];
    }
    let n = this.buf[this.pos++];
    if (((e |= (15 & n) << 28), (t = (112 & n) >> 4), (128 & n) == 0)) return this.assertBounds(), [e, t];
    for (let n = 3; n <= 31; n += 7) {
        let r = this.buf[this.pos++];
        if (((t |= (127 & r) << n), (128 & r) == 0)) return this.assertBounds(), [e, t];
    }
    throw Error('invalid varint');
}
function i(e, t, n) {
    for (let r = 0; r < 28; r += 7) {
        let i = e >>> r,
            a = i >>> 7 != 0 || 0 != t,
            o = (a ? 128 | i : i) & 255;
        if ((n.push(o), !a)) return;
    }
    let r = ((e >>> 28) & 15) | ((7 & t) << 4),
        i = t >> 3 != 0;
    if ((n.push((i ? 128 | r : r) & 255), i)) {
        for (let e = 3; e < 31; e += 7) {
            let r = t >>> e,
                i = r >>> 7 != 0,
                a = (i ? 128 | r : r) & 255;
            if ((n.push(a), !i)) return;
        }
        n.push((t >>> 31) & 1);
    }
}
n.d(t, {
    IL: () => o,
    _y: () => i,
    fC: () => l,
    gn: () => s,
    jI: () => c,
    sg: () => r
});
let a = 4294967296;
function o(e) {
    let t = '-' == e[0];
    t && (e = e.slice(1));
    let n = 1000000,
        r = 0,
        i = 0;
    function o(t, o) {
        let s = Number(e.slice(t, o));
        (i *= n), (r = r * n + s) >= a && ((i += (r / a) | 0), (r %= a));
    }
    return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), [t, r, i];
}
function s(e, t) {
    if (t <= 2097151) return '' + (a * t + (e >>> 0));
    let n = 16777215 & e,
        r = (((e >>> 24) | (t << 8)) >>> 0) & 16777215,
        i = (t >> 16) & 65535,
        o = n + 6777216 * r + 6710656 * i,
        s = r + 8147497 * i,
        l = 2 * i,
        c = 10000000;
    function u(e, t) {
        let n = e ? String(e) : '';
        return t ? '0000000'.slice(n.length) + n : n;
    }
    return o >= 10000000 && ((s += Math.floor(o / c)), (o %= c)), s >= c && ((l += Math.floor(s / c)), (s %= c)), u(l, 0) + u(s, l) + u(o, 1);
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
function c() {
    let e = this.buf[this.pos++],
        t = 127 & e;
    if ((128 & e) == 0 || ((t |= (127 & (e = this.buf[this.pos++])) << 7), (128 & e) == 0) || ((t |= (127 & (e = this.buf[this.pos++])) << 14), (128 & e) == 0) || ((t |= (127 & (e = this.buf[this.pos++])) << 21), (128 & e) == 0)) return this.assertBounds(), t;
    t |= (15 & (e = this.buf[this.pos++])) << 28;
    for (let t = 5; (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
    if ((128 & e) != 0) throw Error('invalid varint');
    return this.assertBounds(), t >>> 0;
}
