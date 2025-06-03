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
    S = n(335131),
    E = n(534517),
    x = n(304742),
    y = n(215023),
    j = n(981631),
    P = n(388032),
    k = n(774457);
function T(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: k.tabWrapper,
        className: i()(k.tab, { [k.selected]: l }),
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
        className: k.tabWithMenuContainer,
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
                return (0, r.jsx)(x.Z, {
                    handleTransition: i,
                    onClose: t
                });
            },
            children: () =>
                (0, r.jsxs)('div', {
                    ref: u,
                    className: k.tabWithMenu,
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
        x = (0, p.ZP)(),
        L = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        B = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: w } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        N = (0, E.S)('collectibles_shop_header_bar'),
        A = [
            {
                tab: y.AW.HOME,
                displayText: P.intl.string(P.t.ijDDw8)
            },
            {
                tab: y.AW.CATALOG,
                displayText: N ? P.intl.string(P.t.Ah5sJi) : P.intl.string(P.t.xFcotb)
            }
        ];
    w &&
        A.push({
            tab: y.AW.ORBS,
            displayText: P.intl.string(P.t['KUYR+P'])
        });
    let R = n ? S.DR : a,
        Z = f === y.AW.ORBS ? j.ZY5.SHOP_ORBS_TAB : j.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (R(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: Z,
                    sectionType: j.jXE.ORBS_BALANCE_MENU,
                    ctaObject: j.qAy.CTA_TO_QUEST_HOME
                }),
                (0, h.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [R, t, Z]);
    return (0, r.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                className: i()(e, k.headerBar, { [k.fullscreenHeaderBar]: t }),
                innerClassname: w ? k.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: k.shopHomeLink,
                        onClick: () => b(y.AW.HOME),
                        'aria-label': P.intl.string(P.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(O.Z, { className: k.discordLogo }), (0, r.jsx)(g.Z.Title, { children: P.intl.string(P.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: k.tabs,
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
                            className: k.alignedRightContent,
                            children: [
                                w &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: Z,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: P.intl.string(P.t.VC4Mq6),
                                        ctaOnClick: F,
                                        className: k.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: R,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
