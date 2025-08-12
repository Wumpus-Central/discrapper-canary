n.d(t, { U: () => T });
var r = n(255367),
    i = n(73800),
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
    O = n(231338),
    v = n(19549);
function I(e, t) {
    return e in t;
}
function T(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: o, handleClose: T } = e,
        {
            selectedSkuId: S,
            step: A,
            selectedPlan: N,
            purchaseState: C,
            purchaseType: R,
            selectedSku: P,
            enablePremiumBrandRefresh: w,
            isDisplayingWowMomentConfirmation: D,
        } = (0, g.JL)(),
        { isGift: L, selectedGiftStyle: x, giftRecipient: M } = (0, m.wD)(),
        k =
            L &&
            (0, h.pO)(M) &&
            A === E.h8.CONFIRM &&
            null != x &&
            (null == P ? void 0 : P.productLine) !== b.POd.COLLECTIBLES,
        j = null != n && null != A,
        U = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU],
        G = null != A && !U.includes(A) && null != S,
        B = (0, d.N)(o),
        Z = !L && null != B && null != S && y.nG[B.trial_id].skus.includes(S),
        F = (0, u.Ng)(),
        V = null == F || null == (t = F.discount) ? void 0 : t.plan_ids.some((e) => y.GP[e].skuId === S),
        H = !L && null != F && null != S && V,
        { enabled: Y } = c.ZP.useExperiment({ location: "PaymentModalHeader" }, { autoTrackExposure: !1 }),
        W = (0, c.rK)(),
        K = Y && W;
    return i.useMemo(() => {
        if (null == A) return;
        let e = null;
        return (
            k
                ? (e = (0, r.jsxs)("div", {
                      className: v.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: x,
                              className: v.seasonalGiftBoxHeaderIcon,
                          }),
                          (0, r.jsx)(s.olH, {
                              onClick: T,
                              className: v.closeButton,
                              "data-migration-pending": !0,
                          }),
                      ],
                  }))
                : j
                  ? (e = n(null != N ? N : null, T, A))
                  : R === O.GZ.ONE_TIME
                    ? (e = (0, r.jsx)(p.t, {
                          step: A,
                          onClose: T,
                      }))
                    : G &&
                      (a()(I(S, y.y7), "invalid sku id: ".concat(S)),
                      (e = (0, r.jsx)(_.Z, {
                          currentStep: null != A ? A : void 0,
                          purchaseState: C,
                          premiumType: y.y7[S],
                          onClose: T,
                          showTrialBadge: Z,
                          showDiscountBadge: H,
                          isGift: L,
                          giftRecipient: M,
                          useWinterTheme: K,
                          isEligibleForTrial: Z,
                          enablePremiumBrandRefresh: w,
                          isDisplayingWowMomentConfirmation: D,
                      }))),
            e
        );
    }, [x, T, C, n, N, S, A, Z, H, k, G, j, R, L, M, K, w, D]);
}
