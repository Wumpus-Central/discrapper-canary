n.d(t, {
    K: () => c,
    r: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(884338),
    l = n(981631),
    o = n(388032),
    s = n(368991);
function c(e) {
    let { activityUsers: t, guildId: n, activityText: l } = e;
    return (0, r.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, r.jsx)(a.Z, {
                guildId: n,
                users: t,
                max: 6,
                size: a.u.SIZE_16
            }),
            (0, r.jsxs)(i.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: [t.length, ' ', l]
            })
        ]
    });
}
function u(e) {
    switch (null == e ? void 0 : e.type) {
        case l.IIU.STREAMING:
            return {
                text: o.NW.string(o.t['Jpkr/v']),
                Icon: i.m3e
            };
        case l.IIU.LISTENING:
            return {
                text: o.NW.string(o.t.kUEnxM),
                Icon: i.RZG
            };
        default:
            return {
                text: o.NW.string(o.t.BMTj29),
                Icon: i.iWm
            };
    }
}
