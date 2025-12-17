n.d(t, {
    S1: () => u,
    ZP: () => g,
    pW: () => _,
    wk: () => m,
    xv: () => f,
    zc: () => p,
    zz: () => h,
}),
    n(997841);
var r = n(544891),
    i = n(570140),
    a = n(408987);
n(777639);
var o = n(346479);
n(388610);
var s = n(592125),
    l = n(37234),
    c = n(981631);
function u(e, t, n) {
    i.Z.dispatch({
        type: "CHANNEL_SETTINGS_INIT",
        channelId: e,
        location: t,
        subsection: n,
    });
}
function d(e, t, n) {
    u(e, t, n), (0, l.jN)(c.S9g.CHANNEL_SETTINGS);
}
function f() {
    i.Z.dispatch({ type: "CHANNEL_SETTINGS_CLOSE" });
}
function p(e) {
    i.Z.dispatch({
        type: "CHANNEL_SETTINGS_SET_SECTION",
        section: e,
    });
}
function _(e) {
    let {
        name: t,
        type: n,
        topic: r,
        bitrate: a,
        userLimit: o,
        nsfw: s,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        defaultAutoArchiveDuration: d,
        template: f,
        defaultReactionEmoji: p,
        rtcRegion: _,
        videoQualityMode: m,
        autoArchiveDuration: h,
        locked: g,
        invitable: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: v,
        iconEmoji: S,
        themeColor: I,
    } = e;
    i.Z.dispatch({
        type: "CHANNEL_SETTINGS_UPDATE",
        name: t,
        channelType: n,
        topic: r,
        bitrate: a,
        userLimit: o,
        nsfw: s,
        flags: l,
        rateLimitPerUser: c,
        defaultThreadRateLimitPerUser: u,
        defaultAutoArchiveDuration: d,
        template: f,
        defaultReactionEmoji: p,
        rtcRegion: _,
        videoQualityMode: m,
        autoArchiveDuration: h,
        locked: g,
        invitable: E,
        availableTags: b,
        defaultSortOrder: y,
        defaultForumLayout: O,
        defaultTagSetting: v,
        iconEmoji: S,
        themeColor: I,
    });
}
async function m(e, t) {
    let {
            name: n,
            type: l,
            position: u,
            topic: d,
            bitrate: f,
            userLimit: p,
            nsfw: _,
            flags: m,
            permissionOverwrites: h,
            rateLimitPerUser: g,
            defaultThreadRateLimitPerUser: E,
            defaultAutoArchiveDuration: b,
            template: y,
            defaultReactionEmoji: O,
            rtcRegion: v,
            videoQualityMode: S,
            autoArchiveDuration: I,
            locked: T,
            invitable: C,
            availableTags: A,
            defaultSortOrder: N,
            defaultForumLayout: P,
            defaultTagSetting: R,
            iconEmoji: w,
            themeColor: D,
        } = t,
        x = s.Z.getChannel(e);
    return (
        i.Z.dispatch({ type: "CHANNEL_SETTINGS_SUBMIT" }),
        await o.Z.unarchiveThreadIfNecessary(e),
        r.tn
            .patch({
                url: c.ANM.CHANNEL(e),
                body: {
                    name: n,
                    type: l,
                    position: u,
                    topic: d,
                    bitrate: f,
                    user_limit: p,
                    nsfw: _,
                    flags: m,
                    permission_overwrites: h,
                    rate_limit_per_user: g,
                    default_thread_rate_limit_per_user: E,
                    default_auto_archive_duration: b,
                    template: y,
                    rtc_region: v,
                    video_quality_mode: S,
                    auto_archive_duration: I,
                    locked: T,
                    invitable: C,
                    default_reaction_emoji:
                        null != O
                            ? {
                                  emoji_id: null == O ? void 0 : O.emojiId,
                                  emoji_name: null == O ? void 0 : O.emojiName,
                              }
                            : null === O
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
                                  moderated: e.moderated,
                              })),
                    default_sort_order: N,
                    default_forum_layout: P,
                    default_tag_setting: R,
                    icon_emoji:
                        null != w
                            ? {
                                  id: w.id,
                                  name: w.name,
                              }
                            : null === w
                              ? null
                              : void 0,
                    theme_color: D,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then(
                (t) => {
                    i.Z.dispatch({
                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                        channelId: e,
                    });
                    let n = null == x ? void 0 : x.getGuildId();
                    return null == n || (null == x ? void 0 : x.isThread()) || a.Z.checkGuildTemplateDirty(n), t;
                },
                (e) => (
                    i.Z.dispatch({
                        type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
                    e
                ),
            )
    );
}
async function h(e) {
    let t = s.Z.getChannel(e);
    await r.tn.del({
        url: c.ANM.CHANNEL(e),
        oldFormErrors: !0,
        rejectWithError: !0,
    });
    let n = null == t ? void 0 : t.getGuildId();
    null == n || (null == t ? void 0 : t.isThread()) || a.Z.checkGuildTemplateDirty(n), f();
}
let g = {
    init: u,
    open: d,
    close: f,
    setSection: p,
    selectPermissionOverwrite: function (e) {
        i.Z.dispatch({
            type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
            overwriteId: e,
        });
    },
    updateChannel: _,
    saveChannel: m,
    deleteChannel: h,
    updateVoiceChannelStatus: function (e, t) {
        return r.tn.put({
            url: c.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1,
        });
    },
    removeLinkedLobby: function (e) {
        return r.tn.del({
            url: c.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0,
        });
    },
};
