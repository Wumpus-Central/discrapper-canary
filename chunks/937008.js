n.d(t, { Mq: () => v, Pv: () => h, dX: () => A });
var i = n(627968),
    r = n(64700),
    a = n(94420),
    l = n(242874),
    s = n(810498),
    d = n(287809),
    o = n(954571),
    u = n(786300),
    c = n(45938),
    _ = n(652215),
    f = n(788868),
    m = n(985018);
let g = f.o2.STANDARD_BOX,
    p,
    [b, h, x] = (0, u.A)();
function A(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: u,
            giftStyle: f,
            giftingOrigin: h,
            children: x,
            additionalUserIds: A,
        } = e,
        C = (0, a.t4)((e) => e.selectedSkuId),
        [v, S] = r.useState(n),
        [I, E] = r.useState(),
        [N, y] = r.useState(!1),
        M = (0, c.Ik)(v),
        j = p;
    M && (j = null != f ? f : g);
    let [T, P] = r.useState(j),
        R = (0, s.JW)(),
        L = null != R && R.length > 0,
        [k, U] = r.useState(),
        [O, D] = r.useState(
            t && (0, c.lo)(v) === c.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == u ? m.intl.string(m.t.ZkOo1U) : u,
        ),
        [G, w] = r.useState(void 0),
        [B, F] = r.useState(void 0),
        W = (0, c.Vt)(C, t),
        [z, H] = r.useState(!1),
        [K, $] = r.useState(!1),
        [Z, q] = r.useState(),
        X = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    $(!0),
                    (0, l.UN)(v, W)
                        .then(() => {
                            $(!1), t?.(), H(!0);
                        })
                        .catch((e) => {
                            $(!1), q(e), H(!0);
                        })
                );
            },
            [v, W, $, H, q],
        );
    return (
        r.useEffect(() => {
            if (L) {
                let e = d.default.getCurrentUser();
                o.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: k });
            }
        }, [k, L]),
        (0, i.jsx)(b.Provider, {
            value: {
                isGift: t,
                giftCode: W,
                giftMessage: u,
                giftRecipient: v,
                setGiftRecipient: S,
                giftRecipientError: I,
                setGiftRecipientError: E,
                validatingGiftRecipient: N,
                setValidatingGiftRecipient: y,
                soundEffect: G,
                setSoundEffect: w,
                emojiConfetti: B,
                setEmojiConfetti: F,
                customGiftMessage: O,
                setCustomGiftMessage: D,
                selectedGiftStyle: T,
                setSelectedGiftStyle: P,
                sendGiftMessage: X,
                hasSentMessage: z,
                isSendingMessage: K,
                giftMessageError: Z,
                giftingOrigin: h,
                claimableRewards: R,
                selectedGiftingPromotionReward: k,
                setSelectedGiftingPromotionReward: U,
                additionalUserIds: A,
            },
            children: x,
        })
    );
}
let C = {
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
    v = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(b.Provider, { value: C, children: t });
    };
