n.d(t, {
    Bd: () => U,
    Cd: () => D,
    El: () => G,
    Lj: () => C,
    Md: () => M,
    Ml: () => L,
    OG: () => F,
    Q_: () => v,
    Sc: () => A,
    UA: () => S,
    Z_: () => I,
    _4: () => R,
    _Z: () => m,
    ad: () => h,
    bh: () => b,
    hT: () => T,
    jC: () => g,
    jh: () => P,
    jr: () => N,
    pO: () => p,
    py: () => f,
    rH: () => B,
    ri: () => y,
    sB: () => O,
    zd: () => w,
});
var i = n(58149),
    r = n(332456),
    a = n(973854),
    s = n(734057),
    _ = n(31717),
    l = n(954571),
    o = n(723702),
    E = n(969043),
    d = n(768953),
    c = n(759735),
    u = n(652215);
function I(e) {
    let { guildId: t, channelId: n, sessionId: r, postIds: a, additionalTimes: s } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, c.fO)({ channelId: n, sessionId: r }),
        guild_id: t,
        channel_id: n,
        post_ids: a,
        additional_seen_time_millis: s,
    });
}
function A(e) {
    let { guildId: t, channelId: n, numSearchResults: r } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEARCHED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: r,
    });
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function S(e) {
    let { guildId: t, channelId: n, tagId: r, filterTagIds: a, added: s, location: _ } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: r,
        filter_tag_ids: a,
        added: s,
        location: _,
    });
}
function N(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function O(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function R(e) {
    let { guildId: t, channelId: n } = e,
        r = s.A.getChannel(n);
    if (null == r) return;
    let a = _.A.getThreadSettings(n),
        l = r.template?.trim(),
        o = _.A.getDraft(n, _.C.FirstThreadMessage),
        E = null == o || 0 === o.length || o?.trim() === l,
        d = a?.appliedTags == null || a?.appliedTags?.size === 0,
        I = a?.name == null || a?.name?.trim()?.length === 0;
    (E && d && I) ||
        i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, c.fO)({ channelId: n }),
            guild_id: t,
            channel_id: n,
            applied_tag_ids: (0, c.au)(n),
            num_attachments: (0, c.d1)(n),
        });
}
function f(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function C(e) {
    let { guildId: t, channelId: n, postId: r } = e;
    function a() {
        i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POST_CREATED, {
            ...(0, c.$L)({ channelId: r }),
            guild_id: t,
            channel_id: n,
        });
    }
    E.A.isLoading(r) ? E.A.addConditionalChangeListener(() => !!E.A.isLoading(r) || (a(), !1)) : a();
}
function p(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_SCROLLED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
    });
}
function m(e) {
    let { guildId: t, channelId: n, numArchivedThreads: r, hasMoreThreads: a, filterTagIds: _, sortOrder: o } = e;
    l.default.track(u.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.H$)(t),
        ...(0, i.dI)(s.A.getChannel(n)),
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: r,
        num_active_threads: (0, c.io)(t, n),
        has_more_threads: a,
        filter_tag_ids: _,
        sort_order: o,
    });
}
function L(e) {
    let { guildId: t, channelId: n, postId: r, location: a } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, c.$L)({ channelId: r }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != d.A.getSearchResults(n),
        location: a,
    });
}
function D(e) {
    let { guildId: t, channelId: n, sortOrder: r } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, c.kL)(r),
        sort_order: r,
        forum_channel_sort_order: r,
    });
}
function h(e) {
    let { guildId: t, channelId: n, forumLayout: r } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, c.fO)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: r,
    });
}
function g(e) {
    let { postId: t, location: n } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_POST_LINK_COPIED, { forum_post_id: t, location: n });
}
function b(e) {
    let { onboardingCTA: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function U(e) {
    let { forumDemoId: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function P(e) {
    let { added: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function M(e) {
    let { readGuideCta: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function y(e) {
    let { isMobile: t } = e;
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function G() {
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function v() {
    i.Ay.trackWithMetadata(u.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function B(e) {
    i.Ay.trackWithMetadata(u.HAw.CHANNEL_OPENED, {
        ...(0, i.H$)(e.guild_id),
        ...(0, i.dI)(e),
        ...(0, r.C)(e, !0),
        ...(0, i.qL)(e.id),
        channel_view: "Split View",
        platform: (0, o.getPlatform)(),
    }),
        (0, a.A)({ channelId: e.id });
}
function w() {
    i.Ay.trackWithMetadata(u.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: u.JJy.CHANNEL_WELCOME_CTA },
    });
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    i.Ay.trackWithMetadata(u.HAw.THREAD_CREATION_STARTED, {
        ...(0, r.C)(s.A.getChannel(n)),
        channel_id: n,
        guild_id: t,
    });
}
