r.d(t, { Z: () => w });
var n = r(255367);
r(73800);
var i = r(392711),
    l = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(884697),
    a = r(29121),
    u = r(778825),
    d = r(957730),
    f = r(222062),
    p = r(678135),
    m = r(643879),
    g = r(350327),
    h = r(687158),
    b = r(706454),
    j = r(695346),
    y = r(265159),
    x = r(25990),
    O = r(594174),
    v = r(55935),
    P = r(74538),
    _ = r(388032),
    E = r(71627);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let C = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: u, purchase: d } = e,
            p = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
            m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            g = (0, l.e7)([b.default], () => b.default.locale),
            h = P.ZP.canUseCollectibles(p),
            j = (0, c.qS)(d),
            y = (0, c.G1)(u),
            x = !h && j,
            S = (null == d ? void 0 : d.expiresAt) != null ? (0, v.TD)(Date.now(), d.expiresAt) : null,
            C = (0, a.ag)(d),
            w = (0, a.kd)(m),
            Z = (0, f.M)(!y || h),
            N = I(x, y, h, Z);
        return null != r
            ? (0, n.jsx)("div", {
                  className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)("div", {
                      className: E.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: "header-primary",
                              variant: "text-sm/semibold",
                              className: E.effectName,
                              children: (0, i.isEmpty)(C) ? w : C,
                          }),
                          null != d
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    className: E.effectDescription,
                                    children: N,
                                }),
                          null != S &&
                              (0, n.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: _.intl.format(_.t.Io7ozs, { days: S.days.toString() }),
                              }),
                          null != d &&
                              (0, n.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: [
                                      _.intl.format(_.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != d.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("br", {}),
                                                  _.intl.format(_.t.eZSTa2, {
                                                      date: d.expiresAt.toLocaleDateString(g, {
                                                          minute: "numeric",
                                                          hour: "numeric",
                                                          day: "numeric",
                                                          month: "long",
                                                          year: "numeric",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                          j &&
                              (0, n.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: _.intl.string(_.t.nKdAlJ),
                              }),
                      ],
                  }),
              })
            : null;
    },
    I = (e, t, r, n) =>
        e
            ? _.intl.string(_.t["1UPza2"])
            : t && r
              ? _.intl.string(_.t.hmyYKy)
              : t && !r
                ? n
                    ? _.intl.string(_.t.meldu7)
                    : _.intl.string(_.t.JtAKws)
                : _.intl.string(_.t.fEGjVV),
    w = (e) => {
        var t, r, i;
        let {
                user: o,
                pendingProfileEffectRecord: s,
                canApplySelectedChange: c,
                product: a,
                purchase: f,
                guild: b,
            } = e,
            {
                pendingGlobalName: O,
                pendingNickname: v,
                pendingPronouns: _,
                pendingBio: I,
                pendingBanner: w,
                pendingAvatar: Z,
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k,
            } = (0, l.cj)([u.Z, x.Z], () =>
                S(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != b ? u.Z.getAllPending() : x.Z.getAllPending(),
                ),
            ),
            A = P.ZP.isPremium(o),
            T = P.ZP.canUsePremiumProfileCustomization(o),
            G = (0, h.ZP)(o.id),
            R = !!(null == G ? void 0 : G.getPreviewBio(I).value),
            U = {
                user: o,
                guild: b,
                pendingGlobalName: O,
                pendingNickname: v,
                pendingPronouns: _,
                pendingBio: j.dN.useSetting() && null != I ? d.ZP.parse(void 0, I).content : I,
                pendingBanner: w,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: o.id,
                    image: Z,
                }),
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: R,
                canUsePremiumCustomization: T,
                onUpsellClick: y.Z,
                onBannerChange: g.g_,
            };
        return (0, n.jsxs)("div", {
            className: E.previewContainer,
            children: [
                (0, n.jsx)(
                    p.Z,
                    ((r = S({}, U)),
                    (i = i =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                ),
                !1,
                (0, n.jsx)(C, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: f,
                    userIsPremium: A,
                }),
            ],
        });
    };
