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
    let { themeable: t, whichPopoutIsOpen: n, setWhichPopoutIsOpen: f } = e,
        { parentAnalyticsLocation: m } = (0, o.ZP)(),
        g = r.useRef(null),
        { isHovered: b, setIsHovered: y, onMouseEnter: C, onMouseLeave: v } = (0, c.Z)(200, 300),
        {
            Component: _,
            play: x,
            events: { onMouseEnter: j, onMouseLeave: O },
        } = (0, l.$)(),
        E = r.useCallback(
            (e) => {
                "focus" !== e.type && (C(), j());
            },
            [C, j],
        ),
        S = r.useCallback(() => {
            null == n && (v(), O());
        }, [v, O, n]),
        P = r.useCallback(() => {
            (0, s.v)(m, s.d.GIFTING),
                n === p.D.GIFTING
                    ? (null == f || f(void 0), v())
                    : (null != n ? (x(), C()) : x(), null == f || f(p.D.GIFTING));
        }, [C, v, m, x, f, n]);
    return (0, i.jsx)(a.y, {
        targetElementRef: g,
        shouldShow: (b && (n === p.D.GIFTING || null == n)) || n === p.D.GIFTING,
        animation: a.y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            y(!1), null == f || f(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(u.Z, {
                closePopout: t,
                isHovered: b,
                onMouseEnter: C,
                onMouseLeave: v,
            });
        },
        children: () =>
            (0, i.jsx)(d.d, {
                ref: g,
                isTrayButton: !0,
                themeable: t,
                "aria-label": h.intl.string(h.t.PEjaCx),
                iconComponent: _,
                onClick: P,
                onMouseEnter: E,
                onMouseLeave: S,
                isActive: b || n === p.D.GIFTING,
                color: b || n === p.D.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
