n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    a = n(287734),
    r = n(475468),
    s = n(358555),
    o = n(955415),
    c = n(944486),
    d = n(914010),
    u = n(626135),
    m = n(981631),
    h = n(388032),
    _ = n(658412);
function p(e) {
    var t;
    let { guild: n, channel: p, messageData: g } = e,
        f = d.Z.getGuildId(),
        x = c.Z.getChannelId(f),
        E = l.useCallback(() => {
            var e;
            u.default.track(m.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = g.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: p.id,
                link_channel_type: p.type,
                guild_id: f,
                channel_id: x
            }),
                (0, r.K)(n.id, p.id),
                a.default.selectVoiceChannel(p.id);
        }, [null === (t = g.author) || void 0 === t ? void 0 : t.id, n.id, p.id, p.type, f, x]),
        C = (0, i.jsx)(o.Z.Channel, { channel: p });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsxs)(o.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: _.headerLine,
                    children: [
                        (0, i.jsx)(o.Z.Icon, { guild: n }),
                        (0, i.jsx)(o.Z.Info, {
                            title: C,
                            onClick: E,
                            children: (0, i.jsxs)('span', {
                                className: _.infoTitle,
                                children: [
                                    h.intl.format(h.t['2wimj4'], { guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: _.infoBadge,
                                        children: (0, i.jsx)(s.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(o.Z.Button, {
                    onClick: E,
                    color: o.Z.Button.Colors.GREEN,
                    children: p.isGuildStageVoice() ? h.intl.string(h.t['7vb2cX']) : h.intl.string(h.t['96ANUF'])
                })
            ]
        })
    });
}
