n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(447003),
    o = n(496675),
    l = n(231338);
function u(e) {
    let { channel: t, ...n } = e,
        u = (0, r.e7)([o.Z], () => t.isPrivate() || o.Z.can(l.Pl.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, i.jsx)(a.Csw, { ...n });
    let c = t.isGuildStageVoice(),
        d = !u || (0, s.Z)(t);
    return c && d ? (0, i.jsx)(a.pki, { ...n }) : c ? (0, i.jsx)(a.ewx, { ...n }) : t.isNSFW() ? (0, i.jsx)(a.BVY, { ...n }) : d ? (0, i.jsx)(a.gjC, { ...n }) : (0, i.jsx)(a.gj8, { ...n });
}
