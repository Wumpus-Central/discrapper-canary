n.d(t, { Z: () => u }), n(47120), n(566702);
var r = n(900849),
    i = n(762692),
    l = n(331114),
    a = n(356164),
    o = n(164991);
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
class c {}
let u = new (class extends c {
    constructor(...e) {
        super(...e),
            s(this, 'loadMoreCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l, offset: o } = e;
                !a.Z.getIsFetching({
                    query: t,
                    categoryId: n,
                    languageCode: l
                }) &&
                    a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }) &&
                    (r.qn({
                        withCounts: !1,
                        offset: o
                    }),
                    await i.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: o,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            s(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l } = e,
                    o = a.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }),
                    s = a.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    });
                o ||
                    s ||
                    (r.qn({
                        withCounts: !1,
                        offset: 0
                    }),
                    await i.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: 0,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            s(this, 'loadCategoryResultsAndCounts', async (e) => {
                let { query: t, loadId: n, categoryId: a, languageCode: s } = e;
                if ('' === t.trim()) return;
                let c = l.Z.getIsFetchingCounts(t),
                    u = l.Z.getIsFetchingCounts(t);
                c ||
                    u ||
                    (o.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    r.tI(n, a),
                    r.qn({
                        withCounts: !0,
                        offset: 0
                    }),
                    await i.Z.fetchSearchResults(t, {
                        categoryId: a,
                        languageCode: s,
                        offset: 0,
                        limit: 12,
                        withCounts: !0
                    }),
                    o.Z.setState({ resultsQuery: t }));
            });
    }
})();
