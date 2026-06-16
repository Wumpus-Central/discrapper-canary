n.r(t), n.d(t, { marketingCollection: () => ex, playgroundConfig: () => eL });
var a,
    o = n(64700),
    r = n(175841),
    l = n(962644),
    i = n(627968),
    d = n(877624),
    s = n(232582),
    p = n(821609),
    u = n(192308),
    c = n(935208);
let m = (0, n(839214).D)(() => ({ selected: null, componentsByType: null }));
function b(e) {
    let t = m.useField("componentsByType");
    return t?.get(e) ?? null;
}
function g(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
var f = n(65412),
    _ = n(875676);
function A(e, t) {
    return _.m.create({ contentIdentifier: e, properties: t });
}
function y(e, t, n, a) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, f.C)(_.m.toBinary(a)) };
}
function T(e, t) {
    return e === g(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var I = n(553706);
let C = "playground-announcement-modal",
    N = c.default.fromTimestamp(Date.now());
var E = n(959129),
    h = n(815846),
    S =
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
    U = n(67948),
    G = n(228366),
    R = n(793574),
    x = n(688810),
    L = n(532794),
    O = n(852218),
    k = n(788868);
let v = "playground-gift-customization-banner",
    B = "playground-gift-customization-banner-promotion",
    M = S.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var P = n(336618),
    D = n(95701);
function V(e) {
    let { id: t, component_type: n, promotion_id: a, properties: r } = e;
    o.useEffect(() => {
        (0, l.Ak)(),
            G.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: n, promotion_id: a, properties: r },
            });
    }, [t, n, a, r]);
}
var F = n(652215);
let K = "playground-gift-icon",
    j = (0, D.createChannelRecord)({ id: "1", guild_id: "1", type: F.rbe.GUILD_TEXT, name: "playground" });
var w = n(720119),
    H = n(743477),
    W = n(40493);
let z = () => {},
    Y = (0, D.createChannelRecord)({ id: "1", guild_id: "1", type: F.rbe.GUILD_TEXT, name: "playground" });
var $ = n(978656);
let Z = "playground-gift-plan-selection-card-banner",
    X = "playground-gift-plan-selection-card-banner-promotion",
    q = S.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var J = n(823901);
let Q = () => {},
    ee = "playground-gift-reminder-nagbar";
var et = n(371764),
    en = n(754804);
let ea = "playground-nagbar",
    eo = "playground-payment-modal-banner";
var er = n(964661),
    el = n(503698),
    ei = n.n(el),
    ed = n(834730),
    es = n(403581),
    ep = n(214947),
    eu = n(34188),
    ec = n(577473),
    em = n(15632);
let eb = () => {},
    eg = o.forwardRef(function (e, t) {
        let { icon: n, label: a, selected: o = !1, decoration: r } = e;
        return (0, i.jsxs)("button", {
            ref: t,
            type: "button",
            className: ei()(em.pc, { [em.EV]: o }),
            onClick: eb,
            children: [
                (0, i.jsx)(n, { size: "md", color: "currentColor" }),
                (0, i.jsx)(ed.E, { variant: "text-md/medium", color: "text-strong", className: em.We, children: a }),
                null != r && (0, i.jsx)("div", { className: em.UT, children: r }),
            ],
        });
    });
function ef(e) {
    let { tabLabel: t = "Nitro", selected: n = !1, decoration: a, nitroRowRef: o, wrapNitroRow: r } = e,
        l = (0, i.jsx)(eg, { ref: o, icon: es.t, label: t, selected: n, decoration: a });
    return (0, i.jsxs)("nav", {
        className: em.C$,
        children: [
            (0, i.jsx)(eg, { icon: ep.$, label: "Friends" }),
            null != r ? r(l) : l,
            (0, i.jsx)(eg, { icon: eu.U, label: "Shop" }),
            (0, i.jsx)(eg, { icon: ec.r, label: "Quests" }),
        ],
    });
}
var e_ = n(52416);
let eA = () => {},
    ey = "playground-premium-tab-popover";
