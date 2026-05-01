"use strict";
n.d(t, { a: () => h, default: () => p });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(150934),
    o = n(834730),
    l = n(817281),
    u = n(429913),
    c = n(174459),
    d = n(19575),
    _ = n(652215),
    f = n(375708);
let h = "Activity Encourages Hardware Acceleration";
function p(e) {
    let { applicationId: t, transitionState: n, onClose: p } = e,
        [E, m] = r.useState(!1),
        [g] = (0, u.A)([t]),
        A = g?.name ?? "This Activity";
    r.useEffect(() => {
        c.default.track(_.HAw.OPEN_MODAL, { type: h });
    }, []);
    let I = async () => {
            let e = "temporary";
            E && ((e = "permanent"), l.Ay.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                c.default.track(_.HAw.MODAL_DISMISSED, { type: h, dismiss_type: e }),
                await p();
        },
        T = async () => {
            c.default.track(_.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: t }),
                d.Ay.setEnableHardwareAcceleration(!0),
                await I();
        };
    return (0, i.jsx)(s.Modal, {
        size: "md",
        transitionState: n,
        onClose: I,
        "aria-label": f.intl.string(f.t.NQkK4l),
        title: f.intl.string(f.t.NQkK4l),
        actionBarInput: (0, i.jsx)(a.S, {
            checked: E,
            onChange: () => m(!E),
            label: f.intl.string(f.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["Ibf5/h"]), onClick: I },
            { variant: "primary", text: f.intl.string(f.t["/wlDqi"]), onClick: T },
        ],
        children: (0, i.jsx)(o.E, {
            variant: "text-md/normal",
            children: f.intl.format(f.t.B9eiaK, { applicationName: A }),
        }),
    });
}
