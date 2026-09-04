n.d(t, { A: () => y, iB: () => f, Y0: () => S });
var l = n(582128),
    i = n(702841),
    r = n(206441),
    a = n(166403),
    s = n(459357),
    o = n(176095),
    u = n(11939),
    c = n(652215);
function d(e) {
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
        (this.checkoutPaymentSources = e),
            (this.isReady = i),
            (this.pendingPaymentSourceId = r),
            (this.selectedPaymentSourceId = a),
            (this.dropdownPaymentSources = t),
            (this.subscriptionPaymentSourceId = n),
            (this.giftCardWallet = l),
            (this.giftCardsEnabled = s),
            (this.hasInitialPaymentSourceSeed = o),
            (this.hasAddedPaymentSourceThisSession = u);
    }
    get hasPaymentSourcesFromCheckoutStore() {
        return this.isReady && this.checkoutPaymentSources.length > 0;
    }
    get isPendingPaymentSourceEqualToCurrent() {
        return null != this.pendingPaymentSourceId && this.pendingPaymentSourceId === this.selectedPaymentSourceId;
    }
    getResolvedPaymentSourceId() {
        return d({
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
                return (t.type !== c.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
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
var p = n(375708),
    C = n(986485);
function h(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        a = l.useMemo(() => (0, u.N)(n)?.id, [n]),
        { checkoutInvoicePreview: s, renewalInvoicePreview: c } = (0, r.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            renewalInvoicePreview: e.renewalInvoicePreview,
        })),
        d = (0, r.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: l } = e;
            return null != t && null == n && null == l;
        }),
        m = E(s),
        p = E(c),
        C = null != m && 0 === m && null != p,
        h = 0 === m && d,
        f = C ? p : m,
        S = C ? (c?.total ?? null) : s?.total,
        y = (0, i.bG)([o.A], () => (t && null != a ? o.A.getBalance(a) : null), [t, a]);
    return t && null != y
        ? {
              walletCoversSubtotal: null != f && y.amount >= f,
              walletCoversTotal: null != S && y.amount >= S,
              walletId: a,
              isWalletBalanceLoaded: null != f && !h,
              isWalletCoverageLoading: h,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: a,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function f(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, s.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: o,
        } = h({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return o && null != n && n === a && !r;
}
function E(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function S(e) {
    let t,
        n,
        {
            checkoutPaymentSources: i,
            paymentSourceId: a,
            setPaymentSourceId: o,
            location: f,
            isReady: E = !0,
            subscriptionPaymentSourceId: S,
        } = e,
        { enabled: y } = (0, s.c)({ location: f }),
        {
            pendingPaymentSourceId: I,
            hasInitialPaymentSourceSeed: g,
            hasAddedPaymentSourceThisSession: A,
        } = (0, r.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
        })),
        { dropdownPaymentSources: P, giftCardWallet: v } = l.useMemo(() => {
            let e = i.filter((e) => e.type !== c.hes.TDS_WALLET);
            return y
                ? { dropdownPaymentSources: e, giftCardWallet: (0, u.N)(i) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [i, y]),
        [_, x] = l.useState(null),
        T = null != v && a === v.id,
        N = l.useMemo(
            () =>
                null != _ ? _ : d({ giftCardWallet: null, dropdownPaymentSources: P, subscriptionPaymentSourceId: S }),
            [P, S, _],
        ),
        b = l.useMemo(() => (T ? N : (a ?? null)), [N, T, a]),
        j = l.useMemo(
            () => ({
                checkoutPaymentSources: i,
                dropdownPaymentSources: P,
                subscriptionPaymentSourceId: S,
                giftCardWallet: v,
                isReady: E,
                pendingPaymentSourceId: I,
                paymentSourceId: a,
                giftCardsEnabled: y,
                hasInitialPaymentSourceSeed: g,
                hasAddedPaymentSourceThisSession: A,
            }),
            [i, P, S, v, E, I, a, y, g, A],
        );
    (t = l.useRef(!1)),
        (n = l.useMemo(() => new m(j), [j])),
        l.useEffect(() => {
            let { shouldSet: e, initialPaymentSourceId: l } = n.checkAndResolveInitialPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && o(l);
        }, [n, o]),
        l.useEffect(() => {
            let { shouldSet: e, correctedPaymentSourceId: l } = n.resolveSelfCorrectPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && o(l);
        }, [n, o]);
    let R = l.useCallback(
            (e) => {
                o(null != e ? e.id : null);
            },
            [o],
        ),
        M = l.useCallback(
            (e) => {
                if (e && null != v) {
                    a !== v.id && x(a ?? null), o(v.id);
                    return;
                }
                o(N);
            },
            [o, v, a, N],
        ),
        {
            walletCoversSubtotal: O,
            walletCoversTotal: L,
            isWalletBalanceLoaded: k,
            isWalletCoverageLoading: w,
        } = h({ giftCardsEnabled: y, checkoutPaymentSources: i }),
        U = null != S && null != v && S === v.id;
    l.useEffect(() => {
        !U && k && !O && T && o(N);
    }, [U, k, O, T, o, N]);
    let D = l.useMemo(
        () =>
            null == v
                ? null
                : {
                      giftCardWallet: v,
                      checked: T,
                      onChange: M,
                      loading: w,
                      disabled: !w && !O,
                      disabledTooltip: w || O ? void 0 : p.intl.string(C.default.ccWIdu),
                  },
        [v, T, M, O, w],
    );
    return {
        giftCardsEnabled: y,
        dropdownPaymentSources: P,
        dropdownPaymentSourceId: b,
        giftCardWallet: v,
        isGiftCardCreditsChecked: T,
        isSubscriptionPaidByWallet: U,
        handleGiftCardCreditsToggle: M,
        handleDropdownPaymentSourceChange: R,
        giftCardCheckboxProps: D,
        walletCoversSubtotal: O,
        walletCoversTotal: L,
        isWalletBalanceLoaded: k,
        isWalletCoverageLoading: w,
    };
}
function y(e) {
    let { location: t, message: n } = e,
        o = (0, i.bG)([a.A], () => {
            let e = a.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        c = (0, r.t4)((e) => e.get("checkoutPaymentSources")),
        { enabled: d } = (0, s.c)({ location: t }),
        m = l.useMemo(() => (d ? (0, u.N)(c) : null), [c, d]),
        p = null != o && null != m && o === m.id,
        { walletCoversTotal: C, isWalletBalanceLoaded: f } = h({ giftCardsEnabled: d, checkoutPaymentSources: c });
    return l.useMemo(() => {
        if (p && f && !C) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [p, f, C, n]);
}
