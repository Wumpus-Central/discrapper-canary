i.d(l, { q: () => u });
var a = i(582128),
    s = i(17928),
    n = i(994500),
    t = i(287809),
    r = i(922590);
let d = [];
function u(e) {
    let { userId: l } = e,
        i = (0, s.bG)([n.A, t.default], () => n.A.isFriend(l) || t.default.getUser(l)?.isProvisional),
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
