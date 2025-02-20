n.d(t, { Z: () => u }), n(47120), n(566702);
var r = n(900849),
    i = n(762692),
    l = n(331114),
    o = n(356164),
    a = n(164991);
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
                let { query: t, categoryId: n, languageCode: l, offset: a } = e;
                !o.Z.getIsFetching({
                    query: t,
                    categoryId: n,
                    languageCode: l
                }) &&
                    o.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }) &&
                    (r.qn({
                        withCounts: !1,
                        offset: a
                    }),
                    await i.Z.fetchSearchResults(t, {
                        categoryId: n,
                        languageCode: l,
                        offset: a,
                        limit: 12,
                        withCounts: !1
                    }));
            }),
            s(this, 'loadCategoryResults', async (e) => {
                let { query: t, categoryId: n, languageCode: l } = e,
                    a = o.Z.getIsFetching({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    }),
                    s = o.Z.getIsInitialFetchComplete({
                        query: t,
                        categoryId: n,
                        languageCode: l
                    });
                a ||
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
                let { query: t, loadId: n, categoryId: o, languageCode: s } = e;
                if ('' === t.trim()) return;
                let c = l.Z.getIsFetchingCounts(t),
                    u = l.Z.getIsFetchingCounts(t);
                c ||
                    u ||
                    (a.Z.setState({
                        fetchedQuery: t,
                        resultsQuery: ''
                    }),
                    r.tI(n, o),
                    r.qn({
                        withCounts: !0,
                        offset: 0
                    }),
                    await i.Z.fetchSearchResults(t, {
                        categoryId: o,
                        languageCode: s,
                        offset: 0,
                        limit: 12,
                        withCounts: !0
                    }),
                    a.Z.setState({ resultsQuery: t }));
            });
    }
})();
