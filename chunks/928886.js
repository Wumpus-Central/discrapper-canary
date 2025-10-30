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
            selectedSkuId: S,
            step: T,
            selectedPlan: A,
            purchaseState: C,
            purchaseType: N,
            selectedSku: R,
            enablePremiumBrandRefresh: P,
            isDisplayingWowMomentConfirmation: w,
        } = (0, m.JL)(),
        { isGift: D, selectedGiftStyle: L, giftRecipient: x } = (0, h.wD)(),
        M = (null == R ? void 0 : R.productLine) === E.POd.COLLECTIBLES,
        k = (null == R ? void 0 : R.productLine) === E.POd.SOCIAL_LAYER_GAME_ITEM,
        j = D && (0, p.pO)(x) && T === g.h8.CONFIRM && null != L && !M && !k,
        U = null != n && null != T,
        G = [g.h8.SKU_SELECT, g.h8.SELECT_FREE_SKU],
        B = null != T && !G.includes(T) && null != S,
        Z = (0, u.N)(a),
        F = !D && null != Z && null != S && b.nG[Z.trial_id].skus.includes(S),
        V = (0, c.Ng)(),
        H = null == V || null == (t = V.discount) ? void 0 : t.plan_ids.some((e) => b.GP[e].skuId === S),
        Y = !D && null != V && null != S && H;
    return i.useMemo(() => {
        if (null == T) return;
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
                : U
                  ? (e = n(null != A ? A : null, I, T))
                  : N === y.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(_.t, {
                          step: T,
                          onClose: I,
                      }))
                    : B &&
                      (o()(v(S, b.y7), "invalid sku id: ".concat(S)),
                      (e = (0, r.jsx)(f.Z, {
                          currentStep: null != T ? T : void 0,
                          purchaseState: C,
                          premiumType: b.y7[S],
                          onClose: I,
                          showTrialBadge: F,
                          showDiscountBadge: Y,
                          isGift: D,
                          giftRecipient: x,
                          isEligibleForTrial: F,
                          enablePremiumBrandRefresh: P,
                          isDisplayingWowMomentConfirmation: w,
                      }))),
            e
        );
    }, [L, I, C, n, A, S, T, F, Y, j, B, U, N, D, x, P, w]);
}
