"use strict";
n.d(t, { Y: () => c });
var r = n(64700),
    i = n(202613),
    s = n(459357),
    a = n(652215);
function o(e) {
    return e.find((e) => e.source instanceof i.LQ) ?? null;
}
function l(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: r } = e;
    if (null != t && (null == r || r === t.id)) return t.id;
    if (null != r) {
        let e = n.find((e) => e.id === r);
        if (null != e && e.enabled) return r;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
let u = (e) => {
    let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: r } = e;
    return (t.type !== a.hes.TDS_WALLET || !!r) && null != n && t.id === n && t.enabled;
};
function c(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: i,
            location: c,
            isReady: d = !0,
            subscriptionPaymentSourceId: _,
            itemAmount: f,
        } = e,
        { enabled: p } = (0, s.c)({ location: c }),
        { dropdownPaymentSources: h, giftCardWallet: m } = r.useMemo(() => {
            let e = t.filter((e) => e.type !== a.hes.TDS_WALLET);
            return p
                ? { dropdownPaymentSources: e, giftCardWallet: o(t) }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, p]),
        [E, g] = r.useState(null),
        A = null != m && n === m.id,
        I = r.useMemo(
            () =>
                null != E ? E : l({ giftCardWallet: null, dropdownPaymentSources: h, subscriptionPaymentSourceId: _ }),
            [h, _, E],
        ),
        T = r.useMemo(() => (A ? I : (n ?? null)), [I, A, n]),
        S = r.useRef(!1);
    r.useEffect(() => {
        !d ||
            0 === t.length ||
            (null != n && t.some((e) => u({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: p }))) ||
            S.current ||
            ((S.current = !0), i(l({ giftCardWallet: m, dropdownPaymentSources: h, subscriptionPaymentSourceId: _ })));
    }, [d, p, t, h, m, n, _, i]);
    let y = r.useCallback(
            (e) => {
                i(null != e ? e.id : null);
            },
            [i],
        ),
        v = r.useCallback(
            (e) => {
                if (e && null != m) {
                    n !== m.id && g(n ?? null), i(m.id);
                    return;
                }
                i(I);
            },
            [i, m, n, I],
        ),
        N = r.useMemo(
            () => (null == m ? null : { giftCardWallet: m, checked: A, onChange: v, itemAmount: f }),
            [m, A, v, f],
        );
    return {
        giftCardsEnabled: p,
        dropdownPaymentSources: h,
        dropdownPaymentSourceId: T,
        giftCardWallet: m,
        isGiftCardCreditsChecked: A,
        handleGiftCardCreditsToggle: v,
        handleDropdownPaymentSourceChange: y,
        giftCardCheckboxProps: N,
    };
}
