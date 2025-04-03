n.d(t, {
    Az: () => b,
    Eg: () => A,
    IZ: () => y,
    PP: () => E,
    Ub: () => g,
    c6: () => T,
    m9: () => I,
    mT: () => N,
    qn: () => O,
    rC: () => S,
    tI: () => v
}),
    n(301563),
    n(266796),
    n(47120);
var r = n(664751),
    i = n(544891),
    o = n(749210),
    a = n(41776),
    s = n(703656),
    l = n(769654),
    c = n(650774),
    u = n(430824),
    d = n(626135),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: r, onSuccess: i, joinSource: a, loadId: c, shouldNavigate: d = !0 } = n,
        f = (0, s.s1)(),
        _ = u.Z.getGuild(e),
        h = { state: { analyticsSource: t } };
    null != _ && null != _.joinedAt
        ? d && (0, l.X)(e, h)
        : (await o.Z.joinGuild(e, {
              lurker: !0,
              source: a,
              loadId: c,
              lurkLocation: null == t ? void 0 : t.page
          }),
          d &&
              (await o.Z.transitionToGuildSync(
                  e,
                  m(p({}, h), {
                      welcomeModalChannelId: r,
                      search: f.location.search
                  }),
                  r
              ))),
        null == i || i();
}
function E(e) {
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
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    d.default.track(f.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function y(e) {
    d.default.track(f.rMx.SEARCH_CLOSED, { load_id: e });
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    d.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function O(e) {
    let { withCounts: t, offset: n } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_START, {
        with_counts: t,
        offset: n
    });
}
function I(e) {
    let { categoryId: t, error: n, willRequestRetry: r, isRequestRetry: i } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: r,
        is_request_retry: i
    });
}
function S(e) {
    let { categoryId: t } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function T(e) {
    let { loadId: t, searchId: n, query: r, guildResults: i, analyticsContext: o, categoryId: a, isTagSearch: s } = e;
    d.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: s ? f.aib.GUILD_DISCOVERY_TAG : f.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== i ? i.length : null,
        guild_ids: void 0 !== i ? i.map((e) => e.id) : null,
        query: r,
        location: o.location,
        category_id: a
    });
}
function N(e) {
    let t = a.Z.getLoadId(e);
    d.default.track(f.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: c.Z.getMemberCount(e)
    });
}
async function A(e) {
    try {
        var t, n;
        let o =
            null ==
                (n = (
                    await i.tn.get({
                        url: f.ANM.GUILD_DISCOVERY,
                        query: r.stringify({ guild_ids: e }),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body) || null == (t = n.guilds)
                ? void 0
                : t[0];
        if (null == o) return o;
        return E(o);
    } catch (e) {
        return null;
    }
}
