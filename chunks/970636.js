n.d(t, { A: () => h, r: () => T });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(446080),
    o = n(428689),
    d = n(943812),
    c = n(267102),
    _ = n(675991),
    E = n(709562),
    u = n(652215),
    A = n(985018),
    I = n(181859);
function T(e) {
    let t = (0, _.Q)(e),
        {
            enabled: n,
            cameraUnavailable: r,
            onChange: s,
            onCameraUnavailable: E,
            hasPermission: A,
            children: I,
            channelLimitReached: T = !1,
            join: h,
        } = e,
        S = (0, c.Us)(),
        N = r ? () => E() : () => s(!e.enabled, S),
        { Component: f, play: p, events: m } = (0, l.K)(h || n ? "disable" : "enable");
    a.useEffect(() => () => p(), [n, p]);
    let O = h ? o.n : S === u.BRT.POPOUT ? (n ? o.n : d.O) : f;
    return (0, i.jsx)(i.Fragment, {
        children: I({
            onClick: N,
            isActive: n,
            disabled: !n && (!A || T),
            iconComponent: O,
            iconColor: "currentColor",
            label: t,
            unavailable: r,
            onMouseEnter: h ? void 0 : m.onMouseEnter,
            onMouseLeave: h ? void 0 : m.onMouseLeave,
        }),
    });
}
function h(e) {
    let {
            enabled: t,
            join: n,
            channel: a,
            onChange: r,
            onCameraUnavailable: l,
            cameraUnavailable: o,
            hasPermission: d,
            className: c,
            channelLimitReached: _,
            channelLimit: u,
            centerButton: h = !1,
            onPopoutClick: S,
            ...N
        } = e,
        f = h ? E.l : E.A;
    return (0, i.jsx)(T, {
        enabled: t,
        join: n,
        channel: a,
        onChange: r,
        onCameraUnavailable: l,
        cameraUnavailable: o,
        hasPermission: d,
        channelLimitReached: _,
        channelLimit: u,
        children: (e) => {
            let { unavailable: a, onMouseEnter: r, onMouseLeave: l, isActive: o, ...d } = e;
            return (0, i.jsx)(f, {
                ...d,
                ...N,
                color: n ? "join" : o ? "green" : N.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: A.intl.string(A.t.jO7lgy),
                isActive: o,
                onMouseEnter: (e) => {
                    N.onMouseEnter?.(e), r?.();
                },
                onMouseLeave: (e) => {
                    N.onMouseLeave?.(e), l?.();
                },
                className: s()(c, { [I.t]: a }),
                onPopoutClick: S,
                isTrayButton: !n,
            });
        },
    });
}
