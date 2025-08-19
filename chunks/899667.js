n.d(t, { Z: () => m }), n(388685);
var i,
    r,
    s = n(442837),
    l = n(570140);
let o = {},
    a = null,
    c = [],
    u = !1,
    d = !1,
    h = null,
    p = null;
function g() {
    d = !0;
}
class f extends (i = s.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != o[e] ? o[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != o[e] ? o[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return c;
    }
    getAppliedGuildBoost(e) {
        return c.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return d;
    }
    get applyBoostError() {
        return h;
    }
    get unapplyBoostError() {
        return p;
    }
    get cooldownEndsAt() {
        return a;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
(r = "displayName") in f
    ? Object.defineProperty(f, r, {
          value: "AppliedGuildBoostStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[r] = "AppliedGuildBoostStore");
let m = new f(l.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        o[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now(),
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (u = !1), (c = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        a = t;
    },
    GUILD_UNAPPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (c = [...t, ...c.filter((e) => !n.has(e.id))]), (h = null), (d = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (h = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (c = c.filter((e) => e.id !== t)), (d = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (p = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        u = !0;
    },
});
