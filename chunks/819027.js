n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var a = n(397927),
    l = n(688810),
    i = n(474397),
    u = n(780964),
    s = n(840065),
    o = n(652215),
    c = n(355097),
    d = n(985018);
function m(e) {
    let { analyticsLocations: t } = (0, l.Ay)();
    return (0, r.jsx)(a.Drp, {
        id: "voice-settings",
        label: d.intl.string(d.t.NiTd0e),
        action: () => {
            (0, s.openUserSettings)(u.X.VOICE_AND_VIDEO_PANEL, {
                section: o.nc_.VOICE,
                subsection: c.V5,
                analyticsLocations: t,
                appContext: e,
            }),
                (0, i.A)(e, e === o.BRT.POPOUT);
        },
        icon: a.Zes,
        leadingAccessory: { type: "icon", icon: a.Zes },
    });
}
