n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    s = n(397927),
    a = n(964486),
    o = n(745317),
    c = n(430452),
    d = n(948641),
    u = n(985018),
    _ = n(613844);

function p() {
    let e = c.A.getCameraComponent(),
        t = (0, i.bG)([c.A], () => c.A.getVideoDeviceId()),
        n = d.A.useField("previewEnabled"),
        p = (0, i.bG)([c.A], () => c.A.isVideoAvailable());
    return ((0, a.l0)(() => {
        d.A.setState({
            previewEnabled: !1,
        });
    }),
    n)
        ? (0, r.jsx)("div", {
              className: _.T,
              children: (0, r.jsxs)("div", {
                  className: _.U,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: 387,
                          height: 218,
                          disabled: !n,
                      }),
                      (0, r.jsx)(o.k, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: _.T,
              children: (0, r.jsx)(l.m, {
                  text: p ? null : u.intl.string(u.t["8jSzSe"]),
                  children: (0, r.jsx)(s.Button, {
                      variant: "primary",
                      text: u.intl.string(u.t.JIf4v7),
                      onClick: () =>
                          d.A.setState({
                              previewEnabled: !0,
                          }),
                      disabled: !p,
                  }),
              }),
          });
}
