n.d(t, { U: () => T });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(479446),
    c = n(646476),
    u = n(104494),
    d = n(639119),
    _ = n(981632),
    f = n(798769),
    p = n(689011),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(981631),
    y = n(474936),
    O = n(231338),
    v = n(973579);
function I(e, t) {
    return e in t;
}
function T(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: T } = e,
        { selectedSkuId: S, step: A, selectedPlan: N, purchaseState: C, purchaseType: R, selectedSku: P, enablePremiumBrandRefresh: w } = (0, g.JL)(),
        { isGift: D, selectedGiftStyle: L, giftRecipient: x } = (0, m.wD)(),
        k = D && (0, h.pO)(x) && A === E.h8.CONFIRM && null != L && (null == P ? void 0 : P.productLine) !== b.POd.COLLECTIBLES,
        M = null != n && null != A,
        j = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU],
        U = null != A && !j.includes(A) && null != S,
        G = (0, d.N)(a),
        B = !D && null != G && null != S && y.nG[G.trial_id].skus.includes(S),
        V = (0, u.Ng)(),
        F = null == V || null == (t = V.discount) ? void 0 : t.plan_ids.some((e) => y.GP[e].skuId === S),
        Z = !D && null != V && null != S && F,
        { enabled: H } = c.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        Y = (0, c.rK)(),
        W = H && Y;
    return i.useMemo(() => {
        if (null == A) return;
        let e = null;
        return (
            k
                ? (e = (0, r.jsxs)('div', {
                      className: v.container,
                      children: [
                          (0, r.jsx)(_.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: L,
                              className: v.seasonalGiftBoxHeaderIcon
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: T,
                              className: v.closeButton
                          })
                      ]
                  }))
                : M
                  ? (e = n(null != N ? N : null, T, A))
                  : R === O.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: A,
                          onClose: T
                      }))
                    : U &&
                      (o()(I(S, y.y7), 'invalid sku id: '.concat(S)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != A ? A : void 0,
                          purchaseState: C,
                          premiumType: y.y7[S],
                          onClose: T,
                          showTrialBadge: B,
                          showDiscountBadge: Z,
                          isGift: D,
                          giftRecipient: x,
                          useWinterTheme: W,
                          isEligibleForTrial: B,
                          enablePremiumBrandRefresh: w
                      }))),
            e
        );
    }, [L, T, C, n, N, S, A, B, Z, k, U, M, R, D, x, W, w]);
}
