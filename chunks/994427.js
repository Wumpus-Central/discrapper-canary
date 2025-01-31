n.d(t, { Z: () => s }), n(47120);
var i = n(192379),
    r = n(409813),
    a = n(45572);
function s(e) {
    let [t, n] = i.useState(a.A.WAITING);
    return (
        i.useEffect(() => {
            null != e && e !== r.h8.REVIEW && t !== a.A.WAITING && t !== a.A.COMPLETED && n(a.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
