"use strict";
n.d(t, { A: () => m, r: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(446080),
    l = n(428689),
    u = n(943812),
    d = n(267102),
    c = n(675991),
    _ = n(709562),
    f = n(652215),
    E = n(985018),
    h = n(181859);
function p(e) {
    let t = (0, c.Q)(e),
        {
            enabled: n,
            cameraUnavailable: s,
            onChange: a,
            onCameraUnavailable: _,
            hasPermission: E,
            children: h,
            channelLimitReached: p = !1,
            join: m,
        } = e,
        g = (0, d.Us)(),
        A = s ? () => _() : () => a(!e.enabled, g),
        { Component: I, play: T, events: S } = (0, o.K)(m || n ? "disable" : "enable");
    i.useEffect(() => () => T(), [n, T]);
    let y = m ? l.n : g === f.BRT.POPOUT ? (n ? l.n : u.O) : I;
    return (0, r.jsx)(r.Fragment, {
        children: h({
            onClick: A,
            isActive: n,
            disabled: !n && (!E || p),
            iconComponent: y,
            iconColor: "currentColor",
            label: t,
            unavailable: s,
            onMouseEnter: m ? void 0 : S.onMouseEnter,
            onMouseLeave: m ? void 0 : S.onMouseLeave,
        }),
    });
}
function m(e) {
    let {
            enabled: t,
            join: n,
            channel: i,
            onChange: s,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            className: d,
            channelLimitReached: c,
            channelLimit: f,
            centerButton: m = !1,
            onPopoutClick: g,
            ...A
        } = e,
        I = m ? _.l : _.A;
    return (0, r.jsx)(p, {
        enabled: t,
        join: n,
        channel: i,
        onChange: s,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: c,
        channelLimit: f,
        children: (e) => {
            let { unavailable: i, onMouseEnter: s, onMouseLeave: o, isActive: l, ...u } = e;
            return (0, r.jsx)(I, {
                ...u,
                ...A,
                color: n ? "join" : l ? "green" : A.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: E.intl.string(E.t.jO7lgy),
                isActive: l,
                onMouseEnter: (e) => {
                    A.onMouseEnter?.(e), s?.();
                },
                onMouseLeave: (e) => {
                    A.onMouseLeave?.(e), o?.();
                },
                className: a()(d, { [h.t]: i }),
                onPopoutClick: g,
                isTrayButton: !n,
            });
        },
    });
}
