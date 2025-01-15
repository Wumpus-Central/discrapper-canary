n(47120);
var s,
    i,
    r,
    o,
    c = n(442837),
    l = n(570140);
let a = {},
    u = null,
    d = [],
    f = !1,
    p = !1,
    g = null,
    x = null;
function h() {
    p = !0;
}
class b extends (s = c.ZP.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != a[e] ? a[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != a[e] ? a[e].lastFetchedAt : null;
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
        return x;
    }
    get cooldownEndsAt() {
        return u;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return f;
    }
}
(o = 'AppliedGuildBoostStore'),
    (r = 'displayName') in (i = b)
        ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = o),
    (t.Z = new b(l.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: n } = e;
            a[t] = {
                subscriptions: n,
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
        GUILD_UNAPPLY_BOOST_START: h,
        GUILD_APPLY_BOOST_START: h,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                n = new Set(t.map((e) => e.id));
            (d = [...t, ...d.filter((e) => !n.has(e.id))]), (g = null), (p = !1);
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
            (p = !1), (x = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            f = !0;
        }
    }));
