"use strict";
n.d(t, { K: () => c });
var i = n(64700),
    s = n(311907),
    r = n(73153),
    l = n(287809),
    a = n(429707),
    o = n(274303);
function c() {
    let e = (0, s.cf)([o.A, l.default], () => {
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
        i.useEffect(() => {
            r.h.wait(() => {
                a.F6();
            });
        }, []),
        e
    );
}
