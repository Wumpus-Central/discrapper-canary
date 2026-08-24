"use strict";
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
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._transforms = e), r;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "__getValue",
                value: function () {
                    return this._transforms.map(function (e) {
                        var t = {};
                        for (var r in e) {
                            var n = e[r];
                            n instanceof i ? (t[r] = n.__getValue()) : (t[r] = n);
                        }
                        return t;
                    });
                },
            },
            {
                key: "__getAnimatedValue",
                value: function () {
                    return this._transforms.map(function (e) {
                        var t = {};
                        for (var r in e) {
                            var n = e[r];
                            n instanceof i ? (t[r] = n.__getAnimatedValue()) : (t[r] = n);
                        }
                        return t;
                    });
                },
            },
            {
                key: "__attach",
                value: function () {
                    var e = this;
                    this._transforms.forEach(function (t) {
                        for (var r in t) {
                            var n = t[r];
                            n instanceof i && n.__addChild(e);
                        }
                    });
                },
            },
            {
                key: "__detach",
                value: function () {
                    var e = this;
                    this._transforms.forEach(function (t) {
                        for (var r in t) {
                            var n = t[r];
                            n instanceof i && n.__removeChild(e);
                        }
                    });
                },
            },
        ]),
        t
    );
})(r(652925));
