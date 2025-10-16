n.d(t, { Z: () => m }), n(388685), n(290780);
var r = n(647438),
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
    C = n(934760),
    h = n(981631),
    _ = n(388032);
function m(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: m } = e,
        b = (0, s.e7)([a.Z], () => a.Z.hasConsented(h.pjP.PERSONALIZATION)),
        E = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[o.m.RECOMMENDED]) ? e : [];
        }, [t]),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[o.m.POPULAR]) ? e : [];
        }, [t]),
        O = E.length > 0 && b,
        [x, S] = r.useState(O ? o.m.RECOMMENDED : o.m.POPULAR),
        y = (0, C.Z)(),
        j = (0, s.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, s.e7)([u.Z], () => u.Z.getUserDiscounts()),
        T = (0, g.a)(),
        [L, I] = r.useState([]),
        B = r.useCallback(() => {
            S(o.m.RANDOM), I(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        I(i().shuffle(j));
    }, [j]);
    let A = r.useMemo(() => {
        let e = [];
        if (x === o.m.RECENT) e = j;
        else if (x === o.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, m);
        else if (x === o.m.RECOMMENDED) {
            let t = y(E);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (x === o.m.POPULAR) {
            let t = y(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else x === o.m.RANDOM && (e = L);
        return m ? (0, p.cf)(T(e)) : T(e);
    }, [x, m, T, n, j, y, E, l, k, v, L]);
    return {
        sortType: x,
        setSortType: S,
        sortedItems: (0, f.l)(A),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: o.m.POPULAR,
                    label: _.intl.string(_.t["1wQj4O"]),
                },
                {
                    value: o.m.RECENT,
                    label: _.intl.string(_.t["6NZpt7"]),
                },
                {
                    value: o.m.PRICE_LOW_TO_HIGH,
                    label: _.intl.string(_.t.RTG4yM),
                },
            ];
            return (
                O &&
                    e.unshift({
                        value: o.m.RECOMMENDED,
                        label: _.intl.string(_.t.JrlKlp),
                    }),
                e
            );
        }, [O]),
        showRecommendationOption: O,
        shuffleProducts: B,
    };
}
