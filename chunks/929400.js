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
    g = n(775602),
    h = n(793574),
    b = n(688810),
    j = n(262295),
    _ = n(141468),
    O = n(963852),
    A = n(763754),
    y = n(20851),
    P = n(369496),
    N = n(550111),
    R = n(44120),
    I = n(465794),
    C = n(919395),
    E = n(287070),
    T = n(331402),
    S = n(101058),
    w = n(576622),
    k = n(773669),
    L = n(151252),
    B = n(652165),
    D = n(752319),
    U = n(287809),
    M = n(954571),
    G = n(975571),
    V = n(927578),
    H = n(580630),
    F = n(979286),
    z = n(4227),
    q = n(298072),
    K = n(993408),
    W = n(495565),
    Z = n(740076),
    J = n(645178),
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
    ev = n(846957),
    eg = n(293477),
    eh = n(139146),
    eb = n(929283),
    ej = n(827066),
    e_ = n(525723),
    eO = n(212407),
    eA = n(347722),
    ey = n(935094),
    eP = n(57020),
    eN = n(61750),
    eR = n(758836),
    eI = n(652215),
    eC = n(788868),
    eE = n(818348),
    eT = n(985018),
    eS = n(484978);

function ew(e) {
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

function ek(e, t) {
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
            s = (0, K.aw)(n),
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
                    children: (0, r.jsx)(T.A, {
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
                      children: (0, r.jsx)(N.A, {
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
        return (0, K.aw)(t)
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
                  children: eT.intl.format(eT.t.Q1scdE, {
                      helpdeskArticle: G.A.getArticleURL(eI.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: s,
                onClose: u,
                returnRef: g,
                previewingVariantIndexProps: h,
                selectedVariantIndex: j,
                activeBundleSlide: _,
                rentalDuration: O,
            } = e,
            { analyticsLocations: A } = (0, b.Ay)(),
            y = (0, m.bG)([k.default], () => k.default.locale),
            P = V.Ay.canUseCollectibles(n),
            { previewingVariantIndex: N, handleEntering: E, handleLeaving: T } = h,
            S = (0, ej.q)(t, N),
            w = (0, Q.rb)(t, j);
        o()(null != w, "Selected product should not be null");
        let D = (0, Y.h)(t),
            { isPurchased: U, isPartiallyOwnedBundle: M, isRented: G } = (0, Y.h)(w),
            { isDisabled: q, disabledReason: $ } = (0, Z.I)(w.skuId),
            ee = (0, K.Zu)({
                product: w,
                isPartiallyOwnedBundle: M,
                isPurchased: U,
            }),
            en = null != O,
            er = (0, m.bG)([z.A], () => z.A.isClaiming === (null == w ? void 0 : w.skuId)),
            el = (0, v.Ay)(),
            em = (0, f.Mw)(el),
            ep = (0, K.G0)(w),
            ev = (0, K.yt)(w, eI.lid.DEFAULT),
            eh = (null == ev ? void 0 : ev.amount) === 0,
            { firstAvatarDecoration: eb } = (0, X.f5)(null != S ? S : w),
            eO = l.useMemo(() => (0, K.fT)(w, P), [w, P]),
            ey = (0, J.dH)(w),
            ew = (0, eA.X)(w),
            { enabled: ek } = (0, L.Z)({
                location: "collectibles_shop_product_details_modal",
            }),
            eL = (0, W.r)(w, !1, O),
            eB = (0, e_.V_)(t),
            eM = null != eB,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eV,
                hasSufficientOrbs: eH,
            } = (0, eP.FI)({
                product: w,
                isPremiumUser: P,
                hasDiscountOffer: eM,
                isRental: null != O,
            }),
            eF = l.useCallback(
                () =>
                    (0, R.A)({
                        skuId: w.skuId,
                        analyticsLocations: A,
                        variantsReturnStyle: d.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? u() : (0, eE.tE)()),
                    }),
                [A, u, w.skuId],
            );
        return (
            l.useEffect(() => {
                if (null != eb) return (0, C.Dx)(eb), () => (0, C.Dx)(void 0);
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
                        product: null != S ? S : w,
                        user: n,
                        activeSlide: _,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, r.jsx)(ei.A, {
                                        product: w,
                                        isDarkText: !em,
                                        isOrbExclusive: eV,
                                        rentalDuration: O,
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
                                        skuId: w.skuId,
                                    }),
                                    D.isPurchased || D.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(et.c, {
                                              className: eS.On,
                                              isPartiallyPurchased: M,
                                          })
                                        : ep
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eT.intl.string(eT.t.rt69oo),
                                            })
                                          : ek
                                            ? (0, r.jsx)(eg.B, {
                                                  prices: eG,
                                                  product: w,
                                                  isPremiumUser: P,
                                                  discount: eO,
                                                  hasSufficientOrbs: eH,
                                                  isProductDisabled: q,
                                                  discountOfferAmount: eB,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, r.jsx)(eo.A, {
                                                          product: w,
                                                          discount: eO,
                                                          isPremiumUser: P,
                                                          hideStrikethroughPrice: !P || eM,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eB,
                                                      }),
                                                      P || eM
                                                          ? null
                                                          : (0, r.jsx)(ec.A, {
                                                                product: w,
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
                                                onVariantEnter: E,
                                                onVariantExit: T,
                                            }),
                                            (0, r.jsx)(ef.A, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: N,
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
                                    if (ep && !P && !eh) {
                                        let e;
                                        return (
                                            (e = eT.intl.string(eT.t.sEAnVH)),
                                            (0, r.jsx)(I.A, {
                                                subscriptionTier: eC.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: {
                                                    textOverride: e,
                                                },
                                                onClick: eu.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eu.t)({
                                                        product: w,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: g,
                                                        analyticsLocations: A,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    if (!ee)
                                        return ew
                                            ? (0, r.jsx)(es.A, {
                                                  primary: !0,
                                                  product: w,
                                                  onSuccess: u,
                                                  fullWidth: !0,
                                              })
                                            : null;
                                    if (en) {
                                        if (U)
                                            return (0, r.jsx)(ed.A, {
                                                product: w,
                                                onSuccess: u,
                                            });
                                    } else if (U && !G)
                                        return ew
                                            ? (0, r.jsxs)(x.ButtonGroup, {
                                                  wrap: !1,
                                                  fullWidth: !0,
                                                  children: [
                                                      (0, r.jsx)(ed.A, {
                                                          product: w,
                                                          onSuccess: u,
                                                      }),
                                                      (0, r.jsx)(es.A, {
                                                          primary: !0,
                                                          product: w,
                                                          onSuccess: u,
                                                      }),
                                                  ],
                                              })
                                            : (0, r.jsx)(ed.A, {
                                                  product: w,
                                                  onSuccess: u,
                                              });
                                    return ep
                                        ? (0, r.jsx)(x.Button, {
                                              loading: er,
                                              loadingStartedLabel: eT.intl.string(eT.t["TYw+9s"]),
                                              loadingFinishedLabel: eT.intl.string(eT.t.Pg1UP5),
                                              onClick: async () => {
                                                  await (0, F.iJ)(w.skuId),
                                                      u(),
                                                      (0, eN.A)({
                                                          product: w,
                                                          analyticsLocations: A,
                                                          purchaseType: eR.gs.PREMIUM_PURCHASE,
                                                      });
                                              },
                                              text: eT.intl.string(eT.t.zp6caO),
                                              fullWidth: !0,
                                          })
                                        : (0, r.jsx)(r.Fragment, {
                                              children: eG.map((e, t) => {
                                                  let n,
                                                      l = 0 === t;
                                                  if (e.currency === eE.Yr.DISCORD_ORB) {
                                                      let t, n, i, s;
                                                      if (null != O) {
                                                          let e, t, n, i, s, o, c;
                                                          return (
                                                              (e = q
                                                                  ? eT.intl.string(eT.t.cTdr3x)
                                                                  : eT.intl.string(eT.t.zqh7ZM)),
                                                              (t = !eH || q),
                                                              (n = eT.intl.formatToPlainString(eT.t.DlNs2T, {
                                                                  orbPrice: eR.O0,
                                                              })),
                                                              (i = t ? "".concat(n, ", ").concat(e) : n),
                                                              (s = new Date()),
                                                              (c =
                                                                  null !=
                                                                  (o = null == O ? null : s.setDate(s.getDate() + O))
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
                                                                                  (0, B.B4)({
                                                                                      skuId: w.skuId,
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
                                                                                          (0, eN.A)({
                                                                                              product: w,
                                                                                              analyticsLocations: A,
                                                                                              itemConsumed:
                                                                                                  null == (n = r[0])
                                                                                                      ? void 0
                                                                                                      : n.consumed,
                                                                                              purchaseType: eR.gs.ORB,
                                                                                              rentalDuration: O,
                                                                                              rentalExpiresAt: l,
                                                                                          });
                                                                                      },
                                                                                      analyticsLocations: A,
                                                                                      rentalDuration: O,
                                                                                  });
                                                                              },
                                                                              disabled: t,
                                                                              "aria-label": i,
                                                                              text: eT.intl.format(eT.t["4NKuqc"], {
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
                                                                              children: eT.intl.format(eT.t.pLAiJ4, {
                                                                                  date: c,
                                                                              }),
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }
                                                      return (
                                                          (t = q
                                                              ? eT.intl.string(eT.t.cTdr3x)
                                                              : eT.intl.string(eT.t.zqh7ZM)),
                                                          (n = !eH || q),
                                                          (i = eT.intl.formatToPlainString(eT.t["fNG/05"], {
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
                                                                      (0, B.B4)({
                                                                          skuId: w.skuId,
                                                                          onCheckoutSuccess: (e) => {
                                                                              var t;
                                                                              let { entitlements: n } = e;
                                                                              (0, F.gB)({
                                                                                  variantsReturnStyle:
                                                                                      d.g.VARIANTS_GROUP,
                                                                              }),
                                                                                  u(),
                                                                                  (0, eN.A)({
                                                                                      product: w,
                                                                                      analyticsLocations: A,
                                                                                      itemConsumed:
                                                                                          null == (t = n[0])
                                                                                              ? void 0
                                                                                              : t.consumed,
                                                                                      purchaseType: eR.gs.ORB,
                                                                                  });
                                                                          },
                                                                          analyticsLocations: A,
                                                                      });
                                                                  },
                                                                  disabled: n,
                                                                  "aria-label": s,
                                                                  text: eT.intl.format(eT.t.kAgx5L, {
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
                                                      (n = (0, K.aw)(w)
                                                          ? eT.intl.string(eT.t.V1AWw0)
                                                          : w.type === c.R.PROFILE_EFFECT
                                                            ? eT.intl.string(eT.t.kAeDcK)
                                                            : w.type === c.R.NAMEPLATE
                                                              ? eT.intl.string(eT.t.H3vhqU)
                                                              : eT.intl.string(eT.t.AQ0Veg)),
                                                      eM
                                                          ? (n = eT.intl.formatToPlainString(eT.t["5U5RB5"], {
                                                                discountOfferAmount: eB,
                                                            }))
                                                          : ek &&
                                                            (n = eT.intl.formatToPlainString(eT.t["cNSL/j"], {
                                                                price: (0, H.$g)(e.amount, e.currency),
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
                                                              ew &&
                                                                  (0, r.jsx)(es.A, {
                                                                      primary: l,
                                                                      product: w,
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
                                children: ep && !U ? eT.intl.string(eT.t.nKdAlO) : null,
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
            i = (0, P.Ov)();
        return (0, r.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eT.intl.string(eT.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eG, {
                        user: i.mallow,
                        innerClassName: eS.ab,
                    }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eT.intl.string(eT.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, {
                        user: i.phibi,
                        innerClassName: eS.e9,
                    }),
                    (0, r.jsx)("div", {
                        className: eS.mV,
                        children: (0, r.jsx)(N.A, {
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
                        children: [eT.intl.string(eT.t["NG43/6"]), " - 12"],
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
            s = (0, m.bG)([g.A], () => g.A.useReducedMotion),
            o = V.Ay.canUsePremiumProfileCustomization(n),
            u = (0, m.cf)([D.A], () => D.A.getAllPending()),
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
            { firstAvatarDecoration: h, firstProfileEffect: b, firstNameplate: j } = (0, X.f5)(t),
            _ = null != b,
            O = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(
                            E.A,
                            ek(ew({}, p), {
                                pendingAvatar: f,
                                user: n,
                                canUsePremiumCustomization: o,
                                pendingAvatarDecoration: h,
                                pendingProfileEffect: b,
                                disabledInputs: !0,
                                hideMessageInput: !_,
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
            A = (e) =>
                (0, r.jsx)(eV, {
                    user: n,
                    nameplate: e,
                    avatarDecoration: h,
                });
        if (t.type === c.R.BUNDLE) {
            if (!(0, $.W)(t))
                return (0, r.jsx)("div", {
                    className: eS.RA,
                    children: (0, r.jsx)("div", {
                        className: eS.bo,
                        children: O(),
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
                          children: A(n),
                      })
                    : (0, r.jsx)("div", {
                          className: a()(eS.Ak, i && u ? eS.p2 : ""),
                          children: O(),
                      });
            }
        }
        return null != j
            ? (0, r.jsx)("div", {
                  className: eS.Zj,
                  children: A(j),
              })
            : (0, r.jsx)("div", {
                  className: (null == v ? void 0 : v.type) === c.R.AVATAR_DECORATION ? eS.RA : eS.Ak,
                  children: O(),
              });
    },
    eF = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, _.rh)(
                    ek(
                        ew(
                            {},
                            (0, O.Ay)({
                                author: t,
                                channelId: "1337",
                                content: eT.intl.string(eT.t.d5YwK5),
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
            "aria-label": eT.intl.string(eT.t["TN+ZvB"]),
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
                                author: (0, A.p_)(n),
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
                tab: g,
                rentalDuration: j,
            } = e,
            _ = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
            O = (0, ey.f)(i),
            { previewingVariantIndex: A } = O,
            y = (0, q.Q)(i),
            P = (0, ej.q)(i, A),
            N = (0, Q.rb)(i, y);
        o()(null != N, "Selected product should not be null");
        let { analyticsLocations: R } = (0, b.Ay)([
            ...f,
            h.A.COLLECTIBLES_SHOP_DETAILS_MODAL,
            ...(null != j ? [h.A.COLLECTIBLES_SHOP_DETAILS_RENTAL_MODAL] : []),
        ]);
        (0, el.Yr)(N.skuId);
        let I = (0, eO.U1)(s);
        l.useEffect(() => {
            null != _ && (0, w.A)(_.id, _.getAvatarURL(void 0, 80));
        }, [_]);
        let C = l.useMemo(() => (0, K.V6)(i.type, i.skuId), [i.type, i.skuId]);
        l.useEffect(() => {
            M.default.track(eI.HAw.OPEN_MODAL, {
                type: eI.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: R,
                sku_id: N.skuId,
                product_type: C,
            }),
                N.items.forEach(F.RD);
        }, [p, R, N.skuId, N.items, C]);
        let E = (0, B.o6)(),
            T = t === x.ip4.EXITING,
            S = (0, e_.$R)(i),
            k = null == S ? void 0 : S.amount,
            L =
                null != k &&
                ((null == S ? void 0 : S.discountId) === eC.eR || (null == S ? void 0 : S.discountId) === eC.Qz),
            D = l.useMemo(() => ((0, K.aw)(N) ? N.items.length : 0), [N]),
            { activeSlide: G, isTransitioning: V } = (0, ee.X)({
                slideCount: D,
                intervalMs: 5e3,
            });
        return null == _
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
                                      user: _,
                                      product: i,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: O,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: v,
                                      activeBundleSlide: G,
                                      rentalDuration: j,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: a()(
                                          eS.i1,
                                          N.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eS.bF
                                              : N.type === c.R.AVATAR_DECORATION
                                                ? eS.Jq
                                                : eS.eF,
                                      ),
                                      style: {
                                          backgroundImage: "url(".concat(I, ")"),
                                      },
                                      children: [
                                          (0, eR.pQ)(i.skuId)
                                              ? i.skuId === eR.Dp.ORB_PROFILE_BADGE
                                                  ? E || T
                                                      ? null
                                                      : (0, r.jsx)(ep.z, {
                                                            user: _,
                                                        })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(em.I, {})
                                                    : (0, r.jsx)(ev.B, {
                                                          product: i,
                                                          className: eS.Ms,
                                                      })
                                              : (0, r.jsx)(eH, {
                                                    user: _,
                                                    product: null != P ? P : N,
                                                    activeBundleSlide: G,
                                                    isTransitioning: V,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eS.VG,
                                              children: [
                                                  (0, r.jsx)(eh.R, {
                                                      product: i,
                                                      selectedVariantIndex: y,
                                                      className: eS.ij,
                                                      iconSize: 16,
                                                      enableHoverEffect: !0,
                                                  }),
                                                  (0, r.jsx)(en.V, {
                                                      skuId: N.skuId,
                                                      tab: g,
                                                  }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": eT.intl.string(eT.t.cpT0Cq),
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
                                                      children: eT.intl.format(eT.t["78ph4b"], {
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
