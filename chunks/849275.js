r.d(t, { Z: () => h }), r(388685), r(290780);
var n = r(647438),
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
    m = r(981631),
    b = r(388032);
function h(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, o.e7)([s.Z], () => s.Z.hasConsented(m.pjP.PERSONALIZATION)),
        h = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        _ = n.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        v = h.length > 0 && l,
        [O, C] = n.useState(v ? i.m.RECOMMENDED : i.m.POPULAR),
        E = (0, f.Z)(),
        y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        S = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        x = (0, p.a)(),
        [j, P] = n.useState([]),
        T = n.useCallback(() => {
            C(i.m.RANDOM), P(a().shuffle(y));
        }, [y]);
    n.useEffect(() => {
        P(a().shuffle(y));
    }, [y]);
    let L = n.useMemo(() => {
        let e = [];
        return (
            O === i.m.RECENT
                ? (e = y)
                : O === i.m.PRICE_LOW_TO_HIGH
                  ? (e = (0, d.hC)([...y], t))
                  : O === i.m.RECOMMENDED
                    ? (e = r ? (0, d.Qf)(E(h), S) : E(h))
                    : O === i.m.POPULAR
                      ? (e = r ? (0, d.Qf)(E(_), S) : E(_))
                      : O === i.m.RANDOM && (e = j),
            x(e)
        );
    }, [O, x, y, j, t, E, h, _, S, r]);
    return {
        sortType: O,
        setSortType: C,
        sortedItems: (0, g.l)(L),
        sortOptions: n.useMemo(() => {
            let e = [
                {
                    value: i.m.POPULAR,
                    label: b.intl.string(b.t["1wQj4O"]),
                },
                {
                    value: i.m.RECENT,
                    label: b.intl.string(b.t["6NZpt7"]),
                },
                {
                    value: i.m.PRICE_LOW_TO_HIGH,
                    label: b.intl.string(b.t.RTG4yM),
                },
            ];
            return (
                v &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: b.intl.string(b.t.JrlKlp),
                    }),
                e
            );
        }, [v]),
        showRecommendationOption: v,
        shuffleProducts: T,
    };
}
