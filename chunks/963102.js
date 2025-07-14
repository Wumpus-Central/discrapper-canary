(n.d(t, { I: () => N }), n(388685), n(539854));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(636977),
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
    O = n(594174),
    v = n(471731),
    E = n(335131),
    S = n(870289),
    x = n(534517),
    y = n(304742),
    j = n(554067),
    T = n(215023),
    P = n(981631),
    L = n(388032),
    k = n(774457);
function I(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: o } = e;
    return (0, r.jsx)(h.Z.Title, {
        onClick: () => o(t),
        wrapperClassName: k.tabWrapper,
        className: i()(k.tab, { [k.selected]: l }),
        children: n
    });
}
function B(e) {
    let { tab: t, selected: n, displayText: o, handleTransition: i } = e,
        [a, s] = l.useState(!1),
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
            shouldShow: a,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => b(!0),
            onRequestClose: () => {
                var e;
                (h.current && !f.Z.keyboardModeEnabled && (0, g.Qj)(), b(!1), null == (e = u.current) || e.focus());
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(y.Z, {
                    handleTransition: i,
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
                            I,
                            {
                                tab: t,
                                displayText: o,
                                selected: n,
                                handleTransition: i
                            },
                            t
                        ),
                        a
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
function N(e) {
    let { isFullScreen: t, isLayer: n, onClose: o, selectedTab: g, handleTransition: f } = e,
        y = (0, p.ZP)(),
        N = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        A = (null == N ? void 0 : N.isStaff()) || (null == N ? void 0 : N.isStaffPersonal()) || !1,
        { enabled: w } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        R = (0, x.S)('collectibles_shop_header_bar'),
        Z = [
            {
                tab: T.AW.HOME,
                displayText: L.intl.string(L.t.ijDDw8)
            },
            {
                tab: T.AW.CATALOG,
                displayText: R ? L.intl.string(L.t.Ah5sJi) : L.intl.string(L.t.xFcotb)
            }
        ];
    w &&
        Z.push({
            tab: T.AW.ORBS,
            displayText: L.intl.string(L.t.EBYkzs)
        });
    let D = n ? E.DR : o,
        F = g === T.AW.ORBS ? P.ZY5.SHOP_ORBS_TAB : P.ZY5.COLLECTIBLES_SHOP,
        M = l.useCallback(() => {
            (t && (D(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: F,
                    sectionType: P.jXE.ORBS_BALANCE_MENU,
                    ctaObject: P.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: a.j.ORBS_BALANCE_MENU }));
        }, [D, t, F]),
        H = (0, S.F)('collectibles_shop_header_bar');
    return (0, r.jsx)(c.f6W, {
        theme: y,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: i()(e, k.headerBar, { [k.fullscreenHeaderBar]: t }),
                innerClassname: w ? k.headerBarInner : void 0,
                toolbar: t || !A ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: k.shopHomeLink,
                        onClick: () => f(T.AW.HOME),
                        'aria-label': L.intl.string(L.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(v.Z, { className: k.discordLogo }), (0, r.jsx)(h.Z.Title, { children: L.intl.string(L.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: k.tabs,
                        children: Z.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === T.AW.CATALOG && R
                                ? (0, r.jsx)(
                                      B,
                                      {
                                          tab: t,
                                          selected: (0, T.RE)(g) || g === t,
                                          displayText: n,
                                          handleTransition: f
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      I,
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
                    (w || t || H) &&
                        (0, r.jsxs)('div', {
                            className: k.alignedRightContent,
                            children: [
                                H &&
                                    (0, r.jsx)(j.Z, {
                                        handleTransition: f,
                                        selectedTab: g
                                    }),
                                w &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: F,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: L.intl.string(L.t.VC4Mq6),
                                        ctaOnClick: M,
                                        className: k.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: D,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
