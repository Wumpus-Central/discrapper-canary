i.d(n, { HW: () => M, Om: () => O, hJ: () => S, sC: () => A, wM: () => I });
var e = i(70283),
    E = i(696292),
    r = i(216934),
    a = i(976860),
    c = i(780964),
    s = i(766075),
    _ = i(652215),
    T = i(758836),
    l = i(375708);
function I(t) {
    return t === e.$.GAME_VARIETY || t === e.$.GAME_TIME;
}
let A = new Set([e.$.ACCOUNT_AGE, e.$.STREAMING, e.$.GAME_TIME, e.$.GAME_VARIETY]);
function M(t) {
    return A.has(t);
}
let u = {
    [e.$.PREMIUM_TENURE]: {
        ctaLabel: (t) => {
            let { owned: n, isViewerOnUpgradeableNitro: i } = t;
            return !0 === i ? l.intl.string(l.t.uKFeS1) : n ? l.intl.string(l.t.xGjjkd) : l.intl.string(l.t.BTxm69);
        },
        ctaAction: () => (0, a.pX)(_.BVt.NITRO_HOME),
    },
    [e.$.GUILD_BOOSTER]: {
        ctaLabel: (t) => {
            let { owned: n } = t;
            return n ? l.intl.string(l.t.VMvz3m) : l.intl.string(l.t.xFVZeU);
        },
        ctaAction: () => (0, s.openUserSettings)(c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [e.$.ORB_PROFILE]: {
        ctaLabel: () => l.intl.string(l.t.EBYkzk),
        ctaAction: () => (0, a.pX)(_.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS)),
    },
    [e.$.QUEST_COMPLETED]: {
        ctaLabel: () => l.intl.string(l.t.swICIT),
        ctaAction: () => (0, r.m)({ fromContent: E.u.QUEST_BADGE }),
    },
};
function O(t) {
    return u[t];
}
let S = "badge-details";
