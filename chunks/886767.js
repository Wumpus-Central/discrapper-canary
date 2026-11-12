n.d(t, { N: () => R, n: () => O });
var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(452027),
    s = n(637141),
    o = n(417604),
    u = n(176095),
    c = n(826469),
    d = n(351906),
    m = n(708791),
    p = n(997101),
    h = n(120700),
    C = n(677959),
    f = n(316363),
    E = n(652215),
    S = n(379912),
    g = n(792996),
    I = n(170691);
let y = new Set([h.C.ORB_CHECKOUT]);
function A(e) {
    let { onGiftCardRedeemed: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow);
    return null != n && y.has(n) ? null : (0, l.jsx)(C.Z4, { className: I.K, onComplete: t });
}
function P(e) {
    let { onPaymentSourceAdd: t } = e,
        n = (0, f.t4)((e) => e.unifiedCheckoutFlow),
        {
            isGift: i,
            isRecurringGiftCheckout: r,
            checkoutPaymentSources: a,
            checkoutStoreCountry: s,
        } = (0, f.t4)((e) => ({
            isGift: e.isGift,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            checkoutStoreCountry: e.get("checkoutStoreCountry"),
        })),
        o = (n === h.C.COLLECTIBLES_CHECKOUT && !i) || (n === h.C.PREMIUM_CHECKOUT && i && !r),
        u = s === p.d.BR,
        c = a.some((e) => e.type === E.hes.PIX);
    return o && u && !c && null != t
        ? (0, l.jsx)(C.y, {
              className: I.K,
              text: g.intl.string(S.default.JPRQ9L),
              onClick: () => t({ linkWalletEnabled: !1 }),
          })
        : null;
}
var v = n(655857),
    x = n(87730),
    _ = n(494903),
    T = n(165272),
    b = n(451636),
    N = n(969933),
    j = n(571852);
