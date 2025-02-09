n.d(t, { Z: () => b }), n(47120);
var o,
    l,
    r,
    i = n(442837),
    a = n(570140);
let _ = {},
    c = null,
    d = [],
    s = !1,
    u = !1,
    p = null,
    S = null;
function C() {
    u = !0;
}
class f extends (o = i.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != _[e] ? _[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != _[e] ? _[e].lastFetchedAt : null;
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
        return c;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return s;
    }
}
(r = 'AppliedGuildBoostStore'),
    (l = 'displayName') in f
        ? Object.defineProperty(f, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[l] = r);
let b = new f(a.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        _[t] = {
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
        c = t;
    },
    GUILD_UNAPPLY_BOOST_START: C,
    GUILD_APPLY_BOOST_START: C,
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
