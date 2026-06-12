e.d(a, { q: () => d });
var t = e(64700),
    i = e(17928),
    s = e(994500),
    n = e(287809),
    r = e(922590);
let c = [];
function d(l) {
    let { userId: a } = l,
        e = (0, i.bG)([s.A, n.default], () => s.A.isFriend(a) || n.default.getUser(a)?.isProvisional),
        d = (0, r.f1)(a);
    return t.useMemo(
        () =>
            e
                ? c
                : d.map((l) => {
                      let { applicationId: a } = l;
                      return a;
                  }),
        [d, e],
    );
}
