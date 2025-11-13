n.d(t, { Z: () => _ }), n(388685), n(290780);
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
    h = n(934760),
    C = n(981631),
    m = n(388032);
function _(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: _ } = e,
        b = (0, o.e7)([s.Z], () => s.Z.hasConsented(C.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.RECOMMENDED]) ? e : [];
        }, [t]),
        x = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[a.m.POPULAR]) ? e : [];
        }, [t]),
        E = v.length > 0 && b,
        [S, O] = r.useState(E ? a.m.RECOMMENDED : a.m.POPULAR),
        y = (0, h.Z)(),
        j = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        I = (0, g.a)(),
        [T, L] = r.useState([]),
        B = r.useCallback(() => {
            O(a.m.RANDOM), L(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        L(i().shuffle(j));
    }, [j]);
    let P = r.useMemo(() => {
        let e = [];
        if (S === a.m.RECENT) e = j;
        else if (S === a.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, _);
        else if (S === a.m.RECOMMENDED) {
            let t = y(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (S === a.m.POPULAR) {
            let t = y(x);
            e = l ? (0, d.Qf)(t, k) : t;
        } else S === a.m.RANDOM && (e = T);
        return _ ? (0, f.cf)(I(e)) : I(e);
    }, [S, _, I, n, j, y, v, l, k, x, T]);
    return {
        sortType: S,
        setSortType: O,
        sortedItems: (0, p.l)(P),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: m.intl.string(m.t["1wQj4E"]),
                },
                {
                    value: a.m.RECENT,
                    label: m.intl.string(m.t["6NZpt6"]),
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: m.intl.string(m.t.RTG4yJ),
                },
            ];
            return (
                E &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: m.intl.string(m.t.JrlKlh),
                    }),
                e
            );
        }, [E]),
        showRecommendationOption: E,
        shuffleProducts: B,
    };
}
