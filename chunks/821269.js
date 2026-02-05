n.d(t, { q: () => d });
var i = n(64700),
    l = n(311907),
    s = n(994500),
    a = n(287809),
    r = n(922590);
let o = [];
function d(e) {
    let { userId: t } = e,
        n = (0, l.bG)([s.A, a.default], () => s.A.isFriend(t) || a.default.getUser(t)?.isProvisional),
        d = (0, r.f1)(t);
    return i.useMemo(
        () =>
            n
                ? o
                : d.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [d, n],
    );
}
