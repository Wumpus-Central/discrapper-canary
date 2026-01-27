n.d(t, {
    A: () => C,
}),
    n(896048);
var i,
    s,
    r = n(311907),
    l = n(73153);
let o = {},
    a = null,
    d = [],
    u = !1,
    c = !1,
    h = null,
    g = null;

function p() {
    c = !0;
}
class f extends (i = r.Ay.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != o[e] ? o[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != o[e] ? o[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return d;
    }
    getAppliedGuildBoost(e) {
        return d.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return c;
    }
    get applyBoostError() {
        return h;
    }
    get unapplyBoostError() {
        return g;
    }
    get cooldownEndsAt() {
        return a;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
(s = "displayName") in f
    ? Object.defineProperty(f, s, {
          value: "AppliedGuildBoostStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[s] = "AppliedGuildBoostStore");
let C = new f(l.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        o[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now(),
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (u = !1), (d = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        a = t;
    },
    GUILD_UNAPPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (d = [...t, ...d.filter((e) => !n.has(e.id))]), (h = null), (c = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (c = !1), (h = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (d = d.filter((e) => e.id !== t)), (c = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (c = !1), (g = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        u = !0;
    },
});
