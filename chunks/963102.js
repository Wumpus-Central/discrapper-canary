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
    O = n(594174),
    v = n(471731),
    E = n(335131),
    S = n(534517),
    x = n(304742),
    y = n(215023),
    T = n(981631),
    j = n(388032),
    L = n(774457);
function P(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(h.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: L.tabWrapper,
        className: a()(L.tab, { [L.selected]: l }),
        children: n
    });
}
function k(e) {
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
        className: L.tabWithMenuContainer,
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
                return (0, r.jsx)(x.Z, {
                    handleTransition: a,
                    onClose: t
                });
            },
            children: () =>
                (0, r.jsxs)('div', {
                    ref: u,
                    className: L.tabWithMenu,
                    onKeyDown: (e) => {
                        ('Enter' === e.key || ' ' === e.key) && (b(!0), e.preventDefault());
                    },
                    children: [
                        (0, r.jsx)(
                            P,
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
        x = (0, p.ZP)(),
        I = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        B = (null == I ? void 0 : I.isStaff()) || (null == I ? void 0 : I.isStaffPersonal()) || !1,
        { enabled: N } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        A = (0, S.S)('collectibles_shop_header_bar'),
        w = [
            {
                tab: y.AW.HOME,
                displayText: j.intl.string(j.t.ijDDw8)
            },
            {
                tab: y.AW.CATALOG,
                displayText: A ? j.intl.string(j.t.Ah5sJi) : j.intl.string(j.t.xFcotb)
            }
        ];
    N &&
        w.push({
            tab: y.AW.ORBS,
            displayText: j.intl.string(j.t.EBYkzs)
        });
    let R = n ? E.DR : i,
        Z = g === y.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
        M = l.useCallback(() => {
            (t && (R(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: Z,
                    sectionType: T.jXE.ORBS_BALANCE_MENU,
                    ctaObject: T.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU }));
        }, [R, t, Z]);
    return (0, r.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: a()(e, L.headerBar, { [L.fullscreenHeaderBar]: t }),
                innerClassname: N ? L.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: L.shopHomeLink,
                        onClick: () => f(y.AW.HOME),
                        'aria-label': j.intl.string(j.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(v.Z, { className: L.discordLogo }), (0, r.jsx)(h.Z.Title, { children: j.intl.string(j.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: L.tabs,
                        children: w.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === y.AW.CATALOG && A
                                ? (0, r.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          selected: (0, y.RE)(g) || g === t,
                                          displayText: n,
                                          handleTransition: f
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      P,
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
                            className: L.alignedRightContent,
                            children: [
                                N &&
                                    (0, r.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: Z,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq6),
                                        ctaOnClick: M,
                                        className: L.balanceWidgetMenu
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
