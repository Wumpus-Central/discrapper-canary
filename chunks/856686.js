r.d(t, { S: () => l });
var s = r(196765);
let i = { skus: [], currentPage: 0, totalCount: 0, hasMorePages: !1, searchError: null, isFetchingResults: !1 },
    l = (0, s.v)((e) => ({
        ...i,
        onSetResponse: (t) => {
            let r = Math.floor(t.pageOffset / t.pageLimit) + 1;
            e({ ...t, currentPage: r });
        },
        setSearchError: (t) => {
            e({ ...i, searchError: t });
        },
        setIsFetchingResults: (t) => {
            e({ isFetchingResults: t });
        },
        clearError: () => {
            e({ searchError: null });
        },
        clear: () => {
            e({ ...i });
        },
    }));
