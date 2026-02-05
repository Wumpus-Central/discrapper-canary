n.d(t, { A: () => p });
var i = n(311907),
    s = n(73153);
let r = {},
    l = null,
    o = [],
    a = !1,
    c = !1,
    d = null,
    u = null;
function h() {
    c = !0;
}
class m extends i.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(e) {
        return null != r[e] ? r[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != r[e] ? r[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return o;
    }
    getAppliedGuildBoost(e) {
        return o.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return c;
    }
    get applyBoostError() {
        return d;
    }
    get unapplyBoostError() {
        return u;
    }
    get cooldownEndsAt() {
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return a;
    }
}
let p = new m(s.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        r[t] = { subscriptions: n, lastFetchedAt: Date.now() };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (a = !1), (o = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        l = t;
    },
    GUILD_UNAPPLY_BOOST_START: h,
    GUILD_APPLY_BOOST_START: h,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (o = [...t, ...o.filter((e) => !n.has(e.id))]), (d = null), (c = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (c = !1), (d = t);
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function (e) {
        let { boostId: t } = e;
        (o = o.filter((e) => e.id !== t)), (c = !1);
    },
    GUILD_UNAPPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (c = !1), (u = t);
    },
    USER_APPLIED_BOOSTS_FETCH_START: function () {
        a = !0;
    },
});
