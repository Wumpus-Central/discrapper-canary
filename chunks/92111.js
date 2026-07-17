i.d(n, { HW: () => g, Om: () => G, hJ: () => L, sC: () => O, wM: () => M });
var e = i(70283),
    c = i(696292),
    r = i(975807),
    E = i(990820),
    a = i(216934),
    s = i(976860),
    A = i(780964),
    l = i(766075),
    T = i(652215),
    I = i(758836),
    _ = i(202541),
    o = i(375708);
function M(t) {
    return t === e.$.GAME_VARIETY || t === e.$.GAME_TIME;
}
let O = new Set([e.$.ACCOUNT_AGE, e.$.STREAMING, e.$.GAME_TIME, e.$.GAME_VARIETY]);
function g(t) {
    return O.has(t);
}
let u = {
    [e.$.STAFF]: {
        ctaLabel: () => o.intl.string(o.t.q7A8hP),
        ctaAction: () => (0, r.A)("https://discord.com/careers"),
    },
    [e.$.PREMIUM_TENURE]: {
        ctaLabel: (t) => {
            let { owned: n, isViewerOnUpgradeableNitro: i } = t;
            return !0 === i ? o.intl.string(o.t.uKFeS1) : n ? o.intl.string(o.t.xGjjkd) : o.intl.string(o.t.BTxm69);
        },
        ctaAction: () => (0, s.pX)(T.BVt.NITRO_HOME),
    },
    [e.$.GUILD_BOOSTER]: {
        ctaLabel: (t) => {
            let { owned: n } = t;
            return n ? o.intl.string(o.t.VMvz3m) : o.intl.string(o.t.xFVZeU);
        },
        ctaAction: () => (0, l.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [e.$.ORB_PROFILE]: {
        ctaLabel: () => o.intl.string(o.t.EBYkzk),
        ctaAction: () => (0, s.pX)(T.BVt.COLLECTIBLES_SHOP_WITH_TAB(I.G2.ORBS)),
    },
    [e.$.QUEST_COMPLETED]: {
        ctaLabel: () => o.intl.string(o.t.swICIT),
        ctaAction: () => (0, a.m)({ fromContent: c.u.QUEST_BADGE }),
    },
    [e.$.GIFTING]: {
        ctaLabel: () => o.intl.string(o.t["nUA/JW"]),
        ctaAction: () => (0, E.A)({ giftingOrigin: _.vQ.BADGE_DIRECTORY }),
    },
};
function G(t) {
    return u[t];
}
let L = "badge-details";
