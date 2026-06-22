n.r(t), n.d(t, { marketingCollection: () => eL, playgroundConfig: () => eG });
var a,
    o = n(64700),
    l = n(175841),
    r = n(962644),
    i = n(627968),
    d = n(877624),
    s = n(232582),
    p = n(821609),
    u = n(192308),
    c = n(935208);
let b = (0, n(839214).D)(() => ({ selected: null, componentsByType: null }));
function m(e) {
    let t = b.useField("componentsByType");
    return t?.get(e) ?? null;
}
function f(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
var g = n(65412),
    _ = n(875676);
function A(e, t) {
    return _.m.create({ contentIdentifier: e, properties: t });
}
function I(e, t, n, a) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, g.C)(_.m.toBinary(a)) };
}
function E(e, t) {
    return e === f(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var T = n(553706);
let y = "playground-announcement-modal",
    N = c.default.fromTimestamp(Date.now()),
    S = {
        name: "Announcement Modal",
        id: "announcement-modal",
        component: function (e) {
            let t = m(d.C.ANNOUNCEMENT_MODAL),
                a =
                    t?.properties.oneofKind === "announcementModalVariant1"
                        ? t.properties.announcementModalVariant1
                        : null;
            return (0, i.jsx)("div", {
                className: T.MT,
                children: (0, i.jsx)(p.$, {
                    variant: "expressive",
                    size: "md",
                    text: "Open Announcement Modal",
                    onClick: () => {
                        let t,
                            o =
                                ((t = {
                                    modalTopPill: e.modalTopPill,
                                    header: e.header,
                                    subheader: e.subheader,
                                    heroArtImageLinkLightTheme: e.heroArtImageUrl,
                                    heroArtImageLinkDarkTheme: e.heroArtImageUrl,
                                    button: {
                                        ...a?.button,
                                        copy: e.buttonCopy,
                                        buttonAction:
                                            e.buttonAction !== s.dz.UNSPECIFIED
                                                ? e.buttonAction
                                                : (a?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL),
                                        deeplinkSection: a?.button?.deeplinkSection ?? "",
                                        navigableStorefrontApplicationId: a?.button
                                            ?.navigableStorefrontApplicationId ?? {
                                            value: e.navigableStorefrontApplicationId,
                                        },
                                    },
                                }),
                                A(y, {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: null != a ? { ...a, ...t } : s.ih.create(t),
                                }));
                        (0, u.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("45733"),
                                    n.e("55532"),
                                    n.e("4207"),
                                    n.e("59914"),
                                    n.e("22513"),
                                    n.e("34454"),
                                    n.e("74414"),
                                    n.e("4394"),
                                    n.e("89050"),
                                    n.e("60193"),
                                    n.e("88610"),
                                    n.e("33087"),
                                    n.e("4189"),
                                    n.e("6026"),
                                    n.e("1009"),
                                    n.e("90862"),
                                    n.e("29877"),
                                    n.e("90266"),
                                    n.e("32890"),
                                    n.e("16918"),
                                    n.e("33730"),
                                    n.e("91483"),
                                    n.e("66434"),
                                    n.e("85566"),
                                    n.e("16192"),
                                    n.e("71413"),
                                    n.e("82655"),
                                    n.e("76821"),
                                    n.e("67687"),
                                    n.e("55642"),
                                    n.e("59760"),
                                    n.e("67865"),
                                    n.e("75029"),
                                    n.e("56405"),
                                    n.e("75120"),
                                    n.e("25508"),
                                    n.e("22256"),
                                    n.e("17303"),
                                    n.e("45554"),
                                    n.e("36761"),
                                    n.e("69292"),
                                    n.e("32993"),
                                    n.e("98488"),
                                    n.e("31591"),
                                    n.e("9399"),
                                    n.e("4704"),
                                    n.e("85497"),
                                    n.e("91024"),
                                    n.e("33865"),
                                    n.e("42309"),
                                    n.e("29351"),
                                    n.e("43233"),
                                    n.e("85184"),
                                    n.e("22796"),
                                    n.e("4276"),
                                    n.e("50180"),
                                    n.e("37497"),
                                    n.e("53684"),
                                    n.e("69213"),
                                    n.e("86650"),
                                    n.e("1055"),
                                    n.e("23036"),
                                    n.e("3951"),
                                    n.e("39865"),
                                    n.e("50870"),
                                    n.e("43608"),
                                    n.e("29944"),
                                    n.e("59731"),
                                    n.e("40690"),
                                    n.e("49993"),
                                    n.e("52196"),
                                    n.e("85899"),
                                    n.e("33287"),
                                    n.e("61322"),
                                    n.e("43031"),
                                    n.e("22656"),
                                    n.e("28379"),
                                    n.e("41737"),
                                    n.e("92330"),
                                    n.e("53233"),
                                    n.e("96901"),
                                    n.e("49645"),
                                    n.e("13233"),
                                    n.e("25339"),
                                    n.e("84454"),
                                    n.e("62426"),
                                    n.e("1887"),
                                    n.e("39995"),
                                    n.e("25568"),
                                    n.e("29272"),
                                    n.e("97391"),
                                    n.e("67332"),
                                    n.e("57114"),
                                    n.e("90059"),
                                    n.e("53552"),
                                    n.e("58127"),
                                    n.e("816"),
                                    n.e("43683"),
                                    n.e("59303"),
                                    n.e("31610"),
                                    n.e("83893"),
                                    n.e("70278"),
                                    n.e("16860"),
                                    n.e("56359"),
                                    n.e("63051"),
                                    n.e("99501"),
                                    n.e("59494"),
                                    n.e("19709"),
                                    n.e("67458"),
                                    n.e("58427"),
                                    n.e("20642"),
                                    n.e("29161"),
                                    n.e("98180"),
                                    n.e("41625"),
                                    n.e("7959"),
                                    n.e("60717"),
                                    n.e("55552"),
                                    n.e("85484"),
                                    n.e("2672"),
                                    n.e("31135"),
                                    n.e("55929"),
                                    n.e("26128"),
                                    n.e("11262"),
                                    n.e("54483"),
                                    n.e("33460"),
                                    n.e("82314"),
                                    n.e("41686"),
                                    n.e("25677"),
                                    n.e("85411"),
                                    n.e("88804"),
                                    n.e("89001"),
                                    n.e("54558"),
                                    n.e("55990"),
                                    n.e("73679"),
                                    n.e("35538"),
                                    n.e("73178"),
                                    n.e("61274"),
                                    n.e("41229"),
                                    n.e("31592"),
                                    n.e("28339"),
                                    n.e("97638"),
                                    n.e("22995"),
                                    n.e("70141"),
                                    n.e("98275"),
                                    n.e("72651"),
                                    n.e("29363"),
                                    n.e("88016"),
                                    n.e("38886"),
                                    n.e("84133"),
                                    n.e("30240"),
                                    n.e("510"),
                                    n.e("90241"),
                                    n.e("37271"),
                                    n.e("65813"),
                                    n.e("8037"),
                                    n.e("50748"),
                                    n.e("1844"),
                                    n.e("57016"),
                                    n.e("45826"),
                                    n.e("9396"),
                                    n.e("53075"),
                                    n.e("26564"),
                                    n.e("77529"),
                                    n.e("10061"),
                                    n.e("57766"),
                                    n.e("91552"),
                                    n.e("79154"),
                                    n.e("97782"),
                                    n.e("45588"),
                                    n.e("20056"),
                                    n.e("12672"),
                                    n.e("78340"),
                                    n.e("91680"),
                                    n.e("57036"),
                                    n.e("57174"),
                                    n.e("86847"),
                                    n.e("48226"),
                                    n.e("88941"),
                                    n.e("61379"),
                                    n.e("25693"),
                                    n.e("32606"),
                                    n.e("28154"),
                                    n.e("4369"),
                                    n.e("34236"),
                                    n.e("11523"),
                                    n.e("10004"),
                                    n.e("77473"),
                                    n.e("53930"),
                                    n.e("23353"),
                                    n.e("18943"),
                                    n.e("7167"),
                                    n.e("62875"),
                                    n.e("25279"),
                                    n.e("39810"),
                                    n.e("92789"),
                                    n.e("57598"),
                                    n.e("31390"),
                                    n.e("37687"),
                                    n.e("43039"),
                                    n.e("26780"),
                                    n.e("44265"),
                                    n.e("48804"),
                                    n.e("8304"),
                                    n.e("84103"),
                                    n.e("17225"),
                                    n.e("30920"),
                                    n.e("63095"),
                                    n.e("70653"),
                                    n.e("52266"),
                                    n.e("53039"),
                                    n.e("96123"),
                                    n.e("92583"),
                                    n.e("64615"),
                                    n.e("31825"),
                                    n.e("36320"),
                                    n.e("97526"),
                                    n.e("79525"),
                                    n.e("82069"),
                                    n.e("75134"),
                                    n.e("1462"),
                                    n.e("55184"),
                                    n.e("74926"),
                                    n.e("28866"),
                                    n.e("50015"),
                                    n.e("72442"),
                                    n.e("54282"),
                                    n.e("21574"),
                                    n.e("90889"),
                                    n.e("62931"),
                                    n.e("18181"),
                                    n.e("59880"),
                                    n.e("14805"),
                                    n.e("73547"),
                                    n.e("99593"),
                                    n.e("60658"),
                                    n.e("55314"),
                                    n.e("89094"),
                                    n.e("6338"),
                                    n.e("47834"),
                                    n.e("47555"),
                                    n.e("18573"),
                                    n.e("29177"),
                                    n.e("21435"),
                                    n.e("61935"),
                                    n.e("88990"),
                                    n.e("21856"),
                                    n.e("58038"),
                                    n.e("32551"),
                                    n.e("64046"),
                                    n.e("43426"),
                                    n.e("96443"),
                                    n.e("65743"),
                                    n.e("87079"),
                                    n.e("88559"),
                                    n.e("60177"),
                                    n.e("25637"),
                                    n.e("39665"),
                                    n.e("23532"),
                                    n.e("31644"),
                                    n.e("76311"),
                                    n.e("20287"),
                                    n.e("18997"),
                                    n.e("3131"),
                                    n.e("47177"),
                                    n.e("27272"),
                                    n.e("36149"),
                                    n.e("51778"),
                                    n.e("24914"),
                                    n.e("42714"),
                                    n.e("20382"),
                                    n.e("63333"),
                                    n.e("73165"),
                                    n.e("34268"),
                                    n.e("54372"),
                                ]).then(n.bind(n, 103407));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        renderModalProps: t,
                                        componentId: y,
                                        promotionId: N,
                                        properties: o,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        useDefaultOverrides: () => {
            let e = m(d.C.ANNOUNCEMENT_MODAL),
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
                      heroArtImageUrl:
                          "" !== t.heroArtImageLinkDarkTheme
                              ? t.heroArtImageLinkDarkTheme
                              : t.heroArtImageLinkLightTheme,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? s.dz.UNSPECIFIED,
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
            heroArtImageUrl: {
                label: "Hero Art Image URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/2c74e3655641888bfb9bbf8070c30b8230551754fd0a22f660d8cb3cae5c9679.svg",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: s.dz.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: s.dz.UNSPECIFIED },
                    { label: "Open Marketing Page", value: s.dz.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: s.dz.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: s.dz.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: s.dz.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: s.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
        },
    };
var C = n(959129),
    O = n(815846),
    h =
        (((a = {}).SEASONAL_GIFTING_2024_BALLOONS_REWARD_SKU_ID = "1301993378484850769"),
        (a.SEASONAL_GIFTING_2024_CAT_EARS_REWARD_SKU_ID = "1301993378484850771"),
        (a.SEASONAL_GIFTING_2024_SNOWFLAKES_REWARD_SKU_ID = "1301993378484850773"),
        (a.VALENTINES_GIFTING_2025_HEARTS_SKU_ID = "1326347611069874277"),
        (a.SUMMER_2025_GIFTING_REWARD_SKU_ID = "1369404111484751873"),
        (a.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID = "1418326115876864070"),
        (a.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID = "1418326116053287093"),
        (a.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID = "1418326115927326830"),
        (a.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID = "1418326116166533330"),
        (a.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID = "1418326115910680656"),
        (a.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID = "1418326116128788590"),
        (a.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID = "1418326115893907677"),
        (a.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID = "1418326116094967808"),
        (a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID = "1343751617303805983"),
        (a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID = "1377377712104018071"),
        (a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID = "1343751617328975954"),
        (a.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID = "1464017397081047081"),
        (a.VALENTINES_GIFTING_2026_FULL_HP_SKU_ID = "1464006538304684063"),
        (a.WORLD_CUP_GIFTING_2026_AROUND_THE_WORLD_SKU_ID = "1509955522797768794"),
        (a.WORLD_CUP_GIFTING_2026_GOAL_SKU_ID = "1509962431290675280"),
        a),
    P = n(67948),
    U = n(228366),
    v = n(793574),
    R = n(688810),
    M = n(532794),
    L = n(852218),
    G = n(788868);
let x = "playground-gift-customization-banner",
    k = "playground-gift-customization-banner-promotion",
    D = h.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var B = n(336618),
    V = n(95701);
function F(e) {
    let { id: t, component_type: n, promotion_id: a, properties: l } = e;
    o.useEffect(() => {
        (0, r.Ak)(),
            U.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: n, promotion_id: a, properties: l },
            });
    }, [t, n, a, l]);
}
var K = n(652215);
let j = "playground-gift-icon",
    z = (0, V.createChannelRecord)({ id: "1", guild_id: "1", type: K.rbe.GUILD_TEXT, name: "playground" });
var w = n(720119),
    H = n(743477),
    W = n(40493);
let Y = () => {},
    $ = (0, V.createChannelRecord)({ id: "1", guild_id: "1", type: K.rbe.GUILD_TEXT, name: "playground" });
var Z = n(978656);
let X = "playground-gift-plan-selection-card-banner",
    q = "playground-gift-plan-selection-card-banner-promotion",
    J = h.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var Q = n(823901);
let ee = () => {},
    et = "playground-gift-reminder-nagbar";
var en = n(371764);
let ea = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            a = m(d.C.MARKETING_PAGE_BANNER),
            o = a?.properties.oneofKind === "marketingPageBanner" ? a.properties.marketingPageBanner : null,
            l =
                ((t = e.showButton
                    ? {
                          ...o?.button,
                          copy: e.buttonCopy,
                          buttonAction:
                              e.buttonAction !== s.dz.UNSPECIFIED
                                  ? e.buttonAction
                                  : (o?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL),
                          deeplinkSection: o?.button?.deeplinkSection ?? "",
                          navigableStorefrontApplicationId: o?.button?.navigableStorefrontApplicationId ?? {
                              value: e.navigableStorefrontApplicationId,
                          },
                      }
                    : void 0),
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != o ? { ...o, ...n } : { helpArticleId: "", ...n });
        return (0, i.jsx)("div", {
            className: T.MT,
            children: (0, i.jsx)(en.x, {
                componentId: "playground-marketing-page-banner",
                promotionBannerMarketingComponentFields: l,
            }),
        });
    },
    useDefaultOverrides: () => {
        let e = m(d.C.MARKETING_PAGE_BANNER),
            t = e?.properties.oneofKind === "marketingPageBanner" ? e.properties.marketingPageBanner : null;
        return null == t
            ? null
            : {
                  header: t.header,
                  body: t.body,
                  assetUrl: t.assetUrl,
                  showButton: null != t.button,
                  buttonCopy: t.button?.copy ?? "",
                  buttonAction: t.button?.buttonAction ?? s.dz.UNSPECIFIED,
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
            defaultValue: s.dz.UNSPECIFIED,
            options: [
                { label: "Unspecified (use base)", value: s.dz.UNSPECIFIED },
                { label: "Open Marketing Page", value: s.dz.OPEN_MARKETING_PAGE },
                { label: "Open Tier 2 Payment Modal", value: s.dz.OPEN_TIER_2_PAYMENT_MODAL },
                { label: "Open Tier 1 Payment Modal", value: s.dz.OPEN_TIER_1_PAYMENT_MODAL },
                { label: "Open Plan Selection Modal", value: s.dz.OPEN_PLAN_SELECTION_MODAL },
                { label: "Open Premium Group Payment Modal", value: s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                { label: "Open Social Layer Storefront", value: s.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
            ],
        },
        navigableStorefrontApplicationId: {
            label: "Navigable Storefront Application ID",
            type: "text",
            defaultValue: "1346069614634864772",
        },
    },
};
var eo = n(754804);
let el = "playground-nagbar",
    er = "playground-payment-modal-banner";
var ei = n(964661),
    ed = n(503698),
    es = n.n(ed),
    ep = n(834730),
    eu = n(403581),
    ec = n(214947),
    eb = n(34188),
    em = n(577473),
    ef = n(15632);
let eg = () => {},
    e_ = o.forwardRef(function (e, t) {
        let { icon: n, label: a, selected: o = !1, decoration: l } = e;
        return (0, i.jsxs)("button", {
            ref: t,
            type: "button",
            className: es()(ef.pc, { [ef.EV]: o }),
            onClick: eg,
            children: [
                (0, i.jsx)(n, { size: "md", color: "currentColor" }),
                (0, i.jsx)(ep.E, { variant: "text-md/medium", color: "text-strong", className: ef.We, children: a }),
                null != l && (0, i.jsx)("div", { className: ef.UT, children: l }),
            ],
        });
    });
function eA(e) {
    let { tabLabel: t = "Nitro", selected: n = !1, decoration: a, nitroRowRef: o, wrapNitroRow: l } = e,
        r = (0, i.jsx)(e_, { ref: o, icon: eu.t, label: t, selected: n, decoration: a });
    return (0, i.jsxs)("nav", {
        className: ef.C$,
        children: [
            (0, i.jsx)(e_, { icon: ec.$, label: "Friends" }),
            null != l ? l(r) : r,
            (0, i.jsx)(e_, { icon: eb.U, label: "Shop" }),
            (0, i.jsx)(e_, { icon: em.r, label: "Quests" }),
        ],
    });
}
var eI = n(52416);
let eE = () => {},
    eT = "playground-premium-tab-popover",
    ey = {
        name: "Premium Tab Popover",
        id: "premium-tab-popover",
        component: function (e) {
            var t;
            let n,
                a,
                {
                    header: l,
                    body: r,
                    buttonCopy: p,
                    buttonAction: u,
                    navigableStorefrontApplicationId: c,
                    assetUrl: b,
                } = e,
                f = m(d.C.PREMIUM_TAB_POPOVER),
                g = f?.properties.oneofKind === "premiumTabPopover" ? f.properties.premiumTabPopover : null;
            F(
                ((n = {
                    header: (t = {
                        header: l,
                        body: r,
                        buttonCopy: p,
                        buttonAction: u,
                        navigableStorefrontApplicationId: c,
                        assetUrl: b,
                    }).header,
                    body: t.body,
                    button: {
                        ...g?.button,
                        copy: t.buttonCopy,
                        buttonAction:
                            t.buttonAction !== s.dz.UNSPECIFIED
                                ? t.buttonAction
                                : (g?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL),
                        deeplinkSection: g?.button?.deeplinkSection ?? "",
                        navigableStorefrontApplicationId: g?.button?.navigableStorefrontApplicationId ?? {
                            value: t.navigableStorefrontApplicationId,
                        },
                    },
                    asset: E(t.assetUrl, g?.asset),
                }),
                (a = A(eT, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != g ? { ...g, ...n } : { helpArticleId: "", ...n },
                })),
                I(eT, d.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", a)),
            );
            let _ = o.useRef(null);
            return (0, i.jsx)(eA, {
                selected: !0,
                nitroRowRef: _,
                wrapNitroRow: (e) => (0, i.jsx)(eI.A, { targetElementRef: _, dismissPopover: eE, children: e }),
            });
        },
        useDefaultOverrides: () => {
            let e = m(d.C.PREMIUM_TAB_POPOVER),
                t = e?.properties.oneofKind === "premiumTabPopover" ? e.properties.premiumTabPopover : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? s.dz.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      assetUrl: f(t.asset),
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
                defaultValue: s.dz.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: s.dz.UNSPECIFIED },
                    { label: "Open Marketing Page", value: s.dz.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: s.dz.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: s.dz.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: s.dz.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: s.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: s.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
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
var eN = n(796878);
let eS = "playground-premium-tab-tooltip";
n(321073);
var eC = n(896170),
    eO = n(783878),
    eh = n(636537);
async function eP() {
    return (await eh.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })).body.map((e) => {
        let { id: t, name: n, type: a, source: o } = e;
        return { id: t, name: n, type: a, source: o };
    });
}
async function eU(e) {
    let t = await eh.Bo.get({ url: `/premium-marketing/promotions/${e}/components`, rejectWithError: !0 }),
        n = new Map();
    for (let e of t.body) n.set(e.component_type, _.m.fromBinary((0, g.A)(e.properties)));
    return n;
}
let ev = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function eR(e) {
    let t = [];
    for (let n of ev) {
        let a = e.filter((e) => e.type === n.type);
        if (0 !== a.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            a))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
function eM(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let eL = {
        id: "marketing",
        name: "Marketing",
        groups: [
            eM("Premium Surfaces", [
                S,
                ea,
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            a,
                            { body: o, ctaLabel: l, helpArticleId: r } = e,
                            p = m(d.C.NAGBAR),
                            u = p?.properties.oneofKind === "nagbar" ? p.properties.nagbar : null;
                        return (
                            F(
                                ((n = {
                                    body: (t = { body: o, ctaLabel: l, helpArticleId: r }).body,
                                    ctaLabel: t.ctaLabel,
                                    helpArticle:
                                        "" !== t.helpArticleId
                                            ? {
                                                  ...u?.helpArticle,
                                                  id: t.helpArticleId,
                                                  linkText: u?.helpArticle?.linkText ?? "",
                                              }
                                            : void 0,
                                }),
                                (a = A(el, {
                                    oneofKind: "nagbar",
                                    nagbar:
                                        null != u
                                            ? { ...u, ...n }
                                            : { ctaAction: s.dz.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                I(el, d.C.NAGBAR, "playground-nagbar-promotion", a)),
                            ),
                            (0, i.jsx)("div", { className: T.MT, children: (0, i.jsx)(eo.A, {}) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.NAGBAR),
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
                    name: "Payment Modal Banner",
                    id: "payment-modal-banner",
                    component: function (e) {
                        let { body: t, assetUrl: n } = e,
                            a = m(d.C.PAYMENT_MODAL_BANNER);
                        F(
                            (function (e, t) {
                                let { body: n, assetUrl: a } = e,
                                    o = { assetUrl: a, body: n },
                                    l = A(er, {
                                        oneofKind: "paymentModalBanner",
                                        paymentModalBanner: null != t ? { ...t, ...o } : { header: "", ...o },
                                    });
                                return I(er, d.C.PAYMENT_MODAL_BANNER, "playground-payment-modal-banner-promotion", l);
                            })(
                                { body: t, assetUrl: n },
                                a?.properties.oneofKind === "paymentModalBanner"
                                    ? a.properties.paymentModalBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: o } = (0, R.Ay)(v.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: T.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, M.A)({ subscriptionTier: G.pe.TIER_2, analyticsLocations: o }),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.PAYMENT_MODAL_BANNER),
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
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
                        },
                    },
                },
                {
                    name: "Premium Tab Badge",
                    id: "premium-tab-badge",
                    component: function (e) {
                        let t = (0, i.jsx)(ei.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, i.jsx)(eA, { tabLabel: e.tabLabel, selected: e.selected, decoration: t });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.PREMIUM_TAB),
                            t = e?.properties.oneofKind === "premiumTab" ? e.properties.premiumTab : null;
                        return null == t
                            ? null
                            : { badgeCopy: t.badgeLabel, acknowledgedBadgeCopy: t.acknowledgedBadgeLabel };
                    },
                    controls: {
                        tabLabel: { label: "Tab Label", type: "text", defaultValue: "Nitro" },
                        selected: { label: "Selected", type: "boolean", defaultValue: !1 },
                        badgeCopy: { label: "Badge Copy", type: "text", defaultValue: "Offer" },
                        acknowledgedBadgeCopy: { label: "Acknowledged Copy", type: "text", defaultValue: "Offer" },
                        isDismissed: { label: "Acknowledged", type: "boolean", defaultValue: !1 },
                    },
                },
                ey,
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let n,
                            a,
                            { header: o, body: l, assetUrl: r } = e,
                            s = m(d.C.PREMIUM_TAB_TOOLTIP),
                            p = s?.properties.oneofKind === "premiumTabTooltip" ? s.properties.premiumTabTooltip : null;
                        return (
                            F(
                                ((n = {
                                    header: (t = { header: o, body: l, assetUrl: r }).header,
                                    body: t.body,
                                    asset: E(t.assetUrl, p?.asset),
                                }),
                                (a = A(eS, {
                                    oneofKind: "premiumTabTooltip",
                                    premiumTabTooltip: null != p ? { ...p, ...n } : n,
                                })),
                                I(eS, d.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", a)),
                            ),
                            (0, i.jsx)(eA, { selected: !0, wrapNitroRow: (e) => (0, i.jsx)(eN.A, { children: e }) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.PREMIUM_TAB_TOOLTIP),
                            t = e?.properties.oneofKind === "premiumTabTooltip" ? e.properties.premiumTabTooltip : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: f(t.asset) };
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
            ]),
            eM("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        let t,
                            n = m(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            a =
                                n?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? n.properties.billingSettingsNitroGiftBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: T.MT,
                            children: (0, i.jsx)(O.c, {
                                config:
                                    ((t = {
                                        header: e.header,
                                        body: e.body,
                                        additionalTerms: e.additionalTerms,
                                        textColor: e.textColor,
                                        asset: E(e.assetUrl, a?.asset),
                                        backgroundAsset: E(e.backgroundAssetUrl, a?.backgroundAsset),
                                        gradient: {
                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                            angle: e.gradientAngle,
                                        },
                                    }),
                                    null != a ? { ...a, ...t } : C.v.create(t)),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
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
                            assetUrl: f(t.asset),
                            backgroundAssetUrl: f(t.backgroundAsset),
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
                        let { analyticsLocations: t } = (0, R.Ay)(v.A.PAYMENT_FLOW_TEST_PAGE),
                            n = m(d.C.GIFT_CUSTOMIZATION_BANNER),
                            a =
                                n?.properties.oneofKind === "giftCustomizationBanner"
                                    ? n.properties.giftCustomizationBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: T.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, o, l, r, i;
                                    (r = {
                                        id: x,
                                        component_type: d.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: k,
                                        properties:
                                            ((n = {
                                                asset: E(e.assetUrl, a?.asset),
                                                backgroundAsset: E(e.backgroundAssetUrl, a?.backgroundAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (o =
                                                null != a
                                                    ? { ...a, ...n }
                                                    : {
                                                          assetUrl: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          backgroundAssetUrl: "",
                                                          assetVariant: P.u.NORMAL,
                                                          ...n,
                                                      }),
                                            (l = _.m.create({
                                                contentIdentifier: x,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: o,
                                                },
                                            })),
                                            (0, g.C)(_.m.toBinary(l))),
                                    }),
                                        (i = {
                                            id: k,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: L.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [D] } },
                                        }),
                                        U.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        U.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, M.A)({ isGift: !0, subscriptionTier: G.pe.TIER_2, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.GIFT_CUSTOMIZATION_BANNER),
                            t =
                                e?.properties.oneofKind === "giftCustomizationBanner"
                                    ? e.properties.giftCustomizationBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            assetUrl: f(t.asset),
                            backgroundAssetUrl: f(t.backgroundAsset),
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
                            a = m(d.C.GIFT_ICON),
                            o = a?.properties.oneofKind === "giftIcon" ? a.properties.giftIcon : null;
                        return (
                            F(
                                ((t = {
                                    boxAnimationUrl: e.boxAnimationUrl,
                                    trinketAnimationUrl: e.trinketAnimationUrl,
                                    trinketGlowAnimationUrl: e.trinketGlowAnimationUrl,
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                                (n = A(j, { oneofKind: "giftIcon", giftIcon: null != o ? { ...o, ...t } : t })),
                                I(j, d.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                            ),
                            (0, i.jsx)("div", { className: T.WG, children: (0, i.jsx)(B.A, { channel: z }) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.GIFT_ICON),
                            t = e?.properties.oneofKind === "giftIcon" ? e.properties.giftIcon : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            boxAnimationUrl: t.boxAnimationUrl,
                            trinketAnimationUrl: t.trinketAnimationUrl,
                            trinketGlowAnimationUrl: t.trinketGlowAnimationUrl,
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        boxAnimationUrl: { label: "Box Animation URL (Lottie)", type: "text", defaultValue: "" },
                        trinketAnimationUrl: {
                            label: "Trinket Animation URL (Lottie)",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/2587f697fb8e499a331c465aee4b37ae2b233d4a21ce130ef9a3032c1455f1c4.lottiejson",
                        },
                        trinketGlowAnimationUrl: {
                            label: "Trinket Glow Animation URL (Lottie)",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/a08eb1072a1016a58c1e5e3d92a9476900d8e8370a29c33c686c39ec9d333fb7.lottiejson",
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
                    },
                },
                {
                    name: "Gift Icon Coachmark",
                    id: "gift-icon-coachmark",
                    component: function (e) {
                        let t = m(d.C.GIFT_ICON_COACHMARK),
                            n = t?.properties.oneofKind === "giftIconCoachmark" ? t.properties.giftIconCoachmark : null,
                            a = { header: e.header, body: e.body, asset: E(e.assetUrl, n?.asset) },
                            o = null != n ? { ...n, ...a } : w.l.create(a);
                        return (0, i.jsx)("div", {
                            className: T.WG,
                            children: (0, i.jsx)(W.A, {
                                coachmarkConfig: o,
                                onComplete: Y,
                                onCheckItOutClick: Y,
                                markAsDismissed: Y,
                                children: (0, i.jsx)(H.A, { channel: $ }),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.GIFT_ICON_COACHMARK),
                            t = e?.properties.oneofKind === "giftIconCoachmark" ? e.properties.giftIconCoachmark : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: f(t.asset) };
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
                        let { analyticsLocations: t } = (0, R.Ay)(v.A.PAYMENT_FLOW_TEST_PAGE),
                            n = m(d.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            a =
                                n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? n.properties.giftPlanSelectionCardBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: T.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, o, l, r, i;
                                    (r = {
                                        id: X,
                                        component_type: d.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: q,
                                        properties:
                                            ((n = {
                                                avatarAsset: E(e.avatarUrl, a?.avatarAsset),
                                                bannerAsset: E(e.bannerUrl, a?.bannerAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (o =
                                                null != a
                                                    ? { ...a, ...n }
                                                    : {
                                                          header: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          bannerAssetUrl: "",
                                                          assetVariant: Z.Y.NORMAL,
                                                          backgroundAssetUrl: "",
                                                          cardAssetUrl: "",
                                                          ...n,
                                                      }),
                                            (l = _.m.create({
                                                contentIdentifier: X,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: o,
                                                },
                                            })),
                                            (0, g.C)(_.m.toBinary(l))),
                                    }),
                                        (i = {
                                            id: q,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: L.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [J] } },
                                        }),
                                        U.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        U.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, M.A)({ isGift: !0, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? e.properties.giftPlanSelectionCardBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            avatarUrl: f(t.avatarAsset),
                            bannerUrl: f(t.bannerAsset),
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
                            { body: a } = e,
                            o = m(d.C.GIFT_REMINDER_NAGBAR),
                            l =
                                o?.properties.oneofKind === "giftReminderNagbar"
                                    ? o.properties.giftReminderNagbar
                                    : null;
                        return (
                            F(
                                ((t = { body: { body: a }.body }),
                                (n = A(et, {
                                    oneofKind: "giftReminderNagbar",
                                    giftReminderNagbar: null != l ? { ...l, ...t } : t,
                                })),
                                I(et, d.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                            ),
                            (0, i.jsx)("div", {
                                className: T.MT,
                                children: (0, i.jsx)(Q.y, { markAsDismissed: ee, className: T.gO }),
                            })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = m(d.C.GIFT_REMINDER_NAGBAR),
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
        IconComponent: l.B,
        Provider: function (e) {
            let { children: t } = e;
            return (
                o.useEffect(
                    () => () => {
                        (0, r.Ak)(), (0, r.b8)();
                    },
                    [],
                ),
                t
            );
        },
        HeaderControl: function () {
            let e = b.useField("selected"),
                [t, n] = o.useState([]),
                a = o.useRef(null);
            o.useEffect(() => {
                let e = !0;
                return (
                    eP()
                        .then((t) => {
                            e && n(t);
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, []);
            let l = o.useMemo(() => eR(t), [t]),
                r = o.useCallback((e, n) => eR((0, eC.Ht)(t, n, { keys: ["name"] })), [t]);
            return 0 === t.length
                ? null
                : (0, i.jsx)("div", {
                      className: T.$K,
                      children: (0, i.jsx)(eO.Z, {
                          clearable: !0,
                          selectionMode: "single",
                          placeholder: "Load Promo Data",
                          value: e?.id,
                          options: l,
                          customMatchSorter: r,
                          onSelectionChange: (e) => {
                              if (((a.current = e), null == e))
                                  return void b.setState({ selected: null, componentsByType: null });
                              let n = t.find((t) => t.id === e);
                              null != n &&
                                  eU(n.id)
                                      .then((e) => {
                                          a.current === n.id && b.setState({ selected: n, componentsByType: e });
                                      })
                                      .catch(() => {});
                          },
                      }),
                  });
        },
    },
    eG = { playgroundBaseUrl: "marketing", collections: [eL] };
