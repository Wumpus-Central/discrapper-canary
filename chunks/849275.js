n.d(t, { Z: () => C }), n(388685), n(290780);
var r = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(482820),
    o = n(442837),
    i = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    f = n(370039),
    g = n(937510),
    b = n(27123),
    p = n(934760),
    m = n(981631),
    h = n(388032);
function C(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: C } = e,
        E = (0, o.e7)([i.Z], () => i.Z.hasConsented(m.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.RECOMMENDED]) ? e : [];
        }, [t]),
        S = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.POPULAR]) ? e : [];
        }, [t]),
        _ = v.length > 0 && E,
        [x, O] = r.useState(_ ? s.m.RECOMMENDED : s.m.POPULAR),
        y = (0, o.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        k = r.useMemo(() => (0, d.wO)(y), [y]),
        T = (0, o.e7)([u.Z], () => u.Z.getUserDiscounts()),
        j = (0, p.Z)(),
        L = (0, f.a)(),
        [I, A] = r.useState([]),
        B = r.useCallback(() => {
            O(s.m.RANDOM), A(a().shuffle(k));
        }, [k]);
    r.useEffect(() => {
        A(a().shuffle(k));
    }, [k]);
    let N = r.useMemo(() => {
        let e = [];
        if (x === s.m.RECENT) e = k;
        else if (x === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...k], n, C);
        else if (x === s.m.RECOMMENDED) {
            let t = j(v);
            e = l ? (0, d.Qf)(t, T) : t;
        } else if (x === s.m.POPULAR) {
            let t = j(S);
            e = l ? (0, d.Qf)(t, T) : t;
        } else x === s.m.RANDOM && (e = I);
        return C ? (0, b.cf)(L(e)) : L(e);
    }, [x, C, L, n, k, j, v, l, T, S, I]);
    return {
        sortType: x,
        setSortType: O,
        sortedItems: (0, g.l)(N),
        sortOptions: r.useMemo(() => {
            let e = [
                {
                    value: s.m.POPULAR,
                    label: h.intl.string(h.t.Y68e5p),
                },
                {
                    value: s.m.RECENT,
                    label: h.intl.string(h.t["51Bhiz"]),
                },
                {
                    value: s.m.PRICE_LOW_TO_HIGH,
                    label: h.intl.string(h.t.m8RVU2),
                },
            ];
            return (
                _ &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: h.intl.string(h.t.zPWgFG),
                    }),
                e
            );
        }, [_]),
        showRecommendationOption: _,
        shuffleProducts: B,
    };
}
