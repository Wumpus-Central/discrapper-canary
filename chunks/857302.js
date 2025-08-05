r.d(t, { Z: () => a });
var n = r(232567),
    i = r(621853);
function a(e, t) {
    if (i.Z.isFetchingFriends(e)) return;
    let r = i.Z.getMutualFriendsCount(e);
    if (0 === r) return;
    let a = i.Z.getMutualFriends(e);
    if (null == r || null == a || a.length !== r) return (0, n.Sr)(e, t);
}
