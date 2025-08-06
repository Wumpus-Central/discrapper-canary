n.d(t, {
    K: () => c,
    r: () => u
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(884338),
    a = n(981631),
    s = n(388032),
    l = n(368991);
function c(e) {
    let { activityUsers: t, guildId: n, activityText: a } = e;
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, r.jsx)(o.ZP, {
                guildId: n,
                users: t,
                max: 6,
                size: o.u8.SIZE_16
            }),
            (0, r.jsxs)(i.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: [t.length, ' ', a]
            })
        ]
    });
}
function u(e) {
    switch (null == e ? void 0 : e.type) {
        case a.IIU.STREAMING:
            return {
                text: s.intl.string(s.t['Jpkr/v']),
                Icon: i.m3e
            };
        case a.IIU.LISTENING:
            return {
                text: s.intl.string(s.t.kUEnxM),
                Icon: i.RZG
            };
        default:
            return {
                text: s.intl.string(s.t.BMTj29),
                Icon: i.iWm
            };
    }
}
