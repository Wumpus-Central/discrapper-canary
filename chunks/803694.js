n.d(t, { A: () => A, iB: () => S, Y0: () => y });
var l = n(582128),
    i = n(702841),
    r = n(661899),
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
    C = n(986485);
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
        p = E(s),
        m = E(o),
        h = null != p && 0 === p && null != m,
        C = 0 === p && d,
        f = h ? m : p,
        S = h ? (o?.total ?? null) : s?.total,
        y = (0, i.bG)([u.A], () => (t && null != a ? u.A.getBalance(a) : null), [t, a]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != f && y.amount >= f,
              walletCoversTotal: null != S && y.amount >= S,
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
function S(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: o,
        } = f({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return o && null != n && n === a && !r;
}
function E(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function y(e) {
    let t,
        n,
        {
            checkoutPaymentSources: i,
            paymentSourceId: a,
            setPaymentSourceId: u,
            location: S,
            isReady: E = !0,
            subscriptionPaymentSourceId: y,
        } = e,
        { enabled: A } = (0, s.c)({ location: S }),
        { enabled: I } = (0, o.U)({ location: S }),
        {
            pendingPaymentSourceId: g,
            hasInitialPaymentSourceSeed: P,
            hasAddedPaymentSourceThisSession: v,
            purchaseType: x,
            applyWalletBalance: _,
            setApplyWalletBalance: T,
            setCheckoutCurrency: N,
        } = (0, r.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
            purchaseType: e.purchaseType,
            applyWalletBalance: e.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        { dropdownPaymentSources: b, giftCardWallet: j } = l.useMemo(() => {
            let e = i.filter((e) => e.type !== d.hes.TDS_WALLET);
            return A
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(i) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [i, A]),
        R = I && x === d.VVm.ONE_TIME && null != j,
        O = R ? null : j,
        [M, L] = l.useState(null),
        k = null != j && a === j.id,
        w = l.useMemo(
            () =>
                null != M ? M : p({ giftCardWallet: null, dropdownPaymentSources: b, subscriptionPaymentSourceId: y }),
            [b, y, M],
        ),
        D = l.useMemo(() => (k ? w : (a ?? null)), [w, k, a]),
        U = l.useMemo(
            () => ({
                checkoutPaymentSources: i,
                dropdownPaymentSources: b,
                subscriptionPaymentSourceId: y,
                giftCardWallet: O,
                isReady: E,
                pendingPaymentSourceId: g,
                paymentSourceId: a,
                giftCardsEnabled: A,
                hasInitialPaymentSourceSeed: P,
                hasAddedPaymentSourceThisSession: v,
            }),
            [i, b, y, O, E, g, a, A, P, v],
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
    let G = l.useCallback(
            (e) => {
                u(null != e ? e.id : null);
            },
            [u],
        ),
        { giftCardCurrency: F } = (0, c.h)(),
        B = l.useCallback(() => {
            null != F && N(F);
        }, [F, N]),
        H = l.useCallback(
            (e) => {
                if (e && null != j) {
                    (a !== j.id && L(a ?? null), B(), u(j.id));
                    return;
                }
                u(w);
            },
            [u, j, a, w, B],
        ),
        W = l.useCallback(
            (e) => {
                (e && B(), T(e));
            },
            [T, B],
        ),
        {
            walletCoversSubtotal: Y,
            walletCoversTotal: V,
            isWalletBalanceLoaded: K,
            isWalletCoverageLoading: q,
        } = f({ giftCardsEnabled: A, checkoutPaymentSources: i }),
        Z = null != y && null != j && y === j.id;
    l.useEffect(() => {
        !Z && K && !Y && k && u(w);
    }, [Z, K, Y, k, u, w]);
    let z = l.useMemo(
        () =>
            null == j
                ? null
                : R
                  ? {
                        giftCardWallet: j,
                        checked: !0 === _,
                        onChange: W,
                        loading: !1,
                        disabled: !1,
                        disabledTooltip: void 0,
                    }
                  : {
                        giftCardWallet: j,
                        checked: k,
                        onChange: H,
                        loading: q,
                        disabled: !q && !Y,
                        disabledTooltip: q || Y ? void 0 : h.intl.string(C.default.ccWIdu),
                    },
        [j, R, _, W, k, H, Y, q],
    );
    return {
        giftCardsEnabled: A,
        dropdownPaymentSources: b,
        dropdownPaymentSourceId: D,
        giftCardWallet: j,
        isGiftCardCreditsChecked: k,
        isSubscriptionPaidByWallet: Z,
        handleGiftCardCreditsToggle: H,
        handleDropdownPaymentSourceChange: G,
        giftCardCheckboxProps: z,
        walletCoversSubtotal: Y,
        walletCoversTotal: V,
        isWalletBalanceLoaded: K,
        isWalletCoverageLoading: q,
        isSplitPaymentMode: R,
    };
}
function A(e) {
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
