n.d(t, {
    Az: () => h,
    Eg: () => b,
    IZ: () => m,
    PP: () => p,
    Ub: () => _,
    c6: () => I,
    m9: () => v,
    mT: () => T,
    qn: () => E,
    rC: () => y,
    tI: () => g
}),
    n(47120);
var i = n(664751),
    r = n(544891),
    a = n(749210),
    s = n(41776),
    o = n(703656),
    l = n(769654),
    u = n(650774),
    c = n(430824),
    d = n(626135),
    f = n(981631);
async function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: i, onSuccess: r, joinSource: u, loadId: d, setsHistorySnapshot: f = !0, shouldNavigate: _ = !0 } = n,
        p = (0, o.s1)();
    f && s.Z.setHistorySnapshot({ ...p });
    let h = c.Z.getGuild(e),
        m = { state: { analyticsSource: t } };
    null != h && null != h.joinedAt
        ? _ && (0, l.X)(e, m)
        : (await a.Z.joinGuild(e, {
              lurker: !0,
              source: u,
              loadId: d,
              lurkLocation: null == t ? void 0 : t.page
          }),
          _ &&
              (await a.Z.transitionToGuildSync(
                  e,
                  {
                      ...m,
                      welcomeModalChannelId: i,
                      search: p.location.search
                  },
                  i
              ))),
        null == r || r();
}
function p(e) {
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
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    d.default.track(f.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: t,
        recommendations_source: n
    });
}
function m(e) {
    d.default.track(f.rMx.SEARCH_CLOSED, { load_id: e });
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    d.default.track(f.rMx.SEARCH_STARTED, {
        search_type: f.aib.GUILD_DISCOVERY,
        load_id: e,
        location: n.location,
        category_id: t
    });
}
function E(e) {
    let { withCounts: t, offset: n } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_START, {
        with_counts: t,
        offset: n
    });
}
function v(e) {
    let { categoryId: t, error: n, willRequestRetry: i, isRequestRetry: r } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: t,
        request_status: n.status,
        request_error_code: n.code,
        will_request_retry: i,
        is_request_retry: r
    });
}
function y(e) {
    let { categoryId: t } = e;
    d.default.track(f.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: t });
}
function I(e) {
    let { loadId: t, searchId: n, query: i, guildResults: r, analyticsContext: a, categoryId: s, isTagSearch: o } = e;
    d.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: o ? f.aib.GUILD_DISCOVERY_TAG : f.aib.GUILD_DISCOVERY,
        load_id: t,
        search_id: n,
        total_results: void 0 !== r ? r.length : null,
        guild_ids: void 0 !== r ? r.map((e) => e.id) : null,
        query: i,
        location: a.location,
        category_id: s
    });
}
function T(e) {
    let t = s.Z.getLoadId(e);
    d.default.track(f.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: t,
        guild_size: u.Z.getMemberCount(e)
    });
}
async function b(e) {
    try {
        var t, n;
        let a = await r.tn.get({
                url: f.ANM.GUILD_DISCOVERY,
                query: i.stringify({ guild_ids: e }),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            s = null === (n = a.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
        if (null == s) return s;
        return p(s);
    } catch (e) {
        return null;
    }
}
