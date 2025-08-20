n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(230711),
    o = n(549879),
    s = n(906732),
    l = n(981631),
    c = n(388032);
function u(e) {
    let { analyticsLocations: t } = (0, s.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: "voice-settings",
        label: c.intl.string(c.t.NiTd0d),
        action: () => {
            a.Z.open(l.oAB.VOICE, null, {
                analyticsLocations: t,
                appContext: e,
            }),
                (0, o.i)(e);
        },
        icon: i.ewm,
    });
}
