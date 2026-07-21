"use strict";
n.d(t, { c: () => A });
var i = n(379197),
    r = n(554146),
    a = n(933681),
    s = n(155718),
    l = n(933958),
    o = n(476370),
    d = n(457421),
    c = n(651162),
    u = n(295811),
    _ = n(758836),
    E = n(188275);
function A(e) {
    switch (e) {
        case r.M.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            return d.A.getMarketingBySurface(i.R.DESKTOP_SHOP_BUTTON)?.version ?? 0;
        case r.M.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, o.C)({ storeState: l.Ay.getState(), surface: s.YI.VOICE_LAUNCHER });
        case r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
        case r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE:
            return 0;
        case r.M.COLLECTIBLES_SHOP_WIDE_BANNER:
            for (let e of [_.G2.HOME, _.G2.ORBS, _.G2.CATALOG]) {
                let t = u.A.getShopBlocks(e).find((e) => e.type === c.g.WIDE_BANNER);
                if (t?.dismissibleContentVersion != null) return t.dismissibleContentVersion;
            }
            return 0;
        case r.M.GAME_SHOP_ANNOUNCEMENT_MODAL:
            return E.Lo;
        case r.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE:
        case r.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA:
        case r.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER:
            return 1;
        case r.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER:
            return 0;
        default:
            return (0, a.dr)(e, { andFail: !1 }), 0;
    }
}
