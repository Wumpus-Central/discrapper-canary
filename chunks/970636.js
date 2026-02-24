"use strict";
n.d(t, { A: () => f, r: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(267102),
    u = n(675991),
    c = n(709562),
    d = n(724718);
function _(e) {
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
function f(e) {
    let {
            enabled: t,
            join: n,
            channel: s,
            onChange: l,
            onCameraUnavailable: u,
            cameraUnavailable: f,
            hasPermission: p,
            className: h,
            channelLimitReached: m,
            channelLimit: E,
            centerButton: g = !1,
            onPopoutClick: A,
            ...I
        } = e,
        T = g ? c.l : c.A,
        S = () => (n ? "join" : t ? "green" : "primaryDark"),
        y = (e) => (n ? "join" : e ? "green" : I.color),
        v = i.useRef(null),
        N = n
            ? o.npA
            : (0, r.jsx)(o.gau, {
                  allowAnimationWhileUnfocused: !0,
                  defaultViewModelInstance: t ? "CamOn" : "CamOff",
                  className: o.d5l.refresh_sm,
                  dataBinding: { fill: "currentColor", on: t },
                  eventTargetRef: v,
              });
    return (0, r.jsx)(_, {
        enabled: t,
        join: n,
        channel: s,
        onChange: l,
        onCameraUnavailable: u,
        cameraUnavailable: f,
        hasPermission: p,
        channelLimitReached: m,
        channelLimit: E,
        children: (e) => {
            let { unavailable: t, isActive: i, ...s } = e;
            return (0, r.jsx)(T, {
                ...s,
                ...I,
                ref: v,
                iconComponent: N,
                color: y(i),
                caretColor: S(),
                isActive: i,
                onMouseEnter: (e) => {
                    I.onMouseEnter?.(e);
                },
                onMouseLeave: (e) => {
                    I.onMouseLeave?.(e);
                },
                className: a()(h, { [d.t]: t }),
                onPopoutClick: A,
                isTrayButton: !n,
            });
        },
    });
}
