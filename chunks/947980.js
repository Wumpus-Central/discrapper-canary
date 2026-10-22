n.d(t, { A: () => i });
var l = n(477900);
n(582128);
var s = n(192308),
    r = n(673953);
let i = (e) => {
    let { appName: t, iframeId: i, permissions: u } = e,
        a = null != i ? (0, r.C6)(i) : void 0;
    return null === a
        ? Promise.resolve(null)
        : new Promise((e) => {
              let r = null;
              (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([n.e("159244"), n.e("499941"), n.e("959310")]).then(
                          n.bind(n, 462365),
                      );
                      return (n) =>
                          (0, l.jsx)(e, {
                              ...n,
                              appName: t,
                              permissions: u,
                              onDecide: (e) => {
                                  r = e;
                              },
                          });
                  },
                  { contextKey: a, dismissable: !1, onCloseCallback: () => e(r) },
              ).catch(() => e(null));
          });
};
