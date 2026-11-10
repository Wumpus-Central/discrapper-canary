t.d(l, { yf: () => ey, s6: () => ev, Ay: () => eN });
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
    P = t(793574),
    R = t(688810),
    T = t(429913),
    S = t(713517),
    M = t(427209),
    D = t(977445),
    O = t(288106),
    L = t(993046),
    H = t(413599),
    w = t(253932),
    B = t(67480),
    F = t(129230),
    G = t(205177),
    U = t(969724),
    W = t(871123),
    $ = t(733391),
    z = t(439303),
    K = t(353281),
    Y = t(832163),
    V = t(69236),
    J = t(654107),
    Q = t(2157),
    q = t(898523),
    Z = t(345938),
    X = t(510022),
    ee = t(306984),
    el = t(381999),
    et = t(263911),
    en = t(971146),
    er = t(366523),
    ea = t(300182),
    ei = t(434078);
function eo() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ei.Vl, ei.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ei.RC, style: { width: `${e}%` } });
}
var ec = t(533772),
    eu = t(821707),
    ed = t(743693),
    em = t(249434),
    ep = t(652215),
    e_ = t(731738),
    ex = t(913379),
    eb = t(995393),
    ef = t(792996);
let eh = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eg = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eC = o()("#000000").alpha(0).hex();
var ev =
    (((n = {})[(n.SMALL = 0)] = "SMALL"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.EMBEDDED = 2)] = "EMBEDDED"),
    (n[(n.FULL_WIDTH = 3)] = "FULL_WIDTH"),
    n);