function R(e) {
    let {
            setPaymentSourceId: t,
            paymentSourceId: n,
            label: c,
            additionalPaymentSourceDropdownProps: p,
            disabled: h,
            location: C,
            onPaymentSourceAdd: E,
            subscriptionPaymentSourceId: I,
            hideCurrencySelect: y,
            resolveInternalState: T,
            renderCustomPaymentSourceSelectorContent: R,
        } = e,
        { setPaymentSourceId: O, paymentSourceId: M } = (function (e) {
            let { setPaymentSourceId: t, paymentSourceId: n } = (function () {
                    let {
                            paymentSourceId: e,
                            setPaymentSourceId: t,
                            orderRecord: n,
                            isOrderSyncing: l,
                            orderSyncError: i,
                        } = (0, f.t4)((e) => ({
                            paymentSourceId: e.paymentSourceId,
                            setPaymentSourceId: e.setPaymentSourceId,
                            orderRecord: e.orderRecord,
                            isOrderSyncing: e.isOrderSyncing,
                            orderSyncError: e.orderSyncError,
                        })),
                        r = null != n;
                    return {
                        paymentSourceId: e,
                        setPaymentSourceId: t,
                        isOrderSyncing: !!r && l,
                        orderSyncError: r ? i : null,
                    };
                })(),
                { setPaymentSourceId: l, paymentSourceId: r } = i.useMemo(
                    () => ({
                        setPaymentSourceId: void 0 !== e.setPaymentSourceId ? e.setPaymentSourceId : t,
                        paymentSourceId: void 0 !== e.paymentSourceId ? e.paymentSourceId : n,
                    }),
                    [e.setPaymentSourceId, e.paymentSourceId, t, n],
                );
            return { setPaymentSourceId: l, paymentSourceId: r };
        })({ setPaymentSourceId: t, paymentSourceId: n }),
        [L, k] = i.useState(!1),
        {
            giftCardsEnabled: w,
            giftCardCheckboxProps: D,
            walletCoversSubtotal: U,
            walletCoversTotal: G,
            basePaymentSourceDropdownProps: F,
            isSubscriptionPaidByWallet: B,
            hidePersonalInformation: H,
            isSplitPaymentMode: W,
        } = (function (e) {
            let {
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l,
                    subscriptionPaymentSourceId: a,
                    pendingGiftCardWalletSelection: s,
                    setPendingGiftCardWalletSelection: c,
                } = e,
                { isCheckoutDataLoading: m, hasCheckoutContextLoaded: p } = (0, f.t4)((e) => ({
                    isCheckoutDataLoading: e.get("isCheckoutDataLoading"),
                    hasCheckoutContextLoaded: e.get("hasCheckoutContextLoaded"),
                })),
                {
                    dropdownPaymentSources: h,
                    giftCardsEnabled: C,
                    dropdownPaymentSourceId: E,
                    handleDropdownPaymentSourceChange: S,
                    giftCardCheckboxProps: g,
                    walletCoversSubtotal: I,
                    walletCoversTotal: y,
                    isSubscriptionPaidByWallet: A,
                    giftCardWallet: P,
                    isGiftCardCreditsChecked: v,
                    isWalletBalanceLoaded: x,
                    handleGiftCardCreditsToggle: _,
                    isSplitPaymentMode: T,
                } = (0, o.Y0)({
                    paymentSourceId: t,
                    setPaymentSourceId: n,
                    location: l ?? "BaseStatefulPaymentSourceSelector",
                    isReady: p,
                    subscriptionPaymentSourceId: a,
                });
            !(function (e) {
                let {
                        giftCardWallet: t,
                        isWalletBalanceLoaded: n,
                        walletCoversSubtotal: l,
                        isGiftCardCreditsChecked: a,
                        subscriptionPaymentSourceId: s,
                        handleGiftCardCreditsToggle: o,
                        pendingGiftCardWalletSelection: c,
                        setPendingGiftCardWalletSelection: d,
                    } = e,
                    m = (0, r.bG)([u.A], () => null != t && u.A.getIsFetching(t.id), [t]),
                    p = i.useRef(!1);
                i.useEffect(() => {
                    if (!c) {
                        p.current = !1;
                        return;
                    }
                    if (null != t) {
                        if (m) {
                            p.current = !0;
                            return;
                        }
                        if (n) {
                            if ((null != s && s !== t.id) || a) return void d(!1);
                            if (l) {
                                (o(!0), d(!1));
                                return;
                            }
                            p.current && d(!1);
                        }
                    }
                }, [c, t, m, n, l, a, s, o, d]);
            })({
                giftCardWallet: P,
                isWalletBalanceLoaded: x,
                walletCoversSubtotal: I,
                isGiftCardCreditsChecked: v,
                subscriptionPaymentSourceId: a,
                handleGiftCardCreditsToggle: _,
                pendingGiftCardWalletSelection: s,
                setPendingGiftCardWalletSelection: c,
            });
            let b = i.useMemo(() => {
                    let e = h.find((e) => e.isDefault);
                    return null != e ? e.id : void 0;
                }, [h]),
                N = (0, r.bG)([d.A], () => d.A.hidePersonalInformation ?? !1);
            return {
                giftCardsEnabled: C,
                giftCardCheckboxProps: g,
                walletCoversSubtotal: I,
                walletCoversTotal: y,
                basePaymentSourceDropdownProps: i.useMemo(
                    () => ({
                        selectedPaymentSourceId: E,
                        paymentSources: h,
                        defaultPaymentSourceId: b,
                        hidePersonalInformation: N,
                        onChange: S,
                        dropdownLoading: m,
                    }),
                    [E, h, b, N, S, m],
                ),
                isSubscriptionPaidByWallet: A,
                hidePersonalInformation: N,
                isSplitPaymentMode: T,
            };
        })({
            paymentSourceId: M,
            setPaymentSourceId: O,
            location: C,
            subscriptionPaymentSourceId: I,
            pendingGiftCardWalletSelection: L,
            setPendingGiftCardWalletSelection: k,
        }),
        {
            priceOptions: V,
            setCurrency: Y,
            expressCheckoutVisibilityState: K,
            isOrderLocked: Z,
            refetchInvoicePreviews: q,
        } = (0, f.t4)((e) => ({
            priceOptions: e.checkoutPriceOptions,
            setCurrency: e.setCheckoutCurrency,
            expressCheckoutVisibilityState: e.getExpressCheckoutVisibilityState(),
            isOrderLocked: e.get("isOrderLocked"),
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        {
            shouldExpressCheckoutBeVisible: z,
            isExpressCheckoutEnabledForPaymentSelect: $,
            shouldDisablePaymentSelect: Q,
            isLoading: J,
        } = K,
        { dropdownCurrencies: X, displayCurrency: ee } = (0, v.Jn)(),
        et = i.useCallback(() => {
            (k(!0), q());
        }, [q]),
        en = i.useMemo(() => Z || Q || (h ?? !1), [Z, Q, h]),
        { giftCardCheckboxProps: el, disabled: ei } = i.useMemo(
            () =>
                null != T
                    ? T({ giftCardCheckboxProps: D, disabled: en }, { isSubscriptionPaidByWallet: B })
                    : { giftCardCheckboxProps: D, disabled: en },
            [en, T, D, B],
        ),
        er = null != el && !0 === el.locked,
        ea = i.useMemo(() => {
            if (null != R)
                return R({
                    isSubscriptionPaidByWallet: B,
                    selectedSource: F.paymentSources.find((e) => e.id === F.selectedPaymentSourceId),
                    hidePersonalInformation: H,
                });
        }, [R, B, F, H]),
        es = i.useMemo(() => {
            if (!y)
                return {
                    label: g.intl.string(g.t["/AAR02"]),
                    selectedCurrency: V.currency ?? ee,
                    currencies: X,
                    onChange: Y,
                    disabled: ei,
                };
        }, [y, V.currency, ee, X, Y, ei]),
        eo = i.useMemo(() => ({ ...F, ...p, onPaymentSourceAdd: E }), [F, E, p]),
        eu = null != el && el.checked,
        ec = W || U || er,
        ed = i.useMemo(() => {
            if (!w || null == el) return null;
            let e = ec ? j.r : j.K,
                t = el.disabled || ei;
            return (0, l.jsx)("div", { className: e, children: (0, l.jsx)(x.o, { ...el, disabled: t }) });
        }, [w, el, ec, ei]),
        em = w && eu,
        ep = em && W && G,
        eh = em && !W && ec,
        eC = null != ea,
        ef = ep && eo.paymentSources.length > 0,
        eE = i.useMemo(() => {
            if (null != ea) return ea;
            let e = z ? g.intl.string(S.default.BLu9EI) : void 0,
                t = z || J;
            return (0, l.jsx)(s.Ay, {
                ...eo,
                disabled: ei || ef,
                addPaymentSourceVariant: ep || t ? "secondary" : "primary",
                addPaymentSourceText: e,
            });
        }, [ea, ei, ef, ep, eo, z, J]),
        [eS, eg] = i.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(a.D, {
                label: c,
                children: [
                    $ &&
                        (0, l.jsx)(m.Zr, {
                            stripeExpressCheckoutComponent: (0, l.jsx)(m.E1, {
                                className: N.KV,
                                type: "vault_only",
                                isSubmitting: eS,
                                setIsSubmitting: eg,
                            }),
                            fallbackComponent: null,
                            showDividerBelow: !eh,
                        }),
                    ec && ed,
                    !eh && eE,
                    !ec && ed,
                    !eC && !em && void 0 !== es && (0, l.jsx)(b.q, { ...es }),
                ],
            }),
            w ? (0, l.jsx)(A, { onGiftCardRedeemed: et }) : null,
            (0, l.jsx)(P, { onPaymentSourceAdd: E }),
            (0, l.jsx)(_.B, {}),
        ],
    });
}
function O(e) {
    let { premiumSubscriptionPaymentSourceId: t, ...n } = e,
        { disableSourceChangeTooltipText: r, hasLockedPaymentSource: a } = i.useMemo(
            () =>
                null != t
                    ? { hasLockedPaymentSource: !0, disableSourceChangeTooltipText: g.intl.string(S.default.UdSuwf) }
                    : { hasLockedPaymentSource: !1, disableSourceChangeTooltipText: void 0 },
            [t],
        ),
        o = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n, selectorDisabled: l } = t;
                if (null == e) return null;
                let i = a && n,
                    s = a ? r : void 0,
                    o = !i && (e.disabled || l),
                    u = s ?? e.disabledTooltip;
                return { ...e, disabled: o, disabledTooltip: u, locked: i, showDisabledInfoIcon: null == s };
            },
            [a, r],
        ),
        u = i.useCallback(
            (e, t) => {
                let { isSubscriptionPaidByWallet: n } = t,
                    l = e.disabled || (a && !n);
                return {
                    giftCardCheckboxProps: o(e.giftCardCheckboxProps, {
                        isSubscriptionPaidByWallet: n,
                        selectorDisabled: l,
                    }),
                    disabled: l,
                };
            },
            [a, o],
        ),
        d = i.useCallback(
            (e) => {
                let { isSubscriptionPaidByWallet: t, selectedSource: n, hidePersonalInformation: i } = e;
                if (!a || t || null == r || null == n) return null;
                let o = n instanceof c.A ? n.source : n,
                    { brand: u, label: d } = (0, s.Sm)(o, i);
                return (0, l.jsx)(T.S, { label: d ?? "", icon: u ?? void 0, tooltipText: r });
            },
            [a, r],
        );
    return (0, l.jsx)(R, {
        ...n,
        resolveInternalState: u,
        renderCustomPaymentSourceSelectorContent: d,
        subscriptionPaymentSourceId: t,
    });
}
