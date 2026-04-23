n.d(t, { a: () => h, default: () => E });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    l = n(150934),
    s = n(834730),
    o = n(817281),
    d = n(429913),
    u = n(954571),
    c = n(19575),
    _ = n(652215),
    A = n(985018);
let h = "Activity Encourages Hardware Acceleration";
function E(e) {
    let { applicationId: t, transitionState: n, onClose: E } = e,
        [p, m] = r.useState(!1),
        [I] = (0, d.A)([t]),
        g = I?.name ?? "This Activity";
    r.useEffect(() => {
        u.default.track(_.HAw.OPEN_MODAL, { type: h });
    }, []);
    let C = async () => {
            let e = "temporary";
            p && ((e = "permanent"), o.Ay.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                u.default.track(_.HAw.MODAL_DISMISSED, { type: h, dismiss_type: e }),
                await E();
        },
        T = async () => {
            u.default.track(_.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: t }),
                c.Ay.setEnableHardwareAcceleration(!0),
                await C();
        };
    return (0, i.jsx)(a.Modal, {
        size: "md",
        transitionState: n,
        onClose: C,
        "aria-label": A.intl.string(A.t.NQkK4l),
        title: A.intl.string(A.t.NQkK4l),
        actionBarInput: (0, i.jsx)(l.S, {
            checked: p,
            onChange: () => m(!p),
            label: A.intl.string(A.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: A.intl.string(A.t["Ibf5/h"]), onClick: C },
            { variant: "primary", text: A.intl.string(A.t["/wlDqi"]), onClick: T },
        ],
        children: (0, i.jsx)(s.E, {
            variant: "text-md/normal",
            children: A.intl.format(A.t.B9eiaK, { applicationName: g }),
        }),
    });
}
