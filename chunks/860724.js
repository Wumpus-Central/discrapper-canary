"use strict";
r.d(t, { u: () => u }), r(321073);
var i = r(64700),
    a = r(627968),
    n = r(546605),
    s = r(364995),
    l = r(900730),
    o = r(156312),
    c = r(921925),
    d = r(520796);
let u = () => {
    let { errorMessage: e } = (0, c.e)({}),
        t = (0, d.P)(),
        r = (function () {
            let e = (0, n.vg)("StatefulCheckoutStoreRelocationNotice"),
                { paymentSourceId: t } = (0, o.P5)(),
                { paymentSourceRecords: r } = (0, s.Fy)(),
                {
                    relocationCountry: c,
                    relocationCurrencyCode: d,
                    willForfeitGiftCardBalance: u,
                } = i.useMemo(() => {
                    let e = null != t ? r.find((e) => e.id === t) : null;
                    return {
                        relocationCountry: e?.relocationCountry ?? null,
                        relocationCurrencyCode: e?.relocationCurrencyCode ?? null,
                        willForfeitGiftCardBalance: e?.willForfeitGiftCardBalance ?? !1,
                    };
                }, [r, t]);
            return i.useMemo(
                () =>
                    e && null != c
                        ? {
                              directContent: (0, a.jsx)(l.c, {
                                  relocationCountry: c,
                                  relocationCurrencyCode: d,
                                  willForfeitGiftCardBalance: u,
                              }),
                              key: "store-relocation-notice",
                          }
                        : null,
                [e, c, d, u],
            );
        })();
    return {
        errorMessage: e,
        warningMessage: t,
        richNotices: i.useMemo(() => {
            let e = [];
            return null != r && e.push(r), e;
        }, [r]),
    };
};
