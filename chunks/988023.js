n.d(t, { A: () => o });
var r = n(64700),
    a = n(166532),
    i = n(566980);
function o(e) {
    let [t, n] = r.useState(i.h.WAITING);
    return (
        r.useEffect(() => {
            null != e && e !== a.pn.REVIEW && t !== i.h.WAITING && t !== i.h.COMPLETED && n(i.h.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
