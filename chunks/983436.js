n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(287734),
    s = n(475468),
    l = n(358555),
    c = n(955415),
    u = n(944486),
    d = n(914010),
    f = n(626135),
    _ = n(981631),
    p = n(388032),
    h = n(105341);
function m(e) {
    let { guild: t, channel: n, message: m } = e,
        g = d.Z.getGuildId(),
        E = u.Z.getChannelId(g),
        b = i.useCallback(() => {
            var e;
            f.default.track(_.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null == (e = m.author) ? void 0 : e.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: g,
                channel_id: E,
            }),
                (0, s.K)(t.id, n.id),
                o.default.selectVoiceChannel(n.id);
        }, [m, t, n, g, E]),
        y = (0, r.jsx)(c.Z.Channel, { channel: n });
    return (0, r.jsx)(c.Z, {
        children: (0, r.jsxs)(c.Z.Body, {
            children: [
                (0, r.jsxs)("div", {
                    className: h.headerLine,
                    children: [
                        (0, r.jsx)(c.Z.Icon, { guild: t }),
                        (0, r.jsx)(c.Z.Info, {
                            title: y,
                            onClick: b,
                            children: (0, r.jsxs)("span", {
                                className: h.infoTitle,
                                children: [
                                    p.intl.format(p.t["2wimj5"], { guildName: t.name }),
                                    (0, r.jsx)("span", {
                                        className: h.infoBadge,
                                        children: (0, r.jsx)(l.Z, {
                                            guild: t,
                                            isBannerVisible: !1,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.zxk, {
                    fullWidth: !0,
                    onClick: b,
                    variant: "active",
                    text: n.isGuildStageVoice() ? p.intl.string(p.t["7vb2cc"]) : p.intl.string(p.t["96ANUN"]),
                }),
            ],
        }),
    });
}
