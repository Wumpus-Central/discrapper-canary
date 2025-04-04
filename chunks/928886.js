n.d(t, { U: () => S });
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
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
    v = n(231338),
    O = n(973579);
function I(e, t) {
    return e in t;
}
function S(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: o, handleClose: S } = e,
        { selectedSkuId: T, step: N, selectedPlan: A, purchaseState: C, purchaseType: R, selectedSku: P } = (0, g.JL)(),
        { isGift: w, selectedGiftStyle: D, giftRecipient: L } = (0, m.wD)(),
        x = w && (0, h.pO)(L) && N === E.h8.CONFIRM && null != D && (null == P ? void 0 : P.productLine) !== b.POd.COLLECTIBLES,
        M = null != n && null != N,
        k = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU],
        j = null != N && !k.includes(N) && null != T,
        U = (0, d.N)(o),
        G = !w && null != U && null != T && y.nG[U.trial_id].skus.includes(T),
        B = (0, u.Ng)(),
        F = null == B || null == (t = B.discount) ? void 0 : t.plan_ids.some((e) => y.GP[e].skuId === T),
        V = !w && null != B && null != T && F,
        { enabled: Z } = c.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        H = (0, c.rK)(),
        W = Z && H;
    return i.useMemo(() => {
        if (null == N) return;
        let e = null;
        return (
            x
                ? (e = (0, r.jsxs)('div', {
                      className: O.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: D,
                              className: O.seasonalGiftBoxHeaderIcon
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: S,
                              className: O.closeButton
                          })
                      ]
                  }))
                : M
                  ? (e = n(null != A ? A : null, S, N))
                  : R === v.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: N,
                          onClose: S
                      }))
                    : j &&
                      (a()(I(T, y.y7), 'invalid sku id: '.concat(T)),
                      (e = (0, r.jsx)(_.Z, {
                          currentStep: null != N ? N : void 0,
                          purchaseState: C,
                          premiumType: y.y7[T],
                          onClose: S,
                          showTrialBadge: G,
                          showDiscountBadge: V,
                          isGift: w,
                          giftRecipient: L,
                          useWinterTheme: W
                      }))),
            e
        );
    }, [D, S, C, n, A, T, N, G, V, x, j, M, R, w, L, W]);
}
