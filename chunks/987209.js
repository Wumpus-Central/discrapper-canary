r.d(n, {
    KB: function () {
        return S;
    },
    wD: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(597688),
    u = r(479446),
    c = r(646476),
    d = r(599659),
    f = r(155491),
    p = r(717401),
    h = r(975104),
    _ = r(669079),
    m = r(563132),
    g = r(474936),
    E = r(388032);
let v = g.Cj.STANDARD_BOX,
    y = void 0,
    [b, I, T] = (0, h.Z)();
function S(e) {
    let { isGift: n = !1, giftRecipient: r, giftMessage: i, giftStyle: h, giftingOrigin: I, children: T } = e,
        { selectedSkuId: S } = (0, m.usePaymentContext)(),
        [A, C] = o.useState(r),
        [N, R] = o.useState(),
        [O, D] = o.useState(!1),
        x = (0, _.pO)(A),
        L = (0, c.TX)(),
        { enabled: w } = d.O.useExperiment({ location: 'gift card' }),
        P = y;
    x && ((P = L ? g.Cj.SEASONAL_STANDARD_BOX : null != h ? h : v), w && (P = g.Cj.NITROWEEN_STANDARD));
    let [M, k] = o.useState(P),
        U = (0, p.iE)(),
        [B, G] = o.useState(),
        [Z, F] = o.useState(n && (0, _.MY)(A) === _.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == i ? E.intl.string(E.t.ZkOo1d) : i),
        [V, j] = o.useState(void 0),
        [H, Y] = o.useState(void 0),
        W = (0, _.E5)(S, n),
        [K, z] = o.useState(!1),
        [q, Q] = o.useState(!1),
        [X, J] = o.useState(),
        $ = o.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    Q(!0),
                    (0, u.YD)(A, W)
                        .then(() => {
                            Q(!1), null == n || n(), z(!0);
                        })
                        .catch((e) => {
                            Q(!1), J(e), z(!0);
                        })
                );
            },
            [A, W, Q, z, J]
        ),
        ee = (0, f.x8)(),
        et = (0, s.Wu)([l.Z], () => l.Z.recommendedGiftSkuIds);
    return (0, a.jsx)(b.Provider, {
        value: {
            isGift: n,
            giftCode: W,
            giftMessage: i,
            giftRecipient: A,
            setGiftRecipient: C,
            giftRecipientError: N,
            setGiftRecipientError: R,
            validatingGiftRecipient: O,
            setValidatingGiftRecipient: D,
            soundEffect: V,
            setSoundEffect: j,
            emojiConfetti: H,
            setEmojiConfetti: Y,
            customGiftMessage: Z,
            setCustomGiftMessage: F,
            selectedGiftStyle: M,
            setSelectedGiftStyle: k,
            sendGiftMessage: $,
            hasSentMessage: K,
            isSendingMessage: q,
            giftMessageError: X,
            alreadyHasHalloweenDeco: ee,
            recommendedGiftSkuIds: et,
            giftingOrigin: I,
            claimableRewards: U,
            selectedGiftingPromotionReward: B,
            setSelectedGiftingPromotionReward: G
        },
        children: T
    });
}
