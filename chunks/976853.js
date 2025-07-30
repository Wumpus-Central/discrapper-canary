n.d(t, { Z: () => o });
var r = n(399606),
    i = n(592125),
    l = n(176505);
function o(e) {
    let t = (0, r.e7)([i.Z], () => {
        let t = i.Z.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(l.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
