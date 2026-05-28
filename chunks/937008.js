s.d(t, { Mq: () => M, Pv: () => _, dX: () => x });
var i = s(627968),
    a = s(64700),
    d = s(70283),
    l = s(682618),
    n = s(722847),
    r = s(242874),
    u = s(998370),
    o = s(380619),
    c = s(287809),
    f = s(174459),
    g = s(786300),
    S = s(45938),
    v = s(652215),
    E = s(788868),
    G = s(375708);
let h = E.o2.STANDARD_BOX,
    p,
    [R, _, k] = (0, g.A)();
function x(e) {
    let {
            isGift: t = !1,
            giftRecipient: s,
            giftMessage: g,
            giftStyle: E,
            giftingOrigin: _,
            children: k,
            additionalUserIds: x,
        } = e,
        C = (0, n.t4)((e) => e.selectedSkuId),
        [M, b] = a.useState(s),
        [O, I] = a.useState(),
        [A, N] = a.useState(!1),
        m = (0, S.Ik)(M),
        w = p;
    m && (w = null != E ? E : h);
    let [D, P] = a.useState(w),
        T = (0, o.JW)(),
        j = null != T && T.length > 0,
        [U, J] = a.useState(),
        [B, y] = a.useState(
            t && (0, S.lo)(M) === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == g ? G.intl.string(G.t.ZkOo1U) : g,
        ),
        [F, V] = a.useState(void 0),
        [W, X] = a.useState(void 0),
        { enabled: q } = u.J.useConfig({ location: "GiftContext" });
    a.useEffect(() => {
        t && q && (0, l.o)(d.$.GIFTING);
    }, [t, q]);
    let H = (0, S.Vt)(C, t),
        [K, L] = a.useState(!1),
        [Z, $] = a.useState(!1),
        [z, Q] = a.useState(),
        Y = a.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    $(!0),
                    (0, r.UN)(M, H)
                        .then(() => {
                            $(!1), t?.(), L(!0);
                        })
                        .catch((e) => {
                            $(!1), Q(e), L(!0);
                        })
                );
            },
            [M, H, $, L, Q],
        );
    return (
        a.useEffect(() => {
            if (j) {
                let e = c.default.getCurrentUser();
                f.default.track(v.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: U });
            }
        }, [U, j]),
        (0, i.jsx)(R.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: g,
                giftRecipient: M,
                setGiftRecipient: b,
                giftRecipientError: O,
                setGiftRecipientError: I,
                validatingGiftRecipient: A,
                setValidatingGiftRecipient: N,
                soundEffect: F,
                setSoundEffect: V,
                emojiConfetti: W,
                setEmojiConfetti: X,
                customGiftMessage: B,
                setCustomGiftMessage: y,
                selectedGiftStyle: D,
                setSelectedGiftStyle: P,
                sendGiftMessage: Y,
                hasSentMessage: K,
                isSendingMessage: Z,
                giftMessageError: z,
                giftingOrigin: _,
                claimableRewards: T,
                selectedGiftingPromotionReward: U,
                setSelectedGiftingPromotionReward: J,
                additionalUserIds: x,
            },
            children: k,
        })
    );
}
let C = {
        isGift: !1,
        setGiftRecipient: v.tEg,
        setGiftRecipientError: v.tEg,
        setValidatingGiftRecipient: v.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: v.tEg,
        giftCode: null,
        sendGiftMessage: v.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: v.tEg,
    },
    M = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(R.Provider, { value: C, children: t });
    };
