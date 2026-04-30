l.d(e, { u: () => d }), l(321073);
var n = l(64700),
    r = l(627968),
    i = l(546605),
    u = l(364995),
    o = l(900730),
    c = l(156312),
    a = l(921925),
    s = l(520796);
let d = () => {
    let { errorMessage: t } = (0, a.e)({}),
        e = (0, s.P)(),
        l = (function () {
            let t = (0, i.vg)("StatefulCheckoutStoreRelocationNotice"),
                { paymentSourceId: e } = (0, c.P5)(),
                { checkoutPaymentSources: l } = (0, u.t6)(),
                {
                    relocationCountry: a,
                    relocationCurrencyCode: s,
                    willForfeitGiftCardBalance: d,
                } = n.useMemo(() => {
                    let t = null != e ? l.find((t) => t.id === e) : null;
                    return {
                        relocationCountry: t?.relocationCountry ?? null,
                        relocationCurrencyCode: t?.relocationCurrencyCode ?? null,
                        willForfeitGiftCardBalance: t?.willForfeitGiftCardBalance ?? !1,
                    };
                }, [l, e]);
            return n.useMemo(
                () =>
                    t && null != a
                        ? {
                              directContent: (0, r.jsx)(o.c, {
                                  relocationCountry: a,
                                  relocationCurrencyCode: s,
                                  willForfeitGiftCardBalance: d,
                              }),
                              key: "store-relocation-notice",
                          }
                        : null,
                [t, a, s, d],
            );
        })();
    return {
        errorMessage: t,
        warningMessage: e,
        richNotices: n.useMemo(() => {
            let t = [];
            return null != l && t.push(l), t;
        }, [l]),
    };
};
