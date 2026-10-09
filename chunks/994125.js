r.d(e, { K: () => c });
var s = r(582128),
    n = r(17928),
    a = r(287809),
    i = r(429707),
    u = r(274303);
function c() {
    let t = (0, n.cf)([u.A, a.default], () => {
        let t = u.A.getUsers(),
            e = a.default.getCurrentUser();
        return null == e ||
            t.some((t) => {
                let { id: r } = t;
                return r === e.id;
            })
            ? { isLoading: u.A.getIsValidatingUsers(), multiAccountUsers: t }
            : {
                  isLoading: u.A.getIsValidatingUsers(),
                  multiAccountUsers: [
                      {
                          id: e.id,
                          avatar: e.avatar,
                          username: e.username,
                          discriminator: e.discriminator,
                          tokenStatus: u.U.VALID,
                          pushSyncToken: null,
                      },
                      ...t,
                  ],
              };
    });
    return (
        s.useEffect(() => {
            i.F6();
        }, []),
        t
    );
}
