i.d(l, { q: () => u });
var a = i(582128),
    s = i(17928),
    t = i(994500),
    n = i(287809),
    r = i(922590);
let d = [];
function u(e) {
    let { userId: l } = e,
        i = (0, s.bG)([t.A, n.default], () => t.A.isFriend(l) || n.default.getUser(l)?.isProvisional),
        u = (0, r.f1)(l);
    return a.useMemo(
        () =>
            i
                ? d
                : u.map((e) => {
                      let { applicationId: l } = e;
                      return l;
                  }),
        [u, i],
    );
}
