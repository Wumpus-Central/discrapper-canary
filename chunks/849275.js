r.d(t, { Z: () => m }), r(388685), r(290780);
var n = r(73800),
    l = r(392711),
    a = r.n(l),
    i = r(482820),
    o = r(442837),
    s = r(480294),
    c = r(597688),
    u = r(615006),
    d = r(884697),
    p = r(370039),
    g = r(937510),
    f = r(934760),
    b = r(981631),
    h = r(388032);
function m(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, o.e7)([s.Z], () => s.Z.hasConsented(b.pjP.PERSONALIZATION)),
        m = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        _ = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        v = m.length > 0 && l,
        [O, C] = n.useState(v ? i.m.RECOMMENDED : i.m.POPULAR),
        E = (0, f.Z)(),
        S = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        y = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        x = (0, p.a)(),
        [j, T] = n.useState([]),
        P = n.useCallback(() => {
            C(i.m.RANDOM), T(a().shuffle(S));
        }, [S]);
    n.useEffect(() => {
        T(a().shuffle(S));
    }, [S]);
    let L = n.useMemo(() => {
        let e = [];
        return (
            O === i.m.RECENT
                ? (e = S)
                : O === i.m.PRICE_LOW_TO_HIGH
                  ? (e = (0, d.hC)([...S], t))
                  : O === i.m.RECOMMENDED
                    ? (e = r ? (0, d.Qf)(E(m), y) : E(m))
                    : O === i.m.POPULAR
                      ? (e = r ? (0, d.Qf)(E(_), y) : E(_))
                      : O === i.m.RANDOM && (e = j),
            x(e)
        );
    }, [O, x, S, j, t, E, m, _, y, r]);
    return {
        sortType: O,
        setSortType: C,
        sortedItems: (0, g.l)(L),
        sortOptions: n.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: h.intl.string(h.t["1wQj4O"]),
                },
                {
                    value: i.m.RECENT,
                    label: h.intl.string(h.t["6NZpt7"]),
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM),
                },
            ];
            return (
                v &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp),
                    }),
                e
            );
        }, [v]),
        showRecommendationOption: v,
        shuffleProducts: P,
    };
}
