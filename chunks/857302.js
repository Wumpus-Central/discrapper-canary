n.d(t, { Z: () => i });
var r = n(232567),
    l = n(621853);
function i(e, t) {
    if (l.Z.isFetchingFriends(e)) return;
    let n = l.Z.getMutualFriendsCount(e);
    if (0 === n) return;
    let i = l.Z.getMutualFriends(e);
    if (null == n || null == i || i.length !== n) return (0, r.Sr)(e, t);
}
