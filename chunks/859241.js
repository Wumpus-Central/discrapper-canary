n.d(t, { A: () => m });
var r = n(17928),
    l = n(228366);
let i = {},
    s = null,
    a = [],
    o = !1,
    d = !1,
    u = null,
    c = null;
function _() {
    d = !0;
}
class p extends r.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(e) {
        return null != i[e] ? i[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != i[e] ? i[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return a;
    }
    getAppliedGuildBoost(e) {
        return a.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return d;
    }
    get applyBoostError() {
        return u;
    }
    get unapplyBoostError() {
        return c;
    }
    get cooldownEndsAt() {
        return s;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return o;
    }
}
let m = new p(l.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        i[t] = { subscriptions: n, lastFetchedAt: Date.now() };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (o = !1), (a = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        s = t;
    },
    GUILD_UNAPPLY_BOOST_START: _,
    GUILD_APPLY_BOOST_START: _,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (a = [...t, ...a.filter((e) => !n.has(e.id))]), (u = null), (d = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (u = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (a = a.filter((e) => e.id !== t)), (d = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (c = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        o = !0;
    },
});
