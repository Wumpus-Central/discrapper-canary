n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(409813),
    a = n(45572);
function o(e) {
    let [t, n] = r.useState(a.A.WAITING);
    return (
        r.useEffect(() => {
            null != e && e !== i.h8.REVIEW && t !== a.A.WAITING && t !== a.A.COMPLETED && n(a.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
