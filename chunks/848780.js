n.d(t, { Z: () => c });
var r = n(200651),
    i = n(442837),
    o = n(481060),
    a = n(695346),
    s = n(699516),
    l = n(388032);
function c(e) {
    let { userId: t, onClick: n } = e;
    if (!(0, i.e7)([s.Z], () => s.Z.isIgnored(t))) return null;
    let c = () => {
        a.Rt.updateSetting(!0), n();
    };
    return (0, r.jsx)(o.zxk, {
        look: o.iLD.LINK,
        size: o.PhG.MIN,
        onClick: c,
        color: o.Ttl.LINK,
        children: l.NW.string(l.t.QbcRCA)
    });
}
