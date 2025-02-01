var i = n(689118),
    r = n(957578).Buffer,
    a = n(764900),
    s = r.alloc(128),
    o = 64;
function l(e, t) {
    a.call(this, 'digest'), 'string' == typeof t && (t = r.from(t)), (this._alg = e), (this._key = t), t.length > o ? (t = e(t)) : t.length < o && (t = r.concat([t, s], o));
    for (var n = (this._ipad = r.allocUnsafe(o)), i = (this._opad = r.allocUnsafe(o)), l = 0; l < o; l++) (n[l] = 54 ^ t[l]), (i[l] = 92 ^ t[l]);
    this._hash = [n];
}
i(l, a),
    (l.prototype._update = function (e) {
        this._hash.push(e);
    }),
    (l.prototype._final = function () {
        var e = this._alg(r.concat(this._hash));
        return this._alg(r.concat([this._opad, e]));
    }),
    (e.exports = l);
