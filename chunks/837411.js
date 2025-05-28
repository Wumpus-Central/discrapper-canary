n.d(t, { Z: () => u });
var r = n(442837),
    i = n(91896),
    a = n(41776),
    o = n(695346),
    s = n(314897),
    l = n(271383),
    c = n(699516);
function u(e, t) {
    let n = (0, r.e7)([s.default], () => s.default.getId() === e),
        u = (0, r.e7)([a.Z], () => null != t && a.Z.isLurking(t)),
        d = o.h2.useSetting();
    return (0, r.e7)([c.Z, l.ZP, i.Z], () => (!n && !u && (c.Z.isFriend(e) || null != l.ZP.memberOf(e).find((e) => !d.includes(e)))) || (i.Z.getGameFriendsForUser(e).length > 0 && o._j.getSetting()));
}
