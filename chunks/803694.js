n.d(t, { A: () => A, iB: () => E, Y0: () => y });
var l = n(582128),
    i = n(702841),
    r = n(666646),
    a = n(87725),
    s = n(166403),
    o = n(459357),
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
    C = n(925332);
function f(e) {
    let { giftCardsEnabled: t, checkoutPaymentSources: n } = e,
        s = l.useMemo(() => (0, c.N)(n)?.id, [n]),
        o = (0, r.sw)(),
        d = (0, r.IK)(),
        p = (0, a.t4)((e) => {
            let { fetchRenewalInvoicePreviewRequest: t, renewalInvoicePreview: n, renewalInvoiceError: l } = e;
            return null != t && null == n && null == l;
        }),
        m = S(o),
        h = S(d),
        C = null != m && 0 === m && null != h,
        f = 0 === m && p,
        E = C ? h : m,
        y = C ? (d?.total ?? null) : o?.total,
        A = (0, i.bG)([u.A], () => (t && null != s ? u.A.getBalance(s) : null), [t, s]);
    return t && null != A
        ? {
              walletCoversSubtotal: null != E && A.amount >= E,
              walletCoversTotal: null != y && A.amount >= y,
              walletId: s,
              isWalletBalanceLoaded: null != E && !f,
              isWalletCoverageLoading: f,
          }
        : {
              walletCoversSubtotal: !1,
              walletCoversTotal: !1,
              walletId: s,
              isWalletBalanceLoaded: !1,
              isWalletCoverageLoading: !1,
          };
}
function E(e) {
    let { checkoutPaymentSources: t, paymentSourceId: n, location: l } = e,
        { enabled: i } = (0, o.c)({ location: l }),
        {
            walletCoversTotal: r,
            walletId: a,
            isWalletBalanceLoaded: s,
        } = f({ giftCardsEnabled: i, checkoutPaymentSources: t });
    return s && null != n && n === a && !r;
}
function S(e) {
    return null == e ? null : e.taxInclusive ? e.total : e.total - e.tax;
}
function y(e) {
    let t,
        n,
        {
            checkoutPaymentSources: i,
            paymentSourceId: r,
            setPaymentSourceId: s,
            location: u,
            isReady: E = !0,
            subscriptionPaymentSourceId: S,
        } = e,
        { enabled: y } = (0, o.c)({ location: u }),
        {
            pendingPaymentSourceId: A,
            hasInitialPaymentSourceSeed: P,
            hasAddedPaymentSourceThisSession: I,
        } = (0, a.t4)((e) => ({
            pendingPaymentSourceId: e.pendingPaymentSourceId,
            hasInitialPaymentSourceSeed: null != e.initialPaymentSourceId,
            hasAddedPaymentSourceThisSession: e.hasAddedPaymentSourceThisSession,
        })),
        { dropdownPaymentSources: g, giftCardWallet: v } = l.useMemo(() => {
            let e = i.filter((e) => e.type !== d.hes.TDS_WALLET);
            return y
                ? { dropdownPaymentSources: e, giftCardWallet: (0, c.N)(i) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [i, y]),
        [_, T] = l.useState(null),
        x = null != v && r === v.id,
        N = l.useMemo(
            () =>
                null != _ ? _ : p({ giftCardWallet: null, dropdownPaymentSources: g, subscriptionPaymentSourceId: S }),
            [g, S, _],
        ),
        b = l.useMemo(() => (x ? N : (r ?? null)), [N, x, r]),
        R = l.useMemo(
            () => ({
                checkoutPaymentSources: i,
                dropdownPaymentSources: g,
                subscriptionPaymentSourceId: S,
                giftCardWallet: v,
                isReady: E,
                pendingPaymentSourceId: A,
                paymentSourceId: r,
                giftCardsEnabled: y,
                hasInitialPaymentSourceSeed: P,
                hasAddedPaymentSourceThisSession: I,
            }),
            [i, g, S, v, E, A, r, y, P, I],
        );
    (t = l.useRef(!1)),
        (n = l.useMemo(() => new m(R), [R])),
        l.useEffect(() => {
            let { shouldSet: e, initialPaymentSourceId: l } = n.checkAndResolveInitialPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && s(l);
        }, [n, s]),
        l.useEffect(() => {
            let { shouldSet: e, correctedPaymentSourceId: l } = n.resolveSelfCorrectPaymentSourceId({
                hasCheckedInitialPaymentSourceRef: t,
            });
            e && s(l);
        }, [n, s]);
    let j = l.useCallback(
            (e) => {
                s(null != e ? e.id : null);
            },
            [s],
        ),
        M = l.useCallback(
            (e) => {
                if (e && null != v) {
                    r !== v.id && T(r ?? null), s(v.id);
                    return;
                }
                s(N);
            },
            [s, v, r, N],
        ),
        {
            walletCoversSubtotal: O,
            walletCoversTotal: L,
            isWalletBalanceLoaded: k,
            isWalletCoverageLoading: w,
        } = f({ giftCardsEnabled: y, checkoutPaymentSources: i }),
        U = null != S && null != v && S === v.id;
    l.useEffect(() => {
        !U && k && !O && x && s(N);
    }, [U, k, O, x, s, N]);
    let D = l.useMemo(
        () =>
            null == v
                ? null
                : {
                      giftCardWallet: v,
                      checked: x,
                      onChange: M,
                      loading: w,
                      disabled: !w && !O,
                      disabledTooltip: w || O ? void 0 : h.intl.string(C.default.ccWIdu),
                  },
        [v, x, M, O, w],
    );
    return {
        giftCardsEnabled: y,
        dropdownPaymentSources: g,
        dropdownPaymentSourceId: b,
        giftCardWallet: v,
        isGiftCardCreditsChecked: x,
        isSubscriptionPaidByWallet: U,
        handleGiftCardCreditsToggle: M,
        handleDropdownPaymentSourceChange: j,
        giftCardCheckboxProps: D,
        walletCoversSubtotal: O,
        walletCoversTotal: L,
        isWalletBalanceLoaded: k,
        isWalletCoverageLoading: w,
    };
}
function A(e) {
    let { location: t, message: n } = e,
        r = (0, i.bG)([s.A], () => {
            let e = s.A.getPremiumTypeSubscription();
            return null != e ? e.paymentSourceId : null;
        }),
        u = (0, a.t4)((e) => e.get("checkoutPaymentSources")),
        { enabled: d } = (0, o.c)({ location: t }),
        p = l.useMemo(() => (d ? (0, c.N)(u) : null), [u, d]),
        m = null != r && null != p && r === p.id,
        { walletCoversTotal: h, isWalletBalanceLoaded: C } = f({ giftCardsEnabled: d, checkoutPaymentSources: u });
    return l.useMemo(() => {
        if (m && C && !h) return { type: "warning", key: "wallet-insufficient-balance", message: n };
    }, [m, C, h, n]);
}
