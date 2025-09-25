n.d(t, { default: () => u }), n(388685), n(457542);
var r = n(951288),
    o = n(647438),
    a = n(625651),
    i = n(744993),
    c = n(440589),
    s = n(388032),
    l = n(593997);
function u(e) {
    var { guildId: t, gameInstance: n } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "gameInstance"]);
    let [d, f] = o.useState(!1),
        [m, b] = o.useState(void 0);
    return (0, r.jsx)(
        a.f,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                size: "sm",
                title: n.name,
                body: (0, r.jsx)("div", {
                    className: l.imageContainer,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: "",
                        className: l.image,
                    }),
                }),
                warningText: s.intl.string(c.default.oHNuWl),
                isLoading: d,
                error: m,
                onDeactivate: () => {
                    b(void 0),
                        f(!0),
                        (0, i.s9)(t, n.planId, n.entitlementId)
                            .then(() => {
                                u.onClose();
                            })
                            .catch((e) => {
                                var t;
                                b(null != (t = e.body.message) ? t : e.message);
                            })
                            .finally(() => {
                                f(!1);
                            });
                },
            },
            u,
        ),
    );
}
