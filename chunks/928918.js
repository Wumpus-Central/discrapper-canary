var t = Object.prototype.hasOwnProperty;
function r(e) {
    if (!(this instanceof r)) throw TypeError("Constructor PseudoMap requires 'new'");
    if ((this.clear(), e))
        if (e instanceof r || ("function" == typeof Map && e instanceof Map))
            e.forEach(function (e, t) {
                this.set(t, e);
            }, this);
        else if (Array.isArray(e))
            e.forEach(function (e) {
                this.set(e[0], e[1]);
            }, this);
        else throw TypeError("invalid argument");
}
function n(e, t) {
    return e === t || (e != e && t != t);
}
function o(e, t, r) {
    (this.key = e), (this.value = t), (this._index = r);
}
function i(e, r) {
    for (var o = 0, i = "_" + r, a = i; t.call(e, a); a = i + o++) if (n(e[a].key, r)) return e[a];
}
(e.exports = r),
    (r.prototype.forEach = function (e, t) {
        (t = t || this),
            Object.keys(this._data).forEach(function (r) {
                "size" !== r && e.call(t, this._data[r].value, this._data[r].key);
            }, this);
    }),
    (r.prototype.has = function (e) {
        return !!i(this._data, e);
    }),
    (r.prototype.get = function (e) {
        var t = i(this._data, e);
        return t && t.value;
    }),
    (r.prototype.set = function (e, r) {
        !(function (e, r, i) {
            for (var a = 0, s = "_" + r, l = s; t.call(e, l); l = s + a++)
                if (n(e[l].key, r)) {
                    e[l].value = i;
                    return;
                }
            e.size++, (e[l] = new o(r, i, l));
        })(this._data, e, r);
    }),
    (r.prototype.delete = function (e) {
        var t = i(this._data, e);
        t && (delete this._data[t._index], this._data.size--);
    }),
    (r.prototype.clear = function () {
        var e = Object.create(null);
        (e.size = 0),
            Object.defineProperty(this, "_data", { value: e, enumerable: !1, configurable: !0, writable: !1 });
    }),
    Object.defineProperty(r.prototype, "size", {
        get: function () {
            return this._data.size;
        },
        set: function (e) {},
        enumerable: !0,
        configurable: !0,
    }),
    (r.prototype.values =
        r.prototype.keys =
        r.prototype.entries =
            function () {
                throw Error("iterators are not implemented in this version");
            });
