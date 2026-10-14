n.d(t, { A: () => I, iB: () => S, Y0: () => E });
var l = n(582128),
    i = n(702841),
    r = n(504560),
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
    C = n(986485);
function f(e) {
    let { giftCardsEnabled: t } = e,
        {
            walletId: n,
            invoiceSubtotalAmount: l,
            invoiceTotalAmount: a,
            isWalletCoverageLoading: s,
            walletLegBalance: o,
        } = (0, r.t4)((e) => ({
            walletId: e.getGiftCardWallet()?.id,
            invoiceSubtotalAmount: e.getWalletCoverageSubtotal(),
            invoiceTotalAmount: e.getWalletCoverageTotal(),
            isWalletCoverageLoading: e.getIsWalletCoverageLoading(),
            walletLegBalance: e.getWalletLegBalance(),
        })),
        c = (0, i.bG)([u.A], () => (t && null != n ? u.A.getBalance(n) : null), [t, n]),
        d = o ?? c?.amount ?? null;
    return t && null != d
        ? {
              walletCoversSubtotal: null != l && d >= l,
              walletCoversTotal: null != a && d >= a,
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
        { paymentSourceId: i, setPaymentSourceId: a, location: u, isReady: d = !0, subscriptionPaymentSourceId: S } = e,
        { enabled: E } = (0, s.c)({ location: u }),
        { enabled: I } = (0, o.U)({ location: u }),
        {
            pendingPaymentSourceId: A,
            hasInitialPaymentSourceSeed: g,
            hasAddedPaymentSourceThisSession: y,
            applyWalletBalance: P,
            previewApplyWalletBalance: v,
            setApplyWalletBalance: x,
            setCheckoutCurrency: _,
            checkoutPaymentSources: T,
            dropdownPaymentSources: N,
            storeGiftCardWallet: b,
            isSplitPaymentMode: j,
        } = (0, r.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
            applyWalletBalance: e.applyWalletBalance,
            previewApplyWalletBalance: e.checkoutInvoicePreview?.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
            setCheckoutCurrency: e.setCheckoutCurrency,
            checkoutPaymentSources: e.get("checkoutPaymentSources"),
            dropdownPaymentSources: e.getDropdownPaymentSources(),
            storeGiftCardWallet: e.getGiftCardWallet(),
            isSplitPaymentMode: e.getIsSplitPaymentMode({ splitPaymentsEnabled: I, giftCardsEnabled: E }),
        })),
        R = E ? b : null,
        O = j ? null : R,
        [M, L] = l.useState(null),
        k = null != R && i === R.id,
        w = l.useMemo(
            () =>
                null != M ? M : p({ giftCardWallet: null, dropdownPaymentSources: N, subscriptionPaymentSourceId: S }),
            [N, S, M],
        ),
        D = l.useMemo(() => (k ? w : (i ?? null)), [w, k, i]),
        U = l.useMemo(
            () => ({
                checkoutPaymentSources: T,
                dropdownPaymentSources: N,
                subscriptionPaymentSourceId: S,
                giftCardWallet: O,
                isReady: d,
                pendingPaymentSourceId: A,
                paymentSourceId: i,
                giftCardsEnabled: E,
                hasInitialPaymentSourceSeed: g,
                hasAddedPaymentSourceThisSession: y,
            }),
            [T, N, S, O, d, A, i, E, g, y],
        );
    ((t = l.useRef(!1)),
        (n = l.useMemo(() => new m(U), [U])),
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
    let G = l.useCallback(
            (e) => {
                a(null != e ? e.id : null);
            },
            [a],
        ),
        { giftCardCurrency: F } = (0, c.h)(),
        B = l.useCallback(() => {
            null != F && _(F);
        }, [F, _]),
        H = l.useCallback(
            (e) => {
                if (e && null != R) {
                    (i !== R.id && L(i ?? null), B(), a(R.id));
                    return;
                }
                a(w);
            },
            [a, R, i, w, B],
        ),
        W = l.useCallback(
            (e) => {
                (e && B(), x(e));
            },
            [x, B],
        ),
        {
            walletCoversSubtotal: Y,
            walletCoversTotal: V,
            isWalletBalanceLoaded: K,
            isWalletCoverageLoading: q,
        } = f({ giftCardsEnabled: E }),
        Z = null != S && null != R && S === R.id;
    (l.useEffect(() => {
        j && k && null != w && a(w);
    }, [j, k, w, a]),
        l.useEffect(() => {
            !Z && K && !Y && k && a(w);
        }, [Z, K, Y, k, a, w]));
    let z = l.useMemo(
        () =>
            null == R
                ? null
                : j
                  ? {
                        giftCardWallet: R,
                        checked: (P ?? v) === !0,
                        onChange: W,
                        loading: !1,
                        disabled: !1,
                        disabledTooltip: void 0,
                    }
                  : {
                        giftCardWallet: R,
                        checked: k,
                        onChange: H,
                        loading: q,
                        disabled: !q && !Y,
                        disabledTooltip: q || Y ? void 0 : h.intl.string(C.default.ccWIdu),
                    },
        [R, j, P, v, W, k, H, Y, q],
    );
    return {
        giftCardsEnabled: E,
        dropdownPaymentSources: N,
        dropdownPaymentSourceId: D,
        giftCardWallet: R,
        isGiftCardCreditsChecked: k,
        isSubscriptionPaidByWallet: Z,
        handleGiftCardCreditsToggle: H,
        handleDropdownPaymentSourceChange: G,
        giftCardCheckboxProps: z,
        walletCoversSubtotal: Y,
        walletCoversTotal: V,
        isWalletBalanceLoaded: K,
        isWalletCoverageLoading: q,
        isSplitPaymentMode: j,
    };
}
function I(e) {
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
