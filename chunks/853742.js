"use strict";
n.d(t, {
    Bd: () => v,
    Cd: () => R,
    El: () => P,
    Lj: () => S,
    Ml: () => O,
    OG: () => x,
    Q_: () => U,
    Sc: () => h,
    UA: () => f,
    Z_: () => A,
    _4: () => m,
    _Z: () => C,
    ad: () => L,
    bh: () => D,
    hT: () => I,
    jC: () => y,
    jh: () => b,
    jr: () => p,
    pO: () => N,
    py: () => g,
    rH: () => w,
    ri: () => M,
    sB: () => T,
    zd: () => G,
});
var i = n(95561),
    r = n(332456),
    a = n(973854),
    s = n(734057),
    l = n(31717),
    o = n(174459),
    d = n(723702),
    c = n(969043),
    u = n(768953),
    _ = n(935505),
    E = n(652215);
function A(e) {
    let { guildId: t, channelId: n, sessionId: r, postIds: a, additionalTimes: s } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, _.fO)({ channelId: n, sessionId: r }),
        guild_id: t,
        channel_id: n,
        post_ids: a,
        additional_seen_time_millis: s,
    });
}
function h(e) {
    let { guildId: t, channelId: n, numSearchResults: r } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_SEARCHED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: r,
    });
}
function I(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function f(e) {
    let { guildId: t, channelId: n, tagId: r, filterTagIds: a, added: s, location: l } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: r,
        filter_tag_ids: a,
        added: s,
        location: l,
    });
}
function p(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function m(e) {
    let { guildId: t, channelId: n } = e,
        r = s.A.getChannel(n);
    if (null == r) return;
    let a = l.A.getThreadSettings(n),
        o = r.template?.trim(),
        d = l.A.getDraft(n, l.C.FirstThreadMessage),
        c = null == d || 0 === d.length || d?.trim() === o,
        u = a?.appliedTags == null || a?.appliedTags?.size === 0,
        A = a?.name == null || a?.name?.trim()?.length === 0;
    (c && u && A) ||
        i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, _.fO)({ channelId: n }),
            guild_id: t,
            channel_id: n,
            applied_tag_ids: (0, _.au)(n),
            num_attachments: (0, _.d1)(n),
        });
}
function g(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function S(e) {
    let { guildId: t, channelId: n, postId: r, applicationId: a, voiceChatEnabled: s } = e;
    function l() {
        i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_POST_CREATED, {
            ...(0, _.$L)({ channelId: r }),
            guild_id: t,
            channel_id: n,
            application_id: a,
            voice_chat_enabled: s,
        });
    }
    c.A.isLoading(r) ? c.A.addConditionalChangeListener(() => !!c.A.isLoading(r) || (l(), !1)) : l();
}
function N(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_SCROLLED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function C(e) {
    let { guildId: t, channelId: n, numArchivedThreads: r, hasMoreThreads: a, filterTagIds: l, sortOrder: d } = e;
    o.default.track(E.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.H$)(t),
        ...(0, i.dI)(s.A.getChannel(n)),
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: r,
        num_active_threads: (0, _.io)(t, n),
        has_more_threads: a,
        filter_tag_ids: l,
        sort_order: d,
    });
}
function O(e) {
    let { guildId: t, channelId: n, postId: r, location: a } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, _.$L)({ channelId: r }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != u.A.getSearchResults(n),
        location: a,
    });
}
function R(e) {
    let { guildId: t, channelId: n, sortOrder: r } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, _.kL)(r),
        sort_order: r,
        forum_channel_sort_order: r,
    });
}
function L(e) {
    let { guildId: t, channelId: n, forumLayout: r } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: r,
    });
}
function y(e) {
    let { postId: t, location: n } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_POST_LINK_COPIED, { forum_post_id: t, location: n });
}
function D(e) {
    let { onboardingCTA: t } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function v(e) {
    let { forumDemoId: t } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function b(e) {
    let { added: t } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function M(e) {
    let { isMobile: t } = e;
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function P() {
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function U() {
    i.Ay.trackWithMetadata(E.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function w(e) {
    i.Ay.trackWithMetadata(E.HAw.CHANNEL_OPENED, {
        ...(0, i.H$)(e.guild_id),
        ...(0, i.dI)(e),
        ...(0, r.C)(e, !0),
        ...(0, i.qL)(e.id),
        channel_view: "Split View",
        platform: (0, d.getPlatform)(),
    }),
        (0, a.A)({ channelId: e.id });
}
function G() {
    i.Ay.trackWithMetadata(E.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: E.JJy.CHANNEL_WELCOME_CTA },
    });
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(E.HAw.THREAD_CREATION_STARTED, {
        ...(0, r.C)(s.A.getChannel(n)),
        channel_id: n,
        guild_id: t,
    });
}
