n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(477782),
    s = n(625903),
    r = n(688810),
    a = n(474397),
    o = n(780964),
    u = n(766075),
    d = n(652215),
    c = n(375708);
function h(e) {
    let { analyticsLocations: t } = (0, r.Ay)();
    return (0, i.jsx)(l.Dr, {
        id: "voice-settings",
        label: c.intl.string(c.t.NiTd0e),
        action: () => {
            (0, u.openUserSettings)(o.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
                (0, a.A)(e, e === d.BRT.POPOUT);
        },
        icon: s.Z,
        leadingAccessory: { type: "icon", icon: s.Z },
    });
}
