n.d(t, {
    KB: () => I,
    b6: () => T,
    wD: () => O
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(597688),
    s = n(479446),
    l = n(646476),
    c = n(599659),
    u = n(155491),
    d = n(717401),
    f = n(975104),
    _ = n(669079),
    p = n(563132),
    h = n(981631),
    m = n(474936),
    g = n(388032);
let E = m.Cj.STANDARD_BOX,
    b = void 0,
    [y, O, v] = (0, f.Z)();
function I(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: f, giftStyle: h, giftingOrigin: O, children: v } = e,
        { selectedSkuId: I } = (0, p.JL)(),
        [S, T] = i.useState(n),
        [A, N] = i.useState(),
        [C, R] = i.useState(!1),
        P = (0, _.pO)(S),
        w = (0, l.TX)(),
        { enabled: D } = c.O.useExperiment({ location: 'gift card' }),
        L = b;
    P && ((L = w ? m.Cj.SEASONAL_STANDARD_BOX : null != h ? h : E), D && (L = m.Cj.NITROWEEN_STANDARD));
    let [x, M] = i.useState(L),
        k = (0, d.iE)(),
        [j, U] = i.useState(),
        [G, B] = i.useState(t && (0, _.MY)(S) === _.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? g.intl.string(g.t.ZkOo1d) : f),
        [V, F] = i.useState(void 0),
        [Z, H] = i.useState(void 0),
        Y = (0, _.E5)(I, t),
        [W, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(),
        J = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, s.YD)(S, Y)
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
        $ = (0, u.x8)(),
        ee = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(y.Provider, {
        value: {
            isGift: t,
            giftCode: Y,
            giftMessage: f,
            giftRecipient: S,
            setGiftRecipient: T,
            giftRecipientError: A,
            setGiftRecipientError: N,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: R,
            soundEffect: V,
            setSoundEffect: F,
            emojiConfetti: Z,
            setEmojiConfetti: H,
            customGiftMessage: G,
            setCustomGiftMessage: B,
            selectedGiftStyle: x,
            setSelectedGiftStyle: M,
            sendGiftMessage: J,
            hasSentMessage: W,
            isSendingMessage: z,
            giftMessageError: Q,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: ee,
            giftingOrigin: O,
            claimableRewards: k,
            selectedGiftingPromotionReward: j,
            setSelectedGiftingPromotionReward: U
        },
        children: v
    });
}
let S = {
        isGift: !1,
        setGiftRecipient: h.dG4,
        setGiftRecipientError: h.dG4,
        setValidatingGiftRecipient: h.dG4,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: h.dG4,
        giftCode: null,
        sendGiftMessage: h.dG4,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        alreadyHasHalloweenDeco: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: h.dG4
    },
    T = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(y.Provider, {
            value: S,
            children: t
        });
    };
