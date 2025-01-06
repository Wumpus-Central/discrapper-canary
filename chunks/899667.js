s(47120);
var n,
    r,
    i,
    a,
    o = s(442837),
    c = s(570140);
let l = {},
    u = null,
    d = [],
    p = !1,
    f = !1,
    g = null,
    x = null;
function C() {
    f = !0;
}
class _ extends (n = o.ZP.Store) {
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
        return f;
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
        return p;
    }
}
(a = 'AppliedGuildBoostStore'),
    (i = 'displayName') in (r = _)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new _(c.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: s } = e;
            l[t] = {
                subscriptions: s,
                lastFetchedAt: Date.now()
            };
        },
        USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { appliedGuildBoosts: t } = e;
            (p = !1), (d = t);
        },
        APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
            let { endsAt: t } = e;
            u = t;
        },
        GUILD_UNAPPLY_BOOST_START: C,
        GUILD_APPLY_BOOST_START: C,
        GUILD_APPLY_BOOST_SUCCESS: function (e) {
            let { appliedGuildBoost: t } = e,
                s = new Set(t.map((e) => e.id));
            (d = [...t, ...d.filter((e) => !s.has(e.id))]), (g = null), (f = !1);
        },
        GUILD_APPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (g = t);
        },
        GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
            let { boostId: t } = e;
            (d = d.filter((e) => e.id !== t)), (f = !1);
        },
        GUILD_UNAPPLY_BOOST_FAIL: function (e) {
            let { error: t } = e;
            (f = !1), (x = t);
        },
        USER_APPLIED_BOOSTS_FETCH_START: function () {
            p = !0;
        }
    }));
