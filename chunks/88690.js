n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(964486),
    l = n(745317),
    c = n(430452),
    u = n(948641),
    d = n(985018),
    f = n(613844);
let p = 387,
    _ = 218;

function h() {
    let e = c.A.getCameraComponent(),
        t = (0, i.bG)([c.A], () => c.A.getVideoDeviceId()),
        n = u.A.useField("previewEnabled"),
        h = (0, i.bG)([c.A], () => c.A.isVideoAvailable());
    return ((0, o.l0)(() => {
        u.A.setState({
            previewEnabled: !1,
        });
    }),
    n)
        ? (0, r.jsx)("div", {
              className: f.T,
              children: (0, r.jsxs)("div", {
                  className: f.U,
                  children: [
                      (0, r.jsx)(e, {
                          deviceId: t,
                          width: p,
                          height: _,
                          disabled: !n,
                      }),
                      (0, r.jsx)(l.k, {}),
                  ],
              }),
          })
        : (0, r.jsx)("div", {
              className: f.T,
              children: (0, r.jsx)(a.m, {
                  text: h ? null : d.intl.string(d.t["8jSzSe"]),
                  children: (0, r.jsx)(s.Button, {
                      variant: "primary",
                      text: d.intl.string(d.t.JIf4v7),
                      onClick: () =>
                          u.A.setState({
                              previewEnabled: !0,
                          }),
                      disabled: !h,
                  }),
              }),
          });
}
