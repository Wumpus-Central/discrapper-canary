n.d(t, {
    KB: () => T,
    wD: () => y
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(597688),
    o = n(479446),
    l = n(646476),
    u = n(599659),
    c = n(155491),
    d = n(717401),
    f = n(975104),
    _ = n(669079),
    p = n(563132),
    h = n(474936),
    m = n(388032);
let g = h.Cj.STANDARD_BOX,
    E = void 0,
    [v, y, I] = (0, f.Z)();
function T(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: f, giftStyle: y, giftingOrigin: I, children: T } = e,
        { selectedSkuId: b } = (0, p.JL)(),
        [S, A] = r.useState(n),
        [N, C] = r.useState(),
        [R, O] = r.useState(!1),
        D = (0, _.pO)(S),
        x = (0, l.TX)(),
        { enabled: L } = u.O.useExperiment({ location: 'gift card' }),
        P = E;
    D && ((P = x ? h.Cj.SEASONAL_STANDARD_BOX : null != y ? y : g), L && (P = h.Cj.NITROWEEN_STANDARD));
    let [w, M] = r.useState(P),
        k = (0, d.iE)(),
        [U, G] = r.useState(),
        [B, Z] = r.useState(t && (0, _.MY)(S) === _.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? m.intl.string(m.t.ZkOo1d) : f),
        [F, V] = r.useState(void 0),
        [j, H] = r.useState(void 0),
        Y = (0, _.E5)(b, t),
        [W, K] = r.useState(!1),
        [z, q] = r.useState(!1),
        [Q, X] = r.useState(),
        J = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, o.YD)(S, Y)
                        .then(() => {
                            q(!1), null == t || t(), K(!0);
                        })
                        .catch((e) => {
                            q(!1), X(e), K(!0);
                        })
                );
            },
            [S, Y, q, K, X]
        ),
        $ = (0, c.x8)(),
        ee = (0, a.Wu)([s.Z], () => s.Z.recommendedGiftSkuIds);
    return (0, i.jsx)(v.Provider, {
        value: {
            isGift: t,
            giftCode: Y,
            giftMessage: f,
            giftRecipient: S,
            setGiftRecipient: A,
            giftRecipientError: N,
            setGiftRecipientError: C,
            validatingGiftRecipient: R,
            setValidatingGiftRecipient: O,
            soundEffect: F,
            setSoundEffect: V,
            emojiConfetti: j,
            setEmojiConfetti: H,
            customGiftMessage: B,
            setCustomGiftMessage: Z,
            selectedGiftStyle: w,
            setSelectedGiftStyle: M,
            sendGiftMessage: J,
            hasSentMessage: W,
            isSendingMessage: z,
            giftMessageError: Q,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: ee,
            giftingOrigin: I,
            claimableRewards: k,
            selectedGiftingPromotionReward: U,
            setSelectedGiftingPromotionReward: G
        },
        children: T
    });
}
