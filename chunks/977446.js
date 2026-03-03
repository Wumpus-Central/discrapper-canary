n.d(t, { Ay: () => P, jW: () => R, w1: () => y });
var i,
    s = n(627968),
    a = n(64700),
    l = n(367622),
    r = n(827734),
    o = n(582754),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(206835),
    m = n(976860),
    A = n(780964),
    g = n(358776),
    h = n(840065),
    x = n(112848),
    p = n(149757),
    E = n(920050),
    C = n(598998),
    T = n(652215),
    S = n(355097),
    I = n(985018),
    f = n(64514),
    N = n(121818),
    b = n(288604),
    j = n(163635),
    v = n(345362),
    O = n(509442),
    R =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let y = [
    { id: "bestof", label: () => I.intl.string(I.t.q1u7nQ) },
    { id: "appearance", label: () => I.intl.string(I.t.CUnZkZ) },
    { id: "upgrades", label: () => I.intl.string(I.t.KC5q8v) },
    { id: "vip", label: () => I.intl.string(I.t.DjEAcv) },
];
function P() {
    let e = (0, c.DP)(),
        t = (0, x.Lh)(),
        n = (0, p.N)(t)?.standard ?? null,
        { analyticsLocations: i } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        R = (0, _.A)({ scrollPosition: S._F.TRY_IT_OUT, analyticsLocations: i }),
        y = (0, a.useCallback)(() => {
            let e = (0, g.Ci)("openClientThemes");
            (0, h.openUserSettings)(e ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, {
                section: T.nc_.APPEARANCE,
                analyticsLocations: i,
            });
        }, [i]),
        P = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: T.nc_.GUILD_BOOSTING,
                analyticsLocations: i,
            });
        }, [i]),
        L = (0, a.useCallback)(() => {
            let e = (0, g.Ci)("openCustomAppSettings"),
                t = (0, g.WJ)("openCustomAppSettings"),
                n = A.X.APPEARANCE_PANEL,
                s = S.kq.CUSTOM_APP_ICONS;
            e
                ? ((n = A.X.DISPLAY_IN_APP_ICON_CATEGORY), (s = void 0))
                : t && ((n = A.X.APPEARANCE_IN_APP_ICON), (s = void 0)),
                (0, h.openUserSettings)(n, { section: T.nc_.APPEARANCE, scrollPosition: s, analyticsLocations: i });
        }, [i]),
        D = (0, a.useCallback)(() => {
            (0, m.pX)(T.BVt.COLLECTIBLES_SHOP);
        }, []),
        M = (0, a.useCallback)(() => {
            (0, h.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, {
                section: T.nc_.VOICE,
                subsection: S.MJ,
                analyticsLocations: i,
            });
        }, [i]),
        G = (0, C.A)(),
        U = (0, a.useMemo)(() => G.map((e) => e?.id), [G]),
        k = (0, a.useMemo)(
            () => [
                {
                    id: E.SERVER_BOOSTS_CARD_ID,
                    title: I.intl.formatToPlainString(I.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                    description: I.intl.formatToPlainString(I.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                    subscriptionRequired: !0,
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: P,
                    primaryAsset: (0, s.jsx)(l.CIt, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.PROFILES_CARD_ID,
                    title: I.intl.string(I.t.xDRab3),
                    description: I.intl.string(I.t.yn6fWA),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: R,
                    primaryAsset: (0, s.jsx)(l.R$P, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.HD_VIDEO_CARD_ID,
                    title: I.intl.string(I.t["/mQ5gg"]),
                    description: I.intl.string(I.t["7WwAXh"]),
                    primaryAsset: (0, s.jsx)(l.TMU, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CLIENT_THEMES_CARD_ID,
                    title: I.intl.string(I.t.acc6h6),
                    description: I.intl.formatToPlainString(I.t.WQazjs, { themeCount: 20 }),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: y,
                    primaryAsset: O.A,
                    categories: ["bestof", "appearance"],
                },
                {
                    id: E.MORE_EMOJIS_CARD_ID,
                    title: I.intl.string(I.t.D8vIDT),
                    description: I.intl.string(I.t.DRMecB),
                    primaryAsset: (0, s.jsx)(l.nT5, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.LARGE_UPLOADS_CARD_ID,
                    title: I.intl.string(I.t.nL1WZV),
                    description: I.intl.formatToPlainString(I.t.k8LC1w, { maxSizeMb: 500 }),
                    primaryAsset: (0, s.jsx)(l.oYh, { alt: "", ariaHidden: !0 }),
                    categories: ["bestof", "upgrades"],
                },
                {
                    id: E.CUSTOM_APP_ICONS_CARD_ID,
                    title: I.intl.string(I.t.rkb1vA),
                    description: I.intl.string(I.t["1uPk1Z"]),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: L,
                    primaryAsset: b.A,
                    categories: ["appearance"],
                },
                {
                    id: E.ENTRANCE_SOUNDS_CARD_ID,
                    title: I.intl.string(I.t.WJfCPi),
                    description: I.intl.string(I.t.liQKJR),
                    ctaText: I.intl.string(I.t.jVcuVY),
                    onCtaClick: M,
                    primaryAsset: j.A,
                    categories: ["appearance"],
                },
                {
                    id: E.CUSTOM_SOUNDS_CARD_ID,
                    title: I.intl.string(I.t["Cu/oFd"]),
                    description: I.intl.string(I.t.czj2aa),
                    primaryAsset: (0, s.jsx)(l.WPL, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.SPECIAL_STICKERS_CARD_ID,
                    title: I.intl.string(I.t.MQoVeb),
                    description: I.intl.string(I.t.HGCLZX),
                    primaryAsset: v.A,
                    categories: ["upgrades"],
                },
                {
                    id: E.SUPER_REACTIONS_CARD_ID,
                    title: I.intl.string(I.t.qERvAA),
                    description: I.intl.string(I.t.WkUWzx),
                    primaryAsset: (0, s.jsx)(l.Z8w, { alt: "", ariaHidden: !0 }),
                    categories: ["upgrades"],
                },
                {
                    id: E.VIDEO_BACKGROUNDS_CARD_ID,
                    title: I.intl.string(I.t.ssVDYQ),
                    description: I.intl.string(I.t.aUSRMa),
                    primaryAsset: (0, o.Mw)(e) ? f : N,
                    categories: ["upgrades"],
                },
                {
                    id: E.EARLY_ACCESS_CARD_ID,
                    title: I.intl.string(I.t["g/KRY6"]),
                    description: I.intl.string(I.t.JzAmJc),
                    primaryAsset: (0, s.jsx)(l.AxI, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.BADGE_CARD_ID,
                    title: I.intl.string(I.t.Bn3CtB),
                    description: I.intl.string(I.t.n26Vcu),
                    subscriptionRequired: !0,
                    primaryAsset:
                        null != n
                            ? (0, s.jsx)("img", { src: n, alt: "", width: 160, draggable: "false" })
                            : (0, s.jsx)(l.vXC, { color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.SPECIAL_MEMBER_PRICING_CARD_ID,
                    title: I.intl.string(I.t["MTD+7w"]),
                    description: I.intl.string(I.t.Bhs0s6),
                    ctaText: I.intl.string(I.t.dBJVnZ),
                    onCtaClick: D,
                    primaryAsset: (0, s.jsx)(l.D8b, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
                {
                    id: E.PERMADECOS_CARD_ID,
                    title: I.intl.string(I.t.L14NZN),
                    description: I.intl.string(I.t.eCZkAI),
                    primaryAsset: (0, s.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    categories: ["vip"],
                },
            ],
            [e, n, R, y, P, L, D, M],
        );
    return (0, a.useMemo)(() => k.filter((e) => null != e && !U.includes(e.id)), [k, U]);
}
