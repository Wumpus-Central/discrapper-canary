n.d(t, { dX: () => B, Pv: () => k, Mq: () => b });
var l = n(627968),
    u = n(64700),
    r = n(70283),
    i = n(682618),
    s = n(6938),
    a = n(242874),
    c = n(998370),
    d = n(380619),
    o = n(17928),
    g = n(192308),
    f = n(982240),
    S = n(566980),
    G = n(315693),
    h = n(287809),
    E = n(174459),
    P = n(786300),
    p = n(45938),
    M = n(652215),
    R = n(202541),
    I = n(375708);
let v = R.o2.STANDARD_BOX,
    C,
    [_, k, A] = (0, P.A)();
function B(e) {
    let {
            isGift: t = !1,
            giftRecipient: P,
            giftMessage: R,
            giftStyle: k,
            giftingOrigin: A,
            children: B,
            additionalUserIds: O,
        } = e,
        b = (0, s.t4)((e) => e.selectedSkuId),
        [w, y] = u.useState(P),
        [N, T] = u.useState(),
        [L, D] = u.useState(!1),
        U = (0, p.Ik)(w),
        m = C;
    U && (m = null != k ? k : v);
    let [x, F] = u.useState(m),
        J = (0, d.JW)(),
        X = null != J && J.length > 0,
        [Z, j] = u.useState(),
        [$, q] = u.useState(
            t && (0, p.lo)(w) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == R ? I.intl.string(I.t.ZkOo1U) : R,
        ),
        [z, H] = u.useState(void 0),
        [V, W] = u.useState(void 0),
        { enabled: K } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: Q, canShowGiftingBadgePostPurchase: Y } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([f.Ay], () => f.Ay.getBadgeById(r.$.GIFTING)?.tiers),
                i = (0, s.t4)((e) => e.purchaseState),
                a = u.useRef(null);
            return (
                u.useEffect(() => {
                    e &&
                        i === S.h.PURCHASING &&
                        (a.current = f.Ay.getSingleRequirementProgress(r.$.GIFTING)?.current ?? null);
                }, [e, i]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (e && null != a.current && null != (null != t ? (0, G.aZ)(t, a.current) : null)) {
                            let e = a.current;
                            (0, g.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e("60856"),
                                    n.e("13396"),
                                    n.e("7319"),
                                    n.e("83703"),
                                ]).then(n.bind(n, 855210));
                                return (n) => (0, l.jsx)(t, { ...n, currentProgress: e });
                            });
                        }
                    }, [e, t]),
                    canShowGiftingBadgePostPurchase:
                        e && null != a.current && null != t && null != (0, G.aZ)(t, a.current),
                }
            );
        })();
    u.useEffect(() => {
        t && K && (0, i.o)(r.$.GIFTING);
    }, [t, K]);
    let ee = (0, p.Vt)(b, t),
        [et, en] = u.useState(!1),
        [el, eu] = u.useState(!1),
        [er, ei] = u.useState(),
        es = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    eu(!0),
                    (0, a.UN)(w, ee)
                        .then(() => {
                            eu(!1), t?.(), en(!0);
                        })
                        .catch((e) => {
                            eu(!1), ei(e), en(!0);
                        })
                );
            },
            [w, ee, eu, en, ei],
        );
    return (
        u.useEffect(() => {
            if (X) {
                let e = h.default.getCurrentUser();
                E.default.track(M.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: Z });
            }
        }, [Z, X]),
        (0, l.jsx)(_.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: R,
                giftRecipient: w,
                setGiftRecipient: y,
                giftRecipientError: N,
                setGiftRecipientError: T,
                validatingGiftRecipient: L,
                setValidatingGiftRecipient: D,
                soundEffect: z,
                setSoundEffect: H,
                emojiConfetti: V,
                setEmojiConfetti: W,
                customGiftMessage: $,
                setCustomGiftMessage: q,
                selectedGiftStyle: x,
                setSelectedGiftStyle: F,
                sendGiftMessage: es,
                hasSentMessage: et,
                isSendingMessage: el,
                giftMessageError: er,
                giftingOrigin: A,
                claimableRewards: J,
                selectedGiftingPromotionReward: Z,
                setSelectedGiftingPromotionReward: j,
                additionalUserIds: O,
                openGiftingBadgePostPurchaseModal: Q,
                canShowGiftingBadgePostPurchase: Y,
            },
            children: B,
        })
    );
}
let O = {
    isGift: !1,
    setGiftRecipient: M.tEg,
    setGiftRecipientError: M.tEg,
    setValidatingGiftRecipient: M.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: M.tEg,
    giftCode: null,
    sendGiftMessage: M.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    setSelectedGiftingPromotionReward: M.tEg,
    openGiftingBadgePostPurchaseModal: M.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function b(e) {
    let { children: t } = e;
    return (0, l.jsx)(_.Provider, { value: O, children: t });
}
