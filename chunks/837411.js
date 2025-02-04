n.d(t, { Z: () => c });
var i = n(442837),
    r = n(91896),
    a = n(41776),
    s = n(695346),
    o = n(314897),
    l = n(271383),
    u = n(699516);
function c(e, t) {
    let n = (0, i.e7)([o.default], () => o.default.getId() === e),
        c = (0, i.e7)([a.Z], () => null != t && a.Z.isLurking(t)),
        d = s.h2.useSetting();
    return (0, i.e7)([u.Z, l.ZP, r.Z], () => (!n && !c && (u.Z.isFriend(e) || null != l.ZP.memberOf(e).find((e) => !d.includes(e)))) || (r.Z.getGameFriendsForUser(e).length > 0 && s._j.getSetting()));
}
