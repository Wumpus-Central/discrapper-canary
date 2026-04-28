l.d(e, { u: () => d }), l(321073);
var n = l(64700),
    r = l(627968),
    i = l(546605),
    s = l(364995),
    a = l(900730),
    c = l(156312),
    o = l(921925),
    u = l(520796);
let d = () => {
    let { errorMessage: t } = (0, o.e)({}),
        e = (0, u.P)(),
        l = (function () {
            let t = (0, i.vg)("StatefulCheckoutStoreRelocationNotice"),
                { paymentSourceId: e } = (0, c.P5)(),
                { paymentSourceRecords: l } = (0, s.Fy)(),
                {
                    relocationCountry: o,
                    relocationCurrencyCode: u,
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
                    t && null != o
                        ? {
                              directContent: (0, r.jsx)(a.c, {
                                  relocationCountry: o,
                                  relocationCurrencyCode: u,
                                  willForfeitGiftCardBalance: d,
                              }),
                              key: "store-relocation-notice",
                          }
                        : null,
                [t, o, u, d],
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
