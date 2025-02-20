n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(230711),
    a = n(549879),
    o = n(906732),
    s = n(981631),
    c = n(388032);
function u(e) {
    let { analyticsLocations: t } = (0, o.ZP)();
    return (0, r.jsx)(l.sNh, {
        id: 'voice-settings',
        label: c.NW.string(c.t.NiTd0d),
        action: () => {
            i.Z.open(s.oAB.VOICE, null, {
                analyticsLocations: t,
                appContext: e
            }),
                (0, a.i)(e);
        },
        icon: l.ewm
    });
}
