n.d(t, { D: () => s, I: () => l });
var i = n(954571),
    a = n(424994),
    r = n(652215);
let s = i.default.track,
    l = (e, t) => {
        s(r.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: a.UG.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName,
        });
    };
