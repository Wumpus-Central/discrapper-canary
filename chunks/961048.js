n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(871499),
    o = n(388032);
function a() {
    return (a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function s(e) {
    var t = a(
        {},
        (function (e) {
            if (null == e) throw TypeError('Cannot destructure ' + e);
            return e;
        })(e)
    );
    return (0, r.jsx)(
        l.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                label: o.NW.string(o.t.UKOtz8),
                iconComponent: i.xhG,
                tooltipPosition: 'bottom'
            },
            t
        )
    );
}
