n.d(t, { E: () => N, e: () => P });
var r = n(64700),
    l = n(735438),
    a = n(364801),
    s = n(975117),
    i = n(488757),
    c = n(70613),
    o = n(217109),
    u = n(273340),
    d = n(449543),
    h = n(735353),
    m = n(560275),
    p = n(436476),
    f = n(873580),
    g = n(650993),
    E = n(450117),
    A = n(834805),
    v = n(74871),
    x = n(498381),
    T = n(745308),
    S = n(627968),
    y = n(790219),
    j = n(356118),
    _ = n(879923),
    C = n(575593),
    L = n(674658),
    b = n(828614),
    k = n(561769),
    I = n(303720),
    O = n(538235),
    M = n(891167);
let N = {
    ContainedHero: A.A,
    FullHero: v.A,
    NarrowContent: f.A,
    FullBleedContent: p.A,
    InteractiveHScroll: d.A,
    Carousel: i.A,
    Grid: o.Ay,
    GridItem: u.A,
    Section: h.A,
    Card: s.A,
    BackgroundImage: a.A,
    GradientBackground: c.A,
    Skeleton: m.A,
    FeaturedChip: g.A,
    FeaturedCollection: E.A,
    FeaturedProduct: () => null,
    ShopProductCard: I.A,
    GridItemShopProductCard: function (e) {
        let { skuId: t, auto: n, columns: l, rows: a } = e,
            { product: s } = (0, L.q)(t, !0),
            i = r.useContext(k.v3);
        if (null == s) return null;
        let { flattenProductVariants: c, ...o } = i;
        if (s.type === C.R.BUNDLE) {
            let e = n ? 2 : l,
                r = n ? 1 : a,
                s = `${e}/${r}`;
            return (0, S.jsx)(k.v3.Provider, {
                value: { flattenProductVariants: c ?? !1, ...o },
                children: (0, S.jsx)(u.A, {
                    columns: e,
                    rows: r,
                    children: (0, S.jsx)(b.A, { skuId: t, aspectRatio: s }),
                }),
            });
        }
        if (s.type === C.R.PROFILE_EFFECT) {
            let e = n ? 1 : l,
                r = n ? 2 : a,
                s = `${e}/${r}`;
            return (0, S.jsx)(k.v3.Provider, {
                value: { flattenProductVariants: c ?? !1, ...o },
                children: (0, S.jsx)(u.A, {
                    columns: e,
                    rows: r,
                    children: (0, S.jsx)(b.A, { skuId: t, aspectRatio: s }),
                }),
            });
        }
        return n
            ? (0, S.jsx)(k.v3.Provider, {
                  value: { flattenProductVariants: c ?? !1, ...o },
                  children: (0, S.jsx)(b.A, { skuId: t, aspectRatio: "1/1" }),
              })
            : (0, S.jsx)(k.v3.Provider, {
                  value: { flattenProductVariants: c ?? !1, ...o },
                  children: (0, S.jsx)(u.A, {
                      columns: l,
                      rows: a,
                      children: (0, S.jsx)(b.A, { skuId: t, aspectRatio: `${l}/${a}` }),
                  }),
              });
    },
    SkuList: T.A,
    SubLayout: function (e) {
        let { layoutId: t, tenantId: n, skeleton: r, componentMap: l } = e,
            { layout: a, loading: s } = (0, y.A)(n, t);
        return s && null != r
            ? (0, S.jsx)(j.Ay, { overrides: l, layout: { id: "skeleton", children: r } })
            : null == a
              ? null
              : (0, S.jsx)(j.Ay, { layout: a, overrides: l });
    },
    SubTemplate: function (e) {
        let { templateId: t, tenantId: n, skeleton: r, requestParams: l, componentMap: a } = e,
            { layout: s, loading: i } = (0, _.A)(n, t, l);
        return i && null != r
            ? (0, S.jsx)(j.Ay, { overrides: a, layout: { id: "skeleton", children: r } })
            : null == s
              ? null
              : (0, S.jsx)(j.Ay, { layout: s, overrides: a });
    },
    Button: x.aF,
    Heading: x.i0,
    Stack: x.Ym,
    Text: x.Ni,
    Tooltip: x.F4,
    Image: M.A,
    Any: O.A,
};
function P() {
    let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return r.useMemo(() => {
        let t = (0, l.cloneDeep)(N);
        if (null != e) for (let [n, r] of Object.entries(e)) null != r && (t[n] = r);
        return t;
    }, [e]);
}
