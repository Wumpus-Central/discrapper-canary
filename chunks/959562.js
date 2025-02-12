s.d(e, { Z: () => r });
var i = s(200651);
s(192379);
var a = s(481060),
    n = s(726169),
    l = s(660097);
function r(t) {
    let { user: e, size: s } = t,
        r = (0, a.UCu)(s),
        c = null != e ? e.getAvatarURL(null, r.size) : l;
    return (0, i.jsx)('div', {
        className: n.avatarBackground,
        children: (0, i.jsx)('div', {
            className: n.avatar,
            style: {
                width: r.size,
                height: r.size
            },
            children: (0, i.jsx)(a.qEK, {
                src: c,
                'aria-hidden': !0,
                size: s
            })
        })
    });
}
