"use strict";
s.d(t, { S: () => l });
var n = s(353640);
let r = { skus: [], currentPage: 0, totalCount: 0, hasMorePages: !1, searchError: null, isFetchingResults: !1 },
    l = (0, n.v)((e) => ({
        ...r,
        onSetResponse: (t) => {
            let s = Math.floor(t.pageOffset / t.pageLimit) + 1;
            e({ ...t, currentPage: s });
        },
        setSearchError: (t) => {
            e({ ...r, searchError: t });
        },
        setIsFetchingResults: (t) => {
            e({ isFetchingResults: t });
        },
        clearError: () => {
            e({ searchError: null });
        },
        clear: () => {
            e({ ...r });
        },
    }));
