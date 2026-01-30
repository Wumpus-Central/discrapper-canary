n.d(t, {
    A: () => eA,
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
    _ = n(915618),
    p = n(793943),
    m = n(826673),
    g = n(259065),
    A = n(206835),
    f = n(976860),
    b = n(780964),
    h = n(358776),
    E = n(840065),
    O = n(430452),
    C = n(287809),
    x = n(166403),
    S = n(255438),
    T = n(975571),
    I = n(927578),
    y = n(364558),
    N = n(161319),
    j = n(55691),
    v = n(95859),
    P = n(30084),
    R = n(322631),
    D = n(17307),
    L = n(788868),
    w = n(652215),
    M = n(49999),
    G = n(355097),
    U = n(985018),
    k = n(520650),
    B = n(927961),
    H = n(561852),
    V = n(522799),
    F = n(795710),
    Y = n(484813),
    W = n(659980),
    K = n(881784),
    z = n(8330),
    Z = n(554452),
    X = n(992186),
    q = n(380529),
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
    e_ = n(20462),
    ep = n(307966),
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
let eA = () => {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.Ay)(),
        n = (0, S.Xq)(L.f3 / 1024, {
            useKibibytes: !0,
        }),
        r = (0, s.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        eg = null != r ? I.Ay.getPremiumPlanItem(r) : null,
        eA = (null != eg ? I.Ay.getSkuIdForPlan(eg.planId) : null) === L.pe.TIER_2,
        ef = C.default.getCurrentUser(),
        eb = (0, I.TW)(ef, L.PremiumTypes.TIER_2),
        eh = (0, I.TW)(ef, L.PremiumTypes.TIER_0),
        eE = (0, _.A)(O.A),
        { isFractionalPremiumActive: eO } = (0, u.A)(),
        eC = null != r && r.hasPremiumAtLeast(L.PremiumTypes.TIER_2),
        ex = (0, m.JZ)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        eS = (0, A.A)({
            scrollPosition: G._F.TRY_IT_OUT,
            analyticsLocations: e,
        }),
        eT = () => {
            (0, E.openUserSettings)(b.X.SOUNDBOARD_CATEGORY, {
                section: w.nc_.VOICE,
                subsection: G.MJ,
                analyticsLocations: e,
            });
        },
        eI = () => {
            (0, f.pX)(w.BVt.COLLECTIBLES_SHOP);
        },
        ey = () => {
            let e = (0, h.WJ)("openCustomAppSettings");
            (0, E.openUserSettings)(e ? b.X.APPEARANCE_IN_APP_ICON : b.X.APPEARANCE_PANEL, {
                section: w.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : G.kq.CUSTOM_APP_ICONS,
            });
        },
        eN = l.useCallback(() => {
            (0, E.openUserSettings)(
                b.X.PROFILE_PANEL,
                {
                    section: w.nc_.PROFILE_CUSTOMIZATION,
                    analyticsLocations: e,
                },
                () =>
                    (0, g.L)({
                        analyticsLocations: e,
                    }),
            );
        }, [e]),
        ej = new Date(),
        ev = new Date(ej.getFullYear(), ej.getMonth() + 1, 0).getDate(),
        eP = (ej.getDate() / ev) * 100,
        eR = {
            clientThemes: {
                name: "clientThemes",
                title: U.intl.string(U.t.kWM48G),
                subtitle: U.intl.string(U.t.CjRASJ),
                description: U.intl.string(U.t.jBTTws),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: () => {
                    (0, E.openUserSettings)(b.X.APPEARANCE_PANEL, {
                        section: w.nc_.APPEARANCE,
                        analyticsLocations: e,
                    });
                },
                perkImage: W,
            },
            clips: eb
                ? {
                      name: "clips",
                      title: U.intl.string(U.t.z2jK6X),
                      subtitle: U.intl.string(U.t["hxy0/R"]),
                      description: U.intl.string(U.t.Z6v86b),
                      descriptionCta: eE ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.hvVgAZ),
                      pillText: U.intl.string(U.t.EYxi0o),
                      onCtaClick: eE
                          ? () => {
                                (0, E.openUserSettings)(b.X.CLIPS_PANEL, {
                                    section: w.nc_.CLIPS,
                                    analyticsLocations: e,
                                });
                            }
                          : () => {
                                window.open(T.A.getArticleURL(w.MVz.CLIPS), "_blank");
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
            earlyAccess: eb
                ? {
                      name: "earlyAccess",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["+r4vdg"]),
                      perkImage: q,
                  }
                : {
                      name: "earlyAccess",
                      title: U.intl.string(U.t.UkLVeJ),
                      subtitle: U.intl.string(U.t.xf9ePm),
                      description: U.intl.string(U.t["6+xTci"]),
                      isPremiumGetCta: !0,
                      perkImage: q,
                  },
            earlyAccessSeeAllVariant: eb
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
            entranceSounds: eb
                ? {
                      name: "entranceSounds",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t.mUT8bO),
                      descriptionCta: U.intl.string(U.t.jVcuVY),
                      onCtaClick: eT,
                      perkImage: $,
                  }
                : {
                      name: "entranceSounds",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t["3smf/f"]),
                      perkImage: $,
                  },
            entranceSoundsSeeAllVariation: eb
                ? {
                      name: "entranceSoundsSeeAllVariation",
                      title: U.intl.string(U.t["f4M+H9"]),
                      subtitle: U.intl.string(U.t["7ZCYvC"]),
                      description: U.intl.string(U.t.mUT8bO),
                      descriptionCta: U.intl.string(U.t.jVcuVY),
                      onCtaClick: eT,
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
                onCtaClick: eS,
                perkImage: K,
            },
            serverBoosts: {
                name: "serverBoosts",
                title: U.intl.string(U.t["NyDu/6"]),
                subtitle: U.intl.string(U.t["4pEwXL"]),
                description: eO ? null : U.intl.string(U.t.jsyNHm),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: eO
                    ? void 0
                    : () => {
                          (0, E.openUserSettings)(b.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                              section: w.nc_.GUILD_BOOSTING,
                              analyticsLocations: e,
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eO,
                imageOverlayText: eO ? U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase() : void 0,
            },
            greyServerBoosts: {
                name: "greyServerBoosts",
                title: U.intl.string(U.t["NyDu/6"]),
                subtitle: U.intl.string(U.t["4pEwXL"]),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                perkImage: e_.A,
                imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase(),
            },
            specialMemberPricing: {
                name: "specialMemberPricing",
                title: U.intl.string(U.t["0Mykgq"]),
                subtitle: U.intl.string(U.t.opgqDZ),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eI,
                perkImage: et,
            },
            specialMemberPricingSeeAllVariant: {
                name: "specialMemberPricingSeeAllVariant",
                title: U.intl.string(U.t["0Mykgq"]),
                subtitle: U.intl.string(U.t.opgqDZ),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eI,
                perkImage: et,
            },
            specialShopPerks: {
                name: "specialShopPerks",
                title: U.intl.string(U.t.U68LpL),
                subtitle: U.intl.string(U.t.chRZiX),
                description: U.intl.string(U.t["t+QZSd"]),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                onCtaClick: eI,
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
                perkImage: H,
                description: U.intl.string(U.t.T1IS4j),
            },
            greyBadge: {
                name: "greyBadge",
                title: U.intl.string(U.t.dcFfSJ),
                subtitle: U.intl.string(U.t["37MFFq"]),
                perkImage: ep.A,
                description: U.intl.string(U.t.T1IS4j),
                imageOverlayText: U.intl.string(U.t["/VzCKE"]).toLocaleUpperCase(),
            },
            customAppIcons: {
                name: "customAppIcons",
                title: U.intl.string(U.t.OuItFi),
                subtitle: U.intl.string(U.t.mPyrE6),
                perkImage: X,
                description: U.intl.string(U.t.e7FKCi),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: ey,
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
                descriptionCta: eb || eh ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lc),
                isPremiumGetCta: !(eb || eh),
                onCtaClick: eb || eh ? ey : void 0,
                perkImage: en,
            },
            referralProgram: {
                name: "referralProgram",
                title: U.intl.string(U.t.tPY4o9),
                subtitle: U.intl.string(U.t.JY0grC),
                description: U.intl.format(U.t["2JqTF6"], {
                    helpdeskArticle: T.A.getArticleURL(w.MVz.REFERRAL_PROGRAM),
                }),
                descriptionCta: U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !eA || void 0,
                perkImage: ei,
            },
            serverProfiles: {
                name: "serverProfiles",
                title: U.intl.string(U.t.I9TYMg),
                subtitle: U.intl.string(U.t.HMSHeH),
                descriptionCta: eb ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !eb,
                onCtaClick: eb ? eS : void 0,
                perkImage: el,
            },
            permadecos: {
                name: "permadecos",
                title: U.intl.string(U.t["57ngoo"]),
                subtitle: U.intl.string(U.t.piFFjd),
                description: U.intl.format(U.t.Pd7olh, {
                    learnMoreLink: T.A.getArticleURL(w.MVz.PERMADECOS),
                }),
                descriptionCta: eb ? U.intl.string(U.t.jVcuVY) : U.intl.string(U.t.JST6jl),
                isPremiumGetCta: !eb,
                onCtaClick: eb
                    ? () => {
                          ex ||
                              (0, m.Dr)(a.M.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, {
                                  dismissAction: M.i.TAKE_ACTION,
                              }),
                              eS();
                      }
                    : void 0,
                pillText: ex || !eb ? void 0 : U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
                perkImage: em.A,
            },
            customThemes: {
                name: "customThemes",
                title: U.intl.string(k.default["76L4b7"]),
                subtitle: U.intl.string(k.default.i3n50h),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: () => {
                    (0, p.nf)(p.HP.CUSTOM_THEME);
                },
                perkImage: eu.A,
            },
            displayNameStyles: {
                name: "displayNameStyles",
                title: U.intl.string(B.default.ABtBDQ),
                subtitle: U.intl.string(B.default.jhmU5E),
                descriptionCta: U.intl.string(U.t.jVcuVY),
                onCtaClick: eN,
                dismissibleContentType: a.M.DISPLAY_NAME_STYLES_NITRO_HOME_TILE,
                perkImage: ed.A,
                pillText: U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
            },
            recurring3PPromotions: {
                name: "recurring3PPromotions",
                title: U.intl.string(U.t.m7PucM),
                subtitle: (null == ef ? void 0 : ef.isFractionalPremiumWithNoStandardSub())
                    ? U.intl.string(U.t.E1ONHQ)
                    : U.intl.format(U.t["43kZKL"], {
                          days: ev - ej.getDate(),
                      }),
                onCtaClick: () =>
                    (0, N.uE)({
                        analyticsLocations: e,
                    }),
                pillText: U.intl.string(U.t.oW0eUd).toLocaleUpperCase(),
                description: U.intl.format(U.t.zh1X7u, {}),
                descriptionCta: U.intl.string(U.t.w7s5Qr),
                cardVariant: R.PJ.RECURRING_3P_PROMOTIONS,
                customContent: (0, i.jsx)(j.U, {
                    percentage: eP,
                    isFNUserWithNoStandardSub: !!(null == ef ? void 0 : ef.isFractionalPremiumWithNoStandardSub()),
                }),
            },
            premiumGroup: (0, y.u)(),
        };
    return (
        eb &&
            eC &&
            (eR.tenureBadge = {
                name: "tenureBadge",
                title: U.intl.string(U.t.rnsqpa),
                pillText: U.intl.string(U.t["jyYgZ+"]).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(v.A, {}),
                cardVariant: R.PJ.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () =>
                    (0, P.D)({
                        analyticsLocations: e,
                    }),
            }),
        eR
    );
};
