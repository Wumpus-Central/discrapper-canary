s.d(t, { Z: () => l });
var a = s(200651);
s(192379);
var n = s(481060),
    i = s(632139),
    r = s(660097);
function l(e) {
    let { user: t, size: s } = e,
        l = (0, n.UCu)(s),
        c = null != t ? t.getAvatarURL(null, l.size) : r;
    return (0, a.jsx)('div', {
        className: i.avatarBackground,
        children: (0, a.jsx)('div', {
            className: i.avatar,
            style: {
                width: l.size,
                height: l.size
            },
            children: (0, a.jsx)(n.qEK, {
                src: c,
                'aria-hidden': !0,
                size: s
            })
        })
    });
}
