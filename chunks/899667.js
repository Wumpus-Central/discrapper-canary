t.d(s, { Z: () => b }), t(47120);
var n,
    a,
    i,
    r = t(442837),
    o = t(570140);
let c = {},
    l = null,
    u = [],
    d = !1,
    f = !1,
    p = null,
    g = null;
function x() {
    f = !0;
}
class v extends (n = r.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != c[e] ? c[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != c[e] ? c[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find((s) => s.id === e);
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
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d;
    }
}
(i = 'AppliedGuildBoostStore'),
    (a = 'displayName') in v
        ? Object.defineProperty(v, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[a] = i);
let b = new v(o.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: s, appliedBoosts: t } = e;
        c[s] = {
            subscriptions: t,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: s } = e;
        (d = !1), (u = s);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: s } = e;
        l = s;
    },
    GUILD_UNAPPLY_BOOST_START: x,
    GUILD_APPLY_BOOST_START: x,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: s } = e,
            t = new Set(s.map((e) => e.id));
        (u = [...s, ...u.filter((e) => !t.has(e.id))]), (p = null), (f = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: s } = e;
        (f = !1), (p = s);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: s } = e;
        (u = u.filter((e) => e.id !== s)), (f = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: s } = e;
        (f = !1), (g = s);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        d = !0;
    }
});
