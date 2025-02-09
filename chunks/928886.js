n.d(t, { U: () => S });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(481060),
    l = n(479446),
    u = n(646476),
    c = n(104494),
    d = n(639119),
    f = n(981632),
    _ = n(798769),
    p = n(689011),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    v = n(981631),
    y = n(474936),
    I = n(231338),
    T = n(578874);
function b(e, t) {
    return e in t;
}
function S(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: S } = e,
        { selectedSkuId: A, step: N, selectedPlan: C, purchaseState: R, purchaseType: O, selectedSku: D } = (0, g.JL)(),
        { isGift: L, selectedGiftStyle: x, giftRecipient: w } = (0, m.wD)(),
        P = L && (0, h.pO)(w) && N === E.h8.CONFIRM && null != x && (null == D ? void 0 : D.productLine) !== v.POd.COLLECTIBLES,
        M = null != n && null != N,
        k = [E.h8.SKU_SELECT, E.h8.SELECT_FREE_SKU],
        U = null != N && !k.includes(N) && null != A,
        G = (0, d.N)(a),
        B = !L && null != G && null != A && y.nG[G.trial_id].skus.includes(A),
        Z = (0, c.Ng)(),
        F = null == Z ? void 0 : null === (t = Z.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => y.GP[e].skuId === A),
        V = !L && null != Z && null != A && F,
        { enabled: j } = u.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        H = (0, u.rK)(),
        Y = j && H;
    return r.useMemo(() => {
        if (null == N) return;
        let e = null;
        return (
            P
                ? (e = (0, i.jsxs)('div', {
                      className: T.container,
                      children: [
                          (0, i.jsx)(f.Z, {
                              defaultAnimationState: l.SR.LOOP,
                              giftStyle: x,
                              className: T.seasonalGiftBoxHeaderIcon
                          }),
                          (0, i.jsx)(o.olH, {
                              onClick: S,
                              className: T.closeButton
                          })
                      ]
                  }))
                : M
                  ? (e = n(null != C ? C : null, S, N))
                  : O === I.GZ.ONE_TIME
                    ? (e = (0, i.jsx)(p.t, {
                          step: N,
                          onClose: S
                      }))
                    : U &&
                      (s()(b(A, y.y7), 'invalid sku id: '.concat(A)),
                      (e = (0, i.jsx)(_.Z, {
                          currentStep: null != N ? N : void 0,
                          purchaseState: R,
                          premiumType: y.y7[A],
                          onClose: S,
                          showTrialBadge: B,
                          showDiscountBadge: V,
                          isGift: L,
                          giftRecipient: w,
                          useWinterTheme: Y
                      }))),
            e
        );
    }, [x, S, R, n, C, A, N, B, V, P, U, M, O, L, w, Y]);
}
