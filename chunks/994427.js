n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(409813),
    o = n(45572);
function a(e) {
    let [t, n] = r.useState(o.A.WAITING);
    return (
        r.useEffect(() => {
            null != e && e !== i.h8.REVIEW && t !== o.A.WAITING && t !== o.A.COMPLETED && n(o.A.WAITING);
        }, [e, t, n]),
        [t, n]
    );
}
