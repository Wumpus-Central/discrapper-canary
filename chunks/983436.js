n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(287734),
    a = n(475468),
    o = n(358555),
    s = n(955415),
    c = n(944486),
    d = n(914010),
    u = n(626135),
    m = n(981631),
    h = n(388032),
    f = n(658412);
function p(e) {
    var t;
    let { guild: n, channel: p, messageData: _ } = e,
        g = d.Z.getGuildId(),
        E = c.Z.getChannelId(g),
        C = r.useCallback(() => {
            var e;
            u.default.track(m.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = _.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: p.id,
                link_channel_type: p.type,
                guild_id: g,
                channel_id: E
            }),
                (0, a.K)(n.id, p.id),
                l.default.selectVoiceChannel(p.id);
        }, [null === (t = _.author) || void 0 === t ? void 0 : t.id, n.id, p.id, p.type, g, E]),
        I = (0, i.jsx)(s.Z.Channel, { channel: p });
    return (0, i.jsx)(s.Z, {
        children: (0, i.jsxs)(s.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: f.headerLine,
                    children: [
                        (0, i.jsx)(s.Z.Icon, { guild: n }),
                        (0, i.jsx)(s.Z.Info, {
                            title: I,
                            onClick: C,
                            children: (0, i.jsxs)('span', {
                                className: f.infoTitle,
                                children: [
                                    h.intl.format(h.t['2wimj4'], { guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: f.infoBadge,
                                        children: (0, i.jsx)(o.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(s.Z.Button, {
                    onClick: C,
                    color: s.Z.Button.Colors.GREEN,
                    children: p.isGuildStageVoice() ? h.intl.string(h.t['7vb2cX']) : h.intl.string(h.t['96ANUF'])
                })
            ]
        })
    });
}
