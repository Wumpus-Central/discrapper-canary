n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = {},
    l = 'NOT_FETCHED',
    c = () => {
        l = 'FETCHING';
    },
    u = (e) => {
        (s = e.marketings.marketingsBySurfaces), (l = 'FETCHED');
    },
    d = () => {
        (s = {}), (l = 'NOT_FETCHED');
    };
class f extends (r = i.ZP.Store) {
    getMarketingBySurface(e) {
        return s[e];
    }
    get fetchState() {
        return l;
    }
}
o(f, 'displayName', 'CollectiblesMarketingsStore');
let _ = new f(a.Z, {
    COLLECTIBLES_MARKETING_FETCH: c,
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: u,
    LOGOUT: d
});
