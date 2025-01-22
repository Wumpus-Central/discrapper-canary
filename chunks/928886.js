r.d(n, {
    U: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(481060),
    u = r(479446),
    c = r(646476),
    d = r(104494),
    f = r(639119),
    p = r(981632),
    h = r(798769),
    _ = r(689011),
    m = r(669079),
    g = r(987209),
    E = r(563132),
    v = r(409813),
    y = r(981631),
    b = r(474936),
    I = r(231338),
    T = r(467474);
function S(e, n) {
    return e in n;
}
function A(e) {
    var n;
    let { renderHeader: r, referralTrialOfferId: o, handleClose: A } = e,
        { selectedSkuId: C, step: N, selectedPlan: R, purchaseState: O, purchaseType: D, selectedSku: x } = (0, E.usePaymentContext)(),
        { isGift: L, selectedGiftStyle: w, giftRecipient: P } = (0, g.wD)(),
        M = L && (0, m.pO)(P) && N === v.h8.CONFIRM && null != w && (null == x ? void 0 : x.productLine) !== y.POd.COLLECTIBLES,
        k = null != r && null != N,
        U = [v.h8.SKU_SELECT, v.h8.SELECT_FREE_SKU],
        B = null != N && !U.includes(N) && null != C,
        G = (0, f.N)(o),
        Z = !L && null != G && null != C && b.nG[G.trial_id].skus.includes(C),
        F = (0, d.Ng)(),
        V = null == F ? void 0 : null === (n = F.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => b.GP[e].skuId === C),
        j = !L && null != F && null != C && V,
        { enabled: H } = c.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        Y = (0, c.rK)(),
        W = H && Y;
    return a.useMemo(() => {
        if (null == N) return;
        let e = null;
        return (
            M
                ? (e = (0, i.jsxs)('div', {
                      className: T.container,
                      children: [
                          (0, i.jsx)(p.Z, {
                              defaultAnimationState: u.SR.LOOP,
                              giftStyle: w,
                              className: T.seasonalGiftBoxHeaderIcon
                          }),
                          (0, i.jsx)(l.ModalCloseButton, {
                              onClick: A,
                              className: T.closeButton
                          })
                      ]
                  }))
                : k
                  ? (e = r(null != R ? R : null, A, N))
                  : D === I.GZ.ONE_TIME
                    ? (e = (0, i.jsx)(_.t, {
                          step: N,
                          onClose: A
                      }))
                    : B &&
                      (s()(S(C, b.y7), 'invalid sku id: '.concat(C)),
                      (e = (0, i.jsx)(h.Z, {
                          currentStep: null != N ? N : void 0,
                          purchaseState: O,
                          premiumType: b.y7[C],
                          onClose: A,
                          showTrialBadge: Z,
                          showDiscountBadge: j,
                          isGift: L,
                          giftRecipient: P,
                          useWinterTheme: W
                      }))),
            e
        );
    }, [w, A, O, r, R, C, N, Z, j, M, B, k, D, L, P, W]);
}
