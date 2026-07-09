n.d(t, { ie: () => _, w0: () => m, Om: () => A, HW: () => b, wM: () => g, hJ: () => R });
var a = n(70283),
    r = n(696292),
    l = n(216934),
    i = n(976860),
    s = n(780964),
    d = n(766075),
    o = n(652215),
    c = n(758836),
    u = n(375708);
let f = {
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
function m(e) {
    let t = f[e];
    if (null != t) return t;
    let n = a.$[e.toUpperCase()];
    return "number" == typeof n ? n : void 0;
}
let E = new Set(Object.values(f));
function _(e) {
    return E.has(e);
}
function g(e) {
    return e === a.$.GAME_VARIETY || e === a.$.GAME_TIME;
}
let p = new Set([a.$.ACCOUNT_AGE, a.$.STREAMING, a.$.GAME_TIME, a.$.GAME_VARIETY]);
function b(e) {
    return p.has(e);
}
let h = {
    [a.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t, isViewerOnUpgradeableNitro: n } = e;
            return !0 === n ? u.intl.string(u.t.uKFeS1) : t ? u.intl.string(u.t.xGjjkd) : u.intl.string(u.t.BTxm69);
        },
        ctaAction: () => (0, i.pX)(o.BVt.NITRO_HOME),
    },
    [a.$.GUILD_BOOSTER]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? u.intl.string(u.t.VMvz3m) : u.intl.string(u.t.xFVZeU);
        },
        ctaAction: () => (0, d.openUserSettings)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [a.$.ORB_PROFILE]: {
        ctaLabel: () => u.intl.string(u.t.EBYkzk),
        ctaAction: () => (0, i.pX)(o.BVt.COLLECTIBLES_SHOP_WITH_TAB(c.G2.ORBS)),
    },
    [a.$.QUEST_COMPLETED]: {
        ctaLabel: () => u.intl.string(u.t.swICIT),
        ctaAction: () => (0, l.m)({ fromContent: r.u.QUEST_BADGE }),
    },
};
function A(e) {
    return h[e];
}
let R = "badge-details";
