n.d(t, { E: () => M, e: () => N });
var r = n(582128),
    l = n(435558),
    a = n(364801),
    i = n(197498),
    s = n(488757),
    c = n(70613),
    o = n(217109),
    u = n(273340),
    d = n(449543),
    m = n(735353),
    h = n(560275),
    p = n(436476),
    f = n(873580),
    g = n(650993),
    E = n(450117),
    v = n(834805),
    A = n(74871),
    T = n(498381),
    x = n(857623),
    S = n(790219),
    y = n(879923),
    _ = n(477900),
    j = n(575593),
    C = n(674658),
    b = n(258245),
    k = n(561769),
    L = n(303720),
    I = n(538235),
    O = n(891167);
let M = {
    ContainedHero: v.A,
    FullHero: A.A,
    NarrowContent: f.A,
    FullBleedContent: p.A,
    InteractiveHScroll: d.A,
    Carousel: s.A,
    Grid: o.Ay,
    GridItem: u.A,
    Section: m.A,
    Card: i.A,
    BackgroundImage: a.A,
    GradientBackground: c.A,
    Skeleton: h.A,
    FeaturedChip: g.A,
    FeaturedCollection: E.A,
    FeaturedProduct: () => null,
    ShopProductCard: L.A,
    GridItemShopProductCard: function (e) {
        let { skuId: t, auto: n, columns: l, rows: a } = e,
            { product: i } = (0, C.q)(t, !0),
            {
                flattenProductVariants: s,
                productOverride: c,
                prioritizedCurrency: o,
                standalonePreview: d,
            } = r.useContext(k.v3),
            m = r.useMemo(
                () => ({
                    flattenProductVariants: s ?? !1,
                    productOverride: c,
                    prioritizedCurrency: o,
                    standalonePreview: d,
                }),
                [s, c, o, d],
            );
        if (null == i) return null;
        if (i.type === j.R.BUNDLE) {
            let e = n ? 2 : l,
                r = n ? 1 : a,
                i = `${e}/${r}`;
            return (0, _.jsx)(k.v3.Provider, {
                value: m,
                children: (0, _.jsx)(u.A, {
                    columns: e,
                    rows: r,
                    children: (0, _.jsx)(b.A, { skuId: t, aspectRatio: i }),
                }),
            });
        }
        if (i.type === j.R.PROFILE_EFFECT) {
            let e = n ? 1 : l,
                r = n ? 2 : a,
                i = `${e}/${r}`;
            return (0, _.jsx)(k.v3.Provider, {
                value: m,
                children: (0, _.jsx)(u.A, {
                    columns: e,
                    rows: r,
                    children: (0, _.jsx)(b.A, { skuId: t, aspectRatio: i }),
                }),
            });
        }
        return n
            ? (0, _.jsx)(k.v3.Provider, { value: m, children: (0, _.jsx)(b.A, { skuId: t, aspectRatio: "1/1" }) })
            : (0, _.jsx)(k.v3.Provider, {
                  value: m,
                  children: (0, _.jsx)(u.A, {
                      columns: l,
                      rows: a,
                      children: (0, _.jsx)(b.A, { skuId: t, aspectRatio: `${l}/${a}` }),
                  }),
              });
    },
    SkuList: x.A,
    SubLayout: function (e) {
        let { layoutId: t, tenantId: n, skeleton: r, componentMap: l, renderLayout: a } = e,
            { layout: i, loading: s } = (0, S.A)(n, t);
        return s && null != r
            ? a({ overrides: l, layout: { id: "skeleton", children: r } })
            : null == i
              ? null
              : a({ layout: i, overrides: l });
    },
    SubTemplate: function (e) {
        let { templateId: t, tenantId: n, skeleton: r, requestParams: l, componentMap: a, renderLayout: i } = e,
            { layout: s, loading: c } = (0, y.A)(n, t, l);
        return c && null != r
            ? i({ overrides: a, layout: { id: "skeleton", children: r } })
            : null == s
              ? null
              : i({ layout: s, overrides: a });
    },
    Button: T.aF,
    Heading: T.i0,
    Stack: T.Ym,
    Text: T.Ni,
    Tooltip: T.F4,
    Image: O.A,
    Any: I.A,
};
function N() {
    let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r.useMemo(() => {
        let t = (0, l.cloneDeep)(M);
        if (null != e) for (let [n, r] of Object.entries(e)) null != r && (t[n] = r);
        return t;
    }, [e]);
}
