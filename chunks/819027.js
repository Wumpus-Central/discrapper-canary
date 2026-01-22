r.d(t, { A: () => p });
var n = r(627968);
r(64700);
var o = r(397927),
    u = r(688810),
    i = r(474397),
    l = r(780964),
    a = r(840065),
    c = r(652215),
    s = r(355097),
    b = r(985018);
function p(e) {
    let { analyticsLocations: t } = (0, u.Ay)();
    return (0, n.jsx)(o.Drp, {
        id: "voice-settings",
        label: b.intl.string(b.t.NiTd0e),
        action: () => {
            (0, a.openUserSettings)(l.X.VOICE_AND_VIDEO_PANEL, {
                section: c.nc_.VOICE,
                subsection: s.V5,
                analyticsLocations: t,
                appContext: e,
            }),
                (0, i.A)(e, e === c.BRT.POPOUT);
        },
        icon: o.Zes,
    });
}
