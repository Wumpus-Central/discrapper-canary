(n.d(t, { Z: () => m }), n(388685));
var r,
    i,
    s,
    l = n(442837),
    o = n(570140);
let a = {},
    c = null,
    u = [],
    d = !1,
    f = !1,
    p = null,
    g = null;
function b() {
    f = !0;
}
class v extends (r = l.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != a[e] ? a[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != a[e] ? a[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return f;
    }
    get applyBoostError() {
        return p;
    }
    get unapplyBoostError() {
        return g;
    }
    get cooldownEndsAt() {
        return c;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d;
    }
}
((s = 'AppliedGuildBoostStore'),
    (i = 'displayName') in v
        ? Object.defineProperty(v, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[i] = s));
let m = new v(o.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        a[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        ((d = !1), (u = t));
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
        ((u = [...t, ...u.filter((e) => !n.has(e.id))]), (p = null), (f = !1));
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        ((f = !1), (p = t));
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        ((u = u.filter((e) => e.id !== t)), (f = !1));
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        ((f = !1), (g = t));
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        d = !0;
    }
});
