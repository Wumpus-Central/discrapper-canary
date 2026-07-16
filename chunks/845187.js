"use strict";
n.d(t, { a: () => A, default: () => h });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    s = n(150934),
    l = n(834730),
    o = n(817281),
    d = n(429913),
    c = n(174459),
    u = n(19575),
    _ = n(652215),
    E = n(375708);
let A = "Activity Encourages Hardware Acceleration";
function h(e) {
    let { applicationId: t, transitionState: n, onClose: h } = e,
        [I, f] = r.useState(!1),
        [p] = (0, d.A)([t]),
        T = p?.name ?? "This Activity";
    async function m() {
        let e = "temporary";
        I && ((e = "permanent"), o.Ay.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
            c.default.track(_.HAw.MODAL_DISMISSED, { type: A, dismiss_type: e }),
            await h();
    }
    async function g() {
        c.default.track(_.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: t }),
            u.Ay.setEnableHardwareAcceleration(!0),
            await m();
    }
    return (
        r.useEffect(() => {
            c.default.track(_.HAw.OPEN_MODAL, { type: A });
        }, []),
        (0, i.jsx)(a.Modal, {
            size: "md",
            transitionState: n,
            onClose: m,
            "aria-label": E.intl.string(E.t.NQkK4l),
            title: E.intl.string(E.t.NQkK4l),
            actionBarInput: (0, i.jsx)(s.S, {
                checked: I,
                onChange: () => f(!I),
                label: E.intl.string(E.t["5E9SB9"]),
                labelType: "secondary",
            }),
            actions: [
                { variant: "secondary", text: E.intl.string(E.t["Ibf5/h"]), onClick: m },
                { variant: "primary", text: E.intl.string(E.t["/wlDqi"]), onClick: g },
            ],
            children: (0, i.jsx)(l.E, {
                variant: "text-md/normal",
                children: E.intl.format(E.t.B9eiaK, { applicationName: T }),
            }),
        })
    );
}
