var i = r(21841),
    a = r(689118),
    o = r(726315),
    s = r(449348);
function l() {
    (this.tmp = [, ,]), (this.keys = null);
}
function u(e) {
    s.call(this, e);
    var n = new l();
    (this._desState = n), this.deriveKeys(n, e.key);
}
a(u, s),
    (e.exports = u),
    (u.create = function (e) {
        return new u(e);
    });
var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
(u.prototype.deriveKeys = function (e, n) {
    (e.keys = Array(32)), i.equal(n.length, this.blockSize, 'Invalid key length');
    var r = o.readUInt32BE(n, 0),
        a = o.readUInt32BE(n, 4);
    o.pc1(r, a, e.tmp, 0), (r = e.tmp[0]), (a = e.tmp[1]);
    for (var s = 0; s < e.keys.length; s += 2) {
        var l = c[s >>> 1];
        (r = o.r28shl(r, l)), (a = o.r28shl(a, l)), o.pc2(r, a, e.keys, s);
    }
}),
    (u.prototype._update = function (e, n, r, i) {
        var a = this._desState,
            s = o.readUInt32BE(e, n),
            l = o.readUInt32BE(e, n + 4);
        o.ip(s, l, a.tmp, 0), (s = a.tmp[0]), (l = a.tmp[1]), 'encrypt' === this.type ? this._encrypt(a, s, l, a.tmp, 0) : this._decrypt(a, s, l, a.tmp, 0), (s = a.tmp[0]), (l = a.tmp[1]), o.writeUInt32BE(r, s, i), o.writeUInt32BE(r, l, i + 4);
    }),
    (u.prototype._pad = function (e, n) {
        if (!1 === this.padding) return !1;
        for (var r = e.length - n, i = n; i < e.length; i++) e[i] = r;
        return !0;
    }),
    (u.prototype._unpad = function (e) {
        if (!1 === this.padding) return e;
        for (var n = e[e.length - 1], r = e.length - n; r < e.length; r++) i.equal(e[r], n);
        return e.slice(0, e.length - n);
    }),
    (u.prototype._encrypt = function (e, n, r, i, a) {
        for (var s = n, l = r, u = 0; u < e.keys.length; u += 2) {
            var c = e.keys[u],
                d = e.keys[u + 1];
            o.expand(l, e.tmp, 0), (c ^= e.tmp[0]), (d ^= e.tmp[1]);
            var f = o.substitute(c, d),
                p = o.permute(f),
                h = l;
            (l = (s ^ p) >>> 0), (s = h);
        }
        o.rip(l, s, i, a);
    }),
    (u.prototype._decrypt = function (e, n, r, i, a) {
        for (var s = r, l = n, u = e.keys.length - 2; u >= 0; u -= 2) {
            var c = e.keys[u],
                d = e.keys[u + 1];
            o.expand(s, e.tmp, 0), (c ^= e.tmp[0]), (d ^= e.tmp[1]);
            var f = o.substitute(c, d),
                p = o.permute(f),
                h = s;
            (s = (l ^ p) >>> 0), (l = h);
        }
        o.rip(s, l, i, a);
    });
