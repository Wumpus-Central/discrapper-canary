n.d(t, { A: () => r });
var i = n(636537),
    l = n(228366),
    a = n(652215);
let r = {
    createChannelFollower: (e, t) =>
        i.Bo.post({
            url: a.Rsh.CHANNEL_FOLLOWERS(t),
            body: { webhook_channel_id: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async fetchChannelFollowerStats(e) {
        l.h.dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_START" });
        try {
            let t = await i.Bo.get({
                url: a.Rsh.CHANNEL_FOLLOWER_STATS(e),
                body: { channel_id: e },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS", stats: t.body, channelId: e });
        } catch (t) {
            l.h.dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE", channelId: e });
        }
    },
    dismissPublishBump(e) {
        l.h.dispatch({ type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId: e });
    },
    permanentlyHidePublishBump(e) {
        l.h.dispatch({ type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId: e });
    },
};
