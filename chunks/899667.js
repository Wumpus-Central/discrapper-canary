n.d(t, { Z: () => _ }), n(388685);
var r,
    i,
    s,
    o = n(442837),
    a = n(570140);
let l = {},
    c = null,
    u = [],
    d = !1,
    p = !1,
    f = null,
    g = null;
function b() {
    p = !0;
}
class m extends (r = o.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return u;
    }
    getAppliedGuildBoost(e) {
        return u.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return p;
    }
    get applyBoostError() {
        return f;
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
(s = 'AppliedGuildBoostStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = s);
let _ = new m(a.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        l[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (d = !1), (u = t);
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
        (u = [...t, ...u.filter((e) => !n.has(e.id))]), (f = null), (p = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (p = !1), (f = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (u = u.filter((e) => e.id !== t)), (p = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (p = !1), (g = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        d = !0;
    }
});
