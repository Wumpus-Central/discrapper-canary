n.d(t, {
    S1: () => s,
    ZP: () => T,
    pW: () => N,
    wk: () => S,
    xv: () => E,
    zc: () => _,
    zz: () => c
}),
    n(789020);
var l = n(544891),
    i = n(570140),
    r = n(408987);
n(777639);
var u = n(346479);
n(388610);
var a = n(592125),
    o = n(37234),
    d = n(981631);
function s(e, t, n) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_INIT',
        channelId: e,
        location: t,
        subsection: n
    });
}
function E() {
    i.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' });
}
function _(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_SET_SECTION',
        section: e
    });
}
function N(e) {
    let { name: t, type: n, topic: l, bitrate: r, userLimit: u, nsfw: a, flags: o, rateLimitPerUser: d, defaultThreadRateLimitPerUser: s, defaultAutoArchiveDuration: E, template: _, defaultReactionEmoji: N, rtcRegion: S, videoQualityMode: c, autoArchiveDuration: T, locked: I, invitable: h, availableTags: C, defaultSortOrder: m, defaultForumLayout: f, iconEmoji: A, themeColor: p } = e;
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_UPDATE',
        name: t,
        channelType: n,
        topic: l,
        bitrate: r,
        userLimit: u,
        nsfw: a,
        flags: o,
        rateLimitPerUser: d,
        defaultThreadRateLimitPerUser: s,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: N,
        rtcRegion: S,
        videoQualityMode: c,
        autoArchiveDuration: T,
        locked: I,
        invitable: h,
        availableTags: C,
        defaultSortOrder: m,
        defaultForumLayout: f,
        iconEmoji: A,
        themeColor: p
    });
}
async function S(e, t) {
    let { name: n, type: o, position: s, topic: E, bitrate: _, userLimit: N, nsfw: S, flags: c, permissionOverwrites: T, rateLimitPerUser: I, defaultThreadRateLimitPerUser: h, defaultAutoArchiveDuration: C, template: m, defaultReactionEmoji: f, rtcRegion: A, videoQualityMode: p, autoArchiveDuration: L, locked: v, invitable: g, availableTags: y, defaultSortOrder: Z, defaultForumLayout: O, iconEmoji: G, themeColor: H } = t,
        U = a.Z.getChannel(e);
    return (
        i.Z.dispatch({ type: 'CHANNEL_SETTINGS_SUBMIT' }),
        await u.Z.unarchiveThreadIfNecessary(e),
        l.tn
            .patch({
                url: d.ANM.CHANNEL(e),
                body: {
                    name: n,
                    type: o,
                    position: s,
                    topic: E,
                    bitrate: _,
                    user_limit: N,
                    nsfw: S,
                    flags: c,
                    permission_overwrites: T,
                    rate_limit_per_user: I,
                    default_thread_rate_limit_per_user: h,
                    default_auto_archive_duration: C,
                    template: m,
                    rtc_region: A,
                    video_quality_mode: p,
                    auto_archive_duration: L,
                    locked: v,
                    invitable: g,
                    default_reaction_emoji:
                        null != f
                            ? {
                                  emoji_id: null == f ? void 0 : f.emojiId,
                                  emoji_name: null == f ? void 0 : f.emojiName
                              }
                            : null === f
                              ? null
                              : void 0,
                    available_tags:
                        null == y
                            ? void 0
                            : y.map((e) => ({
                                  id: e.id,
                                  name: e.name,
                                  emoji_id: e.emojiId,
                                  emoji_name: e.emojiName,
                                  moderated: e.moderated
                              })),
                    default_sort_order: Z,
                    default_forum_layout: O,
                    icon_emoji:
                        null != G
                            ? {
                                  id: G.id,
                                  name: G.name
                              }
                            : null === G
                              ? null
                              : void 0,
                    theme_color: H
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) => {
                    i.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_SUCCESS',
                        channelId: e
                    });
                    let n = null == U ? void 0 : U.getGuildId();
                    return null == n || (null == U ? void 0 : U.isThread()) || r.Z.checkGuildTemplateDirty(n), t;
                },
                (e) => (
                    i.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e
                )
            )
    );
}
function c(e) {
    let t = a.Z.getChannel(e);
    l.tn
        .del({
            url: d.ANM.CHANNEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null == e || (null == t ? void 0 : t.isThread()) || r.Z.checkGuildTemplateDirty(e), E();
        });
}
let T = {
    init: s,
    open: function (e, t, n) {
        s(e, t, n), (0, o.jN)(d.S9g.CHANNEL_SETTINGS);
    },
    close: E,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        i.Z.dispatch({
            type: 'CHANNEL_SETTINGS_OVERWRITE_SELECT',
            overwriteId: e
        });
    },
    updateChannel: N,
    saveChannel: S,
    deleteChannel: c,
    updateVoiceChannelStatus: function (e, t) {
        return l.tn.put({
            url: d.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1
        });
    },
    removeLinkedLobby: function (e) {
        return l.tn.del({
            url: d.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0
        });
    }
};
