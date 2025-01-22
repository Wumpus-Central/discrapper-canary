n.d(t, {
    I: function () {
        return b;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    C = n(984370),
    h = n(594174),
    p = n(471731),
    f = n(335131),
    m = n(388032),
    g = n(2381);
function b(e) {
    let { isFullScreen: t, isLayer: n, onClose: l, isCatalogView: b, handleTransition: x, transparent: v } = e,
        _ = (0, u.ZP)(),
        k = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        j = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1;
    return (0, r.jsx)(c.ThemeProvider, {
        theme: _,
        children: (e) =>
            (0, r.jsxs)(C.Z, {
                className: s()(e, g.headerBar, {
                    [g.fullscreenHeaderBar]: t,
                    [g.headerBarRegularBackground]: !v,
                    [g.headerBarTransparentLightBackground]: v && !(0, o.wj)(_),
                    [g.headerBarTransparentDarkBackground]: v && (0, o.wj)(_)
                }),
                transparent: v,
                toolbar: t || !j ? null : (0, r.jsx)(i.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            b &&
                                null != x &&
                                (0, r.jsx)(c.Clickable, {
                                    onClick: x,
                                    className: g.back,
                                    'aria-label': m.intl.string(m.t['13/7kZ']),
                                    children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(p.Z, {
                                color: v ? ((0, o.wj)(_) ? 'white' : 'black') : void 0,
                                className: g.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(C.Z.Title, { children: m.intl.string(m.t.pWG4zc) }),
                    b &&
                        (0, r.jsx)(C.Z.Title, {
                            className: g.shopAllHeader,
                            children: m.intl.string(m.t.xFcotb)
                        }),
                    t &&
                        (0, r.jsx)(d.Z, {
                            className: g.closeIcon,
                            closeAction: n ? f.DR : l,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
