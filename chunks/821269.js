n.d(t, { q: () => c });
var r = n(64700),
    l = n(311907),
    i = n(994500),
    a = n(287809),
    s = n(922590);
let o = [];
function c(e) {
    let { userId: t } = e,
        n = (0, l.bG)([i.A, a.default], () => {
            var e;
            return i.A.isFriend(t) || (null == (e = a.default.getUser(t)) ? void 0 : e.isProvisional);
        }),
        c = (0, s.f1)(t);
    return r.useMemo(
        () =>
            n
                ? o
                : c.map((e) => {
                      let { applicationId: t } = e;
                      return t;
                  }),
        [c, n],
    );
}
