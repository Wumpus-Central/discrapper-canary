n.d(t, {
    Z: () => k,
    _: () => D
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
    u = n(230711),
    d = n(351773),
    f = n(100527),
    p = n(94795),
    _ = n(327943),
    h = n(539873),
    m = n(207164),
    g = n(238302),
    E = n(514361),
    v = n(572397),
    b = n(705262),
    y = n(436774),
    O = n(768762),
    S = n(197115),
    I = n(727939),
    T = n(981631),
    N = n(921944),
    A = n(474936),
    C = n(388032),
    R = n(937804);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
var D = (function (e) {
    return (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS'), e;
})({});
function x(e) {
    let { isCoachmark: t } = e,
        n = (0, v.q)();
    return (
        i.useEffect(() => ((0, g.Kq)(), n(T.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => n(T.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [n]),
        (0, r.jsx)(b.ZP, {
            type: b.yH.EDITOR,
            children: (0, r.jsx)(b.ZP.BasicAndGradient, {
                isEditor: !0,
                isCoachmark: t
            })
        })
    );
}
function L() {
    let e = (0, m.Z)();
    return (
        i.useEffect(() => {
            (0, p.nJ)(), e();
        }, [e]),
        (0, r.jsx)(h.Z, { isEditor: !0 })
    );
}
function M(e) {
    let { tab: t, isPreview: o, isCoachmark: l, onClose: d } = e,
        p = i.useCallback(() => {
            d(), l || u.Z.open();
        }, [d, l]),
        _ = (0, s.EQ)({
            isPreview: o,
            isCoachmark: l
        })
            .with({ isCoachmark: !0 }, () => C.NW.string(C.t.cpT0Cg))
            .with({ isPreview: !0 }, () => C.NW.string(C.t['dqH+qq']))
            .otherwise(() => C.NW.string(C.t.Olc2Ky)),
        h = i.useCallback(() => {
            if (1 === t) {
                (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('69052').then(n.bind(n, 184250));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(
                                {
                                    analyticsSource: f.Z.APP_ICON_EDITOR,
                                    analyticsLocation: { section: T.jXE.SETTINGS_APP_ICONS }
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
                            w(
                                {
                                    analyticsSource: f.Z.CLIENT_THEMES_EDITOR,
                                    analyticsLocation: { section: T.jXE.SETTINGS_CLIENT_THEMES }
                                },
                                t
                            )
                        );
                });
                return;
            }
        }, [t]);
    return (0, r.jsxs)('div', {
        className: R.footerContainer,
        children: [
            o &&
                (0, r.jsxs)('div', {
                    className: R.footerLabelContainer,
                    children: [
                        (0, r.jsx)(c.SrA, {
                            className: R.footerNitro,
                            size: 'xs',
                            color: y.JX.PREMIUM_TIER_2
                        }),
                        (0, r.jsx)(c.Text, {
                            className: R.footerText,
                            variant: 'text-sm/medium',
                            children: C.NW.format(C.t.x2dQxM, { onClick: h })
                        })
                    ]
                }),
            (0, r.jsxs)('div', {
                className: R.footerButtonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(c.zxk, {
                            className: a()(R.footerButton, R.footerButtonBack),
                            color: c.Ttl.PRIMARY,
                            size: c.zxk.Sizes.NONE,
                            onClick: p,
                            'aria-label': _,
                            children: (0, r.jsx)(O.Z, { direction: O.Z.Directions.LEFT })
                        })
                    }),
                    o &&
                        (0, r.jsx)(S.Z, {
                            className: R.footerButton,
                            subscriptionTier: A.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: C.NW.string(C.t.pj0XBA)
                        })
                ]
            })
        ]
    });
}
function k(e) {
    let { initialTab: t, markAsDismissed: n, isCoachmark: o } = e,
        [a, s] = i.useState(t),
        u = i.useMemo(
            () => [
                {
                    name: C.NW.string(C.t.Ksh3io),
                    value: 0
                },
                {
                    name: C.NW.string(C.t.RPh2oq),
                    value: 1
                }
            ],
            []
        ),
        f = (0, l.e7)([E.Z], () => E.Z.isPreview),
        h = (0, l.e7)([_.Z], () => _.Z.isUpsellPreview),
        m = f || h,
        b = (0, v.J)(),
        y = i.useCallback(() => {
            f && b(), h && (0, p.O7)();
        }, [f, h, b]),
        O = (0, d.Z)(null, m ? y : T.dG4),
        S = i.useCallback(() => {
            (0, p.G8)(), (0, g.Mo)(), y(), null == n || n(N.L.DISMISS);
        }, [y, n]);
    return (0, r.jsx)(I.Z, {
        className: R.draggableContainer,
        children: (0, r.jsxs)('div', {
            ref: O,
            className: R.container,
            children: [
                (0, r.jsxs)('div', {
                    className: R.headerParentContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.headerContainer,
                            children: [
                                (0, r.jsx)(c.X6q, {
                                    variant: 'heading-lg/extrabold',
                                    children: C.NW.string(C.t.viGN6e)
                                }),
                                (0, r.jsx)(c.olH, {
                                    className: R.closeContainer,
                                    innerClassName: R.closeInner,
                                    withCircleBackground: !0,
                                    onClick: S
                                })
                            ]
                        }),
                        (0, r.jsx)(c.sY7, {
                            options: u,
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
                    className: R.scrollContainer,
                    children: [0 === a && (0, r.jsx)(x, { isCoachmark: o }), 1 === a && (0, r.jsx)(L, {})]
                }),
                (0, r.jsx)(M, {
                    tab: a,
                    isPreview: m,
                    onClose: S,
                    isCoachmark: !1
                })
            ]
        })
    });
}
