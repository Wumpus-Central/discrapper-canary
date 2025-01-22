var i = r(689118),
    a = r(957578).Buffer,
    o = r(764900),
    s = a.alloc(128),
    l = 64;
function u(e, n) {
    o.call(this, 'digest'), 'string' == typeof n && (n = a.from(n)), (this._alg = e), (this._key = n), n.length > l ? (n = e(n)) : n.length < l && (n = a.concat([n, s], l));
    for (var r = (this._ipad = a.allocUnsafe(l)), i = (this._opad = a.allocUnsafe(l)), u = 0; u < l; u++) (r[u] = 54 ^ n[u]), (i[u] = 92 ^ n[u]);
    this._hash = [r];
}
i(u, o),
    (u.prototype._update = function (e) {
        this._hash.push(e);
    }),
    (u.prototype._final = function () {
        var e = this._alg(a.concat(this._hash));
        return this._alg(a.concat([this._opad, e]));
    }),
    (e.exports = u);
