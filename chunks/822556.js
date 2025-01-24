n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(230711),
    a = n(906732),
    s = n(981631),
    o = n(388032);
function c() {
    let { analyticsLocations: e } = (0, a.ZP)();
    return (0, i.jsx)(l.MenuItem, {
        id: 'voice-settings',
        label: o.intl.string(o.t.NiTd0d),
        action: () => r.Z.open(s.oAB.VOICE, null, { analyticsLocations: e }),
        icon: l.SettingsIcon
    });
}
