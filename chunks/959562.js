n.d(e, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(128483),
    l = n(660097);
function r(t) {
    let { user: e, size: n } = t,
        r = (0, a.getAvatarSpecs)(n),
        c = null != e ? e.getAvatarURL(null, r.size) : l;
    return (0, i.jsx)('div', {
        className: s.avatarBackground,
        children: (0, i.jsx)('div', {
            className: s.avatar,
            style: {
                width: r.size,
                height: r.size
            },
            children: (0, i.jsx)(a.Avatar, {
                src: c,
                'aria-hidden': !0,
                size: n
            })
        })
    });
}
