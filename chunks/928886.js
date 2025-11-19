n.d(t, { U: () => I });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(479446),
    c = n(622909),
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
            isDisplayingWowMomentConfirmation: D,
        } = (0, m.JL)(),
        { isGift: w, selectedGiftStyle: L, giftRecipient: x } = (0, h.wD)(),
        M = (null == R ? void 0 : R.productLine) === E.POd.COLLECTIBLES,
        j = (null == R ? void 0 : R.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM,
        k = w && (0, p.pO)(x) && S === g.h8.CONFIRM && null != L && !M && !j,
        U = null != n && null != S,
        G = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU],
        B = null != S && !G.includes(S) && null != T,
        Z = (0, u.N)(a),
        F = !w && null != Z && null != T && b.nG[Z.trial_id].skus.includes(T),
        V = (0, c.N)(),
        H = null == V || null == (t = V.discount) ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === T),
        Y = !w && null != V && null != T && H;
    return i.useMemo(() => {
        if (null == S) return;
        let e = null;
        return (
            k
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
                : U
                  ? (e = n(null != A ? A : null, I, S))
                  : N === y.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(_.t, {
                          step: S,
                          onClose: I,
                      }))
                    : B &&
                      (o()(v(T, b.y7), "invalid sku id: ".concat(T)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != S ? S : void 0,
                          purchaseState: C,
                          premiumType: b.y7[T],
                          onClose: I,
                          showTrialBadge: F,
                          showDiscountBadge: Y,
                          isGift: w,
                          giftRecipient: x,
                          isEligibleForTrial: F,
                          enablePremiumBrandRefresh: P,
                          isDisplayingWowMomentConfirmation: D,
                      }))),
            e
        );
    }, [L, I, C, n, A, T, S, F, Y, k, B, U, N, w, x, P, D]);
}
