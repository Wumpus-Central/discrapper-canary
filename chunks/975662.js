n.d(t, {
    A: () => ef,
    U: () => eg,
});
var r,
    i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(554146),
    o = n(736653),
    c = n(793574),
    d = n(688810),
    u = n(531260),
    p = n(915618),
    _ = n(793943),
    m = n(826673),
    g = n(259065),
    f = n(206835),
    b = n(976860),
    h = n(780964),
    A = n(358776),
    E = n(840065),
    x = n(430452),
    O = n(287809),
    C = n(166403),
    y = n(255438),
    j = n(975571),
    T = n(927578),
    v = n(364558),
    S = n(161319),
    I = n(55691),
    N = n(95859),
    P = n(30084),
    R = n(322631),
    D = n(17307),
    w = n(788868),
    L = n(652215),
    M = n(49999),
    G = n(355097),
    U = n(985018),
    k = n(520650),
    H = n(927961),
    B = n(561852),
    V = n(522799),
    F = n(795710),
    Y = n(484813),
    W = n(659980),
    K = n(881784),
    z = n(8330),
    Z = n(554452),
    q = n(992186),
    X = n(380529),
    J = n(159312),
    Q = n(629139),
    $ = n(2908),
    ee = n(499309),
    et = n(866223),
    en = n(804368),
    er = n(201337),
    ei = n(754316),
    el = n(977838),
    es = n(330290),
    ea = n(260972),
    eo = n(899225),
    ec = n(106731),
    ed = n(419455),
    eu = n(509442),
    ep = n(20462),
    e_ = n(307966),
    em = n(864579),
    eg =
        (((r = {}).CLIENT_THEMES = "clientThemes"),
        (r.CLIPS = "clips"),
        (r.EARLY_ACCESS = "earlyAccess"),
        (r.ENTRANCE_SOUNDS = "entranceSounds"),
        (r.PROFILES = "profiles"),
        (r.SERVER_BOOSTS = "serverBoosts"),
        (r.GREY_SERVER_BOOSTS = "greyServerBoosts"),
        (r.SPECIAL_MEMBER_PRICING = "specialMemberPricing"),
        (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = "specialMemberPricingSeeAllVariant"),
        (r.SPECIAL_SHOP_PERKS = "specialShopPerks"),
        (r.SUPER_REACTIONS = "superReactions"),
        (r.UPCOMING_DROP_UNTIMED = "upcomingDropUntimed"),
        (r.CUSTOM_APP_ICONS = "customAppIcons"),
        (r.MORE_EMOJI_POWER = "moreEmojiPower"),
        (r.CUSTOM_SOUNDS_EVERYWHERE = "customSoundsEverywhere"),
        (r.SPECIAL_STICKER_ACCESS = "specialStickerAccess"),
        (r.LARGE_UPLOADS = "largeUploads"),
        (r.HD_VIDEO = "hdVideo"),
        (r.BADGE = "badge"),
        (r.GREY_BADGE = "greyBadge"),
        (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = "entranceSoundsSeeAllVariation"),
        (r.EARLY_ACCESS_SEE_ALL_VARIATION = "earlyAccessSeeAllVariant"),
        (r.REFERRAL_PROGRAM = "referralProgram"),
        (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = "newAppStylesUpdateJune2024"),
        (r.SERVER_PROFILES = "serverProfiles"),
        (r.TENURE_BADGE = "tenureBadge"),
        (r.PERMADECOS = "permadecos"),
        (r.CUSTOM_THEMES = "customThemes"),
        (r.DISPLAY_NAME_STYLES = "displayNameStyles"),
        (r.RECURRING_3P_PROMOTIONS = "recurring3PPromotions"),
        (r.PREMIUM_GROUP = "premiumGroup"),
        r);
