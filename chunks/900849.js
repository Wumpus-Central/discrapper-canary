n.d(t, {
    Az: () => E,
    IZ: () => b,
    PP: () => g,
    Ub: () => m,
    c6: () => S,
    m9: () => O,
    mT: () => T,
    qn: () => v,
    rC: () => I,
    tI: () => y
}),
    n(35282),
    n(953529),
    n(388685),
    n(664751),
    n(544891);
var r = n(749210),
    i = n(336197),
    a = n(41776),
    o = n(703656),
    s = n(769654),
    l = n(650774),
    c = n(430824),
    u = n(626135),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: a, onSuccess: l, joinSource: u, loadId: f, shouldNavigate: p = !0 } = n,
        m = (0, o.s1)(),
        g = c.Z.getGuild(e),
        E = { state: { analyticsSource: t } };
    null != g && null != g.joinedAt
        ? p &&
          (null == a
              ? (0, s.X)(e, E)
              : (0, i.Z)(
                    d.Z5c.CHANNEL(e, a, n.messageId),
                    h(_({}, E), {
                        navigationReplace: !0,
                        openChannel: !0
                    })
                ))
        : (await r.Z.joinGuild(e, {
              lurker: !0,
              source: u,
              loadId: f,
              lurkLocation: null == t ? void 0 : t.page
          }),
          p &&
              (await r.Z.transitionToGuildSync(
                  e,
                  h(_({}, E), {
                      welcomeModalChannelId: a,
                      navigationReplace: null != a,
                      openChannel: null != a,
                      search: m.location.search
                  }),
                  a,
                  n.messageId
              ))),
        null == l || l();
}
function g(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
        stickers: e.stickers,
        stickerCount: e.sticker_count,
        keywords: e.keywords
    };
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    u.default.track(d.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function b(e) {
    u.default.track(d.rMx.SEARCH_CLOSED, { load_id: e });
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    u.default.track(d.rMx.SEARCH_STARTED, {
        search_type: d.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function v(e) {
    let { withCounts: t, offset: n } = e;
    u.default.track(d.rMx.GUILD_DISCOVERY_SEARCH_START, {
        with_counts: t,
        offset: n
    });
}
function O(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    u.default.track(d.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i
    });
}
function I(e) {
    let { categoryId: t } = e;
    u.default.track(d.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function S(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: a, categoryId: o, isTagSearch: s } = e;
    u.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: s ? d.aib.GUILD_DISCOVERY_TAG : d.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: a.location,
        category_id: o
    });
}
function T(e) {
    let t = a.Z.getLoadId(e);
    u.default.track(d.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: l.Z.getMemberCount(e)
    });
}
