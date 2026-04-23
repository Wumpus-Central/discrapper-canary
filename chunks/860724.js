n.d(t, { u: () => c }), n(321073);
var r = n(64700),
    a = n(627968),
    i = n(546605),
    o = n(364995),
    l = n(900730),
    s = n(156312),
    d = n(921925),
    u = n(520796);
let c = () => {
    let { errorMessage: e } = (0, d.e)({}),
        t = (0, u.P)(),
        n = (function () {
            let e = (0, i.vg)("StatefulCheckoutStoreRelocationNotice"),
                { paymentSourceId: t } = (0, s.P5)(),
                { paymentSourceRecords: n } = (0, o.Fy)(),
                {
                    relocationCountry: d,
                    relocationCurrencyCode: u,
                    willForfeitGiftCardBalance: c,
                } = r.useMemo(() => {
                    let e = null != t ? n.find((e) => e.id === t) : null;
                    return {
                        relocationCountry: e?.relocationCountry ?? null,
                        relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                        willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
                    };
                }, [n, t]);
            return r.useMemo(
                () =>
                    e && null != d
                        ? {
                              directContent: (0, a.jsx)(l.c, {
                                  relocationCountry: d,
                                  relocationCurrencyCode: u,
                                  willForfeitGiftCardBalance: c,
                              }),
                              key: "store-relocation-notice",
                          }
                        : null,
                [e, d, u, c],
            );
        })();
    return {
        errorMessage: e,
        warningMessage: t,
        richNotices: r.useMemo(() => {
            let e = [];
            return null != n && e.push(n), e;
        }, [n]),
    };
};
