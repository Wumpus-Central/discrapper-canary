n.d(t, { Z: () => _ }), n(388685), n(290780);
var r = n(473749),
    l = n(392711),
    i = n.n(l),
    o = n(482820),
    s = n(442837),
    a = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    f = n(937510),
    p = n(27123),
    m = n(934760),
    h = n(981631),
    C = n(388032);
function _(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: _ } = e,
        b = (0, s.e7)([a.Z], () => a.Z.hasConsented(h.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[o.m.RECOMMENDED]) ? e : [];
        }, [t]),
        E = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[o.m.POPULAR]) ? e : [];
        }, [t]),
        S = v.length > 0 && b,
        [O, x] = r.useState(S ? o.m.RECOMMENDED : o.m.POPULAR),
        y = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        j = r.useMemo(() => (0, d.wO)(y), [y]),
        k = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()),
        T = (0, m.Z)(),
        I = (0, g.a)(),
        [L, B] = r.useState([]),
        A = r.useCallback(() => {
            x(o.m.RANDOM), B(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        B(i().shuffle(j));
    }, [j]);
    let N = r.useMemo(() => {
        let e = [];
        if (O === o.m.RECENT) e = j;
        else if (O === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
        else if (O === o.m.RECOMMENDED) {
            let t = T(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (O === o.m.POPULAR) {
            let t = T(E);
            e = l ? (0, d.Qf)(t, k) : t;
        } else O === o.m.RANDOM && (e = L);
        return _ ? (0, p.cf)(I(e)) : I(e);
    }, [O, _, I, n, j, T, v, l, k, E, L]);
    return {
        sortType: O,
        setSortType: x,
        sortedItems: (0, f.l)(N),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: o.m.POPULAR,
                    label: C.intl.string(C.t["1wQj4E"]),
                },
                {
                    value: o.m.RECENT,
                    label: C.intl.string(C.t["6NZpt6"]),
                },
                {
                    value: o.m.PRICE_LOW_TO_HIGH,
                    label: C.intl.string(C.t.RTG4yJ),
                },
            ];
            return (
                S &&
                    e.unshift({
                        value: o.m.RECOMMENDED,
                        label: C.intl.string(C.t.JrlKlh),
                    }),
                e
            );
        }, [S]),
        showRecommendationOption: S,
        shuffleProducts: A,
    };
}
