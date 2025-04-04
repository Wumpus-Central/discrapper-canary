n.d(t, {
    Az: () => y,
    Eg: () => C,
    IZ: () => v,
    PP: () => b,
    Ub: () => E,
    c6: () => N,
    m9: () => S,
    mT: () => A,
    qn: () => I,
    rC: () => T,
    tI: () => O
}),
    n(301563),
    n(266796),
    n(47120);
var r = n(664751),
    i = n(544891),
    o = n(749210),
    a = n(336197),
    s = n(41776),
    l = n(703656),
    c = n(769654),
    u = n(650774),
    d = n(430824),
    f = n(626135),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
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
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: r, onSuccess: i, joinSource: s, loadId: u, shouldNavigate: f = !0 } = n,
        p = (0, l.s1)(),
        m = d.Z.getGuild(e),
        E = { state: { analyticsSource: t } };
    null != m && null != m.joinedAt
        ? f &&
          (null == r
              ? (0, c.X)(e, E)
              : (0, a.Z)(
                    _.Z5c.CHANNEL(e, r, n.messageId),
                    g(h({}, E), {
                        navigationReplace: !0,
                        openChannel: !0
                    })
                ))
        : (await o.Z.joinGuild(e, {
              lurker: !0,
              source: s,
              loadId: u,
              lurkLocation: null == t ? void 0 : t.page
          }),
          f &&
              (await o.Z.transitionToGuildSync(
                  e,
                  g(h({}, E), {
                      welcomeModalChannelId: r,
                      navigationReplace: null != r,
                      openChannel: null != r,
                      search: p.location.search
                  }),
                  r,
                  n.messageId
              ))),
        null == i || i();
}
function b(e) {
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
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    f.default.track(_.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function v(e) {
    f.default.track(_.rMx.SEARCH_CLOSED, { load_id: e });
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    f.default.track(_.rMx.SEARCH_STARTED, {
        search_type: _.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function I(e) {
    let { withCounts: t, offset: n } = e;
    f.default.track(_.rMx.GUILD_DISCOVERY_SEARCH_START, {
        with_counts: t,
        offset: n
    });
}
function S(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    f.default.track(_.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i
    });
}
function T(e) {
    let { categoryId: t } = e;
    f.default.track(_.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function N(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: o, categoryId: a, isTagSearch: s } = e;
    f.default.track(_.rMx.SEARCH_RESULT_VIEWED, {
        search_type: s ? _.aib.GUILD_DISCOVERY_TAG : _.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: o.location,
        category_id: a
    });
}
function A(e) {
    let t = s.Z.getLoadId(e);
    f.default.track(_.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: u.Z.getMemberCount(e)
    });
}
async function C(e) {
    try {
        var t, n;
        let o =
            null ==
                (n = (
                    await i.tn.get({
                        url: _.ANM.GUILD_DISCOVERY,
                        query: r.stringify({ guild_ids: e }),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body) || null == (t = n.guilds)
                ? void 0
                : t[0];
        if (null == o) return o;
        return b(o);
    } catch (e) {
        return null;
    }
}
