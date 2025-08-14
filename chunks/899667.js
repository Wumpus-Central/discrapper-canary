n.d(t, { Z: () => m }), n(388685);
var r,
    i,
    l = n(442837),
    o = n(570140);
let s = {},
    c = null,
    a = [],
    u = !1,
    d = !1,
    f = null,
    p = null;
function b() {
    d = !0;
}
class O extends (r = l.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != s[e] ? s[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != s[e] ? s[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return a;
    }
    getAppliedGuildBoost(e) {
        return a.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return d;
    }
    get applyBoostError() {
        return f;
    }
    get unapplyBoostError() {
        return p;
    }
    get cooldownEndsAt() {
        return c;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
(i = "displayName") in O
    ? Object.defineProperty(O, i, {
          value: "AppliedGuildBoostStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (O[i] = "AppliedGuildBoostStore");
let m = new O(o.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        s[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now(),
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (u = !1), (a = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        c = t;
    },
    GUILD_UNAPPLY_BOOST_START: b,
    GUILD_APPLY_BOOST_START: b,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (a = [...t, ...a.filter((e) => !n.has(e.id))]), (f = null), (d = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (f = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (a = a.filter((e) => e.id !== t)), (d = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (p = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        u = !0;
    },
});
