n.d(t, { Y: () => o });
var l = n(64700),
    i = n(202613),
    a = n(459357),
    r = n(652215);
function s(e) {
    let { giftCardWallet: t, dropdownPaymentSources: n, subscriptionPaymentSourceId: l } = e;
    if (null != t && (null == l || l === t.id)) return t.id;
    if (null != l) {
        let e = n.find((e) => e.id === l);
        if (null != e && e.enabled) return l;
    }
    return n.find((e) => e.enabled)?.id ?? null;
}
function o(e) {
    let {
            checkoutPaymentSources: t,
            paymentSourceId: n,
            setPaymentSourceId: o,
            location: u,
            isReady: c = !0,
            subscriptionPaymentSourceId: d,
            itemAmount: p,
        } = e,
        { enabled: m } = (0, a.c)({ location: u }),
        { dropdownPaymentSources: h, giftCardWallet: A } = l.useMemo(() => {
            let e = t.filter((e) => e.type !== r.hes.TDS_WALLET);
            return m
                ? { dropdownPaymentSources: e, giftCardWallet: t.find((e) => e.source instanceof i.LQ) ?? null }
                : { dropdownPaymentSources: e, giftCardWallet: null };
        }, [t, m]),
        [_, C] = l.useState(null),
        E = null != A && n === A.id,
        y = l.useMemo(
            () =>
                null != _ ? _ : s({ giftCardWallet: null, dropdownPaymentSources: h, subscriptionPaymentSourceId: d }),
            [h, d, _],
        ),
        f = l.useMemo(() => (E ? y : (n ?? null)), [y, E, n]),
        P = l.useRef(!1);
    l.useEffect(() => {
        !c ||
            0 === t.length ||
            (null != n &&
                t.some((e) =>
                    ((e) => {
                        let { paymentSource: t, paymentSourceId: n, giftCardsEnabled: l } = e;
                        return (t.type !== r.hes.TDS_WALLET || !!l) && null != n && t.id === n && t.enabled;
                    })({ paymentSource: e, paymentSourceId: n, giftCardsEnabled: m }),
                )) ||
            P.current ||
            ((P.current = !0), o(s({ giftCardWallet: A, dropdownPaymentSources: h, subscriptionPaymentSourceId: d })));
    }, [c, m, t, h, A, n, d, o]);
    let S = l.useCallback(
            (e) => {
                o(null != e ? e.id : null);
            },
            [o],
        ),
        x = l.useCallback(
            (e) => {
                if (e && null != A) {
                    n !== A.id && C(n ?? null), o(A.id);
                    return;
                }
                o(y);
            },
            [o, A, n, y],
        ),
        T = l.useMemo(
            () => (null == A ? null : { giftCardWallet: A, checked: E, onChange: x, itemAmount: p }),
            [A, E, x, p],
        );
    return {
        giftCardsEnabled: m,
        dropdownPaymentSources: h,
        dropdownPaymentSourceId: f,
        giftCardWallet: A,
        isGiftCardCreditsChecked: E,
        handleGiftCardCreditsToggle: x,
        handleDropdownPaymentSourceChange: S,
        giftCardCheckboxProps: T,
    };
}
