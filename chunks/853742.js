"use strict";
n.d(t, {
    Bd: () => D,
    Cd: () => v,
    El: () => P,
    Lj: () => S,
    Md: () => w,
    Ml: () => C,
    OG: () => G,
    Q_: () => x,
    Sc: () => p,
    UA: () => m,
    Z_: () => h,
    _4: () => I,
    _Z: () => y,
    ad: () => O,
    bh: () => b,
    hT: () => E,
    jC: () => R,
    jh: () => L,
    jr: () => g,
    pO: () => N,
    py: () => T,
    rH: () => U,
    ri: () => M,
    sB: () => A,
    zd: () => k,
});
var i = n(95561),
    r = n(332456),
    s = n(973854),
    a = n(734057),
    o = n(31717),
    l = n(174459),
    u = n(723702),
    c = n(969043),
    d = n(768953),
    _ = n(935505),
    f = n(652215);
function h(e) {
    let { guildId: t, channelId: n, sessionId: r, postIds: s, additionalTimes: a } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, _.fO)({ channelId: n, sessionId: r }),
        guild_id: t,
        channel_id: n,
        post_ids: s,
        additional_seen_time_millis: a,
    });
}
function p(e) {
    let { guildId: t, channelId: n, numSearchResults: r } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_SEARCHED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: r,
    });
}
function E(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function m(e) {
    let { guildId: t, channelId: n, tagId: r, filterTagIds: s, added: a, location: o } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: r,
        filter_tag_ids: s,
        added: a,
        location: o,
    });
}
function g(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function A(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function I(e) {
    let { guildId: t, channelId: n } = e,
        r = a.A.getChannel(n);
    if (null == r) return;
    let s = o.A.getThreadSettings(n),
        l = r.template?.trim(),
        u = o.A.getDraft(n, o.C.FirstThreadMessage),
        c = null == u || 0 === u.length || u?.trim() === l,
        d = s?.appliedTags == null || s?.appliedTags?.size === 0,
        h = s?.name == null || s?.name?.trim()?.length === 0;
    (c && d && h) ||
        i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, _.fO)({ channelId: n }),
            guild_id: t,
            channel_id: n,
            applied_tag_ids: (0, _.au)(n),
            num_attachments: (0, _.d1)(n),
        });
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function S(e) {
    let { guildId: t, channelId: n, postId: r } = e;
    function s() {
        i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_POST_CREATED, {
            ...(0, _.$L)({ channelId: r }),
            guild_id: t,
            channel_id: n,
        });
    }
    c.A.isLoading(r) ? c.A.addConditionalChangeListener(() => !!c.A.isLoading(r) || (s(), !1)) : s();
}
function N(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_SCROLLED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function y(e) {
    let { guildId: t, channelId: n, numArchivedThreads: r, hasMoreThreads: s, filterTagIds: o, sortOrder: u } = e;
    l.default.track(f.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.H$)(t),
        ...(0, i.dI)(a.A.getChannel(n)),
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: r,
        num_active_threads: (0, _.io)(t, n),
        has_more_threads: s,
        filter_tag_ids: o,
        sort_order: u,
    });
}
function C(e) {
    let { guildId: t, channelId: n, postId: r, location: s } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, _.$L)({ channelId: r }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != d.A.getSearchResults(n),
        location: s,
    });
}
function v(e) {
    let { guildId: t, channelId: n, sortOrder: r } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, _.kL)(r),
        sort_order: r,
        forum_channel_sort_order: r,
    });
}
function O(e) {
    let { guildId: t, channelId: n, forumLayout: r } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, _.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: r,
    });
}
function R(e) {
    let { postId: t, location: n } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_POST_LINK_COPIED, { forum_post_id: t, location: n });
}
function b(e) {
    let { onboardingCTA: t } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function D(e) {
    let { forumDemoId: t } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function L(e) {
    let { added: t } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function w(e) {
    let { readGuideCta: t } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function M(e) {
    let { isMobile: t } = e;
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function P() {
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function x() {
    i.Ay.trackWithMetadata(f.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function U(e) {
    i.Ay.trackWithMetadata(f.HAw.CHANNEL_OPENED, {
        ...(0, i.H$)(e.guild_id),
        ...(0, i.dI)(e),
        ...(0, r.C)(e, !0),
        ...(0, i.qL)(e.id),
        channel_view: "Split View",
        platform: (0, u.getPlatform)(),
    }),
        (0, s.A)({ channelId: e.id });
}
function k() {
    i.Ay.trackWithMetadata(f.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: f.JJy.CHANNEL_WELCOME_CTA },
    });
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(f.HAw.THREAD_CREATION_STARTED, {
        ...(0, r.C)(a.A.getChannel(n)),
        channel_id: n,
        guild_id: t,
    });
}
