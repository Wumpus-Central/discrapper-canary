i.d(t, { A: () => A });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(990078),
    r = i(397927),
    a = i(964486),
    u = i(745317),
    o = i(430452),
    d = i(948641),
    _ = i(985018),
    T = i(613844);
function A() {
    let e = o.Ay.getCameraComponent(),
        t = (0, l.bG)([o.Ay], () => o.Ay.getVideoDeviceId()),
        i = d.A.useField("previewEnabled"),
        A = (0, l.bG)([o.Ay], () => o.Ay.isVideoAvailable());
    return ((0, a.l0)(() => {
        d.A.setState({ previewEnabled: !1 });
    }),
    i)
        ? (0, n.jsx)("div", {
              className: T.T,
              children: (0, n.jsxs)("div", {
                  className: T.U,
                  children: [
                      (0, n.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                      (0, n.jsx)(u.k, {}),
                  ],
              }),
          })
        : (0, n.jsx)("div", {
              className: T.T,
              children: (0, n.jsx)(s.m, {
                  text: A ? null : _.intl.string(_.t["8jSzSe"]),
                  children: (0, n.jsx)(r.Button, {
                      variant: "primary",
                      text: _.intl.string(_.t.JIf4v7),
                      onClick: () => d.A.setState({ previewEnabled: !0 }),
                      disabled: !A,
                  }),
              }),
          });
}
