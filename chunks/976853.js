e.d(n, {
    Z: function () {
        return a;
    }
});
var r = e(399606),
    l = e(592125),
    i = e(176505);
function a(t) {
    let n = (0, r.e7)([l.Z], () => {
        let n = l.Z.getChannel(t);
        return (null == n ? void 0 : n.parent_id) != null && n.isForumPost() ? l.Z.getChannel(null == n ? void 0 : n.parent_id) : null;
    });
    return (null == n ? void 0 : n.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
