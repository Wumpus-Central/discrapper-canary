a(47120);
var n,
    o,
    r,
    i,
    c = a(442837),
    l = a(570140);
let d = {},
    _ = null,
    p = [],
    s = !1,
    f = !1,
    u = null,
    m = null;
function g() {
    f = !0;
}
class S extends (n = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != d[e] ? d[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != d[e] ? d[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return p;
    }
    getAppliedGuildBoost(e) {
        return p.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return f;
    }
    get applyBoostError() {
        return u;
    }
    get unapplyBoostError() {
        return m;
    }
    get cooldownEndsAt() {
        return _;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return s;
    }
}
(i = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (o = S)
        ? Object.defineProperty(o, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = i),
    (t.Z = new S(l.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: a } = e;
            d[t] = {
                subscriptions: a,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (s = !1), (p = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            _ = t;
        },
        GUILD_UNAPPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_START: g,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                a = new Set(t.map((e) => e.id));
            (p = [...t, ...p.filter((e) => !a.has(e.id))]), (u = null), (f = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (u = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (p = p.filter((e) => e.id !== t)), (f = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (m = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            s = !0;
        }
    }));
