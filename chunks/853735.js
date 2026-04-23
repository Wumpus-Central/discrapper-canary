"use strict";
n.d(t, { c: () => h });
var i = n(379197),
    r = n(554146),
    s = n(933681),
    a = n(155718),
    o = n(933958),
    l = n(476370),
    d = n(457421),
    _ = n(651162),
    u = n(295811),
    c = n(758836),
    E = n(188275);
function h(e) {
    switch (e) {
        case r.M.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            return d.A.getMarketingBySurface(i.R.DESKTOP_SHOP_BUTTON)?.version ?? 0;
        case r.M.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, l.C)({ storeState: o.Ay.getState(), surface: a.YI.VOICE_LAUNCHER });
        case r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
            return 0;
        case r.M.COLLECTIBLES_SHOP_WIDE_BANNER:
            for (let e of [c.G2.HOME, c.G2.ORBS, c.G2.CATALOG]) {
                let t = u.A.getShopBlocks(e).find((e) => e.type === _.g.WIDE_BANNER);
                if (t?.dismissibleContentVersion != null) return t.dismissibleContentVersion;
            }
            return 0;
        case r.M.GAME_SHOP_ANNOUNCEMENT_MODAL:
            return E.Lo;
        case r.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD:
        case r.M.GAME_SHOP_ORBS_REWARD_BANNER:
        case r.M.SLAYER_STOREFRONT_ORBS_REWARDS_ANNOUNCEMENT:
        case r.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL:
        case r.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE:
        case r.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA:
        case r.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER:
            return 1;
        default:
            return (0, s.dr)(e, { andFail: !1 }), 0;
    }
}
