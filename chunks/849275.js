n.d(t, { Z: () => C }), n(388685), n(290780);
var r = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(482820),
    i = n(442837),
    o = n(480294),
    c = n(597688),
    u = n(615006),
    d = n(884697),
    f = n(370039),
    g = n(155066),
    b = n(937510),
    p = n(27123),
    m = n(981631),
    h = n(388032);
function C(e) {
    let { sortedSkuIds: t, isPremiumUser: n, prioritizeUserDiscounts: l, orbsSupportedOnly: C } = e,
        E = (0, i.e7)([o.Z], () => o.Z.hasConsented(m.pjP.PERSONALIZATION)),
        v = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.RECOMMENDED]) ? e : [];
        }, [t]),
        S = r.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t[s.m.POPULAR]) ? e : [];
        }, [t]),
        x = v.length > 0 && E,
        [O, _] = r.useState(x ? s.m.RECOMMENDED : s.m.POPULAR),
        y = (0, i.e7)([c.Z], () => c.Z.productsWithVariantsAsGroup),
        j = r.useMemo(() => (0, d.wO)(y), [y]),
        k = (0, i.e7)([u.Z], () => u.Z.getUserDiscounts()),
        T = (0, g.Z)(),
        I = (0, f.a)(),
        [L, A] = r.useState([]),
        B = r.useCallback(() => {
            _(s.m.RANDOM), A(a().shuffle(j));
        }, [j]);
    r.useEffect(() => {
        A(a().shuffle(j));
    }, [j]);
    let N = r.useMemo(() => {
        let e = [];
        if (O === s.m.RECENT) e = j;
        else if (O === s.m.PRICE_LOW_TO_HIGH) e = (0, d.hC)([...j], n, C);
        else if (O === s.m.RECOMMENDED) {
            let t = T(v);
            e = l ? (0, d.Qf)(t, k) : t;
        } else if (O === s.m.POPULAR) {
            let t = T(S);
            e = l ? (0, d.Qf)(t, k) : t;
        } else O === s.m.RANDOM && (e = L);
        return C ? (0, p.cf)(I(e)) : I(e);
    }, [O, C, I, n, j, T, v, l, k, S, L]);
    return {
        sortType: O,
        setSortType: _,
        sortedItems: (0, b.l)(N),
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
                x &&
                    e.unshift({
                        value: s.m.RECOMMENDED,
                        label: h.intl.string(h.t.zPWgFG),
                    }),
                e
            );
        }, [x]),
        showRecommendationOption: x,
        shuffleProducts: B,
    };
}
