r.d(t, { A: () => h });
var s = r(354328),
    n = r(582128),
    i = r(635358),
    c = r(855986),
    u = r(343446),
    a = r(429811),
    o = r(590180);
function h(e, t) {
    let r = e?.paymentGateway;
    return (function (e, t, r) {
        let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            h = (0, c.bG)([u.A], () => u.A.hasLoadedExperiments),
            [l, A, f, d, g, p, C] = (0, c.yK)([o.A], () => [
                o.A.isFetchingCategories,
                o.A.lastFetchOptions,
                o.A.error,
                o.A.lastErrorTimestamp ?? 0,
                o.A.lastSuccessfulFetch ?? 0,
                o.A.categories,
                o.A.skipNumCategories,
            ]);
        return (
            (0, n.useEffect)(() => {
                if (s || !h || o.A.isFetchingCategories) return;
                let n = Date.now() - d < 6e5;
                if (f && n) return;
                let c = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C },
                    u = !(0, a.gn)(A, c),
                    l = Date.now() - g < 6e5;
                (u || !l) && (0, a.CK)(c, t, r);
            }, [s, h, A, g, e, f, d, t, r, C]),
            {
                isFetching: l,
                categories: p,
                fetchCategoriesError: f,
                refreshCategories: (0, n.useCallback)(() => {
                    let t = { ...e, variantsReturnStyle: i.g.VARIANTS_GROUP, includeBundles: !0, skipNumCategories: C };
                    (0, a.CK)(t, void 0, r);
                }, [e, r, C]),
            }
        );
    })(
        {
            noCache: (0, s.A)("shop_disable_cache"),
            includeUnpublished: (0, s.A)("shop_include_unpublished"),
            paymentGateway: r,
            logPerf: e?.logPerf,
        },
        void 0,
        t,
        e?.skipFetch,
    );
}
r(758836);
