n.d(t, {
    Z: () => U,
    _: () => x
}),
    n(627341),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(481060),
    u = n(153867),
    d = n(230711),
    f = n(351773),
    _ = n(100527),
    p = n(94795),
    h = n(327943),
    g = n(539873),
    m = n(207164),
    E = n(238302),
    v = n(514361),
    b = n(572397),
    y = n(705262),
    O = n(436774),
    S = n(768762),
    I = n(197115),
    T = n(210887),
    N = n(727939),
    A = n(981631),
    C = n(921944),
    R = n(474936),
    P = n(388032),
    D = n(937804);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
var x = (function (e) {
    return (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS'), e;
})({});
function M(e) {
    let { isCoachmark: t } = e,
        n = (0, b.q)();
    return (
        i.useEffect(() => ((0, E.Kq)(), n(A.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => n(A.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [n]),
        (0, r.jsx)(y.ZP, {
            type: y.yH.EDITOR,
            children: (0, r.jsx)(y.ZP.BasicAndGradient, {
                isEditor: !0,
                isCoachmark: t
            })
        })
    );
}
function j() {
    let e = (0, m.Z)();
    return (
        i.useEffect(() => {
            (0, p.nJ)(), e();
        }, [e]),
        (0, r.jsx)(g.Z, { isEditor: !0 })
    );
}
function k(e) {
    let { tab: t, isPreview: o, isCoachmark: l, onClose: u } = e,
        f = i.useCallback(() => {
            u(), l || d.Z.open();
        }, [u, l]),
        p = (0, s.EQ)({
            isPreview: o,
            isCoachmark: l
        })
            .with({ isCoachmark: !0 }, () => P.NW.string(P.t.cpT0Cg))
            .with({ isPreview: !0 }, () => P.NW.string(P.t['dqH+qq']))
            .otherwise(() => P.NW.string(P.t.Olc2Ky)),
        h = i.useCallback(() => {
            if (1 === t) {
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            L(
                                {
                                    analyticsSource: _.Z.APP_ICON_EDITOR,
                                    analyticsLocation: { section: A.jXE.SETTINGS_APP_ICONS }
                                },
                                t
                            )
                        );
                });
                return;
            }
            if (0 === t) {
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            L(
                                {
                                    analyticsSource: _.Z.CLIENT_THEMES_EDITOR,
                                    analyticsLocation: { section: A.jXE.SETTINGS_CLIENT_THEMES }
                                },
                                t
                            )
                        );
                });
                return;
            }
        }, [t]);
    return (0, r.jsxs)('div', {
        className: D.footerContainer,
        children: [
            o &&
                (0, r.jsxs)('div', {
                    className: D.footerLabelContainer,
                    children: [
                        (0, r.jsx)(c.SrA, {
                            className: D.footerNitro,
                            size: 'xs',
                            color: O.JX.PREMIUM_TIER_2
                        }),
                        (0, r.jsx)(c.Text, {
                            className: D.footerText,
                            variant: 'text-sm/medium',
                            children: P.NW.format(P.t.x2dQxM, { onClick: h })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: D.footerButtonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.zxk, {
                            className: a()(D.footerButton, D.footerButtonBack),
                            color: c.Ttl.PRIMARY,
                            size: c.zxk.Sizes.NONE,
                            onClick: f,
                            'aria-label': p,
                            children: (0, r.jsx)(S.Z, { direction: S.Z.Directions.LEFT })
                        })
                    }),
                    o &&
                        (0, r.jsx)(I.Z, {
                            className: D.footerButton,
                            subscriptionTier: R.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: P.NW.string(P.t.pj0XBA)
                        })
                ]
            })
        ]
    });
}
function U(e) {
    let { initialTab: t, markAsDismissed: n, isCoachmark: o } = e,
        [a, s] = i.useState(t),
        d = i.useMemo(
            () => [
                {
                    name: P.NW.string(P.t.Ksh3io),
                    value: 0
                },
                {
                    name: P.NW.string(P.t.RPh2oq),
                    value: 1
                }
            ],
            []
        ),
        _ = (0, l.e7)([v.Z], () => v.Z.isPreview),
        g = (0, l.e7)([h.Z], () => h.Z.isUpsellPreview),
        m = _ || g,
        y = i.useMemo(() => T.Z.theme, []),
        O = (0, b.J)(),
        S = i.useCallback(() => {
            _ && O(), g && (0, p.O7)();
        }, [_, g, O]),
        I = (0, f.Z)(null, m ? S : A.dG4),
        R = i.useCallback(() => {
            m && (0, u.ZI)({ theme: y }), (0, p.G8)(), (0, E.Mo)(), S(), null == n || n(C.L.DISMISS);
        }, [S, n, m, y]);
    return (0, r.jsx)(N.Z, {
        className: D.draggableContainer,
        children: (0, r.jsxs)('div', {
            ref: I,
            className: D.container,
            children: [
                (0, r.jsxs)('div', {
                    className: D.headerParentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.headerContainer,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-lg/extrabold',
                                    children: P.NW.string(P.t.viGN6e)
                                }),
                                (0, r.jsx)(c.olH, {
                                    className: D.closeContainer,
                                    innerClassName: D.closeInner,
                                    withCircleBackground: !0,
                                    onClick: R
                                })
                            ]
                        }),
                        (0, r.jsx)(c.sY7, {
                            options: d,
                            value: a,
                            onChange: (e) => {
                                let { value: t } = e;
                                return s(t);
                            },
                            look: 'pill'
                        })
                    ]
                }),
                (0, r.jsxs)(c.Ttm, {
                    className: D.scrollContainer,
                    children: [0 === a && (0, r.jsx)(M, { isCoachmark: o }), 1 === a && (0, r.jsx)(j, {})]
                }),
                (0, r.jsx)(k, {
                    tab: a,
                    isPreview: m,
                    onClose: R,
                    isCoachmark: !1
                })
            ]
        })
    });
}
