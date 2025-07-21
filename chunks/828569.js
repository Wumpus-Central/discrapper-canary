n.d(r, { default: () => R });
var t = n(255367),
    o = n(73800),
    i = n(120356),
    c = n.n(i),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    p = n(570140),
    u = n(355467),
    f = n(821849),
    d = n(15640),
    m = n(563132),
    j = n(409813),
    _ = n(104494),
    O = n(639119),
    h = n(767714),
    b = n(165583),
    g = n(185139),
    x = n(263954),
    P = n(706454),
    y = n(853872),
    k = n(930153),
    C = n(74538),
    I = n(937615),
    v = n(981631),
    w = n(474936),
    S = n(388032),
    E = n(432992);
let N = (e) => {
        let { locale: r } = e;
        return (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(x.Z, {
                    icon: a.SlE,
                    iconClassName: E.iconColorPurple,
                    description: S.intl.string(S.t.uAfKTU)
                }),
                (0, t.jsx)(x.Z, {
                    icon: a.$zw,
                    iconClassName: E.iconColorPink,
                    description: S.intl.formatToPlainString(S.t.sWnv5O, {
                        numGuildSubscriptions: w.cb,
                        discountPercent: (0, k.T3)(r, w.Rr / 100)
                    })
                }),
                (0, t.jsx)(x.Z, {
                    icon: a.EO4,
                    iconClassName: E.iconColorYellow,
                    description: S.intl.string(S.t.pqHIf3)
                })
            ]
        });
    },
    T = (e) => {
        let { trialOffer: r, discountOffer: o, isLoading: i, price: s, onClose: p } = e,
            u = (0, l.e7)([P.default], () => P.default.locale),
            f = null != r || null != o;
        return (0, t.jsxs)('div', {
            className: E.wrapper,
            children: [
                (0, t.jsx)(a.olH, {
                    onClick: p,
                    className: E.closeButton
                }),
                f && (0, t.jsx)(b.dz, { className: E.premiumTrialBadge }),
                (0, t.jsx)('img', {
                    className: c()(E.heroImage, { [E.heroImageWithTrialOffer]: f }),
                    src: n(178632),
                    alt: ''
                }),
                i
                    ? (0, t.jsx)(a.$jN, {})
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  className: E.heading,
                                  children: null == s ? (0, t.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS }) : S.intl.format(S.t.TBsJfX, { monthlyPrice: (0, I.T4)(s.amount, s.currency) })
                              }),
                              (0, t.jsx)('div', {
                                  className: E.perks,
                                  children: (0, t.jsx)(N, { locale: u })
                              })
                          ]
                      })
            ]
        });
    },
    L = (e) => {
        let { trialOffer: r, discountOffer: n, onClose: o } = e,
            i = { section: v.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, t.jsxs)(a.mzw, {
            className: E.footer,
            children: [
                (0, t.jsx)(a.zxk, {
                    variant: 'secondary',
                    size: 'sm',
                    text: S.intl.string(S.t.cpT0Cg),
                    onClick: o
                }),
                (0, t.jsx)(h.Z, {
                    textOptions: { textOverride: null != r || null != n ? S.intl.string(S.t['Gd/XHB']) : void 0 },
                    premiumModalAnalyticsLocation: i,
                    subscriptionTier: w.Si.TIER_2,
                    size: s.zx.Sizes.SMALL,
                    color: s.zx.Colors.GREEN,
                    onClick: () => {
                        o();
                    }
                })
            ]
        });
    };
function R(e) {
    var r,
        n,
        { onClose: i } = e,
        c = (function (e, r) {
            if (null == e) return {};
            var n,
                t,
                o = (function (e, r) {
                    if (null == e) return {};
                    var n,
                        t,
                        o = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) ((n = i[t]), r.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (t = 0; t < i.length; t++) ((n = i[t]), !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['onClose']);
    let s = (0, d.V)(),
        h = (0, l.e7)([y.Z], () => y.Z.hasFetchedPaymentSources),
        b = s && h,
        x = (0, O.N)(),
        P = (0, _.Ng)();
    o.useEffect(() => {
        p.Z.wait(() => {
            ((0, u.tZ)(), (0, f.Y2)(null, null, v.JjL.DISCOVERY));
        });
    }, []);
    let k = b ? C.ZP.getDefaultPrice(w.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, t.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, t.jsx)(
            a.Y0X,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        t.forEach(function (r) {
                            var t;
                            ((t = n[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: t,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = t));
                        }));
                }
                return e;
            })({}, c)),
            (n = n =
                {
                    'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
                    parentComponent: 'StickerPackPremiumUpsellModal',
                    children: (0, t.jsx)(g.Z, {
                        hideBreadcrumbs: !0,
                        body: (0, t.jsx)(T, {
                            trialOffer: x,
                            discountOffer: P,
                            isLoading: !b,
                            price: k,
                            onClose: i
                        }),
                        footer: (0, t.jsx)(L, {
                            trialOffer: x,
                            discountOffer: P,
                            onClose: i
                        }),
                        steps: [j.h8.PREMIUM_UPSELL],
                        currentStep: j.h8.PREMIUM_UPSELL
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
                : (function (e, r) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var t = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, t);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            r)
        )
    });
}
