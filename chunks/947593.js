n.d(t, { D: () => r, I: () => a });
var l = n(174459),
    i = n(424994),
    s = n(652215);
let r = l.default.track;
function a(e, t) {
    r(s.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: i.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
