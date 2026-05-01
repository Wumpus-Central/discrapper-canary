n.d(t, { a: () => A, default: () => I });
var i = n(627968),
    a = n(64700),
    r = n(189213),
    s = n(150934),
    l = n(834730),
    o = n(817281),
    d = n(429913),
    c = n(954571),
    _ = n(19575),
    E = n(652215),
    u = n(985018);
let A = "Activity Encourages Hardware Acceleration";
function I(e) {
    let { applicationId: t, transitionState: n, onClose: I } = e,
        [T, h] = a.useState(!1),
        [S] = (0, d.A)([t]),
        N = S?.name ?? "This Activity";
    a.useEffect(() => {
        c.default.track(E.HAw.OPEN_MODAL, { type: A });
    }, []);
    let f = async () => {
            let e = "temporary";
            T && ((e = "permanent"), o.Ay.updatedUnsyncedSettings({ disableActivityHardwareAccelerationPrompt: !0 })),
                c.default.track(E.HAw.MODAL_DISMISSED, { type: A, dismiss_type: e }),
                await I();
        },
        p = async () => {
            c.default.track(E.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, { application_id: t }),
                _.Ay.setEnableHardwareAcceleration(!0),
                await f();
        };
    return (0, i.jsx)(r.Modal, {
        size: "md",
        transitionState: n,
        onClose: f,
        "aria-label": u.intl.string(u.t.NQkK4l),
        title: u.intl.string(u.t.NQkK4l),
        actionBarInput: (0, i.jsx)(s.S, {
            checked: T,
            onChange: () => h(!T),
            label: u.intl.string(u.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            { variant: "secondary", text: u.intl.string(u.t["Ibf5/h"]), onClick: f },
            { variant: "primary", text: u.intl.string(u.t["/wlDqi"]), onClick: p },
        ],
        children: (0, i.jsx)(l.E, {
            variant: "text-md/normal",
            children: u.intl.format(u.t.B9eiaK, { applicationName: N }),
        }),
    });
}
