r.d(e, { default: () => f }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(793030),
    l = r(51144),
    a = r(80721),
    u = r(282793),
    c = r(353149),
    s = r(388032);
let f = (t) => {
    var { subscriptionId: e, member: r, onClose: f } = t,
        b = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["subscriptionId", "member", "onClose"]);
    let [p, d] = (0, o.useState)(!1),
        m = async () => {
            d(!0), await (0, a.Jn)(e, r.id), d(!1), f();
        };
    return (0, n.jsx)(
        i.Modal,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                size: "md",
                title: s.intl.string(c.default.MJIHXY),
                subtitle: s.intl.formatToPlainString(c.default.gMyQrH, {
                    memberName: (0, l.XM)(r),
                    premiumGroupProductName: (0, u.sO)(),
                    cooldownMonths: u.T9,
                }),
                onClose: f,
                actions: [
                    {
                        text: s.intl.string(c.default.dlr8CX),
                        variant: "critical-primary",
                        onClick: m,
                        loading: p,
                    },
                ],
            },
            b,
        ),
    );
};
