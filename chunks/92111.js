i.d(n, { HW: () => M, Om: () => S, hJ: () => L, sC: () => o, wM: () => I });
var e = i(70283),
    r = i(696292),
    c = i(975807),
    E = i(216934),
    a = i(976860),
    s = i(780964),
    A = i(766075),
    l = i(652215),
    T = i(758836),
    _ = i(375708);
function I(t) {
    return t === e.$.GAME_VARIETY || t === e.$.GAME_TIME;
}
let o = new Set([e.$.ACCOUNT_AGE, e.$.STREAMING, e.$.GAME_TIME, e.$.GAME_VARIETY]);
function M(t) {
    return o.has(t);
}
let u = {
    [e.$.STAFF]: {
        ctaLabel: () => _.intl.string(_.t.q7A8hP),
        ctaAction: () => (0, c.A)("https://discord.com/careers"),
    },
    [e.$.PREMIUM_TENURE]: {
        ctaLabel: (t) => {
            let { owned: n, isViewerOnUpgradeableNitro: i } = t;
            return !0 === i ? _.intl.string(_.t.uKFeS1) : n ? _.intl.string(_.t.xGjjkd) : _.intl.string(_.t.BTxm69);
        },
        ctaAction: () => (0, a.pX)(l.BVt.NITRO_HOME),
    },
    [e.$.GUILD_BOOSTER]: {
        ctaLabel: (t) => {
            let { owned: n } = t;
            return n ? _.intl.string(_.t.VMvz3m) : _.intl.string(_.t.xFVZeU);
        },
        ctaAction: () => (0, A.openUserSettings)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [e.$.ORB_PROFILE]: {
        ctaLabel: () => _.intl.string(_.t.EBYkzk),
        ctaAction: () => (0, a.pX)(l.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS)),
    },
    [e.$.QUEST_COMPLETED]: {
        ctaLabel: () => _.intl.string(_.t.swICIT),
        ctaAction: () => (0, E.m)({ fromContent: r.u.QUEST_BADGE }),
    },
};
function S(t) {
    return u[t];
}
let L = "badge-details";
