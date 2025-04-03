n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(695346),
    s = n(682578),
    a = n(838436),
    l = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = null == (e = (0, s.J)()) || e,
        n = i.DC.useSetting();
    return (0, r.jsx)(a.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(l.Z, {
            title: c.NW.string(c.t['L+yTsb']),
            value: n,
            onChange: i.DC.updateSetting,
            disabled: !t,
            note: c.NW.string(c.t.hiM8pa)
        })
    });
}
