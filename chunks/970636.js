n.d(t, { A: () => S, r: () => T });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(446080),
    l = n(428689),
    o = n(943812),
    E = n(267102),
    d = n(675991),
    c = n(709562),
    u = n(652215),
    I = n(985018),
    A = n(181859);
function T(e) {
    let t = (0, d.Q)(e),
        {
            enabled: n,
            cameraUnavailable: a,
            onChange: s,
            onCameraUnavailable: c,
            hasPermission: I,
            children: A,
            channelLimitReached: T = !1,
            join: S,
        } = e,
        N = (0, E.Us)(),
        O = a ? () => c() : () => s(!e.enabled, N),
        { Component: R, play: f, events: C } = (0, _.K)(S || n ? "disable" : "enable");
    r.useEffect(() => () => f(), [n, f]);
    let p = S ? l.n : N === u.BRT.POPOUT ? (n ? l.n : o.O) : R;
    return (0, i.jsx)(i.Fragment, {
        children: A({
            onClick: O,
            isActive: n,
            disabled: !n && (!I || T),
            iconComponent: p,
            iconColor: "currentColor",
            label: t,
            unavailable: a,
            onMouseEnter: S ? void 0 : C.onMouseEnter,
            onMouseLeave: S ? void 0 : C.onMouseLeave,
        }),
    });
}
function S(e) {
    let {
            enabled: t,
            join: n,
            channel: r,
            onChange: a,
            onCameraUnavailable: _,
            cameraUnavailable: l,
            hasPermission: o,
            className: E,
            channelLimitReached: d,
            channelLimit: u,
            centerButton: S = !1,
            onPopoutClick: N,
            ...O
        } = e,
        R = S ? c.l : c.A;
    return (0, i.jsx)(T, {
        enabled: t,
        join: n,
        channel: r,
        onChange: a,
        onCameraUnavailable: _,
        cameraUnavailable: l,
        hasPermission: o,
        channelLimitReached: d,
        channelLimit: u,
        children: (e) => {
            let { unavailable: r, onMouseEnter: a, onMouseLeave: _, isActive: l, ...o } = e;
            return (0, i.jsx)(R, {
                ...o,
                ...O,
                color: n ? "join" : l ? "green" : O.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: I.intl.string(I.t.jO7lgy),
                isActive: l,
                onMouseEnter: (e) => {
                    O.onMouseEnter?.(e), a?.();
                },
                onMouseLeave: (e) => {
                    O.onMouseLeave?.(e), _?.();
                },
                className: s()(E, { [A.t]: r }),
                onPopoutClick: N,
                isTrayButton: !n,
            });
        },
    });
}
