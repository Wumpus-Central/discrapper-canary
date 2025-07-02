(n.d(t, { I: () => I }), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    p = n(410030),
    g = n(857595),
    f = n(607070),
    h = n(984370),
    b = n(341907),
    m = n(507808),
    _ = n(822857),
    C = n(775451),
    v = n(594174),
    O = n(471731),
    x = n(335131),
    S = n(534517),
    E = n(304742),
    j = n(215023),
    y = n(981631),
    P = n(388032),
    k = n(774457);
function T(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(h.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: k.tabWrapper,
        className: a()(k.tab, { [k.selected]: l }),
        children: n
    });
}
function L(e) {
    let { tab: t, selected: n, displayText: i, handleTransition: a } = e,
        [o, s] = l.useState(!1),
        u = l.useRef(null),
        [d, p] = l.useState(0),
        h = l.useRef(!1),
        b = (e) => {
            (clearTimeout(d),
                p(
                    setTimeout(() => {
                        s(e);
                    }, 100)
                ),
                e && (h.current = f.Z.keyboardModeEnabled));
        };
    return (0, r.jsx)('div', {
        className: k.tabWithMenuContainer,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: u,
            shouldShow: o,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => b(!0),
            onRequestClose: () => {
                var e;
                (h.current && !f.Z.keyboardModeEnabled && (0, g.Qj)(), b(!1), null == (e = u.current) || e.focus());
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(E.Z, {
                    handleTransition: a,
                    onClose: t
                });
            },
            children: () =>
                (0, r.jsxs)('div', {
                    ref: u,
                    className: k.tabWithMenu,
                    onKeyDown: (e) => {
                        ('Enter' === e.key || ' ' === e.key) && (b(!0), e.preventDefault());
                    },
                    children: [
                        (0, r.jsx)(
                            T,
                            {
                                tab: t,
                                displayText: i,
                                selected: n,
                                handleTransition: a
                            },
                            t
                        ),
                        o
                            ? (0, r.jsx)(c.u04, {
                                  size: 'sm',
                                  color: 'currentColor'
                              })
                            : (0, r.jsx)(c.CJ0, {
                                  size: 'sm',
                                  color: 'currentColor'
                              })
                    ]
                })
        })
    });
}
function I(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: g, handleTransition: f } = e,
        E = (0, p.ZP)(),
        I = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        B = (null == I ? void 0 : I.isStaff()) || (null == I ? void 0 : I.isStaffPersonal()) || !1,
        { enabled: N } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        w = (0, S.S)('collectibles_shop_header_bar'),
        A = [
            {
                tab: j.AW.HOME,
                displayText: P.intl.string(P.t.ijDDw8)
            },
            {
                tab: j.AW.CATALOG,
                displayText: w ? P.intl.string(P.t.Ah5sJi) : P.intl.string(P.t.xFcotb)
            }
        ];
    N &&
        A.push({
            tab: j.AW.ORBS,
            displayText: P.intl.string(P.t.EBYkzs)
        });
    let Z = n ? x.DR : i,
        R = g === j.AW.ORBS ? y.ZY5.SHOP_ORBS_TAB : y.ZY5.COLLECTIBLES_SHOP,
        H = l.useCallback(() => {
            (t && (Z(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: R,
                    sectionType: y.jXE.ORBS_BALANCE_MENU,
                    ctaObject: y.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU }));
        }, [Z, t, R]);
    return (0, r.jsx)(c.f6W, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: a()(e, k.headerBar, { [k.fullscreenHeaderBar]: t }),
                innerClassname: N ? k.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: k.shopHomeLink,
                        onClick: () => f(j.AW.HOME),
                        'aria-label': P.intl.string(P.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(O.Z, { className: k.discordLogo }), (0, r.jsx)(h.Z.Title, { children: P.intl.string(P.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: k.tabs,
                        children: A.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === j.AW.CATALOG && w
                                ? (0, r.jsx)(
                                      L,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(g) || g === t,
                                          displayText: n,
                                          handleTransition: f
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      T,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: g === t,
                                          handleTransition: f
                                      },
                                      t
                                  );
                        })
                    }),
                    (N || t) &&
                        (0, r.jsxs)('div', {
                            className: k.alignedRightContent,
                            children: [
                                N &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: R,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: P.intl.string(P.t.VC4Mq6),
                                        ctaOnClick: H,
                                        className: k.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: Z,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
