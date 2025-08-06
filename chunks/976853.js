n.d(t, { Z: () => a });
var r = n(399606),
    i = n(592125),
    o = n(176505);
function a(e) {
    let t = (0, r.e7)([i.Z], () => {
        let t = i.Z.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost()
            ? i.Z.getChannel(null == t ? void 0 : t.parent_id)
            : null;
    });
    return (null == t ? void 0 : t.hasFlag(o.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
