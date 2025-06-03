n.d(t, { I: () => I }), n(388685), n(539854);
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
    g = n(984370),
    b = n(341907),
    h = n(507808),
    m = n(822857),
    _ = n(775451),
    C = n(594174),
    v = n(471731),
    O = n(335131),
    S = n(534517),
    E = n(304742),
    x = n(215023),
    y = n(981631),
    j = n(388032),
    P = n(774457);
function k(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: P.tabWrapper,
        className: i()(P.tab, { [P.selected]: l }),
        children: n
    });
}
function T(e) {
    let { tab: t, selected: n, displayText: a, handleTransition: i } = e,
        [o, s] = l.useState(!1),
        u = l.useRef(null),
        [d, p] = l.useState(0),
        g = (e) => {
            clearTimeout(d),
                p(
                    setTimeout(() => {
                        s(e);
                    }, 100)
                );
        };
    return (0, r.jsx)('div', {
        className: P.tabWithMenuContainer,
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: u,
            shouldShow: o,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => g(!0),
            onRequestClose: () => {
                var e;
                (0, f.Qj)(), g(!1), null == (e = u.current) || e.focus();
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(E.Z, {
                    handleTransition: i,
                    onClose: t
                });
            },
            children: () =>
                (0, r.jsxs)('div', {
                    ref: u,
                    className: P.tabWithMenu,
                    onKeyDown: (e) => {
                        ('Enter' === e.key || ' ' === e.key) && (g(!0), e.preventDefault());
                    },
                    children: [
                        (0, r.jsx)(
                            k,
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
function I(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: f, handleTransition: E } = e,
        I = (0, p.ZP)(),
        L = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        B = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: w } = (0, m.WX)({ location: 'collectibles_shop_header_bar' }),
        N = (0, S.S)('collectibles_shop_header_bar'),
        A = [
            {
                tab: x.AW.HOME,
                displayText: j.intl.string(j.t.ijDDw8)
            },
            {
                tab: x.AW.CATALOG,
                displayText: N ? j.intl.string(j.t.Ah5sJi) : j.intl.string(j.t.xFcotb)
            }
        ];
    w &&
        A.push({
            tab: x.AW.ORBS,
            displayText: j.intl.string(j.t['KUYR+P'])
        });
    let R = n ? O.DR : a,
        Z = f === x.AW.ORBS ? y.ZY5.SHOP_ORBS_TAB : y.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (R(), (0, u.Ou)()),
                (0, h.Y)({
                    pageType: Z,
                    sectionType: y.jXE.ORBS_BALANCE_MENU,
                    ctaObject: y.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [R, t, Z]);
    return (0, r.jsx)(c.f6W, {
        theme: I,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                className: i()(e, P.headerBar, { [P.fullscreenHeaderBar]: t }),
                innerClassname: w ? P.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: P.shopHomeLink,
                        onClick: () => E(x.AW.HOME),
                        'aria-label': j.intl.string(j.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(v.Z, { className: P.discordLogo }), (0, r.jsx)(g.Z.Title, { children: j.intl.string(j.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: P.tabs,
                        children: A.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === x.AW.CATALOG && N
                                ? (0, r.jsx)(
                                      T,
                                      {
                                          tab: t,
                                          selected: (0, x.RE)(f) || f === t,
                                          displayText: n,
                                          handleTransition: E
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: f === t,
                                          handleTransition: E
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
                                    (0, r.jsx)(_.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: Z,
                                        cardAlignment: _.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq6),
                                        ctaOnClick: F,
                                        className: P.balanceWidgetMenu
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
