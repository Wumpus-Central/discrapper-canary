n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(695346),
    s = n(682578),
    a = n(838436),
    l = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = null === (e = (0, s.J)()) || void 0 === e || e,
        n = r.DC.useSetting();
    return (0, i.jsx)(a.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(l.Z, {
            title: c.intl.string(c.t['L+yTsb']),
            value: n,
            onChange: r.DC.updateSetting,
            disabled: !t,
            note: c.intl.string(c.t.hiM8pa)
        })
    });
}
