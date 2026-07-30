"use strict";
n.d(t, { Ce: () => p, HW: () => f, Jn: () => h, Om: () => m, hJ: () => g, sC: () => I });
var i = n(70283),
    r = n(696292),
    a = n(975807),
    s = n(990820),
    l = n(216934),
    o = n(976860),
    d = n(780964),
    c = n(766075),
    u = n(652215),
    _ = n(758836),
    E = n(202541),
    A = n(375708);
function h(e) {
    return e === i.$.GAME_VARIETY || e === i.$.GAME_TIME || e === i.$.STREAMING;
}
let I = new Set([i.$.ACCOUNT_AGE, i.$.STREAMING, i.$.GAME_TIME, i.$.GAME_VARIETY]);
function f(e) {
    return I.has(e);
}
function p(e) {
    return I.has(e);
}
let T = {
    [i.$.STAFF]: {
        ctaLabel: () => A.intl.string(A.t.q7A8hP),
        ctaAction: () => (0, a.A)("https://discord.com/careers"),
    },
    [i.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t, isViewerOnUpgradeableNitro: n } = e;
            return !0 === n ? A.intl.string(A.t.uKFeS1) : t ? A.intl.string(A.t.xGjjkd) : A.intl.string(A.t.BTxm69);
        },
        ctaAction: () => (0, o.pX)(u.BVt.NITRO_HOME),
    },
    [i.$.GUILD_BOOSTER]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? A.intl.string(A.t.VMvz3m) : A.intl.string(A.t.xFVZeU);
        },
        ctaAction: () => (0, c.openUserSettings)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [i.$.ORB_PROFILE]: {
        ctaLabel: () => A.intl.string(A.t.EBYkzk),
        ctaAction: () => (0, o.pX)(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(_.G2.ORBS)),
    },
    [i.$.QUEST_COMPLETED]: {
        ctaLabel: () => A.intl.string(A.t.swICIT),
        ctaAction: () => (0, l.m)({ fromContent: r.u.QUEST_BADGE }),
    },
    [i.$.GIFTING]: {
        ctaLabel: () => A.intl.string(A.t["nUA/JW"]),
        ctaAction: () => (0, s.A)({ giftingOrigin: E.vQ.BADGE_DIRECTORY }),
    },
};
function m(e) {
    return T[e];
}
let g = "badge-details";
