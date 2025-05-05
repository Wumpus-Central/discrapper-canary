n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(287734),
    a = n(475468),
    o = n(358555),
    s = n(955415),
    c = n(944486),
    u = n(914010),
    d = n(626135),
    p = n(981631),
    m = n(388032),
    f = n(273254);
function h(e) {
    let { guild: t, channel: n, message: h } = e,
        g = u.Z.getGuildId(),
        _ = c.Z.getChannelId(g),
        b = i.useCallback(() => {
            var e;
            d.default.track(p.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null == (e = h.author) ? void 0 : e.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: g,
                channel_id: _
            }),
                (0, a.K)(t.id, n.id),
                l.default.selectVoiceChannel(n.id);
        }, [h, t, n, g, _]),
        x = (0, r.jsx)(s.Z.Channel, { channel: n });
    return (0, r.jsx)(s.Z, {
        children: (0, r.jsxs)(s.Z.Body, {
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerLine,
                    children: [
                        (0, r.jsx)(s.Z.Icon, { guild: t }),
                        (0, r.jsx)(s.Z.Info, {
                            title: x,
                            onClick: b,
                            children: (0, r.jsxs)('span', {
                                className: f.infoTitle,
                                children: [
                                    m.intl.format(m.t['2wimj4'], { guildName: t.name }),
                                    (0, r.jsx)('span', {
                                        className: f.infoBadge,
                                        children: (0, r.jsx)(o.Z, {
                                            guild: t,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(s.Z.Button, {
                    onClick: b,
                    color: s.Z.Button.Colors.GREEN,
                    children: n.isGuildStageVoice() ? m.intl.string(m.t['7vb2cX']) : m.intl.string(m.t['96ANUF'])
                })
            ]
        })
    });
}
