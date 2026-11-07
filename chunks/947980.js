var i = n(477900);
n(582128);
var r = n(192308),
    a = n(673953);
n.d(
    t,
    {},
    {
        A: (e) => {
            let { appName: t, iframeId: s, modalContextKey: l, permissions: o } = e,
                d = null != s ? (0, a.C6)(s) : l;
            return null === d
                ? Promise.resolve(null)
                : new Promise((e) => {
                      let a = null;
                      (0, r.mM)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e(159244),
                                  n.e(621624),
                                  n.e(499941),
                                  n.e(625460),
                              ]).then(n.bind(n, 258655));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      appName: t,
                                      permissions: o,
                                      onDecide: (e) => {
                                          a = e;
                                      },
                                  });
                          },
                          { contextKey: d, dismissable: !1, onCloseCallback: () => e(a) },
                      ).catch(() => e(null));
                  });
        },
    },
);
