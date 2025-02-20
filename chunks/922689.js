var r = n(21841),
    i = n(689118),
    o = n(726315),
    a = n(449348);
function s() {
    (this.tmp = [, ,]), (this.keys = null);
}
function l(e) {
    a.call(this, e);
    var t = new s();
    (this._desState = t), this.deriveKeys(t, e.key);
}
i(l, a),
    (e.exports = l),
    (l.create = function (e) {
        return new l(e);
    });
var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
(l.prototype.deriveKeys = function (e, t) {
    (e.keys = Array(32)), r.equal(t.length, this.blockSize, 'Invalid key length');
    var n = o.readUInt32BE(t, 0),
        i = o.readUInt32BE(t, 4);
    o.pc1(n, i, e.tmp, 0), (n = e.tmp[0]), (i = e.tmp[1]);
    for (var a = 0; a < e.keys.length; a += 2) {
        var s = c[a >>> 1];
        (n = o.r28shl(n, s)), (i = o.r28shl(i, s)), o.pc2(n, i, e.keys, a);
    }
}),
    (l.prototype._update = function (e, t, n, r) {
        var i = this._desState,
            a = o.readUInt32BE(e, t),
            s = o.readUInt32BE(e, t + 4);
        o.ip(a, s, i.tmp, 0), (a = i.tmp[0]), (s = i.tmp[1]), 'encrypt' === this.type ? this._encrypt(i, a, s, i.tmp, 0) : this._decrypt(i, a, s, i.tmp, 0), (a = i.tmp[0]), (s = i.tmp[1]), o.writeUInt32BE(n, a, r), o.writeUInt32BE(n, s, r + 4);
    }),
    (l.prototype._pad = function (e, t) {
        if (!1 === this.padding) return !1;
        for (var n = e.length - t, r = t; r < e.length; r++) e[r] = n;
        return !0;
    }),
    (l.prototype._unpad = function (e) {
        if (!1 === this.padding) return e;
        for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) r.equal(e[n], t);
        return e.slice(0, e.length - t);
    }),
    (l.prototype._encrypt = function (e, t, n, r, i) {
        for (var a = t, s = n, l = 0; l < e.keys.length; l += 2) {
            var c = e.keys[l],
                u = e.keys[l + 1];
            o.expand(s, e.tmp, 0), (c ^= e.tmp[0]), (u ^= e.tmp[1]);
            var d = o.substitute(c, u),
                f = o.permute(d),
                p = s;
            (s = (a ^ f) >>> 0), (a = p);
        }
        o.rip(s, a, r, i);
    }),
    (l.prototype._decrypt = function (e, t, n, r, i) {
        for (var a = n, s = t, l = e.keys.length - 2; l >= 0; l -= 2) {
            var c = e.keys[l],
                u = e.keys[l + 1];
            o.expand(a, e.tmp, 0), (c ^= e.tmp[0]), (u ^= e.tmp[1]);
            var d = o.substitute(c, u),
                f = o.permute(d),
                p = a;
            (a = (s ^ f) >>> 0), (s = p);
        }
        o.rip(a, s, r, i);
    });
