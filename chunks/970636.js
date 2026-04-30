"use strict";
n.d(t, { A: () => m, r: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(446080),
    l = n(428689),
    u = n(943812),
    c = n(267102),
    d = n(675991),
    _ = n(204651),
    f = n(652215),
    h = n(375708),
    p = n(181859);
function E(e) {
    let t = (0, d.Q)(e),
        {
            enabled: n,
            cameraUnavailable: s,
            onChange: a,
            onCameraUnavailable: _,
            hasPermission: h,
            children: p,
            channelLimitReached: E = !1,
            join: m,
        } = e,
        g = (0, c.Us)(),
        A = s ? () => _() : () => a(!e.enabled, g),
        { Component: I, play: T, events: S } = (0, o.K)(m || n ? "disable" : "enable");
    r.useEffect(() => () => T(), [n, T]);
    let N = m ? l.n : g === f.BRT.POPOUT ? (n ? l.n : u.O) : I;
    return (0, i.jsx)(i.Fragment, {
        children: p({
            onClick: A,
            isActive: n,
            disabled: !n && (!h || E),
            iconComponent: N,
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
            channel: r,
            onChange: s,
            onCameraUnavailable: o,
            cameraUnavailable: l,
            hasPermission: u,
            className: c,
            channelLimitReached: d,
            channelLimit: f,
            centerButton: m = !1,
            onPopoutClick: g,
            ...A
        } = e,
        I = m ? _.l : _.A;
    return (0, i.jsx)(E, {
        enabled: t,
        join: n,
        channel: r,
        onChange: s,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: d,
        channelLimit: f,
        children: (e) => {
            let { unavailable: r, onMouseEnter: s, onMouseLeave: o, isActive: l, ...u } = e;
            return (0, i.jsx)(I, {
                ...u,
                ...A,
                color: n ? "join" : l ? "green" : A.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: h.intl.string(h.t.jO7lgy),
                isActive: l,
                onMouseEnter: (e) => {
                    A.onMouseEnter?.(e), s?.();
                },
                onMouseLeave: (e) => {
                    A.onMouseLeave?.(e), o?.();
                },
                className: a()(c, { [p.t]: r }),
                onPopoutClick: g,
                isTrayButton: !n,
            });
        },
    });
}
