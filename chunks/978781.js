n.d(t, {
    Z: () => w,
    _: () => D
}),
    n(627341),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(442837),
    u = n(481060),
    c = n(230711),
    d = n(351773),
    f = n(100527),
    _ = n(94795),
    p = n(327943),
    h = n(539873),
    m = n(207164),
    g = n(238302),
    E = n(514361),
    v = n(572397),
    y = n(705262),
    I = n(436774),
    T = n(768762),
    b = n(197115),
    S = n(727939),
    A = n(981631),
    N = n(921944),
    C = n(474936),
    R = n(388032),
    O = n(870209),
    D = (function (e) {
        return (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS'), e;
    })({});
function L(e) {
    let { isCoachmark: t } = e,
        n = (0, v.q)();
    return (
        r.useEffect(() => ((0, g.Kq)(), n(A.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => n(A.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [n]),
        (0, i.jsx)(y.ZP, {
            type: y.yH.EDITOR,
            children: (0, i.jsx)(y.ZP.BasicAndGradient, {
                isEditor: !0,
                isCoachmark: t
            })
        })
    );
}
function x() {
    let e = (0, m.Z)();
    return (
        r.useEffect(() => {
            (0, _.nJ)(), e();
        }, [e]),
        (0, i.jsx)(h.Z, { isEditor: !0 })
    );
}
function P(e) {
    let { tab: t, isPreview: a, isCoachmark: l, onClose: d } = e,
        _ = r.useCallback(() => {
            d(), l || c.Z.open();
        }, [d, l]),
        p = (0, o.EQ)({
            isPreview: a,
            isCoachmark: l
        })
            .with({ isCoachmark: !0 }, () => R.intl.string(R.t.cpT0Cg))
            .with({ isPreview: !0 }, () => R.intl.string(R.t['dqH+qq']))
            .otherwise(() => R.intl.string(R.t.Olc2Ky)),
        h = r.useCallback(() => {
            if (1 === t) {
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, i.jsx)(e, {
                            analyticsSource: f.Z.APP_ICON_EDITOR,
                            analyticsLocation: { section: A.jXE.SETTINGS_APP_ICONS },
                            ...t
                        });
                });
                return;
            }
            if (0 === t) {
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                    return (t) =>
                        (0, i.jsx)(e, {
                            analyticsSource: f.Z.CLIENT_THEMES_EDITOR,
                            analyticsLocation: { section: A.jXE.SETTINGS_CLIENT_THEMES },
                            ...t
                        });
                });
                return;
            }
        }, [t]);
    return (0, i.jsxs)('div', {
        className: O.footerContainer,
        children: [
            a &&
                (0, i.jsxs)('div', {
                    className: O.footerLabelContainer,
                    children: [
                        (0, i.jsx)(u.SrA, {
                            className: O.footerNitro,
                            size: 'xs',
                            color: I.JX.PREMIUM_TIER_2
                        }),
                        (0, i.jsx)(u.Text, {
                            className: O.footerText,
                            variant: 'text-sm/medium',
                            children: R.intl.format(R.t.x2dQxM, { onClick: h })
                        })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: O.footerButtonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            className: s()(O.footerButton, O.footerButtonBack),
                            color: u.Ttl.PRIMARY,
                            size: u.zxk.Sizes.NONE,
                            onClick: _,
                            'aria-label': p,
                            children: (0, i.jsx)(T.Z, { direction: T.Z.Directions.LEFT })
                        })
                    }),
                    a &&
                        (0, i.jsx)(b.Z, {
                            className: O.footerButton,
                            subscriptionTier: C.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: R.intl.string(R.t.pj0XBA)
                        })
                ]
            })
        ]
    });
}
function w(e) {
    let { initialTab: t, markAsDismissed: n, isCoachmark: a } = e,
        [s, o] = r.useState(t),
        c = r.useMemo(
            () => [
                {
                    name: R.intl.string(R.t.Ksh3io),
                    value: 0
                },
                {
                    name: R.intl.string(R.t.RPh2oq),
                    value: 1
                }
            ],
            []
        ),
        f = (0, l.e7)([E.Z], () => E.Z.isPreview),
        h = (0, l.e7)([p.Z], () => p.Z.isUpsellPreview),
        m = f || h,
        y = (0, v.J)(),
        I = r.useCallback(() => {
            f && y(), h && (0, _.O7)();
        }, [f, h, y]),
        T = (0, d.Z)(null, m ? I : A.dG4),
        b = r.useCallback(() => {
            (0, _.G8)(), (0, g.Mo)(), I(), null == n || n(N.L.DISMISS);
        }, [I, n]);
    return (0, i.jsx)(S.Z, {
        className: O.draggableContainer,
        children: (0, i.jsxs)('div', {
            ref: T,
            className: O.container,
            children: [
                (0, i.jsxs)('div', {
                    className: O.headerParentContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: O.headerContainer,
                            children: [
                                (0, i.jsx)(u.X6q, {
                                    variant: 'heading-lg/extrabold',
                                    children: R.intl.string(R.t.viGN6e)
                                }),
                                (0, i.jsx)(u.olH, {
                                    className: O.closeContainer,
                                    innerClassName: O.closeInner,
                                    withCircleBackground: !0,
                                    onClick: b
                                })
                            ]
                        }),
                        (0, i.jsx)(u.sY7, {
                            options: c,
                            value: s,
                            onChange: (e) => {
                                let { value: t } = e;
                                return o(t);
                            },
                            look: 'pill'
                        })
                    ]
                }),
                (0, i.jsxs)(u.Ttm, {
                    className: O.scrollContainer,
                    children: [0 === s && (0, i.jsx)(L, { isCoachmark: a }), 1 === s && (0, i.jsx)(x, {})]
                }),
                (0, i.jsx)(P, {
                    tab: s,
                    isPreview: m,
                    onClose: b,
                    isCoachmark: !1
                })
            ]
        })
    });
}
