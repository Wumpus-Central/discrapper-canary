var i = r(570140);
n.Z = {
    updateChannelDimensions(e, n, r, a, o) {
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'UPDATE_CHANNEL_DIMENSIONS',
                channelId: e,
                scrollTop: n,
                scrollHeight: r,
                offsetHeight: a
            }),
                null != o && o();
        });
    },
    updateChannelListScroll(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        i.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTop: n,
            channelIds: r
        });
    },
    channelListScrollTo(e, n) {
        i.Z.dispatch({
            type: 'UPDATE_CHANNEL_LIST_DIMENSIONS',
            guildId: e,
            scrollTo: n,
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
    clearChannelDimensions(e, n) {
        this.updateChannelDimensions(e, null, null, null, n);
    },
    updateGuildListScrollTo(e) {
        i.Z.dispatch({
            type: 'UPDATE_GUILD_LIST_DIMENSIONS',
            scrollTop: e
        });
    }
};
