n.d(t, { l: () => g });
var r = n(717029),
    i = n(846042);
function o(e) {
    return (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function s(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function l(e, t, n) {
    return t && s(e.prototype, t), n && s(e, n), e;
}
function c(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        t && u(e, t);
}
function u(e, t) {
    return (u =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function d(e) {
    var t = p();
    return function () {
        var n,
            r = h(e);
        return (n = t ? Reflect.construct(r, arguments, h(this).constructor) : r.apply(this, arguments)), f(this, n);
    };
}
function f(e, t) {
    return t && ('object' === o(t) || 'function' == typeof t) ? t : _(e);
}
function _(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function p() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function h(e) {
    return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var g = (function (e) {
    c(n, e);
    var t = d(n);
    function n() {
        var e;
        a(this, n);
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return m(_((e = t.call.apply(t, [this].concat(i)))), 'priority', 40), m(_(e), 'incompatibleTokens', '*'), e;
    }
    return (
        l(n, [
            {
                key: 'parse',
                value: function (e) {
                    return (0, i.n8)(e);
                }
            },
            {
                key: 'set',
                value: function (e, t, n) {
                    return [new Date(1000 * n), { timestampIsSet: !0 }];
                }
            }
        ]),
        n
    );
})(r._);
