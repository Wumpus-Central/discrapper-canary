n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(828700),
    o = n(91192),
    a = n(442837),
    s = n(481060),
    c = n(944486),
    u = n(55589),
    d = n(276952),
    p = n(682662),
    f = n(662146),
    h = n(981631),
    g = n(388032),
    m = n(815141);
function b() {
    var e, t;
    let { pathname: n } = (0, l.TH)(),
        b = n.startsWith(h.Z5c.CHANNEL(h.ME)) && n !== h.Z5c.CHANNEL(h.ME) && n !== h.Z5c.ME_ACTIVITY,
        _ = (0, a.e7)([u.Z], () => u.Z.getPrivateChannelIds()[0]),
        y = (0, a.e7)([c.Z], () => {
            var e;
            return null != (e = c.Z.getChannelId(h.ME)) ? e : _;
        }),
        [O, v] = i.useState(!1),
        j = (0, o.Ie)("dms");
    return (0, r.jsxs)(p.H, {
        children: [
            (0, r.jsx)(d.Z, {
                selected: b,
                hovered: O,
                className: m.pill,
            }),
            (0, r.jsx)(f.Z, {
                color: s.aML.Colors.PRIMARY,
                hideOnClick: !0,
                text: g.intl.string(g.t.YUU0RF),
                selected: b,
                children: (0, r.jsx)(s.aRk, {
                    selected: !0,
                    lowerBadge: null,
                    upperBadge: null,
                    children: (0, r.jsx)(
                        s.LYs,
                        ((e = (function (e) {
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
                                onMouseEnter: () => v(!0),
                                onMouseLeave: () => v(!1),
                                onClick: h.dG4,
                                selected: b || O,
                                ariaLabel: g.intl.string(g.t.YUU0RF),
                                "aria-owns": "guild-list-dms",
                                "aria-selected": b || O,
                            },
                            j,
                        )),
                        (t = t =
                            {
                                to: {
                                    pathname: null != y ? h.Z5c.CHANNEL(h.ME, y) : h.Z5c.ME_DMS,
                                    state: {
                                        analyticsSource: {
                                            page: h.ZY5.GUILD_CHANNEL,
                                            section: h.jXE.NAVIGATION,
                                            object: "DMS_BUTTON",
                                        },
                                    },
                                },
                                children: (0, r.jsx)(s.kBi, {
                                    color: "currentColor",
                                    size: "refresh_sm",
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(t)).forEach(function (n) {
                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                              }),
                        e),
                    ),
                }),
            }),
        ],
    });
}
