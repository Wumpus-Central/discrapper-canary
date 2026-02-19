l.d(t, { q: () => u });
var s = l(64700),
    n = l(311907),
    i = l(994500),
    a = l(287809),
    r = l(922590);
let o = [];
function u(e) {
    let { userId: t } = e,
        l = (0, n.bG)([i.A, a.default], () => i.A.isFriend(t) || a.default.getUser(t)?.isProvisional),
        u = (0, r.f1)(t);
    return s.useMemo(
        () =>
            l
                ? o
                : u.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [u, l],
    );
}
