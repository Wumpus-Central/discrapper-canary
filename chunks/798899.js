n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(572211),
    s = n(443795),
    o = n(768349),
    d = n(985018),
    c = n(62323);
function u(e) {
    let { application: t, message: n, header: u, onClickContent: _, onView: m, guildId: h } = e,
        p = l.useMemo(
            () =>
                (0, i.jsx)(r.Text, {
                    variant: "text-xs/medium",
                    className: c.h_,
                    color: "none",
                    lineClamp: 1,
                    children: d.intl.string(d.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(a.h, {
        header: u,
        title: t.name,
        iconSrc: s.HT.getWhiteIconURL(),
        info: p,
        onClickContent: _,
        trackingConfig: {
            id: t.id,
            linkType: o.J.RICH_PRESENCE_INVITE,
            onView: m,
            referrerId: n.author.id,
            guildId: h,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
