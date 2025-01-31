n.d(t, { Z: () => u });
var i = n(442837),
    r = n(41776),
    a = n(695346),
    s = n(314897),
    o = n(271383),
    l = n(699516);
function u(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getId() === e),
        u = (0, i.e7)([r.Z], () => null != t && r.Z.isLurking(t)),
        c = a.h2.useSetting();
    return (0, i.e7)([l.Z, o.ZP], () => !n && !u && (l.Z.isFriend(e) || null != o.ZP.memberOf(e).find((e) => !c.includes(e))));
}
