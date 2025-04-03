n.d(t, { Z: () => m }), n(47120);
var l,
    o,
    r,
    i = n(442837),
    a = n(570140);
let c = {},
    _ = null,
    d = [],
    s = !1,
    u = !1,
    p = null,
    S = null;
function f() {
    u = !0;
}
class C extends (l = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != c[e] ? c[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != c[e] ? c[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return d;
    }
    getAppliedGuildBoost(e) {
        return d.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return u;
    }
    get applyBoostError() {
        return p;
    }
    get unapplyBoostError() {
        return S;
    }
    get cooldownEndsAt() {
        return _;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return s;
    }
}
(r = 'AppliedGuildBoostStore'),
    (o = 'displayName') in C
        ? Object.defineProperty(C, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[o] = r);
let m = new C(a.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        c[t] = {
            subscriptions: n,
            lastFetchedAt: Date.now()
        };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (s = !1), (d = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        _ = t;
    },
    GUILD_UNAPPLY_BOOST_START: f,
    GUILD_APPLY_BOOST_START: f,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (d = [...t, ...d.filter((e) => !n.has(e.id))]), (p = null), (u = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (u = !1), (p = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (d = d.filter((e) => e.id !== t)), (u = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (u = !1), (S = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        s = !0;
    }
});
