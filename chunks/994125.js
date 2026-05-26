s.d(e, { K: () => o });
var r = s(64700),
    u = s(17928),
    i = s(228366),
    n = s(287809),
    a = s(429707),
    c = s(274303);
function o() {
    let t = (0, u.cf)([c.A, n.default], () => {
        let t = c.A.getUsers(),
            e = n.default.getCurrentUser();
        return null == e ||
            t.some((t) => {
                let { id: s } = t;
                return s === e.id;
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
        r.useEffect(() => {
            i.h.wait(() => {
                a.F6();
            });
        }, []),
        t
    );
}
