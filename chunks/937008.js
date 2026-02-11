"use strict";
n.d(t, { Mq: () => C, Pv: () => T, dX: () => S });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(590180),
    o = n(242874),
    l = n(810498),
    u = n(287809),
    c = n(954571),
    d = n(786300),
    _ = n(45938),
    f = n(156312),
    h = n(652215),
    p = n(788868),
    g = n(985018);
let E = p.o2.STANDARD_BOX,
    A,
    [I, T, y] = (0, d.A)();
function S(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: d,
            giftStyle: p,
            giftingOrigin: T,
            children: y,
            additionalUserIds: S,
        } = e,
        { selectedSkuId: v } = (0, f.P5)(),
        [C, b] = i.useState(n),
        [N, R] = i.useState(),
        [O, D] = i.useState(!1),
        L = (0, _.Ik)(C),
        w = A;
    L && (w = null != p ? p : E);
    let [x, P] = i.useState(w),
        M = (0, l.JW)(),
        k = null != M && M.length > 0,
        [U, G] = i.useState(),
        [F, V] = i.useState(
            t && (0, _.lo)(C) === _.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == d ? g.intl.string(g.t.ZkOo1U) : d,
        ),
        [B, j] = i.useState(void 0),
        [H, Y] = i.useState(void 0),
        W = (0, _.Vt)(v, t),
        [K, $] = i.useState(!1),
        [z, q] = i.useState(!1),
        [X, Z] = i.useState(),
        Q = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, o.UN)(C, W)
                        .then(() => {
                            q(!1), t?.(), $(!0);
                        })
                        .catch((e) => {
                            q(!1), Z(e), $(!0);
                        })
                );
            },
            [C, W, q, $, Z],
        ),
        J = (0, a.yK)([s.A], () => s.A.recommendedGiftSkuIds);
    return (
        i.useEffect(() => {
            if (k) {
                let e = u.default.getCurrentUser();
                c.default.track(h.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: U });
            }
        }, [U, k]),
        (0, r.jsx)(I.Provider, {
            value: {
                isGift: t,
                giftCode: W,
                giftMessage: d,
                giftRecipient: C,
                setGiftRecipient: b,
                giftRecipientError: N,
                setGiftRecipientError: R,
                validatingGiftRecipient: O,
                setValidatingGiftRecipient: D,
                soundEffect: B,
                setSoundEffect: j,
                emojiConfetti: H,
                setEmojiConfetti: Y,
                customGiftMessage: F,
                setCustomGiftMessage: V,
                selectedGiftStyle: x,
                setSelectedGiftStyle: P,
                sendGiftMessage: Q,
                hasSentMessage: K,
                isSendingMessage: z,
                giftMessageError: X,
                recommendedGiftSkuIds: J,
                giftingOrigin: T,
                claimableRewards: M,
                selectedGiftingPromotionReward: U,
                setSelectedGiftingPromotionReward: G,
                additionalUserIds: S,
            },
            children: y,
        })
    );
}
let v = {
        isGift: !1,
        setGiftRecipient: h.tEg,
        setGiftRecipientError: h.tEg,
        setValidatingGiftRecipient: h.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: h.tEg,
        giftCode: null,
        sendGiftMessage: h.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        recommendedGiftSkuIds: [],
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: h.tEg,
    },
    C = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(I.Provider, { value: v, children: t });
    };
