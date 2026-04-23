n.d(t, { D: () => s, I: () => _ });
var i = n(954571),
    r = n(424994),
    a = n(652215);
let s = i.default.track,
    _ = (e, t) => {
        s(a.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: r.UG.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName,
        });
    };
