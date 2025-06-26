n.d(t, { I: () => L }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    p = n(410030),
    f = n(857595),
    b = n(607070),
    g = n(984370),
    h = n(341907),
    m = n(507808),
    _ = n(822857),
    C = n(775451),
    v = n(594174),
    O = n(471731),
    E = n(335131),
    x = n(534517),
    S = n(304742),
    j = n(215023),
    y = n(981631),
    k = n(388032),
    P = n(774457);
function T(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: P.tabWrapper,
        className: i()(P.tab, { [P.selected]: l }),
        children: n
    });
}
function I(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: i } = e,
        [o, s] = l.useState(!1),
        u = l.useRef(null),
        [d, p] = l.useState(0),
        g = l.useRef(!1),
        h = (e) => {
            clearTimeout(d),
                p(
                    setTimeout(() => {
                        s(e);
                    }, 100)
                ),
                e && (g.current = b.Z.keyboardModeEnabled);
        };
    return (0, r.jsx)('div', {
        className: P.tabWithMenuContainer,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: u,
            shouldShow: o,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => h(!0),
            onRequestClose: () => {
                var e;
                g.current && !b.Z.keyboardModeEnabled && (0, f.Qj)(), h(!1), null == (e = u.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(S.Z, {
                    handleTransition: i,
                    onClose: t
                });
            },
            children: () =>
                (0, r.jsxs)('div', {
                    ref: u,
                    className: P.tabWithMenu,
                    onKeyDown: (e) => {
                        ('Enter' === e.key || ' ' === e.key) && (h(!0), e.preventDefault());
                    },
                    children: [
                        (0, r.jsx)(
                            T,
                            {
                                tab: t,
                                displayText: a,
                                selected: n,
                                handleTransition: i
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
function L(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: f, handleTransition: b } = e,
        S = (0, p.ZP)(),
        L = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        B = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: N } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        A = (0, x.S)('collectibles_shop_header_bar'),
        w = [
            {
                tab: j.AW.HOME,
                displayText: k.intl.string(k.t.ijDDw8)
            },
            {
                tab: j.AW.CATALOG,
                displayText: A ? k.intl.string(k.t.Ah5sJi) : k.intl.string(k.t.xFcotb)
            }
        ];
    N &&
        w.push({
            tab: j.AW.ORBS,
            displayText: k.intl.string(k.t.EBYkzs)
        });
    let Z = n ? E.DR : a,
        R = f === j.AW.ORBS ? y.ZY5.SHOP_ORBS_TAB : y.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (Z(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: R,
                    sectionType: y.jXE.ORBS_BALANCE_MENU,
                    ctaObject: y.qAy.CTA_TO_QUEST_HOME
                }),
                (0, h.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [Z, t, R]);
    return (0, r.jsx)(c.f6W, {
        theme: S,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                className: i()(e, P.headerBar, { [P.fullscreenHeaderBar]: t }),
                innerClassname: N ? P.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: P.shopHomeLink,
                        onClick: () => b(j.AW.HOME),
                        'aria-label': k.intl.string(k.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(O.Z, { className: P.discordLogo }), (0, r.jsx)(g.Z.Title, { children: k.intl.string(k.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: P.tabs,
                        children: w.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === j.AW.CATALOG && A
                                ? (0, r.jsx)(
                                      I,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(f) || f === t,
                                          displayText: n,
                                          handleTransition: b
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      T,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: f === t,
                                          handleTransition: b
                                      },
                                      t
                                  );
                        })
                    }),
                    (N || t) &&
                        (0, r.jsxs)('div', {
                            className: P.alignedRightContent,
                            children: [
                                N &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: R,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: k.intl.string(k.t.VC4Mq6),
                                        ctaOnClick: F,
                                        className: P.balanceWidgetMenu
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
