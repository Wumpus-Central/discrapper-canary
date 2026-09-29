n.d(t, { A: () => I, iB: () => E, Y0: () => y });
var l = n(582128),
    i = n(702841),
    r = n(263532),
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
var h = n(375708),
    C = n(693351);
function f(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        a = l.useMemo(() => (0, c.N)(n)?.id, [n]),
        { checkoutInvoicePreview: s, renewalInvoicePreview: o } = (0, r.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
        })),
        d = (0, r.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: l } = e;
            return null != t && null == n && null == l;
        }),
        p = S(s),
        m = S(o),
        h = null != p && 0 === p && null != m,
        C = 0 === p && d,
        f = h ? m : p,
        E = h ? (o?.total ?? null) : s?.total,
        y = (0, i.bG)([u.A], () => (t && null != a ? u.A.getBalance(a) : null), [t, a]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != f && y.amount >= f,
              walletCoversTotal: null != E && y.amount >= E,
              walletId: a,
              isWalletBalanceLoaded: null != f && !C,
              isWalletCoverageLoading: C,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: a,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function E(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: o,
        } = f({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return o && null != n && n === a && !r;
}
function S(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function y(e) {
    let t,
        n,
        {
            checkoutPaymentSources: i,
            paymentSourceId: a,
            setPaymentSourceId: u,
            location: E,
            isReady: S = !0,
            subscriptionPaymentSourceId: y,
        } = e,
        { enabled: I } = (0, s.c)({ location: E }),
        { enabled: g } = (0, o.U)({ location: E }),
        {
            pendingPaymentSourceId: A,
            hasInitialPaymentSourceSeed: P,
            hasAddedPaymentSourceThisSession: v,
            purchaseType: _,
            applyWalletBalance: x,
            setApplyWalletBalance: T,
        } = (0, r.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
            purchaseType: e.purchaseType,
            applyWalletBalance: e.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
        })),
        { dropdownPaymentSources: N, giftCardWallet: b } = l.useMemo(() => {
            let e = i.filter((e) => e.type !== d.hes.TDS_WALLET);
            return I
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(i) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [i, I]),
        j = g && _ === d.VVm.ONE_TIME && null != b,
        R = j ? null : b,
        [M, O] = l.useState(null),
        L = null != b && a === b.id,
        k = l.useMemo(
            () =>
                null != M ? M : p({ giftCardWallet: null, dropdownPaymentSources: N, subscriptionPaymentSourceId: y }),
            [N, y, M],
        ),
        w = l.useMemo(() => (L ? k : (a ?? null)), [k, L, a]),
        U = l.useMemo(
            () => ({
                checkoutPaymentSources: i,
                dropdownPaymentSources: N,
                subscriptionPaymentSourceId: y,
                giftCardWallet: R,
                isReady: S,
                pendingPaymentSourceId: A,
                paymentSourceId: a,
                giftCardsEnabled: I,
                hasInitialPaymentSourceSeed: P,
                hasAddedPaymentSourceThisSession: v,
            }),
            [i, N, y, R, S, A, a, I, P, v],
        );
    ((t = l.useRef(!1)),
        (n = l.useMemo(() => new m(U), [U])),
        l.useEffect(() => {
            let { shouldSet: e, initialPaymentSourceId: l } = n.checkAndResolveInitialPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && u(l);
        }, [n, u]),
        l.useEffect(() => {
            let { shouldSet: e, correctedPaymentSourceId: l } = n.resolveSelfCorrectPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && u(l);
        }, [n, u]));
    let D = l.useCallback(
            (e) => {
                u(null != e ? e.id : null);
            },
            [u],
        ),
        G = l.useCallback(
            (e) => {
                if (e && null != b) {
                    (a !== b.id && O(a ?? null), u(b.id));
                    return;
                }
                u(k);
            },
            [u, b, a, k],
        ),
        F = l.useCallback(
            (e) => {
                T(e);
            },
            [T],
        ),
        {
            walletCoversSubtotal: B,
            walletCoversTotal: H,
            isWalletBalanceLoaded: W,
            isWalletCoverageLoading: Y,
        } = f({ giftCardsEnabled: I, checkoutPaymentSources: i }),
        V = null != y && null != b && y === b.id;
    l.useEffect(() => {
        !V && W && !B && L && u(k);
    }, [V, W, B, L, u, k]);
    let K = l.useMemo(
        () =>
            null == b
                ? null
                : j
                  ? {
                        giftCardWallet: b,
                        checked: !0 === x,
                        onChange: F,
                        loading: !1,
                        disabled: !1,
                        disabledTooltip: void 0,
                    }
                  : {
                        giftCardWallet: b,
                        checked: L,
                        onChange: G,
                        loading: Y,
                        disabled: !Y && !B,
                        disabledTooltip: Y || B ? void 0 : h.intl.string(C.default.ccWIdu),
                    },
        [b, j, x, F, L, G, B, Y],
    );
    return {
        giftCardsEnabled: I,
        dropdownPaymentSources: N,
        dropdownPaymentSourceId: w,
        giftCardWallet: b,
        isGiftCardCreditsChecked: L,
        isSubscriptionPaidByWallet: V,
        handleGiftCardCreditsToggle: G,
        handleDropdownPaymentSourceChange: D,
        giftCardCheckboxProps: K,
        walletCoversSubtotal: B,
        walletCoversTotal: H,
        isWalletBalanceLoaded: W,
        isWalletCoverageLoading: Y,
        isSplitPaymentMode: j,
    };
}
function I(e) {
    let { location: t, message: n } = e,
        o = (0, i.bG)([a.A], () => {
            let e = a.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        u = (0, r.t4)((e) => e.get("checkoutPaymentSources")),
        { enabled: d } = (0, s.c)({ location: t }),
        p = l.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        m = null != o && null != p && o === p.id,
        { walletCoversTotal: h, isWalletBalanceLoaded: C } = f({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return l.useMemo(() => {
        if (m && C && !h) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, C, h, n]);
}
