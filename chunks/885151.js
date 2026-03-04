"use strict";
n.d(t, { W: () => u, k: () => l });
var r = n(64700),
    i = n(311907),
    s = n(799448),
    a = n(136086),
    o = n(652215);
let l = (0, i.UT)(a.A, {
    getQueryId: o.fic.GAME,
    get: (e) => (null != e ? (a.A.getGame(e) ?? null) : null),
    load: async (e) => {
        null != e && (await (0, s.E)([e]));
    },
    getIsLoading: (e) => null != e && a.A.isFetching(e),
    getError: (e) => (null != e && a.A.didFetchingFail(e) ? Error("Failed to fetch game data") : null),
});
function u(e) {
    r.useEffect(() => {
        let t = e.map((e) => [e]);
        l.fetchMany(...t);
    }, [e]);
}
