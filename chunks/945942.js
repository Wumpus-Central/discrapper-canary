"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(151252),
    s = n(733391),
    a = n(133015),
    o = n(476438);
function l(e) {
    let { location: t } = e,
        { enabled: n } = (0, i.Z)({ location: t }),
        l = (0, a.n)({ location: t }),
        u = (0, o.q)(),
        c = l && n;
    return (
        r.useEffect(() => {
            c && (0, s.Xw)();
        }, [c]),
        { shouldRender: c && null != u, limitedOfferTimeLeft: u }
    );
}
