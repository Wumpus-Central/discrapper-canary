r.d(t, { Z: () => s });
var n = r(232567),
    l = r(621853);
function s(e, t) {
    if (l.Z.isFetchingFriends(e)) return;
    let r = l.Z.getMutualFriendsCount(e);
    if (0 === r) return;
    let s = l.Z.getMutualFriends(e);
    if (null == r || null == s || s.length !== r) return (0, n.Sr)(e, t);
}
