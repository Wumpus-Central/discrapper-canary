n.d(t, {
    OO: () => f,
    Ay: () => h,
    Se: () => A,
    NN: () => p,
    Ig: () => T,
    sy: () => E,
    B5: () => N,
    d: () => S,
    Mk: () => m,
    aD: () => I,
    s9: () => v,
    LV: () => g,
    Ds: () => O,
    uK: () => d,
    lk: () => C,
});
var r,
    u,
    i,
    l,
    o =
        (((r = {})[(r.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS = 120)] =
            "PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS"),
        r),
    a = n(945810),
    s = n(646917),
    c = n(576761);
let d = (0, a.mj)({
        name: "2025-11-video-end-card-v2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    f = (0, a.mj)({
        name: "2026-05-app-store-overlay-feature-gate",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
(0, a.mj)({
    name: "2026-07-custom-app-store-overlay",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let A = (0, a.mj)({
    name: "2026-07-ios-attribution",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E =
    (((u = {})[(u.DEFAULT = 0)] = "DEFAULT"),
    (u[(u.AUTO_ENABLE_CAPTIONS = 1)] = "AUTO_ENABLE_CAPTIONS"),
    (u[(u.AUTO_UNMUTE = 2)] = "AUTO_UNMUTE"),
    u);
let T = (0, a.mj)({
        name: "2026-03-muted-video-quest-new-defaults",
        kind: "user",
        defaultConfig: { enabled: !1, variant: 0 },
        variations: { 0: { enabled: !1, variant: 0 }, 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
    }),
    _ = (0, a.mj)({
        name: "2026-04-quests-premium-orb-multiplier-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function C(e) {
    let { enabled: t } = _.useConfig({ location: e }),
        n = (0, s.z)();
    return {
        shouldShowBonusOrbsUX: n !== c.MA.INELIGIBLE && n !== c.MA.XBOX_GAME_PASS && t,
        multiplier: o.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100,
    };
}
let I = (0, a.mj)({
    name: "2026-05-quest-home-tile-redesign",
    kind: "user",
    defaultConfig: { useNewLayoutWithSearch: !1, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
    variations: {
        0: { useNewLayoutWithSearch: !1, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
        1: { useNewLayoutWithSearch: !0, useNewTile: !1, useNewFeaturedTiles: !1, ctaOnHover: !1 },
        2: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !0 },
        3: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !1, ctaOnHover: !0 },
        4: { useNewLayoutWithSearch: !0, useNewTile: !0, useNewFeaturedTiles: !0, ctaOnHover: !1 },
    },
});
(0, a.mj)({
    name: "2026-05-bounty-stale-refresh-quest-home",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let p = (0, a.mj)({
    name: "2026-09-mobile-quest-home-sort-priority",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S =
    588245 != n.j
        ? (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
          (i[(i.NEW_LAYOUT_WITH_SEARCH = 1)] = "NEW_LAYOUT_WITH_SEARCH"),
          (i[(i.LARGE_MASK_MARGIN = 2)] = "LARGE_MASK_MARGIN"),
          (i[(i.REMOVE_QUEST_TITLE_SUFFIX = 3)] = "REMOVE_QUEST_TITLE_SUFFIX"),
          (i[(i.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER = 4)] = "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER"),
          i)
        : null;
let m = (0, a.mj)({
    name: "2026-06-quest-home-layout-visual-tweaks",
    kind: "user",
    defaultConfig: { enabled: !1, variant: 0 },
    variations: {
        0: { enabled: !1, variant: 0 },
        1: { enabled: !0, variant: 1 },
        2: { enabled: !0, variant: 2 },
        3: { enabled: !0, variant: 3 },
        4: { enabled: !0, variant: 4 },
    },
});
(0, a.mj)({
    name: "2026-09-quest-mobile-bar-secondary-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var O =
    (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
    (l[(l.ALL_TIERS = 1)] = "ALL_TIERS"),
    (l[(l.TIER_1_VISUALS = 2)] = "TIER_1_VISUALS"),
    (l[(l.TIER_2_VISUALS = 3)] = "TIER_2_VISUALS"),
    (l[(l.TIER_3_VISUALS = 4)] = "TIER_3_VISUALS"),
    l);
let g = (0, a.mj)({
    name: "2026-09-new-orb-reward-visuals",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 3 }, 3: { variant: 4 }, 4: { variant: 2 } },
});
(0, a.mj)({
    name: "2026-09-mobile-quest-reward-button-to-secondary-button",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
let h = (0, a.mj)({
        name: "2026-10-clickable-hero-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    N = {
        newLayoutWithSearch: !1,
        iconOnlyCTA: !1,
        badge: { duration: !1, new: !1, countdown: !1 },
        showGameLogo: !0,
        showQuestTitle: !0,
        compactReward: !1,
        shorterHeight: !1,
        gameIconReward: !1,
    },
    v = (0, a.mj)({
        name: "2026-11-quest-home-tile-single-elements",
        kind: "user",
        defaultConfig: N,
        variations: {
            0: N,
            1: { ...N, newLayoutWithSearch: !0 },
            2: { ...N, newLayoutWithSearch: !0, iconOnlyCTA: !0 },
            3: { ...N, newLayoutWithSearch: !0, badge: { duration: !0, new: !1, countdown: !1 } },
            4: { ...N, newLayoutWithSearch: !0, badge: { duration: !1, new: !0, countdown: !1 } },
            5: { ...N, newLayoutWithSearch: !0, badge: { duration: !1, new: !1, countdown: !0 } },
            6: { ...N, newLayoutWithSearch: !0, showGameLogo: !1 },
            7: { ...N, newLayoutWithSearch: !0, showQuestTitle: !1 },
            8: { ...N, newLayoutWithSearch: !0, compactReward: !0 },
            9: { ...N, newLayoutWithSearch: !0, shorterHeight: !0 },
            10: { ...N, newLayoutWithSearch: !0, gameIconReward: !0 },
            11: { ...N, newLayoutWithSearch: !0, badge: { duration: !0, new: !0, countdown: !1 } },
        },
    });
