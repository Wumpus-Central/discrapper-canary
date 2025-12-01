n.d(t, { Z: () => d }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(758199),
    s = n(789407),
    l = n(967249),
    c = n(388032),
    u = n(837262);
function d(e) {
    let { application: t, message: n, header: d, onClickContent: f, onView: p, guildId: _ } = e,
        m = i.useMemo(
            () =>
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    className: u.description,
                    color: "none",
                    lineClamp: 1,
                    children: c.intl.string(c.t["84qx9r"]),
                }),
            [],
        );
    return (0, r.jsx)(o.W, {
        header: d,
        title: t.name,
        iconSrc: s.r9.getWhiteIconURL(),
        info: m,
        onClickContent: f,
        trackingConfig: {
            id: t.id,
            linkType: l.U.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: n.author.id,
            guildId: _,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
