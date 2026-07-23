"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(477782),
    a = n(625903),
    s = n(688810),
    l = n(474397),
    o = n(780964),
    d = n(766075),
    c = n(652215),
    u = n(375708);
function _(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return (0, i.jsx)(r.Dr, {
        id: "voice-settings",
        label: u.intl.string(u.t.NiTd0e),
        action: () => {
            (0, d.openUserSettings)(o.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
                (0, l.A)(e, e === c.BRT.POPOUT);
        },
        icon: a.Z,
        leadingAccessory: { type: "icon", icon: a.Z },
    });
}
