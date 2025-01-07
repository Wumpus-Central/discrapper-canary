t(47120);
var n,
    r,
    c,
    i,
    a = t(442837),
    o = t(570140);
let u = {},
    f = null,
    p = [],
    d = !1,
    l = !1,
    g = null,
    b = null;
function x() {
    l = !0;
}
class v extends (n = a.ZP.Store) {
    getAppliedGuildBoostsForGuild(s) {
        return null != u[s] ? u[s].subscriptions : null;
    }
    getLastFetchedAtForGuild(s) {
        return null != u[s] ? u[s].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return p;
    }
    getAppliedGuildBoost(s) {
        return p.find((e) => e.id === s);
    }
    get isModifyingAppliedBoost() {
        return l;
    }
    get applyBoostError() {
        return g;
    }
    get unapplyBoostError() {
        return b;
    }
    get cooldownEndsAt() {
        return f;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d;
    }
}
(i = 'AppliedGuildBoostStore'),
    (c = 'displayName') in (r = v)
        ? Object.defineProperty(r, c, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[c] = i),
    (e.Z = new v(o.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (s) {
            let { guildId: e, appliedBoosts: t } = s;
            u[e] = {
                subscriptions: t,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (s) {
            let { appliedGuildBoosts: e } = s;
            (d = !1), (p = e);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (s) {
            let { endsAt: e } = s;
            f = e;
        },
        GUILD_UNAPPLY_BOOST_START: x,
        GUILD_APPLY_BOOST_START: x,
        GUILD_APPLY_BOOST_SUCCESS: function (s) {
            let { appliedGuildBoost: e } = s,
                t = new Set(e.map((s) => s.id));
            (p = [...e, ...p.filter((s) => !t.has(s.id))]), (g = null), (l = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (s) {
            let { error: e } = s;
            (l = !1), (g = e);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (s) {
            let { boostId: e } = s;
            (p = p.filter((s) => s.id !== e)), (l = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (s) {
            let { error: e } = s;
            (l = !1), (b = e);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            d = !0;
        }
    }));
