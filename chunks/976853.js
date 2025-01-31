l.d(t, { Z: () => r });
var e = l(399606),
    i = l(592125),
    a = l(176505);
function r(n) {
    let t = (0, e.e7)([i.Z], () => {
        let t = i.Z.getChannel(n);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(a.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
