n.d(t, { a: () => _, default: () => E });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    l = n(150934),
    s = n(834730),
    o = n(817281),
    d = n(429913),
    u = n(954571),
    c = n(837921),
    A = n(652215),
    h = n(985018);
let _ = "Activity Encourages Hardware Acceleration";
function E(e) {
    let { applicationId: t, transitionState: n, onClose: E } = e,
        [p, m] = r.useState(!1),
        [g] = (0, d.A)([t]),
        I = g?.name ?? "This Activity";
    r.useEffect(() => {
        u.default.track(A.HAw.OPEN_MODAL, { type: _ });
    }, []);
    let C = async () => {
            let e = "temporary";
            p && ((e = "permanent"), o.Ay.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                u.default.track(A.HAw.MODAL_DISMISSED, { type: _, dismiss_type: e }),
                await E();
        },
        f = async () => {
            u.default.track(A.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: t }),
                c.Ay.setEnableHardwareAcceleration(!0),
                await C();
        };
    return (0, i.jsx)(a.Modal, {
        size: "md",
        transitionState: n,
        onClose: C,
        "aria-label": h.intl.string(h.t.NQkK4l),
        title: h.intl.string(h.t.NQkK4l),
        actionBarInput: (0, i.jsx)(l.S, {
            checked: p,
            onChange: () => m(!p),
            label: h.intl.string(h.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: h.intl.string(h.t["Ibf5/h"]), onClick: C },
            { variant: "primary", text: h.intl.string(h.t["/wlDqi"]), onClick: f },
        ],
        children: (0, i.jsx)(s.E, {
            variant: "text-md/normal",
            children: h.intl.format(h.t.B9eiaK, { applicationName: I }),
        }),
    });
}
