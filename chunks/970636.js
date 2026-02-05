"use strict";
n.d(t, { A: () => h, r: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
            cameraUnavailable: a,
            onChange: s,
            onCameraUnavailable: d,
            hasPermission: f,
            children: p,
            channelLimitReached: h = !1,
            join: m,
        } = e,
        g = (0, u.Us)(),
        E = a ? () => d() : () => s(!e.enabled, g),
        { Component: A, play: I, events: T } = (0, o.K)(m || n ? "disable" : "enable");
    i.useEffect(() => () => I(), [n, I]);
    let y = m ? l.npA : g === _.BRT.POPOUT ? (n ? l.npA : l.OCo) : A;
    return (0, r.jsx)(r.Fragment, {
        children: p({
            onClick: E,
            isActive: n,
            disabled: !n && (!f || h),
            iconComponent: y,
            iconColor: "currentColor",
            label: t,
            unavailable: a,
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
            onChange: a,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            className: c,
            channelLimitReached: _,
            channelLimit: h,
            centerButton: m = !1,
            onPopoutClick: g,
            ...E
        } = e,
        A = m ? d.l : d.A,
        I = () => (n ? "join" : t ? "green" : "primaryDark"),
        T = (e) => (n ? "join" : e ? "green" : E.color);
    return (0, r.jsx)(p, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: _,
        channelLimit: h,
        children: (e) => {
            let { unavailable: t, onMouseEnter: i, onMouseLeave: a, isActive: o, ...l } = e;
            return (0, r.jsx)(A, {
                ...l,
                ...E,
                color: T(o),
                caretColor: I(),
                isActive: o,
                onMouseEnter: (e) => {
                    E.onMouseEnter?.(e), i?.();
                },
                onMouseLeave: (e) => {
                    E.onMouseLeave?.(e), a?.();
                },
                className: s()(c, { [f.t]: t }),
                onPopoutClick: g,
                isTrayButton: !n,
            });
        },
    });
}
