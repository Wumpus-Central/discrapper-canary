n.r(t), n.d(t, { default: () => i }), n(65821);
var r = n(652215);
function i(e, t) {
    let n,
        i = new Date();
    switch (e) {
        case r.HAw.CHANNEL_OPENED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                channel_ids: n.map((e) => e.channelId),
                channel_types: n.map((e) => e.channelType),
                rtc_states: n.map((e) => e.rtc_state),
            };
        case r.HAw.GUILD_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                guild_ids: n.map((e) => e.guildId),
                rtc_states: n.map((e) => e.rtc_state),
            };
        case r.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                rtc_states: n.map((e) => e.rtc_state),
                tab_opened: n.map((e) => e.tab_opened),
                num_friends: n.map((e) => e.num_friends),
                now_playing_visible: n.map((e) => e.now_playing_visible),
                now_playing_num_cards: n.map((e) => e.now_playing_num_cards),
            };
        case r.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
            return {
                time_minus: (n = t).map((e) => i.getTime() - e.timestamp.getTime()),
                rtc_states: n.map((e) => e.rtc_state),
                load_duration_ms: n.map((e) => e.load_duration_ms),
                were_messages_cached: n.map((e) => e.were_messages_cached),
                is_first_load: n.map((e) => e.is_first_load),
            };
        default:
            throw Error("getClicksteamDrainEvent: Unknown event: ".concat(e));
    }
}
