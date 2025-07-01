n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(230711),
    o = n(549879),
    a = n(906732),
    s = n(981631),
    c = n(388032);
function u(e) {
    let { analyticsLocations: t } = (0, a.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: 'voice-settings',
        label: c.intl.string(c.t.NiTd0d),
        action: () => {
            (l.Z.open(s.oAB.VOICE, null, {
                analyticsLocations: t,
                appContext: e
            }),
                (0, o.i)(e));
        },
        icon: i.ewm
    });
}
