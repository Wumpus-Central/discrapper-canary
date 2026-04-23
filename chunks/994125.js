n.d(t, { K: () => c });
var i = n(64700),
    s = n(17928),
    l = n(228366),
    a = n(287809),
    r = n(429707),
    o = n(274303);
function c() {
    let e = (0, s.cf)([o.A, a.default], () => {
        let e = o.A.getUsers(),
            t = a.default.getCurrentUser();
        return null == t ||
            e.some((e) => {
                let { id: n } = e;
                return n === t.id;
            })
            ? { isLoading: o.A.getIsValidatingUsers(), multiAccountUsers: e }
            : {
                  isLoading: o.A.getIsValidatingUsers(),
                  multiAccountUsers: [
                      {
                          id: t.id,
                          avatar: t.avatar,
                          username: t.username,
                          discriminator: t.discriminator,
                          tokenStatus: o.U.VALID,
                          pushSyncToken: null,
                      },
                      ...e,
                  ],
              };
    });
    return (
        i.useEffect(() => {
            l.h.wait(() => {
                r.F6();
            });
        }, []),
        e
    );
}
