n.d(t, { Z: () => d });
var r = n(200651),
    i = n(695346),
    s = n(682578),
    a = n(838436),
    l = n(51331),
    o = n(726985),
    c = n(388032);
function d() {
    var e;
    let t = i.xM.useSetting(),
        n = null == (e = (0, s.J)()) || e;
    return (0, r.jsx)(a.U, {
        setting: o.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(l.Z, {
            value: !!n && t,
            onChange: i.xM.updateSetting,
            title: c.NW.string(c.t.XahVjo),
            note: c.NW.string(c.t.R9fXyc),
            disabled: !n
        })
    });
}
