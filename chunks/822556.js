n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    o = n(906732),
    l = n(887413),
    a = n(313789),
    s = n(518596),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { analyticsLocations: t } = (0, o.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "voice-settings",
        label: u.intl.string(u.t.NiTd0d),
        action: () => {
            (0, s.openUserSettings)(a.n.VOICE_AND_VIDEO_PANEL, {
                section: c.oAB.VOICE,
                analyticsLocations: t,
                appContext: e,
            }),
                (0, l.i)(e);
        },
        icon: i.ewm,
    });
}
