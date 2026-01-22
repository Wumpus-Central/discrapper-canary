n.d(t, {
    Mq: () => A,
    Pv: () => E,
    dX: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(590180),
    o = n(242874),
    l = n(810498),
    c = n(786300),
    u = n(45938),
    d = n(156312),
    f = n(652215),
    p = n(788868),
    _ = n(985018);
let h = p.o2.STANDARD_BOX,
    m,
    [g, E, b] = (0, c.A)();
function y(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: c,
            giftStyle: f,
            giftingOrigin: p,
            children: E,
            additionalUserIds: b,
        } = e,
        { selectedSkuId: y } = (0, d.P5)(),
        [O, A] = i.useState(n),
        [v, S] = i.useState(),
        [I, T] = i.useState(!1),
        C = (0, u.Ik)(O),
        N = m;
    C && (N = null != f ? f : h);
    let [R, w] = i.useState(N),
        P = (0, l.R_)(),
        D = (0, l.V$)(),
        [x, L] = i.useState(),
        [j, M] = i.useState(
            t && (0, u.lo)(O) === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c,
        ),
        [k, U] = i.useState(void 0),
        [G, V] = i.useState(void 0),
        F = (0, u.Vt)(y, t),
        [B, H] = i.useState(!1),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(),
        q = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    W(!0),
                    (0, o.UN)(O, F)
                        .then(() => {
                            W(!1), null == t || t(), H(!0);
                        })
                        .catch((e) => {
                            W(!1), z(e), H(!0);
                        })
                );
            },
            [O, F, W, H, z],
        ),
        X = (0, a.yK)([s.A], () => s.A.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: F,
            giftMessage: c,
            giftRecipient: O,
            setGiftRecipient: A,
            giftRecipientError: v,
            setGiftRecipientError: S,
            validatingGiftRecipient: I,
            setValidatingGiftRecipient: T,
            soundEffect: k,
            setSoundEffect: U,
            emojiConfetti: G,
            setEmojiConfetti: V,
            customGiftMessage: j,
            setCustomGiftMessage: M,
            selectedGiftStyle: R,
            setSelectedGiftStyle: w,
            sendGiftMessage: q,
            hasSentMessage: B,
            isSendingMessage: Y,
            giftMessageError: K,
            recommendedGiftSkuIds: X,
            giftingOrigin: p,
            claimableRewards: P,
            claimableVariants: D,
            selectedGiftingPromotionReward: x,
            setSelectedGiftingPromotionReward: L,
            additionalUserIds: b,
        },
        children: E,
    });
}
let O = {
        isGift: !1,
        setGiftRecipient: f.tEg,
        setGiftRecipientError: f.tEg,
        setValidatingGiftRecipient: f.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: f.tEg,
        giftCode: null,
        sendGiftMessage: f.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        claimableVariants: void 0,
        setSelectedGiftingPromotionReward: f.tEg,
    },
    A = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(g.Provider, {
            value: O,
            children: t,
        });
    };
