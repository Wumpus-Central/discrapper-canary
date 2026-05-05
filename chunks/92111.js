"use strict";
n.d(t, { Om: () => l, P3: () => a, hJ: () => u });
var i = n(70283),
    r = n(375708);
let s = {
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
function a(e) {
    return s[e];
}
let o = {
    [i.$.PREMIUM_TENURE]: {
        description: () => r.intl.string(r.t.SuO1X2),
        ctaLabel: () => r.intl.string(r.t.LEgsyS),
        ctaAction: "nitro_home",
        ctaVariant: "secondary",
    },
    [i.$.GUILD_BOOSTER]: {
        description: () => r.intl.string(r.t.gV7733),
        ctaLabel: () => r.intl.string(r.t.HKJcgE),
        ctaAction: "boost",
        ctaVariant: "secondary",
    },
    [i.$.QUEST_COMPLETED]: {
        description: () => r.intl.string(r.t["G+gbgO"]),
        ctaLabel: () => r.intl.string(r.t.FQHRUK),
        ctaAction: "quests",
        ctaVariant: "secondary",
    },
    [i.$.ORB_PROFILE]: {
        description: () => r.intl.string(r.t.tN6Sgx),
        ctaLabel: () => r.intl.string(r.t.wTVyFK),
        ctaAction: "orbs",
        ctaVariant: "expressive",
    },
    [i.$.GIFTING]: {
        description: () => r.intl.string(r.t["PECB/R"]),
        ctaLabel: () => r.intl.string(r.t.hdouKj),
        ctaAction: "gifting",
        ctaVariant: "secondary",
    },
};
function l(e) {
    return o[e];
}
let u = "badge-details";
