n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(442837),
    o = n(695346),
    a = n(699516);
function s(e) {
    let t = o.Rt.useSetting(),
        { isBlocked: n, isIgnored: s } = (0, i.cj)([a.Z], () => ({
            isBlocked: a.Z.isBlocked(e),
            isIgnored: a.Z.isIgnored(e)
        })),
        [l, c] = (0, r.useState)(n || s);
    return (
        (0, r.useEffect)(() => c(n || s), [n, s]),
        [
            l && !(s && t),
            (0, r.useCallback)(() => {
                c(!1);
            }, [])
        ]
    );
}
