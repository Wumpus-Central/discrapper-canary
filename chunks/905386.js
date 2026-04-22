"use strict";
var r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    i = n(336258),
    s = n(259126),
    a = n(110799);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var n = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (n._deceleration = void 0 !== e.deceleration ? e.deceleration : 0.998),
            (n._velocity = e.velocity),
            (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction),
            n
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        r(t, [
            {
                key: "start",
                value: function (e, t, n) {
                    (this.__active = !0),
                        (this._lastValue = e),
                        (this._fromValue = e),
                        (this._onUpdate = t),
                        (this.__onEnd = n),
                        (this._startTime = Date.now()),
                        (this._animationFrame = s.current(this.onUpdate.bind(this)));
                },
            },
            {
                key: "onUpdate",
                value: function () {
                    var e = Date.now(),
                        t =
                            this._fromValue +
                            (this._velocity / (1 - this._deceleration)) *
                                (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)));
                    (this._onUpdate(t), 0.1 > Math.abs(this._lastValue - t))
                        ? this.__debouncedOnEnd({ finished: !0 })
                        : ((this._lastValue = t),
                          this.__active && (this._animationFrame = s.current(this.onUpdate.bind(this))));
                },
            },
            {
                key: "stop",
                value: function () {
                    (this.__active = !1), a.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                },
            },
        ]),
        t
    );
})(i);
