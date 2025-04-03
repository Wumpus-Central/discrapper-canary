n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(393238);
function a() {
    let { ref: e, width: t } = (0, i.Z)(),
        [n, a] = r.useState();
    return (
        r.useEffect(() => {
            null == n && null != t && a(t);
        }, [n, t]),
        [e, n]
    );
}
