n.d(t, { Y: () => i }), n(388685);
var a = n(473749),
    l = n(442837),
    r = n(709706);
function i() {
    let e = (0, l.e7)([r.Z], () => r.Z.getLastReportedLagTimestamp()),
        [t, n] = a.useState(!1),
        [i, s] = a.useState(!1),
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let t = null != e;
            n(t);
            let a = t ? setTimeout(() => n(!1), 3000) : null;
            return () => {
                clearTimeout(a), n(!1);
            };
        }, [e]),
        a.useEffect(() => {
            let t = null != e && null == o.current;
            s(t);
            let n = null;
            return (
                t && ((o.current = Date.now()), (n = setTimeout(() => s(!1), 4000))),
                () => {
                    clearTimeout(n), s(!1);
                }
            );
        }, [e]),
        {
            showSilentLagWarning: t,
            showLagTooltip: i,
        }
    );
}
