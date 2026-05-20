"use strict";
n.d(t, { Om: () => d, P3: () => u, hJ: () => _ });
var i = n(70283),
    r = n(976860),
    s = n(652215),
    a = n(758836),
    o = n(375708);
let l = {
    premium: i.$.PREMIUM_TENURE,
    premium_tenure_1_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_3_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_6_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_12_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_24_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_36_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_60_month_v2: i.$.PREMIUM_TENURE,
    premium_tenure_72_month_v2: i.$.PREMIUM_TENURE,
    partner: i.$.PARTNER,
    certified_moderator: i.$.CERTIFIED_MODERATOR,
    hypesquad: i.$.HYPESQUAD,
    hypesquad_house_1: i.$.HYPESQUAD_HOUSE_1,
    hypesquad_house_2: i.$.HYPESQUAD_HOUSE_2,
    hypesquad_house_3: i.$.HYPESQUAD_HOUSE_3,
    bug_hunter_level_1: i.$.BUG_HUNTER_LEVEL_1,
    bug_hunter_level_2: i.$.BUG_HUNTER_LEVEL_2,
    verified_developer: i.$.VERIFIED_DEVELOPER,
    early_supporter: i.$.EARLY_SUPPORTER,
    guild_booster_lvl1: i.$.GUILD_BOOSTER,
    guild_booster_lvl2: i.$.GUILD_BOOSTER,
    guild_booster_lvl3: i.$.GUILD_BOOSTER,
    guild_booster_lvl4: i.$.GUILD_BOOSTER,
    guild_booster_lvl5: i.$.GUILD_BOOSTER,
    guild_booster_lvl6: i.$.GUILD_BOOSTER,
    guild_booster_lvl7: i.$.GUILD_BOOSTER,
    guild_booster_lvl8: i.$.GUILD_BOOSTER,
    guild_booster_lvl9: i.$.GUILD_BOOSTER,
    legacy_username: i.$.LEGACY_USERNAME,
    quest_completed: i.$.QUEST_COMPLETED,
    april_fools_2026: i.$.APRIL_FOOLS_2026,
    orb_profile_badge: i.$.ORB_PROFILE,
};
function u(e) {
    return l[e];
}
let c = {
    [i.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? o.intl.string(o.t.xGjjkd) : o.intl.string(o.t.BTxm69);
        },
        ctaAction: () => (0, r.pX)(s.BVt.NITRO_HOME),
        ctaVariant: (e) => {
            let { owned: t } = e;
            return t ? "secondary" : "expressive";
        },
    },
    [i.$.GUILD_BOOSTER]: {
        ctaLabel: () => o.intl.string(o.t["6LHsjg"]),
        ctaAction: () =>
            window.open(
                "https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-FAQ#h_01HGX7DJ33YD3AP7K0E0GYSMYM",
                "_blank",
                "noopener,noreferrer",
            ),
        ctaVariant: () => "secondary",
    },
    [i.$.ORB_PROFILE]: {
        ctaLabel: () => o.intl.string(o.t["0TmQRG"]),
        ctaAction: () => (0, r.pX)(s.BVt.COLLECTIBLES_SHOP_WITH_TAB(a.G2.ORBS)),
        ctaVariant: () => "secondary",
    },
};
function d(e) {
    return c[e];
}
let _ = "badge-details";
