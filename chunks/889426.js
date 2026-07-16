n.d(t, { A: () => A });
var i = n(627968),
    l = n(562708),
    a = n(442433),
    s = n(793574),
    r = n(139286),
    o = n(480890),
    c = n(326567),
    d = n(280450),
    u = n(734057),
    p = n(287809),
    h = n(806931);
function m(e, t, n) {
    let i = d.default.getId();
    (0, r.x)({
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.CALL_TILE_CONTEXT_MENU,
        properties: { location: n, is_tile_owner: e.user.id === i, tile_type: t },
    });
}
function A(e) {
    let {
            participant: t,
            event: l,
            minimalContextMenu: r,
            entrypoint: d,
            channelId: A,
            appContext: x,
            location: g,
        } = e,
        f = u.A.getChannel(A);
    if (null != f && t.type !== h.lp.ACTIVITY && t.type !== h.lp.HIDDEN_STREAM)
        switch (t.type) {
            case h.lp.STREAM:
                m(t, h.qs.STREAM, g),
                    (0, a.L3)(
                        l,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("89673"),
                                n.e("45996"),
                                n.e("29422"),
                                n.e("58315"),
                                n.e("66692"),
                            ]).then(n.bind(n, 796175));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    stream: t.stream,
                                    exitFullscreen: () => {},
                                    appContext: x,
                                    minimal: r,
                                    onInteraction: () =>
                                        (0, o.s)("StreamContextMenu", s.A.GUILD_ROOM, {
                                            entrypoint: d,
                                            tileType: h.qs.STREAM,
                                            targetUserId: t.user.id,
                                        }),
                                });
                        },
                        { context: x },
                    );
                return;
            case h.lp.USER:
                let C = p.default.getUser(t.id);
                if (null == C) return;
                if ((m(t, h.qs.USER, g), r))
                    return (0, c.r)(l, t.user, f, { context: x }, (e, n) =>
                        (0, o.Y)({
                            menuItemProps: n,
                            menuName: e,
                            entrypoint: d ?? h.GK.THREE_DOT,
                            tileType: h.qs.USER,
                            targetUserId: t.user.id,
                            location: s.A.GUILD_ROOM,
                        }),
                    );
                return (0, a.L3)(
                    l,
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("94881"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("93190"),
                            n.e("8757"),
                            n.e("85968"),
                            n.e("89673"),
                            n.e("29787"),
                            n.e("82073"),
                            n.e("97558"),
                            n.e("91994"),
                            n.e("76665"),
                            n.e("24198"),
                            n.e("45996"),
                            n.e("23427"),
                            n.e("49145"),
                            n.e("29422"),
                            n.e("7059"),
                            n.e("43116"),
                            n.e("70314"),
                            n.e("70515"),
                            n.e("4524"),
                            n.e("54148"),
                            n.e("66939"),
                            n.e("17334"),
                            n.e("84841"),
                        ]).then(n.bind(n, 107632));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                showMediaItems: !0,
                                showChannelCallItems: !0,
                                showChatItems: !1,
                                user: C,
                                channel: f,
                                guildId: f.guild_id,
                                showModalItems: !0,
                                onInteraction: () =>
                                    (0, o.s)("GuildChannelUserContextMenu", s.A.GUILD_ROOM, {
                                        entrypoint: d,
                                        tileType: h.qs.USER,
                                        targetUserId: t.user.id,
                                    }),
                            });
                    },
                    { context: x },
                );
        }
}