let ej = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ey() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ei.Nr, ei.ax, ei.Yf),
        children: (0, r.jsxs)("div", { className: ei.zH, children: [(0, r.jsx)(es, {}), (0, r.jsx)(es, {})] }),
    });
}
function eE(e) {
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
                        (i(eb.bB.FORWARD_BUTTON),
                        (0, Z.d)({
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
            i(eb.bB.WISHLIST_BUTTON);
        }, [i]),
        _ = a.useMemo(() => c()(ei.o, { [ei.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ei.zu,
        children: [
            2 === o &&
                (0, r.jsx)(b.D, {
                    className: c()(_, ei.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(ed._, {
                sku: t,
                isCardHovered: n,
                trackButtonClick: p,
                className: c()(_, ei.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function eN(e) {
    let {
            positionInSection: l,
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            unavailableLabel: b,
            analyticsLocations: M,
            disableMultiSelect: Z = !1,
            listItemProps: ed,
        } = e,
        ev = (0, f.k)(),
        ey = ed?.tabIndex,
        eN = a.useRef(null),
        eI = a.useRef(null),
        eA = (0, m.bG)([B.A], () => B.A.get(n)),
        ek = 3 === i,
        eP = (0, D.uS)(eA?.applicationId),
        eR = null != eA && !eA.available && !eP,
        eT = eR ? (b ?? ef.intl.string(ef.t.RWouSQ)) : null,
        { guildId: eS } = (0, W.nG)(eA?.applicationId),
        eM = eA?.applicationId,
        eD = (0, m.bG)([H.A], () => (0, h.M)(H.A.theme)),
        eO = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eL = w.Q_.useSetting(),
        { isHoveringOrFocusing: eH } = (0, S.A)(eN),
        ew = (0, z.jM)(),
        { analyticsLocations: eB } = (0, R.Ay)(M ?? []),
        eF = a.useRef({ positionInSection: l, analyticsLocations: eB }),
        [eG, eU] = a.useState(!1),
        eW = (0, m.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        {
            shouldShowCard: e$,
            cardImage: ez,
            cardBackgroundImage: eK,
        } = (function (e, l, t) {
            let n = (0, m.bG)([B.A], () => B.A.get(e)),
                [r, i] = a.useState(!1),
                [o, s] = a.useState(!1),
                c = a.useMemo(() => (0, W.xf)(n, { size: t ? 2048 : 1024 }), [n, t]),
                u = a.useMemo(() => (0, W.fq)(n, { size: t ? 2048 : 512 }), [n, t]);
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
                        (0, J.l0)(c.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [o, c, l, n?.id]),
                { shouldShowCard: a.useMemo(() => r && o, [r, o]), cardImage: u, cardBackgroundImage: c }
            );
        })(n, eG, ek),
        eY = (0, L.JL)({ sku: eA }),
        eV = eY?.amount,
        { display: eJ, reward: eQ, offers: eq } = (0, Q.b)({ surface: "card", applicationId: eM, skuId: n }),
        eZ = a.useMemo(() => eq.find((e) => e.type === O.B8.ORB_REDEMPTION) ?? null, [eq]),
        eX = (0, V.oG)({ orbPriceAmount: eV, spendOrbsOffer: eZ }),
        e0 = (0, T.h)(eA?.applicationId),
        {
            isSelectionActive: e1,
            selected: e3,
            setSelected: e2,
            disabled: e9,
        } = (0, el.SS)(n, eA?.applicationId, { disabled: Z }),
        {
            priceComponent: e8,
            extendedHeight: e7,
            purchaseButtonText: e5,
            shownPriceDetails: e6,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, L.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: p } = (0, L.j9)(c),
                b = (0, G.$)(c, p),
                f = a.useMemo(
                    () =>
                        null == o || o.type !== O.Ns.ACTION || o.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: ei.pt,
                                  children: (0, r.jsx)(_.E, {
                                      variant: "body-sm/semibold",
                                      color: "currentColor",
                                      children: ef.intl.format(ef.t.GiVd2Q, {
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
                return null != l && (0, U.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(eu.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              purchaseButtonText: b,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : s && null != n && n > 0
                          ? {
                                priceComponent: (0, r.jsx)(ec.O, {
                                    variant: "body-md/semibold",
                                    orbPrice: n,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                purchaseButtonText: b,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: n },
                            }
                          : "HIDDEN" !== t && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(ec.A, {
                                      orbsGate: t,
                                      className: ei.p6,
                                      orbPrice: n,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  purchaseButtonText: b,
                                  shownPriceDetails: { ...e, orbsAmount: n },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: ei.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(_.E, {
                                                            className: ei.of,
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
                                            f,
                                        ],
                                    }),
                                    extendedHeight: null != f,
                                    purchaseButtonText: b,
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
                                            f,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    purchaseButtonText: b,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          purchaseButtonText: b,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [l, i, d, u, m, s, n, t, f, c, b]);
        })({ sku: eA, orbsGate: eX, orbPriceAmount: eV, promotion: eJ, reward: eQ, showOrbsOnly: u }),
        e4 = 2 !== i && e$ ? e6 : ej,
        le = a.useCallback((e) => {
            eU(e);
        }, []),
        ll = a.useMemo(
            () => c()(ei.Nr, { [ei.ax]: 0 === i, [ei.GW]: 1 === i, [ei.jz]: 2 === i, [ei.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: lt, handleCardUnhover: ln } = (function (e) {
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
                            (F.default.track(ep.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: eM,
            guildId: eS,
            analyticsContext: ew,
            positionInSection: l,
            analyticsLocations: eB,
            shownPriceDetails: e4,
        }),
        { handleCardVisibilityChange: lr } = (function (e) {
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
                    (F.default.track(ep.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        sku_storefront_promotion_id: (0, q.Z)(l),
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
                        ex.A.increment({
                            name: e_.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
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
            applicationId: eM,
            guildId: eS,
            analyticsContext: ew,
            positionInSection: l,
            analyticsLocations: eB,
            shownPriceDetails: e4,
        });
    a.useEffect(() => {
        lr(eG);
    }, [eG]);
    let la = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eF.current,
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
                    } = ew;
                F.default.track(ep.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
                    sku_storefront_promotion_id: (0, q.Z)(n),
                    guild_id: eS ?? a,
                    application_id: eM ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e4.price,
                    regular_price: e4.regularPrice,
                    currency: e4.currency,
                    orbs_amount: e4.orbsAmount,
                    location_stack: l,
                });
            },
            [n, eM, eS, ew, e4],
        ),
        { primaryIconAsset: li, primaryIconLabel: lo } = a.useMemo(() => (0, W.Cv)(eA, eM), [eA, eM]),
        { viewProductDetails: ls } = (0, K.H)(),
        lc = a.useMemo(() => {
            let e = eA?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? ef.intl.formatToPlainString(ef.t.PWw4Vp, { days: t }) : null;
        }, [eA?.tenantMetadata?.socialLayer?.expiresAt]),
        lu = a.useMemo(() => {
            if (!e$) return "none";
            if (3 === i) return;
            let [e, l] = eh[i];
            return `linear-gradient(to top, ${eg} ${30 + e}%, ${eC} ${30 + l}%)`;
        }, [i, e$]),
        ld = a.useCallback(() => {
            null != eM && (0, $.iR)(eM, n);
        }, [eM, n]),
        lm = a.useCallback(() => {
            (lt(),
                null != eM &&
                    (eI.current = setTimeout(() => {
                        (0, $.iR)(eM, n);
                    }, 1e3)));
        }, [eM, n, lt]),
        lp = a.useCallback(() => {
            (ln(), null != eI.current && (clearTimeout(eI.current), (eI.current = null)));
        }, [ln]);
    a.useEffect(
        () => () => {
            null != eI.current && clearTimeout(eI.current);
        },
        [],
    );
    let l_ = a.useCallback(() => {
            null != eM && ls?.(n, eM, eA?.slug);
        }, [eM, n, eA?.slug, ls]),
        lx = a.useCallback(
            (e) => {
                null != o && eA?.applicationId != null ? o(e, { skuId: n, applicationId: eA.applicationId }) : l_();
            },
            [o, eA?.applicationId, n, l_],
        ),
        lb = a.useCallback(
            (e) => {
                if (e1) {
                    e9 || e2(!e3);
                    return;
                }
                (la(eb.bB.CARD), lx(e));
            },
            [e1, la, lx, e2, e3, e9],
        ),
        lf = a.useCallback(
            (e) => {
                eL &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e(638221), t.e(897249)]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eL, n],
        ),
        lh = a.useMemo(() => [...eB, P.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eB]),
        lg = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != e0 &&
                        null != eA &&
                        (la(eb.bB.BUY_WITH_ORBS_BUTTON),
                        (0, ee.n)(eA, {
                            guildId: eS,
                            contextKey: ev,
                            onComplete: () => {
                                (0, X.n)({ sku: eA, application: e0, analyticsLocations: lh, contextKey: ev });
                            },
                            analyticsLocations: lh,
                        })));
            },
            [eA, e0, eS, la, lh, ev],
        ),
        lC = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eA &&
                        (la(eb.bB.BUY_BUTTON),
                        (0, ee.a)(eA, { isGift: !1 }, { analyticsLocations: lh, guildId: eS, contextKey: ev })));
            },
            [eA, eS, la, lh, ev],
        ),
        lv = a.useCallback(
            (e) => {
                (e.stopPropagation(), la(eb.bB.VIEW_DETAILS_BUTTON), lx(e));
            },
            [la, lx],
        ),
        lj = eA?.exclusive === !0 && 2 !== i,
        ly = a.useMemo(
            () =>
                null != eT
                    ? (0, r.jsx)(g.$, {
                          variant: "primary",
                          onClick: lv,
                          text: eT,
                          minWidth: 0,
                          fullWidth: !0,
                          tabIndex: ey,
                      })
                    : "CAN_CHECKOUT" === eX
                      ? (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: ld,
                            onClick: lg,
                            "aria-label": ef.intl.formatToPlainString(ef.t.yi41qQ, { orbPrice: eV }),
                            text: ef.intl.format(ef.t.JC15qj, {
                                orbPrice: eV,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        x.OrbsIcon,
                                        { className: ei.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            minWidth: 0,
                            fullWidth: !0,
                            tabIndex: ey,
                        })
                      : (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: ld,
                            onClick: lC,
                            text: e5,
                            minWidth: 0,
                            fullWidth: !0,
                            tabIndex: ey,
                        }),
            [eT, lv, eX, lg, lC, ld, eV, e5, ey],
        );
    if (null == eA) return null;
    let lE = e8;
    e$ ? null != eT && (lE = (0, r.jsx)(em.l, { label: eT })) : (lE = (0, r.jsx)(es, {}));
    let lN = null;
    e1
        ? (lN = (0, r.jsx)("div", { className: ei.HI, children: (0, r.jsx)(C.P, { checked: e3, disabled: e9 }) }))
        : null == eT && eA.exclusive
          ? (lN = (0, r.jsx)("div", { className: ei.fC, children: (0, r.jsx)(et.I, {}) }))
          : null == eT &&
            null != lc &&
            (lN = (0, r.jsx)("div", {
                className: ei.qS,
                children: (0, r.jsx)(v.E, { type: { text: lc }, variant: "inverted" }),
            }));
    let lI = lj ? (0, r.jsx)("div", { className: ei.mN, "aria-hidden": !0 }) : null,
        lA = (0, r.jsx)(p.L, {
            innerRef: eN,
            onChange: le,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: lb,
                onContextMenu: lf,
                onMouseEnter: lm,
                onMouseLeave: lp,
                className: c()(ll, { [ei.Zl]: !eO && 2 !== i, [ei.BN]: eD, [eD ? ei.Mn : ei.YF]: eH, [ei.Rc]: !e$ }, s),
                ref: eN,
                buttonProps: { ...ed, role: "button" },
                onFocus: () => ed?.onFocus?.(),
                "aria-label": null != eT ? `${eA.name}, ${eT}` : eA.name,
                children: [
                    lN,
                    (0, r.jsx)(eE, {
                        sku: eA,
                        guildId: eS,
                        isCardHovered: eH,
                        variant: i,
                        trackCardClick: la,
                        analyticsLocations: eB,
                        analyticsContext: ew,
                        tabIndex: ey,
                    }),
                    null != ez
                        ? e$
                            ? (0, r.jsx)(er.A, {
                                  containerClassName: ei.Vl,
                                  foregroundImageClassName: ei.wP,
                                  cardImage: ez,
                                  altText: eA.name,
                                  shape: "custom",
                                  backgroundImageClassName: ei.GC,
                                  cardBackgroundImage: eK,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(eo, {})
                        : (0, r.jsx)("div", {
                              className: ei.t7,
                              children: (0, r.jsx)(y.TicketIcon, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ei.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: ei.iZ, style: { background: lu } }),
                                  (0, r.jsx)(E.N, {
                                      theme: ep.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ei.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ei.gn, {
                                                          [ei.ov]: null == eT && !(0, U.mC)(eA),
                                                          [ei.w4]: null == eT && e7,
                                                      }),
                                                      children: [
                                                          e$ &&
                                                              (0, r.jsx)("div", {
                                                                  className: ei.S1,
                                                                  children: (0, r.jsx)(en.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          e$
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != li &&
                                                                            (0, r.jsx)("img", {
                                                                                src: li.toString(),
                                                                                alt: lo,
                                                                                className: ei.ye,
                                                                            }),
                                                                        (0, r.jsx)(_.E, {
                                                                            className: 3 === i ? ei.TJ : void 0,
                                                                            color: "text-overlay-light",
                                                                            variant: "body-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eA.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(es, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", { className: ei.iQ, children: lE }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ei.li,
                                      children: (0, r.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eR || eW
                                                  ? ly
                                                  : (0, r.jsx)(I.m, {
                                                        text: ef.intl.string(ef.t.IqlPbQ),
                                                        children: (0, r.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: lv,
                                                            text: ef.intl.string(ef.t.KLBTgF),
                                                            minWidth: 0,
                                                            fullWidth: !0,
                                                            tabIndex: ey,
                                                        }),
                                                    }),
                                              !eR &&
                                                  (0, r.jsx)(ea.A, {
                                                      tabIndex: ey,
                                                      tooltipAriaHidden: 3 === i,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              la(eb.bB.GIFT_BUTTON),
                                                              (0, ee.a)(
                                                                  eA,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eB,
                                                                          P.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                      contextKey: ev,
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
    return lj ? (0, r.jsxs)("div", { className: ei.ur, children: [lI, lA] }) : lA;
}
