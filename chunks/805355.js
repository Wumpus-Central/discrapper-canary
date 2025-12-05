n.d(t, { Z: () => l }), n(388685), n(457542);
var r = n(473749),
    i = n(442837),
    a = n(220082),
    o = n(55563),
    s = n(164670);
function l(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.get(e)),
        [l, c] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = r.useMemo(() => (0, s.a7)(n), [n]),
        p = r.useMemo(() => (0, s.Do)(n), [n]);
    return (
        r.useEffect(() => {
            if ((null == n ? void 0 : n.id) == null || l || !t) return;
            if (null == p) return void c(!0);
            let e = new Image();
            return (
                (e.src = p.toString()),
                (e.onload = () => {
                    c(!0);
                }),
                (e.onerror = () => {
                    c(!0);
                }),
                () => {
                    (e.onerror = null), (e.onload = null), (e.src = "");
                }
            );
        }, [p, t, l, null == n ? void 0 : n.id]),
        r.useEffect(() => {
            if ((null == n ? void 0 : n.id) == null || u || !t) return;
            if (null == f) return void d(!0);
            let e = !0;
            return (
                (0, a.vM)(f.toString()).finally(() => {
                    e && d(!0);
                }),
                () => {
                    e = !1;
                }
            );
        }, [u, f, t, null == n ? void 0 : n.id]),
        r.useMemo(() => l && u, [l, u])
    );
}
