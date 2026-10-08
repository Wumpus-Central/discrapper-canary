n.d(t, { A: () => y, iB: () => S, Y0: () => E });
var l = n(582128),
    i = n(702841),
    r = n(642639),
    a = n(166403),
    s = n(459357),
    o = n(813873),
    u = n(176095),
    c = n(11939),
    d = n(652215);
function p(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l, defaultPaymentSourceId: i } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    if (null != i) {
        let e = n.find((e) => e.id === i);
        if (null != e && e.enabled) return i;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
class m {
    checkoutPaymentSources;
    isReady;
    pendingPaymentSourceId;
    selectedPaymentSourceId;
    dropdownPaymentSources;
    subscriptionPaymentSourceId;
    giftCardWallet;
    giftCardsEnabled;
    hasInitialPaymentSourceSeed;
    hasAddedPaymentSourceThisSession;
    constructor({
        checkoutPaymentSources: e,
        dropdownPaymentSources: t,
        subscriptionPaymentSourceId: n,
        giftCardWallet: l,
        isReady: i,
        pendingPaymentSourceId: r,
        paymentSourceId: a,
        giftCardsEnabled: s,
        hasInitialPaymentSourceSeed: o,
        hasAddedPaymentSourceThisSession: u,
    }) {
        ((this.checkoutPaymentSources = e),
            (this.isReady = i),
            (this.pendingPaymentSourceId = r),
            (this.selectedPaymentSourceId = a),
            (this.dropdownPaymentSources = t),
            (this.subscriptionPaymentSourceId = n),
            (this.giftCardWallet = l),
            (this.giftCardsEnabled = s),
            (this.hasInitialPaymentSourceSeed = o),
            (this.hasAddedPaymentSourceThisSession = u));
    }
    get hasPaymentSourcesFromCheckoutStore() {
        return this.isReady && this.checkoutPaymentSources.length > 0;
    }
    get isPendingPaymentSourceEqualToCurrent() {
        return null != this.pendingPaymentSourceId && this.pendingPaymentSourceId === this.selectedPaymentSourceId;
    }
    getResolvedPaymentSourceId() {
        return p({
            giftCardWallet: this.giftCardWallet,
            dropdownPaymentSources: this.dropdownPaymentSources,
            subscriptionPaymentSourceId: this.subscriptionPaymentSourceId,
            defaultPaymentSourceId: this.selectedPaymentSourceId,
        });
    }
    shouldSetInitialPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return (
            !t.current &&
            !!this.hasPaymentSourcesFromCheckoutStore &&
            !this.isPendingPaymentSourceEqualToCurrent &&
            ((!this.hasInitialPaymentSourceSeed && !this.hasAddedPaymentSourceThisSession) ||
                !this.isSelectedPaymentSourceValid)
        );
    }
    checkAndResolveInitialPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        if (!this.shouldSetInitialPaymentSourceId({ hasCheckedInitialPaymentSourceRef: t }))
            return { shouldSet: !1, initialPaymentSourceId: null };
        t.current = !0;
        let n = this.getResolvedPaymentSourceId();
        return n !== this.selectedPaymentSourceId
            ? { shouldSet: !0, initialPaymentSourceId: n }
            : { shouldSet: !1, initialPaymentSourceId: null };
    }
    get isSelectedPaymentSourceValid() {
        return this.checkoutPaymentSources.some((e) =>
            (function (e) {
                let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                return (t.type !== d.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
            })({
                paymentSource: e,
                paymentSourceId: this.selectedPaymentSourceId,
                giftCardsEnabled: this.giftCardsEnabled,
            }),
        );
    }
    shouldSelfCorrectPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return (
            !!this.hasPaymentSourcesFromCheckoutStore &&
            null != this.selectedPaymentSourceId &&
            !!t.current &&
            !this.isPendingPaymentSourceEqualToCurrent &&
            !this.isSelectedPaymentSourceValid
        );
    }
    resolveSelfCorrectPaymentSourceId(e) {
        let { hasCheckedInitialPaymentSourceRef: t } = e;
        return this.shouldSelfCorrectPaymentSourceId({ hasCheckedInitialPaymentSourceRef: t })
            ? { shouldSet: !0, correctedPaymentSourceId: this.getResolvedPaymentSourceId() }
            : { shouldSet: !1, correctedPaymentSourceId: null };
    }
}
var h = n(660183),
    C = n(693351);
