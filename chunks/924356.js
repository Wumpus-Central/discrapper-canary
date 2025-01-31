n.d(t, { Z: () => d });
var i = n(200651),
    s = n(695346),
    r = n(682578),
    l = n(838436),
    a = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = s.xM.useSetting(),
        n = null === (e = (0, r.J)()) || void 0 === e || e;
    return (0, i.jsx)(l.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, i.jsx)(a.Z, {
            value: !!n && t,
            onChange: s.xM.updateSetting,
            title: c.intl.string(c.t.XahVjo),
            note: c.intl.string(c.t.R9fXyc),
            disabled: !n
        })
    });
}
