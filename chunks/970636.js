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
    E = n(693409),
    A = n(652215),
    f = n(792996),
    h = n(748292);
function I(e) {
    let t,
        n = (0, _.Q)(e),
        {
            enabled: a,
            cameraUnavailable: s,
            videoBlocked: E = !1,
            onChange: f,
            onCameraUnavailable: h,
            hasPermission: I,
            children: p,
            channelLimitReached: m = !1,
            join: T,
        } = e,
        g = (0, u.Us)(),
        S = s || E ? () => h() : () => f(!e.enabled, g),
        { Component: N, play: C, events: O } = (0, l.K)(T || a ? "disable" : "enable");
    return (
        r.useEffect(() => () => C(), [a, C]),
        (t = E ? o.VideoDenyIcon : T ? d.VideoIcon : g === A.BRT.POPOUT ? (a ? d.VideoIcon : c.VideoSlashIcon) : N),
        (0, i.jsx)(i.Fragment, {
            children: p({
                onClick: S,
                isActive: a,
                disabled: !a && (!I || m),
                iconComponent: t,
                iconColor: "currentColor",
                label: n,
                unavailable: s,
                onMouseEnter: T ? void 0 : O.onMouseEnter,
                onMouseLeave: T ? void 0 : O.onMouseLeave,
            }),
        })
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
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
                    onPopoutClick: m,
                    ...T
                } = e,
                g = p ? E.l : E.A;
            return (0, i.jsx)(I, {
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
                        ...T,
                        color: n ? "join" : o ? "green" : T.color,
                        caretColor: n ? "join" : t ? "green" : "primaryDark",
                        caretAriaLabel: f.intl.string(f.t.jO7lgy),
                        isActive: o,
                        onMouseEnter: (e) => {
                            (T.onMouseEnter?.(e), a?.());
                        },
                        onMouseLeave: (e) => {
                            (T.onMouseLeave?.(e), l?.());
                        },
                        className: s()(u, { [h.t]: r && !d }),
                        onPopoutClick: m,
                        isTrayButton: !n,
                    });
                },
            });
        },
        r: I,
    },
);
