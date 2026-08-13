function t(e) {
    if (e) {
        var r = e;
        for (var n in t.prototype) r[n] = t.prototype[n];
        return r;
    }
}
(e.exports = t),
    (t.prototype.on = t.prototype.addEventListener =
        function (e, t) {
            return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
                this
            );
        }),
    (t.prototype.once = function (e, t) {
        function r() {
            this.off(e, r), t.apply(this, arguments);
        }
        return (r.fn = t), this.on(e, r), this;
    }),
    (t.prototype.off =
        t.prototype.removeListener =
        t.prototype.removeAllListeners =
        t.prototype.removeEventListener =
            function (e, t) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                    return (this._callbacks = {}), this;
                var r,
                    n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var i = 0; i < n.length; i++)
                    if ((r = n[i]) === t || r.fn === t) {
                        n.splice(i, 1);
                        break;
                    }
                return 0 === n.length && delete this._callbacks["$" + e], this;
            }),
    (t.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        for (var t = Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        if (r) {
            r = r.slice(0);
            for (var n = 0, i = r.length; n < i; ++n) r[n].apply(this, t);
        }
        return this;
    }),
    (t.prototype.listeners = function (e) {
        return (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || [];
    }),
    (t.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
    });
