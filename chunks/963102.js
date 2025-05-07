n.d(t, { I: () => E }), n(539854);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    f = n(410030),
    b = n(984370),
    p = n(341907),
    g = n(507808),
    h = n(822857),
    m = n(775451),
    _ = n(594174),
    C = n(471731),
    v = n(335131),
    O = n(215023),
    x = n(981631),
    S = n(388032),
    j = n(774457);
function y(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(b.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: j.tabWrapper,
        className: a()(j.tab, { [j.selected]: l }),
        children: n
    });
}
function E(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: E, handleTransition: P } = e,
        k = (0, f.ZP)(),
        T = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        w = (null == T ? void 0 : T.isStaff()) || (null == T ? void 0 : T.isStaffPersonal()) || !1,
        { enabled: I } = (0, h.W)({ location: 'collectibles_shop_header_bar' }),
        B = [
            {
                tab: O.AW.HOME,
                displayText: S.intl.string(S.t.ijDDw8)
            },
            {
                tab: O.AW.CATALOG,
                displayText: S.intl.string(S.t.xFcotb)
            }
        ];
    I &&
        B.push({
            tab: O.AW.ORBS,
            displayText: S.intl.string(S.t['KUYR+P'])
        });
    let L = n ? v.DR : i,
        N = E === O.AW.ORBS ? x.ZY5.SHOP_ORBS_TAB : x.ZY5.COLLECTIBLES_SHOP,
        R = l.useCallback(() => {
            t && (L(), (0, u.Ou)()),
                (0, g.Y)({
                    pageType: N,
                    sectionType: x.jXE.ORBS_BALANCE_MENU,
                    ctaObject: x.qAy.CTA_TO_QUEST_HOME
                }),
                (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [L, t, N]);
    return (0, r.jsx)(c.f6W, {
        theme: k,
        children: (e) =>
            (0, r.jsxs)(b.Z, {
                className: a()(e, j.headerBar, { [j.fullscreenHeaderBar]: t }),
                innerClassname: I ? j.headerBarInner : void 0,
                toolbar: t || !w ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsx)(C.Z, { className: j.discordLogo }),
                    (0, r.jsx)(b.Z.Title, { children: S.intl.string(S.t.pWG4zc) }),
                    (0, r.jsx)('div', {
                        className: j.tabs,
                        children: B.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return (0, r.jsx)(
                                y,
                                {
                                    tab: t,
                                    displayText: n,
                                    selected: E === t,
                                    handleTransition: P
                                },
                                t
                            );
                        })
                    }),
                    (I || t) &&
                        (0, r.jsxs)('div', {
                            className: j.alignedRightContent,
                            children: [
                                I &&
                                    (0, r.jsx)(m.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: N,
                                        cardAlignment: m.V9.CardAlignment.END,
                                        ctaText: S.intl.string(S.t.VC4Mq6),
                                        ctaOnClick: R,
                                        className: j.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: L,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
