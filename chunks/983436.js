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
    _ = n(388032),
    h = n(375798);
function p(e) {
    var t;
    let { guild: n, channel: p, messageData: g } = e,
        f = d.Z.getGuildId(),
        x = c.Z.getChannelId(f),
        C = l.useCallback(() => {
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
        v = (0, i.jsx)(o.Z.Channel, { channel: p });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsxs)(o.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerLine,
                    children: [
                        (0, i.jsx)(o.Z.Icon, { guild: n }),
                        (0, i.jsx)(o.Z.Info, {
                            title: v,
                            onClick: C,
                            children: (0, i.jsxs)('span', {
                                className: h.infoTitle,
                                children: [
                                    _.intl.format(_.t['2wimj4'], { guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: h.infoBadge,
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
                    onClick: C,
                    color: o.Z.Button.Colors.GREEN,
                    children: p.isGuildStageVoice() ? _.intl.string(_.t['7vb2cX']) : _.intl.string(_.t['96ANUF'])
                })
            ]
        })
    });
}
