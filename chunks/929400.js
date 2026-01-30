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
    h = n(736653),
    v = n(775602),
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
    C = n(465794),
    I = n(919395),
    T = n(287070),
    E = n(331402),
    S = n(101058),
    k = n(836602),
    w = n(576622),
    L = n(773669),
    B = n(151252),
    D = n(652165),
    U = n(287809),
    G = n(954571),
    M = n(975571),
    H = n(927578),
    V = n(580630),
    F = n(979286),
    z = n(4227),
    q = n(298072),
    W = n(993408),
    K = n(495565),
    J = n(740076),
    Z = n(645178),
    Y = n(466459),
    X = n(442759),
    Q = n(623373),
    $ = n(660653),
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
    eh = n(846957),
    ev = n(293477),
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
    eC = n(652215),
    eI = n(788868),
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
              ? (0, r.jsx)(eh.B, {
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
                      helpdeskArticle: M.A.getArticleURL(eC.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eG = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: s,
                onClose: u,
                returnRef: v,
                previewingVariantIndexProps: g,
                selectedVariantIndex: j,
                activeBundleSlide: A,
                rentalDuration: _,
            } = e,
            { analyticsLocations: O } = (0, b.Ay)(),
            y = (0, m.bG)([L.default], () => L.default.locale),
            N = H.Ay.canUseCollectibles(n),
            { previewingVariantIndex: P, handleEntering: T, handleLeaving: E } = g,
            S = (0, ej.q)(t, P),
            k = (0, Q.rb)(t, j);
        o()(null != k, "Selected product should not be null");
        let w = (0, Y.h)(t),
            { isPurchased: U, isPartiallyOwnedBundle: G, isRented: M } = (0, Y.h)(k),
            { isDisabled: q, disabledReason: $ } = (0, J.I)(k.skuId),
            ee = (0, W.Zu)({
                product: k,
                isPartiallyOwnedBundle: G,
                isPurchased: U,
            }),
            en = null != _,
            er = (0, m.bG)([z.A], () => z.A.isClaiming === (null == k ? void 0 : k.skuId)),
            el = (0, h.Ay)(),
            em = (0, f.Mw)(el),
            ep = (0, W.G0)(k),
            eh = (0, W.yt)(k, eC.lid.DEFAULT),
            eg = (null == eh ? void 0 : eh.amount) === 0,
            { firstAvatarDecoration: eb } = (0, X.f5)(null != S ? S : k),
            e_ = l.useMemo(() => (0, W.fT)(k, N), [k, N]),
            ey = (0, Z.dH)(k),
            ek = (0, eO.X)(k),
            { enabled: ew } = (0, B.Z)({
                location: "collectibles_shop_product_details_modal",
            }),
            eL = (0, K.r)(k, !1, _),
            eB = (0, eA.V_)(t),
            eG = null != eB,
            {
                checkoutEligiblePrices: eM,
                isOrbExclusive: eH,
                hasSufficientOrbs: eV,
            } = (0, eN.FI)({
                product: k,
                isPremiumUser: N,
                hasDiscountOffer: eG,
                isRental: null != _,
            }),
            eF = l.useCallback(
                () =>
                    (0, R.A)({
                        skuId: k.skuId,
                        analyticsLocations: O,
                        variantsReturnStyle: d.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eT.tE)()),
                    }),
                [O, u, k.skuId],
            );
        return (
            l.useEffect(() => {
                if (null != eb) return (0, I.Dx)(eb), () => (0, I.Dx)(void 0);
            }, [eb]),
            (0, r.jsxs)("div", {
                className: eS.qA,
                children: [
                    (0, r.jsx)("div", {
                        className: eS.gn,
                        children: (0, r.jsx)(ea.A, {
                            category: i,
                        }),
                    }),
                    (0, r.jsx)(eD, {
                        product: null != S ? S : k,
                        user: n,
                        activeSlide: A,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, r.jsx)(ei.A, {
                                        product: k,
                                        isDarkText: !em,
                                        isOrbExclusive: eH,
                                        rentalDuration: _,
                                    }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eS.v7,
                                        children: ey,
                                    }),
                                    (0, r.jsx)(x.Text, {
                                        variant: "text-sm/normal",
                                        children: eL,
                                    }),
                                    (0, r.jsx)(eU, {
                                        skuId: k.skuId,
                                    }),
                                    w.isPurchased || w.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.c, {
                                              className: eS.On,
                                              isPartiallyPurchased: G,
                                          })
                                        : ep
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eE.intl.string(eE.t.rt69oo),
                                            })
                                          : ew
                                            ? (0, r.jsx)(ev.B, {
                                                  prices: eM,
                                                  product: k,
                                                  isPremiumUser: N,
                                                  discount: e_,
                                                  hasSufficientOrbs: eV,
                                                  isProductDisabled: q,
                                                  discountOfferAmount: eB,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, r.jsx)(eo.A, {
                                                          product: k,
                                                          discount: e_,
                                                          isPremiumUser: N,
                                                          hideStrikethroughPrice: !N || eG,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eB,
                                                      }),
                                                      N || eG
                                                          ? null
                                                          : (0, r.jsx)(ec.A, {
                                                                product: k,
                                                            }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Q.B1)(t) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: eS.Oj,
                                        children: [
                                            (0, r.jsx)(ex.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: T,
                                                onVariantExit: E,
                                            }),
                                            (0, r.jsx)(ef.A, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: P,
                                            }),
                                        ],
                                    }),
                                }),
                            null !== $ &&
                                (0, r.jsx)(x.Text, {
                                    variant: "text-xs/normal",
                                    className: eS.H$,
                                    children: $,
                                }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ep && !N && !eg) {
                                        let e;
                                        return (
                                            (e = eE.intl.string(eE.t.sEAnVH)),
                                            (0, r.jsx)(C.A, {
                                                subscriptionTier: eI.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: {
                                                    textOverride: e,
                                                },
                                                onClick: eu.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eu.t)({
                                                        product: k,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: v,
                                                        analyticsLocations: O,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!ee)
                                        return ek
                                            ? (0, r.jsx)(es.A, {
                                                  primary: !0,
                                                  product: k,
                                                  onSuccess: u,
                                                  fullWidth: !0,
                                              })
                                            : null;
                                    if (en) {
                                        if (U)
                                            return (0, r.jsx)(ed.A, {
                                                product: k,
                                                onSuccess: u,
                                            });
                                    } else if (U && !M)
                                        return ek
                                            ? (0, r.jsxs)(x.ButtonGroup, {
                                                  wrap: !1,
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(ed.A, {
                                                          product: k,
                                                          onSuccess: u,
                                                      }),
                                                      (0, r.jsx)(es.A, {
                                                          primary: !0,
                                                          product: k,
                                                          onSuccess: u,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(ed.A, {
                                                  product: k,
                                                  onSuccess: u,
                                              });
                                    return ep
                                        ? (0, r.jsx)(x.Button, {
                                              loading: er,
                                              loadingStartedLabel: eE.intl.string(eE.t["TYw+9s"]),
                                              loadingFinishedLabel: eE.intl.string(eE.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, F.iJ)(k.skuId),
                                                      u(),
                                                      (0, eP.A)({
                                                          product: k,
                                                          analyticsLocations: O,
                                                          purchaseType: eR.gs.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eE.intl.string(eE.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eM.map((e, t) => {
                                                  let n,
                                                      l = 0 === t;
                                                  if (e.currency === eT.Yr.DISCORD_ORB) {
                                                      let t, n, i, s;
                                                      if (null != _) {
                                                          let e, t, n, i, s, o, c;
                                                          return (
                                                              (e = q
                                                                  ? eE.intl.string(eE.t.cTdr3x)
                                                                  : eE.intl.string(eE.t.zqh7ZM)),
                                                              (t = !eV || q),
                                                              (n = eE.intl.formatToPlainString(eE.t.DlNs2T, {
                                                                  orbPrice: eR.O0,
                                                              })),
                                                              (i = t ? "".concat(n, ", ").concat(e) : n),
                                                              (s = new Date()),
                                                              (c =
                                                                  null !=
                                                                  (o = null == _ ? null : s.setDate(s.getDate() + _))
                                                                      ? new Date(o).toLocaleDateString(y, {
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
                                                                                      skuId: k.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          var t, n;
                                                                                          let { entitlements: r } = e;
                                                                                          (0, F.gB)({
                                                                                              variantsReturnStyle:
                                                                                                  d.g.VARIANTS_GROUP,
                                                                                          }),
                                                                                              u();
                                                                                          let l =
                                                                                              (null == (t = r[0])
                                                                                                  ? void 0
                                                                                                  : t.ends_at) != null
                                                                                                  ? new Date(
                                                                                                        r[0].ends_at,
                                                                                                    ).toLocaleDateString(
                                                                                                        y,
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
                                                                                              product: k,
                                                                                              analyticsLocations: O,
                                                                                              itemConsumed:
                                                                                                  null == (n = r[0])
                                                                                                      ? void 0
                                                                                                      : n.consumed,
                                                                                              purchaseType: eR.gs.ORB,
                                                                                              rentalDuration: _,
                                                                                              rentalExpiresAt: l,
                                                                                          });
                                                                                      },
                                                                                      analyticsLocations: O,
                                                                                      rentalDuration: _,
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
                                                                              className: a()(eS.ed, !em && eS.un),
                                                                              children: eE.intl.format(eE.t.pLAiJ4, {
                                                                                  date: c,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }
                                                      return (
                                                          (t = q
                                                              ? eE.intl.string(eE.t.cTdr3x)
                                                              : eE.intl.string(eE.t.zqh7ZM)),
                                                          (n = !eV || q),
                                                          (i = eE.intl.formatToPlainString(eE.t["fNG/05"], {
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
                                                                          skuId: k.skuId,
                                                                          onCheckoutSuccess: (e) => {
                                                                              var t;
                                                                              let { entitlements: n } = e;
                                                                              (0, F.gB)({
                                                                                  variantsReturnStyle:
                                                                                      d.g.VARIANTS_GROUP,
                                                                              }),
                                                                                  u(),
                                                                                  (0, eP.A)({
                                                                                      product: k,
                                                                                      analyticsLocations: O,
                                                                                      itemConsumed:
                                                                                          null == (t = n[0])
                                                                                              ? void 0
                                                                                              : t.consumed,
                                                                                      purchaseType: eR.gs.ORB,
                                                                                  });
                                                                          },
                                                                          analyticsLocations: O,
                                                                      });
                                                                  },
                                                                  disabled: n,
                                                                  "aria-label": s,
                                                                  text: eE.intl.format(eE.t.kAgx5L, {
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
                                                      (n = (0, W.aw)(k)
                                                          ? eE.intl.string(eE.t.V1AWw0)
                                                          : k.type === c.R.PROFILE_EFFECT
                                                            ? eE.intl.string(eE.t.kAeDcK)
                                                            : k.type === c.R.NAMEPLATE
                                                              ? eE.intl.string(eE.t.H3vhqU)
                                                              : eE.intl.string(eE.t.AQ0Veg)),
                                                      eG
                                                          ? (n = eE.intl.formatToPlainString(eE.t["5U5RB5"], {
                                                                discountOfferAmount: eB,
                                                            }))
                                                          : ew &&
                                                            (n = eE.intl.formatToPlainString(eE.t["cNSL/j"], {
                                                                price: (0, V.$g)(e.amount, e.currency),
                                                            })),
                                                      (0, r.jsxs)(x.ButtonGroup, {
                                                          wrap: !1,
                                                          fullWidth: !0,
                                                          children: [
                                                              (0, r.jsx)(x.Button, {
                                                                  variant: l ? "primary" : "secondary",
                                                                  onClick: eF,
                                                                  text: n,
                                                                  fullWidth: !0,
                                                              }),
                                                              ek &&
                                                                  (0, r.jsx)(es.A, {
                                                                      primary: l,
                                                                      product: k,
                                                                      onSuccess: u,
                                                                  }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                          });
                                })(),
                            }),
                            (0, r.jsx)(x.Text, {
                                className: a()(eS.ed, !em && eS.un),
                                variant: "text-xxs/normal",
                                children: ep && !U ? eE.intl.string(eE.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
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
    eH = (e) => {
        let { user: t, nameplate: n, avatarDecoration: l } = e,
            i = (0, N.Ov)();
        return (0, r.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eE.intl.string(eE.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eM, {
                        user: i.mallow,
                        innerClassName: eS.ab,
                    }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eE.intl.string(eE.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, {
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
                    (0, r.jsx)(eM, {
                        user: i.locke,
                        innerClassName: eS.e9,
                    }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eE.intl.string(eE.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, {
                        user: i.boom,
                        innerClassName: eS.bD,
                    }),
                    (0, r.jsx)(eM, {
                        user: i.cherry,
                        innerClassName: eS.bD,
                    }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: l, isTransitioning: i } = e,
            s = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            o = H.Ay.canUsePremiumProfileCustomization(n),
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
            [h] = t.items,
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
                (0, r.jsx)(eH, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: g,
                });
        if (t.type === c.R.BUNDLE) {
            if (!(0, $.W)(t))
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
                  className: (null == h ? void 0 : h.type) === c.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
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
                            state: eC.cmJ.SENT,
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
                shouldCheckoutWithOrbs: h,
                tab: v,
                rentalDuration: j,
            } = e,
            A = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
            _ = (0, ey.f)(i),
            { previewingVariantIndex: O } = _,
            y = (0, q.Q)(i),
            N = (0, ej.q)(i, O),
            P = (0, Q.rb)(i, y);
        o()(null != P, "Selected product should not be null");
        let { analyticsLocations: R } = (0, b.Ay)([
            ...f,
            g.A.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != j ? [g.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, el.Yr)(P.skuId);
        let C = (0, e_.U1)(s);
        l.useEffect(() => {
            null != A && (0, w.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let I = l.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        l.useEffect(() => {
            G.default.track(eC.HAw.OPEN_MODAL, {
                type: eC.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: R,
                sku_id: P.skuId,
                product_type: I,
            }),
                (0, F.RD)(P.skuId);
        }, [p, R, P.skuId, I]);
        let T = (0, D.o6)(),
            E = t === x.ip4.EXITING,
            S = (0, eA.$R)(i),
            k = null == S ? void 0 : S.amount,
            L =
                null != k &&
                ((null == S ? void 0 : S.discountId) === eI.eR || (null == S ? void 0 : S.discountId) === eI.Qz),
            B = l.useMemo(() => ((0, W.aw)(P) ? P.items.length : 0), [P]),
            { activeSlide: M, isTransitioning: H } = (0, ee.X)({
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
                                  (0, r.jsx)(eG, {
                                      user: A,
                                      product: i,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: _,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: h,
                                      activeBundleSlide: M,
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
                                          backgroundImage: "url(".concat(C, ")"),
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
                                                    : (0, r.jsx)(eh.B, {
                                                          product: i,
                                                          className: eS.Ms,
                                                      })
                                              : (0, r.jsx)(eV, {
                                                    user: A,
                                                    product: null != N ? N : P,
                                                    activeBundleSlide: M,
                                                    isTransitioning: H,
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
                                                      tab: v,
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
