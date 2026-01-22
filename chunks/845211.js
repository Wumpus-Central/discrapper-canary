n.d(t, {
    A: () => p,
}),
    n(667532);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(73939),
    s = n(397927),
    o = n(734057),
    c = n(131677),
    u = n(383501),
    d = n(50400),
    f = n(985018);

function p() {
    (0, i.bG)([o.A], () => o.A.getPrivateChannelsVersion());
    let e = o.A.getMutablePrivateChannels(),
        t = (0, i.yK)([c.A], () => c.A.getUnreadPrivateChannelIds()),
        { selectedVoiceGuildId: n, selectedVoiceChannelId: p } = (0, i.cf)([u.A], () => ({
            selectedVoiceGuildId: u.A.getGuildId(),
            selectedVoiceChannelId: u.A.getChannelId(),
        })),
        h = t.map((t) => {
            let n = e[t];
            return null == n || n.id === p
                ? null
                : (0, r.jsx)(
                      d.A,
                      {
                          channel: n,
                      },
                      n.id,
                  );
        }),
        b = null == n && null != p ? e[p] : null;
    return (
        null != b &&
            h.unshift(
                (0, r.jsx)(
                    d.A,
                    {
                        channel: b,
                    },
                    b.id,
                ),
            ),
        (0, r.jsx)(s.BJc, {
            id: "guild-list-unread-dms",
            role: "group",
            "aria-label": f.intl.string(f.t.YUU0RF),
            gap: "xs",
            hidden: h.length < 1,
            children: (0, r.jsx)(a.F, {
                component: l.Fragment,
                children: h,
            }),
        })
    );
}
