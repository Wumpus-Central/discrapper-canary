n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {},
    l = 'NOT_FETCHED',
    u = () => {
        l = 'FETCHING';
    },
    c = (e) => {
        (o = e.marketings.marketingsBySurfaces), (l = 'FETCHED');
    },
    d = () => {
        (o = {}), (l = 'NOT_FETCHED');
    };
class f extends (i = r.ZP.Store) {
    getMarketingBySurface(e) {
        return o[e];
    }
    get fetchState() {
        return l;
    }
}
s(f, 'displayName', 'CollectiblesMarketingsStore');
let _ = new f(a.Z, {
    COLLECTIBLES_MARKETING_FETCH: u,
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: c,
    LOGOUT: d
});
