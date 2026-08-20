n.d(t, { A: () => f });
var i = n(477900),
    l = n(562708),
    a = n(442433),
    s = n(793574),
    r = n(139286),
    o = n(480890),
    c = n(326567),
    d = n(280450),
    u = n(734057),
    h = n(287809),
    p = n(806931);
function m(e, t, n) {
    let i = d.default.getId();
    (0, r.x)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: { location: n, is_tile_owner: e.user.id === i, tile_type: t },
    });
}
function f(e) {
    let {
            participant: t,
            event: l,
            minimalContextMenu: r,
            entrypoint: d,
            channelId: f,
            appContext: A,
            location: x,
        } = e,
        g = u.A.getChannel(f);
    if (null != g && t.type !== p.lp.ACTIVITY && t.type !== p.lp.HIDDEN_STREAM)
        switch (t.type) {
            case p.lp.STREAM:
                m(t, p.qs.STREAM, x),
                    (0, a.L3)(
                        l,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("189673"),
                                n.e("245996"),
                                n.e("529422"),
                                n.e("58315"),
                                n.e("766692"),
                            ]).then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    stream: t.stream,
                                    exitFullscreen: () => {},
                                    appContext: A,
                                    minimal: r,
                                    onInteraction: () =>
                                        (0, o.s)("StreamContextMenu", s.A.GUILD_ROOM, {
                                            entrypoint: d,
                                            tileType: p.qs.STREAM,
                                            targetUserId: t.user.id,
                                        }),
                                });
                        },
                        { context: A },
                    );
                return;
            case p.lp.USER:
                let C = h.default.getUser(t.id);
                if (null == C) return;
                if ((m(t, p.qs.USER, x), r))
                    return (0, c.r)(l, t.user, g, { context: A }, (e, n) =>
                        (0, o.Y)({
                            menuItemProps: n,
                            menuName: e,
                            entrypoint: d ?? p.GK.THREE_DOT,
                            tileType: p.qs.USER,
                            targetUserId: t.user.id,
                            location: s.A.GUILD_ROOM,
                        }),
                    );
                return (0, a.L3)(
                    l,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("866038"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("893190"),
                            n.e("708757"),
                            n.e("585968"),
                            n.e("189673"),
                            n.e("229787"),
                            n.e("882073"),
                            n.e("797558"),
                            n.e("691994"),
                            n.e("576665"),
                            n.e("624198"),
                            n.e("245996"),
                            n.e("823427"),
                            n.e("449145"),
                            n.e("529422"),
                            n.e("307059"),
                            n.e("343116"),
                            n.e("470314"),
                            n.e("70515"),
                            n.e("404524"),
                            n.e("654148"),
                            n.e("666939"),
                            n.e("717334"),
                            n.e("184841"),
                        ]).then(n.bind(n, 107632));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                showMediaItems: !0,
                                showChannelCallItems: !0,
                                showChatItems: !1,
                                user: C,
                                channel: g,
                                guildId: g.guild_id,
                                showModalItems: !0,
                                onInteraction: () =>
                                    (0, o.s)("GuildChannelUserContextMenu", s.A.GUILD_ROOM, {
                                        entrypoint: d,
                                        tileType: p.qs.USER,
                                        targetUserId: t.user.id,
                                    }),
                            });
                    },
                    { context: A },
                );
        }
}
