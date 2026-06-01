"use strict";
n.d(t, { Om: () => p, P3: () => d, hJ: () => E, ie: () => h });
var i = n(70283),
    r = n(976860),
    s = n(780964),
    a = n(766075),
    o = n(652215),
    l = n(758836),
    u = n(375708);
let c = {
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
function d(e) {
    return c[e];
}
let _ = new Set(Object.values(c));
function h(e) {
    return _.has(e);
}
let f = {
    [i.$.PREMIUM_TENURE]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? u.intl.string(u.t.xGjjkd) : u.intl.string(u.t.BTxm69);
        },
        ctaAction: () => (0, r.pX)(o.BVt.NITRO_HOME),
    },
    [i.$.GUILD_BOOSTER]: {
        ctaLabel: (e) => {
            let { owned: t } = e;
            return t ? u.intl.string(u.t.VMvz3m) : u.intl.string(u.t.xFVZeU);
        },
        ctaAction: () => (0, a.openUserSettings)(s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
    },
    [i.$.ORB_PROFILE]: {
        ctaLabel: () => u.intl.string(u.t.EBYkzk),
        ctaAction: () => (0, r.pX)(o.BVt.COLLECTIBLES_SHOP_WITH_TAB(l.G2.ORBS)),
    },
    [i.$.QUEST_COMPLETED]: {
        ctaLabel: () => u.intl.string(u.t["0cTvRG"]),
        ctaAction: () => (0, r.pX)(o.BVt.QUEST_HOME),
    },
};
function p(e) {
    return f[e];
}
let E = "badge-details";
