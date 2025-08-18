n.d(t, {
    KB: () => y,
    b6: () => v,
    wD: () => E,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
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
        N = m;
    A && (N = null != f ? f : h);
    let [C, R] = i.useState(N),
        P = (0, l.iE)(),
        [w, D] = i.useState(),
        [L, x] = i.useState(
            t && (0, u.MY)(y) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? p.intl.string(p.t.ZkOo1d) : c,
        ),
        [M, k] = i.useState(void 0),
        [j, U] = i.useState(void 0),
        G = (0, u.E5)(b, t),
        [B, V] = i.useState(!1),
        [F, Z] = i.useState(!1),
        [H, Y] = i.useState(),
        W = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Z(!0),
                    (0, s.YD)(y, G)
                        .then(() => {
                            Z(!1), null == t || t(), V(!0);
                        })
                        .catch((e) => {
                            Z(!1), Y(e), V(!0);
                        })
                );
            },
            [y, G, Z, V, Y],
        ),
        K = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: G,
            giftMessage: c,
            giftRecipient: y,
            setGiftRecipient: O,
            giftRecipientError: v,
            setGiftRecipientError: I,
            validatingGiftRecipient: T,
            setValidatingGiftRecipient: S,
            soundEffect: M,
            setSoundEffect: k,
            emojiConfetti: j,
            setEmojiConfetti: U,
            customGiftMessage: L,
            setCustomGiftMessage: x,
            selectedGiftStyle: C,
            setSelectedGiftStyle: R,
            sendGiftMessage: W,
            hasSentMessage: B,
            isSendingMessage: F,
            giftMessageError: H,
            recommendedGiftSkuIds: K,
            giftingOrigin: _,
            claimableRewards: P,
            selectedGiftingPromotionReward: w,
            setSelectedGiftingPromotionReward: D,
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
        setSelectedGiftingPromotionReward: f.dG4,
    },
    v = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(g.Provider, {
            value: O,
            children: t,
        });
    };
