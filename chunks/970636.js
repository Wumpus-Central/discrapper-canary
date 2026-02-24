"use strict";
n.d(t, { A: () => h, r: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(446080),
    l = n(397927),
    u = n(267102),
    c = n(675991),
    d = n(709562),
    _ = n(652215),
    f = n(724718);
function p(e) {
    let t = (0, c.Q)(e),
        {
            enabled: n,
            cameraUnavailable: s,
            onChange: a,
            onCameraUnavailable: d,
            hasPermission: f,
            children: p,
            channelLimitReached: h = !1,
            join: m,
        } = e,
        E = (0, u.Us)(),
        g = s ? () => d() : () => a(!e.enabled, E),
        { Component: A, play: I, events: T } = (0, o.K)(m || n ? "disable" : "enable");
    i.useEffect(() => () => I(), [n, I]);
    let S = m ? l.npA : E === _.BRT.POPOUT ? (n ? l.npA : l.OCo) : A;
    return (0, r.jsx)(r.Fragment, {
        children: p({
            onClick: g,
            isActive: n,
            disabled: !n && (!f || h),
            iconComponent: S,
            iconColor: "currentColor",
            label: t,
            unavailable: s,
            onMouseEnter: m ? void 0 : T.onMouseEnter,
            onMouseLeave: m ? void 0 : T.onMouseLeave,
        }),
    });
}
function h(e) {
    let {
            enabled: t,
            join: n,
            channel: i,
            onChange: s,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            className: c,
            channelLimitReached: _,
            channelLimit: h,
            centerButton: m = !1,
            onPopoutClick: E,
            ...g
        } = e,
        A = m ? d.l : d.A,
        I = () => (n ? "join" : t ? "green" : "primaryDark"),
        T = (e) => (n ? "join" : e ? "green" : g.color);
    return (0, r.jsx)(p, {
        enabled: t,
        join: n,
        channel: i,
        onChange: s,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: _,
        channelLimit: h,
        children: (e) => {
            let { unavailable: t, onMouseEnter: i, onMouseLeave: s, isActive: o, ...l } = e;
            return (0, r.jsx)(A, {
                ...l,
                ...g,
                color: T(o),
                caretColor: I(),
                isActive: o,
                onMouseEnter: (e) => {
                    g.onMouseEnter?.(e), i?.();
                },
                onMouseLeave: (e) => {
                    g.onMouseLeave?.(e), s?.();
                },
                className: a()(c, { [f.t]: t }),
                onPopoutClick: E,
                isTrayButton: !n,
            });
        },
    });
}
