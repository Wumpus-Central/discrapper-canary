var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = (function () {
        function e(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (n, r, i) {
            return r && e(n.prototype, r), i && e(n, i), n;
        };
    })();
function o(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function s(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function l(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var u = r(129629);
r(420633);
var c = (function (e) {
    function n(e, r, i, a, l) {
        o(this, n);
        var u = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (u._value = e), (u._parent = r), (u._animationClass = i), (u._animationConfig = a), (u._callback = l), u.__attach(), u;
    }
    return (
        l(n, e),
        a(n, [
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
        n
    );
})(u);
e.exports = c;
