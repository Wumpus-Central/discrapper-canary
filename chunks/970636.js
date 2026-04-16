"use strict";
n.d(t, { A: () => p, r: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(267102),
    u = n(675991),
    c = n(709562),
    d = n(985018),
    _ = n(181859);
function f(e) {
    let t = (0, u.Q)(e),
        {
            enabled: n,
            cameraUnavailable: i,
            onChange: s,
            onCameraUnavailable: a,
            hasPermission: o,
            children: c,
            channelLimitReached: d = !1,
        } = e,
        _ = (0, l.Us)(),
        f = i ? () => a() : () => s(!e.enabled, _);
    return (0, r.jsx)(r.Fragment, {
        children: c({ onClick: f, isActive: n, disabled: !n && (!o || d), label: t, unavailable: i }),
    });
}
function p(e) {
    let {
            enabled: t,
            join: n,
            channel: s,
            onChange: l,
            onCameraUnavailable: u,
            cameraUnavailable: p,
            hasPermission: h,
            className: m,
            channelLimitReached: E,
            channelLimit: g,
            centerButton: A = !1,
            onPopoutClick: I,
            ...T
        } = e,
        S = A ? c.l : c.A,
        y = () => (n ? "join" : t ? "green" : "primaryDark"),
        v = (e) => (n ? "join" : e ? "green" : T.color),
        N = i.useRef(null),
        C = n
            ? o.npA
            : (0, r.jsx)(o.gau, {
                  allowAnimationWhileUnfocused: !0,
                  defaultViewModelInstance: t ? "CamOn" : "CamOff",
                  className: o.d5l.refresh_sm,
                  dataBinding: { fill: "currentColor", on: t },
                  eventTargetRef: N,
              });
    return (0, r.jsx)(f, {
        enabled: t,
        join: n,
        channel: s,
        onChange: l,
        onCameraUnavailable: u,
        cameraUnavailable: p,
        hasPermission: h,
        channelLimitReached: E,
        channelLimit: g,
        children: (e) => {
            let { unavailable: t, isActive: i, ...s } = e;
            return (0, r.jsx)(S, {
                ...s,
                ...T,
                buttonRef: N,
                iconComponent: C,
                color: v(i),
                caretColor: y(),
                caretAriaLabel: d.intl.string(d.t.jO7lgy),
                isActive: i,
                onMouseEnter: (e) => {
                    T.onMouseEnter?.(e);
                },
                onMouseLeave: (e) => {
                    T.onMouseLeave?.(e);
                },
                className: a()(m, { [_.t]: t }),
                onPopoutClick: I,
                isTrayButton: !n,
            });
        },
    });
}
