a.d(t, { q: () => s });
var n = a(64700),
    i = a(311907),
    l = a(994500),
    r = a(287809),
    d = a(922590);
let o = [];
function s(e) {
    let { userId: t } = e,
        a = (0, i.bG)([l.A, r.default], () => l.A.isFriend(t) || r.default.getUser(t)?.isProvisional),
        s = (0, d.f1)(t);
    return n.useMemo(
        () =>
            a
                ? o
                : s.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [s, a],
    );
}
