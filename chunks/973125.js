l.d(t, { E: () => N, e: () => P });
var r = l(64700),
    n = l(735438),
    a = l(364801),
    s = l(975117),
    i = l(488757),
    c = l(70613),
    d = l(217109),
    o = l(273340),
    u = l(449543),
    m = l(735353),
    h = l(560275),
    p = l(436476),
    g = l(873580),
    E = l(650993),
    f = l(450117),
    A = l(834805),
    v = l(74871),
    T = l(498381),
    x = l(745308),
    S = l(627968),
    y = l(790219),
    j = l(356118),
    _ = l(879923),
    C = l(575593),
    b = l(674658),
    L = l(491438),
    k = l(561769),
    I = l(303720),
    O = l(538235),
    M = l(891167);
let N = {
        ContainedHero: A.A,
        FullHero: v.A,
        NarrowContent: g.A,
        FullBleedContent: p.A,
        InteractiveHScroll: u.A,
        Carousel: i.A,
        Grid: d.Ay,
        GridItem: o.A,
        Section: m.A,
        Card: s.A,
        BackgroundImage: a.A,
        GradientBackground: c.A,
        Skeleton: h.A,
        FeaturedChip: E.A,
        FeaturedCollection: f.A,
        FeaturedProduct: () => null,
        ShopProductCard: I.A,
        GridItemShopProductCard: (e) => {
            let { skuId: t, auto: l, columns: n, rows: a } = e,
                { product: s } = (0, b.q)(t, !0),
                i = r.useContext(k.v3);
            if (null == s) return null;
            let { flattenProductVariants: c, ...d } = i;
            if (s.type === C.R.BUNDLE) {
                let e = l ? 2 : n,
                    r = l ? 1 : a,
                    s = `${e}/${r}`;
                return (0, S.jsx)(k.v3.Provider, {
                    value: { flattenProductVariants: c ?? !1, ...d },
                    children: (0, S.jsx)(o.A, {
                        columns: e,
                        rows: r,
                        children: (0, S.jsx)(L.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            if (s.type === C.R.PROFILE_EFFECT) {
                let e = l ? 1 : n,
                    r = l ? 2 : a,
                    s = `${e}/${r}`;
                return (0, S.jsx)(k.v3.Provider, {
                    value: { flattenProductVariants: c ?? !1, ...d },
                    children: (0, S.jsx)(o.A, {
                        columns: e,
                        rows: r,
                        children: (0, S.jsx)(L.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            return l
                ? (0, S.jsx)(k.v3.Provider, {
                      value: { flattenProductVariants: c ?? !1, ...d },
                      children: (0, S.jsx)(L.A, { skuId: t, aspectRatio: "1/1" }),
                  })
                : (0, S.jsx)(k.v3.Provider, {
                      value: { flattenProductVariants: c ?? !1, ...d },
                      children: (0, S.jsx)(o.A, {
                          columns: n,
                          rows: a,
                          children: (0, S.jsx)(L.A, { skuId: t, aspectRatio: `${n}/${a}` }),
                      }),
                  });
        },
        SkuList: x.A,
        SubLayout: (e) => {
            let { layoutId: t, tenantId: l, skeleton: r, componentMap: n } = e,
                { layout: a, loading: s } = (0, y.A)(l, t);
            return s && null != r
                ? (0, S.jsx)(j.Ay, { overrides: n, layout: { id: "skeleton", children: r } })
                : null == a
                  ? null
                  : (0, S.jsx)(j.Ay, { layout: a, overrides: n });
        },
        SubTemplate: (e) => {
            let { templateId: t, tenantId: l, skeleton: r, requestParams: n, componentMap: a } = e,
                { layout: s, loading: i } = (0, _.A)(l, t, n);
            return i && null != r
                ? (0, S.jsx)(j.Ay, { overrides: a, layout: { id: "skeleton", children: r } })
                : null == s
                  ? null
                  : (0, S.jsx)(j.Ay, { layout: s, overrides: a });
        },
        Button: T.aF,
        Heading: T.i0,
        Stack: T.Ym,
        Text: T.Ni,
        Tooltip: T.F4,
        Image: M.A,
        Any: O.A,
    },
    P = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, n.cloneDeep)(N);
            if (null != e) for (let [l, r] of Object.entries(e)) null != r && (t[l] = r);
            return t;
        }, [e]);
    };
