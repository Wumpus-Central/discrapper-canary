n.d(t, { A: () => a });
var o = n(64700),
    r = n(166532),
    i = n(566980);
function a(e) {
    let [t, n] = o.useState(i.h.WAITING);
    return (
        o.useEffect(() => {
            null != e && e !== r.pn.REVIEW && t !== i.h.WAITING && t !== i.h.COMPLETED && n(i.h.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
