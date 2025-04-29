n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(695346),
    s = n(682578),
    l = n(838436),
    a = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = null == (e = (0, s.J)()) || e,
        n = r.DC.useSetting();
    return (0, i.jsx)(l.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(a.Z, {
            title: c.intl.string(c.t['L+yTsb']),
            value: n,
            onChange: r.DC.updateSetting,
            disabled: !t,
            note: c.intl.string(c.t.hiM8pa)
        })
    });
}
