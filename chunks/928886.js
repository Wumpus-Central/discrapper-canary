n.d(t, { U: () => I });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(479446),
    c = n(104494),
    u = n(639119),
    d = n(981632),
    f = n(798769),
    _ = n(689011),
    p = n(669079),
    h = n(987209),
    m = n(563132),
    g = n(409813),
    E = n(981631),
    b = n(474936),
    y = n(231338),
    O = n(315);
function v(e, t) {
    return e in t;
}
function I(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: I } = e,
        {
            selectedSkuId: T,
            step: S,
            selectedPlan: A,
            purchaseState: C,
            purchaseType: N,
            selectedSku: R,
            enablePremiumBrandRefresh: P,
            isDisplayingWowMomentConfirmation: w,
        } = (0, m.JL)(),
        { isGift: D, selectedGiftStyle: L, giftRecipient: x } = (0, h.wD)(),
        j =
            D &&
            (0, p.pO)(x) &&
            S === g.h8.CONFIRM &&
            null != L &&
            (null == R ? void 0 : R.productLine) !== E.POd.COLLECTIBLES,
        M = null != n && null != S,
        k = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU],
        U = null != S && !k.includes(S) && null != T,
        G = (0, u.N)(a),
        B = !D && null != G && null != T && b.nG[G.trial_id].skus.includes(T),
        Z = (0, c.Ng)(),
        F = null == Z || null == (t = Z.discount) ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === T),
        V = !D && null != Z && null != T && F;
    return i.useMemo(() => {
        if (null == S) return;
        let e = null;
        return (
            j
                ? (e = (0, r.jsxs)("div", {
                      className: O.container,
                      children: [
                          (0, r.jsx)(d.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: L,
                              className: O.seasonalGiftBoxHeaderIcon,
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: I,
                              className: O.closeButton,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : M
                  ? (e = n(null != A ? A : null, I, S))
                  : N === y.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(_.t, {
                          step: S,
                          onClose: I,
                      }))
                    : U &&
                      (o()(v(T, b.y7), "invalid sku id: ".concat(T)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != S ? S : void 0,
                          purchaseState: C,
                          premiumType: b.y7[T],
                          onClose: I,
                          showTrialBadge: B,
                          showDiscountBadge: V,
                          isGift: D,
                          giftRecipient: x,
                          isEligibleForTrial: B,
                          enablePremiumBrandRefresh: P,
                          isDisplayingWowMomentConfirmation: w,
                      }))),
            e
        );
    }, [L, I, C, n, A, T, S, B, V, j, U, M, N, D, x, P, w]);
}
