n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(572211),
    o = n(443795),
    l = n(768349),
    c = n(985018),
    u = n(609653);

function d(e) {
    let { application: t, message: n, header: d, onClickContent: f, onView: p, guildId: _ } = e,
        h = i.useMemo(
            () =>
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    className: u.h_,
                    color: "none",
                    lineClamp: 1,
                    children: c.intl.string(c.t["84qx9r"]),
                }),
            [],
        );
    return (0, r.jsx)(s.h, {
        header: d,
        title: t.name,
        iconSrc: o.HT.getWhiteIconURL(),
        info: h,
        onClickContent: f,
        trackingConfig: {
            id: t.id,
            linkType: l.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: n.author.id,
            guildId: _,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
