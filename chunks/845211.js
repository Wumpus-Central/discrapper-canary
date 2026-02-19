"use strict";
n.d(t, { A: () => A }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(73939),
    a = n(397927),
    o = n(734057),
    c = n(131677),
    d = n(383501),
    u = n(50400),
    h = n(985018);
function A() {
    (0, l.bG)([o.A], () => o.A.getPrivateChannelsVersion());
    let e = o.A.getMutablePrivateChannels(),
        t = (0, l.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: A } = (0, l.cf)([d.A], () => ({
            selectedVoiceGuildId: d.A.getGuildId(),
            selectedVoiceChannelId: d.A.getChannelId(),
        })),
        p = t.map((t) => {
            let n = e[t];
            return null == n || n.id === A ? null : (0, i.jsx)(u.A, { channel: n }, n.id);
        }),
        g = null == n && null != A ? e[A] : null;
    return (
        null != g && p.unshift((0, i.jsx)(u.A, { channel: g }, g.id)),
        (0, i.jsx)(a.BJc, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": h.intl.string(h.t.YUU0RF),
            gap: "xs",
            hidden: p.length < 1,
            children: (0, i.jsx)(r.F, { component: s.Fragment, children: p }),
        })
    );
}
