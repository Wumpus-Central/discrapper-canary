"use strict";
n.d(t, { K: () => u });
var i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(287809),
    o = n(429707),
    l = n(274303);
function u() {
    let e = (0, r.cf)([l.A, a.default], () => {
        let e = l.A.getUsers(),
            t = a.default.getCurrentUser();
        return null == t ||
            e.some((e) => {
                let { id: n } = e;
                return n === t.id;
            })
            ? { isLoading: l.A.getIsValidatingUsers(), multiAccountUsers: e }
            : {
                  isLoading: l.A.getIsValidatingUsers(),
                  multiAccountUsers: [
                      {
                          id: t.id,
                          avatar: t.avatar,
                          username: t.username,
                          discriminator: t.discriminator,
                          tokenStatus: l.U.VALID,
                          pushSyncToken: null,
                      },
                      ...e,
                  ],
              };
    });
    return (
        i.useEffect(() => {
            s.h.wait(() => {
                o.F6();
            });
        }, []),
        e
    );
}
