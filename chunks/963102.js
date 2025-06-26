n.d(t, { I: () => L }), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    i = n(636977),
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
    x = n(335131),
    S = n(534517),
    E = n(304742),
    y = n(215023),
    j = n(981631),
    k = n(388032),
    P = n(774457);
function T(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: P.tabWrapper,
        className: o()(P.tab, { [P.selected]: l }),
        children: n
    });
}
function I(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: o } = e,
        [i, s] = l.useState(!1),
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
            shouldShow: i,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => h(!0),
            onRequestClose: () => {
                var e;
                g.current && !b.Z.keyboardModeEnabled && (0, f.Qj)(), h(!1), null == (e = u.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(E.Z, {
                    handleTransition: o,
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
                                handleTransition: o
                            },
                            t
                        ),
                        i
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
        E = (0, p.ZP)(),
        L = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        B = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: w } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        N = (0, S.S)('collectibles_shop_header_bar'),
        A = [
            {
                tab: y.AW.HOME,
                displayText: k.intl.string(k.t.ijDDw8)
            },
            {
                tab: y.AW.CATALOG,
                displayText: N ? k.intl.string(k.t.Ah5sJi) : k.intl.string(k.t.xFcotb)
            }
        ];
    w &&
        A.push({
            tab: y.AW.ORBS,
            displayText: k.intl.string(k.t.EBYkzs)
        });
    let Z = n ? x.DR : a,
        R = f === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (Z(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: R,
                    sectionType: j.jXE.ORBS_BALANCE_MENU,
                    ctaObject: j.qAy.CTA_TO_QUEST_HOME
                }),
                (0, h.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [Z, t, R]);
    return (0, r.jsx)(c.f6W, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                className: o()(e, P.headerBar, { [P.fullscreenHeaderBar]: t }),
                innerClassname: w ? P.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: P.shopHomeLink,
                        onClick: () => b(y.AW.HOME),
                        'aria-label': k.intl.string(k.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(O.Z, { className: P.discordLogo }), (0, r.jsx)(g.Z.Title, { children: k.intl.string(k.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: P.tabs,
                        children: A.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === y.AW.CATALOG && N
                                ? (0, r.jsx)(
                                      I,
                                      {
                                          tab: t,
                                          selected: (0, y.RE)(f) || f === t,
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
                    (w || t) &&
                        (0, r.jsxs)('div', {
                            className: P.alignedRightContent,
                            children: [
                                w &&
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
