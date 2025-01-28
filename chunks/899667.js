s(47120);
var n,
    i,
    r,
    o,
    c = s(442837),
    a = s(570140);
let l = {},
    u = null,
    d = [],
    f = !1,
    p = !1,
    g = null,
    b = null;
function x() {
    p = !0;
}
class h extends (n = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return d;
    }
    getAppliedGuildBoost(e) {
        return d.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return p;
    }
    get applyBoostError() {
        return g;
    }
    get unapplyBoostError() {
        return b;
    }
    get cooldownEndsAt() {
        return u;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return f;
    }
}
(o = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = o),
    (t.Z = new h(a.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: s } = e;
            l[t] = {
                subscriptions: s,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (f = !1), (d = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            u = t;
        },
        GUILD_UNAPPLY_BOOST_START: x,
        GUILD_APPLY_BOOST_START: x,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                s = new Set(t.map((e) => e.id));
            (d = [...t, ...d.filter((e) => !s.has(e.id))]), (g = null), (p = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (p = !1), (g = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (d = d.filter((e) => e.id !== t)), (p = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (p = !1), (b = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            f = !0;
        }
    }));
