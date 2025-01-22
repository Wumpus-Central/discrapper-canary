e.d(t, {
    Z: function () {
        return u;
    }
});
var l = e(399606),
    i = e(592125),
    r = e(176505);
function u(n) {
    let t = (0, l.e7)([i.Z], () => {
        let t = i.Z.getChannel(n);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(r.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
