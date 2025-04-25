r.d(t, { Z: () => i });
var n = r(232567),
    s = r(621853);
function i(e, t) {
    if (s.Z.isFetchingFriends(e)) return;
    let r = s.Z.getMutualFriendsCount(e);
    if (0 === r) return;
    let i = s.Z.getMutualFriends(e);
    if (null == r || null == i || i.length !== r) return (0, n.Sr)(e, t);
}
