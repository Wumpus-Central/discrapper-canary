n.d(t, { A: () => h });
var i = n(477900);
n(582128);
var l = n(477782),
    r = n(625903),
    s = n(688810),
    a = n(474397),
    o = n(780964),
    u = n(766075),
    d = n(652215),
    c = n(375708);
function h(e) {
    let { analyticsLocations: t } = (0, s.Ay)();
    return (0, i.jsx)(l.Dr, {
        id: "voice-settings",
        label: c.intl.string(c.t.NiTd0e),
        action: () => {
            (0, u.openUserSettings)(o.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
                (0, a.A)(e, e === d.BRT.POPOUT);
        },
        icon: r.SettingsIcon,
        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
    });
}
