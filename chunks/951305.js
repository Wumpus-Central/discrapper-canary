n.d(t, { dX: () => w, Pv: () => _, Mq: () => B });
var r = n(477900),
    u = n(582128),
    i = n(70283),
    l = n(682618),
    s = n(912195),
    a = n(242874),
    c = n(998370),
    d = n(810498),
    o = n(17928),
    f = n(192308),
    g = n(982240),
    S = n(566980),
    G = n(315693),
    h = n(287809),
    p = n(174459),
    E = n(786300),
    R = n(45938),
    P = n(652215),
    M = n(202541),
    I = n(105292);
let A = M.o2.STANDARD_BOX,
    v,
    [C, _, k] = (0, E.A)();
function w(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: M,
            giftStyle: _,
            giftingOrigin: k,
            children: w,
            additionalUserIds: y,
        } = e,
        B = (0, s.t4)((e) => e.selectedSkuId),
        [O, b] = u.useState(!1),
        [D, N] = u.useState(!1),
        [T, L] = u.useState(E),
        [m, U] = u.useState(),
        [q, x] = u.useState(!1),
        F = (0, R.Ik)(T),
        J = v;
    F && (J = null != _ ? _ : A);
    let [X, Z] = u.useState(J),
        [j, H] = u.useState([]),
        $ = (0, d.JW)(),
        z = null != $ && $.length > 0,
        [V, W] = u.useState(
            t && (0, R.lo)(T) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == M ? I.intl.string(I.t.ZkOo1U) : M,
        ),
        [K, Q] = u.useState(void 0),
        [Y, ee] = u.useState(void 0),
        { enabled: et } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: en, canShowGiftingBadgePostPurchase: er } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([g.Ay], () => g.Ay.getBadgeById(i.$.GIFTING)?.tiers),
                { purchaseState: l, quantity: a } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                d = u.useRef(null);
            return (
                u.useEffect(() => {
                    e &&
                        l === S.h.PURCHASING &&
                        (d.current = g.Ay.getSingleRequirementProgress(i.$.GIFTING)?.current ?? null);
                }, [e, l]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (e && null != d.current && null != (null != t ? (0, G.aZ)(t, d.current) : null)) {
                            let e = d.current;
                            (0, f.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e("417867"),
                                    n.e("976389"),
                                    n.e("707319"),
                                    n.e("83703"),
                                ]).then(n.bind(n, 855210));
                                return (n) => (0, r.jsx)(t, { ...n, currentProgress: e, quantity: a });
                            });
                        }
                    }, [e, t, a]),
                    canShowGiftingBadgePostPurchase:
                        e && null != d.current && null != t && null != (0, G.aZ)(t, d.current),
                }
            );
        })();
    u.useEffect(() => {
        t && et && (0, l.o0)(i.$.GIFTING);
    }, [t, et]);
    let eu = (0, R.Vt)(B, t),
        [ei, el] = u.useState(!1),
        [es, ea] = u.useState(!1),
        [ec, ed] = u.useState(),
        eo = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    ea(!0),
                    (0, a.UN)(T, eu)
                        .then(() => {
                            (ea(!1), t?.(), el(!0));
                        })
                        .catch((e) => {
                            (ea(!1), ed(e), el(!0));
                        })
                );
            },
            [T, eu, ea, el, ed],
        ),
        ef = u.useRef(new Set());
    u.useEffect(() => {
        if (!z) return;
        let e = j.filter((e) => !ef.current.has(e));
        if (0 === e.length) return;
        let t = h.default.getCurrentUser();
        for (let n of e)
            (p.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: n }),
                ef.current.add(n));
    }, [j, z]);
    let eg = u.useMemo(
        () => ({
            isGift: t,
            isRecurringGift: O,
            setIsRecurringGift: b,
            hasAppliedRecurringGiftDefaults: D,
            setHasAppliedRecurringGiftDefaults: N,
            giftCode: eu,
            giftMessage: M,
            giftRecipient: T,
            setGiftRecipient: L,
            giftRecipientError: m,
            setGiftRecipientError: U,
            validatingGiftRecipient: q,
            setValidatingGiftRecipient: x,
            soundEffect: K,
            setSoundEffect: Q,
            emojiConfetti: Y,
            setEmojiConfetti: ee,
            customGiftMessage: V,
            setCustomGiftMessage: W,
            selectedGiftStyle: X,
            setSelectedGiftStyle: Z,
            sendGiftMessage: eo,
            hasSentMessage: ei,
            isSendingMessage: es,
            giftMessageError: ec,
            giftingOrigin: k,
            claimableRewards: $,
            selectedGiftingPromotionRewards: j,
            setSelectedGiftingPromotionRewards: H,
            additionalUserIds: y,
            openGiftingBadgePostPurchaseModal: en,
            canShowGiftingBadgePostPurchase: er,
        }),
        [t, O, D, eu, M, T, m, q, K, Y, V, X, eo, ei, es, ec, k, $, j, y, en, er],
    );
    return (0, r.jsx)(C.Provider, { value: eg, children: w });
}
let y = {
    isGift: !1,
    isRecurringGift: !1,
    setIsRecurringGift: P.tEg,
    hasAppliedRecurringGiftDefaults: !1,
    setHasAppliedRecurringGiftDefaults: P.tEg,
    setGiftRecipient: P.tEg,
    setGiftRecipientError: P.tEg,
    setValidatingGiftRecipient: P.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: P.tEg,
    giftCode: null,
    sendGiftMessage: P.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: P.tEg,
    openGiftingBadgePostPurchaseModal: P.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function B(e) {
    let { children: t } = e;
    return (0, r.jsx)(C.Provider, { value: y, children: t });
}
