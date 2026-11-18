(n.d(t, { u: () => m }), n(321073));
var l = n(582128),
    i = n(136857),
    r = n(158317),
    a = n(901930),
    s = n(682689),
    o = n(461200),
    u = n(792996),
    c = n(477900),
    d = n(900730);
function m() {
    let e,
        t,
        { error: n, errorMessage: m } = (0, a.j)({}),
        p =
            ((e = (0, s.t4)((e) => e.getBlockingOrderConstraintReasonCode())),
            (t = (0, o.A)(e, u.intl.string(u.t["P/VP9v"]))),
            l.useMemo(
                () =>
                    null == t ? null : { type: "critical", message: t, role: "alert", key: "order-constraint-notice" },
                [t],
            )),
        h = (function () {
            let { paymentSourceId: e, checkoutPaymentSources: t } = (0, s.t4)((e) => ({
                    paymentSourceId: e.paymentSourceId,
                    checkoutPaymentSources: e.get("checkoutPaymentSources"),
                })),
                {
                    relocationCountry: n,
                    relocationCurrencyCode: i,
                    willForfeitGiftCardBalance: r,
                } = l.useMemo(() => {
                    let n = null != e ? t.find((t) => t.id === e) : null;
                    return {
                        relocationCountry: n?.relocationCountry ?? null,
                        relocationCurrencyCode: n?.relocationCurrencyCode ?? null,
                        willForfeitGiftCardBalance: n?.willForfeitGiftCardBalance ?? !1,
                    };
                }, [t, e]);
            return l.useMemo(
                () =>
                    null == n
                        ? null
                        : {
                              directContent: (0, c.jsx)(d.c, {
                                  relocationCountry: n,
                                  relocationCurrencyCode: i,
                                  willForfeitGiftCardBalance: r,
                                  role: "status",
                              }),
                              key: "store-relocation-notice",
                          },
                [n, i, r],
            );
        })(),
        C = (0, s.t4)((e) => (null != e.orderRecord ? e.orderRecord.revision : null)),
        f = n instanceof r.FY && null != C && n.order.revision < C ? "" : m;
    return {
        errorMessage:
            null != p &&
            (n instanceof r.FY ||
                (n instanceof i.Ay &&
                    (n.code === i.tG.BILLING_SPENDING_LIMIT_REACHED ||
                        n.code === i.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED)))
                ? ""
                : f,
        purchaseErrorMessage: f,
        richNotices: l.useMemo(() => {
            let e = [];
            return (null != p && e.push(p), null != h && e.push(h), e);
        }, [p, h]),
    };
}
