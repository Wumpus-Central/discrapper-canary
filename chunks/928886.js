n.d(t, { U: () => S });
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
    let { renderHeader: n, referralTrialOfferId: a, handleClose: S } = e,
        {
            selectedSkuId: I,
            step: T,
            selectedPlan: A,
            purchaseState: C,
            purchaseType: N,
            selectedSku: P,
            enablePremiumBrandRefresh: R,
            isDisplayingWowMomentConfirmation: w,
        } = (0, h.JL)(),
        { isGift: D, selectedGiftStyle: x, giftRecipient: L } = (0, m.wD)(),
        j = (null == P ? void 0 : P.productLine) === E.POd.COLLECTIBLES,
        M = (null == P ? void 0 : P.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM,
        k = D && (0, _.pO)(L) && T === g.h8.CONFIRM && null != x && !j && !M,
        U = null != n && null != T,
        G = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU],
        Z = null != T && !G.includes(T) && null != I,
        B = (0, u.N)(a),
        F = !D && null != B && null != I && b.nG[B.trial_id].skus.includes(I),
        V = (0, c.N)(),
        H = null == V || null == (t = V.discount) ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === I),
        Y = !D && null != V && null != I && H;
    return i.useMemo(() => {
        if (null == T) return;
        let e = null;
        return (
            k
                ? (e = (0, r.jsxs)("div", {
                      className: O.container,
                      children: [
                          (0, r.jsx)(d.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: x,
                              className: O.seasonalGiftBoxHeaderIcon,
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: S,
                              className: O.closeButton,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : U
                  ? (e = n(null != A ? A : null, S, T))
                  : N === y.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: T,
                          onClose: S,
                      }))
                    : Z &&
                      (o()(v(I, b.y7), "invalid sku id: ".concat(I)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != T ? T : void 0,
                          purchaseState: C,
                          premiumType: b.y7[I],
                          onClose: S,
                          showTrialBadge: F,
                          showDiscountBadge: Y,
                          isGift: D,
                          giftRecipient: L,
                          isEligibleForTrial: F,
                          enablePremiumBrandRefresh: R,
                          isDisplayingWowMomentConfirmation: w,
                      }))),
            e
        );
    }, [x, S, C, n, A, I, T, F, Y, k, Z, U, N, D, L, R, w]);
}
