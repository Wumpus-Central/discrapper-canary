n.d(t, { Om: () => f, P3: () => c, hJ: () => _, ie: () => g });
var r = n(70283),
    l = n(976860),
    i = n(780964),
    a = n(766075),
    s = n(652215),
    o = n(758836),
    d = n(375708);
let u = {
    premium: r.$.PREMIUM_TENURE,
    premium_tenure_1_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_3_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_6_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_12_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_24_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_36_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_60_month_v2: r.$.PREMIUM_TENURE,
    premium_tenure_72_month_v2: r.$.PREMIUM_TENURE,
    partner: r.$.PARTNER,
    certified_moderator: r.$.CERTIFIED_MODERATOR,
    hypesquad: r.$.HYPESQUAD,
    hypesquad_house_1: r.$.HYPESQUAD_HOUSE_1,
    hypesquad_house_2: r.$.HYPESQUAD_HOUSE_2,
    hypesquad_house_3: r.$.HYPESQUAD_HOUSE_3,
    bug_hunter_level_1: r.$.BUG_HUNTER_LEVEL_1,
    bug_hunter_level_2: r.$.BUG_HUNTER_LEVEL_2,
    verified_developer: r.$.VERIFIED_DEVELOPER,
    early_supporter: r.$.EARLY_SUPPORTER,
    guild_booster_lvl1: r.$.GUILD_BOOSTER,
    guild_booster_lvl2: r.$.GUILD_BOOSTER,
    guild_booster_lvl3: r.$.GUILD_BOOSTER,
    guild_booster_lvl4: r.$.GUILD_BOOSTER,
    guild_booster_lvl5: r.$.GUILD_BOOSTER,
    guild_booster_lvl6: r.$.GUILD_BOOSTER,
    guild_booster_lvl7: r.$.GUILD_BOOSTER,
    guild_booster_lvl8: r.$.GUILD_BOOSTER,
    guild_booster_lvl9: r.$.GUILD_BOOSTER,
    legacy_username: r.$.LEGACY_USERNAME,
    quest_completed: r.$.QUEST_COMPLETED,
    april_fools_2026: r.$.APRIL_FOOLS_2026,
    orb_profile_badge: r.$.ORB_PROFILE,
};
function c(e) {
    return u[e];
}
let m = new Set(Object.values(u));
function g(e) {
    return m.has(e);
}
let p = {
    [r.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? d.intl.string(d.t.xGjjkd) : d.intl.string(d.t.BTxm69);
        },
        ctaAction: () => (0, l.pX)(s.BVt.NITRO_HOME),
    },
    [r.$.GUILD_BOOSTER]: {
        ctaLabel: () => d.intl.string(d.t["6LHsjg"]),
        ctaAction: () => (0, a.openUserSettings)(i.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [r.$.ORB_PROFILE]: {
        ctaLabel: () => d.intl.string(d.t.C2rTrm),
        ctaAction: () => (0, l.pX)(s.BVt.COLLECTIBLES_SHOP_WITH_TAB(o.G2.ORBS)),
    },
};
function f(e) {
    return p[e];
}
let _ = "badge-details";
