n.d(t, { h: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(709562),
    a = n(985018);
function r(e) {
    let t,
        n,
        {
            hasPermission: r,
            streamActive: o,
            isSelfStream: d,
            centerButton: c,
            renderNUXHighlight: u,
            buttonRef: h,
            ...A
        } = e,
        _ = c ? s.l : s.A;
    return (
        (n = o
            ? d
                ? a.intl.string(a.t.S5anIc)
                : a.intl.string(a.t.q3O3J8)
            : r
              ? a.intl.string(a.t.fjBNo1)
              : a.intl.string(a.t.uQn9B8)),
        (0, i.jsx)(_, {
            buttonRef: h,
            isTrayButton: !0,
            label: n,
            disabled: !r,
            iconComponent: (0, i.jsx)(l.gxO, {
                autoPause: !0,
                allowAnimationWhileUnfocused: !0,
                eventTargetRef: h,
                className: l.d5l.refresh_sm,
                dataBinding: { fill: "currentColor", on: !o },
                defaultViewModelInstance: o ? "Off" : "On",
            }),
            isActive: o,
            color: (u ? (t = "premiumGradient") : o && (t = "green"), t),
            ...A,
        })
    );
}
