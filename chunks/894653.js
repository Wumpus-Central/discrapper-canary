var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
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
let l = [],
    u = null;
function c(e) {
    let { categories: n } = e;
    (l = n), (u = Date.now());
}
class d extends (i = a.ZP.Store) {
    getLastFetchTimeMs() {
        return u;
    }
    getCategories() {
        return l;
    }
    getCategory(e) {
        return l.find((n) => n.id === e);
    }
}
s(d, 'displayName', 'ApplicationDirectoryCategoriesStore'), (n.Z = new d(o.Z, { APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: c }));
