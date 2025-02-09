n.d(t, { Z: () => s });
var r = n(200651),
    a = n(192379),
    i = n(793030),
    o = n(256139),
    l = n(866040);
function s(e) {
    let { user: t, text: n, channel: s, textClassName: c, onPopoutClosed: d } = e,
        u = (0, a.useMemo)(() => [t], [t]);
    return (0, r.jsx)(l.Z, {
        participants: u,
        channel: s,
        onPopoutClosed: d,
        children: (e) =>
            (0, r.jsx)(o.Z, {
                ...e,
                tag: 'span',
                children: (0, r.jsx)(i.xv, {
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
