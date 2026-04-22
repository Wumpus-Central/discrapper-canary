n.d(t, { Mq: () => A, Pv: () => v, dX: () => h });
var a = n(627968),
    r = n(64700),
    l = n(94420),
    i = n(242874),
    s = n(810498),
    o = n(287809),
    u = n(954571),
    c = n(786300),
    d = n(45938),
    m = n(652215),
    p = n(788868),
    _ = n(985018);
let f = p.o2.STANDARD_BOX,
    g,
    [b, v, x] = (0, c.A)();
function h(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: c,
            giftStyle: p,
            giftingOrigin: v,
            children: x,
            additionalUserIds: h,
        } = e,
        I = (0, l.t4)((e) => e.selectedSkuId),
        [A, y] = r.useState(n),
        [T, E] = r.useState(),
        [C, P] = r.useState(!1),
        L = (0, d.Ik)(A),
        S = g;
    L && (S = null != p ? p : f);
    let [N, j] = r.useState(S),
        M = (0, s.JW)(),
        R = null != M && M.length > 0,
        [k, D] = r.useState(),
        [O, w] = r.useState(
            t && (0, d.lo)(A) === d.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? _.intl.string(_.t.ZkOo1U) : c,
        ),
        [U, B] = r.useState(void 0),
        [G, F] = r.useState(void 0),
        H = (0, d.Vt)(I, t),
        [W, Y] = r.useState(!1),
        [V, z] = r.useState(!1),
        [q, K] = r.useState(),
        $ = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    z(!0),
                    (0, i.UN)(A, H)
                        .then(() => {
                            z(!1), t?.(), Y(!0);
                        })
                        .catch((e) => {
                            z(!1), K(e), Y(!0);
                        })
                );
            },
            [A, H, z, Y, K],
        );
    return (
        r.useEffect(() => {
            if (R) {
                let e = o.default.getCurrentUser();
                u.default.track(m.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: k });
            }
        }, [k, R]),
        (0, a.jsx)(b.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: c,
                giftRecipient: A,
                setGiftRecipient: y,
                giftRecipientError: T,
                setGiftRecipientError: E,
                validatingGiftRecipient: C,
                setValidatingGiftRecipient: P,
                soundEffect: U,
                setSoundEffect: B,
                emojiConfetti: G,
                setEmojiConfetti: F,
                customGiftMessage: O,
                setCustomGiftMessage: w,
                selectedGiftStyle: N,
                setSelectedGiftStyle: j,
                sendGiftMessage: $,
                hasSentMessage: W,
                isSendingMessage: V,
                giftMessageError: q,
                giftingOrigin: v,
                claimableRewards: M,
                selectedGiftingPromotionReward: k,
                setSelectedGiftingPromotionReward: D,
                additionalUserIds: h,
            },
            children: x,
        })
    );
}
let I = {
        isGift: !1,
        setGiftRecipient: m.tEg,
        setGiftRecipientError: m.tEg,
        setValidatingGiftRecipient: m.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: m.tEg,
        giftCode: null,
        sendGiftMessage: m.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: m.tEg,
    },
    A = (e) => {
        let { children: t } = e;
        return (0, a.jsx)(b.Provider, { value: I, children: t });
    };
