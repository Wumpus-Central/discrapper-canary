n.d(t, {
    A: () => eg,
    U: () => em,
});
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(554146),
    o = n(736653),
    l = n(793574),
    c = n(688810),
    u = n(531260),
    d = n(915618),
    f = n(793943),
    p = n(826673),
    _ = n(259065),
    h = n(206835),
    m = n(976860),
    g = n(780964),
    E = n(358776),
    b = n(725177),
    y = n(840065),
    O = n(430452),
    A = n(287809),
    v = n(166403),
    S = n(255438),
    I = n(975571),
    T = n(927578),
    C = n(364558),
    N = n(161319),
    R = n(55691),
    w = n(95859),
    P = n(30084),
    D = n(322631),
    x = n(17307),
    L = n(788868),
    j = n(652215),
    M = n(49999),
    k = n(355097),
    U = n(857266),
    G = n(985018),
    V = n(520650),
    F = n(927961),
    B = n(561852),
    H = n(522799),
    Y = n(795710),
    W = n(484813),
    K = n(659980),
    z = n(881784),
    q = n(8330),
    X = n(554452),
    Z = n(992186),
    Q = n(380529),
    $ = n(159312),
    J = n(629139),
    ee = n(2908),
    et = n(499309),
    en = n(866223),
    er = n(804368),
    ei = n(201337),
    ea = n(754316),
    es = n(977838),
    eo = n(330290),
    el = n(260972),
    ec = n(899225),
    eu = n(106731),
    ed = n(419455),
    ef = n(509442),
    ep = n(20462),
    e_ = n(307966),
    eh = n(864579),
    em = (function (e) {
        return (
            (e.CLIENT_THEMES = "clientThemes"),
            (e.CLIPS = "clips"),
            (e.EARLY_ACCESS = "earlyAccess"),
            (e.ENTRANCE_SOUNDS = "entranceSounds"),
            (e.PROFILES = "profiles"),
            (e.SERVER_BOOSTS = "serverBoosts"),
            (e.GREY_SERVER_BOOSTS = "greyServerBoosts"),
            (e.SPECIAL_MEMBER_PRICING = "specialMemberPricing"),
            (e.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant"),
            (e.SPECIAL_SHOP_PERKS = "specialShopPerks"),
            (e.SUPER_REACTIONS = "superReactions"),
            (e.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed"),
            (e.CUSTOM_APP_ICONS = "customAppIcons"),
            (e.MORE_EMOJI_POWER = "moreEmojiPower"),
            (e.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere"),
            (e.SPECIAL_STICKER_ACCESS = "specialStickerAccess"),
            (e.LARGE_UPLOADS = "largeUploads"),
            (e.HD_VIDEO = "hdVideo"),
            (e.BADGE = "badge"),
            (e.GREY_BADGE = "greyBadge"),
            (e.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation"),
            (e.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant"),
            (e.REFERRAL_PROGRAM = "referralProgram"),
            (e.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024"),
            (e.SERVER_PROFILES = "serverProfiles"),
            (e.TENURE_BADGE = "tenureBadge"),
            (e.PERMADECOS = "permadecos"),
            (e.CUSTOM_THEMES = "customThemes"),
            (e.DISPLAY_NAME_STYLES = "displayNameStyles"),
            (e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions"),
            (e.PREMIUM_GROUP = "premiumGroup"),
            e
        );
    })({});
let eg = () => {
    let { analyticsLocations: e } = (0, c.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.Ay)(),
        n = (0, S.Xq)(L.f3 / 1024, {
            useKibibytes: !0,
        }),
        em = (0, a.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        eg = null != em ? T.Ay.getPremiumPlanItem(em) : null,
        eE = (null != eg ? T.Ay.getSkuIdForPlan(eg.planId) : null) === L.pe.TIER_2,
        eb = A.default.getCurrentUser(),
        ey = (0, T.TW)(eb, L.PremiumTypes.TIER_2),
        eO = (0, T.TW)(eb, L.PremiumTypes.TIER_0),
        eA = (0, d.A)(O.A),
        { isFractionalPremiumActive: ev } = (0, u.A)(),
        eS = null != em && em.hasPremiumAtLeast(L.PremiumTypes.TIER_2),
        eI = (0, p.JZ)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        eT = (0, h.A)({
            scrollPosition: k._F.TRY_IT_OUT,
            analyticsLocations: e,
        }),
        eC = () => {
            (0, y.openUserSettings)(g.X.APPEARANCE_PANEL, {
                section: j.nc_.APPEARANCE,
                analyticsLocations: e,
            });
        },
        eN = () => {
            (0, y.openUserSettings)(g.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                section: j.nc_.GUILD_BOOSTING,
                analyticsLocations: e,
            });
        },
        eR = () => {
            let t = (0, E.qz)("openEntranceSounds") ? g.X.SOUNDBOARD_CATEGORY : g.X.VOICE_AND_VIDEO_PANEL;
            (0, y.openUserSettings)(t, {
                section: j.nc_.VOICE,
                subsection: k.MJ,
                analyticsLocations: e,
            });
        },
        ew = () => {
            (0, m.pX)(j.BVt.COLLECTIBLES_SHOP);
        },
        eP = () => {
            (0, b.A)(U.J.CLIPS, {
                analyticsLocations: e,
            });
        },
        eD = () => {
            let e = (0, E.WJ)("openCustomAppSettings");
            (0, y.openUserSettings)(e ? g.X.APPEARANCE_IN_APP_ICON : g.X.APPEARANCE_PANEL, {
                section: j.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : k.kq.CUSTOM_APP_ICONS,
            });
        },
        ex = () => {
            window.open(I.A.getArticleURL(j.MVz.CLIPS), "_blank");
        },
        eL = () => {
            eI ||
                (0, p.Dr)(s.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
                    dismissAction: M.i.TAKE_ACTION,
                }),
                eT();
        },
        ej = i.useCallback(() => {
            (0, y.openUserSettings)(
                g.X.PROFILE_PANEL,
                {
                    section: j.nc_.PROFILE_CUSTOMIZATION,
                    analyticsLocations: e,
                },
                () =>
                    (0, _.L)({
                        analyticsLocations: e,
                    }),
            );
        }, [e]),
        eM = new Date(),
        ek = new Date(eM.getFullYear(), eM.getMonth() + 1, 0).getDate(),
        eU = (eM.getDate() / ek) * 100,
        eG = {
            clientThemes: {
                name: "clientThemes",
                title: G.intl.string(G.t.kWM48G),
                subtitle: G.intl.string(G.t.CjRASJ),
                description: G.intl.string(G.t.jBTTws),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: eC,
                perkImage: K,
            },
            clips: ey
                ? {
                      name: "clips",
                      title: G.intl.string(G.t.z2jK6X),
                      subtitle: G.intl.string(G.t["hxy0/R"]),
                      description: G.intl.string(G.t.Z6v86b),
                      descriptionCta: eA ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.hvVgAZ),
                      pillText: G.intl.string(G.t.EYxi0o),
                      onCtaClick: eA ? eP : ex,
                      perkImage: X,
                  }
                : {
                      name: "clips",
                      title: G.intl.string(G.t.z2jK6X),
                      subtitle: G.intl.string(G.t["hxy0/R"]),
                      description: G.intl.string(G.t.X9IeN3),
                      pillText: G.intl.string(G.t.EYxi0o),
                      perkImage: X,
                  },
            earlyAccess: ey
                ? {
                      name: "earlyAccess",
                      title: G.intl.string(G.t.UkLVeJ),
                      subtitle: G.intl.string(G.t.xf9ePm),
                      description: G.intl.string(G.t["+r4vdg"]),
                      perkImage: Q,
                  }
                : {
                      name: "earlyAccess",
                      title: G.intl.string(G.t.UkLVeJ),
                      subtitle: G.intl.string(G.t.xf9ePm),
                      description: G.intl.string(G.t["6+xTci"]),
                      isPremiumGetCta: !0,
                      perkImage: Q,
                  },
            earlyAccessSeeAllVariant: ey
                ? {
                      name: "earlyAccessSeeAllVariant",
                      title: G.intl.string(G.t.UkLVeJ),
                      subtitle: G.intl.string(G.t.xf9ePm),
                      description: G.intl.string(G.t["+r4vdg"]),
                      perkImage: $,
                  }
                : {
                      name: "earlyAccess",
                      title: G.intl.string(G.t.UkLVeJ),
                      subtitle: G.intl.string(G.t.xf9ePm),
                      description: G.intl.string(G.t["6+xTci"]),
                      isPremiumGetCta: !0,
                      perkImage: $,
                  },
            entranceSounds: ey
                ? {
                      name: "entranceSounds",
                      title: G.intl.string(G.t["f4M+H9"]),
                      subtitle: G.intl.string(G.t["7ZCYvC"]),
                      description: G.intl.string(G.t.mUT8bO),
                      descriptionCta: G.intl.string(G.t.jVcuVY),
                      onCtaClick: eR,
                      perkImage: ee,
                  }
                : {
                      name: "entranceSounds",
                      title: G.intl.string(G.t["f4M+H9"]),
                      subtitle: G.intl.string(G.t["7ZCYvC"]),
                      description: G.intl.string(G.t["3smf/f"]),
                      perkImage: ee,
                  },
            entranceSoundsSeeAllVariation: ey
                ? {
                      name: "entranceSoundsSeeAllVariation",
                      title: G.intl.string(G.t["f4M+H9"]),
                      subtitle: G.intl.string(G.t["7ZCYvC"]),
                      description: G.intl.string(G.t.mUT8bO),
                      descriptionCta: G.intl.string(G.t.jVcuVY),
                      onCtaClick: eR,
                      perkImage: et,
                  }
                : {
                      name: "entranceSoundsSeeAllVariation",
                      title: G.intl.string(G.t["f4M+H9"]),
                      subtitle: G.intl.string(G.t["7ZCYvC"]),
                      description: G.intl.string(G.t["3smf/f"]),
                      perkImage: et,
                  },
            profiles: {
                name: "profiles",
                title: G.intl.string(G.t.KcyDwF),
                subtitle: G.intl.string(G.t.Mt3U1W),
                description: G.intl.string(G.t.kWcDK8),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: eT,
                perkImage: z,
            },
            serverBoosts: {
                name: "serverBoosts",
                title: G.intl.string(G.t["NyDu/6"]),
                subtitle: G.intl.string(G.t["4pEwXL"]),
                description: ev ? "" : G.intl.string(G.t.jsyNHm),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: ev ? void 0 : eN,
                perkImage: q,
                hideOnNarrowScreen: !ev,
                imageOverlayText: ev ? G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase() : void 0,
            },
            greyServerBoosts: {
                name: "greyServerBoosts",
                title: G.intl.string(G.t["NyDu/6"]),
                subtitle: G.intl.string(G.t["4pEwXL"]),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                perkImage: ep.A,
                imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase(),
            },
            specialMemberPricing: {
                name: "specialMemberPricing",
                title: G.intl.string(G.t["0Mykgq"]),
                subtitle: G.intl.string(G.t.opgqDZ),
                description: G.intl.string(G.t["t+QZSd"]),
                descriptionCta: G.intl.string(G.t.dBJVnZ),
                onCtaClick: ew,
                perkImage: en,
            },
            specialMemberPricingSeeAllVariant: {
                name: "specialMemberPricingSeeAllVariant",
                title: G.intl.string(G.t["0Mykgq"]),
                subtitle: G.intl.string(G.t.opgqDZ),
                description: G.intl.string(G.t["t+QZSd"]),
                descriptionCta: G.intl.string(G.t.dBJVnZ),
                onCtaClick: ew,
                perkImage: en,
            },
            specialShopPerks: {
                name: "specialShopPerks",
                title: G.intl.string(G.t.U68LpL),
                subtitle: G.intl.string(G.t.chRZiX),
                description: G.intl.string(G.t["t+QZSd"]),
                descriptionCta: G.intl.string(G.t.dBJVnZ),
                onCtaClick: ew,
                perkImage: en,
            },
            superReactions: {
                name: "superReactions",
                title: G.intl.string(G.t["6S7kO7"]),
                subtitle: G.intl.string(G.t.kN1JRI),
                description: G.intl.string(G.t.e7FKCi),
                perkImage: ec,
            },
            upcomingDropUntimed: {
                name: "upcomingDropUntimed",
                title: G.intl.string(G.t.O5R3hr),
                pillText: G.intl.string(G.t.yhEY5G),
                backgroundImage: ei,
            },
            badge: {
                name: "badge",
                title: G.intl.string(G.t.dcFfSJ),
                subtitle: G.intl.string(G.t["37MFFq"]),
                perkImage: B,
                description: G.intl.string(G.t.T1IS4j),
            },
            greyBadge: {
                name: "greyBadge",
                title: G.intl.string(G.t.dcFfSJ),
                subtitle: G.intl.string(G.t["37MFFq"]),
                perkImage: e_.A,
                description: G.intl.string(G.t.T1IS4j),
                imageOverlayText: G.intl.string(G.t["/VzCKE"]).toLocaleUpperCase(),
            },
            customAppIcons: {
                name: "customAppIcons",
                title: G.intl.string(G.t.OuItFi),
                subtitle: G.intl.string(G.t.mPyrE6),
                perkImage: Z,
                description: G.intl.string(G.t.e7FKCi),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: eD,
            },
            moreEmojiPower: {
                name: "moreEmojiPower",
                title: G.intl.string(G.t["R2IV/Q"]),
                subtitle: G.intl.string(G.t.R5Xag2),
                perkImage: J,
                description: G.intl.string(G.t["8lsjSw"]),
            },
            customSoundsEverywhere: {
                name: "customSoundsEverywhere",
                title: G.intl.string(G.t.LWsArT),
                subtitle: G.intl.string(G.t.bTzbVk),
                perkImage: (0, x.t4)(t, H, Y),
                description: G.intl.string(G.t.JLnOM2),
            },
            specialStickerAccess: {
                name: "specialStickerAccess",
                title: G.intl.string(G.t.tzdIwI),
                subtitle: G.intl.string(G.t.hJG8ZN),
                perkImage: (0, x.t4)(t, W, eo),
                description: G.intl.string(G.t.e7FKCi),
            },
            largeUploads: {
                name: "largeUploads",
                title: G.intl.formatToPlainString(G.t.jqhAdL, {
                    premiumMaxSize: n,
                }),
                subtitle: G.intl.formatToPlainString(G.t["HI+cfm"], {
                    premiumMaxSize: n,
                }),
                perkImage: eu,
                description: G.intl.string(G.t["R0gx+0"]),
            },
            hdVideo: {
                name: "hdVideo",
                title: G.intl.string(G.t.RSXQYO),
                subtitle: G.intl.string(G.t.ymCPxp),
                perkImage: el,
                description: G.intl.string(G.t["4WgB/4"]),
            },
            newAppStylesUpdateJune2024: {
                name: "newAppStylesUpdateJune2024",
                title: G.intl.string(G.t.XQCSri),
                subtitle: G.intl.string(G.t.HC5wVV),
                description: G.intl.string(G.t.ee7wQ7),
                descriptionCta: ey || eO ? G.intl.string(G.t.y9TxXV) : G.intl.string(G.t.d8o6lc),
                isPremiumGetCta: !(ey || eO),
                onCtaClick: ey || eO ? eD : void 0,
                perkImage: er,
            },
            referralProgram: {
                name: "referralProgram",
                title: G.intl.string(G.t.tPY4o9),
                subtitle: G.intl.string(G.t.JY0grC),
                description: G.intl.format(G.t["2JqTF6"], {
                    helpdeskArticle: I.A.getArticleURL(j.MVz.REFERRAL_PROGRAM),
                }),
                descriptionCta: G.intl.string(G.t.JST6jl),
                isPremiumGetCta: !eE || void 0,
                perkImage: ea,
            },
            serverProfiles: {
                name: "serverProfiles",
                title: G.intl.string(G.t.I9TYMg),
                subtitle: G.intl.string(G.t.HMSHeH),
                descriptionCta: ey ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
                isPremiumGetCta: !ey,
                onCtaClick: ey ? eT : void 0,
                perkImage: es,
            },
            permadecos: {
                name: "permadecos",
                title: G.intl.string(G.t["57ngoo"]),
                subtitle: G.intl.string(G.t.piFFjd),
                description: G.intl.format(G.t.Pd7olh, {
                    learnMoreLink: I.A.getArticleURL(j.MVz.PERMADECOS),
                }),
                descriptionCta: ey ? G.intl.string(G.t.jVcuVY) : G.intl.string(G.t.JST6jl),
                isPremiumGetCta: !ey,
                onCtaClick: ey ? eL : void 0,
                pillText: eI || !ey ? void 0 : G.intl.string(G.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eh.A,
            },
            customThemes: {
                name: "customThemes",
                title: G.intl.string(V.default["76L4b7"]),
                subtitle: G.intl.string(V.default.i3n50h),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: () => {
                    (0, f.nf)(f.HP.CUSTOM_THEME);
                },
                perkImage: ef.A,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: G.intl.string(F.default.ABtBDQ),
                subtitle: G.intl.string(F.default.jhmU5E),
                descriptionCta: G.intl.string(G.t.jVcuVY),
                onCtaClick: ej,
                dismissibleContentType: s.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
                perkImage: ed.A,
                pillText: G.intl.string(G.t.y2b7CA).toLocaleUpperCase(),
            },
            recurring3PPromotions: {
                name: "recurring3PPromotions",
                title: G.intl.string(G.t.m7PucM),
                subtitle: " ",
                onCtaClick: () =>
                    (0, N.uE)({
                        analyticsLocations: e,
                    }),
                pillText: G.intl.string(G.t.oW0eUd).toLocaleUpperCase(),
                description: G.intl.format(G.t.zh1X7u, {}),
                descriptionCta: G.intl.string(G.t.w7s5Qr),
                customContent: (0, r.jsx)(R.U, {
                    percentage: eU,
                }),
            },
            premiumGroup: (0, C.u)(),
        };
    return (
        ey &&
            eS &&
            (eG.tenureBadge = {
                name: "tenureBadge",
                title: G.intl.string(G.t.rnsqpa),
                pillText: G.intl.string(G.t["jyYgZ+"]).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(w.A, {}),
                cardVariant: D.PJ.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () =>
                    (0, P.D)({
                        analyticsLocations: e,
                    }),
            }),
        eG
    );
};
