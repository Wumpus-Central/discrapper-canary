(n.d(t, { Y: () => a }), n(388685));
var i = n(73800),
    r = n(442837),
    s = n(709706);
function a() {
    let e = (0, r.e7)([s.Z], () => s.Z.getLastReportedLagTimestamp()),
        [t, n] = i.useState(!1),
        [a, l] = i.useState(!1),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = null != e;
            n(t);
            let i = t ? setTimeout(() => n(!1), 3000) : null;
            return () => {
                (clearTimeout(i), n(!1));
            };
        }, [e]),
        i.useEffect(() => {
            let t = null != e && null == o.current;
            l(t);
            let n = null;
            return (
                t && ((o.current = Date.now()), (n = setTimeout(() => l(!1), 4000))),
                () => {
                    (clearTimeout(n), l(!1));
                }
            );
        }, [e]),
        {
            showSilentLagWarning: t,
            showLagTooltip: a
        }
    );
}
