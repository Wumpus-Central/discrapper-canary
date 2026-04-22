n.d(t, { D: () => a, I: () => s });
var r = n(954571),
    l = n(424994),
    i = n(652215);
let a = r.default.track,
    s = (e, t) => {
        a(i.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
            request_id: t.requestId,
            item_id: t.entry.id,
            surface_type: l.UG.GUILD_MEMBER_LIST,
            channel_id: t.channelId,
            guild_id: t.guildId,
            interaction_type: e,
            destination_channel_id: t.destinationChannelId,
            destination_guild_id: t.destinationGuildId,
            rich_presence_name: t.richPresenceName,
        });
    };
