"use strict";
n.d(t, { z: () => i });
var r = n(652215);
function i(e, t) {
    let n = new Date();
    switch (e) {
        case r.HAw.GUILD_VIEWED_CLICKSTREAM: {
            let e = t;
            return {
                time_minus: e.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: e.map((e) => e.rtc_state),
                guild_ids: e.map((e) => e.guild_id),
            };
        }
        case r.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM: {
            let e = t;
            return {
                time_minus: e.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: e.map((e) => e.rtc_state),
                tab_opened: e.map((e) => e.tab_opened),
                num_friends: e.map((e) => e.num_friends),
                now_playing_visible: e.map((e) => e.now_playing_visible),
                now_playing_num_cards: e.map((e) => e.now_playing_num_cards),
            };
        }
        case r.HAw.CHANNEL_OPENED_CLICKSTREAM: {
            let e = t;
            return {
                time_minus: e.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: e.map((e) => e.rtc_state),
                channel_ids: e.map((e) => e.channel_id),
                channel_types: e.map((e) => e.channel_type),
            };
        }
        case r.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM: {
            let e = t;
            return {
                time_minus: e.map((e) => n.getTime() - e.timestamp.getTime()),
                rtc_states: e.map((e) => e.rtc_state),
                load_duration_ms: e.map((e) => e.load_duration_ms),
                were_messages_cached: e.map((e) => e.were_messages_cached),
                is_first_load: e.map((e) => e.is_first_load),
            };
        }
        default:
            throw Error(`getClickstreamDrainEvent: Unknown event: ${e}`);
    }
}
