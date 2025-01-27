n.d(t, {
    I: function () {
        return j;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(636977),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(425493),
    C = n(410030),
    h = n(984370),
    p = n(341907),
    f = n(822857),
    m = n(775451),
    g = n(594174),
    b = n(471731),
    x = n(335131),
    v = n(46140),
    _ = n(388032),
    k = n(2381);
function j(e) {
    let { isFullScreen: t, isLayer: n, onClose: l, isCatalogView: j, handleTransition: E, transparent: L } = e,
        I = (0, C.ZP)(),
        S = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        B = (null == S ? void 0 : S.isStaff()) || (null == S ? void 0 : S.isStaffPersonal()) || !1,
        { enabled: T } = (0, f.W)({ location: 'collectibles_shop_header_bar' });
    return (0, r.jsx)(d.ThemeProvider, {
        theme: I,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: a()(e, k.headerBar, {
                    [k.fullscreenHeaderBar]: t,
                    [k.headerBarRegularBackground]: !L,
                    [k.headerBarTransparentLightBackground]: L && !(0, c.wj)(I),
                    [k.headerBarTransparentDarkBackground]: L && (0, c.wj)(I)
                }),
                innerClassname: T ? k.headerBarInner : void 0,
                transparent: L,
                toolbar: t || !B ? null : (0, r.jsx)(i.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            j &&
                                null != E &&
                                (0, r.jsx)(d.Clickable, {
                                    onClick: E,
                                    className: k.back,
                                    'aria-label': _.intl.string(_.t['13/7kZ']),
                                    children: (0, r.jsx)(d.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(b.Z, {
                                color: L ? ((0, c.wj)(I) ? 'white' : 'black') : void 0,
                                className: k.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(h.Z.Title, { children: _.intl.string(_.t.pWG4zc) }),
                    j &&
                        (0, r.jsx)(h.Z.Title, {
                            className: k.shopAllHeader,
                            children: _.intl.string(_.t.xFcotb)
                        }),
                    (T || t) &&
                        (0, r.jsxs)('div', {
                            className: k.alignedRightContent,
                            children: [
                                T &&
                                    (0, r.jsx)(m.V9, {
                                        cardAlignment: m.V9.CardAlignment.END,
                                        className: a()(k.balanceWidgetMenu, { [k.fullScreenAlignedRightContent]: t }),
                                        ctaText: 'Earn More Orbs',
                                        ctaOnClick: () => (0, p.navigateToQuestHome)(v.dr.COLLECTIBLES_SHOP_HEADER_BAR, s.j.ACTIVITY_PANEL),
                                        linkText: 'Learn about Orbs'
                                    }),
                                t &&
                                    (0, r.jsx)(u.Z, {
                                        className: k.fullScreenAlignedRightContent,
                                        closeAction: n ? x.DR : l,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
