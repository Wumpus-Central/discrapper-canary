"use strict";
n.d(t, { h: () => a });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(709562),
    r = n(985018);
function a(e) {
    let t,
        n,
        {
            hasPermission: a,
            streamActive: o,
            isSelfStream: c,
            centerButton: d,
            renderNUXHighlight: u,
            buttonRef: h,
            ...A
        } = e,
        p = d ? l.l : l.A;
    return (
        (n = o
            ? c
                ? r.intl.string(r.t.S5anIc)
                : r.intl.string(r.t.q3O3J8)
            : a
              ? r.intl.string(r.t.fjBNo1)
              : r.intl.string(r.t.uQn9B8)),
        (0, i.jsx)(p, {
            buttonRef: h,
            isTrayButton: !0,
            label: n,
            disabled: !a,
            iconComponent: (0, i.jsx)(s.gxO, {
                allowAnimationWhileUnfocused: !0,
                eventTargetRef: h,
                className: s.d5l.refresh_sm,
                dataBinding: { fill: "currentColor", on: !o },
                defaultViewModelInstance: o ? "Off" : "On",
            }),
            isActive: o,
            color: (u ? (t = "premiumGradient") : o && (t = "green"), t),
            ...A,
        })
    );
}
