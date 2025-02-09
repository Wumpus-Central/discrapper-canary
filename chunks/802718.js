n.d(t, { U: () => v });
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(481060),
    o = n(442837),
    s = n(239091),
    c = n(410030),
    d = n(377171),
    u = n(682662),
    h = n(662146),
    p = n(678513),
    m = n(981631),
    g = n(388032),
    f = n(437524);
function _(e) {
    let { target: t } = e,
        o = (0, r.Ie)('fakedoor'),
        p = l.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('22862'), n.e('52222')]).then(n.bind(n, 646202));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        target: t
                    });
            });
        }, [t]),
        _ = l.useCallback(
            (e) => {
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e('39612').then(n.bind(n, 761624));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            signupTarget: t
                        });
                });
            },
            [t]
        ),
        v = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
        C = (0, i.jsxs)('div', {
            className: f.tooltipContainer,
            children: [
                (0, i.jsx)('div', {
                    className: f.tooltipBackground,
                    style: { background: v }
                }),
                (0, i.jsx)(a.X6q, {
                    variant: 'heading-sm/medium',
                    children: t.tooltipHeader
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    children: g.intl.string(g.t.IIbwAg)
                })
            ]
        }),
        x = (0, c.Fg)();
    return (0, i.jsxs)(u.H, {
        children: [
            (0, i.jsx)(a.ze6, {
                theme: m.BRd.DARK,
                children: (0, i.jsx)(h.Z, {
                    text: C,
                    tooltipClass: f.tooltip,
                    tooltipContentClass: f.tooltipContent,
                    children: (0, i.jsx)(a.ze6, {
                        theme: x,
                        children: (0, i.jsx)(a.aRk, {
                            lowerBadge: (0, i.jsx)(a.mAB, {
                                count: 1,
                                color: d.Z.BG_BRAND
                            }),
                            children: (0, i.jsx)(a.LYs, {
                                ...o,
                                onClick: p,
                                onContextMenu: _,
                                children: (0, i.jsx)(a.Dkj, { color: d.Z.TEXT_NORMAL })
                            })
                        })
                    })
                })
            }),
            (0, i.jsx)('div', {
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
    let e = (0, o.e7)([p.Z], () => p.Z.getActiveUserSignUp());
    return null == e ? null : (0, i.jsx)(_, { target: e });
}
