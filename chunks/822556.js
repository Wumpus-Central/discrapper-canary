n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(230711),
    a = n(549879),
    s = n(906732),
    o = n(981631),
    u = n(388032);
function c(e) {
    let { analyticsLocations: t } = (0, s.ZP)();
    return (0, l.jsx)(i.sNh, {
        id: 'voice-settings',
        label: u.intl.string(u.t.NiTd0d),
        action: () => {
            r.Z.open(o.oAB.VOICE, null, {
                analyticsLocations: t,
                appContext: e
            }),
                (0, a.i)(e);
        },
        icon: i.ewm
    });
}
