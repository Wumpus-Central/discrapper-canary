n.d(t, { Z: () => _ }), n(388685), n(290780);
var r = n(473749),
    l = n(392711),
    i = n.n(l),
    a = n(482820),
    s = n(442837),
    o = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    p = n(937510),
    f = n(27123),
    m = n(934760),
    h = n(981631),
    C = n(388032);
function _(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: _ } = e,
        b = (0, s.e7)([o.Z], () => o.Z.hasConsented(h.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.RECOMMENDED]) ? e : [];
        }, [t]),
        x = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.POPULAR]) ? e : [];
        }, [t]),
        E = v.length > 0 && b,
        [O, S] = r.useState(E ? a.m.RECOMMENDED : a.m.POPULAR),
        y = (0, m.Z)(),
        j = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()),
        I = (0, g.a)(),
        [T, L] = r.useState([]),
        B = r.useCallback(() => {
            S(a.m.RANDOM), L(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        L(i().shuffle(j));
    }, [j]);
    let P = r.useMemo(() => {
        let e = [];
        if (O === a.m.RECENT) e = j;
        else if (O === a.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
        else if (O === a.m.RECOMMENDED) {
            let t = y(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (O === a.m.POPULAR) {
            let t = y(x);
            e = l ? (0, d.Qf)(t, k) : t;
        } else O === a.m.RANDOM && (e = T);
        return _ ? (0, f.cf)(I(e)) : I(e);
    }, [O, _, I, n, j, y, v, l, k, x, T]);
    return {
        sortType: O,
        setSortType: S,
        sortedItems: (0, p.l)(P),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: C.intl.string(C.t["1wQj4E"]),
                },
                {
                    value: a.m.RECENT,
                    label: C.intl.string(C.t["6NZpt6"]),
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: C.intl.string(C.t.RTG4yJ),
                },
            ];
            return (
                E &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: C.intl.string(C.t.JrlKlh),
                    }),
                e
            );
        }, [E]),
        showRecommendationOption: E,
        shuffleProducts: B,
    };
}
