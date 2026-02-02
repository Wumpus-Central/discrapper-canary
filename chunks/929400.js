n.d(t, {
    default: () => ez,
}),
    n(896048),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(575593),
    u = n(334279),
    d = n(635358),
    m = n(417597),
    p = n(990078),
    f = n(582754),
    x = n(397927),
    v = n(736653),
    h = n(775602),
    g = n(793574),
    b = n(688810),
    j = n(262295),
    A = n(141468),
    _ = n(963852),
    O = n(763754),
    y = n(20851),
    N = n(369496),
    P = n(550111),
    R = n(44120),
    I = n(465794),
    C = n(919395),
    T = n(287070),
    E = n(331402),
    S = n(101058),
    k = n(836602),
    w = n(576622),
    L = n(773669),
    B = n(151252),
    D = n(652165),
    U = n(287809),
    M = n(954571),
    G = n(975571),
    V = n(927578),
    H = n(580630),
    F = n(979286),
    z = n(4227),
    q = n(298072),
    W = n(993408),
    K = n(495565),
    J = n(740076),
    Z = n(645178),
    Y = n(466459),
    X = n(442759),
    $ = n(623373),
    Q = n(660653),
    ee = n(778992),
    et = n(49620),
    en = n(586445),
    er = n(854818),
    el = n(177366),
    ei = n(11606),
    ea = n(203312),
    es = n(878112),
    eo = n(501664),
    ec = n(882342),
    eu = n(572595),
    ed = n(641405),
    em = n(812016),
    ep = n(184659),
    ef = n(63574),
    ex = n(364616),
    ev = n(846957),
    eh = n(293477),
    eg = n(139146),
    eb = n(929283),
    ej = n(827066),
    eA = n(525723),
    e_ = n(212407),
    eO = n(347722),
    ey = n(935094),
    eN = n(57020),
    eP = n(61750),
    eR = n(758836),
    eI = n(652215),
    eC = n(788868),
    eT = n(818348),
    eE = n(985018),
    eS = n(484978);

