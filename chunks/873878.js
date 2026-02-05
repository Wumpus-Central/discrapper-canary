n.d(t, { A: () => s });
var l = n(64700),
    i = n(311907),
    r = n(317525),
    u = n(986724),
    a = n(386784);
function s(e, t) {
    let n = (0, i.bG)([r.A], () => (null != e ? r.A.getRolesSnapshot(e.id) : void 0)),
        s = (0, a.A)(e?.id);
    return l.useMemo(() => {
        let l = null != e && null != n ? (0, u.z)(e, n, t) : [],
            i = 0;
        for (let e of l) {
            let t = e.id;
            if (null != t) {
                let e = s?.[t];
                null != e && (i += e);
            }
        }
        return i;
    }, [s, e, t, n]);
}
