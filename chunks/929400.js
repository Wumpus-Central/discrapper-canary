n.d(t, { default: () => eH });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    c = n.n(s),
    o = n(575593),
    d = n(334279),
    u = n(635358),
    m = n(417597),
    x = n(990078),
    h = n(582754),
    p = n(397927),
    f = n(736653),
    A = n(775602),
    g = n(793574),
    _ = n(688810),
    v = n(262295),
    j = n(141468),
    N = n(963852),
    R = n(763754),
    C = n(20851),
    b = n(369496),
    I = n(550111),
    T = n(44120),
    E = n(465794),
    P = n(919395),
    S = n(287070),
    O = n(331402),
    k = n(101058),
    y = n(836602),
    L = n(576622),
    B = n(773669),
    w = n(151252),
    U = n(652165),
    D = n(287809),
    M = n(954571),
    G = n(975571),
    V = n(927578),
    H = n(580630),
    F = n(979286),
    z = n(4227),
    $ = n(298072),
    q = n(993408),
    W = n(495565),
    J = n(740076),
    K = n(645178),
    Z = n(466459),
    Y = n(442759),
    X = n(623373),
    Q = n(660653),
    ee = n(778992),
    et = n(49620),
    en = n(586445),
    er = n(854818),
    ei = n(177366),
    ea = n(11606),
    el = n(203312),
    es = n(878112),
    ec = n(501664),
    eo = n(882342),
    ed = n(572595),
    eu = n(641405),
    em = n(812016),
    ex = n(184659),
    eh = n(63574),
    ep = n(364616),
    ef = n(846957),
    eA = n(293477),
    eg = n(139146),
    e_ = n(929283),
    ev = n(827066),
    ej = n(525723),
    eN = n(212407),
    eR = n(347722),
    eC = n(935094),
    eb = n(57020),
    eI = n(61750),
    eT = n(758836),
    eE = n(652215),
    eP = n(788868),
    eS = n(818348),
    eO = n(985018),
    ek = n(484978);
