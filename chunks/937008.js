"use strict";
n.d(t, { Mq: () => S, Pv: () => A, dX: () => T });
var r = n(627968),
    i = n(64700),
    a = n(242874),
    s = n(810498),
    o = n(287809),
    l = n(954571),
    u = n(786300),
    c = n(45938),
    d = n(156312),
    _ = n(652215),
    f = n(788868),
    h = n(985018);
let p = f.o2.STANDARD_BOX,
    g,
    [E, A, I] = (0, u.A)();
function T(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: u,
            giftStyle: f,
            giftingOrigin: A,
            children: I,
            additionalUserIds: T,
        } = e,
        { selectedSkuId: y } = (0, d.P5)(),
        [S, v] = i.useState(n),
        [C, b] = i.useState(),
        [N, R] = i.useState(!1),
        O = (0, c.Ik)(S),
        D = g;
    O && (D = null != f ? f : p);
    let [L, w] = i.useState(D),
        x = (0, s.JW)(),
        P = null != x && x.length > 0,
        [M, k] = i.useState(),
        [U, G] = i.useState(
            t && (0, c.lo)(S) === c.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? h.intl.string(h.t.ZkOo1U) : u,
        ),
        [F, V] = i.useState(void 0),
        [B, j] = i.useState(void 0),
        H = (0, c.Vt)(y, t),
        [Y, W] = i.useState(!1),
        [K, $] = i.useState(!1),
        [z, q] = i.useState(),
        X = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    $(!0),
                    (0, a.UN)(S, H)
                        .then(() => {
                            $(!1), t?.(), W(!0);
                        })
                        .catch((e) => {
                            $(!1), q(e), W(!0);
                        })
                );
            },
            [S, H, $, W, q],
        );
    return (
        i.useEffect(() => {
            if (P) {
                let e = o.default.getCurrentUser();
                l.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: M });
            }
        }, [M, P]),
        (0, r.jsx)(E.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: u,
                giftRecipient: S,
                setGiftRecipient: v,
                giftRecipientError: C,
                setGiftRecipientError: b,
                validatingGiftRecipient: N,
                setValidatingGiftRecipient: R,
                soundEffect: F,
                setSoundEffect: V,
                emojiConfetti: B,
                setEmojiConfetti: j,
                customGiftMessage: U,
                setCustomGiftMessage: G,
                selectedGiftStyle: L,
                setSelectedGiftStyle: w,
                sendGiftMessage: X,
                hasSentMessage: Y,
                isSendingMessage: K,
                giftMessageError: z,
                giftingOrigin: A,
                claimableRewards: x,
                selectedGiftingPromotionReward: M,
                setSelectedGiftingPromotionReward: k,
                additionalUserIds: T,
            },
            children: I,
        })
    );
}
let y = {
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
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: _.tEg,
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(E.Provider, { value: y, children: t });
    };
