var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })();
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function s(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function o(e, t) {
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
var l = n(129629);
n(420633);
var u = (function (e) {
    function t(e, n, i, r, o) {
        a(this, t);
        var l = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (l._value = e), (l._parent = n), (l._animationClass = i), (l._animationConfig = r), (l._callback = o), l.__attach(), l;
    }
    return (
        o(t, e),
        r(t, [
            {
                key: '__getValue',
                value: function () {
                    return this._parent.__getValue();
                }
            },
            {
                key: '__attach',
                value: function () {
                    this._parent.__addChild(this);
                }
            },
            {
                key: '__detach',
                value: function () {
                    this._parent.__removeChild(this);
                }
            },
            {
                key: 'update',
                value: function () {
                    this._value.animate(new this._animationClass(i({}, this._animationConfig, { toValue: this._animationConfig.toValue.__getValue() })), this._callback);
                }
            }
        ]),
        t
    );
})(l);
e.exports = u;
