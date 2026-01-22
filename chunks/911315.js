t.r(n), t.d(n, { default: () => o });
var i = t(627968);
t(64700);
var l = t(284009),
    a = t.n(l),
    r = t(417597),
    u = t(164617),
    d = t(386467),
    p = t(923917),
    c = t(734057),
    h = t(566388);
function o(e) {
    let { windowKey: n, channelId: t } = e,
        l = (0, r.bG)([c.A], () => c.A.getChannel(t));
    return (
        a()(null != l, "channel cannot be null for popout"),
        (0, i.jsx)(p.A, {
            withTitleBar: !0,
            windowKey: n,
            title: l.name,
            children: (0, i.jsx)(d.A.Provider, {
                value: l.guild_id,
                children: (0, i.jsx)(h.A, {
                    channel: l,
                    popoutType: u.N.VOICE_UI,
                }),
            }),
        })
    );
}
