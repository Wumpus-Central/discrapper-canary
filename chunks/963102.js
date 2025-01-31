n.d(t, { I: () => j });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(636977),
    o = n(442837),
    d = n(780384),
    c = n(481060),
    u = n(425493),
    C = n(410030),
    h = n(984370),
    p = n(341907),
    m = n(822857),
    f = n(775451),
    g = n(594174),
    x = n(471731),
    _ = n(335131),
    v = n(46140),
    b = n(388032),
    k = n(2381);
function j(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, isCatalogView: j, handleTransition: E, transparent: L } = e,
        I = (0, C.ZP)(),
        S = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        T = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1,
        { enabled: Z } = (0, m.W)({ location: 'collectibles_shop_header_bar' });
    return (0, r.jsx)(c.f6W, {
        theme: I,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: s()(e, k.headerBar, {
                    [k.fullscreenHeaderBar]: t,
                    [k.headerBarRegularBackground]: !L,
                    [k.headerBarTransparentLightBackground]: L && !(0, d.wj)(I),
                    [k.headerBarTransparentDarkBackground]: L && (0, d.wj)(I)
                }),
                innerClassname: Z ? k.headerBarInner : void 0,
                transparent: L,
                toolbar: t || !T ? null : (0, r.jsx)(l.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            j &&
                                null != E &&
                                (0, r.jsx)(c.P3F, {
                                    onClick: E,
                                    className: k.back,
                                    'aria-label': b.intl.string(b.t['13/7kZ']),
                                    children: (0, r.jsx)(c.j9r, {})
                                }),
                            (0, r.jsx)(x.Z, {
                                color: L ? ((0, d.wj)(I) ? 'white' : 'black') : void 0,
                                className: k.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(h.Z.Title, { children: b.intl.string(b.t.pWG4zc) }),
                    j &&
                        (0, r.jsx)(h.Z.Title, {
                            className: k.shopAllHeader,
                            children: b.intl.string(b.t.xFcotb)
                        }),
                    (Z || t) &&
                        (0, r.jsxs)('div', {
                            className: k.alignedRightContent,
                            children: [
                                Z &&
                                    (0, r.jsx)(f.V9, {
                                        cardAlignment: f.V9.CardAlignment.END,
                                        className: s()(k.balanceWidgetMenu, { [k.fullScreenAlignedRightContent]: t }),
                                        ctaText: b.intl.string(b.t['H57f4+']),
                                        ctaOnClick: () => (0, p.navigateToQuestHome)(v.dr.COLLECTIBLES_SHOP_HEADER_BAR, a.j.ACTIVITY_PANEL)
                                    }),
                                t &&
                                    (0, r.jsx)(u.Z, {
                                        className: k.fullScreenAlignedRightContent,
                                        closeAction: n ? _.DR : i,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
