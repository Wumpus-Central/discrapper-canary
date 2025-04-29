r.d(t, { Z: () => l });
var n = r(232567),
    i = r(621853);
function l(e, t) {
    if (i.Z.isFetchingFriends(e)) return;
    let r = i.Z.getMutualFriendsCount(e);
    if (0 === r) return;
    let l = i.Z.getMutualFriends(e);
    if (null == r || null == l || l.length !== r) return (0, n.Sr)(e, t);
}
