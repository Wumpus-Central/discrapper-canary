n.d(t, { ie: () => p, w0: () => g, Om: () => _, hJ: () => x });
var l = n(70283),
    r = n(696292),
    i = n(617986),
    a = n(976860),
    s = n(780964),
    o = n(766075),
    d = n(652215),
    u = n(758836),
    c = n(375708);
let m = {
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
function g(e) {
    let t = m[e];
    if (null != t) return t;
    let n = l.$[e.toUpperCase()];
    return "number" == typeof n ? n : void 0;
}
let f = new Set(Object.values(m));
function p(e) {
    return f.has(e);
}
let h = {
    [l.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t, isViewerOnUpgradeableNitro: n } = e;
            return !0 === n ? c.intl.string(c.t.uKFeS1) : t ? c.intl.string(c.t.xGjjkd) : c.intl.string(c.t.BTxm69);
        },
        ctaAction: () => (0, a.pX)(d.BVt.NITRO_HOME),
    },
    [l.$.GUILD_BOOSTER]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? c.intl.string(c.t.VMvz3m) : c.intl.string(c.t.xFVZeU);
        },
        ctaAction: () => (0, o.openUserSettings)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [l.$.ORB_PROFILE]: {
        ctaLabel: () => c.intl.string(c.t.EBYkzk),
        ctaAction: () => (0, a.pX)(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(u.G2.ORBS)),
    },
    [l.$.QUEST_COMPLETED]: {
        ctaLabel: () => c.intl.string(c.t["0cTvRG"]),
        ctaAction: () => (0, i.navigateToQuestHome)({ fromContent: r.u.QUEST_BADGE }),
    },
};
function _(e) {
    return h[e];
}
let x = "badge-details";
