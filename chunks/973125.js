l.d(t, { E: () => M, e: () => N });
var r = l(64700),
    n = l(735438),
    a = l(364801),
    s = l(975117),
    i = l(488757),
    c = l(217109),
    d = l(273340),
    o = l(449543),
    u = l(735353),
    m = l(560275),
    h = l(436476),
    p = l(873580),
    g = l(650993),
    E = l(450117),
    A = l(834805),
    f = l(74871),
    v = l(498381),
    T = l(745308),
    x = l(627968),
    S = l(790219),
    y = l(356118),
    j = l(879923),
    _ = l(575593),
    C = l(674658),
    b = l(491438),
    L = l(561769),
    k = l(303720),
    I = l(538235),
    O = l(891167);
let M = {
        ContainedHero: A.A,
        FullHero: f.A,
        NarrowContent: p.A,
        FullBleedContent: h.A,
        InteractiveHScroll: o.A,
        Carousel: i.A,
        Grid: c.Ay,
        GridItem: d.A,
        Section: u.A,
        Card: s.A,
        BackgroundImage: a.A,
        Skeleton: m.A,
        FeaturedChip: g.A,
        FeaturedCollection: E.A,
        FeaturedProduct: () => null,
        ShopProductCard: k.A,
        GridItemShopProductCard: (e) => {
            let { skuId: t, auto: l, columns: n, rows: a } = e,
                { product: s } = (0, C.q)(t, !0),
                i = r.useContext(L.v3);
            if (null == s) return null;
            let { flattenProductVariants: c, ...o } = i;
            if (s.type === _.R.BUNDLE) {
                let e = l ? 2 : n,
                    r = l ? 1 : a,
                    s = `${e}/${r}`;
                return (0, x.jsx)(L.v3.Provider, {
                    value: { flattenProductVariants: c ?? !0, ...o },
                    children: (0, x.jsx)(d.A, {
                        columns: e,
                        rows: r,
                        children: (0, x.jsx)(b.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            if (s.type === _.R.PROFILE_EFFECT) {
                let e = l ? 1 : n,
                    r = l ? 2 : a,
                    s = `${e}/${r}`;
                return (0, x.jsx)(L.v3.Provider, {
                    value: { flattenProductVariants: c ?? !0, ...o },
                    children: (0, x.jsx)(d.A, {
                        columns: e,
                        rows: r,
                        children: (0, x.jsx)(b.A, { skuId: t, aspectRatio: s }),
                    }),
                });
            }
            return l
                ? (0, x.jsx)(L.v3.Provider, {
                      value: { flattenProductVariants: c ?? !0, ...o },
                      children: (0, x.jsx)(b.A, { skuId: t, aspectRatio: "1/1" }),
                  })
                : (0, x.jsx)(L.v3.Provider, {
                      value: { flattenProductVariants: c ?? !0, ...o },
                      children: (0, x.jsx)(d.A, {
                          columns: n,
                          rows: a,
                          children: (0, x.jsx)(b.A, { skuId: t, aspectRatio: `${n}/${a}` }),
                      }),
                  });
        },
        SkuList: T.A,
        SubLayout: (e) => {
            let { layoutId: t, tenantId: l, skeleton: r, componentMap: n } = e,
                { layout: a, loading: s } = (0, S.A)(l, t);
            return s && null != r
                ? (0, x.jsx)(y.Ay, { overrides: n, layout: { id: "skeleton", children: r } })
                : null == a
                  ? null
                  : (0, x.jsx)(y.Ay, { layout: a, overrides: n });
        },
        SubTemplate: (e) => {
            let { templateId: t, tenantId: l, skeleton: r, requestParams: n, componentMap: a } = e,
                { layout: s, loading: i } = (0, j.A)(l, t, n);
            return i && null != r
                ? (0, x.jsx)(y.Ay, { overrides: a, layout: { id: "skeleton", children: r } })
                : null == s
                  ? null
                  : (0, x.jsx)(y.Ay, { layout: s, overrides: a });
        },
        Button: v.aF,
        Heading: v.i0,
        Stack: v.Ym,
        Text: v.Ni,
        Tooltip: v.F4,
        Image: O.A,
        Any1: I.A,
        Any2: I.A,
        Any3: I.A,
    },
    N = function () {
        let { overrides: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r.useMemo(() => {
            let t = (0, n.cloneDeep)(M);
            if (null != e) for (let [l, r] of Object.entries(e)) null != r && (t[l] = r);
            return t;
        }, [e]);
    };
