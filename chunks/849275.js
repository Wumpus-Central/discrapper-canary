n.d(t, { Z: () => m }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    i = n.n(l),
    a = n(482820),
    o = n(442837),
    s = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    p = n(937510),
    f = n(27123),
    C = n(934760),
    h = n(981631),
    _ = n(388032);
function m(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: m } = e,
        b = (0, o.e7)([s.Z], () => s.Z.hasConsented(h.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.RECOMMENDED]) ? e : [];
        }, [t]),
        E = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.POPULAR]) ? e : [];
        }, [t]),
        x = v.length > 0 && b,
        [O, S] = r.useState(x ? a.m.RECOMMENDED : a.m.POPULAR),
        y = (0, C.Z)(),
        j = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        T = (0, g.a)(),
        [L, I] = r.useState([]),
        B = r.useCallback(() => {
            S(a.m.RANDOM), I(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        I(i().shuffle(j));
    }, [j]);
    let A = r.useMemo(() => {
        let e = [];
        if (O === a.m.RECENT) e = j;
        else if (O === a.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, m);
        else if (O === a.m.RECOMMENDED) {
            let t = y(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (O === a.m.POPULAR) {
            let t = y(E);
            e = l ? (0, d.Qf)(t, k) : t;
        } else O === a.m.RANDOM && (e = L);
        return m ? (0, f.cf)(T(e)) : T(e);
    }, [O, m, T, n, j, y, v, l, k, E, L]);
    return {
        sortType: O,
        setSortType: S,
        sortedItems: (0, p.l)(A),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: _.intl.string(_.t["1wQj4O"]),
                },
                {
                    value: a.m.RECENT,
                    label: _.intl.string(_.t["6NZpt7"]),
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: _.intl.string(_.t.RTG4yM),
                },
            ];
            return (
                x &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: _.intl.string(_.t.JrlKlp),
                    }),
                e
            );
        }, [x]),
        showRecommendationOption: x,
        shuffleProducts: B,
    };
}
