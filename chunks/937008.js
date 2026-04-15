"use strict";
n.d(t, { Mq: () => S, Pv: () => g, dX: () => I });
var r = n(627968),
    i = n(64700),
    s = n(242874),
    a = n(810498),
    o = n(287809),
    l = n(954571),
    u = n(786300),
    c = n(45938),
    d = n(413748),
    _ = n(652215),
    f = n(788868),
    p = n(985018);
let h = f.o2.STANDARD_BOX,
    m,
    [E, g, A] = (0, u.A)();
function I(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: u,
            giftStyle: f,
            giftingOrigin: g,
            children: A,
            additionalUserIds: I,
        } = e,
        T = (0, d.t4)((e) => e.selectedSkuId),
        [S, y] = i.useState(n),
        [v, N] = i.useState(),
        [C, R] = i.useState(!1),
        O = (0, c.Ik)(S),
        b = m;
    O && (b = null != f ? f : h);
    let [D, L] = i.useState(b),
        w = (0, a.JW)(),
        M = null != w && w.length > 0,
        [P, x] = i.useState(),
        [k, U] = i.useState(
            t && (0, c.lo)(S) === c.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? p.intl.string(p.t.ZkOo1U) : u,
        ),
        [G, F] = i.useState(void 0),
        [V, B] = i.useState(void 0),
        H = (0, c.Vt)(T, t),
        [j, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        [$, z] = i.useState(),
        q = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    K(!0),
                    (0, s.UN)(S, H)
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
                let e = o.default.getCurrentUser();
                l.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: P });
            }
        }, [P, M]),
        (0, r.jsx)(E.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: u,
                giftRecipient: S,
                setGiftRecipient: y,
                giftRecipientError: v,
                setGiftRecipientError: N,
                validatingGiftRecipient: C,
                setValidatingGiftRecipient: R,
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
        return (0, r.jsx)(E.Provider, { value: T, children: t });
    };
