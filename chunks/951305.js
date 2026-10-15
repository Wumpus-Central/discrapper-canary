s.d(t, { dX: () => L, Pv: () => P, Mq: () => y });
var l = s(477900),
    i = s(582128),
    a = s(70283),
    r = s(682618),
    n = s(123816),
    u = s(242874),
    c = s(998370),
    d = s(810498),
    o = s(17928),
    g = s(192308),
    f = s(982240),
    h = s(566980),
    m = s(315693),
    E = s(287809),
    S = s(174459),
    R = s(786300),
    p = s(45938),
    x = s(652215),
    v = s(202541),
    A = s(105292);
let I = v.o2.STANDARD_BOX,
    N,
    [j, P, G] = (0, R.A)();
function L(e) {
    let {
            isGift: t = !1,
            giftRecipient: R,
            giftMessage: v,
            giftStyle: P,
            giftingOrigin: G,
            children: L,
            additionalUserIds: M,
        } = e,
        y = (0, n.t4)((e) => e.selectedSkuId),
        [C, _] = i.useState(!1),
        [w, T] = i.useState(!1),
        [O, b] = i.useState(R),
        [k, F] = i.useState(),
        [D, B] = i.useState(!1),
        U = (0, p.Ik)(O),
        Z = N;
    U && (Z = null != P ? P : I);
    let [H, z] = i.useState(Z),
        [q, X] = i.useState([]),
        J = (0, d.JW)(),
        V = null != J && J.length > 0,
        [W, $] = i.useState(
            t && (0, p.lo)(O) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == v ? A.intl.string(A.t.ZkOo1U) : v,
        ),
        [Q, Y] = i.useState(void 0),
        [K, ee] = i.useState(void 0),
        { enabled: et } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: es, canShowGiftingBadgePostPurchase: el } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([f.Ay], () => f.Ay.getBadgeById(a.$.GIFTING)?.tiers),
                { purchaseState: r, quantity: u } = (0, n.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                d = i.useRef(null);
            return (
                i.useEffect(() => {
                    e &&
                        r === h.h.PURCHASING &&
                        (d.current = f.Ay.getSingleRequirementProgress(a.$.GIFTING)?.current ?? null);
                }, [e, r]),
                {
                    openGiftingBadgePostPurchaseModal: i.useCallback(() => {
                        if (e && null != d.current && null != (null != t ? (0, m.aZ)(t, d.current) : null)) {
                            let e = d.current;
                            (0, g.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    s.e("417867"),
                                    s.e("976389"),
                                    s.e("707319"),
                                    s.e("83703"),
                                ]).then(s.bind(s, 855210));
                                return (s) => (0, l.jsx)(t, { ...s, currentProgress: e, quantity: u });
                            });
                        }
                    }, [e, t, u]),
                    canShowGiftingBadgePostPurchase:
                        e && null != d.current && null != t && null != (0, m.aZ)(t, d.current),
                }
            );
        })();
    i.useEffect(() => {
        t && et && (0, r.o0)(a.$.GIFTING);
    }, [t, et]);
    let ei = (0, p.Vt)(y, t),
        [ea, er] = i.useState(!1),
        [en, eu] = i.useState(!1),
        [ec, ed] = i.useState(),
        eo = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    eu(!0),
                    (0, u.UN)(O, ei)
                        .then(() => {
                            (eu(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (eu(!1), ed(e), er(!0));
                        })
                );
            },
            [O, ei, eu, er, ed],
        ),
        eg = i.useRef(new Set());
    i.useEffect(() => {
        if (!V) return;
        let e = q.filter((e) => !eg.current.has(e));
        if (0 === e.length) return;
        let t = E.default.getCurrentUser();
        for (let s of e)
            (S.default.track(x.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: s }),
                eg.current.add(s));
    }, [q, V]);
    let ef = i.useMemo(
        () => ({
            isGift: t,
            isRecurringGift: C,
            setIsRecurringGift: _,
            hasAppliedRecurringGiftDefaultPlan: w,
            setHasAppliedRecurringGiftDefaultPlan: T,
            giftCode: ei,
            giftMessage: v,
            giftRecipient: O,
            setGiftRecipient: b,
            giftRecipientError: k,
            setGiftRecipientError: F,
            validatingGiftRecipient: D,
            setValidatingGiftRecipient: B,
            soundEffect: Q,
            setSoundEffect: Y,
            emojiConfetti: K,
            setEmojiConfetti: ee,
            customGiftMessage: W,
            setCustomGiftMessage: $,
            selectedGiftStyle: H,
            setSelectedGiftStyle: z,
            sendGiftMessage: eo,
            hasSentMessage: ea,
            isSendingMessage: en,
            giftMessageError: ec,
            giftingOrigin: G,
            claimableRewards: J,
            selectedGiftingPromotionRewards: q,
            setSelectedGiftingPromotionRewards: X,
            additionalUserIds: M,
            openGiftingBadgePostPurchaseModal: es,
            canShowGiftingBadgePostPurchase: el,
        }),
        [t, C, w, ei, v, O, k, D, Q, K, W, H, eo, ea, en, ec, G, J, q, M, es, el],
    );
    return (0, l.jsx)(j.Provider, { value: ef, children: L });
}
let M = {
    isGift: !1,
    isRecurringGift: !1,
    setIsRecurringGift: x.tEg,
    hasAppliedRecurringGiftDefaultPlan: !1,
    setHasAppliedRecurringGiftDefaultPlan: x.tEg,
    setGiftRecipient: x.tEg,
    setGiftRecipientError: x.tEg,
    setValidatingGiftRecipient: x.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: x.tEg,
    giftCode: null,
    sendGiftMessage: x.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: x.tEg,
    openGiftingBadgePostPurchaseModal: x.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function y(e) {
    let { children: t } = e;
    return (0, l.jsx)(j.Provider, { value: M, children: t });
}
