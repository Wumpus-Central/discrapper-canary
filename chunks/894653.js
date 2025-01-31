n.d(t, { Z: () => d });
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
let o = [],
    l = null;
function u(e) {
    let { categories: t } = e;
    (o = t), (l = Date.now());
}
class c extends (i = r.ZP.Store) {
    getLastFetchTimeMs() {
        return l;
    }
    getCategories() {
        return o;
    }
    getCategory(e) {
        return o.find((t) => t.id === e);
    }
}
s(c, 'displayName', 'ApplicationDirectoryCategoriesStore');
let d = new c(a.Z, { APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: u });
