n.d(t, { Z: () => h });
var i = n(54381),
    r = n(473749),
    l = n(996146),
    a = n(235874),
    o = n(906732),
    s = n(522651),
    c = n(579185),
    u = n(621586),
    d = n(871499),
    p = n(127379),
    f = n(388032);
function h(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: h, setWhichPopoutIsOpen: m } = e,
        { parentAnalyticsLocation: g } = (0, o.ZP)(),
        b = r.useRef(null),
        { isHovered: C, setIsHovered: y, onMouseEnter: v, onMouseLeave: x } = (0, c.Z)(200, 300),
        {
            Component: O,
            play: E,
            events: { onMouseEnter: j, onMouseLeave: S },
        } = (0, l.$)(),
        _ = r.useCallback(
            (e) => {
                "focus" !== e.type && (v(), j());
            },
            [v, j],
        ),
        P = r.useCallback(() => {
            null == h && (x(), S());
        }, [x, S, h]),
        I = r.useCallback(() => {
            (0, s.v)(g, s.d.GIFTING),
                h === p.D.GIFTING
                    ? (null == m || m(void 0), x())
                    : (null != h ? (E(), v()) : E(), null == m || m(p.D.GIFTING));
        }, [v, x, g, E, m, h]);
    return (0, i.jsx)(a.y, {
        targetElementRef: b,
        shouldShow: (C && (h === p.D.GIFTING || null == h)) || h === p.D.GIFTING,
        animation: a.y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            y(!1), null == m || m(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(u.Z, {
                channel: t,
                closePopout: n,
                isHovered: C,
                onMouseEnter: v,
                onMouseLeave: x,
            });
        },
        children: () =>
            (0, i.jsx)(d.d, {
                ref: b,
                isTrayButton: !0,
                themeable: n,
                "aria-label": f.intl.string(f.t.PEjaCx),
                iconComponent: O,
                onClick: I,
                onMouseEnter: _,
                onMouseLeave: P,
                isActive: C || h === p.D.GIFTING,
                color: C || h === p.D.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
