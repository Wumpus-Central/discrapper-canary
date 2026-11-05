t.d(l, { yf: () => ej, s6: () => eC, Ay: () => eE });
var n,
    r = t(477900),
    a = t(582128),
    i = t(310784),
    o = t.n(i),
    s = t(503698),
    c = t.n(s),
    u = t(536637),
    d = t.n(u),
    m = t(855986),
    p = t(831259),
    _ = t(834730),
    x = t(318254),
    b = t(939249),
    f = t(638495),
    h = t(366010),
    g = t(821609),
    C = t(658675),
    v = t(805251),
    j = t(890856),
    y = t(638916),
    E = t(43990),
    N = t(825484),
    I = t(866665),
    A = t(442433),
    k = t(775602),
    T = t(793574),
    P = t(688810),
    R = t(429913),
    S = t(713517),
    M = t(427209),
    D = t(977445),
    O = t(288106),
    L = t(993046),
    H = t(413599),
    w = t(253932),
    B = t(67480),
    F = t(129230),
    G = t(969724),
    U = t(871123),
    W = t(733391),
    z = t(439303),
    K = t(353281),
    Y = t(832163),
    $ = t(69236),
    V = t(654107),
    J = t(2157),
    Q = t(898523),
    q = t(345938),
    Z = t(510022),
    X = t(306984),
    ee = t(381999),
    el = t(263911),
    et = t(971146),
    en = t(366523),
    er = t(300182),
    ea = t(434078);
function ei() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ea.Vl, ea.Yf), style: { animationDelay: `${e}s` } });
}
function eo() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ea.RC, style: { width: `${e}%` } });
}
var es = t(533772),
    ec = t(821707),
    eu = t(743693),
    ed = t(249434),
    em = t(652215),
    ep = t(731738),
    e_ = t(913379),
    ex = t(995393),
    eb = t(792996);
let ef = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eh = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eg = o()("#000000").alpha(0).hex();
var eC =
    (((n = {})[(n.SMALL = 0)] = "SMALL"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.EMBEDDED = 2)] = "EMBEDDED"),
    (n[(n.FULL_WIDTH = 3)] = "FULL_WIDTH"),
    n);
