var r = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
})();
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function a(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var s = n(73041);
n(622865);
var l = n(776465),
    c = n(753073),
    u = n(847028),
    d = l.inOut(l.ease);
e.exports = (function (e) {
    function t(e) {
        i(this, t);
        var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._toValue = e.toValue), (n._easing = void 0 !== e.easing ? e.easing : d), (n._duration = void 0 !== e.duration ? e.duration : 500), (n._delay = void 0 !== e.delay ? e.delay : 0), (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction), n;
    }
    return (
        a(t, e),
        r(t, [
            {
                key: 'start',
                value: function (e, t, n) {
                    var r = this;
                    (this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n);
                    var i = function () {
                        0 === r._duration ? (r._onUpdate(r._toValue), r.__debouncedOnEnd({ finished: !0 })) : ((r._startTime = Date.now()), (r._animationFrame = c.current(r.onUpdate.bind(r))));
                    };
                    this._delay ? (this._timeout = setTimeout(i, this._delay)) : i();
                }
            },
            {
                key: 'onUpdate',
                value: function () {
                    var e = Date.now();
                    if (e >= this._startTime + this._duration) {
                        0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), this.__debouncedOnEnd({ finished: !0 });
                        return;
                    }
                    this._onUpdate(this._fromValue + this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = c.current(this.onUpdate.bind(this)));
                }
            },
            {
                key: 'stop',
                value: function () {
                    (this.__active = !1), clearTimeout(this._timeout), u.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
        ]),
        t
    );
})(s);
