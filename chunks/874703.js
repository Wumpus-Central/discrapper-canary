var i,
    a,
    o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(i || (i = {}));
let u = {},
    c = 'NOT_FETCHED',
    d = () => {
        c = 'FETCHING';
    },
    f = (e) => {
        (u = e.marketings.marketingsBySurfaces), (c = 'FETCHED');
    },
    p = () => {
        (u = {}), (c = 'NOT_FETCHED');
    };
class h extends (a = o.ZP.Store) {
    getMarketingBySurface(e) {
        return u[e];
    }
    get fetchState() {
        return c;
    }
}
l(h, 'displayName', 'CollectiblesMarketingsStore'),
    (n.Z = new h(s.Z, {
        COLLECTIBLES_MARKETING_FETCH: d,
        COLLECTIBLES_MARKETING_FETCH_SUCCESS: f,
        LOGOUT: p
    }));
