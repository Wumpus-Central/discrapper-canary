n.d(t, { U: () => v });
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(481060),
    a = n(442837),
    s = n(239091),
    c = n(410030),
    u = n(377171),
    d = n(682662),
    p = n(662146),
    h = n(678513),
    f = n(981631),
    g = n(388032),
    m = n(975812);
function b(e) {
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
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
function _(e) {
    let { target: t } = e,
        a = (0, l.Ie)('fakedoor'),
        h = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('20404')]).then(n.bind(n, 646202));
                return (n) => (0, r.jsx)(e, y(b({}, n), { target: t }));
            });
        }, [t]),
        _ = i.useCallback(
            (e) => {
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e('39612').then(n.bind(n, 761624));
                    return (n) => (0, r.jsx)(e, y(b({}, n), { signupTarget: t }));
                });
            },
            [t]
        ),
        v = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        O = (0, r.jsxs)('div', {
            className: m.tooltipContainer,
            children: [
                (0, r.jsx)('div', {
                    className: m.tooltipBackground,
                    style: { background: v }
                }),
                (0, r.jsx)(o.X6q, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: g.NW.string(g.t.IIbwAg)
                })
            ]
        }),
        j = (0, c.Fg)();
    return (0, r.jsxs)(d.H, {
        children: [
            (0, r.jsx)(o.ze6, {
                theme: f.BRd.DARK,
                children: (0, r.jsx)(p.Z, {
                    text: O,
                    tooltipClass: m.tooltip,
                    tooltipContentClass: m.tooltipContent,
                    children: (0, r.jsx)(o.ze6, {
                        theme: j,
                        children: (0, r.jsx)(o.aRk, {
                            lowerBadge: (0, r.jsx)(o.mAB, {
                                count: 1,
                                color: u.Z.BG_BRAND
                            }),
                            children: (0, r.jsx)(
                                o.LYs,
                                y(b({}, a), {
                                    onClick: h,
                                    onContextMenu: _,
                                    children: (0, r.jsx)(o.Dkj, { color: u.Z.TEXT_NORMAL })
                                })
                            )
                        })
                    })
                })
            }),
            (0, r.jsx)('div', {
                style: {
                    background: v,
                    width: 0,
                    height: 0
                }
            })
        ]
    });
}
function v() {
    let e = (0, a.e7)([h.Z], () => h.Z.getActiveUserSignUp());
    return null == e ? null : (0, r.jsx)(_, { target: e });
}
