l.d(e, { A: () => O });
var n = l(17928),
    o = l(228366);
let i = {},
    r = null,
    s = [],
    u = !1,
    S = !1,
    _ = null,
    d = null;
function p() {
    S = !0;
}
class A extends n.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(t) {
        return null != i[t] ? i[t].subscriptions : null;
    }
    getLastFetchedAtForGuild(t) {
        return null != i[t] ? i[t].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return s;
    }
    getAppliedGuildBoost(t) {
        return s.find((e) => e.id === t);
    }
    get isModifyingAppliedBoost() {
        return S;
    }
    get applyBoostError() {
        return _;
    }
    get unapplyBoostError() {
        return d;
    }
    get cooldownEndsAt() {
        return r;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
let O = new A(o.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (t) {
        let { guildId: e, appliedBoosts: l } = t;
        i[e] = { subscriptions: l, lastFetchedAt: Date.now() };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (t) {
        let { appliedGuildBoosts: e } = t;
        (u = !1), (s = e);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (t) {
        let { endsAt: e } = t;
        r = e;
    },
    GUILD_UNAPPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_SUCCESS: function (t) {
        let { appliedGuildBoost: e } = t,
            l = new Set(e.map((t) => t.id));
        (s = [...e, ...s.filter((t) => !l.has(t.id))]), (_ = null), (S = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (t) {
        let { error: e } = t;
        (S = !1), (_ = e);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (t) {
        let { boostId: e } = t;
        (s = s.filter((t) => t.id !== e)), (S = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (t) {
        let { error: e } = t;
        (S = !1), (d = e);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        u = !0;
    },
});
