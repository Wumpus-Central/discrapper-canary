r.d(t, { Z: () => f });
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(481060),
    c = r(239091),
    s = r(726521),
    u = r(388032),
    d = r(595342);
function f(e) {
    let { widget: t, userId: r, className: o, menuItems: f } = e,
        g = i.useRef(null),
        p = () => {
            (0, s.G1)(r, t);
        };
    return (0, n.jsx)(l.yRy, {
        targetElementRef: g,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(l.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, c.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": u.intl.string(u.t.xpSHSk),
                children: (0, n.jsxs)(l.kSQ, {
                    children: [
                        (0, n.jsx)(
                            l.sNh,
                            {
                                id: "flag-widget",
                                label: u.intl.string(u.t.D4GvHB),
                                action: p,
                                color: "danger",
                                icon: l.U65,
                            },
                            "flag-widget",
                        ),
                        f,
                    ],
                }),
            });
        },
        children: (e) => {
            var t, r;
            return (0, n.jsx)(
                l.P3F,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        innerRef: g,
                        "aria-label": u.intl.string(u.t.xpSHSk),
                        className: a()(d.button, o),
                        children: (0, n.jsx)(l.xhG, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t),
            );
        },
    });
}