let ey = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            s = (0, q.aw)(n),
            { firstAvatarDecoration: c } = (0, Y.f5)(n);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? ek.X2 : ek.h1,
                  children: (0, r.jsx)(e_.i, { user: a, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? ek.ME : ek.sm,
                    ref: l,
                    children: (0, r.jsx)(O.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: ek.Dz,
                      children: (0, r.jsx)(I.A, {
                          className: ek.M4,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eL = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.g4,
            children: (0, r.jsx)(p.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        p.q7S,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: ek.Kg,
                                children: [
                                    (0, r.jsx)(ey, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.gx,
                                        children: [s?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    eB = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, q.aw)(t)
            ? (0, r.jsx)(eL, { product: t, user: n, activeSlide: i })
            : (0, eT.pQ)(t.skuId)
              ? (0, r.jsx)(ef.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(ey, { item: t.items[0], product: t, user: n })
                : null;
    },
    ew = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  className: ek.CU,
                  children: eO.intl.format(eO.t.Q1scdE, {
                      helpdeskArticle: G.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                onClose: d,
                returnRef: A,
                previewingVariantIndexProps: g,
                selectedVariantIndex: v,
                activeBundleSlide: j,
                rentalDuration: N,
            } = e,
            { analyticsLocations: R } = (0, _.Ay)(),
            C = (0, m.bG)([B.default], () => B.default.locale),
            b = V.Ay.canUseCollectibles(n),
            { previewingVariantIndex: I, handleEntering: S, handleLeaving: O } = g,
            k = (0, ev.q)(t, I),
            y = (0, X.rb)(t, v);
        c()(null != y, "Selected product should not be null");
        let L = (0, Z.h)(t),
            { isPurchased: D, isPartiallyOwnedBundle: M, isRented: G } = (0, Z.h)(y),
            { isDisabled: $, disabledReason: Q } = (0, J.I)(y.skuId),
            ee = (0, q.Zu)({ product: y, isPartiallyOwnedBundle: M, isPurchased: D }),
            en = null != N,
            er = (0, m.bG)([z.A], () => z.A.isClaiming === y?.skuId),
            ei = (0, f.Ay)(),
            em = (0, h.Mw)(ei),
            ex = (0, q.G0)(y),
            ef = (0, q.yt)(y, eE.lid.DEFAULT),
            eg = ef?.amount === 0,
            { firstAvatarDecoration: e_ } = (0, Y.f5)(k ?? y),
            eN = i.useMemo(() => (0, q.fT)(y, b), [y, b]),
            eC = (0, K.dH)(y),
            ey = (0, eR.X)(y),
            { enabled: eL } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eU = (0, W.r)(y, !1, N),
            eD = (0, ej.V_)(t),
            eM = null != eD,
            eG = (t.variants?.length ?? 0) > 8,
            {
                checkoutEligiblePrices: eV,
                isOrbExclusive: eH,
                hasSufficientOrbs: eF,
            } = (0, eb.FI)({ product: y, isPremiumUser: b, hasDiscountOffer: eM, isRental: null != N }),
            ez = i.useCallback(
                () =>
                    (0, T.A)({
                        skuId: y.skuId,
                        analyticsLocations: R,
                        variantsReturnStyle: u.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? d() : (0, eS.tE)()),
                    }),
                [R, d, y.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != e_) return (0, P.Dx)(e_), () => (0, P.Dx)(void 0);
            }, [e_]),
            (0, r.jsxs)("div", {
                className: ek.qA,
                children: [
                    (0, r.jsx)("div", { className: ek.gn, children: (0, r.jsx)(el.A, { category: a }) }),
                    (0, r.jsx)(eB, { product: k ?? y, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: ek.h_,
                                children: [
                                    (0, r.jsx)(ea.A, {
                                        product: y,
                                        isDarkText: !em,
                                        isOrbExclusive: eH,
                                        rentalDuration: N,
                                    }),
                                    (0, r.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: ek.v7,
                                        children: eC,
                                    }),
                                    (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: eU }),
                                    (0, r.jsx)(ew, { skuId: y.skuId }),
                                    L.isPurchased || L.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.c, { className: ek.On, isPartiallyPurchased: M })
                                        : ex
                                          ? (0, r.jsx)(p.Text, {
                                                variant: "text-md/semibold",
                                                className: ek.On,
                                                children: eO.intl.string(eO.t.rt69oo),
                                            })
                                          : eL
                                            ? (0, r.jsx)(eA.B, {
                                                  prices: eV,
                                                  product: y,
                                                  isPremiumUser: b,
                                                  discount: eN,
                                                  hasSufficientOrbs: eF,
                                                  isProductDisabled: $,
                                                  discountOfferAmount: eD,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: ek.pw,
                                                  children: [
                                                      (0, r.jsx)(ec.A, {
                                                          product: y,
                                                          discount: eN,
                                                          isPremiumUser: b,
                                                          hideStrikethroughPrice: !b || eM,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eD,
                                                      }),
                                                      b || eM ? null : (0, r.jsx)(eo.A, { product: y }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, X.B1)(t) &&
                                (0, r.jsx)(p.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(ek.Oj, { [ek.OJ]: eG }),
                                        children: [
                                            eG &&
                                                (0, r.jsx)(eh.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: ek.L$,
                                                }),
                                            (0, r.jsx)(ep.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: S,
                                                onVariantExit: O,
                                                wrap: !0,
                                            }),
                                            !eG &&
                                                (0, r.jsx)(eh.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: ek.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== Q &&
                                (0, r.jsx)(p.Text, { variant: "text-xs/normal", className: ek.H$, children: Q }),
                            (0, r.jsx)(p.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ex && !b && !eg) {
                                        let e;
                                        return (
                                            (e = eO.intl.string(eO.t.sEAnVH)),
                                            (0, r.jsx)(E.A, {
                                                subscriptionTier: eP.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ed.M,
                                                onSubscribeModalClose: () => {
                                                    (0, ed.t)({
                                                        product: y,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: A,
                                                        analyticsLocations: R,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!ee)
                                        return ey
                                            ? (0, r.jsx)(es.A, { primary: !0, product: y, onSuccess: d, fullWidth: !0 })
                                            : null;
                                    if (en) {
                                        if (D) return (0, r.jsx)(eu.A, { product: y, onSuccess: d });
                                    } else if (D && !G)
                                        return ey
                                            ? (0, r.jsxs)(p.ButtonGroup, {
                                                  wrap: !1,
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(eu.A, { product: y, onSuccess: d }),
                                                      (0, r.jsx)(es.A, { primary: !0, product: y, onSuccess: d }),
                                                  ],
                                              })
                                            : (0, r.jsx)(eu.A, { product: y, onSuccess: d });
                                    return ex
                                        ? (0, r.jsx)(p.Button, {
                                              loading: er,
                                              loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                                              loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, F.iJ)(y.skuId),
                                                      d(),
                                                      (0, eI.A)({
                                                          product: y,
                                                          analyticsLocations: R,
                                                          purchaseType: eT.gs.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eO.intl.string(eO.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eV.map((e, t) => {
                                                  let n,
                                                      i = 0 === t;
                                                  if (e.currency === eS.Yr.DISCORD_ORB) {
                                                      let t, n, a, s;
                                                      if (null != N) {
                                                          let e, t, n, a, s, c, o;
                                                          return (
                                                              (e = $
                                                                  ? eO.intl.string(eO.t.cTdr3x)
                                                                  : eO.intl.string(eO.t.zqh7ZM)),
                                                              (t = !eF || $),
                                                              (n = eO.intl.formatToPlainString(eO.t.DlNs2T, {
                                                                  orbPrice: eT.O0,
                                                              })),
                                                              (a = t ? `${n}, ${e}` : n),
                                                              (s = new Date()),
                                                              (o =
                                                                  null !=
                                                                  (c = null == N ? null : s.setDate(s.getDate() + N))
                                                                      ? new Date(c).toLocaleDateString(C, {
                                                                            minute: "numeric",
                                                                            hour: "numeric",
                                                                            day: "numeric",
                                                                            month: "long",
                                                                            year: "numeric",
                                                                        })
                                                                      : null),
                                                              (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(x.m, {
                                                                          position: "top",
                                                                          text: e,
                                                                          shouldShow: t,
                                                                          "aria-label": !1,
                                                                          children: (0, r.jsx)(p.Button, {
                                                                              variant: i ? "primary" : "secondary",
                                                                              onClick: () => {
                                                                                  (0, U.B4)({
                                                                                      skuId: y.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          let { entitlements: t } = e;
                                                                                          (0, F.gB)({
                                                                                              variantsReturnStyle:
                                                                                                  u.g.VARIANTS_GROUP,
                                                                                          }),
                                                                                              d();
                                                                                          let n =
                                                                                              t[0]?.ends_at != null
                                                                                                  ? new Date(
                                                                                                        t[0].ends_at,
                                                                                                    ).toLocaleDateString(
                                                                                                        C,
                                                                                                        {
                                                                                                            minute: "numeric",
                                                                                                            hour: "numeric",
                                                                                                            day: "numeric",
                                                                                                            month: "long",
                                                                                                            year: "numeric",
                                                                                                        },
                                                                                                    )
                                                                                                  : void 0;
                                                                                          (0, eI.A)({
                                                                                              product: y,
                                                                                              analyticsLocations: R,
                                                                                              itemConsumed:
                                                                                                  t[0]?.consumed,
                                                                                              purchaseType: eT.gs.ORB,
                                                                                              rentalDuration: N,
                                                                                              rentalExpiresAt: n,
                                                                                          });
                                                                                      },
                                                                                      analyticsLocations: R,
                                                                                      rentalDuration: N,
                                                                                  });
                                                                              },
                                                                              disabled: t,
                                                                              "aria-label": a,
                                                                              text: eO.intl.format(eO.t["4NKuqc"], {
                                                                                  orbPrice: eT.O0,
                                                                                  orbIconHook: () =>
                                                                                      (0, r.jsx)(p.Cp8, {
                                                                                          className: ek.fN,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              }),
                                                                              fullWidth: !0,
                                                                          }),
                                                                      }),
                                                                      null != o &&
                                                                          (0, r.jsx)(p.Text, {
                                                                              variant: "text-xs/normal",
                                                                              className: l()(ek.ed, !em && ek.un),
                                                                              children: eO.intl.format(eO.t.pLAiJ4, {
                                                                                  date: o,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }
                                                      return (
                                                          (t = $
                                                              ? eO.intl.string(eO.t.cTdr3x)
                                                              : eO.intl.string(eO.t.zqh7ZM)),
                                                          (n = !eF || $),
                                                          (a = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                                              orbPrice: e.amount,
                                                          })),
                                                          (s = n ? `${a}, ${t}` : a),
                                                          (0, r.jsx)(x.m, {
                                                              position: "top",
                                                              text: t,
                                                              shouldShow: n,
                                                              "aria-label": !1,
                                                              children: (0, r.jsx)(p.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: () => {
                                                                      (0, U.B4)({
                                                                          skuId: y.skuId,
                                                                          onCheckoutSuccess: (e) => {
                                                                              let { entitlements: t } = e;
                                                                              (0, F.gB)({
                                                                                  variantsReturnStyle:
                                                                                      u.g.VARIANTS_GROUP,
                                                                              }),
                                                                                  d(),
                                                                                  (0, eI.A)({
                                                                                      product: y,
                                                                                      analyticsLocations: R,
                                                                                      itemConsumed: t[0]?.consumed,
                                                                                      purchaseType: eT.gs.ORB,
                                                                                  });
                                                                          },
                                                                          analyticsLocations: R,
                                                                      });
                                                                  },
                                                                  disabled: n,
                                                                  "aria-label": s,
                                                                  text: eO.intl.format(eO.t.lOtBOI, {
                                                                      orbPrice: e.amount,
                                                                      orbIconHook: () =>
                                                                          (0, r.jsx)(p.Cp8, {
                                                                              className: ek.fN,
                                                                              size: "sm",
                                                                              color: "currentColor",
                                                                          }),
                                                                  }),
                                                                  fullWidth: !0,
                                                              }),
                                                          })
                                                      );
                                                  }
                                                  return (
                                                      (n = (0, q.aw)(y)
                                                          ? eO.intl.string(eO.t.V1AWw0)
                                                          : y.type === o.R.PROFILE_EFFECT
                                                            ? eO.intl.string(eO.t.kAeDcK)
                                                            : y.type === o.R.NAMEPLATE
                                                              ? eO.intl.string(eO.t.H3vhqU)
                                                              : eO.intl.string(eO.t.AQ0Veg)),
                                                      eM
                                                          ? (n = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                                                discountOfferAmount: eD,
                                                            }))
                                                          : eL &&
                                                            (n = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                                                price: (0, H.$g)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(p.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(p.Button, {
                                                                  variant: i ? "primary" : "secondary",
                                                                  onClick: ez,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              ey &&
                                                                  (0, r.jsx)(es.A, {
                                                                      primary: i,
                                                                      product: y,
                                                                      onSuccess: d,
                                                                  }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                          });
                                })(),
                            }),
                            (0, r.jsx)(p.Text, {
                                className: l()(ek.ed, !em && ek.un),
                                variant: "text-xxs/normal",
                                children: ex && !D ? eO.intl.string(eO.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eD = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.mV,
            children: (0, r.jsx)(v.A, {
                avatar: (0, r.jsx)(p.euF, {
                    src: t.avatarSrc,
                    size: p._3J.SIZE_32,
                    "aria-label": t.name,
                    status: p.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(ek.$L, n),
            }),
        });
    },
    eM = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, b.Ov)();
        return (0, r.jsx)("div", {
            className: ek.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, r.jsxs)(p.M1G, {
                children: [
                    (0, r.jsx)(eD, { user: a.mallow, innerClassName: ek.ab }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eD, { user: a.phibi, innerClassName: ek.e9 }),
                    (0, r.jsx)("div", {
                        className: ek.mV,
                        children: (0, r.jsx)(I.A, {
                            className: ek.M4,
                            innerClassName: ek.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eD, { user: a.locke, innerClassName: ek.e9 }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eD, { user: a.boom, innerClassName: ek.bD }),
                    (0, r.jsx)(eD, { user: a.cherry, innerClassName: ek.bD }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, m.bG)([A.A], () => A.A.useReducedMotion),
            c = V.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: d, ...u } = (0, m.cf)([y.A], () => y.A.getPendingChanges()),
            x = (0, k.V7)({ userId: n.id, image: d }),
            h = t.type === o.R.AVATAR_DECORATION,
            [p] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: _ } = (0, Y.f5)(t),
            v = null != g,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.A, {
                            ...u,
                            pendingAvatar: x,
                            user: n,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !v,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        h && (0, r.jsx)(eV, { user: n }),
                    ],
                }),
            N = (e) => (0, r.jsx)(eM, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === o.R.BUNDLE) {
            if (!(0, Q.Wb)(t))
                return (0, r.jsx)("div", {
                    className: ek.RA,
                    children: (0, r.jsx)("div", { className: ek.bo, children: j() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== n?.type && !s;
                return n.type === o.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(ek.Zj, a && d ? ek.p2 : ""), children: N(n) })
                    : (0, r.jsx)("div", { className: l()(ek.Ak, a && d ? ek.p2 : ""), children: j() });
            }
        }
        return null != _
            ? (0, r.jsx)("div", { className: ek.Zj, children: N(_) })
            : (0, r.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? ek.RA : ek.Ak, children: j() });
    },
    eV = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eO.intl.string(eO.t.d5YwK5) }),
                    state: eE.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, r.jsx)(p.M1G, {
                children: (0, r.jsxs)(p.ZpM, {
                    className: ek.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(C.A, { className: ek.G5, author: (0, R.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: ek.lG,
                            children: [
                                (0, r.jsx)(p.U1e, { size: "md", color: "currentColor", className: ek.hq }),
                                (0, r.jsx)(p.nm2, { size: "md", color: "currentColor", className: ek.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eH = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: s,
                returnRef: u,
                analyticsSource: x,
                analyticsLocations: h,
                shouldCheckoutWithOrbs: f,
                tab: A,
                rentalDuration: v,
            } = e,
            j = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
            N = (0, eC.f)(a),
            { previewingVariantIndex: R } = N,
            C = (0, $.Q)(a),
            b = (0, ev.q)(a, R),
            I = (0, X.rb)(a, C);
        c()(null != I, "Selected product should not be null");
        let { analyticsLocations: T } = (0, _.Ay)([
            ...h,
            g.A.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != v ? [g.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, ei.Yr)(I.skuId);
        let E = (0, eN.U1)(s);
        i.useEffect(() => {
            null != j && (0, L.A)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let P = i.useMemo(() => (0, q.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            M.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: x,
                location_stack: T,
                sku_id: I.skuId,
                product_type: P,
            }),
                (0, F.RD)(I.skuId);
        }, [x, T, I.skuId, P]);
        let S = (0, U.o6)(),
            O = t === p.ip4.EXITING,
            k = (0, ej.$R)(a),
            y = k?.amount,
            B = null != y && (k?.discountId === eP.eR || k?.discountId === eP.Qz),
            w = i.useMemo(() => ((0, q.aw)(I) ? I.items.length : 0), [I]),
            { activeSlide: G, isTransitioning: V } = (0, ee.X)({ slideCount: w, intervalMs: 5e3 });
        return null == j
            ? null
            : (0, r.jsx)(_.f5, {
                  value: T,
                  children: (0, r.jsxs)(p.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: ek.CR,
                      returnRef: u,
                      transitionState: t,
                      size: p.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(p.$mQ, {
                              "data-migration-pending": !0,
                              className: ek.jE,
                              children: [
                                  (0, r.jsx)(eU, {
                                      user: j,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: N,
                                      selectedVariantIndex: C,
                                      shouldCheckoutWithOrbs: f,
                                      activeBundleSlide: G,
                                      rentalDuration: v,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          ek.i1,
                                          I.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? ek.bF
                                              : I.type === o.R.AVATAR_DECORATION
                                                ? ek.Jq
                                                : ek.eF,
                                      ),
                                      style: { backgroundImage: `url(${E})` },
                                      children: [
                                          (0, eT.pQ)(a.skuId)
                                              ? a.skuId === eT.Dp.ORB_PROFILE_BADGE
                                                  ? S || O
                                                      ? null
                                                      : (0, r.jsx)(ex.z, { user: j })
                                                  : a.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.I, {})
                                                    : (0, r.jsx)(ef.B, { product: a, className: ek.Ms })
                                              : (0, r.jsx)(eG, {
                                                    user: j,
                                                    product: b ?? I,
                                                    activeBundleSlide: G,
                                                    isTransitioning: V,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: ek.VG,
                                              children: [
                                                  (0, r.jsx)(eg.R, {
                                                      product: a,
                                                      selectedVariantIndex: C,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(en.V, { skuId: I.skuId, tab: A }),
                                                  (0, r.jsx)(p.K0, {
                                                      "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: p.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          B &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(p.jlY, {
                                      "data-migration-pending": !0,
                                      className: ek.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: ek.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: ek.do,
                                              children: [
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: ek.Q2,
                                                      children: eO.intl.format(eO.t["78ph4b"], {
                                                          discountOfferAmount: y,
                                                      }),
                                                  }),
                                                  k?.expiresAt != null && (0, r.jsx)(er.e, { endDate: k.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
