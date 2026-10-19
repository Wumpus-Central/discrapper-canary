n.d(t, {
    Bd: () => b,
    Cd: () => L,
    El: () => U,
    Lj: () => N,
    Ml: () => R,
    OG: () => k,
    Q_: () => w,
    Sc: () => f,
    UA: () => p,
    Z_: () => h,
    _4: () => g,
    _Z: () => O,
    ad: () => y,
    bh: () => v,
    hT: () => I,
    jC: () => D,
    jh: () => M,
    jr: () => T,
    pO: () => C,
    py: () => S,
    rH: () => G,
    ri: () => P,
    sB: () => m,
    zd: () => x,
});
var i = n(666860),
    r = n(332456),
    a = n(806411),
    s = n(973854),
    l = n(734057),
    o = n(31717),
    d = n(174459),
    c = n(723702),
    u = n(969043),
    _ = n(768953),
    E = n(935505),
    A = n(652215);
function h(e) {
    let { guildId: t, channelId: n, sessionId: r, postIds: a, additionalTimes: s } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, E.fO)({ channelId: n, sessionId: r }),
        guild_id: t,
        channel_id: n,
        post_ids: a,
        additional_seen_time_millis: s,
    });
}
function f(e) {
    let { guildId: t, channelId: n, numSearchResults: r } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_SEARCHED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: r,
    });
}
function I(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function p(e) {
    let { guildId: t, channelId: n, tagId: r, filterTagIds: a, added: s, location: l } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: r,
        filter_tag_ids: a,
        added: s,
        location: l,
    });
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function m(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function g(e) {
    let { guildId: t, channelId: n } = e,
        r = l.A.getChannel(n);
    if (null == r) return;
    let a = o.A.getThreadSettings(n),
        s = r.template?.trim(),
        d = o.A.getDraft(n, o.C.FirstThreadMessage),
        c = null == d || 0 === d.length || d?.trim() === s,
        u = a?.appliedTags == null || a?.appliedTags?.size === 0,
        _ = a?.name == null || a?.name?.trim()?.length === 0;
    (c && u && _) ||
        i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, E.fO)({ channelId: n }),
            guild_id: t,
            channel_id: n,
            applied_tag_ids: (0, E.au)(n),
            num_attachments: (0, E.d1)(n),
        });
}
function S(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function N(e) {
    let { guildId: t, channelId: n, postId: r, applicationId: a, voiceChatEnabled: s } = e;
    function l() {
        i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_POST_CREATED, {
            ...(0, E.$L)({ channelId: r }),
            guild_id: t,
            channel_id: n,
            application_id: a,
            voice_chat_enabled: s,
        });
    }
    u.A.isLoading(r) ? u.A.addConditionalChangeListener(() => !!u.A.isLoading(r) || (l(), !1)) : l();
}
function C(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_SCROLLED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function O(e) {
    let { guildId: t, channelId: n, numArchivedThreads: r, hasMoreThreads: a, filterTagIds: s, sortOrder: o } = e;
    d.default.track(A.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.H$)(t),
        ...(0, i.dI)(l.A.getChannel(n)),
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: r,
        num_active_threads: (0, E.io)(t, n),
        has_more_threads: a,
        filter_tag_ids: s,
        sort_order: o,
    });
}
function R(e) {
    let { guildId: t, channelId: n, postId: r, location: a } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, E.$L)({ channelId: r }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != _.A.getSearchResults(n),
        location: a,
    });
}
function L(e) {
    let { guildId: t, channelId: n, sortOrder: r } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, E.kL)(r),
        sort_order: r,
        forum_channel_sort_order: r,
    });
}
function y(e) {
    let { guildId: t, channelId: n, forumLayout: r } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: r,
    });
}
function D(e) {
    let { postId: t, location: n } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_POST_LINK_COPIED, { forum_post_id: t, location: n });
}
function v(e) {
    let { onboardingCTA: t } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function b(e) {
    let { forumDemoId: t } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function M(e) {
    let { added: t } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function P(e) {
    let { isMobile: t } = e;
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function U() {
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function w() {
    i.Ay.trackWithMetadata(A.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function G(e) {
    (i.Ay.trackWithMetadata(A.HAw.CHANNEL_OPENED, {
        ...(0, i.H$)(e.guild_id),
        ...(0, i.dI)(e),
        ...(0, r.C)(e, !0),
        ...(0, a.q)(e.id),
        channel_view: "Split View",
        platform: (0, c.getPlatform)(),
    }),
        (0, s.A)({ channelId: e.id }));
}
function x() {
    i.Ay.trackWithMetadata(A.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: A.JJy.CHANNEL_WELCOME_CTA },
    });
}
function k(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(A.HAw.THREAD_CREATION_STARTED, {
        ...(0, r.C)(l.A.getChannel(n)),
        channel_id: n,
        guild_id: t,
    });
}
