var i = r(459584),
    a = r(957578).Buffer,
    o = r(737372),
    s = r(222822),
    l = r(764900),
    u = r(458340),
    c = r(245413);
function d(e, n, r) {
    l.call(this), (this._cache = new f()), (this._last = void 0), (this._cipher = new u.AES(n)), (this._prev = a.from(r)), (this._mode = e), (this._autopadding = !0);
}
function f() {
    this.cache = a.allocUnsafe(0);
}
function p(e) {
    var n = e[15];
    if (n < 1 || n > 16) throw Error('unable to decrypt data');
    for (var r = -1; ++r < n; ) if (e[r + (16 - n)] !== n) throw Error('unable to decrypt data');
    if (16 !== n) return e.slice(0, 16 - n);
}
function h(e, n, r) {
    var l = o[e.toLowerCase()];
    if (!l) throw TypeError('invalid suite type');
    if (('string' == typeof r && (r = a.from(r)), 'GCM' !== l.mode && r.length !== l.iv)) throw TypeError('invalid iv length ' + r.length);
    if (('string' == typeof n && (n = a.from(n)), n.length !== l.key / 8)) throw TypeError('invalid key length ' + n.length);
    return 'stream' === l.type ? new s(l.module, n, r, !0) : 'auth' === l.type ? new i(l.module, n, r, !0) : new d(l.module, n, r);
}
function _(e, n) {
    var r = o[e.toLowerCase()];
    if (!r) throw TypeError('invalid suite type');
    var i = c(n, !1, r.key, r.iv);
    return h(e, i.key, i.iv);
}
r(689118)(d, l),
    (d.prototype._update = function (e) {
        this._cache.add(e);
        for (var n, r, i = []; (n = this._cache.get(this._autopadding)); ) (r = this._mode.decrypt(this, n)), i.push(r);
        return a.concat(i);
    }),
    (d.prototype._final = function () {
        var e = this._cache.flush();
        if (this._autopadding) return p(this._mode.decrypt(this, e));
        if (e) throw Error('data not multiple of block length');
    }),
    (d.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
    }),
    (f.prototype.add = function (e) {
        this.cache = a.concat([this.cache, e]);
    }),
    (f.prototype.get = function (e) {
        var n;
        if (e) {
            if (this.cache.length > 16) return (n = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), n;
        } else if (this.cache.length >= 16) return (n = this.cache.slice(0, 16)), (this.cache = this.cache.slice(16)), n;
        return null;
    }),
    (f.prototype.flush = function () {
        if (this.cache.length) return this.cache;
    }),
    (n.createDecipher = _),
    (n.createDecipheriv = h);
