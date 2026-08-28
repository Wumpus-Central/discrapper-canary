n.d(t, { A: () => o });
var r = n(477900),
    l = n(582128),
    a = n(841702),
    i = n(450047),
    s = n(217109);
function c(e) {
    let {
            skuIds: t = [],
            skuBlock: n = "ShopProductCard",
            skuBlockProps: c,
            sortPurchased: o = !1,
            showSkeleton: u = !1,
            componentMap: d,
            pagedSkuIds: h,
            page: m,
            perPage: p,
            truncate: f,
        } = e,
        g = (0, i.D)(t, !0),
        { purchases: E, isFetching: v } = (0, a.b5)(),
        A = (0, l.useMemo)(() => {
            if (!o) return h;
            let e = [...t].sort((e, t) => (null != E.get(e)) - (null != E.get(t)));
            return (0, s.oP)(e, m, p, f);
        }, [t, h, o, E, m, p, f]),
        x = d[n],
        T = d.Skeleton;
    return null == x
        ? null
        : (g || (o && v)) && u
          ? A.map((e, t) =>
                null != T
                    ? (0, r.jsx)(T, { children: (0, r.jsx)(x, { ...c, skuId: e, productId: e }) }, `${e}-${t}`)
                    : null,
            )
          : A.map((e, t) => (0, r.jsx)(x, { ...c, skuId: e, productId: e }, `${e}-${t}`));
}
let o = function (e) {
    let {
            skuIds: t = [],
            skuBlock: n = "ShopProductCard",
            skuBlockProps: a,
            sortPurchased: i = !1,
            eagerLoad: o = !1,
            showSkeleton: u = !1,
            componentMap: d,
            paginationOptions: h,
        } = e,
        m = (0, s.JZ)(),
        p = h ?? m,
        f = l.useRef(null),
        {
            page: g,
            pages: E,
            paginate: v,
            showPagination: A,
            paginationPosition: x,
            truncate: T,
            perPage: S,
            setPage: y,
        } = (0, s.Wk)(t.length, p, f),
        j = (0, l.useMemo)(() => (0, s.oP)(t, v ? g : void 0, S, T), [t, v, g, S, T]),
        _ = A && "top" === x,
        C = A && "bottom" === x,
        b =
            null != p
                ? (0, r.jsx)("div", {
                      ref: f,
                      "aria-hidden": "true",
                      style: { position: "absolute", top: 0, height: 0 },
                  })
                : null;
    if (o || i)
        return (0, r.jsxs)(r.Fragment, {
            children: [
                b,
                _ && (0, r.jsx)(s.hi, { page: g, pages: E, setPage: y }),
                (0, r.jsx)(c, {
                    skuIds: t,
                    skuBlock: n,
                    skuBlockProps: a,
                    sortPurchased: i,
                    showSkeleton: u,
                    componentMap: d,
                    pagedSkuIds: j,
                    page: v ? g : void 0,
                    perPage: v ? S : void 0,
                    truncate: T,
                }),
                C && (0, r.jsx)(s.hi, { page: g, pages: E, setPage: y }),
            ],
        });
    let k = d[n];
    return null == k
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  b,
                  _ && (0, r.jsx)(s.hi, { page: g, pages: E, setPage: y }),
                  j.map((e, t) => (0, r.jsx)(k, { ...a, skuId: e, productId: e }, `${e}-${t}`)),
                  C && (0, r.jsx)(s.hi, { page: g, pages: E, setPage: y }),
              ],
          });
};
