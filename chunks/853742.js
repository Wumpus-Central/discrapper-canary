n.d(t, {
    Bd: () => M,
    Cd: () => g,
    El: () => y,
    Lj: () => m,
    Md: () => U,
    Ml: () => R,
    OG: () => V,
    Q_: () => G,
    Sc: () => I,
    UA: () => h,
    Z_: () => A,
    _4: () => f,
    _Z: () => C,
    ad: () => L,
    bh: () => b,
    hT: () => T,
    jC: () => D,
    jh: () => P,
    jr: () => S,
    pO: () => O,
    py: () => p,
    rH: () => w,
    ri: () => v,
    sB: () => N,
    zd: () => x,
});
var i = n(58149),
    a = n(332456),
    r = n(973854),
    s = n(734057),
    l = n(31717),
    o = n(954571),
    d = n(723702),
    c = n(969043),
    _ = n(768953),
    E = n(759735),
    u = n(652215);
function A(e) {
    let { guildId: t, channelId: n, sessionId: a, postIds: r, additionalTimes: s } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, E.fO)({ channelId: n, sessionId: a }),
        guild_id: t,
        channel_id: n,
        post_ids: r,
        additional_seen_time_millis: s,
    });
}
function I(e) {
    let { guildId: t, channelId: n, numSearchResults: a } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEARCHED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: a,
    });
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function h(e) {
    let { guildId: t, channelId: n, tagId: a, filterTagIds: r, added: s, location: l } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: a,
        filter_tag_ids: r,
        added: s,
        location: l,
    });
}
function S(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function N(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function f(e) {
    let { guildId: t, channelId: n } = e,
        a = s.A.getChannel(n);
    if (null == a) return;
    let r = l.A.getThreadSettings(n),
        o = a.template?.trim(),
        d = l.A.getDraft(n, l.C.FirstThreadMessage),
        c = null == d || 0 === d.length || d?.trim() === o,
        _ = r?.appliedTags == null || r?.appliedTags?.size === 0,
        A = r?.name == null || r?.name?.trim()?.length === 0;
    (c && _ && A) ||
        i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, E.fO)({ channelId: n }),
            guild_id: t,
            channel_id: n,
            applied_tag_ids: (0, E.au)(n),
            num_attachments: (0, E.d1)(n),
        });
}
function p(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function m(e) {
    let { guildId: t, channelId: n, postId: a } = e;
    function r() {
        i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POST_CREATED, {
            ...(0, E.$L)({ channelId: a }),
            guild_id: t,
            channel_id: n,
        });
    }
    c.A.isLoading(a) ? c.A.addConditionalChangeListener(() => !!c.A.isLoading(a) || (r(), !1)) : r();
}
function O(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SCROLLED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function C(e) {
    let { guildId: t, channelId: n, numArchivedThreads: a, hasMoreThreads: r, filterTagIds: l, sortOrder: d } = e;
    o.default.track(u.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.H$)(t),
        ...(0, i.dI)(s.A.getChannel(n)),
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: a,
        num_active_threads: (0, E.io)(t, n),
        has_more_threads: r,
        filter_tag_ids: l,
        sort_order: d,
    });
}
function R(e) {
    let { guildId: t, channelId: n, postId: a, location: r } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, E.$L)({ channelId: a }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != _.A.getSearchResults(n),
        location: r,
    });
}
function g(e) {
    let { guildId: t, channelId: n, sortOrder: a } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, E.kL)(a),
        sort_order: a,
        forum_channel_sort_order: a,
    });
}
function L(e) {
    let { guildId: t, channelId: n, forumLayout: a } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, E.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: a,
    });
}
function D(e) {
    let { postId: t, location: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_POST_LINK_COPIED, { forum_post_id: t, location: n });
}
function b(e) {
    let { onboardingCTA: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function M(e) {
    let { forumDemoId: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function P(e) {
    let { added: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function U(e) {
    let { readGuideCta: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function v(e) {
    let { isMobile: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function y() {
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function G() {
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function w(e) {
    i.Ay.trackWithMetadata(u.HAw.CHANNEL_OPENED, {
        ...(0, i.H$)(e.guild_id),
        ...(0, i.dI)(e),
        ...(0, a.C)(e, !0),
        ...(0, i.qL)(e.id),
        channel_view: "Split View",
        platform: (0, d.getPlatform)(),
    }),
        (0, r.A)({ channelId: e.id });
}
function x() {
    i.Ay.trackWithMetadata(u.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: u.JJy.CHANNEL_WELCOME_CTA },
    });
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.THREAD_CREATION_STARTED, {
        ...(0, a.C)(s.A.getChannel(n)),
        channel_id: n,
        guild_id: t,
    });
}
