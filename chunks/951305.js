n.d(t, { dX: () => N, Pv: () => R, Mq: () => M });
var r = n(627968),
    i = n(64700),
    l = n(70283),
    s = n(682618),
    a = n(316915),
    o = n(242874),
    c = n(998370),
    u = n(380619),
    d = n(17928),
    m = n(192308),
    g = n(982240),
    x = n(566980),
    T = n(315693),
    f = n(287809),
    I = n(174459),
    h = n(786300),
    p = n(45938),
    E = n(652215),
    A = n(202541),
    P = n(375708);
let j = A.o2.STANDARD_BOX,
    v,
    [_, R, y] = (0, h.A)();
function N(e) {
    let {
            isGift: t = !1,
            giftRecipient: h,
            giftMessage: A,
            giftStyle: R,
            giftingOrigin: y,
            children: N,
            additionalUserIds: S,
        } = e,
        M = (0, a.t4)((e) => e.selectedSkuId),
        [C, U] = i.useState(h),
        [L, b] = i.useState(),
        [G, O] = i.useState(!1),
        w = (0, p.Ik)(C),
        k = v;
    w && (k = null != R ? R : j);
    let [D, F] = i.useState(k),
        H = (0, u.JW)(),
        Z = null != H && H.length > 0,
        [B, V] = i.useState(),
        [J, W] = i.useState(
            t && (0, p.lo)(C) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == A ? P.intl.string(P.t.ZkOo1U) : A,
        ),
        [z, Y] = i.useState(void 0),
        [K, Q] = i.useState(void 0),
        { enabled: q } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: $, canShowGiftingBadgePostPurchase: X } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, d.bG)([g.Ay], () => g.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                s = (0, a.t4)((e) => e.purchaseState),
                o = i.useRef(null);
            return (
                i.useEffect(() => {
                    e &&
                        s === x.h.PURCHASING &&
                        (o.current = g.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, s]),
                {
                    openGiftingBadgePostPurchaseModal: i.useCallback(() => {
                        if (e && null != o.current && null != (null != t ? (0, T.aZ)(t, o.current) : null)) {
                            let e = o.current;
                            (0, m.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e("60856"),
                                    n.e("13396"),
                                    n.e("7319"),
                                    n.e("83703"),
                                ]).then(n.bind(n, 855210));
                                return (n) => (0, r.jsx)(t, { ...n, currentProgress: e });
                            });
                        }
                    }, [e, t]),
                    canShowGiftingBadgePostPurchase:
                        e && null != o.current && null != t && null != (0, T.aZ)(t, o.current),
                }
            );
        })();
    i.useEffect(() => {
        t && q && (0, s.o0)(l.$.GIFTING);
    }, [t, q]);
    let ee = (0, p.Vt)(M, t),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [el, es] = i.useState(),
        ea = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    ei(!0),
                    (0, o.UN)(C, ee)
                        .then(() => {
                            ei(!1), t?.(), en(!0);
                        })
                        .catch((e) => {
                            ei(!1), es(e), en(!0);
                        })
                );
            },
            [C, ee, ei, en, es],
        );
    return (
        i.useEffect(() => {
            if (Z) {
                let e = f.default.getCurrentUser();
                I.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: B });
            }
        }, [B, Z]),
        (0, r.jsx)(_.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: A,
                giftRecipient: C,
                setGiftRecipient: U,
                giftRecipientError: L,
                setGiftRecipientError: b,
                validatingGiftRecipient: G,
                setValidatingGiftRecipient: O,
                soundEffect: z,
                setSoundEffect: Y,
                emojiConfetti: K,
                setEmojiConfetti: Q,
                customGiftMessage: J,
                setCustomGiftMessage: W,
                selectedGiftStyle: D,
                setSelectedGiftStyle: F,
                sendGiftMessage: ea,
                hasSentMessage: et,
                isSendingMessage: er,
                giftMessageError: el,
                giftingOrigin: y,
                claimableRewards: H,
                selectedGiftingPromotionReward: B,
                setSelectedGiftingPromotionReward: V,
                additionalUserIds: S,
                openGiftingBadgePostPurchaseModal: $,
                canShowGiftingBadgePostPurchase: X,
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
    setSelectedGiftingPromotionReward: E.tEg,
    openGiftingBadgePostPurchaseModal: E.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function M(e) {
    let { children: t } = e;
    return (0, r.jsx)(_.Provider, { value: S, children: t });
}
