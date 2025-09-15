n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(549879),
    o = n(906732),
    s = n(313789),
    l = n(518596),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { analyticsLocations: t } = (0, o.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "voice-settings",
        label: u.intl.string(u.t.NiTd0d),
        action: () => {
            (0, l.openUserSettings)(s.n.VOICE_AND_VIDEO_PANEL, {
                section: c.oAB.VOICE,
                analyticsLocations: t,
                appContext: e,
            }),
                (0, a.i)(e);
        },
        icon: i.ewm,
    });
}
