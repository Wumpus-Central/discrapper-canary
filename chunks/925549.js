n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    updateChannelDimensions(e, t, n, r, a) {
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'UPDATE_CHANNEL_DIMENSIONS',
                channelId: e,
                scrollTop: t,
                scrollHeight: n,
                offsetHeight: r
            }),
                null != a && a();
        });
    },
    updateChannelListScroll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        i.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTop: t,
            channelIds: n
        });
    },
    channelListScrollTo(e, t) {
        i.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTo: t,
            channelIds: []
        });
    },
    clearChannelListScrollTo(e) {
        i.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTo: null,
            channelIds: []
        });
    },
    clearChannelDimensions(e, t) {
        this.updateChannelDimensions(e, null, null, null, t);
    },
    updateGuildListScrollTo(e) {
        i.Z.dispatch({
            type: 'UPDATE_GUILD_LIST_DIMENSIONS',
            scrollTop: e
        });
    }
};
