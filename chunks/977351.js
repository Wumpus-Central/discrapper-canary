(n.r(t), n.d(t, { marketingCollection: () => ta, playgroundConfig: () => tr }));
var o,
    l,
    a,
    r,
    i = n(582128),
    d = n(175841),
    s = n(962644),
    u = n(477900),
    p = n(877624),
    c = n(232582),
    b = n(308588),
    m = n(821609),
    _ = n(192308),
    A = n(59318),
    f = n(935208),
    I = n(331322),
    T = n(691885),
    N = n(839214),
    g =
        (((o = {})[(o.NONE = 0)] = "NONE"),
        (o[(o.SUBSCRIPTION = 1)] = "SUBSCRIPTION"),
        (o[(o.FRACTIONAL_NITRO = 2)] = "FRACTIONAL_NITRO"),
        (o[(o.REVERSE_TRIAL = 3)] = "REVERSE_TRIAL"),
        (o[(o.SUBSCRIPTION_GROUP = 4)] = "SUBSCRIPTION_GROUP"),
        o),
    E =
        (((l = {})[(l.NONE = 0)] = "NONE"),
        (l[(l.BOOST_ONLY = 1)] = "BOOST_ONLY"),
        (l[(l.TIER_0 = 2)] = "TIER_0"),
        (l[(l.TIER_1 = 3)] = "TIER_1"),
        (l[(l.TIER_2 = 4)] = "TIER_2"),
        l),
    y =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.TIER_1 = 1)] = "TIER_1"),
        (a[(a.TIER_2 = 2)] = "TIER_2"),
        (a[(a.TIER_0 = 3)] = "TIER_0"),
        a);
