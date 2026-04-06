"use strict";
n.d(t, { Y: () => o });
var r = n(64700),
    i = n(202613),
    s = n(459357);
function a(e) {
    return e.find((e) => e.source instanceof i.LQ) ?? null;
}
function o(e) {
    let {
            checkoutPaymentSources: t,
            setPaymentSourceId: n,
            location: o,
            isReady: l = !0,
            subscriptionPaymentSourceId: u,
            itemAmount: c,
        } = e,
        { enabled: d } = (0, s.c)({ location: o }),
        { dropdownPaymentSources: _, giftCardWallet: f } = r.useMemo(
            () =>
                d
                    ? { dropdownPaymentSources: t.filter((e) => !(e.source instanceof i.LQ)), giftCardWallet: a(t) }
                    : { dropdownPaymentSources: t, giftCardWallet: null },
            [t, d],
        ),
        [p, h] = r.useState(void 0),
        [m, E] = r.useState(void 0),
        g = r.useMemo(() => (void 0 !== p ? p : null != f && (null == u || u === f.id)), [p, u, f]),
        A = r.useMemo(() => {
            if (void 0 !== m) return m;
            if (0 === _.length) return null;
            let e = _.find((e) => e.enabled)?.id ?? null;
            if (null != u) {
                let e = _.find((e) => e.id === u);
                if (null != e && e.enabled) return u;
            }
            return e;
        }, [m, _, u]),
        I = r.useMemo(() => (null != f && g ? f.id : (A ?? null)), [f, g, A]);
    r.useEffect(() => {
        l && 0 !== t.length && n(I);
    }, [l, t, n, I]);
    let T = r.useCallback((e) => {
            h(e);
        }, []),
        S = r.useCallback((e) => {
            E(null != e ? e.id : null);
        }, []),
        y = r.useMemo(
            () => (null != f ? { giftCardWallet: f, checked: g, onChange: T, itemAmount: c } : null),
            [f, g, T, c],
        );
    return {
        giftCardsEnabled: d,
        dropdownPaymentSources: _,
        dropdownPaymentSourceId: A,
        giftCardWallet: f,
        isGiftCardCreditsChecked: g,
        handleGiftCardCreditsToggle: T,
        handleDropdownPaymentSourceChange: S,
        giftCardCheckboxProps: y,
    };
}