function f(e) {
    let { giftCardsEnabled: t } = e,
        {
            walletId: n,
            invoiceSubtotalAmount: l,
            invoiceTotalAmount: a,
            isWalletCoverageLoading: s,
        } = (0, r.t4)((e) => ({
            walletId: e.getGiftCardWallet()?.id,
            invoiceSubtotalAmount: e.getWalletCoverageSubtotal(),
            invoiceTotalAmount: e.getWalletCoverageTotal(),
            isWalletCoverageLoading: e.getIsWalletCoverageLoading(),
        })),
        o = (0, i.bG)([u.A], () => (t && null != n ? u.A.getBalance(n) : null), [t, n]);
    return t && null != o
        ? {
              walletCoversSubtotal: null != l && o.amount >= l,
              walletCoversTotal: null != a && o.amount >= a,
              walletId: n,
              isWalletBalanceLoaded: null != l && !s,
              isWalletCoverageLoading: s,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: n,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function S(e) {
    let { paymentSourceId: t, location: n } = e,
        { enabled: l } = (0, s.c)({ location: n }),
        { walletCoversTotal: i, walletId: r, isWalletBalanceLoaded: a } = f({ giftCardsEnabled: l });
    return a && null != t && t === r && !i;
}
function E(e) {
    let t,
        n,
        { paymentSourceId: i, setPaymentSourceId: a, location: u, isReady: S = !0, subscriptionPaymentSourceId: E } = e,
        { enabled: y } = (0, s.c)({ location: u }),
        { enabled: I } = (0, o.U)({ location: u }),
        {
            pendingPaymentSourceId: A,
            hasInitialPaymentSourceSeed: g,
            hasAddedPaymentSourceThisSession: P,
            purchaseType: v,
            applyWalletBalance: x,
            previewApplyWalletBalance: _,
            setApplyWalletBalance: T,
            setCheckoutCurrency: N,
            checkoutPaymentSources: b,
            dropdownPaymentSources: j,
            storeGiftCardWallet: R,
        } = (0, r.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
            purchaseType: e.purchaseType,
            applyWalletBalance: e.applyWalletBalance,
            previewApplyWalletBalance: e.checkoutInvoicePreview?.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
            setCheckoutCurrency: e.setCheckoutCurrency,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            dropdownPaymentSources: e.getDropdownPaymentSources(),
            storeGiftCardWallet: e.getGiftCardWallet(),
        })),
        O = y ? R : null,
        M = I && v === d.VVm.ONE_TIME && null != O,
        L = M ? null : O,
        [k, w] = l.useState(null),
        D = null != O && i === O.id,
        U = l.useMemo(
            () =>
                null != k ? k : p({ giftCardWallet: null, dropdownPaymentSources: j, subscriptionPaymentSourceId: E }),
            [j, E, k],
        ),
        G = l.useMemo(() => (D ? U : (i ?? null)), [U, D, i]),
        F = l.useMemo(
            () => ({
                checkoutPaymentSources: b,
                dropdownPaymentSources: j,
                subscriptionPaymentSourceId: E,
                giftCardWallet: L,
                isReady: S,
                pendingPaymentSourceId: A,
                paymentSourceId: i,
                giftCardsEnabled: y,
                hasInitialPaymentSourceSeed: g,
                hasAddedPaymentSourceThisSession: P,
            }),
            [b, j, E, L, S, A, i, y, g, P],
        );
    ((t = l.useRef(!1)),
        (n = l.useMemo(() => new m(F), [F])),
        l.useEffect(() => {
            let { shouldSet: e, initialPaymentSourceId: l } = n.checkAndResolveInitialPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && a(l);
        }, [n, a]),
        l.useEffect(() => {
            let { shouldSet: e, correctedPaymentSourceId: l } = n.resolveSelfCorrectPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && a(l);
        }, [n, a]));
    let B = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        { giftCardCurrency: H } = (0, c.h)(),
        W = l.useCallback(() => {
            null != H && N(H);
        }, [H, N]),
        V = l.useCallback(
            (e) => {
                if (e && null != O) {
                    (i !== O.id && w(i ?? null), W(), a(O.id));
                    return;
                }
                a(U);
            },
            [a, O, i, U, W],
        ),
        Y = l.useCallback(
            (e) => {
                (e && W(), T(e));
            },
            [T, W],
        ),
        {
            walletCoversSubtotal: K,
            walletCoversTotal: Z,
            isWalletBalanceLoaded: q,
            isWalletCoverageLoading: z,
        } = f({ giftCardsEnabled: y }),
        $ = null != E && null != O && E === O.id;
    l.useEffect(() => {
        !$ && q && !K && D && a(U);
    }, [$, q, K, D, a, U]);
    let Q = l.useMemo(
        () =>
            null == O
                ? null
                : M
                  ? {
                        giftCardWallet: O,
                        checked: (x ?? _) === !0,
                        onChange: Y,
                        loading: !1,
                        disabled: !1,
                        disabledTooltip: void 0,
                    }
                  : {
                        giftCardWallet: O,
                        checked: D,
                        onChange: V,
                        loading: z,
                        disabled: !z && !K,
                        disabledTooltip: z || K ? void 0 : h.intl.string(C.default.ccWIdu),
                    },
        [O, M, x, _, Y, D, V, K, z],
    );
    return {
        giftCardsEnabled: y,
        dropdownPaymentSources: j,
        dropdownPaymentSourceId: G,
        giftCardWallet: O,
        isGiftCardCreditsChecked: D,
        isSubscriptionPaidByWallet: $,
        handleGiftCardCreditsToggle: V,
        handleDropdownPaymentSourceChange: B,
        giftCardCheckboxProps: Q,
        walletCoversSubtotal: K,
        walletCoversTotal: Z,
        isWalletBalanceLoaded: q,
        isWalletCoverageLoading: z,
        isSplitPaymentMode: M,
    };
}
function y(e) {
    let { location: t, message: n } = e,
        o = (0, i.bG)([a.A], () => {
            let e = a.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        u = (0, r.t4)((e) => e.getGiftCardWallet()?.id),
        { enabled: c } = (0, s.c)({ location: t }),
        d = c && null != o && null != u && o === u,
        { walletCoversTotal: p, isWalletBalanceLoaded: m } = f({ giftCardsEnabled: c });
    return l.useMemo(() => {
        if (d && m && !p) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [d, m, p, n]);
}
