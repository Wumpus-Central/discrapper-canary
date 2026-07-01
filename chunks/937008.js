"use strict";
n.d(t, { Mq: () => v, Pv: () => S, dX: () => C });
var i = n(627968),
    r = n(64700),
    s = n(70283),
    a = n(682618),
    o = n(650170),
    l = n(242874),
    u = n(998370),
    c = n(380619),
    d = n(848149),
    _ = n(287809),
    h = n(174459),
    f = n(786300),
    p = n(45938),
    E = n(652215),
    m = n(202541),
    g = n(375708);
let A = m.o2.STANDARD_BOX,
    I,
    [T, S, y] = (0, f.A)();
function C(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: f,
            giftStyle: m,
            giftingOrigin: S,
            children: y,
            additionalUserIds: C,
        } = e,
        N = (0, o.t4)((e) => e.selectedSkuId),
        [v, R] = r.useState(n),
        [O, b] = r.useState(),
        [D, L] = r.useState(!1),
        w = (0, p.Ik)(v),
        M = I;
    w && (M = null != m ? m : A);
    let [P, x] = r.useState(M),
        k = (0, c.JW)(),
        U = null != k && k.length > 0,
        [G, F] = r.useState(),
        [V, B] = r.useState(
            t && (0, p.lo)(v) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? g.intl.string(g.t.ZkOo1U) : f,
        ),
        [j, H] = r.useState(void 0),
        [Y, W] = r.useState(void 0),
        { enabled: K } = u.J.useConfig({ location: "GiftContext" }),
        $ = (0, d.J)();
    r.useEffect(() => {
        t && K && (0, a.o)(s.$.GIFTING);
    }, [t, K]);
    let z = (0, p.Vt)(N, t),
        [q, Z] = r.useState(!1),
        [X, Q] = r.useState(!1),
        [J, ee] = r.useState(),
        et = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Q(!0),
                    (0, l.UN)(v, z)
                        .then(() => {
                            Q(!1), t?.(), Z(!0);
                        })
                        .catch((e) => {
                            Q(!1), ee(e), Z(!0);
                        })
                );
            },
            [v, z, Q, Z, ee],
        );
    return (
        r.useEffect(() => {
            if (U) {
                let e = _.default.getCurrentUser();
                h.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: G });
            }
        }, [G, U]),
        (0, i.jsx)(T.Provider, {
            value: {
                isGift: t,
                giftCode: z,
                giftMessage: f,
                giftRecipient: v,
                setGiftRecipient: R,
                giftRecipientError: O,
                setGiftRecipientError: b,
                validatingGiftRecipient: D,
                setValidatingGiftRecipient: L,
                soundEffect: j,
                setSoundEffect: H,
                emojiConfetti: Y,
                setEmojiConfetti: W,
                customGiftMessage: V,
                setCustomGiftMessage: B,
                selectedGiftStyle: P,
                setSelectedGiftStyle: x,
                sendGiftMessage: et,
                hasSentMessage: q,
                isSendingMessage: X,
                giftMessageError: J,
                giftingOrigin: S,
                claimableRewards: k,
                selectedGiftingPromotionReward: G,
                setSelectedGiftingPromotionReward: F,
                additionalUserIds: C,
                openGiftingBadgePostPurchaseModal: $,
            },
            children: y,
        })
    );
}
let N = {
    isGift: !1,
    setGiftRecipient: E.tEg,
    setGiftRecipientError: E.tEg,
    setValidatingGiftRecipient: E.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: E.tEg,
    giftCode: null,
    sendGiftMessage: E.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    setSelectedGiftingPromotionReward: E.tEg,
    openGiftingBadgePostPurchaseModal: E.tEg,
};
function v(e) {
    let { children: t } = e;
    return (0, i.jsx)(T.Provider, { value: N, children: t });
}
