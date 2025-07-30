e.d(n, { Z: () => a });
var l = e(399606),
    i = e(592125),
    r = e(176505);
function a(t) {
    let n = (0, l.e7)([i.Z], () => {
        let n = i.Z.getChannel(t);
        return (null == n ? void 0 : n.parent_id) != null && n.isForumPost() ? i.Z.getChannel(null == n ? void 0 : n.parent_id) : null;
    });
    return (null == n ? void 0 : n.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
