n.d(e, { Z: () => i });
var l = n(399606),
    a = n(592125),
    r = n(176505);
function i(t) {
    let e = (0, l.e7)([a.Z], () => {
        let e = a.Z.getChannel(t);
        return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? a.Z.getChannel(null == e ? void 0 : e.parent_id) : null;
    });
    return (null == e ? void 0 : e.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
