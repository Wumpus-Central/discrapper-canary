r.d(t, { dX: () => M, Pv: () => P, Mq: () => C });
var n = r(477900),
    i = r(582128),
    l = r(70283),
    s = r(682618),
    a = r(263532),
    o = r(242874),
    u = r(998370),
    c = r(380619),
    d = r(17928),
    m = r(192308),
    x = r(982240),
    p = r(566980),
    h = r(315693),
    f = r(287809),
    g = r(174459),
    A = r(786300),
    j = r(45938),
    E = r(652215),
    T = r(202541),
    I = r(375708);
let v = T.o2.STANDARD_BOX,
    R,
    [N, P, _] = (0, A.A)();
function M(e) {
    let {
            isGift: t = !1,
            giftRecipient: A,
            giftMessage: T,
            giftStyle: P,
            giftingOrigin: _,
            children: M,
            additionalUserIds: y,
        } = e,
        C = (0, a.t4)((e) => e.selectedSkuId),
        [S, b] = i.useState(A),
        [O, G] = i.useState(),
        [L, U] = i.useState(!1),
        D = (0, j.Ik)(S),
        w = R;
    D && (w = null != P ? P : v);
    let [k, B] = i.useState(w),
        [F, H] = i.useState([]),
        V = (0, c.JW)(),
        W = null != V && V.length > 0,
        [z, Y] = i.useState(
            t && (0, j.lo)(S) === j.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == T ? I.intl.string(I.t.ZkOo1U) : T,
        ),
        [Z, K] = i.useState(void 0),
        [q, J] = i.useState(void 0),
        { enabled: $ } = u.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: X, canShowGiftingBadgePostPurchase: Q } = (function () {
            let { enabled: e } = u.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, d.bG)([x.Ay], () => x.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: s, quantity: o } = (0, a.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                c = i.useRef(null);
            return (
                i.useEffect(() => {
                    e &&
                        s === p.h.PURCHASING &&
                        (c.current = x.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, s]),
                {
                    openGiftingBadgePostPurchaseModal: i.useCallback(() => {
                        if (e && null != c.current && null != (null != t ? (0, h.aZ)(t, c.current) : null)) {
                            let e = c.current;
                            (0, m.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    r.e("417867"),
                                    r.e("976389"),
                                    r.e("707319"),
                                    r.e("83703"),
                                ]).then(r.bind(r, 855210));
                                return (r) => (0, n.jsx)(t, { ...r, currentProgress: e, quantity: o });
                            });
                        }
                    }, [e, t, o]),
                    canShowGiftingBadgePostPurchase:
                        e && null != c.current && null != t && null != (0, h.aZ)(t, c.current),
                }
            );
        })();
    i.useEffect(() => {
        t && $ && (0, s.o0)(l.$.GIFTING);
    }, [t, $]);
    let ee = (0, j.Vt)(C, t),
        [et, er] = i.useState(!1),
        [en, ei] = i.useState(!1),
        [el, es] = i.useState(),
        ea = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    ei(!0),
                    (0, o.UN)(S, ee)
                        .then(() => {
                            (ei(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (ei(!1), es(e), er(!0));
                        })
                );
            },
            [S, ee, ei, er, es],
        ),
        eo = i.useRef(new Set());
    return (
        i.useEffect(() => {
            if (!W) return;
            let e = F.filter((e) => !eo.current.has(e));
            if (0 === e.length) return;
            let t = f.default.getCurrentUser();
            for (let r of e)
                (g.default.track(E.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: r }),
                    eo.current.add(r));
        }, [F, W]),
        (0, n.jsx)(N.Provider, {
            value: {
                isGift: t,
                giftCode: ee,
                giftMessage: T,
                giftRecipient: S,
                setGiftRecipient: b,
                giftRecipientError: O,
                setGiftRecipientError: G,
                validatingGiftRecipient: L,
                setValidatingGiftRecipient: U,
                soundEffect: Z,
                setSoundEffect: K,
                emojiConfetti: q,
                setEmojiConfetti: J,
                customGiftMessage: z,
                setCustomGiftMessage: Y,
                selectedGiftStyle: k,
                setSelectedGiftStyle: B,
                sendGiftMessage: ea,
                hasSentMessage: et,
                isSendingMessage: en,
                giftMessageError: el,
                giftingOrigin: _,
                claimableRewards: V,
                selectedGiftingPromotionRewards: F,
                setSelectedGiftingPromotionRewards: H,
                additionalUserIds: y,
                openGiftingBadgePostPurchaseModal: X,
                canShowGiftingBadgePostPurchase: Q,
            },
            children: M,
        })
    );
}
let y = {
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
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: E.tEg,
    openGiftingBadgePostPurchaseModal: E.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function C(e) {
    let { children: t } = e;
    return (0, n.jsx)(N.Provider, { value: y, children: t });
}
