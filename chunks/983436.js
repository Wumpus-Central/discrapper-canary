n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    a = n(287734),
    l = n(475468),
    o = n(358555),
    s = n(955415),
    c = n(944486),
    u = n(914010),
    d = n(626135),
    p = n(981631),
    m = n(388032),
    f = n(273254);
function h(e) {
    var t;
    let { guild: n, channel: h, messageData: g } = e,
        _ = u.Z.getGuildId(),
        b = c.Z.getChannelId(_),
        x = i.useCallback(() => {
            var e;
            d.default.track(p.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null == (e = g.author) ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: h.id,
                link_channel_type: h.type,
                guild_id: _,
                channel_id: b
            }),
                (0, l.K)(n.id, h.id),
                a.default.selectVoiceChannel(h.id);
        }, [null == (t = g.author) ? void 0 : t.id, n.id, h.id, h.type, _, b]),
        y = (0, r.jsx)(s.Z.Channel, { channel: h });
    return (0, r.jsx)(s.Z, {
        children: (0, r.jsxs)(s.Z.Body, {
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerLine,
                    children: [
                        (0, r.jsx)(s.Z.Icon, { guild: n }),
                        (0, r.jsx)(s.Z.Info, {
                            title: y,
                            onClick: x,
                            children: (0, r.jsxs)('span', {
                                className: f.infoTitle,
                                children: [
                                    m.NW.format(m.t['2wimj4'], { guildName: n.name }),
                                    (0, r.jsx)('span', {
                                        className: f.infoBadge,
                                        children: (0, r.jsx)(o.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(s.Z.Button, {
                    onClick: x,
                    color: s.Z.Button.Colors.GREEN,
                    children: h.isGuildStageVoice() ? m.NW.string(m.t['7vb2cX']) : m.NW.string(m.t['96ANUF'])
                })
            ]
        })
    });
}