let S = [
    { id: "EVERYONE", label: "Everyone", premiumType: null, premiumSource: null, premiumSubscriptionType: null },
    { id: "NON_NITRO", label: "Non Nitro", premiumType: 0, premiumSource: g.NONE, premiumSubscriptionType: E.NONE },
    {
        id: "FRACTIONAL_WITHOUT_SUB",
        label: "Nitro Credit w/o sub",
        premiumType: 2,
        premiumSource: g.FRACTIONAL_NITRO,
        premiumSubscriptionType: E.NONE,
    },
    {
        id: "FRACTIONAL_WITH_TIER_2_SUB",
        label: "Nitro Credit with Nitro Standard sub",
        premiumType: 2,
        premiumSource: g.FRACTIONAL_NITRO,
        premiumSubscriptionType: E.TIER_2,
    },
    {
        id: "FRACTIONAL_WITH_TIER_1_SUB",
        label: "Nitro Credit with Nitro Classic sub",
        premiumType: 2,
        premiumSource: g.FRACTIONAL_NITRO,
        premiumSubscriptionType: E.TIER_1,
    },
    {
        id: "FRACTIONAL_WITH_TIER_0_SUB",
        label: "Nitro Credit with Nitro Basic sub",
        premiumType: 2,
        premiumSource: g.FRACTIONAL_NITRO,
        premiumSubscriptionType: E.TIER_0,
    },
    {
        id: "NITRO_BASIC",
        label: "Nitro Basic",
        premiumType: 3,
        premiumSource: g.SUBSCRIPTION,
        premiumSubscriptionType: E.TIER_0,
    },
    {
        id: "NITRO_CLASSIC",
        label: "Nitro Classic",
        premiumType: 1,
        premiumSource: g.SUBSCRIPTION,
        premiumSubscriptionType: E.TIER_1,
    },
    {
        id: "NITRO_STANDARD",
        label: "Nitro Standard",
        premiumType: 2,
        premiumSource: g.SUBSCRIPTION,
        premiumSubscriptionType: E.TIER_2,
    },
    {
        id: "NITRO_SQUAD",
        label: "Nitro Squad",
        premiumType: 2,
        premiumSource: g.SUBSCRIPTION_GROUP,
        premiumSubscriptionType: E.TIER_2,
    },
];
function C(e, t, n) {
    let o = S.find((o) => o.premiumType === e && o.premiumSource === t && o.premiumSubscriptionType === n);
    if (null != o) return { id: o.id, label: o.label };
    let l = null == e ? "Any" : y[e],
        a = null == t ? "Any" : g[t],
        r = null == n ? "Any" : E[n];
    return { id: `CUSTOM:${e ?? "any"}:${t ?? "any"}:${n ?? "any"}`, label: `${l} / ${a} / ${r}` };
}
let O = "Localized";
function R(e) {
    return "object" == typeof e && null != e && "string" == typeof e.default && "object" == typeof e.localizations;
}
let h = (0, N.D)(() => ({
    selected: null,
    componentRowsByType: null,
    availableLocales: [],
    userStateByType: new Map(),
    localeOverride: null,
}));
function P(e) {
    let t = h.useField("componentRowsByType"),
        n = h.useField("userStateByType"),
        o = h.useField("localeOverride");
    return i.useMemo(
        () =>
            (function (e, t, n, o) {
                var l, a;
                let r,
                    i = e?.get(t);
                if (null == i) return null;
                let d = (function (e, t) {
                    if (0 === e.length) return null;
                    let n = [...e].sort((e, t) => e.platform - t.platform);
                    if (null != t) {
                        let e = n.find(
                            (e) =>
                                !e.isDefaultBase &&
                                C(e.premiumType, e.premiumSource, e.premiumSubscriptionType).id === t,
                        );
                        if (null != e) return e;
                    }
                    return n.find((e) => e.isDefaultBase) ?? n[0];
                })(i, n);
                return null == d
                    ? null
                    : ((l = d.properties),
                      (a = o ?? "en-US"),
                      (function e(t, n) {
                          if (Array.isArray(t)) {
                              for (let o of t) e(o, n);
                              return;
                          }
                          if ("object" == typeof t && null != t)
                              for (let [o, l] of Object.entries(t)) {
                                  if (o.endsWith(O) && R(l)) {
                                      let e = o.slice(0, -O.length),
                                          a = l.localizations[n] ?? ("" !== l.default ? l.default : null);
                                      null != a && e in t && (t[e] = a);
                                      continue;
                                  }
                                  e(l, n);
                              }
                      })(
                          (r = (function e(t) {
                              if (Array.isArray(t)) return t.map((t) => e(t));
                              if (null == t || "object" != typeof t) return t;
                              let n = Object.getPrototypeOf(t);
                              if (n !== Object.prototype && null !== n) return t;
                              let o = {};
                              for (let [n, l] of Object.entries(t)) o[n] = e(l);
                              return o;
                          })(l)),
                          a,
                      ),
                      r);
            })(t, e, n.get(e) ?? null, o),
        [t, n, o, e],
    );
}
function v(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
let M = "__default__";
var L = n(105292),
    x = n(771207);
function G(e) {
    let { label: t, value: n, disabled: o } = e;
    return { id: n, value: n, label: t, disabled: o };
}
function U(e) {
    let t,
        { componentType: n } = e,
        o = h.useField("selected"),
        l = h.useField("componentRowsByType"),
        a = h.useField("userStateByType"),
        r = h.useField("localeOverride"),
        d = h.useField("availableLocales"),
        s =
            ((t = h.useField("componentRowsByType")),
            i.useMemo(() => {
                let e = t?.get(n) ?? [],
                    o = new Map();
                for (let t of e) {
                    if (t.isDefaultBase) continue;
                    let e = C(t.premiumType, t.premiumSource, t.premiumSubscriptionType);
                    o.has(e.id) || o.set(e.id, e);
                }
                return [...o.values()];
            }, [t, n])),
        p = i.useMemo(
            () =>
                (0, L.getLanguages)()
                    .filter((e) => e.enabled && "en-US" !== e.code)
                    .map((e) => ({ label: e.name, value: e.code }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        c = i.useMemo(() => {
            let e;
            return (
                (e = new Set(d)),
                [
                    { label: "Default (en-US)", value: M },
                    ...p
                        .filter((e) => "en-US" !== e.value)
                        .map((t) => ({ label: t.label, value: t.value, disabled: !e.has(t.value) })),
                ]
            );
        }, [d, p]),
        b = (l?.get(n)?.length ?? 0) > 0;
    if (null == o || !b) return null;
    let m = s.length >= 1,
        _ = [{ label: "Default", value: M }, ...s.map((e) => ({ label: e.label, value: e.id }))];
    return (0, u.jsx)("div", {
        className: x.k,
        children: (0, u.jsxs)(I.B, {
            gap: 16,
            children: [
                m &&
                    (0, u.jsx)(T.l, {
                        label: "User State",
                        value: a.get(n) ?? M,
                        onSelectionChange: (e) => {
                            var t;
                            let o;
                            return (
                                (t = e === M ? null : e),
                                (o = new Map(h.getState().userStateByType)),
                                void (null == t ? o.delete(n) : o.set(n, t), h.setState({ userStateByType: o }))
                            );
                        },
                        options: _,
                        formatOption: G,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (0, u.jsx)(T.l, {
                    label: "Locale",
                    value: r ?? M,
                    onSelectionChange: (e) => {
                        var t;
                        return ((t = e === M ? null : e), void h.setState({ localeOverride: t }));
                    },
                    options: c,
                    formatOption: G,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var B = n(14461),
    D = n(767589);
function k(e, t) {
    return B.m.create({ contentIdentifier: e, properties: t });
}
function F(e, t, n, o) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, D.ob)(B.m, o) };
}
function j(e, t) {
    return e === v(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var V = n(117513);
let K = "playground-announcement-modal",
    w = f.default.fromTimestamp(Date.now()),
    H = {
        name: "Announcement Modal",
        id: "announcement-modal",
        component: function (e) {
            let t = P(p.C.ANNOUNCEMENT_MODAL),
                o =
                    t?.properties.oneofKind === "announcementModalVariant1"
                        ? t.properties.announcementModalVariant1
                        : null;
            return (0, u.jsx)("div", {
                className: V.MT,
                children: (0, u.jsx)(m.$, {
                    variant: "expressive",
                    size: "md",
                    text: "Open Announcement Modal",
                    onClick: function () {
                        let t,
                            l,
                            a,
                            r =
                                ((t = e.heroAssetUrl),
                                (l = (0, A.r1)(t)),
                                (a = {
                                    modalTopPill: e.modalTopPill,
                                    header: e.header,
                                    subheader: e.subheader,
                                    videoLink: l ? t : "",
                                    heroArtVideoLinkLightTheme: l ? t : "",
                                    heroArtImageLinkDarkTheme: l ? "" : t,
                                    heroArtImageLinkLightTheme: l ? "" : t,
                                    button: {
                                        ...o?.button,
                                        copy: e.buttonCopy,
                                        buttonAction:
                                            e.buttonAction !== b.d.UNSPECIFIED
                                                ? e.buttonAction
                                                : (o?.button?.buttonAction ?? b.d.OPEN_TIER_2_PAYMENT_MODAL),
                                        deeplinkSection: o?.button?.deeplinkSection ?? "",
                                        navigableStorefrontApplicationId:
                                            o?.button?.navigableStorefrontApplicationId ??
                                            ("" !== e.navigableStorefrontApplicationId
                                                ? { value: e.navigableStorefrontApplicationId }
                                                : void 0),
                                    },
                                }),
                                k(K, {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: null != o ? { ...o, ...a } : c.ih.create(a),
                                }));
                        (0, _.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("227955"),
                                    n.e("686889"),
                                    n.e("198496"),
                                    n.e("560570"),
                                    n.e("567999"),
                                    n.e("551572"),
                                    n.e("272915"),
                                    n.e("324520"),
                                    n.e("326559"),
                                    n.e("797845"),
                                    n.e("169727"),
                                    n.e("179652"),
                                    n.e("313097"),
                                    n.e("64097"),
                                    n.e("150455"),
                                    n.e("272223"),
                                    n.e("239729"),
                                    n.e("267526"),
                                    n.e("441674"),
                                    n.e("801348"),
                                    n.e("545749"),
                                    n.e("424199"),
                                    n.e("125729"),
                                    n.e("425544"),
                                    n.e("776750"),
                                    n.e("390098"),
                                    n.e("398793"),
                                    n.e("53374"),
                                    n.e("256616"),
                                    n.e("784103"),
                                    n.e("346102"),
                                    n.e("377766"),
                                    n.e("614784"),
                                    n.e("187856"),
                                    n.e("693832"),
                                    n.e("193158"),
                                    n.e("455924"),
                                    n.e("834386"),
                                    n.e("4780"),
                                    n.e("250478"),
                                    n.e("59413"),
                                    n.e("260218"),
                                    n.e("356296"),
                                    n.e("118917"),
                                    n.e("562168"),
                                    n.e("846523"),
                                    n.e("919307"),
                                    n.e("698547"),
                                    n.e("24889"),
                                    n.e("895532"),
                                    n.e("296467"),
                                    n.e("68532"),
                                    n.e("431714"),
                                    n.e("273165"),
                                    n.e("365074"),
                                    n.e("734268"),
                                    n.e("963333"),
                                    n.e("954372"),
                                ]).then(n.bind(n, 103407));
                                return (t) =>
                                    (0, u.jsx)(e, {
                                        renderModalProps: t,
                                        componentId: K,
                                        promotionId: w,
                                        properties: r,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.ANNOUNCEMENT_MODAL }),
        useDefaultOverrides: () => {
            let e = P(p.C.ANNOUNCEMENT_MODAL),
                t =
                    e?.properties.oneofKind === "announcementModalVariant1"
                        ? e.properties.announcementModalVariant1
                        : null;
            return null == t
                ? null
                : {
                      modalTopPill: t.modalTopPill,
                      header: t.header,
                      subheader: t.subheader,
                      heroAssetUrl:
                          "" !== t.videoLink
                              ? t.videoLink
                              : "" !== t.heroArtImageLinkDarkTheme
                                ? t.heroArtImageLinkDarkTheme
                                : t.heroArtImageLinkLightTheme,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? b.d.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                  };
        },
        controls: {
            modalTopPill: { label: "Top Pill", type: "text", defaultValue: "Limited time offer" },
            header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
            subheader: {
                label: "Subheader",
                type: "text",
                defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more.",
            },
            heroAssetUrl: {
                label: "Hero Asset URL (image or video)",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/2c74e3655641888bfb9bbf8070c30b8230551754fd0a22f660d8cb3cae5c9679.svg",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: b.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: b.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: b.d.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: b.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: b.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: b.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: b.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: b.d.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
        },
    };
var W = n(520361),
    Y = n(822571),
    z = n(662367);
let $ = "playground-billing-settings-banner",
    q = {
        name: "Nitro Settings Banner",
        id: "billing-settings-banner",
        component: function (e) {
            let t,
                n,
                o,
                l = P(p.C.BILLING_SETTINGS_BANNER),
                a = l?.properties.oneofKind === "billingSettingsBanner" ? l.properties.billingSettingsBanner : null,
                r = h.useField("selected"),
                [d] = i.useState(() => new Date(Date.now() + 6048e5)),
                s = r?.endDate ?? d,
                c = Y.A.createFromServer(
                    F(
                        $,
                        p.C.BILLING_SETTINGS_BANNER,
                        r?.id ?? "",
                        k($, {
                            oneofKind: "billingSettingsBanner",
                            billingSettingsBanner:
                                ((t = e.showButton
                                    ? {
                                          ...a?.button,
                                          copy: e.buttonCopy,
                                          buttonAction:
                                              e.buttonAction !== b.d.UNSPECIFIED
                                                  ? e.buttonAction
                                                  : (a?.button?.buttonAction ?? b.d.OPEN_TIER_2_PAYMENT_MODAL),
                                          deeplinkSection: a?.button?.deeplinkSection ?? "",
                                          navigableStorefrontApplicationId:
                                              a?.button?.navigableStorefrontApplicationId ??
                                              ("" !== e.navigableStorefrontApplicationId
                                                  ? { value: e.navigableStorefrontApplicationId }
                                                  : void 0),
                                      }
                                    : void 0),
                                (n =
                                    "" !== e.helpArticleId
                                        ? { ...a?.helpArticle, id: e.helpArticleId, linkText: e.helpArticleLinkText }
                                        : void 0),
                                (o = {
                                    header: e.header,
                                    body: e.body,
                                    asset: j(e.assetUrl, a?.asset),
                                    button: t,
                                    helpArticle: n,
                                }),
                                null != a ? { ...a, ...o } : W.h.create(o)),
                        }),
                    ),
                );
            return (0, u.jsx)("div", { className: V.MT, children: (0, u.jsx)(z.I, { component: c, endDate: s }) });
        },
        ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.BILLING_SETTINGS_BANNER }),
        useDefaultOverrides: () => {
            let e = P(p.C.BILLING_SETTINGS_BANNER),
                t = e?.properties.oneofKind === "billingSettingsBanner" ? e.properties.billingSettingsBanner : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      assetUrl: v(t.asset),
                      showButton: null != t.button,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? b.d.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      helpArticleId: t.helpArticle?.id ?? "",
                      helpArticleLinkText: t.helpArticle?.linkText ?? "",
                  };
        },
        controls: {
            header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
            body: {
                label: "Body",
                type: "text",
                defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
            },
            assetUrl: {
                label: "Asset URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/e05c122ded59f9b504af4fc2fdfb9539a22eff9e6fc3e31b84ae97f0d1857915.svg",
            },
            showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Claim Offer" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: b.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: b.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: b.d.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: b.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: b.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: b.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: b.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: b.d.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
            helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
            helpArticleLinkText: { label: "Help Article Link Text", type: "text", defaultValue: "Terms apply." },
        },
    };
var Z = n(959129),
    X = n(106512),
    J =
        (((r = {}).SEASONAL_GIFTING_2024_BALLOONS_REWARD_SKU_ID = "1301993378484850769"),
        (r.SEASONAL_GIFTING_2024_CAT_EARS_REWARD_SKU_ID = "1301993378484850771"),
        (r.SEASONAL_GIFTING_2024_SNOWFLAKES_REWARD_SKU_ID = "1301993378484850773"),
        (r.VALENTINES_GIFTING_2025_HEARTS_SKU_ID = "1326347611069874277"),
        (r.SUMMER_2025_GIFTING_REWARD_SKU_ID = "1369404111484751873"),
        (r.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID = "1418326115876864070"),
        (r.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID = "1418326116053287093"),
        (r.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID = "1418326115927326830"),
        (r.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID = "1418326116166533330"),
        (r.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID = "1418326115910680656"),
        (r.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID = "1418326116128788590"),
        (r.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID = "1418326115893907677"),
        (r.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID = "1418326116094967808"),
        (r.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID = "1343751617303805983"),
        (r.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID = "1377377712104018071"),
        (r.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID = "1343751617328975954"),
        (r.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID = "1464017397081047081"),
        (r.VALENTINES_GIFTING_2026_FULL_HP_SKU_ID = "1464006538304684063"),
        (r.WORLD_CUP_GIFTING_2026_AROUND_THE_WORLD_SKU_ID = "1509955522797768794"),
        (r.WORLD_CUP_GIFTING_2026_GOAL_SKU_ID = "1509962431290675280"),
        (r.SUMMER_2026_GOGO_FAKE_SKU_ID = "1533205265724211200"),
        (r.HALLOWEEN_GIFTING_2026_UMBRA_SKU_ID = "1552382432504840293"),
        (r.HALLOWEEN_GIFTING_2026_HEX_SKU_ID = "1552383012002332842"),
        (r.HALLOWEEN_GIFTING_2026_CROWSEPH_SKU_ID = "1552383354190565476"),
        r),
    Q = n(67948),
    ee = n(73153),
    et = n(793574),
    en = n(688810),
    eo = n(75678),
    el = n(852218),
    ea = n(202541);
let er = "playground-gift-customization-banner",
    ei = "playground-gift-customization-banner-promotion",
    ed = J.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var es = n(489248),
    eu = n(95701);
function ep(e) {
    let { id: t, component_type: n, promotion_id: o, properties: l } = e;
    i.useEffect(() => {
        ((0, s.Ak)(),
            ee.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: n, promotion_id: o, properties: l },
            }));
    }, [t, n, o, l]);
}
var ec = n(652215);
let eb = "playground-gift-icon",
    em = (0, eu.createChannelRecord)({ id: "1", guild_id: "1", type: ec.rbe.GUILD_TEXT, name: "playground" });
var e_ = n(720119),
    eA = n(40493);
function ef() {}
let eI = (0, eu.createChannelRecord)({ id: "1", guild_id: "1", type: ec.rbe.GUILD_TEXT, name: "playground" });
var eT = n(978656);
let eN = "playground-gift-plan-selection-card-banner",
    eg = "playground-gift-plan-selection-card-banner-promotion",
    eE = J.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var ey = n(823901);
function eS() {}
let eC = "playground-gift-reminder-nagbar";
var eO = n(670474),
    eR = n(371764);
let eh = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            o = P(p.C.MARKETING_PAGE_BANNER),
            l = o?.properties.oneofKind === "marketingPageBanner" ? o.properties.marketingPageBanner : null,
            a =
                ((t = e.showButton
                    ? {
                          ...l?.button,
                          copy: e.buttonCopy,
                          buttonAction:
                              e.buttonAction !== b.d.UNSPECIFIED
                                  ? e.buttonAction
                                  : (l?.button?.buttonAction ?? b.d.OPEN_TIER_2_PAYMENT_MODAL),
                          deeplinkSection: l?.button?.deeplinkSection ?? "",
                          navigableStorefrontApplicationId:
                              l?.button?.navigableStorefrontApplicationId ??
                              ("" !== e.navigableStorefrontApplicationId
                                  ? { value: e.navigableStorefrontApplicationId }
                                  : void 0),
                      }
                    : void 0),
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != l ? { ...l, ...n } : { helpArticleId: "", buttonVariant: eO.F.UNSPECIFIED, ...n });
        return (0, u.jsx)("div", {
            className: V.MT,
            children: (0, u.jsx)(eR.x, {
                componentId: "playground-marketing-page-banner",
                promotionId: "playground-marketing-page-banner-promotion",
                promotionBannerMarketingComponentFields: a,
            }),
        });
    },
    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.MARKETING_PAGE_BANNER }),
    useDefaultOverrides: () => {
        let e = P(p.C.MARKETING_PAGE_BANNER),
            t = e?.properties.oneofKind === "marketingPageBanner" ? e.properties.marketingPageBanner : null;
        return null == t
            ? null
            : {
                  header: t.header,
                  body: t.body,
                  assetUrl: t.assetUrl,
                  showButton: null != t.button,
                  buttonCopy: t.button?.copy ?? "",
                  buttonAction: t.button?.buttonAction ?? b.d.UNSPECIFIED,
                  navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
              };
    },
    controls: {
        header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
        body: {
            label: "Body",
            type: "text",
            defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
        },
        assetUrl: {
            label: "Asset URL",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/7088cd62971948493c32b65337c62856b4d25e7313305f252193263a1f2209d6.svg",
        },
        showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
        buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
        buttonAction: {
            label: "Button Action",
            type: "select",
            defaultValue: b.d.UNSPECIFIED,
            options: [
                { label: "Unspecified (use base)", value: b.d.UNSPECIFIED },
                { label: "Open Marketing Page", value: b.d.OPEN_MARKETING_PAGE },
                { label: "Open Tier 2 Payment Modal", value: b.d.OPEN_TIER_2_PAYMENT_MODAL },
                { label: "Open Tier 1 Payment Modal", value: b.d.OPEN_TIER_1_PAYMENT_MODAL },
                { label: "Open Plan Selection Modal", value: b.d.OPEN_PLAN_SELECTION_MODAL },
                { label: "Open Premium Group Payment Modal", value: b.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                { label: "Open Social Layer Storefront", value: b.d.OPEN_SOCIAL_LAYER_STOREFRONT },
            ],
        },
        navigableStorefrontApplicationId: {
            label: "Navigable Storefront Application ID",
            type: "text",
            defaultValue: "1346069614634864772",
        },
    },
};
var eP = n(754804);
let ev = "playground-nagbar";
var eM = n(834730),
    eL = n(709870),
    ex = n(37126);
let eG =
        "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
    eU = "playground-payment-modal-banner",
    eB = "playground-plan-select-card-banner";
var eD = n(964661),
    ek = n(503698),
    eF = n.n(ek),
    ej = n(612324),
    eV = n(403581),
    eK = n(214947),
    ew = n(34188),
    eH = n(577473),
    eW = n(834058),
    eY = n(765671),
    ez = n(573999);
function e$() {}
function eq(e) {
    let { icon: t, label: n, selected: o = !1, decoration: l, showHoverGradient: a = !1, ref: r } = e,
        { width: i, ref: d } = (0, eY.Ay)(),
        s = (0, ej.A)(r, d);
    return (0, u.jsxs)("button", {
        ref: s,
        type: "button",
        className: eF()(ez.pc, { [ez.EV]: o }),
        onClick: e$,
        children: [
            a && (0, u.jsx)(eW.ls, { eventTargetRef: d, isNitro: !0, contentWidth: i }),
            (0, u.jsxs)("span", {
                className: ez.Hq,
                children: [
                    (0, u.jsx)(t, { size: "md", color: "currentColor" }),
                    (0, u.jsx)(eM.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: ez.We,
                        children: n,
                    }),
                    null != l && (0, u.jsx)("div", { className: ez.UT, children: l }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let {
            tabLabel: t = "Nitro",
            selected: n = !1,
            decoration: o,
            showHoverGradient: l = !1,
            nitroRowRef: a,
            wrapNitroRow: r,
        } = e,
        i = (0, u.jsx)(eq, { ref: a, icon: eV.t, label: t, selected: n, decoration: o, showHoverGradient: l });
    return (0, u.jsxs)("nav", {
        className: ez.C$,
        children: [
            (0, u.jsx)(eq, { icon: eK.$, label: "Friends" }),
            null != r ? r(i) : i,
            (0, u.jsx)(eq, { icon: ew.U, label: "Shop" }),
            (0, u.jsx)(eq, { icon: eH.r, label: "Quests" }),
        ],
    });
}
var eX = n(52416);
function eJ() {}
let eQ = "playground-premium-tab-popover",
    e0 = {
        name: "Premium Tab Popover",
        id: "premium-tab-popover",
        component: function (e) {
            var t;
            let n,
                o,
                {
                    header: l,
                    body: a,
                    buttonCopy: r,
                    buttonAction: d,
                    navigableStorefrontApplicationId: s,
                    assetUrl: c,
                } = e,
                m = P(p.C.PREMIUM_TAB_POPOVER),
                _ = m?.properties.oneofKind === "premiumTabPopover" ? m.properties.premiumTabPopover : null;
            ep(
                ((n = {
                    header: (t = {
                        header: l,
                        body: a,
                        buttonCopy: r,
                        buttonAction: d,
                        navigableStorefrontApplicationId: s,
                        assetUrl: c,
                    }).header,
                    body: t.body,
                    button: {
                        ..._?.button,
                        copy: t.buttonCopy,
                        buttonAction:
                            t.buttonAction !== b.d.UNSPECIFIED
                                ? t.buttonAction
                                : (_?.button?.buttonAction ?? b.d.OPEN_TIER_2_PAYMENT_MODAL),
                        deeplinkSection: _?.button?.deeplinkSection ?? "",
                        navigableStorefrontApplicationId:
                            _?.button?.navigableStorefrontApplicationId ??
                            ("" !== t.navigableStorefrontApplicationId
                                ? { value: t.navigableStorefrontApplicationId }
                                : void 0),
                    },
                    asset: j(t.assetUrl, _?.asset),
                }),
                (o = k(eQ, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != _ ? { ..._, ...n } : { helpArticleId: "", ...n },
                })),
                F(eQ, p.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", o)),
            );
            let A = i.useRef(null);
            return (0, u.jsx)(eZ, {
                selected: !0,
                nitroRowRef: A,
                wrapNitroRow: (e) => (0, u.jsx)(eX.A, { targetElementRef: A, dismissPopover: eJ, children: e }),
            });
        },
        ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.PREMIUM_TAB_POPOVER }),
        useDefaultOverrides: () => {
            let e = P(p.C.PREMIUM_TAB_POPOVER),
                t = e?.properties.oneofKind === "premiumTabPopover" ? e.properties.premiumTabPopover : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? b.d.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      assetUrl: v(t.asset),
                  };
        },
        controls: {
            header: { label: "Header", type: "text", defaultValue: "Your Nitro offer is here" },
            body: {
                label: "Body",
                type: "text",
                defaultValue: "Subscribe now to claim bigger uploads, HD video, and more.",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: b.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: b.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: b.d.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: b.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: b.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: b.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: b.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: b.d.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
            assetUrl: {
                label: "Asset URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/38b775edc3d9b9fbfd496639f0a1deb9b9882c989fa70fdbb86f60dc764c2f80.svg",
            },
        },
    };
var e2 = n(796878);
let e1 = "playground-premium-tab-tooltip";
n(321073);
var e6 = n(896170),
    e7 = n(890497),
    e5 = n(636537);
async function e8() {
    return (await e5.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })).body.map((e) => {
        let { id: t, name: n, type: o, source: l, end_date: a } = e;
        return { id: t, name: n, type: o, source: l, endDate: null != a ? new Date(a) : void 0 };
    });
}
async function e3(e) {
    let t = await e5.Bo.get({ url: `/premium-marketing/promotions/${e}/components`, rejectWithError: !0 }),
        n = new Map();
    for (let e of t.body) {
        let t = (0, D.ii)(B.m, e.properties),
            o = n.get(e.component_type) ?? [];
        (o.push({
            premiumType: e.premium_type,
            premiumSource: e.premium_source,
            premiumSubscriptionType: e.premium_subscription_type,
            platform: e.platform,
            isDefaultBase: t.isDefaultBase,
            properties: t,
        }),
            n.set(e.component_type, o));
    }
    return n;
}
let e9 = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function e4(e) {
    let t = [];
    for (let n of e9) {
        let o = e.filter((e) => e.type === n.type);
        if (0 !== o.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            o))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
var te = n(613556),
    tt = n(549996),
    tn = n(758836);
let to = "playground-shop-nagbar";
function tl(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let ta = {
        id: "marketing",
        name: "Marketing",
        groups: [
            tl("Premium Surfaces", [
                H,
                q,
                eh,
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { body: l, ctaLabel: a, helpArticleId: r } = e,
                            i = P(p.C.NAGBAR),
                            d = i?.properties.oneofKind === "nagbar" ? i.properties.nagbar : null;
                        return (
                            ep(
                                ((n = {
                                    body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                    ctaLabel: t.ctaLabel,
                                    helpArticle:
                                        "" !== t.helpArticleId
                                            ? {
                                                  ...d?.helpArticle,
                                                  id: t.helpArticleId,
                                                  linkText: d?.helpArticle?.linkText ?? "",
                                              }
                                            : void 0,
                                }),
                                (o = k(ev, {
                                    oneofKind: "nagbar",
                                    nagbar:
                                        null != d
                                            ? { ...d, ...n }
                                            : { ctaAction: b.d.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                F(ev, p.C.NAGBAR, "playground-nagbar-promotion", o)),
                            ),
                            (0, u.jsx)("div", { className: V.MT, children: (0, u.jsx)(eP.A, {}) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.NAGBAR }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.NAGBAR),
                            t = e?.properties.oneofKind === "nagbar" ? e.properties.nagbar : null;
                        return null == t
                            ? null
                            : { body: t.body, ctaLabel: t.ctaLabel, helpArticleId: t.helpArticle?.id ?? "" };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Get Nitro and unlock bigger uploads, HD video, custom emoji, and more.",
                        },
                        ctaLabel: { label: "CTA Label", type: "text", defaultValue: "Get Nitro" },
                        helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
                    },
                },
                {
                    name: "Orbs Delivered Modal",
                    id: "nitro-orbs-bonus-modal",
                    component: function (e) {
                        let { orbsAmount: t } = e;
                        return (0, u.jsxs)(I.B, {
                            direction: "vertical",
                            gap: 16,
                            align: "start",
                            children: [
                                (0, u.jsx)(eM.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children:
                                        "The post-purchase \u201COrbs delivered\u201D confirmation modal for the Nitro orbs bonus. Set the orb amount in the controls, then open it.",
                                }),
                                (0, u.jsx)(m.$, {
                                    text: "Open Orbs delivered modal",
                                    onClick: () => (0, eL.$)({ orbsAmount: t }),
                                }),
                            ],
                        });
                    },
                    controls: { orbsAmount: { label: "Orb amount", type: "number", defaultValue: 1e4, minValue: 0 } },
                },
                {
                    name: "Shop Reward Modal",
                    id: "nitro-shop-reward-modal",
                    component: function () {
                        return (0, u.jsxs)(I.B, {
                            direction: "vertical",
                            gap: 16,
                            align: "start",
                            children: [
                                (0, u.jsx)(eM.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children:
                                        "The \u201CYour free Shop item is ready for you\u201D reward modal. Open it to preview.",
                                }),
                                (0, u.jsx)(m.$, { text: "Open Shop reward modal", onClick: () => (0, ex.tu)() }),
                            ],
                        });
                    },
                },
                {
                    name: "Payment Modal Banner",
                    id: "payment-modal-banner",
                    component: function (e) {
                        let { body: t, assetUrl: n } = e,
                            o = P(p.C.PAYMENT_MODAL_BANNER);
                        ep(
                            (function (e, t) {
                                let { body: n, assetUrl: o } = e,
                                    l = { assetUrl: o, body: n },
                                    a = k(eU, {
                                        oneofKind: "paymentModalBanner",
                                        paymentModalBanner: null != t ? { ...t, ...l } : { header: "", ...l },
                                    });
                                return F(eU, p.C.PAYMENT_MODAL_BANNER, "playground-payment-modal-banner-promotion", a);
                            })(
                                { body: t, assetUrl: n },
                                o?.properties.oneofKind === "paymentModalBanner"
                                    ? o.properties.paymentModalBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: l } = (0, en.Ay)(et.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children: (0, u.jsx)(m.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, eo.A)({ subscriptionTier: ea.pe.TIER_2, analyticsLocations: l }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.PAYMENT_MODAL_BANNER }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.PAYMENT_MODAL_BANNER),
                            t =
                                e?.properties.oneofKind === "paymentModalBanner"
                                    ? e.properties.paymentModalBanner
                                    : null;
                        return null == t ? null : { body: t.body, assetUrl: t.assetUrl };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Your Nitro offer is waiting - subscribe now to claim it.",
                        },
                        assetUrl: { label: "Asset URL", type: "text", defaultValue: eG },
                    },
                },
                {
                    name: "Plan Select Card Banner",
                    id: "plan-select-card-banner",
                    component: function (e) {
                        let { body: t, assetUrl: n } = e,
                            o = P(p.C.PLAN_SELECT_CARD_BANNER);
                        ep(
                            (function (e, t) {
                                let { body: n, assetUrl: o } = e,
                                    l = k(eB, {
                                        oneofKind: "planSelectCardBanner",
                                        planSelectCardBanner: { ...t, body: n, asset: j(o, t?.asset) },
                                    });
                                return F(
                                    eB,
                                    p.C.PLAN_SELECT_CARD_BANNER,
                                    "playground-plan-select-card-banner-promotion",
                                    l,
                                );
                            })(
                                { body: t, assetUrl: n },
                                o?.properties.oneofKind === "planSelectCardBanner"
                                    ? o.properties.planSelectCardBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: l } = (0, en.Ay)(et.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children: (0, u.jsx)(m.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Select Plan",
                                onClick: () => (0, eo.A)({ analyticsLocations: l }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.PLAN_SELECT_CARD_BANNER }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.PLAN_SELECT_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "planSelectCardBanner"
                                    ? e.properties.planSelectCardBanner
                                    : null;
                        return null == t ? null : { body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Join Nitro today and get your second month free! Limited time offer.",
                        },
                        assetUrl: { label: "Asset URL", type: "text", defaultValue: eG },
                    },
                },
                {
                    name: "Premium Tab Badge",
                    id: "premium-tab-badge",
                    component: function (e) {
                        let t = (0, u.jsx)(eD.A, {
                            componentId: "playground-premium-tab-badge",
                            promotionId: "playground-premium-tab-badge-promotion",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, u.jsx)(eZ, {
                            tabLabel: e.tabLabel,
                            selected: e.selected,
                            decoration: t,
                            showHoverGradient: e.showHoverGradient,
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.PREMIUM_TAB }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.PREMIUM_TAB),
                            t = e?.properties.oneofKind === "premiumTab" ? e.properties.premiumTab : null;
                        return null == t
                            ? null
                            : {
                                  badgeCopy: t.badgeLabel,
                                  acknowledgedBadgeCopy: t.acknowledgedBadgeLabel,
                                  showHoverGradient: t.showHoverGradient,
                              };
                    },
                    controls: {
                        tabLabel: { label: "Tab Label", type: "text", defaultValue: "Nitro" },
                        selected: { label: "Selected", type: "boolean", defaultValue: !1 },
                        badgeCopy: { label: "Badge Copy", type: "text", defaultValue: "Offer" },
                        acknowledgedBadgeCopy: { label: "Acknowledged Copy", type: "text", defaultValue: "Offer" },
                        isDismissed: { label: "Acknowledged", type: "boolean", defaultValue: !1 },
                        showHoverGradient: { label: "Show hover gradient", type: "boolean", defaultValue: !1 },
                    },
                },
                e0,
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { header: l, body: a, assetUrl: r } = e,
                            i = P(p.C.PREMIUM_TAB_TOOLTIP),
                            d = i?.properties.oneofKind === "premiumTabTooltip" ? i.properties.premiumTabTooltip : null;
                        return (
                            ep(
                                ((n = {
                                    header: (t = { header: l, body: a, assetUrl: r }).header,
                                    body: t.body,
                                    asset: j(t.assetUrl, d?.asset),
                                }),
                                (o = k(e1, {
                                    oneofKind: "premiumTabTooltip",
                                    premiumTabTooltip: null != d ? { ...d, ...n } : n,
                                })),
                                F(e1, p.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", o)),
                            ),
                            (0, u.jsx)(eZ, { selected: !0, wrapNitroRow: (e) => (0, u.jsx)(e2.A, { children: e }) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.PREMIUM_TAB_TOOLTIP }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.PREMIUM_TAB_TOOLTIP),
                            t = e?.properties.oneofKind === "premiumTabTooltip" ? e.properties.premiumTabTooltip : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Get Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Unlock bigger uploads, HD video, custom emoji, and more.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/626692d6d8d71b08bd3b9f0f9d846a327960d0e0a5a54adb34f5373731287e98.svg",
                        },
                    },
                },
                {
                    name: "Shop Nagbar",
                    id: "shop-nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { body: l, ctaLabel: a, helpArticleId: r } = e,
                            i = P(p.C.SHOP_NAGBAR),
                            d = i?.properties.oneofKind === "shopNagbar" ? i.properties.shopNagbar : null;
                        ep(
                            ((n = {
                                body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                ctaLabel: t.ctaLabel,
                                helpArticle:
                                    "" !== t.helpArticleId
                                        ? {
                                              ...d?.helpArticle,
                                              id: t.helpArticleId,
                                              linkText: d?.helpArticle?.linkText ?? "",
                                          }
                                        : void 0,
                            }),
                            (o = k(to, {
                                oneofKind: "shopNagbar",
                                shopNagbar:
                                    null != d
                                        ? { ...d, ...n }
                                        : { ctaAction: b.d.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                            })),
                            F(to, p.C.SHOP_NAGBAR, "playground-shop-nagbar-promotion", o)),
                        );
                        let s = (0, tt.c)(p.C.SHOP_NAGBAR),
                            c =
                                s?.properties.properties.oneofKind === "shopNagbar"
                                    ? {
                                          shopNagbar: s.properties.properties.shopNagbar,
                                          componentId: s.id,
                                          promotionId: s.promotionId,
                                      }
                                    : null;
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children:
                                null != c &&
                                (0, u.jsx)(te.A, {
                                    shopNagbar: c.shopNagbar,
                                    componentId: c.componentId,
                                    promotionId: c.promotionId,
                                    tab: tn.G2.HOME,
                                    onDismiss: () => {},
                                }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.SHOP_NAGBAR }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.SHOP_NAGBAR),
                            t = e?.properties.oneofKind === "shopNagbar" ? e.properties.shopNagbar : null;
                        return null == t
                            ? null
                            : { body: t.body, ctaLabel: t.ctaLabel, helpArticleId: t.helpArticle?.id ?? "" };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Get Nitro and your next Shop item is free.",
                        },
                        ctaLabel: { label: "CTA Label", type: "text", defaultValue: "Get Nitro" },
                        helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
                    },
                },
            ]),
            tl("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        let t,
                            n = P(p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            o =
                                n?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? n.properties.billingSettingsNitroGiftBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children: (0, u.jsx)(X.m, {
                                config:
                                    ((t = {
                                        header: e.header,
                                        body: e.body,
                                        additionalTerms: e.additionalTerms,
                                        textColor: e.textColor,
                                        asset: j(e.assetUrl, o?.asset),
                                        backgroundAsset: j(e.backgroundAssetUrl, o?.backgroundAsset),
                                        gradient: {
                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                            angle: e.gradientAngle,
                                        },
                                    }),
                                    null != o ? { ...o, ...t } : Z.v.create(t)),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            t =
                                e?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? e.properties.billingSettingsNitroGiftBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            header: t.header,
                            body: t.body,
                            additionalTerms: t.additionalTerms,
                            assetUrl: v(t.asset),
                            backgroundAssetUrl: v(t.backgroundAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                            textColor: t.textColor,
                        };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Give the gift of Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue:
                                "Share bigger uploads, HD video, custom emoji, and more with someone special.",
                        },
                        additionalTerms: { label: "Additional Terms", type: "text", defaultValue: "" },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/f5568af2417d741c736bee8a6dca725049580f72f4ace4be770de662c8ed76d4.png",
                        },
                        backgroundAssetUrl: {
                            label: "Background Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/c0da396fa3e5373677f66f634ee2e5fb32f4d8b85063a908be7f975239145b12.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 180,
                            minValue: 0,
                            maxValue: 360,
                        },
                        textColor: { label: "Text Color", type: "color", defaultValue: "#FFFFFF" },
                    },
                },
                {
                    name: "Gift Customization Banner",
                    id: "gift-customization-banner",
                    component: function (e) {
                        let { analyticsLocations: t } = (0, en.Ay)(et.A.PAYMENT_FLOW_TEST_PAGE),
                            n = P(p.C.GIFT_CUSTOMIZATION_BANNER),
                            o =
                                n?.properties.oneofKind === "giftCustomizationBanner"
                                    ? n.properties.giftCustomizationBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children: (0, u.jsx)(m.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, l, a, r, i;
                                    ((r = {
                                        id: er,
                                        component_type: p.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: ei,
                                        properties:
                                            ((n = {
                                                asset: j(e.assetUrl, o?.asset),
                                                backgroundAsset: j(e.backgroundAssetUrl, o?.backgroundAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (l =
                                                null != o
                                                    ? { ...o, ...n }
                                                    : {
                                                          assetUrl: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          backgroundAssetUrl: "",
                                                          assetVariant: Q.u.NORMAL,
                                                          ...n,
                                                      }),
                                            (a = B.m.create({
                                                contentIdentifier: er,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: l,
                                                },
                                            })),
                                            (0, D.ob)(B.m, a)),
                                    }),
                                        (i = {
                                            id: ei,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: el.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [ed] } },
                                        }),
                                        ee.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        ee.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, eo.A)({
                                            isGift: !0,
                                            subscriptionTier: ea.pe.TIER_2,
                                            analyticsLocations: t,
                                        }));
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.GIFT_CUSTOMIZATION_BANNER }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.GIFT_CUSTOMIZATION_BANNER),
                            t =
                                e?.properties.oneofKind === "giftCustomizationBanner"
                                    ? e.properties.giftCustomizationBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            assetUrl: v(t.asset),
                            backgroundAssetUrl: v(t.backgroundAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/0d3886dfd9f05895ee80f5e441fa818b7edc5fdba6fd2ca543eef5c0a9a8a4d7.png",
                        },
                        backgroundAssetUrl: {
                            label: "Background Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/3b0b1714d586a0d28a37b5f0a23f2f516a25971b57127af11027adb8e3e01a53.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 90,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Icon",
                    id: "gift-icon",
                    component: function (e) {
                        let t,
                            n,
                            o = P(p.C.GIFT_ICON),
                            l = o?.properties.oneofKind === "giftIcon" ? o.properties.giftIcon : null;
                        return (
                            ep(
                                ((t = {
                                    boxAnimationUrl: "",
                                    trinketAnimationUrl:
                                        "https://cdn.discordapp.com/assets/content/2587f697fb8e499a331c465aee4b37ae2b233d4a21ce130ef9a3032c1455f1c4.lottiejson",
                                    trinketGlowAnimationUrl:
                                        "https://cdn.discordapp.com/assets/content/a08eb1072a1016a58c1e5e3d92a9476900d8e8370a29c33c686c39ec9d333fb7.lottiejson",
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                                (n = k(eb, { oneofKind: "giftIcon", giftIcon: null != l ? { ...l, ...t } : t })),
                                F(eb, p.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                            ),
                            (0, u.jsx)("div", { className: V.WG, children: (0, u.jsx)(es.A, { channel: em }) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.GIFT_ICON }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.GIFT_ICON),
                            t = e?.properties.oneofKind === "giftIcon" ? e.properties.giftIcon : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 180,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Icon Coachmark",
                    id: "gift-icon-coachmark",
                    component: function (e) {
                        let t = P(p.C.GIFT_ICON_COACHMARK),
                            n = t?.properties.oneofKind === "giftIconCoachmark" ? t.properties.giftIconCoachmark : null,
                            o = { header: e.header, body: e.body, asset: j(e.assetUrl, n?.asset) },
                            l = null != n ? { ...n, ...o } : e_.l.create(o);
                        return (0, u.jsx)("div", {
                            className: V.WG,
                            children: (0, u.jsx)(eA.A, {
                                coachmarkConfig: l,
                                onComplete: ef,
                                onCheckItOutClick: ef,
                                markAsDismissed: ef,
                                children: (0, u.jsx)(es.A, { channel: eI }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.GIFT_ICON_COACHMARK }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.GIFT_ICON_COACHMARK),
                            t = e?.properties.oneofKind === "giftIconCoachmark" ? e.properties.giftIconCoachmark : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Gift Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Send Nitro to a friend and claim a free reward for yourself.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/1d586250a524175ec9772040719e124d3ab9fe23d31804273ab9ced2b77446b3.png",
                        },
                    },
                },
                {
                    name: "Gift Plan Selection Card Banner",
                    id: "gift-plan-selection-card-banner",
                    component: function (e) {
                        let { analyticsLocations: t } = (0, en.Ay)(et.A.PAYMENT_FLOW_TEST_PAGE),
                            n = P(p.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            o =
                                n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? n.properties.giftPlanSelectionCardBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: V.MT,
                            children: (0, u.jsx)(m.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, l, a, r, i;
                                    ((r = {
                                        id: eN,
                                        component_type: p.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: eg,
                                        properties:
                                            ((n = {
                                                avatarAsset: j(e.avatarUrl, o?.avatarAsset),
                                                bannerAsset: j(e.bannerUrl, o?.bannerAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (l =
                                                null != o
                                                    ? { ...o, ...n }
                                                    : {
                                                          header: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          bannerAssetUrl: "",
                                                          assetVariant: eT.Y.NORMAL,
                                                          backgroundAssetUrl: "",
                                                          cardAssetUrl: "",
                                                          ...n,
                                                      }),
                                            (a = B.m.create({
                                                contentIdentifier: eN,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: l,
                                                },
                                            })),
                                            (0, D.ob)(B.m, a)),
                                    }),
                                        (i = {
                                            id: eg,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: el.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [eE] } },
                                        }),
                                        ee.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        ee.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, eo.A)({ isGift: !0, analyticsLocations: t }));
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.GIFT_PLAN_SELECTION_CARD_BANNER }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? e.properties.giftPlanSelectionCardBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            avatarUrl: v(t.avatarAsset),
                            bannerUrl: v(t.bannerAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        avatarUrl: {
                            label: "Avatar URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/2919c872bfcd7b0eb5fe4fcd68e8eb334037461049eb025eb9646d5b886382ad.png",
                        },
                        bannerUrl: {
                            label: "Banner URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/58b31636da40fd4a599e37013966a825be1655aa29c599f508f4b26255da46eb.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 90,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Reminder Nagbar",
                    id: "gift-reminder-nagbar",
                    component: function (e) {
                        let t,
                            n,
                            { body: o } = e,
                            l = P(p.C.GIFT_REMINDER_NAGBAR),
                            a =
                                l?.properties.oneofKind === "giftReminderNagbar"
                                    ? l.properties.giftReminderNagbar
                                    : null;
                        return (
                            ep(
                                ((t = { body: { body: o }.body }),
                                (n = k(eC, {
                                    oneofKind: "giftReminderNagbar",
                                    giftReminderNagbar: null != a ? { ...a, ...t } : t,
                                })),
                                F(eC, p.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                            ),
                            (0, u.jsx)("div", {
                                className: V.MT,
                                children: (0, u.jsx)(ey.y, { markAsDismissed: eS, className: V.gO }),
                            })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(U, { componentType: p.C.GIFT_REMINDER_NAGBAR }),
                    useDefaultOverrides: () => {
                        let e = P(p.C.GIFT_REMINDER_NAGBAR),
                            t =
                                e?.properties.oneofKind === "giftReminderNagbar"
                                    ? e.properties.giftReminderNagbar
                                    : null;
                        return null == t ? null : { body: t.body };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Don't forget - gift Nitro and claim a free reward before the offer ends.",
                        },
                    },
                },
            ]),
        ],
        tags: ["Marketing", "Premium", "Nitro"],
        IconComponent: d.SparklesIcon,
        Provider: function (e) {
            let { children: t } = e;
            return (
                i.useEffect(
                    () => () => {
                        ((0, s.Ak)(), (0, s.b8)());
                    },
                    [],
                ),
                t
            );
        },
        HeaderControl: function () {
            let e = h.useField("selected"),
                [t, n] = i.useState([]),
                o = i.useRef(null);
            i.useEffect(() => {
                let e = !0;
                return (
                    e8()
                        .then((t) => {
                            e && n(t);
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, []);
            let l = i.useMemo(() => e4(t), [t]),
                a = i.useCallback((e, n) => e4((0, e6.Ht)(t, n, { keys: ["name"] })), [t]);
            return 0 === t.length
                ? null
                : (0, u.jsx)("div", {
                      className: V.$K,
                      children: (0, u.jsx)(e7.Z, {
                          clearable: !0,
                          selectionMode: "single",
                          placeholder: "Load Promo Data",
                          value: e?.id,
                          options: l,
                          customMatchSorter: a,
                          onSelectionChange: function (e) {
                              if (((o.current = e), null == e))
                                  return void h.setState({
                                      selected: null,
                                      componentRowsByType: null,
                                      availableLocales: [],
                                      userStateByType: new Map(),
                                      localeOverride: null,
                                  });
                              let n = t.find((t) => t.id === e);
                              null != n &&
                                  e3(n.id)
                                      .then((e) => {
                                          o.current === n.id &&
                                              (function (e, t) {
                                                  let n = new Set();
                                                  for (let e of t.values())
                                                      for (let t of e)
                                                          !(function e(t, n) {
                                                              if (Array.isArray(t)) {
                                                                  for (let o of t) e(o, n);
                                                                  return;
                                                              }
                                                              if ("object" == typeof t && null != t)
                                                                  for (let [o, l] of Object.entries(t)) {
                                                                      if (o.endsWith(O) && R(l)) {
                                                                          for (let e of Object.keys(l.localizations))
                                                                              n.add(e);
                                                                          continue;
                                                                      }
                                                                      e(l, n);
                                                                  }
                                                          })(t.properties, n);
                                                  h.setState({
                                                      selected: e,
                                                      componentRowsByType: t,
                                                      availableLocales: [...n].sort(),
                                                      userStateByType: new Map(),
                                                      localeOverride: null,
                                                  });
                                              })(n, e);
                                      })
                                      .catch(() => {});
                          },
                      }),
                  });
        },
    },
    tr = { playgroundBaseUrl: "marketing", collections: [ta] };
