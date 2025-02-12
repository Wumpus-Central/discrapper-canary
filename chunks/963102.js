n.d(t, { I: () => j }), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(425493),
    c = n(410030),
    u = n(984370),
    C = n(341907),
    h = n(822857),
    p = n(775451),
    m = n(594174),
    f = n(471731),
    g = n(335131),
    x = n(215023),
    b = n(388032),
    _ = n(666530);
function v(e) {
    let { tab: t, displayText: n, selected: l, handleTransition: i } = e;
    return (0, r.jsx)(u.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: _.tabWrapper,
        className: s()(_.tab, { [_.selected]: l }),
        children: n
    });
}
function j(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: j, handleTransition: k } = e,
        E = (0, c.ZP)(),
        L = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
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
        (0, r.jsx)(o.f6W, {
            theme: E,
            children: (e) =>
                (0, r.jsxs)(u.Z, {
                    className: s()(e, _.headerBar, { [_.fullscreenHeaderBar]: t }),
                    innerClassname: T ? _.headerBarInner : void 0,
                    toolbar: t || !S ? null : (0, r.jsx)(l.Fragment, {}),
                    children: [
                        (0, r.jsx)(f.Z, { className: _.discordLogo }),
                        (0, r.jsx)(u.Z.Title, { children: b.intl.string(b.t.pWG4zc) }),
                        (0, r.jsx)('div', {
                            className: _.tabs,
                            children: I.map((e) => {
                                let { tab: t, displayText: n } = e;
                                return (0, r.jsx)(
                                    v,
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
                            (0, r.jsxs)('div', {
                                className: _.alignedRightContent,
                                children: [
                                    T &&
                                        (0, r.jsx)(p.V9, {
                                            cardAlignment: p.V9.CardAlignment.END,
                                            className: _.balanceWidgetMenu,
                                            ctaText: b.intl.string(b.t['H57f4+']),
                                            ctaOnClick: () => (0, C.navigateToQuestHome)()
                                        }),
                                    t &&
                                        (0, r.jsx)(d.Z, {
                                            closeAction: n ? g.DR : i,
                                            keybind: 'ESC'
                                        })
                                ]
                            })
                    ]
                })
        })
    );
}
