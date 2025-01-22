r.d(n, {
    Z: function () {
        return U;
    },
    _: function () {
        return i;
    }
});
var i,
    a = r(627341);
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(278074),
    f = r(442837),
    p = r(481060),
    h = r(230711),
    _ = r(351773),
    m = r(100527),
    g = r(94795),
    E = r(327943),
    v = r(539873),
    y = r(207164),
    b = r(238302),
    I = r(514361),
    T = r(572397),
    S = r(705262),
    A = r(436774),
    C = r(768762),
    N = r(197115),
    R = r(727939),
    O = r(981631),
    D = r(921944),
    L = r(474936),
    x = r(388032),
    w = r(860768);
function P() {
    let e = (0, T.q)();
    return (
        l.useEffect(() => ((0, b.Kq)(), e(O.rMx.CLIENT_THEME_PREVIEW_VIEWED), () => e(O.rMx.CLIENT_THEME_PREVIEW_CLOSED)), [e]),
        (0, s.jsx)(S.ZP, {
            type: S.yH.EDITOR,
            children: (0, s.jsx)(S.ZP.BasicAndGradient, { isEditor: !0 })
        })
    );
}
function M() {
    let e = (0, y.Z)();
    return (
        l.useEffect(() => {
            (0, g.nJ)(), e();
        }, [e]),
        (0, s.jsx)(v.Z, { isEditor: !0 })
    );
}
function k(e) {
    let { tab: n, isPreview: i, isCoachmark: a, onClose: o } = e,
        u = l.useCallback(() => {
            o(), !a && h.Z.open();
        }, [o, a]),
        f = (0, d.EQ)({
            isPreview: i,
            isCoachmark: a
        })
            .with({ isCoachmark: !0 }, () => x.intl.string(x.t.cpT0Cg))
            .with({ isPreview: !0 }, () => x.intl.string(x.t['dqH+qq']))
            .otherwise(() => x.intl.string(x.t.Olc2Ky)),
        _ = l.useCallback(() => {
            if (1 === n) {
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await r.e('69052').then(r.bind(r, 184250));
                    return (n) =>
                        (0, s.jsx)(e, {
                            analyticsSource: m.Z.APP_ICON_EDITOR,
                            analyticsLocation: { section: O.jXE.SETTINGS_APP_ICONS },
                            ...n
                        });
                });
                return;
            }
            if (0 === n) {
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await r.e('68192').then(r.bind(r, 742234));
                    return (n) =>
                        (0, s.jsx)(e, {
                            analyticsSource: m.Z.CLIENT_THEMES_EDITOR,
                            analyticsLocation: { section: O.jXE.SETTINGS_CLIENT_THEMES },
                            ...n
                        });
                });
                return;
            }
        }, [n]);
    return (0, s.jsxs)('div', {
        className: w.footerContainer,
        children: [
            i &&
                (0, s.jsxs)('div', {
                    className: w.footerLabelContainer,
                    children: [
                        (0, s.jsx)(p.NitroWheelIcon, {
                            className: w.footerNitro,
                            size: 'xs',
                            color: A.JX.PREMIUM_TIER_2
                        }),
                        (0, s.jsx)(p.Text, {
                            className: w.footerText,
                            variant: 'text-sm/medium',
                            children: x.intl.format(x.t.x2dQxM, { onClick: _ })
                        })
                    ]
                }),
            (0, s.jsxs)('div', {
                className: w.footerButtonContainer,
                children: [
                    (0, s.jsx)('div', {
                        children: (0, s.jsx)(p.Button, {
                            className: c()(w.footerButton, w.footerButtonBack),
                            color: p.ButtonColors.PRIMARY,
                            size: p.Button.Sizes.NONE,
                            onClick: u,
                            'aria-label': f,
                            children: (0, s.jsx)(C.Z, { direction: C.Z.Directions.LEFT })
                        })
                    }),
                    i &&
                        (0, s.jsx)(N.Z, {
                            className: w.footerButton,
                            subscriptionTier: L.Si.TIER_2,
                            showGradient: !0,
                            fullWidth: !0,
                            buttonText: x.intl.string(x.t.pj0XBA)
                        })
                ]
            })
        ]
    });
}
function U(e) {
    let { initialTab: n, markAsDismissed: r } = e,
        [i, a] = l.useState(n),
        o = l.useMemo(
            () => [
                {
                    name: x.intl.string(x.t.Ksh3io),
                    value: 0
                },
                {
                    name: x.intl.string(x.t.RPh2oq),
                    value: 1
                }
            ],
            []
        ),
        u = (0, f.e7)([I.Z], () => I.Z.isPreview),
        c = (0, f.e7)([E.Z], () => E.Z.isUpsellPreview),
        d = u || c,
        h = (0, T.J)(),
        m = l.useCallback(() => {
            u && h(), c && (0, g.O7)();
        }, [u, c, h]),
        v = (0, _.Z)(null, d ? m : O.dG4),
        y = l.useCallback(() => {
            (0, g.G8)(), (0, b.Mo)(), m(), null == r || r(D.L.DISMISS);
        }, [m, r]);
    return (0, s.jsx)(R.Z, {
        className: w.draggableContainer,
        children: (0, s.jsxs)('div', {
            ref: v,
            className: w.container,
            children: [
                (0, s.jsxs)('div', {
                    className: w.headerParentContainer,
                    children: [
                        (0, s.jsxs)('div', {
                            className: w.headerContainer,
                            children: [
                                (0, s.jsx)(p.Heading, {
                                    variant: 'heading-lg/extrabold',
                                    children: x.intl.string(x.t.viGN6e)
                                }),
                                (0, s.jsx)(p.ModalCloseButton, {
                                    className: w.closeContainer,
                                    innerClassName: w.closeInner,
                                    withCircleBackground: !0,
                                    onClick: y
                                })
                            ]
                        }),
                        (0, s.jsx)(p.SegmentedControl, {
                            options: o,
                            value: i,
                            onChange: (e) => {
                                let { value: n } = e;
                                return a(n);
                            },
                            look: 'pill'
                        })
                    ]
                }),
                (0, s.jsxs)(p.Scroller, {
                    className: w.scrollContainer,
                    children: [0 === i && (0, s.jsx)(P, {}), 1 === i && (0, s.jsx)(M, {})]
                }),
                (0, s.jsx)(k, {
                    tab: i,
                    isPreview: d,
                    onClose: y,
                    isCoachmark: !1
                })
            ]
        })
    });
}
!(function (e) {
    (e[(e.CLIENT_THEMES = 0)] = 'CLIENT_THEMES'), (e[(e.APP_ICONS = 1)] = 'APP_ICONS');
})(i || (i = {}));
