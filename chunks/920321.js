n.d(t, { Z: () => l });
var i = n(192379),
    r = n(442837),
    a = n(131951),
    s = n(65154),
    o = n(388032);
function l() {
    let e = (0, r.e7)([a.Z], () => a.Z.getVideoDevices());
    return i.useMemo(() => {
        let t = { ...e },
            n = t[s.w5];
        return (
            null == n ||
                (t[s.w5] = {
                    ...n,
                    ...(n.disabled && { name: o.intl.string(o.t.WKWARU) })
                }),
            t
        );
    }, [e]);
}
