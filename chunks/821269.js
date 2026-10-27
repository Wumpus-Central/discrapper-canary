i.d(l, { q: () => u });
var t = i(582128),
    n = i(17928),
    a = i(994500),
    s = i(287809),
    r = i(922590);
let d = [];
function u(e) {
    let { userId: l } = e,
        i = (0, n.bG)([a.A, s.default], () => a.A.isFriend(l) || s.default.getUser(l)?.isProvisional),
        u = (0, r.f1)(l);
    return t.useMemo(
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
