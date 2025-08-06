n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(287734),
    a = n(475468),
    s = n(358555),
    l = n(955415),
    c = n(944486),
    u = n(914010),
    d = n(626135),
    f = n(981631),
    _ = n(388032),
    p = n(273254);
function h(e) {
    let { guild: t, channel: n, message: h } = e,
        m = u.Z.getGuildId(),
        g = c.Z.getChannelId(m),
        E = i.useCallback(() => {
            var e;
            (d.default.track(f.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null == (e = h.author) ? void 0 : e.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: m,
                channel_id: g
            }),
                (0, a.K)(t.id, n.id),
                o.default.selectVoiceChannel(n.id));
        }, [h, t, n, m, g]),
        b = (0, r.jsx)(l.Z.Channel, { channel: n });
    return (0, r.jsx)(l.Z, {
        children: (0, r.jsxs)(l.Z.Body, {
            children: [
                (0, r.jsxs)('div', {
                    className: p.headerLine,
                    children: [
                        (0, r.jsx)(l.Z.Icon, { guild: t }),
                        (0, r.jsx)(l.Z.Info, {
                            title: b,
                            onClick: E,
                            children: (0, r.jsxs)('span', {
                                className: p.infoTitle,
                                children: [
                                    _.intl.format(_.t['2wimj4'], { guildName: t.name }),
                                    (0, r.jsx)('span', {
                                        className: p.infoBadge,
                                        children: (0, r.jsx)(s.Z, {
                                            guild: t,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(l.Z.Button, {
                    onClick: E,
                    color: l.Z.Button.Colors.GREEN,
                    children: n.isGuildStageVoice() ? _.intl.string(_.t['7vb2cX']) : _.intl.string(_.t['96ANUF'])
                })
            ]
        })
    });
}
