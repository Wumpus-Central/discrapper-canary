n.d(t, { Mq: () => k, Pv: () => I, dX: () => P });
var l = n(627968),
    r = n(64700),
    u = n(70283),
    i = n(682618),
    s = n(211159),
    a = n(242874),
    d = n(998370),
    c = n(380619),
    o = n(848149),
    f = n(287809),
    g = n(174459),
    S = n(786300),
    G = n(45938),
    E = n(652215),
    h = n(788868),
    p = n(375708);
let v = h.o2.STANDARD_BOX,
    R,
    [C, I, M] = (0, S.A)();
function P(e) {
    let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: S,
            giftStyle: h,
            giftingOrigin: I,
            children: M,
            additionalUserIds: P,
        } = e,
        b = (0, s.t4)((e) => e.selectedSkuId),
        [k, _] = r.useState(n),
        [A, O] = r.useState(),
        [y, N] = r.useState(!1),
        T = (0, G.Ik)(k),
        w = R;
    T && (w = null != h ? h : v);
    let [B, J] = r.useState(w),
        L = (0, c.JW)(),
        m = null != L && L.length > 0,
        [D, U] = r.useState(),
        [j, x] = r.useState(
            t && (0, G.lo)(k) === G.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == S ? p.intl.string(p.t.ZkOo1U) : S,
        ),
        [F, X] = r.useState(void 0),
        [Z, $] = r.useState(void 0),
        { enabled: q } = d.J.useConfig({ location: "GiftContext" }),
        z = (0, o.J)();
    r.useEffect(() => {
        t && q && (0, i.o)(u.$.GIFTING);
    }, [t, q]);
    let H = (0, G.Vt)(b, t),
        [V, W] = r.useState(!1),
        [K, Q] = r.useState(!1),
        [Y, ee] = r.useState(),
        et = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    Q(!0),
                    (0, a.UN)(k, H)
                        .then(() => {
                            Q(!1), t?.(), W(!0);
                        })
                        .catch((e) => {
                            Q(!1), ee(e), W(!0);
                        })
                );
            },
            [k, H, Q, W, ee],
        );
    return (
        r.useEffect(() => {
            if (m) {
                let e = f.default.getCurrentUser();
                g.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: D });
            }
        }, [D, m]),
        (0, l.jsx)(C.Provider, {
            value: {
                isGift: t,
                giftCode: H,
                giftMessage: S,
                giftRecipient: k,
                setGiftRecipient: _,
                giftRecipientError: A,
                setGiftRecipientError: O,
                validatingGiftRecipient: y,
                setValidatingGiftRecipient: N,
                soundEffect: F,
                setSoundEffect: X,
                emojiConfetti: Z,
                setEmojiConfetti: $,
                customGiftMessage: j,
                setCustomGiftMessage: x,
                selectedGiftStyle: B,
                setSelectedGiftStyle: J,
                sendGiftMessage: et,
                hasSentMessage: V,
                isSendingMessage: K,
                giftMessageError: Y,
                giftingOrigin: I,
                claimableRewards: L,
                selectedGiftingPromotionReward: D,
                setSelectedGiftingPromotionReward: U,
                additionalUserIds: P,
                openGiftingBadgePostPurchaseModal: z,
            },
            children: M,
        })
    );
}
let b = {
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
    },
    k = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(C.Provider, { value: b, children: t });
    };
