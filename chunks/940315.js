n.d(t, { Y: () => l }), n(388685);
var i = n(73800),
    r = n(442837),
    s = n(709706);
function l() {
    let e = (0, r.e7)([s.Z], () => s.Z.getLastReportedLagTimestamp()),
        [t, n] = i.useState(!1),
        [l, a] = i.useState(!1),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = null != e;
            n(t);
            let i = t ? setTimeout(() => n(!1), 3000) : null;
            return () => {
                clearTimeout(i), n(!1);
            };
        }, [e]),
        i.useEffect(() => {
            let t = null != e && null == o.current;
            a(t);
            let n = null;
            return (
                t && ((o.current = Date.now()), (n = setTimeout(() => a(!1), 4000))),
                () => {
                    clearTimeout(n), a(!1);
                }
            );
        }, [e]),
        {
            showSilentLagWarning: t,
            showLagTooltip: l
        }
    );
}
