n.d(t, { Z: () => s });
var r = n(232567),
    l = n(621853);
function s(e, t) {
    if (l.Z.isFetchingFriends(e)) return;
    let n = l.Z.getMutualFriendsCount(e);
    if (0 === n) return;
    let s = l.Z.getMutualFriends(e);
    if (null == n || null == s || s.length !== n) return (0, r.Sr)(e, t);
}
