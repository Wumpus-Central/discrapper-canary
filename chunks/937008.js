n.d(t, { Mq: () => k, Pv: () => M, dX: () => C });
var l = n(627968),
    r = n(64700),
    u = n(70283),
    i = n(682618),
    s = n(650170),
    a = n(242874),
    d = n(998370),
    c = n(380619),
    o = n(848149),
    f = n(287809),
    g = n(174459),
    S = n(786300),
    G = n(45938),
    E = n(652215),
    h = n(202541),
    p = n(375708);
let R = h.o2.STANDARD_BOX,
    v,
    [I, M, P] = (0, S.A)();
function C(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: S,
            giftStyle: h,
            giftingOrigin: M,
            children: P,
            additionalUserIds: C,
        } = e,
        _ = (0, s.t4)((e) => e.selectedSkuId),
        [k, A] = r.useState(n),
        [O, b] = r.useState(),
        [y, N] = r.useState(!1),
        T = (0, G.Ik)(k),
        w = v;
    T && (w = null != h ? h : R);
    let [B, L] = r.useState(w),
        D = (0, c.JW)(),
        J = null != D && D.length > 0,
        [U, m] = r.useState(),
        [x, F] = r.useState(
            t && (0, G.lo)(k) === G.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == S ? p.intl.string(p.t.ZkOo1U) : S,
        ),
        [X, j] = r.useState(void 0),
        [Z, $] = r.useState(void 0),
        { enabled: q } = d.J.useConfig({ location: "GiftContext" }),
        z = (0, o.J)();
    r.useEffect(() => {
        t && q && (0, i.o)(u.$.GIFTING);
    }, [t, q]);
    let H = (0, G.Vt)(_, t),
        [V, W] = r.useState(!1),
        [K, Q] = r.useState(!1),
        [Y, ee] = r.useState(),
        et = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Q(!0),
                    (0, a.UN)(k, H)
                        .then(() => {
                            Q(!1), t?.(), W(!0);
                        })
                        .catch((e) => {
                            Q(!1), ee(e), W(!0);
                        })
                );
            },
            [k, H, Q, W, ee],
        );
    return (
        r.useEffect(() => {
            if (J) {
                let e = f.default.getCurrentUser();
                g.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: U });
            }
        }, [U, J]),
        (0, l.jsx)(I.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: S,
                giftRecipient: k,
                setGiftRecipient: A,
                giftRecipientError: O,
                setGiftRecipientError: b,
                validatingGiftRecipient: y,
                setValidatingGiftRecipient: N,
                soundEffect: X,
                setSoundEffect: j,
                emojiConfetti: Z,
                setEmojiConfetti: $,
                customGiftMessage: x,
                setCustomGiftMessage: F,
                selectedGiftStyle: B,
                setSelectedGiftStyle: L,
                sendGiftMessage: et,
                hasSentMessage: V,
                isSendingMessage: K,
                giftMessageError: Y,
                giftingOrigin: M,
                claimableRewards: D,
                selectedGiftingPromotionReward: U,
                setSelectedGiftingPromotionReward: m,
                additionalUserIds: C,
                openGiftingBadgePostPurchaseModal: z,
            },
            children: P,
        })
    );
}
let _ = {
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
};
function k(e) {
    let { children: t } = e;
    return (0, l.jsx)(I.Provider, { value: _, children: t });
}
