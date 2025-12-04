n.d(t, { Z: () => _ }), n(388685), n(290780);
var r = n(473749),
    l = n(392711),
    i = n.n(l),
    s = n(482820),
    o = n(442837),
    a = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    f = n(937510),
    p = n(27123),
    m = n(934760),
    C = n(981631),
    h = n(388032);
function _(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: _ } = e,
        b = (0, o.e7)([a.Z], () => a.Z.hasConsented(C.pjP.PERSONALIZATION)),
        E = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.RECOMMENDED]) ? e : [];
        }, [t]),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.POPULAR]) ? e : [];
        }, [t]),
        S = E.length > 0 && b,
        [O, x] = r.useState(S ? s.m.RECOMMENDED : s.m.POPULAR),
        y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        T = r.useMemo(() => (0, d.wO)(y), [y]),
        j = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        k = (0, m.Z)(),
        I = (0, g.a)(),
        [L, B] = r.useState([]),
        A = r.useCallback(() => {
            x(s.m.RANDOM), B(i().shuffle(T));
        }, [T]);
    r.useEffect(() => {
        B(i().shuffle(T));
    }, [T]);
    let N = r.useMemo(() => {
        let e = [];
        if (O === s.m.RECENT) e = T;
        else if (O === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...T], n, _);
        else if (O === s.m.RECOMMENDED) {
            let t = k(E);
            e = l ? (0, d.Qf)(t, j) : t;
        } else if (O === s.m.POPULAR) {
            let t = k(v);
            e = l ? (0, d.Qf)(t, j) : t;
        } else O === s.m.RANDOM && (e = L);
        return _ ? (0, p.cf)(I(e)) : I(e);
    }, [O, _, I, n, T, k, E, l, j, v, L]);
    return {
        sortType: O,
        setSortType: x,
        sortedItems: (0, f.l)(N),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: s.m.POPULAR,
                    label: h.intl.string(h.t["1wQj4E"]),
                },
                {
                    value: s.m.RECENT,
                    label: h.intl.string(h.t["6NZpt6"]),
                },
                {
                    value: s.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yJ),
                },
            ];
            return (
                S &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlh),
                    }),
                e
            );
        }, [S]),
        showRecommendationOption: S,
        shuffleProducts: A,
    };
}
