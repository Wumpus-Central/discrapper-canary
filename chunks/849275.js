n.d(t, { Z: () => _ }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    i = n.n(l),
    s = n(482820),
    a = n(442837),
    o = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    p = n(370039),
    g = n(937510),
    f = n(27123),
    h = n(934760),
    C = n(981631),
    m = n(388032);
function _(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: _ } = e,
        b = (0, a.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.RECOMMENDED]) ? e : [];
        }, [t]),
        E = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.POPULAR]) ? e : [];
        }, [t]),
        x = v.length > 0 && b,
        [O, S] = r.useState(x ? s.m.RECOMMENDED : s.m.POPULAR),
        y = (0, h.Z)(),
        j = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()),
        I = (0, p.a)(),
        [T, L] = r.useState([]),
        B = r.useCallback(() => {
            S(s.m.RANDOM), L(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        L(i().shuffle(j));
    }, [j]);
    let P = r.useMemo(() => {
        let e = [];
        if (O === s.m.RECENT) e = j;
        else if (O === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
        else if (O === s.m.RECOMMENDED) {
            let t = y(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (O === s.m.POPULAR) {
            let t = y(E);
            e = l ? (0, d.Qf)(t, k) : t;
        } else O === s.m.RANDOM && (e = T);
        return _ ? (0, f.cf)(I(e)) : I(e);
    }, [O, _, I, n, j, y, v, l, k, E, T]);
    return {
        sortType: O,
        setSortType: S,
        sortedItems: (0, g.l)(P),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: s.m.POPULAR,
                    label: m.intl.string(m.t["1wQj4E"]),
                },
                {
                    value: s.m.RECENT,
                    label: m.intl.string(m.t["6NZpt6"]),
                },
                {
                    value: s.m.PRICE_LOW_TO_HIGH,
                    label: m.intl.string(m.t.RTG4yJ),
                },
            ];
            return (
                x &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: m.intl.string(m.t.JrlKlh),
                    }),
                e
            );
        }, [x]),
        showRecommendationOption: x,
        shuffleProducts: B,
    };
}
