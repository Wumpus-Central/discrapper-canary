n.d(t, {
    S1: () => u,
    ZP: () => g,
    pW: () => p,
    wk: () => h,
    xv: () => f,
    zc: () => _,
    zz: () => m
}),
    n(789020);
var r = n(544891),
    i = n(570140),
    o = n(408987);
n(777639);
var a = n(346479);
n(388610);
var s = n(592125),
    l = n(37234),
    c = n(981631);
function u(e, t, n) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_INIT',
        channelId: e,
        location: t,
        subsection: n
    });
}
function d(e, t, n) {
    u(e, t, n), (0, l.jN)(c.S9g.CHANNEL_SETTINGS);
}
function f() {
    i.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' });
}
function _(e) {
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_SET_SECTION',
        section: e
    });
}
function p(e) {
    let { name: t, type: n, topic: r, bitrate: o, userLimit: a, nsfw: s, flags: l, rateLimitPerUser: c, defaultThreadRateLimitPerUser: u, defaultAutoArchiveDuration: d, template: f, defaultReactionEmoji: _, rtcRegion: p, videoQualityMode: h, autoArchiveDuration: m, locked: g, invitable: E, availableTags: b, defaultSortOrder: y, defaultForumLayout: v, iconEmoji: O, themeColor: I } = e;
    i.Z.dispatch({
        type: 'CHANNEL_SETTINGS_UPDATE',
        name: t,
        channelType: n,
        topic: r,
        bitrate: o,
        userLimit: a,
        nsfw: s,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        defaultAutoArchiveDuration: d,
        template: f,
        defaultReactionEmoji: _,
        rtcRegion: p,
        videoQualityMode: h,
        autoArchiveDuration: m,
        locked: g,
        invitable: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: v,
        iconEmoji: O,
        themeColor: I
    });
}
async function h(e, t) {
    let { name: n, type: l, position: u, topic: d, bitrate: f, userLimit: _, nsfw: p, flags: h, permissionOverwrites: m, rateLimitPerUser: g, defaultThreadRateLimitPerUser: E, defaultAutoArchiveDuration: b, template: y, defaultReactionEmoji: v, rtcRegion: O, videoQualityMode: I, autoArchiveDuration: S, locked: T, invitable: N, availableTags: A, defaultSortOrder: C, defaultForumLayout: R, iconEmoji: P, themeColor: w } = t,
        D = s.Z.getChannel(e);
    return (
        i.Z.dispatch({ type: 'CHANNEL_SETTINGS_SUBMIT' }),
        await a.Z.unarchiveThreadIfNecessary(e),
        r.tn
            .patch({
                url: c.ANM.CHANNEL(e),
                body: {
                    name: n,
                    type: l,
                    position: u,
                    topic: d,
                    bitrate: f,
                    user_limit: _,
                    nsfw: p,
                    flags: h,
                    permission_overwrites: m,
                    rate_limit_per_user: g,
                    default_thread_rate_limit_per_user: E,
                    default_auto_archive_duration: b,
                    template: y,
                    rtc_region: O,
                    video_quality_mode: I,
                    auto_archive_duration: S,
                    locked: T,
                    invitable: N,
                    default_reaction_emoji:
                        null != v
                            ? {
                                  emoji_id: null == v ? void 0 : v.emojiId,
                                  emoji_name: null == v ? void 0 : v.emojiName
                              }
                            : null === v
                              ? null
                              : void 0,
                    available_tags:
                        null == A
                            ? void 0
                            : A.map((e) => ({
                                  id: e.id,
                                  name: e.name,
                                  emoji_id: e.emojiId,
                                  emoji_name: e.emojiName,
                                  moderated: e.moderated
                              })),
                    default_sort_order: C,
                    default_forum_layout: R,
                    icon_emoji:
                        null != P
                            ? {
                                  id: P.id,
                                  name: P.name
                              }
                            : null === P
                              ? null
                              : void 0,
                    theme_color: w
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
                    let n = null == D ? void 0 : D.getGuildId();
                    return null == n || (null == D ? void 0 : D.isThread()) || o.Z.checkGuildTemplateDirty(n), t;
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
function m(e) {
    let t = s.Z.getChannel(e);
    r.tn
        .del({
            url: c.ANM.CHANNEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null == e || (null == t ? void 0 : t.isThread()) || o.Z.checkGuildTemplateDirty(e), f();
        });
}
let g = {
    init: u,
    open: d,
    close: f,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        i.Z.dispatch({
            type: 'CHANNEL_SETTINGS_OVERWRITE_SELECT',
            overwriteId: e
        });
    },
    updateChannel: p,
    saveChannel: h,
    deleteChannel: m,
    updateVoiceChannelStatus: function (e, t) {
        return r.tn.put({
            url: c.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1
        });
    },
    removeLinkedLobby: function (e) {
        return r.tn.del({
            url: c.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0
        });
    }
};
