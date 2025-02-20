var r = n(689118),
    i = n(957578).Buffer,
    o = n(764900),
    a = i.alloc(128),
    s = 64;
function l(e, t) {
    o.call(this, 'digest'), 'string' == typeof t && (t = i.from(t)), (this._alg = e), (this._key = t), t.length > s ? (t = e(t)) : t.length < s && (t = i.concat([t, a], s));
    for (var n = (this._ipad = i.allocUnsafe(s)), r = (this._opad = i.allocUnsafe(s)), l = 0; l < s; l++) (n[l] = 54 ^ t[l]), (r[l] = 92 ^ t[l]);
    this._hash = [n];
}
r(l, o),
    (l.prototype._update = function (e) {
        this._hash.push(e);
    }),
    (l.prototype._final = function () {
        var e = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, e]));
    }),
    (e.exports = l);
