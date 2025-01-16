n.d(t, {
    I: function () {
        return b;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(425493),
    u = n(410030),
    m = n(984370),
    h = n(594174),
    g = n(471731),
    p = n(335131),
    f = n(388032),
    C = n(2381);
function b(e) {
    let { isFullScreen: t, isLayer: n, onClose: i, isCatalogView: b, handleTransition: v, transparent: x } = e,
        _ = (0, u.ZP)(),
        k = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        I = (null == k ? void 0 : k.isStaff()) || (null == k ? void 0 : k.isStaffPersonal()) || !1;
    return (0, r.jsx)(c.ThemeProvider, {
        theme: _,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                className: l()(e, C.headerBar, {
                    [C.fullscreenHeaderBar]: t,
                    [C.headerBarRegularBackground]: !x,
                    [C.headerBarTransparentLightBackground]: x && !(0, o.wj)(_),
                    [C.headerBarTransparentDarkBackground]: x && (0, o.wj)(_)
                }),
                transparent: x,
                toolbar: t || !I ? null : (0, r.jsx)(a.Fragment, {}),
                children: [
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            b &&
                                null != v &&
                                (0, r.jsx)(c.Clickable, {
                                    onClick: v,
                                    className: C.back,
                                    'aria-label': f.intl.string(f.t['13/7kZ']),
                                    children: (0, r.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, r.jsx)(g.Z, {
                                color: x ? ((0, o.wj)(_) ? 'white' : 'black') : void 0,
                                className: C.discordLogo
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z.Title, { children: f.intl.string(f.t.pWG4zc) }),
                    b &&
                        (0, r.jsx)(m.Z.Title, {
                            className: C.shopAllHeader,
                            children: f.intl.string(f.t.xFcotb)
                        }),
                    t &&
                        (0, r.jsx)(d.Z, {
                            className: C.closeIcon,
                            closeAction: n ? p.DR : i,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
