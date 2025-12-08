n.d(t, { l: () => a }), n(388685), n(642613);
var r = n(473749),
    l = n(979554),
    i = n(399606),
    s = n(1870);
let o = (e, t) => {
        if (e.type === l.Z.BUNDLE && e.items.some((e) => t.includes(e.skuId))) return 2;
        if (e.type === l.Z.VARIANTS_GROUP) {
            var n, r;
            if (null != (r = null == (n = e.variants) ? void 0 : n.some((e) => t.includes(e.skuId))) && r) return 1;
        }
        return 3 * !!t.includes(e.skuId);
    },
    a = (e) => {
        let t = (0, i.e7)([s.Z], () => s.Z.purchases),
            n = (0, r.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, r.useMemo)(() => [...e].sort((e, t) => o(e, n) - o(t, n)), [e, n]);
    };
