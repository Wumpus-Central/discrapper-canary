s.d(t, { dX: () => L, Pv: () => P, Mq: () => C });
var l = s(477900),
    a = s(582128),
    n = s(70283),
    r = s(682618),
    i = s(263532),
    u = s(242874),
    d = s(998370),
    c = s(810498),
    o = s(17928),
    g = s(192308),
    h = s(982240),
    f = s(566980),
    m = s(315693),
    E = s(287809),
    S = s(174459),
    x = s(786300),
    v = s(45938),
    R = s(652215),
    p = s(202541),
    A = s(375708);
let I = p.o2.STANDARD_BOX,
    N,
    [j, P, G] = (0, x.A)();
function L(e) {
    let {
            isGift: t = !1,
            giftRecipient: x,
            giftMessage: p,
            giftStyle: P,
            giftingOrigin: G,
            children: L,
            additionalUserIds: y,
        } = e,
        C = (0, i.t4)((e) => e.selectedSkuId),
        [M, _] = a.useState(x),
        [w, T] = a.useState(),
        [O, b] = a.useState(!1),
        k = (0, v.Ik)(M),
        F = N;
    k && (F = null != P ? P : I);
    let [B, D] = a.useState(F),
        [U, Z] = a.useState([]),
        H = (0, c.JW)(),
        z = null != H && H.length > 0,
        [q, X] = a.useState(
            t && (0, v.lo)(M) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == p ? A.intl.string(A.t.ZkOo1U) : p,
        ),
        [J, V] = a.useState(void 0),
        [W, $] = a.useState(void 0),
        { enabled: Q } = d.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: Y, canShowGiftingBadgePostPurchase: K } = (function () {
            let { enabled: e } = d.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([h.Ay], () => h.Ay.getBadgeById(n.$.GIFTING)?.tiers),
                { purchaseState: r, quantity: u } = (0, i.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                c = a.useRef(null);
            return (
                a.useEffect(() => {
                    e &&
                        r === f.h.PURCHASING &&
                        (c.current = h.Ay.getSingleRequirementProgress(n.$.GIFTING)?.current ?? null);
                }, [e, r]),
                {
                    openGiftingBadgePostPurchaseModal: a.useCallback(() => {
                        if (e && null != c.current && null != (null != t ? (0, m.aZ)(t, c.current) : null)) {
                            let e = c.current;
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
                        e && null != c.current && null != t && null != (0, m.aZ)(t, c.current),
                }
            );
        })();
    a.useEffect(() => {
        t && Q && (0, r.o0)(n.$.GIFTING);
    }, [t, Q]);
    let ee = (0, v.Vt)(C, t),
        [et, es] = a.useState(!1),
        [el, ea] = a.useState(!1),
        [en, er] = a.useState(),
        ei = a.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    ea(!0),
                    (0, u.UN)(M, ee)
                        .then(() => {
                            (ea(!1), t?.(), es(!0));
                        })
                        .catch((e) => {
                            (ea(!1), er(e), es(!0));
                        })
                );
            },
            [M, ee, ea, es, er],
        ),
        eu = a.useRef(new Set());
    return (
        a.useEffect(() => {
            if (!z) return;
            let e = U.filter((e) => !eu.current.has(e));
            if (0 === e.length) return;
            let t = E.default.getCurrentUser();
            for (let s of e)
                (S.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: s }),
                    eu.current.add(s));
        }, [U, z]),
        (0, l.jsx)(j.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: p,
                giftRecipient: M,
                setGiftRecipient: _,
                giftRecipientError: w,
                setGiftRecipientError: T,
                validatingGiftRecipient: O,
                setValidatingGiftRecipient: b,
                soundEffect: J,
                setSoundEffect: V,
                emojiConfetti: W,
                setEmojiConfetti: $,
                customGiftMessage: q,
                setCustomGiftMessage: X,
                selectedGiftStyle: B,
                setSelectedGiftStyle: D,
                sendGiftMessage: ei,
                hasSentMessage: et,
                isSendingMessage: el,
                giftMessageError: en,
                giftingOrigin: G,
                claimableRewards: H,
                selectedGiftingPromotionRewards: U,
                setSelectedGiftingPromotionRewards: Z,
                additionalUserIds: y,
                openGiftingBadgePostPurchaseModal: Y,
                canShowGiftingBadgePostPurchase: K,
            },
            children: L,
        })
    );
}
let y = {
    isGift: !1,
    setGiftRecipient: R.tEg,
    setGiftRecipientError: R.tEg,
    setValidatingGiftRecipient: R.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: R.tEg,
    giftCode: null,
    sendGiftMessage: R.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: R.tEg,
    openGiftingBadgePostPurchaseModal: R.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function C(e) {
    let { children: t } = e;
    return (0, l.jsx)(j.Provider, { value: y, children: t });
}
