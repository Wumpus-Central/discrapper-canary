n.d(t, { A: () => A }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(73939),
    r = n(397927),
    o = n(734057),
    c = n(131677),
    d = n(383501),
    u = n(50400),
    h = n(985018);
function A() {
    (0, s.bG)([o.A], () => o.A.getPrivateChannelsVersion());
    let e = o.A.getMutablePrivateChannels(),
        t = (0, s.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: A } = (0, s.cf)([d.A], () => ({
            selectedVoiceGuildId: d.A.getGuildId(),
            selectedVoiceChannelId: d.A.getChannelId(),
        })),
        _ = t.map((t) => {
            let n = e[t];
            return null == n || n.id === A ? null : (0, i.jsx)(u.A, { channel: n }, n.id);
        }),
        m = null == n && null != A ? e[A] : null;
    return (
        null != m && _.unshift((0, i.jsx)(u.A, { channel: m }, m.id)),
        (0, i.jsx)(r.BJc, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": h.intl.string(h.t.YUU0RF),
            gap: "xs",
            hidden: _.length < 1,
            children: (0, i.jsx)(a.F, { component: l.Fragment, children: _ }),
        })
    );
}
