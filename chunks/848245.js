"use strict";
n.d(t, { b: () => o });
var r = n(64700),
    i = n(311907),
    s = n(323082),
    a = n(560138);
function o() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, i.cf)([a.A], () => ({
        affinities: a.A.affinities,
        hasFetched: a.A.hasFetched,
        isFetching: a.A.isFetching,
    }));
    return (
        r.useEffect(() => {
            t || n || s.xG();
        }, [t, n]),
        e
    );
}
