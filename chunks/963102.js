n.d(t, { I: () => k });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(780384),
    d = n(481060),
    c = n(425493),
    u = n(410030),
    C = n(984370),
    h = n(341907),
    p = n(822857),
    m = n(775451),
    g = n(594174),
    f = n(471731),
    x = n(335131),
    b = n(215023),
    _ = n(388032),
    v = n(666530);
function k(e) {
    let { isFullScreen: t, isLayer: n, onClose: a, selectedTab: k, handleTransition: j, transparent: L } = e,
        E = (0, u.ZP)(),
        S = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        B = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1,
        { enabled: T } = (0, p.W)({ location: 'collectibles_shop_header_bar' });
    return (0, r.jsx)(d.f6W, {
        theme: E,
        children: (e) =>
            (0, r.jsxs)(C.Z, {
                className: i()(e, v.headerBar, {
                    [v.fullscreenHeaderBar]: t,
                    [v.headerBarRegularBackground]: !L,
                    [v.headerBarTransparentLightBackground]: L && !(0, o.wj)(E),
                    [v.headerBarTransparentDarkBackground]: L && (0, o.wj)(E)
                }),
                innerClassname: T ? v.headerBarInner : void 0,
                transparent: L,
                toolbar: t || !B ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            k === b.AW.CATALOG &&
                                (0, r.jsx)(d.P3F, {
                                    onClick: () => j(b.AW.HOME),
                                    className: v.back,
                                    'aria-label': _.intl.string(_.t['13/7kZ']),
                                    children: (0, r.jsx)(d.j9r, {})
                                }),
                            (0, r.jsx)(f.Z, {
                                color: L ? ((0, o.wj)(E) ? 'white' : 'black') : void 0,
                                className: v.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(C.Z.Title, { children: _.intl.string(_.t.pWG4zc) }),
                    k === b.AW.CATALOG &&
                        (0, r.jsx)(C.Z.Title, {
                            className: v.shopAllHeader,
                            children: _.intl.string(_.t.xFcotb)
                        }),
                    (T || t) &&
                        (0, r.jsxs)('div', {
                            className: v.alignedRightContent,
                            children: [
                                T &&
                                    (0, r.jsx)(m.V9, {
                                        cardAlignment: m.V9.CardAlignment.END,
                                        className: i()(v.balanceWidgetMenu, { [v.fullScreenAlignedRightContent]: t }),
                                        ctaText: _.intl.string(_.t['H57f4+']),
                                        ctaOnClick: () => (0, h.navigateToQuestHome)()
                                    }),
                                t &&
                                    (0, r.jsx)(c.Z, {
                                        className: v.fullScreenAlignedRightContent,
                                        closeAction: n ? x.DR : a,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
