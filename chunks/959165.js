n.d(t, { Z: () => c }), n(47120);
var i = n(900849),
    l = n(762692),
    r = n(331114),
    a = n(356164),
    s = n(164991);
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
class d {}
let c = new (class extends d {
    constructor(...e) {
        super(...e),
            o(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: r, offset: s } = e;
                !a.Z.getIsFetching({
                    query: t,
                    categoryId: n,
                    languageCode: r
                }) &&
                    a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: r
                    }) &&
                    (i.qn({
                        withCounts: !1,
                        offset: s
                    }),
                    await l.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: r,
                        offset: s,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            o(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: r } = e,
                    s = a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: r
                    }),
                    o = a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: r
                    });
                s ||
                    o ||
                    (i.qn({
                        withCounts: !1,
                        offset: 0
                    }),
                    await l.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: r,
                        offset: 0,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            o(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: a, languageCode: o } = e;
                if ('' === t.trim()) return;
                let d = r.Z.getIsFetchingCounts(t),
                    c = r.Z.getIsFetchingCounts(t);
                d ||
                    c ||
                    (s.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    i.tI(n, a),
                    i.qn({
                        withCounts: !0,
                        offset: 0
                    }),
                    await l.Z.fetchSearchResults(t, {
                        categoryId: a,
                        languageCode: o,
                        offset: 0,
                        limit: 12,
                        withCounts: !0
                    }),
                    s.Z.setState({ resultsQuery: t }));
            });
    }
})();
