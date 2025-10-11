n.d(t, { Z: () => _ }), n(388685), n(290780);
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
    f = n(937510),
    p = n(934760),
    C = n(981631),
    h = n(388032);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, a.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)),
        _ = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.RECOMMENDED]) ? t : [];
        }, [e]),
        m = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[i.m.POPULAR]) ? t : [];
        }, [e]),
        b = _.length > 0 && l,
        [E, v] = r.useState(b ? i.m.RECOMMENDED : i.m.POPULAR),
        S = (0, p.Z)(),
        x = (0, a.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        O = (0, a.e7)([u.Z], () => u.Z.getUserDiscounts()),
        y = (0, g.a)(),
        [j, k] = r.useState([]),
        T = r.useCallback(() => {
            v(i.m.RANDOM), k(s().shuffle(x));
        }, [x]);
    r.useEffect(() => {
        k(s().shuffle(x));
    }, [x]);
    let L = r.useMemo(() => {
        let e = [];
        return (
            E === i.m.RECENT
                ? (e = x)
                : E === i.m.PRICE_LOW_TO_HIGH
                  ? (e = (0, d.hC)([...x], t))
                  : E === i.m.RECOMMENDED
                    ? (e = n ? (0, d.Qf)(S(_), O) : S(_))
                    : E === i.m.POPULAR
                      ? (e = n ? (0, d.Qf)(S(m), O) : S(m))
                      : E === i.m.RANDOM && (e = j),
            y(e)
        );
    }, [E, y, x, j, t, S, _, m, O, n]);
    return {
        sortType: E,
        setSortType: v,
        sortedItems: (0, f.l)(L),
        sortOptions: r.useMemo(() => {
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
                b &&
                    e.unshift({
                        value: i.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp),
                    }),
                e
            );
        }, [b]),
        showRecommendationOption: b,
        shuffleProducts: T,
    };
}
