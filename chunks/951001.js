"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    updateChannelDimensions(e, t, n, i, s, a) {
        r.h.dispatch({
            type: "UPDATE_CHANNEL_DIMENSIONS",
            channelId: e,
            timestamp: t,
            scrollTop: n,
            scrollHeight: i,
            offsetHeight: s,
        }),
            a?.();
    },
    updateChannelListScroll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        r.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTop: t, channelIds: n });
    },
    channelListScrollTo(e, t) {
        r.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTo: t, channelIds: [] });
    },
    clearChannelListScrollTo(e) {
        r.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTo: null, channelIds: [] });
    },
    clearChannelDimensions(e, t) {
        this.updateChannelDimensions(e, Date.now(), null, null, null, t);
    },
    updateGuildListScrollTo(e) {
        r.h.dispatch({ type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop: e });
    },
};
