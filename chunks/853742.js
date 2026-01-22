n.d(t, {
    Bd: () => L,
    Cd: () => w,
    El: () => U,
    Lj: () => T,
    Md: () => M,
    Ml: () => R,
    OG: () => B,
    Q_: () => G,
    Sc: () => b,
    UA: () => O,
    Z_: () => E,
    _4: () => S,
    _Z: () => N,
    ad: () => P,
    bh: () => x,
    hT: () => y,
    jC: () => D,
    jh: () => j,
    jr: () => A,
    pO: () => C,
    py: () => I,
    rH: () => V,
    ri: () => k,
    sB: () => v,
    zd: () => F,
}),
    n(733351);
var r = n(58149),
    i = n(332456),
    a = n(237774),
    s = n(734057),
    o = n(31717),
    l = n(954571),
    c = n(723702),
    u = n(969043),
    d = n(768953),
    f = n(759735),
    p = n(652215);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { guildId: t, channelId: n, sessionId: i, postIds: a, additionalTimes: s } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_SEEN_BATCH,
        g(
            h(
                {},
                (0, f.fO)({
                    channelId: n,
                    sessionId: i,
                }),
            ),
            {
                guild_id: t,
                channel_id: n,
                post_ids: a,
                additional_seen_time_millis: s,
            },
        ),
    );
}
function b(e) {
    let { guildId: t, channelId: n, numSearchResults: i } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_SEARCHED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_search_results: i,
        }),
    );
}
function y(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_SEARCH_CLEARED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function O(e) {
    let { guildId: t, channelId: n, tagId: i, filterTagIds: a, added: s, location: o } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_TAG_FILTER_CLICKED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            tag_id: i,
            filter_tag_ids: a,
            added: s,
            location: o,
        }),
    );
}
function A(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function v(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function S(e) {
    var t, n, i, a;
    let { guildId: l, channelId: c } = e,
        u = s.A.getChannel(c);
    if (null == u) return;
    let d = o.A.getThreadSettings(c),
        _ = null == (t = u.template) ? void 0 : t.trim(),
        m = o.A.getDraft(c, o.C.FirstThreadMessage),
        E = null == m || 0 === m.length || (null == m ? void 0 : m.trim()) === _,
        b =
            (null == d ? void 0 : d.appliedTags) == null ||
            (null == d || null == (n = d.appliedTags) ? void 0 : n.size) === 0,
        y =
            (null == d ? void 0 : d.name) == null ||
            (null == d || null == (a = d.name) || null == (i = a.trim()) ? void 0 : i.length) === 0;
    (E && b && y) ||
        r.Ay.trackWithMetadata(
            p.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED,
            g(h({}, (0, f.fO)({ channelId: c })), {
                guild_id: l,
                channel_id: c,
                applied_tag_ids: (0, f.au)(c),
                num_attachments: (0, f.d1)(c),
            }),
        );
}
function I(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function T(e) {
    let { guildId: t, channelId: n, postId: i } = e;
    function a() {
        r.Ay.trackWithMetadata(
            p.HAw.FORUM_CHANNEL_POST_CREATED,
            g(h({}, (0, f.$L)({ channelId: i })), {
                guild_id: t,
                channel_id: n,
            }),
        );
    }
    u.A.isLoading(i) ? u.A.addConditionalChangeListener(() => !!u.A.isLoading(i) || (a(), !1)) : a();
}
function C(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_SCROLLED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function N(e) {
    let { guildId: t, channelId: n, numArchivedThreads: i, hasMoreThreads: a, filterTagIds: o, sortOrder: c } = e;
    l.default.track(
        p.HAw.FORUM_CHANNEL_MORE_POSTS_LOADED,
        g(h({}, (0, r.H$)(t), (0, r.dI)(s.A.getChannel(n)), (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, f.io)(t, n),
            has_more_threads: a,
            filter_tag_ids: o,
            sort_order: c,
        }),
    );
}
function R(e) {
    let { guildId: t, channelId: n, postId: i, location: a } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_POST_CLICKED,
        g(h({}, (0, f.$L)({ channelId: i })), {
            guild_id: t,
            channel_id: n,
            is_search_result: null != d.A.getSearchResults(n),
            location: a,
        }),
    );
}
function w(e) {
    let { guildId: t, channelId: n, sortOrder: i } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_POSTS_SORTED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            sort_type: (0, f.kL)(i),
            sort_order: i,
            forum_channel_sort_order: i,
        }),
    );
}
function P(e) {
    let { guildId: t, channelId: n, forumLayout: i } = e;
    r.Ay.trackWithMetadata(
        p.HAw.FORUM_CHANNEL_LAYOUT_UPDATED,
        g(h({}, (0, f.fO)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            forum_channel_layout: i,
        }),
    );
}
function D(e) {
    let { postId: t, location: n } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_POST_LINK_COPIED, {
        forum_post_id: t,
        location: n,
    });
}
function x(e) {
    let { onboardingCTA: t } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function L(e) {
    let { forumDemoId: t } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function j(e) {
    let { added: t } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function M(e) {
    let { readGuideCta: t } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function k(e) {
    let { isMobile: t } = e;
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function U() {
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function G() {
    r.Ay.trackWithMetadata(p.HAw.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function V(e) {
    r.Ay.trackWithMetadata(
        p.HAw.CHANNEL_OPENED,
        g(h({}, (0, r.H$)(e.guild_id), (0, r.dI)(e), (0, i.C)(e, !0), (0, r.qL)(e.id)), {
            channel_view: "Split View",
            platform: (0, c.getPlatform)(),
        }),
    ),
        (0, a.k)(p.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function F() {
    r.Ay.trackWithMetadata(p.HAw.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: p.JJy.CHANNEL_WELCOME_CTA },
    });
}
function B(e) {
    let { guildId: t, channelId: n } = e;
    r.Ay.trackWithMetadata(
        p.HAw.THREAD_CREATION_STARTED,
        g(h({}, (0, i.C)(s.A.getChannel(n))), {
            channel_id: n,
            guild_id: t,
        }),
    );
}
