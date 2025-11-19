n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(782280),
    o = n(660097);
function s(e) {
    let { user: t, size: n } = e,
        s = (0, i.UCu)(n),
        l = null != t ? t.getAvatarURL(null, s.size) : o;
    return (0, r.jsx)("div", {
        className: a.avatarBackground,
        children: (0, r.jsx)("div", {
            className: a.avatar,
            style: {
                width: s.size,
                height: s.size,
            },
            children: (0, r.jsx)(i.qEK, {
                src: l,
                "aria-hidden": !0,
                size: n,
            }),
        }),
    });
}
