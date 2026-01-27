n.d(t, {
    Mq: () => v,
    Pv: () => E,
    dX: () => b,
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
    [g, E, y] = (0, c.A)();

function b(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: c,
            giftStyle: f,
            giftingOrigin: p,
            children: E,
            additionalUserIds: y,
        } = e,
        { selectedSkuId: b } = (0, d.P5)(),
        [O, v] = i.useState(n),
        [A, I] = i.useState(),
        [S, T] = i.useState(!1),
        C = (0, u.Ik)(O),
        N = m;
    C && (N = null != f ? f : h);
    let [w, R] = i.useState(N),
        P = (0, l.JW)(),
        [D, x] = i.useState(),
        [L, j] = i.useState(
            t && (0, u.lo)(O) === u.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c,
        ),
        [M, k] = i.useState(void 0),
        [U, G] = i.useState(void 0),
        V = (0, u.Vt)(b, t),
        [F, B] = i.useState(!1),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(),
        z = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Y(!0),
                    (0, o.UN)(O, V)
                        .then(() => {
                            Y(!1), null == t || t(), B(!0);
                        })
                        .catch((e) => {
                            Y(!1), K(e), B(!0);
                        })
                );
            },
            [O, V, Y, B, K],
        ),
        q = (0, a.yK)([s.A], () => s.A.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: V,
            giftMessage: c,
            giftRecipient: O,
            setGiftRecipient: v,
            giftRecipientError: A,
            setGiftRecipientError: I,
            validatingGiftRecipient: S,
            setValidatingGiftRecipient: T,
            soundEffect: M,
            setSoundEffect: k,
            emojiConfetti: U,
            setEmojiConfetti: G,
            customGiftMessage: L,
            setCustomGiftMessage: j,
            selectedGiftStyle: w,
            setSelectedGiftStyle: R,
            sendGiftMessage: z,
            hasSentMessage: F,
            isSendingMessage: H,
            giftMessageError: W,
            recommendedGiftSkuIds: q,
            giftingOrigin: p,
            claimableRewards: P,
            selectedGiftingPromotionReward: D,
            setSelectedGiftingPromotionReward: x,
            additionalUserIds: y,
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
        setSelectedGiftingPromotionReward: f.tEg,
    },
    v = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(g.Provider, {
            value: O,
            children: t,
        });
    };
