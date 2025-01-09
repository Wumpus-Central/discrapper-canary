t(47120);
var n,
    a,
    r,
    i,
    o = t(442837),
    c = t(570140);
let u = {},
    l = null,
    f = [],
    d = !1,
    p = !1,
    g = null,
    x = null;
function b() {
    p = !0;
}
class v extends (n = o.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != u[e] ? u[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != u[e] ? u[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return f;
    }
    getAppliedGuildBoost(e) {
        return f.find((s) => s.id === e);
    }
    get isModifyingAppliedBoost() {
        return p;
    }
    get applyBoostError() {
        return g;
    }
    get unapplyBoostError() {
        return x;
    }
    get cooldownEndsAt() {
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d;
    }
}
(i = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (a = v)
        ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = i),
    (s.Z = new v(c.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: s, appliedBoosts: t } = e;
            u[s] = {
                subscriptions: t,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: s } = e;
            (d = !1), (f = s);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: s } = e;
            l = s;
        },
        GUILD_UNAPPLY_BOOST_START: b,
        GUILD_APPLY_BOOST_START: b,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: s } = e,
                t = new Set(s.map((e) => e.id));
            (f = [...s, ...f.filter((e) => !t.has(e.id))]), (g = null), (p = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (g = s);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: s } = e;
            (f = f.filter((e) => e.id !== s)), (p = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: s } = e;
            (p = !1), (x = s);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            d = !0;
        }
    }));
