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
    _ = n(474936),
    p = n(388032);
let h = _.Cj.STANDARD_BOX,
    m = void 0,
    [g, E, b] = (0, c.Z)();
function y(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: c, giftStyle: f, giftingOrigin: _, children: E } = e,
        { selectedSkuId: b } = (0, d.JL)(),
        [y, O] = i.useState(n),
        [v, I] = i.useState(),
        [T, S] = i.useState(!1),
        A = (0, u.pO)(y),
        C = m;
    A && (C = null != f ? f : h);
    let [N, R] = i.useState(C),
        P = (0, l.iE)(),
        D = (0, l.yX)(),
        [w, L] = i.useState(),
        [x, M] = i.useState(
            t && (0, u.MY)(y) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? p.intl.string(p.t.ZkOo1U) : c,
        ),
        [k, j] = i.useState(void 0),
        [U, G] = i.useState(void 0),
        B = (0, u.E5)(b, t),
        [Z, F] = i.useState(!1),
        [V, H] = i.useState(!1),
        [Y, W] = i.useState(),
        K = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    H(!0),
                    (0, s.YD)(y, B)
                        .then(() => {
                            H(!1), null == t || t(), F(!0);
                        })
                        .catch((e) => {
                            H(!1), W(e), F(!0);
                        })
                );
            },
            [y, B, H, F, W],
        ),
        z = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: B,
            giftMessage: c,
            giftRecipient: y,
            setGiftRecipient: O,
            giftRecipientError: v,
            setGiftRecipientError: I,
            validatingGiftRecipient: T,
            setValidatingGiftRecipient: S,
            soundEffect: k,
            setSoundEffect: j,
            emojiConfetti: U,
            setEmojiConfetti: G,
            customGiftMessage: x,
            setCustomGiftMessage: M,
            selectedGiftStyle: N,
            setSelectedGiftStyle: R,
            sendGiftMessage: K,
            hasSentMessage: Z,
            isSendingMessage: V,
            giftMessageError: Y,
            recommendedGiftSkuIds: z,
            giftingOrigin: _,
            claimableRewards: P,
            claimableVariants: D,
            selectedGiftingPromotionReward: w,
            setSelectedGiftingPromotionReward: L,
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
