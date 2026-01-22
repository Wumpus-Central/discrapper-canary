r.d(t, {
    A: () => i,
}),
    r(896048);
var n = r(64700),
    s = r(677185);
let i = (e) => {
    let { subscriptionId: t, searchQuery: r } = e,
        [i, l] = n.useState([]),
        [a, c] = n.useState(0),
        [o, u] = n.useState(!1),
        [d, f] = n.useState(!1),
        p = async (e) => {
            if (!o && null != e)
                try {
                    u(!0), f(!1);
                    let n = await (0, s.EQ)(t, e, r);
                    l((t) => (0 === e ? n.users : [...t, ...n.users])), c(n.nextIndex);
                } catch (e) {
                    f(!0);
                } finally {
                    u(!1);
                }
        };
    return (
        (0, n.useEffect)(() => {
            c(0), p(0);
        }, [t, r]),
        {
            eligibleUsers: i,
            isFetching: o,
            hasError: d,
            getNextRows: () => p(a),
        }
    );
};
