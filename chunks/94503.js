n.d(t, { U: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(91192),
    l = n(481060),
    a = n(442837),
    s = n(239091),
    c = n(410030),
    u = n(377171),
    d = n(682662),
    p = n(662146),
    h = n(678513),
    f = n(981631),
    g = n(388032),
    m = n(357340);
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
function v(e, t) {
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
function y(e) {
    let { target: t } = e,
        a = (0, o.Ie)('fakedoor'),
        h = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('62514')]).then(n.bind(n, 646202));
                return (n) => (0, r.jsx)(e, v(b({}, n), { target: t }));
            });
        }, [t]),
        y = i.useCallback(
            (e) => {
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e('39612').then(n.bind(n, 761624));
                    return (n) => (0, r.jsx)(e, v(b({}, n), { signupTarget: t }));
                });
            },
            [t]
        ),
        _ = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        O = (0, r.jsxs)('div', {
            className: m.tooltipContainer,
            children: [
                (0, r.jsx)('div', {
                    className: m.tooltipBackground,
                    style: { background: _ }
                }),
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: g.NW.string(g.t.IIbwAg)
                })
            ]
        }),
        j = (0, c.Fg)();
    return (0, r.jsxs)(d.H, {
        children: [
            (0, r.jsx)(l.ze6, {
                theme: f.BRd.DARK,
                children: (0, r.jsx)(p.Z, {
                    text: O,
                    tooltipClass: m.tooltip,
                    tooltipContentClass: m.tooltipContent,
                    children: (0, r.jsx)(l.ze6, {
                        theme: j,
                        children: (0, r.jsx)(l.aRk, {
                            lowerBadge: (0, r.jsx)(l.mAB, {
                                count: 1,
                                color: u.Z.BG_BRAND
                            }),
                            children: (0, r.jsx)(
                                l.LYs,
                                v(b({}, a), {
                                    onClick: h,
                                    onContextMenu: y,
                                    children: (0, r.jsx)(l.Dkj, { color: u.Z.TEXT_NORMAL })
                                })
                            )
                        })
                    })
                })
            }),
            (0, r.jsx)('div', {
                style: {
                    background: _,
                    width: 0,
                    height: 0
                }
            })
        ]
    });
}
function _() {
    let e = (0, a.e7)([h.Z], () => h.Z.getActiveUserSignUp());
    return null == e ? null : (0, r.jsx)(y, { target: e });
}
