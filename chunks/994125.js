r.d(e, { K: () => A });
var n = r(64700),
    s = r(17928),
    u = r(228366),
    i = r(287809),
    a = r(429707),
    c = r(274303);
function A() {
    let t = (0, s.cf)([c.A, i.default], () => {
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
        n.useEffect(() => {
            u.h.wait(() => {
                a.F6();
            });
        }, []),
        t
    );
}
