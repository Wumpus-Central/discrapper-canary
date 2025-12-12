n.d(t, { U: () => S });
var r = n(54381),
    i = n(473749),
    o = n(512722),
    a = n.n(o),
    s = n(481060),
    l = n(479446),
    c = n(622909),
    u = n(639119),
    d = n(981632),
    f = n(798769),
    p = n(689011),
    _ = n(669079),
    m = n(987209),
    h = n(563132),
    g = n(409813),
    E = n(981631),
    b = n(474936),
    y = n(231338),
    O = n(315);
function v(e, t) {
    return e in t;
}
function S(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: o, handleClose: S } = e,
        {
            selectedSkuId: I,
            step: T,
            selectedPlan: C,
            purchaseState: A,
            purchaseType: N,
            selectedSku: P,
            enablePremiumBrandRefresh: R,
            isDisplayingWowMomentConfirmation: w,
            isPremiumGroupPurchase: D,
        } = (0, h.JL)(),
        { isGift: x, selectedGiftStyle: L, giftRecipient: j } = (0, m.wD)(),
        M = (null == P ? void 0 : P.productLine) === E.POd.COLLECTIBLES,
        k = (null == P ? void 0 : P.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM,
        U = x && (0, _.pO)(j) && T === g.h8.CONFIRM && null != L && !M && !k,
        G = null != n && null != T,
        Z = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU],
        F = null != T && !Z.includes(T) && null != I,
        B = (0, u.N)(o),
        V = !x && null != B && null != I && b.nG[B.trial_id].skus.includes(I),
        H = (0, c.N)(),
        Y = null == H || null == (t = H.discount) ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === I),
        W = !x && null != H && null != I && Y;
    return i.useMemo(() => {
        if (null == T) return;
        let e = null;
        return (
            U
                ? (e = (0, r.jsxs)("div", {
                      className: O.container,
                      children: [
                          (0, r.jsx)(d.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: L,
                              className: O.seasonalGiftBoxHeaderIcon,
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: S,
                              className: O.closeButton,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : G
                  ? (e = n(null != C ? C : null, S, T))
                  : N === y.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: T,
                          onClose: S,
                      }))
                    : F &&
                      (a()(v(I, b.y7), "invalid sku id: ".concat(I)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != T ? T : void 0,
                          purchaseState: A,
                          premiumType: b.y7[I],
                          onClose: S,
                          showTrialBadge: V,
                          showDiscountBadge: W,
                          isGift: x,
                          giftRecipient: j,
                          isEligibleForTrial: V,
                          enablePremiumBrandRefresh: R,
                          isDisplayingWowMomentConfirmation: w,
                          isPremiumGroupPurchase: D,
                      }))),
            e
        );
    }, [L, S, A, n, C, I, T, V, W, U, F, G, N, x, j, R, w, D]);
}
