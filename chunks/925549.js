n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    updateChannelDimensions(e, t, n, i, o) {
        r.Z.wait(() => {
            r.Z.dispatch({
                type: 'UPDATE_CHANNEL_DIMENSIONS',
                channelId: e,
                scrollTop: t,
                scrollHeight: n,
                offsetHeight: i
            }),
                null != o && o();
        });
    },
    updateChannelListScroll(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        r.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTop: t,
            channelIds: n
        });
    },
    channelListScrollTo(e, t) {
        r.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTo: t,
            channelIds: []
        });
    },
    clearChannelListScrollTo(e) {
        r.Z.dispatch({
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
        r.Z.dispatch({
            type: 'UPDATE_GUILD_LIST_DIMENSIONS',
            scrollTop: e
        });
    }
};