function ek(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function ew(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = (e) => {
        let { item: t, product: n, user: i } = e,
            a = l.useRef(null),
            s = (0, W.aw)(n),
            { firstAvatarDecoration: o } = (0, X.f5)(n);
        return t.type === c.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? eS.X2 : eS.h1,
                  children: (0, r.jsx)(eb.i, {
                      user: i,
                      item: t,
                      isHighlighted: !0,
                  }),
              })
            : t.type === c.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? eS.ME : eS.sm,
                    ref: a,
                    children: (0, r.jsx)(E.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === c.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: a,
                      className: eS.Dz,
                      children: (0, r.jsx)(P.A, {
                          className: eS.M4,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eB = (e) => {
        let { product: t, user: n, activeSlide: l = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: eS.g4,
            children: (0, r.jsx)(x.tN_, {
                activeSlide: String(l),
                children: t.items.map((e, l) => {
                    let a = String(l),
                        s = null != t.bundledProducts ? t.bundledProducts[l] : void 0,
                        o = "(".concat(l + 1, "/").concat(i, ")");
                    return (0, r.jsx)(
                        x.q7S,
                        {
                            id: a,
                            children: (0, r.jsxs)("div", {
                                className: eS.Kg,
                                children: [
                                    (0, r.jsx)(eL, {
                                        item: e,
                                        product: t,
                                        user: n,
                                    }),
                                    (0, r.jsxs)(x.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eS.gx,
                                        children: [null == s ? void 0 : s.name, " ", o],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: l } = e;
        return (0, W.aw)(t)
            ? (0, r.jsx)(eB, {
                  product: t,
                  user: n,
                  activeSlide: l,
              })
            : (0, eR.pQ)(t.skuId)
              ? (0, r.jsx)(ev.B, {
                    animationState: "on_hover",
                    product: t,
                })
              : t.items.length > 0
                ? (0, r.jsx)(eL, {
                      item: t.items[0],
                      product: t,
                      user: n,
                  })
                : null;
    },
    eU = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(x.Text, {
                  variant: "text-sm/normal",
                  className: eS.CU,
                  children: eE.intl.format(eE.t.Q1scdE, {
                      helpdeskArticle: G.A.getArticleURL(eI.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        var t, n;
        let {
                product: i,
                user: s,
                category: u,
                shouldCheckoutWithOrbs: h,
                onClose: g,
                returnRef: j,
                previewingVariantIndexProps: A,
                selectedVariantIndex: _,
                activeBundleSlide: O,
                rentalDuration: y,
            } = e,
            { analyticsLocations: N } = (0, b.Ay)(),
            P = (0, m.bG)([L.default], () => L.default.locale),
            T = V.Ay.canUseCollectibles(s),
            { previewingVariantIndex: E, handleEntering: S, handleLeaving: k } = A,
            w = (0, ej.q)(i, E),
            U = (0, $.rb)(i, _);
        o()(null != U, "Selected product should not be null");
        let M = (0, Y.h)(i),
            { isPurchased: G, isPartiallyOwnedBundle: q, isRented: Q } = (0, Y.h)(U),
            { isDisabled: ee, disabledReason: en } = (0, J.I)(U.skuId),
            er = (0, W.Zu)({
                product: U,
                isPartiallyOwnedBundle: q,
                isPurchased: G,
            }),
            el = null != y,
            em = (0, m.bG)([z.A], () => z.A.isClaiming === (null == U ? void 0 : U.skuId)),
            ep = (0, v.Ay)(),
            ev = (0, f.Mw)(ep),
            eg = (0, W.G0)(U),
            eb = (0, W.yt)(U, eI.lid.DEFAULT),
            e_ = (null == eb ? void 0 : eb.amount) === 0,
            { firstAvatarDecoration: ey } = (0, X.f5)(null != w ? w : U),
            ek = l.useMemo(() => (0, W.fT)(U, T), [U, T]),
            ew = (0, Z.dH)(U),
            eL = (0, eO.X)(U),
            { enabled: eB } = (0, B.Z)({
                location: "collectibles_shop_product_details_modal",
            }),
            eM = (0, K.r)(U, !1, y),
            eG = (0, eA.V_)(i),
            eV = null != eG,
            eH = (null != (t = null == (n = i.variants) ? void 0 : n.length) ? t : 0) > 8,
            {
                checkoutEligiblePrices: eF,
                isOrbExclusive: ez,
                hasSufficientOrbs: eq,
            } = (0, eN.FI)({
                product: U,
                isPremiumUser: T,
                hasDiscountOffer: eV,
                isRental: null != y,
            }),
            eW = l.useCallback(
                () =>
                    (0, R.A)({
                        skuId: U.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: d.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? g() : (0, eT.tE)()),
                    }),
                [N, g, U.skuId],
            );
        return (
            l.useEffect(() => {
                if (null != ey) return (0, C.Dx)(ey), () => (0, C.Dx)(void 0);
            }, [ey]),
            (0, r.jsxs)("div", {
                className: eS.qA,
                children: [
                    (0, r.jsx)("div", {
                        className: eS.gn,
                        children: (0, r.jsx)(ea.A, {
                            category: u,
                        }),
                    }),
                    (0, r.jsx)(eD, {
                        product: null != w ? w : U,
                        user: s,
                        activeSlide: O,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, r.jsx)(ei.A, {
                                        product: U,
                                        isDarkText: !ev,
                                        isOrbExclusive: ez,
                                        rentalDuration: y,
                                    }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eS.v7,
                                        children: ew,
                                    }),
                                    (0, r.jsx)(x.Text, {
                                        variant: "text-sm/normal",
                                        children: eM,
                                    }),
                                    (0, r.jsx)(eU, {
                                        skuId: U.skuId,
                                    }),
                                    M.isPurchased || M.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.c, {
                                              className: eS.On,
                                              isPartiallyPurchased: q,
                                          })
                                        : eg
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eE.intl.string(eE.t.rt69oo),
                                            })
                                          : eB
                                            ? (0, r.jsx)(eh.B, {
                                                  prices: eF,
                                                  product: U,
                                                  isPremiumUser: T,
                                                  discount: ek,
                                                  hasSufficientOrbs: eq,
                                                  isProductDisabled: ee,
                                                  discountOfferAmount: eG,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, r.jsx)(eo.A, {
                                                          product: U,
                                                          discount: ek,
                                                          isPremiumUser: T,
                                                          hideStrikethroughPrice: !T || eV,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eG,
                                                      }),
                                                      T || eV
                                                          ? null
                                                          : (0, r.jsx)(ec.A, {
                                                                product: U,
                                                            }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, $.B1)(i) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: a()(eS.Oj, {
                                            [eS.OJ]: eH,
                                        }),
                                        children: [
                                            eH &&
                                                (0, r.jsx)(ef.A, {
                                                    skuId: i.skuId,
                                                    overrideVariantIndex: E,
                                                    className: eS.L$,
                                                }),
                                            (0, r.jsx)(ex.A, {
                                                skuId: i.skuId,
                                                onVariantEnter: S,
                                                onVariantExit: k,
                                                wrap: !0,
                                            }),
                                            !eH &&
                                                (0, r.jsx)(ef.A, {
                                                    skuId: i.skuId,
                                                    overrideVariantIndex: E,
                                                    className: eS.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== en &&
                                (0, r.jsx)(x.Text, {
                                    variant: "text-xs/normal",
                                    className: eS.H$,
                                    children: en,
                                }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eg && !T && !e_) {
                                        let e;
                                        return (
                                            (e = eE.intl.string(eE.t.sEAnVH)),
                                            (0, r.jsx)(I.A, {
                                                subscriptionTier: eC.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: {
                                                    textOverride: e,
                                                },
                                                onClick: eu.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eu.t)({
                                                        product: U,
                                                        category: u,
                                                        shouldCheckoutWithOrbs: h,
                                                        returnRef: j,
                                                        analyticsLocations: N,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!er)
                                        return eL
                                            ? (0, r.jsx)(es.A, {
                                                  primary: !0,
                                                  product: U,
                                                  onSuccess: g,
                                                  fullWidth: !0,
                                              })
                                            : null;
                                    if (el) {
                                        if (G)
                                            return (0, r.jsx)(ed.A, {
                                                product: U,
                                                onSuccess: g,
                                            });
                                    } else if (G && !Q)
                                        return eL
                                            ? (0, r.jsxs)(x.ButtonGroup, {
                                                  wrap: !1,
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(ed.A, {
                                                          product: U,
                                                          onSuccess: g,
                                                      }),
                                                      (0, r.jsx)(es.A, {
                                                          primary: !0,
                                                          product: U,
                                                          onSuccess: g,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(ed.A, {
                                                  product: U,
                                                  onSuccess: g,
                                              });
                                    return eg
                                        ? (0, r.jsx)(x.Button, {
                                              loading: em,
                                              loadingStartedLabel: eE.intl.string(eE.t["TYw+9s"]),
                                              loadingFinishedLabel: eE.intl.string(eE.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, F.iJ)(U.skuId),
                                                      g(),
                                                      (0, eP.A)({
                                                          product: U,
                                                          analyticsLocations: N,
                                                          purchaseType: eR.gs.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eE.intl.string(eE.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eF.map((e, t) => {
                                                  let n,
                                                      l = 0 === t;
                                                  if (e.currency === eT.Yr.DISCORD_ORB) {
                                                      let t, n, i, s;
                                                      if (null != y) {
                                                          let e, t, n, i, s, o, c;
                                                          return (
                                                              (e = ee
                                                                  ? eE.intl.string(eE.t.cTdr3x)
                                                                  : eE.intl.string(eE.t.zqh7ZM)),
                                                              (t = !eq || ee),
                                                              (n = eE.intl.formatToPlainString(eE.t.DlNs2T, {
                                                                  orbPrice: eR.O0,
                                                              })),
                                                              (i = t ? "".concat(n, ", ").concat(e) : n),
                                                              (s = new Date()),
                                                              (c =
                                                                  null !=
                                                                  (o = null == y ? null : s.setDate(s.getDate() + y))
                                                                      ? new Date(o).toLocaleDateString(P, {
                                                                            minute: "numeric",
                                                                            hour: "numeric",
                                                                            day: "numeric",
                                                                            month: "long",
                                                                            year: "numeric",
                                                                        })
                                                                      : null),
                                                              (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)(p.m, {
                                                                          position: "top",
                                                                          text: e,
                                                                          shouldShow: t,
                                                                          "aria-label": !1,
                                                                          children: (0, r.jsx)(x.Button, {
                                                                              variant: l ? "primary" : "secondary",
                                                                              onClick: () => {
                                                                                  (0, D.B4)({
                                                                                      skuId: U.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          var t, n;
                                                                                          let { entitlements: r } = e;
                                                                                          (0, F.gB)({
                                                                                              variantsReturnStyle:
                                                                                                  d.g.VARIANTS_GROUP,
                                                                                          }),
                                                                                              g();
                                                                                          let l =
                                                                                              (null == (t = r[0])
                                                                                                  ? void 0
                                                                                                  : t.ends_at) != null
                                                                                                  ? new Date(
                                                                                                        r[0].ends_at,
                                                                                                    ).toLocaleDateString(
                                                                                                        P,
                                                                                                        {
                                                                                                            minute: "numeric",
                                                                                                            hour: "numeric",
                                                                                                            day: "numeric",
                                                                                                            month: "long",
                                                                                                            year: "numeric",
                                                                                                        },
                                                                                                    )
                                                                                                  : void 0;
                                                                                          (0, eP.A)({
                                                                                              product: U,
                                                                                              analyticsLocations: N,
                                                                                              itemConsumed:
                                                                                                  null == (n = r[0])
                                                                                                      ? void 0
                                                                                                      : n.consumed,
                                                                                              purchaseType: eR.gs.ORB,
                                                                                              rentalDuration: y,
                                                                                              rentalExpiresAt: l,
                                                                                          });
                                                                                      },
                                                                                      analyticsLocations: N,
                                                                                      rentalDuration: y,
                                                                                  });
                                                                              },
                                                                              disabled: t,
                                                                              "aria-label": i,
                                                                              text: eE.intl.format(eE.t["4NKuqc"], {
                                                                                  orbPrice: eR.O0,
                                                                                  orbIconHook: () =>
                                                                                      (0, r.jsx)(x.Cp8, {
                                                                                          className: eS.fN,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              }),
                                                                              fullWidth: !0,
                                                                          }),
                                                                      }),
                                                                      null != c &&
                                                                          (0, r.jsx)(x.Text, {
                                                                              variant: "text-xs/normal",
                                                                              className: a()(eS.ed, !ev && eS.un),
                                                                              children: eE.intl.format(eE.t.pLAiJ4, {
                                                                                  date: c,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }
                                                      return (
                                                          (t = ee
                                                              ? eE.intl.string(eE.t.cTdr3x)
                                                              : eE.intl.string(eE.t.zqh7ZM)),
                                                          (n = !eq || ee),
                                                          (i = eE.intl.formatToPlainString(eE.t.yi41qQ, {
                                                              orbPrice: e.amount,
                                                          })),
                                                          (s = n ? "".concat(i, ", ").concat(t) : i),
                                                          (0, r.jsx)(p.m, {
                                                              position: "top",
                                                              text: t,
                                                              shouldShow: n,
                                                              "aria-label": !1,
                                                              children: (0, r.jsx)(x.Button, {
                                                                  variant: l ? "primary" : "secondary",
                                                                  onClick: () => {
                                                                      (0, D.B4)({
                                                                          skuId: U.skuId,
                                                                          onCheckoutSuccess: (e) => {
                                                                              var t;
                                                                              let { entitlements: n } = e;
                                                                              (0, F.gB)({
                                                                                  variantsReturnStyle:
                                                                                      d.g.VARIANTS_GROUP,
                                                                              }),
                                                                                  g(),
                                                                                  (0, eP.A)({
                                                                                      product: U,
                                                                                      analyticsLocations: N,
                                                                                      itemConsumed:
                                                                                          null == (t = n[0])
                                                                                              ? void 0
                                                                                              : t.consumed,
                                                                                      purchaseType: eR.gs.ORB,
                                                                                  });
                                                                          },
                                                                          analyticsLocations: N,
                                                                      });
                                                                  },
                                                                  disabled: n,
                                                                  "aria-label": s,
                                                                  text: eE.intl.format(eE.t.lOtBOI, {
                                                                      orbPrice: e.amount,
                                                                      orbIconHook: () =>
                                                                          (0, r.jsx)(x.Cp8, {
                                                                              className: eS.fN,
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
                                                      (n = (0, W.aw)(U)
                                                          ? eE.intl.string(eE.t.V1AWw0)
                                                          : U.type === c.R.PROFILE_EFFECT
                                                            ? eE.intl.string(eE.t.kAeDcK)
                                                            : U.type === c.R.NAMEPLATE
                                                              ? eE.intl.string(eE.t.H3vhqU)
                                                              : eE.intl.string(eE.t.AQ0Veg)),
                                                      eV
                                                          ? (n = eE.intl.formatToPlainString(eE.t["5U5RB5"], {
                                                                discountOfferAmount: eG,
                                                            }))
                                                          : eB &&
                                                            (n = eE.intl.formatToPlainString(eE.t["cNSL/j"], {
                                                                price: (0, H.$g)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(x.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(x.Button, {
                                                                  variant: l ? "primary" : "secondary",
                                                                  onClick: eW,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              eL &&
                                                                  (0, r.jsx)(es.A, {
                                                                      primary: l,
                                                                      product: U,
                                                                      onSuccess: g,
                                                                  }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                          });
                                })(),
                            }),
                            (0, r.jsx)(x.Text, {
                                className: a()(eS.ed, !ev && eS.un),
                                variant: "text-xxs/normal",
                                children: eg && !G ? eE.intl.string(eE.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eG = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eS.mV,
            children: (0, r.jsx)(j.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eS.$L, n),
            }),
        });
    },
    eV = (e) => {
        let { user: t, nameplate: n, avatarDecoration: l } = e,
            i = (0, N.Ov)();
        return (0, r.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eE.intl.string(eE.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eG, {
                        user: i.mallow,
                        innerClassName: eS.ab,
                    }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eE.intl.string(eE.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, {
                        user: i.phibi,
                        innerClassName: eS.e9,
                    }),
                    (0, r.jsx)("div", {
                        className: eS.mV,
                        children: (0, r.jsx)(P.A, {
                            className: eS.M4,
                            innerClassName: eS.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: l,
                        }),
                    }),
                    (0, r.jsx)(eG, {
                        user: i.locke,
                        innerClassName: eS.e9,
                    }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eE.intl.string(eE.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eG, {
                        user: i.boom,
                        innerClassName: eS.bD,
                    }),
                    (0, r.jsx)(eG, {
                        user: i.cherry,
                        innerClassName: eS.bD,
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { product: t, user: n, activeBundleSlide: l, isTransitioning: i } = e,
            s = (0, m.bG)([h.A], () => h.A.useReducedMotion),
            o = V.Ay.canUsePremiumProfileCustomization(n),
            u = (0, m.cf)([k.A], () => k.A.getPendingChanges()),
            { pendingAvatar: d } = u,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l,
                    i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i;
                }
                if (
                    ((i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++)
                            (n = i[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                        (r = n[l]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            })(u, ["pendingAvatar"]),
            f = (0, S.V7)({
                userId: n.id,
                image: d,
            }),
            x = t.type === c.R.AVATAR_DECORATION,
            [v] = t.items,
            { firstAvatarDecoration: g, firstProfileEffect: b, firstNameplate: j } = (0, X.f5)(t),
            A = null != b,
            _ = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            T.A,
                            ew(ek({}, p), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: o,
                                pendingAvatarDecoration: g,
                                pendingProfileEffect: b,
                                disabledInputs: !0,
                                hideMessageInput: !A,
                                hideCustomStatus: !0,
                                hideBioSection: x,
                                hideExampleButton: !0,
                                interactive: !1,
                            }),
                        ),
                        x &&
                            (0, r.jsx)(eF, {
                                user: n,
                            }),
                    ],
                }),
            O = (e) =>
                (0, r.jsx)(eV, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: g,
                });
        if (t.type === c.R.BUNDLE) {
            if (!(0, Q.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eS.RA,
                    children: (0, r.jsx)("div", {
                        className: eS.bo,
                        children: _(),
                    }),
                });
            {
                let e = null != l ? l : 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    u = (null == o ? void 0 : o.type) !== (null == n ? void 0 : n.type) && !s;
                return n.type === c.R.NAMEPLATE
                    ? (0, r.jsx)("div", {
                          className: a()(eS.Zj, i && u ? eS.p2 : ""),
                          children: O(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eS.Ak, i && u ? eS.p2 : ""),
                          children: _(),
                      });
            }
        }
        return null != j
            ? (0, r.jsx)("div", {
                  className: eS.Zj,
                  children: O(j),
              })
            : (0, r.jsx)("div", {
                  className: (null == v ? void 0 : v.type) === c.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
                  children: _(),
              });
    },
    eF = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, A.rh)(
                    ew(
                        ek(
                            {},
                            (0, _.Ay)({
                                author: t,
                                channelId: "1337",
                                content: eE.intl.string(eE.t.d5YwK5),
                            }),
                        ),
                        {
                            state: eI.cmJ.SENT,
                            id: "0",
                        },
                    ),
                );
            })({
                author: t,
            });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eE.intl.string(eE.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(
                            y.A,
                            {
                                className: eS.G5,
                                author: (0, O.p_)(n),
                                message: n,
                            },
                            n.id,
                        ),
                        (0, r.jsxs)("div", {
                            className: eS.lG,
                            children: [
                                (0, r.jsx)(x.U1e, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eS.hq,
                                }),
                                (0, r.jsx)(x.nm2, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eS.hq,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ez = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: s,
                returnRef: d,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: v,
                tab: h,
                rentalDuration: j,
            } = e,
            A = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
            _ = (0, ey.f)(i),
            { previewingVariantIndex: O } = _,
            y = (0, q.Q)(i),
            N = (0, ej.q)(i, O),
            P = (0, $.rb)(i, y);
        o()(null != P, "Selected product should not be null");
        let { analyticsLocations: R } = (0, b.Ay)([
            ...f,
            g.A.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != j ? [g.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, el.Yr)(P.skuId);
        let I = (0, e_.U1)(s);
        l.useEffect(() => {
            null != A && (0, w.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let C = l.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        l.useEffect(() => {
            M.default.track(eI.HAw.OPEN_MODAL, {
                type: eI.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: R,
                sku_id: P.skuId,
                product_type: C,
            }),
                (0, F.RD)(P.skuId);
        }, [p, R, P.skuId, C]);
        let T = (0, D.o6)(),
            E = t === x.ip4.EXITING,
            S = (0, eA.$R)(i),
            k = null == S ? void 0 : S.amount,
            L =
                null != k &&
                ((null == S ? void 0 : S.discountId) === eC.eR || (null == S ? void 0 : S.discountId) === eC.Qz),
            B = l.useMemo(() => ((0, W.aw)(P) ? P.items.length : 0), [P]),
            { activeSlide: G, isTransitioning: V } = (0, ee.X)({
                slideCount: B,
                intervalMs: 5e3,
            });
        return null == A
            ? null
            : (0, r.jsx)(b.f5, {
                  value: R,
                  children: (0, r.jsxs)(x.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eS.CR,
                      returnRef: d,
                      transitionState: t,
                      size: x.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(x.$mQ, {
                              "data-migration-pending": !0,
                              className: eS.jE,
                              children: [
                                  (0, r.jsx)(eM, {
                                      user: A,
                                      product: i,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: _,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: v,
                                      activeBundleSlide: G,
                                      rentalDuration: j,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          eS.i1,
                                          P.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eS.bF
                                              : P.type === c.R.AVATAR_DECORATION
                                                ? eS.Jq
                                                : eS.eF,
                                      ),
                                      style: {
                                          backgroundImage: "url(".concat(I, ")"),
                                      },
                                      children: [
                                          (0, eR.pQ)(i.skuId)
                                              ? i.skuId === eR.Dp.ORB_PROFILE_BADGE
                                                  ? T || E
                                                      ? null
                                                      : (0, r.jsx)(ep.z, {
                                                            user: A,
                                                        })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.I, {})
                                                    : (0, r.jsx)(ev.B, {
                                                          product: i,
                                                          className: eS.Ms,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: A,
                                                    product: null != N ? N : P,
                                                    activeBundleSlide: G,
                                                    isTransitioning: V,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eS.VG,
                                              children: [
                                                  (0, r.jsx)(eg.R, {
                                                      product: i,
                                                      selectedVariantIndex: y,
                                                      className: eS.ij,
                                                      iconSize: 16,
                                                      enableHoverEffect: !0,
                                                  }),
                                                  (0, r.jsx)(en.V, {
                                                      skuId: P.skuId,
                                                      tab: h,
                                                  }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": eE.intl.string(eE.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: x.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          L &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(x.jlY, {
                                      "data-migration-pending": !0,
                                      className: eS.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eS.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eS.do,
                                              children: [
                                                  (0, r.jsx)(x.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eS.Q2,
                                                      children: eE.intl.format(eE.t["78ph4b"], {
                                                          discountOfferAmount: k,
                                                      }),
                                                  }),
                                                  (null == S ? void 0 : S.expiresAt) != null &&
                                                      (0, r.jsx)(er.e, {
                                                          endDate: S.expiresAt,
                                                      }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
