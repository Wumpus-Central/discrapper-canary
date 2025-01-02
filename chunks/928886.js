n.d(t, {
    U: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    o = n(481060),
    u = n(479446),
    s = n(646476),
    c = n(104494),
    d = n(639119),
    f = n(981632),
    C = n(798769),
    _ = n(689011),
    m = n(669079),
    L = n(987209),
    S = n(563132),
    p = n(409813),
    T = n(981631),
    E = n(474936),
    N = n(231338),
    h = n(467474);
function g(e) {
    var t;
    let { renderHeader: n, referralTrialOfferId: a, handleClose: g } = e,
        { selectedSkuId: A, step: v, selectedPlan: R, purchaseState: P, purchaseType: x, selectedSku: I } = (0, S.usePaymentContext)(),
        { isGift: M, selectedGiftStyle: b, giftRecipient: y } = (0, L.wD)(),
        O = M && (0, m.pO)(y) && v === p.h8.CONFIRM && null != b && (null == I ? void 0 : I.productLine) !== T.POd.COLLECTIBLES,
        D = null != n && null != v,
        Z = [p.h8.SKU_SELECT, p.h8.SELECT_FREE_SKU],
        w = null != v && !Z.includes(v) && null != A,
        k = (0, d.N)(a),
        F = !M && null != k && null != A && E.nG[k.trial_id].skus.includes(A),
        j = (0, c.Ng)(),
        U = null == j ? void 0 : null === (t = j.discount) || void 0 === t ? void 0 : t.plan_ids.some((e) => E.GP[e].skuId === A),
        H = !M && null != j && null != A && U,
        { enabled: B } = s.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }),
        Y = (0, s.rK)(),
        V = B && Y;
    return l.useMemo(() => {
        if (null == v) return;
        let e = null;
        if (O)
            e = (0, i.jsxs)('div', {
                className: h.container,
                children: [
                    (0, i.jsx)(f.Z, {
                        defaultAnimationState: u.SR.LOOP,
                        giftStyle: b,
                        className: h.seasonalGiftBoxHeaderIcon
                    }),
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: g,
                        className: h.closeButton
                    })
                ]
            });
        else if (D) e = n(null != R ? R : null, g, v);
        else if (x === N.GZ.ONE_TIME)
            e = (0, i.jsx)(_.t, {
                step: v,
                onClose: g
            });
        else if (w)
            r()(A in E.y7, 'invalid sku id: '.concat(A)),
                (e = (0, i.jsx)(C.Z, {
                    currentStep: null != v ? v : void 0,
                    purchaseState: P,
                    premiumType: E.y7[A],
                    onClose: g,
                    showTrialBadge: F,
                    showDiscountBadge: H,
                    isGift: M,
                    giftRecipient: y,
                    useWinterTheme: V
                }));
        return e;
    }, [b, g, P, n, R, A, v, F, H, O, w, D, x, M, y, V]);
}
