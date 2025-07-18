(n.d(t, {
    KB: () => O,
    b6: () => I,
    wD: () => b
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(597688),
    s = n(479446),
    l = n(646476),
    c = n(717401),
    u = n(975104),
    d = n(669079),
    f = n(563132),
    _ = n(981631),
    p = n(474936),
    h = n(388032);
let m = p.Cj.STANDARD_BOX,
    g = void 0,
    [E, b, y] = (0, u.Z)();
function O(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: u, giftStyle: _, giftingOrigin: b, children: y } = e,
        { selectedSkuId: O } = (0, f.JL)(),
        [v, I] = i.useState(n),
        [T, S] = i.useState(),
        [A, N] = i.useState(!1),
        C = (0, d.pO)(v),
        R = (0, l.TX)(),
        P = g;
    C && (P = R ? p.Cj.SEASONAL_STANDARD_BOX : null != _ ? _ : m);
    let [w, D] = i.useState(P),
        L = (0, c.iE)(),
        [x, M] = i.useState(),
        [k, j] = i.useState(t && (0, d.MY)(v) === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? h.intl.string(h.t.ZkOo1d) : u),
        [U, G] = i.useState(void 0),
        [B, V] = i.useState(void 0),
        F = (0, d.E5)(O, t),
        [Z, H] = i.useState(!1),
        [Y, W] = i.useState(!1),
        [K, z] = i.useState(),
        q = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    W(!0),
                    (0, s.YD)(v, F)
                        .then(() => {
                            (W(!1), null == t || t(), H(!0));
                        })
                        .catch((e) => {
                            (W(!1), z(e), H(!0));
                        })
                );
            },
            [v, F, W, H, z]
        ),
        X = (0, a.Wu)([o.Z], () => o.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(E.Provider, {
        value: {
            isGift: t,
            giftCode: F,
            giftMessage: u,
            giftRecipient: v,
            setGiftRecipient: I,
            giftRecipientError: T,
            setGiftRecipientError: S,
            validatingGiftRecipient: A,
            setValidatingGiftRecipient: N,
            soundEffect: U,
            setSoundEffect: G,
            emojiConfetti: B,
            setEmojiConfetti: V,
            customGiftMessage: k,
            setCustomGiftMessage: j,
            selectedGiftStyle: w,
            setSelectedGiftStyle: D,
            sendGiftMessage: q,
            hasSentMessage: Z,
            isSendingMessage: Y,
            giftMessageError: K,
            recommendedGiftSkuIds: X,
            giftingOrigin: b,
            claimableRewards: L,
            selectedGiftingPromotionReward: x,
            setSelectedGiftingPromotionReward: M
        },
        children: y
    });
}
let v = {
        isGift: !1,
        setGiftRecipient: _.dG4,
        setGiftRecipientError: _.dG4,
        setValidatingGiftRecipient: _.dG4,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: _.dG4,
        giftCode: null,
        sendGiftMessage: _.dG4,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: _.dG4
    },
    I = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(E.Provider, {
            value: v,
            children: t
        });
    };
