n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(695346),
    s = n(682578),
    a = n(838436),
    l = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = r.xM.useSetting(),
        n = null === (e = (0, s.J)()) || void 0 === e || e;
    return (0, i.jsx)(a.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, i.jsx)(l.Z, {
            value: !!n && t,
            onChange: r.xM.updateSetting,
            title: c.intl.string(c.t.XahVjo),
            note: c.intl.string(c.t.R9fXyc),
            disabled: !n
        })
    });
}
