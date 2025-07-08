(n.d(t, { I: () => B }), n(388685), n(539854));
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
    f = n(857595),
    g = n(607070),
    h = n(984370),
    b = n(341907),
    m = n(507808),
    _ = n(822857),
    C = n(775451),
    O = n(594174),
    E = n(471731),
    v = n(335131),
    S = n(870289),
    x = n(534517),
    y = n(304742),
    T = n(554067),
    j = n(215023),
    P = n(981631),
    L = n(388032),
    I = n(774457);
function k(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: o } = e;
    return (0, r.jsx)(h.Z.Title, {
        onClick: () => o(t),
        wrapperClassName: I.tabWrapper,
        className: i()(I.tab, { [I.selected]: l }),
        children: n
    });
}
function N(e) {
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
                e && (h.current = g.Z.keyboardModeEnabled));
        };
    return (0, r.jsx)('div', {
        className: I.tabWithMenuContainer,
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
                (h.current && !g.Z.keyboardModeEnabled && (0, f.Qj)(), b(!1), null == (e = u.current) || e.focus());
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
                    className: I.tabWithMenu,
                    onKeyDown: (e) => {
                        ('Enter' === e.key || ' ' === e.key) && (b(!0), e.preventDefault());
                    },
                    children: [
                        (0, r.jsx)(
                            k,
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
function B(e) {
    let { isFullScreen: t, isLayer: n, onClose: o, selectedTab: f, handleTransition: g } = e,
        y = (0, p.ZP)(),
        B = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        A = (null == B ? void 0 : B.isStaff()) || (null == B ? void 0 : B.isStaffPersonal()) || !1,
        { enabled: R } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        w = (0, x.S)('collectibles_shop_header_bar'),
        Z = [
            {
                tab: j.AW.HOME,
                displayText: L.intl.string(L.t.ijDDw8)
            },
            {
                tab: j.AW.CATALOG,
                displayText: w ? L.intl.string(L.t.Ah5sJi) : L.intl.string(L.t.xFcotb)
            }
        ];
    R &&
        Z.push({
            tab: j.AW.ORBS,
            displayText: L.intl.string(L.t.EBYkzs)
        });
    let F = n ? v.DR : o,
        D = f === j.AW.ORBS ? P.ZY5.SHOP_ORBS_TAB : P.ZY5.COLLECTIBLES_SHOP,
        M = l.useCallback(() => {
            (t && (F(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: D,
                    sectionType: P.jXE.ORBS_BALANCE_MENU,
                    ctaObject: P.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: a.j.ORBS_BALANCE_MENU }));
        }, [F, t, D]),
        H = (0, S.F)('collectibles_shop_header_bar');
    return (0, r.jsx)(c.f6W, {
        theme: y,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: i()(e, I.headerBar, { [I.fullscreenHeaderBar]: t }),
                innerClassname: R ? I.headerBarInner : void 0,
                toolbar: t || !A ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: I.shopHomeLink,
                        onClick: () => g(j.AW.HOME),
                        'aria-label': L.intl.string(L.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(E.Z, { className: I.discordLogo }), (0, r.jsx)(h.Z.Title, { children: L.intl.string(L.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: I.tabs,
                        children: Z.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === j.AW.CATALOG && w
                                ? (0, r.jsx)(
                                      N,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(f) || f === t,
                                          displayText: n,
                                          handleTransition: g
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: f === t,
                                          handleTransition: g
                                      },
                                      t
                                  );
                        })
                    }),
                    (R || t || H) &&
                        (0, r.jsxs)('div', {
                            className: I.alignedRightContent,
                            children: [
                                H && (0, r.jsx)(T.Z, {}),
                                R &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: D,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: L.intl.string(L.t.VC4Mq6),
                                        ctaOnClick: M,
                                        className: I.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: F,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
