"use strict";
s.d(t, { A: () => x }), s(667532);
var n = s(64700),
    r = s(735438),
    l = s.n(r),
    i = s(12544),
    a = s(311907),
    o = s(153488),
    c = s(590180),
    d = s(248352),
    u = s(993408),
    _ = s(511265),
    g = s(313276),
    m = s(206077),
    h = s(623373),
    p = s(652215),
    f = s(985018);
function x(e) {
    let { sortedSkuIds: t, isPremiumUser: s, prioritizeUserDiscounts: r, orbsSupportedOnly: x } = e,
        E = (0, a.bG)([o.A], () => o.A.hasConsented(p.YAq.PERSONALIZATION)),
        b = n.useMemo(() => t?.[i.i.RECOMMENDED] ?? [], [t]),
        C = n.useMemo(() => t?.[i.i.POPULAR] ?? [], [t]),
        A = b.length > 0 && E,
        [S, v] = n.useState(A ? i.i.RECOMMENDED : i.i.POPULAR),
        I = (0, a.bG)([c.A], () => c.A.productsWithVariantsAsGroup),
        L = n.useMemo(() => (0, u.CE)(I), [I]),
        j = (0, a.bG)([d.A], () => d.A.getUserDiscounts()),
        k = (0, g.A)(),
        T = (0, _.p)(),
        [O, y] = n.useState([]),
        N = n.useCallback(() => {
            v(i.i.RANDOM), y(l().shuffle(L));
        }, [L]);
    n.useEffect(() => {
        y(l().shuffle(L));
    }, [L]);
    let R = n.useMemo(() => {
        let e = [];
        if (S === i.i.RECENT) e = L;
        else if (S === i.i.PRICE_LOW_TO_HIGH) e = (0, u.bf)([...L], s, x);
        else if (S === i.i.RECOMMENDED) {
            let t = k(b);
            e = r ? (0, u.Bs)(t, j) : t;
        } else if (S === i.i.POPULAR) {
            let t = k(C);
            e = r ? (0, u.Bs)(t, j) : t;
        } else S === i.i.RANDOM && (e = O);
        return x ? (0, h.ex)(T(e)) : T(e);
    }, [S, x, T, s, L, k, b, r, j, C, O]);
    return {
        sortType: S,
        setSortType: v,
        sortedItems: (0, m.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [
                { value: i.i.POPULAR, label: f.intl.string(f.t.Y68e5p) },
                { value: i.i.RECENT, label: f.intl.string(f.t["51Bhiz"]) },
                { value: i.i.PRICE_LOW_TO_HIGH, label: f.intl.string(f.t.m8RVU2) },
            ];
            return A && e.unshift({ value: i.i.RECOMMENDED, label: f.intl.string(f.t.zPWgFG) }), e;
        }, [A]),
        showRecommendationOption: A,
        shuffleProducts: N,
    };
}
