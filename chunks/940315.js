n.d(t, { Y: () => l }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(709706);
let o = 3000,
    s = 4000;
function l() {
    let e = (0, i.e7)([a.Z], () => a.Z.getLastReportedLagTimestamp()),
        [t, n] = r.useState(!1),
        [l, c] = r.useState(!1),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = null != e;
            n(t);
            let r = t ? setTimeout(() => n(!1), o) : null;
            return () => {
                clearTimeout(r), n(!1);
            };
        }, [e]),
        r.useEffect(() => {
            let t = null != e && null == u.current;
            c(t);
            let n = null;
            return (
                t && ((u.current = Date.now()), (n = setTimeout(() => c(!1), s))),
                () => {
                    clearTimeout(n), c(!1);
                }
            );
        }, [e]),
        {
            showSilentLagWarning: t,
            showLagTooltip: l,
        }
    );
}
