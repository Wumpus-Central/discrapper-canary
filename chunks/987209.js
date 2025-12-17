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
    let { isGift: t = !1, giftRecipient: n, giftMessage: c, giftStyle: f, giftingOrigin: p, children: E } = e,
        { selectedSkuId: b } = (0, d.JL)(),
        [y, O] = i.useState(n),
        [v, S] = i.useState(),
        [I, T] = i.useState(!1),
        C = (0, u.pO)(y),
        A = h;
    C && (A = null != f ? f : m);
    let [N, P] = i.useState(A),
        R = (0, l.hi)(),
        w = (0, l.yX)(),
        [D, x] = i.useState(),
        [L, j] = i.useState(
            t && (0, u.MY)(y) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c,
        ),
        [M, k] = i.useState(void 0),
        [U, G] = i.useState(void 0),
        Z = (0, u.E5)(b, t),
        [F, B] = i.useState(!1),
        [V, H] = i.useState(!1),
        [Y, W] = i.useState(),
        K = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    H(!0),
                    (0, s.YD)(y, Z)
                        .then(() => {
                            H(!1), null == t || t(), B(!0);
                        })
                        .catch((e) => {
                            H(!1), W(e), B(!0);
                        })
                );
            },
            [y, Z, H, B, W],
        ),
        z = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: Z,
            giftMessage: c,
            giftRecipient: y,
            setGiftRecipient: O,
            giftRecipientError: v,
            setGiftRecipientError: S,
            validatingGiftRecipient: I,
            setValidatingGiftRecipient: T,
            soundEffect: M,
            setSoundEffect: k,
            emojiConfetti: U,
            setEmojiConfetti: G,
            customGiftMessage: L,
            setCustomGiftMessage: j,
            selectedGiftStyle: N,
            setSelectedGiftStyle: P,
            sendGiftMessage: K,
            hasSentMessage: F,
            isSendingMessage: V,
            giftMessageError: Y,
            recommendedGiftSkuIds: z,
            giftingOrigin: p,
            claimableRewards: R,
            claimableVariants: w,
            selectedGiftingPromotionReward: D,
            setSelectedGiftingPromotionReward: x,
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
