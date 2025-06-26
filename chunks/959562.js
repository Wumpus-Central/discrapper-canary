s.d(e, { Z: () => l });
var n = s(255367);
s(73800);
var i = s(481060),
    a = s(632139),
    r = s(660097);
function l(t) {
    let { user: e, size: s } = t,
        l = (0, i.UCu)(s),
        c = null != e ? e.getAvatarURL(null, l.size) : r;
    return (0, n.jsx)('div', {
        className: a.avatarBackground,
        children: (0, n.jsx)('div', {
            className: a.avatar,
            style: {
                width: l.size,
                height: l.size
            },
            children: (0, n.jsx)(i.qEK, {
                src: c,
                'aria-hidden': !0,
                size: s
            })
        })
    });
}
