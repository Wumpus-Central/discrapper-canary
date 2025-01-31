n.d(t, { Z: () => u });
var i = n(200651),
    r = n(442837),
    a = n(481060),
    s = n(695346),
    o = n(699516),
    l = n(388032);
function u(e) {
    let { userId: t, onClick: n } = e;
    if (!(0, r.e7)([o.Z], () => o.Z.isIgnored(t))) return null;
    let u = () => {
        s.Rt.updateSetting(!0), n();
    };
    return (0, i.jsx)(a.zxk, {
        look: a.iLD.LINK,
        size: a.PhG.MIN,
        onClick: u,
        color: a.Ttl.LINK,
        children: l.intl.string(l.t.QbcRCA)
    });
}
