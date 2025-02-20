n.d(t, {
    S1: () => d,
    ZP: () => T,
    pW: () => _,
    wk: () => N,
    xv: () => c,
    zc: () => E,
    zz: () => S
}),
    n(789020);
var r = n(544891),
    l = n(570140),
    i = n(408987);
n(777639);
var u = n(346479);
n(388610);
var o = n(592125),
    a = n(37234),
    s = n(981631);
function d(e, t, n) {
    l.Z.dispatch({
        type: 'CHANNEL_SETTINGS_INIT',
        channelId: e,
        location: t,
        subsection: n
    });
}
function c() {
    l.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' });
}
function E(e) {
    l.Z.dispatch({
        type: 'CHANNEL_SETTINGS_SET_SECTION',
        section: e
    });
}
function _(e) {
    let { name: t, type: n, topic: r, bitrate: i, userLimit: u, nsfw: o, flags: a, rateLimitPerUser: s, defaultThreadRateLimitPerUser: d, defaultAutoArchiveDuration: c, template: E, defaultReactionEmoji: _, rtcRegion: N, videoQualityMode: S, autoArchiveDuration: T, locked: f, invitable: h, availableTags: I, defaultSortOrder: p, defaultForumLayout: C, iconEmoji: m, themeColor: A } = e;
    l.Z.dispatch({
        type: 'CHANNEL_SETTINGS_UPDATE',
        name: t,
        channelType: n,
        topic: r,
        bitrate: i,
        userLimit: u,
        nsfw: o,
        flags: a,
        rateLimitPerUser: s,
        defaultThreadRateLimitPerUser: d,
        defaultAutoArchiveDuration: c,
        template: E,
        defaultReactionEmoji: _,
        rtcRegion: N,
        videoQualityMode: S,
        autoArchiveDuration: T,
        locked: f,
        invitable: h,
        availableTags: I,
        defaultSortOrder: p,
        defaultForumLayout: C,
        iconEmoji: m,
        themeColor: A
    });
}
async function N(e, t) {
    let { name: n, type: a, position: d, topic: c, bitrate: E, userLimit: _, nsfw: N, flags: S, permissionOverwrites: T, rateLimitPerUser: f, defaultThreadRateLimitPerUser: h, defaultAutoArchiveDuration: I, template: p, defaultReactionEmoji: C, rtcRegion: m, videoQualityMode: A, autoArchiveDuration: y, locked: O, invitable: v, availableTags: L, defaultSortOrder: g, defaultForumLayout: b, iconEmoji: j, themeColor: Z } = t,
        P = o.Z.getChannel(e);
    return (
        l.Z.dispatch({ type: 'CHANNEL_SETTINGS_SUBMIT' }),
        await u.Z.unarchiveThreadIfNecessary(e),
        r.tn
            .patch({
                url: s.ANM.CHANNEL(e),
                body: {
                    name: n,
                    type: a,
                    position: d,
                    topic: c,
                    bitrate: E,
                    user_limit: _,
                    nsfw: N,
                    flags: S,
                    permission_overwrites: T,
                    rate_limit_per_user: f,
                    default_thread_rate_limit_per_user: h,
                    default_auto_archive_duration: I,
                    template: p,
                    rtc_region: m,
                    video_quality_mode: A,
                    auto_archive_duration: y,
                    locked: O,
                    invitable: v,
                    default_reaction_emoji:
                        null != C
                            ? {
                                  emoji_id: null == C ? void 0 : C.emojiId,
                                  emoji_name: null == C ? void 0 : C.emojiName
                              }
                            : null === C
                              ? null
                              : void 0,
                    available_tags:
                        null == L
                            ? void 0
                            : L.map((e) => ({
                                  id: e.id,
                                  name: e.name,
                                  emoji_id: e.emojiId,
                                  emoji_name: e.emojiName,
                                  moderated: e.moderated
                              })),
                    default_sort_order: g,
                    default_forum_layout: b,
                    icon_emoji:
                        null != j
                            ? {
                                  id: j.id,
                                  name: j.name
                              }
                            : null === j
                              ? null
                              : void 0,
                    theme_color: Z
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) => {
                    l.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_SUCCESS',
                        channelId: e
                    });
                    let n = null == P ? void 0 : P.getGuildId();
                    return null == n || (null == P ? void 0 : P.isThread()) || i.Z.checkGuildTemplateDirty(n), t;
                },
                (e) => (
                    l.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e
                )
            )
    );
}
function S(e) {
    let t = o.Z.getChannel(e);
    r.tn
        .del({
            url: s.ANM.CHANNEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null == e || (null == t ? void 0 : t.isThread()) || i.Z.checkGuildTemplateDirty(e), c();
        });
}
let T = {
    init: d,
    open: function (e, t, n) {
        d(e, t, n), (0, a.jN)(s.S9g.CHANNEL_SETTINGS);
    },
    close: c,
    setSection: E,
    selectPermissionOverwrite: function (e) {
        l.Z.dispatch({
            type: 'CHANNEL_SETTINGS_OVERWRITE_SELECT',
            overwriteId: e
        });
    },
    updateChannel: _,
    saveChannel: N,
    deleteChannel: S,
    updateVoiceChannelStatus: function (e, t) {
        return r.tn.put({
            url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1
        });
    },
    removeLinkedLobby: function (e) {
        return r.tn.del({
            url: s.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0
        });
    }
};
