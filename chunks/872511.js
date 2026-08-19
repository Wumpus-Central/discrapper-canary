"use strict";
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = (function () {
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
r(498121),
    (e.exports = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e, r, n, o, i) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var a = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
                (a._value = e),
                (a._parent = r),
                (a._animationClass = n),
                (a._animationConfig = o),
                (a._callback = i),
                a.__attach(),
                a
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            o(t, [
                {
                    key: "__getValue",
                    value: function () {
                        return this._parent.__getValue();
                    },
                },
                {
                    key: "__attach",
                    value: function () {
                        this._parent.__addChild(this);
                    },
                },
                {
                    key: "__detach",
                    value: function () {
                        this._parent.__removeChild(this);
                    },
                },
                {
                    key: "update",
                    value: function () {
                        this._value.animate(
                            new this._animationClass(
                                n({}, this._animationConfig, { toValue: this._animationConfig.toValue.__getValue() }),
                            ),
                            this._callback,
                        );
                    },
                },
            ]),
            t
        );
    })(i));