let ev = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ej() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ea.Nr, ea.ax, ea.Yf),
        children: (0, r.jsxs)("div", { className: ea.zH, children: [(0, r.jsx)(eo, {}), (0, r.jsx)(eo, {})] }),
    });
}
function ey(e) {
    let {
            guildId: l,
            sku: t,
            isCardHovered: n,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
            tabIndex: d,
        } = e,
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != t &&
                        (i(ex.bB.FORWARD_BUTTON),
                        (0, q.d)({
                            sku: t,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [t, l, i, u, s],
        ),
        p = a.useCallback(() => {
            i(ex.bB.WISHLIST_BUTTON);
        }, [i]),
        _ = a.useMemo(() => c()(ea.o, { [ea.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ea.zu,
        children: [
            2 === o &&
                (0, r.jsx)(b.D, {
                    className: c()(_, ea.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(eu._, {
                sku: t,
                isCardHovered: n,
                trackButtonClick: p,
                className: c()(_, ea.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function eE(e) {
    let {
            positionInSection: l,
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            unavailableLabel: b,
            analyticsLocations: M,
            disableMultiSelect: q = !1,
            listItemProps: eu,
        } = e,
        eC = (0, f.k)(),
        ej = eu?.tabIndex,
        eE = a.useRef(null),
        eN = a.useRef(null),
        eI = (0, m.bG)([B.A], () => B.A.get(n)),
        eA = 3 === i,
        ek = (0, D.uS)(eI?.applicationId),
        eT = null != eI && !eI.available && !ek,
        eP = eT ? (b ?? eb.intl.string(eb.t.RWouSQ)) : null,
        { guildId: eR } = (0, U.nG)(eI?.applicationId),
        eS = eI?.applicationId,
        eM = (0, m.bG)([H.A], () => (0, h.M)(H.A.theme)),
        eD = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eO = w.Q_.useSetting(),
        { isHoveringOrFocusing: eL } = (0, S.A)(eE),
        eH = (0, z.jM)(),
        { analyticsLocations: ew } = (0, P.Ay)(M ?? []),
        eB = a.useRef({ positionInSection: l, analyticsLocations: ew }),
        [eF, eG] = a.useState(!1),
        eU = (0, m.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        {
            shouldShowCard: eW,
            cardImage: ez,
            cardBackgroundImage: eK,
        } = (function (e, l, t) {
            let n = (0, m.bG)([B.A], () => B.A.get(e)),
                [r, i] = a.useState(!1),
                [o, s] = a.useState(!1),
                c = a.useMemo(() => (0, U.xf)(n, { size: t ? 2048 : 1024 }), [n, t]),
                u = a.useMemo(() => (0, U.fq)(n, { size: t ? 2048 : 512 }), [n, t]);
            return (
                a.useEffect(() => {
                    if (n?.id == null || r || !l) return;
                    if (null == u) return void i(!0);
                    let e = new Image();
                    return (
                        (e.src = u.toString()),
                        (e.onload = () => {
                            i(!0);
                        }),
                        (e.onerror = () => {
                            i(!0);
                        }),
                        () => {
                            ((e.onerror = null), (e.onload = null), (e.src = ""));
                        }
                    );
                }, [u, l, r, n?.id]),
                a.useEffect(() => {
                    if (n?.id == null || o || !l) return;
                    if (null == c) return void s(!0);
                    let e = !0;
                    return (
                        (0, V.l0)(c.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [o, c, l, n?.id]),
                { shouldShowCard: a.useMemo(() => r && o, [r, o]), cardImage: u, cardBackgroundImage: c }
            );
        })(n, eF, eA),
        eY = (0, L.JL)({ sku: eI }),
        e$ = eY?.amount,
        { display: eV, reward: eJ, offers: eQ } = (0, J.b)({ surface: "card", applicationId: eS, skuId: n }),
        eq = a.useMemo(() => eQ.find((e) => e.type === O.B8.ORB_REDEMPTION) ?? null, [eQ]),
        eZ = (0, $.oG)({ orbPriceAmount: e$, spendOrbsOffer: eq }),
        eX = (0, R.h)(eI?.applicationId),
        {
            isSelectionActive: e0,
            selected: e3,
            setSelected: e1,
            disabled: e9,
        } = (0, ee.SS)(n, eI?.applicationId, { disabled: q }),
        {
            priceComponent: e2,
            extendedHeight: e8,
            displayPrice: e7,
            shownPriceDetails: e5,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, L.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: p } = (0, L.j9)(c),
                b = a.useMemo(
                    () =>
                        null == o || o.type !== O.Ns.ACTION || o.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: ea.pt,
                                  children: (0, r.jsx)(_.E, {
                                      variant: "body-sm/semibold",
                                      color: "currentColor",
                                      children: eb.intl.format(eb.t.GiVd2Q, {
                                          orbCount: o.amount,
                                          orbIconHook: () =>
                                              (0, r.jsx)(
                                                  x.OrbsIcon,
                                                  { size: "xs", color: "currentColor" },
                                                  "orbs-icon",
                                              ),
                                      }),
                                  }),
                              }),
                    [o],
                );
            return a.useMemo(() => {
                let e = {
                    currency: c.userPrice?.currency ?? c.normalPrice?.currency ?? null,
                    price: c.userPrice?.amount ?? null,
                    regularPrice: c.normalPrice?.amount ?? null,
                };
                return null != l && (0, G.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(ec.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: p,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : s && null != n && n > 0
                          ? {
                                priceComponent: (0, r.jsx)(es.O, {
                                    variant: "body-md/semibold",
                                    orbPrice: n,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: p,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: n },
                            }
                          : "HIDDEN" !== t && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(es.A, {
                                      orbsGate: t,
                                      className: ea.p6,
                                      orbPrice: n,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: p,
                                  shownPriceDetails: { ...e, orbsAmount: n },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: ea.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(_.E, {
                                                            className: ea.of,
                                                            variant: "body-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, r.jsx)(_.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, r.jsxs)(_.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", m, ")"],
                                                    }),
                                                ],
                                            }),
                                            b,
                                        ],
                                    }),
                                    extendedHeight: null != b,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(_.E, {
                                                variant: "body-md/semibold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: u,
                                            }),
                                            b,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          displayPrice: p,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [l, i, d, u, m, s, n, t, b, c, p]);
        })({ sku: eI, orbsGate: eZ, orbPriceAmount: e$, promotion: eV, reward: eJ, showOrbsOnly: u }),
        e6 = 2 !== i && eW ? e5 : ev,
        e4 = a.useCallback((e) => {
            eG(e);
        }, []),
        le = a.useMemo(
            () => c()(ea.Nr, { [ea.ax]: 0 === i, [ea.GW]: 1 === i, [ea.jz]: 2 === i, [ea.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: ll, handleCardUnhover: lt } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            return (
                a.useEffect(() => {
                    u.current = r;
                }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: r,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: s,
                                    pageSectionTitle: m,
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: _,
                                } = u.current,
                                { positionInSection: x, analyticsLocations: b, shownPriceDetails: f } = d.current;
                            (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: l,
                                guild_id: n ?? r,
                                application_id: t ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
                                page_section_title: m,
                                position_in_section: x,
                                is_user_guild_member: p,
                                page_has_leaderboard: _,
                                price: f.price,
                                regular_price: f.regularPrice,
                                currency: f.currency,
                                orbs_amount: f.orbsAmount,
                                location_stack: b,
                            }),
                                (c.current = !0));
                        }
                    }, [l, t, n]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: n,
            applicationId: eS,
            guildId: eR,
            analyticsContext: eH,
            positionInSection: l,
            analyticsLocations: ew,
            shownPriceDetails: e6,
        }),
        { handleCardVisibilityChange: ln } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(null),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            (a.useEffect(() => {
                u.current = r;
            }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]));
            let m = a.useCallback(() => {
                    let {
                            placement: e,
                            sessionId: r,
                            guildId: a,
                            applicationId: i,
                            pageIndex: o,
                            pageTitle: s,
                            pageSection: c,
                            pageSectionTitle: m,
                            isUserGuildMember: p,
                            pageHasLeaderboard: _,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: b, shownPriceDetails: f } = d.current;
                    (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        sku_storefront_promotion_id: (0, Q.Z)(l),
                        guild_id: n ?? a,
                        application_id: t ?? i,
                        page_index: o,
                        page_title: s,
                        page_section: c,
                        page_section_title: m,
                        position_in_section: x,
                        is_user_guild_member: p,
                        page_has_leaderboard: _,
                        price: f.price,
                        regular_price: f.regularPrice,
                        currency: f.currency,
                        orbs_amount: f.orbsAmount,
                        location_stack: b,
                    }),
                        e_.A.increment({
                            name: ep.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [l, t, n]),
                p = a.useCallback(
                    (e) => {
                        e
                            ? null === c.current &&
                              (c.current = window.setTimeout(() => {
                                  (m(), (c.current = null));
                              }, 1e3))
                            : null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [m],
                );
            return (
                a.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: p }
            );
        })({
            skuId: n,
            applicationId: eS,
            guildId: eR,
            analyticsContext: eH,
            positionInSection: l,
            analyticsLocations: ew,
            shownPriceDetails: e6,
        });
    a.useEffect(() => {
        ln(eF);
    }, [eF]);
    let lr = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eB.current,
                    {
                        sessionId: r,
                        guildId: a,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eH;
                F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
                    sku_storefront_promotion_id: (0, Q.Z)(n),
                    guild_id: eR ?? a,
                    application_id: eS ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e6.price,
                    regular_price: e6.regularPrice,
                    currency: e6.currency,
                    orbs_amount: e6.orbsAmount,
                    location_stack: l,
                });
            },
            [n, eS, eR, eH, e6],
        ),
        { primaryIconAsset: la, primaryIconLabel: li } = a.useMemo(() => (0, U.Cv)(eI, eS), [eI, eS]),
        { viewProductDetails: lo } = (0, K.H)(),
        ls = a.useMemo(() => {
            let e = eI?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? eb.intl.formatToPlainString(eb.t.PWw4Vp, { days: t }) : null;
        }, [eI?.tenantMetadata?.socialLayer?.expiresAt]),
        lc = a.useMemo(() => {
            if (!eW) return "none";
            if (3 === i) return;
            let [e, l] = ef[i];
            return `linear-gradient(to top, ${eh} ${30 + e}%, ${eg} ${30 + l}%)`;
        }, [i, eW]),
        lu = a.useCallback(() => {
            null != eS && (0, W.iR)(eS, n);
        }, [eS, n]),
        ld = a.useCallback(() => {
            (ll(),
                null != eS &&
                    (eN.current = setTimeout(() => {
                        (0, W.iR)(eS, n);
                    }, 1e3)));
        }, [eS, n, ll]),
        lm = a.useCallback(() => {
            (lt(), null != eN.current && (clearTimeout(eN.current), (eN.current = null)));
        }, [lt]);
    a.useEffect(
        () => () => {
            null != eN.current && clearTimeout(eN.current);
        },
        [],
    );
    let lp = a.useCallback(() => {
            null != eS && lo?.(n, eS, eI?.slug);
        }, [eS, n, eI?.slug, lo]),
        l_ = a.useCallback(
            (e) => {
                null != o && eI?.applicationId != null ? o(e, { skuId: n, applicationId: eI.applicationId }) : lp();
            },
            [o, eI?.applicationId, n, lp],
        ),
        lx = a.useCallback(
            (e) => {
                if (e0) {
                    e9 || e1(!e3);
                    return;
                }
                (lr(ex.bB.CARD), l_(e));
            },
            [e0, lr, l_, e1, e3, e9],
        ),
        lb = a.useCallback(
            (e) => {
                eO &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e(638221), t.e(897249)]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eO, n],
        ),
        lf = a.useMemo(() => [...ew, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ew]),
        lh = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eX &&
                        null != eI &&
                        (lr(ex.bB.BUY_WITH_ORBS_BUTTON),
                        (0, X.n)(eI, {
                            guildId: eR,
                            contextKey: eC,
                            onComplete: () => {
                                (0, Z.n)({ sku: eI, application: eX, analyticsLocations: lf, contextKey: eC });
                            },
                            analyticsLocations: lf,
                        })));
            },
            [eI, eX, eR, lr, lf, eC],
        ),
        lg = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eI &&
                        (lr(ex.bB.BUY_BUTTON),
                        (0, X.a)(eI, { isGift: !1 }, { analyticsLocations: lf, guildId: eR, contextKey: eC })));
            },
            [eI, eR, lr, lf, eC],
        ),
        lC = a.useCallback(
            (e) => {
                (e.stopPropagation(), lr(ex.bB.VIEW_DETAILS_BUTTON), l_(e));
            },
            [lr, l_],
        ),
        lv = eI?.exclusive === !0 && 2 !== i,
        lj = a.useMemo(
            () =>
                null != eP
                    ? (0, r.jsx)(g.$, { variant: "primary", onClick: lC, text: eP, fullWidth: !0, tabIndex: ej })
                    : "CAN_CHECKOUT" === eZ
                      ? (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: lu,
                            onClick: lh,
                            "aria-label": eb.intl.formatToPlainString(eb.t.yi41qQ, { orbPrice: e$ }),
                            text: eb.intl.format(eb.t.JC15qj, {
                                orbPrice: e$,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        x.OrbsIcon,
                                        { className: ea.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: ej,
                        })
                      : (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: lu,
                            onClick: lg,
                            text: null != e7 ? eb.intl.format(eb.t.Xp5WTn, { price: e7 }) : eb.intl.string(eb.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: ej,
                        }),
            [eP, lC, eZ, lh, lg, lu, e$, e7, ej],
        );
    if (null == eI) return null;
    let ly = e2;
    eW ? null != eP && (ly = (0, r.jsx)(ed.l, { label: eP })) : (ly = (0, r.jsx)(eo, {}));
    let lE = null;
    e0
        ? (lE = (0, r.jsx)("div", { className: ea.HI, children: (0, r.jsx)(C.P, { checked: e3, disabled: e9 }) }))
        : null == eP && eI.exclusive
          ? (lE = (0, r.jsx)("div", { className: ea.fC, children: (0, r.jsx)(el.I, {}) }))
          : null == eP &&
            null != ls &&
            (lE = (0, r.jsx)("div", {
                className: ea.qS,
                children: (0, r.jsx)(v.E, { type: { text: ls }, variant: "inverted" }),
            }));
    let lN = lv ? (0, r.jsx)("div", { className: ea.mN, "aria-hidden": !0 }) : null,
        lI = (0, r.jsx)(p.L, {
            innerRef: eE,
            onChange: e4,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: lx,
                onContextMenu: lb,
                onMouseEnter: ld,
                onMouseLeave: lm,
                className: c()(le, { [ea.Zl]: !eD && 2 !== i, [ea.BN]: eM, [eM ? ea.Mn : ea.YF]: eL, [ea.Rc]: !eW }, s),
                ref: eE,
                buttonProps: { ...eu, role: "button" },
                onFocus: () => eu?.onFocus?.(),
                "aria-label": null != eP ? `${eI.name}, ${eP}` : eI.name,
                children: [
                    lE,
                    (0, r.jsx)(ey, {
                        sku: eI,
                        guildId: eR,
                        isCardHovered: eL,
                        variant: i,
                        trackCardClick: lr,
                        analyticsLocations: ew,
                        analyticsContext: eH,
                        tabIndex: ej,
                    }),
                    null != ez
                        ? eW
                            ? (0, r.jsx)(en.A, {
                                  containerClassName: ea.Vl,
                                  foregroundImageClassName: ea.wP,
                                  cardImage: ez,
                                  altText: eI.name,
                                  shape: "custom",
                                  backgroundImageClassName: ea.GC,
                                  cardBackgroundImage: eK,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(ei, {})
                        : (0, r.jsx)("div", {
                              className: ea.t7,
                              children: (0, r.jsx)(y.TicketIcon, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ea.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: ea.iZ, style: { background: lc } }),
                                  (0, r.jsx)(E.N, {
                                      theme: em.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ea.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ea.gn, {
                                                          [ea.ov]: null == eP && !(0, G.mC)(eI),
                                                          [ea.w4]: null == eP && e8,
                                                      }),
                                                      children: [
                                                          eW &&
                                                              (0, r.jsx)("div", {
                                                                  className: ea.S1,
                                                                  children: (0, r.jsx)(et.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eW
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != la &&
                                                                            (0, r.jsx)("img", {
                                                                                src: la.toString(),
                                                                                alt: li,
                                                                                className: ea.ye,
                                                                            }),
                                                                        (0, r.jsx)(_.E, {
                                                                            className: 3 === i ? ea.TJ : void 0,
                                                                            color: "text-overlay-light",
                                                                            variant: "body-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eI.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(eo, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", { className: ea.iQ, children: ly }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ea.li,
                                      children: (0, r.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eT || eU
                                                  ? lj
                                                  : (0, r.jsx)(I.m, {
                                                        text: eb.intl.string(eb.t.IqlPbQ),
                                                        children: (0, r.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: lC,
                                                            text: eb.intl.string(eb.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: ej,
                                                        }),
                                                    }),
                                              !eT &&
                                                  (0, r.jsx)(er.A, {
                                                      tabIndex: ej,
                                                      tooltipAriaHidden: 3 === i,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              lr(ex.bB.GIFT_BUTTON),
                                                              (0, X.a)(
                                                                  eI,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ew,
                                                                          T.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                      contextKey: eC,
                                                                  },
                                                              ));
                                                      },
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        });
    return lv ? (0, r.jsxs)("div", { className: ea.ur, children: [lN, lI] }) : lI;
}
