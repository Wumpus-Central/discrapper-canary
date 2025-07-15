n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(230711),
    a = n(549879),
    o = n(906732),
    s = n(981631),
    c = n(388032);
function u(e) {
    let { analyticsLocations: t } = (0, o.ZP)();
    return (0, r.jsx)(i.sNh, {
        id: 'voice-settings',
        label: c.intl.string(c.t.NiTd0d),
        action: () => {
            (l.Z.open(s.oAB.VOICE, null, {
                analyticsLocations: t,
                appContext: e
            }),
                (0, a.i)(e));
        },
        icon: i.ewm
    });
}
