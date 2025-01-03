n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(793030),
    l = n(256139),
    o = n(866040);
function s(e) {
    let { user: t, text: n, channel: s, textClassName: c, onPopoutClosed: d } = e,
        u = (0, i.useMemo)(() => [t], [t]);
    return (0, r.jsx)(o.Z, {
        participants: u,
        channel: s,
        onPopoutClosed: d,
        children: (e) =>
            (0, r.jsx)(l.Z, {
                ...e,
                tag: 'span',
                children: (0, r.jsx)(a.xv, {
                    className: c,
                    variant: 'text-sm/semibold',
                    color: 'text-primary',
                    lineClamp: 1,
                    scaleFontToUserSetting: !0,
                    children: n
                })
            })
    });
}
