"use strict";
n.d(t, { k: () => d, p: () => _ }), n(321073);
var i = n(495544),
    r = n(763827),
    s = n(174459),
    a = n(935208),
    o = n(652215);
let l = new Map(),
    u = -1;
function c() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        let e = a.default.extractTimestamp(i.default.getId());
        e !== u && (_(!1), (u = e));
    }
    return u % 10 == 0;
}
function d(e, t) {
    c() && (l.has(e) || l.set(e, []), l.get(e)?.push({ timestamp: new Date(), rtc_state: r.A.getState(), ...t }));
}
function _() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!c(e)) return void l.clear();
    for (let [e, t] of l)
        s.default.track(
            e,
            (function (e, t) {
                let n = new Date();
                switch (e) {
                    case o.HAw.GUILD_VIEWED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            guild_ids: t.map((e) => e.guild_id),
                        };
                    case o.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            tab_opened: t.map((e) => e.tab_opened),
                            num_friends: t.map((e) => e.num_friends),
                            now_playing_visible: t.map((e) => e.now_playing_visible),
                            now_playing_num_cards: t.map((e) => e.now_playing_num_cards),
                        };
                    case o.HAw.CHANNEL_OPENED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            channel_ids: t.map((e) => e.channel_id),
                            channel_types: t.map((e) => e.channel_type),
                        };
                    case o.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
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
            })(e, t),
        );
    l.clear();
}
