n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(695346),
    a = n(682578),
    o = n(838436),
    s = n(51331),
    l = n(726985),
    c = n(388032);
function u() {
    var e;
    let t = null == (e = (0, a.J)()) || e,
        n = i.DC.useSetting();
    return (0, r.jsx)(o.U, {
        setting: l.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, r.jsx)(s.ZP, {
            title: c.intl.string(c.t["L+yTsa"]),
            value: n,
            onChange: i.DC.updateSetting,
            disabled: !t,
            note: c.intl.string(c.t.hiM8pU),
        }),
    });
}
