r.d(t, { dX: () => S, Pv: () => T, Mq: () => M });
var i = r(477900),
    n = r(582128),
    s = r(70283),
    l = r(682618),
    a = r(263532),
    u = r(242874),
    o = r(998370),
    c = r(810498),
    d = r(17928),
    m = r(192308),
    h = r(982240),
    f = r(566980),
    x = r(315693),
    p = r(287809),
    g = r(174459),
    A = r(786300),
    j = r(45938),
    E = r(652215),
    v = r(202541),
    N = r(375708);
let R = v.o2.STANDARD_BOX,
    C,
    [P, T, I] = (0, A.A)();
function S(e) {
    let {
            isGift: t = !1,
            giftRecipient: A,
            giftMessage: v,
            giftStyle: T,
            giftingOrigin: I,
            children: S,
            additionalUserIds: y,
        } = e,
        M = (0, a.t4)((e) => e.selectedSkuId),
        [_, b] = n.useState(A),
        [G, O] = n.useState(),
        [w, k] = n.useState(!1),
        L = (0, j.Ik)(_),
        D = C;
    L && (D = null != T ? T : R);
    let [B, U] = n.useState(D),
        [F, H] = n.useState([]),
        z = (0, c.JW)(),
        Z = null != z && z.length > 0,
        [V, Y] = n.useState(
            t && (0, j.lo)(_) === j.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == v ? N.intl.string(N.t.ZkOo1U) : v,
        ),
        [q, W] = n.useState(void 0),
        [K, X] = n.useState(void 0),
        { enabled: $ } = o.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: J, canShowGiftingBadgePostPurchase: Q } = (function () {
            let { enabled: e } = o.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, d.bG)([h.Ay], () => h.Ay.getBadgeById(s.$.GIFTING)?.tiers),
                { purchaseState: l, quantity: u } = (0, a.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                c = n.useRef(null);
            return (
                n.useEffect(() => {
                    e &&
                        l === f.h.PURCHASING &&
                        (c.current = h.Ay.getSingleRequirementProgress(s.$.GIFTING)?.current ?? null);
                }, [e, l]),
                {
                    openGiftingBadgePostPurchaseModal: n.useCallback(() => {
                        if (e && null != c.current && null != (null != t ? (0, x.aZ)(t, c.current) : null)) {
                            let e = c.current;
                            (0, m.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    r.e("417867"),
                                    r.e("976389"),
                                    r.e("707319"),
                                    r.e("83703"),
                                ]).then(r.bind(r, 855210));
                                return (r) => (0, i.jsx)(t, { ...r, currentProgress: e, quantity: u });
                            });
                        }
                    }, [e, t, u]),
                    canShowGiftingBadgePostPurchase:
                        e && null != c.current && null != t && null != (0, x.aZ)(t, c.current),
                }
            );
        })();
    n.useEffect(() => {
        t && $ && (0, l.o0)(s.$.GIFTING);
    }, [t, $]);
    let ee = (0, j.Vt)(M, t),
        [et, er] = n.useState(!1),
        [ei, en] = n.useState(!1),
        [es, el] = n.useState(),
        ea = n.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    en(!0),
                    (0, u.UN)(_, ee)
                        .then(() => {
                            (en(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (en(!1), el(e), er(!0));
                        })
                );
            },
            [_, ee, en, er, el],
        ),
        eu = n.useRef(new Set());
    return (
        n.useEffect(() => {
            if (!Z) return;
            let e = F.filter((e) => !eu.current.has(e));
            if (0 === e.length) return;
            let t = p.default.getCurrentUser();
            for (let r of e)
                (g.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: r }),
                    eu.current.add(r));
        }, [F, Z]),
        (0, i.jsx)(P.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: v,
                giftRecipient: _,
                setGiftRecipient: b,
                giftRecipientError: G,
                setGiftRecipientError: O,
                validatingGiftRecipient: w,
                setValidatingGiftRecipient: k,
                soundEffect: q,
                setSoundEffect: W,
                emojiConfetti: K,
                setEmojiConfetti: X,
                customGiftMessage: V,
                setCustomGiftMessage: Y,
                selectedGiftStyle: B,
                setSelectedGiftStyle: U,
                sendGiftMessage: ea,
                hasSentMessage: et,
                isSendingMessage: ei,
                giftMessageError: es,
                giftingOrigin: I,
                claimableRewards: z,
                selectedGiftingPromotionRewards: F,
                setSelectedGiftingPromotionRewards: H,
                additionalUserIds: y,
                openGiftingBadgePostPurchaseModal: J,
                canShowGiftingBadgePostPurchase: Q,
            },
            children: S,
        })
    );
}
let y = {
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
function M(e) {
    let { children: t } = e;
    return (0, i.jsx)(P.Provider, { value: y, children: t });
}
