n.d(t, {
    KB: () => O,
    wD: () => y
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
    _ = n(669079),
    p = n(563132),
    h = n(474936),
    m = n(388032);
let g = h.Cj.STANDARD_BOX,
    E = void 0,
    [b, y, v] = (0, f.Z)();
function O(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: f, giftStyle: y, giftingOrigin: v, children: O } = e,
        { selectedSkuId: I } = (0, p.JL)(),
        [S, T] = i.useState(n),
        [N, A] = i.useState(),
        [C, R] = i.useState(!1),
        P = (0, _.pO)(S),
        w = (0, l.TX)(),
        { enabled: D } = c.O.useExperiment({ location: 'gift card' }),
        L = E;
    P && ((L = w ? h.Cj.SEASONAL_STANDARD_BOX : null != y ? y : g), D && (L = h.Cj.NITROWEEN_STANDARD));
    let [x, M] = i.useState(L),
        k = (0, d.iE)(),
        [j, U] = i.useState(),
        [G, B] = i.useState(t && (0, _.MY)(S) === _.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? m.NW.string(m.t.ZkOo1d) : f),
        [F, V] = i.useState(void 0),
        [Z, H] = i.useState(void 0),
        W = (0, _.E5)(I, t),
        [Y, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(),
        J = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, s.YD)(S, W)
                        .then(() => {
                            q(!1), null == t || t(), K(!0);
                        })
                        .catch((e) => {
                            q(!1), X(e), K(!0);
                        })
                );
            },
            [S, W, q, K, X]
        ),
        $ = (0, u.x8)(),
        ee = (0, o.Wu)([a.Z], () => a.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(b.Provider, {
        value: {
            isGift: t,
            giftCode: W,
            giftMessage: f,
            giftRecipient: S,
            setGiftRecipient: T,
            giftRecipientError: N,
            setGiftRecipientError: A,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: R,
            soundEffect: F,
            setSoundEffect: V,
            emojiConfetti: Z,
            setEmojiConfetti: H,
            customGiftMessage: G,
            setCustomGiftMessage: B,
            selectedGiftStyle: x,
            setSelectedGiftStyle: M,
            sendGiftMessage: J,
            hasSentMessage: Y,
            isSendingMessage: z,
            giftMessageError: Q,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: ee,
            giftingOrigin: v,
            claimableRewards: k,
            selectedGiftingPromotionReward: j,
            setSelectedGiftingPromotionReward: U
        },
        children: O
    });
}
