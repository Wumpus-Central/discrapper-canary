n.d(t, { Om: () => g, P3: () => d, hJ: () => p, ie: () => c });
var r = n(70283),
    l = n(976860),
    i = n(652215),
    a = n(758836),
    s = n(375708);
let o = {
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
function d(e) {
    return o[e];
}
let u = new Set(Object.values(o));
function c(e) {
    return u.has(e);
}
let m = {
    [r.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? s.intl.string(s.t.xGjjkd) : s.intl.string(s.t.BTxm69);
        },
        ctaAction: () => (0, l.pX)(i.BVt.NITRO_HOME),
        ctaVariant: (e) => {
            let { owned: t } = e;
            return t ? "secondary" : "expressive";
        },
    },
    [r.$.GUILD_BOOSTER]: {
        ctaLabel: () => s.intl.string(s.t["6LHsjg"]),
        ctaAction: () =>
            window.open(
                "https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ#h_01HGX7DJ33YD3AP7K0E0GYSMYM",
                "_blank",
                "noopener,noreferrer",
            ),
        ctaVariant: () => "secondary",
    },
    [r.$.ORB_PROFILE]: {
        ctaLabel: () => s.intl.string(s.t["0TmQRG"]),
        ctaAction: () => (0, l.pX)(i.BVt.COLLECTIBLES_SHOP_WITH_TAB(a.G2.ORBS)),
        ctaVariant: () => "secondary",
    },
};
function g(e) {
    return m[e];
}
let p = "badge-details";
