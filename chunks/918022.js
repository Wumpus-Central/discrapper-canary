l.d(t, { Y: () => i });
var a = l(64700),
    n = l(202613),
    r = l(459357);
function i(e) {
    let {
            checkoutPaymentSources: t,
            setPaymentSourceId: l,
            location: i,
            isReady: o = !0,
            subscriptionPaymentSourceId: s,
        } = e,
        { enabled: u } = (0, r.c)({ location: i }),
        { dropdownPaymentSources: d, giftCardWallet: c } = a.useMemo(
            () =>
                u
                    ? {
                          dropdownPaymentSources: t.filter((e) => !(e.source instanceof n.LQ)),
                          giftCardWallet: t.find((e) => e.source instanceof n.LQ) ?? null,
                      }
                    : { dropdownPaymentSources: t, giftCardWallet: null },
            [t, u],
        ),
        [p, m] = a.useState(void 0),
        [h, x] = a.useState(void 0),
        b = a.useMemo(() => (void 0 !== p ? p : null != c && (null == s || s === c.id)), [p, s, c]),
        f = a.useMemo(() => {
            if (void 0 !== h) return h;
            if (0 === d.length) return null;
            let e = d.find((e) => e.enabled)?.id ?? null;
            if (null != s) {
                let e = d.find((e) => e.id === s);
                if (null != e && e.enabled) return s;
            }
            return e;
        }, [h, d, s]),
        y = a.useMemo(() => (null != c && b ? c.id : (f ?? null)), [c, b, f]);
    return (
        a.useEffect(() => {
            o && 0 !== t.length && l(y);
        }, [o, t, l, y]),
        {
            giftCardsEnabled: u,
            dropdownPaymentSources: d,
            dropdownPaymentSourceId: f,
            giftCardWallet: c,
            isGiftCardCreditsChecked: b,
            handleGiftCardCreditsToggle: a.useCallback((e) => {
                m(e);
            }, []),
            handleDropdownPaymentSourceChange: a.useCallback((e) => {
                x(null != e ? e.id : null);
            }, []),
        }
    );
}
