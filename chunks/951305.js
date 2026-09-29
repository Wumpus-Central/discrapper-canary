r.d(t, { dX: () => P, Pv: () => I, Mq: () => _ });
var s = r(477900),
    i = r(582128),
    l = r(70283),
    n = r(682618),
    a = r(263532),
    c = r(242874),
    u = r(998370),
    d = r(810498),
    o = r(17928),
    m = r(192308),
    h = r(982240),
    x = r(566980),
    p = r(315693),
    f = r(287809),
    g = r(174459),
    j = r(786300),
    v = r(45938),
    N = r(652215),
    E = r(202541),
    R = r(375708);
let A = E.o2.STANDARD_BOX,
    C,
    [T, I, S] = (0, j.A)();
function P(e) {
    let {
            isGift: t = !1,
            giftRecipient: j,
            giftMessage: E,
            giftStyle: I,
            giftingOrigin: S,
            children: P,
            additionalUserIds: M,
        } = e,
        _ = (0, a.t4)((e) => e.selectedSkuId),
        [y, b] = i.useState(j),
        [G, O] = i.useState(),
        [k, L] = i.useState(!1),
        w = (0, v.Ik)(y),
        D = C;
    w && (D = null != I ? I : A);
    let [U, B] = i.useState(D),
        [F, H] = i.useState([]),
        z = (0, d.JW)(),
        Z = null != z && z.length > 0,
        [V, Y] = i.useState(
            t && (0, v.lo)(y) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == E ? R.intl.string(R.t.ZkOo1U) : E,
        ),
        [q, W] = i.useState(void 0),
        [K, X] = i.useState(void 0),
        { enabled: $ } = u.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: J, canShowGiftingBadgePostPurchase: Q } = (function () {
            let { enabled: e } = u.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([h.Ay], () => h.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: n, quantity: c } = (0, a.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                d = i.useRef(null);
            return (
                i.useEffect(() => {
                    e &&
                        n === x.h.PURCHASING &&
                        (d.current = h.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, n]),
                {
                    openGiftingBadgePostPurchaseModal: i.useCallback(() => {
                        if (e && null != d.current && null != (null != t ? (0, p.aZ)(t, d.current) : null)) {
                            let e = d.current;
                            (0, m.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    r.e("417867"),
                                    r.e("976389"),
                                    r.e("707319"),
                                    r.e("83703"),
                                ]).then(r.bind(r, 855210));
                                return (r) => (0, s.jsx)(t, { ...r, currentProgress: e, quantity: c });
                            });
                        }
                    }, [e, t, c]),
                    canShowGiftingBadgePostPurchase:
                        e && null != d.current && null != t && null != (0, p.aZ)(t, d.current),
                }
            );
        })();
    i.useEffect(() => {
        t && $ && (0, n.o0)(l.$.GIFTING);
    }, [t, $]);
    let ee = (0, v.Vt)(_, t),
        [et, er] = i.useState(!1),
        [es, ei] = i.useState(!1),
        [el, en] = i.useState(),
        ea = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    ei(!0),
                    (0, c.UN)(y, ee)
                        .then(() => {
                            (ei(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (ei(!1), en(e), er(!0));
                        })
                );
            },
            [y, ee, ei, er, en],
        ),
        ec = i.useRef(new Set());
    return (
        i.useEffect(() => {
            if (!Z) return;
            let e = F.filter((e) => !ec.current.has(e));
            if (0 === e.length) return;
            let t = f.default.getCurrentUser();
            for (let r of e)
                (g.default.track(N.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: r }),
                    ec.current.add(r));
        }, [F, Z]),
        (0, s.jsx)(T.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: E,
                giftRecipient: y,
                setGiftRecipient: b,
                giftRecipientError: G,
                setGiftRecipientError: O,
                validatingGiftRecipient: k,
                setValidatingGiftRecipient: L,
                soundEffect: q,
                setSoundEffect: W,
                emojiConfetti: K,
                setEmojiConfetti: X,
                customGiftMessage: V,
                setCustomGiftMessage: Y,
                selectedGiftStyle: U,
                setSelectedGiftStyle: B,
                sendGiftMessage: ea,
                hasSentMessage: et,
                isSendingMessage: es,
                giftMessageError: el,
                giftingOrigin: S,
                claimableRewards: z,
                selectedGiftingPromotionRewards: F,
                setSelectedGiftingPromotionRewards: H,
                additionalUserIds: M,
                openGiftingBadgePostPurchaseModal: J,
                canShowGiftingBadgePostPurchase: Q,
            },
            children: P,
        })
    );
}
let M = {
    isGift: !1,
    setGiftRecipient: N.tEg,
    setGiftRecipientError: N.tEg,
    setValidatingGiftRecipient: N.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: N.tEg,
    giftCode: null,
    sendGiftMessage: N.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: N.tEg,
    openGiftingBadgePostPurchaseModal: N.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function _(e) {
    let { children: t } = e;
    return (0, s.jsx)(T.Provider, { value: M, children: t });
}
