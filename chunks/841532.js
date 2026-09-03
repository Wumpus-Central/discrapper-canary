var n = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    i = r(562210);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._strings = e), (n._values = r), n;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "__transformValue",
                value: function (e) {
                    return e instanceof i ? e.__getValue() : e;
                },
            },
            {
                key: "__getValue",
                value: function () {
                    for (var e = this._strings[0], t = 0; t < this._values.length; ++t)
                        e += this.__transformValue(this._values[t]) + this._strings[1 + t];
                    return e;
                },
            },
            {
                key: "__attach",
                value: function () {
                    for (var e = 0; e < this._values.length; ++e)
                        this._values[e] instanceof i && this._values[e].__addChild(this);
                },
            },
            {
                key: "__detach",
                value: function () {
                    for (var e = 0; e < this._values.length; ++e)
                        this._values[e] instanceof i && this._values[e].__removeChild(this);
                },
            },
        ]),
        t
    );
})(r(652925));