let ef = () => {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.Ay)(),
        n = (0, y.Xq)(w.f3 / 1024, {
            useKibibytes: !0,
        }),
        r = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        eg = null != r ? T.Ay.getPremiumPlanItem(r) : null,
        ef = (null != eg ? T.Ay.getSkuIdForPlan(eg.planId) : null) === w.pe.TIER_2,
        eb = O.default.getCurrentUser(),
        eh = (0, T.TW)(eb, w.PremiumTypes.TIER_2),
        eA = (0, T.TW)(eb, w.PremiumTypes.TIER_0),
        eE = (0, p.A)(x.A),
        { isFractionalPremiumActive: ex } = (0, u.A)(),
        eO = null != r && r.hasPremiumAtLeast(w.PremiumTypes.TIER_2),
        eC = (0, m.JZ)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        ey = (0, f.A)({
            scrollPosition: G._F.TRY_IT_OUT,
            analyticsLocations: e,
        }),
        ej = () => {
            (0, E.openUserSettings)(h.X.SOUNDBOARD_CATEGORY, {
                section: L.nc_.VOICE,
                subsection: G.MJ,
                analyticsLocations: e,
            });
        },
        eT = () => {
            (0, b.pX)(L.BVt.COLLECTIBLES_SHOP);
        },
        ev = () => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, E.openUserSettings)(e ? h.X.APPEARANCE_IN_APP_ICON : h.X.APPEARANCE_PANEL, {
                section: L.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : G.kq.CUSTOM_APP_ICONS,
            });
        },
        eS = l.useCallback(() => {
            (0, E.openUserSettings)(
                h.X.PROFILE_PANEL,
                {
                    section: L.nc_.PROFILE_CUSTOMIZATION,
                    analyticsLocations: e,
                },
                () =>
                    (0, g.L)({
                        analyticsLocations: e,
                    }),
            );
        }, [e]),
        eI = new Date(),
        eN = new Date(eI.getFullYear(), eI.getMonth() + 1, 0).getDate(),
        eP = (eI.getDate() / eN) * 100,
        eR = {
            clientThemes: {
                name: "clientThemes",
                title: U.intl.string(U.t.kWM48G),
                subtitle: U.intl.string(U.t.CjRASJ),
                description: U.intl.string(U.t.jBTTws),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: () => {
                    (0, E.openUserSettings)(h.X.APPEARANCE_PANEL, {
                        section: L.nc_.APPEARANCE,
                        analyticsLocations: e,
                    });
                },
                perkImage: W,
            },
            clips: eh
                ? {
                      name: "clips",
                      title: U.intl.string(U.t.z2jK6X),
                      subtitle: U.intl.string(U.t["hxy0/R"]),
                      description: U.intl.string(U.t.Z6v86b),
                      descriptionCta: eE ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.hvVgAZ),
                      pillText: U.intl.string(U.t.EYxi0o),
                      onCtaClick: eE
                          ? () => {
                                (0, E.openUserSettings)(h.X.CLIPS_PANEL, {
                                    section: L.nc_.CLIPS,
                                    analyticsLocations: e,
                                });
                            }
                          : () => {
                                window.open(j.A.getArticleURL(L.MVz.CLIPS), "_blank");
                            },
                      perkImage: Z,
                  }
                : {
                      name: "clips",
                      title: U.intl.string(U.t.z2jK6X),
                      subtitle: U.intl.string(U.t["hxy0/R"]),
                      description: U.intl.string(U.t.X9IeN3),
                      pillText: U.intl.string(U.t.EYxi0o),
                      perkImage: Z,
                  },
            earlyAccess: eh
                ? {
                      name: "earlyAccess",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["+r4vdg"]),
                      perkImage: X,
                  }
                : {
                      name: "earlyAccess",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["6+xTci"]),
                      isPremiumGetCta: !0,
                      perkImage: X,
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: "earlyAccessSeeAllVariant",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["+r4vdg"]),
                      perkImage: J,
                  }
                : {
                      name: "earlyAccess",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["6+xTci"]),
                      isPremiumGetCta: !0,
                      perkImage: J,
                  },
            entranceSounds: eh
                ? {
                      name: "entranceSounds",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t.mUT8bO),
                      descriptionCta: U.intl.string(U.t.jVcuVY),
                      onCtaClick: ej,
                      perkImage: $,
                  }
                : {
                      name: "entranceSounds",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t["3smf/f"]),
                      perkImage: $,
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: "entranceSoundsSeeAllVariation",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t.mUT8bO),
                      descriptionCta: U.intl.string(U.t.jVcuVY),
                      onCtaClick: ej,
                      perkImage: ee,
                  }
                : {
                      name: "entranceSoundsSeeAllVariation",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t["3smf/f"]),
                      perkImage: ee,
                  },
            profiles: {
                name: "profiles",
                title: U.intl.string(U.t.KcyDwF),
                subtitle: U.intl.string(U.t.Mt3U1W),
                description: U.intl.string(U.t.kWcDK8),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: ey,
                perkImage: K,
            },
            serverBoosts: {
                name: "serverBoosts",
                title: U.intl.string(U.t["NyDu/6"]),
                subtitle: U.intl.string(U.t["4pEwXL"]),
                description: ex ? "" : U.intl.string(U.t.jsyNHm),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: ex
                    ? void 0
                    : () => {
                          (0, E.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                              section: L.nc_.GUILD_BOOSTING,
                              analyticsLocations: e,
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !ex,
                imageOverlayText: ex ? U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase() : void 0,
            },
            greyServerBoosts: {
                name: "greyServerBoosts",
                title: U.intl.string(U.t["NyDu/6"]),
                subtitle: U.intl.string(U.t["4pEwXL"]),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                perkImage: ep.A,
                imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase(),
            },
            specialMemberPricing: {
                name: "specialMemberPricing",
                title: U.intl.string(U.t["0Mykgq"]),
                subtitle: U.intl.string(U.t.opgqDZ),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eT,
                perkImage: et,
            },
            specialMemberPricingSeeAllVariant: {
                name: "specialMemberPricingSeeAllVariant",
                title: U.intl.string(U.t["0Mykgq"]),
                subtitle: U.intl.string(U.t.opgqDZ),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eT,
                perkImage: et,
            },
            specialShopPerks: {
                name: "specialShopPerks",
                title: U.intl.string(U.t.U68LpL),
                subtitle: U.intl.string(U.t.chRZiX),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eT,
                perkImage: et,
            },
            superReactions: {
                name: "superReactions",
                title: U.intl.string(U.t["6S7kO7"]),
                subtitle: U.intl.string(U.t.kN1JRI),
                description: U.intl.string(U.t.e7FKCi),
                perkImage: eo,
            },
            upcomingDropUntimed: {
                name: "upcomingDropUntimed",
                title: U.intl.string(U.t.O5R3hr),
                pillText: U.intl.string(U.t.yhEY5G),
                backgroundImage: er,
            },
            badge: {
                name: "badge",
                title: U.intl.string(U.t.dcFfSJ),
                subtitle: U.intl.string(U.t["37MFFq"]),
                perkImage: B,
                description: U.intl.string(U.t.T1IS4j),
            },
            greyBadge: {
                name: "greyBadge",
                title: U.intl.string(U.t.dcFfSJ),
                subtitle: U.intl.string(U.t["37MFFq"]),
                perkImage: e_.A,
                description: U.intl.string(U.t.T1IS4j),
                imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase(),
            },
            customAppIcons: {
                name: "customAppIcons",
                title: U.intl.string(U.t.OuItFi),
                subtitle: U.intl.string(U.t.mPyrE6),
                perkImage: q,
                description: U.intl.string(U.t.e7FKCi),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: ev,
            },
            moreEmojiPower: {
                name: "moreEmojiPower",
                title: U.intl.string(U.t["R2IV/Q"]),
                subtitle: U.intl.string(U.t.R5Xag2),
                perkImage: Q,
                description: U.intl.string(U.t["8lsjSw"]),
            },
            customSoundsEverywhere: {
                name: "customSoundsEverywhere",
                title: U.intl.string(U.t.LWsArT),
                subtitle: U.intl.string(U.t.bTzbVk),
                perkImage: (0, D.t4)(t, V, F),
                description: U.intl.string(U.t.JLnOM2),
            },
            specialStickerAccess: {
                name: "specialStickerAccess",
                title: U.intl.string(U.t.tzdIwI),
                subtitle: U.intl.string(U.t.hJG8ZN),
                perkImage: (0, D.t4)(t, Y, es),
                description: U.intl.string(U.t.e7FKCi),
            },
            largeUploads: {
                name: "largeUploads",
                title: U.intl.formatToPlainString(U.t.jqhAdL, {
                    premiumMaxSize: n,
                }),
                subtitle: U.intl.formatToPlainString(U.t["HI+cfm"], {
                    premiumMaxSize: n,
                }),
                perkImage: ec,
                description: U.intl.string(U.t["R0gx+0"]),
            },
            hdVideo: {
                name: "hdVideo",
                title: U.intl.string(U.t.RSXQYO),
                subtitle: U.intl.string(U.t.ymCPxp),
                perkImage: ea,
                description: U.intl.string(U.t["4WgB/4"]),
            },
            newAppStylesUpdateJune2024: {
                name: "newAppStylesUpdateJune2024",
                title: U.intl.string(U.t.XQCSri),
                subtitle: U.intl.string(U.t.HC5wVV),
                description: U.intl.string(U.t.ee7wQ7),
                descriptionCta: eh || eA ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lc),
                isPremiumGetCta: !(eh || eA),
                onCtaClick: eh || eA ? ev : void 0,
                perkImage: en,
            },
            referralProgram: {
                name: "referralProgram",
                title: U.intl.string(U.t.tPY4o9),
                subtitle: U.intl.string(U.t.JY0grC),
                description: U.intl.format(U.t["2JqTF6"], {
                    helpdeskArticle: j.A.getArticleURL(L.MVz.REFERRAL_PROGRAM),
                }),
                descriptionCta: U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !ef || void 0,
                perkImage: ei,
            },
            serverProfiles: {
                name: "serverProfiles",
                title: U.intl.string(U.t.I9TYMg),
                subtitle: U.intl.string(U.t.HMSHeH),
                descriptionCta: eh ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? ey : void 0,
                perkImage: el,
            },
            permadecos: {
                name: "permadecos",
                title: U.intl.string(U.t["57ngoo"]),
                subtitle: U.intl.string(U.t.piFFjd),
                description: U.intl.format(U.t.Pd7olh, {
                    learnMoreLink: j.A.getArticleURL(L.MVz.PERMADECOS),
                }),
                descriptionCta: eh ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !eh,
                onCtaClick: eh
                    ? () => {
                          eC ||
                              (0, m.Dr)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
                                  dismissAction: M.i.TAKE_ACTION,
                              }),
                              ey();
                      }
                    : void 0,
                pillText: eC || !eh ? void 0 : U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
                perkImage: em.A,
            },
            customThemes: {
                name: "customThemes",
                title: U.intl.string(k.default["76L4b7"]),
                subtitle: U.intl.string(k.default.i3n50h),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: () => {
                    (0, _.nf)(_.HP.CUSTOM_THEME);
                },
                perkImage: eu.A,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: U.intl.string(H.default.ABtBDQ),
                subtitle: U.intl.string(H.default.jhmU5E),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: eS,
                dismissibleContentType: a.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
                perkImage: ed.A,
                pillText: U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
            },
            recurring3PPromotions: {
                name: "recurring3PPromotions",
                title: U.intl.string(U.t.m7PucM),
                subtitle: " ",
                onCtaClick: () =>
                    (0, S.uE)({
                        analyticsLocations: e,
                    }),
                pillText: U.intl.string(U.t.oW0eUd).toLocaleUpperCase(),
                description: U.intl.format(U.t.zh1X7u, {}),
                descriptionCta: U.intl.string(U.t.w7s5Qr),
                customContent: (0, i.jsx)(I.U, {
                    percentage: eP,
                }),
            },
            premiumGroup: (0, v.u)(),
        };
    return (
        eh &&
            eO &&
            (eR.tenureBadge = {
                name: "tenureBadge",
                title: U.intl.string(U.t.rnsqpa),
                pillText: U.intl.string(U.t["jyYgZ+"]).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(N.A, {}),
                cardVariant: R.PJ.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () =>
                    (0, P.D)({
                        analyticsLocations: e,
                    }),
            }),
        eR
    );
};