var eT = n(796878);
let eI = "playground-premium-tab-tooltip";
n(321073);
var eC = n(896170),
    eN = n(783878),
    eE = n(636537);
async function eh() {
    return (await eE.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })).body.map((e) => {
        let { id: t, name: n, type: a, source: o } = e;
        return { id: t, name: n, type: a, source: o };
    });
}
async function eS(e) {
    let t = await eE.Bo.get({ url: `/premium-marketing/promotions/${e}/components`, rejectWithError: !0 }),
        n = new Map();
    for (let e of t.body) n.set(e.component_type, _.m.fromBinary((0, f.A)(e.properties)));
    return n;
}
let eU = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function eG(e) {
    let t = [];
    for (let n of eU) {
        let a = e.filter((e) => e.type === n.type);
        if (0 !== a.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            a))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
function eR(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let ex = {
        id: "marketing",
        name: "Marketing",
        groups: [
            eR("Premium Surfaces", [
                {
                    name: "Announcement Modal",
                    id: "announcement-modal",
                    component: function (e) {
                        let t = b(d.C.ANNOUNCEMENT_MODAL),
                            a =
                                t?.properties.oneofKind === "announcementModalVariant1"
                                    ? t.properties.announcementModalVariant1
                                    : null;
                        return (0, i.jsx)("div", {
                            className: I.MT,
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
                                                        a?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                                    deeplinkSection: a?.button?.deeplinkSection ?? "",
                                                },
                                            }),
                                            A(C, {
                                                oneofKind: "announcementModalVariant1",
                                                announcementModalVariant1: null != a ? { ...a, ...t } : s.ih.create(t),
                                            }));
                                    (0, u.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("9662"),
                                                n.e("2677"),
                                                n.e("21277"),
                                                n.e("76631"),
                                                n.e("96575"),
                                                n.e("6683"),
                                                n.e("95726"),
                                                n.e("17095"),
                                                n.e("94307"),
                                                n.e("89729"),
                                                n.e("18240"),
                                                n.e("32993"),
                                                n.e("6330"),
                                                n.e("22274"),
                                                n.e("34796"),
                                                n.e("87550"),
                                                n.e("77688"),
                                                n.e("71934"),
                                                n.e("29312"),
                                                n.e("28379"),
                                                n.e("33063"),
                                                n.e("39995"),
                                                n.e("25568"),
                                                n.e("394"),
                                                n.e("68953"),
                                                n.e("32285"),
                                                n.e("78340"),
                                                n.e("91680"),
                                                n.e("57036"),
                                                n.e("57174"),
                                                n.e("98839"),
                                                n.e("88941"),
                                                n.e("61379"),
                                                n.e("43039"),
                                                n.e("25693"),
                                                n.e("32606"),
                                                n.e("28154"),
                                                n.e("48804"),
                                                n.e("21690"),
                                                n.e("4369"),
                                                n.e("32817"),
                                                n.e("55112"),
                                                n.e("13681"),
                                                n.e("53729"),
                                                n.e("10004"),
                                                n.e("55314"),
                                                n.e("89094"),
                                                n.e("29177"),
                                                n.e("32551"),
                                                n.e("63437"),
                                                n.e("23353"),
                                                n.e("50015"),
                                                n.e("38835"),
                                                n.e("11523"),
                                                n.e("44695"),
                                                n.e("44376"),
                                                n.e("31644"),
                                                n.e("45723"),
                                                n.e("70697"),
                                                n.e("18546"),
                                                n.e("53930"),
                                                n.e("31390"),
                                                n.e("68726"),
                                                n.e("90244"),
                                                n.e("18943"),
                                                n.e("17225"),
                                                n.e("70653"),
                                                n.e("96123"),
                                                n.e("31825"),
                                                n.e("36320"),
                                                n.e("20320"),
                                                n.e("84967"),
                                                n.e("47017"),
                                                n.e("90889"),
                                                n.e("99657"),
                                                n.e("26780"),
                                                n.e("44265"),
                                                n.e("99141"),
                                                n.e("84103"),
                                                n.e("21435"),
                                                n.e("62875"),
                                                n.e("30920"),
                                                n.e("99941"),
                                                n.e("25990"),
                                                n.e("11527"),
                                                n.e("63095"),
                                                n.e("52266"),
                                                n.e("68647"),
                                                n.e("92583"),
                                                n.e("39810"),
                                                n.e("63070"),
                                                n.e("64615"),
                                                n.e("96443"),
                                                n.e("75134"),
                                                n.e("57598"),
                                                n.e("55184"),
                                                n.e("23216"),
                                                n.e("87079"),
                                                n.e("25637"),
                                                n.e("14805"),
                                                n.e("73547"),
                                                n.e("43300"),
                                                n.e("99593"),
                                                n.e("84456"),
                                                n.e("47555"),
                                                n.e("61935"),
                                                n.e("62168"),
                                                n.e("69875"),
                                                n.e("58157"),
                                                n.e("22380"),
                                                n.e("15754"),
                                                n.e("90191"),
                                                n.e("96137"),
                                                n.e("20287"),
                                                n.e("18997"),
                                                n.e("3131"),
                                                n.e("47177"),
                                                n.e("27272"),
                                                n.e("36149"),
                                                n.e("51778"),
                                                n.e("24914"),
                                                n.e("66880"),
                                                n.e("20382"),
                                                n.e("63333"),
                                                n.e("73165"),
                                                n.e("34268"),
                                                n.e("54372"),
                                            ]).then(n.bind(n, 103407));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    renderModalProps: t,
                                                    componentId: C,
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
                        let e = b(d.C.ANNOUNCEMENT_MODAL),
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
                    },
                },
                {
                    name: "Marketing Page Banner",
                    id: "marketing-page-banner",
                    component: function (e) {
                        let t,
                            n,
                            a = b(d.C.MARKETING_PAGE_BANNER),
                            o =
                                a?.properties.oneofKind === "marketingPageBanner"
                                    ? a.properties.marketingPageBanner
                                    : null,
                            r =
                                ((t = e.showButton
                                    ? {
                                          ...o?.button,
                                          copy: e.buttonCopy,
                                          buttonAction: o?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                          deeplinkSection: o?.button?.deeplinkSection ?? "",
                                      }
                                    : void 0),
                                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                                null != o ? { ...o, ...n } : { helpArticleId: "", ...n });
                        return (0, i.jsx)("div", {
                            className: I.MT,
                            children: (0, i.jsx)(et.x, {
                                componentId: "playground-marketing-page-banner",
                                promotionBannerMarketingComponentFields: r,
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.MARKETING_PAGE_BANNER),
                            t =
                                e?.properties.oneofKind === "marketingPageBanner"
                                    ? e.properties.marketingPageBanner
                                    : null;
                        return null == t
                            ? null
                            : {
                                  header: t.header,
                                  body: t.body,
                                  assetUrl: t.assetUrl,
                                  showButton: null != t.button,
                                  buttonCopy: t.button?.copy ?? "",
                              };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue:
                                "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/7088cd62971948493c32b65337c62856b4d25e7313305f252193263a1f2209d6.svg",
                        },
                        showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
                        buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
                    },
                },
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            a,
                            { body: o, ctaLabel: r, helpArticleId: l } = e,
                            p = b(d.C.NAGBAR),
                            u = p?.properties.oneofKind === "nagbar" ? p.properties.nagbar : null;
                        return (
                            V(
                                ((n = {
                                    body: (t = { body: o, ctaLabel: r, helpArticleId: l }).body,
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
                                (a = A(ea, {
                                    oneofKind: "nagbar",
                                    nagbar:
                                        null != u
                                            ? { ...u, ...n }
                                            : { ctaAction: s.dz.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                y(ea, d.C.NAGBAR, "playground-nagbar-promotion", a)),
                            ),
                            (0, i.jsx)("div", { className: I.MT, children: (0, i.jsx)(en.A, {}) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.NAGBAR),
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
                            a = b(d.C.PAYMENT_MODAL_BANNER);
                        V(
                            (function (e, t) {
                                let { body: n, assetUrl: a } = e,
                                    o = { assetUrl: a, body: n },
                                    r = A(eo, {
                                        oneofKind: "paymentModalBanner",
                                        paymentModalBanner: null != t ? { ...t, ...o } : { header: "", ...o },
                                    });
                                return y(eo, d.C.PAYMENT_MODAL_BANNER, "playground-payment-modal-banner-promotion", r);
                            })(
                                { body: t, assetUrl: n },
                                a?.properties.oneofKind === "paymentModalBanner"
                                    ? a.properties.paymentModalBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: o } = (0, x.Ay)(R.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: I.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, L.A)({ subscriptionTier: k.pe.TIER_2, analyticsLocations: o }),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.PAYMENT_MODAL_BANNER),
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
                        let t = (0, i.jsx)(er.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, i.jsx)(ef, { tabLabel: e.tabLabel, selected: e.selected, decoration: t });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.PREMIUM_TAB),
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
                {
                    name: "Premium Tab Popover",
                    id: "premium-tab-popover",
                    component: function (e) {
                        var t;
                        let n,
                            a,
                            { header: r, body: l, buttonCopy: p, assetUrl: u } = e,
                            c = b(d.C.PREMIUM_TAB_POPOVER),
                            m = c?.properties.oneofKind === "premiumTabPopover" ? c.properties.premiumTabPopover : null;
                        V(
                            ((n = {
                                header: (t = { header: r, body: l, buttonCopy: p, assetUrl: u }).header,
                                body: t.body,
                                button: {
                                    ...m?.button,
                                    copy: t.buttonCopy,
                                    buttonAction: m?.button?.buttonAction ?? s.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                    deeplinkSection: m?.button?.deeplinkSection ?? "",
                                },
                                asset: T(t.assetUrl, m?.asset),
                            }),
                            (a = A(ey, {
                                oneofKind: "premiumTabPopover",
                                premiumTabPopover: null != m ? { ...m, ...n } : { helpArticleId: "", ...n },
                            })),
                            y(ey, d.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", a)),
                        );
                        let g = o.useRef(null);
                        return (0, i.jsx)(ef, {
                            selected: !0,
                            nitroRowRef: g,
                            wrapNitroRow: (e) =>
                                (0, i.jsx)(e_.A, { targetElementRef: g, dismissPopover: eA, children: e }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.PREMIUM_TAB_POPOVER),
                            t = e?.properties.oneofKind === "premiumTabPopover" ? e.properties.premiumTabPopover : null;
                        return null == t
                            ? null
                            : {
                                  header: t.header,
                                  body: t.body,
                                  buttonCopy: t.button?.copy ?? "",
                                  assetUrl: g(t.asset),
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
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/38b775edc3d9b9fbfd496639f0a1deb9b9882c989fa70fdbb86f60dc764c2f80.svg",
                        },
                    },
                },
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let n,
                            a,
                            { header: o, body: r, assetUrl: l } = e,
                            s = b(d.C.PREMIUM_TAB_TOOLTIP),
                            p = s?.properties.oneofKind === "premiumTabTooltip" ? s.properties.premiumTabTooltip : null;
                        return (
                            V(
                                ((n = {
                                    header: (t = { header: o, body: r, assetUrl: l }).header,
                                    body: t.body,
                                    asset: T(t.assetUrl, p?.asset),
                                }),
                                (a = A(eI, {
                                    oneofKind: "premiumTabTooltip",
                                    premiumTabTooltip: null != p ? { ...p, ...n } : n,
                                })),
                                y(eI, d.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", a)),
                            ),
                            (0, i.jsx)(ef, { selected: !0, wrapNitroRow: (e) => (0, i.jsx)(eT.A, { children: e }) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.PREMIUM_TAB_TOOLTIP),
                            t = e?.properties.oneofKind === "premiumTabTooltip" ? e.properties.premiumTabTooltip : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: g(t.asset) };
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
            eR("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        let t,
                            n = b(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            a =
                                n?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? n.properties.billingSettingsNitroGiftBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: I.MT,
                            children: (0, i.jsx)(h.c, {
                                config:
                                    ((t = {
                                        header: e.header,
                                        body: e.body,
                                        additionalTerms: e.additionalTerms,
                                        textColor: e.textColor,
                                        asset: T(e.assetUrl, a?.asset),
                                        backgroundAsset: T(e.backgroundAssetUrl, a?.backgroundAsset),
                                        gradient: {
                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                            angle: e.gradientAngle,
                                        },
                                    }),
                                    null != a ? { ...a, ...t } : E.v.create(t)),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
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
                            assetUrl: g(t.asset),
                            backgroundAssetUrl: g(t.backgroundAsset),
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
                        let { analyticsLocations: t } = (0, x.Ay)(R.A.PAYMENT_FLOW_TEST_PAGE),
                            n = b(d.C.GIFT_CUSTOMIZATION_BANNER),
                            a =
                                n?.properties.oneofKind === "giftCustomizationBanner"
                                    ? n.properties.giftCustomizationBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: I.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, o, r, l, i;
                                    (l = {
                                        id: v,
                                        component_type: d.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: B,
                                        properties:
                                            ((n = {
                                                asset: T(e.assetUrl, a?.asset),
                                                backgroundAsset: T(e.backgroundAssetUrl, a?.backgroundAsset),
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
                                                          assetVariant: U.u.NORMAL,
                                                          ...n,
                                                      }),
                                            (r = _.m.create({
                                                contentIdentifier: v,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: o,
                                                },
                                            })),
                                            (0, f.C)(_.m.toBinary(r))),
                                    }),
                                        (i = {
                                            id: B,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: O.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [l],
                                            metadata: { gift_promotion: { reward_sku_ids: [M] } },
                                        }),
                                        G.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        G.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, L.A)({ isGift: !0, subscriptionTier: k.pe.TIER_2, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.GIFT_CUSTOMIZATION_BANNER),
                            t =
                                e?.properties.oneofKind === "giftCustomizationBanner"
                                    ? e.properties.giftCustomizationBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            assetUrl: g(t.asset),
                            backgroundAssetUrl: g(t.backgroundAsset),
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
                            a = b(d.C.GIFT_ICON),
                            o = a?.properties.oneofKind === "giftIcon" ? a.properties.giftIcon : null;
                        return (
                            V(
                                ((t = {
                                    boxAnimationUrl: e.boxAnimationUrl,
                                    trinketAnimationUrl: e.trinketAnimationUrl,
                                    trinketGlowAnimationUrl: e.trinketGlowAnimationUrl,
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                                (n = A(K, { oneofKind: "giftIcon", giftIcon: null != o ? { ...o, ...t } : t })),
                                y(K, d.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                            ),
                            (0, i.jsx)("div", { className: I.WG, children: (0, i.jsx)(P.A, { channel: j }) })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.GIFT_ICON),
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
                        let t = b(d.C.GIFT_ICON_COACHMARK),
                            n = t?.properties.oneofKind === "giftIconCoachmark" ? t.properties.giftIconCoachmark : null,
                            a = { header: e.header, body: e.body, asset: T(e.assetUrl, n?.asset) },
                            o = null != n ? { ...n, ...a } : w.l.create(a);
                        return (0, i.jsx)("div", {
                            className: I.WG,
                            children: (0, i.jsx)(W.A, {
                                coachmarkConfig: o,
                                onComplete: z,
                                onCheckItOutClick: z,
                                markAsDismissed: z,
                                children: (0, i.jsx)(H.A, { channel: Y }),
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.GIFT_ICON_COACHMARK),
                            t = e?.properties.oneofKind === "giftIconCoachmark" ? e.properties.giftIconCoachmark : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: g(t.asset) };
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
                        let { analyticsLocations: t } = (0, x.Ay)(R.A.PAYMENT_FLOW_TEST_PAGE),
                            n = b(d.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            a =
                                n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? n.properties.giftPlanSelectionCardBanner
                                    : null;
                        return (0, i.jsx)("div", {
                            className: I.MT,
                            children: (0, i.jsx)(p.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, o, r, l, i;
                                    (l = {
                                        id: Z,
                                        component_type: d.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: X,
                                        properties:
                                            ((n = {
                                                avatarAsset: T(e.avatarUrl, a?.avatarAsset),
                                                bannerAsset: T(e.bannerUrl, a?.bannerAsset),
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
                                                          assetVariant: $.Y.NORMAL,
                                                          backgroundAssetUrl: "",
                                                          cardAssetUrl: "",
                                                          ...n,
                                                      }),
                                            (r = _.m.create({
                                                contentIdentifier: Z,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: o,
                                                },
                                            })),
                                            (0, f.C)(_.m.toBinary(r))),
                                    }),
                                        (i = {
                                            id: X,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: O.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [l],
                                            metadata: { gift_promotion: { reward_sku_ids: [q] } },
                                        }),
                                        G.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        G.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, L.A)({ isGift: !0, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? e.properties.giftPlanSelectionCardBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            avatarUrl: g(t.avatarAsset),
                            bannerUrl: g(t.bannerAsset),
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
                            o = b(d.C.GIFT_REMINDER_NAGBAR),
                            r =
                                o?.properties.oneofKind === "giftReminderNagbar"
                                    ? o.properties.giftReminderNagbar
                                    : null;
                        return (
                            V(
                                ((t = { body: { body: a }.body }),
                                (n = A(ee, {
                                    oneofKind: "giftReminderNagbar",
                                    giftReminderNagbar: null != r ? { ...r, ...t } : t,
                                })),
                                y(ee, d.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                            ),
                            (0, i.jsx)("div", {
                                className: I.MT,
                                children: (0, i.jsx)(J.y, { markAsDismissed: Q, className: I.gO }),
                            })
                        );
                    },
                    useDefaultOverrides: () => {
                        let e = b(d.C.GIFT_REMINDER_NAGBAR),
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
        IconComponent: r.B,
        Provider: function (e) {
            let { children: t } = e;
            return (
                o.useEffect(
                    () => () => {
                        (0, l.Ak)(), (0, l.b8)();
                    },
                    [],
                ),
                t
            );
        },
        HeaderControl: function () {
            let e = m.useField("selected"),
                [t, n] = o.useState([]),
                a = o.useRef(null);
            o.useEffect(() => {
                let e = !0;
                return (
                    eh()
                        .then((t) => {
                            e && n(t);
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, []);
            let r = o.useMemo(() => eG(t), [t]),
                l = o.useCallback((e, n) => eG((0, eC.Ht)(t, n, { keys: ["name"] })), [t]);
            return 0 === t.length
                ? null
                : (0, i.jsx)("div", {
                      className: I.$K,
                      children: (0, i.jsx)(eN.Z, {
                          clearable: !0,
                          selectionMode: "single",
                          placeholder: "Load Promo Data",
                          value: e?.id,
                          options: r,
                          customMatchSorter: l,
                          onSelectionChange: (e) => {
                              if (((a.current = e), null == e))
                                  return void m.setState({ selected: null, componentsByType: null });
                              let n = t.find((t) => t.id === e);
                              null != n &&
                                  eS(n.id)
                                      .then((e) => {
                                          a.current === n.id && m.setState({ selected: n, componentsByType: e });
                                      })
                                      .catch(() => {});
                          },
                      }),
                  });
        },
    },
    eL = { playgroundBaseUrl: "marketing", collections: [ex] };
