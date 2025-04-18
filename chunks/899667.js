r.d(t, { Z: () => Z }), r(388685);
var n,
    i,
    s,
    o = r(442837),
    l = r(570140);
let a = {},
    c = null,
    h = [],
    v = !1,
    u = !1,
    f = null,
    p = null;
function d() {
    u = !0;
}
class b extends (n = o.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != a[e] ? a[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != a[e] ? a[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return h;
    }
    getAppliedGuildBoost(e) {
        return h.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return u;
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
        return v;
    }
}
(s = 'AppliedGuildBoostStore'),
    (i = 'displayName') in b
        ? Object.defineProperty(b, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[i] = s);
let Z = new b(l.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: r } = e;
        a[t] = {
            subscriptions: r,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (v = !1), (h = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        c = t;
    },
    GUILD_UNAPPLY_BOOST_START: d,
    GUILD_APPLY_BOOST_START: d,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            r = new Set(t.map((e) => e.id));
        (h = [...t, ...h.filter((e) => !r.has(e.id))]), (f = null), (u = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (u = !1), (f = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (h = h.filter((e) => e.id !== t)), (u = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (u = !1), (p = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        v = !0;
    }
});
