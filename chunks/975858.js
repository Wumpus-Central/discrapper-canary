"use strict";
n.d(t, { ie: () => E, w0: () => h, Om: () => I, HW: () => g, wM: () => p, hJ: () => T });
var i = n(70283),
    r = n(696292),
    s = n(216934),
    a = n(976860),
    o = n(780964),
    l = n(766075),
    u = n(652215),
    c = n(758836),
    d = n(375708);
let _ = {
    premium: 1,
    premium_tenure_1_month_v2: 1,
    premium_tenure_3_month_v2: 1,
    premium_tenure_6_month_v2: 1,
    premium_tenure_12_month_v2: 1,
    premium_tenure_24_month_v2: 1,
    premium_tenure_36_month_v2: 1,
    premium_tenure_60_month_v2: 1,
    premium_tenure_72_month_v2: 1,
    partner: 2,
    certified_moderator: 3,
    hypesquad: 4,
    hypesquad_house_1: 5,
    hypesquad_house_2: 6,
    hypesquad_house_3: 7,
    bug_hunter_level_1: 8,
    bug_hunter_level_2: 9,
    verified_developer: 10,
    early_supporter: 11,
    guild_booster_lvl1: 12,
    guild_booster_lvl2: 12,
    guild_booster_lvl3: 12,
    guild_booster_lvl4: 12,
    guild_booster_lvl5: 12,
    guild_booster_lvl6: 12,
    guild_booster_lvl7: 12,
    guild_booster_lvl8: 12,
    guild_booster_lvl9: 12,
    legacy_username: 13,
    quest_completed: 14,
    april_fools_2026: 15,
    orb_profile_badge: 16,
};
function h(e) {
    let t = _[e];
    if (null != t) return t;
    let n = i.$[e.toUpperCase()];
    return "number" == typeof n ? n : void 0;
}
let f = new Set(Object.values(_));
function E(e) {
    return f.has(e);
}
function p(e) {
    return e === i.$.GAME_VARIETY || e === i.$.GAME_TIME;
}
let m = new Set([i.$.ACCOUNT_AGE, i.$.STREAMING, i.$.GAME_TIME, i.$.GAME_VARIETY]);
function g(e) {
    return m.has(e);
}
let A = {
    [i.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t, isViewerOnUpgradeableNitro: n } = e;
            return !0 === n ? d.intl.string(d.t.uKFeS1) : t ? d.intl.string(d.t.xGjjkd) : d.intl.string(d.t.BTxm69);
        },
        ctaAction: () => (0, a.pX)(u.BVt.NITRO_HOME),
    },
    [i.$.GUILD_BOOSTER]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? d.intl.string(d.t.VMvz3m) : d.intl.string(d.t.xFVZeU);
        },
        ctaAction: () => (0, l.openUserSettings)(o.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [i.$.ORB_PROFILE]: {
        ctaLabel: () => d.intl.string(d.t.EBYkzk),
        ctaAction: () => (0, a.pX)(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(c.G2.ORBS)),
    },
    [i.$.QUEST_COMPLETED]: {
        ctaLabel: () => d.intl.string(d.t.swICIT),
        ctaAction: () => (0, s.m)({ fromContent: r.u.QUEST_BADGE }),
    },
};
function I(e) {
    return A[e];
}
let T = "badge-details";
