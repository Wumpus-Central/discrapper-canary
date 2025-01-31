n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    l = n(393238);
function a() {
    let { ref: e, width: t } = (0, l.Z)(),
        [n, a] = i.useState();
    return (
        i.useEffect(() => {
            null == n && null != t && a(t);
        }, [n, t]),
        [e, n]
    );
}
