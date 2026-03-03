n.d(t, { Ay: () => D, jW: () => P, w1: () => L });
var i,
    s = n(627968),
    a = n(64700),
    l = n(367622),
    r = n(827734),
    o = n(582754),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    A = n(976860),
    g = n(780964),
    h = n(358776),
    x = n(840065),
    p = n(112848),
    E = n(149757),
    C = n(920050),
    T = n(598998),
    S = n(652215),
    I = n(355097),
    f = n(985018),
    N = n(64514),
    b = n(121818),
    j = n(419455),
    v = n(288604),
    O = n(163635),
    R = n(345362),
    y = n(509442),
    P =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let L = [
    { id: "bestof", label: () => f.intl.string(f.t.q1u7nQ) },
    { id: "appearance", label: () => f.intl.string(f.t.CUnZkZ) },
    { id: "upgrades", label: () => f.intl.string(f.t.KC5q8v) },
    { id: "vip", label: () => f.intl.string(f.t.DjEAcv) },
];
function D() {
    let e = (0, c.DP)(),
        t = (0, p.Lh)(),
        n = (0, E.N)(t)?.standard ?? null,
        { analyticsLocations: i } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        P = (0, m.A)({ scrollPosition: I._F.TRY_IT_OUT, analyticsLocations: i }),
        L = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openClientThemes");
            (0, x.openUserSettings)(e ? g.X.DISPLAY_THEME_CATEGORY : g.X.APPEARANCE_PANEL, {
                section: S.nc_.APPEARANCE,
                analyticsLocations: i,
            });
        }, [i]),
        D = (0, a.useCallback)(() => {
            (0, x.openUserSettings)(g.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: S.nc_.GUILD_BOOSTING,
                analyticsLocations: i,
            });
        }, [i]),
        M = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings"),
                t = (0, h.WJ)("openCustomAppSettings"),
                n = g.X.APPEARANCE_PANEL,
                s = I.kq.CUSTOM_APP_ICONS;
            e
                ? ((n = g.X.DISPLAY_IN_APP_ICON_CATEGORY), (s = void 0))
                : t && ((n = g.X.APPEARANCE_IN_APP_ICON), (s = void 0)),
                (0, x.openUserSettings)(n, { section: S.nc_.APPEARANCE, scrollPosition: s, analyticsLocations: i });
        }, [i]),
        G = (0, a.useCallback)(() => {
            (0, A.pX)(S.BVt.COLLECTIBLES_SHOP);
        }, []),
        U = (0, a.useCallback)(() => {
            (0, x.openUserSettings)(g.X.SOUNDBOARD_CATEGORY, {
                section: S.nc_.VOICE,
                subsection: I.MJ,
                analyticsLocations: i,
            });
        }, [i]),
        k = (0, a.useCallback)(() => {
            (0, x.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: S.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: i },
                () => (0, _.L)({ analyticsLocations: i }),
            );
        }, [i]),
        V = (0, T.A)(),
        H = (0, a.useMemo)(() => V.map((e) => e?.id), [V]),
        w = (0, a.useMemo)(
            () => [
                {
                    id: C.SERVER_BOOSTS_CARD_ID,
                    title: f.intl.formatToPlainString(f.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: f.intl.formatToPlainString(f.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: D,
                    primaryAsset: (0, s.jsx)(l.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.PROFILES_CARD_ID,
                    title: f.intl.string(f.t.xDRab3),
                    description: f.intl.string(f.t.yn6fWA),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: P,
                    primaryAsset: (0, s.jsx)(l.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: C.HD_VIDEO_CARD_ID,
                    title: f.intl.string(f.t["/mQ5gg"]),
                    description: f.intl.string(f.t["7WwAXh"]),
                    primaryAsset: (0, s.jsx)(l.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.CLIENT_THEMES_CARD_ID,
                    title: f.intl.string(f.t.acc6h6),
                    description: f.intl.formatToPlainString(f.t.WQazjs, { themeCount: 20 }),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: y.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: C.MORE_EMOJIS_CARD_ID,
                    title: f.intl.string(f.t.D8vIDT),
                    description: f.intl.string(f.t.DRMecB),
                    primaryAsset: (0, s.jsx)(l.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.LARGE_UPLOADS_CARD_ID,
                    title: f.intl.string(f.t.nL1WZV),
                    description: f.intl.formatToPlainString(f.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, s.jsx)(l.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: C.CUSTOM_APP_ICONS_CARD_ID,
                    title: f.intl.string(f.t.rkb1vA),
                    description: f.intl.string(f.t["1uPk1Z"]),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: M,
                    primaryAsset: v.A,
                    categories: ["appearance"],
                },
                {
                    id: C.ENTRANCE_SOUNDS_CARD_ID,
                    title: f.intl.string(f.t.WJfCPi),
                    description: f.intl.string(f.t.liQKJR),
                    ctaText: f.intl.string(f.t.jVcuVY),
                    onCtaClick: U,
                    primaryAsset: O.A,
                    categories: ["appearance"],
                },
                {
                    id: C.DISPLAY_NAME_STYLES_CARD_ID,
                    title: f.intl.string(f.t.OLtTrt),
                    description: f.intl.string(f.t["di/pXR"]),
                    onCtaClick: k,
                    primaryAsset: j.A,
                    ctaText: f.intl.string(f.t.jVcuVY),
                    categories: ["appearance"],
                },
                {
                    id: C.CUSTOM_SOUNDS_CARD_ID,
                    title: f.intl.string(f.t["Cu/oFd"]),
                    description: f.intl.string(f.t.czj2aa),
                    primaryAsset: (0, s.jsx)(l.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: C.SPECIAL_STICKERS_CARD_ID,
                    title: f.intl.string(f.t.MQoVeb),
                    description: f.intl.string(f.t.HGCLZX),
                    primaryAsset: R.A,
                    categories: ["upgrades"],
                },
                {
                    id: C.SUPER_REACTIONS_CARD_ID,
                    title: f.intl.string(f.t.qERvAA),
                    description: f.intl.string(f.t.WkUWzx),
                    primaryAsset: (0, s.jsx)(l.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: C.VIDEO_BACKGROUNDS_CARD_ID,
                    title: f.intl.string(f.t.ssVDYQ),
                    description: f.intl.string(f.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? N : b,
                    categories: ["upgrades"],
                },
                {
                    id: C.EARLY_ACCESS_CARD_ID,
                    title: f.intl.string(f.t["g/KRY6"]),
                    description: f.intl.string(f.t.JzAmJc),
                    primaryAsset: (0, s.jsx)(l.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.BADGE_CARD_ID,
                    title: f.intl.string(f.t.Bn3CtB),
                    description: f.intl.string(f.t.n26Vcu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != n
                            ? (0, s.jsx)("img", { src: n, alt: "", width: 160, draggable: "false" })
                            : (0, s.jsx)(l.vXC, { color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: f.intl.string(f.t["MTD+7w"]),
                    description: f.intl.string(f.t.Bhs0s6),
                    ctaText: f.intl.string(f.t.dBJVnZ),
                    onCtaClick: G,
                    primaryAsset: (0, s.jsx)(l.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: C.PERMADECOS_CARD_ID,
                    title: f.intl.string(f.t.L14NZN),
                    description: f.intl.string(f.t.eCZkAI),
                    primaryAsset: (0, s.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, n, P, L, D, M, G, U, k],
        );
    return (0, a.useMemo)(() => w.filter((e) => null != e && !H.includes(e.id)), [w, H]);
}
