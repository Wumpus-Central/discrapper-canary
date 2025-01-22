var n = Object.prototype.hasOwnProperty;
function r(e) {
    if (!(this instanceof r)) throw TypeError("Constructor PseudoMap requires 'new'");
    if ((this.clear(), e)) {
        if (e instanceof r || ('function' == typeof Map && e instanceof Map))
            e.forEach(function (e, n) {
                this.set(n, e);
            }, this);
        else if (Array.isArray(e))
            e.forEach(function (e) {
                this.set(e[0], e[1]);
            }, this);
        else throw TypeError('invalid argument');
    }
}
function i(e, n) {
    return e === n || (e != e && n != n);
}
function a(e, n, r) {
    (this.key = e), (this.value = n), (this._index = r);
}
function o(e, r) {
    for (var a = 0, o = '_' + r, s = o; n.call(e, s); s = o + a++) if (i(e[s].key, r)) return e[s];
}
function s(e, r, o) {
    for (var s = 0, l = '_' + r, u = l; n.call(e, u); u = l + s++)
        if (i(e[u].key, r)) {
            e[u].value = o;
            return;
        }
    e.size++, (e[u] = new a(r, o, u));
}
(e.exports = r),
    (r.prototype.forEach = function (e, n) {
        (n = n || this),
            Object.keys(this._data).forEach(function (r) {
                'size' !== r && e.call(n, this._data[r].value, this._data[r].key);
            }, this);
    }),
    (r.prototype.has = function (e) {
        return !!o(this._data, e);
    }),
    (r.prototype.get = function (e) {
        var n = o(this._data, e);
        return n && n.value;
    }),
    (r.prototype.set = function (e, n) {
        s(this._data, e, n);
    }),
    (r.prototype.delete = function (e) {
        var n = o(this._data, e);
        n && (delete this._data[n._index], this._data.size--);
    }),
    (r.prototype.clear = function () {
        var e = Object.create(null);
        (e.size = 0),
            Object.defineProperty(this, '_data', {
                value: e,
                enumerable: !1,
                configurable: !0,
                writable: !1
            });
    }),
    Object.defineProperty(r.prototype, 'size', {
        get: function () {
            return this._data.size;
        },
        set: function (e) {},
        enumerable: !0,
        configurable: !0
    }),
    (r.prototype.values =
        r.prototype.keys =
        r.prototype.entries =
            function () {
                throw Error('iterators are not implemented in this version');
            });
