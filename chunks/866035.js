t.r(n), t.d(n, { default: () => r });
var o = t(200651);
t(192379);
var i = t(595145);
function c() {
    return (c =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
        }).apply(this, arguments);
}
function r(e) {
    var n = c(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, o.jsx)(
        i.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    o.forEach(function (n) {
                        var o;
                        (o = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = o);
                    });
            }
            return e;
        })({}, n)
    );
}
