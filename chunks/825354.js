n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    c = n(239091),
    s = n(726521),
    u = n(388032),
    d = n(737417);
function f(e) {
    let { widget: t, userId: n, className: a, menuItems: f } = e,
        g = i.useRef(null),
        p = () => {
            (0, s.G1)(n, t);
        };
    return (0, r.jsx)(o.yRy, {
        targetElementRef: g,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, c.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": u.intl.string(u.t.xpSHSk),
                children: (0, r.jsxs)(o.kSQ, {
                    children: [
                        (0, r.jsx)(
                            o.sNh,
                            {
                                id: "flag-widget",
                                label: u.intl.string(u.t.D4GvHE),
                                action: p,
                                color: "danger",
                                icon: o.U65,
                            },
                            "flag-widget",
                        ),
                        f,
                    ],
                }),
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                o.P3F,
                ((t = (function (e) {
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
                })({}, e)),
                (n = n =
                    {
                        innerRef: g,
                        "aria-label": u.intl.string(u.t.xpSHSk),
                        className: l()(d.button, a),
                        children: (0, r.jsx)(o.xhG, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
