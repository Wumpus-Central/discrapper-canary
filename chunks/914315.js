var t = e(582128),
    i = e(855986),
    u = e(615606),
    c = e(233470),
    r = e(260498),
    o = e(246338),
    a = e(913396);
e.d(
    n,
    {},
    {
        A: function (l, n) {
            let e = (0, o.w$)(l, n),
                d = (0, a.A)(e ? l : null),
                s = (0, u.q)(e ? l : null),
                A = e && null == d ? (s?.conjureProjectId ?? null) : null;
            t.useEffect(() => {
                null != A && (0, c.tF)([A]);
            }, [A]);
            let g = (0, i.bG)([r.Ay], () => (null != A ? r.Ay.getProject(A) : null), [A]),
                p = d ?? g ?? null;
            return null != p && (0, r.H_)(p) ? p : null;
        },
    },
);
