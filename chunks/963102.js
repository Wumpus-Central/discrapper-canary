n.d(t, { I: () => y }), n(539854);
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
    g = n(822857),
    m = n(775451),
    h = n(594174),
    _ = n(471731),
    C = n(335131),
    v = n(215023),
    x = n(388032),
    O = n(774457);
function j(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(p.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: O.tabWrapper,
        className: o()(O.tab, { [O.selected]: l }),
        children: n
    });
}
function y(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: y, handleTransition: k } = e,
        S = (0, b.ZP)(),
        P = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        E = (null == P ? void 0 : P.isStaff()) || (null == P ? void 0 : P.isStaffPersonal()) || !1,
        { enabled: w } = (0, g.W)({ location: 'collectibles_shop_header_bar' }),
        B = [
            {
                tab: v.AW.HOME,
                displayText: x.NW.string(x.t.ijDDw8)
            },
            {
                tab: v.AW.CATALOG,
                displayText: x.NW.string(x.t.xFcotb)
            }
        ];
    w &&
        B.push({
            tab: v.AW.ORBS,
            displayText: x.NW.string(x.t['KUYR+P'])
        });
    let I = n ? C.DR : a,
        N = l.useCallback(() => {
            t && (I(), (0, u.Ou)()), (0, f.navigateToQuestHome)({ fromContent: i.j.ORBS_BALANCE_MENU });
        }, [I, t]);
    return (0, r.jsx)(c.f6W, {
        theme: S,
        children: (e) =>
            (0, r.jsxs)(p.Z, {
                className: o()(e, O.headerBar, { [O.fullscreenHeaderBar]: t }),
                innerClassname: w ? O.headerBarInner : void 0,
                toolbar: t || !E ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsx)(_.Z, { className: O.discordLogo }),
                    (0, r.jsx)(p.Z.Title, { children: x.NW.string(x.t.pWG4zc) }),
                    (0, r.jsx)('div', {
                        className: O.tabs,
                        children: B.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return (0, r.jsx)(
                                j,
                                {
                                    tab: t,
                                    displayText: n,
                                    selected: y === t,
                                    handleTransition: k
                                },
                                t
                            );
                        })
                    }),
                    (w || t) &&
                        (0, r.jsxs)('div', {
                            className: O.alignedRightContent,
                            children: [
                                w &&
                                    (0, r.jsx)(m.V9, {
                                        cardAlignment: m.V9.CardAlignment.END,
                                        ctaText: x.NW.string(x.t.VC4Mq6),
                                        ctaOnClick: N,
                                        className: O.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(d.Z, {
                                        closeAction: I,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
