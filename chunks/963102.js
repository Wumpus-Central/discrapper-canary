n.d(t, { I: () => k }), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    b = n(410030),
    p = n(984370),
    f = n(341907),
    g = n(507808),
    m = n(822857),
    h = n(775451),
    _ = n(594174),
    C = n(471731),
    v = n(335131),
    x = n(215023),
    O = n(981631),
    j = n(388032),
    y = n(774457);
function S(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(p.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: y.tabWrapper,
        className: o()(y.tab, { [y.selected]: l }),
        children: n
    });
}
function k(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: k, handleTransition: P } = e,
        E = (0, b.ZP)(),
        B = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        w = (null == B ? void 0 : B.isStaff()) || (null == B ? void 0 : B.isStaffPersonal()) || !1,
        { enabled: I } = (0, m.W)({ location: 'collectibles_shop_header_bar' }),
        T = [
            {
                tab: x.AW.HOME,
                displayText: j.NW.string(j.t.ijDDw8)
            },
            {
                tab: x.AW.CATALOG,
                displayText: j.NW.string(j.t.xFcotb)
            }
        ];
    I &&
        T.push({
            tab: x.AW.ORBS,
            displayText: j.NW.string(j.t['KUYR+P'])
        });
    let N = n ? v.DR : a,
        L = k === x.AW.ORBS ? O.ZY5.SHOP_ORBS_TAB : O.ZY5.COLLECTIBLES_SHOP,
        Z = l.useCallback(() => {
            t && (N(), (0, u.Ou)()),
                (0, g.Y)({
                    pageType: L,
                    sectionType: O.jXE.ORBS_BALANCE_MENU,
                    ctaObject: O.qAy.CTA_TO_QUEST_HOME
                }),
                (0, f.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [N, t, L]);
    return (0, r.jsx)(c.f6W, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(p.Z, {
                className: o()(e, y.headerBar, { [y.fullscreenHeaderBar]: t }),
                innerClassname: I ? y.headerBarInner : void 0,
                toolbar: t || !w ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsx)(C.Z, { className: y.discordLogo }),
                    (0, r.jsx)(p.Z.Title, { children: j.NW.string(j.t.pWG4zc) }),
                    (0, r.jsx)('div', {
                        className: y.tabs,
                        children: T.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return (0, r.jsx)(
                                S,
                                {
                                    tab: t,
                                    displayText: n,
                                    selected: k === t,
                                    handleTransition: P
                                },
                                t
                            );
                        })
                    }),
                    (I || t) &&
                        (0, r.jsxs)('div', {
                            className: y.alignedRightContent,
                            children: [
                                I &&
                                    (0, r.jsx)(h.V9, {
                                        analyticsPage: L,
                                        cardAlignment: h.V9.CardAlignment.END,
                                        ctaText: j.NW.string(j.t.VC4Mq6),
                                        ctaOnClick: Z,
                                        className: y.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: N,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
