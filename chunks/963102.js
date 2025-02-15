n.d(t, { I: () => j }), n(653041);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    d = n(425493),
    c = n(410030),
    u = n(984370),
    C = n(341907),
    h = n(822857),
    m = n(775451),
    p = n(594174),
    g = n(471731),
    f = n(335131),
    x = n(215023),
    b = n(388032),
    v = n(960211);
function _(e) {
    let { tab: t, displayText: n, selected: r, handleTransition: i } = e;
    return (0, l.jsx)(u.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: v.tabWrapper,
        className: a()(v.tab, { [v.selected]: r }),
        children: n
    });
}
function j(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: j, handleTransition: k } = e,
        E = (0, c.ZP)(),
        L = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        S = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1,
        { enabled: T } = (0, h.W)({ location: 'collectibles_shop_header_bar' }),
        I = [
            {
                tab: x.AW.HOME,
                displayText: b.intl.string(b.t.ijDDw8)
            },
            {
                tab: x.AW.CATALOG,
                displayText: b.intl.string(b.t.xFcotb)
            }
        ];
    return (
        T &&
            I.push({
                tab: x.AW.ORBS,
                displayText: b.intl.string(b.t.q6uIys)
            }),
        (0, l.jsx)(o.f6W, {
            theme: E,
            children: (e) =>
                (0, l.jsxs)(u.Z, {
                    className: a()(e, v.headerBar, { [v.fullscreenHeaderBar]: t }),
                    innerClassname: T ? v.headerBarInner : void 0,
                    toolbar: t || !S ? null : (0, l.jsx)(r.Fragment, {}),
                    children: [
                        (0, l.jsx)(g.Z, { className: v.discordLogo }),
                        (0, l.jsx)(u.Z.Title, { children: b.intl.string(b.t.pWG4zc) }),
                        (0, l.jsx)('div', {
                            className: v.tabs,
                            children: I.map((e) => {
                                let { tab: t, displayText: n } = e;
                                return (0, l.jsx)(
                                    _,
                                    {
                                        tab: t,
                                        displayText: n,
                                        selected: j === t,
                                        handleTransition: k
                                    },
                                    t
                                );
                            })
                        }),
                        (T || t) &&
                            (0, l.jsxs)('div', {
                                className: v.alignedRightContent,
                                children: [
                                    T &&
                                        (0, l.jsx)(m.V9, {
                                            cardAlignment: m.V9.CardAlignment.END,
                                            className: v.balanceWidgetMenu,
                                            ctaText: b.intl.string(b.t['H57f4+']),
                                            ctaOnClick: () => (0, C.navigateToQuestHome)()
                                        }),
                                    t &&
                                        (0, l.jsx)(d.Z, {
                                            closeAction: n ? f.DR : i,
                                            keybind: 'ESC'
                                        })
                                ]
                            })
                    ]
                })
        })
    );
}
