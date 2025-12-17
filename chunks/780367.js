n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(828700),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(944486),
    u = n(55589),
    d = n(276952),
    f = n(682662),
    h = n(662146),
    p = n(981631),
    g = n(388032),
    b = n(992397);
function m() {
    var e, t;
    let { pathname: n } = (0, l.TH)(),
        m = n.startsWith(p.Z5c.CHANNEL(p.ME)) && n !== p.Z5c.CHANNEL(p.ME) && n !== p.Z5c.ME_ACTIVITY,
        y = (0, o.e7)([u.Z], () => u.Z.getPrivateChannelIds()[0]),
        O = (0, o.e7)([c.Z], () => {
            var e;
            return null != (e = c.Z.getChannelId(p.ME)) ? e : y;
        }),
        [v, j] = i.useState(!1),
        C = (0, a.Ie)("dms");
    return (0, r.jsxs)(f.H, {
        children: [
            (0, r.jsx)(d.Z, {
                selected: m,
                hovered: v,
                className: b.pill,
            }),
            (0, r.jsx)(h.Z, {
                hideOnClick: !0,
                text: g.intl.string(g.t.YUU0RF),
                selected: m,
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
                                onMouseEnter: () => j(!0),
                                onMouseLeave: () => j(!1),
                                onClick: p.dG4,
                                selected: m || v,
                                ariaLabel: g.intl.string(g.t.YUU0RF),
                                "aria-owns": "guild-list-dms",
                                "aria-selected": m || v,
                            },
                            C,
                        )),
                        (t = t =
                            {
                                to: {
                                    pathname: null != O ? p.Z5c.CHANNEL(p.ME, O) : p.Z5c.ME_DMS,
                                    state: {
                                        analyticsSource: {
                                            page: p.ZY5.GUILD_CHANNEL,
                                            section: p.jXE.NAVIGATION,
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
