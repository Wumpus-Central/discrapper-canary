"use strict";
n.d(t, { Y: () => l });
var r = n(64700),
    i = n(202613),
    s = n(459357),
    a = n(652215);
function o(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: r } = e;
    if (null != t && (null == r || r === t.id)) return t.id;
    if (null != r) {
        let e = n.find((e) => e.id === r);
        if (null != e && e.enabled) return r;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
function l(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: l,
            location: u,
            isReady: c = !0,
            subscriptionPaymentSourceId: d,
            itemAmount: _,
        } = e,
        { enabled: f } = (0, s.c)({ location: u }),
        { dropdownPaymentSources: p, giftCardWallet: h } = r.useMemo(() => {
            let e = t.filter((e) => e.type !== a.hes.TDS_WALLET);
            return f
                ? { dropdownPaymentSources: e, giftCardWallet: t.find((e) => e.source instanceof i.LQ) ?? null }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, f]),
        [E, m] = r.useState(null),
        g = null != h && n === h.id,
        A = r.useMemo(
            () =>
                null != E ? E : o({ giftCardWallet: null, dropdownPaymentSources: p, subscriptionPaymentSourceId: d }),
            [p, d, E],
        ),
        I = r.useMemo(() => (g ? A : (n ?? null)), [A, g, n]),
        T = r.useRef(!1);
    r.useEffect(() => {
        !c ||
            0 === t.length ||
            (null != n &&
                t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: r } = e;
                        return (t.type !== a.hes.TDS_WALLET || !!r) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: f }),
                )) ||
            T.current ||
            ((T.current = !0), l(o({ giftCardWallet: h, dropdownPaymentSources: p, subscriptionPaymentSourceId: d })));
    }, [c, f, t, p, h, n, d, l]);
    let S = r.useCallback(
            (e) => {
                l(null != e ? e.id : null);
            },
            [l],
        ),
        y = r.useCallback(
            (e) => {
                if (e && null != h) {
                    n !== h.id && m(n ?? null), l(h.id);
                    return;
                }
                l(A);
            },
            [l, h, n, A],
        ),
        N = r.useMemo(
            () => (null == h ? null : { giftCardWallet: h, checked: g, onChange: y, itemAmount: _ }),
            [h, g, y, _],
        );
    return {
        giftCardsEnabled: f,
        dropdownPaymentSources: p,
        dropdownPaymentSourceId: I,
        giftCardWallet: h,
        isGiftCardCreditsChecked: g,
        handleGiftCardCreditsToggle: y,
        handleDropdownPaymentSourceChange: S,
        giftCardCheckboxProps: N,
    };
}
