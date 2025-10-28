n.d(t, { Y: () => i }), n(388685);
var a = n(647438),
    r = n(442837),
    l = n(709706);
function i() {
    let e = (0, r.e7)([l.Z], () => l.Z.getLastReportedLagTimestamp()),
        [t, n] = a.useState(!1),
        [i, o] = a.useState(!1),
        s = a.useRef(null);
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
            let t = null != e && null == s.current;
            o(t);
            let n = null;
            return (
                t && ((s.current = Date.now()), (n = setTimeout(() => o(!1), 4000))),
                () => {
                    clearTimeout(n), o(!1);
                }
            );
        }, [e]),
        {
            showSilentLagWarning: t,
            showLagTooltip: i,
        }
    );
}
