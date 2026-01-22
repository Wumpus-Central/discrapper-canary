n.d(t, {
    A: () => S,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = {},
    l = null,
    c = [],
    u = !1,
    d = !1,
    f = null,
    p = null;

function _(e) {
    let { guildId: t, appliedBoosts: n } = e;
    o[t] = {
        subscriptions: n,
        lastFetchedAt: Date.now(),
    };
}

function h(e) {
    let { appliedGuildBoosts: t } = e;
    (u = !1), (c = t);
}

function m(e) {
    let { endsAt: t } = e;
    l = t;
}

function g() {
    d = !0;
}

function E(e) {
    let { appliedGuildBoost: t } = e,
        n = new Set(t.map((e) => e.id));
    (c = [...t, ...c.filter((e) => !n.has(e.id))]), (f = null), (d = !1);
}

function b(e) {
    let { error: t } = e;
    (d = !1), (f = t);
}

function y(e) {
    let { boostId: t } = e;
    (c = c.filter((e) => e.id !== t)), (d = !1);
}

function O(e) {
    let { error: t } = e;
    (d = !1), (p = t);
}

function A() {
    u = !0;
}
class v extends (r = i.Ay.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != o[e] ? o[e].subscriptions : null;
    }
    getLastFetchedAtForGuild(e) {
        return null != o[e] ? o[e].lastFetchedAt : null;
    }
    getCurrentUserAppliedBoosts() {
        return c;
    }
    getAppliedGuildBoost(e) {
        return c.find((t) => t.id === e);
    }
    get isModifyingAppliedBoost() {
        return d;
    }
    get applyBoostError() {
        return f;
    }
    get unapplyBoostError() {
        return p;
    }
    get cooldownEndsAt() {
        return l;
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return u;
    }
}
s(v, "displayName", "AppliedGuildBoostStore");
let S = new v(a.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: _,
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: h,
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: m,
    GUILD_UNAPPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_START: g,
    GUILD_APPLY_BOOST_SUCCESS: E,
    GUILD_APPLY_BOOST_FAIL: b,
    GUILD_UNAPPLY_BOOST_SUCCESS: y,
    GUILD_UNAPPLY_BOOST_FAIL: O,
    USER_APPLIED_BOOSTS_FETCH_START: A,
});
