n.d(t, { Z: () => h }), n(388685), n(290780);
var r = n(647438),
    l = n(392711),
    a = n.n(l),
    s = n(482820),
    i = n(442837),
    o = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    g = n(370039),
    p = n(937510),
    f = n(934760),
    m = n(981631),
    _ = n(388032);
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = (0, i.e7)([o.Z], () => o.Z.hasConsented(m.pjP.PERSONALIZATION)),
        h = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[s.m.RECOMMENDED]) ? t : [];
        }, [e]),
        b = r.useMemo(() => {
            var t;
            return null != (t = null == e ? void 0 : e[s.m.POPULAR]) ? t : [];
        }, [e]),
        C = h.length > 0 && l,
        [E, S] = r.useState(C ? s.m.RECOMMENDED : s.m.POPULAR),
        O = (0, f.Z)(),
        v = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        x = (0, i.e7)([u.Z], () => u.Z.getUserDiscounts()),
        y = (0, g.a)(),
        [T, L] = r.useState([]),
        j = r.useCallback(() => {
            S(s.m.RANDOM), L(a().shuffle(v));
        }, [v]);
    r.useEffect(() => {
        L(a().shuffle(v));
    }, [v]);
    let k = r.useMemo(() => {
        let e = [];
        return (
            E === s.m.RECENT
                ? (e = v)
                : E === s.m.PRICE_LOW_TO_HIGH
                  ? (e = (0, d.hC)([...v], t))
                  : E === s.m.RECOMMENDED
                    ? (e = n ? (0, d.Qf)(O(h), x) : O(h))
                    : E === s.m.POPULAR
                      ? (e = n ? (0, d.Qf)(O(b), x) : O(b))
                      : E === s.m.RANDOM && (e = T),
            y(e)
        );
    }, [E, y, v, T, t, O, h, b, x, n]);
    return {
        sortType: E,
        setSortType: S,
        sortedItems: (0, p.l)(k),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: s.m.POPULAR,
                    label: _.intl.string(_.t["1wQj4O"]),
                },
                {
                    value: s.m.RECENT,
                    label: _.intl.string(_.t["6NZpt7"]),
                },
                {
                    value: s.m.PRICE_LOW_TO_HIGH,
                    label: _.intl.string(_.t.RTG4yM),
                },
            ];
            return (
                C &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: _.intl.string(_.t.JrlKlp),
                    }),
                e
            );
        }, [C]),
        showRecommendationOption: C,
        shuffleProducts: j,
    };
}
