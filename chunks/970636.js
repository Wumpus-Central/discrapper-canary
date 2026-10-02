n.d(t, { A: () => p, r: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(446080),
    o = n(456971),
    d = n(428689),
    c = n(943812),
    u = n(267102),
    _ = n(675991),
    E = n(204651),
    A = n(652215),
    h = n(375708),
    I = n(748292);
function f(e) {
    let t,
        n = (0, _.Q)(e),
        {
            enabled: a,
            cameraUnavailable: s,
            videoBlocked: E = !1,
            onChange: h,
            onCameraUnavailable: I,
            hasPermission: f,
            children: p,
            channelLimitReached: T = !1,
            join: m,
        } = e,
        g = (0, u.Us)(),
        S = s || E ? () => I() : () => h(!e.enabled, g),
        { Component: N, play: C, events: O } = (0, l.K)(m || a ? "disable" : "enable");
    return (
        r.useEffect(() => () => C(), [a, C]),
        (t = E ? o.b : m ? d.VideoIcon : g === A.BRT.POPOUT ? (a ? d.VideoIcon : c.O) : N),
        (0, i.jsx)(i.Fragment, {
            children: p({
                onClick: S,
                isActive: a,
                disabled: !a && (!f || T),
                iconComponent: t,
                iconColor: "currentColor",
                label: n,
                unavailable: s,
                onMouseEnter: m ? void 0 : O.onMouseEnter,
                onMouseLeave: m ? void 0 : O.onMouseLeave,
            }),
        })
    );
}
function p(e) {
    let {
            enabled: t,
            join: n,
            channel: r,
            onChange: a,
            onCameraUnavailable: l,
            cameraUnavailable: o,
            videoBlocked: d = !1,
            hasPermission: c,
            className: u,
            channelLimitReached: _,
            channelLimit: A,
            centerButton: p = !1,
            onPopoutClick: T,
            ...m
        } = e,
        g = p ? E.l : E.A;
    return (0, i.jsx)(f, {
        enabled: t,
        join: n,
        channel: r,
        onChange: a,
        onCameraUnavailable: l,
        cameraUnavailable: o,
        videoBlocked: d,
        hasPermission: c,
        channelLimitReached: _,
        channelLimit: A,
        children: (e) => {
            let { unavailable: r, onMouseEnter: a, onMouseLeave: l, isActive: o, ...c } = e;
            return (0, i.jsx)(g, {
                ...c,
                ...m,
                color: n ? "join" : o ? "green" : m.color,
                caretColor: n ? "join" : t ? "green" : "primaryDark",
                caretAriaLabel: h.intl.string(h.t.jO7lgy),
                isActive: o,
                onMouseEnter: (e) => {
                    (m.onMouseEnter?.(e), a?.());
                },
                onMouseLeave: (e) => {
                    (m.onMouseLeave?.(e), l?.());
                },
                className: s()(u, { [I.t]: r && !d }),
                onPopoutClick: T,
                isTrayButton: !n,
            });
        },
    });
}
