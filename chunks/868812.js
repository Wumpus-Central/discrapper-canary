n.d(t, { Z: () => f });
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
    h = n(388032);
function f(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: f, setWhichPopoutIsOpen: m } = e,
        { parentAnalyticsLocation: g } = (0, o.ZP)(),
        b = r.useRef(null),
        { isHovered: y, setIsHovered: C, onMouseEnter: v, onMouseLeave: _ } = (0, c.Z)(200, 300),
        {
            Component: x,
            play: j,
            events: { onMouseEnter: O, onMouseLeave: E },
        } = (0, l.$)(),
        S = r.useCallback(
            (e) => {
                "focus" !== e.type && (v(), O());
            },
            [v, O],
        ),
        P = r.useCallback(() => {
            null == f && (_(), E());
        }, [_, E, f]),
        I = r.useCallback(() => {
            (0, s.v)(g, s.d.GIFTING),
                f === p.D.GIFTING
                    ? (null == m || m(void 0), _())
                    : (null != f ? (j(), v()) : j(), null == m || m(p.D.GIFTING));
        }, [v, _, g, j, m, f]);
    return (0, i.jsx)(a.y, {
        targetElementRef: b,
        shouldShow: (y && (f === p.D.GIFTING || null == f)) || f === p.D.GIFTING,
        animation: a.y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            C(!1), null == m || m(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(u.Z, {
                channel: t,
                closePopout: n,
                isHovered: y,
                onMouseEnter: v,
                onMouseLeave: _,
            });
        },
        children: () =>
            (0, i.jsx)(d.d, {
                ref: b,
                isTrayButton: !0,
                themeable: n,
                "aria-label": h.intl.string(h.t.PEjaCx),
                iconComponent: x,
                onClick: I,
                onMouseEnter: S,
                onMouseLeave: P,
                isActive: y || f === p.D.GIFTING,
                color: y || f === p.D.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
