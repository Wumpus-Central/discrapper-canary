n.d(t, { Z: () => l });
var i = n(399606),
    o = n(592125),
    r = n(176505);
function l(e) {
    let t = (0, i.e7)([o.Z], () => {
        let t = o.Z.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? o.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
