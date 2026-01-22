n.d(t, { k: () => i });
var r = n(961350);
function i(e) {
    var t, n;
    let i = r.default.getId();
    return (
        null != i &&
        !!(
            (null == (t = e.removedMemberIds) ? void 0 : t.includes(i)) ||
            (null == (n = e.addedMembers) ? void 0 : n.some((e) => e.userId === i))
        )
    );
}
