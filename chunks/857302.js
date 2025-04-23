r.d(t, { Z: () => s });
var n = r(232567),
    i = r(621853);
function s(e, t) {
    if (i.Z.isFetchingFriends(e)) return;
    let r = i.Z.getMutualFriendsCount(e);
    if (0 === r) return;
    let s = i.Z.getMutualFriends(e);
    if (null == r || null == s || s.length !== r) return (0, n.Sr)(e, t);
}
