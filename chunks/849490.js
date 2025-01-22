var i = r(689118),
    a = r(676972),
    o = r(957578).Buffer,
    s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    l = Array(64);
function u() {
    this.init(), (this._w = l), a.call(this, 64, 56);
}
function c(e, n, r) {
    return r ^ (e & (n ^ r));
}
function d(e, n, r) {
    return (e & n) | (r & (e | n));
}
function f(e) {
    return ((e >>> 2) | (e << 30)) ^ ((e >>> 13) | (e << 19)) ^ ((e >>> 22) | (e << 10));
}
function p(e) {
    return ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
}
function h(e) {
    return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function _(e) {
    return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
i(u, a),
    (u.prototype.init = function () {
        return (this._a = 1779033703), (this._b = 3144134277), (this._c = 1013904242), (this._d = 2773480762), (this._e = 1359893119), (this._f = 2600822924), (this._g = 528734635), (this._h = 1541459225), this;
    }),
    (u.prototype._update = function (e) {
        for (var n = this._w, r = 0 | this._a, i = 0 | this._b, a = 0 | this._c, o = 0 | this._d, l = 0 | this._e, u = 0 | this._f, m = 0 | this._g, g = 0 | this._h, E = 0; E < 16; ++E) n[E] = e.readInt32BE(4 * E);
        for (; E < 64; ++E) n[E] = (_(n[E - 2]) + n[E - 7] + h(n[E - 15]) + n[E - 16]) | 0;
        for (var v = 0; v < 64; ++v) {
            var y = (g + p(l) + c(l, u, m) + s[v] + n[v]) | 0,
                b = (f(r) + d(r, i, a)) | 0;
            (g = m), (m = u), (u = l), (l = (o + y) | 0), (o = a), (a = i), (i = r), (r = (y + b) | 0);
        }
        (this._a = (r + this._a) | 0), (this._b = (i + this._b) | 0), (this._c = (a + this._c) | 0), (this._d = (o + this._d) | 0), (this._e = (l + this._e) | 0), (this._f = (u + this._f) | 0), (this._g = (m + this._g) | 0), (this._h = (g + this._h) | 0);
    }),
    (u.prototype._hash = function () {
        var e = o.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
    }),
    (e.exports = u);
