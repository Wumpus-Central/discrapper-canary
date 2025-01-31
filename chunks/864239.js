n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var s = n(695346),
    r = n(682578),
    l = n(838436),
    a = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = null === (e = (0, r.J)()) || void 0 === e || e,
        n = s.DC.useSetting();
    return (0, i.jsx)(l.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(a.Z, {
            title: c.intl.string(c.t['L+yTsb']),
            value: n,
            onChange: s.DC.updateSetting,
            disabled: !t,
            note: c.intl.string(c.t.hiM8pa)
        })
    });
}
