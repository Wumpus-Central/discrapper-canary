n.d(t, { Z: () => u });
var r = n(192379),
    i = n(442837),
    o = n(570140),
    a = n(355467),
    s = n(314897),
    l = n(351402),
    c = n(853872);
function u() {
    let e = (0, i.e7)([c.Z], () => c.Z.getDefaultBillingCountryCode()),
        t = (0, i.e7)([l.Z], () => l.Z.ipCountryCode),
        n = (0, i.e7)([s.default], () => s.default.isAuthenticated());
    return (
        r.useEffect(() => {
            o.Z.wait(() => {
                !n || l.Z.isPaymentSourceFetching || c.Z.hasFetchedPaymentSources || a.tZ();
            });
        }, [n]),
        r.useEffect(() => {
            n && !l.Z.ipCountryCodeLoaded && a.GE();
        }, [t, n]),
        {
            defaultBillingCountryCode: e,
            ipCountryCode: t
        }
    );
}
