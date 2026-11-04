n.d(t, { dX: () => y, Pv: () => _, Mq: () => B });
var r = n(477900),
    u = n(582128),
    l = n(70283),
    i = n(682618),
    s = n(298208),
    a = n(242874),
    c = n(998370),
    o = n(810498),
    d = n(17928),
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
let C = M.o2.STANDARD_BOX,
    k,
    [v, _, w] = (0, E.A)();
function y(e) {
    let {
            isGift: t = !1,
            giftRecipient: E,
            giftMessage: M,
            giftStyle: _,
            giftingOrigin: w,
            children: y,
            additionalUserIds: A,
        } = e,
        B = (0, s.t4)((e) => e.selectedSkuId),
        O = (0, s.t4)((e) => e.getIsRecurringGiftCheckout()),
        [b, N] = u.useState(E),
        [T, L] = u.useState(),
        [m, D] = u.useState(!1),
        U = (0, p.Ik)(b),
        q = k;
    U && (q = null != _ ? _ : C);
    let [x, F] = u.useState(q),
        [J, X] = u.useState([]),
        Z = (0, o.JW)(),
        j = null != Z && Z.length > 0,
        [$, z] = u.useState(
            t && (0, p.lo)(b) === p.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == M ? I.intl.string(I.t.ZkOo1U) : M,
        ),
        [H, V] = u.useState(void 0),
        [W, K] = u.useState(void 0),
        { enabled: Q } = c.J.useConfig({ location: "GiftContext" }),
        { openGiftingBadgePostPurchaseModal: Y, canShowGiftingBadgePostPurchase: ee } = (function () {
            let { enabled: e } = c.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, d.bG)([g.Ay], () => g.Ay.getBadgeById(l.$.GIFTING)?.tiers),
                { purchaseState: i, quantity: a } = (0, s.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    quantity: e.quantity,
                })),
                o = u.useRef(null);
            return (
                u.useEffect(() => {
                    e &&
                        i === S.h.PURCHASING &&
                        (o.current = g.Ay.getSingleRequirementProgress(l.$.GIFTING)?.current ?? null);
                }, [e, i]),
                {
                    openGiftingBadgePostPurchaseModal: u.useCallback(() => {
                        if (e && null != o.current && null != (null != t ? (0, G.aZ)(t, o.current) : null)) {
                            let e = o.current;
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
                        e && null != o.current && null != t && null != (0, G.aZ)(t, o.current),
                }
            );
        })();
    u.useEffect(() => {
        t && Q && (0, i.o0)(l.$.GIFTING);
    }, [t, Q]);
    let et = (0, p.Vt)(B, t && !O),
        [en, er] = u.useState(!1),
        [eu, el] = u.useState(!1),
        [ei, es] = u.useState(),
        ea = u.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    el(!0),
                    (0, a.UN)(b, et)
                        .then(() => {
                            (el(!1), t?.(), er(!0));
                        })
                        .catch((e) => {
                            (el(!1), es(e), er(!0));
                        })
                );
            },
            [b, et, el, er, es],
        ),
        ec = u.useRef(new Set());
    u.useEffect(() => {
        if (!j) return;
        let e = J.filter((e) => !ec.current.has(e));
        if (0 === e.length) return;
        let t = h.default.getCurrentUser();
        for (let n of e)
            (P.default.track(R.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: t?.id, reward_sku_id: n }),
                ec.current.add(n));
    }, [J, j]);
    let eo = u.useMemo(
        () => ({
            isGift: t,
            giftCode: et,
            giftMessage: M,
            giftRecipient: b,
            setGiftRecipient: N,
            giftRecipientError: T,
            setGiftRecipientError: L,
            validatingGiftRecipient: m,
            setValidatingGiftRecipient: D,
            soundEffect: H,
            setSoundEffect: V,
            emojiConfetti: W,
            setEmojiConfetti: K,
            customGiftMessage: $,
            setCustomGiftMessage: z,
            selectedGiftStyle: x,
            setSelectedGiftStyle: F,
            sendGiftMessage: ea,
            hasSentMessage: O || en,
            isSendingMessage: eu,
            giftMessageError: ei,
            giftingOrigin: w,
            claimableRewards: Z,
            selectedGiftingPromotionRewards: J,
            setSelectedGiftingPromotionRewards: X,
            additionalUserIds: A,
            openGiftingBadgePostPurchaseModal: Y,
            canShowGiftingBadgePostPurchase: ee,
        }),
        [t, et, M, b, T, m, H, W, $, x, ea, O, en, eu, ei, w, Z, J, A, Y, ee],
    );
    return (0, r.jsx)(v.Provider, { value: eo, children: y });
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
    return (0, r.jsx)(v.Provider, { value: A, children: t });
}
