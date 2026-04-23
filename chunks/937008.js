"use strict";
n.d(t, { Mq: () => S, Pv: () => g, dX: () => I });
var r = n(627968),
    i = n(64700),
    s = n(94420),
    a = n(242874),
    o = n(810498),
    l = n(287809),
    u = n(954571),
    c = n(786300),
    d = n(45938),
    _ = n(652215),
    f = n(788868),
    p = n(985018);
let h = f.o2.STANDARD_BOX,
    E,
    [m, g, A] = (0, c.A)();
function I(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: c,
            giftStyle: f,
            giftingOrigin: g,
            children: A,
            additionalUserIds: I,
        } = e,
        T = (0, s.t4)((e) => e.selectedSkuId),
        [S, y] = i.useState(n),
        [N, v] = i.useState(),
        [C, O] = i.useState(!1),
        R = (0, d.Ik)(S),
        b = E;
    R && (b = null != f ? f : h);
    let [D, L] = i.useState(b),
        w = (0, o.JW)(),
        M = null != w && w.length > 0,
        [P, x] = i.useState(),
        [k, U] = i.useState(
            t && (0, d.lo)(S) === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? p.intl.string(p.t.ZkOo1U) : c,
        ),
        [G, F] = i.useState(void 0),
        [V, B] = i.useState(void 0),
        H = (0, d.Vt)(T, t),
        [j, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        [$, z] = i.useState(),
        q = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    K(!0),
                    (0, a.UN)(S, H)
                        .then(() => {
                            K(!1), t?.(), Y(!0);
                        })
                        .catch((e) => {
                            K(!1), z(e), Y(!0);
                        })
                );
            },
            [S, H, K, Y, z],
        );
    return (
        i.useEffect(() => {
            if (M) {
                let e = l.default.getCurrentUser();
                u.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: P });
            }
        }, [P, M]),
        (0, r.jsx)(m.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: c,
                giftRecipient: S,
                setGiftRecipient: y,
                giftRecipientError: N,
                setGiftRecipientError: v,
                validatingGiftRecipient: C,
                setValidatingGiftRecipient: O,
                soundEffect: G,
                setSoundEffect: F,
                emojiConfetti: V,
                setEmojiConfetti: B,
                customGiftMessage: k,
                setCustomGiftMessage: U,
                selectedGiftStyle: D,
                setSelectedGiftStyle: L,
                sendGiftMessage: q,
                hasSentMessage: j,
                isSendingMessage: W,
                giftMessageError: $,
                giftingOrigin: g,
                claimableRewards: w,
                selectedGiftingPromotionReward: P,
                setSelectedGiftingPromotionReward: x,
                additionalUserIds: I,
            },
            children: A,
        })
    );
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
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: _.tEg,
    },
    S = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(m.Provider, { value: T, children: t });
    };
