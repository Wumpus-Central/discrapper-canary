var i = n(459584),
    r = n(957578).Buffer,
    a = n(737372),
    s = n(222822),
    o = n(764900),
    l = n(458340),
    u = n(245413);
function c(e, t, n) {
    o.call(this), (this._cache = new d()), (this._last = void 0), (this._cipher = new l.AES(t)), (this._prev = r.from(n)), (this._mode = e), (this._autopadding = !0);
}
function d() {
    this.cache = r.allocUnsafe(0);
}
function f(e) {
    var t = e[15];
    if (t < 1 || t > 16) throw Error('unable to decrypt data');
    for (var n = -1; ++n < t; ) if (e[n + (16 - t)] !== t) throw Error('unable to decrypt data');
    if (16 !== t) return e.slice(0, 16 - t);
}
function _(e, t, n) {
    var o = a[e.toLowerCase()];
    if (!o) throw TypeError('invalid suite type');
    if (('string' == typeof n && (n = r.from(n)), 'GCM' !== o.mode && n.length !== o.iv)) throw TypeError('invalid iv length ' + n.length);
    if (('string' == typeof t && (t = r.from(t)), t.length !== o.key / 8)) throw TypeError('invalid key length ' + t.length);
    return 'stream' === o.type ? new s(o.module, t, n, !0) : 'auth' === o.type ? new i(o.module, t, n, !0) : new c(o.module, t, n);
}
function p(e, t) {
    var n = a[e.toLowerCase()];
    if (!n) throw TypeError('invalid suite type');
    var i = u(t, !1, n.key, n.iv);
    return _(e, i.key, i.iv);
}
n(689118)(c, o),
    (c.prototype._update = function (e) {
        this._cache.add(e);
        for (var t, n, i = []; (t = this._cache.get(this._autopadding)); ) (n = this._mode.decrypt(this, t)), i.push(n);
        return r.concat(i);
    }),
    (c.prototype._final = function () {
        var e = this._cache.flush();
        if (this._autopadding) return f(this._mode.decrypt(this, e));
        if (e) throw Error('data not multiple of block length');
    }),
    (c.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
    }),
    (d.prototype.add = function (e) {
        this.cache = r.concat([this.cache, e]);
    }),
    (d.prototype.get = function (e) {
        var t;
        if (e) {
            if (this.cache.length > 16) return (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), t;
        } else if (this.cache.length >= 16) return (t = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), t;
        return null;
    }),
    (d.prototype.flush = function () {
        if (this.cache.length) return this.cache;
    }),
    (t.createDecipher = p),
    (t.createDecipheriv = _);
