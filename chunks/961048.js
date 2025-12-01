t.d(n, { Z: () => _ });
var o = t(54381);
t(473749);
var r = t(481060),
    a = t(906732),
    i = t(522651),
    c = t(871499),
    l = t(388032);
function _(e) {
    var { onClick: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) (t = a[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                    (t = a[o]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["onClick"]);
    let { parentAnalyticsLocation: _ } = (0, a.ZP)();
    return (0, o.jsx)(
        c.Z,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    o.forEach(function (n) {
                        var o;
                        (o = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: o,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = o);
                    });
            }
            return e;
        })(
            {
                label: l.intl.string(l.t["UKOtz+"]),
                iconComponent: r.xhG,
                tooltipPosition: "bottom",
                onClick: (e) => {
                    (0, i.v)(_, i.d.MORE), n(e);
                },
            },
            t,
        ),
    );
}
