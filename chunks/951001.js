"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    updateChannelDimensions(e, t, n, r, s, a) {
        i.h.dispatch({
            type: "UPDATE_CHANNEL_DIMENSIONS",
            channelId: e,
            timestamp: t,
            scrollTop: n,
            scrollHeight: r,
            offsetHeight: s,
        }),
            a?.();
    },
    updateChannelListScroll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        i.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTop: t, channelIds: n });
    },
    channelListScrollTo(e, t) {
        i.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTo: t, channelIds: [] });
    },
    clearChannelListScrollTo(e) {
        i.h.dispatch({ type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: e, scrollTo: null, channelIds: [] });
    },
    clearChannelDimensions(e, t) {
        this.updateChannelDimensions(e, Date.now(), null, null, null, t);
    },
    updateGuildListScrollTo(e) {
        i.h.dispatch({ type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop: e });
    },
};
