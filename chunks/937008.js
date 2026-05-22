s.d(t, { Mq: () => k, Pv: () => p, dX: () => _ });
var i = s(627968),
    a = s(64700),
    r = s(671744),
    d = s(242874),
    l = s(380619),
    n = s(287809),
    u = s(174459),
    c = s(786300),
    o = s(45938),
    S = s(652215),
    g = s(788868),
    f = s(375708);
let v = g.o2.STANDARD_BOX,
    E,
    [h, p, R] = (0, c.A)();
function _(e) {
    let {
            isGift: t = !1,
            giftRecipient: s,
            giftMessage: c,
            giftStyle: g,
            giftingOrigin: p,
            children: R,
            additionalUserIds: _,
        } = e,
        G = (0, r.t4)((e) => e.selectedSkuId),
        [k, x] = a.useState(s),
        [M, O] = a.useState(),
        [A, C] = a.useState(!1),
        w = (0, o.Ik)(k),
        D = E;
    w && (D = null != g ? g : v);
    let [I, N] = a.useState(D),
        P = (0, l.JW)(),
        b = null != P && P.length > 0,
        [T, U] = a.useState(),
        [j, m] = a.useState(
            t && (0, o.lo)(k) === o.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? f.intl.string(f.t.ZkOo1U) : c,
        ),
        [B, y] = a.useState(void 0),
        [J, V] = a.useState(void 0),
        W = (0, o.Vt)(G, t),
        [X, q] = a.useState(!1),
        [F, H] = a.useState(!1),
        [K, L] = a.useState(),
        Z = a.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    H(!0),
                    (0, d.UN)(k, W)
                        .then(() => {
                            H(!1), t?.(), q(!0);
                        })
                        .catch((e) => {
                            H(!1), L(e), q(!0);
                        })
                );
            },
            [k, W, H, q, L],
        );
    return (
        a.useEffect(() => {
            if (b) {
                let e = n.default.getCurrentUser();
                u.default.track(S.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: e?.id, reward_sku_id: T });
            }
        }, [T, b]),
        (0, i.jsx)(h.Provider, {
            value: {
                isGift: t,
                giftCode: W,
                giftMessage: c,
                giftRecipient: k,
                setGiftRecipient: x,
                giftRecipientError: M,
                setGiftRecipientError: O,
                validatingGiftRecipient: A,
                setValidatingGiftRecipient: C,
                soundEffect: B,
                setSoundEffect: y,
                emojiConfetti: J,
                setEmojiConfetti: V,
                customGiftMessage: j,
                setCustomGiftMessage: m,
                selectedGiftStyle: I,
                setSelectedGiftStyle: N,
                sendGiftMessage: Z,
                hasSentMessage: X,
                isSendingMessage: F,
                giftMessageError: K,
                giftingOrigin: p,
                claimableRewards: P,
                selectedGiftingPromotionReward: T,
                setSelectedGiftingPromotionReward: U,
                additionalUserIds: _,
            },
            children: R,
        })
    );
}
let G = {
        isGift: !1,
        setGiftRecipient: S.tEg,
        setGiftRecipientError: S.tEg,
        setValidatingGiftRecipient: S.tEg,
        selectedGiftStyle: void 0,
        setSelectedGiftStyle: S.tEg,
        giftCode: null,
        sendGiftMessage: S.tEg,
        hasSentMessage: !1,
        isSendingMessage: !1,
        giftMessageError: void 0,
        claimableRewards: void 0,
        setSelectedGiftingPromotionReward: S.tEg,
    },
    k = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(h.Provider, { value: G, children: t });
    };
