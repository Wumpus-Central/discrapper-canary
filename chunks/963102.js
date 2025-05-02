n.d(t, { I: () => k }), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(636977),
    s = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(425493),
    b = n(410030),
    p = n(984370),
    f = n(341907),
    g = n(507808),
    h = n(822857),
    m = n(775451),
    _ = n(594174),
    C = n(471731),
    v = n(335131),
    O = n(215023),
    x = n(981631),
    j = n(388032),
    y = n(774457);
function S(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(p.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: y.tabWrapper,
        className: i()(y.tab, { [y.selected]: l }),
        children: n
    });
}
function k(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: k, handleTransition: P } = e,
        E = (0, b.ZP)(),
        w = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        B = (null == w ? void 0 : w.isStaff()) || (null == w ? void 0 : w.isStaffPersonal()) || !1,
        { enabled: T } = (0, h.W)({ location: 'collectibles_shop_header_bar' }),
        I = [
            {
                tab: O.AW.HOME,
                displayText: j.intl.string(j.t.ijDDw8)
            },
            {
                tab: O.AW.CATALOG,
                displayText: j.intl.string(j.t.xFcotb)
            }
        ];
    T &&
        I.push({
            tab: O.AW.ORBS,
            displayText: j.intl.string(j.t['KUYR+P'])
        });
    let L = n ? v.DR : a,
        N = k === O.AW.ORBS ? x.ZY5.SHOP_ORBS_TAB : x.ZY5.COLLECTIBLES_SHOP,
        A = l.useCallback(() => {
            t && (L(), (0, u.Ou)()),
                (0, g.Y)({
                    pageType: N,
                    sectionType: x.jXE.ORBS_BALANCE_MENU,
                    ctaObject: x.qAy.CTA_TO_QUEST_HOME
                }),
                (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU });
        }, [L, t, N]);
    return (0, r.jsx)(c.f6W, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(p.Z, {
                className: i()(e, y.headerBar, { [y.fullscreenHeaderBar]: t }),
                innerClassname: T ? y.headerBarInner : void 0,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsx)(C.Z, { className: y.discordLogo }),
                    (0, r.jsx)(p.Z.Title, { children: j.intl.string(j.t.pWG4zc) }),
                    (0, r.jsx)('div', {
                        className: y.tabs,
                        children: I.map((e) => {
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
                    (T || t) &&
                        (0, r.jsxs)('div', {
                            className: y.alignedRightContent,
                            children: [
                                T &&
                                    (0, r.jsx)(m.V9, {
                                        analyticsPage: N,
                                        cardAlignment: m.V9.CardAlignment.END,
                                        ctaText: j.intl.string(j.t.VC4Mq6),
                                        ctaOnClick: A,
                                        className: y.balanceWidgetMenu
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
