n.d(t, { Z: () => b }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    s = n.n(l),
    i = n(482820),
    a = n(442837),
    o = n(480294),
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
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, tab: b } = e,
        E = (0, a.e7)([o.Z], () => o.Z.hasConsented(_.pjP.PERSONALIZATION)),
        S = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[i.m.RECOMMENDED]) ? e : [];
        }, [t]),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[i.m.POPULAR]) ? e : [];
        }, [t]),
        x = S.length > 0 && E,
        [O, y] = r.useState(x ? i.m.RECOMMENDED : i.m.POPULAR),
        T = (0, C.Z)(),
        j = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()),
        L = (0, g.a)(),
        I = (0, f.s)(),
        P = r.useMemo(() => (b === h.AW.ORBS ? I(T(v), n) : j), [j, n, b, I, T, v]),
        N = r.useMemo(() => (b === h.AW.ORBS ? I(T(v), n) : T(v)), [n, b, I, T, v]),
        B = r.useMemo(() => (b === h.AW.ORBS ? I(T(S), n) : T(S)), [n, b, I, T, S]),
        [A, R] = r.useState([]),
        Z = r.useCallback(() => {
            y(i.m.RANDOM), R(s().shuffle(P));
        }, [P]);
    r.useEffect(() => {
        R(s().shuffle(P));
    }, [P]);
    let w = r.useMemo(() => {
        let e = [];
        return (
            O === i.m.RECENT
                ? (e = P)
                : O === i.m.PRICE_LOW_TO_HIGH
                  ? (e = b === h.AW.ORBS ? (0, d.DV)([...P], n) : (0, d.hC)([...P], n))
                  : O === i.m.RECOMMENDED
                    ? (e = l ? (0, d.Qf)(B, k) : B)
                    : O === i.m.POPULAR
                      ? (e = l ? (0, d.Qf)(N, k) : N)
                      : O === i.m.RANDOM && (e = A),
            L(e)
        );
    }, [O, L, P, b, n, l, B, k, N, A]);
    return {
        sortType: O,
        setSortType: y,
        sortedItems: (0, p.l)(w),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: m.intl.string(m.t["1wQj4O"]),
                },
                {
                    value: i.m.RECENT,
                    label: m.intl.string(m.t["6NZpt7"]),
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: m.intl.string(m.t.RTG4yM),
                },
            ];
            return (
                x &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: m.intl.string(m.t.JrlKlp),
                    }),
                e
            );
        }, [x]),
        showRecommendationOption: x,
        shuffleProducts: Z,
    };
}
