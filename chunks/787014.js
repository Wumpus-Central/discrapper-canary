n.d(t, {
    S1: function () {
        return s;
    },
    pW: function () {
        return N;
    },
    wk: function () {
        return c;
    },
    xv: function () {
        return E;
    },
    zc: function () {
        return _;
    },
    zz: function () {
        return S;
    }
}),
    n(789020);
var i = n(544891),
    r = n(570140),
    l = n(408987),
    u = n(346479);
n(388610);
var a = n(592125),
    o = n(37234),
    d = n(981631);
function s(e, t, n) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_INIT',
        channelId: e,
        location: t,
        subsection: n
    });
}
function E() {
    r.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' });
}
function _(e) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_SET_SECTION',
        section: e
    });
}
function N(e) {
    let { name: t, type: n, topic: i, bitrate: l, userLimit: u, nsfw: a, flags: o, rateLimitPerUser: d, defaultThreadRateLimitPerUser: s, defaultAutoArchiveDuration: E, template: _, defaultReactionEmoji: N, rtcRegion: c, videoQualityMode: S, autoArchiveDuration: T, locked: I, invitable: h, availableTags: C, defaultSortOrder: f, defaultForumLayout: m, iconEmoji: A, themeColor: p } = e;
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_UPDATE',
        name: t,
        channelType: n,
        topic: i,
        bitrate: l,
        userLimit: u,
        nsfw: a,
        flags: o,
        rateLimitPerUser: d,
        defaultThreadRateLimitPerUser: s,
        defaultAutoArchiveDuration: E,
        template: _,
        defaultReactionEmoji: N,
        rtcRegion: c,
        videoQualityMode: S,
        autoArchiveDuration: T,
        locked: I,
        invitable: h,
        availableTags: C,
        defaultSortOrder: f,
        defaultForumLayout: m,
        iconEmoji: A,
        themeColor: p
    });
}
async function c(e, t) {
    let { name: n, type: o, position: s, topic: E, bitrate: _, userLimit: N, nsfw: c, flags: S, permissionOverwrites: T, rateLimitPerUser: I, defaultThreadRateLimitPerUser: h, defaultAutoArchiveDuration: C, template: f, defaultReactionEmoji: m, rtcRegion: A, videoQualityMode: p, autoArchiveDuration: L, locked: v, invitable: g, availableTags: y, defaultSortOrder: Z, defaultForumLayout: O, iconEmoji: G, themeColor: H } = t,
        U = a.Z.getChannel(e);
    return (
        r.Z.dispatch({ type: 'CHANNEL_SETTINGS_SUBMIT' }),
        await u.Z.unarchiveThreadIfNecessary(e),
        i.tn
            .patch({
                url: d.ANM.CHANNEL(e),
                body: {
                    name: n,
                    type: o,
                    position: s,
                    topic: E,
                    bitrate: _,
                    user_limit: N,
                    nsfw: c,
                    flags: S,
                    permission_overwrites: T,
                    rate_limit_per_user: I,
                    default_thread_rate_limit_per_user: h,
                    default_auto_archive_duration: C,
                    template: f,
                    rtc_region: A,
                    video_quality_mode: p,
                    auto_archive_duration: L,
                    locked: v,
                    invitable: g,
                    default_reaction_emoji:
                        null != m
                            ? {
                                  emoji_id: null == m ? void 0 : m.emojiId,
                                  emoji_name: null == m ? void 0 : m.emojiName
                              }
                            : null === m
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
                    r.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_SUCCESS',
                        channelId: e
                    });
                    let n = null == U ? void 0 : U.getGuildId();
                    return null != n && !(null == U ? void 0 : U.isThread()) && l.Z.checkGuildTemplateDirty(n), t;
                },
                (e) => (
                    r.Z.dispatch({
                        type: 'CHANNEL_SETTINGS_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e
                )
            )
    );
}
function S(e) {
    let t = a.Z.getChannel(e);
    i.tn
        .del({
            url: d.ANM.CHANNEL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(() => {
            let e = null == t ? void 0 : t.getGuildId();
            null != e && !(null == t ? void 0 : t.isThread()) && l.Z.checkGuildTemplateDirty(e), E();
        });
}
t.ZP = {
    init: s,
    open: function (e, t, n) {
        s(e, t, n), (0, o.jN)(d.S9g.CHANNEL_SETTINGS);
    },
    close: E,
    setSection: _,
    selectPermissionOverwrite: function (e) {
        r.Z.dispatch({
            type: 'CHANNEL_SETTINGS_OVERWRITE_SELECT',
            overwriteId: e
        });
    },
    updateChannel: N,
    saveChannel: c,
    deleteChannel: S,
    updateVoiceChannelStatus: function (e, t) {
        return i.tn.put({
            url: d.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
            body: { status: t },
            rejectWithError: !1
        });
    },
    removeLinkedLobby: function (e) {
        return i.tn.del({
            url: d.ANM.CHANNEL_LINKED_LOBBY(e),
            rejectWithError: !0
        });
    }
};
