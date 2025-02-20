t.d(e, { Z: () => o });
var l = t(399606),
    r = t(592125),
    i = t(176505);
function o(n) {
    let e = (0, l.e7)([r.Z], () => {
        let e = r.Z.getChannel(n);
        return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? r.Z.getChannel(null == e ? void 0 : e.parent_id) : null;
    });
    return (null == e ? void 0 : e.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
