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
    m = n(539873),
    g = n(207164),
    E = n(238302),
    b = n(514361),
    y = n(572397),
    v = n(705262),
    O = n(436774),
    I = n(768762),
    S = n(197115),
    T = n(210887),
    N = n(727939),
    A = n(981631),
    C = n(921944),
    R = n(474936),
    P = n(388032),
    w = n(16534);
function D(e, t, n) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
var x = (function (e) {
    return (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS'), e;
})({});
function M(e) {
    let { isCoachmark: t } = e,
        n = (0, y.q)();
    return (
        i.useEffect(() => ((0, E.Kq)(), n(A.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => n(A.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [n]),
        (0, r.jsx)(v.ZP, {
            type: v.yH.EDITOR,
            children: (0, r.jsx)(v.ZP.BasicAndGradient, {
                isEditor: !0,
                isCoachmark: t
            })
        })
    );
}
function k() {
    let e = (0, g.Z)();
    return (
        i.useEffect(() => {
            (0, p.nJ)(), e();
        }, [e]),
        (0, r.jsx)(m.Z, { isEditor: !0 })
    );
}
function j(e) {
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
        h = i.useCallback(
            () =>
                1 === t
                    ? void (0, c.ZDy)(async () => {
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
                      })
                    : 0 === t
                      ? void (0, c.ZDy)(async () => {
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
                        })
                      : void 0,
            [t]
        );
    return (0, r.jsxs)('div', {
        className: w.footerContainer,
        children: [
            o &&
                (0, r.jsxs)('div', {
                    className: w.footerLabelContainer,
                    children: [
                        (0, r.jsx)(c.SrA, {
                            className: w.footerNitro,
                            size: 'xs',
                            color: O.JX.PREMIUM_TIER_2
                        }),
                        (0, r.jsx)(c.Text, {
                            className: w.footerText,
                            variant: 'text-sm/medium',
                            children: P.NW.format(P.t.x2dQxM, { onClick: h })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: w.footerButtonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.zxk, {
                            className: a()(w.footerButton, w.footerButtonBack),
                            color: c.Ttl.PRIMARY,
                            size: c.zxk.Sizes.NONE,
                            onClick: f,
                            'aria-label': p,
                            children: (0, r.jsx)(I.Z, { direction: I.Z.Directions.LEFT })
                        })
                    }),
                    o &&
                        (0, r.jsx)(S.Z, {
                            className: w.footerButton,
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
        _ = (0, l.e7)([b.Z], () => b.Z.isPreview),
        m = (0, l.e7)([h.Z], () => h.Z.isUpsellPreview),
        g = _ || m,
        v = i.useMemo(() => T.Z.theme, []),
        O = (0, y.J)(),
        I = i.useCallback(() => {
            _ && O(), m && (0, p.O7)();
        }, [_, m, O]),
        S = (0, f.Z)(null, g ? I : A.dG4),
        R = i.useCallback(() => {
            g && (0, u.ZI)({ theme: v }), (0, p.G8)(), (0, E.Mo)(), I(), null == n || n(C.L.DISMISS);
        }, [I, n, g, v]);
    return (0, r.jsx)(N.Z, {
        className: w.draggableContainer,
        children: (0, r.jsxs)('div', {
            ref: S,
            className: w.container,
            children: [
                (0, r.jsxs)('div', {
                    className: w.headerParentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: w.headerContainer,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-lg/extrabold',
                                    children: P.NW.string(P.t.viGN6e)
                                }),
                                (0, r.jsx)(c.olH, {
                                    className: w.closeContainer,
                                    innerClassName: w.closeInner,
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
                    className: w.scrollContainer,
                    children: [0 === a && (0, r.jsx)(M, { isCoachmark: o }), 1 === a && (0, r.jsx)(k, {})]
                }),
                (0, r.jsx)(j, {
                    tab: a,
                    isPreview: g,
                    onClose: R,
                    isCoachmark: !1
                })
            ]
        })
    });
}
