"use strict";
n.d(t, { D: () => a, I: () => o });
var i = n(174459),
    r = n(424994),
    s = n(652215);
let a = i.default.track,
    o = (e, t) => {
        a(s.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
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
