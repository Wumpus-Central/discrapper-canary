n.d(t, { Z: () => u });
var r = n(54381),
    i = n(695346),
    a = n(682578),
    o = n(838436),
    s = n(51331),
    l = n(726985),
    c = n(388032);
function u() {
    var e;
    let t = i.xM.useSetting(),
        n = null == (e = (0, a.J)()) || e;
    return (0, r.jsx)(o.U, {
        setting: l.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(s.ZP, {
            value: !!n && t,
            onChange: i.xM.updateSetting,
            title: c.intl.string(c.t.XahVjj),
            note: c.intl.string(c.t.R9fXyS),
            disabled: !n,
        }),
    });
}
