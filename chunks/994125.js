r.d(e, { K: () => A });
var s = r(64700),
    u = r(17928),
    i = r(228366),
    a = r(287809),
    n = r(429707),
    c = r(274303);
function A() {
    let t = (0, u.cf)([c.A, a.default], () => {
        let t = c.A.getUsers(),
            e = a.default.getCurrentUser();
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
            i.h.wait(() => {
                n.F6();
            });
        }, []),
        t
    );
}
