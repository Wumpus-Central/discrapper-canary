t.d(l, { q: () => d });
var s = t(582128),
    n = t(17928),
    i = t(994500),
    a = t(287809),
    r = t(922590);
let u = [];
function d(e) {
    let { userId: l } = e,
        t = (0, n.bG)([i.A, a.default], () => i.A.isFriend(l) || a.default.getUser(l)?.isProvisional),
        d = (0, r.f1)(l);
    return s.useMemo(
        () =>
            t
                ? u
                : d.map((e) => {
                      let { applicationId: l } = e;
                      return l;
                  }),
        [d, t],
    );
}
