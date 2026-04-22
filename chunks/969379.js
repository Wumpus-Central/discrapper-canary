n.d(t, { A: () => a });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    r = n(269576);
let a = (e, t) => {
    let { groupType: n, teamId: l } = t,
        [a, o] = i.useState(!0),
        [d, c] = i.useState([]),
        u = i.useCallback(async () => {
            if ((c([]), null == e)) return void o(!1);
            try {
                o(!0);
                let t = await r.b(e, { grouping_type: n });
                c(t);
            } catch {
            } finally {
                o(!1);
            }
        }, [e, n]);
    return (
        i.useEffect(() => {
            u();
        }, [u]),
        {
            payoutsByPeriod: i.useMemo(
                () =>
                    ((e) => {
                        let t = {};
                        for (let n of e) {
                            let e = new Date(n.period_starting_at),
                                i = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1)).toISOString();
                            null == t[i] &&
                                (t[i] = { key: i, periodStartingAt: i, ppgs: {}, paymentsCount: 0, amount: 0 });
                            let l = t[i];
                            (l.amount += n.amount), (l.paymentsCount += n.payments_count), (l.ppgs[n.grouping_id] = n);
                        }
                        return s().orderBy(Object.values(t), ["periodStartingAt"], ["desc"]);
                    })(null != l ? d.filter((e) => e.user_id === l) : d),
                [d, l],
            ),
            loading: a,
        }
    );
};
