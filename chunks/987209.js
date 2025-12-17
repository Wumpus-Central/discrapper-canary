n.d(t, {
    KB: () => y,
    b6: () => v,
    wD: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(597688),
    s = n(479446),
    l = n(717401),
    c = n(975104),
    u = n(669079),
    d = n(563132),
    f = n(981631),
    p = n(474936),
    _ = n(388032);
let m = p.Cj.STANDARD_BOX,
    h = void 0,
    [g, E, b] = (0, c.Z)();
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
        { selectedSkuId: y } = (0, d.JL)(),
        [O, v] = i.useState(n),
        [S, I] = i.useState(),
        [T, C] = i.useState(!1),
        A = (0, u.pO)(O),
        N = h;
    A && (N = null != f ? f : m);
    let [P, R] = i.useState(N),
        w = (0, l.hi)(),
        D = (0, l.yX)(),
        [x, L] = i.useState(),
        [j, M] = i.useState(
            t && (0, u.MY)(O) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c,
        ),
        [k, U] = i.useState(void 0),
        [G, Z] = i.useState(void 0),
        F = (0, u.E5)(y, t),
        [B, V] = i.useState(!1),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(),
        z = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Y(!0),
                    (0, s.YD)(O, F)
                        .then(() => {
                            Y(!1), null == t || t(), V(!0);
                        })
                        .catch((e) => {
                            Y(!1), K(e), V(!0);
                        })
                );
            },
            [O, F, Y, V, K],
        ),
        q = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: F,
            giftMessage: c,
            giftRecipient: O,
            setGiftRecipient: v,
            giftRecipientError: S,
            setGiftRecipientError: I,
            validatingGiftRecipient: T,
            setValidatingGiftRecipient: C,
            soundEffect: k,
            setSoundEffect: U,
            emojiConfetti: G,
            setEmojiConfetti: Z,
            customGiftMessage: j,
            setCustomGiftMessage: M,
            selectedGiftStyle: P,
            setSelectedGiftStyle: R,
            sendGiftMessage: z,
            hasSentMessage: B,
            isSendingMessage: H,
            giftMessageError: W,
            recommendedGiftSkuIds: q,
            giftingOrigin: p,
            claimableRewards: w,
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
        setGiftRecipient: f.dG4,
        setGiftRecipientError: f.dG4,
        setValidatingGiftRecipient: f.dG4,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: f.dG4,
        giftCode: null,
        sendGiftMessage: f.dG4,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        claimableVariants: void 0,
        setSelectedGiftingPromotionReward: f.dG4,
    },
    v = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(g.Provider, {
            value: O,
            children: t,
        });
    };
