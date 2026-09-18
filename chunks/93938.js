r.d(t, { A: () => eI });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(172218),
    o = r(696292),
    u = r(651162),
    c = r(17928),
    d = r(812993),
    g = r(297264),
    p = r(834730),
    m = r(821609),
    _ = r(793574),
    E = r(688810),
    h = r(617986),
    S = r(318346),
    L = r(287809),
    A = r(174459),
    I = r(440938),
    C = r(993408),
    x = r(331322),
    v = r(406810),
    y = r(812095),
    f = r(604913),
    O = r(65238),
    k = r(773669),
    P = r(223311),
    T = r(652215),
    j = r(975571),
    b = r(435558),
    B = r(288106),
    R = r(375708);
let N = /\{(promotion_end_date|claim_end_date|help_center_url)\}/g,
    G = /\[([^\]\r\n]+)\]\(\{help_center_url\}\)/g;
function H(e, t) {
    return null == e ? "" : e.toLocaleDateString(t, { month: "long", day: "numeric", year: "numeric" });
}
function M(e, t) {
    let r = null;
    return (
        null != t.helpCenterId && "" !== t.helpCenterId && (r = j.A.getArticleURL(t.helpCenterId)),
        (null != r ? e : e.replace(G, "$1")).replace(N, (e, n) => {
            switch (n) {
                case "promotion_end_date":
                    return H(t.endsAt, t.locale);
                case "claim_end_date":
                    return H(t.redemptionEndsAt, t.locale);
                case "help_center_url":
                    return r ?? "";
                default:
                    return "";
            }
        })
    );
}
var D = r(727142);
let w = function (e) {
    let { text: t, icon: r } = e;
    return (0, n.jsxs)("span", {
        className: D.I,
        children: [
            null != r && (0, n.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(p.E, { variant: "text-xs/medium", color: "none", children: t }),
        ],
    });
};
var U = r(775602),
    F = r(577568);
let V = 2 * Math.PI * 57,
    K = function (e) {
        let { current: t, target: r, progressColor: l = "var(--status-positive)", children: s } = e,
            i = V * (1 - (r <= 0 ? 0.025 : (0, b.clamp)(t / r, 0.025, 1))),
            o = (0, c.bG)([U.Ay], () => U.Ay.useReducedMotion);
        return (0, n.jsxs)("div", {
            className: F.iE,
            children: [
                s,
                (0, n.jsxs)("svg", {
                    className: F.hN,
                    viewBox: "0 0 120 120",
                    children: [
                        (0, n.jsx)("circle", {
                            className: F.u4,
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: "var(--background-mod-strong)",
                        }),
                        (0, n.jsx)("circle", {
                            className: a()(F.M0, { [F.Vr]: !o }),
                            cx: 60,
                            cy: 60,
                            r: 57,
                            strokeWidth: 6,
                            stroke: l,
                            strokeDasharray: V,
                            strokeDashoffset: i,
                        }),
                    ],
                }),
            ],
        });
    };
var W = r(295986);
let X = function (e) {
    let { assetPath: t, progress: r, progressText: l, progressColor: s } = e,
        a = (0, n.jsx)("img", { src: t, alt: "", className: W.C, width: 120, height: 120 });
    return null == r
        ? a
        : (0, n.jsx)("div", {
              className: W.U,
              role: "progressbar",
              "aria-valuenow": r.current,
              "aria-valuemin": 0,
              "aria-valuemax": r.target,
              "aria-valuetext": l ?? void 0,
              children: (0, n.jsx)(K, { current: r.current, target: r.target, progressColor: s, children: a }),
          });
};
var z = r(119739);
let Y = { [f.RB.LIGHT]: "theme-light", [f.RB.DARK]: "theme-dark" };
function $(e) {
    let {
            assetPath: t,
            progress: r,
            progressColor: l,
            title: s,
            progressText: i,
            timeLeftText: o,
            contentThemeClassName: u,
        } = e,
        c = null != r ? i : s;
    return (0, n.jsxs)(x.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        className: a()(z.U0, u),
        children: [
            (0, n.jsx)(X, { assetPath: t, progress: r, progressText: i, progressColor: l }),
            (0, n.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                align: "start",
                className: z._u,
                children: [
                    null != c &&
                        (0, n.jsx)(p.E, { variant: "text-md/bold", color: "text-strong", children: (0, y.U)(c) }),
                    null != o && (0, n.jsx)(w, { icon: v.ClockIcon, text: o }),
                ],
            }),
        ],
    });
}
function q(e) {
    let {
        assetPath: t,
        progress: r,
        progressColor: l,
        backgroundUrl: s,
        title: i,
        description: o,
        progressText: u,
        timeLeftText: c,
        contentThemeClassName: d,
    } = e;
    return (0, n.jsxs)(x.B, {
        direction: "horizontal",
        gap: 16,
        padding: 24,
        align: "center",
        className: a()(z.Nr, d),
        style: { backgroundImage: `url(${s})` },
        children: [
            (0, n.jsx)(X, { assetPath: t, progress: r, progressText: u, progressColor: l }),
            (0, n.jsxs)(x.B, {
                direction: "vertical",
                gap: 8,
                align: "start",
                className: z._u,
                children: [
                    (0, n.jsx)(p.E, { variant: "text-md/bold", color: "text-strong", children: (0, y.U)(i) }),
                    null != o &&
                        (0, n.jsx)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: (0, y.U)(o) }),
                    (0, n.jsxs)(x.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "center",
                        wrap: !0,
                        children: [
                            null != u && (0, n.jsx)(w, { text: u }),
                            null != c && (0, n.jsx)(w, { icon: v.ClockIcon, text: c }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let Z = function (e) {
    let t,
        { variant: r, collectionId: l } = e,
        s = ((t = (0, P.A)(T.FYj)), null == (0, O.XF)(t) || t?.rewardStatus == null ? null : t),
        a = (0, c.bG)([k.default], () => k.default.locale),
        i = (0, O.XF)(s);
    if (null == s || null == i || null == l || i.collectionId !== l) return null;
    let { shared: o } = i,
        { assets: u, style: d } = o.progressIndicator,
        g = (function (e, t) {
            let { hiddenUrl: r, revealedUrl: n } = t;
            switch (e.rewardStatus) {
                case B.GM.IN_PROGRESS:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.endsAt };
                case B.GM.EARNED:
                    return { assetPath: r ?? n, showProgressRing: !0, timeLeftDate: e.redemptionEndsAt ?? e.endsAt };
                case B.GM.CONSUMED:
                    return { assetPath: n, showProgressRing: !1, timeLeftDate: null };
                default:
                    return null;
            }
        })(s, u.rewardPreview),
        { progress: p } = s;
    if (null == g || (g.showProgressRing && null == p)) return null;
    let {
            title: m,
            description: _,
            progressText: E,
            timeLeftText: h,
        } = (function (e) {
            var t, r, n;
            let l,
                { promotion: s, progressIndicator: a, helpCenterId: i, timeLeftDate: o, locale: u } = e,
                c =
                    ((t = s.rewardStatus),
                    (r = s.progress?.current ?? 0),
                    (l = (function (e, t, r) {
                        if (null != e)
                            switch (t) {
                                case B.GM.IN_PROGRESS: {
                                    let t = e.inProgress?.progressSteps;
                                    if (null == t || 0 === t.length) return;
                                    return t[(0, b.clamp)(r, 0, t.length - 1)];
                                }
                                case B.GM.EARNED:
                                    return e.earned;
                                case B.GM.CONSUMED:
                                    return e.consumed;
                                default:
                                    return;
                            }
                    })(a.rewardStates, t, r)),
                    { title: l?.title ?? a.title, description: l?.description ?? a.description }),
                d = { locale: u, endsAt: s.endsAt, redemptionEndsAt: s.redemptionEndsAt, helpCenterId: i },
                g = null != o ? (0, C.WU)(o) : null,
                p = s.progress,
                m = null != p ? R.intl.formatToPlainString(R.t.lyXyiY, { current: p.current, target: p.target }) : null,
                _ = null != g && g > 0 ? R.intl.formatToPlainString(R.t.w4GEvw, { days: g }) : null;
            return {
                title: M(c.title, d),
                description: ((n = c.description), null != n && "" !== n ? M(n, d) : null),
                progressText: m,
                timeLeftText: _,
            };
        })({
            promotion: s,
            progressIndicator: o.progressIndicator,
            helpCenterId: o.helpCenter?.id,
            timeLeftDate: g.timeLeftDate,
            locale: a,
        }),
        S = {
            assetPath: g.assetPath,
            progress: g.showProgressRing ? p : null,
            progressColor: d?.progressColor,
            backgroundUrl: u.backgroundUrl,
            title: m,
            description: _,
            progressText: E,
            timeLeftText: h,
            contentThemeClassName: d?.contentTheme != null ? Y[d.contentTheme] : void 0,
        };
    return "condensed" === r ? (0, n.jsx)($, { ...S }) : (0, n.jsx)(q, { ...S });
};
var J = r(212407),
    Q = r(521e3),
    ee = r(146919),
    et = r(815280),
    er = r(449543),
    en = r(197935),
    el = r(590180),
    es = r(879221),
    ea = r(511265),
    ei = r(313276),
    eo = r(206077),
    eu = r(258245),
    ec = r(561769),
    ed = r(484469),
    eg = r(105499);
function ep(e) {
    return String(e);
}
function em(e) {
    return e.skuId;
}
function e_(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, ec.Mk)(l);
    return t
        ? (0, n.jsx)("div", {
              className: eg.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(ed.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: eg.hm,
              children: (0, n.jsx)(ec.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(eh, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function eE(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, ec.Mk)(l),
        a = R.intl.string(R.t.HP8LNG);
    if ((0, es.O)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(en.A, {
                gap: "xl",
                "aria-label": a,
                items: e,
                getItemKey: ep,
                renderItem: (e) => (0, n.jsx)(ed.A, {}, e),
            });
        }
        return (0, n.jsx)(ec.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, n.jsx)(en.A, {
                gap: "xl",
                "aria-label": a,
                items: r,
                getItemKey: em,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, r) =>
                    (0, n.jsx)(eh, { item: e, index: r, prioritizedCurrency: s, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(er.A, { gap: "xl", "aria-label": a, children: e.map((e) => (0, n.jsx)(ed.A, {}, e)) });
    }
    return (0, n.jsx)(ec.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, n.jsx)(er.A, {
            gap: "xl",
            "aria-label": a,
            children: r.map((e, t) => (0, n.jsx)(eh, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
        }),
    });
}
function eh(e) {
    let { item: t, index: r, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, n.jsx)(I.R9, {
        newValue: { tilePosition: r, pageSection: "top 4", categoryPosition: 0 },
        children: (0, n.jsx)(eu.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let eS = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: o, isBlockLoading: u = !1 } = e,
        { products: c } =
            ((t = (0, ei.A)()),
            (r = (0, ea.p)()),
            (s = l.useMemo(() => (u ? [] : r(t(a.rankedSkuIds))), [u, t, a.rankedSkuIds, r])),
            { products: (0, eo.X)(s) }),
        d = l.useMemo(
            () =>
                !u &&
                0 !== a.rankedSkuIds.length &&
                !(c.length > 0) &&
                a.rankedSkuIds.every((e) => el.A.getProduct(e)?.variantGroupStoreListingId != null),
            [u, a.rankedSkuIds, c.length],
        ),
        g = u || d,
        p = l.useMemo(() => c.filter((e) => null != el.A.getCategoryForProduct(e.skuId)), [c]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(e_, { isLoading: g, products: p, tab: o });
        case "hscroll":
            return (0, n.jsx)(eE, { isLoading: g, products: p, tab: o });
    }
};
var eL = r(758836);
let eA = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    eI = (e) => {
        let {
                isLoading: t,
                handleTransition: r,
                category: s,
                heroBlock: x,
                tab: v,
                onVisibilityChange: y,
                badge: f,
                hideButton: O = !1,
                hideCards: k = !1,
            } = e,
            P = (0, i.K)(
                (e) => {
                    y?.(e);
                },
                0.1,
                null != y,
            ),
            j = l.useRef(null),
            b = (0, ee.yB)("HeroBlock"),
            B = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
            N = (0, I.uM)(),
            { analyticsLocations: G } = (0, E.Ay)(_.A.COLLECTIBLES_SHOP_HERO),
            H = l.useMemo(
                () =>
                    null != x
                        ? x
                        : null == s
                          ? eA
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: u.g.HERO,
                                categoryStoreListingId: s.storeListingId,
                                bannerDisplayConfig: s.heroBannerDisplayConfig,
                                logoDisplayConfig: s.heroLogoDisplayConfig,
                                heroLogoUrl: s.heroLogoUrl,
                                heroBannerUrl: s.heroBannerUrl,
                                heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                            },
                [x, s],
            ),
            {
                bannerDisplayConfig: M,
                logoDisplayConfig: D,
                heroLogo: w,
                heroBannerStatic: U,
                heroBannerAnimated: F,
                heroBannerRive: V,
            } = (0, J.Kk)(H),
            K = M?.responsive ?? !1,
            W = M?.backgroundStyle,
            X = null != V,
            z = v === eL.G2.ORBS,
            Y = null != s && s.isOrbsExclusive,
            $ = v === eL.G2.COLLECTION_INDEX,
            q = z ? R.intl.string(R.t["1CdL8d"]) : R.intl.string(R.t.xYKa1T);
        function er() {
            z
                ? ((0, S.Y)({
                      pageType: T.liQ.SHOP_ORBS_TAB,
                      sectionType: T.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: T.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, h.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: H.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: Y,
                  }),
                  A.default.track(T.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: N?.sessionId,
                      sku_id: H.categorySkuId,
                      page_type: v,
                      page_section: N?.pageSection,
                      page_category: N?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == B || (!t && H === eA)) return null;
        function en() {
            return t || O ? null : (0, n.jsx)(m.$, { variant: "overlay-primary", onClick: er, text: q });
        }
        return (0, n.jsx)(E.f5, {
            value: G,
            children: (0, n.jsxs)("div", {
                ref: P,
                className: eg.os,
                children: [
                    X ? (0, Q.VA)({ isCustomCursorEnabled: b, className: eg.Xt, riveEventTargetRef: j }) : null,
                    (0, n.jsx)("div", {
                        className: a()(eg.vK, { [eg.cN]: X, [eg.no]: K }),
                        style: null != W ? { background: W } : void 0,
                        children:
                            null != U &&
                            (0, n.jsx)(et.A, {
                                bannerStatic: U,
                                bannerAnimated: F,
                                bannerRive: V,
                                isResponsive: K,
                                eventTargetRef: j,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eg.xX,
                        children: [
                            X
                                ? (0, n.jsx)("div", { className: eg.fy, children: en() })
                                : (0, n.jsxs)("div", {
                                      className: a()(eg.bC, { [eg.no]: K }),
                                      children: [
                                          t
                                              ? (0, n.jsx)("div", { className: eg.Hw })
                                              : (0, n.jsxs)("div", {
                                                    className: eg.Hw,
                                                    children: [
                                                        (0, C.HF)(H.unpublishedAt) &&
                                                            (0, n.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: R.intl.string(R.t["h/uBCR"]),
                                                                className: eg.v0,
                                                            }),
                                                        (0, n.jsxs)("div", {
                                                            className: eg.Wq,
                                                            children: [
                                                                null != f &&
                                                                    (0, n.jsx)("div", {
                                                                        className: eg._I,
                                                                        children: f,
                                                                    }),
                                                                null != w &&
                                                                    (0, n.jsx)("img", {
                                                                        className: eg.rm,
                                                                        src: w,
                                                                        alt: H.name,
                                                                        style: D?.toDesktopStyles(),
                                                                    }),
                                                                null != H.title &&
                                                                    (0, n.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: eg.DD,
                                                                        color: "text-strong",
                                                                        children: H.title,
                                                                    }),
                                                                null != H.summary &&
                                                                    "" !== H.summary &&
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-md/normal",
                                                                        className: z ? eg.h4 : eg.Tm,
                                                                        style:
                                                                            null != H.bannerTextColor
                                                                                ? { color: H.bannerTextColor }
                                                                                : void 0,
                                                                        children: H.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                          !O && !t && (0, n.jsx)("div", { className: eg.IS, children: en() }),
                                      ],
                                  }),
                            (0, n.jsx)(Z, { variant: $ ? "full" : "condensed", collectionId: H.categorySkuId }),
                            !k &&
                                (0, n.jsx)(eS, {
                                    heroBlockRecord: H,
                                    tab: v,
                                    isBlockLoading: t,
                                    layout: v === eL.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
