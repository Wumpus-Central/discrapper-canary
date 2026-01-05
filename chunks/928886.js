n.d(t, { U: () => O });
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(479446),
    c = n(981632),
    u = n(798769),
    d = n(689011),
    f = n(669079),
    p = n(987209),
    _ = n(563132),
    m = n(409813),
    h = n(981631),
    g = n(474936),
    E = n(231338),
    b = n(455006);
function y(e, t) {
    return e in t;
}
function O(e) {
    let { renderHeader: t, handleClose: n } = e,
        {
            selectedSkuId: a,
            step: O,
            selectedPlan: v,
            purchaseState: S,
            purchaseType: I,
            selectedSku: T,
            enablePremiumBrandRefresh: C,
            isDisplayingWowMomentConfirmation: A,
            isPremiumGroupPurchase: N,
            isEligibleForTrial: P,
            isEligibleForDiscount: R,
        } = (0, _.JL)(),
        { isGift: w, selectedGiftStyle: D, giftRecipient: x } = (0, p.wD)(),
        L = (null == T ? void 0 : T.productLine) === h.POd.COLLECTIBLES,
        j = (null == T ? void 0 : T.productLine) === h.POd.SOCIAL_LAYER_GAME_ITEM,
        M = w && (0, f.pO)(x) && O === m.h8.CONFIRM && null != D && !L && !j,
        k = null != t && null != O,
        U = [m.h8.SKU_SELECT, m.h8.SELECT_FREE_SKU],
        G = null != O && !U.includes(O) && null != a;
    return i.useMemo(() => {
        if (null == O) return;
        let e = null;
        return (
            M
                ? (e = (0, r.jsxs)("div", {
                      className: b.container,
                      children: [
                          (0, r.jsx)(c.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: D,
                              className: b.seasonalGiftBoxHeaderIcon,
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: n,
                              className: b.closeButton,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : k
                  ? (e = t(null != v ? v : null, n, O))
                  : I === E.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(d.t, {
                          step: O,
                          onClose: n,
                      }))
                    : G &&
                      (o()(y(a, g.y7), "invalid sku id: ".concat(a)),
                      (e = (0, r.jsx)(u.Z, {
                          currentStep: null != O ? O : void 0,
                          purchaseState: S,
                          premiumType: g.y7[a],
                          onClose: n,
                          showTrialBadge: P,
                          showDiscountBadge: R,
                          isGift: w,
                          giftRecipient: x,
                          isEligibleForTrial: P,
                          enablePremiumBrandRefresh: C,
                          isDisplayingWowMomentConfirmation: A,
                          isPremiumGroupPurchase: N,
                      }))),
            e
        );
    }, [D, n, S, t, v, a, O, P, R, M, G, k, I, w, x, C, A, N]);
}
