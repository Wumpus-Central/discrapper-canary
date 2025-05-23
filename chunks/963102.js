n.d(t, { I: () => T }), n(388685), n(539854);
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
    g = n(984370),
    b = n(341907),
    f = n(507808),
    h = n(822857),
    m = n(775451),
    _ = n(594174),
    C = n(471731),
    v = n(335131),
    O = n(534517),
    S = n(304742),
    x = n(215023),
    E = n(981631),
    j = n(388032),
    y = n(774457);
function P(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(g.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: y.tabWrapper,
        className: i()(y.tab, { [y.selected]: l }),
        children: n
    });
}
function k(e) {
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
        className: y.tabWithMenuContainer,
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: (0, r.jsx)(c.yRy, {
            targetElementRef: u,
            shouldShow: o,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => g(!0),
            onRequestClose: () => g(!1),
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
                    className: y.tabWithMenu,
                    children: [
                        (0, r.jsx)(
                            P,
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
function T(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: S, handleTransition: T } = e,
        I = (0, p.ZP)(),
        L = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        B = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: w } = (0, h.WX)({ location: 'collectibles_shop_header_bar' }),
        N = [
            {
                tab: x.AW.HOME,
                displayText: j.intl.string(j.t.ijDDw8)
            },
            {
                tab: x.AW.CATALOG,
                displayText: j.intl.string(j.t.xFcotb)
            }
        ];
    w &&
        N.push({
            tab: x.AW.ORBS,
            displayText: j.intl.string(j.t['KUYR+P'])
        });
    let A = (0, O.S)('collectibles_shop_header_bar'),
        R = n ? v.DR : a,
        Z = S === x.AW.ORBS ? E.ZY5.SHOP_ORBS_TAB : E.ZY5.COLLECTIBLES_SHOP,
        F = l.useCallback(() => {
            t && (R(), (0, u.Ou)()),
                (0, f.Y)({
                    pageType: Z,
                    sectionType: E.jXE.ORBS_BALANCE_MENU,
                    ctaObject: E.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [R, t, Z]);
    return (0, r.jsx)(c.f6W, {
        theme: I,
        children: (e) =>
            (0, r.jsxs)(g.Z, {
                className: i()(e, y.headerBar, { [y.fullscreenHeaderBar]: t }),
                innerClassname: w ? y.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(c.P3F, {
                        className: y.shopHomeLink,
                        onClick: () => T(x.AW.HOME),
                        'aria-label': j.intl.string(j.t.pWG4zc) + ' home',
                        children: [(0, r.jsx)(C.Z, { className: y.discordLogo }), (0, r.jsx)(g.Z.Title, { children: j.intl.string(j.t.pWG4zc) })]
                    }),
                    (0, r.jsx)('div', {
                        className: y.tabs,
                        children: N.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return t === x.AW.CATALOG && A
                                ? (0, r.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          selected: (0, x.RE)(S) || S === t,
                                          displayText: n,
                                          handleTransition: T
                                      },
                                      t
                                  )
                                : (0, r.jsx)(
                                      P,
                                      {
                                          tab: t,
                                          displayText: n,
                                          selected: S === t,
                                          handleTransition: T
                                      },
                                      t
                                  );
                        })
                    }),
                    (w || t) &&
                        (0, r.jsxs)('div', {
                            className: y.alignedRightContent,
                            children: [
                                w &&
                                    (0, r.jsx)(m.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: Z,
                                        cardAlignment: m.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq6),
                                        ctaOnClick: F,
                                        className: y.balanceWidgetMenu
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
