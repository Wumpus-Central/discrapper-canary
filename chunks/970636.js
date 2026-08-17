"use strict";
n.d(t, { A: () => f, r: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(446080),
    o = n(428689),
    d = n(943812),
    c = n(267102),
    u = n(675991),
    _ = n(204651),
    E = n(652215),
    A = n(375708),
    h = n(610443);
function I(e) {
    let t = (0, u.Q)(e),
        {
            enabled: n,
            cameraUnavailable: a,
            onChange: s,
            onCameraUnavailable: _,
            hasPermission: A,
            children: h,
            channelLimitReached: I = !1,
            join: f,
        } = e,
        p = (0, c.Us)(),
        T = a ? () => _() : () => s(!e.enabled, p),
        { Component: m, play: g, events: S } = (0, l.K)(f || n ? "disable" : "enable");
    r.useEffect(() => () => g(), [n, g]);
    let N = f ? o.VideoIcon : p === E.BRT.POPOUT ? (n ? o.VideoIcon : d.O) : m;
    return (0, i.jsx)(i.Fragment, {
        children: h({
            onClick: T,
            isActive: n,
            disabled: !n && (!A || I),
            iconComponent: N,
            iconColor: "currentColor",
            label: t,
            unavailable: a,
            onMouseEnter: f ? void 0 : S.onMouseEnter,
            onMouseLeave: f ? void 0 : S.onMouseLeave,
        }),
    });
}
function f(e) {
    let {
            enabled: t,
            join: n,
            channel: r,
            onChange: a,
            onCameraUnavailable: l,
            cameraUnavailable: o,
            hasPermission: d,
            className: c,
            channelLimitReached: u,
            channelLimit: E,
            centerButton: f = !1,
            onPopoutClick: p,
            ...T
        } = e,
        m = f ? _.l : _.A;
    return (0, i.jsx)(I, {
        enabled: t,
        join: n,
        channel: r,
        onChange: a,
        onCameraUnavailable: l,
        cameraUnavailable: o,
        hasPermission: d,
        channelLimitReached: u,
        channelLimit: E,
        children: (e) => {
            let { unavailable: r, onMouseEnter: a, onMouseLeave: l, isActive: o, ...d } = e;
            return (0, i.jsx)(m, {
                ...d,
                ...T,
                color: n ? "join" : o ? "green" : T.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: A.intl.string(A.t.jO7lgy),
                isActive: o,
                onMouseEnter: (e) => {
                    T.onMouseEnter?.(e), a?.();
                },
                onMouseLeave: (e) => {
                    T.onMouseLeave?.(e), l?.();
                },
                className: s()(c, { [h.t]: r }),
                onPopoutClick: p,
                isTrayButton: !n,
            });
        },
    });
}
