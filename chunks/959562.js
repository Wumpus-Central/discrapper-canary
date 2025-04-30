n.d(e, { Z: () => l });
var s = n(200651);
n(192379);
var i = n(481060),
    a = n(632139),
    r = n(660097);
function l(t) {
    let { user: e, size: n } = t,
        l = (0, i.UCu)(n),
        c = null != e ? e.getAvatarURL(null, l.size) : r;
    return (0, s.jsx)('div', {
        className: a.avatarBackground,
        children: (0, s.jsx)('div', {
            className: a.avatar,
            style: {
                width: l.size,
                height: l.size
            },
            children: (0, s.jsx)(i.qEK, {
                src: c,
                'aria-hidden': !0,
                size: n
            })
        })
    });
}
