n.d(t, { Z: () => l });
var r = n(399606),
    o = n(592125),
    i = n(176505);
function l(e) {
    let t = (0, r.e7)([o.Z], () => {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? o.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
