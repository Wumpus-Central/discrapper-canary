var i = n(21841),
    r = n(689118),
    a = n(726315),
    s = n(449348);
function o() {
    (this.tmp = [, ,]), (this.keys = null);
}
function l(e) {
    s.call(this, e);
    var t = new o();
    (this._desState = t), this.deriveKeys(t, e.key);
}
r(l, s),
    (e.exports = l),
    (l.create = function (e) {
        return new l(e);
    });
var u = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
(l.prototype.deriveKeys = function (e, t) {
    (e.keys = Array(32)), i.equal(t.length, this.blockSize, 'Invalid key length');
    var n = a.readUInt32BE(t, 0),
        r = a.readUInt32BE(t, 4);
    a.pc1(n, r, e.tmp, 0), (n = e.tmp[0]), (r = e.tmp[1]);
    for (var s = 0; s < e.keys.length; s += 2) {
        var o = u[s >>> 1];
        (n = a.r28shl(n, o)), (r = a.r28shl(r, o)), a.pc2(n, r, e.keys, s);
    }
}),
    (l.prototype._update = function (e, t, n, i) {
        var r = this._desState,
            s = a.readUInt32BE(e, t),
            o = a.readUInt32BE(e, t + 4);
        a.ip(s, o, r.tmp, 0), (s = r.tmp[0]), (o = r.tmp[1]), 'encrypt' === this.type ? this._encrypt(r, s, o, r.tmp, 0) : this._decrypt(r, s, o, r.tmp, 0), (s = r.tmp[0]), (o = r.tmp[1]), a.writeUInt32BE(n, s, i), a.writeUInt32BE(n, o, i + 4);
    }),
    (l.prototype._pad = function (e, t) {
        if (!1 === this.padding) return !1;
        for (var n = e.length - t, i = t; i < e.length; i++) e[i] = n;
        return !0;
    }),
    (l.prototype._unpad = function (e) {
        if (!1 === this.padding) return e;
        for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) i.equal(e[n], t);
        return e.slice(0, e.length - t);
    }),
    (l.prototype._encrypt = function (e, t, n, i, r) {
        for (var s = t, o = n, l = 0; l < e.keys.length; l += 2) {
            var u = e.keys[l],
                c = e.keys[l + 1];
            a.expand(o, e.tmp, 0), (u ^= e.tmp[0]), (c ^= e.tmp[1]);
            var d = a.substitute(u, c),
                f = a.permute(d),
                _ = o;
            (o = (s ^ f) >>> 0), (s = _);
        }
        a.rip(o, s, i, r);
    }),
    (l.prototype._decrypt = function (e, t, n, i, r) {
        for (var s = n, o = t, l = e.keys.length - 2; l >= 0; l -= 2) {
            var u = e.keys[l],
                c = e.keys[l + 1];
            a.expand(s, e.tmp, 0), (u ^= e.tmp[0]), (c ^= e.tmp[1]);
            var d = a.substitute(u, c),
                f = a.permute(d),
                _ = s;
            (s = (o ^ f) >>> 0), (o = _);
        }
        a.rip(s, o, i, r);
    });
