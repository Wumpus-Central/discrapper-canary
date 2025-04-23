t.r(n), t.d(n, { default: () => r });
var c = t(200651);
t(192379);
var o = t(910364);
function a() {
    return (a =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
            }
            return e;
        }).apply(this, arguments);
}
function r(e) {
    var n = a(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, c.jsx)(
        o.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    c = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (c = c.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    c.forEach(function (n) {
                        var c;
                        (c = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: c,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = c);
                    });
            }
            return e;
        })({}, n)
    );
}
