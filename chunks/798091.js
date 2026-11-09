n.d(t, { y: () => A });
var i = n(582128),
    r = n(855986),
    s = n(781300),
    l = n(46653),
    a = n(615405),
    o = n(295405),
    c = n(652215),
    d = n(92202),
    u = n(811091),
    h = n(425565);
let C = null,
    E = null;
function A(e) {
    var t;
    let { location: n, countGiftCardWallet: A, canFetchPaymentSources: _ = !0 } = e,
        { enabled: p } = (0, d.K)({ location: n }),
        g = (0, r.bG)([l.default], () => l.default.getId()),
        m = null != (t = (0, r.bG)([l.default], () => l.default.getId())) && u.default.age(t) >= h.I,
        { hasFetchedPaymentSources: T, hasValidPaymentMethod: f } = (0, r.cf)(
            [o.A],
            () => ({
                hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                hasValidPaymentMethod: (function (e, t) {
                    let { countGiftCardWallet: n } = t;
                    return Object.values(e).some(
                        (e) => !e.invalid && e.type !== c.hes.UNKNOWN && (n || e.type !== c.hes.TDS_WALLET),
                    );
                })(o.A.paymentSources, { countGiftCardWallet: A }),
            }),
            [A],
        ),
        N = p && m,
        I = N && _;
    return (
        i.useEffect(() => {
            !I ||
                C === g ||
                o.A.hasFetchedPaymentSources ||
                a.A.isPaymentSourceFetching ||
                ((C = g),
                s.$o().then((e) => {
                    null == e && (E = g);
                }));
        }, [I, g]),
        N && E !== g && T && !f
    );
}
