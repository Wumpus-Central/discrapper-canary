n.d(t, { U: () => S });
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(479446),
    c = n(646476),
    u = n(104494),
    d = n(639119),
    f = n(981632),
    _ = n(798769),
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
function S(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: S } = e,
        { selectedSkuId: T, step: A, selectedPlan: N, purchaseState: C, purchaseType: R, selectedSku: P } = (0, g.JL)(),
        { isGift: w, selectedGiftStyle: D, giftRecipient: L } = (0, m.wD)(),
        x = w && (0, h.pO)(L) && A === E.h8.CONFIRM && null != D && (null == P ? void 0 : P.productLine) !== b.POd.COLLECTIBLES,
        M = null != n && null != A,
        k = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU],
        j = null != A && !k.includes(A) && null != T,
        U = (0, d.N)(a),
        G = !w && null != U && null != T && y.nG[U.trial_id].skus.includes(T),
        B = (0, u.Ng)(),
        V = null == B || null == (t = B.discount) ? void 0 : t.plan_ids.some((e) => y.GP[e].skuId === T),
        F = !w && null != B && null != T && V,
        { enabled: Z } = c.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        H = (0, c.rK)(),
        Y = Z && H;
    return i.useMemo(() => {
        if (null == A) return;
        let e = null;
        return (
            x
                ? (e = (0, r.jsxs)('div', {
                      className: v.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: D,
                              className: v.seasonalGiftBoxHeaderIcon
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: S,
                              className: v.closeButton
                          })
                      ]
                  }))
                : M
                  ? (e = n(null != N ? N : null, S, A))
                  : R === O.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: A,
                          onClose: S
                      }))
                    : j &&
                      (o()(I(T, y.y7), 'invalid sku id: '.concat(T)),
                      (e = (0, r.jsx)(_.Z, {
                          currentStep: null != A ? A : void 0,
                          purchaseState: C,
                          premiumType: y.y7[T],
                          onClose: S,
                          showTrialBadge: G,
                          showDiscountBadge: F,
                          isGift: w,
                          giftRecipient: L,
                          useWinterTheme: Y
                      }))),
            e
        );
    }, [D, S, C, n, N, T, A, G, F, x, j, M, R, w, L, Y]);
}
