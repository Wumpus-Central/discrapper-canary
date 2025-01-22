r.d(n, {
    Az: function () {
        return E;
    },
    Eg: function () {
        return C;
    },
    IZ: function () {
        return v;
    },
    PP: function () {
        return g;
    },
    Ub: function () {
        return m;
    },
    c6: function () {
        return S;
    },
    m9: function () {
        return I;
    },
    mT: function () {
        return A;
    },
    qn: function () {
        return b;
    },
    rC: function () {
        return T;
    },
    tI: function () {
        return y;
    }
});
var i,
    a = r(47120);
var o = r(664751),
    s = r(544891),
    l = r(749210),
    u = r(41776),
    c = r(703656),
    d = r(769654),
    f = r(650774),
    p = r(430824),
    h = r(626135),
    _ = r(981631);
!(function (e) {
    (e.SEARCH = 'Search'), (e.RECOMMENDED = 'Recommended'), (e.POPULAR = 'Popular'), (e.RECOMMENDED_E3 = 'Recommended - E3'), (e.HEADER = 'Header'), (e.GLOBAL_DISCOVERY = 'Global Discovery'), (e.FORWARD_BREADCRUMB = 'Forward Breadcrumb');
})(i || (i = {}));
async function m(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { channelId: i, onSuccess: a, joinSource: o, loadId: s, setsHistorySnapshot: f = !0, shouldNavigate: h = !0 } = r,
        _ = (0, c.s1)();
    f && u.Z.setHistorySnapshot({ ..._ });
    let m = p.Z.getGuild(e),
        g = { state: { analyticsSource: n } };
    null != m && null != m.joinedAt
        ? h && (0, d.X)(e, g)
        : (await l.Z.joinGuild(e, {
              lurker: !0,
              source: o,
              loadId: s,
              lurkLocation: null == n ? void 0 : n.page
          }),
          h &&
              (await l.Z.transitionToGuildSync(
                  e,
                  {
                      ...g,
                      welcomeModalChannelId: i,
                      search: _.location.search
                  },
                  i
              ))),
        null == a || a();
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
function E(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    h.default.track(_.rMx.GUILD_DISCOVERY_EXITED, {
        load_id: e,
        guild_ids_viewed: n,
        recommendations_source: r
    });
}
function v(e) {
    h.default.track(_.rMx.SEARCH_CLOSED, { load_id: e });
}
function y(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    h.default.track(_.rMx.SEARCH_STARTED, {
        search_type: _.aib.GUILD_DISCOVERY,
        load_id: e,
        location: r.location,
        category_id: n
    });
}
function b(e) {
    let { withCounts: n, offset: r } = e;
    h.default.track(_.rMx.GUILD_DISCOVERY_SEARCH_START, {
        with_counts: n,
        offset: r
    });
}
function I(e) {
    let { categoryId: n, error: r, willRequestRetry: i, isRequestRetry: a } = e;
    h.default.track(_.rMx.GUILD_DISCOVERY_SEARCH_FAILED, {
        category_id: n,
        request_status: r.status,
        request_error_code: r.code,
        will_request_retry: i,
        is_request_retry: a
    });
}
function T(e) {
    let { categoryId: n } = e;
    h.default.track(_.rMx.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: n });
}
function S(e) {
    let { loadId: n, searchId: r, query: i, guildResults: a, analyticsContext: o, categoryId: s, isTagSearch: l } = e;
    h.default.track(_.rMx.SEARCH_RESULT_VIEWED, {
        search_type: l ? _.aib.GUILD_DISCOVERY_TAG : _.aib.GUILD_DISCOVERY,
        load_id: n,
        search_id: r,
        total_results: void 0 !== a ? a.length : null,
        guild_ids: void 0 !== a ? a.map((e) => e.id) : null,
        query: i,
        location: o.location,
        category_id: s
    });
}
function A(e) {
    let n = u.Z.getLoadId(e);
    h.default.track(_.rMx.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
        guild_id: e,
        load_id: n,
        guild_size: f.Z.getMemberCount(e)
    });
}
async function C(e) {
    try {
        var n, r;
        let i = await s.tn.get({
                url: _.ANM.GUILD_DISCOVERY,
                query: o.stringify({ guild_ids: e }),
                oldFormErrors: !0,
                rejectWithError: !0
            }),
            a = null === (r = i.body) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : n[0];
        if (null == a) return a;
        return g(a);
    } catch (e) {
        return null;
    }
}
