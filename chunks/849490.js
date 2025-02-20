var r = n(689118),
    i = n(676972),
    o = n(957578).Buffer,
    a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    s = Array(64);
function l() {
    this.init(), (this._w = s), i.call(this, 64, 56);
}
function c(e, t, n) {
    return n ^ (e & (t ^ n));
}
function u(e, t, n) {
    return (e & t) | (n & (e | t));
}
function d(e) {
    return ((e >>> 2) | (e << 30)) ^ ((e >>> 13) | (e << 19)) ^ ((e >>> 22) | (e << 10));
}
function f(e) {
    return ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
}
function p(e) {
    return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function _(e) {
    return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
r(l, i),
    (l.prototype.init = function () {
        return (this._a = 1779033703), (this._b = 3144134277), (this._c = 1013904242), (this._d = 2773480762), (this._e = 1359893119), (this._f = 2600822924), (this._g = 528734635), (this._h = 1541459225), this;
    }),
    (l.prototype._update = function (e) {
        for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, s = 0 | this._e, l = 0 | this._f, h = 0 | this._g, m = 0 | this._h, g = 0; g < 16; ++g) t[g] = e.readInt32BE(4 * g);
        for (; g < 64; ++g) t[g] = (_(t[g - 2]) + t[g - 7] + p(t[g - 15]) + t[g - 16]) | 0;
        for (var E = 0; E < 64; ++E) {
            var v = (m + f(s) + c(s, l, h) + a[E] + t[E]) | 0,
                b = (d(n) + u(n, r, i)) | 0;
            (m = h), (h = l), (l = s), (s = (o + v) | 0), (o = i), (i = r), (r = n), (n = (v + b) | 0);
        }
        (this._a = (n + this._a) | 0), (this._b = (r + this._b) | 0), (this._c = (i + this._c) | 0), (this._d = (o + this._d) | 0), (this._e = (s + this._e) | 0), (this._f = (l + this._f) | 0), (this._g = (h + this._g) | 0), (this._h = (m + this._h) | 0);
    }),
    (l.prototype._hash = function () {
        var e = o.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
    }),
    (e.exports = l);
