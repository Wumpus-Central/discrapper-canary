n.d(t, { z: () => r });
var i = n(652215);
function r(e, t) {
    let n = new Date();
    switch (e) {
        case i.HAw.GUILD_VIEWED_CLICKSTREAM:
            return {
                time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: t.map((e) => e.rtc_state),
                guild_ids: t.map((e) => e.guild_id),
            };
        case i.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
                time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: t.map((e) => e.rtc_state),
                tab_opened: t.map((e) => e.tab_opened),
                num_friends: t.map((e) => e.num_friends),
                now_playing_visible: t.map((e) => e.now_playing_visible),
                now_playing_num_cards: t.map((e) => e.now_playing_num_cards),
            };
        case i.HAw.CHANNEL_OPENED_CLICKSTREAM:
            return {
                time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: t.map((e) => e.rtc_state),
                channel_ids: t.map((e) => e.channel_id),
                channel_types: t.map((e) => e.channel_type),
            };
        case i.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
            return {
                time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: t.map((e) => e.rtc_state),
                load_duration_ms: t.map((e) => e.load_duration_ms),
                were_messages_cached: t.map((e) => e.were_messages_cached),
                is_first_load: t.map((e) => e.is_first_load),
            };
        default:
            throw Error(`getClickstreamDrainEvent: Unknown event: ${e}`);
    }
}
