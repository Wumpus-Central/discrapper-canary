n.d(t, { Z: () => l });
var r = n(232567),
    i = n(621853);
function l(e, t) {
    if (i.Z.isFetchingFriends(e)) return;
    let n = i.Z.getMutualFriendsCount(e);
    if (0 === n) return;
    let l = i.Z.getMutualFriends(e);
    if (null == n || null == l || l.length !== n) return (0, r.Sr)(e, t);
}
