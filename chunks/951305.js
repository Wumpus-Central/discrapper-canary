n.d(t, { dX: () => N, Pv: () => _, Mq: () => y });
var r = n(477900),
    l = n(582128),
    i = n(70283),
    a = n(682618),
    s = n(206441),
    o = n(242874),
    c = n(998370),
    u = n(580194),
    d = n(17928),
    m = n(192308),
    g = n(982240),
    x = n(566980),
    T = n(315693),
    I = n(287809),
    f = n(174459),
    h = n(786300),
    p = n(45938),
    E = n(652215),
    P = n(202541),
    j = n(375708);
let v = P.o2.STANDARD_BOX,
    A,
    [R, _, M] = (0, h.A)();
function N(e) {
    let {
            isGift: t = !1,
            giftRecipient: h,
            giftMessage: P,
            giftStyle: _,
            giftingOrigin: M,
            children: N,
            additionalUserIds: S,
        } = e,
        y = (0, s.t4)((e) => e.selectedSkuId),
        [C, L] = l.useState(h),
        [U, b] = l.useState(),
        [G, k] = l.useState(!1),
        O = (0, p.Ik)(C),
        w = A;
    O && (w = null != _ ? _ : v);
    let [D, F] = l.useState(w),
        [H, Z] = l.useState([]),
        B = (0, u.JW)(),
        V = null != B && B.length > 0,
        [W, J] = l.useState(
            t && (0, p.lo)(C) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == P ? j.intl.string(j.t.ZkOo1U) : P,
        ),
        [z, Y] = l.useState(void 0),
        [K, Q] = l.useState(void 0),
        { enabled: q } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: X, canShowGiftingBadgePostPurchase: $ } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, d.bG)([g.Ay], () => g.Ay.getBadgeById(i.$.GIFTING)?.tiers),
                { purchaseState: a, quantity: o } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                u = l.useRef(null);
            return (
                l.useEffect(() => {
                    e &&
                        a === x.h.PURCHASING &&
                        (u.current = g.Ay.getSingleRequirementProgress(i.$.GIFTING)?.current ?? null);
                }, [e, a]),
                {
                    openGiftingBadgePostPurchaseModal: l.useCallback(() => {
                        if (e && null != u.current && null != (null != t ? (0, T.aZ)(t, u.current) : null)) {
                            let e = u.current;
                            (0, m.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e("556298"),
                                    n.e("976389"),
                                    n.e("707319"),
                                    n.e("83703"),
                                ]).then(n.bind(n, 855210));
                                return (n) => (0, r.jsx)(t, { ...n, currentProgress: e, quantity: o });
                            });
                        }
                    }, [e, t, o]),
                    canShowGiftingBadgePostPurchase:
                        e && null != u.current && null != t && null != (0, T.aZ)(t, u.current),
                }
            );
        })();
    l.useEffect(() => {
        t && q && (0, a.o0)(i.$.GIFTING);
    }, [t, q]);
    let ee = (0, p.Vt)(y, t),
        [et, en] = l.useState(!1),
        [er, el] = l.useState(!1),
        [ei, ea] = l.useState(),
        es = l.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    el(!0),
                    (0, o.UN)(C, ee)
                        .then(() => {
                            el(!1), t?.(), en(!0);
                        })
                        .catch((e) => {
                            el(!1), ea(e), en(!0);
                        })
                );
            },
            [C, ee, el, en, ea],
        ),
        eo = l.useRef(new Set());
    return (
        l.useEffect(() => {
            if (!V) return;
            let e = H.filter((e) => !eo.current.has(e));
            if (0 === e.length) return;
            let t = I.default.getCurrentUser();
            for (let n of e)
                f.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: n }),
                    eo.current.add(n);
        }, [H, V]),
        (0, r.jsx)(R.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: P,
                giftRecipient: C,
                setGiftRecipient: L,
                giftRecipientError: U,
                setGiftRecipientError: b,
                validatingGiftRecipient: G,
                setValidatingGiftRecipient: k,
                soundEffect: z,
                setSoundEffect: Y,
                emojiConfetti: K,
                setEmojiConfetti: Q,
                customGiftMessage: W,
                setCustomGiftMessage: J,
                selectedGiftStyle: D,
                setSelectedGiftStyle: F,
                sendGiftMessage: es,
                hasSentMessage: et,
                isSendingMessage: er,
                giftMessageError: ei,
                giftingOrigin: M,
                claimableRewards: B,
                selectedGiftingPromotionRewards: H,
                setSelectedGiftingPromotionRewards: Z,
                additionalUserIds: S,
                openGiftingBadgePostPurchaseModal: X,
                canShowGiftingBadgePostPurchase: $,
            },
            children: N,
        })
    );
}
let S = {
    isGift: !1,
    setGiftRecipient: E.tEg,
    setGiftRecipientError: E.tEg,
    setValidatingGiftRecipient: E.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: E.tEg,
    giftCode: null,
    sendGiftMessage: E.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: E.tEg,
    openGiftingBadgePostPurchaseModal: E.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)(R.Provider, { value: S, children: t });
}
