n.d(t, {
    A: () => s,
});
var r = n(562465),
    i = n(73153),
    a = n(652215);
let s = {
    createChannelFollower: (e, t) =>
        r.Bo.post({
            url: a.Rsh.CHANNEL_FOLLOWERS(t),
            body: {
                webhook_channel_id: e,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async fetchChannelFollowerStats(e) {
        i.h.dispatch({
            type: "CHANNEL_FOLLOWER_STATS_FETCH_START",
        });
        try {
            let t = await r.Bo.get({
                url: a.Rsh.CHANNEL_FOLLOWER_STATS(e),
                body: {
                    channel_id: e,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            i.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
                stats: t.body,
                channelId: e,
            });
        } catch (t) {
            i.h.dispatch({
                type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
                channelId: e,
            });
        }
    },
    dismissPublishBump(e) {
        i.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
            messageId: e,
        });
    },
    permanentlyHidePublishBump(e) {
        i.h.dispatch({
            type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
            channelId: e,
        });
    },
};
