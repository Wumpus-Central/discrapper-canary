n.d(t, { A: () => x }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(575593),
    s = n(311907),
    a = n(732955),
    o = n(397927),
    u = n(775602),
    c = n(688810),
    d = n(920064),
    p = n(674658),
    m = n(61750),
    f = n(235986),
    g = n(369496),
    j = n(550111),
    y = n(552736),
    h = n(287809),
    v = n(482132),
    b = n(758836),
    O = n(401506);
function x(e) {
    let { reward: t, purchase: n, onClose: x } = e,
        P = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        S = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        { analyticsLocations: E } = (0, c.Ay)(),
        T = o._3J.SIZE_32,
        I = (0, d.A)(t.assetId, T, !S),
        A = (0, y.A)(),
        k = null == A ? void 0 : A.giftPurchaseConfirmation,
        { product: w, isFetching: _ } = (0, p.q)(n.skuId),
        C = t.type === i.R.NAMEPLATE,
        [M, N] = r.useState(!1),
        R = r.useMemo(() => {
            var e, n;
            return C && null != t.assetId
                ? {
                      src: t.assetId,
                      palette: (0, g.H6)(null != (e = t.palette) ? e : "sky"),
                      imgAlt: null == (n = t.a11yLabel) ? void 0 : n.call(t),
                  }
                : null;
        }, [C, t]);
    return null == k
        ? null
        : (0, l.jsx)(v.UX, {
              children: (0, l.jsx)(o.jlY, {
                  align: f.A.Align.CENTER,
                  "data-migration-pending": !0,
                  children: (0, l.jsxs)("div", {
                      className: O.W,
                      children: [
                          C && null != R
                              ? (0, l.jsx)("div", {
                                    className: O.D,
                                    onMouseEnter: () => N(!0),
                                    onMouseLeave: () => N(!1),
                                    children: (0, l.jsx)(j.a, {
                                        user: P,
                                        nameplate: null,
                                        nameplateData: R,
                                        showPlaceholderUser: !0,
                                        nameplatePreviewSize: "xsmall",
                                        isHighlighted: M,
                                    }),
                                })
                              : (0, l.jsx)(o.JsQ, {
                                    "aria-label": null == P ? void 0 : P.username,
                                    size: T,
                                    src: null == P ? void 0 : P.getAvatarURL(void 0, (0, o.FT9)(T), !S),
                                    avatarDecoration: I,
                                }),
                          (0, l.jsx)(a.$nd, {
                              variant: "primary",
                              text: k.collectRewardButtonText(),
                              loading: _,
                              onClick: () => {
                                  null != w &&
                                      (x(),
                                      (0, m.A)({
                                          product: w,
                                          shouldShowPromotionalExperience: !0,
                                          analyticsLocations: E,
                                          purchaseType: b.gs.PROMOTIONAL,
                                      }));
                              },
                          }),
                      ],
                  }),
              }),
          });
}
