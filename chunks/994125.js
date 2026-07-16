"use strict";
n.d(t, { K: () => d });
var i = n(64700),
    r = n(17928),
    a = n(228366),
    s = n(287809),
    l = n(429707),
    o = n(274303);
function d() {
    let e = (0, r.cf)([o.A, s.default], () => {
        let e = o.A.getUsers(),
            t = s.default.getCurrentUser();
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
            a.h.wait(() => {
                l.F6();
            });
        }, []),
        e
    );
}
