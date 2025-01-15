n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(230711),
    r = n(906732),
    s = n(981631),
    o = n(388032);
function c() {
    let { analyticsLocations: e } = (0, r.ZP)();
    return (0, i.jsx)(l.MenuItem, {
        id: 'voice-settings',
        label: o.intl.string(o.t.NiTd0d),
        action: () => a.Z.open(s.oAB.VOICE, null, { analyticsLocations: e }),
        icon: l.SettingsIcon
    });
}
