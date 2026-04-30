n.d(t, { O: () => o, P: () => a });
var l = n(70283),
    r = n(985018);
let i = {
    premium: l.$.PREMIUM_TENURE,
    premium_tenure_1_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_3_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_6_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_12_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_24_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_36_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_60_month_v2: l.$.PREMIUM_TENURE,
    premium_tenure_72_month_v2: l.$.PREMIUM_TENURE,
    partner: l.$.PARTNER,
    certified_moderator: l.$.CERTIFIED_MODERATOR,
    hypesquad: l.$.HYPESQUAD,
    hypesquad_house_1: l.$.HYPESQUAD_HOUSE_1,
    hypesquad_house_2: l.$.HYPESQUAD_HOUSE_2,
    hypesquad_house_3: l.$.HYPESQUAD_HOUSE_3,
    bug_hunter_level_1: l.$.BUG_HUNTER_LEVEL_1,
    bug_hunter_level_2: l.$.BUG_HUNTER_LEVEL_2,
    verified_developer: l.$.VERIFIED_DEVELOPER,
    early_supporter: l.$.EARLY_SUPPORTER,
    guild_booster_lvl1: l.$.GUILD_BOOSTER,
    guild_booster_lvl2: l.$.GUILD_BOOSTER,
    guild_booster_lvl3: l.$.GUILD_BOOSTER,
    guild_booster_lvl4: l.$.GUILD_BOOSTER,
    guild_booster_lvl5: l.$.GUILD_BOOSTER,
    guild_booster_lvl6: l.$.GUILD_BOOSTER,
    guild_booster_lvl7: l.$.GUILD_BOOSTER,
    guild_booster_lvl8: l.$.GUILD_BOOSTER,
    guild_booster_lvl9: l.$.GUILD_BOOSTER,
    legacy_username: l.$.LEGACY_USERNAME,
    quest_completed: l.$.QUEST_COMPLETED,
    april_fools_2026: l.$.APRIL_FOOLS_2026,
    orb_profile_badge: l.$.ORB_PROFILE,
};
function a(e) {
    return i[e];
}
let s = {
    [l.$.PREMIUM_TENURE]: {
        description: () => r.intl.string(r.t.SuO1X2),
        ctaLabel: () => r.intl.string(r.t.LEgsyS),
        ctaAction: "nitro_home",
        ctaVariant: "secondary",
    },
    [l.$.GUILD_BOOSTER]: {
        description: () => r.intl.string(r.t.gV7733),
        ctaLabel: () => r.intl.string(r.t.HKJcgE),
        ctaAction: "boost",
        ctaVariant: "secondary",
    },
    [l.$.QUEST_COMPLETED]: {
        description: () => r.intl.string(r.t["G+gbgO"]),
        ctaLabel: () => r.intl.string(r.t.FQHRUK),
        ctaAction: "quests",
        ctaVariant: "secondary",
    },
    [l.$.ORB_PROFILE]: {
        description: () => r.intl.string(r.t.tN6Sgx),
        ctaLabel: () => r.intl.string(r.t.wTVyFK),
        ctaAction: "orbs",
        ctaVariant: "expressive",
    },
    [l.$.GIFTING]: {
        description: () => r.intl.string(r.t["PECB/R"]),
        ctaLabel: () => r.intl.string(r.t.hdouKj),
        ctaAction: "gifting",
        ctaVariant: "secondary",
    },
};
function o(e) {
    return s[e];
}
