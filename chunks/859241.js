"use strict";
n.d(t, { A: () => p });
var s = n(311907),
    i = n(73153);
let r = {},
    l = null,
    a = [],
    o = !1,
    d = !1,
    h = null,
    c = null;
function u() {
    d = !0;
}
class g extends s.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(e) {
        return null != r[e] ? r[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != r[e] ? r[e].lastFetchedAt : null;
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
        return h;
    }
    get unapplyBoostError() {
        return c;
    }
    get cooldownEndsAt() {
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return o;
    }
}
let p = new g(i.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e;
        r[t] = { subscriptions: n, lastFetchedAt: Date.now() };
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { appliedGuildBoosts: t } = e;
        (o = !1), (a = t);
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function (e) {
        let { endsAt: t } = e;
        l = t;
    },
    GUILD_UNAPPLY_BOOST_START: u,
    GUILD_APPLY_BOOST_START: u,
    GUILD_APPLY_BOOST_SUCCESS: function (e) {
        let { appliedGuildBoost: t } = e,
            n = new Set(t.map((e) => e.id));
        (a = [...t, ...a.filter((e) => !n.has(e.id))]), (h = null), (d = !1);
    },
    GUILD_APPLY_BOOST_FAIL: function (e) {
        let { error: t } = e;
        (d = !1), (h = t);
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
