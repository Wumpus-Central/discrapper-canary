n.d(t, { I: () => y }), n(653041);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(442837),
    s = n(481060),
    c = n(37234),
    u = n(425493),
    d = n(410030),
    b = n(984370),
    p = n(341907),
    f = n(822857),
    g = n(775451),
    h = n(594174),
    m = n(471731),
    _ = n(335131),
    v = n(215023),
    C = n(388032),
    x = n(774457);
function O(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: a } = e;
    return (0, r.jsx)(b.Z.Title, {
        onClick: () => a(t),
        wrapperClassName: x.tabWrapper,
        className: o()(x.tab, { [x.selected]: l }),
        children: n
    });
}
function y(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: y, handleTransition: j } = e,
        k = (0, d.ZP)(),
        S = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        P = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1,
        { enabled: E } = (0, f.W)({ location: 'collectibles_shop_header_bar' }),
        w = [
            {
                tab: v.AW.HOME,
                displayText: C.NW.string(C.t.ijDDw8)
            },
            {
                tab: v.AW.CATALOG,
                displayText: C.NW.string(C.t.xFcotb)
            }
        ];
    E &&
        w.push({
            tab: v.AW.ORBS,
            displayText: C.NW.string(C.t['KUYR+P'])
        });
    let I = n ? _.DR : a,
        B = l.useCallback(() => {
            t && (I(), (0, c.Ou)()), (0, p.navigateToQuestHome)();
        }, [I, t]);
    return (0, r.jsx)(s.f6W, {
        theme: k,
        children: (e) =>
            (0, r.jsxs)(b.Z, {
                className: o()(e, x.headerBar, { [x.fullscreenHeaderBar]: t }),
                innerClassname: E ? x.headerBarInner : void 0,
                toolbar: t || !P ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsx)(m.Z, { className: x.discordLogo }),
                    (0, r.jsx)(b.Z.Title, { children: C.NW.string(C.t.pWG4zc) }),
                    (0, r.jsx)('div', {
                        className: x.tabs,
                        children: w.map((e) => {
                            let { tab: t, displayText: n } = e;
                            return (0, r.jsx)(
                                O,
                                {
                                    tab: t,
                                    displayText: n,
                                    selected: y === t,
                                    handleTransition: j
                                },
                                t
                            );
                        })
                    }),
                    (E || t) &&
                        (0, r.jsxs)('div', {
                            className: x.alignedRightContent,
                            children: [
                                E &&
                                    (0, r.jsx)(g.V9, {
                                        cardAlignment: g.V9.CardAlignment.END,
                                        ctaText: C.NW.string(C.t.VC4Mq6),
                                        ctaOnClick: B,
                                        className: x.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, r.jsx)(u.Z, {
                                        closeAction: I,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
