n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(397927),
    l = n(688810),
    i = n(474397),
    s = n(780964),
    u = n(840065),
    o = n(652215),
    c = n(985018);
function d(e) {
    let { analyticsLocations: t } = (0, l.Ay)();
    return (0, r.jsx)(a.Drp, {
        id: "voice-settings",
        label: c.intl.string(c.t.NiTd0e),
        action: () => {
            (0, u.openUserSettings)(s.X.VOICE_CATEGORY, { analyticsLocations: t, appContext: e }),
                (0, i.A)(e, e === o.BRT.POPOUT);
        },
        icon: a.Zes,
        leadingAccessory: { type: "icon", icon: a.Zes },
    });
}
