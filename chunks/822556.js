n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(906732),
    l = n(887413),
    a = n(313789),
    s = n(518596),
    c = n(981631),
    u = n(526761),
    d = n(388032);
function p(e) {
    let { analyticsLocations: t } = (0, o.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "voice-settings",
        label: d.intl.string(d.t.NiTd0e),
        action: () => {
            (0, s.openUserSettings)(a.n.VOICE_AND_VIDEO_PANEL, {
                section: c.oAB.VOICE,
                subsection: u.CO,
                analyticsLocations: t,
                appContext: e,
            }),
                (0, l.i)(e);
        },
        icon: i.ewm,
    });
}
