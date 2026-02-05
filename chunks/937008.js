"use strict";
n.d(t, { Mq: () => y, Pv: () => E, dX: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(590180),
    o = n(242874),
    l = n(810498),
    u = n(786300),
    c = n(45938),
    d = n(156312),
    _ = n(652215),
    f = n(788868),
    p = n(985018);
let h = f.o2.STANDARD_BOX,
    m,
    [g, E, A] = (0, u.A)();
function I(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: u,
            giftStyle: _,
            giftingOrigin: f,
            children: E,
            additionalUserIds: A,
        } = e,
        { selectedSkuId: I } = (0, d.P5)(),
        [T, y] = i.useState(n),
        [S, v] = i.useState(),
        [C, b] = i.useState(!1),
        N = (0, c.Ik)(T),
        R = m;
    N && (R = null != _ ? _ : h);
    let [O, D] = i.useState(R),
        L = (0, l.JW)(),
        [w, x] = i.useState(),
        [P, M] = i.useState(
            t && (0, c.lo)(T) === c.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? p.intl.string(p.t.ZkOo1U) : u,
        ),
        [k, U] = i.useState(void 0),
        [G, V] = i.useState(void 0),
        F = (0, c.Vt)(I, t),
        [B, j] = i.useState(!1),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(),
        z = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Y(!0),
                    (0, o.UN)(T, F)
                        .then(() => {
                            Y(!1), t?.(), j(!0);
                        })
                        .catch((e) => {
                            Y(!1), K(e), j(!0);
                        })
                );
            },
            [T, F, Y, j, K],
        ),
        $ = (0, a.yK)([s.A], () => s.A.recommendedGiftSkuIds);
    return (0, r.jsx)(g.Provider, {
        value: {
            isGift: t,
            giftCode: F,
            giftMessage: u,
            giftRecipient: T,
            setGiftRecipient: y,
            giftRecipientError: S,
            setGiftRecipientError: v,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: b,
            soundEffect: k,
            setSoundEffect: U,
            emojiConfetti: G,
            setEmojiConfetti: V,
            customGiftMessage: P,
            setCustomGiftMessage: M,
            selectedGiftStyle: O,
            setSelectedGiftStyle: D,
            sendGiftMessage: z,
            hasSentMessage: B,
            isSendingMessage: H,
            giftMessageError: W,
            recommendedGiftSkuIds: $,
            giftingOrigin: f,
            claimableRewards: L,
            selectedGiftingPromotionReward: w,
            setSelectedGiftingPromotionReward: x,
            additionalUserIds: A,
        },
        children: E,
    });
}
let T = {
        isGift: !1,
        setGiftRecipient: _.tEg,
        setGiftRecipientError: _.tEg,
        setValidatingGiftRecipient: _.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: _.tEg,
        giftCode: null,
        sendGiftMessage: _.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: _.tEg,
    },
    y = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(g.Provider, { value: T, children: t });
    };
