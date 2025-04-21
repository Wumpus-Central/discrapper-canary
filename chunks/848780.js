n.d(t, { Z: () => c });
var r = n(200651),
    i = n(442837),
    a = n(481060),
    o = n(695346),
    s = n(699516),
    l = n(388032);
function c(e) {
    let { userId: t, onClick: n } = e;
    if (!(0, i.e7)([s.Z], () => s.Z.isIgnored(t))) return null;
    let c = () => {
        o.Rt.updateSetting(!0), n();
    };
    return (0, r.jsx)(a.zxk, {
        look: a.iLD.LINK,
        size: a.PhG.MIN,
        onClick: c,
        color: a.Ttl.LINK,
        children: l.intl.string(l.t.QbcRCA)
    });
}
