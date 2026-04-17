"use strict";
n.d(t, { b: () => o });
var r = n(64700),
    i = n(311907),
    s = n(560138),
    a = n(50283);
function o() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, i.cf)([s.A], () => ({
        affinities: s.A.affinities,
        hasFetched: s.A.hasFetched,
        isFetching: s.A.isFetching,
    }));
    return (
        r.useEffect(() => {
            t || n || (0, a.ET)();
        }, [t, n]),
        e
    );
}
