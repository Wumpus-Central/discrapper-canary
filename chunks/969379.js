n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(269576);
let a = (e, t) => {
    let { groupType: n, teamId: i } = t,
        [a, c] = r.useState(!0),
        [o, d] = r.useState([]),
        u = r.useCallback(async () => {
            if ((d([]), null == e)) return void c(!1);
            try {
                c(!0);
                let t = await s.b(e, {
                    grouping_type: n,
                });
                d(t);
            } catch (e) {
            } finally {
                c(!1);
            }
        }, [e, n]);
    return (
        r.useEffect(() => {
            u();
        }, [u]),
        {
            payoutsByPeriod: r.useMemo(
                () =>
                    ((e) => {
                        let t = {};
                        for (let n of e) {
                            let e = new Date(n.period_starting_at),
                                r = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1)).toISOString();
                            null == t[r] &&
                                (t[r] = {
                                    key: r,
                                    periodStartingAt: r,
                                    ppgs: {},
                                    paymentsCount: 0,
                                    amount: 0,
                                });
                            let i = t[r];
                            (i.amount += n.amount), (i.paymentsCount += n.payments_count), (i.ppgs[n.grouping_id] = n);
                        }
                        return l().orderBy(Object.values(t), ["periodStartingAt"], ["desc"]);
                    })(null != i ? o.filter((e) => e.user_id === i) : o),
                [o, i],
            ),
            loading: a,
        }
    );
};
