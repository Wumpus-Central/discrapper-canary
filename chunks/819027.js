"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(477782),
    s = n(625903),
    a = n(688810),
    o = n(474397),
    l = n(780964),
    u = n(858897),
    c = n(652215),
    d = n(375708);
function _(e) {
    let { analyticsLocations: t } = (0, a.Ay)();
    return (0, i.jsx)(r.Dr, {
        id: "voice-settings",
        label: d.intl.string(d.t.NiTd0e),
        action: () => {
            (0, u.openUserSettings)(l.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
                (0, o.A)(e, e === c.BRT.POPOUT);
        },
        icon: s.Z,
        leadingAccessory: { type: "icon", icon: s.Z },
    });
}
