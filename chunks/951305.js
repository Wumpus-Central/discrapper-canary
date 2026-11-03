n.d(t, { dX: () => y, Pv: () => k, Mq: () => B });
var r = n(477900),
    u = n(582128),
    l = n(70283),
    i = n(682618),
    s = n(298208),
    a = n(242874),
    c = n(998370),
    d = n(810498),
    o = n(17928),
    f = n(192308),
    g = n(982240),
    S = n(566980),
    G = n(315693),
    h = n(287809),
    P = n(174459),
    E = n(786300),
    p = n(45938),
    R = n(652215),
    M = n(202541),
    I = n(105292);
let v = M.o2.STANDARD_BOX,
    C,
    [_, k, w] = (0, E.A)();
function y(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: M,
            giftStyle: k,
            giftingOrigin: w,
            children: y,
            additionalUserIds: A,
        } = e,
        B = (0, s.t4)((e) => e.selectedSkuId),
        [O, b] = u.useState(E),
        [N, T] = u.useState(),
        [L, m] = u.useState(!1),
        D = (0, p.Ik)(O),
        U = C;
    D && (U = null != k ? k : v);
    let [q, x] = u.useState(U),
        [F, J] = u.useState([]),
        X = (0, d.JW)(),
        Z = null != X && X.length > 0,
        [j, $] = u.useState(
            t && (0, p.lo)(O) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == M ? I.intl.string(I.t.ZkOo1U) : M,
        ),
        [z, H] = u.useState(void 0),
        [V, W] = u.useState(void 0),
        { enabled: K } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: Q, canShowGiftingBadgePostPurchase: Y } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, o.bG)([g.Ay], () => g.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: i, quantity: a } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                d = u.useRef(null);
            return (
                u.useEffect(() => {
                    e &&
                        i === S.h.PURCHASING &&
                        (d.current = g.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, i]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (e && null != d.current && null != (null != t ? (0, G.aZ)(t, d.current) : null)) {
                            let e = d.current;
                            (0, f.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([
                                    n.e("417867"),
                                    n.e("976389"),
                                    n.e("707319"),
                                    n.e("83703"),
                                ]).then(n.bind(n, 855210));
                                return (n) => (0, r.jsx)(t, { ...n, currentProgress: e, quantity: a });
                            });
                        }
                    }, [e, t, a]),
                    canShowGiftingBadgePostPurchase:
                        e && null != d.current && null != t && null != (0, G.aZ)(t, d.current),
                }
            );
        })();
    u.useEffect(() => {
        t && K && (0, i.o0)(l.$.GIFTING);
    }, [t, K]);
    let ee = (0, p.Vt)(B, t),
        [et, en] = u.useState(!1),
        [er, eu] = u.useState(!1),
        [el, ei] = u.useState(),
        es = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    eu(!0),
                    (0, a.UN)(O, ee)
                        .then(() => {
                            (eu(!1), t?.(), en(!0));
                        })
                        .catch((e) => {
                            (eu(!1), ei(e), en(!0));
                        })
                );
            },
            [O, ee, eu, en, ei],
        ),
        ea = u.useRef(new Set());
    u.useEffect(() => {
        if (!Z) return;
        let e = F.filter((e) => !ea.current.has(e));
        if (0 === e.length) return;
        let t = h.default.getCurrentUser();
        for (let n of e)
            (P.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: n }),
                ea.current.add(n));
    }, [F, Z]);
    let ec = u.useMemo(
        () => ({
            isGift: t,
            giftCode: ee,
            giftMessage: M,
            giftRecipient: O,
            setGiftRecipient: b,
            giftRecipientError: N,
            setGiftRecipientError: T,
            validatingGiftRecipient: L,
            setValidatingGiftRecipient: m,
            soundEffect: z,
            setSoundEffect: H,
            emojiConfetti: V,
            setEmojiConfetti: W,
            customGiftMessage: j,
            setCustomGiftMessage: $,
            selectedGiftStyle: q,
            setSelectedGiftStyle: x,
            sendGiftMessage: es,
            hasSentMessage: et,
            isSendingMessage: er,
            giftMessageError: el,
            giftingOrigin: w,
            claimableRewards: X,
            selectedGiftingPromotionRewards: F,
            setSelectedGiftingPromotionRewards: J,
            additionalUserIds: A,
            openGiftingBadgePostPurchaseModal: Q,
            canShowGiftingBadgePostPurchase: Y,
        }),
        [t, ee, M, O, N, L, z, V, j, q, es, et, er, el, w, X, F, A, Q, Y],
    );
    return (0, r.jsx)(_.Provider, { value: ec, children: y });
}
let A = {
    isGift: !1,
    setGiftRecipient: R.tEg,
    setGiftRecipientError: R.tEg,
    setValidatingGiftRecipient: R.tEg,
    selectedGiftStyle: void 0,
    setSelectedGiftStyle: R.tEg,
    giftCode: null,
    sendGiftMessage: R.tEg,
    hasSentMessage: !1,
    isSendingMessage: !1,
    giftMessageError: void 0,
    claimableRewards: void 0,
    selectedGiftingPromotionRewards: [],
    setSelectedGiftingPromotionRewards: R.tEg,
    openGiftingBadgePostPurchaseModal: R.tEg,
    canShowGiftingBadgePostPurchase: !1,
};
function B(e) {
    let { children: t } = e;
    return (0, r.jsx)(_.Provider, { value: A, children: t });
}
