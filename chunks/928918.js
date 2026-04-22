var t = Object.prototype.hasOwnProperty;
function n(e) {
    if (!(this instanceof n)) throw TypeError("Constructor PseudoMap requires 'new'");
    if ((this.clear(), e))
        if (e instanceof n || ("function" == typeof Map && e instanceof Map))
            e.forEach(function (e, t) {
                this.set(t, e);
            }, this);
        else if (Array.isArray(e))
            e.forEach(function (e) {
                this.set(e[0], e[1]);
            }, this);
        else throw TypeError("invalid argument");
}
function r(e, t) {
    return e === t || (e != e && t != t);
}
function i(e, t, n) {
    (this.key = e), (this.value = t), (this._index = n);
}
function s(e, n) {
    for (var i = 0, s = "_" + n, a = s; t.call(e, a); a = s + i++) if (r(e[a].key, n)) return e[a];
}
(e.exports = n),
    (n.prototype.forEach = function (e, t) {
        (t = t || this),
            Object.keys(this._data).forEach(function (n) {
                "size" !== n && e.call(t, this._data[n].value, this._data[n].key);
            }, this);
    }),
    (n.prototype.has = function (e) {
        return !!s(this._data, e);
    }),
    (n.prototype.get = function (e) {
        var t = s(this._data, e);
        return t && t.value;
    }),
    (n.prototype.set = function (e, n) {
        !(function (e, n, s) {
            for (var a = 0, o = "_" + n, l = o; t.call(e, l); l = o + a++)
                if (r(e[l].key, n)) {
                    e[l].value = s;
                    return;
                }
            e.size++, (e[l] = new i(n, s, l));
        })(this._data, e, n);
    }),
    (n.prototype.delete = function (e) {
        var t = s(this._data, e);
        t && (delete this._data[t._index], this._data.size--);
    }),
    (n.prototype.clear = function () {
        var e = Object.create(null);
        (e.size = 0),
            Object.defineProperty(this, "_data", { value: e, enumerable: !1, configurable: !0, writable: !1 });
    }),
    Object.defineProperty(n.prototype, "size", {
        get: function () {
            return this._data.size;
        },
        set: function (e) {},
        enumerable: !0,
        configurable: !0,
    }),
    (n.prototype.values =
        n.prototype.keys =
        n.prototype.entries =
            function () {
                throw Error("iterators are not implemented in this version");
            });
