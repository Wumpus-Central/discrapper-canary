n.d(t, { Z: () => b }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    i = n.n(l),
    s = n(482820),
    o = n(442837),
    a = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    f = n(309956),
    p = n(937510),
    C = n(934760),
    h = n(215023),
    _ = n(981631),
    m = n(388032);
function b(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: b } = e,
        E = (0, o.e7)([a.Z], () => a.Z.hasConsented(_.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.RECOMMENDED]) ? e : [];
        }, [t]),
        S = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.POPULAR]) ? e : [];
        }, [t]),
        O = v.length > 0 && E,
        [x, y] = r.useState(O ? s.m.RECOMMENDED : s.m.POPULAR),
        T = (0, C.Z)(),
        j = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        L = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        k = (0, g.a)(),
        I = (0, f.s)([h.cv]),
        [B, N] = r.useState([]),
        P = r.useCallback(() => {
            y(s.m.RANDOM), N(i().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        N(i().shuffle(j));
    }, [j]);
    let A = r.useMemo(() => {
        let e = [];
        if (x === s.m.RECENT) e = j;
        else if (x === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, b);
        else if (x === s.m.RECOMMENDED) {
            let t = T(v);
            e = l ? (0, d.Qf)(t, L) : t;
        } else if (x === s.m.POPULAR) {
            let t = T(S);
            e = l ? (0, d.Qf)(t, L) : t;
        } else x === s.m.RANDOM && (e = B);
        return b ? I(k(e), n) : k(e);
    }, [x, b, I, k, n, j, T, v, l, L, S, B]);
    return {
        sortType: x,
        setSortType: y,
        sortedItems: (0, p.l)(A),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: s.m.POPULAR,
                    label: m.intl.string(m.t["1wQj4O"]),
                },
                {
                    value: s.m.RECENT,
                    label: m.intl.string(m.t["6NZpt7"]),
                },
                {
                    value: s.m.PRICE_LOW_TO_HIGH,
                    label: m.intl.string(m.t.RTG4yM),
                },
            ];
            return (
                O &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: m.intl.string(m.t.JrlKlp),
                    }),
                e
            );
        }, [O]),
        showRecommendationOption: O,
        shuffleProducts: P,
    };
}
