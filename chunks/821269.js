n.d(t, { q: () => d });
var a = n(64700),
    i = n(17928),
    l = n(994500),
    r = n(287809),
    s = n(922590);
let o = [];
function d(e) {
    let { userId: t } = e,
        n = (0, i.bG)([l.A, r.default], () => l.A.isFriend(t) || r.default.getUser(t)?.isProvisional),
        d = (0, s.f1)(t);
    return a.useMemo(
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
