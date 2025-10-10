n.d(t, { Z: () => _ }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    s = n.n(l),
    a = n(482820),
    i = n(442837),
    o = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    p = n(937510),
    f = n(934760),
    C = n(981631),
    h = n(388032);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, i.e7)([o.Z], () => o.Z.hasConsented(C.pjP.PERSONALIZATION)),
        _ = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.RECOMMENDED]) ? t : [];
        }, [e]),
        m = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[a.m.POPULAR]) ? t : [];
        }, [e]),
        b = _.length > 0 && l,
        [E, S] = r.useState(b ? a.m.RECOMMENDED : a.m.POPULAR),
        v = (0, f.Z)(),
        x = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        O = (0, i.e7)([u.Z], () => u.Z.getUserDiscounts()),
        y = (0, g.a)(),
        [T, L] = r.useState([]),
        j = r.useCallback(() => {
            S(a.m.RANDOM), L(s().shuffle(x));
        }, [x]);
    r.useEffect(() => {
        L(s().shuffle(x));
    }, [x]);
    let k = r.useMemo(() => {
        let e = [];
        return (
            E === a.m.RECENT
                ? (e = x)
                : E === a.m.PRICE_LOW_TO_HIGH
                  ? (e = (0, d.hC)([...x], t))
                  : E === a.m.RECOMMENDED
                    ? (e = n ? (0, d.Qf)(v(_), O) : v(_))
                    : E === a.m.POPULAR
                      ? (e = n ? (0, d.Qf)(v(m), O) : v(m))
                      : E === a.m.RANDOM && (e = T),
            y(e)
        );
    }, [E, y, x, T, t, v, _, m, O, n]);
    return {
        sortType: E,
        setSortType: S,
        sortedItems: (0, p.l)(k),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: a.m.POPULAR,
                    label: h.intl.string(h.t["1wQj4O"]),
                },
                {
                    value: a.m.RECENT,
                    label: h.intl.string(h.t["6NZpt7"]),
                },
                {
                    value: a.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.RTG4yM),
                },
            ];
            return (
                b &&
                    e.unshift({
                        value: a.m.RECOMMENDED,
                        label: h.intl.string(h.t.JrlKlp),
                    }),
                e
            );
        }, [b]),
        showRecommendationOption: b,
        shuffleProducts: j,
    };
}
