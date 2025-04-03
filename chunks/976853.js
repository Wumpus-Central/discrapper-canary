e.d(n, { Z: () => a });
var l = e(399606),
    r = e(592125),
    i = e(176505);
function a(t) {
    let n = (0, l.e7)([r.Z], () => {
        let n = r.Z.getChannel(t);
        return (null == n ? void 0 : n.parent_id) != null && n.isForumPost() ? r.Z.getChannel(null == n ? void 0 : n.parent_id) : null;
    });
    return (null == n ? void 0 : n.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
