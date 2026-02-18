n.d(t, { K: () => d });
var a = n(64700),
    i = n(311907),
    s = n(73153),
    l = n(287809),
    r = n(429707),
    o = n(274303);
function d() {
    let e = (0, i.cf)([o.A, l.default], () => {
        let e = o.A.getUsers(),
            t = l.default.getCurrentUser();
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
        a.useEffect(() => {
            s.h.wait(() => {
                r.F6();
            });
        }, []),
        e
    );
}
