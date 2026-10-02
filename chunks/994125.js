r.d(e, { K: () => A });
var s = r(582128),
    n = r(17928),
    a = r(73153),
    i = r(287809),
    u = r(429707),
    c = r(274303);
function A() {
    let t = (0, n.cf)([c.A, i.default], () => {
        let t = c.A.getUsers(),
            e = i.default.getCurrentUser();
        return null == e ||
            t.some((t) => {
                let { id: r } = t;
                return r === e.id;
            })
            ? { isLoading: c.A.getIsValidatingUsers(), multiAccountUsers: t }
            : {
                  isLoading: c.A.getIsValidatingUsers(),
                  multiAccountUsers: [
                      {
                          id: e.id,
                          avatar: e.avatar,
                          username: e.username,
                          discriminator: e.discriminator,
                          tokenStatus: c.U.VALID,
                          pushSyncToken: null,
                      },
                      ...t,
                  ],
              };
    });
    return (
        s.useEffect(() => {
            a.h.wait(() => {
                u.F6();
            });
        }, []),
        t
    );
}
