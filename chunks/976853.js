n.d(e, { Z: () => o });
var a = n(399606),
    r = n(592125),
    l = n(176505);
function o(t) {
    let e = (0, a.e7)([r.Z], () => {
        let e = r.Z.getChannel(t);
        return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? r.Z.getChannel(null == e ? void 0 : e.parent_id) : null;
    });
    return (null == e ? void 0 : e.hasFlag(l.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
