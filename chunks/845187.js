n.d(t, {
    a: () => f,
    default: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(397927),
    s = n(817281),
    o = n(429913),
    c = n(954571),
    u = n(837921),
    d = n(652215),
    p = n(985018);
let f = "Activity Encourages Hardware Acceleration";

function h(e) {
    var t;
    let { applicationId: n, transitionState: h, onClose: A } = e,
        [g, m] = i.useState(!1),
        [b] = (0, o.A)([n]),
        _ = null != (t = null == b ? void 0 : b.name) ? t : "This Activity";
    i.useEffect(() => {
        c.default.track(d.HAw.OPEN_MODAL, {
            type: f,
        });
    }, []);
    let E = async () => {
            let e = "temporary";
            g &&
                ((e = "permanent"),
                s.Ay.updatedUnsyncedSettings({
                    disableActivityHardwareAccelerationPrompt: !0,
                })),
                c.default.track(d.HAw.MODAL_DISMISSED, {
                    type: f,
                    dismiss_type: e,
                }),
                await A();
        },
        O = async () => {
            c.default.track(d.HAw.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
                application_id: n,
            }),
                u.Ay.setEnableHardwareAcceleration(!0),
                await E();
        };
    return (0, r.jsx)(l.Modal, {
        size: "md",
        transitionState: h,
        onClose: E,
        "aria-label": p.intl.string(p.t.NQkK4l),
        title: p.intl.string(p.t.NQkK4l),
        actionBarInput: (0, r.jsx)(a.Checkbox, {
            checked: g,
            onChange: () => m(!g),
            label: p.intl.string(p.t["5E9SB9"]),
            labelType: "secondary",
        }),
        actions: [
            {
                variant: "secondary",
                text: p.intl.string(p.t["Ibf5/h"]),
                onClick: E,
            },
            {
                variant: "primary",
                text: p.intl.string(p.t["/wlDqi"]),
                onClick: O,
            },
        ],
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: p.intl.format(p.t.B9eiaK, {
                applicationName: _,
            }),
        }),
    });
}
