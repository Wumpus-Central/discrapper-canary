n.d(t, { I: () => L });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(636977),
    o = n(442837),
    d = n(780384),
    c = n(481060),
    u = n(425493),
    C = n(410030),
    h = n(984370),
    p = n(341907),
    m = n(822857),
    g = n(775451),
    f = n(594174),
    x = n(471731),
    _ = n(335131),
    b = n(215023),
    v = n(46140),
    k = n(388032),
    j = n(666530);
function L(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, selectedTab: L, handleTransition: E, transparent: S } = e,
        B = (0, C.ZP)(),
        T = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        I = (null == T ? void 0 : T.isStaff()) || (null == T ? void 0 : T.isStaffPersonal()) || !1,
        { enabled: y } = (0, m.W)({ location: 'collectibles_shop_header_bar' });
    return (0, r.jsx)(c.f6W, {
        theme: B,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: a()(e, j.headerBar, {
                    [j.fullscreenHeaderBar]: t,
                    [j.headerBarRegularBackground]: !S,
                    [j.headerBarTransparentLightBackground]: S && !(0, d.wj)(B),
                    [j.headerBarTransparentDarkBackground]: S && (0, d.wj)(B)
                }),
                innerClassname: y ? j.headerBarInner : void 0,
                transparent: S,
                toolbar: t || !I ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            L === b.AW.CATALOG &&
                                (0, r.jsx)(c.P3F, {
                                    onClick: () => E(b.AW.HOME),
                                    className: j.back,
                                    'aria-label': k.intl.string(k.t['13/7kZ']),
                                    children: (0, r.jsx)(c.j9r, {})
                                }),
                            (0, r.jsx)(x.Z, {
                                color: S ? ((0, d.wj)(B) ? 'white' : 'black') : void 0,
                                className: j.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(h.Z.Title, { children: k.intl.string(k.t.pWG4zc) }),
                    L === b.AW.CATALOG &&
                        (0, r.jsx)(h.Z.Title, {
                            className: j.shopAllHeader,
                            children: k.intl.string(k.t.xFcotb)
                        }),
                    (y || t) &&
                        (0, r.jsxs)('div', {
                            className: j.alignedRightContent,
                            children: [
                                y &&
                                    (0, r.jsx)(g.V9, {
                                        cardAlignment: g.V9.CardAlignment.END,
                                        className: a()(j.balanceWidgetMenu, { [j.fullScreenAlignedRightContent]: t }),
                                        ctaText: k.intl.string(k.t['H57f4+']),
                                        ctaOnClick: () => (0, p.navigateToQuestHome)(v.dr.COLLECTIBLES_SHOP_HEADER_BAR, s.j.ACTIVITY_PANEL)
                                    }),
                                t &&
                                    (0, r.jsx)(u.Z, {
                                        className: j.fullScreenAlignedRightContent,
                                        closeAction: n ? _.DR : i,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
