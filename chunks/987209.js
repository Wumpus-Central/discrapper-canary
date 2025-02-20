n.d(t, {
    KB: () => O,
    wD: () => b
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(597688),
    s = n(479446),
    l = n(646476),
    c = n(599659),
    u = n(155491),
    d = n(717401),
    f = n(975104),
    p = n(669079),
    _ = n(563132),
    h = n(474936),
    m = n(388032);
let g = h.Cj.STANDARD_BOX,
    E = void 0,
    [v, b, y] = (0, f.Z)();
function O(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: f, giftStyle: b, giftingOrigin: y, children: O } = e,
        { selectedSkuId: S } = (0, _.JL)(),
        [I, T] = i.useState(n),
        [N, A] = i.useState(),
        [C, R] = i.useState(!1),
        P = (0, p.pO)(I),
        w = (0, l.TX)(),
        { enabled: D } = c.O.useExperiment({ location: 'gift card' }),
        x = E;
    P && ((x = w ? h.Cj.SEASONAL_STANDARD_BOX : null != b ? b : g), D && (x = h.Cj.NITROWEEN_STANDARD));
    let [L, M] = i.useState(x),
        k = (0, d.iE)(),
        [j, U] = i.useState(),
        [G, B] = i.useState(t && (0, p.MY)(I) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? m.NW.string(m.t.ZkOo1d) : f),
        [Z, F] = i.useState(void 0),
        [V, H] = i.useState(void 0),
        W = (0, p.E5)(S, t),
        [Y, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(),
        J = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, s.YD)(I, W)
                        .then(() => {
                            q(!1), null == t || t(), K(!0);
                        })
                        .catch((e) => {
                            q(!1), X(e), K(!0);
                        })
                );
            },
            [I, W, q, K, X]
        ),
        $ = (0, u.x8)(),
        ee = (0, o.Wu)([a.Z], () => a.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(v.Provider, {
        value: {
            isGift: t,
            giftCode: W,
            giftMessage: f,
            giftRecipient: I,
            setGiftRecipient: T,
            giftRecipientError: N,
            setGiftRecipientError: A,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: R,
            soundEffect: Z,
            setSoundEffect: F,
            emojiConfetti: V,
            setEmojiConfetti: H,
            customGiftMessage: G,
            setCustomGiftMessage: B,
            selectedGiftStyle: L,
            setSelectedGiftStyle: M,
            sendGiftMessage: J,
            hasSentMessage: Y,
            isSendingMessage: z,
            giftMessageError: Q,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: ee,
            giftingOrigin: y,
            claimableRewards: k,
            selectedGiftingPromotionReward: j,
            setSelectedGiftingPromotionReward: U
        },
        children: O
    });
}
