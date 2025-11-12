t.d(r, { default: () => M });
var n = t(951288),
    o = t(647438),
    i = t(120356),
    l = t.n(i),
    s = t(442837),
    c = t(755721),
    a = t(481060),
    u = t(570140),
    p = t(355467),
    f = t(821849),
    d = t(15640),
    m = t(563132),
    j = t(409813),
    g = t(622909),
    _ = t(639119),
    O = t(767714),
    b = t(165583),
    h = t(185139),
    P = t(263954),
    y = t(706454),
    x = t(853872),
    C = t(930153),
    S = t(74538),
    w = t(937615),
    E = t(981631),
    k = t(474936),
    v = t(388032),
    I = t(803414);
let T = (e) => {
        let { locale: r } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(P.Z, {
                    icon: a.SlE,
                    iconClassName: I.iconColorPurple,
                    description: v.intl.string(v.t.uAfKTe),
                }),
                (0, n.jsx)(P.Z, {
                    icon: a.$zw,
                    iconClassName: I.iconColorPink,
                    description: v.intl.formatToPlainString(v.t.sWnv5M, {
                        numGuildSubscriptions: k.cb,
                        discountPercent: (0, C.T3)(r, k.Rr / 100),
                    }),
                }),
                (0, n.jsx)(P.Z, {
                    icon: a.EO4,
                    iconClassName: I.iconColorYellow,
                    description: v.intl.string(v.t.pqHIf7),
                }),
            ],
        });
    },
    N = (e) => {
        let { trialOffer: r, discountOffer: o, isLoading: i, price: c, onClose: u } = e,
            p = (0, s.e7)([y.default], () => y.default.locale),
            f = null != r || null != o;
        return (0, n.jsxs)("div", {
            className: I.wrapper,
            children: [
                (0, n.jsx)(a.olH, {
                    "data-migration-pending": !0,
                    onClick: u,
                    className: I.closeButton,
                }),
                f && (0, n.jsx)(b.dz, { className: I.premiumTrialBadge }),
                (0, n.jsx)("img", {
                    className: l()(I.heroImage, { [I.heroImageWithTrialOffer]: f }),
                    src: t(178632),
                    alt: "",
                }),
                i
                    ? (0, n.jsx)(a.$jN, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  className: I.heading,
                                  children:
                                      null == c
                                          ? (0, n.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS })
                                          : v.intl.format(v.t.TBsJfQ, {
                                                monthlyPrice: (0, w.T4)(c.amount, c.currency),
                                            }),
                              }),
                              (0, n.jsx)("div", {
                                  className: I.perks,
                                  children: (0, n.jsx)(T, { locale: p }),
                              }),
                          ],
                      }),
            ],
        });
    },
    L = (e) => {
        let { trialOffer: r, discountOffer: t, onClose: o } = e,
            i = { section: E.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, n.jsxs)(a.mzw, {
            "data-migration-pending": !0,
            className: I.footer,
            children: [
                (0, n.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: v.intl.string(v.t.cpT0Cq),
                    onClick: o,
                }),
                (0, n.jsx)(O.Z, {
                    textOptions: { textOverride: null != r || null != t ? v.intl.string(v.t["Gd/XHF"]) : void 0 },
                    premiumModalAnalyticsLocation: i,
                    subscriptionTier: k.Si.TIER_2,
                    size: c.zx.Sizes.SMALL,
                    color: c.zx.Colors.GREEN,
                    onClick: () => {
                        o();
                    },
                }),
            ],
        });
    };
function M(e) {
    var r,
        t,
        { onClose: i } = e,
        l = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (t = i[n]),
                        !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["onClose"]);
    let c = (0, d.V)(),
        O = (0, s.e7)([x.Z], () => x.Z.hasFetchedPaymentSources),
        b = c && O,
        P = (0, _.N)(),
        y = (0, g.N)();
    o.useEffect(() => {
        u.Z.wait(() => {
            (0, p.tZ)(), (0, f.Y2)(null, null, E.JjL.DISCOVERY);
        });
    }, []);
    let C = b ? S.ZP.getDefaultPrice(k.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, n.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(
            a.Y0X,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({ "data-migration-pending": !0 }, l)),
            (t = t =
                {
                    "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                    parentComponent: "StickerPackPremiumUpsellModal",
                    children: (0, n.jsx)(h.Z, {
                        hideBreadcrumbs: !0,
                        body: (0, n.jsx)(N, {
                            trialOffer: P,
                            discountOffer: y,
                            isLoading: !b,
                            price: C,
                            onClose: i,
                        }),
                        footer: (0, n.jsx)(L, {
                            trialOffer: P,
                            discountOffer: y,
                            onClose: i,
                        }),
                        steps: [j.h8.PREMIUM_UPSELL],
                        currentStep: j.h8.PREMIUM_UPSELL,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                : (function (e, r) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            r),
        ),
    });
}
