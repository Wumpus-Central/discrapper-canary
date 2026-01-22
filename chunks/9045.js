n.d(t, { A: () => s });
var r = n(64700),
    i = n(735438),
    a = n(572808);
let s = (e) =>
    r.useMemo(() => {
        let t = (0, i.clamp)(e.avatar, 0, a.oo.length - 1),
            n = a.qS[a.oo[t]];
        return null == n && (n = a.qS[a.PZ.IMP]), n;
    }, [e.avatar]);
