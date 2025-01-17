r.d(n, {
    KB: function () {
        return S;
    },
    wD: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(597688),
    u = r(479446),
    c = r(646476),
    d = r(599659),
    f = r(155491),
    _ = r(717401),
    h = r(975104),
    p = r(669079),
    m = r(563132),
    g = r(474936),
    E = r(388032);
let v = g.Cj.STANDARD_BOX,
    I = void 0,
    [T, b, y] = (0, h.Z)();
function S(e) {
    let { isGift: n = !1, giftRecipient: r, giftMessage: i, giftStyle: h, giftingOrigin: b, children: y } = e,
        { selectedSkuId: S } = (0, m.usePaymentContext)(),
        [A, N] = s.useState(r),
        [C, R] = s.useState(),
        [O, D] = s.useState(!1),
        L = (0, p.pO)(A),
        x = (0, c.TX)(),
        { enabled: w } = d.O.useExperiment({ location: 'gift card' }),
        P = I;
    L && ((P = x ? g.Cj.SEASONAL_STANDARD_BOX : null != h ? h : v), w && (P = g.Cj.NITROWEEN_STANDARD));
    let [M, k] = s.useState(P),
        U = (0, _.iE)(),
        [B, G] = s.useState(),
        [Z, F] = s.useState(n && (0, p.MY)(A) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == i ? E.intl.string(E.t.ZkOo1d) : i),
        [V, j] = s.useState(void 0),
        [H, Y] = s.useState(void 0),
        W = (0, p.E5)(S, n),
        [K, z] = s.useState(!1),
        [q, Q] = s.useState(!1),
        [X, J] = s.useState(),
        $ = s.useCallback(
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
        et = (0, o.Wu)([l.Z], () => l.Z.recommendedGiftSkuIds);
    return (0, a.jsx)(T.Provider, {
        value: {
            isGift: n,
            giftCode: W,
            giftMessage: i,
            giftRecipient: A,
            setGiftRecipient: N,
            giftRecipientError: C,
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
            giftingOrigin: b,
            claimableRewards: U,
            selectedGiftingPromotionReward: B,
            setSelectedGiftingPromotionReward: G
        },
        children: y
    });
}
