n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    r = n(572211),
    a = n(443795),
    o = n(768349),
    d = n(985018),
    c = n(772234);
function u(e) {
    let { application: t, message: n, header: u, onClickContent: m, onView: _, guildId: h } = e,
        p = l.useMemo(
            () =>
                (0, i.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    className: c.h_,
                    color: "none",
                    lineClamp: 1,
                    children: d.intl.string(d.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(r.h, {
        header: u,
        title: t.name,
        iconSrc: a.HT.getWhiteIconURL(),
        info: p,
        onClickContent: m,
        trackingConfig: {
            id: t.id,
            linkType: o.J.RICH_PRESENCE_INVITE,
            onView: _,
            referrerId: n.author.id,
            guildId: h,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
